const inputForm = document.getElementById("input-form")
const inputBox = document.getElementById("input-field")
const outputBox = document.getElementById("output-field")


inputForm.addEventListener('submit', event => {
    let name = inputBox.value;
    event.preventDefault();
    outputBox.innerHTML="Hello, "+ name + "!";
});