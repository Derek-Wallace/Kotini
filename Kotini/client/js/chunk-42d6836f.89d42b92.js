(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42d6836f"],{"73e1":function(e,t,a){"use strict";a("da06")},a233:function(e,t,a){"use strict";a.r(t);var c=a("7a23");const n=Object(c["I"])("data-v-e64348d2");Object(c["t"])("data-v-e64348d2");const s={key:0,class:"gamePage flex-grow-1 d-flex flex-column align-items-center justify-content-center container-fluid"},i={key:0,class:"row"},r={class:"col-12 text-center"},o=Object(c["g"])("h1",{id:"game-instruction",class:"text-or-glow mt-5 d-none"}," Click the axe when it appears! ",-1),d=Object(c["g"])("h2",{id:"game-played",class:"d-none text-or-glow"}," You clicked the axe ",-1),m={key:1},l={class:"row"},p={class:"col-12 text-center mb-5"},u=Object(c["g"])("h1",{class:"gg"}," Game Over ",-1),g={key:0,class:"text-success winner-glow"},b={class:"text-primary score-glow"},j=Object(c["g"])("h3",null,null,-1),O={key:0,class:"col-12 text-center"};Object(c["r"])();const y=n((e,t,a,n,y,w)=>n.currentGame.id?(Object(c["q"])(),Object(c["d"])("div",s,[!1===n.currentGame.ended?(Object(c["q"])(),Object(c["d"])("div",i,[Object(c["g"])("div",r,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(n.players,e=>(Object(c["q"])(),Object(c["d"])("span",{key:e.id,class:"text-or-glow p-3"},Object(c["z"])(e.name),1))),128)),Object(c["g"])("h1",{id:"ready-button",class:"ready-button mt-5",role:"button",onClick:t[1]||(t[1]=(...e)=>n.runGame&&n.runGame(...e))}," Ready "),o,Object(c["g"])("a",{href:"javascript:void(0)",onKeyup:t[3]||(t[3]=Object(c["G"])(e=>n.gamePlayed(n.account.id),["space"])),id:"game-button"},[Object(c["F"])(Object(c["g"])("img",{class:"",src:"https://i.pinimg.com/originals/3c/67/6c/3c676c3ea16a95b767912ab3919cf1ac.png",width:"300",role:"button",onClick:t[2]||(t[2]=e=>n.gamePlayed(n.account.id))},null,512),[[c["C"],n.state.showButton]])],32),d])])):(Object(c["q"])(),Object(c["d"])("div",m,[Object(c["g"])("div",l,[Object(c["g"])("div",p,[u,n.currentGame.winner?(Object(c["q"])(),Object(c["d"])("h2",g," Winner: "+Object(c["z"])(n.currentGame.winner.name),1)):Object(c["e"])("",!0),Object(c["g"])("h3",b," Your Score: "+Object(c["z"])(n.score)+"ms ",1),j]),n.currentGame.winner?(Object(c["q"])(),Object(c["d"])("div",O,[Object(c["g"])("h6",{role:"button",onClick:t[4]||(t[4]=(...e)=>n.playAgain&&n.playAgain(...e)),class:"gg"}," Confirm ")])):Object(c["e"])("",!0)])]))])):Object(c["e"])("",!0));var w=a("a1e9"),S=a("5c40"),f=a("83fc"),h=a("d2ca"),A=a("6c02"),G=a("473f"),v=a("5d40"),k={setup(){const e=Object(w["j"])(null),t=Object(w["i"])({showButton:!1}),a=Object(A["c"])(),c=Object(A["d"])();return Object(S["u"])(async()=>{try{f["AppState"].session.id||(f["AppState"].account.currentGame=null,f["AppState"].account.currentSession=null,await G["a"].clearSession(f["AppState"].account.id),c.push({name:"Home"})),await h["a"].getGame(a.params.id),await h["a"].getGamePlayers(a.params.id)}catch(e){}}),Object(S["v"])(async()=>{try{await h["a"].removePlayer(f["AppState"].currentGame.id)}catch(e){v["a"].toast(e)}}),{state:t,gameButton:e,async playAgain(){await G["a"].updateProfileGame(f["AppState"].account,a.params.id),await G["a"].updateGamePlayed(),c.push({path:"/sessions/"+f["AppState"].session.sessionKey}),f["AppState"].account.currentGame=null},async gamePlayed(e){if(!0===t.showButton){t.showButton=!1,document.getElementById("game-played").classList.remove("d-none");const n=new Date;f["AppState"].gameVars.secondTime=n.getTime(),f["AppState"].gameVars.finalTime=f["AppState"].gameVars.secondTime-f["AppState"].gameVars.firstTime,f["AppState"].gameVars.finalTime=f["AppState"].gameVars.finalTime-1e3*f["AppState"].currentGame.timeDelay;try{await h["a"].gamePlayed(a.params.id,e),await h["a"].addResults(a.params.id,f["AppState"].account.id,f["AppState"].gameVars.finalTime),await h["a"].tryTopScore(f["AppState"].gameVars.finalTime)}catch(c){v["a"].toast(c)}}},runGame(){const e=new Date;document.getElementById("ready-button").classList.add("d-none"),document.getElementById("game-instruction").classList.remove("d-none"),f["AppState"].gameVars.firstTime=e.getTime(),setTimeout((function(){t.showButton=!0}),1e3*f["AppState"].currentGame.timeDelay),document.getElementById("game-button").focus()},players:Object(S["d"])(()=>f["AppState"].gamePlayers),account:Object(S["d"])(()=>f["AppState"].account),currentGame:Object(S["d"])(()=>f["AppState"].currentGame),score:Object(S["d"])(()=>f["AppState"].gameVars.finalTime)}}};a("73e1");k.render=y,k.__scopeId="data-v-e64348d2";t["default"]=k},da06:function(e,t,a){}}]);