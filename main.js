console.log("working")
// document.querySelector(".name").innerText = prompt("What is your name?");


//variables
const feedNum = document.querySelector(".hunger-num")
const feedBtn = document.querySelector("#feed-your-pet")
const lighBtn = document.querySelector("#turn-off-lights")
const lightNum = document.querySelector(".sleep-num")
const playNum = document.querySelector(".boredom-num")
const playBtn = document.querySelector("#play-with-your-pet")
var image = document.querySelector(".gif")
console.log(feedBtn.innerText)
console.log(image)
// console.log(lighBtn)
// console.log(playBtn)
let images = ["https://media2.giphy.com/media/PVE9gMrs450vC/giphy.gif?cid=790b761139bed66679e4cc3fd7ddba77a579d16481f5ae7c&rid=giphy.gif&ct=g"]
console.log(images[0])
// let endHunger = setInterval(increaseHunger, 500)
// let endLight = setInterval(increaseLight, 2000)
// let endPlay = setInterval(increasePlay, 2000)


var num1 = 1;
var num2 = 1;
var num3 = 1;
var age = 0;
gameOver = 0;


// Age function
function ageNum(){
    age++;
    document.querySelector(".age").innerText = `Age: ${age}`
console.log(age)
    if (age>10&&age<20){
        image.src = "https://media0.giphy.com/media/cAb8ZkA6LXqOA/giphy.gif?cid=790b7611b6e77b9219f776085f02c03bae091beea531e2e9&rid=giphy.gif&ct=g"
    }else if (age>=20&&age<35){
        image.src = "https://media2.giphy.com/media/NKXh3MVr6htmysO4p5/giphy.gif?cid=790b76112a9c020a4cb242dfeb86db7dadc59e71641aa06d&rid=giphy.gif&ct=g"
    }else if (age>=35){
        image.src = "https://media3.giphy.com/media/u5YIlhcSar0qI/giphy.gif?cid=790b7611705b7119227ac4456a03e236327eceadfbc21c60&rid=giphy.gif&ct=g"
    }}
        // const endAge = setInterval(ageNum, 1000)

// Button Functions
function decreaseNumber() {
    if (num1!=0){
        // let num = feedNum.textContent;
        num1--;
    // feedNum.textContent = num;
    document.querySelector(".hunger-num").value = num1
  console.log(num1)
    }}
feedBtn.addEventListener("click", decreaseNumber)

// decrease light
function decreaseLight() {
    if (num2!=0){
        // let num = feedNum.textContent;
        num2--;
    // feedNum.textContent = num;
    document.querySelector(".sleep-num").value = num2
  console.log(num2)
    }}
lighBtn.addEventListener("click", decreaseLight)

// decrease boredom
function decreaseBoredom() {
    if (num3!=0){
        // let num = feedNum.textContent;
        num3--;
    // feedNum.textContent = num;
    document.querySelector(".boredom-num").value = num3
  console.log(num3)
    }}
playBtn.addEventListener("click", decreaseBoredom)





// Feed your pet function
function increaseHunger (){
    if (num1<11){
        feedNum.innerText = `Hunger: ${num1}`
        num1++
        console.log(num1)
    } else if (num1>10){
        // clearInterval(increaseHunger)
        endGame()
      
        // alert("Game over!")
        
    }
}
// const endHunger = setInterval(increaseHunger, 1000)
// setInterval(increaseHunger, 500)
// Turn off lights function

function increaseLight (){
    if (num2<11){
        lightNum.innerText = `Sleepiness: ${num2}`
        num2++
        console.log(num2)
    } else if (num2>10){
        endGame()
        // alert("Game over!")
    }
}
// const endLight = setInterval(increaseLight, 1000)


function increasePlay (){
    if (num3<11){
        playNum.innerText = `Boredom: ${num3}`
        num3++
        console.log(num3)
    } else if (num3>10){
        endGame()
        // alert("Game over!")
    }
}
// const endPlay = setInterval(increasePlay, 1000)

// End game function
function endGame(){
    if (num1>10||num2>10||num3>10){
      
        clearInterval(endHunger);
        // alert("GAME OVER!")
        clearInterval(endLight);
        clearInterval(endPlay);
        clearInterval(endAge);
      
    }
}

