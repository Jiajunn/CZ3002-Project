global.LoggedIn = false;

global.IpAddress = "192.168.1.117";
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
  "Calcium/mg",
  "Calorie/kcal",
  "Potassium/mg",
  "Protein/g",
  "VitaminB2/mg",
  "VitaminA/mcg",
  "VitaminC/mg",
  "VitaminD/iu",
  "Sugar/g",
  "Sodium/mg",
  "Zinc/mg",
  "Carbs/g",
];
