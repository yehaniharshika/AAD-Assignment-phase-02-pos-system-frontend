/*
 function generatePDF() {
    // Load the jsPDF library
    const { jsPDF } = window.jspdf;

    // Create a new instance of jsPDF
    const doc = new jsPDF();

    // Get the HTML table
    const table = document.getElementById("item-details-table");

    // Initialize the content for the PDF
    let content = "";

    // Loop through the table rows
    for (let row of table.rows) {
    let rowContent = "";
    for (let cell of row.cells) {
    rowContent += cell.innerText + "\t"; // Add cell content with tabs in between
}
    content += rowContent + "\n"; // Add a new line at the end of each row
}

    // Add the content to the PDF document
    doc.text(content, 10, 10);

    // Save the PDF document
    doc.save("item-details-report.pdf");
}

*/
