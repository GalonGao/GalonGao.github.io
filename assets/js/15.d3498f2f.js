(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{345:function(n,s,e){"use strict";e.r(s);var t=e(3),a=Object(t.a)({},function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h2",{attrs:{id:"通用简易版"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通用简易版","aria-hidden":"true"}},[n._v("#")]),n._v(" 通用简易版")]),n._v(" "),e("ul",[e("li",[n._v("创建一个对象(缓存列表)")]),n._v(" "),e("li",[n._v("on方法用来把回调函数fn都加到缓存列表中")]),n._v(" "),e("li",[n._v("emit方法取到arguments里第一个当做key，根据key值去执行对应缓存列表中的函数")]),n._v(" "),e("li",[n._v("remove方法可以根据key值取消订阅")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("let event = {\n    list: {},\n    on(key, fn) {\n        if (!this.list[key]) {\n            this.list[key] = [];\n        }\n        this.list[key].push(fn);\n    },\n    emit() {\n        let key = [].shift.call(arguments),\n            fns = this.list[key];\n        if(!fns || fns.length === 0 ) {\n            return false;\n        }\n        fns.forEach(fn => {\n            fn.apply(this, arguments);\n        })\n    },\n    remove(key, fn) {\n        let fns = this.list[key];\n        if (!fns) return false;\n        if(!fn) {\n            fns && (fns.length = 0);\n        } else {\n            fns.foeEach((cb, i) => {\n                if (cb === fn) {\n                    fns.splice(i, 1);\n                }\n            })\n        }\n    }\n}\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br"),e("span",{staticClass:"line-number"},[n._v("31")]),e("br"),e("span",{staticClass:"line-number"},[n._v("32")]),e("br")])]),e("h2",{attrs:{id:"实现一个node中的eventemitter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实现一个node中的eventemitter","aria-hidden":"true"}},[n._v("#")]),n._v(" 实现一个node中的EventEmitter")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function EventEmitter() {\n    // 用Object.create(null)代替{}，好处无杂质，不继承原型链的东东\n    this._events = Object.create(null);\n}\n// 默认最多绑定次数\nEventEmitter.defaultMaxListeners = 10;\n// 同on方法\nEventEmitter.prototype.addListener = EventEmitter.prototype.on;\n// 返回监听的事件名\nEventsEmitter.prototype.eventNames = function() {\n    return Object.keys(this._events)\n}\n// 设置最大监听数\nEventsEmitter.prototype.setMaxListeners = function(n) {\n    this._count = n;\n}\n// 返回监听数\nEventsEmitter.prototype.getMaxListeners = function() {\n    return this._count ? this._count : this.defaultMaxListeners \n}\n// 监听\nEventsEmitter.prototype.on = function(type, cb, flag) {\n    if(!this._events) {\n        this._events = Object.create(null);\n    }\n    // 不是newListener，执行以下\n    if(type !== 'newListener') {\n        this._events['newListener'] && this._events['newListener'].forEach(listener => listener(type));\n    }\n    if(this._events[type]) {\n        // 根据flag决定是向前添加还是向后添加\n        if (flag) {\n            this._events[type].unshift(cb);\n        } else {\n            this._events[type].push(cb);\n        }\n    } else {\n        this._events[type] = [cb];\n    }\n    // 监听的事件不能超过设置的最大监听数\n    if(this._events[type].length === this.getMaxListeners()) {\n        console.warn('警告-警告');\n    }\n}\n// 向前添加\nEventEmitter.prototype.prependListener = function (type, cb) {\n    this.on(type, cb, true);\n};\nEventEmitter.prototype.prependOnceListener = function (type, cb) {\n    this.once(type, cb, true);\n};\n// 监听一次\nEventEmitter.prototype.once = function(type, cb, flag) {\n    // 先绑定，调用后删除\n    function wrap() {\n        cb(...arguments);\n        this.removeListner(type, wrap);\n    }\n    wrap.listen = cb;\n    this.on(type, wrap, flag);\n}\n// 删除监听类型\nEventEmitter.prototype.removeListener = function (type, cb) {\n    if (this._events[type]) {\n        this._events[type] = this._events[type].filter(listener => {\n            return cb !== listener && cb !== listener.listen;\n        });\n    }\n};\nEventEmitter.prototype.removeAllListener = function () {\n    this._events = Object.create(null);\n};\n// 返回所有的监听类型\nEventEmitter.prototype.listeners = function (type) {\n    return this._events[type];\n};\n// 发布\nEventEmitter.prototype.emit = function (type, ...args) {\n    if (this._events[type]) {\n        this._events[type].forEach(listener => {\n            listener.call(this, ...args);\n        });\n    }\n};\n\nmodule.exports = EventEmitter;\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br"),e("span",{staticClass:"line-number"},[n._v("31")]),e("br"),e("span",{staticClass:"line-number"},[n._v("32")]),e("br"),e("span",{staticClass:"line-number"},[n._v("33")]),e("br"),e("span",{staticClass:"line-number"},[n._v("34")]),e("br"),e("span",{staticClass:"line-number"},[n._v("35")]),e("br"),e("span",{staticClass:"line-number"},[n._v("36")]),e("br"),e("span",{staticClass:"line-number"},[n._v("37")]),e("br"),e("span",{staticClass:"line-number"},[n._v("38")]),e("br"),e("span",{staticClass:"line-number"},[n._v("39")]),e("br"),e("span",{staticClass:"line-number"},[n._v("40")]),e("br"),e("span",{staticClass:"line-number"},[n._v("41")]),e("br"),e("span",{staticClass:"line-number"},[n._v("42")]),e("br"),e("span",{staticClass:"line-number"},[n._v("43")]),e("br"),e("span",{staticClass:"line-number"},[n._v("44")]),e("br"),e("span",{staticClass:"line-number"},[n._v("45")]),e("br"),e("span",{staticClass:"line-number"},[n._v("46")]),e("br"),e("span",{staticClass:"line-number"},[n._v("47")]),e("br"),e("span",{staticClass:"line-number"},[n._v("48")]),e("br"),e("span",{staticClass:"line-number"},[n._v("49")]),e("br"),e("span",{staticClass:"line-number"},[n._v("50")]),e("br"),e("span",{staticClass:"line-number"},[n._v("51")]),e("br"),e("span",{staticClass:"line-number"},[n._v("52")]),e("br"),e("span",{staticClass:"line-number"},[n._v("53")]),e("br"),e("span",{staticClass:"line-number"},[n._v("54")]),e("br"),e("span",{staticClass:"line-number"},[n._v("55")]),e("br"),e("span",{staticClass:"line-number"},[n._v("56")]),e("br"),e("span",{staticClass:"line-number"},[n._v("57")]),e("br"),e("span",{staticClass:"line-number"},[n._v("58")]),e("br"),e("span",{staticClass:"line-number"},[n._v("59")]),e("br"),e("span",{staticClass:"line-number"},[n._v("60")]),e("br"),e("span",{staticClass:"line-number"},[n._v("61")]),e("br"),e("span",{staticClass:"line-number"},[n._v("62")]),e("br"),e("span",{staticClass:"line-number"},[n._v("63")]),e("br"),e("span",{staticClass:"line-number"},[n._v("64")]),e("br"),e("span",{staticClass:"line-number"},[n._v("65")]),e("br"),e("span",{staticClass:"line-number"},[n._v("66")]),e("br"),e("span",{staticClass:"line-number"},[n._v("67")]),e("br"),e("span",{staticClass:"line-number"},[n._v("68")]),e("br"),e("span",{staticClass:"line-number"},[n._v("69")]),e("br"),e("span",{staticClass:"line-number"},[n._v("70")]),e("br"),e("span",{staticClass:"line-number"},[n._v("71")]),e("br"),e("span",{staticClass:"line-number"},[n._v("72")]),e("br"),e("span",{staticClass:"line-number"},[n._v("73")]),e("br"),e("span",{staticClass:"line-number"},[n._v("74")]),e("br"),e("span",{staticClass:"line-number"},[n._v("75")]),e("br"),e("span",{staticClass:"line-number"},[n._v("76")]),e("br"),e("span",{staticClass:"line-number"},[n._v("77")]),e("br"),e("span",{staticClass:"line-number"},[n._v("78")]),e("br"),e("span",{staticClass:"line-number"},[n._v("79")]),e("br"),e("span",{staticClass:"line-number"},[n._v("80")]),e("br"),e("span",{staticClass:"line-number"},[n._v("81")]),e("br"),e("span",{staticClass:"line-number"},[n._v("82")]),e("br"),e("span",{staticClass:"line-number"},[n._v("83")]),e("br"),e("span",{staticClass:"line-number"},[n._v("84")]),e("br"),e("span",{staticClass:"line-number"},[n._v("85")]),e("br"),e("span",{staticClass:"line-number"},[n._v("86")]),e("br")])])])},[],!1,null,null,null);s.default=a.exports}}]);