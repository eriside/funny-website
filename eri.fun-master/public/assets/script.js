document.querySelector("link[id='theme-css']").href = "assets/css/light.css";

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.querySelector("link[id='theme-css']").href = "assets/css/dark.css";
}

function slideDown(element, delay) {
  setTimeout(() => {
    element.classList.remove("hidden")
    element.classList.add("animate__animated")
    element.classList.add("animate__fadeInDown")
  }, delay)
}

function slideIn(element, delay) {
  setTimeout(() => {
    element.classList.remove("hidden")
    element.classList.add("animate__animated")
    element.classList.add("animate__fadeInUp")
  }, delay)
  setTimeout(() => {
    element.classList.remove("animate__animated")
    element.classList.remove("animate__fadeInUp")
  }, delay + 1000)  
}

// function toTopButton() {
//   if (
//     document.body.scrollTop > 300 || 
//     document.documentElement.scrollTop > 300 
//     ) {
//     document.getElementById("toTopButton").style.opacity = "100";
//   } else {
//     document.getElementById("toTopButton").style.opacity = "0";
//   }

//   setTimeout(() => {toTopButton()}, 1)
// }

function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top < (window.pageYOffset + window.innerHeight) &&
    left < (window.pageXOffset + window.innerWidth) &&
    (top + height) > window.pageYOffset &&
    (left + width) > window.pageXOffset
  );
}

// onmousemove = function(e) {
//   var d = document.getElementById('mouseCircle');
//   d.style.position = "absolute";
//   d.style.left = e.clientX+'px';
//   d.style.top = e.clientY+'px';  
// }

// setTimeout(() => {toTopButton()}, 1)