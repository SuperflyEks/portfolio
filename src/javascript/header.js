// List Navigation
const about = document.getElementById('about');
const project = document.getElementById('project');
const contact = document.getElementById('contact');

function scrollToAbout(e) {
    // window.location.href = '#abouts';
    e.preventDefault();
    window.scrollTo(0, 920);
    // window.location.hash = 'abouts';
}

function scrollToPorfolio(e){
    // window.location.href = '#portfolios';
    e.preventDefault();
    window.scrollTo(0, 1420)
}

function scrollToContact(e){
    // window.location.href = '#contacts';
    e.preventDefault();
    window.scrollTo(0, 2960)
}

about.addEventListener("click", scrollToAbout);
project.addEventListener("click", scrollToPorfolio);
contact.addEventListener("click", scrollToContact);



// Search Bar and Button
const input = document.querySelector('.input');
const search = document.querySelector('.search');
const links = document.querySelectorAll('.name'); 

input.addEventListener("keyup", log);
search.addEventListener("click", log);

function log(e){
    e.preventDefault();
    const { value } = e.target;
    const searchQuery = value.toLowerCase();

    for (const link of links ){
        let identity = link.textContent.toLowerCase();
        let x = identity.includes(searchQuery);

        if (x){
            link.style.display = "";
        } else {
            link.style.display = "none";
        }
    } 
}
