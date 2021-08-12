var navLinks = document.getElementById("navLinks");

// Show The Menu (Phone)
function showMenu(){
    navLinks.style.right="-60px";
}

// Hide The Menu (Phone)
function hideMenu(){
    navLinks.style.right = "-200px";
}

var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
      navLinks.style.right = "-200px";
    prevScrollpos = currentScrollPos;
  }

$('a[href*=\\#]').on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
});

