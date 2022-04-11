// Your code goes here

document.addEventListener("DOMContentLoaded", handleText);

function handleText() {
  const textString = (document.getElementById("text").textContent =
    "This is really cool!");

  console.log(textString);
}
