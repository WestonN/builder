export default async function get_exercises() {
    try {
      const response = await fetch('/exercises.json');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json(); // Parse the JSON response
      console.log(data); // Work with the parsed JSON data
      return data; // Return the data when successful
    } catch (error) {
      console.error('Failed to fetch data:', error);
      return null; // Return null or empty object on error
    }
  }