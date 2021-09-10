const nav_links = document.querySelectorAll('.navbar-nav a');

/* Variable used to store the previously selected link
  which will be used to reset its state back to normal when
  another nav link is clicked. */
let previously_selected_link = undefined;

function highlight_nav_link(target_nav_link) {

  /* Change the state of a link only if another link is clicked.
    Prevents a link from changing its state when clicked again and again. */
  if(target_nav_link != previously_selected_link) {
    
    // Initially when window is loaded no link is selected.
    if(previously_selected_link != undefined)
      previously_selected_link.classList.remove('selected-nav-link');

    target_nav_link.classList.add('selected-nav-link');
    previously_selected_link = target_nav_link;
  
  }
}

/* Attach event listener to all nav links to highlight
  then when clicked */
for(const nav_link of nav_links) {
  nav_link.addEventListener('click', function() {
    highlight_nav_link(nav_link);
  });
}