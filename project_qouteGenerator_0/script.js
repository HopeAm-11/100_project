const qoute = document.querySelector('#qoute');
const authors = document.querySelector('#authors');
const button = document.querySelector('#gen_btn');

// create an empty array

const myQoutes = [];
// let newOrder = myQoutes.sort(() => 0.5 - Math.random());




// create qoutes objects

const qoute1 = {
    qoute: "Education is the most powerful weapon which you can use to change the world.",
    author: "Nelson Mandela"
};
const qoute2 = {
    qoute: "There is always light. If only we're brave enough to see it. If only we're brave enough to be it.",
    author: "Amanda Gorman"
};
const qoute3 = {
    qoute: "If you want to lift yourself up, lift up someone else.",
    author: "Booker T. Washington"
};
const qoute4 = {
    qoute: "I have learned not to allow rejection to move me.",
    author: "Cicely Tyson"
};

// push these objects into array 

myQoutes.push(qoute1, qoute2, qoute3, qoute4);

// create a function that gives random qoute and changed the content of the document

function getRandom() {

    let item = myQoutes[Math.floor(Math.random() * myQoutes.length)];

    if (item.qoute == qoute.textContent) {
        let item1 = myQoutes[Math.floor(Math.random() * myQoutes.length)];
        item = item1;
        qoute.textContent = item1.qoute;
        authors.textContent = item1.author;
        console.log(item);
    } else {
        qoute.textContent = item.qoute;
        authors.textContent = item.author;
        console.log(item);

    }



}

// add the event listener to the button
button.addEventListener('click', getRandom);