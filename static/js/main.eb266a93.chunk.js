(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),i=a(8),o=a.n(i),r=(a(13),a(3)),l=a(4),p=a(2),c=a(6),u=a(5),d=(a(14),a(0)),h=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).playSound=n.playSound.bind(Object(p.a)(n)),n.handleKeyDown=n.handleKeyDown.bind(Object(p.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown),window.focus()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this,t=this.props,a=t.letter,n=t.audio,s="drum-pad-".concat(a.toLowerCase());return Object(d.jsxs)("button",{className:"DrumPad drum-pad",id:s,onClick:this.playSound,children:[a,Object(d.jsx)("audio",{ref:function(t){return e.audioPlayer=t},id:a,className:"clip",src:n})]})}},{key:"playSound",value:function(){this.audioPlayer.currentTime=0,this.audioPlayer.play();this.props.updateDisplay(this.props.letter,1600)}},{key:"handleKeyDown",value:function(e){console.log(e),e.key.toUpperCase()===this.props.letter&&this.playSound()}}]),a}(s.a.Component),m=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"display",id:"display",children:Object(d.jsx)("h1",{children:this.props.displayText})})}}]),a}(s.a.Component),y=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).render=function(){var e=[{letter:"Q",audio:"https://sampleswap.org/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Guitars/17[kb]electric_guitarpluck.wav.mp3"},{letter:"W",audio:"https://sampleswap.org/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Guitars/23[kb]mellow-guitar-chord-3.wav.mp3"},{letter:"E",audio:"https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Roland%20SH09/247[kb]longlow.wav.mp3"},{letter:"A",audio:"https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Kawai%20R50/102[kb]CRASH.wav.mp3"},{letter:"S",audio:"https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Hammond%20Drum%20Machine/17[kb]ham-bd-02.wav.mp3"},{letter:"D",audio:"https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Hammond%20Drum%20Machine/34[kb]ham-cym-no-1.wav.mp3"},{letter:"Z",audio:"https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Hammond%20Drum%20Machine/29[kb]ham-hho01.wav.mp3"},{letter:"X",audio:"https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Hammond%20Drum%20Machine/14[kb]ham-sd-05.wav.mp3"},{letter:"C",audio:"https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Korg%20ER-1/166[kb]er1-cymbnoiz.wav.mp3"}].map((function(e){return Object(d.jsx)(h,{letter:e.letter,audio:e.audio,updateDisplay:n.changeDisplayText},e.letter)}));return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{id:"drum-machine",children:[Object(d.jsx)(m,{displayText:n.state.displayText}),e]})})},n.state={displayText:"Click a drum pad to play sound"},n.changeDisplayText=n.changeDisplayText.bind(Object(p.a)(n)),n.clearDisplay=n.clearDisplay.bind(Object(p.a)(n)),n}return Object(l.a)(a,[{key:"changeDisplayText",value:function(e,t){var a=this;this.setState({displayText:e}),setTimeout((function(){return a.clearDisplay()}),t)}},{key:"clearDisplay",value:function(){this.setState({displayText:""})}}]),a}(s.a.Component),b=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),n(e),s(e),i(e),o(e)}))};o.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root")),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.eb266a93.chunk.js.map