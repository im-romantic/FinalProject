let WhitePhoto = document.querySelector(".WhiteImg")
let BlackPhoto = document.querySelector(".BlackImg")
let DifferPhoto = document.querySelector(".DifferImg")
let BluePhoto = document.querySelector(".BlueImg")
WhitePhoto.onclick = WhiteFunction
BlackPhoto.onclick = BlackFunction
DifferPhoto.onclick = DifferFunction
BluePhoto.onclick = BlueFunction

num =document.querySelector(".num")

let DefaultNum= +num.innerText
function Increasing (){
if( DefaultNum >= 1){
  DefaultNum+=1;
    num.innerText=DefaultNum;
}
else{
  DefaultNum=1;
}
}

function Decreasing (){
if(DefaultNum > 1){
  DefaultNum-=1;
    num.innerText=DefaultNum;
}
else{
  DefaultNum=1;
}
}


let WhiteBtn = document.querySelector(".WhiteBtn")
let BlackBtn = document.querySelector(".BlackBtn")
let DifferBtn = document.querySelector(".DifferBtn")
let BlueBtn = document.querySelector(".BlueBtn")
let WhiteImg = document.querySelector(".WhiteImg").src
let BlackImg = document.querySelector(".BlackImg").src
let DifferImg = document.querySelector(".DifferImg").src
let BlueImg = document.querySelector(".BlueImg").src

let mainImage = document.getElementById("mainImage")
let ImgColor = "White";
WhiteBtn.onclick = WhiteFunction
BlackBtn.onclick = BlackFunction
DifferBtn.onclick = DifferFunction
BlueBtn.onclick = BlueFunction

function WhiteFunction(){
  mainImage.src = WhiteImg
  ImgColor = "White";
  console.log(ImgColor);
}
function BlackFunction(){
  mainImage.src = BlackImg
  ImgColor = "Black";
  console.log(ImgColor);
}
function DifferFunction(){
  mainImage.src = DifferImg
  ImgColor = "Differ";
  console.log(ImgColor);
}
function BlueFunction(){
  mainImage.src = BlueImg
  ImgColor = "Blue";
  console.log(ImgColor);
}

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 40,
  breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable : true,
    },
  
  
  });


  var swiper1 = new Swiper(".card_slider", {
    slidesPerView: 1,
    spaceBetween: 40,
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  })

      
  let Login = document.querySelector(".User")
  let loginList = document.querySelector(".login-list")
  
  Login.onclick = _=>{
    loginList.classList.add("show")
  }
  
  let CloseBtn = document.querySelector(".LaggingBtn")
  
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

  let SizeOptions = document.querySelector(".SizeOptions")
  let OptionValue;
  SizeOptions.onmouseleave = SizeInput
  function SizeInput() {
    OptionValue = SizeOptions.value
    }


    let CartNumber = document.querySelector(".CartNumber")
  let CartList = document.querySelector("#offcanvasTop .offcanvas-body")
  let CartImgContent = document.querySelector(".ProductJS")
  let CartColorContent = document.querySelector(".ColorJS")
  let CartSizeContent = document.querySelector(".SizeJS")
  let CartAmmountContent = document.querySelector(".AmmountJS")
  let CartPriceContent = document.querySelector(".PriceJS")
  let TotalCostPrice = document.querySelector(".TotalCostPrice")
  let Total = document.querySelector("#Total")
  let ItemList = JSON.parse(localStorage.getItem("Item List")) || []

let AddCartButton = document.querySelector(".AddCart")
AddCartButton.onclick= _=>{
  SelectedItems(AddCartButton)
ShowItem()
}

function SelectedItems(item) {
  let ItemsParent = item.parentElement.parentElement.parentElement.parentElement
  let imgSource = document.querySelector("#mainImage").src
  let ProductName = ItemsParent.querySelector("h6").innerText
  let Price = ItemsParent.querySelector(".Price").innerText 
  let ItemsCount = ItemsParent.querySelector(".ItemsCount").innerText



  let Size = OptionValue
  let color = ImgColor
  let ItemObject = {}
  ItemObject.img = imgSource
  ItemObject.name = ProductName
  ItemObject.price = Price
  ItemObject.count = ItemsCount
  ItemObject.size = Size
  ItemObject.color = color
  ItemList.push(ItemObject)
  localStorage.setItem("Item List" , JSON.stringify(ItemList))

  // let postionItem = ItemList.findIndex(item => {
  //   return item.img === imgSource
  //  })
  //  let NewCount = +(ItemList[postionItem].count)
  //  NewCount += +ItemsCount
  //  ItemList[postionItem].count = NewCount
}
ShowItem()
function ShowItem() {
  CartImgContent.innerHTML = ""
  CartColorContent.innerHTML = ""
  CartSizeContent.innerHTML = ""
  CartAmmountContent.innerHTML = ""
  CartPriceContent.innerHTML = ""
  TotalCostPrice.innerHTML =  `
  <p class="TotalCostPrice">Total cost: <span id="Total">$0</span></p>
  `
 
  let TotalResult = 0
  ItemList.forEach((item , ind) => {

    let TotalPerOne= item.price*100 * item.count*100 /10000;

 TotalResult += TotalPerOne


    let ProductView = 
    `
      <img src="${item.img}" alt="Img" class="img-fluid ImgCart">
      ${item.name}<br><br>
    `
    let ColorView = 
    `
  
      ${item.color}<br><br><br>  
    `
    let SizeView = 
    `
      ${item.size}<br><br><br> 
    `
    let AmmountView = 
    `
      ${item.count}<br><br><br> 
    `
    let PriceView = 
    `
    <span>$${TotalPerOne}<button class="btn-close CartDeleteItem" id="DeleteProduct" data-id= ${ind}></button></span><br><br><br> 
    `
    let TotalCostPriceView = 
    `
    <p class="TotalCostPrice">Total cost: <span id="Total">$${TotalResult.toFixed(2)}</span></p>
    `
    CartImgContent.innerHTML += ProductView
    CartColorContent.innerHTML += ColorView
    CartSizeContent.innerHTML += SizeView
    CartAmmountContent.innerHTML += AmmountView
    CartPriceContent.innerHTML += PriceView
    TotalCostPrice.innerHTML = TotalCostPriceView

  });
  CartNumber.innerText = ItemList.length
}

// let CartDeleteItem = document.querySelectorAll(".CartDeleteItem")
// for (let i = 0; i < CartDeleteItem.length; i++) {
//   let element = CartDeleteItem[i];
//   element.onclick = Delete

// function Delete(){
//   let ID = element.getAttribute("data-id")
//   ItemList.splice(ID , 1)
//   localStorage.setItem("Item List", JSON.stringify(ItemList));
//   ShowItem()
// }
// }

addEventListener("click" , event=>{
if (event.target.id == "DeleteProduct") {
  let ID = event.target.getAttribute("data-id")
  ItemList.splice(ID , 1)
  localStorage.setItem("Item List", JSON.stringify(ItemList));
  ShowItem()
}
})

const input = document.querySelector("#phone");
window.intlTelInput(input, {
  utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
});
