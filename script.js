const addItem = document.querySelector(".addItem");
const input = document.querySelector(".inputItem input");
const alertMessage = document.querySelector(".alert");
const listItems = document.querySelector(".listItems");
const trash = document.createElement("img");
trash.src = "./styles/assets/Frame.svg";
trash.classList.add("trash");

addItem.addEventListener("click", (event) => {
  event.preventDefault();

  const value = input.value;

  if (value !== "") {
    const newItem = document.createElement("li");
    newItem.classList.add("item");

    const itemName = document.createElement("span");
    itemName.textContent = value;
    newItem.classList.add("itemName");

    const check = document.createElement("input");
    check.type = "checkbox";
    check.id = "itemCheck";

    newItem.appendChild(check);
    newItem.appendChild(itemName);
    newItem.appendChild(trash);
    listItems.appendChild(newItem);
  }
});
