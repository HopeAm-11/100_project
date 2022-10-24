const button = document.querySelector('#btn');
const container = document.querySelector('#box_model');
const parent = document.querySelector('.container');


button.addEventListener('click', function () {
    container.style.display = "block";
    // container.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.527)), url(images/bg.jpg) no-repeat center fixed;"
    // background: -o-
    parent.classList.remove("container");
})