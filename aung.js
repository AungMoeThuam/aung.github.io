const container = document.querySelector(".container");
const card = document.querySelector(".card");
const image = document.querySelector(".image");
const title = document.querySelector(".title");
const para = document.querySelector(".para");
const btn = document.querySelector(".btn");
const submit = document.querySelector(".submit");

container.addEventListener("mousemove", (e) => {
  let axisX = (window.innerWidth / 2 - e.pageX) / 10;
  let axisY = (window.innerHeight / 2 - e.pageX) / 10;
  card.style.transform = `rotateY(${axisX}deg) rotateX(${axisY}deg)`;
});

container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  title.style.transform = "translateZ(150px)";
  image.style.transform = "translateZ(150px) rotateZ(60deg)";
  para.style.transform = "translateZ(150px)";
  btn.style.transform = "translateZ(150px)";
  submit.style.transform = "translateZ(150px)";
});

container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.4s ease";
  card.style.transform = "none";
  image.style.transform = "";
  title.style.transform = "translateZ(0)";

  para.style.transform = "translateZ(0)";
  btn.style.transform = "translateZ(0)";
  submit.style.transform = "translateZ(0)";
});
