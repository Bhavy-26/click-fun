const gp=document.getElementById('GP');

gp.addEventListener('click',()=>{
    console.log('GP CLICKED');
},true)

const parent=document.getElementById('parent');

parent.addEventListener('click',()=>{
    console.log("Parent Clicked");
},true)

const child=document.getElementById('child');

child.addEventListener('click',()=>{
    console.log("Child Clicked");
},true)