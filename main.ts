import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, isAbsolute, join } from "node:path";
import { fileURLToPath } from "node:url";

const baseDir = dirname(fileURLToPath(import.meta.url));
const requested = process.env.MAKEFUN_OUTPUT_DIR?.trim();
const outputDir = requested
  ? isAbsolute(requested)
    ? requested
    : join(baseDir, requested)
  : "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), "buffering", "utf8");
