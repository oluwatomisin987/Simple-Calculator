"use strict";

const buttons = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");
const equalButton = document.querySelector(".equal");
const deleteButton = document.querySelector(".btn-del");
const resetButton = document.querySelector(".btn-reset");

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
      // buttons.style.background = "red";
      equalButton.style.backgroundColor = "yellow";
      screen.style.backgroundColor = "hsl(224, 36%, 15%)";
    } else if (index == 1) {
      document.getElementsByTagName("body")[0].style.backgroundColor = "teal";
      equalButton.style.backgroundColor = "blue";
      screen.style.backgroundColor = "pink";
      //  buttons.style.backgroundColor = "hsl(225, 8%, 89%)";
    } else {
      document.getElementsByTagName("body")[0].style.backgroundColor =
        "rgb(92, 204, 125)";
      equalButton.style.backgroundColor = "green";
      screen.style.backgroundColor = "orange";
      //  buttons.style.backgroundColor = "hsl(225, 91%, 99%)";
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
