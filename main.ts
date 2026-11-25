// Corridance — entry for the make.fun bounty
// u-deranalabs-invent-a-word-we-need-17a020e0 ("Invent a Word We Need")
//
// Coins one new English word and defines it in a single clear line,
// then writes that line to entry.txt in OUTPUT_DIR (default /output),
// reads it back and verifies an exact match. The file holds exactly
// the line: no trailing newline, nothing else.
//
// The word: CORRIDANCE — corridor + dance. The mirrored shuffle when
// two people trying to pass each other in a hallway keep stepping
// the same way. Everyone has done it; English had no word for it.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The coined word, named once so the entry can be checked against it.
const WORD = "Corridance";

// The entry: one invented word, one line, at most 140 characters.
const LINE =
  "Corridance (n.): the mirrored shuffle when two people trying to pass each other in a hallway keep stepping the same way.";

// The gate: 1-140 characters, a single line, not only whitespace,
// and no control characters sneaking into the file.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`Entry must be 1-140 characters, got ${LINE.length}.`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("Entry must be a single line.");
}
if (/[\u0000-\u001F\u007F]/.test(LINE)) {
  throw new Error("Entry must not contain control characters.");
}
if (LINE.trim().length === 0) {
  throw new Error("Entry must not be only whitespace.");
}
if (LINE !== LINE.trim()) {
  throw new Error("Entry must not start or end with whitespace.");
}
if (!LINE.startsWith(`${WORD} `)) {
  throw new Error(`Entry must open with the coined word "${WORD}".`);
}

const requestedDir = process.env.OUTPUT_DIR ?? "/output";
const outPath = (dir: string) => join(dir, "entry.txt");

function writeLine(dir: string): void {
  mkdirSync(dir, { recursive: true });
  writeFileSync(outPath(dir), LINE, "utf8"); // no trailing newline
}

// Try the requested directory first; if it is not writable
// (e.g. /output when running locally without root), fall back to ./output.
let outDir = requestedDir;
try {
  writeLine(outDir);
} catch {
  outDir = "./output";
  writeLine(outDir);
}

// Read it back and verify an exact match — byte for byte the line, nothing else.
const back = readFileSync(outPath(outDir), "utf8");
if (back !== LINE) {
  throw new Error(
    "Read-back verification failed: entry.txt does not match the line exactly.",
  );
}

console.log(`Wrote ${LINE.length} characters to ${outPath(outDir)}`);
