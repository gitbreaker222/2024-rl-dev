import * as universal from '../entries/pages/posts/_slug_/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/posts/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/posts/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/4.DRN283v_.js","_app/immutable/chunks/preload-helper.C1FmrZbK.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/disclose-version.CiR89OfO.js","_app/immutable/chunks/runtime.mGbiQ_Wj.js"];
export const stylesheets = [];
export const fonts = [];
