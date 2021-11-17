console.log("hello world!");

var flipped = false;


function doStuff(element){
    if(flipped){
        element.innerText = "option 1";
    }else{
        element.innerText = "option 2";
    }
    flipped = !flipped;
}

function newDoStuff(){
    var body = document.querySelector("#body");

    var color = `rgb(${rand255()}, ${rand255()}, ${rand255()})`;
    // alert(color);

    body.style = `background-color: ${color}`;
}

function rand255(){
    return Math.floor(Math.random() * 256);
}

function remove(element){
    element.remove();
}

function readText(){
    var element = document.querySelector("#input");
    console.log(element.value);

    var area = document.querySelector("#textarea");
    area.innerText = element.value;
}

function like(ele){
    console.log(ele);
    var element = document.querySelector("#count");
    var count = parseInt(element.innerText);


    element.innerText = count + 1;
}

function like2(id){
    var element = document.querySelector(id);
    var count = parseInt(element.innerText);


    element.innerText = count + 1;
}

function enter(){
    var element = document.querySelector("#img");
    console.log(element);
    element.src = "https://placekeanu.com/200/300/";
}

function leave(){
    var element = document.querySelector("#img");
    console.log(element);
    element.src = "http://placekitten.com/200/300/";
}

function keydown(e){
    console.log(e.keyCode);
}