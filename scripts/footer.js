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

function bookAppointment(){
    window.location.href="register.html";
}

function displayFooter(){
    document.getElementById("workingHours").innerHTML=`The Pet Salon it opens at ${petSalon.workingHours.open} to ${petSalon.workingHours.close}`;
}

function initFooter(){
    displayFooter();
}
window.onload=initFooter();