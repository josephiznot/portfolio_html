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
  window.scrollTo({ top: 0, behavior: "smooth" });
};
const scrollToAbout = () => {
  if (window.innerWidth <= 320) {
    window.scrollTo({ top: 430, behavior: "smooth" });
  } else if (window.innerWidth <= 768) {
    window.scrollTo({ top: 430, behavior: "smooth" });
  } else if (window.innerWidth < 1024) {
    window.scrollTo({ top: 436, behavior: "smooth" });
  } else if (window.innerWidth > 1024) {
    window.scrollTo({ top: 603, behavior: "smooth" });
  }
};
const scrollToProjects = () => {
  if (window.innerWidth <= 320) {
    window.scrollTo({ top: 2330, behavior: "smooth" });
  } else if (window.innerWidth <= 768) {
    window.scrollTo({ top: 2331, behavior: "smooth" });
  } else if (window.innerWidth < 1024) {
    window.scrollTo({ top: 1690, behavior: "smooth" });
  } else if (window.innerWidth > 1024) {
    window.scrollTo({ top: 1862, behavior: "smooth" });
  }
};
const scrollToSkills = () => {
  if (window.innerWidth <= 320) {
    window.scrollTo({ top: 1429, behavior: "smooth" });
  } else if (window.innerWidth < 768) {
    window.scrollTo({ top: 1432, behavior: "smooth" });
  } else if (window.innerWidth < 1024) {
    window.scrollTo({ top: 1189, behavior: "smooth" });
  } else if (window.innerWidth > 1024) {
    window.scrollTo({ top: 1361, behavior: "smooth" });
  }
};
const scrollToContact = () => {
  if (window.innerWidth <= 320) {
    window.scrollTo({ top: 4059, behavior: "smooth" });
  } else if (window.innerWidth <= 768) {
    window.scrollTo({ top: 4004, behavior: "smooth" });
  } else if (window.innerWidth < 1024) {
    window.scrollTo({ top: 3160, behavior: "smooth" });
  } else if (window.innerWidth > 1024) {
    window.scrollTo({ top: 3160, behavior: "smooth" });
  }
};
