/* Lumen landing page — small progressive-enhancement script */
(function () {
  "use strict";

  // --- Mobile navigation toggle ---
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("primaryNav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // Close the menu after tapping a link (mobile)
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A" && nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // --- Footer year ---
  var year = document.getElementById("year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  // --- CTA form (client-side only, no data leaves the page) ---
  var form = document.getElementById("ctaForm");
  var msg = document.getElementById("formMsg");

  if (form && msg) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = document.getElementById("email");
      var value = input ? input.value.trim() : "";
      var valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

      if (!valid) {
        msg.textContent = "Please enter a valid email address.";
        msg.style.color = "#f0b3a8";
        if (input) input.focus();
        return;
      }

      msg.textContent = "Thanks! We'll be in touch at " + value + ".";
      msg.style.color = "#9fe3c9";
      form.reset();
    });
  }
})();
