const App = document.getElementById("app");
const viewResultName = document.getElementById("view-result-name");
const viewResultCode = document.getElementById("view-result-code");
const button = document.getElementById("btn");

let x = 0;
const colors = [
  "#087474",
  "#FC3567",
  "#955BFF",
  "#BEFDA9",
  "#EFA009",
  "#0C1C0B",
];
const colorsNames = [
  "Dark Blue",
  "Caramel Red",
  "Purple",
  "Green",
  "Orange",
  "Black",
];
App.style.backgroundColor = colors[x];
viewResultName.textContent = colorsNames[x];
viewResultCode.textContent = colors[x];
button.style.backgroundColor = colors[x]

button.addEventListener("click", () => {
  x += 1;
  x >= colors.length ? (x = 0) : (x = x);
  App.style.backgroundColor = colors[x];
  viewResultName.textContent = colorsNames[x];
  viewResultCode.textContent = colors[x];
  button.style.backgroundColor = colors[x]
  colorsNames[x].toLocaleLowerCase() === "black"
    ? (App.style.color = "#FFFFFF")
    : (App.style.color = "initial");
});
