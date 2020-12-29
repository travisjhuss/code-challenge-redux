$(document).ready(onReady)

function onReady() {
    console.log('jQ loaded');
    $('#generateBtn').on('click',  createDiv)
}

function createDiv() {
    $('#container').append(`
        <div>TEST</div>
    `);
} // end createDiv
