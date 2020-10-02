let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");

let boxes = [ box1, box2, box3 ];

/**
 * STEP 2 (probably the hardest, tbh)
 * We currently have three different functions that are being
 * assigned to each box as an onClick event handler (the selectSquare function)
 * and the two 'anonymous, fat arrow' functions that are declared in the 
 * addEventListener methods for the other two boxes.
 * 
 * The first step is to write one "selectSquare" function
 * that can be assigned as an event handler to all three boxes (in formal terms,
 * we are going to 'abstract' it).
 * 
 * By abstracting it, I mean that we are going to take them from 3 functions that fulfill
 * the following requirements...
 * 
 * "There are three boxes, box1, box2, and box3. If when this function1 is called, 
 * set box1 to 'pressed', and set box2 and box3 to 'not pressed'" (and then the corresponding
 * requirements for boxes 2 and 3)"
 * 
 * ... to a single function that fulfills the following requirements...
 * 
 * "There are some boxes. When this function is called, it will be passed a box as an argument.
 * It should set the box passed to it to 'pressed', and any other boxes to 'not pressed'"
 * 
 */

 // Original
function selectSquareConcrete() {
  box1.classList.toggle("pressed");
    if(box1.classList.contains("pressed")){
      box2.classList.remove("pressed");
      box3.classList.remove("pressed");
    }
};

/** 
 * There are some boxes (stored in the 'boxes' variable). 
 * When this function is called, it will be passed a box as an argument.
 * It should set the box passed to it to 'pressed', and any other boxes
 * to 'not pressed'
 */
function selectSquareAbstract(event) {
  const pressedBox = event.target;
  // TODO: Implement
  // NOTE: You might need to change your HTML slightly so that each
  // box has some unique attribute we can use to tell them apart.
  // The attribute 'id' is what is usually used for that.
}

box1.addEventListener("click", selectSquareAbstract);
box2.addEventListener("click", selectSquareAbstract);
box3.addEventListener("click", selectSquareAbstract);
