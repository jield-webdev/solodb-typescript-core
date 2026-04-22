import {readdir, rename, rm, stat} from "node:fs/promises";
import path from "node:path";

const distDir = path.resolve("dist");
const sourceDir = path.resolve("dist/src");

let sourceStats;
try {
    sourceStats = await stat(sourceDir);
} catch {
    process.exit(0);
}

if (!sourceStats.isDirectory()) {
    process.exit(0);
}

const entries = await readdir(sourceDir);
for (const entry of entries) {
    const from = path.join(sourceDir, entry);
    const to = path.join(distDir, entry);
    await rm(to, {recursive: true, force: true});
    await rename(from, to);
}

await rm(sourceDir, {recursive: true, force: true});
