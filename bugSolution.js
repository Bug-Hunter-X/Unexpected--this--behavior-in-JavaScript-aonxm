function myFunc() {
  const self = this; // Create a self-referencing variable
  console.log(self); // 'this' is now correctly bound
}

myFunc.call({ name: 'Test Object' }); // 'this' correctly bound to the object