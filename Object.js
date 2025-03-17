//create an object
const myObject={
    name:"Hamizan",
    age:25,
    "Interest":function(){
        console.log("I am interested in coding");
    }
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

