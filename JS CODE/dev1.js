// const input = require("readline-sync")
// let n = input.questionInt("enter the number");
// s = 0;
// b = n
// while(n!=0){
//     a = n%10;
//     s = s*10 + a;
//     n = Math.floor(n/10)
// }
// if (b==s){
//     console.log("yas")
// }
// else{
//     console.log("no")
// };


const input = require("readline-sync")
let a = input.questionInt("enter the number");
let b = input.questionInt("enter the number");
let m,n;
if (a>b){
    m = a;
    n = b;
}
 else{
    m = b;
    n = a;
 
 }
// while(a>b)
//  {
//   a = a-b
//  }
 while(a!=b)
 {
    if(a>b)
    {
      a = a-b
    }
    else
    {
      b = b-a
    }
 }
 {
hcf = a;
lcm = m*n/hcf;
console.log("hcf = ",hcf);
console.log("lcm = ",lcm)
 };




// const input = require("readline-sync")
// let n = input.questionInt("enter the number = ");
// i = 1;
// s = 0;
// while(i<n)
// {
//     if(n%i==0)
//     {
//         s = s + i;
//         i++
//     }
//     else
//     {i++}
// }if (n==s)
// {
//     console.log("yas")
// }else
// {
//     console.log("no")
// };