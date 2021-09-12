const nav_links = document.querySelectorAll('.navbar .navbar-nav a');
const mobile_nav_links = document.querySelectorAll('.mobile-navbar a');

/* Variable used to store the previously selected link
  which will be used to reset its state back to normal when
  another nav link is clicked. */
let previously_selected_link = undefined;

// Injects a classname to a selected nav link to highlight it.
function highlight_nav_link(target_nav_link, classname) {

  /* Change the state of a link only if another link is clicked.
    Prevents a link from changing its state when clicked again and again. */
  if(target_nav_link != previously_selected_link) {
    
    // Initially when window is loaded no link is selected.
    if(previously_selected_link != undefined)
      previously_selected_link.classList.remove(classname);

    target_nav_link.classList.add(classname);
    previously_selected_link = target_nav_link;
  
  }
}

/* Attach event listener to all nav links to highlight
  then when clicked */
for(const nav_link of nav_links) {
  nav_link.addEventListener('click', function() {
    highlight_nav_link(nav_link, 'selected-nav-link');
  });
}

/* Attach event listener to all mobile nav links to highlight
  them when clicked. */
for(const nav_link of mobile_nav_links) {
  nav_link.addEventListener('click', function() {
    console.log('clicked mobile link');
    highlight_nav_link(nav_link, 'selected-nav-link-mobile');
  });
}