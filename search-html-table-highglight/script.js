//! This script is used to perform a search in an HTML table and highlight the matching cells

// ? Get the input field from the HTML docmunet with the ID "input-search"
const input = document.getElementById('input-search');

// ? Add an event listener to the input field to listen for input
input.addEventListener('input', searchTable);

//? Define a function called searchTable to perform the search
function searchTable() {

    // ?Get the search term entered by the user and conver it to lowercoase
    const searchTerm = document.querySelector('#input-search').value.toLowerCase();

    // ? Get all the rows of the HTML table
    const rows = document.querySelectorAll('tr');
    // ? Get all the cells of the HTML table
    const cells = document.querySelectorAll('td');

    //! if the search term is not empty

    if(searchTerm != ""){
        // ? Reset the background color of all the cells
        cells.forEach(cell => {
            cell.style.backgroundColor = "";
            cell.style.color = "";
        });

        // ! Loop through all the rows of the HTML table
        
        rows.forEach(row =>{
            // ? Get all the cells of each row
            const cells = row.querySelectorAll("td");
            //? Loop through all the cells of each row
            cells.forEach(cell => {
                // ? If the cell text content matches the search term, highlight it by changing it's background color and text color

                if(cell.textContent.toLowerCase().indexOf(searchTerm) > -1) {
                    cell.style.backgroundColor = "#f44336";
                    cell.style.color = "#fff";
                }
            });
        });
    } 
    // ! If the search term is empty
    else {
        // ? Reset the background color of all the cells
        cells.forEach(cell => {
            cell.style.backgroundColor = "";
            cell.style.color = "";
        });
    } 

}