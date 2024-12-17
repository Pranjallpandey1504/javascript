// console.log("Today is not so cold!");
// console.log("But we still managed to come to class afte time");
// console.error("We have all 6 lectures today");
// window.alert("JavaScript seems to be fun");
//document.getElementById("myh1").textContent="JavaScript Lectures";
//document.getElementById("myp1").textContent="we just got started";

//variable - a container to hold a specific type of dataset and perform operations on it

//let x;//declaration
//x=10;//assignment
//dynamic typing
//let y;
//y="full stack developer";
//let z=9.8
//console.log(typeof x,x)
//console.log(typeof y,y)
//console.log(typeof z,z)

//let age =20
//let gpa=9.8
//let name="pranjal"
//template literal -same thing as f string in python

//console.log(`my name is ${name}, i am ${age} years old, my gpa for last semester is ${gpa}`);


// Resume data
//let name = "Pranjal Pandey";
//let exp1 = "Student";
//let about = "Hello, I am a passionate learner exploring web development and programming. I enjoy learning new technologies to improve my skills.";

// Dynamically update HTML content
//document.getElementById("myH1").textContent = `My name is ${name}`;
//document.getElementById("myExp").textContent = `Experience: ${exp1}`;
//document.getElementById("aboutMe").textContent = about;


//user input
//two ways:
//1.window prompt
//2.some action +input text box
//let name = window.prompt("Enter your name");
//console.log(name);
//document.getElementById("myH1").textContent = `Hello, ${name}`;

//name =document.getElementById("myName")
//document.getElementById("mybutton").onclick=function(){
  //  document.getElementById("content").innerHTML= document.getElementById("myName").value
//}
function show() {
    // Get the value from the input field
    let name = document.getElementById("myName").value;

    // Update the content of the <h1> element
    document.getElementById("myH1").textContent = `Hello, ${name}!`;

    // Log the name to the console
    console.log(name);
}

