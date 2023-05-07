const btn=document.querySelector(".ham");
const btns=document.querySelector(".li")
   const nav=document.querySelector("nav");
   btn.addEventListener("click",()=>{
    btn.classList.toggle("is-active");
    btns.classList.toggle("is-active");
    nav.classList.toggle("active")
   }) 