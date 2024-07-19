//2. Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.

function calculate(a, b, operation) {
    switch (operation) {
      case 'add':
        return a + b;
      case 'subtract':
        return a - b;
      case 'multiply':
        return a * b;
      case 'divide':
        if (b !== 0) {
          return a / b;
        } else {
          return 'Division by zero error';
        }
      default:
        return 'Invalid operation';
    }
  }
  
  console.log(calculate(10, 7, 'add'));      
  console.log(calculate(10, 7, 'subtract')); 
  console.log(calculate(10, 7, 'multiply')); 
  console.log(calculate(10, 7, 'divide'));   