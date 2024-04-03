// console.log("Time to get started...");

// const userName = "Max";
// console.log("My name is: ", userName);

const click = document.querySelector("button");
function clickHandler(message: string) {
  console.log("click me " + message);
}

if (click) {
  click.addEventListener("click", clickHandler.bind(null, "Yes"));
}
