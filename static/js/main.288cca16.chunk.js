(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,a,t){e.exports=t(61)},39:function(e,a,t){},61:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(30),r=t.n(c),m=(t(39),t(4)),o=t(5),s=t(7),i=t(6),d=t(8),h=t(15),u=t(11),E=t(31),f=function(e){function a(){return Object(m.a)(this,a),Object(s.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"js-sticky"},l.a.createElement("div",{className:"fh5co-main-nav"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"fh5co-menu-1"},l.a.createElement("a",{href:"/","data-nav-section":"home"},"Home"),l.a.createElement("a",{href:"/aboutus"},"About"),l.a.createElement("a",{href:"#","data-nav-section":"features"},"Features")),l.a.createElement("div",{className:"fh5co-logo"},l.a.createElement("a",{href:"index.html"},"Ranoush Villa")),l.a.createElement("div",{className:"fh5co-menu-2"},l.a.createElement("a",{href:"#","data-nav-section":"menu"},"Menu"),l.a.createElement("a",{href:"#","data-nav-section":"events"},"Events"),l.a.createElement("a",{href:"#","data-nav-section":"reservation"},"Reservation")))))))}}]),a}(n.Component),p=function(e){function a(){return Object(m.a)(this,a),Object(s.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{id:"fh5co-footer"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row row-padded"},l.a.createElement("div",{className:"col-md-12 text-center"},l.a.createElement("p",{className:"text-center to-animate"},l.a.createElement("a",{href:"#",className:"js-gotop"},"Go To Top")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 text-center"},l.a.createElement("ul",{className:"fh5co-social"},l.a.createElement("li",{className:"to-animate-2"},l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"icon-facebook"}))),l.a.createElement("li",{className:"to-animate-2"},l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"icon-twitter"}))),l.a.createElement("li",{className:"to-animate-2"},l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"icon-instagram"}))))))))}}]),a}(n.Component),v=t(14),N=t.n(v),g=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(s.a)(this,Object(i.a)(a).call(this,e))).state={categories:[]},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;N.a.get("http://localhost:80/ReactProject/App/banana-app/CRUD/api/categories_api/read_post.php").then(function(a){e.setState({categories:a.data}),console.log(e.state.categories)})}},{key:"render",value:function(){var e=this.state.categories;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"fh5co-container"},l.a.createElement("div",{id:"demo",className:"carousel slide ","data-ride":"carousel"},l.a.createElement("ul",{className:"carousel-indicators"},l.a.createElement("li",{"data-target":"#demo","data-slide-to":"0",className:"active"}),l.a.createElement("li",{"data-target":"#demo","data-slide-to":"1"}),l.a.createElement("li",{"data-target":"#demo","data-slide-to":"2"})),l.a.createElement("div",{className:"carousel-inner"},l.a.createElement("div",{className:"carousel-item active"},l.a.createElement("img",{src:"./images/rv1.jpeg",alt:"Los Angeles"}),l.a.createElement("div",{className:"carousel-caption"},l.a.createElement("h3",{className:"to-animate fadeInUp animated"},"Ranoush Villa"),l.a.createElement("p",{className:"to-animate fadeInUp animated"},"Home of the best italian cusine"))),l.a.createElement("div",{className:"carousel-item"},l.a.createElement("img",{src:"./images/rv2.jpeg",alt:"Chicago"}),l.a.createElement("div",{className:"carousel-caption"},l.a.createElement("h3",{className:"to-animate fadeInUp animated"},"Ranoush Villa"),l.a.createElement("p",{className:"to-animate fadeInUp animated"},"Home of the best italian cusine"))),l.a.createElement("div",{className:"carousel-item"},l.a.createElement("img",{src:"./images/rv5.jpg",alt:"New York"}),l.a.createElement("div",{className:"carousel-caption"},l.a.createElement("h3",{className:"to-animate fadeInUp animated"},"Ranoush Villa"),l.a.createElement("p",{className:"to-animate fadeInUp animated"},"Home of the best italian cusine")))),l.a.createElement("a",{className:"carousel-control-prev",href:"#demo","data-slide":"prev"},l.a.createElement("span",{className:"carousel-control-prev-icon"})),l.a.createElement("a",{className:"carousel-control-next",href:"#demo","data-slide":"next"},l.a.createElement("span",{className:"carousel-control-next-icon"}))),l.a.createElement(f,null),l.a.createElement("div",{id:"fh5co-sayings"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row to-animate"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"flexslider"},l.a.createElement("ul",{className:"slides"},l.a.createElement("li",null,l.a.createElement("blockquote",null,l.a.createElement("p",null,"\u201cCooking is an art, but all art requires knowing something about the techniques and materials\u201d"),l.a.createElement("p",{className:"quote-author"},"\u2014 Nathan Myhrvold"))),l.a.createElement("li",null,l.a.createElement("blockquote",null,l.a.createElement("p",null,"\u201cGive a man food, and he can eat htmlFor a day. Give a man a job, and he can only eat htmlFor 30 minutes on break.\u201d"),l.a.createElement("p",{className:"quote-author"},"\u2014 Lev L. Spiro"))),l.a.createElement("li",null,l.a.createElement("blockquote",null,l.a.createElement("p",null,"\u201cFind something you\u2019re passionate about and keep tremendously interested in it.\u201d"),l.a.createElement("p",{className:"quote-author"},"\u2014 Julia Child"))),l.a.createElement("li",null,l.a.createElement("blockquote",null,l.a.createElement("p",null,"\u201cNever work before breakfast; if you have to work before breakfast, eat your breakfast first.\u201d"),l.a.createElement("p",{className:"quote-author"},"\u2014 Josh Billings"))))))))),l.a.createElement("div",{id:"fh5co-featured","data-section":"features"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row text-center fh5co-heading row-padded"},l.a.createElement("div",{className:"col-md-8 offset-md-2"},l.a.createElement("h2",{className:"heading to-animate to-animate fadeInUp animated"},"Featured Dishes"),l.a.createElement("p",{className:"sub-heading to-animate"},"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."))),l.a.createElement("div",{className:"row to-animate fadeInUp animated"},l.a.createElement("div",{className:"fh5co-grid"},l.a.createElement("div",{className:"fh5co-v-half to-animate-2"},l.a.createElement("div",{className:"fh5co-v-col-2 fh5co-bg-img",style:{backgroundImage:"url(images/mangolian.jpg)"}}),l.a.createElement("div",{className:"fh5co-v-col-2 fh5co-text fh5co-special-1 arrow-left"},l.a.createElement("h2",null,"Fresh Mushrooms"),l.a.createElement("span",{className:"pricing"},"$7.50"),l.a.createElement("p",null,"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."))),l.a.createElement("div",{className:"fh5co-v-half"},l.a.createElement("div",{className:"fh5co-h-row-2 to-animate-2"},l.a.createElement("div",{className:"fh5co-v-col-2 fh5co-bg-img",style:{backgroundImage:"url(images/sweet.jpg)"}}),l.a.createElement("div",{className:"fh5co-v-col-2 fh5co-text arrow-left"},l.a.createElement("h2",null,"Grilled Chiken Salad"),l.a.createElement("span",{className:"pricing"},"$12.00"),l.a.createElement("p",null,"Far far away, behind the word mountains."))),l.a.createElement("div",{className:"fh5co-h-row-2 fh5co-reversed to-animate-2"},l.a.createElement("div",{className:"fh5co-v-col-2 fh5co-bg-img",style:{backgroundImage:"url(images/pasta.jpg)"}}),l.a.createElement("div",{className:"fh5co-v-col-2 fh5co-text arrow-right"},l.a.createElement("h2",null,"Cheese and Garlic Toast"),l.a.createElement("span",{className:"pricing"},"$4.50"),l.a.createElement("p",null,"Far far away, behind the word mountains.")))),l.a.createElement("div",{className:"fh5co-v-half"},l.a.createElement("div",{className:"fh5co-h-row-2 fh5co-reversed to-animate-2"},l.a.createElement("div",{className:"fh5co-v-col-2 fh5co-bg-img",style:{backgroundImage:"url(images/res_img_7.jpg)"}}),l.a.createElement("div",{className:"fh5co-v-col-2 fh5co-text arrow-right"},l.a.createElement("h2",null,"Organic Egg"),l.a.createElement("span",{className:"pricing"},"$4.99"),l.a.createElement("p",null,"Far far away, behind the word mountains."))),l.a.createElement("div",{className:"fh5co-h-row-2 to-animate-2"},l.a.createElement("div",{className:"fh5co-v-col-2 fh5co-bg-img",style:{backgroundImage:"url(images/res_img_6.jpg)"}}),l.a.createElement("div",{className:"fh5co-v-col-2 fh5co-text arrow-left"},l.a.createElement("h2",null,"Salad with Crispy Chicken"),l.a.createElement("span",{className:"pricing"},"$8.50"),l.a.createElement("p",null,"Far far away, behind the word mountains.")))),l.a.createElement("div",{className:"fh5co-v-half to-animate-2"},l.a.createElement("div",{className:"fh5co-v-col-2 fh5co-bg-img",style:{backgroundImage:"url(images/res_img_3.jpg)"}}),l.a.createElement("div",{className:"fh5co-v-col-2 fh5co-text fh5co-special-1 arrow-left"},l.a.createElement("h2",null,"Tomato Soup with Chicken"),l.a.createElement("span",{className:"pricing"},"$12.99"),l.a.createElement("p",null,"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."))))))),l.a.createElement("div",{id:"fh5co-type",style:{backgroundImage:"url(images/slide_1.jpg)"},"data-stellar-background-ratio":"0.5"},l.a.createElement("div",{className:"fh5co-overlay"}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row text-center fh5co-heading row-padded"},l.a.createElement("div",{className:"col-md-8 offset-md-2"},l.a.createElement("h2",{className:"heading to-animate to-animate fadeInUp animated cust"},"Our Customers"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3 to-animate"},l.a.createElement("div",{className:"fh5co-type"},l.a.createElement("h3",{className:"with-icon icon-1"},"Grace Smith"),l.a.createElement("p",null,"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."))),l.a.createElement("div",{className:"col-md-3 to-animate"},l.a.createElement("div",{className:"fh5co-type"},l.a.createElement("h3",{className:"with-icon icon-2"},"Susan Williams"),l.a.createElement("p",null,"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."))),l.a.createElement("div",{className:"col-md-3 to-animate"},l.a.createElement("div",{className:"fh5co-type"},l.a.createElement("h3",{className:"with-icon icon-3"},"John Doe"),l.a.createElement("p",null,"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."))),l.a.createElement("div",{className:"col-md-3 to-animate"},l.a.createElement("div",{className:"fh5co-type"},l.a.createElement("h3",{className:"with-icon icon-4"},"Laura klein"),l.a.createElement("p",null,"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.")))))),l.a.createElement("div",{id:"fh5co-menus","data-section":"menu"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row text-center fh5co-heading row-padded"},l.a.createElement("div",{className:"col-md-8 offset-md-2"},l.a.createElement("h2",{className:"heading to-animate"},"Food Menu"),l.a.createElement("p",{className:"sub-heading to-animate"},"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."))),l.a.createElement("div",{className:"row row-padded"},e&&e.length>0?e.map(function(e){return l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"fh5co-food-menu to-animate-2"},l.a.createElement("h2",{className:"fh5co-drinks"},e.title),l.a.createElement("ul",null,e.products&&e.products.length>0?e.products.map(function(e){return l.a.createElement("li",null,l.a.createElement("div",{className:"fh5co-food-desc"},l.a.createElement("figure",null,l.a.createElement("img",{src:"http://localhost:80/ReactProject/App/banana-app/public/images/"+e.image,className:"card-img-top",alt:"-"})),l.a.createElement("div",null,l.a.createElement("h3",null,e.title),l.a.createElement("p",null,e.body))),l.a.createElement("div",{className:"fh5co-food-pricing"},e.price))}):"no items yet")))}):l.a.createElement("div",{className:"text-center col-md-12"},l.a.createElement("h2",null,"NO POSTS YET"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4 offset-md-4 text-center to-animate-2"},l.a.createElement("p",null,l.a.createElement("a",{href:"#",className:"btn btn-primary btn-outline"},"More Food Menu")))))),l.a.createElement("div",{id:"fh5co-events","data-section":"events",style:{backgroundImage:"url(images/slide_2.jpg)"},"data-stellar-background-ratio":"0.5"},l.a.createElement("div",{className:"fh5co-overlay"}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row text-center fh5co-heading row-padded"},l.a.createElement("div",{className:"col-md-8 offset-md-2 to-animate"},l.a.createElement("h2",{className:"heading"},"Upcoming Events"),l.a.createElement("p",{className:"sub-heading"},"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"fh5co-event to-animate-2"},l.a.createElement("h3",null,"Kitchen Workshops"),l.a.createElement("span",{className:"fh5co-event-meta"},"March 19th, 2016"),l.a.createElement("p",null,"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."),l.a.createElement("p",null,l.a.createElement("a",{href:"#",className:"btn btn-primary btn-outline"},"Read More")))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"fh5co-event to-animate-2"},l.a.createElement("h3",null,"Music Concerts"),l.a.createElement("span",{className:"fh5co-event-meta"},"March 19th, 2016"),l.a.createElement("p",null,"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."),l.a.createElement("p",null,l.a.createElement("a",{href:"#",className:"btn btn-primary btn-outline"},"Read More")))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"fh5co-event to-animate-2"},l.a.createElement("h3",null,"Free to Eat Party"),l.a.createElement("span",{className:"fh5co-event-meta"},"March 19th, 2016"),l.a.createElement("p",null,"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."),l.a.createElement("p",null,l.a.createElement("a",{href:"#",className:"btn btn-primary btn-outline"},"Read More"))))))),l.a.createElement("div",{id:"fh5co-contact","data-section":"reservation"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row text-center fh5co-heading row-padded"},l.a.createElement("div",{className:"col-md-8 offset-md-2"},l.a.createElement("h2",{className:"heading to-animate"},"Reserve a Table"),l.a.createElement("p",{className:"sub-heading to-animate"},"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 to-animate-2"},l.a.createElement("h3",null,"Contact Info"),l.a.createElement("ul",{className:"fh5co-contact-info"},l.a.createElement("li",{className:"fh5co-contact-address "},l.a.createElement("i",{className:"icon-home"}),"5555 Love Paradise 56 New Clity 5655, Excel Tower United Kingdom"),l.a.createElement("li",null,l.a.createElement("i",{className:"icon-phone"})," (123) 465-6789"),l.a.createElement("li",null,l.a.createElement("i",{className:"icon-envelope"}),"info@freehtml5.co"),l.a.createElement("li",null,l.a.createElement("i",{className:"icon-globe"})," ",l.a.createElement("a",{href:"http://freehtml5.co/",target:"_blank"},"freehtml5.co")))),l.a.createElement("div",{className:"col-md-6 to-animate-2"},l.a.createElement("h3",null,"Reservation Form"),l.a.createElement("div",{className:"form-group "},l.a.createElement("label",{htmlFor:"name",className:"sr-only"},"Name"),l.a.createElement("input",{id:"name",className:"form-control",placeholder:"Name",type:"text",name:"name"})),l.a.createElement("div",{className:"form-group "},l.a.createElement("label",{htmlFor:"email",className:"sr-only"},"Email"),l.a.createElement("input",{id:"email",className:"form-control",placeholder:"Email",type:"email",name:"email"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"occation",className:"sr-only"},"Occation"),l.a.createElement("select",{className:"form-control",id:"occation",name:"occation"},l.a.createElement("option",null,"Select an Occation"),l.a.createElement("option",null,"Wedding Ceremony"),l.a.createElement("option",null,"Birthday"),l.a.createElement("option",null,"Others"))),l.a.createElement("div",{className:"form-group "},l.a.createElement("label",{htmlFor:"date",className:"sr-only"},"Date"),l.a.createElement("input",{id:"date",className:"form-control",placeholder:"Date & Time",type:"text",name:"date"})),l.a.createElement("div",{className:"form-group "},l.a.createElement("label",{htmlFor:"message",className:"sr-only"},"Message"),l.a.createElement("textarea",Object(E.a)({name:"",id:"message",cols:"30",rows:"5",className:"form-control",placeholder:"Message"},"name","message"))),l.a.createElement("div",{className:"form-group "},l.a.createElement("input",{className:"btn btn-primary",value:"Send Message",type:"submit"}))))))),l.a.createElement(p,null))}}]),a}(n.Component),b=function(e){function a(){return Object(m.a)(this,a),Object(s.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(f,null),l.a.createElement("div",{id:"fh5co-about","data-section":"about"},l.a.createElement("div",{className:"fh5co-2col fh5co-bg to-animate-2",style:{backgroundImage:"url(images/rv7.jpg)"}}),l.a.createElement("div",{className:"fh5co-2col fh5co-text"},l.a.createElement("h2",{className:"heading to-animate"},"About Us"),l.a.createElement("p",{className:"to-animate"},l.a.createElement("span",{className:"firstcharacter"},"F"),"ar far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life."),l.a.createElement("p",{className:"text-center to-animate"},l.a.createElement("a",{href:"#",className:"btn btn-primary btn-outline"},"Get in touch")))),l.a.createElement(p,null))}}]),a}(n.Component),w=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(s.a)(this,Object(i.a)(a).call(this,e))).state={categories:[]},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;N.a.get("http://localhost:8080/ReactProject/App/banana-app/CRUD/api/categories_api/read_post.php").then(function(a){e.setState({categories:a.data}),console.log(e.state.categories)})}},{key:"render",value:function(){var e=this.state.categories;return l.a.createElement("div",{id:"fh5co-menus","data-section":"menu"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row text-center fh5co-heading row-padded"},l.a.createElement("div",{className:"col-md-8 offset-md-2"},l.a.createElement("h2",{className:"heading to-animate"},"Food Menu"),l.a.createElement("p",{className:"sub-heading to-animate"},"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."))),l.a.createElement("div",{className:"row row-padded"},e&&e.length>0?e.map(function(e){return l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"fh5co-food-menu to-animate-2"},l.a.createElement("h2",{className:"fh5co-drinks"},e.title),l.a.createElement("ul",null,e.products&&e.products.length>0?e.products.map(function(e){return l.a.createElement("li",null,l.a.createElement("div",{className:"fh5co-food-desc"},l.a.createElement("figure",null,l.a.createElement("img",{src:"http://localhost:8080/ReactProject/App/banana-app/public/images/"+e.image,className:"card-img-top",alt:"-"})),l.a.createElement("div",null,l.a.createElement("h3",null,e.title),l.a.createElement("p",null,e.body))),l.a.createElement("div",{className:"fh5co-food-pricing"},e.price))}):"no items yet")))}):l.a.createElement("div",{className:"text-center col-md-12"},l.a.createElement("h2",null,"NO POSTS YET"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4 offset-md-4 text-center to-animate-2"},l.a.createElement("p",null,l.a.createElement("a",{href:"#",className:"btn btn-primary btn-outline"},"More Food Menu"))))))}}]),a}(n.Component),y=function(){return l.a.createElement(h.a,null,l.a.createElement(u.c,null,l.a.createElement(u.a,{exact:!0,path:"/",component:g}),l.a.createElement(u.a,{exact:!0,path:"/test",component:w}),l.a.createElement(u.a,{exact:!0,path:"/aboutus",component:b})))},k=function(e){function a(){return Object(m.a)(this,a),Object(s.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(y,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(h.a,{basename:"/RanoushVilla"},l.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.288cca16.chunk.js.map