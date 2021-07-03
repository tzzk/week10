var menu=document.getElementById('siderbar_menu');
menu.style.color="blue";
var title=document.getElementById('title');
title.style.color="Yellow";
var product=document.getElementById('product');
product.innerHTML="<em>Host Myanmar Tech";

var submenu=document.getElementsByClassName("submenu");
console.log(submenu.length);
for(var smenu of submenu){
    console.log(smenu);
}
for(var i=0;i<submenu.length;i++){
    console.log(submenu[i]);
    console.log(submenu[i].className);
}
