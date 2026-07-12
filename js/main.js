(function () {
  "use strict";

  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");

  navToggle.addEventListener("click", function () {
    navToggle.classList.toggle("open");
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navToggle.classList.remove("open");
      navLinks.classList.remove("open");
    });
  });

  var sections = Array.prototype.slice.call(document.querySelectorAll("section[id], header[id]"));
  var navAnchors = Array.prototype.slice.call(navLinks.querySelectorAll("a"));

  function onScroll() {
    var pos = window.scrollY + 90;
    var current = sections[0];
    sections.forEach(function (sec) {
      if (sec.offsetTop <= pos) current = sec;
    });
    navAnchors.forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("href") === "#" + current.id);
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
