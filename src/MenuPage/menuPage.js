function menuPageContent() {
  const content = document.querySelector("#content");
  content.textContent = "";

  const menuDiv = document.createElement("div");
  menuDiv.id = "menuDiv";

  const foodCard = document.createElement("div");
  foodCard.id = "foodCard";

  const foodImage = document.createElement("div");
  foodImage.id = "foodImage";

  const foodInfo = document.createElement("div");
  foodInfo.id = "foodInfo";

  const foodHeading = document.createElement("h3");
  foodHeading.textContent = "Chicken Momo";

  const foodText = document.createElement("p");
  foodText.textContent = "Steam momo with home made achaar";

  const price = document.createElement("h4");
  price.id = "price";
  price.textContent = "Price: Rs 350";

  foodInfo.append(foodHeading, foodText, price);
  foodCard.append(foodImage, foodInfo);
  menuDiv.append(foodCard);

  const foodCard2 = document.createElement("div");
  foodCard2.id = "foodCard";

  const foodImage2 = document.createElement("div");
  foodImage2.id = "foodImage";

  const foodInfo2 = document.createElement("div");
  foodInfo2.id = "foodInfo";

  const foodHeading2 = document.createElement("h3");
  foodHeading2.textContent = "Chatamari";

  const foodText2 = document.createElement("p");
  foodText2.textContent = "Rice Flour, Egg and minced Chicken";

  const price2 = document.createElement("h4");
  price2.id = "price";
  price2.textContent = "Price: Rs 220";

  foodInfo2.append(foodHeading2, foodText2, price2);
  foodCard2.append(foodImage2, foodInfo2);
  menuDiv.append(foodCard2);

  content.append(menuDiv);
}
export default menuPageContent;
