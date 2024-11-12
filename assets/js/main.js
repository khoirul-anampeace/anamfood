/* ============== SHOW MENU ============== */
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    // Validate that variable exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with nav_manu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/* ============== Click btn ============== */
const showNotif = (btnView, btnM) =>{
    const notif = document.getElementById(btnView);
    btn = document.getElementById(btnM);

    if(notif && btn){
        notif.addEventListener('click', ()=>{
            btn.classList.toggle('show-btn-notif');
        })
    }
}
showNotif('btn-view', 'btn-me')
/* ============== REMOVE MENU MOBILE ============== */
const closeNotif = document.getElementById('close-notif');

function closeAction(){
    const btnclose = document.getElementById('btn-me');
    btnclose.classList.remove('show-btn-notif');
}
closeNotif.addEventListener('click', closeAction)



/* ============== REMOVE MENU MOBILE ============== */
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
// when we click on each nav_link, we remove the show-menu class

/* ============== SCROLL SECTIONS ACTIVE LINK ============== */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
 
/* ============== CHANGE BACKGROUND HEADER ============== */
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll header class tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* ============== SHOW SCROLL TOP ============== */
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 400) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)


/* ============== CHANGE BACKGROUND HEADER ============== */
/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home_data, .home_img,
            .about__data, .about__img,
            .services_content, .menu_content,
            .app_data, .app_img,
            .contact_data, .contact_button,
            .footer_content`, {
    interval: 200
})