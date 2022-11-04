function resize(){
    img = document.getElementById("GP");

    img.style.height = resize ? "250" : "500";
    resize = resize ? false : true;
}

let resize = false;