const url = "http://localhost:8000/api/v2/ids";

const itemsIds = Array.from(game.items.keys());

const itemIdsObject = itemsIds.reduce((obj, value, index) => {
  obj[index] = value;
  return obj;
}, {});

fetch(url, {
  method: "PUT",
  headers: {
    "Content-Type": "application/JSON",
  },
  body: JSON.stringify(itemIdsObject),
})
  .then((response) => response.json())
  .then((data) => console.log("PUT request successful", data))
  .catch((error) => console.error("Error:", error));

const items = {};

itemsIds.forEach(function (item) {
  Object.keys(items).includes(
    game.items.get(item).type)
      ? (items[game.items.get(item).type].push(game.items.get(item).name))
      : (items[game.items.get(item).type] = [game.items.get(item).name])
});

fetch(`${url}/items/`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/JSON",
  },
  body: JSON.stringify(items),
})
  .then((response) => response.json())
  .then((data) => console.log("PUT request successful", data))
  .catch((error) => console.error("Error:", error));

console.log(items);
