/*==================================== Question No 1 =========================================
closure function
======================================= Answer =====================================*/
// function calculation (){let a = 10;
//     let b = 20;
//     return function output(){let final = a + b;
//         return final;
//     }

//  }
//  let ans = calculation();
//  console.log(ans())
/*==================================== Question No 2 =========================================
Task:
Create a function counter() that returns two inner functions:

One function increases the count by 1 and returns it.

One function decreases the count by 1 and returns it.

💡 Rules:

The count should start at 0.

You should not allow direct access to the count variable — it must be stored in the closure.

Each call to the returned functions should update the same count.
======================================= Answer =====================================*/
// function counter() {
//     let count = 0;

//     function increase() {
//         count++;
//         return count;
//     }

//     function decrease() {
//         count--;
//         return count;
//     }

//     return {
//         increase: increase,
//         decrease: decrease
//     };
// }

// let ans = counter();
// console.log(ans.increase()); // 1
// console.log(ans.increase()); // 2
// console.log(ans.decrease()); // 1
// console.log(ans.decrease()); // 0


/*==================================== Question No 3 =========================================
closure function 
======================================= Answer =====================================*/
// function counter(){let count = 0;
//     function increase(){count++;
//         return count;
//     }
//     function decrease(){count--;
//         return count;
//     }
//     return{long : increase,
//         short : decrease
//     }
// }

// let ans = counter();
// console.log(ans.long());
// console.log(ans.long());
// console.log(ans.long());
// console.log(ans.short());

/*==================================== Question No 4 =========================================
closure function
======================================= Answer =====================================*/
// function addition(){let a = 20;
//     let b = 10;
//    return function output(){let ans = a + b;
//         return ans;
//     }
// }
// let final = addition();
// console.log(final())

/*==================================== Question No 5 =========================================
render each index after one second continuously
======================================= Answer =====================================*/
// let words = ['a','b','c','d','e'];
// let display = document.getElementById('display')
// let index = 0 ;
// setInterval(function()  {
//     display.innerHTML = words[index];
//     index++; 
//     if(index >= words.length){index = 0;}
    
// }, 1000);



/*==================================== Question No 6 =========================================
You have an array of numbers:

let numbers = [10, 20, 30, 40, 50];
Write JavaScript code that shows one number at a time inside an element with id "output".
The numbers should change every 2 seconds in the same order as they appear in the array.
After reaching the last number, it should start again from the first number.
======================================= Answer =====================================*/

// let numbers = [10, 20, 30, 40, 50];
// let display = document.getElementById('display');
// let index = 0;

// setInterval(function() {
//     display.textContent = numbers[index];
//     index++;
//     if (index >= numbers.length) {
//         index = 0; // reset to start
//     }
// }, 2000);


/*==================================== Question No 7 =========================================
let colors = ['red', 'green', 'blue', 'yellow'];
Show one color name at a time inside an element with id "colorDisplay".
The text should change every 1 second and loop back to the first color after the last one.

Expected behavior:

"red" → "green" → "blue" → "yellow" → then back to "red" continuously.
======================================= Answer =====================================*/
// let colors = ['red', 'green', 'blue', 'yellow'];
// let display = document.getElementById('colorDisplay');
// let index = 0;
// setInterval(() => {
//     display.textContent = colors[index];
//     index++;
//     if(index >=colors.length){index = 0;}
    
// }, 1000);


/*==================================== Question No 8 =========================================
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
Display one day at a time inside an element with id "dayDisplay".
The text should change every 3 seconds in order and loop forever.

Expected behavior:

"Monday" → "Tuesday" → "Wednesday" → … → "Sunday" → back to "Monday".
======================================= Answer =====================================*/
// let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// let display = document.getElementById('dayDisplay');
// let index = 0;
// setInterval(function(){display.innerText = days[index];
//     console.log(days[index])
//     index++;
//     if(index >= days.length){index = 0;}
// },2000)




/*==================================== Question No 9 =========================================
cosecutivs letter counter
======================================= Answer =====================================*/
// function pro(){let input = document.getElementById('input').value;
//     let display = document.getElementById('display');
//     let result = '';
//     let count = 1;
//     for(let i = 0; i < input.length; i++){if(input[i]=== input[i + 1]){count++;}
// else{result = result + count + input[i];
//     count =1;
// }}
// display.innerHTML = result;
// }

