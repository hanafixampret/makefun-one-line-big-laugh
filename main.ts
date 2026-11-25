// One Line, Big Laugh — writes a single funny line (<=200 chars) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

// The gate is 1-200 UTF-8 characters, not only whitespace; the line below is
// a single self-contained joke: snooze abuse escalates into an overtime claim
// the snoozer himself has to pay for.
const LINE =
  "I hit snooze 14 times this morning. My alarm clock filed for overtime, HR approved it, and I got the bill.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (!LINE.trim()) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} characters to /output/entry.txt`);
