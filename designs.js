// Adding an event listener for when the user clikcs the submit button on
// the form. We declare numOfRows and numOfCells constant variables inside
// our event listener to capture what the users submit as inputHeight and
// inputWidth and we then pass these two to our makeGrid() function as
// parameters that will be ultimately used to draw our table. We should also
// prevent the default behavior of submit button otherwise it will reset
// our table immidiately after it is created.

document.getElementById('sizePicker').addEventListener('submit', function(event) {
    event.preventDefault();
    const numOfRows = document.getElementById("inputHeight").value;
    const numOfCells = document.getElementById("inputWidth").value;
    makeGrid(numOfRows, numOfCells);
})

// Now, we declare our main function to manipulate user input

function makeGrid(rows, cells) {
    // First we save the contents of our table element in HTML into a constant
    // variable called 'table' using its unique id which is 'pixelCanvas' in
    // order to manipulate its contents.

    const table = document.getElementById('pixelCanvas');

    // This line is used to delete the table as soon as we start using This
    // function. Though it does not have any obvious effect when you use the
    // function for the first time, if you forget to put it and then try to
    // add new height and width and press submit button again; it will add
    // the new table to the table that was previously drawn instead of making
    // only the new table. So we use this code to just reset everything each
    // time we use this function.

    table.innerHTML = '';

    // We use this nested for loop to loop over the inserted height and Width
    // amounts by the user. The outer loop add rows based on the 'height' value
    //  inserted, while the inner loop adds cells to each row based on the
    // 'width' value inserted. we should save the values of newly created rows
    // and cells into 'let' variables so we can use them inside the scope of our
    // loop. It's important to use 'let' variables here instead of 'var',
    // otherwise you will only be limited to the last created cell when you
    // want to manipulate cell colors later.

    for (let i = 0; i < rows; i++) {
        let row = table.insertRow(i);
        for (let j = 0; j < cells; j++) {
            let cell = row.insertCell(j);

            // Now we can target each cell by putting an event listener for
            // clikcs by the user which runs our function to manipulate the
            // color of that particular cells clicked by the mouse. Here we
            // declare our color varibale inside our addColor() function
            // because otherwise we should wait for the re-submit for the color
            // to change even though we have picked a different color. By
            // declaring the color variable inside our function, now any change
            // of the color will be instantly applied. The logic behind the
            // function is simply that it checks to see wehether the clicked
            //cell has any background color. If it has, it will reset that
            // to no background color. This way, if the user changes his/her
            // mind and wanted to deselct a cell, he/she can simply do that
            // by clicking it. The logic also changes the background color of
            // the cell to that of the selected color if it's an empty cell. 

            cell.addEventListener('click', function addColor() {
                var color = document.getElementById('colorPicker').value;
                if (cell.style.backgroundColor != '') {
                    cell.style.backgroundColor = '';
                } else {
                    cell.style.backgroundColor = color;
                }
            });
        }
    }
}
