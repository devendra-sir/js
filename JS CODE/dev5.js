// ARRAY 

//  Q-1
// Write a program to print all the numbers from the given array using a loop.
// L = {23, 45, 32, 25, 46,33, 71, 90}


// let l= [23,45,32,23,46,33,71,90];
// for(let i = 0; i < 8; i++)
// {
//     console.log(l[i]);
// }




//Q -2  PRINT NATUREL NUMBER TILL 20
// Write a program to create an array of natural numbers till 20 and print it.

// const input = require("readline-sync");
// let n = input.questionInt
// let Arr = [];
// for (let i = 0; i <  20; i++)
// {
//    // l.push(i);
//    Arr[i]= input.questionInt("enter element ");

// }
// console.log(Arr); 






// // Q - 3 REVERSE Array
// Write a program to reverse the array and print the reversed array.


// const input = require("readline-sync");
// let N = input.questionInt("enter size ")
// const Arr = [];
// for(let i=0;i<N;i++)
// {
//    Arr[i] = input.questionInt("ENTER ELEMENT ")
// }
// for(let j=N-1;j>=0;j--)
// {
//    console.log(Arr[j]);
// }

// const input = require("readline-sync")
// let n = input.questionInt("enter a size of array ");
// let arr=[];
// let c=0
// for(let i= 0 ; i<n;i++)
// {
//     arr[i]=input.questionInt("ente ")
// }
// let i=0
// while(i<n)
// {

// }




// Q - 4
// Write a program to take size of array, array and target as
//  input from the user and check whether the target exists in this array or not.


// const input = require("readline-sync")
// let n = input.questionInt("enter a size of array ");
// let i;
// const arr=[];
// for(i = 0; i < n; i++)
// {
//    arr[i] =input.questionInt("enter element")
// }
// let target = input.questionInt("enter target =  ")
// i=0;
// let count=0;
// while(i<n){
//    if (arr[i]==target)
//    {
//       count=count+1;
//       break;
//    }
//    else
//    {
//       i=i+1;
//    }
// }
// if(count!=0){
//    console.log("yes");
// }
// else{
//    console.log("no");
// }





// Q - 5 SUM OF EVEN OR ODD NUMBER
// Write a program to print the sum of all the odd numbers and even numbers in the given array.
// Note: In the output, you should print odd numbers sum and even numbers sum in this order only.


// const input = require("readline-sync")
// let n = input.questionInt("enter a size of array ");
// let i;
// const arr =[];
// for(i = 0; i<n;i++)   
// {
//    arr[i] =input.questionInt("enter element ")
// }
// i =0; 
// let sum = 0;
// let num = 0;
// while(i<n)
// {
//    if(arr[i]%2==0){
//       sum = sum + arr[i];
      
//    } else
//    {
//       num = num + arr[i];

//    }
//    i++

// }
// console.log(sum);
// console.log(num);





// Q - 6  duplicates

// const input = require("readline-sync")
// let n = input.questionInt("enter a size of array ");
// let i;
// let arr = [];
// for(i=0; i<n; i++)
// {
//   arr[i] = input.questionInt("enter a element")
// } 
// i=0;
// while(i<n)
// {
//    let j=i+1,c=0;
//   while(j<n)
//   {
//     if (arr[i]==arr[j])
//     {
//       c++;
//     }
//     j++;
//   }
//   if(c==1)
//   {
//    console.log(arr[i]);
//   }
//   i++;
// }





// Q - 7 


// const input = require("readline-sync")
// let n = input.questionInt("enter a size of array ");
// let i;
// let arr = [];
// for(i=0; i<n; i++)
// {
//     arr[i] = input.questionInt("enter element");
// }
// let freq = 1;
// for (i = 0; i < n; i++)   
// {
//     let freq = 1;
//     if (arr[i]== -1)
//     {
//         continue;
//     }
//     for(j=i+1;j<n;j++)
//     {
//         if (arr[i]==arr[j])
//         {
//             freq++
//             arr[j]=-1
//         }
//     }
//     console.log(arr[i]+"="+freq);
// }






// Q - 8 merge arry



// const input = require("readline-sync");

// let n = input.questionInt("Enter the size of the first array: ");
// let m = input.questionInt("Enter the size of the second array: ");

// let arr = [];
// let ary = [];

// for (let i = 0; i < n; i++) {
//     arr[i] = input.questionInt("Enter an element for the first array: ");
// }
                 
// for (let j = 0; j < m; j++) {
//     ary[j] = input.questionInt("Enter an element for the second array: ");
// }
 
// const a = [...arr, ...ary];  
// console.log("Merged array:", a);

// a.sort((a, b) => a - b); 
// console.log("Sorted array:", a);



