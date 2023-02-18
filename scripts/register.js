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
function Pet(n,a,g,b,t,gn, tp, s){
    this.name = n;
    this.age = a;
    this.gender = g;
    this.breed = b;
    this.typeOfPet = t;
    this.guardian = gn;
    this.telephone = tp;
    this.service = s;
}

//global var fot the html inputs
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputTypeOfPet = document.getElementById("typeOfPet");
let inputGuardian = document.getElementById("txtGuardian");
let inputTelephone = document.getElementById("txtTelephone");
let inputServices = document.getElementById("services");

function amountOfPets(){
    document.getElementById("amountOfPets").innerHTML = petSalon.pets.length;
    document.getElementById("amountfPets").innerHTML = petSalon.pets.length;
    if(petSalon.pets.length == 0)
    {
        document.getElementById("amountOfPets").innerHTML = "0";
        document.getElementById("amountfPets").innerHTML = "0";
    }else{
        document.getElementById("amountOfPets").innerHTML = petSalon.pets.length;
        document.getElementById("amountfPets").innerHTML = petSalon.pets.length;
    }
}

function deletePet(name)
{
    //Do not travel the list if the user says not.
    let procede = confirm("Are you sure yout to remove " + name + "?");
    if(procede){
    //alert(name);
    for(let i=0; i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        if(name === pet.name){
            //alert(`We found it! ` + i);
            petSalon.pets.splice(i,1);
            displayPetTable();
            }
        }
    }
}

function searchPet(){
    let text = document.getElementById("txtSearch").value;
    //console.log(text);
    let results = [];

    for(let i=0; i<petSalon.pets.length; i++){
        const pet = petSalon.pets[i];
        if(pet.name.toLowerCase().includes(text.toLowerCase())){
            results.push(pet);
        }
    }
    console.log(results);
}

function clearForm(){
    inputName.value = "";
    inputAge.value = "";
    inputGender.value = "";
    inputBreed.value = "";
    inputTypeOfPet = "";
    inputGuardian = "";
    inputTelephone = "";
    inputServices.value = "";
}

function isValid(aPet){
    let valid = true; //The pet is valid (the form is filled correctly)
    if(aPet.name === ""){ //If the name is not written 
        valid = false;
        inputName.classList.add("input-alert-error");
    }
    if(aPet.service === ""){
        valid = false;
        inputServices.classList.add("input-alert-error");
    }
    //Validate the owner's name and phone.
    if(aPet.guardian === ""){
        valid = false;
        inputGuardian.classList.add("input-alert-error");
    }
    if(aPet.telephone === ""){
        valid = false;
        inputTelephone.classList.add("input-alert-error");
    }
    return valid;
}

function register(){
    //create a new pet
    let newPet = new Pet(inputName.value, inputAge.value, inputGender.value, inputBreed.value, inputTypeOfPet.value, inputGuardian.value, inputTelephone.value, inputServices.value);

    //validation
    if(isValid(newPet) === true){
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
    //displayPetTable();
    displayPetCards();
}

function init(){
    //events

    //call the functions
    displayFooter();
    
    //creat objects
    let scooby = new Pet("Scooby", 60, "Male", "Dane", "Dog", "Shaggy", "555-555-555", "Grooming");
    let walter = new Pet("Walter", 4, "Male", "Mixed", "Dog", "Luis", "123 45 48 48", "Spa");
    let tato = new Pet("Tato", 1, "Male", "Mixed", "Dog","Fernanda", "123 31 31 31", "Spa");
    petSalon.pets.push(scooby, walter, tato);//add the pets in the array

    amountOfPets();
    displayPetCards();
    //displayPetTable();
}

window.onload = init();

//displayPetsNames();
/*console.log(petSalon.pets[0]); //displaying the register 1 of the object pets
console.log(petSalon.pets.length); //displaying the number of pets
console.log(petSalon.pets[2].name); //displaying the name*/ 
