global.LoggedIn = false;

global.IpAddress = "192.168.50.239";
//NTU ip = 10.27.9.194
//JJ house ip = 192.168.1.117
// yz school = 192.168.0.195
//yz home = 192.168.50.239

var today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();

global.TodayDate = year + "-" + month + "-" + day;

global.nutrients = [
  "Calcium",
  "Calorie",
  "Potassium",
  "Protein",
  "VitaminB2",
  "VitaminA",
  "VitaminC",
  "VitaminD",
  "Sugar",
  "Sodium",
  "Zinc",
  "Carbs",
];
