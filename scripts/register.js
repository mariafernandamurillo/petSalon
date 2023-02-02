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
        {
            name: "Scooby",
            age: 60,
            gender: "Male",
            breed: "Dane",
            service: "Grooming"
        },
        {
            name: "Scrapy",
            age:50,
            gender: "Male",
            breed: "Mixed",
            service: "Vaccines"
        },
        {
            name: "Speey Gonzales",
            age:70,
            gender: "Male",
            breed: "Mixed",
            service: "Nails cut"
        }
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

displayPetsNames();

displayFooter();

/*console.log(petSalon.pets[0]); //displaying the register 1 of the object pets
console.log(petSalon.pets.length); //displaying the number of pets
console.log(petSalon.pets[2].name); //displaying the name*/

