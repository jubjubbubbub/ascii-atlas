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

  // CASTLE KEEP
  if (loc === "towers outside") {
    out.innerHTML += `
====================================================
                 CASTLE TOWERS (Outside)
====================================================
        ^   ^   ^   ^   ^   ^   ^   ^
       | | | | | | | | | | | | | | | |
       | | | | | | | | | | | | | | | |
----------------------------------------------------
Stone walls rise above the road. Banner flags wave.
Trees line the path. Stars glimmer overhead.
====================================================
    `;
  }
  if (loc === "towers inside") {
    out.innerHTML += `
====================================================
                 CASTLE TOWERS (Inside)
====================================================
| Spiral Staircase | Guard Post | Arrow Slits |
| Wooden Table     | Oil Lamps  | Weapon Rack |
----------------------------------------------------
Torches flicker against stone walls. Mascots perch
near windows, watching the horizon.
====================================================
    `;
  }
  if (loc === "armory outside") {
    out.innerHTML += `
====================================================
                 ARMORY (Outside)
====================================================
Stone walls with banners. Road lined with torches.
Grass courtyard nearby. Stars overhead.
====================================================
    `;
  }
  if (loc === "armory inside") {
    out.innerHTML += `
====================================================
                 ARMORY (Inside)
====================================================
   ______
  /      \\
 /        \\
 |        |
 |        |
 |________|
   |    |
   |    |
 | | | | | |
 | | | | | |
----------------------------------------------------
Weapon racks line the walls. Tables with gear.
Lanterns hang from beams. Mascots spar nearby.
====================================================
    `;
  }
  if (loc === "barracks outside") {
    out.innerHTML += `
====================================================
                 BARRACKS (Outside)
====================================================
Low stone buildings along the road. Lightposts cast
long shadows. Trees rustle under the stars.
====================================================
    `;
  }
  if (loc === "barracks inside") {
    out.innerHTML += `
====================================================
                 BARRACKS (Inside)
====================================================
| Sleeping Quarters | Mess Hall     |
| Training Yard     | Mascot Kennel |
+------------------+       ______
|   TABLETOP       |      |      |
+------------------+      | SEAT |
   |            |         |______|
----------------------------------------------------
Bunks line the walls. Tables fill the mess hall.
Lanterns sway from beams.
====================================================
    `;
  }
  if (loc === "great hall outside") {
    out.innerHTML += `
====================================================
                 GREAT HALL (Outside)
====================================================
Grand facade with banners. Road flanked by torches.
Stars gleam above the battlements.
====================================================
    `;
  }
  if (loc === "great hall inside") {
    out.innerHTML += `
====================================================
                 GREAT HALL (Inside)
====================================================
+-----------------------------+
|           DAIS / THRONE     |
+-----------------------------+
| Long Tables | Chairs | Lamps|
| Glyph Banner | Secret Passage|
----------------------------------------------------
Banquet tables stretch across the hall. Mascots
gather under flickering lamps.
====================================================
    `;
  }

  // LIBRARY
  if (loc === "library outside") {
    out.innerHTML += `
====================================================
                 LIBRARY (Outside)
====================================================
Road to stone facade with tall arched windows.
Lightposts along path. Grass courtyard around.
Stars overhead, banners flutter in the wind.
====================================================
    `;
  }
  if (loc === "library inside") {
    out.innerHTML += `
====================================================
                 LIBRARY (Inside)
====================================================
 _______________________
| || || || || || || || |
| || || || || || || || |
| || || || || || || || |
|_______________________|
+------------------+       ______
|   OPEN BOOK      |      |      |
+------------------+      | SEAT |
   |            |         |______|
----------------------------------------------------
Scrolls and tomes line the shelves. Lamps glow
softly over tables. Mascots whisper lore.
====================================================
    `;
  }

  // LAB
  if (loc === "lab outside") {
    out.innerHTML += `
====================================================
                 LAB (Outside)
====================================================
Sealed stone door with glyph etchings. Road lit
by lantern posts. Trees and stars surround.
====================================================
    `;
  }
  if (loc === "lab inside") {
    out.innerHTML += `
====================================================
                 LAB (Inside)
====================================================
+------------------+
|   EXPERIMENTS    |
+------------------+
| Tables | Glyph Reactor | Shelves |
+------------------+
|   GLYPH REACTOR  |
|  [CORE ENERGY]   |
+------------------+
----------------------------------------------------
Strange glyphs glow. Tables covered in scrolls.
Mascots scurry among bubbling flasks.
====================================================
    `;
  }

  // MARKET
  if (loc === "blacksmith outside") {
    out.innerHTML += `
====================================================
                 BLACKSMITH (Outside)
====================================================
Stone building with smoking chimney. Road paved.
Lightposts flicker. Trees and banners nearby.
====================================================
    `;
  }
  if (loc === "blacksmith inside") {
    out.innerHTML += `
====================================================
                 BLACKSMITH (Inside)
====================================================
  ##########
  #  FIRE  #
  ##########
   |      |
   |      |
   ______
  /      \\
 /        \\
 |        |
 |        |
 |________|
 | | | | | |
 | | | | | |
----------------------------------------------------
Forge blazes. Anvil stands ready. Weapon racks
line the walls. Mascots hammer ore.
====================================================
    `;
  }
  if (loc === "bakery outside") {
    out.innerHTML += `
====================================================
                 BAKERY (Outside)
====================================================
Warm light spills onto the cobblestone road.
Lantern posts and trees line the path. Stars above.
====================================================
    `;
  }
  if (loc === "bakery inside") {
    out.innerHTML += `
====================================================
                 BAKERY (Inside)
====================================================
+------------------+   +------------------+
|   TABLETOP       |   |   TABLETOP       |
+------------------+   +------------------+
   |            |         |            |
 | Oven | Bread Racks | Pastry Counter |
----------------------------------------------------
Ovens glow. Tables piled with loaves. Lanterns
hang from beams. Sweet air fills the room.
====================================================
    `;
  }
  if (loc === "tavern outside") {
    out.innerHTML += `
====================================================
                 TAVERN (Outside)
====================================================
Wooden sign swings above the door. Road crowded.
Lanterns and banners sway under starlight.
====================================================
    `;
  }
  if (loc === "tavern inside") {
    out.innerHTML += `
====================================================
                 TAVERN (Inside)
====================================================
+-----------------------------+
|             BAR             |
+-----------------------------+
| Tables | Chairs | Stage     |
| Lanterns | Cellar Door      |
----------------------------------------------------
Laughter fills the room. Chairs scrape against
stone. Mascots trade stories and songs.
====================================================
    `;
  }
  if (loc === "clothier outside") {
    out.innerHTML += `
====================================================
                 CLOTHIER (Outside)
====================================================
Tailor’s facade with mannequins. Road lit by
lightposts. Trees and stars frame the street.
====================================================
    `;
  }
  if (loc === "clothier inside") {
    out.innerHTML += `
====================================================
                 CLOTHIER (Inside)
====================================================
| Loom | Dye Pots | Tailor’s Bench |
+------------------+       ______
|   TABLETOP       |      |      |
+------------------+      | SEAT |
   |            |         |______|
----------------------------------------------------
Bolts of cloth stack high. Tables and chairs
surround the workbench. Lamps glow warm.
====================================================
    `;
  }
  if (loc === "jeweler outside") {
    out.innerHTML += `
====================================================
                 JEWELER (Outside)
====================================================
Market stall with gem displays. Cobblestone road.
Lightposts and banners overhead. Stars glimmer.
====================================================
    `;
  }
  if (loc === "jeweler inside") {
    out.innerHTML += `
====================================================
                 JEWELER (Inside)
====================================================
+------------------+
|   JEWELS INSIDE  |
+------------------+
|                  |
|                  |
+------------------+
     ___
    /   \\
---(     )---
    \\___/
     | |
     | |
----------------------------------------------------
Jewels glitter under lamplight. Gold scales weigh
rare glyph shards. Mascots guard treasures.
====================================================
    `;
  }
  if (loc === "apothecary outside") {
    out.innerHTML += `
====================================================
                 APOTHECARY (Outside)
====================================================
Herbal signs hang above a stone door. Road lined
with lanterns and shrubs. Stars above.
====================================================
    `;
  }
  if (loc === "apothecary inside") {
    out.innerHTML += `
====================================================
                 APOTHECARY (Inside)
====================================================
| Potion Shelves | Herb Racks | Glyph Flasks |
+------------------+       ______
|   TABLETOP       |      |      |
+------------------+      | SEAT |
   |            |         |______|
----------------------------------------------------
Glass clinks softly. Herbs dry on racks. Lamps
glow over bubbling mixtures.
====================================================
    `;
  }

  // STABLES
  if (loc === "stables outside") {
    out.innerHTML += `
====================================================
                 STABLES (Outside)
====================================================
Fenced yard along the road. Lantern posts flicker.
Trees sway under the starry night.
====================================================
    `;
  }
  if (loc === "stables inside") {
    out.innerHTML += `
====================================================
                 STABLES (Inside)
====================================================
| Stalls | Hay Loft | Tack Room |
+------------------+       ______
|   TABLETOP       |      |      |
+------------------+      | SEAT |
   |            |         |______|
----------------------------------------------------
Horses snort softly. Lanterns sway from beams.
Mascots polish saddles and harness.
====================================================
    `;
  }

  // MARKET STALLS
  if (loc === "market stalls outside") {
    out.innerHTML += `
====================================================
                 MARKET STALLS (Outside)
====================================================
Crowded stalls line the road. Lightposts and banners
overhead. Trees and stars surround the square.
====================================================
    `;
  }
  if (loc === "market stalls inside") {
    out.innerHTML += `
====================================================
                 MARKET STALLS (Inside)
====================================================
+------------------+   +------------------+
|   TABLETOP       |   |   TABLETOP       |
+------------------+   +------------------+
| Spice | Cloth | Trinkets | Fish |
----------------------------------------------------
Vendors shout. Tables brim with goods. Lanterns
cast warm light across the crowd.
====================================================
    `;
  }

  // HARBOR
  if (loc === "docks outside") {
    out.innerHTML += `
====================================================
                 DOCKS (Outside)
====================================================
Wooden planks stretch into waves. Ships moored.
Lantern posts line the pier. Stars above.
====================================================
    `;
  }
  if (loc === "docks inside") {
    out.innerHTML += `
====================================================
                 DOCKS (Inside)
====================================================
+-------+   +-------+   _______
| CRATE |   | CRATE |  /       \\
+-------+   +-------+ |  |||||  |
                      |  |||||  |
                      |         |
                       \\_______/
----------------------------------------------------
Crates stacked. Barrels line the pier. Nets dry.
Mascots scurry between ropes. Lighthouse beam sweeps.
====================================================
    `;
  }
  if (loc === "warehouses outside") {
    out.innerHTML += `
====================================================
                 WAREHOUSES (Outside)
====================================================
Stone warehouses along the road. Lantern posts guard
the entrances. Stars glimmer over the harbor.
====================================================
    `;
  }
  if (loc === "warehouses inside") {
    out.innerHTML += `
====================================================
                 WAREHOUSES (Inside)
====================================================
+-------+   +-------+   +-------+
| CRATE |   | CRATE |   | CRATE |
+-------+   +-------+   +-------+
| Barrels | Shelves | Rope Coils |
----------------------------------------------------
Echoes fill the vast room. Lamps hang high.
Mascots track inventory on ledgers.
====================================================
    `;
  }
  if (loc === "fish market outside") {
    out.innerHTML += `
====================================================
                 FISH MARKET (Outside)
====================================================
Stalls along the harbor road. Lanterns flicker.
Trees and banners sway under the stars.
====================================================
    `;
  }
  if (loc === "fish market inside") {
    out.innerHTML += `
====================================================
                 FISH MARKET (Inside)
====================================================
| Ice tables | Nets | Scales | Buckets |
+------------------+   +------------------+
|   TABLETOP       |   |   TABLETOP       |
+------------------+   +------------------+
----------------------------------------------------
Vendors call out. Lamps glint on scales. Mascots
haul nets and stack crates.
====================================================
    `;
  }
  if (loc === "shipyard outside") {
    out.innerHTML += `
====================================================
                 SHIPYARD (Outside)
====================================================
Dry docks line the road. Lantern posts flicker.
Stars gleam above half-built hulls.
====================================================
    `;
  }
  if (loc === "shipyard inside") {
    out.innerHTML += `
====================================================
                 SHIPYARD (Inside)
====================================================
      __/___
 ____/______|
 \\          \\
  \\__________\\
      ||  ||
| Sawhorses | Ropes | Planks |
----------------------------------------------------
Hammers ring. Ships rise from frames. Mascots
haul timber and tar rope.
====================================================
    `;
  }
  if (loc === "lighthouse outside") {
    out.innerHTML += `
====================================================
                 LIGHTHOUSE (Outside)
====================================================
Tall beacon rises above rocks. Road winds uphill.
Stars glimmer. Waves crash below.
====================================================
    `;
  }
  if (loc === "lighthouse inside") {
    out.innerHTML += `
====================================================
                 LIGHTHOUSE (Inside)
====================================================
+----------------------+
|   SIGNAL CONTROLS    |
| [SWITCH]   [LEVER]   |
| [DIAL]     [GAUGE]   |
+----------------------+
| Keeper’s Quarters | Lanterns |
----------------------------------------------------
The beacon glows. Mascots perch near the lamp,
watching ships in the distance.
====================================================
    `;
  }

  // TEMPLES
  if (loc === "temple of light outside") {
    out.innerHTML += `
====================================================
                 TEMPLE OF LIGHT (Outside)
====================================================
Grand marble steps lead to tall columns. Road lined
with lantern posts. Stars glimmer above.
====================================================
    `;
  }
  if (loc === "temple of light inside") {
    out.innerHTML += `
====================================================
                 TEMPLE OF LIGHT (Inside)
====================================================
 ||     ||     ||     ||
 ||     ||     ||     ||
   _________
  |         |
  |  ALTAR  |
  |_________|
----------------------------------------------------
Sunlight streams through stained glass. Mascots
gather near the altar, glyphs glowing softly.
====================================================
    `;
  }
  if (loc === "cathedral outside") {
    out.innerHTML += `
====================================================
                 CATHEDRAL (Outside)
====================================================
Massive facade with towers. Road lit by lanterns.
Stars shimmer through stained glass.
====================================================
    `;
  }
  if (loc === "cathedral inside") {
    out.innerHTML += `
====================================================
                 CATHEDRAL (Inside)
====================================================
 ||     ||     ||     ||     ||
 ||     ||     ||     ||     ||
   _________      _________
  |         |    |         |
  |  ALTAR  |    |  CHOIR  |
  |_________|    |_________|
----------------------------------------------------
Chant echoes under the vaults. Lamps flicker.
Mascots kneel near the altar and choir.
====================================================
    `;
  }
  if (loc === "shrine of mascots outside") {
    out.innerHTML += `
====================================================
                 SHRINE OF MASCOTS (Outside)
====================================================
Small stone shrine along the road. Lantern posts
and trees frame the path. Stars glimmer.
====================================================
    `;
  }
  if (loc === "shrine of mascots inside") {
    out.innerHTML += `
====================================================
                 SHRINE OF MASCOTS (Inside)
====================================================
   _________
  |         |
  |  ALTAR  |
  |_________|
| Offerings | Lamps | Glyph Tokens |
----------------------------------------------------
Mascots leave trinkets. Lamps glow warm. Glyphs
sparkle faintly across the stones.
====================================================
    `;
  }
  if (loc === "temple of shadows outside") {
    out.innerHTML += `
====================================================
                 TEMPLE OF SHADOWS (Outside)
====================================================
Dark facade with high arches. Road dimly lit.
Lanterns flicker. Stars hide behind clouds.
====================================================
    `;
  }
  if (loc === "temple of shadows inside") {
    out.innerHTML += `
====================================================
                 TEMPLE OF SHADOWS (Inside)
====================================================
 ||     ||     ||     ||
 ||     ||     ||     ||
   _________
  |         |
  |  ALTAR  |
  |_________|
| Braziers | Curtains | Glyph Veil |
----------------------------------------------------
Shadows pool around pillars. Lamps burn low.
Mascots whisper beneath veiled glyphs.
====================================================
    `;
  }
  // TOWERS
  if (loc === "tower of fire outside") {
    out.innerHTML += `
====================================================
                 TOWER OF FIRE (Outside)
====================================================
A blazing spire rises above the city. Flames flicker
at its peak. Roads circle the base.
====================================================
    `;
  }
  if (loc === "tower of fire inside") {
    out.innerHTML += `
====================================================
                 TOWER OF FIRE (Inside)
====================================================
 ~~~~~~~~~~~~~~~~~~~~~~~
 ~~~~~~   FIRE   ~~~~~~~
 ~~~~~~~~~~~~~~~~~~~~~~~
| Anvils | Racks | Tables |
----------------------------------------------------
Molten glyphs pulse on the walls. Mascots chant
near the blazing core.
====================================================
    `;
  }
  if (loc === "tower of ice outside") {
    out.innerHTML += `
====================================================
                 TOWER OF ICE (Outside)
====================================================
Frozen spire gleams under starlight. Roads crunch
with snow. Lantern posts flicker dimly.
====================================================
    `;
  }
  if (loc === "tower of ice inside") {
    out.innerHTML += `
====================================================
                 TOWER OF ICE (Inside)
====================================================
 ***************
 *   ICE CORE  *
 ***************
| Frost Tables | Lamps | Shelves |
----------------------------------------------------
Icicles hang from arches. Tables covered in frost.
Mascots shiver near glowing glyphs.
====================================================
    `;
  }
  if (loc === "tower of storms outside") {
    out.innerHTML += `
====================================================
                 TOWER OF STORMS (Outside)
====================================================
Lightning cracks around the spire. Roads spiral
under flickering lantern posts. Stars tremble.
====================================================
    `;
  }
  if (loc === "tower of storms inside") {
    out.innerHTML += `
====================================================
                 TOWER OF STORMS (Inside)
====================================================
+----------------------+
|   SIGNAL CONTROLS    |
| [SWITCH] [LEVER]     |
| [DIAL]   [GAUGE]     |
+----------------------+
| Coils | Rods | Conduits |
----------------------------------------------------
Thunder rolls through chambers. Lamps flare. Mascots
monitor gauges and rods.
====================================================
    `;
  }

  // ACADEMY
  if (loc === "glyph academy outside") {
    out.innerHTML += `
====================================================
                 GLYPH ACADEMY (Outside)
====================================================
Scholarly halls along a lantern-lit road. Trees
and banners frame the courtyard under stars.
====================================================
    `;
  }
  if (loc === "glyph academy inside") {
    out.innerHTML += `
====================================================
                 GLYPH ACADEMY (Inside)
====================================================
 _______________________
| || || || || || || || |
| || || || || || || || |
| || || || || || || || |
|_______________________|
+------------------+   +------------------+
|   OPEN BOOK      |   |   TABLETOP       |
+------------------+   +------------------+
----------------------------------------------------
Students copy tomes at tables. Lamps glow over
glyph diagrams and scrolls.
====================================================
    `;
  }

  // COLOSSEUM
  if (loc === "colosseum outside") {
    out.innerHTML += `
====================================================
                 COLOSSEUM (Outside)
====================================================
Massive stone arches tower above. Roads lead to
grand gates. Stars glimmer overhead.
====================================================
    `;
  }
  if (loc === "colosseum inside") {
    out.innerHTML += `
====================================================
                 COLOSSEUM (Inside)
====================================================
###############################
#           ARENA FLOOR        #
###############################
| Stands filled with mascots   |
| Torches line the walls       |
| Training dummies at corners  |
###############################
====================================================
    `;
  }

  // THEATER
  if (loc === "theater outside") {
    out.innerHTML += `
====================================================
                 THEATER (Outside)
====================================================
Facade with tall columns. Road lined with banners.
Lantern posts flicker. Stars above.
====================================================
    `;
  }
  if (loc === "theater inside") {
    out.innerHTML += `
====================================================
                 THEATER (Inside)
====================================================
+-----------------------------+
|           STAGE             |
+-----------------------------+
| Rows of chairs | Torches    |
| Mascots gather | Curtains   |
+-----------------------------+
====================================================
    `;
  }

  // CIRCUS
  if (loc === "circus outside") {
    out.innerHTML += `
====================================================
                 CIRCUS (Outside)
====================================================
Colorful tents along the road. Lantern posts shine.
Stars glitter above ropes and poles.
====================================================
    `;
  }
  if (loc === "circus inside") {
    out.innerHTML += `
====================================================
                 CIRCUS (Inside)
====================================================
+-----------------------------+
|        RING / ARENA         |
+-----------------------------+
| Bleachers | Props | Lamps   |
| Tents | Ropes | Platforms   |
----------------------------------------------------
Mascots tumble and juggle. Lamps flash across
the ring. Crowds cheer.
====================================================
    `;
  }

  // RACE TRACK
  if (loc === "race track outside") {
    out.innerHTML += `
====================================================
                 RACE TRACK (Outside)
====================================================
Oval track lit by lantern posts. Roads lead to
grandstands. Stars glimmer overhead.
====================================================
    `;
  }
  if (loc === "race track inside") {
    out.innerHTML += `
====================================================
                 RACE TRACK (Inside)
====================================================
###############################
#         TRACK FIELD          #
###############################
| Stands filled with mascots   |
| Signal room with flags       |
| Torches line the course      |
###############################
====================================================
    `;
  }

  // MASCOT ARENA
  if (loc === "mascot arena outside") {
    out.innerHTML += `
====================================================
                 MASCOT ARENA (Outside)
====================================================
Arched gates and banners. Road lit by lanterns.
Stars shimmer above cheering crowds.
====================================================
    `;
  }
  if (loc === "mascot arena inside") {
    out.innerHTML += `
====================================================
                 MASCOT ARENA (Inside)
====================================================
###############################
#         ARENA FLOOR          #
###############################
| Stands | Torches | Booths    |
| Tables | Chairs  | Lamps     |
###############################
====================================================
    `;
  }

  // RESIDENTIAL
  if (loc === "houses outside") {
    out.innerHTML += `
====================================================
                 HOUSES (Outside)
====================================================
Small stone cottages line the road. Trees and grass
surround the path. Lantern posts flicker at night.
====================================================
    `;
  }
  if (loc === "houses inside") {
    out.innerHTML += `
====================================================
                 HOUSES (Inside)
====================================================
+------------------+       ______
|   TABLETOP       |      |      |
+------------------+      | SEAT |
   |            |         |______|
| Shelves | Lamps | Hearth |
----------------------------------------------------
Wooden tables and chairs fill the room. Shelves
hold simple goods. Lanterns hang from beams.
====================================================
    `;
  }
  if (loc === "apartments outside") {
    out.innerHTML += `
====================================================
                 APARTMENTS (Outside)
====================================================
Tall stone buildings line the road. Lantern posts
flicker. Stars glimmer above balconies.
====================================================
    `;
  }
  if (loc === "apartments inside") {
    out.innerHTML += `
====================================================
                 APARTMENTS (Inside)
====================================================
| Rooms | Tables | Lamps |
+------------------+       ______
|   TABLETOP       |      |      |
+------------------+      | SEAT |
   |            |         |______|
----------------------------------------------------
Multiple rooms with tables and chairs. Lamps glow
softly. Mascots gather in shared spaces.
====================================================
    `;
  }
  if (loc === "gardens outside") {
    out.innerHTML += `
====================================================
                 GARDENS (Outside)
====================================================
Paths wind through trees and flowers. Lantern posts
glow softly. Stars shimmer above.
====================================================
    `;
  }
  if (loc === "gardens inside") {
    out.innerHTML += `
====================================================
                 GARDENS (Inside)
====================================================
| Flower Beds | Fountains | Benches |
----------------------------------------------------
Mascots stroll among blossoms. Lamps glow near
fountains. Peace fills the air.
====================================================
    `;
  }
  // PLAYGROUNDS
  if (loc === "playgrounds outside") {
    out.innerHTML += `
====================================================
                 PLAYGROUNDS (Outside)
====================================================
Open field by the road. Lantern posts flicker.
Trees cast long shadows under stars.
====================================================
    `;
  }
  if (loc === "playgrounds inside") {
    out.innerHTML += `
====================================================
                 PLAYGROUNDS (Inside)
====================================================
| Swings | Slides | Benches |
| Tables | Lamps | Pathways |
----------------------------------------------------
Mascots chase and laugh. Lamps glow along paths.
Grass rustles in the night.
====================================================
    `;
  }

  // BATHHOUSE
  if (loc === "bathhouse outside") {
    out.innerHTML += `
====================================================
                 BATHHOUSE (Outside)
====================================================
Steam drifts through arches. Road lit by lanterns.
Stars shimmer on tiled roofs.
====================================================
    `;
  }
  if (loc === "bathhouse inside") {
    out.innerHTML += `
====================================================
                 BATHHOUSE (Inside)
====================================================
| Pools | Benches | Towel Racks |
| Lamps | Tables | Shelves |
----------------------------------------------------
Warm mist fills the room. Lamps reflect off water.
Mascots relax on benches.
====================================================
    `;
  }

  // COURTYARDS
  if (loc === "courtyards outside") {
    out.innerHTML += `
====================================================
                 COURTYARDS (Outside)
====================================================
Open squares along the road. Lantern posts and trees.
Stars glimmer above stone paths.
====================================================
    `;
  }
  if (loc === "courtyards inside") {
    out.innerHTML += `
====================================================
                 COURTYARDS (Inside)
====================================================
| Benches | Lamps | Fountain |
| Tables | Trees | Pathways |
----------------------------------------------------
Mascots gather to talk. Lamps glow among trees.
Water splashes in the fountain.
====================================================
    `;
  }

  // CATACOMBS
  if (loc === "tombs outside") {
    out.innerHTML += `
====================================================
                 TOMBS (Outside)
====================================================
Stone mausoleums line the path. Grass overgrown.
Lantern posts flicker dimly. Stars overhead.
====================================================
    `;
  }
  if (loc === "tombs inside") {
    out.innerHTML += `
====================================================
                 TOMBS (Inside)
====================================================
  _________
 /         \\
|   RIP     |
|___________|
| Lamps | Benches | Offerings |
----------------------------------------------------
Rows of tombs line the walls. Torches flicker.
Mascots whisper among the graves.
====================================================
    `;
  }
  if (loc === "crypts outside") {
    out.innerHTML += `
====================================================
                 CRYPTS (Outside)
====================================================
Stone stairway descends underground. Road lined
with statues. Lanterns flicker faintly.
====================================================
    `;
  }
  if (loc === "crypts inside") {
    out.innerHTML += `
====================================================
                 CRYPTS (Inside)
====================================================
#########################
#       CORRIDOR        #
#########################
| Tombs line the walls  |
| Torches flicker       |
| Lore vault nearby     |
#########################
====================================================
    `;
  }
  if (loc === "hidden lab outside") {
    out.innerHTML += `
====================================================
                 HIDDEN LAB (Outside)
====================================================
Sealed stone door hidden in ruins. Road overgrown.
Lantern posts broken. Stars faint overhead.
====================================================
    `;
  }
  if (loc === "hidden lab inside") {
    out.innerHTML += `
====================================================
                 HIDDEN LAB (Inside)
====================================================
+------------------+
|   EXPERIMENTS    |
+------------------+
| Tables | Glyph Reactor | Shelves |
+------------------+
|   GLYPH REACTOR  |
|  [CORE ENERGY]   |
+------------------+
----------------------------------------------------
Strange glyphs glow. Tables covered in scrolls.
Mascots scurry among bubbling flasks.
====================================================
    `;
  }
  if (loc === "maze corridors outside") {
    out.innerHTML += `
====================================================
                 MAZE CORRIDORS (Outside)
====================================================
Stone arches form a labyrinth along the road.
Lantern posts mark entries. Stars above.
====================================================
    `;
  }
  if (loc === "maze corridors inside") {
    out.innerHTML += `
====================================================
                 MAZE CORRIDORS (Inside)
====================================================
#########################
#  TURN | HALL | NODE   #
#########################
| Lamps | Markers | Ropes |
----------------------------------------------------
Steps echo through bends. Lamps flicker in corners.
Mascots leave chalk marks on stone.
====================================================
    `;
  }
  if (loc === "lore vault outside") {
    out.innerHTML += `
====================================================
                 LORE VAULT (Outside)
====================================================
Iron door sealed behind arches. Road lit by lanterns.
Trees whisper under the stars.
====================================================
    `;
  }
  if (loc === "lore vault inside") {
    out.innerHTML += `
====================================================
                 LORE VAULT (Inside)
====================================================
+------------------+
|   ARCHIVE SAFE   |
+------------------+
 _______________________
| || || || || || || || |
| || || || || || || || |
| || || || || || || || |
|_______________________|
----------------------------------------------------
Quiet hum fills the chamber. Lamps glow on shelves.
Mascots catalog ancient scrolls.
====================================================
    `;
  }

  // FORGE DISTRICT
  if (loc === "forge core outside") {
    out.innerHTML += `
====================================================
                 FORGE CORE (Outside)
====================================================
Fiery glow lights the district. Roads lined with
stone arches. Lanterns flicker red.
====================================================
    `;
  }
  if (loc === "forge core inside") {
    out.innerHTML += `
====================================================
                 FORGE CORE (Inside)
====================================================
  ##########
  #  FIRE  #
  ##########
   |      |
   |      |
   ______
  /      \\
 /        \\
 |        |
 |        |
 |________|
 | | | | | |
 | | | | | |
----------------------------------------------------
Molten pools bubble. Anvils and weapon racks line
the walls. Mascots hammer glyphs.
====================================================
    `;
  }
  if (loc === "molten lake outside") {
    out.innerHTML += `
====================================================
                 MOLTEN LAKE (Outside)
====================================================
Fiery glow reflects on stone. Roads circle the lake.
Lantern posts flicker red. Stars faint overhead.
====================================================
    `;
  }
  if (loc === "molten lake inside") {
    out.innerHTML += `
====================================================
                 MOLTEN LAKE (Inside)
====================================================
 ~~~~~~~~~~~~~~~~~~~~~~~
 ~~~~~~   FIRE   ~~~~~~~
 ~~~~~~~~~~~~~~~~~~~~~~~
| Platforms | Benches | Lamps |
----------------------------------------------------
Molten waves crash against stone. Mascots chant
near glyph reactors. Heat fills the air.
====================================================
    `;
  }
  if (loc === "obsidian mines outside") {
    out.innerHTML += `
====================================================
                 OBSIDIAN MINES (Outside)
====================================================
Mine entrances line the road. Lantern posts flicker.
Trees stand stark under starry skies.
====================================================
    `;
  }
  if (loc === "obsidian mines inside") {
    out.innerHTML += `
====================================================
                 OBSIDIAN MINES (Inside)
====================================================
| Carts | Picks | Lanterns |
#########################
#   TUNNEL | SHAFT      #
#########################
| Crates | Racks | Tables |
----------------------------------------------------
Shards gleam in lamplight. Mascots haul ore carts.
Echoes travel down shafts.
====================================================
    `;
  }
   if (loc === "glyph reactor inside") {
    out.innerHTML += `
====================================================
                 GLYPH REACTOR (Inside)
====================================================
+------------------+
|   GLYPH REACTOR  |
|  [CORE ENERGY]   |
+------------------+
| Consoles | Tables | Lamps |
----------------------------------------------------
Glyphs pulse brightly. Tables covered in scrolls.
Mascots guard the core chamber.
====================================================
    `;
  }
  if (loc === "middle ground") {
    out.innerHTML += "        ________        ________        ________\n";
    out.innerHTML += "       |        |      |        |      |        |\n";
    out.innerHTML += "       | LIBRARY|      | MARKET |      | DOCKS  |\n";
    out.innerHTML += "       |________|      |________|      |________|\n";
    out.innerHTML += "            \\              |              /\n";
    out.innerHTML += "             \\             |             /\n";
    out.innerHTML += "              \\            |            /\n";
    out.innerHTML += "               \\           |           /\n";
    out.innerHTML += "                \\          |          /\n";
    out.innerHTML += "                 \\         |         /\n";
    out.innerHTML += "                  \\        |        /\n";
    out.innerHTML += "                   \\       |       /\n";
    out.innerHTML += "                    \\      |      /\n";
    out.innerHTML += "                     \\     |     /\n";
    out.innerHTML += "                      \\    |    /\n";
    out.innerHTML += "                       \\   |   /\n";
    out.innerHTML += "                        \\  |  /\n";
    out.innerHTML += "                         \\ | /\n";
    out.innerHTML += "                          \\|/\n";
    out.innerHTML += "                          HUB\n";
    out.innerHTML += "----------------------------------------------------\n";
    out.innerHTML += "You stand in the Middle Ground, a central hub.\n";
    out.innerHTML += "Paths lead to the Library, Market, Docks, Temple, and Arena.\n";
    out.innerHTML += "====================================================\n";
  // Save location
  localStorage.setItem("atlasLocation", loc);

  // Show mini-map overlay
  showMiniMap(loc);
}
function handleCommand(input) {
  const out = document.getElementById("output");
  let cmd = input.toLowerCase().trim();

  // strip "explore" if user typed it
  if (cmd.startsWith("explore")) {
    cmd = cmd.replace("explore", "").trim();
  }

  // HUB DIRECTIONS
  if (cmd === "north") showLocation("library outside");
  else if (cmd === "south") showLocation("temple of light outside");
  else if (cmd === "east") showLocation("market stalls outside");
  else if (cmd === "west") showLocation("docks outside");
  else if (cmd === "center") showLocation("mascot arena outside");

  // HUB DISTRICTS
  else if (cmd === "library") showLocation("library outside");
  else if (cmd === "market") showLocation("market stalls outside");
  else if (cmd === "docks") showLocation("docks outside");
  else if (cmd === "temple") showLocation("temple of light outside");
  else if (cmd === "arena") showLocation("mascot arena outside");

  // CASTLE KEEP
  else if (cmd === "towers outside") showLocation("towers outside");
  else if (cmd === "towers inside") showLocation("towers inside");
  else if (cmd === "armory outside") showLocation("armory outside");
  else if (cmd === "armory inside") showLocation("armory inside");
  else if (cmd === "barracks outside") showLocation("barracks outside");
  else if (cmd === "barracks inside") showLocation("barracks inside");
  else if (cmd === "great hall outside") showLocation("great hall outside");
  else if (cmd === "great hall inside") showLocation("great hall inside");

  // LIBRARY
  else if (cmd === "library inside") showLocation("library inside");

  // LAB
  else if (cmd === "lab outside") showLocation("lab outside");
  else if (cmd === "lab inside") showLocation("lab inside");

  // MARKET
  else if (cmd === "blacksmith outside") showLocation("blacksmith outside");
  else if (cmd === "blacksmith inside") showLocation("blacksmith inside");
  else if (cmd === "bakery outside") showLocation("bakery outside");
  else if (cmd === "bakery inside") showLocation("bakery inside");
  else if (cmd === "tavern outside") showLocation("tavern outside");
  else if (cmd === "tavern inside") showLocation("tavern inside");
  else if (cmd === "clothier outside") showLocation("clothier outside");
  else if (cmd === "clothier inside") showLocation("clothier inside");
  else if (cmd === "jeweler outside") showLocation("jeweler outside");
  else if (cmd === "jeweler inside") showLocation("jeweler inside");
  else if (cmd === "apothecary outside") showLocation("apothecary outside");
  else if (cmd === "apothecary inside") showLocation("apothecary inside");
  else if (cmd === "stables outside") showLocation("stables outside");
  else if (cmd === "stables inside") showLocation("stables inside");
  else if (cmd === "market stalls outside") showLocation("market stalls outside");
  else if (cmd === "market stalls inside") showLocation("market stalls inside");

  // HARBOR
  else if (cmd === "docks inside") showLocation("docks inside");
  else if (cmd === "warehouses outside") showLocation("warehouses outside");
  else if (cmd === "warehouses inside") showLocation("warehouses inside");
  else if (cmd === "fish market outside") showLocation("fish market outside");
  else if (cmd === "fish market inside") showLocation("fish market inside");
  else if (cmd === "shipyard outside") showLocation("shipyard outside");
  else if (cmd === "shipyard inside") showLocation("shipyard inside");
  else if (cmd === "lighthouse outside") showLocation("lighthouse outside");
  else if (cmd === "lighthouse inside") showLocation("lighthouse inside");

  // TEMPLES
  else if (cmd === "temple of light inside") showLocation("temple of light inside");
  else if (cmd === "cathedral outside") showLocation("cathedral outside");
  else if (cmd === "cathedral inside") showLocation("cathedral inside");
  else if (cmd === "shrine of mascots outside") showLocation("shrine of mascots outside");
  else if (cmd === "shrine of mascots inside") showLocation("shrine of mascots inside");
  else if (cmd === "temple of shadows outside") showLocation("temple of shadows outside");
  else if (cmd === "temple of shadows inside") showLocation("temple of shadows inside");

  // TOWERS
  else if (cmd === "tower of fire outside") showLocation("tower of fire outside");
  else if (cmd === "tower of fire inside") showLocation("tower of fire inside");
  else if (cmd === "tower of ice outside") showLocation("tower of ice outside");
  else if (cmd === "tower of ice inside") showLocation("tower of ice inside");
  else if (cmd === "tower of storms outside") showLocation("tower of storms outside");
  else if (cmd === "tower of storms inside") showLocation("tower of storms inside");

  // ACADEMY
  else if (cmd === "glyph academy outside") showLocation("glyph academy outside");
  else if (cmd === "glyph academy inside") showLocation("glyph academy inside");

  // COLOSSEUM
  else if (cmd === "colosseum outside") showLocation("colosseum outside");
  else if (cmd === "colosseum inside") showLocation("colosseum inside");

  // THEATER
  else if (cmd === "theater outside") showLocation("theater outside");
  else if (cmd === "theater inside") showLocation("theater inside");

  // CIRCUS
  else if (cmd === "circus outside") showLocation("circus outside");
  else if (cmd === "circus inside") showLocation("circus inside");

  // RACE TRACK
  else if (cmd === "race track outside") showLocation("race track outside");
  else if (cmd === "race track inside") showLocation("race track inside");

  // MASCOT ARENA
  else if (cmd === "mascot arena inside") showLocation("mascot arena inside");

  // RESIDENTIAL
  else if (cmd === "houses outside") showLocation("houses outside");
  else if (cmd === "houses inside") showLocation("houses inside");
  else if (cmd === "apartments outside") showLocation("apartments outside");
  else if (cmd === "apartments inside") showLocation("apartments inside");
  else if (cmd === "gardens outside") showLocation("gardens outside");
  else if (cmd === "gardens inside") showLocation("gardens inside");

  // PLAYGROUNDS & COURTYARDS
  else if (cmd === "playgrounds outside") showLocation("playgrounds outside");
  else if (cmd === "playgrounds inside") showLocation("playgrounds inside");
  else if (cmd === "bathhouse outside") showLocation("bathhouse outside");
  else if (cmd === "bathhouse inside") showLocation("bathhouse inside");
  else if (cmd === "courtyards outside") showLocation("courtyards outside");
  else if (cmd === "courtyards inside") showLocation("courtyards inside");

  // CATACOMBS
  else if (cmd === "tombs outside") showLocation("tombs outside");
  else if (cmd === "tombs inside") showLocation("tombs inside");
  else if (cmd === "crypts outside") showLocation("crypts outside");
  else if (cmd === "crypts inside") showLocation("crypts inside");
  else if (cmd === "hidden lab outside") showLocation("hidden lab outside");
  else if (cmd === "hidden lab inside") showLocation("hidden lab inside");
  else if (cmd === "maze corridors outside") showLocation("maze corridors outside");
  else if (cmd === "maze corridors inside") showLocation("maze corridors inside");
  else if (cmd === "lore vault outside") showLocation("lore vault outside");
  else if (cmd === "lore vault inside") showLocation("lore vault inside");

  // FORGE DISTRICT
  else if (cmd === "forge core outside") showLocation("forge core outside");
  else if (cmd === "forge core inside") showLocation("forge core inside");
  else if (cmd === "molten lake outside") showLocation("molten lake outside");
  else if (cmd === "molten lake inside") showLocation("molten lake inside");
  else if (cmd === "obsidian mines outside") showLocation("obsidian mines outside");
  else if (cmd === "obsidian mines inside") showLocation("obsidian mines inside");
  else if (cmd === "glyph reactor outside") showLocation("glyph reactor outside");
  else if (cmd === "glyph reactor inside") showLocation("glyph reactor inside");

  // FALLBACK
  else {
    out.innerHTML += "\nUnknown command: " + input + "\n";
  }
}
document.getElementById("command").addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    handleCommand(this.value);
    this.value = ""; // clear after submit
  }
});
  // =========================
  // COMMANDS + EVENTS
  // =========================
  <script>
    function showMap(id) {
      document.querySelectorAll("pre").forEach(p => p.style.display="none");
      const el = document.getElementById(id);
      if (el) el.style.display="block";
      else log("No map found: " + id);
    }

    function showEvent(text) {
      const out = document.getElementById("output");
      out.innerHTML += "\\nEVENT: " + text;
    }

    function log(text) {
      const out = document.getElementById("output");
      out.innerHTML += "\\n" + text;
    }

    function handleCommand(cmdRaw) {
      let cmd = cmdRaw.toLowerCase().trim();

      // Helper to reduce duplication
      function route(base, insideId, outsideId, insideEvent, outsideEvent) {
        if (cmd === "explore " + base || cmd === "explore " + base + " inside") {
          showMap(insideId);
          if (Math.random() < 0.2) showEvent(insideEvent);
          return true;
        }
        if (cmd === "explore " + base + " ext" || cmd === "explore " + base + " outside") {
          showMap(outsideId);
          if (Math.random() < 0.2) showEvent(outsideEvent);
          return true;
        }
        return false;
      }

      // CASTLE KEEP
      if (route("towers", "towers_inside", "towers_outside",
        "A watch mascot spots movement on the horizon!",
        "Banner flags whip in a sudden gust.")) return;
      if (route("armory", "armory_inside", "armory_outside",
        "Sparks fly as mascots spar among the racks!",
        "Drill lines form outside—steel clatters on stone.")) return;
      if (route("barracks", "barracks_inside", "barracks_outside",
        "Mess hall erupts in song—spoons keep rhythm!",
        "Lanterns flicker as patrol forms up.")) return;
      if (route("great hall", "great_hall_inside", "great_hall_outside",
        "A herald announces a surprise banquet!",
        "Crowds gather as banners unfurl.")) return;
      if (route("library", "library_inside", "library_outside",
        "A hidden scroll glows in the glyph chamber!",
        "Lantern posts flicker as mascots gather outside.")) return;
      if (route("lab", "lab_inside", "lab_outside",
        "Glyph reactor hums—mascots steady the flow!",
        "Runes shimmer faintly on the sealed door.")) return;

      // MARKET
      if (route("blacksmith", "blacksmith_inside", "blacksmith_outside",
        "Forge surges—hammers ring in chorus!",
        "Chimney flares as sparks dance in the night.")) return;
      if (route("bakery", "bakery_inside", "bakery_outside",
        "Fresh loaves appear—sweet air fills the room!",
        "Warm light spills across the cobbles.")) return;
      if (route("tavern", "tavern_inside", "tavern_outside",
        "A bard kicks off a roaring chorus!",
        "Crowds gather under the swinging sign.")) return;
      if (route("clothier", "clothier_inside", "clothier_outside",
        "A rare dye batch is unveiled—cheers erupt!",
        "Mannequins rotate in the window display.")) return;
      if (route("jeweler", "jeweler_inside", "jeweler_outside",
        "Foil vault opens—a gem sparkles on the scales!",
        "Banners catch lamp light—glints draw a crowd.")) return;
      if (route("apothecary", "apothecary_inside", "apothecary_outside",
        "A tonic bubbles over—mascots scramble to cap it!",
        "Herbal scents drift along the road.")) return;
      if (route("stables", "stables_inside", "stables_outside",
        "Mascot mounts whinny—new tack fitted!",
        "Lanterns sway as a night ride assembles.")) return;
      if (route("market stalls", "market_stalls_inside", "market_stalls_outside",
        "A rare trinket appears—hands reach fast!",
        "Vendors shout—lanterns flare across the square.")) return;

      // HARBOR
      if (route("docks", "docks_inside", "docks_outside",
        "A crate pops—fresh catch floods the pier!",
        "Waves slap the pilings—lanterns ripple.")) return;
      if (route("warehouses", "warehouses_inside", "warehouses_outside",
        "Inventory shuffle—new crate stamps arrive!",
        "Guards swap shifts beneath lamplight.")) return;
      if (route("fish market", "fish_market_inside", "fish_market_outside",
        "A massive fish lands—scales flash in lamps!",
        "Vendors drum up buyers—crowds swell.")) return;
      if (route("shipyard", "shipyard_inside", "shipyard_outside",
        "A keel is set—cheers echo through frames!",
        "Tar smoke drifts as night crews assemble.")) return;
      if (route("lighthouse", "lighthouse_inside", "lighthouse_outside",
        "Signal room spikes—gauges twitch wildly!",
        "Beacon sweeps—ships blink lamps in reply.")) return;

      // TEMPLES & TOWERS
      if (route("temple of light", "temple_light_inside", "temple_light_outside",
        "A glyph blessing washes over the altar!",
        "Lantern posts glow as pilgrims arrive.")) return;
      if (route("cathedral", "cathedral_inside", "cathedral_outside",
        "Choir swells—stained glass glitters!",
        "Procession gathers beneath the towers.")) return;
      if (route("shrine of mascots", "shrine_mascots_inside", "shrine_mascots_outside",
        "Offerings shimmer—glyph tokens hum!",
        "Small bells ring—mascots kneel outside.")) return;
      if (route("temple of shadows", "temple_shadows_inside", "temple_shadows_outside",
        "Veil stirs—a shadow glyph reveals a path!",
        "Curtains billow—braziers flare low.")) return;
      if (route("tower of fire", "tower_fire_inside", "tower_fire_outside",
        "Core surges—anvils ring to stabilize!",
        "Spire flames streak across the sky.")) return;
      if (route("tower of ice", "tower_ice_inside", "tower_ice_outside",
        "Ice core pulses—frost creeps over tables!",
        "Snow gusts swirl around the base.")) return;
      if (route("tower of storms", "tower_storms_inside", "tower_storms_outside",
        "Gauges spike—rods crackle with charge!",
        "Lightning webs across the spire.")) return;

      // ACADEMY & ARENAS
      if (route("glyph academy", "glyph_academy_inside", "glyph_academy_outside",
        "A rare codex is unveiled—gasps fill the hall!",
        "Students spill into the courtyard—lamps brighten.")) return;
      if (route("colosseum", "colosseum_inside", "colosseum_outside",
        "Surprise duel—mascots roar from the stands!",
        "Torches flare as banners unfurl.")) return;
      if (route("theater", "theater_inside", "theater_outside",
        "Curtains rise—glyph drama begins!",
        "Crowds queue beneath glowing lanterns.")) return;
      if (route("circus", "circus_inside", "circus_outside",
        "Trick volley—props spin across the ring!",
        "Drumroll echoes beyond the tents.")) return;
      if (route("race track", "race_track_inside", "race_track_outside",
        "Sprint start—flags snap as mascots dash!",
        "Grandstands rumble—night race announced.")) return;
      if (route("mascot arena", "mascot_arena_inside", "mascot_arena_outside",
        "Challenge issued—arena lights blaze!",
        "Crowds surge toward the gates.")) return;

      // RESIDENTIAL
      if (route("houses", "houses_inside", "houses_outside",
        "A neighbor shares stew—table laughter grows!",
        "Cottage lanterns glow in a warm row.")) return;
      if (route("apartments", "apartments_inside", "apartments_outside",
        "Story circle forms—chairs scrape close!",
        "Balconies blink with lamplight.")) return;
      if (route("gardens", "gardens_inside", "gardens_outside",
        "New blooms open—fountain reflects lamps!",
        "Fireflies drift along paths.")) return;
      if (route("playgrounds", "playgrounds_inside", "playgrounds_outside",
        "Tag breaks out—benches fill with cheers!",
        "Lanterns brighten as families arrive.")) return;
      if (route("bathhouse", "bathhouse_inside", "bathhouse_outside",
        "Steam surge—warm towels passed around!",
        "Windows fog—lamps glow through mist.")) return;
      if (route("courtyards", "courtyards_inside", "courtyards_outside",
        "Market debate—tables gather a crowd!",
        "Musicians tune under the trees.")) return;

      // CATACOMBS
      if (route("tombs", "tombs_inside", "tombs_outside",
        "Glyph spirit rises—gifts scatter on the altar!",
        "Lanterns flicker eerily among mausoleums.")) return;
      if (route("crypts", "crypts_inside", "crypts_outside",
        "Secret latch opens—a lore vault gleams!",
        "Statues cast long moving shadows.")) return;
      if (route("hidden lab", "hidden_lab_inside", "hidden_lab_outside",
        "Reactor sparks—mascots scramble to contain!",
        "Ruins tremble—the sealed door glows.")) return;
      if (route("maze corridors", "maze_corridors_inside", "maze_corridors_outside",
        "Chalk marks rearrange—new path discovered!",
        "Lantern posts flicker at the entrances.")) return;
      if (route("lore vault", "lore_vault_inside", "lore_vault_outside",
        "A codex clicks open—pages hum!",
        "Keys clink as wards reseal the arch.")) return;

      // FORGE DISTRICT
      if (route("forge core", "forge_core_inside", "forge_core_outside",
        "Hammers ring—the core flares bright!",
        "Fiery glow paints the arches red.")) return;
      if (route("molten lake", "molten_lake_inside", "molten_lake_outside",
        "Waves surge—platform lamps blaze!",
        "Heat shimmer ripples across the road.")) return;
      if (route("obsidian mines", "obsidian_mines_inside", "obsidian_mines_outside",
        "Ore cart clatters—a new vein found!",
        "Miners trade shifts under lamplight.")) return;
      if (route("glyph reactor", "glyph_reactor_inside", "glyph_reactor_outside",
        "Core pulses—gauges redline briefly!",
        "The tower hum deepens—glyphs glow outside.")) return;
  }

      log("Unknown command. Try: explore <location> / gift / sell");
}

