const input = require("readline-sync")
let a = input.questionInt("enter the number = ");
let b = input.questionInt("enter the number = ");
let c = input.questionInt("enter the number = ");
let d = input.questionInt("enter the number = ");
if (a>b)
{
    max = a
    min = b
}
else 
{
    max = b
    min = a
}
if (c>d)
{
    max1 = c
    min1 = d
}
else
{
    max1 = d
    min1 = c
}
if (min>min1)
{
    max2 = min
    min2 = min1
    q = max1
}
else 
{
    max2 = min1
    min2 = min
    q = max
}
if (max2>q)
{
    console.log("th third max is = ",q)
}
else
 {  
     console.log(" is the third max:",max2)
};