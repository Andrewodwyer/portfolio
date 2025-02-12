$(document).ready(function() {
    // Load navigation and footer via jQuery
    $("#nav-placeholder").load("components/nav.html");
    $("#footer-placeholder").load("components/footer.html");

    // Scroll animation for the hero logo (no scroll effect for the hero section itself)
    $(window).scroll(function() {
        const scrollPosition = $(window).scrollTop();
        const hero = $('.hero');
        const logo = $('.logo');
        const heroHeight = hero.height();

        // Calculate logo size (30% to 40% of its width)
        const logoWidth = 35 + (scrollPosition / heroHeight) * 5; // Logo increases from 30% to 40%

        // Apply changes to the logo width
        logo.css({
            width: `${Math.min(logoWidth, 37)}%`, // Ensure logo width doesn't exceed 40%
        });
    });

    // Scroll animation for each project section
    $(window).scroll(function() {
        // For each project section, check if it's in view
        $(".project-section").each(function() {
            const sectionTop = $(this).offset().top;
            const sectionBottom = sectionTop + $(this).outerHeight();
            const windowTop = $(window).scrollTop();
            const windowBottom = windowTop + $(window).height();

            // If the section is in the viewport
            if (sectionBottom >= windowTop && sectionTop <= windowBottom) {
                $(this).addClass('in-view');  // Add class to trigger animation
            } else {
                $(this).removeClass('in-view');  // Remove class if out of view
            }
        });
    });
});