// Minimal input loop: press Enter to type a command
document.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    const cmd = prompt("Enter command:");
    if (cmd) {
      document.getElementById("output").innerHTML += "\n> " + cmd;
      handleCommand(cmd);
    }
  }
});

// Show a default view
showMap("middle_ground");
log("Default view: Middle Ground. Press Enter to explore.");

// Start game at saved location
function startGame() {
  let location = localStorage.getItem("atlasLocation") || "middle ground";
  log("Default view: " + location);
  showLocation(location);
}
 // Name shortcuts
const shortcuts = {
  "library": "library inside",
  "market": "market stalls inside",
  "docks": "docks inside",
  "temple": "temple of light inside",
  "arena": "mascot arena inside",
  "armory": "armory inside",
  "barracks": "barracks inside",
  "hall": "great hall inside",
  "towers": "towers inside",
  "lab": "lab inside",
  "blacksmith": "blacksmith inside",
  "bakery": "bakery inside",
  "tavern": "tavern inside",
  "clothier": "clothier inside",
  "jeweler": "jeweler inside",
  "apothecary": "apothecary inside",
  "stables": "stables inside",
  "warehouses": "warehouses inside",
  "fish": "fish market inside",
  "shipyard": "shipyard inside",
  "lighthouse": "lighthouse inside",
  "cathedral": "cathedral inside",
  "shrine": "shrine of mascots inside",
  "shadows": "temple of shadows inside",
  "fire": "tower of fire inside",
  "ice": "tower of ice inside",
  "storms": "tower of storms inside",
  "academy": "glyph academy inside",
  "colosseum": "colosseum inside",
  "theater": "theater inside",
  "circus": "circus inside",
  "race": "race track inside",
  "houses": "houses inside",
  "apartments": "apartments inside",
  "gardens": "gardens inside"
};

