import { d as spread_props, f as sanitize_props } from "./index2.js";
import { T as Template } from "./template.js";
const metadata = { "id": "test123" };
function Test222_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  Template($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h1>222 testet</h1>`;
      },
      $$slots: { default: true }
    }
  ]));
}
export {
  Test222_md as default,
  metadata
};
