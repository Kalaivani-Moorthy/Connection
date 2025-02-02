export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "Connection/_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.DGHAlMDv.js","app":"_app/immutable/entry/app.DPx-eUFK.js","imports":["_app/immutable/entry/start.DGHAlMDv.js","_app/immutable/chunks/DXo1JewO.js","_app/immutable/chunks/D6TXjwzo.js","_app/immutable/chunks/Px_Vg1hg.js","_app/immutable/entry/app.DPx-eUFK.js","_app/immutable/chunks/D6TXjwzo.js","_app/immutable/chunks/C0HA1c8i.js","_app/immutable/chunks/BN8xq_T6.js","_app/immutable/chunks/CHed9MGg.js","_app/immutable/chunks/BN6bvO7C.js","_app/immutable/chunks/Px_Vg1hg.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
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
				id: "/game",
				pattern: /^\/game\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
