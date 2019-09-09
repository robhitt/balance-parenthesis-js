// *********************************
// CHECK IF PARENTHESIS ARE BALANCED
// *********************************
// USE A STACK!!!

var tokens = [ ['{','}'] , ['[',']'] , ['(',')'] ];

var btn = document.getElementById('btn');
btn.addEventListener('click', isBalanced);

document.getElementById("input-one").addEventListener("keyup", function(event) {
    event.preventDefault(); // Left this in case I convert to a form in the future
    if (event.keyCode == 13) {
        var parensStr = document.getElementById('input-one');
        var inputStr = parensStr.value
        isBalanced(inputStr);
    }
});

// *** Check if character is an opening bracket ***
function isOpenParenthesis(parenthesisChar) {
  for (var j = 0; j < tokens.length; j++) {
    if (tokens[j][0] === parenthesisChar) {
      return true;
    }
  }
  return false;
}

// *** Check if opening bracket matches closing bracket ***
function matches(topOfStack, closedParenthesis) {
  for (var k = 0; k < tokens.length; k++) {
    if (tokens[k][0] === topOfStack && tokens[k][1] === closedParenthesis) {
      return true;
    }
  }
  return false;
}

// *** Checks if item is any sort of paranthesis ***
function isParanthesis(char) {
  var str = '{}[]()';
  if (str.indexOf(char) > -1) {
    return true;
  } else {
    return false;
  }
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

// *** We excute this function upon the event ***
function isBalancedinputStr {
  if (inputStr === null) { return true; }

  var expression = inputStr.split('');
  var stack = [];

  for (var i = 0; i < expression.length; i++) {
    if (isParanthesis(expression[i])) {
      if (isOpenParenthesis(expression[i])) {
        stack.push(expression[i]);
      } else {
        if (stack.length === 0) {
          return printToScreen(false);
        }
        var top = stack.pop(); // pop off the top element from stack
        if (!matches(top, expression[i])) {
          return printToScreen(false);
        }
      }
    }
  }

  var returnValue = stack.length === 0 ? true : false;
  printToScreen(returnValue)
}
