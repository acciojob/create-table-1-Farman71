function insert_Row() {
    let tab = document.getElementById("sampleTable"); // Get the table
    let row = document.createElement("tr"); // Create a new row

    let cell1 = document.createElement("td"); // Create first cell
    let cell2 = document.createElement("td"); // Create second cell

    cell1.textContent = "New Cell1"; // Set text for first cell
    cell2.textContent = "New Cell2"; // Set text for second cell

    row.appendChild(cell1); // Append first cell to row
    row.appendChild(cell2); // Append second cell to row

    // Insert the new row at the top
    tab.insertBefore(row, tab.firstChild);
}
