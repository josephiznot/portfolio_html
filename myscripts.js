var openMenu = false;
var scrollHeight;

function alertMe() {
  alert("fly you fools");
}

const dropDownMenu = cb => {
  openMenu = !openMenu;
  if (openMenu) {
    document.getElementById(
      "drop-down-menu"
    ).style.transform = `translateY(calc(100vh + 90px))`;
  } else {
    document.getElementById("drop-down-menu").style.transform =
      "translateY(-100vh)";
  }
  if (cb) {
    cb();
    console.log("hit");
  }
};

const handleScrollChange = () => {
  scrollHeight = window.scrollY;
  console.log(window.scrollY);
};

const closeMenu = () => {
  openMenu = !openMenu;
};
const scrollToHome = () => {
  if ((window.innerWidth = 320)) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};
const scrollToAbout = () => {
  if ((window.innerWidth = 320)) {
    window.scrollTo({ top: 430, behavior: "smooth" });
  }
};
const scrollToProjects = () => {
  if ((window.innerWidth = 320)) {
    window.scrollTo({ top: 2030, behavior: "smooth" });
  }
};
const scrollToSkills = () => {
  if ((window.innerWidth = 320)) {
    window.scrollTo({ top: 1130, behavior: "smooth" });
  }
};
const scrollToContact = () => {
  if ((window.innerWidth = 320)) {
    window.scrollTo({ top: 2704, behavior: "smooth" });
  }
};
