  $(document).ready(function() {
    $(".accordion-button").on("click", function() {
      const target = $(this).attr("data-bs-target");

      // Check if the target is already expanded
      if ($(target).hasClass("show")) {
        // Scroll to the top of the target content
        $([document.documentElement, document.body]).animate(
          {
            scrollTop: $(target).offset().top
          },
          800 // Adjust the animation speed as needed
        );
      }
    });
  });

