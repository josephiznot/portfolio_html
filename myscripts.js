var openMenu = false;
var scrollHeight;

function alertMe() {
  alert("fly you fools");
}

const dropDownMenu = () => {
  openMenu = !openMenu;
  if (openMenu) {
    document.getElementById(
      "drop-down-menu"
    ).style.transform = `translateY(calc(100vh + 90px))`;
  } else {
    document.getElementById("drop-down-menu").style.transform =
      "translateY(-100vh)";
  }
  console.log(openMenu);
};
// window.mouse.scroll(handleScrollChange());
// document.body.onscr(handleScrollChange());
const handleScrollChange = () => {
  scrollHeight = window.scrollY;
  console.log(window.scrollY);
};

const closeMenu = () => {
  openMenu = !openMenu;
};
