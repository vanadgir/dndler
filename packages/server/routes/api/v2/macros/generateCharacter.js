async function generateCharacter() {
  const url = 'http://localhost:8000/api/v2/nuddermin';

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);


    return {
      data
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

export default generateCharacter;