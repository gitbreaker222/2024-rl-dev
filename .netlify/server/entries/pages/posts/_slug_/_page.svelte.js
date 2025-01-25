import "clsx";
function _page($$payload, $$props) {
  let { data } = $$props;
  const { Content, meta } = data;
  console.log("###", meta.slug);
  $$payload.out += `<!---->This is routes/posts/[id]/+page `;
  Content($$payload, {});
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
