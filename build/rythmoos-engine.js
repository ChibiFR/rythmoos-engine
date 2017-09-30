var RythmoosEngine=function(e){function t(o){if(n[o])return n[o].exports;var a=n[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e['default']}:function(){return e};return t.d(n,'a',n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p='',t(t.s=8)}([function(e,t,n){'use strict';Object.defineProperty(t,'__esModule',{value:!0});var o=n(13);Object.keys(o).forEach(function(e){'default'===e||'__esModule'===e||Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})});var a=n(14);Object.keys(a).forEach(function(e){'default'===e||'__esModule'===e||Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})})},function(e,t){'use strict';function n(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')}Object.defineProperty(t,'__esModule',{value:!0});var o=function(){function e(e,t){for(var n,o=0;o<t.length;o++)n=t[o],n.enumerable=n.enumerable||!1,n.configurable=!0,'value'in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=t.Graphics=function(){function e(){0<arguments.length&&void 0!==arguments[0]?arguments[0]:!0;n(this,e),this.visible=!0}return o(e,[{key:'draw',value:function(){}},{key:'_render',value:function(e){this.visible&&this.draw(e)}}]),e}()},function(e,t,n){'use strict';Object.defineProperty(t,'__esModule',{value:!0});var o=n(11);Object.keys(o).forEach(function(e){'default'===e||'__esModule'===e||Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})});var a=n(12);Object.keys(a).forEach(function(e){'default'===e||'__esModule'===e||Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})});var r=n(15);Object.keys(r).forEach(function(e){'default'===e||'__esModule'===e||Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})})},function(e,t){'use strict';function n(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')}Object.defineProperty(t,'__esModule',{value:!0});var o=function(){function e(e,t){for(var n,o=0;o<t.length;o++)n=t[o],n.enumerable=n.enumerable||!1,n.configurable=!0,'value'in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=t.Scene=function(){function e(){n(this,e),this.gameObjects=[]}return o(e,[{key:'add',value:function(e){this.gameObjects.push(e);for(var t=arguments.length,n=Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var a,r=!0,i=!1;try{for(var l,u,d=n[Symbol.iterator]();!(r=(l=d.next()).done);r=!0)u=l.value,this.add(u)}catch(e){i=!0,a=e}finally{try{!r&&d.return&&d.return()}finally{if(i)throw a}}}},{key:'contains',value:function(e){return-1!==this.gameObjects.indexOf(e)}},{key:'remove',value:function(e){var t=this.gameObjects.indexOf(e);-1!==t&&this.gameObjects.splice(t,1);for(var n=arguments.length,o=Array(1<n?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];var r,i=!0,l=!1;try{for(var u,d,s=o[Symbol.iterator]();!(i=(u=s.next()).done);i=!0)d=u.value,this.remove(d)}catch(e){l=!0,r=e}finally{try{!i&&s.return&&s.return()}finally{if(l)throw r}}}},{key:'update',value:function(){}},{key:'afterUpdate',value:function(){}},{key:'_runUpdate',value:function(){this.update();var e,t=!0,n=!1;try{for(var o,a,r=this.gameObjects[Symbol.iterator]();!(t=(o=r.next()).done);t=!0)a=o.value,a.update()}catch(t){n=!0,e=t}finally{try{!t&&r.return&&r.return()}finally{if(n)throw e}}}},{key:'_runAfterUpdate',value:function(){var e,t=!0,n=!1;try{for(var o,a,r=this.gameObjects[Symbol.iterator]();!(t=(o=r.next()).done);t=!0)a=o.value,a.afterUpdate()}catch(t){n=!0,e=t}finally{try{!t&&r.return&&r.return()}finally{if(n)throw e}}this.afterUpdate()}}]),e}()},function(e,t,n){'use strict';Object.defineProperty(t,'__esModule',{value:!0});var o=n(16);Object.keys(o).forEach(function(e){'default'===e||'__esModule'===e||Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})});var a=n(5);Object.keys(a).forEach(function(e){'default'===e||'__esModule'===e||Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})})},function(e,t){'use strict';function n(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')}Object.defineProperty(t,'__esModule',{value:!0});var o=function(){function e(e,t){for(var n,o=0;o<t.length;o++)n=t[o],n.enumerable=n.enumerable||!1,n.configurable=!0,'value'in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=t.Time=function(){function e(){n(this,e)}return o(e,null,[{key:'_setFrame',value:function(e){this._deltaTime=e-this._time,this._time=e}},{key:'deltaTime',get:function(){return this._deltaTime}},{key:'time',get:function(){return this._time}},{key:'lastTime',get:function(){return this._time-this._deltaTime}},{key:'FPS',get:function(){return 1e3/this._deltaTime}}]),e}();a._deltaTime=0,a._time=0},function(e,t,n){'use strict';Object.defineProperty(t,'__esModule',{value:!0});var o=n(17);Object.keys(o).forEach(function(e){'default'===e||'__esModule'===e||Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})});var a=n(7);Object.keys(a).forEach(function(e){'default'===e||'__esModule'===e||Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})});var r=n(18);Object.keys(r).forEach(function(e){'default'===e||'__esModule'===e||Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})})},function(e,t){'use strict';Object.defineProperty(t,'__esModule',{value:!0});t.Keys={Digit0:'Digit0',Digit1:'Digit1',Digit2:'Digit2',Digit3:'Digit3',Digit4:'Digit4',Digit5:'Digit5',Digit6:'Digit6',Digit7:'Digit7',Digit8:'Digit8',Digit9:'Digit9',KeyA:'KeyA',KeyB:'KeyB',KeyC:'KeyC',KeyD:'KeyD',KeyE:'KeyE',KeyF:'KeyF',KeyG:'KeyG',KeyH:'KeyH',KeyI:'KeyI',KeyJ:'KeyJ',KeyK:'KeyK',KeyL:'KeyL',KeyM:'KeyM',KeyN:'KeyN',KeyO:'KeyO',KeyP:'KeyP',KeyQ:'KeyQ',KeyR:'KeyR',KeyS:'KeyS',KeyT:'KeyT',KeyU:'KeyU',KeyV:'KeyV',KeyW:'KeyW',KeyX:'KeyX',KeyY:'KeyY',KeyZ:'KeyZ',Escape:'Escape',F1:'F1',F2:'F2',F3:'F3',F4:'F4',F5:'F5',F6:'F6',F7:'F7',F8:'F8',F9:'F9',F10:'F10',F11:'F11',F12:'F12',Insert:'Insert',Delete:'Delete',Home:'Home',End:'End',PageUp:'PageUp',PageDown:'PageDown',NumLock:'NumLock',NumpadDivide:'NumpadDivide',NumpadMultiply:'NumpadMultiply',NumpadSubtract:'NumpadSubtract',NumpadAdd:'NumpadAdd',NumpadEnter:'NumpadEnter',NumpadDecimal:'NumpadDecimal',Numpad0:'Numpad0',Numpad1:'Numpad1',Numpad2:'Numpad2',Numpad3:'Numpad3',Numpad4:'Numpad4',Numpad5:'Numpad5',Numpad6:'Numpad6',Numpad7:'Numpad7',Numpad8:'Numpad8',Numpad9:'Numpad9',ArrowUp:'ArrowUp',ArrowDown:'ArrowDown',ArrowLeft:'ArrowLeft',ArrowRight:'ArrowRight',Backquote:'Backquote',Minus:'Minus',Equal:'Equal',Backspace:'Backspace',BracketLeft:'BracketLeft',BracketRight:'BracketRight',Quote:'Quote',Backslash:'Backslash',Comma:'Comma',Period:'Period',Slash:'Slash',Enter:'Enter',ShiftLeft:'ShiftLeft',ShiftRight:'ShiftRight',CapsLock:'CapsLock',Tab:'Tab',ControlLeft:'ControlLeft',ControlRight:'ControlRight',MetaLeft:'MetaLeft',MetaRight:'MetaRight',AltLeft:'AltLeft',AltRight:'AltRight'}},function(e,t,n){'use strict';Object.defineProperty(t,'__esModule',{value:!0});var o=n(9);Object.keys(o).forEach(function(e){'default'===e||'__esModule'===e||Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})});var a=n(0);Object.keys(a).forEach(function(e){'default'===e||'__esModule'===e||Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})});var r=n(20);Object.keys(r).forEach(function(e){'default'===e||'__esModule'===e||Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})});var i=n(6);Object.keys(i).forEach(function(e){'default'===e||'__esModule'===e||Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})});var l=n(2);Object.keys(l).forEach(function(e){'default'===e||'__esModule'===e||Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}})});var u=n(4);Object.keys(u).forEach(function(e){'default'===e||'__esModule'===e||Object.defineProperty(t,e,{enumerable:!0,get:function(){return u[e]}})})},function(e,t,n){'use strict';Object.defineProperty(t,'__esModule',{value:!0});var o=n(10);Object.keys(o).forEach(function(e){'default'===e||'__esModule'===e||Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})});var a=n(19);Object.keys(a).forEach(function(e){'default'===e||'__esModule'===e||Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})});var r=n(3);Object.keys(r).forEach(function(e){'default'===e||'__esModule'===e||Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})})},function(e,t,n){'use strict';function o(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')}Object.defineProperty(t,'__esModule',{value:!0}),t.Game=void 0;var a=function(){function e(e,t){for(var n,o=0;o<t.length;o++)n=t[o],n.enumerable=n.enumerable||!1,n.configurable=!0,'value'in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(3),i=n(2),l=n(4),u=n(6),d=t.Game=function(){function e(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1280,a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:720;o(this,e),this.canvas=document.createElement('canvas'),this.scene=new r.Scene,this.renderer=new i.Renderer(this.canvas.getContext('2d')),this._loop=new l.Loop,this._created=!1,this.canvas.style.display='block',this.canvas.style.width='100%',this.canvas.style.height='auto',this.canvas.width=n,this.canvas.height=a,t.appendChild(this.canvas),i.Screen._init(this.canvas),u.Mouse._init(this.canvas),u.Keyboard._init(),this.renderer.render(this.scene)}return a(e,[{key:'create',value:function(){}},{key:'update',value:function(){}},{key:'afterUpdate',value:function(){}},{key:'start',value:function(){var e=this;this.created||this.create(),this._loop.start(function(t){l.Time._setFrame(t),e.update(),e.scene._runUpdate(),e.renderer.render(e.scene),e.scene._runAfterUpdate(),e.afterUpdate()})}},{key:'stop',value:function(){this._loop.stop()}},{key:'width',get:function(){return this.canvas.width},set:function(e){this.canvas.width=e}},{key:'height',get:function(){return this.canvas.height},set:function(e){this.canvas.height=e}},{key:'created',get:function(){return this._created}},{key:'started',get:function(){return this._loop.started}},{key:'running',get:function(){return this._loop.running}},{key:'stopped',get:function(){return this._loop.stopped}}]),e}()},function(e,t){'use strict';function n(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')}Object.defineProperty(t,'__esModule',{value:!0});var o=function(){function e(e,t){for(var n,o=0;o<t.length;o++)n=t[o],n.enumerable=n.enumerable||!1,n.configurable=!0,'value'in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=t.Renderer=function(){function e(t){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'#000000';n(this,e),this.context=t,this.backgroundColour=o}return o(e,[{key:'render',value:function(e){this.context.fillStyle=this.backgroundColour,this.context.fillRect(0,0,this.context.canvas.width,this.context.canvas.height);var t,n=!0,o=!1;try{for(var a,r,i=e.gameObjects[Symbol.iterator]();!(n=(a=i.next()).done);n=!0)r=a.value,r._render(this.context)}catch(e){o=!0,t=e}finally{try{!n&&i.return&&i.return()}finally{if(o)throw t}}}}]),e}()},function(e,t,n){'use strict';function o(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')}Object.defineProperty(t,'__esModule',{value:!0}),t.Screen=void 0;var a=function(){function e(e,t){for(var n,o=0;o<t.length;o++)n=t[o],n.enumerable=n.enumerable||!1,n.configurable=!0,'value'in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(0),i=t.Screen=function(){function e(){o(this,e)}return a(e,null,[{key:'_init',value:function(e){this._canvas=e}},{key:'width',get:function(){return this._canvas.width}},{key:'height',get:function(){return this._canvas.height}},{key:'center',get:function(){return new r.Point(this.width/2,this.height/2)}},{key:'centerX',get:function(){return this.width/2}},{key:'centerY',get:function(){return this.height/2}}]),e}();i._canvas={width:1280,height:720}},function(e,t){'use strict';function n(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')}Object.defineProperty(t,'__esModule',{value:!0});t.Point=function e(){var t=0<arguments.length&&arguments[0]!==void 0?arguments[0]:0,o=1<arguments.length&&arguments[1]!==void 0?arguments[1]:0;n(this,e),this.x=t,this.y=o}},function(e,t){'use strict';function n(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')}var o=Math.PI;Object.defineProperty(t,'__esModule',{value:!0});var a=function(){function e(e,t){for(var n,o=0;o<t.length;o++)n=t[o],n.enumerable=n.enumerable||!1,n.configurable=!0,'value'in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=t.Rotation=function(){function e(){n(this,e)}return a(e,null,[{key:'radiansToDegrees',value:function(e){return 180*e/o}},{key:'degreesToRadians',value:function(e){return e*o/180}}]),e}()},function(e,t){'use strict';function n(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')}Object.defineProperty(t,'__esModule',{value:!0});var o=function(){function e(e,t){for(var n,o=0;o<t.length;o++)n=t[o],n.enumerable=n.enumerable||!1,n.configurable=!0,'value'in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=t.VirtualBuffer=function(){function e(){n(this,e)}return o(e,null,[{key:'requestBuffer',value:function(e,t){return this._width=e,this._height=t,this._buffer}},{key:'getImageData',value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0,o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:e.width,a=4<arguments.length&&void 0!==arguments[4]?arguments[4]:e.height,r=this.requestBuffer(o,a);return r.drawImage(e,t,n),r.getImageData(t,n,o,a)}},{key:'clearBuffer',value:function(e,t){this._width=e,this._height=t,this._clearBuffer()}},{key:'_clearBuffer',value:function(){(this._width||this._height)&&(this._context.clearRect(0,0,this._width,this._height),this._width=0,this._height=0,this._context.restore())}},{key:'_buffer',get:function(){return this._clearBuffer(),this._context.save(),this._context}}]),e}();a._context=document.createElement('canvas').getContext('2d'),a._width=0,a._height=0},function(e,t,n){'use strict';function o(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')}Object.defineProperty(t,'__esModule',{value:!0}),t.Loop=void 0;var a=function(){function e(e,t){for(var n,o=0;o<t.length;o++)n=t[o],n.enumerable=n.enumerable||!1,n.configurable=!0,'value'in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(5),i=t.Loop=function(){function e(){o(this,e),this._started=!1,this._running=!1,this._stopped=!1,this._timeStarted=0,this._currentTime=0,this._timeStopped=0,this._animationFrame=0}return a(e,[{key:'start',value:function(e){var t=this;this.started||(this._started=!0,this._running=!0,this._stopped=!1,this._animationFrame=requestAnimationFrame(function(n){t._timeStarted=r.Time.time,t._loop(e,n)}))}},{key:'stop',value:function(){this.running&&(this._running=!1,this._stopped=!0,cancelAnimationFrame(this._animationFrame),this._timeStopped=r.Time.time)}},{key:'_loop',value:function(e,t){var n=this;this._animationFrame=requestAnimationFrame(function(t){n._loop(e,t)}),e(t)}},{key:'started',get:function(){return this._started}},{key:'running',get:function(){return this._running}},{key:'stopped',get:function(){return this._stopped}},{key:'timeStarted',get:function(){return this._timeStarted}},{key:'currentTime',get:function(){return r.Time.time-this.timeStarted}},{key:'timeStopped',get:function(){return this._timeStopped}}]),e}()},function(e,t,n){'use strict';function o(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')}Object.defineProperty(t,'__esModule',{value:!0}),t.Keyboard=void 0;var a=function(){function e(e,t){for(var n,o=0;o<t.length;o++)n=t[o],n.enumerable=n.enumerable||!1,n.configurable=!0,'value'in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(7),i=t.Keyboard=function(){function e(){o(this,e)}return a(e,null,[{key:'_init',value:function(){var t=this;for(var e in r.Keys)this._keys[e]=!1;window.addEventListener('keydown',function(n){t._keys[n.code]=!0;var e,o=!0,a=!1;try{for(var r,i,l=t._onKeyDown[Symbol.iterator]();!(o=(r=l.next()).done);o=!0)i=r.value,i(n)}catch(t){a=!0,e=t}finally{try{!o&&l.return&&l.return()}finally{if(a)throw e}}}),window.addEventListener('keyup',function(n){t._keys[n.code]=!1;var e,o=!0,a=!1;try{for(var r,i,l=t._onKeyUp[Symbol.iterator]();!(o=(r=l.next()).done);o=!0)i=r.value,i(n)}catch(t){a=!0,e=t}finally{try{!o&&l.return&&l.return()}finally{if(a)throw e}}})}},{key:'getKey',value:function(e){return this._keys[e]}},{key:'isDown',value:function(e){return void 0!==this._keys[e]&&this._keys[e]}},{key:'isUp',value:function(e){return void 0===this._keys[e]||!this._keys[e]}},{key:'on',value:function(e,t){switch(e.toLowerCase()){case'keydown':this._onKeyDown.push(t);break;case'keyup':this._onKeyUp.push(t);break;default:}}}]),e}();i._keys={},i._onKeyDown=[],i._onKeyUp=[]},function(e,t,n){'use strict';function o(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')}Object.defineProperty(t,'__esModule',{value:!0}),t.Mouse=void 0;var a=function(){function e(e,t){for(var n,o=0;o<t.length;o++)n=t[o],n.enumerable=n.enumerable||!1,n.configurable=!0,'value'in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(0),i=t.Mouse=function(){function e(){o(this,e)}return a(e,null,[{key:'_init',value:function(e){var t=this;window.addEventListener('mousemove',function(n){t._cursor.x=n.clientX,t._cursor.y=n.clientY}),e.addEventListener('mousedown',function(n){switch(n.preventDefault(),n.button){case 0:t._leftButtonDown=!0,t._triggerEvent(t._onLeftButtonDown,n);break;case 1:t._middleButtonDown=!0,t._triggerEvent(t._onMiddleButtonDown,n);break;case 2:t._rightButtonDown=!0,t._triggerEvent(t._onRightButtonDown,n);break;default:}}),e.addEventListener('mouseup',function(n){switch(n.preventDefault(),n.button){case 0:t._leftButtonDown=!1,t._triggerEvent(t._onLeftButtonUp,n);break;case 1:t._middleButtonDown=!1,t._triggerEvent(t._onMiddleButtonUp,n);break;case 2:t._rightButtonDown=!1,t._triggerEvent(t._onRightButtonUp,n);break;default:}}),e.addEventListener('contextmenu',function(t){t.preventDefault()}),e.addEventListener('wheel',function(n){0<n.deltaY?t._triggerEvent(t._onScrollDown,n):0>n.deltaY&&t._triggerEvent(t._onScrollUp,n),0<n.deltaX?t._triggerEvent(t._onScrollRight,n):0>n.deltaY&&t._triggerEvent(t._onScrollLeft,n)})}},{key:'on',value:function(e,t){switch(e.toLocaleLowerCase()){case'leftbuttondown':this._onLeftButtonDown.push(t);break;case'leftbuttonup':this._onLeftButtonUp.push(t);break;case'middlebuttondown':this._onMiddleButtonDown.push(t);break;case'middlebuttonup':this._onMiddleButtonUp.push(t);break;case'rightbuttondown':this._onRightButtonDown.push(t);break;case'rightbuttonup':this._onRightButtonUp.push(t);break;case'scrolldown':this._onScrollDown.push(t);break;case'scrollup':this._onScrollUp.push(t);break;case'scrollleft':this._onScrollLeft.push(t);break;case'scrollright':this._onScrollRight.push(t);break;default:}}},{key:'_triggerEvent',value:function(e,t){var n,o=!0,a=!1;try{for(var r,i,l=e[Symbol.iterator]();!(o=(r=l.next()).done);o=!0)i=r.value,i(t)}catch(e){a=!0,n=e}finally{try{!o&&l.return&&l.return()}finally{if(a)throw n}}}},{key:'cursor',get:function(){return new r.Point(this._cursor.x,this._cursor.y)}},{key:'cursorX',get:function(){return this._cursor.x}},{key:'cursorY',get:function(){return this._cursor.y}},{key:'leftButtonDown',get:function(){return this._leftButtonDown}},{key:'leftButtonUp',get:function(){return!this._leftButtonDown}},{key:'middleButtonDown',get:function(){return this._middleButtonDown}},{key:'middleButtonUp',get:function(){return!this._middleButtonDown}},{key:'rightButtonDown',get:function(){return this._rightButtonDown}},{key:'rightButtonUp',get:function(){return!this._rightButtonDown}}]),e}();i._cursor=new r.Point,i._leftButtonDown=!1,i._middleButtonDown=!1,i._rightButtonDown=!1,i._onLeftButtonDown=[],i._onLeftButtonUp=[],i._onMiddleButtonDown=[],i._onMiddleButtonUp=[],i._onRightButtonDown=[],i._onRightButtonUp=[],i._onScrollDown=[],i._onScrollUp=[],i._onScrollLeft=[],i._onScrollRight=[]},function(e,t,n){'use strict';function o(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')}Object.defineProperty(t,'__esModule',{value:!0}),t.GameObject=void 0;var a=function(){function e(e,t){for(var n,o=0;o<t.length;o++)n=t[o],n.enumerable=n.enumerable||!1,n.configurable=!0,'value'in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(0),i=n(2),l=t.GameObject=function(){function e(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:i.Screen.width,l=3<arguments.length&&void 0!==arguments[3]?arguments[3]:i.Screen.height,u=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,d=5<arguments.length&&void 0!==arguments[5]?arguments[5]:1,s=6<arguments.length&&void 0!==arguments[6]?arguments[6]:!0;o(this,e),this.position=new r.Point(t,n),this.width=a,this.height=l,this.rotation=u,this.scale=d,this.visible=s,this.graphics=[]}return a(e,[{key:'setCenter',value:function(e){this.x=e.x-this.width/2,this.y=e.y-this.height/2}},{key:'addGraphics',value:function(e){this.graphics.push(e);for(var t=arguments.length,n=Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var a,r=!0,i=!1;try{for(var l,u,d=n[Symbol.iterator]();!(r=(l=d.next()).done);r=!0)u=l.value,this.addGraphics(u)}catch(e){i=!0,a=e}finally{try{!r&&d.return&&d.return()}finally{if(i)throw a}}}},{key:'update',value:function(){}},{key:'afterUpdate',value:function(){}},{key:'draw',value:function(){}},{key:'drawAfter',value:function(){}},{key:'_render',value:function(e){e.save(),e.translate(this.x,this.y),e.scale(this.scale,this.scale),this.rotation&&(e.translate(this.width/2,this.height/2),e.rotate(r.Rotation.degreesToRadians(this.rotation)),e.translate(-this.width/2,-this.height/2)),this.draw(e);var t,n=!0,o=!1;try{for(var a,i,l=this.graphics[Symbol.iterator]();!(n=(a=l.next()).done);n=!0)i=a.value,i._render(e)}catch(e){o=!0,t=e}finally{try{!n&&l.return&&l.return()}finally{if(o)throw t}}this.drawAfter(e),e.restore()}},{key:'x',get:function(){return this.position.x},set:function(e){this.position.x=e}},{key:'y',get:function(){return this.position.y},set:function(e){this.position.y=e}},{key:'center',get:function(){return new r.Point(this.x+this.width/2,this.y+this.height/2)}},{key:'centerX',get:function(){return this.x+this.width/2},set:function(e){this.x=e-this.width/2}},{key:'centerY',get:function(){return this.y+this.height/2},set:function(e){this.y=e-this.height/2}}]),e}()},function(e,t,n){'use strict';Object.defineProperty(t,'__esModule',{value:!0});var o=n(21);Object.keys(o).forEach(function(e){'default'===e||'__esModule'===e||Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})});var a=n(1);Object.keys(a).forEach(function(e){'default'===e||'__esModule'===e||Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})});var r=n(22);Object.keys(r).forEach(function(e){'default'===e||'__esModule'===e||Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})});var i=n(23);Object.keys(i).forEach(function(e){'default'===e||'__esModule'===e||Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})})},function(e,t,n){'use strict';function o(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')}function a(e,t){if(!e)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return t&&('object'==typeof t||'function'==typeof t)?t:e}function r(e,t){if('function'!=typeof t&&null!==t)throw new TypeError('Super expression must either be null or a function, not '+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,'__esModule',{value:!0}),t.Circle=void 0;var i=function(){function e(e,t){for(var n,o=0;o<t.length;o++)n=t[o],n.enumerable=n.enumerable||!1,n.configurable=!0,'value'in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(0),u=n(1),d=t.Circle=function(e){function t(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:100,i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:'#ff00ff',u=4<arguments.length&&void 0!==arguments[4]?arguments[4]:'#ffffff',d=5<arguments.length&&void 0!==arguments[5]?arguments[5]:2;o(this,t);var s=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return s.position=new l.Point(e,n),s.size=r,s.fillColour=i,s.strokeColour=u,s.strokeWidth=d,s.rotation=0,s.fill=!0,s}return r(t,e),i(t,[{key:'draw',value:function(e){e.save(),this.rotation&&(e.translate(this.x,this.y),e.rotate(l.Rotation.degreesToRadians(this.rotation)),e.translate(-this.x,-this.y)),e.beginPath(),e.arc(this.x,this.y,this.size/2,0,2*Math.PI),this.fill&&(e.fillStyle=this.fillColour,e.fill()),this.strokeWidth&&(e.lineWidth=this.strokeWidth,e.strokeStyle=this.strokeColour,e.stroke()),e.restore()}},{key:'x',get:function(){return this.position.x},set:function(e){this.position.x=e}},{key:'y',get:function(){return this.position.y},set:function(e){this.position.y=e}}]),t}(u.Graphics)},function(e,t,n){'use strict';function o(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')}function a(e,t){if(!e)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return t&&('object'==typeof t||'function'==typeof t)?t:e}function r(e,t){if('function'!=typeof t&&null!==t)throw new TypeError('Super expression must either be null or a function, not '+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,'__esModule',{value:!0}),t.Image=void 0;var i=function(){function e(e,t){for(var n,o=0;o<t.length;o++)n=t[o],n.enumerable=n.enumerable||!1,n.configurable=!0,'value'in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(0),u=n(1),d=t.Image=function(e){function t(e){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0,i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:0,u=4<arguments.length&&void 0!==arguments[4]?arguments[4]:1,d=5<arguments.length&&void 0!==arguments[5]?arguments[5]:!0;o(this,t);var s=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,d));return s.image=e,s.position=new l.Point(n,r),s.rotation=0,s.opacity=u,s.width=s.image.width,s.height=s.image.height,s.image.onload=function(){s.width=0===s.width?s.image.width:s.width,s.height=0===s.height?s.image.height:s.height},s}return r(t,e),i(t,[{key:'setCenter',value:function(e){this.position.x=e.x-this.width/2,this.position.y=e.y-this.height/2}},{key:'draw',value:function(e){this.opacity&&(e.save(),e.globalAlpha=this.opacity,this.rotation&&(e.translate(this.centerX,this.centerY),e.rotate(l.Rotation.degreesToRadians(this.rotation)),e.translate(-this.centerX,-this.centerY)),e.drawImage(this.image,this.x,this.y,this.width,this.height),e.restore())}},{key:'x',get:function(){return this.position.x},set:function(e){this.position.x=e}},{key:'y',get:function(){return this.position.y},set:function(e){this.position.y=e}},{key:'center',get:function(){return new l.Point(this.x+this.width/2,this.y+this.height/2)}},{key:'centerX',get:function(){return this.x+this.width/2},set:function(e){this.x=e-this.width/2}},{key:'centerY',get:function(){return this.y+this.height/2},set:function(e){this.y=e-this.height/2}}]),t}(u.Graphics)},function(e,t,n){'use strict';function o(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')}function a(e,t){if(!e)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return t&&('object'==typeof t||'function'==typeof t)?t:e}function r(e,t){if('function'!=typeof t&&null!==t)throw new TypeError('Super expression must either be null or a function, not '+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,'__esModule',{value:!0}),t.Rectangle=void 0;var i=function(){function e(e,t){for(var n,o=0;o<t.length;o++)n=t[o],n.enumerable=n.enumerable||!1,n.configurable=!0,'value'in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(0),u=n(1),d=t.Rectangle=function(e){function t(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:400,i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:250,u=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,d=5<arguments.length&&void 0!==arguments[5]?arguments[5]:'#ff00ff',s=6<arguments.length&&void 0!==arguments[6]?arguments[6]:'#ffffff',y=7<arguments.length&&void 0!==arguments[7]?arguments[7]:2;o(this,t);var g=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return g.position=new l.Point(e,n),g.width=r,g.height=i,g.radius=u,g.fillColour=d,g.strokeColour=s,g.strokeWidth=y,g.rotation=0,g.fill=!0,g}return r(t,e),i(t,[{key:'setCenter',value:function(e){this.x=e.x-this.width/2,this.y=e.y-this.height/2}},{key:'draw',value:function(e){e.save(),this.rotation&&(e.translate(this.centerX,this.centerY),e.rotate(l.Rotation.degreesToRadians(this.rotation)),e.translate(-this.centerX,-this.centerY)),this.radius?this._drawRounded(e):this._drawClassic(e),this.fill&&(e.fillStyle=this.fillColour,e.fill()),this.strokeWidth&&(e.lineWidth=this.strokeWidth,e.strokeStyle=this.strokeColour,e.stroke()),e.restore()}},{key:'_drawClassic',value:function(e){e.beginPath(),e.moveTo(this.x,this.y),e.lineTo(this.x+this.width,this.y),e.lineTo(this.x+this.width,this.y+this.height),e.lineTo(this.x,this.y+this.height),e.lineTo(this.x,this.y)}},{key:'_drawRounded',value:function(e){e.beginPath(),e.moveTo(this.x+this.radius,this.y),e.lineTo(this.x+this.width-this.radius,this.y),e.arcTo(this.x+this.width,this.y,this.x+this.width,this.y+this.radius,this.radius),e.lineTo(this.x+this.width,this.y+this.height-this.radius),e.arcTo(this.x+this.width,this.y+this.height,this.x+this.width-this.radius,this.y+this.height,this.radius),e.lineTo(this.x+this.radius,this.y+this.height),e.arcTo(this.x,this.y+this.height,this.x,this.y+this.height-this.radius,this.radius),e.lineTo(this.x,this.y+this.radius),e.arcTo(this.x,this.y,this.x+this.radius,this.y,this.radius)}},{key:'x',get:function(){return this.position.x},set:function(e){this.position.x=e}},{key:'y',get:function(){return this.position.y},set:function(e){this.position.y=e}},{key:'center',get:function(){return new l.Point(this.x+this.width/2,this.y+this.height/2)}},{key:'centerX',get:function(){return this.x+this.width/2},set:function(e){this.x=e-this.width/2}},{key:'centerY',get:function(){return this.y+this.height/2},set:function(e){this.y=e-this.height/2}}]),t}(u.Graphics)}]);