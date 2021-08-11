var navLinks = document.getElementById("navLinks");

// Show The Menu (Phone)
function showMenu(){
    navLinks.style.right="0";
}

// Hide The Menu (Phone)
function hideMenu(){
    navLinks.style.right = "-200px";
}

$('a[href*=\\#]').on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
});

