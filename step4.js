/**
 * STEP 4
 * Again, the we see the same instruction repeated with different arguments,
 * so we have an opportunity to write less code and make it more abstract.
 * We cant use a loop here, but there is a nice DOM method that will help us called
 * querySelectorAll. You might need to change the classnames of your boxes.
 */
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");

let boxes = [ box1, box2, box3 ];

function selectSquareAbstract(event) {
  const pressedBox = event.target;

  const notPressedBoxes = boxes.filter(b => b.id !== pressedBox.id);

  for (let notPressedBox of notPressedBoxes) {
    notPressedBox.classList.remove('pressed');
  }

  pressedBox.classList.add('pressed');
}

for (const box of boxes) {
  box.addEventListener('click', selectSquareAbstract);
}
