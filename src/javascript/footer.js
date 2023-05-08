//LINKS
const aboutLink = document.getElementById('link-about');
const portfolioLink = document.getElementById('link-project');
const testimonialLink = document.getElementById('link-testimonial');

function scrollTo(e){
    window.scroll({
        left: 0,
        top: e.offsetTop
    });
}

aboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    let linAbout = document.getElementById('abouts');
    scrollTo(linAbout);
});

portfolioLink.addEventListener('click', (e) => {
    e.preventDefault();
    let linPort = document.getElementById('portfolios');
    scrollTo(linPort);
})

testimonialLink.addEventListener('click', (e) => {
    e.preventDefault();
    let linTest = document.getElementById('testimonials');
    scrollTo(linTest);
})



//UPWARD BUTTON
const upButton = document.querySelector('.upwardButton');

const goToTop = () => {
    document.body.scrollIntoView({
        behavior: "smooth",
    });
};

upButton.addEventListener("click", goToTop);