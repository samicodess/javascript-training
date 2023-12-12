const inputText = document.getElementById("txt");
let items = document.querySelectorAll("#list li");
let tab = [];
let index = -1;

//! get the selected li index using array, populate array with li values

for (let i = 0; i < items.length; i++) {
  tab.push(items[i].innerHTML);
}

// ! Get li index onclick

for (let i = 0; i < items.length; i++) {
  items[i].onclick = function () {
    index = tab.indexOf(this.innerHTML);
    console.log(this.innerHTML + "INDEX =" + index);
    //? set the selected li value into input text
    inputText.value = this.innerHTML;
  };
}

function refreshArray() {
  //! clear array
  tab.length = 0;
  items = document.querySelectorAll("#list li");
  //? fill array
  for (let i = 0; i < items.length; i++) {
    tab.push(items[i].innerHTML);
  }
}
function addLI() {
    const listNode = document.getElementById("list");
    const inputValue = inputText.value.trim(); // Trim whitespace from the input
  
    if (inputValue !== "") { // Check if the input is not empty
      const textNode = document.createTextNode(inputValue);
      const liNode = document.createElement("li");
  
      liNode.appendChild(textNode);
      listNode.appendChild(liNode);
  
      refreshArray();
  
      liNode.onclick = function () {
        index = tab.indexOf(liNode.innerHTML);
        inputText.value = liNode.innerHTML;
      };
    } else {
      //! Handle case when input is empty (you can alert the user or handle it as needed)
      alert("Please enter a value before adding!");
    }
  }
function editLI() {
  // edit the selected li using input text
  items[index].innerHTML = inputText.value;
  refreshArray();
}

function deleteLI() {
  refreshArray();
  if (items.length > 0) {
    items[index].parentNode.removeChild(items[index]);
    inputText.value = "";
  }
}
