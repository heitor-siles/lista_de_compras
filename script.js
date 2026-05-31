const addItem = document.querySelector(".addItem");
const input = document.querySelector(".inputItem input");
const alertMessage = document.querySelector(".alert");
const listItems = document.querySelector(".listItems");
const closeButton = document.querySelector(".close");

function createNewItem(value) {
  const newItem = document.createElement("li");
  newItem.classList.add("item");

  const itemName = document.createElement("span");
  itemName.textContent = value;
  newItem.classList.add("itemName");

  const check = document.createElement("input");
  check.type = "checkbox";
  check.id = "itemCheck";

  const spanTrash = document.createElement("span");
  spanTrash.classList.add("exclude");

  const trash = document.createElement("img");
  trash.src = "./styles/assets/Frame.svg";
  trash.classList.add("trash");

  newItem.appendChild(check);
  newItem.appendChild(itemName);
  newItem.appendChild(spanTrash);
  spanTrash.appendChild(trash);
  listItems.appendChild(newItem);

  return trash;
}

addItem.addEventListener("click", (event) => {
  event.preventDefault();

  const value = input.value;

  if (value !== "") {
    createNewItem(value);
    alertMessage.classList.remove("active");
  }
});

addEventListener("click", (event) => {
  const itemClass = event.target.classList.value;
  if (itemClass === "trash" || itemClass === "exclude") {
    const trashCan = event.target;
    const parentItem = trashCan.closest(".item");
    parentItem.remove();

    alertMessage.classList.add("active");
  }
});

closeButton.addEventListener("click", () => {
  alertMessage.classList.remove("active");
});
