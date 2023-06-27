//Get all of the detail items from the DOM
const detailsItems = document.querySelectorAll(".detail-item");
//Loop through the items
detailsItems.forEach(item => {
  //Set a click event for each item
  item.addEventListener("click", () => {
    //Select the details element from each element
    const details = item.lastElementChild;
    //Toggle open classes
    details.classList.toggle("details-open");
    item.classList.toggle("detail-item-active");
  });
});