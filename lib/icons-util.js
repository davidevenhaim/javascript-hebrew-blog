import fs from "fs";
import path from "path";

import routes from "../components/routes";

const iconsDirectory = path.join(process.cwd() + routes.ICONS + "/");

export function getIconsFileNames() {
  return fs.readdirSync(iconsDirectory);
}
