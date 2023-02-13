let personsName: string = "ahSaN ANsaR";

console.log("Lower Case: " +  personsName.toLowerCase() );
console.log("Upper Case: " + personsName.toUpperCase() );

var titleCaseName : Array<string> = personsName.toLowerCase().split(" ");

    for(var i : number = 0; i< titleCaseName.length; i++){
        titleCaseName[i] = titleCaseName[i][0].toUpperCase() + titleCaseName[i].slice(1);
    }

console.log("Title Case: " + titleCaseName.join(" "));