(this["webpackJsonpnetwork-leads"]=this["webpackJsonpnetwork-leads"]||[]).push([[0],{30:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(19),o=n.n(a),i=n(12),s=n(2),u=n(10),l=n(14),j=n(7);var d={storeToStorage:function(e,t){localStorage.setItem(e,JSON.stringify(t||null))},loadFromStorage:function(e){var t=localStorage.getItem(e);return t?JSON.parse(t):void 0}},f={loadCartToLocal:function(e){d.storeToStorage("cart",e)},getCart:function(){return d.loadFromStorage("cart")}};var b=n(0),h=Object(r.createContext)(),O=function(e){var t=e.children,n=Object(r.useState)(),c=Object(j.a)(n,2),a=c[0],o=c[1];return Object(b.jsx)(h.Provider,{value:{cartState:a,addToCart:function(e,t){var n=[];if(a&&(n=Object(l.a)(a)),void 0===n)n=[Object(u.a)({},e,t)];else{var r=n.findIndex((function(t){return Object.keys(t)[0]===e}));-1===r?n.push(Object(u.a)({},e,t)):n[r][e]+=t}o(n),f.loadCartToLocal(n)},getCart:function(){return function(){if(!a){var e=f.getCart();if(e)return o(e),e}return a}()},removeItemFromCart:function(e){var t=Object(l.a)(a),n=t.findIndex((function(t){return Object.keys(t)[0]===e}));return-1===n||(t.splice(n,1),o(t),f.loadCartToLocal(t)),t},updateAmountItem:function(e,t){var n=Object(l.a)(a),r=n.findIndex((function(t){return Object.keys(t)[0]===e}));if(-1===r)return n;n[r][e]=t,f.loadCartToLocal(n),o(n)}},children:t})};n(30);function v(){return Object(b.jsx)("header",{children:Object(b.jsxs)("nav",{className:"flex space-between align-center",children:[Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:Object(b.jsx)(i.b,{to:"/network-leads",children:"Shop"})})}),Object(b.jsx)("div",{children:Object(b.jsx)(i.b,{to:"/cart",children:"Cart"})})]})})}var x=n(21),p=n(22),g=n(24),m=n(23),C=(n(39),[{"Dairy products":["Milk","Yogurt","Chocolate milk","Cottage cheese","Gouda cheese"]},{Bakery:["Bread","Pita","Danish"]},{Vegetables:["Tomatoes","Cucumbers","Peppers","Carrots"]},{Fruits:["Apples","Oranges","Bananas"]}]),y=function(){var e=d.loadFromStorage("products");void 0===e&&(e=C,d.storeToStorage("products",e));return e}();var k={getProductByFilter:function(e){var t=e.category,n=e.text,r=function(e){return"All"===e?y:[y.find((function(t){return Object.keys(t)[0]===e}))]}(t);if(0===n.length)return r;for(var c=[],a=0;a<r.length;a++){for(var o=[],i=Object.keys(r[a])[0],s=r[a][i],l=0;l<s.length;l++)s[l].toLowerCase().includes(n)&&o.push(s[l]);o.length>0&&c.push(Object(u.a)({},i,o)),o=[]}return c},getCategoryList:function(){for(var e=[],t=0;t<y.length;t++)e.push(Object.keys(y[t])[0]);return e.unshift("All"),e}};n(40);function S(e){var t=e.categories,n=e.filter,r=e.onHandleChange,c=n.category;return Object(b.jsxs)("form",{children:[Object(b.jsx)("select",{defaultValue:c,name:"category",onChange:r,children:t.map((function(e,t){return Object(b.jsx)("option",{value:e,children:e},t)}))}),Object(b.jsx)("input",{type:"text",name:"text",placeholder:"Search",onChange:r})]})}n(41),n(42);function N(e){var t=e.productName,n=Object(r.useContext)(h).addToCart,c=Object(r.useState)(1),a=Object(j.a)(c,2),o=a[0],i=a[1];var s=function(e,t){if(e.preventDefault(),t){if(10===o)return;i(o+1)}else{if(0===o)return;i(o-1)}};return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("h3",{children:t}),Object(b.jsxs)("div",{className:"flex space-between",children:[Object(b.jsx)("p",{children:"Amount:"}),Object(b.jsx)("button",{onClick:function(e){return s(e,!1)},children:"-"}),o,Object(b.jsx)("button",{onClick:function(e){return s(e,!0)},children:"+"}),Object(b.jsx)("button",{onClick:function(e){return function(e,t){e.preventDefault(),n(t,o)}(e,t)},className:"icon",children:Object(b.jsx)("i",{className:"fas fa-cart-plus"})})]})]})}function F(e){var t=e.products;return Object(b.jsx)("div",{children:t.map((function(e,t){return Object(b.jsxs)("div",{className:"category",children:[Object(b.jsx)("h2",{children:Object.keys(e)[0]}),Object(b.jsx)("div",{className:"flex wrap",children:e[Object.keys(e)[0]].map((function(e,t){return Object(b.jsx)(N,{productName:e},t)}))})]},t)}))})}var I=function(e){Object(g.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(x.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={filter:{category:"All",text:""},categories:null,products:null},e.handleChange=function(t){t.preventDefault();var n=t.target,r=n.name,c=n.value,a=e.state.filter;a[r]=c,e.setState({filter:a});var o=k.getProductByFilter(a);e.setState({products:o})},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=k.getProductByFilter(this.state.filter),t=k.getCategoryList();this.setState({categories:t,products:e})}},{key:"render",value:function(){var e=this.state,t=e.categories,n=e.filter,r=e.products;return Object(b.jsxs)("div",{children:[t&&Object(b.jsx)(S,{categories:t,filter:n,onHandleChange:this.handleChange}),r&&Object(b.jsx)(F,{products:r})]})}}]),n}(c.a.Component);n(43);function T(e){var t=e.product,n=e.amount,c=Object(r.useState)(n),a=Object(j.a)(c,2),o=a[0],i=a[1],s=Object(r.useContext)(h).updateAmountItem,u=function(e,n){e.preventDefault();var r=o;if(n){if(10===o)return;r++}else{if(0===o)return;r--}i(r),s(t,r)};return Object(b.jsxs)("div",{className:"cart-details",children:[Object(b.jsxs)("span",{children:[t,":"]}),Object(b.jsx)("button",{onClick:function(e){return u(e,!1)},children:"-"}),Object(b.jsx)("span",{children:o}),Object(b.jsx)("button",{onClick:function(e){return u(e,!0)},children:"+"})]})}n(44);function w(e){var t=e.cart,n=e.onRemoveItem;return Object(b.jsx)("div",{children:t.map((function(e,t){var r=Object.keys(e)[0],c=e[r];return Object(b.jsxs)("div",{className:"flex wrap justify-center cart-item",children:[Object(b.jsx)(T,{product:r,amount:c}),Object(b.jsx)("button",{onClick:function(e){return n(e,r)},className:"icon",children:Object(b.jsx)("i",{className:"fas fa-trash-alt"})})]},t)}))})}function D(){var e=Object(r.useContext)(h),t=e.getCart,n=e.removeItemFromCart,c=Object(r.useState)([]),a=Object(j.a)(c,2),o=a[0],i=a[1];Object(r.useEffect)((function(){t()&&i(t())}),[]);return Object(b.jsx)("div",{children:0===o.length?Object(b.jsx)("p",{children:"There is nothing in the cart!"}):Object(b.jsxs)("div",{children:[Object(b.jsx)(w,{cart:o,onRemoveItem:function(e,t){e.preventDefault();var r=n(t);i(r)}}),Object(b.jsx)("button",{onClick:function(e){return function(e){e.preventDefault(),console.log(o)}(e)},children:"Buy"})]})})}n(45);var B=function(){return Object(b.jsx)(O,{children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)(i.a,{children:[Object(b.jsx)(v,{}),Object(b.jsxs)(s.c,{children:[Object(b.jsx)(s.a,{path:"/network-leads",component:I}),Object(b.jsx)(s.a,{path:"/cart",component:D})]})]})})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))};o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(B,{})}),document.getElementById("root")),L()}},[[46,1,2]]]);
//# sourceMappingURL=main.e6907305.chunk.js.map