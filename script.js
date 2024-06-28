function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
 
  const image = document.querySelector('#profile img')
    
  if(html.classList.contains('light')){
    image.setAttribute('src', "./assets/avatar-light.png")
  }else {
    image.setAttribute("src", "./assets/avatar.png")
  }
}