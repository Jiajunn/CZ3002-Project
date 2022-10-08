global.LoggedIn = false;

global.IpAddress = "192.168.1.117";
//NTU ip = 10.27.9.194
//JJ house ip = 192.168.1.117
// yz school = 192.168.0.195

var today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();

global.TodayDate = year + "-" + month + "-" + day;

global.nutrients = [
  "Unsat Fats",
  "Energy",
  "Fibre",
  "Carbs",
  "Sodium",
  "Cholesterol",
  "Calcium",
  "Sugar",
  "Sat Fats",
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
