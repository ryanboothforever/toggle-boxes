let boxElements = document.querySelectorAll('.shape');
let boxes = Array.from(boxElements);

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
