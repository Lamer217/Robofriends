(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(7),a=n.n(c),s=(n(12),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))}),o=(n(13),n(2)),i=n(3),h=n(5),l=n(4),b=n(0),u=function(e){var t=e.name,n=e.email,r=e.id;return Object(b.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(b.jsx)("img",{src:"https://robohash.org/".concat(r,"?200x200"),alt:"Friend avatar"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"tc",children:t}),Object(b.jsx)("p",{className:"tc",children:n})]})]})},d=function(e){var t=e.robots;return Object(b.jsx)(b.Fragment,{children:t.map((function(e,n){return Object(b.jsx)(u,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},j=function(e){var t=e.searchChange;return Object(b.jsx)("div",{className:"db pa1",children:Object(b.jsx)("input",{type:"search",className:"pa2 ba b--green bg-lightest-blue br2",name:"Searchbox",id:"Searchbox",placeholder:"Search a Robofriend",onChange:t})})},f=(n(15),function(e){return Object(b.jsx)("div",{style:{overflowY:"scroll",height:"70vh",boxShadow:"0 -1px 10px  #10ff51"},children:e.children})}),O=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(b.jsx)("h1",{children:"Oops! This looks like an error."}):this.props.children}}]),n}(r.Component),p=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return console.log(t),Object(b.jsxs)("div",{className:"tc",children:[Object(b.jsx)("h1",{children:"RoboFriends"}),Object(b.jsx)(j,{searchChange:this.onSearchChange}),Object(b.jsx)(O,{children:Object(b.jsx)(f,{children:Object(b.jsx)(d,{robots:t})})})]})}}]),n}(r.Component);a.a.render(Object(b.jsx)(p,{}),document.getElementById("root")),s()}},[[16,1,2]]]);
//# sourceMappingURL=main.76000b6d.chunk.js.map