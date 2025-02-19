$(document).ready(function () {
    // Load navigation and footer via jQuery
    $("#nav-placeholder").load("components/nav.html");
    $("#footer-placeholder").load("components/footer.html");

    // Function to handle scroll animations
    function handleScroll() {
        let scrollTop = $(window).scrollTop();
        let windowHeight = $(window).height();

        // Section visibility animation for project sections
        $(".project-section").each(function () {
            let sectionTop = $(this).offset().top;
            let sectionBottom = sectionTop + $(this).outerHeight();

            // Check if section is in viewport
            if (sectionBottom >= scrollTop && sectionTop <= scrollTop + windowHeight) {
                $(this).addClass("in-view");
            } else {
                $(this).removeClass("in-view");
            }
        });

        // Navbar logo centering logic
        let logo = $(".navlogo");
        if (scrollTop > 160) {  // scroll threshold to 160px
            logo.addClass("center-logo");
        } else {
            logo.removeClass("center-logo");
        }
    }

    // Attach scroll event listener (debounced for performance)
    $(window).on("scroll", handleScroll);
});