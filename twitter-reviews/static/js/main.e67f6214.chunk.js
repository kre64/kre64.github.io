(window.webpackJsonpapp=window.webpackJsonpapp||[]).push([[0],{38:function(e,t,a){e.exports=a.p+"static/media/twitter_logo.d00ce219.svg"},42:function(e,t,a){e.exports=a(75)},48:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);a(43);var n=a(0),r=a.n(n),s=a(21),i=a.n(s),o=(a(48),a(27)),l=a(10),c=a(11),u=a(14),m=a(12),h=a(16),d=a(15),p=a(7),v=a.n(p),g=a(13),w=a.n(g),E=a(6),f=a.n(E),y=a(41),b=a.n(y),k=a(17),j=a.n(k),O=a(23),N=a.n(O),S=a(38),C=a.n(S),D=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"localizeNum",value:function(e){return e.toLocaleString()}},{key:"render",value:function(){var e=this.localizeNum(this.props.num_reviews);return r.a.createElement(v.a,null,r.a.createElement(w.a,null,r.a.createElement(f.a,null,r.a.createElement("div",{className:"totals-label mb-4"},this.props.loading?"":r.a.createElement("h6",null,r.a.createElement("small",{className:"text-muted fadeInLeft"},"Showing ",e," reviews"))))))}}]),t}(n.Component),L=a(8),_=a.n(L),R=a(40),T=a.n(R),x=a(28),M=a.n(x),B=a(39),z=a.n(B),W=a(20),F=a.n(W),I=a(29),A=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"starRating",value:function(e){for(var t=parseInt(e,10),a=[],n=0;n<5;n++)n<t?a.push(r.a.createElement(I.a,{size:"2.25em",color:"#1DA1F2",key:n})):a.push(r.a.createElement(I.a,{size:"2.25em",color:"#E1E8ED",key:n}));return r.a.createElement(F.a.Title,null,a)}},{key:"formatDate",value:function(e){return _()(e).format("LLLL")}},{key:"render",value:function(){var e=this.props.data;return r.a.createElement(v.a,null,r.a.createElement(w.a,null,r.a.createElement(f.a,null,r.a.createElement(F.a,{className:"shadow-sm mb-4 fadeInUp rounded",border:"primary"},r.a.createElement(F.a.Body,null,this.starRating(e.stars),r.a.createElement(F.a.Title,{style:{color:"#1DA1F2"},className:"mb-3"},r.a.createElement("strong",null,e.title)),r.a.createElement(F.a.Text,null,e.review),r.a.createElement("small",{className:"text-muted mt-1"},"By ".concat(e.author," on ").concat(this.formatDate(e.date))," \xa0\u2022\xa0 ",e.iso," "))))))}}]),t}(n.Component),H=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={today:(new Date).setHours(0,0,0,0),loading:!1,reviews:[],length:a.props.reviews.length,last_month:(new Date).setHours(0,0,0,0)},a.handleClick=a.handleClick.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({reviews:this.props.reviews})}},{key:"componentDidUpdate",value:function(e){e.num_reviews!==this.props.num_reviews&&this.setState({reviews:this.props.reviews})}},{key:"groupByDate",value:function(e){var t=this;return e.reduce((function(e,a){var n=new Date(a.date).setHours(0,0,0,0);if(e.Today||(e.Today=[]),n===t.state.today)return e.Today.push(a),e;var r=t.getDateLabel(n);return e[r]||(e[r]=[]),e[r].push(a),e}),{})}},{key:"getDateLabel",value:function(e){var t=new Date(this.state.today),a=new Date(e);return 1===Math.round(Math.abs(t-a)/864e5)?"Yesterday":_()(a).isSame(t,"isoWeek")?"This week":_()(t).subtract(1,"isoWeek").isSame(a,"isoWeek")?"Last week":_()(t).isSame(a,"month")?"This month":_()(t).subtract(1,"month").isSame(a,"month")?"Last month":_()(a).isBefore(t,"month")?"".concat(_()(a).format("MMMM")," ").concat(_()(a).year()):void 0}},{key:"handleClick",value:function(){var e=this,t="https://appfigures.com/_u/jobs/twitter-reviews?q=".concat(this.props.keyword,"&stars=").concat(this.props.rating,"&page=").concat(this.props.page,"&sort=-date");this.setState({loading:!0}),fetch(t,{method:"GET"}).then((function(e){return e.json()})).then((function(t){var a=e.state.reviews.concat(t.reviews);e.setState({reviews:a,loading:!1})})).catch((function(e){console.log(e)}))}},{key:"renderError",value:function(){return 0===this.state.reviews.length?r.a.createElement("h3",{className:"alert alert-warning"},'No reviews found for "',this.props.keyword,'"'):r.a.createElement("h3",{className:"alert alert-danger"},"Error fetching reviews!")}},{key:"renderReviews",value:function(){var e=this.groupByDate(this.state.reviews),t=Object.keys(e).map((function(t){return r.a.createElement("div",{key:t},0===e[t].length?"":r.a.createElement(z.a,{className:"shadow-sm",variant:"primary text-center"},r.a.createElement("h4",{className:"mb-0"},t)),e[t].map((function(e){return r.a.createElement(A,{key:e.id,data:e})})))}));return r.a.createElement(v.a,null,t)}},{key:"render",value:function(){var e=this;return r.a.createElement(v.a,{key:this.props.num_reviews},this.state.reviews.length>0?this.renderReviews():this.renderError(),this.props.num_reviews<=this.state.reviews.length?"":r.a.createElement(w.a,null,r.a.createElement(f.a,null,r.a.createElement(T.a,{className:"justify-content-center mb-4"},this.state.loading?r.a.createElement(M.a,{variant:"primary",block:!0,disabled:!0},r.a.createElement(N.a,{animation:"border",size:"sm"})):r.a.createElement(M.a,{onClick:function(t){e.props.handler(),e.handleClick()},variant:"primary",block:!0},"Load more")))))}}]),t}(n.Component),q=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={page:1,pages:"",loading:!1,keyword:"",rating:"1,2,3,4,5",num_reviews:0,reviews:[]},a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.handler=a.handler.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getReviews()}},{key:"handleChange",value:function(e){var t,a=this;e.persist(),console.log(e.target.value),this.setState((t={},Object(o.a)(t,e.target.name,e.target.value),Object(o.a)(t,"page",1),t),(function(){a.handleSubmit(e)}))}},{key:"handler",value:function(){this.setState({page:this.state.page+1})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.getReviews()}},{key:"getReviews",value:function(){var e=this,t=this.state.keyword,a=this.state.rating,n="https://appfigures.com/_u/jobs/twitter-reviews?q=".concat(t,"&stars=").concat(a,"&sort=-date");this.setState({loading:!0}),fetch(n,{method:"GET"}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({reviews:t.reviews,num_reviews:t.total,loading:!1,page:e.state.page+1,pages:t.pages})})).catch((function(e){console.log(e)}))}},{key:"renderLoading",value:function(){return r.a.createElement(v.a,{className:"p-5 text-center"},r.a.createElement(N.a,{animation:"border",variant:"primary",style:{width:"3.375rem",height:"3.375rem"}}))}},{key:"renderReviews",value:function(){return r.a.createElement(H,{reviews:this.state.reviews,num_reviews:this.state.num_reviews,keyword:this.state.keyword,rating:this.state.rating,page:this.state.page,pages:this.state.pages,handler:this.handler})}},{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(v.a,{className:"p-3"},r.a.createElement(w.a,{className:"justify-content-center"},r.a.createElement(f.a,{className:"col-auto text-center"},r.a.createElement(b.a,{width:"80%",height:"80%",src:C.a,alt:"Logo",fluid:!0,rounded:!0})),r.a.createElement(f.a,{className:"col-xs-9 text-center my-auto"},r.a.createElement("h1",{className:"app_name"},"Reviews for Twitter")))),r.a.createElement(v.a,{className:"p-3"},r.a.createElement(j.a,{onSubmit:this.handleSubmit},r.a.createElement(j.a.Row,null,r.a.createElement(f.a,{className:"col-md-8"},r.a.createElement(j.a.Label,null,"Filter by keyword:"),r.a.createElement(j.a.Control,{name:"keyword",onChange:this.handleChange,placeholder:"Enter keyword",value:this.state.keyword})),r.a.createElement(f.a,{className:"col-md-4"},r.a.createElement(j.a.Label,null,"Filter by rating:"),r.a.createElement(j.a.Control,{as:"select",name:"rating",onChange:this.handleChange,value:this.state.rating},r.a.createElement("option",{value:"1,2,3,4,5"},"All Ratings"),r.a.createElement("option",{value:"1"},"1","\t","\uf005"),r.a.createElement("option",{value:"2"},"2","\t","\uf005\uf005"),r.a.createElement("option",{value:"3"},"3","\t","\uf005\uf005\uf005"),r.a.createElement("option",{value:"4"},"4","\t","\uf005\uf005\uf005\uf005"),r.a.createElement("option",{value:"5"},"5","\t","\uf005\uf005\uf005\uf005\uf005")))))),r.a.createElement(D,{loading:this.state.loading,num_reviews:this.state.num_reviews}),this.state.loading?this.renderLoading():this.renderReviews())}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[42,1,2]]]);
//# sourceMappingURL=main.e67f6214.chunk.js.map