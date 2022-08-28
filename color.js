let element = document.getElementById("color-code");
let code = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const rand = () => {
  return Math.floor(Math.random() * code.length);
};
function change() {
  console.log("hello world");
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += code[rand()];
  }
  document.body.style.background = hex;
  document.body.style.transition = "all 650ms";
  element.innerHTML = hex;
  console.log(hex);
}
