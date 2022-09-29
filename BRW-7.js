document.body.onmousemove = function (slide) {
  console.log("MOVING MOVING", slide.clientX, slide.clientY);

  let xPos = document.querySelector("#mouse-x");
  let yPos = document.querySelector("#mouse-y");

  xPos.innerText = slide.clientX;
  yPos.innerText = slide.clientY;
};

/* challenge/potential route - how to make this an event listener instead;
Implement static hosting, alter user crosshair
*/

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px"
  );
});

// challenge/potential route - use addEventListener(mousemove, function(e) {})
//e.payeY - 10; cursor width and height are 20, 10 centers
