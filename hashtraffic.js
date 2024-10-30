(function () {
	
	

    function loadScript(callback) {
      callback();
    }

    loadScript(function () {

        if (hashtrafficized == undefined) var hashtrafficized = false;

        var pagestart = false;
        var pollserver = false;
        var clicked = '';

        //Retinafy
        (function ($) {
            jQuery.fn.retinafy = function (load, include) {
                target = jQuery(this);
                if (window.devicePixelRatio >= 2) {
                    if (load !== false) {
                        var retina = target.find('*').andSelf().filter(function () {
                            return jQuery(this).is('img') || (jQuery(this).css('backgroundImage') !== 'none');
                        })

                        for (i = 0; i < retina.length; i++) {
                            var img = retina[i];
                            var srcImg = jQuery(img).attr('src');
                            var bgImg = jQuery(img).css('background-image');

                            function IsImageOk(img) {
                                if (!img.complete) {
                                    return false;
                                }
                                if (typeof img.naturalWidth != "undefined" && img.naturalWidth == 0) {
                                    return false;
                                }
                                return true;
                            }

                            function urlExists(url) {
                                if (url.match(include) && include !== undefined) {
                                    return true;
                                } else if (!(!url.match(/^https?\:/i) || url.match("//" + document.domain))) {
                                    return false;
                                } else {
                                    var http = new XMLHttpRequest();
                                    http.open('HEAD', url, false);
                                    http.send();
                                    return http.status != 404;
                                }
                            }

                            function doRetina() {
                                var imgWidth = jQuery(img).width();
                                var imgHeight = jQuery(img).height();

                                if (jQuery(img).is('img') && (srcImg.indexOf('@2x') == -1)) {

                                    var stry = srcImg.lastIndexOf('.');
                                    if (stry != -1) {
                                        srcImg = srcImg.substr(0, stry) + "@2x" + srcImg.substr(stry);
                                    }

                                    if (urlExists(srcImg)) {
                                        jQuery(img).attr('src', srcImg);
                                        jQuery(img).attr('width', imgWidth).height('height', imgHeight);
                                    }
                                }
                            }

                            if (IsImageOk(img)) {
                                doRetina()
                            } else {
                                if (jQuery(img).is('img') && (srcImg.indexOf('@2x') == -1)) {
                                    img.onload = function () {
                                        doRetina();
                                    }
                                } else {
                                    var imgWidth = jQuery(img).width();
                                    var imgHeight = jQuery(img).height();
                                    var strx = bgImg;
                                    var stry = strx.lastIndexOf('.');

                                    if (stry != -1) {
                                        strx = strx.substr(0, stry) + "@2x" + strx.substr(stry);
                                    }

                                    var bgImgUrl = strx;
                                    var bgImgUrl = bgImgUrl.substr(4);
                                    var bgImgUrl = bgImgUrl.substr(0, bgImgUrl.length - 1);

                                    if (urlExists(bgImgUrl)) {
                                        jQuery(img).css('background-image', strx);
                                        jQuery(img).css('background-size', imgWidth + 'px ,' + imgHeight + 'px');
                                    };
                                };
                            };
                        };
                    };

                    return true;

                } else {
                    return false;
                }

            };
        })(jQuery);

        //Modernizr for 3D Transforms and transitions
        ;
        window.Modernizr = function (a, b, c) {
            function z(a) {
                j.cssText = a
            }
            function A(a, b) {
                return z(m.join(a + ";") + (b || ""))
            }
            function B(a, b) {
                return typeof a === b
            }
            function C(a, b) {
                return !!~ ("" + a).indexOf(b)
            }
            function D(a, b) {
                for (var d in a) if (j[a[d]] !== c) return b == "pfx" ? a[d] : !0;
                return !1
            }
            function E(a, b, d) {
                for (var e in a) {
                    var f = b[a[e]];
                    if (f !== c) return d === !1 ? a[e] : B(f, "function") ? f.bind(d || b) : f
                }
                return !1
            }
            function F(a, b, c) {
                var d = a.charAt(0).toUpperCase() + a.substr(1),
                    e = (a + " " + o.join(d + " ") + d).split(" ");
                return B(b, "string") || B(b, "undefined") ? D(e, b) : (e = (a + " " + p.join(d + " ") + d).split(" "), E(e, b, c))
            }
            var d = "2.5.3",
                e = {},
                f = !0,
                g = b.documentElement,
                h = "modernizr",
                i = b.createElement(h),
                j = i.style,
                k, l = {}.toString,
                m = " -webkit- -moz- -o- -ms- ".split(" "),
                n = "Webkit Moz O ms",
                o = n.split(" "),
                p = n.toLowerCase().split(" "),
                q = {},
                r = {},
                s = {},
                t = [],
                u = t.slice,
                v, w = function (a, c, d, e) {
                    var f, i, j, k = b.createElement("div"),
                        l = b.body,
                        m = l ? l : b.createElement("body");
                    if (parseInt(d, 10)) while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), k.appendChild(j);
                    return f = ["&#173;", "<style>", a, "</style>"].join(""), k.id = h, (l ? k : m).innerHTML += f, m.appendChild(k), l || (m.style.background = "", g.appendChild(m)), i = c(k, a), l ? k.parentNode.removeChild(k) : m.parentNode.removeChild(m), !! i
                },
                x = {}.hasOwnProperty,
                y;
            !B(x, "undefined") && !B(x.call, "undefined") ? y = function (a, b) {
                return x.call(a, b)
            } : y = function (a, b) {
                return b in a && B(a.constructor.prototype[b], "undefined")
            }, Function.prototype.bind || (Function.prototype.bind = function (b) {
                var c = this;
                if (typeof c != "function") throw new TypeError;
                var d = u.call(arguments, 1),
                    e = function () {
                        if (this instanceof e) {
                            var a = function () {};
                            a.prototype = c.prototype;
                            var f = new a,
                                g = c.apply(f, d.concat(u.call(arguments)));
                            return Object(g) === g ? g : f
                        }
                        return c.apply(b, d.concat(u.call(arguments)))
                    };
                return e
            });
            var G = function (a, c) {
                    var d = a.join(""),
                        f = c.length;
                    w(d, function (a, c) {
                        var d = b.styleSheets[b.styleSheets.length - 1],
                            g = d ? d.cssRules && d.cssRules[0] ? d.cssRules[0].cssText : d.cssText || "" : "",
                            h = a.childNodes,
                            i = {};
                        while (f--) i[h[f].id] = h[f];
                        e.csstransforms3d = (i.csstransforms3d && i.csstransforms3d.offsetLeft) === 9 && i.csstransforms3d.offsetHeight === 3
                    }, f, c)
                }([, ["@media (", m.join("transform-3d),("), h, ")", "{#csstransforms3d{left:9px;position:absolute;height:3px;}}"].join("")], [, "csstransforms3d"]);
            q.csstransforms3d = function () {
                var a = !! F("perspective");
                return a && "webkitPerspective" in g.style && (a = e.csstransforms3d), a
            }, q.csstransitions = function () {
                return F("transition")
            };
            for (var H in q) y(q, H) && (v = H.toLowerCase(), e[v] = q[H](), t.push((e[v] ? "" : "no-") + v));
            return z(""), i = k = null, function (a, b) {
                function g(a, b) {
                    var c = a.createElement("p"),
                        d = a.getElementsByTagName("head")[0] || a.documentElement;
                    return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
                }
                function h() {
                    var a = k.elements;
                    return typeof a == "string" ? a.split(" ") : a
                }
                function i(a) {
                    var b = {},
                        c = a.createElement,
                        e = a.createDocumentFragment,
                        f = e();
                    a.createElement = function (a) {
                        var e = (b[a] || (b[a] = c(a))).cloneNode();
                        return k.shivMethods && e.canHaveChildren && !d.test(a) ? f.appendChild(e) : e
                    }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + h().join().replace(/\w+/g, function (a) {
                        return b[a] = c(a), f.createElement(a), 'c("' + a + '")'
                    }) + ");return n}")(k, f)
                }
                function j(a) {
                    var b;
                    return a.documentShived ? a : (k.shivCSS && !e && (b = !! g(a, "article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")), f || (b = !i(a)), b && (a.documentShived = b), a)
                }
                var c = a.html5 || {},
                    d = /^<|^(?:button|form|map|select|textarea)$/i,
                    e, f;
                (function () {
                    var a = b.createElement("a");
                    a.innerHTML = "<xyz></xyz>", e = "hidden" in a, f = a.childNodes.length == 1 ||
                    function () {
                        try {
                            b.createElement("a")
                        } catch (a) {
                            return !0
                        }
                        var c = b.createDocumentFragment();
                        return typeof c.cloneNode == "undefined" || typeof c.createDocumentFragment == "undefined" || typeof c.createElement == "undefined"
                    }()
                })();
                var k = {
                    elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                    shivCSS: c.shivCSS !== !1,
                    shivMethods: c.shivMethods !== !1,
                    type: "default",
                    shivDocument: j
                };
                a.html5 = k, j(b)
            }(this, b), e._version = d, e._prefixes = m, e._domPrefixes = p, e._cssomPrefixes = o, e.testProp = function (a) {
                return D([a])
            }, e.testAllProps = F, e.testStyles = w, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + t.join(" ") : ""), e
        }(this, this.document), function (a, b, c) {
            function d(a) {
                return o.call(a) == "[object Function]"
            }
            function e(a) {
                return typeof a == "string"
            }
            function f() {}
            function g(a) {
                return !a || a == "loaded" || a == "complete" || a == "uninitialized"
            }
            function h() {
                var a = p.shift();
                q = 1, a ? a.t ? m(function () {
                    (a.t == "c" ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
                }, 0) : (a(), h()) : q = 0
            }
            function i(a, c, d, e, f, i, j) {
                function k(b) {
                    if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                        a != "img" && m(function () {
                            t.removeChild(l)
                        }, 50);
                        for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
                    }
                }
                var j = j || B.errorTimeout,
                    l = {},
                    o = 0,
                    r = 0,
                    u = {
                        t: d,
                        s: c,
                        e: f,
                        a: i,
                        x: j
                    };
                y[c] === 1 && (r = 1, y[c] = [], l = b.createElement(a)), a == "object" ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function () {
                    k.call(this, r)
                }, p.splice(e, 0, u), a != "img" && (r || y[c] === 2 ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
            }
            function j(a, b, c, d, f) {
                return q = 0, b = b || "j", e(a) ? i(b == "c" ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), p.length == 1 && h()), this
            }
            function k() {
                var a = B;
                return a.loader = {
                    load: j,
                    i: 0
                }, a
            }
            var l = b.documentElement,
                m = a.setTimeout,
                n = b.getElementsByTagName("script")[0],
                o = {}.toString,
                p = [],
                q = 0,
                r = "MozAppearance" in l.style,
                s = r && !! b.createRange().compareNode,
                t = s ? l : n.parentNode,
                l = a.opera && o.call(a.opera) == "[object Opera]",
                l = !! b.attachEvent && !l,
                u = r ? "object" : l ? "script" : "img",
                v = l ? "script" : u,
                w = Array.isArray ||
            function (a) {
                return o.call(a) == "[object Array]"
            }, x = [], y = {}, z = {
                timeout: function (a, b) {
                    return b.length && (a.timeout = b[0]), a
                }
            }, A, B;
            B = function (a) {
                function b(a) {
                    var a = a.split("!"),
                        b = x.length,
                        c = a.pop(),
                        d = a.length,
                        c = {
                            url: c,
                            origUrl: c,
                            prefixes: a
                        },
                        e, f, g;
                    for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
                    for (f = 0; f < b; f++) c = x[f](c);
                    return c
                }
                function g(a, e, f, g, i) {
                    var j = b(a),
                        l = j.autoCallback;
                    j.url.split(".").pop().split("?").shift(), j.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]] || h), j.instead ? j.instead(a, e, f, g, i) : (y[j.url] ? j.noexec = !0 : y[j.url] = 1, f.load(j.url, j.forceCSS || !j.forceJS && "css" == j.url.split(".").pop().split("?").shift() ? "c" : c, j.noexec, j.attrs, j.timeout), (d(e) || d(l)) && f.load(function () {
                        k(), e && e(j.origUrl, i, g), l && l(j.origUrl, i, g), y[j.url] = 2
                    })))
                }
                function i(a, b) {
                    function c(a, c) {
                        if (a) {
                            if (e(a)) c || (j = function () {
                                var a = [].slice.call(arguments);
                                k.apply(this, a), l()
                            }), g(a, j, b, 0, h);
                            else if (Object(a) === a) for (n in m = function () {
                                var b = 0,
                                    c;
                                for (c in a) a.hasOwnProperty(c) && b++;
                                return b
                            }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function () {
                                var a = [].slice.call(arguments);
                                k.apply(this, a), l()
                            } : j[n] = function (a) {
                                return function () {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b), l()
                                }
                            }(k[n])), g(a[n], j, b, n, h))
                        } else !c && l()
                    }
                    var h = !! a.test,
                        i = a.load || a.both,
                        j = a.callback || f,
                        k = j,
                        l = a.complete || f,
                        m, n;
                    c(h ? a.yep : a.nope, !! i), i && c(i)
                }
                var j, l, m = this.yepnope.loader;
                if (e(a)) g(a, 0, m, 0);
                else if (w(a)) for (j = 0; j < a.length; j++) l = a[j], e(l) ? g(l, 0, m, 0) : w(l) ? B(l) : Object(l) === l && i(l, m);
                else Object(a) === a && i(a, m)
            }, B.addPrefix = function (a, b) {
                z[a] = b
            }, B.addFilter = function (a) {
                x.push(a)
            }, B.errorTimeout = 1e4, b.readyState == null && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function () {
                b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
            }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
                var k = b.createElement("script"),
                    l, o, e = e || B.errorTimeout;
                k.src = a;
                for (o in d) k.setAttribute(o, d[o]);
                c = j ? h : c || f, k.onreadystatechange = k.onload = function () {
                    !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
                }, m(function () {
                    l || (l = 1, c(1))
                }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
            }, a.yepnope.injectCss = function (a, c, d, e, g, i) {
                var e = b.createElement("link"),
                    j, c = i ? h : c || f;
                e.href = a, e.rel = "stylesheet", e.type = "text/css";
                for (j in d) e.setAttribute(j, d[j]);
                g || (n.parentNode.insertBefore(e, n), m(c, 0))
            }
        }(this, document), Modernizr.load = function () {
            yepnope.apply(window, [].slice.call(arguments, 0))
        };

        //Spinner
        (function (a, b, c) {
            function g(a, c) {
                var d = b.createElement(a || "div"),
                    e;
                for (e in c) d[e] = c[e];
                return d
            }
            function h(a) {
                for (var b = 1, c = arguments.length; b < c; b++) a.appendChild(arguments[b]);
                return a
            }
            function j(a, b, c, d) {
                var g = ["opacity", b, ~~ (a * 100), c, d].join("-"),
                    h = .01 + c / d * 100,
                    j = Math.max(1 - (1 - a) / b * (100 - h), a),
                    k = f.substring(0, f.indexOf("Animation")).toLowerCase(),
                    l = k && "-" + k + "-" || "";
                return e[g] || (i.insertRule("@" + l + "keyframes " + g + "{" + "0%{opacity:" + j + "}" + h + "%{opacity:" + a + "}" + (h + .01) + "%{opacity:1}" + (h + b) % 100 + "%{opacity:" + a + "}" + "100%{opacity:" + j + "}" + "}", 0), e[g] = 1), g
            }
            function k(a, b) {
                var e = a.style,
                    f, g;
                if (e[b] !== c) return b;
                b = b.charAt(0).toUpperCase() + b.slice(1);
                for (g = 0; g < d.length; g++) {
                    f = d[g] + b;
                    if (e[f] !== c) return f
                }
            }
            function l(a, b) {
                for (var c in b) a.style[k(a, c) || c] = b[c];
                return a
            }
            function m(a) {
                for (var b = 1; b < arguments.length; b++) {
                    var d = arguments[b];
                    for (var e in d) a[e] === c && (a[e] = d[e])
                }
                return a
            }
            function n(a) {
                var b = {
                    x: a.offsetLeft,
                    y: a.offsetTop
                };
                while (a = a.offsetParent) b.x += a.offsetLeft, b.y += a.offsetTop;
                return b
            }
            var d = ["webkit", "Moz", "ms", "O"],
                e = {},
                f, i = function () {
                    var a = g("style");
                    return h(b.getElementsByTagName("head")[0], a), a.sheet || a.styleSheet
                }(),
                o = {
                    lines: 12,
                    length: 7,
                    width: 5,
                    radius: 10,
                    rotate: 0,
                    color: "#000",
                    speed: 1,
                    trail: 100,
                    opacity: .25,
                    fps: 20,
                    zIndex: 2e9,
                    className: "spinner",
                    top: "auto",
                    left: "auto"
                },
                p = function q(a) {
                    if (!this.spin) return new q(a);
                    this.opts = m(a || {}, q.defaults, o)
                };
            p.defaults = {}, m(p.prototype, {
                spin: function (a) {
                    this.stop();
                    var b = this,
                        c = b.opts,
                        d = b.el = l(g(0, {
                            className: c.className
                        }), {
                            position: "relative",
                            zIndex: c.zIndex
                        }),
                        e = c.radius + c.length + c.width,
                        h, i;
                    a && (a.insertBefore(d, a.firstChild || null), i = n(a), h = n(d), l(d, {
                        left: (c.left == "auto" ? i.x - h.x + (a.offsetWidth >> 1) : c.left + e) + "px",
                        top: (c.top == "auto" ? i.y - h.y + (a.offsetHeight >> 1) : c.top + e) + "px"
                    })), d.setAttribute("aria-role", "progressbar"), b.lines(d, b.opts);
                    if (!f) {
                        var j = 0,
                            k = c.fps,
                            m = k / c.speed,
                            o = (1 - c.opacity) / (m * c.trail / 100),
                            p = m / c.lines;
                        !
                        function q() {
                            j++;
                            for (var a = c.lines; a; a--) {
                                var e = Math.max(1 - (j + a * p) % m * o, c.opacity);
                                b.opacity(d, c.lines - a, e, c)
                            }
                            b.timeout = b.el && setTimeout(q, ~~ (1e3 / k))
                        }()
                    }
                    return b
                },
                stop: function () {
                    var a = this.el;
                    return a && (clearTimeout(this.timeout), a.parentNode && a.parentNode.removeChild(a), this.el = c), this
                },
                lines: function (a, b) {
                    function e(a, d) {
                        return l(g(), {
                            position: "absolute",
                            width: b.length + b.width + "px",
                            height: b.width + "px",
                            background: a,
                            boxShadow: d,
                            transformOrigin: "left",
                            transform: "rotate(" + ~~ (360 / b.lines * c + b.rotate) + "deg) translate(" + b.radius + "px" + ",0)",
                            borderRadius: (b.width >> 1) + "px"
                        })
                    }
                    var c = 0,
                        d;
                    for (; c < b.lines; c++) d = l(g(), {
                        position: "absolute",
                        top: 1 + ~ (b.width / 2) + "px",
                        transform: b.hwaccel ? "translate3d(0,0,0)" : "",
                        opacity: b.opacity,
                        animation: f && j(b.opacity, b.trail, c, b.lines) + " " + 1 / b.speed + "s linear infinite"
                    }), b.shadow && h(d, l(e("#000", "0 0 4px #000"), {
                        top: "2px"
                    })), h(a, h(d, e(b.color, "0 0 1px rgba(0,0,0,.1)")));
                    return a
                },
                opacity: function (a, b, c) {
                    b < a.childNodes.length && (a.childNodes[b].style.opacity = c)
                }
            }), !
            function () {
                function a(a, b) {
                    return g("<" + a + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', b)
                }
                var b = l(g("group"), {
                    behavior: "url(#default#VML)"
                });
                !k(b, "transform") && b.adj ? (i.addRule(".spin-vml", "behavior:url(#default#VML)"), p.prototype.lines = function (b, c) {
                    function f() {
                        return l(a("group", {
                            coordsize: e + " " + e,
                            coordorigin: -d + " " + -d
                        }), {
                            width: e,
                            height: e
                        })
                    }
                    function k(b, e, g) {
                        h(i, h(l(f(), {
                            rotation: 360 / c.lines * b + "deg",
                            left: ~~e
                        }), h(l(a("roundrect", {
                            arcsize: 1
                        }), {
                            width: d,
                            height: c.width,
                            left: c.radius,
                            top: -c.width >> 1,
                            filter: g
                        }), a("fill", {
                            color: c.color,
                            opacity: c.opacity
                        }), a("stroke", {
                            opacity: 0
                        }))))
                    }
                    var d = c.length + c.width,
                        e = 2 * d,
                        g = -(c.width + c.length) * 2 + "px",
                        i = l(f(), {
                            position: "absolute",
                            top: g,
                            left: g
                        }),
                        j;
                    if (c.shadow) for (j = 1; j <= c.lines; j++) k(j, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
                    for (j = 1; j <= c.lines; j++) k(j);
                    return h(b, i)
                }, p.prototype.opacity = function (a, b, c, d) {
                    var e = a.firstChild;
                    d = d.shadow && d.lines || 0, e && b + d < e.childNodes.length && (e = e.childNodes[b + d], e = e && e.firstChild, e = e && e.firstChild, e && (e.opacity = c))
                }) : f = k(b, "animation")
            }(), a.Spinner = p
        })(window, document);

        // Nano Scroller
        (function (e, i, j) {
            var l, g, k, m, n, o;
            n = {
                paneClass: "pane",
                sliderClass: "slider",
                sliderMinHeight: 20,
                contentClass: "content",
                iOSNativeScrolling: !1,
                preventPageScrolling: !1,
                disableResize: !1,
                alwaysVisible: !1
            };
            l = "Microsoft Internet Explorer" === i.navigator.appName && /msie 7./i.test(i.navigator.appVersion) && i.ActiveXObject;
            g = null;
            k = {};
            o = function () {
                var c, a;
                c = j.createElement("div");
                a = c.style;
                a.position = "absolute";
                a.width = "100px";
                a.height = "100px";
                a.overflow = "scroll";
                a.top = "-9999px";
                j.body.appendChild(c);
                a = c.offsetWidth - c.clientWidth;
                j.body.removeChild(c);
                return a
            };
            m = function () {
                function c(a, b) {
                    this.options = b;
                    g || (g = o());
                    this.el = e(a);
                    this.doc = e(j);
                    this.win = e(i);
                    this.generate();
                    this.createEvents();
                    this.addEvents();
                    this.reset()
                }
                c.prototype.preventScrolling = function (a, b) {
                    "DOMMouseScroll" === a.type ? ("down" === b && 0 < a.originalEvent.detail || "up" === b && 0 > a.originalEvent.detail) && a.preventDefault() : "mousewheel" === a.type && a.originalEvent && a.originalEvent.wheelDelta && ("down" === b && 0 > a.originalEvent.wheelDelta || "up" === b && 0 < a.originalEvent.wheelDelta) && a.preventDefault()
                };
                c.prototype.updateScrollValues = function () {
                    var a;
                    a = this.content[0];
                    this.maxScrollTop = a.scrollHeight - a.clientHeight;
                    this.contentScrollTop = a.scrollTop;
                    this.maxSliderTop = this.paneOuterHeight - this.sliderHeight;
                    this.sliderTop = this.contentScrollTop * this.maxSliderTop / this.maxScrollTop
                };
                c.prototype.handleKeyPress = function (a) {
                    var b;
                    if (38 === a || 33 === a || 40 === a || 34 === a) b = 38 === a || 40 === a ? 40 : 0.9 * this.paneHeight, b = 100 * (b / (this.contentHeight - this.paneHeight)), b = b * this.maxSliderTop / 100, this.sliderY = 38 === a || 33 === a ? this.sliderY - b : this.sliderY + b, this.scroll();
                    else if (36 === a || 35 === a) this.sliderY = 36 === a ? 0 : this.maxSliderTop, this.scroll()
                };
                c.prototype.createEvents = function () {
                    var a = this;
                    this.events = {
                        down: function (b) {
                            a.isBeingDragged = !0;
                            a.offsetY = b.pageY - a.slider.offset().top;
                            a.pane.addClass("active");
                            a.doc.bind("mousemove", a.events.drag).bind("mouseup", a.events.up);
                            return !1
                        },
                        drag: function (b) {
                            a.sliderY = b.pageY - a.el.offset().top - a.offsetY;
                            a.scroll();
                            a.updateScrollValues();
                            a.contentScrollTop >= a.maxScrollTop ? a.el.trigger("scrollend") : 0 === a.contentScrollTop && a.el.trigger("scrolltop");
                            return !1
                        },
                        up: function () {
                            a.isBeingDragged = !1;
                            a.pane.removeClass("active");
                            a.doc.unbind("mousemove", a.events.drag).unbind("mouseup", a.events.up);
                            return !1
                        },
                        resize: function () {
                            a.reset()
                        },
                        panedown: function (b) {
                            a.sliderY = b.offsetY - 0.5 * a.sliderHeight;
                            a.scroll();
                            a.events.down(b);
                            return !1
                        },
                        scroll: function (b) {
                            a.isBeingDragged || (a.updateScrollValues(), a.sliderY = a.sliderTop, a.slider.css({
                                top: a.sliderTop
                            }), null != b && (a.contentScrollTop >= a.maxScrollTop ? (a.options.preventPageScrolling && a.preventScrolling(b, "down"), a.el.trigger("scrollend")) : 0 === a.contentScrollTop && (a.options.preventPageScrolling && a.preventScrolling(b, "up"), a.el.trigger("scrolltop"))))
                        },
                        wheel: function (b) {
                            if (null != b) return a.sliderY += -b.wheelDeltaY || -b.delta, a.scroll(), !1
                        },
                        keydown: function (b) {
                            var c;
                            if (null != b && (c = b.which, 38 === c || 33 === c || 40 === c || 34 === c || 36 === c || 35 === c)) a.sliderY = isNaN(a.sliderY) ? 0 : a.sliderY, k[c] = setTimeout(function () {
                                a.handleKeyPress(c)
                            }, 100), b.preventDefault()
                        },
                        keyup: function (b) {
                            null != b && (b = b.which, a.handleKeyPress(b), null != k[b] && clearTimeout(k[b]))
                        }
                    }
                };
                c.prototype.addEvents = function () {
                    var a;
                    a = this.events;
                    this.options.disableResize || this.win.bind("resize", a.resize);
                    this.slider.bind("mousedown", a.down);
                    this.pane.bind("mousedown", a.panedown).bind("mousewheel", a.wheel).bind("DOMMouseScroll", a.wheel);
                    this.content.bind("mousewheel", a.scroll).bind("DOMMouseScroll", a.scroll).bind("touchmove", a.scroll).bind("keydown", a.keydown).bind("keyup", a.keyup)
                };
                c.prototype.removeEvents = function () {
                    var a;
                    a = this.events;
                    this.options.disableResize || this.win.unbind("resize", a.resize);
                    this.slider.unbind("mousedown", a.down);
                    this.pane.unbind("mousedown", a.panedown).unbind("mousewheel", a.wheel).unbind("DOMMouseScroll", a.wheel);
                    this.content.unbind("mousewheel", a.scroll).unbind("DOMMouseScroll", a.scroll).unbind("touchmove", a.scroll).unbind("keydown", a.keydown).unbind("keyup", a.keyup)
                };
                c.prototype.generate = function () {
                    var a, b, c, h, f;
                    c = this.options;
                    h = c.paneClass;
                    f = c.sliderClass;
                    a = c.contentClass;
                    this.el.append('<div class="' + h + '"><div class="' + f + '" /></div>');
                    this.content = e(this.el.children("." + a)[0]);
                    this.content.attr("tabindex", 0);
                    this.slider = this.el.find("." + f);
                    this.pane = this.el.find("." + h);
                    g && (b = {
                        right: -g
                    }, this.el.addClass("has-scrollbar"));
                    c.iOSNativeScrolling && (null == b && (b = {}), b.WebkitOverflowScrolling = "touch");
                    null != b && this.content.css(b);
                    c.alwaysVisible && this.pane.css({
                        opacity: 1,
                        visibility: "visible"
                    });
                    return this
                };
                c.prototype.elementsExist = function () {
                    return this.el.find("." + this.options.paneClass).length
                };
                c.prototype.restore = function () {
                    this.stopped = !1;
                    this.pane.show();
                    return this.addEvents()
                };
                c.prototype.reset = function () {
                    var a, b, c, h, f, e, d;
                    this.elementsExist() || this.generate().stop();
                    this.stopped && this.restore();
                    a = this.content[0];
                    c = a.style;
                    h = c.overflowY;
                    l && this.content.css({
                        height: this.content.height()
                    });
                    b = a.scrollHeight + g;
                    e = this.pane.outerHeight();
                    d = parseInt(this.pane.css("top"), 10);
                    f = parseInt(this.pane.css("bottom"), 10);
                    f = e + d + f;
                    d = Math.round(f / b * f);
                    d = d > this.options.sliderMinHeight ? d : this.options.sliderMinHeight;
                    "scroll" === h && "scroll" !== c.overflowX && (d += g);
                    this.maxSliderTop = f - d;
                    this.contentHeight = b;
                    this.paneHeight = e;
                    this.paneOuterHeight = f;
                    this.sliderHeight = d;
                    this.slider.height(d);
                    this.events.scroll();
                    this.pane.show();
                    this.paneOuterHeight >= a.scrollHeight && "scroll" !== h ? this.pane.hide() : this.el.height() === a.scrollHeight && "scroll" === h ? this.slider.hide() : this.slider.show();
                    return this
                };
                c.prototype.scroll = function () {
                    this.sliderY = Math.max(0, this.sliderY);
                    this.sliderY = Math.min(this.maxSliderTop, this.sliderY);
                    this.content.scrollTop(-1 * ((this.paneHeight - this.contentHeight + g) * this.sliderY / this.maxSliderTop));
                    this.slider.css({
                        top: this.sliderY
                    });
                    return this
                };
                c.prototype.scrollBottom = function (a) {
                    this.reset();
                    this.content.scrollTop(this.contentHeight - this.content.height() - a).trigger("mousewheel");
                    return this
                };
                c.prototype.scrollTop = function (a) {
                    this.reset();
                    this.content.scrollTop(+a).trigger("mousewheel");
                    return this
                };
                c.prototype.scrollTo = function (a) {
                    this.reset();
                    a = e(a).offset().top;
                    a > this.maxSliderTop && (a /= this.contentHeight, this.sliderY = a *= this.maxSliderTop, this.scroll());
                    return this
                };
                c.prototype.stop = function () {
                    this.stopped = !0;
                    this.removeEvents();
                    this.pane.hide();
                    return this
                };
                return c
            }();
            e.fn.nanoScroller = function (c) {
                var a, b, g, h, f, i;
                null != c && (g = c.scrollBottom, f = c.scrollTop, h = c.scrollTo, b = c.scroll, i = c.stop);
                a = e.extend({}, n, c);
                this.each(function () {
                    var d;
                    if (d = e.data(this, "scrollbar")) e.extend(d.options, c);
                    else {
                        d = new m(this, a);
                        e.data(this, "scrollbar", d)
                    }
                    return g ? d.scrollBottom(g) : f ? d.scrollTop(f) : h ? d.scrollTo(h) : b === "bottom" ? d.scrollBottom(0) : b === "top" ? d.scrollTop(0) : b instanceof e ? d.scrollTo(b) : i ? d.stop() : d.reset()
                })
            }
        })(jQuery, window, document);

        // Grab From Server and inset HTML
        function testCallback(response) {
            data = response['stream'];
            pop = response['popular'];
            stats = response['stats'];
            jQuery('#tagBoxDescription').html('')
            var clickedword = clicked.replace(/^.(\s+)?/, '');
            jQuery('#tagBoxDescription').prepend('<div id="tagBoxTitle">' + clicked + '</div><div id="tagStats"><div id="tagNumbers"></div><div id="tagPopularity"></div><div id="tagShare"></div></div>');

            if (navigator.userAgent.match(/Mac OS X/)) {
                jQuery('#tagBoxX').css('margin-left', '0%').css('left', '-20px')
            }

            if (!pagestart) {
                for (a in data) {

                    var count = jQuery('#tagBoxStream div').length;
                    var item = data[a];
                    var wasfound = false;

                    if (count > 0)

                    jQuery('#tagBoxStream div').each(function () {
                        if (jQuery(this).attr('data-href') == item.url) wasfound = true;
                        if (!--count && !wasfound) jQuery('#tagBoxStream').prepend('<div class="tagAnchor ' + item.context.replace('+','Plus') + '" data-href="' + item.url + '"><div class="theTag"><div class="theTagAvatar"><img src="' + item.avatar + '" /></div><span class="tagTitle">' + item.title + '</span><br><a target="_blank" href="'+ item.url +'" class="theTagURL">'+ item.url +'</a><br><br><span class="timeitem">' + item.time + '</span><span class="medium">This tag is from ' + item.context + '.</span></div></div>');
                    });

                    else jQuery('#tagBoxStream').prepend('<div class="tagAnchor ' + item.context.replace('+','Plus') + '" data-href="' + item.url + '"><div class="theTag"><div class="theTagAvatar"><img src="' + item.avatar + '" /></div><span class="tagTitle">' + item.title + '</span><br><a target="_blank" href="'+ item.url +'" class="theTagURL">'+ item.url +'</a><br><br><span class="timeitem">' + item.time + '</span><span class="medium">This tag is from ' + item.context + '.</span></div></div>');
                }

                for (a in pop) {

                    var count = jQuery('#tagBoxPopular div').length;
                    var item = pop[a];
                    var wasfound = false;

                    if (count > 0)

                    jQuery('#tagBoxPopular div').each(function () {
                        if (jQuery(this).attr('data-href') == item.url) wasfound = true;
                        if (!--count && !wasfound) jQuery('#tagBoxPopular').prepend('<div class="tagAnchor ' + item.context.replace('+','Plus') + '" data-href="' + item.url + '"><div class="theTag"><div class="theTagAvatar"><img src="' + item.avatar + '" /></div><span class="tagTitle">' + item.title + '</span><br><a target="_blank" href="'+ item.url +'" class="theTagURL">'+ item.url +'</a><br><br><span class="timeitem">' + item.time + '</span><span class="medium">This tag is from ' + item.context + '.</span></div></div>');
                    });

                    else jQuery('#tagBoxPopular').prepend('<div class="tagAnchor ' + item.context.replace('+','Plus') + '" data-href="' + item.url + '"><div class="theTag"><div class="theTagAvatar"><img src="' + item.avatar + '" /></div><span class="tagTitle">' + item.title + '</span><br><a target="_blank" href="'+ item.url +'" class="theTagURL">'+ item.url +'</a><br><br><span class="timeitem">' + item.time + '</span><span class="medium">This tag is from ' + item.context + '.</span></div></div>');
                }
            }
            return false;
        };

        function fadeInModal() {
            jQuery('#tagBox').retinafy(true, 'default-avatar');
            jQuery('.spinner').stop(1, 1).fadeTo(350, 0, function () {
                jQuery(this).hide();
            })
            jQuery('.nano').height(jQuery('#tagBox').height() - jQuery('#tagBoxDescription').height() - 36);
            jQuery('.nano').nanoScroller();
            jQuery(window).resize(function () {
                jQuery('.nano').nanoScroller();
                jQuery('.nano').height(jQuery('#tagBox').height() - jQuery('#tagBoxDescription').height() - 36);
            });
            jQuery('#tagBoxTop,#tagBoxX').stop(1, 1).fadeTo(350, 1, function () {
                jQuery('#tagBoxTop,#tagBoxRight').hover(function () {
                    if (jQuery(this).find('.slider').length == 0 || jQuery(this).find('.slider').css('display') == 'none' || jQuery(this).find('.pane').css('display') == 'none') {
                        jQuery('.nano').nanoScroller();
                    };
                });
            });
        }

        //Test browser Support
        function supportsCSS3(kind) {
            if (kind == 'transitions') {
                if (jQuery('html').hasClass('csstransitions')) {
                    return true;
                } else {
                    return false;
                }
            } else if (kind == '3dtransforms') {
                if (jQuery('html').hasClass('csstransforms3d')) {
                    return true;
                } else {
                    return false;
                }
            }
        }

        //Check if AJAX and transition are done
        ajaxFlag = false, animationFlag = false;

        function checkDone() {
            if (ajaxFlag && (animationFlag || !supportsCSS3('transitions'))) {
                setTimeout(fadeInModal, 100)
            }
        }

        // Send hashtags to server
        function doServer(val, modal) {
            pagestart = false;
            if (val == '') {
                val = jQuery('body').text().match(/(?:^|\s)(\#[a-zA-Z_]+)/gm).join(',');
                pagestart = true;
                setInterval('realtime()', 15000);
            } else {
                pollserver = true;
                clicked = val;
            }
            var hashtag = val;
            var url = window.location.href;
            var title = document.title;
            var apiurl = 'http://api.hashtraffic.com/?class=relatedposts&method=submit_hashtag';
            if (pagestart) apiurl = apiurl + '&pagestart=1';
            jQuery.ajax({
                type: "GET",
                url: apiurl,
                data: {
                    'hashtag': hashtag,
                    'url': url,
                    'title': title,
                    'context': '',
                    'sponsored': 0,
                    'instance': 0,
                    'clicks': 0,
                    'views': 0
                },
                success: function (data) {
                    if (modal == true) {
                        ajaxFlag = true;
                    }
                    checkDone();
                },
                complete: function () {
                    if (modal == true) {
                        ajaxFlag = true;
                    }
                    checkDone();
                },
                dataType: 'jsonp',
                crossDomain: true
            });
        };

        function realtime() {
            if (pollserver == true) {
                doServer(clicked, false);
            }
        }
        
          window.doServer = doServer;
          window.realtime = realtime;
          window.testCallback = testCallback;

          if (hashtrafficized) return;
          hashtrafficized = true;

          //Get value of html overflow
          htmloverflow = jQuery('html').css('overflow')

          //Append CSS
          var css = document.createElement('link');
          css.setAttribute("rel", "stylesheet");
          css.setAttribute("type", "text/css");
          css.setAttribute("href", "http://hashtraffic.com/css/hashtraffic.css");
          top.document.body.appendChild(css);

          //Add HTML
          jQuery('html').prepend('<div id="tagBoxOverlay"></div><div id="tagBox"><div id="tagBoxX"></div><div id="tagBoxTop"><div id="tagBoxDescription"></div><div id="tagBoxStreamWrapper" class="nano"><div id="tagBoxStream" class="content"></div></div><div class="nano" id="tagBoxPopularWrapper"><div id="tagBoxPopular" class="content"></div></div><div class="showLabel">Show:&nbsp;&nbsp;<span id="showTop" class="active" href="javascript:void(0)">Top</span> / <span id="showAll" href="javascript:void(0)">All</span></div></div></div>');
          jQuery('#tagBoxOverlay,#tagBox').hide();

          var tagBoxContents = jQuery('#tagBoxTop,#tagBoxX');
          var moveOverTag = false;
          var transitionEnd = 'webkitTransitionEnd oTransitionEnd transitionend';
          var mainElements = jQuery('#tagBox, #tagBoxOverlay');
          var theTagBox = jQuery('#tagBox');
          var ua = jQuery.browser

          //Spinner
          var opts = {
              lines: 18,
              length: 45,
              width: 9,
              radius: 50,
              rotate: 0,
              color: '#000',
              speed: 1.6,
              trail: 57,
              shadow: false,
              hwaccel: true,
              className: 'spinner',
              zIndex: 2e9,
              top: 'auto',
              left: 'auto'
          };
          var target = document.getElementById('tagBox');
          var spinner = new Spinner(opts).spin(target);

          //Highlight tags on the page
          doServer('', false);
          ajaxFlag = false;
          var getTextNodesIn = function (el) {
                  jQuery(el).find(':not(iframe)').andSelf().contents().each(function () {
                      var parentNode = this.parentNode.nodeName;
                      data = this.data;
                      if (this.nodeType == 3 && parentNode !== "SCRIPT" && parentNode !== "STYLE" && data.indexOf("#") > -1) {
                          var theTag = data.replace(/\B(#\w*[a-zA-Z0-9]+)\w*/g, "$1".anchor("hashtraffic"));
                          jQuery(this).replaceWith(theTag);
                          jQuery(parentNode).find('a[name="hashtraffic"]').each(function () {
                              jQuery(this).attr('onClick', "doServer('" + jQuery(this).html() + "',true); return false;");
                              jQuery(this).attr('class', "tagLink");
                              jQuery(this).attr('href', "javascript:;");
                          });
                      };
                  });
              };

          function fadeOutModal() {
              jQuery('#tagBoxDescription,#tagBoxPopular').html('');
              mainElements.css('overflow', 'visible').hide();
              jQuery('html').css('overflow', htmloverflow);
              pollserver = false;
              ajaxFlag = false, animationFlag = false;
              jQuery(document).unbind('keydown');
          }

          function modalClose() {
              jQuery(tagBoxContents).stop(1, 1).fadeTo(350, 0, function () {
                  setTimeout(function () {
                      mainElements.removeClass('active');
                  }, 100)
                  if (supportsCSS3('transitions')) {
                      setTimeout(function () {
                          theTagBox.one(transitionEnd, function () {
                              jQuery(this).unbind(transitionEnd)
                              fadeOutModal();
                          });
                      }, 175)
                  } else if (!supportsCSS3('transitions')) {
                      fadeOutModal();
                  }
              });
              jQuery('.spinner').fadeOut(350)
          };

          function modalOpen() {
              jQuery(tagBoxContents).stop(1, 1).fadeTo(0, 0)
              jQuery('.spinner').stop(1, 1).fadeTo(0, 0, function () {
                  jQuery(this).hide();
              });
              setTimeout(function () {
                  if (!(ajaxFlag && animationFlag)) {
                      jQuery('.spinner').stop(1, 1).show().fadeTo(400, .3);
                  };
              }, 1500)
              jQuery('#tagBoxDescription, #tagBoxStream, #tagBoxPopular').html('');
              jQuery('html').css('overflow', 'hidden');

              // close modal on esc
              jQuery(document).bind('keydown', function (e) {
                  if (e.keyCode === 27) {
                      e.preventDefault();
                      modalClose();
                  };
              });

              mainElements.show();
              setTimeout(function () {
                  mainElements.addClass('active');
              }, 100);

              if (supportsCSS3('transitions')) {
                  setTimeout(function () {
                      theTagBox.one(transitionEnd, function () {
                          animationFlag = true;
                          checkDone();
                      });
                  }, 175)
              } else {
                  animationFlag = true;
              }
          };

          //Execute these functions
          getTextNodesIn(document.body);
          jQuery('#tagBoxOverlay, #tagBoxX').click(modalClose);
          jQuery('.tagLink').click(modalOpen);

          function switchContent(side) {
          	var switchScrolled = false;
              if (side == '#showAll') {
                  if (switchScrolled !== true) {
                  	jQuery('.nano').nanoScroller();
                  	switchScrolled = true;
                  }
                  jQuery('#tagBoxPopularWrapper').fadeTo(0,0).css('z-index','-2');
                  jQuery('#tagBoxStreamWrapper').fadeTo(0,1).css('z-index','-1');
                  jQuery('#tagBoxPopular,#tagBoxStream').fadeTo(350, 1);
              } else {
                  jQuery('#tagBoxStreamWrapper').fadeTo(0,0).css('z-index','-2');
                  jQuery('#tagBoxPopularWrapper').fadeTo(0,1).css('z-index','-1');
                  jQuery('#tagBoxPopular,#tagBoxStream').fadeTo(350, 1);
              }
          }

          function tagBoxFlip(side) {
              jQuery('.showLabel .active').removeClass('active');
              jQuery(side).addClass('active');
              jQuery('#tagBoxPopular,#tagBoxStream').fadeTo(350, 0, function () {
  /*
                  if (supportsCSS3('transitions')) {
                      if (side == '#showAll') {
                          jQuery('html').addClass('flipped');
                      } else {
                          jQuery('html').addClass('flippedBack')
                      }
                      theTagBox.one(transitionEnd, function () {
                          jQuery('#tagBox').addClass('tagNoAnim');
                          if (side == '#showAll') {
                              jQuery('html').removeClass('flipped');
                              jQuery('html')
                          } else {
                              jQuery('html').removeClass('flippedBack')
                          }
                          setTimeout(function () {
                              jQuery('#tagBox').removeClass('tagNoAnim');
                              switchContent(side)
                          }, 1);
                      });
                  } else {
                      switchContent(side)
                  }
  */
                  switchContent(side)

              });
          }

          jQuery('.showLabel span').click(function () {
              if (jQuery('#showTop').hasClass('active')) {
                  tagBoxFlip('#showAll');
              } else if (jQuery('#showAll').hasClass('active')) {
                  tagBoxFlip('#showTop');
              }
          });
        

    });

})();


