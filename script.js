// //exercise 1
var myarr = [1,2,3,4,]
console.log(Array.isArray(myarr));


//exercise 2
var myarr1 = [1,2,3,[4,5]]
console.log(myarr1.flat());

//exercise 3
var myarr3 = ["Anna", "Mari","Nino"]
console.log(myarr3[myarr3.length-1]);

//exercise 4
var myArr4 = [1, true, undefined, null];
var mappedArr = myArr4.map((element) => String(element))
console.log(mappedArr);

//exercise 5
var text = "Anna is a good girl";
console.log(text.split(' ').join("*"))

//exercise 6
var text1 = "I'm gonna pop some tags only got twenty dollars in my pocket";
console.log(text1.split(""))

//exercise 7
var myarr5 = [1,2,3,4,5];
var lastelement = myarr5.pop();
myarr5.unshift(lastelement);
console.log(myarr5);

//exercise 8
var myarr6 = [5,10];
var myarr7 = [15,20];
var myarr8 = [25,30];
console.log(myarr6.concat(myarr7).concat(myarr8));

//exercise 9
const s = String.fromCharCode(107);
console.log(s)
