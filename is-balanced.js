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
  function isOpenParenthesis(parenthesisChar) {
    return opening.includes(parenthesisChar);
  }

  // *** Check if character is an closing bracket ***
  function isCloseParenthesis(parenthesisChar) {
    return closing.includes(parenthesisChar);
  }

  // *** Check if opening bracket matches closing bracket ***
  function matches(topOfStack, closedParenthesis) {
    return tokens[topOfStack] === closedParenthesis;
  }

  // *** We excute this function upon the event ***
  function isBalanced(inputStr) {
    if (inputStr === null) { return true; }

    var expression = inputStr.split('');
    var stack = [];

    var currChar, top;
    for (var i = 0; i < expression.length; i++) {
      currChar = expression[i]
      if (isOpenParenthesis(currChar)) {
        stack.push(currChar);
      } else if (isCloseParenthesis(currChar)) {
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

  return isBalanced;

})()