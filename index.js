let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");

box1.addEventListener("click", selectSquare);

function selectSquare() {
  box1.classList.toggle("pressed");
    if(box1.classList.contains("pressed")){
      box2.classList.remove("pressed");
      box3.classList.remove("pressed");
    }
};

box2.addEventListener("click", event => {
  box2.classList.toggle("pressed");
  if (box2.classList.contains("pressed")){
    box1.classList.remove("pressed");
    box3.classList.remove("pressed");
  }
});

box3.addEventListener("click", event => {
  box3.classList.toggle("pressed");
  if(box3.classList.contains("pressed")){
      box2.classList.remove("pressed");
      box1.classList.remove("pressed");
  }
});
