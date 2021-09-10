const nav_links = document.querySelectorAll('.navbar-nav a');
let previously_selected_link = undefined;

function highlight_nav_link(target_nav_link) {
  console.log(`Clicked ${target_nav_link}`);
  if(target_nav_link != previously_selected_link) {
    
    if(previously_selected_link != undefined)
      previously_selected_link.classList.remove('selected-nav-link');

    target_nav_link.classList.add('selected-nav-link');
    previously_selected_link = target_nav_link;
  
  }
}

for(const nav_link of nav_links) {
  nav_link.addEventListener('click', function() {
    highlight_nav_link(nav_link);
  });
}