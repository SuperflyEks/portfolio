const hire = document.querySelector("#hire-button");
const port = document.querySelector("#port-button");

function one(e){
    e.preventDefault();
    window.scrollTo(0, 2900)
}

function two(e){
    e.preventDefault();
    window.scrollTo(0, 1400)
}

hire.addEventListener('click', one);
port.addEventListener('click', two);