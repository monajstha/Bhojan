import "./styles.css";
import homePageContent from "./HomePage/homePage";

const homeBtn = document.getElementById("homeBtn");
homeBtn.addEventListener("click", () => {
  homePageContent();
});

console.log("Hello from Bhojan");
