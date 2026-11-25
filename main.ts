// One Line, One Laugh — make.fun entry (u-coral-404-one-line-one-laugh-22f2c9f3).
// The program writes a single 74-character one-liner to the absolute path
// /output/entry.txt, exactly as the competition gate requires.
// The line: an apology outsourced to AI, and the AI apologizes back —
// the helper becomes the one owed an apology. The turn IS the joke.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I asked AI to write my apology; it apologized to me for having to read it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
