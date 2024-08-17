import "./styles.css";
import homePageContent from "./HomePage/homePage";
import menuPageContent from "./MenuPage/menuPage";

window.addEventListener("load", () => homePageContent());

const homeBtn = document.getElementById("homeBtn");
homeBtn.addEventListener("click", () => {
  homePageContent();
});

const menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", () => {
  menuPageContent();
});

console.log("Hello from Bhojan");
