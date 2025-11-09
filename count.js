 
const incresebtn=document.getElementById("incresebtn");
const decresebtn=document.getElementById("decresebtn");
const reset=document.getElementById("reset");
const lebelBtn=document.getElementById("lebelBtn");
let count=0;
incresebtn.onclick=function(){
  count++;
  lebelBtn.textContent=count;
}
 decresebtn.onclick=function(){
  count--;
  lebelBtn.textContent=count;
}
reset.onclick=function(){
    count=0;
    lebelBtn.textContent=count;
}
