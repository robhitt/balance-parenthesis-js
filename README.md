# Balancing Parenthesis in Javascript

What data structure to use when balancing parenthesis?

Given a string of parenthesis such as ‘{ }( )[ ]’ return true or false if every opening parenthesis matches its closing partner. What’s the use of this? Imagine a situation if you were writing a compiler where you would need to check the syntax of a program to make sure all the parenthesis are matched up properly.

At first thought I was thinking to use some sort of recursion to check all the brackets to see if they’re matched up properly. However, there’s a much easier data structure we could use, a [stack](https://en.wikibooks.org/wiki/Data_Structures/Stacks_and_Queues)!

![stack photo](https://cdn-images-1.medium.com/max/1600/1*OD9AtPYO1Zf3HFHsndGezg.png)

************************************
**CHECK IF PARENTHESIS ARE BALANCED**
*************************************
LET’S USE A STACK!!!  
OUR RULES  
* return true if null, empty string, balanced parens. ‘{}([])’ or ‘{a}[b(c)]}’
* return false if ‘[(]’ , ‘]’ , ‘[(])’, ‘}[]{‘ , ‘[‘
* ignore all characters or spaces that are not ‘{}[]()’

**WHAT WE’LL CODE**  
1. Scan string (array) left to right
2. If element is an opening bracket — push onto stack
3. If element is a closing bracket — see if it matches last item in stack. If it does, pop off that last item & move onto the next element.
4. If at the end of the function the stack is empty return true!

**PSEUDO CODE**
If value of input string is null return false
* Convert the string to array  
* Iterate through the entire array
  * Use isParanthesis() to see if current element is a parenthesis
    * If it is, then use isOpenParenthesis() , if it returns true, push the open parenthesis character onto the stack
    * if isOpenParenthesis() returns false, check if top of stack. If it does not match the current element using the function matches(top, closedParanthesis) then we return false.
    * move onto next element
  * At end of our function executing check the stack to see if it is empty, if it is we know we’re balanced and can return True! Otherwise False as we’re not balanced.

**Try it here: https://robhitt.com/blog/balance-parenthesis-js/**

[![Website Screen Shot](https://cdn-images-1.medium.com/max/1600/1*XL_VE8DrpfdmNnjmwHoisg.png)](https://robhitt.com/blog/balance-parenthesis-js/)

### isBalanced()
```javascript
function isBalanced() {
  var parensStr = document.getElementById('input-one');
  var inputStr = parensStr.value
  if (inputStr === null) { printToScreen(true); }
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
  ```

### isParanthesis()
```javascript
function isParanthesis(char) {
  var str = '{}[]()';
  if (str.indexOf(char) > -1) {
    return true;
  } else {
    return false;
  }
}
```

### isOpenParenthesis()
```javascript
function isOpenParenthesis(parenthesisChar) {
  for (var j = 0; j < tokens.length; j++) {
    if (tokens[j][0] === parenthesisChar) {
      return true;
    }
  }
  return false;
}
```

### matches(topOfStack, closedParenthesis)
```javascript
function matches(topOfStack, closedParenthesis) {
  for (var k = 0; k < tokens.length; k++) {
    if (tokens[k][0] === topOfStack &&
        tokens[k][1] === closedParenthesis) {
      return true;
    }
  }
  return false;
}
```

### printToScreen()
```javascript
function printToScreen(bool) {
  var parensStr = document.getElementById('input-one');
  var inputStr = parensStr.value
  var answer = document.getElementById('answer');
  if (bool) {
    answer.innerHTML = `WooHoo! Your string <div class='bold'> \"     ${inputStr}\ "</div> is <span class='bolder-too'>balanced</span>!`;
  } else {
    answer.innerHTML = `Ack! Your string <div class='bold dirty-font'>\" ${inputStr} \"</div> is <span class='bolder-too'>unbalanced</span>, check your string again.`;
  }
}
```

#### TRY IT OUT FOR YOURSELF [HERE](https://robhitt.com/blog/balance-parenthesis-js/)
Have any suggestions? Want to make the page prettier? Please send me a pull request on [this repository](https://github.com/robhitt/balance-parenthesis-js). Find me on Twitter [@robhitt](http://www.twitter.com/robhitt) if you have any questions!
