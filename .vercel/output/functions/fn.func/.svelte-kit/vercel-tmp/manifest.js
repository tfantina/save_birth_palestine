export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","favicon-16x16.png","favicon-32x32.png","favicon.ico","images/guardian.avif","images/logo.png","site.webmanifest"]),
	mimeTypes: {".png":"image/png",".avif":"image/avif",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":"_app/immutable/entry/start.CJdybTF3.js","app":"_app/immutable/entry/app.B7IIaKyX.js","imports":["_app/immutable/entry/start.CJdybTF3.js","_app/immutable/chunks/entry.FxQPAYFs.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.B7IIaKyX.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.DSoIMdT0.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
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
