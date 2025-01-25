import { e as ensure_array_like, c as pop, p as push } from "../../chunks/index2.js";
import { e as escape_html } from "../../chunks/escaping.js";
import "clsx";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function _layout($$payload, $$props) {
  push();
  const { children } = $$props;
  const routes = /* @__PURE__ */ Object.assign({ "./+page.md": () => import("./_page.md.js"), "./posts/2025-01-21-test.md": () => import("../../chunks/2025-01-21-test.js"), "./posts/2025-01-21-test2.md": () => import("../../chunks/2025-01-21-test2.js"), "./posts/2025-01-22-test-pages-cms.md": () => import("../../chunks/2025-01-22-test-pages-cms.js"), "./posts/test222.md": () => import("../../chunks/test222.js") });
  const postLinks = Object.keys(routes).filter((route) => route.includes("./posts")).map((route = "") => route.substring(1).replace(".md", ""));
  const each_array = ensure_array_like(postLinks);
  $$payload.out += `<nav><a href="/">About Me</a> <a href="/admin">(Edit)</a> <br> # all posts: <ul><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let post = each_array[$$index];
    $$payload.out += `<li><a${attr("href", post)}>${escape_html(post.replace("/posts/", ""))}</a></li>`;
  }
  $$payload.out += `<!--]--></ul></nav> `;
  children($$payload);
  $$payload.out += `<!---->`;
  pop();
}
export {
  _layout as default
};
