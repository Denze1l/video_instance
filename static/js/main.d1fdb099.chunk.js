(this.webpackJsonpvideo_app=this.webpackJsonpvideo_app||[]).push([[0],{25:function(e,t,n){e.exports={videoDiv:"app_videoDiv__3j9Po",buttonsDiv:"app_buttonsDiv__1BOvh"}},61:function(e,t,n){e.exports=n(90)},90:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(55),o=n.n(i),c=n(56),s=n(57),l=n(16),u=n(60),h=n(59),m=n(23),v=n(25),p=n.n(v),d=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={source:"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"},a.changeCurrentTime=a.changeCurrentTime.bind(Object(l.a)(a)),a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.player.subscribeToStateChange(this.handleStateChange.bind(this))}},{key:"handleStateChange",value:function(e){this.setState({player:e})}},{key:"changeCurrentTime",value:function(e){var t=this;return function(){var n=t.player.getState().player;!1===n.paused&&t.player.seek(n.currentTime+e)}}},{key:"render",value:function(){var e=this,t=this.state.source;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:p.a.videoDiv},r.a.createElement(m.Player,{playsInline:!0,ref:function(t){e.player=t}},r.a.createElement("source",{src:t}),r.a.createElement(m.ControlBar,{autoHide:!0}))),r.a.createElement("div",{className:p.a.buttonsDiv},r.a.createElement("button",{onClick:this.changeCurrentTime(-10)},"Time -10s"),r.a.createElement("button",{onClick:this.changeCurrentTime(10)},"Time +10s")))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[61,1,2]]]);
//# sourceMappingURL=main.d1fdb099.chunk.js.map