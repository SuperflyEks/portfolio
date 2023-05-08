const button = document.querySelector("#home-button");

function talk(e){
    e.preventDefault();
    window.scrollTo(0, 2900)
}

button.addEventListener('click', talk);