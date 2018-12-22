function autoHeight(element) {
  element.style.height = "10px";
  element.style.height = (element.scrollHeight) + "px";
}



var category = document.getElementsByTagName('select')
console.log(category)
if(category[0])
category[0].addEventListener("click", () => {
  if (document.getElementById("category").value == 'new-cat')
    document.getElementById('new-category-input').style = "display:block"
  else
    document.getElementById('new-category-input').style = "display:none"

})



function toggleMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
var askOn = false;
function toggleAsk() {
  askOn = !askOn;
  if (askOn) {
    document.getElementById('ask-question').style = "display:block"
    document.getElementById('ask-btn').innerText = "Hide Ask Form"
    document.getElementById('ask-btn').style = "background:#c53211"
  } else {
    document.getElementById('ask-question').style = "display:none"
    document.getElementById('ask-btn').innerText = "Ask A Question"
    document.getElementById('ask-btn').style = "background:#2e2e2e"
  }

}

var demol = document.getElementById('demo-links');

 
var demoOn=false;
demol.addEventListener('click',()=>{
demoOn=!demoOn;
if(demoOn){ 
  document.getElementsByClassName('fixed-demo-pages')[0].style = "display:block";
  document.getElementById('demo-links').innerText = "Hide Demo Links";
} else {
  document.getElementsByClassName('fixed-demo-pages')[0].style = "display:none";
  document.getElementById('demo-links').innerText = "Show Demo Links ^";
}
})