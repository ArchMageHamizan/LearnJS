//create an object
console.log("---create an object---");
const myObject={
    name:"Hamizan",
    age:25,
    "Interest":function(){
        console.log("I am interested in coding");
    }
}
const myObject2={
    name:"Irfan",
    age:25,
}
const varFetch="Interest";
//ways to access object properties
console.log("1/",myObject.name);
console.log("2/",myObject.Interest);
console.log("3/",myObject["name"]);
console.log("4/",myObject["Interest"]);
console.log("5/",myObject.varFetch); //gives us 'undefined' because it's looking for a property named 'variable' in our object
console.log("6/",myObject["varFetch"]); //gives us 'undefined' because it's looking for a property named 'variable' in our object
console.log("7/",myObject[varFetch]);
console.log("8/",myObject2.name);


//Grouping things together into objects
console.log("---Grouping things together into objects---");
const playerOne={
    name:"Hamizan",
    marker:"X"
};
const playerTwo={
    name:"Alya",
    marker:"O"
};
function printPlayerName(num,player){
    console.log(num,"/ ",player.name," marker is ",player.marker);
};
printPlayerName(1,playerOne);
printPlayerName(2,playerTwo);

//Object Constructor
console.log("---Object Constructor---");
// Use when to create multiple objects with the same properties
// Avoids having to manually create each object like above: PlayerOne and PlayerTwo
// just create objects with constructor function.

function Player(firstName,lastName,marker){ //constructor function
    this.firstName=firstName;
    this.lastName=lastName;
    this.marker=marker;
    this.sayFullName=function(){ // we can add function inside constructor function
        console.log("My name is ",this.firstName," ",this.lastName);
    };
};

const playerThree= new Player("Siti","Suraiya","S");
console.log("1/ ",playerThree.firstName,"marker is ",playerThree.marker); 
playerThree.sayFullName();