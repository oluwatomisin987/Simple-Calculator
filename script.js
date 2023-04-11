const buttons = document.querySelectorAll(".btn");
const screen = document.querySelector('.screen');
const equalButton = document.querySelector('.equal');
const deleteButton = document.querySelector('.btn-del');
const resetButton = document.querySelector('.btn-reset');


buttons.forEach(btn => {
  btn.addEventListener('click',  (e) =>{
    // screen.value = screen.value + e. target.value;
  screen.value += e.target.value;
  
  console.log(screen.value);
  });
});


equalButton.addEventListener('click', () =>  {

  if (screen.value != ''){
    let result = eval(screen.value)
    screen.value = result;
  }
})


deleteButton.addEventListener('click', () => {
  const oldValue = screen.value;
  const newValue = oldValue.slice(0, -1);
  screen.value = newValue;
})


resetButton.addEventListener('click', () =>{

screen.value = '';
})

























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