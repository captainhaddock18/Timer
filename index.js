let star = document.getElementById("start")
console.log(star)
star.addEventListener("click", start)
let time = document.getElementById("timer")
let icon = document.getElementById('st')
console.log(time)
let pause = document.getElementById('pause')
let s = 0
let m = 0
let h = 0
let k = 0
let ti 



function start(){
  ti = setInterval(int,1000) 
   k++;
   console.log(k)
   pause.style.visibility = 'visible'
}


function int(){
if(k==1){

   
   time.innerText = h + ":" + m + ":" + s
   s++;



   if(s == 59)
   {
      m++;
      s=0;
   }
   if(m == 59)
   {
      h++;
      m = 0;
      s = 0;
   }
   k=1;
 }
}
function pe(){
   clearInterval(ti);
   k=0 
   pause.style.visibility = 'hidden'
}


function r(){
   clearInterval(ti)

   time.innerText = "0:0:0"
   s = 0
   m =  0 
   h = 0
   k=0
   pause.style.visibility = 'hidden'

}