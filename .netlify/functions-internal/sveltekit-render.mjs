import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["admin/config.yml","admin/index.html","favicon.png","images/uploads/Reconquista_Internet_Emblem.png"]),
	mimeTypes: {".yml":"text/yaml",".html":"text/html",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.o5T5Vj1Q.js","app":"_app/immutable/entry/app.ByeinwV8.js","imports":["_app/immutable/entry/start.o5T5Vj1Q.js","_app/immutable/chunks/entry.peo5bsc6.js","_app/immutable/chunks/runtime.mGbiQ_Wj.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/index-client.DOZairKT.js","_app/immutable/entry/app.ByeinwV8.js","_app/immutable/chunks/preload-helper.C1FmrZbK.js","_app/immutable/chunks/runtime.mGbiQ_Wj.js","_app/immutable/chunks/render.BQEUi3iX.js","_app/immutable/chunks/svelte-head.Cb64MeKu.js","_app/immutable/chunks/disclose-version.CiR89OfO.js","_app/immutable/chunks/props.DjewgClk.js","_app/immutable/chunks/index-client.DOZairKT.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/posts/[slug]",
				pattern: /^\/posts\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
