$(document).ready(onReady)

function onReady() {
    console.log('jQ loaded');
    $('#generateBtn').on('click',  createDiv);
    $(document).on('click', '.yellowBtn', makeYellow);
    $(document).on('click', '.deleteBtn', deleteDiv)
}

let totalClicks = 0;

function createDiv() {
    totalClicks ++ ;
    $('#container').append(`
        <div class="red">
        <p>${totalClicks}</p>
        <button class="yellowBtn">Yellow</button>
        <button class="deleteBtn">Delete</button>
        </div>
    `);
} // end createDiv

function makeYellow() {
    $(this).closest('div').removeClass().addClass('yellow');
} // end makeYellow

function deleteDiv() {
    $(this).closest('div').remove();
} // end deleteBtn
