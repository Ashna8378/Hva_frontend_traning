// Change the Text Content of an Element on Button Click

const para1 = document.getElementById("para1");
const button = document.getElementById("button1"); // Updated ID

button.addEventListener("click", () => {
    para1.textContent = "Text has been changed";
});

// Change the Style of an Element on Mouseover

const div = document.getElementById("div");

div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "yellow";
    div.style.color = "blue";
    
});




// Use innerHTML to Insert HTML Content Dynamically

const btn2 = document.getElementById("btn2");
const htmlContentDiv = document.getElementById("htmlContent");

btn2.addEventListener("click", () => {
    htmlContentDiv.innerHTML = `
        <h2>Dynamically Inserted Heading</h2>
        <p>This is a dynamically added paragraph using innerHTML.</p>
    `;
});

// Toggle the Visibility of an Element

const para3 = document.getElementById("para3");
const btn3 = document.getElementById("btn3");

btn3.addEventListener("click", () => {
    if (para3.style.display === "none") {
        para3.style.display = "block";
    } else {
        para3.style.display = "none";
    }
});
