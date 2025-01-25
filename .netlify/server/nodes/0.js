import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.Q5j2XGxI.js","_app/immutable/chunks/preload-helper.C1FmrZbK.js","_app/immutable/chunks/disclose-version.CiR89OfO.js","_app/immutable/chunks/runtime.mGbiQ_Wj.js","_app/immutable/chunks/render.BQEUi3iX.js","_app/immutable/chunks/svelte-head.Cb64MeKu.js","_app/immutable/chunks/snippet.CLFaBuG_.js"];
export const stylesheets = [];
export const fonts = [];
