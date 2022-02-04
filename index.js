const x = document.getElementById("main");
x.remove();

const element = document.createElement("h1");
document.body.append(element);
const newHeader = document.querySelector("h1");
newHeader.textContent = "YOUR-NAME is the champion";
newHeader.id = "victory";