if (shortcuts[cmd]) {
  showLocation(shortcuts[cmd]);
  return;
}


// EXPLORE
const exploreLocations = [
  "middle ground",
  "library outside", "library inside",
  "armory outside", "armory inside",
  "barracks outside", "barracks inside",
  "great hall outside", "great hall inside",
  "towers outside", "towers inside",
  "lab outside", "lab inside",
  "blacksmith outside", "blacksmith inside",
  "bakery outside", "bakery inside",
  "tavern outside", "tavern inside",
  "clothier outside", "clothier inside",
  "jeweler outside", "jeweler inside",
  "apothecary outside", "apothecary inside",
  "stables outside", "stables inside",
  "market stalls outside", "market stalls inside",
  "docks outside", "docks inside",
  "warehouses outside", "warehouses inside",
  "fish market outside", "fish market inside",
  "shipyard outside", "shipyard inside",
  "lighthouse outside", "lighthouse inside",
  "temple of light outside", "temple of light inside",
  "cathedral outside", "cathedral inside",
  "shrine of mascots outside", "shrine of mascots inside",
  "temple of shadows outside", "temple of shadows inside",
  "tower of fire outside", "tower of fire inside",
  "tower of ice outside", "tower of ice inside",
  "tower of storms outside", "tower of storms inside",
  "glyph academy outside", "glyph academy inside",
  "colosseum outside", "colosseum inside",
  "theater outside", "theater inside",
  "circus outside", "circus inside",
  "race track outside", "race track inside",
  "mascot arena outside", "mascot arena inside",
  "houses outside", "houses inside",
  "apartments outside", "apartments inside",
  "gardens outside", "gardens inside"
];

