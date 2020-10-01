const allBoxesResult = document.querySelectorAll('.shape');
// We have to convert this to an array before we can use array methods on it.
// I wouldn't have expected you to know this, and I only remembered because I got an error at first.
const allBoxes = Array.from(allBoxesResult);

for (const box of allBoxes) {
  box.addEventListener('click', function(event) {
    const clickedBox = event.target;
    const notClickedBoxes = allBoxes.filter(function(box) {
      return box.id !== clickedBox.id;
    });

    for (const box of notClickedBoxes) {
      box.classList.remove('pressed');
    }

    clickedBox.classList.add('pressed');
  })
}