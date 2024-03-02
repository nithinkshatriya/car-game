let car = document.querySelector('.car-image');

let x = 30;
let y = 0 ;
let speed = 10;
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

document.addEventListener('keydown',(event) => {
if(event.keyCode === 37){
  //move left
  if(x>30){
    x-=speed;
    car.style.left = x + 'px';
    car.style.transform = 'rotate(270deg)';
  }}
  else if (event.keyCode ===38){
    //move up
    if(y>0){
      y-=speed;
      car.style.top = y + 'px';
      car.style.transform = 'rotate(-0deg)';
    }  
  }
  else if (event.keyCode ===39){
    //move right
    if(x + 100<windowWidth){
      x+=speed;
      car.style.left = x + 'px';
      car.style.transform = 'rotate(90deg)';
    }
    }
    else if (event.keyCode ===40){
      //move down
      if(y+100<windowHeight){
        y+=speed;
        car.style.top = y + 'px';
        car.style.transform = 'rotate(180deg)';
      }
      
    }

});