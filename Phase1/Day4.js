// Fetch user data from API

async function getUserData() {
  try{
    
    let response = await fetch('https://jsonplaceholder.typicode.com/users/1');

        // Check if response is successful
    if(!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    let data = await response.json();

    console.log(`User Name: ${data.name}`);
  } catch(error) {
    console.error(error , error.message);
  }
}


getUserData(); // Output: User Name: Leanne Graham

