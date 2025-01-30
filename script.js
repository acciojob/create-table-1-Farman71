function insert_Row() {
    let tab = document.getElementById("sampleTable"); // Get the table
    let row = tab.insertRow(0); // Create a new row at the top

    let cell1 = row.insertCell(0); // Create first cell
    let cell2 = row.insertCell(1); // Create second cell

    cell1.textContent = "New Cell1"; // Set text for first cell
    cell2.textContent = "New Cell2"; // Set text for second cell
}