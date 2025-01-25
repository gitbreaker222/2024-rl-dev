import { d as spread_props, f as sanitize_props } from "../../chunks/index2.js";
import { T as Template } from "../../chunks/template.js";
import { e as escape_html } from "../../chunks/escaping.js";
const metadata = {
  "name": "SvelteKit with MDsvex",
  "date": "2025-11-11T00:00:00.000Z"
};
const { name, date } = metadata;
function _page_md($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  Template($$payload, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$payload2) => {
        $$payload2.out += `<h1>Welcome to ${escape_html(name)}</h1> <p>Visit <a href="https://svelte.dev/docs/kit" rel="nofollow">svelte.dev/docs/kit</a> to read the documentation</p>`;
      },
      $$slots: { default: true }
    }
  ]));
}
export {
  _page_md as default,
  metadata
};
