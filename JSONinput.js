var olio = {
    nimi: { firstName: "Fiat", lastName: "Bentley" }, gender: "undefined", age: 47, hobbies: "knitting, baking", member: "false"
};
console.log(olio);

var olioJSON = JSON.stringify(olio);
console.log(olioJSON);

var olio2 = {};
console.log(olio2);

olio2.firstName = "Magnus";
console.log(olio2);

olio2.lastName = "von Wright";
console.log(olio2);

olio2.firstName = "Ferdinand";
console.log(olio2);

delete olio2.firstName;
console.log(olio2);

function laheta() {
    var userInput = document.getElementById("konfig").value;
    var userInput = JSON.parse(userInput);
    console.log(userInput);
    console.log(userInput.name);
    console.log(userInput.age);
    console.log(userInput.admin);
}

/*button
function <div onclick="
   document.forms['config-form']['otsikko'].value += 'text you want to add to it'"
>button</div>*/
