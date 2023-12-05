import daisyui from "daisyui";
import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import locationData from "./public/data.json" assert { type: "json" };
import Town from './views/town.js'
// console.log(Town())

// define port and create server
const app = express();
const port = process.env.PORT || 3000;

// set up middleware(s)
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/static", express.static("public"));

// set default view engine
app.set("view engine", "ejs");

// render homepage showing random location's data
app.get("/", async (req, res) => {
    
  const randomIndex = Math.floor(Math.random() * locationData.length);
  let longitude = locationData[randomIndex].longitude;
  let latitude = locationData[randomIndex].latitude;
  try {
    const result = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,rain,showers,precipitation,wind_speed_10m&timezone=CET`
    );
    res.render("index.ejs", { currentWeather: result.data, town: locationData[randomIndex].town });
  } catch (error) {
    console.log(error.message);
    res.status(400).send("server unavailable");
  }
});

// bring in user selected city/town, call Town function to return the matching index
app.post("/", async (req, res) => { 
  const currentIndex = Town(req.body.town);
  const longitude = locationData[currentIndex].longitude;
  const latitude = locationData[currentIndex].latitude;
  try {
    const result = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=apparent_temperature_max,apparent_temperature_min,rain_sum,showers_sum&timezone=CET`
    );
    console.log(result.data);
    res.render("index.ejs", { currentWeather: result.data, town: locationData[currentIndex].town });
  } catch (error) {
    console.log(error.message);
    res.status(400).send("Server unreachable");
  }
});

// Start server
app.listen(port, () => {
  console.log(`server running on port ${port}.`);
});
