game.actors
  .filter((a) => a.type === "character" && a.name.includes("DNDLER: "))
  .forEach((a) => {
    game.actors.get(a.id).delete();
  });
