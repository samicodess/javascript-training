//! create an array
var myArr = ["AA", "BB", "CC", "DD", "EE", "FF", "GG" ];

//! add element to the array

function addElement() {
    // ?get the input value
    var txt = document.getElementById('txt').value;
    // ? add the value to the array
    myArr.push(txt);
    // display the array elements in p
    document.getElementById('pgh').innerHTML = myArr;
}

//! search and delete array element

function searchAndDeleteElement() {
    // ?get the input value
    var txt = document.getElementById('txt').value;

    //? get the value index on the array
    var index = myArr.indexOf(txt);

    // ? if the element exist
    if(index !== -1 ) {
        //? remove the element from the array
        //! splice(start index, count)
        myArr.splice(index, 1);
        document.getElementById('pgh').innerHTML = myArr;
    } 

    //? if the element not exist
    else {
        alert("Not Found");
    }
}