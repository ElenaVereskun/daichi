const drop = document.querySelector(".drop");

function handleDropClick(event) {
  if (!event.target.classList.contains("drop__text_active")) {
    console.log("card1");
    event.target.classList.add("drop__text_active");
  } else {
    console.log("card2");
    event.target.classList.remove("drop__text_active");
  }
}

drop.addEventListener("click", handleDropClick);

const like = document.querySelector(".button-like");

function handleLike(event) {
  if (!event.target.classList.contains("button-like_active")) {
    event.target.classList.add("button-like_active");
  } else {
    event.target.classList.remove("button-like_active");
  }
}

like.addEventListener("click", handleLike);
