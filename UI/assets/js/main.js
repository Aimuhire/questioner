function autoHeight(element) {
    element.style.height = "10px";
    element.style.height = (element.scrollHeight)+"px";
}



var category=document.getElementsByTagName('select')
console.log(category)
category[0].addEventListener("click",()=>{
     if(document.getElementById("category").value=='new-cat')
    document.getElementById('new-category-input').style="display:block"
    else
    document.getElementById('new-category-input').style="display:none"
 
})

 
function toggleMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
var askOn=false;
  function toggleAsk(){
askOn=!askOn;
    if(askOn) {
      document.getElementById('ask-question').style="display:block"
    }else{
      document.getElementById('ask-question').style="display:none"
      document.getElementById('ask-btn').innerText="Hide Ask Question" 
    }

  }