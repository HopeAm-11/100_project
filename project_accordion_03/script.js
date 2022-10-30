const answerContainer = document.querySelector('#reveal');
const parentContainer = document.querySelector('#main'); // parent of sections 
const sections = document.querySelector('#section');
const section = document.querySelectorAll('#section');

const icon = document.querySelector('#icons');

// icon.addEventListener('click', () => {
//     if (answerContainer.classList == 'hide') {
//         answerContainer.classList.remove("hide");
//     } else {
//         answerContainer.classList.add("hide");

//     }
// })
var i;

for (i = 0; i < section.length; i++) {
    section[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        // console.log(this) the section that been clicked 
        // this.classList.toggle("active"); // remove and add the class of the selected section 
        var reveal = this.lastElementChild; // get section last child 
        if (reveal.style.display === "block") {
            reveal.style.display = "none";
            reveal.classList.remove('effect');
            // reveal.style.animation = 'svg-color 5s linear 1 1s';

        } else {
            reveal.style.display = "block";
            reveal.classList.add('effect');


        }
    });
}

// parentContainer.addEventListener('click', function (e) {
//     const target = e.target;
//     console.log(target)


//     if (target.matches('#icons')) {

//         if (answerContainer.style.display = 'none') {
//             e.target.parentNode.parentNode.lastElementChild.style.display = 'block'

//         } else {
//             e.target.parentNode.parentNode.lastElementChild.style.display = 'none'

//         }
//     }

// })