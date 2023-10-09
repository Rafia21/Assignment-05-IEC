let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (event) => {
    let buttonValue = event.target.innerHTML;

    if (buttonValue === "=") {
      try {
        string = eval(string);
        input.value = string;
      } catch (error) {
        input.value = "Error";
      }
    } else if (buttonValue === "AC") {
      string = "";
      input.value = string;
    } else if (buttonValue === "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else if (buttonValue === "√") {
      if (!isNaN(parseFloat(string))) {
        // Calculate the square root only if the input is a valid number
        string = Math.sqrt(parseFloat(string));
        input.value = "√" + string; // Display the operator as well
      } else {
        input.value = "Invalid Input";
      }
    } else if (buttonValue === "%") {
      if (!isNaN(parseFloat(string))) {
        // Calculate the percentage
        string = parseFloat(string) / 100;
        input.value = string + "%"; // Display the percentage
      } else {
        input.value = "Invalid Input";
      }
    } else {
      string += buttonValue;
      input.value = string;
    }
  });
});
