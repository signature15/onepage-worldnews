/**
 * News Image Contest Entry — Deterministic Image Generation
 *
 * Wednesday 18 November 2026: "ONE DAY, SEVEN REGIONS"
 * Broadsheet front page: 30 stories, 7 regions (Middle East, US, Asia, Europe,
 * World, Ukraine, Africa), one page, plus "The Day in Numbers" strip.
 * Copies this repository's pre-rendered newspaper front page (entry.png)
 * to the contest output location: /output/entry.png by default, or the directory
 * named by MAKEFUN_OUTPUT_DIR when running outside the grading container.
 *
 * Determinism: The source image is static and immutable. Two runs produce
 * byte-for-byte identical output with no computation or randomization.
 *
 * No network access is required: the image is local and self-contained.
 * Dependencies are limited to Node.js standard library (node:fs, node:path).
 *
 * Source resolution uses new URL('./entry.png', import.meta.url) so the current
 * working directory never affects which file is copied.
 */

import { copyFileSync } from "node:fs";
import { join } from "node:path";

const source = new URL("./entry.png", import.meta.url);
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

copyFileSync(source, join(outputDir, "entry.png"));
