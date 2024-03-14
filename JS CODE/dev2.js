// const input = require('readline-sync');
// let N = input.questionInt('Enter a number: '), i = 1;
// while (i <= N)
// {
//     var str = '', j = 1;
//     while (j <= i)
//     {
//         str += '* ', j++;  
//     }
//     console.log(str);
//     i++;
//}


// *
// * * 
// * * *
// * * * *






// const input= require("readline-sync")
// let n = input.questionInt("enter the number ");
// i = n

// while (i >= 1) {
//   let j =1;
//   let str = '';
 
//   while(j<=i){
//     str=str+"* "
//     j++
//   }
//   console.log(str)
//   i--;

// }



// * * * *
// * * *
// * * 
// *




// const input= require("readline-sync")
// let n=input.questionInt("inter the number");
// let c = 1;
// let i = 1;
// while (i <= n) {
//     let j = 1;
//     let line = "";
//     while (j <= i) {
//         line += c + " ";
//         c++;
//         j++;
//     }
//     console.log(line);
//     i++;
// }





// const input = require('readline-sync');
// let N = input.questionInt('Enter the value of N: ');
// let i = 0;

// while (i <= N) {
//     let j = 0;
//     let str = '';
//     let num = 2 * (i - 1);
//     while (j <= i) {
//         str += num + ' ';
//         num *= 2;
//         j++; 
//     }
//     console.log(str);
//     i=i+2;
// }


// const input=require("readline-sync")
// let n= input.questionInt("enter a number");
// i= 1
// while(i<=n){
//     j=1;
//     let str = '';
//     while(j<=i){
    
//     str += j
//     j++;
//     }
//     console.log(str)
//     i--
// }


// 1
// 1 2
// 1 2 3
// 1 2 3 4


// const input=require("readline-sync")
// let n= input.questionInt("enter a number");

// let i = 1; 

// while (i <= n) {
//     let j = 1;
//     let str = '';
//     while (j <= i) {
//         str += j + ' ';
//         j++;
//     }
//     j = i - 1;
//     while (j >= 1) {
//         str += j + ' ';
//         j--;
//     }

//     console.log(str);
//     i++; 
// }

// 1
// 121
// 12321
// 1234321
// 123454321




const input =require("readline-sync");
let n = input.questionInt("enter a number ");
i= 1
while(i<=n){
    let j = 1
    let str = '';
    while(j<=i)
    {
         str += '*';
         j++;
    }  
}