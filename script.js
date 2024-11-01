document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: "smooth"
        });
    })
})
const navlink = document.querySelector('.nav-links');
function toggleMenu(){
    navlink.classList.toggle('show');
}
function resizeHandling(){
    if(window.innerWidth>700){
        navlink.classList.remove('show');
    }
}

window.addEventListener('resize',resizeHandling);
