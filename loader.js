function changeVisibility() {
  setTimeout(() => {
    document.getElementById("gallery").classList.add("active");
    document.getElementById("loader").classList.remove("active");
    document.getElementById("circle").classList.remove("active");
  }, 2000);
}

window.addEventListener("load", changeVisibility);
