const saveCharacter = (character) => {
  const str = JSON.stringify(character);
  const blob = new Blob([str], {
    type: "application/octet-stream",
  });

  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `${character.name}.json`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default saveCharacter;