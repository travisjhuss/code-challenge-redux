$(document).ready(onReady)

function onReady() {
    console.log('jQ loaded');
    $('#generateBtn').on('click',  createDiv)
    $(document).on('click', '.yellowBtn', makeYellow)
}

let totalClicks = 0;

function createDiv() {
    totalClicks ++ ;
    $('#container').append(`
        <div class="red">
        <p>${totalClicks}</p>
        <button class="yellowBtn">Yellow</button>
        <button>Delete</button>
        </div>
    `);
} // end createDiv

function makeYellow() {
    $(this).closest('div').removeClass().addClass('yellow');
} // end makeYellow