/*==================================== Question No 10 =========================================
count repeated values in array
======================================= Answer =====================================*/
// let fruits = ['apple','mango','apple','orange','orange','lemon','apple'];
// // first arrange values alphabetically ascending order by sort()
// fruits.sort();
// let result = '';
// let count = 1;
// for(let i = 0; i < fruits.length;i++){if(fruits[i]=== fruits[i + 1]){count++}
// else{
//     result = result + `${fruits[i]} : ${count} |`;
// // reset count for next
//     count = 1;
   
// }}
// console.log(result)



/*==================================== Question No 11 =========================================
count all words in sentence
======================================= Answer =====================================*/
//  let str = ' my name was Name is aziz is khan';
//      str = str.trim();
//      str = str.toLowerCase()
//  let convert = str.split(' ');
//  console.log(convert)
//   convert.sort();
//   console.log(convert)
//  let result = '';
//  let count = 1;
//  for(let i = 0 ; i < convert.length;i++){if(convert[i] === convert[i + 1]){count++;}
// else{result = result + `${convert[i]} → ${count} \n`;
// count = 1;}
// }
// console.log(result)
/*==================================== Question No 12 =========================================
hash tag generator
======================================= Answer =====================================*/

// function generator(){let str = document.getElementById('input').value;
// let display = document.getElementById('heading');
// let array = str.split(' ');
// let result = '';
// for(let i = 0; i <array.length;i++){result = result + array[i].slice(0,1).toUpperCase() + array[i].slice(1)}
// result = '#'+ result;

// display.innerHTML = result;}



/*==================================== Question No 13 =========================================
letter counter
======================================= Answer =====================================*/

// function counting(){let getWord = document.getElementById('input').value;
// getWord = getWord.toLowerCase();
//     let letter = document.getElementById('requirement').value;
//     letter = letter.toLowerCase();
//     let display = document.getElementById('heading');
//     getWord = getWord.split('');
//     let target = getWord.filter((item)=>{ return item === letter})
//     display.textContent = `${letter} = ${target.length} time`
// }

/*==================================== Question No 14 =========================================
ascending of an array
======================================= Answer =====================================*/
// let a = [20,2,24,12,8];
// console.log(a)
// let b = a.sort();
// console.log(b)

// const sortAscending = (a)=>{return a.sort((a,b)=>b - a)}
// console.log(sortAscending([20,2,24,12,8]))


/*==================================== Question No 15 =========================================
ascending order of numbers
======================================= Answer =====================================*/
// function ascending(){let getNumbers = document.getElementById('input').value;
//     console.log(getNumbers);
//     getNumbers = getNumbers.split(' ');
//     console.log(getNumbers);
   
//     let finalResult = getNumbers.sort((a,b)=> a - b);
//     console.log(finalResult);
//     let display = document.getElementById('display');
   
// for(let i = 0;i  < finalResult.length;i++){let li = document.createElement('li');
//     let liContent = document.createTextNode(finalResult[i]);
//     li.style.listStyle = 'none';
//     li.style.paddingTop = '10px';
//     li.appendChild(liContent);
//     display.appendChild(li)
// }

// }


/*==================================== Question No 16 =========================================
find factorial
======================================= Answer =====================================*/
// let num = 3;
// let fact =1;
// for(let i = num;i >0;i--){fact = fact*i;}
// console.log(fact)

/*==================================== Question No 17 =========================================
.toFixed()
======================================= Answer =====================================*/
// let num = 23.427800;
// console.log(num.toFixed(2));

/*==================================== Question No 18 =========================================
Show product price with fixed decimal

Ask the user for price and quantity.

Multiply them to get the total cost.

Use .toFixed(2) to display the result as a money format.

Example:

Price: 12.5  
Quantity: 3  
Output: Total = 37.50

======================================= Answer =====================================*/
// let price = 12.53453;
// let Quantity = 3;
// let totalCost = price * Quantity;
// totalCost =  totalCost.toFixed(2);
// console.log(totalCost)

