(this["webpackJsonpolympics-2020"]=this["webpackJsonpolympics-2020"]||[]).push([[0],{122:function(e,t,n){},152:function(e){e.exports=JSON.parse('{"nextEvent":[{"id":"1","sportId":"1","sportTitle":"Aviron - Double","pictureUrl":"http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcR50dQaeMFX_Wdl272RFSyhTdSezT6hAGYiaP63PUmpyHc_tY-gvecbv1RkVJ2UdBQVue8bU7OROhq2-XSJG_Pu4JdektMd","date":"1627462800"},{"id":"2","sportId":"2","sportTitle":"Aviron - Solo","pictureUrl":"https://cnosf.franceolympique.com/espritbleu/fichiers/album/9/carr_9161.jpg","date":"1627484400"},{"id":"3","sportId":"3","sportTitle":"Cyclisme sur route","pictureUrl":"https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSUTjUJfezL9zj8ZU7hvXgb6Cpvq7Jv9AFv2GigUrXZY3eMLwZUiv4BbcITjmn2WX_NcxfAkClyX7SpMSTn_MueU3IKWOdS","date":"1627563600"},{"id":"4","sportId":"4","sportTitle":"Badminton - Simple homme","pictureUrl":"http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTgj9Zq_7foHTaZJhRH80GdhWefHba0QEd0fn4X5cAdHLqU_0rM4wrHRvv5Gwyz6gWiagmnaoOY4opugfnZzvKB_BDUCaKR","date":"1627578000"},{"id":"5","sportId":"5","sportTitle":"Badminton - double femme","pictureUrl":"http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSQd3kDV5DuFqwOH46xfiLtIWxLPd23ILYjKo2w6_qCG37HTf9QjcsoV5wgtBRdd3KV1diUV38dvZvKr9R4PhqB2msd-lLG","date":"1627664400"}],"medals":[{"key":"1","country":"Canada","medals":{"gold":2,"silver":3,"bronze":4}},{"key":"2","country":"Japon","medals":{"gold":12,"silver":4,"bronze":5}},{"key":"3","country":"Hongrie","medals":{"gold":2,"silver":1,"bronze":2}},{"key":"4","country":"Chine","medals":{"gold":11,"silver":5,"bronze":8}},{"key":"5","country":"Australie","medals":{"gold":6,"silver":1,"bronze":9}},{"key":"6","country":"France","medals":{"gold":3,"silver":2,"bronze":3}},{"key":"7","country":"Grande-Bretagne","medals":{"gold":5,"silver":6,"bronze":4}},{"key":"8","country":"Cor\xe9e du Sud","medals":{"gold":4,"silver":2,"bronze":5}},{"key":"9","country":"\xc9tats-Unis","medals":{"gold":10,"silver":11,"bronze":9}},{"key":"10","country":"Pays-Bas","medals":{"gold":2,"silver":6,"bronze":3}}]}')},459:function(e,t,n){"use strict";n.r(t);var r=n(152),c=n(0),i=n.n(c),a=n(86),s=n(44),l=n(463),o=(n(122),n(119)),d=n(214),u=n.n(d),j=n(467),b=n(466),m=n(87),p=n(468),h=n(465),x=n(464),g=n(96),O=n(97),f=n(10),v=function(e){var t=e.dataNextEvent,n=Object(c.useState)([]),r=Object(o.a)(n,2),i=r[0],l=r[1],d=Object(c.useState)(["Aviron - Double","Aviron - Solo","Cyclisme sur route","Badminton - Simple homme","Badminton - double femme"]),v=Object(o.a)(d,2),y=v[0],T=v[1],k=Object(c.useState)(0),z=Object(o.a)(k,2),S=z[0],U=z[1];Object(c.useEffect)((function(){l(t)}),[t]);var I=Object(c.useMemo)((function(){return y?i.filter((function(e){return y.includes(e.sportTitle)})).filter((function(e,t){return t>=S&&t<S+3})):i}),[y,i,S]);Object(c.useEffect)((function(){I.length>0&&I.length<=3&&S>0&&U((function(e){return e-3}))}),[I]);var B=i.map((function(e){return{label:e.sportId,value:e.sportTitle,key:e.id}})).filter((function(e){return!y.includes(e.value)}));return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(j.a,{placeholder:"S\xe9lectionnez des sports",mode:"multiple",showSearch:!1,size:"large",value:y,onChange:T,style:{width:"100%",marginTop:20,marginBottom:20},children:B.map((function(e){var t=e.key,n=e.value,r=e.label;return Object(f.jsx)(j.a.Option,{value:n,label:r,style:{width:"100%"},children:n},t)}))}),Object(f.jsx)(b.a.Title,{level:4,className:"title",children:"Prochaines \xe9preuves"}),I&&0===I.length?Object(f.jsx)(m.a,{description:"Aucune \xe9preuve de pr\xe9vu"}):Object(f.jsxs)(a.a,{gutter:8,align:"middle",wrap:!1,justify:"center",style:{marginTop:40,marginBottom:50},children:[Object(f.jsx)(p.a,{shape:"circle",icon:Object(f.jsx)(g.a,{}),size:"middle",onClick:function(){S-3>=0&&U(S-3)},className:"arrows next",disabled:S-3<0}),I.map((function(e){var t=e.sportId,n=e.id,r=e.sportTitle,c=e.pictureUrl,i=e.date;return Object(f.jsx)(s.a,{span:7,children:Object(f.jsx)(h.a,{cover:Object(f.jsx)(x.a,{alt:r,src:c,height:180,width:"100%",style:{objectFit:"cover"},preview:!1}),children:Object(f.jsx)(h.a.Meta,{title:r,description:u()(1e3*+i).format("DD/MM/YYYY - HH:mm")})},n)},t)})),Object(f.jsx)(p.a,{shape:"circle",icon:Object(f.jsx)(O.a,{}),size:"middle",onClick:function(){S+3<i.length&&U(S+3)},disabled:S+3>=I.length,className:"arrows prev"})]})]})},y=n(155),T=n(218),k=n.n(T),z=function(e){var t=e.medals.map((function(e){return Object(y.a)(Object(y.a)({},e),{},{total:Object.values(e.medals).reduce((function(e,t){return t+e}),0)})})),n=[{title:Object(f.jsx)(b.a.Text,{strong:!0,children:"Pays"}),dataIndex:"country",key:"country",render:function(e){return Object(f.jsx)(b.a.Text,{children:e})}},{title:Object(f.jsx)(b.a.Text,{strong:!0,children:"Or"}),dataIndex:"medals",key:"gold",render:function(e){return Object(f.jsx)(b.a.Text,{children:e.gold})},sorter:function(e,t){return e.medals.gold-t.medals.gold}},{title:Object(f.jsx)(b.a.Text,{strong:!0,children:"Argent"}),dataIndex:"medals",key:"silver",render:function(e){return Object(f.jsx)(b.a.Text,{children:e.silver})},sorter:function(e,t){return e.medals.silver-t.medals.silver}},{title:Object(f.jsx)(b.a.Text,{strong:!0,children:"Bronze"}),dataIndex:"medals",key:"bronze",render:function(e){return Object(f.jsx)(b.a.Text,{children:e.bronze})},sorter:function(e,t){return e.medals.bronze-t.medals.bronze}},{title:Object(f.jsx)(b.a.Text,{strong:!0,children:"Total"}),dataIndex:"total",key:"total",render:function(e){return Object(f.jsx)(b.a.Text,{children:e})},sorter:function(e,t){return e.total-t.total},defaultSortOrder:"descend"}];return Object(f.jsxs)(f.Fragment,{children:[" ",Object(f.jsx)(b.a.Title,{level:4,className:"medalTitle",children:"M\xe9dailles"}),Object(f.jsx)(k.a,{pagination:!1,columns:n,dataSource:t})]})},S=function(){return Object(f.jsxs)(a.a,{justify:"center",children:[Object(f.jsxs)(s.a,{span:18,children:[" ",Object(f.jsx)(v,{dataNextEvent:r.nextEvent}),Object(f.jsx)(l.a,{})]}),Object(f.jsx)(s.a,{span:18,children:Object(f.jsx)(z,{medals:r.medals})})]})},U=n(469),I=U.a.Header,B=U.a.Content,C=U.a.Footer,w=function(){return Object(f.jsxs)(U.a,{children:[Object(f.jsx)(I,{style:{background:"#d9d9d9",display:"flex",justifyContent:"center",fontSize:24,fontWeight:600},children:"JO 2020"}),Object(f.jsx)(B,{children:Object(f.jsx)(S,{})}),Object(f.jsx)(C,{})]})},A=n(31),F=n.n(A),q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,470)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),i(e),a(e)}))};n(458);F.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(w,{})}),document.getElementById("root")),q()}},[[459,1,2]]]);
//# sourceMappingURL=main.da54ad62.chunk.js.map