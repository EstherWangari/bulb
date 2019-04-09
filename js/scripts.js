function lightsOn(){
  document.getElementById('bulb').src='./images/animated-light-bulb-image-0022.gif';
  document.getElementById('body').style.background='#F9E739';
  document.getElementById('header').style.display='block';
  document.getElementById('three').style.display='none';
  document.getElementById('socketon').style.display='none';
  document.getElementById('socketoff').style.display='block';


}
function lightsOff(){
  document.getElementById('bulb').src='./images/eyes.jpg';
  document.getElementById('body').style.background='black';
  document.getElementById('header').style.display='none';
  document.getElementById('three').style.display='block';
  document.getElementById('socketoff').style.display='none';
  document.getElementById('socketon').style.display='block';







}
