const menu = document.querySelector(".menu"),
      links = document.querySelector("nav .links")



menu.addEventListener("click", () => {
    links.style.top = links.style.top == `50px` ?  "-400px" : "50px";
})