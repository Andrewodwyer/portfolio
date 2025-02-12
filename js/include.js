$(document).ready(function() {
    // Load navigation and footer via jQuery
    $("#nav-placeholder").load("components/nav.html");
    $("#footer-placeholder").load("components/footer.html");

    // Scroll animation for the entire page sections (project sections)
    $(window).scroll(function() {
        // Section visibility animation for project sections
        $(".project-section").each(function() {
            const sectionTop = $(this).offset().top;
            const sectionBottom = sectionTop + $(this).outerHeight();
            const windowTop = $(window).scrollTop();
            const windowBottom = windowTop + $(window).height();

            // If the section is in the viewport, add class for animation
            if (sectionBottom >= windowTop && sectionTop <= windowBottom) {
                $(this).addClass('in-view');  // Add 'in-view' class to trigger animation
            } else {
                $(this).removeClass('in-view');  // Remove 'in-view' class if section is out of view
            }
        });
    });
});

$(document).ready(function() {
    // Load navigation and footer via jQuery
    $("#nav-placeholder").load("components/nav.html");
    $("#footer-placeholder").load("components/footer.html");

    // Scroll animation for navbar logo
    $(window).scroll(function() {
        const scrollPosition = $(window).scrollTop();
        const navbar = $(".navbar");

        // When scrolling down 100px, add the 'scrolled' class to the navbar
        if (scrollPosition > 100) {
            navbar.addClass("scrolled");
        } else {
            navbar.removeClass("scrolled");
        }
    });
});