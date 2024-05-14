
"use strict"

window.onload = function () {
    //Name of Fuction, prefrix INIT to indicate this is the first thing to Do
    initLoadDropdownGiftIdeas();
  
    //Default option
    const giftList = document.getElementById("giftIdeas");
    // giftList.value = "Gift4";
    // giftList.value = null;
    giftList.onchange = changeTheDropDownValue;
};

const giftList = document.getElementById("giftIdeas");
function initLoadDropdownGiftIdeas() {
    // load the dropdown list
  //  let states = ["Alabama", "Alaska", "Arizona", ... ];



  let gifts = [
    { idea: "A house", value: "Gift1" },
    { idea: "A vacation", value: "Gift2" },
    { idea: "A rose", value: "Gift3" },
    { idea: "A photoalbum", value: "Gift4" }
]
 //Grab the list from HTML    
 gifts.forEach(gift  => {
     let theOption = new Option(gift.idea, gift.value); 
     // ADDing the elements to the list 
     giftList.appendChild(theOption);
 })

};
function displayItem() {
        //let selected value
        let selectedValue = giftList.value;
        //let selected value
//   let selectedValue = giftList.value;
//   let selectedIndex = giftList.selectedIndex;
//   let selectedText =  giftList.options[giftList.selectedIndex].text;
        if(selectedValue == "Gift3") {
            document.getElementById("message").innerText = "That is a wonderful rose";
        }

};
function ClearFilters() {
    const giftList = document.getElementById("giftIdeas");
    giftList.value = null;
    const searchfield = document.getElementById("mySearchField");
    searchfield.value = "";
};

function changeTheDropDownValue() {
    //grab the giftlist
    const giftList = document.getElementById("giftIdeas");
  
    //let selected value
    let selectedvalue = giftList.value;
    document.getElementById("message").innerText = selectedvalue;
};