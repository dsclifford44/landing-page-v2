/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav, dynamic nav menu that builds additional list items as added to HTML
const navBar = document.querySelector('#navbar__list');
const sections = document.getElementsByTagName('section');
for(section of sections) {
    const li = document.createElement("li");
    li.innerHTML = `<a href="#${section.id}" class="menu__link ${section.id}" >${section.dataset.nav}</a>`;
    navBar.appendChild(li);  
}



// Add class 'active' to section when near top of viewport
function makeActive(){
    for (section of sections) {
        const container = section.getBoundingClientRect();
        if (container.top<= 150 && container.bottom >=150) {
          section.classList.add("your-active-class");
        }else{
            section.classList.remove("your-active-class");
        }
        
    }
}
document.addEventListener("scroll", function(){
    makeActive();
});


documnet.querySelectorAll("section");
// Scroll to anchor ID using scrollTO event

//sections.scrollIntoView();
//sections.scrollIntoView(false);
//sections.scrollIntoView({block: "end"});
//sections.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


