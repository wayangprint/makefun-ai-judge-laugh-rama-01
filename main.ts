// Revised entry program for make.fun — "Make the AI Judge Laugh".
// Bounty slug: u-rama-melon-make-the-ai-judge-laugh-302d0825.
// Goal: emit one fixed joke, exactly one line plus a trailing newline,
// into entry.txt. Determinism is the whole point: the same file must be
// produced on every run, so this module keeps no state, reads no clock,
// rolls no dice, and fetches nothing. What you see is what ships.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

type EntryConfig = {
  folder: string;
  filename: string;
};

function resolveConfig(): EntryConfig {
  // Honour the harness-provided output folder when present; the bare
  // "/output" path is only the fallback for a plain local invocation.
  const folder = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  return { folder, filename: join(folder, "entry.txt") };
}

// The gag, kept as a single literal so no join or template can drift:
// a list meant to organise work has itself become a procrastinator.
const JOKE_TEXT =
  "My to-do list has its own to-do list, and somehow both are overdue.";

function publish(cfg: EntryConfig): void {
  mkdirSync(cfg.folder, { recursive: true });
  writeFileSync(cfg.filename, JOKE_TEXT + "\n", { encoding: "utf8" });
}

publish(resolveConfig());
