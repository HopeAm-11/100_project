const answerContainer = document.querySelector('#reveal');
const parentContainer = document.querySelector('#main'); // parent of sections 
const sections = document.querySelector('#section');
const section = document.querySelectorAll('#section');

// const icon = document.querySelectorAll('#icons');

// sections.addEventListener('click', () => {

//     answerContainer.style.display = 'block'

// })


parentContainer.addEventListener('click', function (e) {
    const target = e.target;
    console.log(target)


    if (target.matches('#icons')) {
        if (answerContainer.style.display = 'none') {
            e.target.parentNode.parentNode.lastElementChild.style.display = 'block'

        } else {
            e.target.parentNode.parentNode.lastElementChild.style.display = 'none'

        }
    }

})



// parentContainer.addEventListener('click', (event) => {
//     accordion(event);
// });



// function accordion() {
//     const btn = event.target.closest('[accordion-trigger]');
//     const expanded = btn.getAttribute('aria-expanded') === 'true';
//     const target = btn.parentNode.nextElementSibling;

//     btn.setAttribute('aria-expanded', !expanded);
//     target.hidden = expanded;
// }







// parentContainer.addEventListener('click', function (e) {
//     let target = e.target; // where was the click?
//     if (target.nodeName === 'i') {
//         // const parent = target.closest('.hide');
//         const panels = container.querySelectorAll('.hide');
//         panels.forEach(panel => panel.classList.remove('hide'));


//         // container.style.display = 'block';
//         // main.children[0].style.display = 'block';
//         // container.classList.remove('hide');

//         console.log(target)

//     }
// });