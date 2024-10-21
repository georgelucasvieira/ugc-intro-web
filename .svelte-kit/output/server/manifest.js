export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.gNlildaL.js","app":"_app/immutable/entry/app.Bd_ItKty.js","imports":["_app/immutable/entry/start.gNlildaL.js","_app/immutable/chunks/entry.Cyjzv2Oq.js","_app/immutable/chunks/scheduler.DcvwqIos.js","_app/immutable/entry/app.Bd_ItKty.js","_app/immutable/chunks/preload-helper.C1FmrZbK.js","_app/immutable/chunks/scheduler.DcvwqIos.js","_app/immutable/chunks/index.w2n1_xMr.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
