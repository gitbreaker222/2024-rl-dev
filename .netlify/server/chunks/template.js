import { e as escape_html } from "./escaping.js";
import "clsx";
import { c as pop, p as push } from "./index2.js";
function Template($$payload, $$props) {
  push();
  let { data, children, date, isPublic = true } = $$props;
  console.log("#", isPublic);
  $$payload.out += `<!---->${escape_html(new Date(date).toLocaleDateString())} <br> `;
  if (isPublic) {
    $$payload.out += "<!--[-->";
    children?.($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    if (data.NODE_ENV === "development" && !isPublic) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div><em>(Development preview / Unpublished content)</em></div> `;
      children?.($$payload);
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `(Not yet published)`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
export {
  Template as T
};
