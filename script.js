$(document).ready(function() {
    $("#btn1").mouseup(function() {
        // alert("alert");
        // $("#div1").slideToggle(3000);
        let div = $("div");
        div.animate({left:"400px", height:"300px", opacity:".5"},"fast");
    }
    );
}
);


// document.getElementById('demo').innerHTML = 'new text';
// // document.getElementById('demo').id = "demo2";
// document.getElementById('demo').style.color = "#00FF00";
// // document.getElementById('demo').outerHTML = "<button>something to press</button>";

// function myFun() {
//     alert("WARNING ALERT OMG!!!!");
// }
// // myFun();

// function darkMode() {
//     document.getElementById("pagestyle").setAttribute("href", "./style-dark.css")
// }

// var a = 10;
// let b = 20;
// const c = 30;

// a += 10;
// b += 10;

// console.log(a+b+c);

// function key_pressed(input) {
//     console.log(input);
//     document.getElementById("keypressed_text").innerHTML = input;
// }

// const key = function keyEvent(e) {
//     key_pressed(e.key);
//     if (e.key === "f") {
//         alert("f key pressed");
//     }
// }

// document.addEventListener("keypress", key);