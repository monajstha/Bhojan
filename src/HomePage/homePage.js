function homePageContent() {
  const content = document.querySelector("#content");
  content.textContent = "";
  //   const introContainer = document.createElement("div");
  const introDiv = document.createElement("div");
  const introImageDiv = document.createElement("div");
  introDiv.id = "introDiv";
  introImageDiv.id = "introImageDiv";
  const introHeading = document.createElement("h1");
  introHeading.textContent = "Welcome to Bhojan";
  const introText = document.createElement("p");
  introText.textContent = `Welcome to Bhojan, where tradition meets taste in every bite! Our
    chefs, with roots deep in the Himalayas, bring generations of culinary
    expertise to your table, ensuring a dining experience that's as warm
    and welcoming as the culture itself. Whether you're craving the
    comforting flavors of dal bhat or the zesty tang of chatamari,
    Nepalese Delights is your gateway to the rich heritage and diverse
    palate of Nepal. Come, join us, and savor the essence of Nepal in
    every meal!`;
  introDiv.append(introHeading, introText);
  content.append(introDiv, introImageDiv);
}
export default homePageContent;
