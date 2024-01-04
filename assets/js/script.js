let rotationImg=document.getElementsByClassName('home_img');
let rotation = 0;

setInterval(function(){
rotation += 360;
for  (let i=0; i<rotationImg.length; i++){
    rotationImg[i].style.transform="rotate("+ rotation +"deg)";
}
},5000);

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


/*************skills***************/
const skillsContent = document.getElementsByClassName('skills_content'),
    skillsHeader = document.querySelectorAll('.skills_header')

    function toggleSkills (){
        let itemClass = this.parentNode.getElementsByClassName
        for(i=0; i<skillsContent.length; i++){
            skillsContent[i].className = 'skills_content skills_close'
        }
        if(itemClass === 'skills_content skills_close'){
            this.parentNode.className = 'skills_content skills_open'
        }
    }

    // /********swiper auto************ */
    // let sliderInner=document.querySelector('.swiper-wrapper');
    // let images = sliderInner.querySelectorAll('img');
    // let index = -3;

    // setInterval(function(){
    //     let percentage = index * -33.5;
    //     sliderInner.style.transform="translateX("+ percentage +"%)";
    //     if(index > (images.length)){
    //         index = -2;
    //     }
    //     index++;
    // },1500);


    




    /**********esto fue barra de navegacion */
// button.addEventListener('click', ()=>{
//     nav.classList.toggle('active')
// });
