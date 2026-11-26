import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One emoji, one dream vacation: Mount Fuji at dawn — the Japan trip,
// a snow-capped postcard rather than a generic beach.
const entry = "🗻";

function fail(message: string): never {
  console.error(message);
  process.exit(1);
}

// Exactly one code point, so it is unambiguously one emoji glyph:
// no ZWJ sequence, variation selector, skin tone, or flag pair.
const chars = [...entry];
if (chars.length !== 1) {
  fail(`entry must be exactly 1 character, got ${chars.length}`);
}
if (chars.length < 1 || chars.length > 8) {
  fail(`entry must be 1-8 characters, got ${chars.length}`);
}
if (/[\s\u0000-\u001F\u007F]/u.test(entry)) {
  fail("entry must not contain whitespace or control characters");
}

// UTF-8 round-trip: encoding then decoding must reproduce the entry.
const bytes = Buffer.from(entry, "utf8");
if (bytes.toString("utf8") !== entry) {
  fail("entry does not round-trip through UTF-8");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, bytes);

// Read back and verify exact byte equality (also proves no trailing newline).
const written = readFileSync(outPath);
if (!written.equals(bytes)) {
  fail("written entry.txt does not match the intended bytes");
}
