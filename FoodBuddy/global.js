global.LoggedIn = false;


global.IpAddress = "192.168.0.195";
//NTU ip = 10.27.9.194
//JJ house ip = 192.168.1.117
// yz school = 192.168.0.195

global.UserID = "2";

var today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();

global.TodayDate = year + "-" + month + "-" + day;

global.nutrients = [
  "Unsaturated Fats",
  "Energy",
  "Dietary Fibre",
  "Carbohydrate",
  "Sodium",
  "Cholesterol",
  "Calcium",
  "Sugar",
  "Saturated Fats",
  "Vitamin C",
  "Vitamin A",
  "Potassium",
  "Total Fat",
  "Trans Fat",
  "Vitamin D",
  "Protein",
  "Vitamin B2",
  "Zinc",
];
