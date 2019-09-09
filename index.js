var btn = document.getElementById('btn');
btn.addEventListener('click', checkIsBalanced);

document.getElementById("input-one").addEventListener("keyup", function(event) {
    event.preventDefault(); // Left this in case I convert to a form in the future
    if (event.keyCode == 13) {
      checkIsBalanced()
    }
});

// *** Grabs input, checks balance, and prints to screen  ***
function checkIsBalanced() {
  var parensStr = document.getElementById('input-one');
  var inputStr = parensStr.value
  printToScreen(isBalanced(inputStr));
}

// *** Prints answer of the string to the HTML page  ***
function printToScreen(bool) {
  var parensStr = document.getElementById('input-one');
  var inputStr = parensStr.value
  var answer = document.getElementById('answer');
  if (bool) {
    answer.innerHTML = `WooHoo! Your string <div class='bold'>\" ${inputStr}\ "</div> is <span class='bolder-too'>balanced</span>!`;
  } else {
    answer.innerHTML = `Ack! Your string <div class='bold dirty-font'>\" ${inputStr} \"</div> is <span class='bolder-too'>unbalanced</span>, check your string again.`;
  }
}


