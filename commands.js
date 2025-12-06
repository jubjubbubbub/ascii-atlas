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

// Track options + index
let currentOptions = [];
let currentIndex = -1;
let currentVerb = "";

// Helper to print clickable lists
function listOptions(title, options, verb) {
  const out = document.getElementById("output");
  out.innerHTML += "\n" + title + ":\n";

  currentOptions = [];
  currentIndex = -1;
  currentVerb = verb;

  options.forEach(o => {
    const span = document.createElement("div");
    span.textContent = " - " + o;
    span.style.cursor = "pointer";
    span.style.color = "#0ff";
    span.addEventListener("click", () => {
      handleCommand(verb + " " + o);
    });
    out.appendChild(span);
    currentOptions.push({ element: span, command: verb + " " + o, name: o });
  });
}

// Highlight helper
function highlightOption() {
  currentOptions.forEach((opt, i) => {
    opt.element.style.background = (i === currentIndex) ? "#333" : "transparent";
  });
}

// Input bar logic
const input = document.getElementById("commandInput");

input.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    const cmd = input.value.trim();
    if (cmd) {
      document.getElementById("output").innerHTML += "\n> " + cmd;
      handleCommand(cmd);
      input.value = ""; // clear after run
    }
  }
  if (e.key === "Tab") {
    if (currentOptions.length > 0) {
      e.preventDefault();
      currentIndex = (currentIndex + 1) % currentOptions.length;
      highlightOption();
      input.value = currentOptions[currentIndex].command;
    }
  }
  if (e.key === "ArrowDown") {
    if (currentOptions.length > 0 && currentIndex < currentOptions.length - 1) {
      currentIndex++;
      highlightOption();
      input.value = currentOptions[currentIndex].command;
    }
  }
  if (e.key === "ArrowUp") {
    if (currentOptions.length > 0 && currentIndex > 0) {
      currentIndex--;
      highlightOption();
      input.value = currentOptions[currentIndex].command;
    }
  }
});

// Live filtering while typing
input.addEventListener("input", () => {
  const val = input.value.toLowerCase();
  if (currentVerb && val.startsWith(currentVerb)) {
    const filter = val.replace(currentVerb, "").trim();
    currentOptions.forEach((opt, i) => {
      const match = opt.name.toLowerCase().startsWith(filter);
      opt.element.style.display = match || filter === "" ? "block" : "none";
    });
    currentIndex = -1;
    highlightOption();
  }
});

// Location arrays
const exploreLocations = [
  "middle ground",
  "library inside",
  "library ext",
  "market stalls",
  "docks",
  "docks ext",
  "temple of light",
  "mascot arena"
];

const sellLocations = [
  "blacksmith","bakery","tavern","clothier","jeweler","apothecary","market stalls"
];

const giftLocations = [
  "temple of light","cathedral","shrine of mascots","temple of shadows","gardens","courtyards"
];

// Hub directions
const hubDirections = {
  "north": "library inside",
  "east": "market stalls",
  "west": "docks",
  "south": "temple of light",
  "center": "mascot arena"
};

// Shortcuts
const shortcuts = {
  "library": "library inside",
  "market": "market stalls",
  "docks": "docks",
  "temple": "temple of light",
  "arena": "mascot arena"
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
  if (hubDirections[cmd]) {
    showLocation(hubDirections[cmd]);
    return;
  }

  // Name shortcuts
  if (shortcuts[cmd]) {
    showLocation(shortcuts[cmd]);
    return;
  }

  // HELP
  if (cmd === "help") {
    listOptions("Available commands", [
      "explore","sell","gift","help explore","help sell","help gift","help tip"
    ], "help");
    return;
  }

  if (cmd === "help explore") {
    listOptions("Explore locations", exploreLocations, "explore");
    return;
  }

  if (cmd === "help sell") {
    listOptions("Sell locations", sellLocations, "explore");
    return;
  }

  if (cmd === "help gift") {
    listOptions("Gift locations", giftLocations, "explore");
    return;
  }

  if (cmd === "help tip") {
    const tips = [
      "Mascots sometimes trigger hidden events—explore twice to see if lore changes.",
      "Typing 'explore' alone shows all locations. Use arrows or Tab to cycle quickly.",
      "Lantern posts flicker when an event is about to trigger—watch the glow.",
      "Sell commands are shortcuts: type 'sell' to see shops, then click or Tab to pick."
      "Gift commands unlock lore—shrines and gardens often reveal mascot secrets.",
      "Try typing partial names after 'explore' (like 'li') to filter down to 'library'.",
      "Events have a 20% chance to fire—keep exploring to catch rare ones.",
      "The glyph reactor hums differently at night—explore it after dark for surprises."
];
       const tip = tips[Math.floor(Math.random() * tips.length)];
    log("TIP: " + tip);
    return;
  }
  // SELL
  if (cmd === "sell") {
    listOptions("You can sell at", sellLocations, "explore");
    return;
  }

  // GIFT
  if (cmd === "gift") {
    listOptions("You can gift at", giftLocations, "explore");
    return;
  }

  // EXPLORE
  if (cmd === "explore") {
    listOptions("You can explore", exploreLocations, "explore");
    return;
  }

  // EXPLORE with specific location
  if (cmd.startsWith("explore ")) {
    const loc = cmd.replace("explore ", "").trim();
    showLocation(loc);
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
