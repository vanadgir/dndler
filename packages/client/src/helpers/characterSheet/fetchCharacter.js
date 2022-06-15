const fetchCharacter = async (options, history, historyCallback, indexCallback) => {
  try {
    const response = await fetch(`/characters`, {
      method: "POST",
      body: options
        ? JSON.stringify(options)
        : JSON.stringify({}),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if(response.ok) {
      const json = await response.json();
      historyCallback([...history, json]);
      indexCallback(history.length);
    } else throw new Error(`ERROR! Status code: ${response.status}`);
  } catch (error) {
    console.log(`Sorry, it broke because... ${error}`);
  }
};

export default fetchCharacter;