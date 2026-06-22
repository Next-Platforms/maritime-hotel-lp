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

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSmoothScroll);
  } else {
    initSmoothScroll();
  }
})();
