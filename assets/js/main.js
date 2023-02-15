//Navbar
const NavTogle = document.getElementById('bar'),
    NavMenu = document.getElementById('navbar'),
    NavClose = document.getElementById('close')
// profil = document.getElementById('profil')

// Show Navbar 
if (NavTogle) {
    NavTogle.addEventListener('click', () => {
        NavMenu.classList.add('show-menu')
    })
}

// close Navbar
if (NavClose) {
    NavClose.addEventListener('click', () => {
        NavMenu.classList.remove('show-menu')
    })
}

login

const inputEmail = document.getElementById('inputEmail')
const btn = document.getElementById('btn')
// let loader = document.getElementById('loading')
// const profil = document.getElementById('profil')

// loader.style.display = "none"
// function btnLogin() {
//     loader.style.display = "block"
//     console.log('login berhasil')
//     inputEmail.style.display = "none"
//     btn.style.display = "none"
//     setTimeout(() => {
//         profil.style.display = "block"
//     }, 6000)
// }

// setInterval(() => {
//     loader.style.display = "none"
// }, 8000)


// profile
// function profilUser(){
//     console.log('provil active')
// }
