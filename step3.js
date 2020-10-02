let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");

let boxes = [ box1, box2, box3 ];

// selectSquareConcrete removed

function selectSquareAbstract(event) {
  const pressedBox = event.target;

  const notPressedBoxes = boxes.filter(b => b.id !== pressedBox.id);

  for (let notPressedBox of notPressedBoxes) {
    notPressedBox.classList.remove('pressed');
  }

  pressedBox.classList.add('pressed');
}

/**
 * STEP 3
 * Any time we see the same instruction multiple times
 * in a row, in which the only thing that changes, this
 * means we can use a loop to write (maybe) less code,
 * but, more importantly, make our code abstract,
 * so that it will continue to work when the concrete
 * variables change, without us having to manually edit it
 * (for instance if someone added a fourth box)
 * 
 */
box1.addEventListener("click", selectSquareAbstract);
box2.addEventListener("click", selectSquareAbstract);
box3.addEventListener("click", selectSquareAbstract);
