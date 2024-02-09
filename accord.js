const accord = document.getElementsByClassName("content");
console.log(accord);
for (let i = 0; i < accord.length; ++i) {
  accord[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
