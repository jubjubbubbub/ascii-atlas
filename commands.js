// Boot-up animation
function bootUp(lines, callback) {
  const out = document.getElementById("output");
  let i = 0;
  function nextLine() {
    if (i < lines.length) {
      out.innerHTML += lines[i] + "\n";
      i++;
      setTimeout(nextLine, 100); // speed of reveal
    } else {
      callback();
    }
  }
  nextLine();
}

// Start game after boot-up
window.onload = () => {
  const banner = [
    "====================================================",
    "                WELCOME TO ASCII ATLAS",
    "====================================================",
    "Initializing districts...",
    "Loading mascots...",
    "Preparing lore vault...",
    "===================================================="
  ];
  bootUp(banner, startGame);
};

// Mini-map overlay
function showMiniMap(current) {
  const out = document.getElementById("output");
  out.innerHTML += "\n--- MINI MAP ---\n";
  out.innerHTML += "         [" + (current === "library inside" ? "*Library*" : "Library") + "]\n";
  out.innerHTML += " [" + (current === "docks" ? "*Docks*" : "Docks") + "]   [" + (current === "mascot arena" ? "*Arena*" : "Arena") + "]   [" + (current === "market stalls" ? "*Market*" : "Market") + "]\n";
  out.innerHTML += "         [" + (current === "temple of light" ? "*Temple*" : "Temple") + "]\n";
  out.innerHTML += "----------------\n";
}

// Show location ASCII
function showLocation(loc) {
  const out = document.getElementById("output");
  out.innerHTML += "\n====================================================\n";
  out.innerHTML += "                 " + loc.toUpperCase() + "\n";
  out.innerHTML += "====================================================\n";

  if (loc === "middle ground") {
    out.innerHTML += "         [NORTH: Library]\n";
    out.innerHTML += " [WEST: Docks]   [CENTER: Arena]   [EAST: Market]\n";
    out.innerHTML += "         [SOUTH: Temple]\n";
    out.innerHTML += "----------------------------------------------------\n";
    out.innerHTML += "Type directions (north, south, east, west, center)\n";
    out.innerHTML += "or district names (library, market, docks, temple, arena).\n";
    out.innerHTML += "====================================================\n";
  }

  if (loc === "library inside") {
    out.innerHTML += " _______________________\n";
    out.innerHTML += "| || || || || || || || |\n";
    out.innerHTML += "| || || || || || || || |\n";
    out.innerHTML += "| || || || || || || || |\n";
    out.innerHTML += "|_______________________|\n";
    out.innerHTML += "+------------------+       ______\n";
    out.innerHTML += "|   OPEN BOOK      |      |      |\n";
    out.innerHTML += "+------------------+      | SEAT |\n";
    out.innerHTML += "   |            |         |______|\n";
    out.innerHTML += "----------------------------------------------------\n";
    out.innerHTML += "Scrolls and tomes line the shelves. Lamps glow\n";
    out.innerHTML += "softly over tables. Mascots whisper lore.\n";
    out.innerHTML += "====================================================\n";
  }

  if (loc === "market stalls") {
    out.innerHTML += "Rows of stalls bustle with traders.\n";
    out.innerHTML += "Goods from every district are displayed.\n";
    out.innerHTML += "====================================================\n";
  }

  if (loc === "docks") {
    out.innerHTML += "Wooden piers stretch into the water.\n";
    out.innerHTML += "Ships creak as waves lap against them.\n";
    out.innerHTML += "====================================================\n";
  }

  if (loc === "temple of light") {
    out.innerHTML += "Tall pillars rise into the sky.\n";
    out.innerHTML += "Candles flicker, casting shadows on ancient glyphs.\n";
    out.innerHTML += "====================================================\n";
  }

  if (loc === "mascot arena") {
    out.innerHTML += "Crowds cheer as mascots clash in contests.\n";
    out.innerHTML += "The ground shakes with energy.\n";
    out.innerHTML += "====================================================\n";
  }

  // Save location
  localStorage.setItem("atlasLocation", loc);

  // Show mini-map overlay
  showMiniMap(loc);
}

// Start game at saved location
function startGame() {
  let location = localStorage.getItem("atlasLocation") || "middle ground";
  log("Default view: " + location);
  showLocation(location);
}

// Command handler
function handleCommand(cmdRaw) {
  let cmd = cmdRaw.toLowerCase().trim();

  // Direction shortcuts
  const hubDirections = {
    "north": "library inside",
    "east": "market stalls",
    "west": "docks",
    "south": "temple of light",
    "center": "mascot arena"
  };
  if (hubDirections[cmd]) {
    showLocation(hubDirections[cmd]);
    return;
  }

  // Name shortcuts
  const shortcuts = {
    "library": "library inside",
    "market": "market stalls",
    "docks": "docks",
    "temple": "temple of light",
    "arena": "mascot arena"
  };
  if (shortcuts[cmd]) {
    showLocation(shortcuts[cmd]);
    return;
  }

  // EXPLORE
  if (cmd.startsWith("explore")) {
    const parts = cmd.split(" ");
    if (parts.length > 1) {
      const loc = parts.slice(1).join(" ");
      showLocation(loc);
    } else {
      log("Explore where? Try: library, market, docks, temple, arena.");
    }
    return;
  }

  // HELP
  if (cmd === "help") {
    log("Commands: explore, north/east/west/south/center, library/market/docks/temple/arena, reset hub");
    return;
  }

  // RESET
  if (cmd === "reset hub") {
    localStorage.removeItem("atlasLocation");
    showLocation("middle ground");
    return;
  }

  // Unknown command fallback
  log("Unknown command: " + cmd);
}

// Simple logger
function log(text) {
  const out = document.getElementById("output");
  out.innerHTML += "\n" + text;
}
