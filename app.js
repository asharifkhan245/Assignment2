//  Answer#01 

function print (num1) {
    return function (num2) {
        console.log(num1 + num2)
    }
}

let innerFunction = print(5);
innerFunction(5);




//  Answer#02 

function searchArray(arr, value) {
  if (arr.length === 0) {
      return false;
  }
  if (arr[0] === value) {
      return true;
  }
  return searchArray(arr.slice(1), value);
}

const myArray = [1, 2, 3, 4, 5];
console.log(searchArray(myArray, 7));
searchArray(myArray, 1);




//  Answer#03

function addParagraph(text){
  let newPara = document.createElement("p");
  let textNode = document.createTextNode(text);
  newPara.appendChild(textNode);
  document.body.appendChild(newPara);
}
addParagraph("saylani zindabad");
console.log();



//  Answer#04

function addList(text) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
  }

  addList('Hello world');



//  Answer#05

function addBackground(){
let mypara = document.getElementById("add-bg");
mypara.innerHTML="<h1>Hello World</h1>";
mypara.style.backgroundColor = "orange";
mypara.style.fontFamily = "sans-serif";
mypara.style.color = "white";
}
addBackground();



//  Answer#06

function stdData(){
  let studentdData = {
              name: prompt("Enter Your Name :"),
              rollNo: +prompt("Enter Your roll number :"),
              courseName: prompt("Enter Your course Name :"),
              teacher: prompt("Enter Your teacher Name :"),
  };
  students.push(studentdData);
let stringfiy = JSON.stringify(students);
localStorage.setItem("students",stringfiy);
}
let previous1 = localStorage.getItem("students");
let students1 = previous ?  JSON.parse(previous) : [];




//  Answer#07

function stdData(){
    let studentdData = {
                name: prompt("Enter Your Name :"),
                rollno: +prompt("Enter Your roll number :"),
                className: prompt("Enter Your course Name :"),
                subject: prompt("Enter Your teacher Name :"),
    };
    students.push(studentdData);
  console.log(students);
  let stringfiy = JSON.stringify(students);
  localStorage.setItem("students",stringfiy);
  }
  let previous = localStorage.getItem("students");
  let students = previous ?  JSON.parse(previous) : [];



//  Answer#08

function objectSaveInLocalStorage(obj) {
    Object.keys(obj).forEach(key => {
        localStorage.setItem(key, JSON.stringify(obj[key]));
    });

    let newObj = {};
    Object.keys(obj).forEach(key => {
        newObj[key] = JSON.parse(localStorage.getItem(key));
    });
    return newObj;
}

let myObj = { yourName: 'M.Asharif', age: 22, course: 'Java script', Gender: 'Male', teacher: 'ishaq bhojani'};
let savedObj = objectSaveInLocalStorage(myObj);
console.log(savedObj);