const minus = document.getElementsByClassName("minus")[0];
const plus = document.getElementsByClassName("plus")[0];
const data = document.getElementById("data");

var x = 0;
data.textContent = x;

minus.addEventListener("click", () => {
  x--;
  data.textContent = x;
});

plus.addEventListener("click", () => {
  x++;
  data.textContent = x;
});
