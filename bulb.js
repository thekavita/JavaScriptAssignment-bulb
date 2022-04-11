function bulbOn(){
    let obj = document.querySelector(".bulboff");
    obj.setAttribute("src","bulbon.png")
}
function bulbOff(){
    let obj = document.querySelector(".bulboff");
    obj.setAttribute("src","offbulb.png");
}

var c = 0;
function fu(){
  if(c==0){
    document.getElementById('img').src = "bulbon.png";
    document.getElementById("button").innerHTML = "Turn ON";
    c=1;
  }
  else if(c==1){
    document.getElementById("img").src = "offbulb.png";
    document.getElementById("button").innerHTML = "Turn OFF";
    c=0;
  }
}
