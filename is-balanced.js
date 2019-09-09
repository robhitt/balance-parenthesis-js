// *********************************
// CHECK IF PARENTHESIS ARE BALANCED
// *********************************
// USE A STACK!!!

var isBalanced = (function() {

  var tokens = {
    '[': ']',
    '{': '}',
    '(': ')'
  };
  var opening = Object.keys(tokens);
  var closing = Object.values(tokens);

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

  return isBalanced

})()