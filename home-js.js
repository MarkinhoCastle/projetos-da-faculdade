const cards = document.querySelectorAll(".card");
Array.prototype.forEach.call(cards, (card) => {
  let down,
    up,
    link = card.querySelector("h2 a");
  if (link !== null) {
    card.style.cursor = "pointer";
    card.onmousedown = () => (down = +new Date());
    card.onmouseup = (e) => {
      up = +new Date();
      if (up - down < 200 && e.button !== 2) {
        link.click();
      }
    };
  }
});
