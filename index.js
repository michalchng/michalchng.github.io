function resize(){
    img = document.getElementById("GP");

    img.style.height = resize ? "250px" : "500px";
    resize = resize ? false : true;
}

let resize = false;