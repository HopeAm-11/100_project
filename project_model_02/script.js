const button = document.querySelector('#btn');
const container = document.querySelector('#box_model');
const parent = document.querySelector('.container');
const close = document.querySelector('#remove');


button.addEventListener('click', function () {
    container.style.display = "block";
    parent.classList.remove("container");
})

close.addEventListener('click', function () {
    container.style.display = "none";
    parent.classList.add("container");

})