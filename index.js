/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById("time").value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  let timeNow = timeString.split(":");
  let hourNow = parseInt(timeNow[0]);
  if (hourNow < 12) {
    return "Good Morning";
  } else if (hourNow > 17) {
    return "Good Evening";
  }
  return "Good Afternoon";
}

/* Write your implementation of displayMessage() */

function displayMessage(string) {
  document.getElementById("greeting").innerText = string;
}
