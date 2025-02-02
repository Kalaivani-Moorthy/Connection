export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.CMMYNdPr.js","app":"_app/immutable/entry/app.C445CDci.js","imports":["_app/immutable/entry/start.CMMYNdPr.js","_app/immutable/chunks/entry.Cu-06Rox.js","_app/immutable/chunks/runtime.CpCqj8bJ.js","_app/immutable/entry/app.C445CDci.js","_app/immutable/chunks/runtime.CpCqj8bJ.js","_app/immutable/chunks/render.B0mGP5hw.js","_app/immutable/chunks/events.4w5SNoww.js","_app/immutable/chunks/disclose-version.B78L5vDZ.js","_app/immutable/chunks/if.BLWaVz2p.js","_app/immutable/chunks/store.CJV2g9jd.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
