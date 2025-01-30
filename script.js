function insert_Row() {
    let tab=document.getElementById("sampleTable")
    //Write your code here
    let row=document.createElement("tr")
    let cell1=document.createElement("td")
    let cell2=document.createElement("td")
    cell1.textContent="New Cell1"
    cell2.textContent="New Cell2"
    row.appendChild(cell1)
    row.appendChild(cell2)
    tab.appendChild(row)
    tab.insertBefore(row,tab.firstChild)
}
