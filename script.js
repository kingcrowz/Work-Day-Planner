$()

var timer = moment().format("MMMM Do, YYYY");
$("#currentDay").text(timer);
console.log(moment().hours());
console.log($(".description"));
var currentHour = moment().hours();
var scheduleContent = JSON.parse(localStorage.getItem("schedule")) || [];
var btn8 = document.querySelector("#sched8");
var btn9 = document.querySelector("#sched9");
var btn10 = document.querySelector("#sched10");
var btn11 = document.querySelector("#sched11");
var btnNoon = document.querySelector("#schedNoon");
var btn1 = document.querySelector("#sched1");
var btn2 = document.querySelector("#sched2");
var btn3 = document.querySelector("#sched3");
var btn4 = document.querySelector("#sched4");
var btn5 = document.querySelector("#sched5");
var btn6 = document.querySelector("#sched6");



//sets the color of the time blocks
$(".description").each(function(index, element){
    console.log($(element).attr("id"));
    //used a double = because the value returned is a different type than what moment generates, but still the same value
    if($(element).attr("id") == currentHour){
        $(element).addClass("present");
    } else if($(element).attr("id") > currentHour){
        $(element).addClass("future");
    } else {
        $(element).addClass("past");
    }
});


//8am save button
btn8.addEventListener("click", function(event){
    event.preventDefault();
    var sched =  $(".btn8").val();
    console.log(sched);
    // var newsched = sched.Value;
    localStorage.setItem("8am", sched);
});

//9am save button
btn9.addEventListener("click", function(event){
    event.preventDefault();
    var sched =  $(".btn9").val();
    console.log(sched);
    // var newsched = sched.Value;
    localStorage.setItem("9am", sched);
});

//10am save button
btn10.addEventListener("click", function(event){
    event.preventDefault();
    var sched =  $(".btn10").val();
    console.log(sched);
    // var newsched = sched.Value;
    localStorage.setItem("10am", sched);
});

//11am save button
btn11.addEventListener("click", function(event){
    event.preventDefault();
    var sched =  $(".btn11").val();
    console.log(sched);
    // var newsched = sched.Value;
    localStorage.setItem("11am", sched);
});

//noon save button
btnNoon.addEventListener("click", function(event){
    event.preventDefault();
    var sched =  $(".btnNoon").val();
    console.log(sched);
    // var newsched = sched.Value;
    localStorage.setItem("noon", sched);
});

//1pm save button
btn1.addEventListener("click", function(event){
    event.preventDefault();
    var sched =  $(".btn1").val();
    console.log(sched);
    // var newsched = sched.Value;
    localStorage.setItem("1pm", sched);
});

//2pm save button
btn2.addEventListener("click", function(event){
    event.preventDefault();
    var sched =  $(".btn2").val();
    console.log(sched);
    // var newsched = sched.Value;
    localStorage.setItem("2pm", sched);
});

//3pm save button
btn3.addEventListener("click", function(event){
    event.preventDefault();
    var sched =  $(".btn3").val();
    console.log(sched);
    // var newsched = sched.Value;
    localStorage.setItem("3pm", sched);
});

//4pm save button
btn4.addEventListener("click", function(event){
    event.preventDefault();
    var sched =  $(".btn4").val();
    console.log(sched);
    // var newsched = sched.Value;
    localStorage.setItem("4pm", sched);
});

//5pm save button
btn5.addEventListener("click", function(event){
    event.preventDefault();
    var sched =  $(".btn5").val();
    console.log(sched);
    // var newsched = sched.Value;
    localStorage.setItem("5pm", sched);
});

//6pm save button
btn6.addEventListener("click", function(event){
    event.preventDefault();
    var sched =  $(".btn6").val();
    console.log(sched);
    // var newsched = sched.Value;
    localStorage.setItem("6pm", sched);
});


function setContents(){
    //8am
    var contHolder = localStorage.getItem("8am");
    console.log("cont holder "+ contHolder);
    document.querySelector(".btn8").textContent = contHolder;

    //9am
    contHolder = localStorage.getItem("9am");
    console.log("cont holder "+ contHolder);
    document.querySelector(".btn9").textContent = contHolder;

    //10am
    contHolder = localStorage.getItem("10am");
    console.log("cont holder "+ contHolder);
    document.querySelector(".btn10").textContent = contHolder;

    //11am
    contHolder = localStorage.getItem("11am");
    console.log("cont holder "+ contHolder);
    document.querySelector(".btn11").textContent = contHolder;

    //noon
    contHolder = localStorage.getItem("noon");
    console.log("cont holder "+ contHolder);
    document.querySelector(".btnNoon").textContent = contHolder;

    //1pm
    contHolder = localStorage.getItem("1pm");
    console.log("cont holder "+ contHolder);
    document.querySelector(".btn1").textContent = contHolder;

    //2pm
    contHolder = localStorage.getItem("2pm");
    console.log("cont holder "+ contHolder);
    document.querySelector(".btn2").textContent = contHolder;

    //3pm
    contHolder = localStorage.getItem("3pm");
    console.log("cont holder "+ contHolder);
    document.querySelector(".btn3").textContent = contHolder;

    //4pm
    contHolder = localStorage.getItem("4pm");
    console.log("cont holder "+ contHolder);
    document.querySelector(".btn4").textContent = contHolder;

    //5pm
    contHolder = localStorage.getItem("5pm");
    console.log("cont holder "+ contHolder);
    document.querySelector(".btn5").textContent = contHolder;

    //6pm
    contHolder = localStorage.getItem("6pm");
    console.log("cont holder "+ contHolder);
    document.querySelector(".btn6").textContent = contHolder;
}


setContents();
//calls the function to set the schedule slots from the local storage