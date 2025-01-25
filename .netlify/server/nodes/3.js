

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.BbW6w8Qt.js","_app/immutable/chunks/disclose-version.CiR89OfO.js","_app/immutable/chunks/runtime.mGbiQ_Wj.js","_app/immutable/chunks/legacy.DD38_Pcz.js","_app/immutable/chunks/svelte-head.Cb64MeKu.js"];
export const stylesheets = [];
export const fonts = [];
