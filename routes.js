import page1 from "./pages/page1.js";
import page2 from "./pages/page2.js";
import home from "./pages/home.js";

export default {
  "*": home,
  "/home": home,
  "/page1": page1,
  "/page2": page2,
};
