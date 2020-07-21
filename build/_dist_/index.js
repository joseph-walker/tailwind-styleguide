import __SNOWPACK_ENV__ from '/tailwind-styleguide/__snowpack__/env.js';
import.meta.env = __SNOWPACK_ENV__;

import App2 from "./App.js";
const app = new App2({
  target: document.body
});
export default app;
if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    app.$destroy();
  });
}
console.log("Touch");
