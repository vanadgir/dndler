game.actors.filter((i) => i.type === "character").forEach((i) => {
  game.actors.get(i.id).delete();
})