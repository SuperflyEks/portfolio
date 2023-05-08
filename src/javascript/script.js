// function reveal() {
//     const reveals = document.querySelectorAll(".reveal");

//     for (let i = 0; i < reveals.length; i++) {
//         const windowHeight = window.innerHeight;
//         const elementTop = reveals[i].getBoundingClientRect().top;
//         const elementVisible = 150;

//         if (elementTop < windowHeight - elementVisible) {
//         reveals[i].classList.add("active");
//         } else {
//         reveals[i].classList.remove("active");
//         }
//     }
// }

//window.addEventListener("scroll", reveal);

const boxes = document.querySelectorAll(".reveal");

    const checkBoxes = () => {
    const triggerBottom = (window.innerHeight / 5) * 4;

    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
        box.classList.add("show");
        } else {
        box.classList.remove("show");
        }
    });
    };

    checkBoxes();

    window.addEventListener("scroll", checkBoxes);