// Tap or click any figure tile to see it full size (hover already enlarges it on desktop).
// Escape, a click, or a tap closes it.
(function () {
  var box = document.getElementById("lightbox");
  if (!box) return;
  var img = box.querySelector("img");
  var cap = box.querySelector("p");
  function open(src, alt) {
    img.src = src; img.alt = alt || ""; cap.textContent = alt || "";
    box.hidden = false; document.body.style.overflow = "hidden";
  }
  function close() { box.hidden = true; img.src = ""; document.body.style.overflow = ""; }
  document.querySelectorAll("img.zoom").forEach(function (el) {
    el.setAttribute("tabindex", "0");
    el.addEventListener("click", function () { open(el.currentSrc || el.src, el.alt); });
    el.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(el.currentSrc || el.src, el.alt); }
    });
  });
  box.addEventListener("click", close);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !box.hidden) close(); });
})();
