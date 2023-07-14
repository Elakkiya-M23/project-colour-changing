const btn=document.querySelector('button')
const body=document.querySelector('body')
body.style.backgroundColor="green";
const color=['blue','black','red','white','grey','pink'];
document.addEventListener('click',function(){
  const colorIndex = parseInt(Math.random()*color.length ); 
  body.style.backgroundColor=color[colorIndex];
});
