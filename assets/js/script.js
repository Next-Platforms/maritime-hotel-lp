/**
 * THE MARITIME HOTEL — Landing Page Scripts
 *
 * Handles smooth scrolling for in-page anchor links (nav cards → detail sections).
 */

(function () {
  "use strict";

  /** Smooth-scroll to hash targets when anchor cards or hash links are clicked. */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function (event) {
        var targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") {
          return;
        }

        var target = document.querySelector(targetId);

        if (!target) {
          return;
        }

        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  /** Initialize Intersection Observer for scroll reveal animations */
  function initScrollReveal() {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          } else {
            // Reset animations when scrolled out of view to the bottom
            var rect = entry.boundingClientRect;
            if (rect.top > 0) {
              entry.target.classList.remove("revealed");
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    var selector = ".scroll-reveal, .scroll-reveal-zoom, .scroll-reveal-left, .scroll-reveal-right";
    document.querySelectorAll(selector).forEach(function (el) {
      observer.observe(el);
    });
  }

  /** Immediately trigger load-reveal animations on load */
  function initLoadReveal() {
    setTimeout(function () {
      document.querySelectorAll(".load-reveal").forEach(function (el) {
        el.classList.add("revealed");
      });
    }, 50);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      initSmoothScroll();
      initScrollReveal();
      initLoadReveal();
    });
  } else {
    initSmoothScroll();
    initScrollReveal();
    initLoadReveal();
  }
})();
