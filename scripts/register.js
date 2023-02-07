//Object literal
/*let student1 = {
    name: "Jessica",
    age: 99,
    gpa: 3.9,
    address:{
        country: "USA",
        city: "San Diego",
        zip: "22117"
    }
}

let student2 = {
    name: "Ivanna",
    age: 98,
    gpa:3.8
}*/

let petSalon = {
    name: "The Fashion Pet",
    phone: "555-555-555",
    workingHours: {
        open: "9:00 a.m.",
        close: "9:00 p.m."
},
    address:{
        street:"Palm ave",
        zip: "22345",
        city:"San Diego"
    },
    pets:[

    ]
}

function displayFooter(){
    document.getElementById("workingHours").innerHTML=`
    ${petSalon.name} it opens at ${petSalon.workingHours.open} to ${petSalon.workingHours.close}`;
}

/*Assigment 1*/
function displayPetsNames(){
    for(let i=0; i < petSalon.pets.length; i++){
        console.log(petSalon.pets[i].name);
    }

    alert("Hey! " + petSalon.name + ". You have " + petSalon.pets.length + " pets today.");
}

//this is the contructor
function Pet(n,a,g,b,t,s){
    this.name = n;
    this.age = a;
    this.gender = g;
    this.breed = b;
    this.typeOfPet = t;
    this.service = s;
}

//global var fot the html inputs
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputTypeOfPet = document.getElementById("typeOfPet");
let inputServices = document.getElementById("services");

function amountOfPets(){
    document.getElementById("amountOfPets").innerHTML = petSalon.pets.length;
    if(petSalon.pets.length == 0)
    {
        document.getElementById("amountOfPets").innerHTML = "0";
    }else{
        document.getElementById("amountOfPets").innerHTML = petSalon.pets.length;
    }
}

function clearForm(){
    inputName.value = "";
    inputAge.value = "";
    inputGender.value = "";
    inputBreed.value = "";
    inputTypeOfPet = "";
    inputServices.value = "";
}

function register(){
    console.log("Register a new pet");
    console.log(inputName.value, inputAge.value, inputGender.value, inputBreed.value, inputTypeOfPet.value, inputServices.value);
    //create a new pet
    let newPet = new Pet(inputName.value, inputAge.value, inputGender.value, inputBreed.value, inputTypeOfPet.value, inputServices.value);
    //display the pet on the console
    console.log(newPet);
    //push the pet into the array
    petSalon.pets.push(newPet);
    //display the number of registeres pets
    if(petSalon.pets.length > 1){
        alert(`You have ${petSalon.pets.length} pets in the salon.`);
    }else{
        alert(`You have ${petSalon.pets.length} pet in the salon.`);
    }
    clearForm();
    amountOfPets();
}

function init(){
    //events

    //call the functions
    displayFooter();
    

    //creat objects
    let scooby = new Pet("Scooby", 60, "Male", "Dane", "Dog", "Grooming");
    let walter = new Pet("Walter", 4, "Male", "Mixed", "Dog", "Spa");
    let tato = new Pet("Tato", 1, "Male", "Mixed", "Dog", "Spa");
    petSalon.pets.push(scooby, walter, tato);//add the pets in the array

    amountOfPets();
}
window.onload = init();

//displayPetsNames();
/*console.log(petSalon.pets[0]); //displaying the register 1 of the object pets
console.log(petSalon.pets.length); //displaying the number of pets
console.log(petSalon.pets[2].name); //displaying the name*/

