document.querySelectorAll(".carousel").forEach(el => {
  const imgs = el.querySelectorAll("img");
  let i = 0;
  imgs[0].classList.add("active");
  const show = n => { imgs[i].classList.remove("active"); i = (n + imgs.length) % imgs.length; imgs[i].classList.add("active"); };
  const btn = (cls, txt, fn) => Object.assign(document.createElement("button"), {className: `carousel-nav ${cls}`, textContent: txt, onclick: fn});
  el.append(btn("carousel-prev", "‹", () => show(i - 1)), btn("carousel-next", "›", () => show(i + 1)));
});
