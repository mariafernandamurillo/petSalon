function btnMenuMobile() {
    let menu = document.getElementById("navMobile"); //Primero obtener el elemento HTML

    if (menu.className == 'navMobile') { //Después se accede a sus propiedades
        menu.classList.remove('navMobile');
        menu.classList.add('hidden');
    } else {
        menu.classList.remove('hidden');
        menu.classList.add('navMobile');
    }
}