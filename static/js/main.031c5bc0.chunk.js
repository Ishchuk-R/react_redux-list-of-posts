(this["webpackJsonpreact_redux-list-of-posts"]=this["webpackJsonpreact_redux-list-of-posts"]||[]).push([[0],{24:function(e,t,n){e.exports=n(36)},33:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(10),u=n.n(c),i=n(2),o=n(23),s=(n(33),n(7)),l=n.n(s),m=n(12),d=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_LOADING":return!0;case"FINISH_LOADING":return!1;default:return e}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"lOADED":return!0;default:return e}},p=n(8),E=n(17),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_POSTS":return t.posts;case"DELETE_POST":return Object(E.a)(e).filter((function(e){return e.id!==t.idx}));case"DELETE_COMMENT":return Object(E.a)(e).map((function(e){return e.id===t.postId?Object(p.a)(Object(p.a)({},e),{},{commentList:e.commentList.filter((function(e){return e.id!==t.commentId}))}):e}));default:return e}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS_ERROR":return!0;case"NOT_ERROR":return!1;default:return e}},D=n(5),y=n(21),b=n(22),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FILTER":return t.query;default:return e}},g=Object(D.combineReducers)({loading:d,posts:f,loaded:I,error:M,filter:j}),O=function(e){return e.loading},v=function(e){return e.loaded},N=function(e){return e.error},L=function(e){return t=e.posts,0===(n=e.filter).length?t:t.filter((function(e){return(e.body.toLowerCase()+e.title.toLowerCase()).includes(n.toLowerCase())}));var t,n},h=Object(D.createStore)(g,Object(y.composeWithDevTools)(Object(D.applyMiddleware)(b.a))),w=function(e){return fetch("".concat("https://mate-academy.github.io/react_dynamic-list-of-posts/api","/").concat(e,".json")).then((function(e){return e.json()}))},T=function(){var e=Object(m.a)(l.a.mark((function e(){var t,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w("/posts");case 2:return t=e.sent,e.next=5,w("/comments");case 5:return n=e.sent,e.next=8,w("/users");case 8:return r=e.sent,e.abrupt("return",t.map((function(e){return Object(p.a)(Object(p.a)({},e),{},{commentList:n.filter((function(t){return t.postId===e.id})),user:r.find((function(t){return t.id===e.userId}))})})));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(e){var t=e.text,n=Object(i.b)(),r=Object(i.c)(O),c=function(){var e=Object(m.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"START_LOADING"}),e.prev=1,e.next=4,T();case 4:t=e.sent,n({type:"SET_POSTS",posts:t}),n({type:"NOT_ERROR"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n({type:"IS_ERROR"});case 12:return e.prev=12,n({type:"FINISH_LOADING"}),n({type:"lOADED"}),e.finish(12);case 16:case"end":return e.stop()}}),e,null,[[1,9,12,16]])})));return function(){return e.apply(this,arguments)}}();return a.a.createElement("button",{type:"button",onClick:c,disabled:r},r?"Loading...":t)},A=function(e){var t=e.postId,n=e.name,r=e.body,c=e.id,u=Object(i.b)();return a.a.createElement("div",{className:"comment"},a.a.createElement("button",{onClick:function(){u(function(e,t){return{type:"DELETE_COMMENT",postId:e,commentId:t}}(t,c))},type:"button",className:"btn btn-success"},"Delete comment"),a.a.createElement("div",{className:"commentator-panel"},a.a.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHN0eWxlPi5zdDEyM3tmaWxsOiNkZmUzZTh9PC9zdHlsZT48ZyBpZD0iTGF5ZXJfM18xXyI+PHBhdGggY2xhc3M9InN0MTIzIiBkPSJNMjAgMmM5LjkyNSAwIDE4IDguMDc1IDE4IDE4cy04LjA3NSAxOC0xOCAxOFMyIDI5LjkyNSAyIDIwIDEwLjA3NSAyIDIwIDJtMC0yQzguOTU0IDAgMCA4Ljk1NCAwIDIwczguOTU0IDIwIDIwIDIwIDIwLTguOTU0IDIwLTIwUzMxLjA0NiAwIDIwIDB6Ii8+PGNpcmNsZSBjbGFzcz0ic3QxMjMiIGN4PSIyMCIgY3k9IjE1LjMzMyIgcj0iOS4zMjYiLz48cGF0aCBjbGFzcz0ic3QxMjMiIGQ9Ik0yMCA0MGM1Ljg5MiAwIDExLjE3Mi0yLjU2MyAxNC44MzItNi42MTdhMTUuNDYxIDE1LjQ2MSAwIDAwLTcuMDU5LTkuMDk0QzI1LjY5IDI2LjEgMjIuOTc2IDI3LjIwMiAyMCAyNy4yMDJzLTUuNjktMS4xMDMtNy43NzMtMi45MTNhMTUuNDYxIDE1LjQ2MSAwIDAwLTcuMDU5IDkuMDk0QzguODI4IDM3LjQzNyAxNC4xMDggNDAgMjAgNDB6Ii8+PC9nPjwvc3ZnPg==",alt:""}),a.a.createElement("div",{className:"comment-name"},n)),a.a.createElement("div",null,r))},C=function(e){var t=e.title,n=e.user,r=e.body,c=e.commentList,u=e.id,o=Object(i.b)();return a.a.createElement("div",{className:"blog-post"},a.a.createElement("h3",null,t),a.a.createElement("button",{onClick:function(){o(function(e){return{type:"DELETE_POST",idx:e}}(u))},type:"button",className:"btn btn-warning"},"Delete this post"),a.a.createElement("p",{className:"user text-primary"},n?n.name:"Unknown"),a.a.createElement("p",{className:"blog-body"},r),a.a.createElement("div",{className:"comment-list"},c?c.map((function(e){return a.a.createElement(A,Object.assign({key:e.id},e))})):null))},S=function(){var e=Object(i.c)(L);return a.a.createElement("div",null,e.map((function(e){return a.a.createElement(C,Object.assign({key:e.id},e))})))},k=function(){var e=Object(i.b)();return a.a.createElement("div",{className:"form-group"},a.a.createElement("input",{className:"form-control form-control-lg",onChange:function(t){e({type:"FILTER",query:t.target.value})},type:"text",placeholder:"Find post..."}))},z=function(){var e=Object(i.c)(v),t=Object(i.c)(N);return a.a.createElement("div",{className:"container"},a.a.createElement("h1",null,"Redux list of posts"),t&&a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Error"),a.a.createElement(x,{text:"load again"})),e?a.a.createElement("div",null,a.a.createElement(k,null),a.a.createElement(S,null)):a.a.createElement(x,{text:"load"}))},R=function(){return a.a.createElement(i.a,{store:h},a.a.createElement(o.a,null,a.a.createElement(z,null)))};u.a.render(a.a.createElement(R,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.031c5bc0.chunk.js.map