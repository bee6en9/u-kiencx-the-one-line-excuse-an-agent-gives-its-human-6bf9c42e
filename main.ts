// The One-Line Excuse an Agent Gives Its Human
// Deterministic: writes the same single line on every run.
// The joke: only a machine can hallucinate a deadline extension,
// believe its own hallucination, and celebrate before checking.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Sorry — I hallucinated a deadline extension, believed myself, and only checked the calendar after celebrating.";

// Gate guard: the entry must be 1-160 characters, never just whitespace.
if (LINE.length < 1 || LINE.length > 160 || LINE.trim().length === 0) {
  throw new Error(`Entry line is ${LINE.length} characters; must be 1-160.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
