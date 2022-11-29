let btn = document.getElementById('btn');
let body = document.querySelector('body');

let color_name = document.querySelector('.infos span');


//init color localStorge
oldColor = localStorage.getItem('color');
body.style.backgroundColor = oldColor?oldColor:"white"; 
color_name.innerHTML = oldColor?oldColor:"#FFFFFF";
//random color

function randomString() {
    let length=6;
    let chars = '0123456789abcdefABCDEF';
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}


btn.addEventListener('click',()=>{
    let color = '#'+randomString();  
    
    body.style.backgroundColor = color; 
    color_name.innerHTML = color;
    localStorage.setItem('color',color);
})

//clear cache 
let clear_cache = document.getElementById('clear_cache');

clear_cache.addEventListener('click',()=>{
    localStorage.removeItem('color');
    body.style.backgroundColor = "white"; 
    color_name.innerHTML = "#FFFFFF";

})