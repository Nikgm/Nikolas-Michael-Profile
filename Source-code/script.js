/*NAVIGATION BAR*/
const mainPageContent = document.getElementById('main-page-content');
const projectsContent = document.getElementById('projects-content');
const resumeContent = document.getElementById('resume-content');

const projectNavLink = document.getElementById('project-nav-link');
const homeNavLink = document.getElementById('home-nav-link');
const resumeNavLink = document.getElementById('resume-nav-link')
const contactButton = document.getElementById('contact-nav-link');

homeNavLink.addEventListener('click',() =>{
    mainPageContent.style.display = 'block';
    projectsContent.style.display = 'none';
    resumeContent.style.display = 'none';
})

projectNavLink.addEventListener('click',() =>{
    mainPageContent.style.display = 'none';
    projectsContent.style.display = 'block';
    resumeContent.style.display = 'none';
});

resumeNavLink.addEventListener('click',() =>{
    mainPageContent.style.display = 'none';
    projectsContent.style.display = 'none';
    resumeContent.style.display = 'block';
})

contactButton.addEventListener('click',() =>{
    mainPageContent.style.display = 'block';
    projectsContent.style.display = 'none';
    resumeContent.style.display = 'none';
});

/*NAVIGATION BAR MOBILE*/
const menuButton = document.getElementById('menu-icon');
const menuList = document.getElementById('navLinks');
const exitMenu = document.getElementById('exit-menu-button');

menuButton.addEventListener('click', () =>{
    menuButton.style.display = 'none'
    menuList.style.display = 'block'
    exitMenu.style.display = 'inline-block'
});

exitMenu.addEventListener('click', () =>{
    menuButton.style.display = 'block'
    menuList.style.display = 'none'
    exitMenu.style.display = 'none'
})

/*CAROUSEL*/
const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

/*RESUME SECTION*/
const pdfLink = document.getElementById('pdf-link');
const pdfText = document.getElementById('pdf-text');

pdfLink.addEventListener('click', ()=>{
    pdfText.innerHTML = '(This link does nothing :P)'
})



