function resize(){
    img = document.getElementById("GP");

    img.style.height = bool ? "250" : "500";
    bool = bool ? false : true;
}

let bool = false;
