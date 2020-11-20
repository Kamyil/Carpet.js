/*!
 * Carpet.js v3.1.3 (http://mateuszgachowski.github.io/Carpet.js/)
 * Copyright 2014-2020 Mateusz Gachowski <mateusz.gachowski@gmail.com>
 * Licensed under MIT
 */

Carpet.registerComponent("advice",function(){"use strict";return{around:function(e,i){return function(){var n=0,t=arguments.length,r=new Array(t+1);for(r[0]=e.bind(this);n<t;n++)r[n+1]=arguments[n];return i.apply(this,r)}},before:function(n,t){var r="function"==typeof t?t:t.obj[t.fnName];return function(){return r.apply(this,arguments),n.apply(this,arguments)}},after:function(t,n){var r="function"==typeof n?n:n.obj[n.fnName];return function(){var n=(t.unbound||t).apply(this,arguments);return r.apply(this,arguments),n}},withAdvice:function(){["before","after","around"].forEach(function(r){this[r]=function(n,t){this[n]=Carpet.getComponent("advice")[r](this[n],t)}},this)}}});