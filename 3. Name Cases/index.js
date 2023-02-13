var personsName = "ahSaN ANsaR";
console.log("Lower Case: " + personsName.toLowerCase());
console.log("Upper Case: " + personsName.toUpperCase());
var titleCaseName = personsName.toLowerCase().split(" ");
for (var i = 0; i < titleCaseName.length; i++) {
    titleCaseName[i] = titleCaseName[i][0].toUpperCase() + titleCaseName[i].slice(1);
}
console.log("Title Case: " + titleCaseName.join(" "));
