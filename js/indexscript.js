let img = document.getElementById("title-nav").querySelectorAll("img");
let navText = document.getElementsByClassName("nav-link");
let navbar = document.getElementsByClassName("navbar")[0];
if (window.innerWidth >= 992) {
  for(n of navText)
 {
   n.classList.remove("text-dark");
   n.classList.add("text-white");
 }
  window.onscroll = () => {
    if (scrollY >= 50) {
      document.getElementsByClassName("sticky-scroll")[0].style.display =
        "block";
      img[0].style.opacity = "1";
      img[1].style.opacity = "0";
      for (n of navText) n.classList.remove("text-white");
      navbar.style.backgroundColor = "white";
    } else {
      document.getElementsByClassName("sticky-scroll")[0].style.display =
        "none";
      img[0].style.opacity = "0";
      img[1].style.opacity = "1";
      for (n of navText) n.classList.add("text-white");
      navbar.style.backgroundColor = "transparent";
    }
  };
}
document
  .getElementsByClassName("sticky-scroll")[0]
  .addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
