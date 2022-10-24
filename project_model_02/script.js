const button = document.querySelector('#btn');
const container = document.querySelector('#box_model');
const parent = document.querySelector('.container');


button.addEventListener('click', function () {
    container.style.display = "block";
    parent.classList.remove("container");
})