const input=require("readline-sync");
let n = input.questionInt("enter a size of array ")
let m = input.questionInt("enter a size of array ")
let i,j;
let arr =[];
let ary =[];
let arry = [];
for(i=0; i<n;i++ )
{
    arr[i]=input.questionInt("enter the 1st array element ")
}
// let j;
for (j=0;j<m; j++)
{
    ary[j]=input.questionInt("enter the 2nd array element ")
}
p=n+m;
for(i=0;i<n;i++)
{
    arry[i]=arr[i]
}
for(j=0;j<m;j++)
{
    arry[j+n]=ary[j]
}
for(i=0;i<p;i++)
{
    console.log(arry[i]);
}
//let temp;
for(i=0;i<p;i++)
{
let temp
   for(j=i+1;j<p;j++)  
   {
    if(arry[i]>arry[j])
    {
        temp=arry[i];
        arry[i]=arry[j];
        arry[j]=temp;
    }
   }
}
console.log(arry);





// Q- 9

// Write a program to take value N from the user and print the following pattern based on the user input.
// array = [2, 3, 5, 2, 1]
// >>
// >>>
// >>>>>
// >>
// >

// const input=require("readline-sync")
// let n = input.questionInt("enter the size of arry")  
// let i;
// let arr =[];
//  for (i=0; i<=n; i++)
// {
//     arr[i]=input.questionInt("enter a element ")
// }
// let j =0
// while( arr[i]==j )
// {
//     while(arr[i]>=j)
//     {
//         console.log(">");
//         j++;
//     }
    
// }i++;



// const input = require("readline-sync");

// let n = input.questionInt("Enter the size of array: ");  
// let arr = [];

// for (let i = 0; i < n; i++) {
//     arr[i] = input.questionInt(`Enter element  `);
// }

// let N = input.questionInt("Enter the value of N: "); 

// let i = 0;
// while (i < arr.length) {
//     let j = 0;
//     let str = "";
//     while (j < arr[i] ) {
//         str += ">";
//         j++;
//     }
//     console.log(str); 
//     i++;
// }
// console.log();

    

//  const input = require("readline-sync");
//  let n = input.questionInt("Enter the size of array: ");  
//  let m = input.questionInt("Enter the size of array: ");  
//  let i;
//  let arr=[];
//  for (i=0; i<m;i++)
//  {
//     for(let j=0;j<n; j++)
//     {
//         console.log(arr[i][j])
//     }
//  }
 











// const input = require("readline-sync");
//  let n = input.questionInt("Enter the number of rows: ");
//  let m = input.questionInt("Enter the number of columns: ");

// let c=1
// let arr = [];
// for (let i = 0; i < n; i++) {
//     arr[i] = [];
//     for (let j = 0; j < m; j++) {
//         arr[i][j] = c++
//     }
// }
    
//   console.log(arr)



        
    
// const input = require("readline-sync");
// let n = input.questionInt("Enter the number of rows: ");
// let m = input.questionInt("Enter the number of columns: ");
// let i;
// let k = 0;
// let arr = [];
// for (i=0;i<n;i++)
// {
//     arr[i]=[] 
//     let str = "";
//     for(let j =0; j<m; j++)
//     { if (i==0)
//         {   
//             k++
//             arr[i][j] = k
           
//         }
//         else if (i%2==0)
//         {
//           k++
          
//         arr[i][j]=k
//         str= str + k +" ";
//         }
//         else{   
//                 arr[i][j] = k
//                 str= str + k +" ";
//                 k--
//             }
    
//     }
//     k+=n
    
//     // console.log(str);
//  }
// console.log(arr);







// Q-10
 
// Write a program to add two matrices and store them in a separate matrix.


// const input = require("readline-sync");
//  let n = input.questionInt("Enter the number of rows: ");
//  let m = input.questionInt("Enter the number of columns: ");

// let Arr= [];
// let Arr2 = [];
// let Arr3 =[];
// for(let i=0;i<n;i++)
// {
//     Arr[i]=[];
//     for(let j=0;j<m;j++)
//     {
//         Arr[i][j]=input.questionInt("enter ele 1st ");
//     }
// }
// for(let i=0;i<n;i++)
// {    Arr2[i]=[]
//     for(let j=0; j<m; j++)
//     {
//         Arr2[i][j]= input.questionInt("enter ele 2nd ")
//     }
// }
//   for (let i =0;i<n;i++)
//   {
//     Arr3[i]=[];
//     for(let j= 0;j<m;j++)
//     {
//         k = Arr[i][j]+Arr2[i][j]
//         Arr3[i][j]=k
//     }

//   }
//   console.log(Arr3);



 // Write a program to subtract two matrices and store them in a separate matrix.



// const input = require("readline-sync");
// let n = input.questionInt("Enter the number of rows: ");
// let m = input.questionInt("Enter the number of columns: ");
// let arr =[];
// let arr2 =[];
// let arr3 =[];
// for(let i=0;i<n;i++)
// {
//     arr[i]=[];
//     for(let j=0;j<m;j++)
//     {
//         arr[i][j]=input.questionInt("enter a element of 1st matrix ")
//     }
// }
// for (let i=0;i<n;i++)
// {
//     arr2[i]=[];
//     for(let j=0;j<m;j++)
//     {
//         arr2[i][j]=input.questionInt("enter a element of 2nd matrix ")
//     }
// }  
//   for (let i =0;i<n;i++)
//   {
//     arr3[i]=[];
//     for(let j= 0;j<m;j++)
//     {
//         k = arr[i][j]-arr2[i][j]
//         arr3[i][j]=k
//     }

//   }
//   console.log(arr3);