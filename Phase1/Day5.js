function calculateSquareRoot(number) {
    try {
      // Check if number is negative
      if (number < 0) {
        throw new Error('Cannot calculate square root of a negative number!');
      }
  
      // Calculate square root
      let result = Math.sqrt(number);
      console.log(`Square Root: ${result}`);
    } catch (err) {
      // Handle errors
      console.log('Error:', err.message);
    } finally {
      // Always execute
      console.log('Execution Completed!');
    }
  }
  
  // Test Cases
  calculateSquareRoot(25);  // Valid Input
  calculateSquareRoot(-4);  // Invalid Input
  