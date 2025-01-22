# Unexpected 'this' behavior in JavaScript

This repository demonstrates a common JavaScript error related to the unexpected behavior of the `this` keyword.

The `bug.js` file contains code that showcases how `this` can refer to the global object or `undefined` depending on the function's calling context.

The `bugSolution.js` file provides a solution to this issue, demonstrating how to explicitly bind the context of `this` using methods like `.bind()`, `.call()`, or `.apply()`, or by using arrow functions.

## Understanding the Problem

In JavaScript, the value of `this` depends on how a function is called. This can be particularly surprising when working with functions passed as callbacks or invoked within other contexts.

## How to Solve the Issue

The solution involves using one of the following techniques:

1. **Explicit Binding:** Use `.bind()`, `.call()`, or `.apply()` to explicitly set the value of `this` within the function.
2. **Arrow Functions:** Arrow functions lexically bind `this`, meaning `this` retains its value from the surrounding scope.
3. **Creating a Self-Referencing Variable:** Create a variable inside the function, assign `this` to that variable, and use the variable wherever you would typically use `this` within the function.  This approach avoids the problems with dynamically changing `this` values.
