(this.webpackJsonppoke=this.webpackJsonppoke||[]).push([[0],{39:function(e,t,a){e.exports=a.p+"static/media/face.ae1b16c9.png"},41:function(e,t,a){e.exports=a.p+"static/media/oamity.f0269b28.png"},45:function(e,t,a){e.exports=a(71)},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),o=a.n(c),l=a(22),i=a(23),s=a(73),m=a(75);function u(e){return r.a.createElement(s.a.Dialog,null,r.a.createElement(s.a.Header,{closeButton:!0},r.a.createElement(s.a.Title,null,"Shopping cart")),r.a.createElement(s.a.Body,null,r.a.createElement("p",null,"items in cart:"),console.log(e),console.log(e.items),e.items.map((function(e){return r.a.createElement("div",{style:{borderStyle:"solid",padding:"2px"}},r.a.createElement("div",{style:{borderStyle:"solid"}},e.name,r.a.createElement("img",{src:e.url,style:{maxWidth:"64px"},alt:"image didn't load"}),"$",e.price))})),r.a.createElement("br",null),"total cost: ",e.items.length>0&&e.items.map((function(e){return e.price})).reduce((function(e,t){return e+t}))),r.a.createElement(s.a.Footer,null,r.a.createElement(m.a,{onClick:function(){e.trigger()}},"Close"),r.a.createElement(m.a,{variant:"primary"},"checkout")))}var d=a(37),g=a(38),p=a(43),E=a(42),f=a(39),v=a.n(f),b=a(74);function h(e){var t=e.name,a=void 0===t?"defaultNAME":t,n=e.price,c=void 0===n?"sold out":n,o=e.cardURL,l=void 0===o?{Face:v.a}:o,i=e.trigger;return r.a.createElement(b.a,{style:{width:"18rem"}},r.a.createElement(b.a.Img,{variant:"top",src:l}),r.a.createElement(b.a.Body,null,r.a.createElement(b.a.Text,{style:{fontWeight:"bold"}},"$",c),r.a.createElement(m.a,{variant:"dark",onClick:function(){i({name:a,price:c,url:l})}},"add to card")))}var y=a(40),k=a.n(y),j=function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={listings:[]},n}return Object(g.a)(a,[{key:"handleAddItem",value:function(){console.log("done")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"myListings"},this.state.listings.map((function(t){return r.a.createElement("div",{style:{borderStyle:"solid",padding:"2px"}},r.a.createElement(h,Object.assign({key:t.id},{name:t.name,cardURL:t.imageUrl,price:t.nationalPokedexNumber,trigger:e.props.trigger})))})))}},{key:"componentDidMount",value:function(){var e=this;k.a.get("https://api.pokemontcg.io/v1/cards").then((function(t){console.log(t),e.setState({listings:t.data.cards})})).catch((function(e){console.log(e)})),console.log("mounted")}}]),a}(n.Component),O=a(41),x=a.n(O);var S=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),s=Object(i.a)(o,2),m=s[0],d=s[1];return r.a.createElement("div",{className:"App"},r.a.createElement("header",{style:{fontWeight:"bold"},className:"App-header"},r.a.createElement("img",{src:x.a}),"Maxwellly's Scuffed Pok\xe9mon e-commerse site",r.a.createElement("button",{onClick:function(){console.log("goto cart"),c(!a)}}," Shopping Cart (",m.length,")")),!a&&r.a.createElement(j,{trigger:function(e){console.log("updateCart"),console.log(e),d([].concat(Object(l.a)(m),[e]))}}),a&&r.a.createElement(u,{trigger:c,items:Object(l.a)(m)}))};a(70);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.40ad7146.chunk.js.map