function displayPetCards(){
    //get the DIV form from the HTML
    const DIV = document.getElementById("cardPet");
    let card = "";
    //travel the array of pets
    for(let i=0; i<petSalon.pets.length; i++){
        let pet = petSalon.pets[i];

        //create the card
        card += `
        <div class="pet">
            <p class="petsName">${pet.name}</p>
            <p><span class="cardAttributes"> Age:</span> ${pet.age}</p>
            <p><span class="cardAttributes"> Gender:</span> ${pet.gender}</p>
            <p><span class="cardAttributes"> Breed:</span> ${pet.breed}</p>
            <p><span class="cardAttributes"> Type:</span> ${pet.typeOfPet}</p>
            <p><span class="cardAttributes">Guardian:</span> ${pet.guardian}</p>
            <p><span class="cardAttributes"> Phone:</span> ${pet.telephone}</p>
            <p><span class="cardAttributes"> Service:</span> ${pet.service}</p>
        </div>
        `;

        //Try to show the pets in a table, not in a card. 

        console.log(card);
    }
    
    //create the card tmp (template)
    //add the card into the DIV
    DIV.innerHTML=card;
}

function displayPetTable(){
    const tbody = document.getElementById("tablePet");
    let rows = ""; //all the news tr that we are creating

    for (let i=0; i<petSalon.pets.length; i++){
        let pet = petSalon.pets[i];
        rows += `
        <tr>
            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.gender}</td>
            <td>${pet.breed}</td>
            <td>${pet.typeOfPet}</td>
            <td>${pet.guardian}</td>
            <td>${pet.telephone}</td>
            <td>${pet.service}</td>
            <td onClick="deletePet('${pet.name}')"><button class="btn btn-sm btn-outline-danger">Remove</button></td>
        </tr>`;
    }
    tbody.innerHTML = rows;
    console.log(rows);
}