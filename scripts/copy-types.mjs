import { copyFile } from "node:fs/promises";
import path from "node:path";

const source = path.resolve("dist/src/index.d.ts");
const destination = path.resolve("dist/index.d.ts");

await copyFile(source, destination);