if (cmd.startsWith("explore")) {
  const parts = cmd.split(" ");
  if (parts.length > 1) {
    const loc = parts.slice(1).join(" ").toLowerCase();
    if (exploreLocations.includes(loc)) {
      showLocation(loc);
    } else {
      log("Unknown location: '" + loc + "'. Type 'help explore' to see all available places.");
    }
  } else {
    log("Explore where? Available locations include:\n" + exploreLocations.join(", "));
  }
  return;
}
// Command handler
function handleCommand(cmdRaw) {
  let cmd = cmdRaw.toLowerCase().trim();

  // Direction shortcuts from Middle Ground hub
  const hubDirections = {
    "north": "library inside",
    "east": "market stalls inside",
    "west": "docks inside",
    "south": "temple of light inside",
    "center": "mascot arena inside"
  };
  if (hubDirections[cmd]) {
    showLocation(hubDirections[cmd]);
    return;
  }
  // HELP command
  if (cmd === "help") {
    log("Commands available: explore <location>, hub directions (north/east/west/south/center), shortcuts (library, armory, towers, etc.), reset hub");
    return;
  }
  if (cmd === "help explore") {
    log("Explorable locations: " + exploreLocations.join(", "));
    return;
  }

  // RESET command
  if (cmd === "reset hub") {
    localStorage.removeItem("atlasLocation");
    showLocation("middle ground");
    return;
  }

  // Fallback
  log("Unknown command: " + cmd + ". Type 'help' for options.");
}
// Simple logger
function log(text) {
  const out = document.getElementById("output");
  out.innerHTML += "\n" + text;
}
