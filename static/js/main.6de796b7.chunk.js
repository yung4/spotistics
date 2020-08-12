(this.webpackJsonpspotistics=this.webpackJsonpspotistics||[]).push([[0],{102:function(e,t,a){},106:function(e,t,a){},200:function(e,t,a){},204:function(e,t,a){},206:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(22),i=a.n(s),c=(a(102),a(6)),l=a(7),o=a(9),u=a(8),p=a(218),h=a(219),m=a(90),d=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{textAlign:"left"}},r.a.createElement("p",null,"Spotistics is a completely client sided React application that shows your Spotify listening habits. This means that your browser does all the work and that none of your information is being stored on a server. This application does need access to your Spotify account to pull the necessary data from the Spotify API."),r.a.createElement("p",null,"Even though this type of application has been done before, I always wanted to make my own version. Working on Spotistics has given me good experience with JavaScript, ReactJS, and web development in general.    "))}}]),a}(n.Component),f={textAlign:"center"},y=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:f},r.a.createElement("h1",{style:{fontSize:50}},"Spotistics"),r.a.createElement(p.a,null,r.a.createElement(h.a,null,r.a.createElement(h.a.Header,null,r.a.createElement(p.a.Toggle,{as:m.a,variant:"link",eventKey:"0"},"About")),r.a.createElement(p.a.Collapse,{eventKey:"0"},r.a.createElement(h.a.Body,null,r.a.createElement(d,null))))),r.a.createElement(m.a,{size:"lg",href:"https://accounts.spotify.com/authorize?client_id=ec8137c7bac0479b987d22b38d978bf7&redirect_uri=https://yung4.github.io/spotistics/&scope=user-top-read playlist-read-collaborative playlist-read-private user-read-recently-played&response_type=token&show_dialog=true"},"Login to Spotify"))}}]),a}(n.Component),v=a(12),g=a.n(v),b=a(16),k=a(212),E=a(61),O=a(211),j=a(216),S=a(213),w=a(214),T=(a(106),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).setUserInfo=function(){try{e.setState({userImg:e.props.user.images[0].url}),e.setState({userName:e.props.user.display_name})}catch(t){}},e.logout=function(){var t=Object(n.useState)(!1),a=Object(E.a)(t,2),s=a[0],i=a[1],c=function(){return i(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{variant:"link",onClick:function(){return i(!0)}},e.state.userName,r.a.createElement(O.a,{className:"userImg",src:e.state.userImg,width:50,height:50,roundedCircle:!0})),r.a.createElement(j.a,{show:s,onHide:c},r.a.createElement(j.a.Header,{closeButton:!0},r.a.createElement(j.a.Title,null,"Not you?")),r.a.createElement(j.a.Body,null,"Click this to logout!"),r.a.createElement(j.a.Footer,null,r.a.createElement(m.a,{variant:"secondary",onClick:c},"Cancel"),r.a.createElement(m.a,{variant:"primary",onClick:e.props.errorFunc},"Logout"))))},e.state={userImg:"",userName:""},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setUserInfo()}},{key:"componentDidUpdate",value:function(e,t){e.user!==this.props.user&&this.setUserInfo()}},{key:"render",value:function(){return r.a.createElement(k.a,{fluid:!0,className:"header"},r.a.createElement(k.a,null,r.a.createElement(S.a,null,r.a.createElement(w.a,{className:"my-auto"},r.a.createElement("h1",null,"Spotistics")),r.a.createElement(w.a,{className:"logout"},r.a.createElement(this.logout,null)))))}}]),a}(n.Component)),x=a(220),D=a(55);function A(e){for(var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=[],n=0;n<e.length;n++){for(var r=-1,s=t?I(e[n]):P(e[n]),i=0;i<a.length;i++)if(s===a[i].date){r=i;break}if(-1!==r)a[i].tracksAdded++;else{var c={date:s,tracksAdded:1};a.push(c)}}return C(a)}function I(e){return e.hasOwnProperty("addedDate")?function(e){var t=Date.parse(e),a=new Date(t),n=a.getDate(),r=a.getMonth()+1,s=a.getFullYear();return"".concat(s,"-").concat(r,"-").concat(n)}(e.addedDate):null}function P(e){return e.hasOwnProperty("releaseDate")?function(e){var t=Date.parse(e);return new Date(t).getFullYear()}(e.releaseDate):null}function C(e){for(var t=[],a=0;a<e.length;a++)e[a].date&&t.push(e[a]);return t}var M=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).fetchData=function(){var t=A(e.props.playlistItems,!0);e.parseDateArray(t)},e.parseDateArray=function(t){var a=[],n=[];t.sort();for(var r=0;r<t.length;r++)a[r]=new Date(t[r].date),n[r]=t[r].tracksAdded;var s={labels:a,datasets:[{label:"Tracks Added",data:n,backgroundColor:"#0074d9"}]};e.setState({data:s})},e.state={redraw:!0,data:{labels:[],datasets:[]}},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"componentDidUpdate",value:function(e,t){e.playlistItems!==this.props.playlistItems&&this.fetchData()}},{key:"render",value:function(){return r.a.createElement(k.a,null,r.a.createElement(D.a,{data:this.state.data,width:300,height:300,redraw:this.state.redraw,options:{maintainAspectRatio:!1,distribution:"series",scales:{xAxes:[{type:"time",time:{unit:"year"},bounds:"data",ticks:{source:"auto"},barPercentage:Math.pow(Math.log10(this.state.data.labels.length),1.5)}],yAxes:[{ticks:{autoSkip:!0,beginAtZero:!0}}]},dataset:{barPercentage:4},layout:{padding:{right:20,left:10}}}}))}}]),a}(n.Component),N=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).fetchData=function(){var t=A(e.props.playlistItems,!1);e.parseDateArray(t)},e.parseDateArray=function(t){var a=[],n=[];t.sort();for(var r=0;r<t.length;r++)a[r]=new Date(0).setFullYear(t[r].date),n[r]=t[r].tracksAdded;var s={labels:a,datasets:[{label:"Track Release Year",data:n,backgroundColor:"#0074d9"}]};e.setState({data:s})},e.state={redraw:!0,data:{labels:[],datasets:[]}},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"componentDidUpdate",value:function(e,t){e.playlistItems!==this.props.playlistItems&&this.fetchData()}},{key:"render",value:function(){return r.a.createElement(k.a,null,r.a.createElement(D.a,{data:this.state.data,width:300,height:300,redraw:this.state.redraw,options:{maintainAspectRatio:!1,distribution:"series",scales:{xAxes:[{type:"time",time:{unit:"year"},bounds:"data",ticks:{source:"labels",autoSkip:!0,autoSkipPadding:5,minRotation:this.state.data.labels.length<10?0:45,padding:5}}],yAxes:[{ticks:{beginAtZero:!0}}]},layout:{padding:{right:20,left:10,bottom:15}}}}))}}]),a}(n.Component),F=a(73),R=a.n(F);function L(e){var t=[];if("user"===e.type)return e;var a=e.items;return 0===a.length?(t[0]={id:0,title:"Data Not Found"},t):t="artist"===a[0].type?function(e){for(var t=[],a=0;a<e.length;a++)t[a]={id:a+1,title:e[a].name,href:e[a].uri,image:B(e[a].images),genres:U(e[a].genres),type:e[a].type};return t}(a):"track"===a[0].type?function(e){for(var t=[],a=0;a<e.length;a++)t[a]=_(e[a]),t[a].id=a+1;return t}(a):function(e){for(var t=[],a=0;a<e.length;a++)t[a]=_(e[a].track),t[a].id=a+1,t[a].playedAt=H(e[a].played_at);return t}(a)}function _(e){return{id:e.id,title:e.name,artistName:e.artists[0].name,albumTitle:e.album.name,href:e.uri,image:B(e.album.images),releaseDate:e.album.release_date,type:e.type}}function K(e){var t=[];e=e.items;for(var a=0;a<e.length;a++)t[a]={id:e[a].id,title:e[a].name,description:e[a].description,href:e[a].uri,image:B(e[a].images),type:e[a].type};return t}function z(e){var t=[];e=e.items;for(var a=0;a<e.length;a++)t[a]=_(e[a].track),t[a].id=a+1,t[a].addedDate=e[a].added_at;return t}function U(e){var t=e.length,a="";if(0===t)return" ";if(1===t)return e[0].toString();for(var n=0;n<t;n++)a+=e[n],n+1<t&&(a+=", ");return a}function B(e){var t=e.length;if(0===t)return" ";if(1===t)return e[0].url;for(var a=e[0],n=0;n<t;n++)a.height>e[n].height&&(a=e[n]);return a.url}function H(e){var t=Date.parse(e),a=new Date(t),n=a.getDate(),r=a.getMonth()+1,s=a.getFullYear(),i=a.getHours(),c=a.getMinutes(),l=a.getSeconds();return"".concat(r,"/").concat(n,"/").concat(s," - ").concat(i,":").concat(c,":").concat(l)}function Y(e,t){return J.apply(this,arguments)}function J(){return(J=Object(b.a)(g.a.mark((function e(t,a){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.spotify.com/v1/me/",n=[],e.next=4,R.a.ajax({url:"https://api.spotify.com/v1/me/"+a,headers:{Authorization:"Bearer "+t},success:function(e){n=L(e)},error:function(e){console.log(e),te(e.status)}});case 4:return e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e,t){return q.apply(this,arguments)}function q(){return(q=Object(b.a)(g.a.mark((function e(t,a){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},e.next=3,R.a.ajax({url:a,headers:{Authorization:"Bearer "+t},success:function(e){n=e}});case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"tracks",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"medium_term",n=50,r=0,s="top/"+t+"?time_range="+a+"&limit="+n+"&offset="+r;return Y(e,s)}function G(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"medium_term",a="artists";return Z(e,a,t)}function W(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"medium_term",a="tracks";return Z(e,a,t)}function Q(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,a="player/recently-played?limit="+t;return Y(e,a)}function X(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n="https://api.spotify.com/v1/me/",r="playlists",s="?limit="+t+"&offset="+a,i=n+r+s;return V(e,i)}function $(e,t){return V(e,t)}function ee(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r="https://api.spotify.com/v1/playlists/",s=r+t+"/tracks?limit="+a+"&offset="+n;return V(e,s)}function te(e){switch(e){case 400:console.log("400: Bad Request");break;case 401:console.log("401: Unauthorized");break;case 403:console.log("403: Server refusing to fulfill request");break;case 404:console.log("404: Resource could not be found");break;case 429:console.log("429: Too many requests; Rate limiting applied");break;case 502:console.log("502: Bad Gateway");break;case 503:console.log("503: Service Unavailable");break;default:console.log(e)}window.location.replace("https://yung4.github.io/spotistics/")}var ae=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).fetchPlaylistData=Object(b.a)(g.a.mark((function t(){var a,n,r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.props.selectedPlaylist){t.next=2;break}return t.abrupt("return",-1);case 2:return console.log(e.state.playlistItems),a=e.props.accessToken,t.next=6,ee(a,e.props.selectedPlaylist.id);case 6:return n=t.sent,t.next=9,e.props.checkNext(n);case 9:n=t.sent,r=z(n),e.setState({playlistItems:r});case 12:case"end":return t.stop()}}),t)}))),e.state={playlistItems:{}},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.selectedPlaylist&&this.fetchPlaylistData()}},{key:"componentDidUpdate",value:function(e,t){this.props.selectedPlaylist&&e.selectedPlaylist!==this.props.selectedPlaylist&&this.fetchPlaylistData()}},{key:"render",value:function(){return"datesAdded"===this.props.statsMode?r.a.createElement(M,{playlistItems:this.state.playlistItems}):r.a.createElement(N,{playlistItems:this.state.playlistItems})}}]),a}(n.Component),ne=(a(200),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(x.a.Item,{action:!0,href:this.props.artist.href,style:{padding:5}},r.a.createElement(S.a,null,r.a.createElement(w.a,{xs:1,className:"my-auto",style:{textAlign:"right"}},r.a.createElement("h3",null,this.props.artist.id)),r.a.createElement(O.a,{src:this.props.artist.image,height:50,width:50,roundedCircle:!0}),r.a.createElement(w.a,{className:"my-auto"},r.a.createElement("h3",{style:{fontSize:20}}," ",this.props.artist.title," "),r.a.createElement("p",{style:{margin:0}}," ",this.props.artist.genres," "))))}}]),a}(n.Component)),re=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return this.props.topArtists.map((function(e){return r.a.createElement(ne,{key:e.id,artist:e})}))}}]),a}(n.Component),se=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(x.a.Item,{action:!0,href:this.props.track.href,style:{padding:5}},r.a.createElement(S.a,null,r.a.createElement(w.a,{xs:1,className:"my-auto",style:{textAlign:"right"}},r.a.createElement("h3",null,this.props.track.id)),r.a.createElement(O.a,{src:this.props.track.image,height:50,width:50,roundedCircle:!0}),r.a.createElement(w.a,{className:"my-auto"},r.a.createElement("h3",{style:{fontSize:20}}," ",this.props.track.title," "),r.a.createElement("p",{style:{margin:0,fontSize:16}},this.props.track.artistName," - ",this.props.track.albumTitle))))}}]),a}(n.Component),ie=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return this.props.topTracks.map((function(e){return r.a.createElement(se,{key:e.id,track:e})}))}}]),a}(n.Component),ce=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(x.a.Item,{action:!0,href:this.props.track.href,style:{padding:5}},r.a.createElement(S.a,{style:{paddingLeft:15,paddingRight:15}},r.a.createElement(O.a,{src:this.props.track.image,height:50,width:50,roundedCircle:!0}),r.a.createElement(w.a,{className:"my-auto"},r.a.createElement("h3",{style:{fontSize:20}}," ",this.props.track.title," "),r.a.createElement("p",{style:{margin:0,fontSize:16}},this.props.track.artistName," - ",this.props.track.albumTitle)),r.a.createElement(w.a,{className:"my-auto",style:{textAlign:"right"}},r.a.createElement("p",{style:{margin:0,fontSize:16}},this.props.track.playedAt))))}}]),a}(n.Component),le=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return this.props.history.map((function(e){return r.a.createElement(ce,{key:e.id,track:e})}))}}]),a}(n.Component),oe=a(215),ue=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(oe.a,{className:"justify-content-center",variant:"pills",defaultActiveKey:this.props.timeRange,onSelect:function(t){return e.props.updateTimeRangeState(t)}},r.a.createElement(oe.a.Item,null,r.a.createElement(oe.a.Link,{eventKey:"short_term"},"1 Month")),r.a.createElement(oe.a.Item,null,r.a.createElement(oe.a.Link,{eventKey:"medium_term"},"6 Months")),r.a.createElement(oe.a.Item,null,r.a.createElement(oe.a.Link,{eventKey:"long_term"},"All Time")))}}]),a}(n.Component),pe=a(217),he=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(pe.a.Item,{eventKey:this.props.playlist.id},this.props.playlist.title)}}]),a}(n.Component),me=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).updateTitle=function(t){e.setState({playlistTitle:t})},e.state={playlistTitle:"Playlist Not Found"},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.selectedPlaylist&&this.updateTitle(this.props.selectedPlaylist.title)}},{key:"componentDidUpdate",value:function(e,t){this.props.selectedPlaylist&&e.selectedPlaylist.title!==this.props.selectedPlaylist.title&&this.updateTitle(this.props.selectedPlaylist.title)}},{key:"render",value:function(){var e=this;return r.a.createElement(oe.a,{className:"justify-content-center",variant:"pills"},r.a.createElement(oe.a,{variant:"pills",defaultActiveKey:this.props.statsMode,onSelect:function(t){return e.props.chooseMode(t)}},r.a.createElement(oe.a.Item,null,r.a.createElement(oe.a.Link,{eventKey:"datesAdded"},"Dates Added")),r.a.createElement(oe.a.Item,null,r.a.createElement(oe.a.Link,{eventKey:"releaseDate"},"Release Year"))),r.a.createElement(pe.a,{title:this.state.playlistTitle,defaultactivekey:this.props.selectedPlaylist,onSelect:function(t){return e.props.choosePlaylist(t)}},this.props.playlistList.map((function(e){return r.a.createElement(he,{key:e.id,playlist:e})}))))}}]),a}(n.Component),de=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).fetchTop=Object(b.a)(g.a.mark((function t(){var a,n,r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props.hashFragment.accessToken,n=G(a,e.state.timeRange),r=W(a,e.state.timeRange),t.t0=e,t.next=6,n;case 6:return t.t1=t.sent,t.t2={topArtists:t.t1},t.t0.setState.call(t.t0,t.t2),t.t3=e,t.next=12,r;case 12:t.t4=t.sent,t.t5={topTracks:t.t4},t.t3.setState.call(t.t3,t.t5);case 15:case"end":return t.stop()}}),t)}))),e.fetchPlaylists=Object(b.a)(g.a.mark((function t(){var a,n,r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props.hashFragment.accessToken,t.next=3,X(a);case 3:return n=t.sent,t.next=6,e.checkNext(n);case 6:n=t.sent,r=K(n),e.updatePlaylistList(r);case 9:case"end":return t.stop()}}),t)}))),e.fetchHistory=Object(b.a)(g.a.mark((function t(){var a,n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props.hashFragment.accessToken,t.next=3,Q(a);case 3:n=t.sent,e.setState({history:n});case 5:case"end":return t.stop()}}),t)}))),e.checkNext=function(){var t=Object(b.a)(g.a.mark((function t(a){var n,r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.props.hashFragment.accessToken,null===a.next){t.next=9;break}return t.next=4,$(n,a.next);case 4:return r=t.sent,t.next=7,e.checkNext(r);case 7:r=t.sent,a.items=a.items.concat(r.items);case 9:return t.abrupt("return",a);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.updatePlaylistList=function(t){e.setState({playlistList:t}),e.setState({selectedPlaylist:t[0]})},e.updateTimeRangeState=function(t){e.setState({timeRange:t})},e.updateStatsModeState=function(t){e.setState({statsMode:t})},e.updateSelectedPlaylist=function(t){for(var a=0;a<e.state.playlistList.length;a++){var n=e.state.playlistList[a];if(t===n.id){e.setState({selectedPlaylist:n});break}}},e.state={topArtists:[],topTracks:[],playlistList:[],history:[],timeRange:"short_term",selectedPlaylist:{},statsMode:"datesAdded"},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){try{this.fetchTop(),this.fetchPlaylists(),this.fetchHistory()}catch(e){console.log(e),this.props.errorFunc()}}},{key:"componentDidUpdate",value:function(e,t){t.timeRange!==this.state.timeRange&&this.fetchTop()}},{key:"render",value:function(){return"artists"===this.props.contentType?r.a.createElement(x.a,{variant:"flush"},r.a.createElement(x.a.Item,null,r.a.createElement(ue,{timeRange:this.state.timeRange,updateTimeRangeState:this.updateTimeRangeState})),r.a.createElement(re,{topArtists:this.state.topArtists})):"tracks"===this.props.contentType?r.a.createElement(x.a,{variant:"flush"},r.a.createElement(x.a.Item,null,r.a.createElement(ue,{timeRange:this.state.timeRange,updateTimeRangeState:this.updateTimeRangeState})),r.a.createElement(ie,{topTracks:this.state.topTracks})):"stats"===this.props.contentType?r.a.createElement(x.a,{variant:"flush"},r.a.createElement(x.a.Item,null,r.a.createElement(me,{statsMode:this.state.statsMode,selectedPlaylist:this.state.selectedPlaylist,playlistList:this.state.playlistList,choosePlaylist:this.updateSelectedPlaylist,chooseMode:this.updateStatsModeState})),r.a.createElement(ae,{statsMode:this.state.statsMode,selectedPlaylist:this.state.selectedPlaylist,checkNext:this.checkNext,accessToken:this.props.hashFragment.accessToken})):r.a.createElement(x.a,{variant:"flush"},r.a.createElement(le,{history:this.state.history}))}}]),a}(n.Component),fe=(a(204),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var s=arguments.length,i=new Array(s),l=0;l<s;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).aboutModal=function(){var e=Object(n.useState)(!1),t=Object(E.a)(e,2),a=t[0],s=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{variant:"link",onClick:function(){return s(!0)}},"about"),r.a.createElement(j.a,{show:a,onHide:function(){return s(!1)}},r.a.createElement(j.a.Header,{closeButton:!0},r.a.createElement(j.a.Title,null,"About")),r.a.createElement(j.a.Body,null,r.a.createElement(d,null))))},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(k.a,{fluid:!0,className:"footer"},r.a.createElement(S.a,null,r.a.createElement(w.a,null,r.a.createElement("p",null,"Made by Christopher Yung")),r.a.createElement(w.a,null,r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/yung4/spotistics"},"github repo")),r.a.createElement(w.a,null,r.a.createElement(this.aboutModal,null))))}}]),a}(n.Component)),ye=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(oe.a,{fill:!0,justify:!0,variant:"tabs",defaultActiveKey:"artists",onSelect:function(t){return e.props.setView(t)}},r.a.createElement(oe.a.Item,null,r.a.createElement(oe.a.Link,{eventKey:"artists"},r.a.createElement("h2",null,"Top Artists"))),r.a.createElement(oe.a.Item,null,r.a.createElement(oe.a.Link,{eventKey:"tracks"},r.a.createElement("h2",null,"Top Tracks"))),r.a.createElement(oe.a.Item,null,r.a.createElement(oe.a.Link,{eventKey:"stats"},r.a.createElement("h2",null,"Statistics"))),r.a.createElement(oe.a.Item,null,r.a.createElement(oe.a.Link,{eventKey:"history"},r.a.createElement("h2",null,"History"))))}}]),a}(n.Component),ve=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).fetchData=Object(b.a)(g.a.mark((function t(){var a;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Y(e.props.hashFragment.accessToken,"");case 2:a=t.sent,e.setState({user:a});case 4:case"end":return t.stop()}}),t)}))),e.errorFunc=function(e){console.log(e),window.location.replace("https://yung4.github.io/spotistics/")},e.setView=function(t){e.setState({contentType:t})},e.state={contentType:"artists",user:{}},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){try{this.fetchData()}catch(e){console.log(e),this.errorFunc()}}},{key:"componentDidUpdate",value:function(e,t){t.contentType!==this.state.contentType&&this.fetchData()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(T,{user:this.state.user,errorFunc:this.errorFunc}),r.a.createElement(k.a,null,r.a.createElement(ye,{setView:this.setView}),r.a.createElement(de,{hashFragment:this.props.hashFragment,contentType:this.state.contentType,errorFunc:this.errorFunc})),r.a.createElement(fe,null))}}]),a}(n.Component),ge={};function be(){var e=window.location.href;if(-1===e.indexOf("#"))return!1;var t=e.slice(e.indexOf("#")).split("&");try{ge.accessToken=t[0].slice(t[0].indexOf("=")+1),ge.tokenType=t[1].slice(t[1].indexOf("=")+1),ge.expiresIn=t[2].slice(t[2].indexOf("=")+1)}catch(a){return console.log(a),!1}return!0}var ke=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={loggedInStatus:!1,hashFragment:{}},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({loggedInStatus:be()}),this.setState({hashFragment:ge})}},{key:"render",value:function(){return this.state.loggedInStatus?r.a.createElement("div",{className:"App"},r.a.createElement(ve,{hashFragment:this.state.hashFragment})):r.a.createElement("div",{className:"App"},r.a.createElement(y,null))}}]),a}(n.Component);a(205);i.a.render(r.a.createElement(ke,null),document.getElementById("root"))},97:function(e,t,a){e.exports=a(206)}},[[97,1,2]]]);
//# sourceMappingURL=main.6de796b7.chunk.js.map