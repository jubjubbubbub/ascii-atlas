function handleCommand(cmdRaw) {
  let cmd = cmdRaw.toLowerCase().trim();

  // HELP (top-level)
  if (cmd === "help") {
    listOptions("Available commands", [
      "explore",
      "sell",
      "gift",
      "help",
      "help explore",
      "help sell",
      "help gift",
      "help tip"
    ], "help");
    return;
  }

  // HELP TIP
  if (cmd === "help tip") {
    const tips = [
      "Mascots sometimes trigger hidden events—explore twice to see if lore changes.",
      "Typing 'explore' alone shows all locations. Use arrows or Tab to cycle quickly.",
      "Lantern posts flicker when an event is about to trigger—watch the glow.",
      "Sell commands are shortcuts: type 'sell' to see shops, then click or Tab to pick.",
      "Gift commands unlock lore—shrines and gardens often reveal mascot secrets.",
      "Try typing partial names after 'explore' (like 'li') to filter down to 'library'.",
      "Events have a 20% chance to fire—keep exploring to catch rare ones.",
      "The glyph reactor hums differently at night—explore it after dark for surprises."
    ];
    const tip = tips[Math.floor(Math.random() * tips.length)];
    log("TIP: " + tip);
    return;
  }

  // HELP EXPLORE
  if (cmd === "help explore") {
    listOptions("Explore locations", [
      "towers","armory","barracks","great hall","library","lab",
      "blacksmith","bakery","tavern","clothier","jeweler","apothecary",
      "stables","market stalls","docks","warehouses","fish market",
      "shipyard","lighthouse","temple of light","cathedral",
      "shrine of mascots","temple of shadows","tower of fire",
      "tower of ice","tower of storms","glyph academy","colosseum",
      "theater","circus","race track","mascot arena","houses",
      "apartments","gardens","playgrounds","bathhouse","courtyards",
      "tombs","crypts","hidden lab","maze corridors","lore vault",
      "forge core","molten lake","obsidian mines","glyph reactor"
    ], "explore");
    return;
  }

  // HELP SELL
  if (cmd === "help sell") {
    listOptions("Sell locations", [
      "blacksmith","bakery","tavern","clothier","jeweler","apothecary","market stalls"
    ], "explore");
    return;
  }

  // HELP GIFT
  if (cmd === "help gift") {
    listOptions("Gift locations", [
      "temple of light","cathedral","shrine of mascots","temple of shadows","gardens","courtyards"
    ], "explore");
    return;
  }

  // ... existing sell/gift/explore logic continues ...
}
