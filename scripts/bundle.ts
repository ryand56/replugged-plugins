import asar from "@electron/asar";
import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import { Plugin } from "replugged/dist/types/addon";

readdirSync("dist", { withFileTypes: true }).forEach((direct) => {
  if (!direct.isDirectory()) return;
  const manifest = JSON.parse(
    readFileSync(join("dist", direct.name, "manifest.json"), "utf-8"),
  ) as Plugin;
  const outputName = `${manifest.id}.asar`;

  asar.createPackage(join("dist", direct.name), outputName);
});
