const mainPageContent = document.getElementById('main-page-content');
const projectsContent = document.getElementById('projects-content');

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

const projectNavLink = document.getElementById('project-nav-link');
const homeNavLink = document.getElementById('home-nav-link');

homeNavLink.addEventListener('click',() =>{
    mainPageContent.style.display = 'block';
    projectsContent.style.display = 'none';
})

projectNavLink.addEventListener('click',() =>{
    mainPageContent.style.display = 'none';
    projectsContent.style.display = 'block';
});


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

let windowSize = window.matchMedia("(max-width: 768px)");

if (windowSize.matches){
    console.log('screen is ma')
    menuButton.style.display = 'block'
}

const mediaQuery = window.matchMedia('(min-width: 768px)')

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    console.log('Media Query Matched!')
  }
}

// Register event listener
mediaQuery.addListener(handleTabletChange)


handleTabletChange(mediaQuery)