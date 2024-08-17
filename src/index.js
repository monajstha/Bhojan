import "./styles.css";
import homePageContent from "./HomePage/homePage";
import menuPageContent from "./MenuPage/menuPage";
import contactPageContent from "./ContactPage/contactPage";

const homeBtn = document.getElementById("homeBtn");
const menuBtn = document.getElementById("menuBtn");
const contactBtn = document.getElementById("contactBtn");
const content = document.getElementById("content");

content.addEventListener("click", () => {
  console.log("object");
});

const buttons = [homeBtn, menuBtn, contactBtn];

function setActiveButton(activeButton) {
  buttons.forEach((button) => {
    if (button === activeButton) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}

homeBtn.addEventListener("click", () => {
  homePageContent();
  setActiveButton(homeBtn);
});

menuBtn.addEventListener("click", () => {
  menuPageContent();
  setActiveButton(menuBtn);
});

contactBtn.addEventListener("click", () => {
  contactPageContent();
  setActiveButton(contactBtn);
});

// display homePage on window load
window.addEventListener("load", () => {
  //   homeBtn.focus();
  setActiveButton(homeBtn);
  homePageContent();
});