/*==================================== Question No 19 =========================================
.toString()
======================================= Answer =====================================*/
// let num = 312;
// console.log(num, typeof num);
// num = num.toString();
// console.log(num, typeof num)
/*==================================== Question No 20 =========================================
+(),Number(),parseInt(), parseFloat()
======================================= Answer =====================================*/
// let str = '2343.2331'
// // str = Number(str);
// // str = parseFloat(str)
// str = parseInt(str);
// console.log(str,typeof str);
/*==================================== Question No 21 =========================================
charAt()
======================================= Answer =====================================*/
// let str = 'javascript';
// console.log(str.charAt(20));
/*==================================== Question No 22 =========================================
string[index]
======================================= Answer =====================================*/
// let str = 'javascript';
// let ans = str[30];
// console.log(ans)
// let str= 'hello'
// console.log(str.charAt(-1))


/*==================================== Question No 23 =========================================
string.charAt(string.length-1)
======================================= Answer =====================================*/
// let str = 'welcome';
// console.log(str.charAt(str.length-8));
// let str = 'hello';
// console.log(str[-3]);

/*==================================== Question No 24 =========================================
.toUpperCase()
======================================= Answer =====================================*/
// let str = 'love34';
// console.log(str.toUpperCase())

/*==================================== Question No 25 =========================================
Math.round()
======================================= Answer =====================================*/
// let num = 2123.4387;
// // console.log(Math.round(num))
// console.log(Math.ceil(num))
// console.log(Math.floor(num));

/*==================================== Question No 26 =========================================
math.sqrt()
======================================= Answer =====================================*/
// let num = 9;
// console.log(Math.sqrt(num));
// let num = -32;
// console.log(Math.abs(num))

/*==================================== Question No 27 =========================================
math.max()
======================================= Answer =====================================*/
// let num = [3,44,1,5,666,43,23];
// let MaxNumber = Math.max(num);
// console.log(MaxNumber)

/*==================================== Question No 28 =========================================
Random OTP Generator 🔢

Generate a 4-digit OTP using Math.random().

Example: Math.floor(Math.random() * 9000) + 1000

Example:

Output: Your OTP is 4829
======================================= Answer =====================================*/
// let digitOne = Math.floor((Math.random()*9)+1);
// console.log(digitOne)
// let digitTwo = Math.floor((Math.random()*9)+1);
// console.log(digitTwo)
// let digitThree = Math.floor((Math.random()*9)+1);
// console.log(digitThree)
// let digitFour = Math.floor((Math.random()*9)+1);
// console.log(digitFour)

// let randomPassword = `${digitOne}${digitTwo}${digitThree}${digitFour}`;
// console.log(randomPassword)

/*==================================== Question No 29 =========================================
ternary operator
======================================= Answer =====================================*/
// let age = 20;
// let condition = (age < 20)?('you are eligible for job'):('you are overage');
// console.log(condition)
 
/*==================================== Question No 30 =========================================
replace(),replaceAll()
======================================= Answer =====================================*/
// let str = 'welcome';
// str = str.replaceAll('e','z');
// console.log(str)

/*==================================== Question No 31 =========================================
array methods
======================================= Answer =====================================*/
// let fruits = ['apple','mango','banana','grapes'];
// console.log(fruits,typeof fruits);
// // let psh = fruits.push('dates');
// // console.log(fruits);
// // console.log(psh)
// // fruits.unshift('carrot');
// // fruits.pop();
// // fruits.shift();
// // console.log(fruits)
// // let copy = fruits.slice(0,2);
// // console.log(copy)
// fruits.splice(0,0,'carrot');
// console.log(fruits)
/*==================================== Question No 32 =========================================
indexOf and lastIndexOf
======================================= Answer =====================================*/
// let fruits = ['apple','mango','banana','apple','grapes'];
// console.log(fruits.lastIndexOf('appler'));

/*==================================== Question No 33 =========================================
reverse()
======================================= Answer =====================================*/
// let fruits = ['apple','mango','banana','apple','grapes'];
// console.log(fruits);
// let need = fruits.reverse();
// console.log(need)

// let str = 'welcome';
// // let rev = str.reverse();
// // console.log(rev)
// let arr = str.split('');
//    let need = arr.reverse().join('');
//    console.log(need)
// console.log(arr)

/*==================================== Question No 34 =========================================
.concat()
======================================= Answer =====================================*/
// let boys = ['adil','haseeb'];
// let girls = ['sndleeb','ayesha','sania'];
// let arr = boys.concat(girls);
// console.log(arr)

/*==================================== Question No 35 =========================================
False or Not !
======================================= Answer =====================================*/
// let flag = false;
// if(!flag){console.log('you are eligible')}
// else{console.log('you are not eligible')}

