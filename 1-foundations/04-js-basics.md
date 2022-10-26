# 4. JavaScript basics

## Run JS code
The simplest way - create a HTML file with JavaScript code inside:
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page Title</title>
</head>
<body>
  <script>
    // Your JavaScript goes here!
    console.log("Hello, World!")
  </script>
</body>
</html>
```
And can see the output of the console.log statement int the Console tab of the Chrome Developer Tools. 

Another way to include JavaScript in a webpage is through an external script:
```html
<script src="javascript.js"></script>
```

## Variables
Refer to `https://javascript.info/variables`.

Three ways: 
- `let`: to declare a variable, new way
- `const`: to declare a constant variable, they cannot be reassigned. It is a common practice to use constants as aliases for difficult-to-remember/hard-coded values that are `known prior to execution` - they are named using all capital letters and underscores.
- `var`: almost the same as `let`, old way; sometimes the behavior of var is not what you would expect. 

It is recommended to use a single line per variable for declaration - better readability. When the name contains multiple words, camelCase is commonly used. 

The dollar sign '$' and the underscore '_' can also be used in names. They are regular symbols, just like letters, without any special meaning.

## Numbers
JavaScript numbers are always 64-bit floating point. 
- Integers are accurate up to 15 digits.
- Floating point arithmetic is not always 100% accurate.
- The maximum number of decimals is 17.
- NaN is a JavaScript reserved word indicating that a number is not a legal number. NaN is a number: `typeof NaN` returns number
- Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number. Division by 0 also generates Infinity. Infinity is a number. 
- JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.
- Assignment returns a value. The call x = value writes the value into x and then returns it. But do not use it this way - hard to read.
- You can chain assignments: `a = b = c = 2 + 2;`. But do not use it this way - hard to read.
- Doing maths is “safe” in JavaScript. We can do anything: divide by zero, treat non-numeric strings as numbers, etc. The script will never stop with a fatal error. At worst, we’ll get NaN as the result.
- BigInt type was recently added to the language to represent integers of arbitrary length. It is created by appending n to the end of an integer: `const bigInt = 1234567890123456789012345678901234567890n;`
- `null` is a special value which represents “nothing”, “empty” or “value unknown”.
- `undefined` means “value is not assigned”.
- Normally, one uses null to assign an “empty” or “unknown” value to a variable, while undefined is reserved as a default initial value for unassigned things.



Comparison operators:
- ===	Strict equality	- Tests whether the left and right values are identical to one another
- == Regular equality - if value are same, ignore type 

## Data types
A variable can at one moment be a string and then store a number. Programming languages that allow such things, such as JavaScript, are called “dynamically typed”, meaning that there exist data types, but variables are not bound to any of them.

In JavaScript, there are 3 types of quotes.
- Double quotes: "Hello".
- Single quotes: 'Hello'.
- Backticks: \`Hello\`.

Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript. Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them, e.g: alert(\`the result is ${1 + 2}\`); // returns 3  

There are 8 basic data types in JavaScript.
Seven `primitive` data types:
- `number` for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
- `bigint` for integer numbers of arbitrary length.
- `string` for strings. A string may have zero or more characters, there’s no separate single-character type.
- `boolean` for true/false.
- `null` for unknown values – a standalone type that has a single value null.
- `undefined` for unassigned values – a standalone type that has a single value undefined.
- `symbol` for unique identifiers.
And one `non-primitive` data type:
- `object` for more complex data structures.

```js
const myStr = 'I\'m round. '; // escape ' with \'
```

## JavaScript Developer Tools
The Developer Tools are useful for running JavaScript code, editing HTML and CSS styles without having to refresh the page, and viewing performance data.

## Functions
- Functions can have optional parameters. 
- Functions can be anonymous, and can be expressed in arrow form
- Values passed to a function as parameters are copied to its local variables.
- Variables declared outside of any function are called global variables - they are visible from any function (unless shadowed by locals). It’s a good practice to minimize the use of global variables. Modern code has few or no globals.
- If a function is called, but an argument is not provided, then the corresponding value becomes undefined. That’s not an error. 
- It is possible to use return without a value. That causes the function to exit immediately.
- It is a common practice to start a function with a verbal prefix which vaguely describes the action. There must be an agreement within the team on the meaning of the prefixes.
- Functions should be short and do exactly one thing. If that thing is big, maybe it’s worth it to split the function into a few smaller functions.
- A Function Expression is created when the execution reaches it and is usable only from that moment. A Function Declaration can be called earlier than it is defined.
- As a rule of thumb, when we need to declare a function, the first thing to consider is Function Declaration
- Arrow functions can be used in the same way as Function Expressions.

## Problem Solving
The best way to improve your problem solving ability is by building experience by making lots and lots of programs. The more practice you have the better you’ll be prepared to solve real world problems.

Many beginners try to solve the big problem in one go. Don’t do this. If the problem is sufficiently complex, you’ll get yourself tied in knots and make life a lot harder for yourself. Decomposing problems into smaller and easier to solve subproblems is a much better approach. Decomposition is the main way to deal with complexity, making problems easier and more approachable to solve and understand.


“If you can’t explain something in simple terms, you don’t understand it.” — Richard Feynman

“Just when you think you’ve successfully navigated one obstacle, another emerges. But that’s what keeps life interesting. Life is a process of breaking through these impediments — a series of fortified lines that we must break through. Each time, you’ll learn something. Each time, you’ll develop strength, wisdom, and perspective. Each time, a little more of the competition falls away. Until all that is left is you: the best version of you.” — Ryan Holiday (The Obstacle is the Way)

## Understanding Errors















