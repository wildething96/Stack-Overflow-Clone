let buttons = [];
var searchbar = document.getElementById("searchBar");

for (let i = 1; i < 6; i++) {
  buttons.push(document.getElementById("btn" + String(i)));
  console.log(i);
}

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", () => {
    remove();
    button.classList.add("selected");
  });
});

function remove() {
  buttons.forEach((button) => button.classList.remove("selected"));
}

searchbar.addEventListener("click", () => {
  searchbar.classList.add("selected");
});

document.addEventListener("click", function (event) {
  var isClickInside = searchbar.contains(event.target);

  if (!isClickInside) {
      searchbar.classList.remove("selected");
    };
});
