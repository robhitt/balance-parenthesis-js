// *********************************
// CHECK IF PARENTHESIS ARE BALANCED
// *********************************
// USE A STACK!!!

var tokens = {
  '[': ']',
  '{': '}',
  '(': ')'
};
var opening = Object.keys(tokens);
var closing = Object.values(tokens);

var btn = document.getElementById('btn');
btn.addEventListener('click', checkIsBalanced);

document.getElementById("input-one").addEventListener("keyup", function(event) {
    event.preventDefault(); // Left this in case I convert to a form in the future
    if (event.keyCode == 13) {
      checkIsBalanced()
    }
});

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

// *** Check if character is an opening bracket ***
function isOpenParentheses(parenthesesChar) {
  return opening.includes(parenthesesChar)
}

// *** Check if character is an closing bracket ***
function isCloseParentheses(parenthesesChar) {
  return closing.includes(parenthesesChar)
}

// *** Check if opening bracket matches closing bracket ***
function matches(topOfStack, closedParentheses) {
  return tokens[topOfStack] === closedParentheses
}

// *** We excute this function upon the event ***
function isBalanced(inputStr) {
  if (inputStr === null) { return true; }

  var expression = inputStr.split('');
  var stack = [];

  var currChar, top
  for (var i = 0; i < expression.length; i++) {
    currChar = expression[i]
    if (isOpenParentheses(currChar)) {
      stack.push(currChar);
    } else if (isCloseParentheses(currChar)) {
      if (stack.length === 0) {
        return false;
      }

      top = stack.pop(); // pop off the top element from stack
      if (!matches(top, currChar)) {
        return false;
      }
    }
  }

  return !stack.length;
}
