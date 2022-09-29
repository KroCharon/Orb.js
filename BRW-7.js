document.body.onmousemove = function (slide) {
  console.log("MOVING MOVING", slide.clientX, slide.clientY);

  let xPos = document.querySelector("#mouse-x");
  let yPos = document.querySelector("#mouse-y");

  xPos.innerText = slide.clientX;
  yPos.innerText = slide.clientY;
};

//@PananKO how to make this an event listener instead;
// Why can't I host this on netlify
// how I could alter the users crosshair

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px"
  );
});

// how to rewrite this @PananKO
// how to do like addEventListener(mousemove, function(e) {})
// how do do this style stuff in css

//e.payeY - 10; cursor width and height are 20, 10 centers ez clap
