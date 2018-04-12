!function(e, t, n) {
    function o(e, t) {
        return typeof e === t
    }
    function r() {
        var e, t, n, r, i, s, a;
        for (var l in y)
            if (y.hasOwnProperty(l)) {
                if (e = [],
                t = y[l],
                t.name && (e.push(t.name.toLowerCase()),
                t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++)
                        e.push(t.options.aliases[n].toLowerCase());
                for (r = o(t.fn, "function") ? t.fn() : t.fn,
                i = 0; i < e.length; i++)
                    s = e[i],
                    a = s.split("."),
                    1 === a.length ? C[a[0]] = r : (!C[a[0]] || C[a[0]]instanceof Boolean || (C[a[0]] = new Boolean(C[a[0]])),
                    C[a[0]][a[1]] = r),
                    b.push((r ? "" : "no-") + a.join("-"))
            }
    }
    function i(e) {
        var t = E.className
          , n = C._config.classPrefix || "";
        if (x && (t = t.baseVal),
        C._config.enableJSClass) {
            var o = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(o, "$1" + n + "js$2")
        }
        C._config.enableClasses && (t += " " + n + e.join(" " + n),
        x ? E.className.baseVal = t : E.className = t)
    }
    function s(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }
    function a() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : x ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }
    function l() {
        var e = t.body;
        return e || (e = a(x ? "svg" : "body"),
        e.fake = !0),
        e
    }
    function d(e, n, o, r) {
        var i, s, d, u, c = "modernizr", f = a("div"), m = l();
        if (parseInt(o, 10))
            for (; o--; )
                d = a("div"),
                d.id = r ? r[o] : c + (o + 1),
                f.appendChild(d);
        return i = a("style"),
        i.type = "text/css",
        i.id = "s" + c,
        (m.fake ? m : f).appendChild(i),
        m.appendChild(f),
        i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(t.createTextNode(e)),
        f.id = c,
        m.fake && (m.style.background = "",
        m.style.overflow = "hidden",
        u = E.style.overflow,
        E.style.overflow = "hidden",
        E.appendChild(m)),
        s = n(f, e),
        m.fake ? (m.parentNode.removeChild(m),
        E.style.overflow = u,
        E.offsetHeight) : f.parentNode.removeChild(f),
        !!s
    }
    function u(e, t) {
        return !!~("" + e).indexOf(t)
    }
    function c(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
    function f(e, t, n) {
        var r;
        for (var i in e)
            if (e[i]in t)
                return n === !1 ? e[i] : (r = t[e[i]],
                o(r, "function") ? c(r, n || t) : r);
        return !1
    }
    function m(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }
    function p(t, o) {
        var r = t.length;
        if ("CSS"in e && "supports"in e.CSS) {
            for (; r--; )
                if (e.CSS.supports(m(t[r]), o))
                    return !0;
            return !1
        }
        if ("CSSSupportsRule"in e) {
            for (var i = []; r--; )
                i.push("(" + m(t[r]) + ":" + o + ")");
            return i = i.join(" or "),
            d("@supports (" + i + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == getComputedStyle(e, null).position
            })
        }
        return n
    }
    function h(e, t, r, i) {
        function l() {
            c && (delete j.style,
            delete j.modElem)
        }
        if (i = o(i, "undefined") ? !1 : i,
        !o(r, "undefined")) {
            var d = p(e, r);
            if (!o(d, "undefined"))
                return d
        }
        for (var c, f, m, h, g, v = ["modernizr", "tspan"]; !j.style; )
            c = !0,
            j.modElem = a(v.shift()),
            j.style = j.modElem.style;
        for (m = e.length,
        f = 0; m > f; f++)
            if (h = e[f],
            g = j.style[h],
            u(h, "-") && (h = s(h)),
            j.style[h] !== n) {
                if (i || o(r, "undefined"))
                    return l(),
                    "pfx" == t ? h : !0;
                try {
                    j.style[h] = r
                } catch (b) {}
                if (j.style[h] != g)
                    return l(),
                    "pfx" == t ? h : !0
            }
        return l(),
        !1
    }
    function g(e, t, n, r, i) {
        var s = e.charAt(0).toUpperCase() + e.slice(1)
          , a = (e + " " + O.join(s + " ") + s).split(" ");
        return o(t, "string") || o(t, "undefined") ? h(a, t, r, i) : (a = (e + " " + P.join(s + " ") + s).split(" "),
        f(a, t, n))
    }
    function v(e, t, o) {
        return g(e, n, n, t, o)
    }
    var b = []
      , y = []
      , w = {
        _version: "3.3.1",
        _config: {
            classPrefix: "",
            enableClasses: !0,
            enableJSClass: !0,
            usePrefixes: !0
        },
        _q: [],
        on: function(e, t) {
            var n = this;
            setTimeout(function() {
                t(n[e])
            }, 0)
        },
        addTest: function(e, t, n) {
            y.push({
                name: e,
                fn: t,
                options: n
            })
        },
        addAsyncTest: function(e) {
            y.push({
                name: null,
                fn: e
            })
        }
    }
      , C = function() {};
    C.prototype = w,
    C = new C;
    var S = w._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    w._prefixes = S;
    var E = t.documentElement
      , x = "svg" === E.nodeName.toLowerCase();
    x || !function(e, t) {
        function n(e, t) {
            var n = e.createElement("p")
              , o = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>",
            o.insertBefore(n.lastChild, o.firstChild)
        }
        function o() {
            var e = y.elements;
            return "string" == typeof e ? e.split(" ") : e
        }
        function r(e, t) {
            var n = y.elements;
            "string" != typeof n && (n = n.join(" ")),
            "string" != typeof e && (e = e.join(" ")),
            y.elements = n + " " + e,
            d(t)
        }
        function i(e) {
            var t = b[e[g]];
            return t || (t = {},
            v++,
            e[g] = v,
            b[v] = t),
            t
        }
        function s(e, n, o) {
            if (n || (n = t),
            c)
                return n.createElement(e);
            o || (o = i(n));
            var r;
            return r = o.cache[e] ? o.cache[e].cloneNode() : h.test(e) ? (o.cache[e] = o.createElem(e)).cloneNode() : o.createElem(e),
            !r.canHaveChildren || p.test(e) || r.tagUrn ? r : o.frag.appendChild(r)
        }
        function a(e, n) {
            if (e || (e = t),
            c)
                return e.createDocumentFragment();
            n = n || i(e);
            for (var r = n.frag.cloneNode(), s = 0, a = o(), l = a.length; l > s; s++)
                r.createElement(a[s]);
            return r
        }
        function l(e, t) {
            t.cache || (t.cache = {},
            t.createElem = e.createElement,
            t.createFrag = e.createDocumentFragment,
            t.frag = t.createFrag()),
            e.createElement = function(n) {
                return y.shivMethods ? s(n, e, t) : t.createElem(n)
            }
            ,
            e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + o().join().replace(/[\w\-:]+/g, function(e) {
                return t.createElem(e),
                t.frag.createElement(e),
                'c("' + e + '")'
            }) + ");return n}")(y, t.frag)
        }
        function d(e) {
            e || (e = t);
            var o = i(e);
            return !y.shivCSS || u || o.hasCSS || (o.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),
            c || l(e, o),
            e
        }
        var u, c, f = "3.7.3", m = e.html5 || {}, p = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, h = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, g = "_html5shiv", v = 0, b = {};
        !function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>",
                u = "hidden"in e,
                c = 1 == e.childNodes.length || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                }()
            } catch (n) {
                u = !0,
                c = !0
            }
        }();
        var y = {
            elements: m.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
            version: f,
            shivCSS: m.shivCSS !== !1,
            supportsUnknownElements: c,
            shivMethods: m.shivMethods !== !1,
            type: "default",
            shivDocument: d,
            createElement: s,
            createDocumentFragment: a,
            addElements: r
        };
        e.html5 = y,
        d(t),
        "object" == typeof module && module.exports && (module.exports = y)
    }("undefined" != typeof e ? e : this, t);
    var T = "Moz O ms Webkit"
      , P = w._config.usePrefixes ? T.toLowerCase().split(" ") : [];
    w._domPrefixes = P;
    var G = function() {
        function e(e, t) {
            var r;
            return e ? (t && "string" != typeof t || (t = a(t || "div")),
            e = "on" + e,
            r = e in t,
            !r && o && (t.setAttribute || (t = a("div")),
            t.setAttribute(e, ""),
            r = "function" == typeof t[e],
            t[e] !== n && (t[e] = n),
            t.removeAttribute(e)),
            r) : !1
        }
        var o = !("onblur"in t.documentElement);
        return e
    }();
    w.hasEvent = G;
    var _ = "CSS"in e && "supports"in e.CSS
      , M = "supportsCSS"in e;
    C.addTest("supports", _ || M);
    var A = function() {
        var t = e.matchMedia || e.msMatchMedia;
        return t ? function(e) {
            var n = t(e);
            return n && n.matches || !1
        }
        : function(t) {
            var n = !1;
            return d("@media " + t + " { #modernizr { position: absolute; } }", function(t) {
                n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position
            }),
            n
        }
    }();
    w.mq = A;
    var k = w.testStyles = d
      , O = w._config.usePrefixes ? T.split(" ") : [];
    w._cssomPrefixes = O;
    var N = function(t) {
        var o, r = S.length, i = e.CSSRule;
        if ("undefined" == typeof i)
            return n;
        if (!t)
            return !1;
        if (t = t.replace(/^@/, ""),
        o = t.replace(/-/g, "_").toUpperCase() + "_RULE",
        o in i)
            return "@" + t;
        for (var s = 0; r > s; s++) {
            var a = S[s]
              , l = a.toUpperCase() + "_" + o;
            if (l in i)
                return "@-" + a.toLowerCase() + "-" + t
        }
        return !1
    };
    w.atRule = N;
    var z = {
        elem: a("modernizr")
    };
    C._q.push(function() {
        delete z.elem
    });
    var j = {
        style: z.elem.style
    };
    C._q.unshift(function() {
        delete j.style
    }),
    w.testProp = function(e, t, o) {
        return h([e], n, t, o)
    }
    ,
    w.testAllProps = g;
    var F = w.prefixed = function(e, t, n) {
        return 0 === e.indexOf("@") ? N(e) : (-1 != e.indexOf("-") && (e = s(e)),
        t ? g(e, t, n) : g(e, "pfx"))
    }
    ;
    C.addTest("forcetouch", function() {
        return G(F("mouseforcewillbegin", e, !1), e) ? MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN && MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN : !1
    }),
    w.testAllProps = v,
    C.addTest("cssanimations", v("animationName", "a", !0)),
    C.addTest("cssfilters", function() {
        if (C.supports)
            return v("filter", "blur(2px)");
        var e = a("a");
        return e.style.cssText = S.join("filter:blur(2px); "),
        !!e.style.length && (t.documentMode === n || t.documentMode > 9)
    }),
    C.addTest("csstransforms", function() {
        return -1 === navigator.userAgent.indexOf("Android 2.") && v("transform", "scale(1)", !0)
    }),
    C.addTest("csstransforms3d", function() {
        var e = !!v("perspective", "1px", !0)
          , t = C._config.usePrefixes;
        if (e && (!t || "webkitPerspective"in E.style)) {
            var n, o = "#modernizr{width:0;height:0}";
            C.supports ? n = "@supports (perspective: 1px)" : (n = "@media (transform-3d)",
            t && (n += ",(-webkit-transform-3d)")),
            n += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",
            k(o + n, function(t) {
                e = 7 === t.offsetWidth && 18 === t.offsetHeight
            })
        }
        return e
    }),
    C.addTest("csstransitions", v("transition", "all", !0)),
    C.addTest("touchevents", function() {
        var n;
        if ("ontouchstart"in e || e.DocumentTouch && t instanceof DocumentTouch)
            n = !0;
        else {
            var o = ["@media (", S.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            k(o, function(e) {
                n = 9 === e.offsetTop
            })
        }
        return n
    }),
    r(),
    i(b),
    delete w.addTest,
    delete w.addAsyncTest;
    for (var D = 0; D < C._q.length; D++)
        C._q[D]();
    e.Modernizr = C
}(window, document);
var dtGlobals = {};
dtGlobals.isMobile = /(Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|windows phone)/.test(navigator.userAgent),
dtGlobals.isAndroid = /(Android)/.test(navigator.userAgent),
dtGlobals.isiOS = /(iPhone|iPod|iPad)/.test(navigator.userAgent),
dtGlobals.isiPhone = /(iPhone|iPod)/.test(navigator.userAgent),
dtGlobals.isiPad = /(iPad)/.test(navigator.userAgent),
dtGlobals.isBuggy = navigator.userAgent.match(/AppleWebKit/) && "undefined" == typeof window.ontouchstart && !navigator.userAgent.match(/Chrome/),
dtGlobals.winScrollTop = 0,
window.onscroll = function() {
    dtGlobals.winScrollTop = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
}
,
dtGlobals.isWindowsPhone = navigator.userAgent.match(/IEMobile/i),
dtGlobals.customColor = "red",
dtGlobals.isMobile ? document.documentElement.className += " mobile-true" : document.documentElement.className += " mobile-false",
dtGlobals.logoURL = !1,
dtGlobals.logoH = !1,
dtGlobals.logoW = !1,
jQuery(document).ready(function($) {
    var e = $(document)
      , t = $(window)
      , n = $("html")
      , o = $("body");
    if (dtGlobals.isiOS ? n.addClass("is-iOS") : n.addClass("not-iOS"),
    !$.browser.webkit || dtGlobals.isMobile ? o.addClass("not-webkit").removeClass("is-webkit") : o.removeClass("not-webkit").addClass("is-webkit"),
    jQuery.browser.msie && 10 == jQuery.browser.version && o.addClass("ie-10"),
    $.browser.safari = $.browser.webkit && !/chrome/.test(navigator.userAgent.toLowerCase()),
    $.browser.safari && o.addClass("is-safari"),
    dtGlobals.isWindowsPhone && o.addClass("ie-mobile").addClass("windows-phone"),
    dtGlobals.isMobile || o.addClass("no-mobile"),
    dtGlobals.isiPhone && o.addClass("is-iphone"),
    !$("html").hasClass("old-ie")) {
        dtGlobals.isPhone = !1,
        dtGlobals.isTablet = !1,
        dtGlobals.isDesktop = !1;
        var r = window.getComputedStyle(document.body, ":after").getPropertyValue("content");
        -1 != r.indexOf("phone") && dtGlobals.isMobile ? dtGlobals.isPhone = !0 : -1 != r.indexOf("tablet") && dtGlobals.isMobile ? dtGlobals.isTablet = !0 : dtGlobals.isDesktop = !0
    }
    $.browser.msie && $("html").removeClass("csstransforms3d");
    var i;
    dtGlobals.isMobile && !dtGlobals.isWindowsPhone ? $(window).bind("orientationchange", function(e) {
        clearTimeout(i),
        i = setTimeout(function() {
            $(window).trigger("debouncedresize")
        }, 200)
    }) : $(window).on("resize", function() {
        clearTimeout(i),
        i = setTimeout(function() {
            $(window).trigger("debouncedresize")
        }, 200)
    })
});
