import locationData from '../public/data.json' assert {type: "json"};
const Town = (location) => {
    let currentIndex = 0;
    switch (location) {
        case "":
            currentIndex = Math.floor(Math.random() * locationData.length);
            break;
        case "Arondizuogu":
            currentIndex = 0;
            break;
        case "Aba":
            currentIndex = 1;
            break;
        case "Owerri":
            currentIndex = 2;
            break;
        case "Enugu":
            currentIndex = 3;
            break;
        case "Onitsha":
            currentIndex = 4;
            break;
        case "Warri":
            currentIndex = 5;
            break;
        case "Port Harcourt":
            currentIndex = 6;
            break;
        case "Calabar":
            currentIndex = 7;
            break;
        case "Gboko":
            currentIndex = 8;
            break;
        case "Kano":
            currentIndex = 9;
            break;
        case "Lagos":
            currentIndex = 10;
            break;
        case "Abuja":
            currentIndex = 11;
            break;
        case "Johannesburg":
            currentIndex = 12;
            break;
        case "Cairo":
            currentIndex = 13;
            break;
        case "Accra":
            currentIndex = 14;
            break;        
        case "Abidjan":
            currentIndex = 15;
            break;        
        case "Tunis":
            currentIndex = 16;
            break;        
        case "Minsk":
            currentIndex = 17;
            break;        
        case "Ontario":
            currentIndex = 18;
            break;        
        default: "Your selected location is not in the list";
            break;
    }
    return currentIndex
}
export default Town;