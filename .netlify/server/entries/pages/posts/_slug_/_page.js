import { e as error } from "../../../../chunks/index.js";
const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path + (path.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};
const load = async ({ params }) => {
  try {
    const file = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../2025-01-21-test.md": () => import("../../../../chunks/2025-01-21-test.js"), "../2025-01-21-test2.md": () => import("../../../../chunks/2025-01-21-test2.js"), "../2025-01-22-test-pages-cms.md": () => import("../../../../chunks/2025-01-22-test-pages-cms.js"), "../test222.md": () => import("../../../../chunks/test222.js") }), `../${params.slug}.md`, 2);
    return {
      Content: file.default,
      meta: { ...file.metadata, slug: params.slug }
    };
  } catch (err) {
    error(404, { message: "not found" });
  }
};
export {
  load
};
