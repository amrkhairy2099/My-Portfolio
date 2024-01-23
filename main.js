const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const formBtn = document.querySelector(".form-btn");

form.addEventListener('submit', (e) => {
   e.preventDefault();
   let body = "Name : " + name.value + "<br/> Email : " + email.value + "<br/> Message : " + message.value;
   console.log("Clicked");
   Email.send({
      SecureToken : "6f1237cb-3266-4dd0-a6e0-89ccc8c69b96",
      From : 'amrkhairy2099@gmail.com',
      To : 'amrkhairy2099@gmail.com',
      Subject : "New Message From Contact",
      Body : body
   }).then(
      message => alert(message)
   );
})

// Check Form 
let formInputs = document.querySelectorAll("[data-form-input]");

for (let i = 0; i < formInputs.length; i++) {
   formInputs[i].addEventListener("input", function () {
      if (form.checkValidity()) {
         formBtn.removeAttribute("disabled");
      } else {
         formBtn.setAttribute("disabled", "");
      }
   });
}

// Navbar Button
let links = document.getElementById("links");
let navBtn = document.getElementById("nav-btn");
let btnImg = document.getElementById("btn-img")

navBtn.onclick = function() {
   console.log("Open");
   links.classList.toggle("open");
   if (links.classList.contains("open")) {
      btnImg.src = 'imgs/menu-open.svg';
   } else {
      btnImg.src = 'imgs/menu-close.svg';
   }
}