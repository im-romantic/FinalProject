let Imges = document.querySelectorAll('ul li');
let ActiveImgIndex = 0;
window.show = function(increaseIndex) {
  ActiveImgIndex = ActiveImgIndex + increaseIndex;
  ActiveImgIndex = Math.min(Math.max(ActiveImgIndex,0), Imges.length-1);
  Imges[ActiveImgIndex].scrollIntoView({behavior: 'smooth'});
}

const cards = document.querySelectorAll('.Cards .card');
cards[0].classList.add("bigImg")
function Grow(clickedCard) {

    cards.forEach(function(card) {
        card.classList.remove('bigImg');
    });

    clickedCard.classList.add('bigImg');
}

let Login = document.querySelector(".User")
let loginList = document.querySelector(".login-list")

Login.onclick = _=>{
    loginList.classList.add("show")
}

let CloseBtn = document.querySelector(".btn-close")

CloseBtn.onclick = _=>{
    loginList.classList.remove("show")
  }


  let HidePassImg = document.querySelector(".HidePass")
  let PassInput = document.querySelector(".PassInput")
  let type = PassInput.getAttribute("type")
  let pass = document.getElementById("Pass")
  HidePassImg.onclick = ShowPass

  function ShowPass(){
    
    console.log(pass);
    if(type == "password") {
      pass.setAttribute("type" ," ")
      type = ""
    }
    else{
      pass.setAttribute("type" ,"password")
      type = "password"
    }
  }


  let BackForward = document.querySelector(".BackForward")

 


  let Login1 = document.querySelector(".active1")
let loginList1 = document.querySelector(".login-list1")


Login1.onclick = SignUP
function SignUP() {
    loginList1.classList.add("show1")
}
let CloseBtn1 = document.querySelector(".btn-close1")

CloseBtn1.onclick = _=>{
  loginList1.classList.remove("show1")
}
BackForward.onclick = BackPage

function BackPage() {
  loginList1.classList.remove("show1")
}


let Login2 = document.querySelector(".active2")
let loginList2 = document.querySelector(".login-list2")

Login2.onclick = _=>{
    loginList2.classList.add("show2")
}

let CloseBtn2 = document.querySelector(".btn-close2")

CloseBtn2.onclick = _=>{
    loginList2.classList.remove("show2")
  }

  

  let Men =document.querySelector(".Men")
  let menu =document.querySelector(".menu")
  Men.onclick = _=> {
  menu.classList.toggle("Hidden");
  }
  
  


  const input = document.querySelector("#phone");
  window.intlTelInput(input, {
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
  });

