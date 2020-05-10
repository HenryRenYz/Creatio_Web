window.onload=function(){
  var odiv=document.getElementById('slide');
  odiv.onmouseover=function (){startmove(0,30);}
  document.getElementById('closedude').onclick=function (){startmove(-240,-30);}
}
var timer=null;
function startmove(target,speed){
  var odiv=document.getElementById('slide');
  clearInterval(timer);
  timer=setInterval(function (){
    if(odiv.offsetLeft==target){
      clearInterval(timer);
    }
    else{    
      odiv.style.left=odiv.offsetLeft+speed+'px';
    }
  },30)
}