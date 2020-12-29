$(document).ready(onReady)

function onReady() {
    console.log('jQ loaded');
    $('#generateBtn').on('click',  createDiv)
}

let totalClicks = 0;

function createDiv() {
    totalClicks ++ ;
    $('#container').append(`
        <div>
        <p>${totalClicks}</p>
        <button>Yellow</button>
        <button>Delete</button>
        </div>
    `);
} // end createDiv
