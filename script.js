const wrapper = document.querySelector(".wrapper");
const registerLink = document.querySelector(".register-link");
const loginLink = document.querySelector(".login-link");
const btnPopup = document.querySelector(".login-popup")
const closeLogin = document.querySelector(".close-login")

registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
})


loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
})

btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
})

closeLogin.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
})