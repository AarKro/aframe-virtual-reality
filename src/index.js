import { registerRewindGrab } from "./components/index.js";
import { createModels, loadAssets } from "./main.js";

loadAssets();
createModels();
registerRewindGrab();