/*==================================== Question No 36 =========================================
Date()
======================================= Answer =====================================*/
// let current = new Date();
// console.log(current,typeof current);
// console.log(current.getFullYear());
// console.log(current.getMonth()+1);
// console.log(current.getDate());
// console.log(current.getDay());
// console.log(current.getMinutes());
// console.log(current.getSeconds());
// console.log(current.getMilliseconds());
// console.log(current.getTime());
// console.log(current.toTimeString());
// console.log(current.toLocaleDateString());
// console.log(current.toLocaleTimeString())
//  current.setDate(20); 
// current.setMonth(11);
// current.setFullYear(2002)
// console.log(current)

/*==================================== Question No 37 =========================================
/\d/.test()
======================================= Answer =====================================*/
// let str = 'welcom';
// let check = /\d/.test(str);
// console.log(check)


// let str = 'hel4lo2';
// let check = str.match(/\d/g);
// let ans = check.length;
// console.log(ans)
// console.log(check)



/*==================================== Question No 38 =========================================
spread operator
======================================= Answer =====================================*/
// let boy = ['ali','hamza'];
// let girls = ['sandleeb','knval'];
// let array = [...boy,...girls];
// console.log(array);
// let copy = [...array];
// console.log(copy);
// girls = [...girls,'ali','kahmore','shanza'];
// console.log(girls)

// const obj =  {name : 'Aziz',
//     age : 32
// }
// console.log(obj,typeof obj);
// let newObj = {...obj};
// console.log(newObj);
// newObj = {...newObj,course : 'web',district : 'Kohat'};
// console.log(newObj)

// let num = [23,23 ,1,8,9];
// console.log(...num);
// let str = ['i','love','learning'];
// console.log(str);
// console.log(...str,typeof str)


/*==================================== Question No 39 =========================================
classList
======================================= Answer =====================================*/
// function adding(){let heading = document.getElementById('heading');
//       heading.classList.add('styling')
// }
// function removing(){let heading = document.getElementById('heading');
//       heading.classList.remove('styling')
// }
// function toggling(){let heading = document.getElementById('heading');
//       heading.classList.toggle('styling')
// }

/*==================================== Question No 40 =========================================
classList
======================================= Answer =====================================*/
// function styling(){let heading = document.getElementById('heading');
//     heading.className += ' styling';
// }



/*==================================== Question No 41 =========================================
hasAttribute, setAttribute, getAttribute
======================================= Answer =====================================*/
// let getImg = document.getElementById('img');
// let check= getImg.hasAttribute('src');
// console.log(check);
// let get = getImg.getAttribute('src');
// console.log(get);
// getImg.setAttribute('width','200px');
// console.log(getImg.hasAttribute('width'));
// console.log(getImg.getAttribute('width'))
/*==================================== Question No 42 =========================================
querySelector and queryAllSelector
======================================= Answer =====================================*/
// let get = document.querySelectorAll('p');
// console.log(get)
// for(let i = 0; i < get.length;i++){get[i].style.color = 'red'}

/*==================================== Question No 43 =========================================
average of array values
======================================= Answer =====================================*/
// let num = [2,5,8,4];
// let total = 0;
// for(let i = 0; i < num.length;i++){total = total + num[i]};
// console.log(total);
// let lengt = num.length;
// console.log(lengt)

// let average = (total/lengt);
// console.log(average)



/*==================================== Question No 44 =========================================
compare two array are equal by value or not
======================================= Answer =====================================*/

// function arraysAreEqual(arr1,arr2){if(arr1.length !== arr2.length){return false}
// for(let i = 0 ;i <arr1.length;i++){if(arr1[i]!== arr2[i]){return false}
// }
// return true; 
// }
// console.log(arraysAreEqual([4,20],[4,200]))
// console.log(arraysAreEqual(['apple','mango'],['apple','mango']))


/*==================================== Question No 45 =========================================

======================================= Answer =====================================*/

// let num = 123;
// num = String(num);
// let sum = 0;
// for(let i = 0; i < num.length;i++){ 
//     // sum = sum + Number(String(num)[i])
//     sum = sum +Number(num[i])
// }
// console.log(sum)
let num = 12345;
num = String(num)
    //  num = num.split('');
    //  console.log(num);
     let sum = 0; 
     for(let i = 0; i < num.length;i++)
{let b = Number(num[i])
    sum = sum + b}
     console.log(sum)
/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/




/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/

/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/




/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/