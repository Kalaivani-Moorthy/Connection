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
		client: {"start":"_app/immutable/entry/start.DkY977yZ.js","app":"_app/immutable/entry/app.Cbo5X59q.js","imports":["_app/immutable/entry/start.DkY977yZ.js","_app/immutable/chunks/BUtUFBUc.js","_app/immutable/chunks/DiwTp2os.js","_app/immutable/chunks/CCzQdjwV.js","_app/immutable/entry/app.Cbo5X59q.js","_app/immutable/chunks/DiwTp2os.js","_app/immutable/chunks/yl0GpNlX.js","_app/immutable/chunks/DM9iFJZv.js","_app/immutable/chunks/jCTKtdQ_.js","_app/immutable/chunks/CQw6z3Wc.js","_app/immutable/chunks/CCzQdjwV.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
