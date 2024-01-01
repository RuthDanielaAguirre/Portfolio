//const button = document.querySelector('.button')
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById('nav-close')
/*show*/
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
/*close*/
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*remove menu*/

const navlink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}

navlink.forEach(n => n.addEventListener('click', linkAction))

// button.addEventListener('click', ()=>{
//     nav.classList.toggle('active')
// });
