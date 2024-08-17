import "./styles.css";
import homePageContent from "./HomePage/homePage";
import menuPageContent from "./MenuPage/menuPage";
import contactPageContent from "./ContactPage/contactPage";

window.addEventListener("load", () => homePageContent());

const homeBtn = document.getElementById("homeBtn");
homeBtn.addEventListener("click", () => {
  homePageContent();
});

const menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", () => {
  menuPageContent();
});

const contactBtn = document.getElementById("contactBtn");
contactBtn.addEventListener("click", () => {
  contactPageContent();
});

console.log("Hello from Bhojan");
