(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-127196be"],{"1b9f":function(t,e,c){"use strict";c("27a4")},"27a4":function(t,e,c){},e542:function(t,e,c){"use strict";c.r(e);var a=c("7a23");const n=Object(a["I"])("data-v-0e941170");Object(a["t"])("data-v-0e941170");const o={key:0,class:"container"},i={class:"row text-center my-4"},s={class:"col-12 player-header"},l={class:"row my-4"},b={class:"col-md-3 text-center"},u={class:"col-md-5 align-items-center mb-5 mt-2 pt-lg-5"},r={class:"about"},d={class:"col-md-3 ml-auto d-flex justify-content-end align-items-end mt-5 pt-5"},O=Object(a["g"])("button",{class:"edit-button",type:"submit"}," UPDATE ",-1),j={class:"row"},p={class:"col-lg-10 mx-auto picture-glow box"},m={class:"row"},g=Object(a["g"])("div",{class:"row"},[Object(a["g"])("div",{class:"col my-4 player-header text-center"},[Object(a["g"])("p",null,"Win History")])],-1),w={class:"row"};Object(a["r"])();const v=n((t,e,c,n,v,f)=>{const y=Object(a["x"])("Achievements"),A=Object(a["x"])("GameCard");return n.account.name?(Object(a["q"])(),Object(a["d"])("div",o,[Object(a["g"])("div",i,[Object(a["g"])("div",s,Object(a["z"])(n.account.name.toUpperCase()),1)]),Object(a["g"])("div",l,[Object(a["g"])("div",b,[Object(a["g"])("img",{class:"rounded-circle picture-glow",src:n.account.picture,alt:""},null,8,["src"])]),Object(a["g"])("div",u,[Object(a["g"])("div",r,[Object(a["g"])("div",null,"BEST TIME: "+Object(a["z"])(n.account.fastestScore)+"ms",1),Object(a["g"])("div",null,"GAMES WON: "+Object(a["z"])(n.account.gamesWon),1),Object(a["g"])("div",null,"GAMES PLAYED: "+Object(a["z"])(n.account.gamesPlayed),1)])]),Object(a["g"])("div",d,[Object(a["g"])("button",{class:"edit-button",onClick:e[1]||(e[1]=t=>n.showEditForm=!n.showEditForm)}," EDIT PROFILE "),n.showEditForm?(Object(a["q"])(),Object(a["d"])("form",{key:0,onSubmit:e[4]||(e[4]=Object(a["H"])(t=>n.editProfile(n.account.id),["prevent"]))},[Object(a["F"])(Object(a["g"])("input",{name:"name",placeholder:"name...","onUpdate:modelValue":e[2]||(e[2]=t=>n.state.newInfo.name=t)},null,512),[[a["B"],n.state.newInfo.name]]),Object(a["F"])(Object(a["g"])("input",{name:"picture",placeholder:"picture...","onUpdate:modelValue":e[3]||(e[3]=t=>n.state.newInfo.picture=t)},null,512),[[a["B"],n.state.newInfo.picture]]),O],32)):Object(a["e"])("",!0)])]),Object(a["g"])("div",j,[Object(a["g"])("div",p,[Object(a["g"])("div",m,[Object(a["g"])(y)])])]),g,Object(a["g"])("div",w,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(n.wins,t=>(Object(a["q"])(),Object(a["d"])(A,{key:t.id,win:t},null,8,["win"]))),128))])])):Object(a["e"])("",!0)});var f=c("83fc"),y=c("b012"),A=c("473f"),S=c("d2ca"),h={name:"Account",setup(){Object(a["o"])(async()=>{try{await S["a"].getWins(),await A["a"].clearSession(f["AppState"].account.id),f["AppState"].currentGame={}}catch(t){Notification.toast(t)}});const t=Object(a["u"])({newInfo:{name:f["AppState"].account.name,picture:f["AppState"].account.picture}}),e=Object(a["v"])(!1);return{wins:Object(a["b"])(()=>f["AppState"].wins),state:t,showEditForm:e,account:Object(a["b"])(()=>f["AppState"].account),async logout(){y["a"].logout({returnTo:window.location.origin})},async editProfile(e){await A["a"].editProfile(e,t.newInfo),t.newInfo={name:f["AppState"].account.name,picture:f["AppState"].account.picture}}}}};c("1b9f");h.render=v,h.__scopeId="data-v-0e941170";e["default"]=h}}]);