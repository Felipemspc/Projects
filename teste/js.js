function change() {
  let body = document.querySelector("body");
  let footer = document.querySelector("footer");
  let button = document.querySelector("button");

  if (body.style.backgroundColor === "black") {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    button.innerHTML = "Night Time";
    footer.style.color = "black";
  } else {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    footer.style.color = "white";
    button.innerHTML = "Day Time";
  }
}
