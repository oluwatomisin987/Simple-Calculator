"use strict";

const buttons = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");
const equalButton = document.querySelector(".equal");
const deleteButton = document.querySelector(".btn-del");
const resetButton = document.querySelector(".btn-reset");
const toggleBg = document.querySelector('.tri-state-toggle')
const toggleBtn = document.querySelector('.butto');
const firstDiv = document.querySelector('.first-div')

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // screen.value = screen.value + e. target.value;
    screen.value += e.target.value;

    console.log(screen.value);
  });
});

equalButton.addEventListener("click", () => {
  if (screen.value != "") {
    let result = eval(screen.value);
    screen.value = result;
  }
});

deleteButton.addEventListener("click", () => {
  const oldValue = screen.value;
  const newValue = oldValue.slice(0, -1);
  screen.value = newValue;
});

resetButton.addEventListener("click", () => {
  screen.value = "";
});

/////////////////////////////
// TOGGLE

// i grabbed my input elements (radio buttons) using the getElementsByClassName() method.

const buttonss = document.getElementsByClassName("butto");

// And because my buttons variable on line 1 is an htmlCollection, i wouldn’t be able to use the forEach method on it; so i created an array where i can store a non-live version of our htmlCollection using the spread operator.
var arr = [...buttonss];

arr.forEach((element, index) => {
  element.addEventListener("click", () => {
    // So the next thing i did was to add a click event listener to each of our radio button such that the opacity of any button clicked will be changed to “1”
    element.style.opacity = "1";

    if (index == 0) {
      document.getElementsByTagName("body")[0].style.backgroundColor =
        "hsl(222,26%,31%)";
        screen.style.backgroundColor = 'hsl(224, 36%, 15%)'
        screen.style.color = 'hsl(0, 0%, 100%)'
     
      equalButton.style.backgroundColor = "hsl(6, 63%, 50%)";
      equalButton.style.boxShadow = "hsl(6, 70%, 34%)";
      deleteButton.style.backgroundColor = 'hsl(225, 21%, 49%)';
      deleteButton.style.boxShadow = '2px 3px  hsl(224, 28%, 35%)'
      resetButton.style.backgroundColor = "hsl(225, 21%, 49%)";
      resetButton.style.boxShadow = "2px 3px  hsl(224, 28%, 35%)";
      buttons.forEach(btn => (btn.style.backgroundColor = 'hsl(334, 25%, 89%'));
      buttons.forEach(btn => (btn.style.boxShadow = '2px 3px hsl(28, 16%, 65%'));
      toggleBg.style.backgroundColor = "hsl(223, 31%, 20%)";
      toggleBtn.style.backgroundColor = 'red';
      firstDiv.style.color = 'white';


       
    } else if (index == 1) {
      document.getElementsByTagName("body")[0].style.backgroundColor =
        "hsl(0, 0%, 90%)";
      screen.style.backgroundColor = "hsl(0, 0%, 93%)";
      screen.style.color = "hsl(60, 10%, 19%)";

      equalButton.style.backgroundColor = "hsl(25, 98%, 40%)";
      equalButton.style.boxShadow = "hsl(25, 99%, 27%)";
      deleteButton.style.backgroundColor = "hsl(185, 42%, 37%)";
      deleteButton.style.boxShadow = "2px 3px  hsl(185, 58%, 25%)";
     resetButton.style.backgroundColor = "hsl(185, 42%, 37%)";
     resetButton.style.boxShadow = "2px 3px  hsl(185, 58%, 25%)";
     buttons.forEach(
        (btn) => (btn.style.backgroundColor = "hsl(45, 7%, 89%") );
     buttons.forEach(
        (btn) => (btn.style.boxShadow = "2px 3px hsl(35, 11%, 61%") );
         buttons.forEach((btn) => (btn.style.color = "black"));
    toggleBg.style.backgroundColor = 'hsl(0, 5%, 81%)';
    toggleBtn.style.backgroundColor = "hsl(25, 98%, 40%";
     firstDiv.style.color = "black";
    } 
    
    
    else {
      document.getElementsByTagName("body")[0].style.backgroundColor =
        "hsl(268, 75%, 9%)";
      screen.style.backgroundColor = "hsl(268, 71%, 12%)";
      screen.style.color = "hsl(52, 100%, 62%)";

      equalButton.style.backgroundColor = "hsl(176, 100%, 44%)";
      equalButton.style.boxShadow = "hsl(177, 92%, 70%)";
      deleteButton.style.backgroundColor = "hsl(281, 89%, 26%)";
      deleteButton.style.boxShadow = "2px 3px  hsl(285, 91%, 52%)";
       resetButton.style.backgroundColor = "hsl(281, 89%, 26%)";
       resetButton.style.boxShadow = "2px 3px  hsl(285, 91%, 52%)";
      buttons.forEach((btn) => (btn.style.backgroundColor = "hsl(268, 47%, 21%"));
      buttons.forEach(
        (btn) => (btn.style.boxShadow = "2px 3px hsl(290, 70%, 36%"));
        buttons.forEach (btn => btn.style.color = 'hsl(52, 100%, 62%)');
      toggleBg.style.backgroundColor = "hsl(268, 71%, 12%)";
      toggleBtn.style.backgroundColor = "white";
       firstDiv.style.color = "hsl(52, 100%, 62%)";
    }

    // Then i filtered my array (picking out the elements that were not clicked) then setting their opacity to “0”.
    arr
      .filter((item) => {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});











// var buttons = document.getElementsByClassName("button");
// var arr = [...buttons];

// arr.forEach((element, index) => {
//   element.addEventListener("click", () => {
//     element.style.opacity = "1";
//     if (index == 0) {
//       document.getElementsByTagName("body")[0].style.backgroundColor = "white";
//     } else if (index == 1) {
//       document.getElementsByTagName("body")[0].style.backgroundColor = "teal";
//     } else {
//       document.getElementsByTagName("body")[0].style.backgroundColor =
//         "rgb(92, 204, 125)";
//     }
//     arr
//       .filter(function (item) {
//         return item != element;
//       })
//       .forEach((item) => {
//         item.style.opacity = "0";
//       });
//   });
// });











// function graadingStudents (grades){

//   if (grades < 38){
//   return  grades
//   } if (grades % 5 < 3){
//  console.log (Math.ceil(grades/5)*5);
//   } else if (grades % 5 >= 3){
//     console.log(grades);
//     //  console.log(Math.ceil(grades / 5) * 5);
//   }

// }

// console.log(graadingStudents(63));

// console.log(73 % 5);

// // function sockMerchant (n, arr){

// //   for (let i = 0; i < arr.length; arr++){
// //     let count = 0;
// //     if (arr [i] === n){
// //    count++;
// //     }
// //       return count;
// //   }
// //   // return count;

// // }

// // console.log(  sockMerchant(1,  [3,2,1,1,6]) );

// // function csos (n, arr)  {

// //   const count = arr.reduce((acc, curr) => (curr === n ? acc + 1 : acc), 0);
// //   return count;
// // }

// // console.log(  csos(4, [1, 2, 3, 4, 3, 2, 1, 1]) );

// // function sockMerchant (n, ar){

// //   const socksCount = {};
// //   let noOfColors = 0;

// //   for (let i = 0; i < n; i++){
// //     let color = ar[i];
// //     if (socksCount [color]){
// //       noOfColors++;
// //       // socksCount[color] = 7;
// //     } else {
// //       socksCount[color] = 1;
// //     }
// //   }
// //   // return noOfColors;
// //   return socksCount;
// // }

// // console.log( sockMerchant(9, [1, 1, 4, 6, 5, 2, 3, 4, 5]) );
