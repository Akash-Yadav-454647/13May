function main(){
 console.log("it works") 
 window.addEventListener("deviceorientation",onOrientationChange)

 navigator.mediaDevices.getUserMedia({video:{facingMode: 'environment'}}).then(function(signal){
  const video = document.getElementById("video");
  video.srcObject = signal;
  video.play();
 })
 .catch(function(err){
  alert(err)
 })
}

function onOrientationChange(event){
  let angle = event.beta-90;
  if(angle<0){
    angle = 0;
  }
  const dist = document.getElementById("slider").value;
  document.getElementById("label").innerHTML = "Distance of object: "+dist+" meters"
  const height = Math.tan(angle*Math.PI/180)*dist;
  document.getElementById("Heightval").innerHTML =  height.toFixed(1) + " m (" + angle.toFixed(1) + "&deg;)";
  console.log(angle);

}