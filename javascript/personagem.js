/*function rect1(){
    document.getElementById("imgthor").innerHTML = "<img src= 'Assets/img/personagens/tho-img.png'>"
}

function rect2(){
    document.getElementById("imgpanther").innerHTML = "<img src= 'Assets/img/personagens/panther-img.png'>"
}

function rect3(){
    document.getElementById("imgiron").innerHTML = "<img src= 'Assets/img/personagens/iron-man-img.png'>"
}

function rect4(){
    document.getElementById("imgspider").innerHTML = "<img src= 'Assets/img/personagens/spider-img.png'>"
}*/


//Faz aparecer/desaparecer a imagem

var rect1 = document.querySelector('.rectangle1');
var img_rect1 = document.querySelector('#imgthor');

var rect2 = document.querySelector('.rectangle2');
var img_rect2 = document.querySelector('#imgpanther');

var rect3 = document.querySelector('.rectangle3');
var img_rect3 = document.querySelector('#imgiron');

var rect4 = document.querySelector('.rectangle4');
var img_rect4 = document.querySelector('#imgspider');

rect1.addEventListener('click', function(){
    if(img_rect1.style.display === 'block'){
        img_rect1.style.display = 'none'
    }else{
        img_rect1.style.display = 'block'
    }
});

rect2.addEventListener('click', function(){
    if(img_rect2.style.display === 'block'){
        img_rect2.style.display = 'none'
    }else{
        img_rect2.style.display = 'block'
    }
});

rect3.addEventListener('click', function(){
    if(img_rect3.style.display === 'block'){
        img_rect3.style.display = 'none'
    }else{
        img_rect3.style.display = 'block'
    }
});

rect4.addEventListener('click', function(){
    if(img_rect4.style.display === 'block'){
        img_rect4.style.display = 'none'
    }else{
        img_rect4.style.display = 'block'
    }
});