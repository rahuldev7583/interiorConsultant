function menuClicked(){
  document.getElementById("close-icon").style.display = "inline-block";
  document.getElementById("navbar").style.display = "inline-block";
  document.getElementById("content").style.display = "none";
  document.getElementById("menu-icon").style.display = "none";
}
function closeClicked(){
  document.getElementById("close-icon").style.display = "none";
  document.getElementById("navbar").style.display = "none";
  document.getElementById("content").style.display = "inline-block";
  document.getElementById("menu-icon").style.display = "inline-block"; 
}