/* Creates 5 Star Rating Component (not interactive)
Produces:
<section>
  <img src="star.svg" />
  <img src="star.svg" />
  <img src="star.svg" />
  <img src="star.svg" />
  <img src="star.svg" />
</section>
*/

const createStars = (checkedCount = 0) => {
  if (checkedCount < 0 || checkedCount > 5) {
    return;
  }

  const starBox = document.createElement("section");
  starBox.classList.add("star-box");

  for (let i = 0; i < 5; i++) {
    const star = document.createElement("img");

    if (checkedCount > 0) {
      star.setAttribute("src", "assets/star-filled.svg");
      checkedCount--;
    } else {
      star.setAttribute("src", "assets/star-empty.svg");
    }

    starBox.appendChild(star);
  }

  return starBox;
};

export { createStars };
