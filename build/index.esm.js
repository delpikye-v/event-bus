var t={__prBusData:new Map,$once:function(t,a){if(t){var e={callback:a,once:!0},s=this.__prBusData.get(t);s?(s.push(e),this.__prBusData.set(t,s)):this.__prBusData.set(t,[e])}},$on:function(t,a){if(t){var e=this.__prBusData.get(t);e?(e.push({callback:a}),this.__prBusData.set(t,e)):this.__prBusData.set(t,[{callback:a}])}},$off:function(t,a){if(a){var e=function(t,a,e){if(e||2===arguments.length)for(var s,r=0,n=a.length;r<n;r++)!s&&r in a||(s||(s=Array.prototype.slice.call(a,0,r)),s[r]=a[r]);return t.concat(s||Array.prototype.slice.call(a))}([],this.__prBusData.get(t)||[],!0),s=e.findIndex((function(t){return t.callback===a}));-1!==s&&e.splice(s,1),0!==e.length?this.__prBusData.set(t,e):this.__prBusData.delete(t)}},$offAll:function(t){this.__prBusData.delete(t)},$emit:function(t){for(var a=[],e=1;e<arguments.length;e++)a[e-1]=arguments[e];var s=this.__prBusData.get(t)||[];s.length>0&&(s.forEach((function(t){t.once?t.emitted||(t.callback(a),t.emitted=!0):t.callback.apply(t,a)})),this.__prBusData.set(t,s))},$reset:function(){this.__prBusData.clear()},eventNames:function(){return Array.from(this.__prBusData.keys())}};export{t as EventBus,t as default};
