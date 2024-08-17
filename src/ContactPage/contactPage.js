function contactPageContent() {
  const content = document.querySelector("#content");
  content.textContent = "";

  const contactDiv = document.createElement("div");
  contactDiv.id = "contactDiv";
  const aboutText = document.createElement("p");
  aboutText.textContent = `Welcome to Bhojan, where we bring the vibrant flavors of traditional
    Nepalese cuisine to your table. Nestled in the heart of the city, we are
    dedicated to providing an authentic dining experience that captures the
    rich cultural heritage and culinary artistry of Nepal. Our chefs are
    passionate about using the freshest ingredients and time-honored recipes
    to create dishes that are both flavorful and true to tradition. Whether
    you are enjoying our signature momos, savoring the spices of our dal
    bhat, or exploring other Nepalese delicacies, each meal is prepared with
    care and respect for its origins. At our restaurant, we believe in more
    than just serving food. We aim to create an atmosphere where you can
    relax, enjoy, and embark on a culinary journey through Nepal. With warm
    hospitality and a commitment to excellence, we strive to make every
    visit memorable. Thank you for choosing us, and we look forward to
    serving you again and again.`;
  //   contactDiv.append(aboutText);

  const contactCard = document.createElement("div");
  contactCard.id = "contactCard";

  const title = document.createElement("h2");
  title.id = "title";
  title.textContent = "Contact Us";

  const name = document.createElement("h3");
  name.textContent = "Bhojan";
  const email = document.createElement("p");
  email.textContent = "bhojan@reallycoolmail.com";
  contactCard.append(name, email);
  contactDiv.append(aboutText, title, contactCard);
  content.append(contactDiv);
}
export default contactPageContent;
