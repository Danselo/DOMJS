// console.log("Working");
// const h1 = document.querySelector('h1');
// const pclass = document.querySelector('.pclass');
// const pid = document.querySelector('#pid')
// const input = document.querySelector('input')
// console.log(h1);
// console.log(input.value)
// console.log({
//     h1,
//     pclass,
//     pid,
//     input
// });


//Write in html 

// h1.innerHTML = "Pedro Picapiedra"; //this is very dangerous because the users can alterate the code
// h1.innerText = "Caca de pajaro" //this is more secure, the user not write code html, solo text;

//get the atributes of the element
// console.log(h1.getAttribute("class"));
//change the atributes of the element in the html 
// h1.setAttribute("class", "paragraph")
//add other class in the atribute
// h1.classList.add("verde")
//this remove class of the element
// h1.classList.remove("verde")
// h1.classList.contains();
// h1.classList.toggle()

//INSERT ELEMENT IN THE HTML 
// let img = document.createElement('img');
//add the atributes of the created element
// img.setAttribute('src','https://www.shutterstock.com/image-vector/vector-illustration-cute-baby-yoda-260nw-2033802149.jpg') 

//add of the other element in the html 
//append add the content after the content 
// pclass.append(img)
//----------------------------------------------------------    
let number1 = document.querySelector("#number1");
let number2= document.querySelector("#number2");
let btn = document.querySelector("#btnCalculate");
let resultAdd = document.querySelector("#result");
let formResult = document.querySelector("#form")
//note: onclick listen the event click  and the onChange listen the events examples inputs the forms
function Add(event){
    event.preventDefault(); //this is help  for no reset page 
    number1 = parseInt(number1.value);
    number2 = parseInt(number2.value);
    result = number1 + number2
    console.log("The result of the add is : "+result);
    resultAdd.innerText = "Result: "+result;
}

//add event listening
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

// btn.addEventListener('click', Add);
formResult.addEventListener('submit', Add);
