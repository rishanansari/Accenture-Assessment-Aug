// class Animal {
//     static belly = [];
//     eat() {
//       Animal.belly.push('food');
//     }
//   }
//   let a = new Animal();
//   a.eat();
//   console.log(a.belly[0],"++++++++++++++++++++++++++++++++++++++++++++");



// var Storm = function () {};
// Storm.prototype.precip = 'rain';
// var WinterStorm = function () {};
// WinterStorm.prototype = new Storm();
// WinterStorm.prototype.precip = 'snow';
// var bob = new WinterStorm();
// console.log(bob.precip,"+++++++++++++++++++++++++++++++++++++++++++++++");

let btn = document.getElementById("btn");

btn.addEventListener("click", function(e) {
    alert("Button clicked alter box!")
});

let btnInc = document.getElementById("btn-Inc");
let para = document.getElementById("para")
let fontSize = 14
btnInc.addEventListener("click", function(e) {

para.style.fontSize = `${fontSize}px`;
fontSize = fontSize + 2;
})
