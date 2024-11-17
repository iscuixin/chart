! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).klinecharts = {})
}(this, (function(t) {
    "use strict";
    var e = function(t, i) {
        return e = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
        }, e(t, i)
    };

    function i(t, i) {
        if ("function" != typeof i && null !== i) throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");

        function n() {
            this.constructor = t
        }
        e(t, i), t.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
    }
    var n, o, r, a, s, l, c, u, h, d = function() {
        return d = Object.assign || function(t) {
            for (var e, i = 1, n = arguments.length; i < n; i++)
                for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t
        }, d.apply(this, arguments)
    };

    function p(t, e, i, n) {
        return new(i || (i = Promise))((function(o, r) {
            function a(t) {
                try {
                    l(n.next(t))
                } catch (t) {
                    r(t)
                }
            }

            function s(t) {
                try {
                    l(n.throw(t))
                } catch (t) {
                    r(t)
                }
            }

            function l(t) {
                var e;
                t.done ? o(t.value) : (e = t.value, e instanceof i ? e : new i((function(t) {
                    t(e)
                }))).then(a, s)
            }
            l((n = n.apply(t, e || [])).next())
        }))
    }

    function g(t, e) {
        var i, n, o, r, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return r = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
            return this
        }), r;

        function s(s) {
            return function(l) {
                return function(s) {
                    if (i) throw new TypeError("Generator is already executing.");
                    for (; r && (r = 0, s[0] && (a = 0)), a;) try {
                        if (i = 1, n && (o = 2 & s[0] ? n.return : s[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, s[1])).done) return o;
                        switch (n = 0, o && (s = [2 & s[0], o.value]), s[0]) {
                            case 0:
                            case 1:
                                o = s;
                                break;
                            case 4:
                                return a.label++, {
                                    value: s[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = s[1], s = [0];
                                continue;
                            case 7:
                                s = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                                    a.label = s[1];
                                    break
                                }
                                if (6 === s[0] && a.label < o[1]) {
                                    a.label = o[1], o = s;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(s);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        s = e.call(t, a)
                    } catch (t) {
                        s = [6, t], n = 0
                    } finally {
                        i = o = 0
                    }
                    if (5 & s[0]) throw s[1];
                    return {
                        value: s[0] ? s[1] : void 0,
                        done: !0
                    }
                }([s, l])
            }
        }
    }

    function v(t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
            i = e && t[e],
            n = 0;
        if (i) return i.call(t);
        if (t && "number" == typeof t.length) return {
            next: function() {
                return t && n >= t.length && (t = void 0), {
                    value: t && t[n++],
                    done: !t
                }
            }
        };
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function f(t, e) {
        var i = "function" == typeof Symbol && t[Symbol.iterator];
        if (!i) return t;
        var n, o, r = i.call(t),
            a = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(n = r.next()).done;) a.push(n.value)
        } catch (t) {
            o = {
                error: t
            }
        } finally {
            try {
                n && !n.done && (i = r.return) && i.call(r)
            } finally {
                if (o) throw o.error
            }
        }
        return a
    }

    function y(t, e, i) {
        if (i || 2 === arguments.length)
            for (var n, o = 0, r = e.length; o < r; o++) !n && o in e || (n || (n = Array.prototype.slice.call(e, 0, o)), n[o] = e[o]);
        return t.concat(n || Array.prototype.slice.call(e))
    }
    "function" == typeof SuppressedError && SuppressedError, t.LineType = void 0, (n = t.LineType || (t.LineType = {})).Dashed = "dashed", n.Solid = "solid", t.PolygonType = void 0, (o = t.PolygonType || (t.PolygonType = {})).Stroke = "stroke", o.Fill = "fill", o.StrokeFill = "stroke_fill", t.TooltipShowRule = void 0, (r = t.TooltipShowRule || (t.TooltipShowRule = {})).Always = "always", r.FollowCross = "follow_cross", r.None = "none", t.TooltipShowType = void 0, (a = t.TooltipShowType || (t.TooltipShowType = {})).Standard = "standard", a.Rect = "rect", t.TooltipIconPosition = void 0, (s = t.TooltipIconPosition || (t.TooltipIconPosition = {})).Left = "left", s.Middle = "middle", s.Right = "right", t.CandleTooltipRectPosition = void 0, (l = t.CandleTooltipRectPosition || (t.CandleTooltipRectPosition = {})).Fixed = "fixed", l.Pointer = "pointer", t.CandleType = void 0, (c = t.CandleType || (t.CandleType = {})).CandleSolid = "candle_solid", c.CandleStroke = "candle_stroke", c.CandleUpStroke = "candle_up_stroke", c.CandleDownStroke = "candle_down_stroke", c.Ohlc = "ohlc", c.Area = "area", t.YAxisPosition = void 0, (u = t.YAxisPosition || (t.YAxisPosition = {})).Left = "left", u.Right = "right", t.YAxisType = void 0, (h = t.YAxisType || (t.YAxisType = {})).Normal = "normal", h.Percentage = "percentage", h.Log = "log";
    var m = "#F92855",
        _ = "rgba(249, 40, 85, .7)",
        x = "#2DC08E",
        S = "rgba(45, 192, 142, .7)",
        C = "#888888",
        b = "#FFFFFF",
        T = "#1677FF",
        w = "#76808F",
        E = "#DDDDDD";

    function I(t) {
        return "rgba(22, 119, 255, ".concat(t, ")")
    }

    function P() {
        function e() {
            return {
                show: !0,
                size: 1,
                color: "#EDEDED",
                style: t.LineType.Dashed,
                dashedValue: [2, 2]
            }
        }
        return {
            show: !0,
            horizontal: e(),
            vertical: e()
        }
    }

    function D() {
        return {
            show: !0,
            size: "auto",
            axisLine: {
                show: !0,
                color: E,
                size: 1
            },
            tickText: {
                show: !0,
                color: w,
                size: 12,
                family: "Helvetica Neue",
                weight: "normal",
                marginStart: 4,
                marginEnd: 4
            },
            tickLine: {
                show: !0,
                size: 1,
                length: 3,
                color: E
            }
        }
    }

    function M() {
        function e() {
            return {
                show: !0,
                line: {
                    show: !0,
                    style: t.LineType.Dashed,
                    dashedValue: [4, 2],
                    size: 1,
                    color: w
                },
                text: {
                    show: !0,
                    style: t.PolygonType.Fill,
                    color: b,
                    size: 12,
                    family: "Helvetica Neue",
                    weight: "normal",
                    borderStyle: t.LineType.Solid,
                    borderDashedValue: [2, 2],
                    borderSize: 1,
                    borderColor: w,
                    borderRadius: 2,
                    paddingLeft: 4,
                    paddingRight: 4,
                    paddingTop: 4,
                    paddingBottom: 4,
                    backgroundColor: w
                }
            }
        }
        return {
            show: !0,
            horizontal: e(),
            vertical: e()
        }
    }

    function k() {
        var e = I(.35),
            i = I(.25);

        function n() {
            return {
                style: t.PolygonType.Fill,
                color: b,
                size: 12,
                family: "Helvetica Neue",
                weight: "normal",
                borderStyle: t.LineType.Solid,
                borderDashedValue: [2, 2],
                borderSize: 1,
                borderRadius: 2,
                borderColor: T,
                paddingLeft: 4,
                paddingRight: 4,
                paddingTop: 4,
                paddingBottom: 4,
                backgroundColor: T
            }
        }
        return {
            point: {
                color: T,
                borderColor: e,
                borderSize: 1,
                radius: 5,
                activeColor: T,
                activeBorderColor: e,
                activeBorderSize: 3,
                activeRadius: 5
            },
            line: {
                style: t.LineType.Solid,
                smooth: !1,
                color: T,
                size: 1,
                dashedValue: [2, 2]
            },
            rect: {
                style: t.PolygonType.Fill,
                color: i,
                borderColor: T,
                borderSize: 1,
                borderRadius: 0,
                borderStyle: t.LineType.Solid,
                borderDashedValue: [2, 2]
            },
            polygon: {
                style: t.PolygonType.Fill,
                color: T,
                borderColor: T,
                borderSize: 1,
                borderStyle: t.LineType.Solid,
                borderDashedValue: [2, 2]
            },
            circle: {
                style: t.PolygonType.Fill,
                color: i,
                borderColor: T,
                borderSize: 1,
                borderStyle: t.LineType.Solid,
                borderDashedValue: [2, 2]
            },
            arc: {
                style: t.LineType.Solid,
                color: T,
                size: 1,
                dashedValue: [2, 2]
            },
            text: n(),
            rectText: n()
        }
    }

    function A(t, e) {
        if (B(t) || B(e))
            for (var i in e)
                if (Object.prototype.hasOwnProperty.call(e, i)) {
                    var n = t[i],
                        o = e[i];
                    B(o) && B(n) ? A(n, o) : V(e[i]) && (t[i] = F(e[i]))
                }
    }

    function F(t) {
        if (!B(t)) return t;
        var e;
        for (var i in e = L(t) ? [] : {}, t)
            if (Object.prototype.hasOwnProperty.call(t, i)) {
                var n = t[i];
                B(n) ? e[i] = F(n) : e[i] = n
            } return e
    }

    function L(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }

    function R(t) {
        return "function" == typeof t
    }

    function B(t) {
        return "object" == typeof t && V(t)
    }

    function O(t) {
        return "number" == typeof t && !isNaN(t)
    }

    function V(t) {
        return null != t
    }

    function N(t) {
        return "boolean" == typeof t
    }

    function W(t) {
        return "string" == typeof t
    }
    var z, Y, H = /\\(\\)?/g,
        X = RegExp("[^.[\\]]+|\\[(?:([^\"'][^[]*)|([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))", "g");

    function G(t, e, i) {
        if (V(t)) {
            var n = [];
            e.replace(X, (function(t) {
                for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
                var o = t;
                return V(e[1]) ? o = e[2].replace(H, "$1") : V(e[0]) && (o = e[0].trim()), n.push(o), ""
            }));
            for (var o = t, r = 0, a = n.length; V(o) && r < a;) o = null == o ? void 0 : o[n[r++]];
            return V(o) ? o : null != i ? i : "--"
        }
        return null != i ? i : "--"
    }

    function j(t, e, i) {
        var n = {};
        return t.formatToParts(new Date(e)).forEach((function(t) {
            var e = t.type,
                i = t.value;
            switch (e) {
                case "year":
                    n.YYYY = i;
                    break;
                case "month":
                    n.MM = i;
                    break;
                case "day":
                    n.DD = i;
                    break;
                case "hour":
                    n.HH = "24" === i ? "00" : i;
                    break;
                case "minute":
                    n.mm = i;
                    break;
                case "second":
                    n.ss = i
            }
        })), i.replace(/YYYY|MM|DD|HH|mm|ss/g, (function(t) {
            return n[t]
        }))
    }

    function K(t, e) {
        var i = +t;
        return O(i) ? i.toFixed(null != e ? e : 2) : "".concat(t)
    }

    function Z(t) {
        var e = +t;
        if (O(e)) {
            if (e > 1e9) return "".concat(+(e / 1e9).toFixed(3), "B");
            if (e > 1e6) return "".concat(+(e / 1e6).toFixed(3), "M");
            if (e > 1e3) return "".concat(+(e / 1e3).toFixed(3), "K")
        }
        return "".concat(t)
    }

    function U(t, e) {
        var i = "".concat(t);
        if (0 === e.length) return i;
        if (i.includes(".")) {
            var n = i.split(".");
            return "".concat(n[0].replace(/(\d)(?=(\d{3})+$)/g, (function(t) {
                return "".concat(t).concat(e)
            })), ".").concat(n[1])
        }
        return i.replace(/(\d)(?=(\d{3})+$)/g, (function(t) {
            return "".concat(t).concat(e)
        }))
    }

    function q(t, e) {
        var i = "".concat(t);
        if (new RegExp("\\.0{" + e + ",}[1-9][0-9]*$").test(i)) {
            var n = i.split("."),
                o = n[n.length - 1],
                r = o.match(/0*/);
            if (V(r)) {
                var a = r[0].length;
                return n[n.length - 1] = o.replace(/0*/, "0{".concat(a, "}")), n.join(".")
            }
        }
        return i
    }

    function $(t) {
        var e, i, n;
        return null !== (n = null === (i = null === (e = t.ownerDocument) || void 0 === e ? void 0 : e.defaultView) || void 0 === i ? void 0 : i.devicePixelRatio) && void 0 !== n ? n : 1
    }

    function Q(t, e, i) {
        return "".concat(null != e ? e : "normal", " ").concat(null != t ? t : 12, "px ").concat(null != i ? i : "Helvetica Neue")
    }

    function J(t, e, i, n) {
        if (!V(z)) {
            var o = document.createElement("canvas"),
                r = $(o);
            (z = o.getContext("2d")).scale(r, r)
        }
        return z.font = Q(e, i, n), Math.round(z.measureText(t).width)
    }
    t.ActionType = void 0, (Y = t.ActionType || (t.ActionType = {})).OnDataReady = "onDataReady", Y.OnZoom = "onZoom", Y.OnScroll = "onScroll", Y.OnVisibleRangeChange = "onVisibleRangeChange", Y.OnTooltipIconClick = "onTooltipIconClick", Y.OnCrosshairChange = "onCrosshairChange", Y.OnCandleBarClick = "onCandleBarClick", Y.OnPaneDrag = "onPaneDrag";
    var tt, et = function() {
        function t() {
            this._callbacks = []
        }
        return t.prototype.subscribe = function(t) {
            var e;
            (null !== (e = this._callbacks.indexOf(t)) && void 0 !== e ? e : -1) < 0 && this._callbacks.push(t)
        }, t.prototype.unsubscribe = function(t) {
            var e;
            if (R(t)) {
                var i = null !== (e = this._callbacks.indexOf(t)) && void 0 !== e ? e : -1;
                i > -1 && this._callbacks.splice(i, 1)
            } else this._callbacks = []
        }, t.prototype.execute = function(t) {
            this._callbacks.forEach((function(e) {
                e(t)
            }))
        }, t.prototype.isEmpty = function() {
            return 0 === this._callbacks.length
        }, t
    }();

    function it(t, e, i, n, o) {
        var r, a = e.result,
            s = e.figures,
            l = e.styles,
            c = G(l, "circles", n.circles),
            u = c.length,
            h = G(l, "bars", n.bars),
            p = h.length,
            g = G(l, "lines", n.lines),
            v = g.length,
            f = 0,
            y = 0,
            m = 0,
            _ = 0;
        s.forEach((function(s) {
            var l;
            switch (s.type) {
                case "circle":
                    _ = f;
                    var x = c[f % u];
                    r = d(d({}, x), {
                        color: x.noChangeColor
                    }), f++;
                    break;
                case "bar":
                    _ = y;
                    var S = h[y % p];
                    r = d(d({}, S), {
                        color: S.noChangeColor
                    }), y++;
                    break;
                case "line":
                    _ = m, r = g[m % v], m++
            }
            if (V(r)) {
                var C = {
                        prev: {
                            kLineData: t[i - 1],
                            indicatorData: a[i - 1]
                        },
                        current: {
                            kLineData: t[i],
                            indicatorData: a[i]
                        },
                        next: {
                            kLineData: t[i + 1],
                            indicatorData: a[i + 1]
                        }
                    },
                    b = null === (l = s.styles) || void 0 === l ? void 0 : l.call(s, C, e, n);
                o(s, d(d({}, r), b), _)
            }
        }))
    }
    t.IndicatorSeries = void 0, (tt = t.IndicatorSeries || (t.IndicatorSeries = {})).Normal = "normal", tt.Price = "price", tt.Volume = "volume";
    var nt, ot = function() {
        function e(e) {
            this.result = [], this._precisionFlag = !1;
            var i = e.name,
                n = e.shortName,
                o = e.series,
                r = e.calcParams,
                a = e.figures,
                s = e.precision,
                l = e.shouldOhlc,
                c = e.shouldFormatBigNumber,
                u = e.visible,
                h = e.zLevel,
                d = e.minValue,
                p = e.maxValue,
                g = e.styles,
                v = e.extendData,
                f = e.regenerateFigures,
                y = e.createTooltipDataSource,
                m = e.draw;
            this.name = i, this.shortName = null != n ? n : i, this.series = null != o ? o : t.IndicatorSeries.Normal, this.precision = null != s ? s : 4, this.calcParams = null != r ? r : [], this.figures = null != a ? a : [], this.shouldOhlc = null != l && l, this.shouldFormatBigNumber = null != c && c, this.visible = null == u || u, this.zLevel = null != h ? h : 0, this.minValue = null != d ? d : null, this.maxValue = null != p ? p : null, this.styles = F(null != g ? g : {}), this.extendData = v, this.regenerateFigures = null != f ? f : null, this.createTooltipDataSource = null != y ? y : null, this.draw = null != m ? m : null
        }
        return e.prototype.setShortName = function(t) {
            return this.shortName !== t && (this.shortName = t, !0)
        }, e.prototype.setSeries = function(t) {
            return this.series !== t && (this.series = t, !0)
        }, e.prototype.setPrecision = function(t, e) {
            var i = null != e && e,
                n = Math.floor(t);
            return !(!(n !== this.precision && t >= 0) || i && (!i || this._precisionFlag)) && (this.precision = n, i || (this._precisionFlag = !0), !0)
        }, e.prototype.setCalcParams = function(t) {
            var e, i;
            return this.calcParams = t, this.figures = null !== (i = null === (e = this.regenerateFigures) || void 0 === e ? void 0 : e.call(this, t)) && void 0 !== i ? i : this.figures, !0
        }, e.prototype.setShouldOhlc = function(t) {
            return this.shouldOhlc !== t && (this.shouldOhlc = t, !0)
        }, e.prototype.setShouldFormatBigNumber = function(t) {
            return this.shouldFormatBigNumber !== t && (this.shouldFormatBigNumber = t, !0)
        }, e.prototype.setVisible = function(t) {
            return this.visible !== t && (this.visible = t, !0)
        }, e.prototype.setZLevel = function(t) {
            return this.zLevel !== t && (this.zLevel = t, !0)
        }, e.prototype.setStyles = function(t) {
            return A(this.styles, t), !0
        }, e.prototype.setExtendData = function(t) {
            return this.extendData !== t && (this.extendData = t, !0)
        }, e.prototype.setFigures = function(t) {
            return this.figures !== t && (this.figures = t, !0)
        }, e.prototype.setMinValue = function(t) {
            return this.minValue !== t && (this.minValue = t, !0)
        }, e.prototype.setMaxValue = function(t) {
            return this.maxValue !== t && (this.maxValue = t, !0)
        }, e.prototype.setRegenerateFigures = function(t) {
            return this.regenerateFigures !== t && (this.regenerateFigures = t, !0)
        }, e.prototype.setCreateTooltipDataSource = function(t) {
            return this.createTooltipDataSource !== t && (this.createTooltipDataSource = t, !0)
        }, e.prototype.setDraw = function(t) {
            return this.draw !== t && (this.draw = t, !0)
        }, e.prototype.calcIndicator = function(t) {
            return p(this, void 0, void 0, (function() {
                var e;
                return g(this, (function(i) {
                    switch (i.label) {
                        case 0:
                            return i.trys.push([0, 2, , 3]), [4, this.calc(t, this)];
                        case 1:
                            return e = i.sent(), this.result = e, [2, !0];
                        case 2:
                            return i.sent(), [2, !1];
                        case 3:
                            return [2]
                    }
                }))
            }))
        }, e.extend = function(t) {
            return function(e) {
                function n() {
                    return e.call(this, t) || this
                }
                return i(n, e), n.prototype.calc = function(e, i) {
                    return t.calc(e, i)
                }, n
            }(e)
        }, e
    }();
    t.OverlayMode = void 0, (nt = t.OverlayMode || (t.OverlayMode = {})).Normal = "normal", nt.WeakMagnet = "weak_magnet", nt.StrongMagnet = "strong_magnet";
    var rt, at = "overlay_figure_",
        st = Number.MAX_SAFE_INTEGER,
        lt = function() {
            function e(e) {
                this.currentStep = 1, this.points = [], this._prevPressedPoint = null, this._prevPressedPoints = [];
                var i = e.mode,
                    n = e.modeSensitivity,
                    o = e.extendData,
                    r = e.styles,
                    a = e.name,
                    s = e.totalStep,
                    l = e.lock,
                    c = e.visible,
                    u = e.zLevel,
                    h = e.needDefaultPointFigure,
                    d = e.needDefaultXAxisFigure,
                    p = e.needDefaultYAxisFigure,
                    g = e.createPointFigures,
                    v = e.createXAxisFigures,
                    f = e.createYAxisFigures,
                    y = e.performEventPressedMove,
                    m = e.performEventMoveForDrawing,
                    _ = e.onDrawStart,
                    x = e.onDrawing,
                    S = e.onDrawEnd,
                    C = e.onClick,
                    b = e.onDoubleClick,
                    T = e.onRightClick,
                    w = e.onPressedMoveStart,
                    E = e.onPressedMoving,
                    I = e.onPressedMoveEnd,
                    P = e.onMouseEnter,
                    D = e.onMouseLeave,
                    M = e.onRemoved,
                    k = e.onSelected,
                    A = e.onDeselected;
                this.name = a, this.totalStep = !O(s) || s < 2 ? 1 : s, this.lock = null != l && l, this.visible = null == c || c, this.zLevel = null != u ? u : 0, this.needDefaultPointFigure = null != h && h, this.needDefaultXAxisFigure = null != d && d, this.needDefaultYAxisFigure = null != p && p, this.mode = null != i ? i : t.OverlayMode.Normal, this.modeSensitivity = null != n ? n : 8, this.extendData = o, this.styles = F(null != r ? r : {}), this.createPointFigures = null != g ? g : null, this.createXAxisFigures = null != v ? v : null, this.createYAxisFigures = null != f ? f : null, this.performEventPressedMove = null != y ? y : null, this.performEventMoveForDrawing = null != m ? m : null, this.onDrawStart = null != _ ? _ : null, this.onDrawing = null != x ? x : null, this.onDrawEnd = null != S ? S : null, this.onClick = null != C ? C : null, this.onDoubleClick = null != b ? b : null, this.onRightClick = null != T ? T : null, this.onPressedMoveStart = null != w ? w : null, this.onPressedMoving = null != E ? E : null, this.onPressedMoveEnd = null != I ? I : null, this.onMouseEnter = null != P ? P : null, this.onMouseLeave = null != D ? D : null, this.onRemoved = null != M ? M : null, this.onSelected = null != k ? k : null, this.onDeselected = null != A ? A : null
            }
            return e.prototype.setId = function(t) {
                return !W(this.id) && (this.id = t, !0)
            }, e.prototype.setGroupId = function(t) {
                return !W(this.groupId) && (this.groupId = t, !0)
            }, e.prototype.setPaneId = function(t) {
                this.paneId = t
            }, e.prototype.setExtendData = function(t) {
                return t !== this.extendData && (this.extendData = t, !0)
            }, e.prototype.setStyles = function(t) {
                return A(this.styles, t), !0
            }, e.prototype.setPoints = function(t) {
                if (t.length > 0) {
                    var e = void 0;
                    if (this.points = y([], f(t), !1), t.length >= this.totalStep - 1 ? (this.currentStep = -1, e = this.totalStep - 1) : (this.currentStep = t.length + 1, e = t.length), null !== this.performEventMoveForDrawing)
                        for (var i = 0; i < e; i++) this.performEventMoveForDrawing({
                            currentStep: i + 2,
                            mode: this.mode,
                            points: this.points,
                            performPointIndex: i,
                            performPoint: this.points[i]
                        });
                    return -1 === this.currentStep && null !== this.performEventPressedMove && this.performEventPressedMove({
                        currentStep: this.currentStep,
                        mode: this.mode,
                        points: this.points,
                        performPointIndex: this.points.length - 1,
                        performPoint: this.points[this.points.length - 1]
                    }), !0
                }
                return !1
            }, e.prototype.setLock = function(t) {
                return this.lock !== t && (this.lock = t, !0)
            }, e.prototype.setVisible = function(t) {
                return this.visible !== t && (this.visible = t, !0)
            }, e.prototype.setZLevel = function(t) {
                return this.zLevel !== t && (this.zLevel = t, !0)
            }, e.prototype.setMode = function(t) {
                return this.mode !== t && (this.mode = t, !0)
            }, e.prototype.setModeSensitivity = function(t) {
                return this.modeSensitivity !== t && (this.modeSensitivity = t, !0)
            }, e.prototype.setOnDrawStartCallback = function(t) {
                return this.onDrawStart !== t && (this.onDrawStart = t, !0)
            }, e.prototype.setOnDrawingCallback = function(t) {
                return this.onDrawing !== t && (this.onDrawing = t, !0)
            }, e.prototype.setOnDrawEndCallback = function(t) {
                return this.onDrawEnd !== t && (this.onDrawEnd = t, !0)
            }, e.prototype.setOnClickCallback = function(t) {
                return this.onClick !== t && (this.onClick = t, !0)
            }, e.prototype.setOnDoubleClickCallback = function(t) {
                return this.onDoubleClick !== t && (this.onDoubleClick = t, !0)
            }, e.prototype.setOnRightClickCallback = function(t) {
                return this.onRightClick !== t && (this.onRightClick = t, !0)
            }, e.prototype.setOnPressedMoveStartCallback = function(t) {
                return this.onPressedMoveStart !== t && (this.onPressedMoveStart = t, !0)
            }, e.prototype.setOnPressedMovingCallback = function(t) {
                return this.onPressedMoving !== t && (this.onPressedMoving = t, !0)
            }, e.prototype.setOnPressedMoveEndCallback = function(t) {
                return this.onPressedMoveEnd !== t && (this.onPressedMoveEnd = t, !0)
            }, e.prototype.setOnMouseEnterCallback = function(t) {
                return this.onMouseEnter !== t && (this.onMouseEnter = t, !0)
            }, e.prototype.setOnMouseLeaveCallback = function(t) {
                return this.onMouseLeave !== t && (this.onMouseLeave = t, !0)
            }, e.prototype.setOnRemovedCallback = function(t) {
                return this.onRemoved !== t && (this.onRemoved = t, !0)
            }, e.prototype.setOnSelectedCallback = function(t) {
                return this.onSelected !== t && (this.onSelected = t, !0)
            }, e.prototype.setOnDeselectedCallback = function(t) {
                return this.onDeselected !== t && (this.onDeselected = t, !0)
            }, e.prototype.nextStep = function() {
                this.currentStep === this.totalStep - 1 ? this.currentStep = -1 : this.currentStep++
            }, e.prototype.forceComplete = function() {
                this.currentStep = -1
            }, e.prototype.isDrawing = function() {
                return -1 !== this.currentStep
            }, e.prototype.isStart = function() {
                return 1 === this.currentStep
            }, e.prototype.eventMoveForDrawing = function(t) {
                var e, i = this.currentStep - 1,
                    n = {};
                O(t.timestamp) && (n.timestamp = t.timestamp), O(t.dataIndex) && (n.dataIndex = t.dataIndex), O(t.value) && (n.value = t.value), this.points[i] = n, null === (e = this.performEventMoveForDrawing) || void 0 === e || e.call(this, {
                    currentStep: this.currentStep,
                    mode: this.mode,
                    points: this.points,
                    performPointIndex: i,
                    performPoint: n
                })
            }, e.prototype.eventPressedPointMove = function(t, e) {
                var i;
                O(t.dataIndex) && (this.points[e].dataIndex = t.dataIndex, this.points[e].timestamp = t.timestamp), O(t.value) && (this.points[e].value = t.value), null === (i = this.performEventPressedMove) || void 0 === i || i.call(this, {
                    currentStep: this.currentStep,
                    points: this.points,
                    mode: this.mode,
                    performPointIndex: e,
                    performPoint: this.points[e]
                })
            }, e.prototype.startPressedMove = function(t) {
                this._prevPressedPoint = d({}, t), this._prevPressedPoints = F(this.points)
            }, e.prototype.eventPressedOtherMove = function(t, e) {
                var i, n;
                null !== this._prevPressedPoint && (O(t.dataIndex) && O(this._prevPressedPoint.dataIndex) && (i = t.dataIndex - this._prevPressedPoint.dataIndex), O(t.value) && O(this._prevPressedPoint.value) && (n = t.value - this._prevPressedPoint.value), this.points = this._prevPressedPoints.map((function(t) {
                    var o;
                    O(t.timestamp) && (t.dataIndex = e.timestampToDataIndex(t.timestamp));
                    var r = d({}, t);
                    return O(i) && O(t.dataIndex) && (r.dataIndex = t.dataIndex + i, r.timestamp = null !== (o = e.dataIndexToTimestamp(r.dataIndex)) && void 0 !== o ? o : void 0), O(n) && O(t.value) && (r.value = t.value + n), r
                })))
            }, e.extend = function(t) {
                return function(e) {
                    function n() {
                        return e.call(this, t) || this
                    }
                    return i(n, e), n
                }(e)
            }, e
        }();
    t.FormatDateType = void 0, (rt = t.FormatDateType || (t.FormatDateType = {}))[rt.Tooltip = 0] = "Tooltip", rt[rt.Crosshair = 1] = "Crosshair", rt[rt.XAxis = 2] = "XAxis";

    function ct(t) {
        return R(window.requestAnimationFrame) ? window.requestAnimationFrame(t) : window.setTimeout(t, 20)
    }

    function ut(t) {
        R(window.cancelAnimationFrame) ? window.cancelAnimationFrame(t) : window.clearTimeout(t)
    }
    var ht, dt = function() {
            function t(t) {
                this._options = {
                    duration: 500,
                    iterationCount: 1
                }, this._currentIterationCount = 0, this._running = !1, this._time = 0, A(this._options, t)
            }
            return t.prototype._loop = function() {
                var t = this;
                this._running = !0;
                var e = function() {
                    var i;
                    if (t._running) {
                        var n = (new Date).getTime() - t._time;
                        n < t._options.duration ? (null === (i = t._doFrameCallback) || void 0 === i || i.call(t, n), ct(e)) : (t.stop(), t._currentIterationCount++, t._currentIterationCount < t._options.iterationCount && t.start())
                    }
                };
                ct(e)
            }, t.prototype.doFrame = function(t) {
                return this._doFrameCallback = t, this
            }, t.prototype.setDuration = function(t) {
                return this._options.duration = t, this
            }, t.prototype.setIterationCount = function(t) {
                return this._options.iterationCount = t, this
            }, t.prototype.start = function() {
                this._running || (this._time = (new Date).getTime(), this._loop())
            }, t.prototype.stop = function() {
                var t;
                this._running && (null === (t = this._doFrameCallback) || void 0 === t || t.call(this, this._options.duration)), this._running = !1
            }, t
        }(),
        pt = 1,
        gt = (new Date).getTime();

    function vt(t) {
        var e = (new Date).getTime();
        return e === gt ? ++pt : pt = 1, gt = e, "".concat(null != t ? t : "").concat(e, "_").concat(pt)
    }

    function ft(t, e) {
        var i, n = document.createElement(t),
            o = null != e ? e : {};
        for (var r in o) n.style[r] = null !== (i = o[r]) && void 0 !== i ? i : "";
        return n
    }

    function yt(t, e, i) {
        var n = 0,
            o = 0;
        for (o = t.length - 1; n !== o;) {
            var r = Math.floor((o + n) / 2),
                a = o - n,
                s = t[r][e];
            if (i === t[n][e]) return n;
            if (i === t[o][e]) return o;
            if (i === s) return r;
            if (i > s ? n = r : o = r, a <= 2) break
        }
        return n
    }

    function mt(t, e) {
        return null == e && (e = 10), e = Math.min(Math.max(0, e), 20), +(+t).toFixed(e)
    }

    function _t(t, e, i) {
        var n = [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
        return t.forEach((function(t) {
            var o, r;
            n[0] = Math.max(null !== (o = t[e]) && void 0 !== o ? o : t, n[0]), n[1] = Math.min(null !== (r = t[i]) && void 0 !== r ? r : t, n[1])
        })), n
    }

    function xt(t) {
        return Math.log(t) / Math.log(10)
    }

    function St(t) {
        return Math.pow(10, t)
    }! function(t) {
        t.Init = "init", t.Forward = "forward", t.Backward = "backward"
    }(ht || (ht = {}));
    var Ct = 1,
        bt = 50,
        Tt = function() {
            function e(t) {
                this._dateTimeFormat = this._buildDateTimeFormat(), this._zoomEnabled = !0, this._scrollEnabled = !0, this._totalBarSpace = 0, this._barSpace = 8, this._offsetRightDistance = 80, this._startLastBarRightSideDiffBarCount = 0, this._scrollLimitRole = 0, this._minVisibleBarCount = {
                    left: 2,
                    right: 2
                }, this._maxOffsetDistance = {
                    left: 50,
                    right: 50
                }, this._visibleRange = {
                    from: 0,
                    to: 0,
                    realFrom: 0,
                    realTo: 0
                }, this._chartStore = t, this._gapBarSpace = this._calcGapBarSpace(), this._lastBarRightSideDiffBarCount = this._offsetRightDistance / this._barSpace
            }
            return e.prototype._calcGapBarSpace = function() {
                var t;
                return this._barSpace > 3 ? t = Math.floor(.88 * this._barSpace) : (t = Math.floor(this._barSpace)) === this._barSpace && t--, t % 2 == 0 && t--, t = Math.max(1, t)
            }, e.prototype.adjustVisibleRange = function() {
                var e, i, n, o, r = this._chartStore.getDataList(),
                    a = r.length,
                    s = this._totalBarSpace / this._barSpace;
                1 === this._scrollLimitRole ? (n = (this._totalBarSpace - this._maxOffsetDistance.right) / this._barSpace, o = (this._totalBarSpace - this._maxOffsetDistance.left) / this._barSpace) : (n = this._minVisibleBarCount.left, o = this._minVisibleBarCount.right), n = Math.max(0, n), o = Math.max(0, o);
                var l = s - Math.min(n, a);
                this._lastBarRightSideDiffBarCount > l && (this._lastBarRightSideDiffBarCount = l);
                var c = -a + Math.min(o, a);
                this._lastBarRightSideDiffBarCount < c && (this._lastBarRightSideDiffBarCount = c);
                var u = Math.round(this._lastBarRightSideDiffBarCount + a + .5),
                    h = u;
                u > a && (u = a);
                var d = Math.round(u - s) - 1;
                d < 0 && (d = 0);
                var p = this._lastBarRightSideDiffBarCount > 0 ? Math.round(a + this._lastBarRightSideDiffBarCount - s) - 1 : d;
                if (this._visibleRange = {
                        from: d,
                        to: u,
                        realFrom: p,
                        realTo: h
                    }, this._chartStore.getActionStore().execute(t.ActionType.OnVisibleRangeChange, this._visibleRange), this._chartStore.adjustVisibleDataList(), 0 === d) {
                    var g = r[0];
                    this._chartStore.executeLoadMoreCallback(null !== (e = null == g ? void 0 : g.timestamp) && void 0 !== e ? e : null), this._chartStore.executeLoadDataCallback({
                        type: ht.Forward,
                        data: null != g ? g : null
                    })
                }
                u === a && this._chartStore.executeLoadDataCallback({
                    type: ht.Backward,
                    data: null !== (i = r[a - 1]) && void 0 !== i ? i : null
                })
            }, e.prototype.getDateTimeFormat = function() {
                return this._dateTimeFormat
            }, e.prototype._buildDateTimeFormat = function(t) {
                var e = {
                    hour12: !1,
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit"
                };
                W(t) && (e.timeZone = t);
                var i = null;
                try {
                    i = new Intl.DateTimeFormat("en", e)
                } catch (t) {}
                return i
            }, e.prototype.setTimezone = function(t) {
                var e = this._buildDateTimeFormat(t);
                null !== e && (this._dateTimeFormat = e)
            }, e.prototype.getTimezone = function() {
                return this._dateTimeFormat.resolvedOptions().timeZone
            }, e.prototype.getBarSpace = function() {
                return {
                    bar: this._barSpace,
                    halfBar: this._barSpace / 2,
                    gapBar: this._gapBarSpace,
                    halfGapBar: Math.floor(this._gapBarSpace / 2)
                }
            }, e.prototype.setBarSpace = function(t, e) {
                t < Ct || t > bt || this._barSpace === t || (this._barSpace = t, this._gapBarSpace = this._calcGapBarSpace(), null == e || e(), this.adjustVisibleRange(), this._chartStore.getTooltipStore().recalculateCrosshair(!0), this._chartStore.getChart().adjustPaneViewport(!1, !0, !0, !0))
            }, e.prototype.setTotalBarSpace = function(t) {
                return this._totalBarSpace !== t && (this._totalBarSpace = t, this.adjustVisibleRange(), this._chartStore.getTooltipStore().recalculateCrosshair(!0)), this
            }, e.prototype.setOffsetRightDistance = function(t, e) {
                return this._offsetRightDistance = 1 === this._scrollLimitRole ? Math.min(this._maxOffsetDistance.right, t) : t, this._lastBarRightSideDiffBarCount = this._offsetRightDistance / this._barSpace, null != e && e && (this.adjustVisibleRange(), this._chartStore.getTooltipStore().recalculateCrosshair(!0), this._chartStore.getChart().adjustPaneViewport(!1, !0, !0, !0)), this
            }, e.prototype.resetOffsetRightDistance = function() {
                this.setOffsetRightDistance(this._offsetRightDistance)
            }, e.prototype.getInitialOffsetRightDistance = function() {
                return this._offsetRightDistance
            }, e.prototype.getOffsetRightDistance = function() {
                return Math.max(0, this._lastBarRightSideDiffBarCount * this._barSpace)
            }, e.prototype.getLastBarRightSideDiffBarCount = function() {
                return this._lastBarRightSideDiffBarCount
            }, e.prototype.setLastBarRightSideDiffBarCount = function(t) {
                return this._lastBarRightSideDiffBarCount = t, this
            }, e.prototype.setMaxOffsetLeftDistance = function(t) {
                return this._scrollLimitRole = 1, this._maxOffsetDistance.left = t, this
            }, e.prototype.setMaxOffsetRightDistance = function(t) {
                return this._scrollLimitRole = 1, this._maxOffsetDistance.right = t, this
            }, e.prototype.setLeftMinVisibleBarCount = function(t) {
                return this._scrollLimitRole = 0, this._minVisibleBarCount.left = t, this
            }, e.prototype.setRightMinVisibleBarCount = function(t) {
                return this._scrollLimitRole = 0, this._minVisibleBarCount.right = t, this
            }, e.prototype.getVisibleRange = function() {
                return this._visibleRange
            }, e.prototype.startScroll = function() {
                this._startLastBarRightSideDiffBarCount = this._lastBarRightSideDiffBarCount
            }, e.prototype.scroll = function(e) {
                if (this._scrollEnabled) {
                    var i = e / this._barSpace,
                        n = this._lastBarRightSideDiffBarCount * this._barSpace;
                    this._lastBarRightSideDiffBarCount = this._startLastBarRightSideDiffBarCount - i, this.adjustVisibleRange(), this._chartStore.getTooltipStore().recalculateCrosshair(!0), this._chartStore.getChart().adjustPaneViewport(!1, !0, !0, !0);
                    var o = Math.round(n - this._lastBarRightSideDiffBarCount * this._barSpace);
                    0 !== o && this._chartStore.getActionStore().execute(t.ActionType.OnScroll, {
                        distance: o
                    })
                }
            }, e.prototype.getDataByDataIndex = function(t) {
                var e;
                return null !== (e = this._chartStore.getDataList()[t]) && void 0 !== e ? e : null
            }, e.prototype.coordinateToFloatIndex = function(t) {
                var e = this._chartStore.getDataList().length,
                    i = (this._totalBarSpace - t) / this._barSpace,
                    n = e + this._lastBarRightSideDiffBarCount - i;
                return Math.round(1e6 * n) / 1e6
            }, e.prototype.dataIndexToTimestamp = function(t) {
                var e, i = this.getDataByDataIndex(t);
                return null !== (e = null == i ? void 0 : i.timestamp) && void 0 !== e ? e : null
            }, e.prototype.timestampToDataIndex = function(t) {
                var e = this._chartStore.getDataList();
                return 0 === e.length ? 0 : yt(e, "timestamp", t)
            }, e.prototype.dataIndexToCoordinate = function(t) {
                var e = this._chartStore.getDataList().length + this._lastBarRightSideDiffBarCount - t;
                return Math.floor(this._totalBarSpace - (e - .5) * this._barSpace)
            }, e.prototype.coordinateToDataIndex = function(t) {
                return Math.ceil(this.coordinateToFloatIndex(t)) - 1
            }, e.prototype.zoom = function(e, i) {
                var n, o = this;
                if (this._zoomEnabled) {
                    var r = null != i ? i : null;
                    if (!O(null == r ? void 0 : r.x)) {
                        var a = this._chartStore.getTooltipStore().getCrosshair();
                        r = {
                            x: null !== (n = null == a ? void 0 : a.x) && void 0 !== n ? n : this._totalBarSpace / 2
                        }
                    }
                    var s = r.x,
                        l = this.coordinateToFloatIndex(s),
                        c = this._barSpace,
                        u = this._barSpace + e * (this._barSpace / 10);
                    this.setBarSpace(u, (function() {
                        o._lastBarRightSideDiffBarCount += l - o.coordinateToFloatIndex(s)
                    }));
                    var h = this._barSpace / c;
                    1 !== h && this._chartStore.getActionStore().execute(t.ActionType.OnZoom, {
                        scale: h
                    })
                }
            }, e.prototype.setZoomEnabled = function(t) {
                return this._zoomEnabled = t, this
            }, e.prototype.getZoomEnabled = function() {
                return this._zoomEnabled
            }, e.prototype.setScrollEnabled = function(t) {
                return this._scrollEnabled = t, this
            }, e.prototype.getScrollEnabled = function() {
                return this._scrollEnabled
            }, e.prototype.clear = function() {
                this._visibleRange = {
                    from: 0,
                    to: 0,
                    realFrom: 0,
                    realTo: 0
                }
            }, e
        }(),
        wt = {
            name: "AVP",
            shortName: "AVP",
            series: t.IndicatorSeries.Price,
            precision: 2,
            figures: [{
                key: "avp",
                title: "AVP: ",
                type: "line"
            }],
            calc: function(t) {
                var e = 0,
                    i = 0;
                return t.map((function(t) {
                    var n, o, r = {},
                        a = null !== (n = null == t ? void 0 : t.turnover) && void 0 !== n ? n : 0,
                        s = null !== (o = null == t ? void 0 : t.volume) && void 0 !== o ? o : 0;
                    return e += a, 0 !== (i += s) && (r.avp = e / i), r
                }))
            }
        },
        Et = {
            name: "AO",
            shortName: "AO",
            calcParams: [5, 34],
            figures: [{
                key: "ao",
                title: "AO: ",
                type: "bar",
                baseValue: 0,
                styles: function(e, i, n) {
                    var o, r, a, s, l, c = e.prev,
                        u = e.current,
                        h = null !== (r = null === (o = c.indicatorData) || void 0 === o ? void 0 : o.ao) && void 0 !== r ? r : Number.MIN_SAFE_INTEGER,
                        d = null !== (s = null === (a = u.indicatorData) || void 0 === a ? void 0 : a.ao) && void 0 !== s ? s : Number.MIN_SAFE_INTEGER;
                    return {
                        color: l = d > h ? G(i.styles, "bars[0].upColor", n.bars[0].upColor) : G(i.styles, "bars[0].downColor", n.bars[0].downColor),
                        style: d > h ? t.PolygonType.Stroke : t.PolygonType.Fill,
                        borderColor: l
                    }
                }
            }],
            calc: function(t, e) {
                var i = e.calcParams,
                    n = Math.max(i[0], i[1]),
                    o = 0,
                    r = 0,
                    a = 0,
                    s = 0;
                return t.map((function(e, l) {
                    var c = {},
                        u = (e.low + e.high) / 2;
                    if (o += u, r += u, l >= i[0] - 1) {
                        a = o / i[0];
                        var h = t[l - (i[0] - 1)];
                        o -= (h.low + h.high) / 2
                    }
                    if (l >= i[1] - 1) {
                        s = r / i[1];
                        h = t[l - (i[1] - 1)];
                        r -= (h.low + h.high) / 2
                    }
                    return l >= n - 1 && (c.ao = a - s), c
                }))
            }
        };
    var It = {
            name: "BOLL",
            shortName: "BOLL",
            series: t.IndicatorSeries.Price,
            calcParams: [20, 2],
            precision: 2,
            shouldOhlc: !0,
            figures: [{
                key: "up",
                title: "UP: ",
                type: "line"
            }, {
                key: "mid",
                title: "MID: ",
                type: "line"
            }, {
                key: "dn",
                title: "DN: ",
                type: "line"
            }],
            calc: function(t, e) {
                var i = e.calcParams,
                    n = i[0] - 1,
                    o = 0;
                return t.map((function(e, r) {
                    var a = e.close,
                        s = {};
                    if (o += a, r >= n) {
                        s.mid = o / i[0];
                        var l = function(t, e) {
                            var i = t.length,
                                n = 0;
                            return t.forEach((function(t) {
                                var i = t.close - e;
                                n += i * i
                            })), n = Math.abs(n), Math.sqrt(n / i)
                        }(t.slice(r - n, r + 1), s.mid);
                        s.up = s.mid + i[1] * l, s.dn = s.mid - i[1] * l, o -= t[r - n].close
                    }
                    return s
                }))
            }
        },
        Pt = {
            name: "BBI",
            shortName: "BBI",
            series: t.IndicatorSeries.Price,
            precision: 2,
            calcParams: [3, 6, 12, 24],
            shouldOhlc: !0,
            figures: [{
                key: "bbi",
                title: "BBI: ",
                type: "line"
            }],
            calc: function(t, e) {
                var i = e.calcParams,
                    n = Math.max.apply(Math, y([], f(i), !1)),
                    o = [],
                    r = [];
                return t.map((function(e, a) {
                    var s = {},
                        l = e.close;
                    if (i.forEach((function(e, i) {
                            var n;
                            o[i] = (null !== (n = o[i]) && void 0 !== n ? n : 0) + l, a >= e - 1 && (r[i] = o[i] / e, o[i] -= t[a - (e - 1)].close)
                        })), a >= n - 1) {
                        var c = 0;
                        r.forEach((function(t) {
                            c += t
                        })), s.bbi = c / 4
                    }
                    return s
                }))
            }
        },
        Dt = {
            name: "CCI",
            shortName: "CCI",
            calcParams: [20],
            figures: [{
                key: "cci",
                title: "CCI: ",
                type: "line"
            }],
            calc: function(t, e) {
                var i = e.calcParams,
                    n = i[0] - 1,
                    o = 0,
                    r = [];
                return t.map((function(e, a) {
                    var s = {},
                        l = (e.high + e.low + e.close) / 3;
                    if (o += l, r.push(l), a >= n) {
                        var c = o / i[0],
                            u = r.slice(a - n, a + 1),
                            h = 0;
                        u.forEach((function(t) {
                            h += Math.abs(t - c)
                        }));
                        var d = h / i[0];
                        s.cci = 0 !== d ? (l - c) / d / .015 : 0;
                        var p = (t[a - n].high + t[a - n].low + t[a - n].close) / 3;
                        o -= p
                    }
                    return s
                }))
            }
        },
        Mt = {
            name: "CR",
            shortName: "CR",
            calcParams: [26, 10, 20, 40, 60],
            figures: [{
                key: "cr",
                title: "CR: ",
                type: "line"
            }, {
                key: "ma1",
                title: "MA1: ",
                type: "line"
            }, {
                key: "ma2",
                title: "MA2: ",
                type: "line"
            }, {
                key: "ma3",
                title: "MA3: ",
                type: "line"
            }, {
                key: "ma4",
                title: "MA4: ",
                type: "line"
            }],
            calc: function(t, e) {
                var i = e.calcParams,
                    n = Math.ceil(i[1] / 2.5 + 1),
                    o = Math.ceil(i[2] / 2.5 + 1),
                    r = Math.ceil(i[3] / 2.5 + 1),
                    a = Math.ceil(i[4] / 2.5 + 1),
                    s = 0,
                    l = [],
                    c = 0,
                    u = [],
                    h = 0,
                    d = [],
                    p = 0,
                    g = [],
                    v = [];
                return t.forEach((function(e, f) {
                    var y, m, _, x, S, C = {},
                        b = null !== (y = t[f - 1]) && void 0 !== y ? y : e,
                        T = (b.high + b.close + b.low + b.open) / 4,
                        w = Math.max(0, e.high - T),
                        E = Math.max(0, T - e.low);
                    f >= i[0] - 1 && (C.cr = 0 !== E ? w / E * 100 : 0, s += C.cr, c += C.cr, h += C.cr, p += C.cr, f >= i[0] + i[1] - 2 && (l.push(s / i[1]), f >= i[0] + i[1] + n - 3 && (C.ma1 = l[l.length - 1 - n]), s -= null !== (m = v[f - (i[1] - 1)].cr) && void 0 !== m ? m : 0), f >= i[0] + i[2] - 2 && (u.push(c / i[2]), f >= i[0] + i[2] + o - 3 && (C.ma2 = u[u.length - 1 - o]), c -= null !== (_ = v[f - (i[2] - 1)].cr) && void 0 !== _ ? _ : 0), f >= i[0] + i[3] - 2 && (d.push(h / i[3]), f >= i[0] + i[3] + r - 3 && (C.ma3 = d[d.length - 1 - r]), h -= null !== (x = v[f - (i[3] - 1)].cr) && void 0 !== x ? x : 0), f >= i[0] + i[4] - 2 && (g.push(p / i[4]), f >= i[0] + i[4] + a - 3 && (C.ma4 = g[g.length - 1 - a]), p -= null !== (S = v[f - (i[4] - 1)].cr) && void 0 !== S ? S : 0)), v.push(C)
                })), v
            }
        },
        kt = {
            name: "DMA",
            shortName: "DMA",
            calcParams: [10, 50, 10],
            figures: [{
                key: "dma",
                title: "DMA: ",
                type: "line"
            }, {
                key: "ama",
                title: "AMA: ",
                type: "line"
            }],
            calc: function(t, e) {
                var i = e.calcParams,
                    n = Math.max(i[0], i[1]),
                    o = 0,
                    r = 0,
                    a = 0,
                    s = [];
                return t.forEach((function(e, l) {
                    var c, u = {},
                        h = e.close;
                    o += h, r += h;
                    var d = 0,
                        p = 0;
                    if (l >= i[0] - 1 && (d = o / i[0], o -= t[l - (i[0] - 1)].close), l >= i[1] - 1 && (p = r / i[1], r -= t[l - (i[1] - 1)].close), l >= n - 1) {
                        var g = d - p;
                        u.dma = g, a += g, l >= n + i[2] - 2 && (u.ama = a / i[2], a -= null !== (c = s[l - (i[2] - 1)].dma) && void 0 !== c ? c : 0)
                    }
                    s.push(u)
                })), s
            }
        },
        At = {
            name: "DMI",
            shortName: "DMI",
            calcParams: [14, 6],
            figures: [{
                key: "pdi",
                title: "PDI: ",
                type: "line"
            }, {
                key: "mdi",
                title: "MDI: ",
                type: "line"
            }, {
                key: "adx",
                title: "ADX: ",
                type: "line"
            }, {
                key: "adxr",
                title: "ADXR: ",
                type: "line"
            }],
            calc: function(t, e) {
                var i = e.calcParams,
                    n = 0,
                    o = 0,
                    r = 0,
                    a = 0,
                    s = 0,
                    l = 0,
                    c = 0,
                    u = 0,
                    h = [];
                return t.forEach((function(e, d) {
                    var p, g, v = {},
                        f = null !== (p = t[d - 1]) && void 0 !== p ? p : e,
                        y = f.close,
                        m = e.high,
                        _ = e.low,
                        x = m - _,
                        S = Math.abs(m - y),
                        C = Math.abs(y - _),
                        b = m - f.high,
                        T = f.low - _,
                        w = Math.max(Math.max(x, S), C),
                        E = b > 0 && b > T ? b : 0,
                        I = T > 0 && T > b ? T : 0;
                    if (n += w, o += E, r += I, d >= i[0] - 1) {
                        d > i[0] - 1 ? (a = a - a / i[0] + w, s = s - s / i[0] + E, l = l - l / i[0] + I) : (a = n, s = o, l = r);
                        var P = 0,
                            D = 0;
                        0 !== a && (P = 100 * s / a, D = 100 * l / a), v.pdi = P, v.mdi = D;
                        var M = 0;
                        D + P !== 0 && (M = Math.abs(D - P) / (D + P) * 100), c += M, d >= 2 * i[0] - 2 && (u = d > 2 * i[0] - 2 ? (u * (i[0] - 1) + M) / i[0] : c / i[0], v.adx = u, d >= 2 * i[0] + i[1] - 3 && (v.adxr = ((null !== (g = h[d - (i[1] - 1)].adx) && void 0 !== g ? g : 0) + u) / 2))
                    }
                    h.push(v)
                })), h
            }
        },
        Ft = {
            name: "EMA",
            shortName: "EMA",
            series: t.IndicatorSeries.Price,
            calcParams: [6, 12, 20],
            precision: 2,
            shouldOhlc: !0,
            figures: [{
                key: "ema1",
                title: "EMA6: ",
                type: "line"
            }, {
                key: "ema2",
                title: "EMA12: ",
                type: "line"
            }, {
                key: "ema3",
                title: "EMA20: ",
                type: "line"
            }],
            regenerateFigures: function(t) {
                return t.map((function(t, e) {
                    return {
                        key: "ema".concat(e + 1),
                        title: "EMA".concat(t, ": "),
                        type: "line"
                    }
                }))
            },
            calc: function(t, e) {
                var i = e.calcParams,
                    n = e.figures,
                    o = 0,
                    r = [];
                return t.map((function(t, e) {
                    var a = {},
                        s = t.close;
                    return o += s, i.forEach((function(t, i) {
                        e >= t - 1 && (r[i] = e > t - 1 ? (2 * s + (t - 1) * r[i]) / (t + 1) : o / t, a[n[i].key] = r[i])
                    })), a
                }))
            }
        },
        Lt = {
            name: "MA",
            shortName: "MA",
            series: t.IndicatorSeries.Price,
            calcParams: [5, 10, 30, 60],
            precision: 2,
            shouldOhlc: !0,
            figures: [{
                key: "ma5",
                title: "MA5: ",
                type: "line"
            }, {
                key: "ma10",
                title: "MA10: ",
                type: "line"
            }, {
                key: "ma30",
                title: "MA30: ",
                type: "line"
            }, {
                key: "ma60",
                title: "MA60: ",
                type: "line"
            }],
            regenerateFigures: function(t) {
                return t.map((function(t, e) {
                    return {
                        key: "ma".concat(e + 1),
                        title: "MA".concat(t, ": "),
                        type: "line"
                    }
                }))
            },
            calc: function(t, e) {
                var i = e.calcParams,
                    n = e.figures,
                    o = [];
                return t.map((function(e, r) {
                    var a = {},
                        s = e.close;
                    return i.forEach((function(e, i) {
                        var l;
                        o[i] = (null !== (l = o[i]) && void 0 !== l ? l : 0) + s, r >= e - 1 && (a[n[i].key] = o[i] / e, o[i] -= t[r - (e - 1)].close)
                    })), a
                }))
            }
        },
        Rt = {
            name: "MACD",
            shortName: "MACD",
            calcParams: [12, 26, 9],
            figures: [{
                key: "dif",
                title: "DIF: ",
                type: "line"
            }, {
                key: "dea",
                title: "DEA: ",
                type: "line"
            }, {
                key: "macd",
                title: "MACD: ",
                type: "bar",
                baseValue: 0,
                styles: function(e, i, n) {
                    var o, r, a, s, l, c = e.prev,
                        u = e.current,
                        h = null !== (r = null === (o = c.indicatorData) || void 0 === o ? void 0 : o.macd) && void 0 !== r ? r : Number.MIN_SAFE_INTEGER,
                        d = null !== (s = null === (a = u.indicatorData) || void 0 === a ? void 0 : a.macd) && void 0 !== s ? s : Number.MIN_SAFE_INTEGER;
                    return l = d > 0 ? G(i.styles, "bars[0].upColor", n.bars[0].upColor) : d < 0 ? G(i.styles, "bars[0].downColor", n.bars[0].downColor) : G(i.styles, "bars[0].noChangeColor", n.bars[0].noChangeColor), {
                        style: h < d ? t.PolygonType.Stroke : t.PolygonType.Fill,
                        color: l,
                        borderColor: l
                    }
                }
            }],
            calc: function(t, e) {
                var i, n, o = e.calcParams,
                    r = 0,
                    a = 0,
                    s = 0,
                    l = 0,
                    c = Math.max(o[0], o[1]);
                return t.map((function(t, e) {
                    var u = {},
                        h = t.close;
                    return r += h, e >= o[0] - 1 && (i = e > o[0] - 1 ? (2 * h + (o[0] - 1) * i) / (o[0] + 1) : r / o[0]), e >= o[1] - 1 && (n = e > o[1] - 1 ? (2 * h + (o[1] - 1) * n) / (o[1] + 1) : r / o[1]), e >= c - 1 && (a = i - n, u.dif = a, s += a, e >= c + o[2] - 2 && (l = e > c + o[2] - 2 ? (2 * a + l * (o[2] - 1)) / (o[2] + 1) : s / o[2], u.macd = 2 * (a - l), u.dea = l)), u
                }))
            }
        },
        Bt = {
            name: "RSI",
            shortName: "RSI",
            calcParams: [6, 12, 24],
            figures: [{
                key: "rsi1",
                title: "RSI1: ",
                type: "line"
            }, {
                key: "rsi2",
                title: "RSI2: ",
                type: "line"
            }, {
                key: "rsi3",
                title: "RSI3: ",
                type: "line"
            }],
            regenerateFigures: function(t) {
                return t.map((function(t, e) {
                    var i = e + 1;
                    return {
                        key: "rsi".concat(i),
                        title: "RSI".concat(i, ": "),
                        type: "line"
                    }
                }))
            },
            calc: function(t, e) {
                var i = e.calcParams,
                    n = e.figures,
                    o = [],
                    r = [];
                return t.map((function(e, a) {
                    var s, l = {},
                        c = (null !== (s = t[a - 1]) && void 0 !== s ? s : e).close,
                        u = e.close - c;
                    return i.forEach((function(e, i) {
                        var s, c, h;
                        if (u > 0 ? o[i] = (null !== (s = o[i]) && void 0 !== s ? s : 0) + u : r[i] = (null !== (c = r[i]) && void 0 !== c ? c : 0) + Math.abs(u), a >= e - 1) {
                            0 !== r[i] ? l[n[i].key] = 100 - 100 / (1 + o[i] / r[i]) : l[n[i].key] = 0;
                            var d = t[a - (e - 1)],
                                p = null !== (h = t[a - e]) && void 0 !== h ? h : d,
                                g = d.close - p.close;
                            g > 0 ? o[i] -= g : r[i] -= Math.abs(g)
                        }
                    })), l
                }))
            }
        },
        Ot = {
            name: "SMA",
            shortName: "SMA",
            series: t.IndicatorSeries.Price,
            calcParams: [12, 2],
            precision: 2,
            figures: [{
                key: "sma",
                title: "SMA: ",
                type: "line"
            }],
            shouldOhlc: !0,
            calc: function(t, e) {
                var i = e.calcParams,
                    n = 0,
                    o = 0;
                return t.map((function(t, e) {
                    var r = {},
                        a = t.close;
                    return n += a, e >= i[0] - 1 && (o = e > i[0] - 1 ? (a * i[1] + o * (i[0] - i[1] + 1)) / (i[0] + 1) : n / i[0], r.sma = o), r
                }))
            }
        },
        Vt = {
            name: "KDJ",
            shortName: "KDJ",
            calcParams: [9, 3, 3],
            figures: [{
                key: "k",
                title: "K: ",
                type: "line"
            }, {
                key: "d",
                title: "D: ",
                type: "line"
            }, {
                key: "j",
                title: "J: ",
                type: "line"
            }],
            calc: function(t, e) {
                var i = e.calcParams,
                    n = [];
                return t.forEach((function(e, o) {
                    var r, a, s, l, c = {},
                        u = e.close;
                    if (o >= i[0] - 1) {
                        var h = _t(t.slice(o - (i[0] - 1), o + 1), "high", "low"),
                            d = h[0],
                            p = h[1],
                            g = d - p,
                            v = (u - p) / (0 === g ? 1 : g) * 100;
                        c.k = ((i[1] - 1) * (null !== (a = null === (r = n[o - 1]) || void 0 === r ? void 0 : r.k) && void 0 !== a ? a : 50) + v) / i[1], c.d = ((i[2] - 1) * (null !== (l = null === (s = n[o - 1]) || void 0 === s ? void 0 : s.d) && void 0 !== l ? l : 50) + c.k) / i[2], c.j = 3 * c.k - 2 * c.d
                    }
                    n.push(c)
                })), n
            }
        },
        Nt = {
            name: "SAR",
            shortName: "SAR",
            series: t.IndicatorSeries.Price,
            calcParams: [2, 2, 20],
            precision: 2,
            shouldOhlc: !0,
            figures: [{
                key: "sar",
                title: "SAR: ",
                type: "circle",
                styles: function(t, e, i) {
                    var n, o, r = t.current,
                        a = null !== (o = null === (n = r.indicatorData) || void 0 === n ? void 0 : n.sar) && void 0 !== o ? o : Number.MIN_SAFE_INTEGER,
                        s = r.kLineData;
                    return {
                        color: a < ((null == s ? void 0 : s.high) + (null == s ? void 0 : s.low)) / 2 ? G(e.styles, "circles[0].upColor", i.circles[0].upColor) : G(e.styles, "circles[0].downColor", i.circles[0].downColor)
                    }
                }
            }],
            calc: function(t, e) {
                var i = e.calcParams,
                    n = i[0] / 100,
                    o = i[1] / 100,
                    r = i[2] / 100,
                    a = n,
                    s = -100,
                    l = !1,
                    c = 0;
                return t.map((function(e, i) {
                    var u = c,
                        h = e.high,
                        d = e.low;
                    if (l) {
                        (-100 === s || s < h) && (s = h, a = Math.min(a + o, r)), c = u + a * (s - u);
                        var p = Math.min(t[Math.max(1, i) - 1].low, d);
                        c > e.low ? (c = s, a = n, s = -100, l = !l) : c > p && (c = p)
                    } else {
                        (-100 === s || s > d) && (s = d, a = Math.min(a + o, r)), c = u + a * (s - u);
                        var g = Math.max(t[Math.max(1, i) - 1].high, h);
                        c < e.high ? (c = s, a = 0, s = -100, l = !l) : c < g && (c = g)
                    }
                    return {
                        sar: c
                    }
                }))
            }
        };

    function Wt() {
        return {
            key: "volume",
            title: "VOLUME: ",
            type: "bar",
            baseValue: 0,
            styles: function(t, e, i) {
                var n = t.current.kLineData,
                    o = G(e.styles, "bars[0].noChangeColor", i.bars[0].noChangeColor);
                return V(n) && (n.close > n.open ? o = G(e.styles, "bars[0].upColor", i.bars[0].upColor) : n.close < n.open && (o = G(e.styles, "bars[0].downColor", i.bars[0].downColor))), {
                    color: o
                }
            }
        }
    }
    var zt = {
            name: "VOL",
            shortName: "VOL",
            series: t.IndicatorSeries.Volume,
            calcParams: [5, 10, 20],
            shouldFormatBigNumber: !0,
            precision: 0,
            minValue: 0,
            figures: [{
                key: "ma1",
                title: "MA5: ",
                type: "line"
            }, {
                key: "ma2",
                title: "MA10: ",
                type: "line"
            }, {
                key: "ma3",
                title: "MA20: ",
                type: "line"
            }, Wt()],
            regenerateFigures: function(t) {
                var e = t.map((function(t, e) {
                    return {
                        key: "ma".concat(e + 1),
                        title: "MA".concat(t, ": "),
                        type: "line"
                    }
                }));
                return e.push(Wt()), e
            },
            calc: function(t, e) {
                var i = e.calcParams,
                    n = e.figures,
                    o = [];
                return t.map((function(e, r) {
                    var a, s = null !== (a = e.volume) && void 0 !== a ? a : 0,
                        l = {
                            volume: s
                        };
                    return i.forEach((function(e, i) {
                        var a, c;
                        o[i] = (null !== (a = o[i]) && void 0 !== a ? a : 0) + s, r >= e - 1 && (l[n[i].key] = o[i] / e, o[i] -= null !== (c = t[r - (e - 1)].volume) && void 0 !== c ? c : 0)
                    })), l
                }))
            }
        },
        Yt = {
            name: "WR",
            shortName: "WR",
            calcParams: [6, 10, 14],
            figures: [{
                key: "wr1",
                title: "WR1: ",
                type: "line"
            }, {
                key: "wr2",
                title: "WR2: ",
                type: "line"
            }, {
                key: "wr3",
                title: "WR3: ",
                type: "line"
            }],
            regenerateFigures: function(t) {
                return t.map((function(t, e) {
                    return {
                        key: "wr".concat(e + 1),
                        title: "WR".concat(e + 1, ": "),
                        type: "line"
                    }
                }))
            },
            calc: function(t, e) {
                var i = e.calcParams,
                    n = e.figures;
                return t.map((function(e, o) {
                    var r = {},
                        a = e.close;
                    return i.forEach((function(e, i) {
                        var s = e - 1;
                        if (o >= s) {
                            var l = _t(t.slice(o - s, o + 1), "high", "low"),
                                c = l[0],
                                u = c - l[1];
                            r[n[i].key] = 0 === u ? 0 : (a - c) / u * 100
                        }
                    })), r
                }))
            }
        },
        Ht = {},
        Xt = [wt, Et, {
            name: "BIAS",
            shortName: "BIAS",
            calcParams: [6, 12, 24],
            figures: [{
                key: "bias1",
                title: "BIAS6: ",
                type: "line"
            }, {
                key: "bias2",
                title: "BIAS12: ",
                type: "line"
            }, {
                key: "bias3",
                title: "BIAS24: ",
                type: "line"
            }],
            regenerateFigures: function(t) {
                return t.map((function(t, e) {
                    return {
                        key: "bias".concat(e + 1),
                        title: "BIAS".concat(t, ": "),
                        type: "line"
                    }
                }))
            },
            calc: function(t, e) {
                var i = e.calcParams,
                    n = e.figures,
                    o = [];
                return t.map((function(e, r) {
                    var a = {},
                        s = e.close;
                    return i.forEach((function(e, l) {
                        var c;
                        if (o[l] = (null !== (c = o[l]) && void 0 !== c ? c : 0) + s, r >= e - 1) {
                            var u = o[l] / i[l];
                            a[n[l].key] = (s - u) / u * 100, o[l] -= t[r - (e - 1)].close
                        }
                    })), a
                }))
            }
        }, It, {
            name: "BRAR",
            shortName: "BRAR",
            calcParams: [26],
            figures: [{
                key: "br",
                title: "BR: ",
                type: "line"
            }, {
                key: "ar",
                title: "AR: ",
                type: "line"
            }],
            calc: function(t, e) {
                var i = e.calcParams,
                    n = 0,
                    o = 0,
                    r = 0,
                    a = 0;
                return t.map((function(e, s) {
                    var l, c, u = {},
                        h = e.high,
                        d = e.low,
                        p = e.open,
                        g = (null !== (l = t[s - 1]) && void 0 !== l ? l : e).close;
                    if (r += h - p, a += p - d, n += h - g, o += g - d, s >= i[0] - 1) {
                        u.ar = 0 !== a ? r / a * 100 : 0, u.br = 0 !== o ? n / o * 100 : 0;
                        var v = t[s - (i[0] - 1)],
                            f = v.high,
                            y = v.low,
                            m = v.open,
                            _ = (null !== (c = t[s - i[0]]) && void 0 !== c ? c : t[s - (i[0] - 1)]).close;
                        n -= f - _, o -= _ - y, r -= f - m, a -= m - y
                    }
                    return u
                }))
            }
        }, Pt, Dt, Mt, kt, At, {
            name: "EMV",
            shortName: "EMV",
            calcParams: [14, 9],
            figures: [{
                key: "emv",
                title: "EMV: ",
                type: "line"
            }, {
                key: "maEmv",
                title: "MAEMV: ",
                type: "line"
            }],
            calc: function(t, e) {
                var i = e.calcParams,
                    n = 0,
                    o = [];
                return t.map((function(e, r) {
                    var a, s = {};
                    if (r > 0) {
                        var l = t[r - 1],
                            c = e.high,
                            u = e.low,
                            h = null !== (a = e.volume) && void 0 !== a ? a : 0,
                            d = (c + u) / 2 - (l.high + l.low) / 2;
                        if (0 === h || c - u == 0) s.emv = 0;
                        else {
                            var p = h / 1e8 / (c - u);
                            s.emv = d / p
                        }
                        n += s.emv, o.push(s.emv), r >= i[0] && (s.maEmv = n / i[0], n -= o[r - i[0]])
                    }
                    return s
                }))
            }
        }, Ft, {
            name: "MTM",
            shortName: "MTM",
            calcParams: [12, 6],
            figures: [{
                key: "mtm",
                title: "MTM: ",
                type: "line"
            }, {
                key: "maMtm",
                title: "MAMTM: ",
                type: "line"
            }],
            calc: function(t, e) {
                var i = e.calcParams,
                    n = 0,
                    o = [];
                return t.forEach((function(e, r) {
                    var a, s = {};
                    if (r >= i[0]) {
                        var l = e.close,
                            c = t[r - i[0]].close;
                        s.mtm = l - c, n += s.mtm, r >= i[0] + i[1] - 1 && (s.maMtm = n / i[1], n -= null !== (a = o[r - (i[1] - 1)].mtm) && void 0 !== a ? a : 0)
                    }
                    o.push(s)
                })), o
            }
        }, Lt, Rt, {
            name: "OBV",
            shortName: "OBV",
            calcParams: [30],
            figures: [{
                key: "obv",
                title: "OBV: ",
                type: "line"
            }, {
                key: "maObv",
                title: "MAOBV: ",
                type: "line"
            }],
            calc: function(t, e) {
                var i = e.calcParams,
                    n = 0,
                    o = 0,
                    r = [];
                return t.forEach((function(e, a) {
                    var s, l, c, u, h = null !== (s = t[a - 1]) && void 0 !== s ? s : e;
                    e.close < h.close ? o -= null !== (l = e.volume) && void 0 !== l ? l : 0 : e.close > h.close && (o += null !== (c = e.volume) && void 0 !== c ? c : 0);
                    var d = {
                        obv: o
                    };
                    n += o, a >= i[0] - 1 && (d.maObv = n / i[0], n -= null !== (u = r[a - (i[0] - 1)].obv) && void 0 !== u ? u : 0), r.push(d)
                })), r
            }
        }, {
            name: "PVT",
            shortName: "PVT",
            figures: [{
                key: "pvt",
                title: "PVT: ",
                type: "line"
            }],
            calc: function(t) {
                var e = 0;
                return t.map((function(i, n) {
                    var o, r, a = {},
                        s = i.close,
                        l = null !== (o = i.volume) && void 0 !== o ? o : 1,
                        c = (null !== (r = t[n - 1]) && void 0 !== r ? r : i).close,
                        u = 0,
                        h = c * l;
                    return 0 !== h && (u = (s - c) / h), e += u, a.pvt = e, a
                }))
            }
        }, {
            name: "PSY",
            shortName: "PSY",
            calcParams: [12, 6],
            figures: [{
                key: "psy",
                title: "PSY: ",
                type: "line"
            }, {
                key: "maPsy",
                title: "MAPSY: ",
                type: "line"
            }],
            calc: function(t, e) {
                var i = e.calcParams,
                    n = 0,
                    o = 0,
                    r = [],
                    a = [];
                return t.forEach((function(e, s) {
                    var l, c, u = {},
                        h = (null !== (l = t[s - 1]) && void 0 !== l ? l : e).close,
                        d = e.close - h > 0 ? 1 : 0;
                    r.push(d), n += d, s >= i[0] - 1 && (u.psy = n / i[0] * 100, o += u.psy, s >= i[0] + i[1] - 2 && (u.maPsy = o / i[1], o -= null !== (c = a[s - (i[1] - 1)].psy) && void 0 !== c ? c : 0), n -= r[s - (i[0] - 1)]), a.push(u)
                })), a
            }
        }, {
            name: "ROC",
            shortName: "ROC",
            calcParams: [12, 6],
            figures: [{
                key: "roc",
                title: "ROC: ",
                type: "line"
            }, {
                key: "maRoc",
                title: "MAROC: ",
                type: "line"
            }],
            calc: function(t, e) {
                var i = e.calcParams,
                    n = [],
                    o = 0;
                return t.forEach((function(e, r) {
                    var a, s, l = {};
                    if (r >= i[0] - 1) {
                        var c = e.close,
                            u = (null !== (a = t[r - i[0]]) && void 0 !== a ? a : t[r - (i[0] - 1)]).close;
                        l.roc = 0 !== u ? (c - u) / u * 100 : 0, o += l.roc, r >= i[0] - 1 + i[1] - 1 && (l.maRoc = o / i[1], o -= null !== (s = n[r - (i[1] - 1)].roc) && void 0 !== s ? s : 0)
                    }
                    n.push(l)
                })), n
            }
        }, Bt, Ot, Vt, Nt, {
            name: "TRIX",
            shortName: "TRIX",
            calcParams: [12, 9],
            figures: [{
                key: "trix",
                title: "TRIX: ",
                type: "line"
            }, {
                key: "maTrix",
                title: "MATRIX: ",
                type: "line"
            }],
            calc: function(t, e) {
                var i, n, o, r = e.calcParams,
                    a = 0,
                    s = 0,
                    l = 0,
                    c = 0,
                    u = [];
                return t.forEach((function(t, e) {
                    var h, d = {},
                        p = t.close;
                    if (a += p, e >= r[0] - 1 && (i = e > r[0] - 1 ? (2 * p + (r[0] - 1) * i) / (r[0] + 1) : a / r[0], s += i, e >= 2 * r[0] - 2 && (n = e > 2 * r[0] - 2 ? (2 * i + (r[0] - 1) * n) / (r[0] + 1) : s / r[0], l += n, e >= 3 * r[0] - 3))) {
                        var g = void 0,
                            v = 0;
                        e > 3 * r[0] - 3 ? v = ((g = (2 * n + (r[0] - 1) * o) / (r[0] + 1)) - o) / o * 100 : g = l / r[0], o = g, d.trix = v, c += v, e >= 3 * r[0] + r[1] - 4 && (d.maTrix = c / r[1], c -= null !== (h = u[e - (r[1] - 1)].trix) && void 0 !== h ? h : 0)
                    }
                    u.push(d)
                })), u
            }
        }, zt, {
            name: "VR",
            shortName: "VR",
            calcParams: [26, 6],
            figures: [{
                key: "vr",
                title: "VR: ",
                type: "line"
            }, {
                key: "maVr",
                title: "MAVR: ",
                type: "line"
            }],
            calc: function(t, e) {
                var i = e.calcParams,
                    n = 0,
                    o = 0,
                    r = 0,
                    a = 0,
                    s = [];
                return t.forEach((function(e, l) {
                    var c, u, h, d, p, g = {},
                        v = e.close,
                        f = (null !== (c = t[l - 1]) && void 0 !== c ? c : e).close,
                        y = null !== (u = e.volume) && void 0 !== u ? u : 0;
                    if (v > f ? n += y : v < f ? o += y : r += y, l >= i[0] - 1) {
                        var m = r / 2;
                        g.vr = o + m === 0 ? 0 : (n + m) / (o + m) * 100, a += g.vr, l >= i[0] + i[1] - 2 && (g.maVr = a / i[1], a -= null !== (h = s[l - (i[1] - 1)].vr) && void 0 !== h ? h : 0);
                        var _ = t[l - (i[0] - 1)],
                            x = null !== (d = t[l - i[0]]) && void 0 !== d ? d : _,
                            S = _.close,
                            C = null !== (p = _.volume) && void 0 !== p ? p : 0;
                        S > x.close ? n -= C : S < x.close ? o -= C : r -= C
                    }
                    s.push(g)
                })), s
            }
        }, Yt];

    function Gt(t) {
        var e;
        return null !== (e = Ht[t]) && void 0 !== e ? e : null
    }
    Xt.forEach((function(t) {
        Ht[t.name] = ot.extend(t)
    }));
    var jt = function() {
            function e(t) {
                this._instances = new Map, this._chartStore = t
            }
            return e.prototype._overrideInstance = function(t, e) {
                var i = e.shortName,
                    n = e.series,
                    o = e.calcParams,
                    r = e.precision,
                    a = e.figures,
                    s = e.minValue,
                    l = e.maxValue,
                    c = e.shouldOhlc,
                    u = e.shouldFormatBigNumber,
                    h = e.visible,
                    d = e.zLevel,
                    p = e.styles,
                    g = e.extendData,
                    v = e.regenerateFigures,
                    f = e.createTooltipDataSource,
                    y = e.draw,
                    m = e.calc,
                    _ = !1;
                W(i) && t.setShortName(i) && (_ = !0), V(n) && t.setSeries(n) && (_ = !0);
                var x = !1;
                L(o) && t.setCalcParams(o) && (_ = !0, x = !0), L(a) && t.setFigures(a) && (_ = !0, x = !0), void 0 !== s && t.setMinValue(s) && (_ = !0), void 0 !== l && t.setMinValue(l) && (_ = !0), O(r) && t.setPrecision(r) && (_ = !0), N(c) && t.setShouldOhlc(c) && (_ = !0), N(u) && t.setShouldFormatBigNumber(u) && (_ = !0), N(h) && t.setVisible(h) && (_ = !0);
                var S = !1;
                return O(d) && t.setZLevel(d) && (_ = !0, S = !0), V(p) && t.setStyles(p) && (_ = !0), void 0 !== g && t.setExtendData(g) && (_ = !0, x = !0), void 0 !== v && t.setRegenerateFigures(v) && (_ = !0), void 0 !== f && t.setCreateTooltipDataSource(f) && (_ = !0), void 0 !== y && t.setDraw(y) && (_ = !0), R(m) && (t.calc = m, x = !0), [_, x, S]
            }, e.prototype._sort = function(t) {
                var e;
                W(t) ? null === (e = this._instances.get(t)) || void 0 === e || e.sort((function(t, e) {
                    return t.zLevel - e.zLevel
                })) : this._instances.forEach((function(t) {
                    t.sort((function(t, e) {
                        return t.zLevel - e.zLevel
                    }))
                }))
            }, e.prototype.addInstance = function(t, e, i) {
                return p(this, void 0, void 0, (function() {
                    var n, o, r, a;
                    return g(this, (function(s) {
                        switch (s.label) {
                            case 0:
                                return n = t.name, V(o = this._instances.get(e)) ? V(o.find((function(t) {
                                    return t.name === n
                                }))) ? [4, Promise.reject(new Error("Duplicate indicators."))] : [3, 2] : [3, 2];
                            case 1:
                            case 3:
                                return [2, s.sent()];
                            case 2:
                                return V(o) || (o = []), r = Gt(n), a = new r, this.synchronizeSeriesPrecision(a), this._overrideInstance(a, t), i || (o = []), o.push(a), this._instances.set(e, o), this._sort(e), [4, a.calcIndicator(this._chartStore.getDataList())]
                        }
                    }))
                }))
            }, e.prototype.getInstances = function(t) {
                var e;
                return null !== (e = this._instances.get(t)) && void 0 !== e ? e : []
            }, e.prototype.removeInstance = function(t, e) {
                var i, n = !1,
                    o = this._instances.get(t);
                if (V(o)) {
                    if (W(e)) {
                        var r = o.findIndex((function(t) {
                            return t.name === e
                        }));
                        r > -1 && (o.splice(r, 1), n = !0)
                    } else this._instances.set(t, []), n = !0;
                    0 === (null === (i = this._instances.get(t)) || void 0 === i ? void 0 : i.length) && this._instances.delete(t)
                }
                return n
            }, e.prototype.hasInstances = function(t) {
                return this._instances.has(t)
            }, e.prototype.calcInstance = function(t, e) {
                return p(this, void 0, void 0, (function() {
                    var i, n, o, r = this;
                    return g(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                return i = [], W(t) ? W(e) ? V(n = this._instances.get(e)) && V(o = n.find((function(e) {
                                    return e.name === t
                                }))) && i.push(o.calcIndicator(this._chartStore.getDataList())) : this._instances.forEach((function(e) {
                                    var n = e.find((function(e) {
                                        return e.name === t
                                    }));
                                    V(n) && i.push(n.calcIndicator(r._chartStore.getDataList()))
                                })) : this._instances.forEach((function(t) {
                                    t.forEach((function(t) {
                                        i.push(t.calcIndicator(r._chartStore.getDataList()))
                                    }))
                                })), [4, Promise.all(i)];
                            case 1:
                                return [2, a.sent().includes(!0)]
                        }
                    }))
                }))
            }, e.prototype.getInstanceByPaneId = function(t, e) {
                var i, n, o = function(t) {
                    var e = new Map;
                    return t.forEach((function(t) {
                        e.set(t.name, t)
                    })), e
                };
                if (W(t)) {
                    var r = null !== (i = this._instances.get(t)) && void 0 !== i ? i : [];
                    return W(e) ? null !== (n = null == r ? void 0 : r.find((function(t) {
                        return t.name === e
                    }))) && void 0 !== n ? n : null : o(r)
                }
                var a = new Map;
                return this._instances.forEach((function(t, e) {
                    a.set(e, o(t))
                })), a
            }, e.prototype.synchronizeSeriesPrecision = function(e) {
                var i = this._chartStore.getPrecision(),
                    n = i.price,
                    o = i.volume,
                    r = function(e) {
                        switch (e.series) {
                            case t.IndicatorSeries.Price:
                                e.setPrecision(n, !0);
                                break;
                            case t.IndicatorSeries.Volume:
                                e.setPrecision(o, !0)
                        }
                    };
                V(e) ? r(e) : this._instances.forEach((function(t) {
                    t.forEach((function(t) {
                        r(t)
                    }))
                }))
            }, e.prototype.override = function(t, e) {
                return p(this, void 0, void 0, (function() {
                    var i, n, o, r, a, s, l, c = this;
                    return g(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                return i = t.name, n = new Map, null !== e ? V(o = this._instances.get(e)) && n.set(e, o) : n = this._instances, r = !1, a = [], s = !1, n.forEach((function(e) {
                                    var n = e.find((function(t) {
                                        return t.name === i
                                    }));
                                    if (V(n)) {
                                        var o = c._overrideInstance(n, t);
                                        o[2] && (s = !0), o[1] ? a.push(n.calcIndicator(c._chartStore.getDataList())) : o[0] && (r = !0)
                                    }
                                })), s && this._sort(), [4, Promise.all(a)];
                            case 1:
                                return l = u.sent(), [2, [r, l.includes(!0)]]
                        }
                    }))
                }))
            }, e
        }(),
        Kt = function() {
            function t(t) {
                this._crosshair = {}, this._activeIcon = null, this._chartStore = t
            }
            return t.prototype.setCrosshair = function(t, e) {
                var i, n, o = this._chartStore.getDataList(),
                    r = null != t ? t : {},
                    a = o[n = O(r.x) ? (i = this._chartStore.getTimeScaleStore().coordinateToDataIndex(r.x)) < 0 ? 0 : i > o.length - 1 ? o.length - 1 : i : i = o.length - 1],
                    s = this._chartStore.getTimeScaleStore().dataIndexToCoordinate(i),
                    l = this._crosshair.x,
                    c = this._crosshair.y,
                    u = this._crosshair.paneId;
                this._crosshair = d(d({}, r), {
                    realX: s,
                    kLineData: a,
                    realDataIndex: i,
                    dataIndex: n
                }), l === r.x && c === r.y && u === r.paneId || (null !== a && this._chartStore.getChart().crosshairChange(this._crosshair), null != e && e || this._chartStore.getChart().updatePane(1))
            }, t.prototype.recalculateCrosshair = function(t) {
                this.setCrosshair(this._crosshair, t)
            }, t.prototype.getCrosshair = function() {
                return this._crosshair
            }, t.prototype.setActiveIcon = function(t) {
                this._activeIcon = null != t ? t : null
            }, t.prototype.getActiveIcon = function() {
                return this._activeIcon
            }, t.prototype.clear = function() {
                this.setCrosshair({}, !0), this.setActiveIcon()
            }, t
        }(),
        Zt = {
            name: "fibonacciLine",
            totalStep: 3,
            needDefaultPointFigure: !0,
            needDefaultXAxisFigure: !0,
            needDefaultYAxisFigure: !0,
            createPointFigures: function(t) {
                var e, i = t.coordinates,
                    n = t.bounding,
                    o = t.overlay,
                    r = t.precision,
                    a = t.thousandsSeparator,
                    s = t.decimalFoldThreshold,
                    l = t.yAxis,
                    c = o.points;
                if (i.length > 0) {
                    var u = null === (e = null == l ? void 0 : l.isInCandle()) || void 0 === e || e ? r.price : r.excludePriceVolumeMax,
                        h = [],
                        d = [],
                        p = n.width;
                    if (i.length > 1 && O(c[0].value) && O(c[1].value)) {
                        var g = i[0].y - i[1].y,
                            v = c[0].value - c[1].value;
                        [1, .786, .618, .5, .382, .236, 0].forEach((function(t) {
                            var e, n = i[1].y + g * t,
                                o = q(U(((null !== (e = c[1].value) && void 0 !== e ? e : 0) + v * t).toFixed(u), a), s);
                            h.push({
                                coordinates: [{
                                    x: 0,
                                    y: n
                                }, {
                                    x: p,
                                    y: n
                                }]
                            }), d.push({
                                x: 0,
                                y: n,
                                text: "".concat(o, " (").concat((100 * t).toFixed(1), "%)"),
                                baseline: "bottom"
                            })
                        }))
                    }
                    return [{
                        type: "line",
                        attrs: h
                    }, {
                        type: "text",
                        isCheckEvent: !1,
                        attrs: d
                    }]
                }
                return []
            }
        },
        Ut = {
            name: "horizontalRayLine",
            totalStep: 3,
            needDefaultPointFigure: !0,
            needDefaultXAxisFigure: !0,
            needDefaultYAxisFigure: !0,
            createPointFigures: function(t) {
                var e = t.coordinates,
                    i = t.bounding,
                    n = {
                        x: 0,
                        y: e[0].y
                    };
                return V(e[1]) && e[0].x < e[1].x && (n.x = i.width), [{
                    type: "line",
                    attrs: {
                        coordinates: [e[0], n]
                    }
                }]
            },
            performEventPressedMove: function(t) {
                var e = t.points,
                    i = t.performPoint;
                e[0].value = i.value, e[1].value = i.value
            },
            performEventMoveForDrawing: function(t) {
                var e = t.currentStep,
                    i = t.points,
                    n = t.performPoint;
                2 === e && (i[0].value = n.value)
            }
        },
        qt = function() {
            function t() {
                this._children = [], this._callbacks = new Map
            }
            return t.prototype.registerEvent = function(t, e) {
                return this._callbacks.set(t, e), this
            }, t.prototype.onEvent = function(t, e, i) {
                var n = this._callbacks.get(t);
                return !(!V(n) || !this.checkEventOn(e)) && n(e, i)
            }, t.prototype.checkEventOn = function(t) {
                var e, i;
                try {
                    for (var n = v(this._children), o = n.next(); !o.done; o = n.next()) {
                        if (o.value.checkEventOn(t)) return !0
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        o && !o.done && (i = n.return) && i.call(n)
                    } finally {
                        if (e) throw e.error
                    }
                }
                return !1
            }, t.prototype.dispatchEvent = function(t, e, i) {
                var n = this._children.length - 1;
                if (n > -1)
                    for (var o = n; o > -1; o--)
                        if (this._children[o].dispatchEvent(t, e, i)) return !0;
                return this.onEvent(t, e, i)
            }, t.prototype.addChild = function(t) {
                return this._children.push(t), this
            }, t.prototype.clear = function() {
                this._children = []
            }, t
        }(),
        $t = function(t) {
            function e(e) {
                var i = t.call(this) || this;
                return i.attrs = e.attrs, i.styles = e.styles, i
            }
            return i(e, t), e.prototype.checkEventOn = function(t) {
                return this.checkEventOnImp(t, this.attrs, this.styles)
            }, e.prototype.setAttrs = function(t) {
                return this.attrs = t, this
            }, e.prototype.setStyles = function(t) {
                return this.styles = t, this
            }, e.prototype.draw = function(t) {
                this.drawImp(t, this.attrs, this.styles)
            }, e.extend = function(t) {
                var n = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i(n, e), n.prototype.checkEventOnImp = function(e, i, n) {
                        return t.checkEventOn(e, i, n)
                    }, n.prototype.drawImp = function(e, i, n) {
                        t.draw(e, i, n)
                    }, n
                }(e);
                return n
            }, e
        }(qt);

    function Qt(t, e) {
        var i = [];
        i = i.concat(e);
        for (var n = 0; n < i.length; n++) {
            var o = i[n].coordinates;
            if (o.length > 1)
                for (var r = 1; r < o.length; r++) {
                    var a = o[r - 1],
                        s = o[r];
                    if (a.x === s.x) {
                        if (Math.abs(a.y - t.y) + Math.abs(s.y - t.y) - Math.abs(a.y - s.y) < 4 && Math.abs(t.x - a.x) < 2) return !0
                    } else {
                        var l = ee(a, s),
                            c = Jt(l, t),
                            u = Math.abs(c - t.y);
                        if (Math.abs(a.x - t.x) + Math.abs(s.x - t.x) - Math.abs(a.x - s.x) < 4 && u * u / (l[0] * l[0] + 1) < 4) return !0
                    }
                }
        }
        return !1
    }

    function Jt(t, e) {
        return null !== t ? e.x * t[0] + t[1] : e.y
    }

    function te(t, e, i) {
        return Jt(ee(t, e), i)
    }

    function ee(t, e) {
        var i = t.x - e.x;
        if (0 !== i) {
            var n = (t.y - e.y) / i;
            return [n, t.y - n * t.x]
        }
        return null
    }

    function ie(t, e, i) {
        var n = e.length,
            o = O(i) ? i > 0 && i < 1 ? i : 0 : i ? .5 : 0;
        if (o > 0 && n > 2) {
            for (var r = e[0].x, a = e[0].y, s = 1; s < n - 1; s++) {
                var l = e[s - 1],
                    c = e[s],
                    u = e[s + 1],
                    h = c.x - l.x,
                    d = c.y - l.y,
                    p = u.x - c.x,
                    g = u.y - c.y,
                    v = u.x - l.x,
                    f = u.y - l.y,
                    y = Math.sqrt(h * h + d * d),
                    m = Math.sqrt(p * p + g * g),
                    _ = m / (m + y),
                    x = c.x + v * o * _,
                    S = c.y + f * o * _;
                x = Math.min(x, Math.max(u.x, c.x)), S = Math.min(S, Math.max(u.y, c.y)), x = Math.max(x, Math.min(u.x, c.x)), S = Math.max(S, Math.min(u.y, c.y)), v = x - c.x, f = S - c.y;
                var C = c.x - v * y / m,
                    b = c.y - f * y / m;
                C = Math.min(C, Math.max(l.x, c.x)), b = Math.min(b, Math.max(l.y, c.y)), C = Math.max(C, Math.min(l.x, c.x)), b = Math.max(b, Math.min(l.y, c.y)), v = c.x - C, f = c.y - b, x = c.x + v * m / y, S = c.y + f * m / y, t.bezierCurveTo(r, a, C, b, c.x, c.y), r = x, a = S
            }
            var T = e[n - 1];
            t.bezierCurveTo(r, a, T.x, T.y, T.x, T.y)
        } else
            for (s = 1; s < n; s++) t.lineTo(e[s].x, e[s].y)
    }

    function ne(e, i, n) {
        var o = [];
        o = o.concat(i);
        var r = n.style,
            a = void 0 === r ? t.LineType.Solid : r,
            s = n.smooth,
            l = void 0 !== s && s,
            c = n.size,
            u = void 0 === c ? 1 : c,
            h = n.color,
            d = void 0 === h ? "currentColor" : h,
            p = n.dashedValue,
            g = void 0 === p ? [2, 2] : p;
        e.lineWidth = u, e.strokeStyle = d, a === t.LineType.Dashed ? e.setLineDash(g) : e.setLineDash([]);
        var v = u % 2 == 1 ? .5 : 0;
        o.forEach((function(t) {
            var i = t.coordinates;
            i.length > 1 && (2 !== i.length || i[0].x !== i[1].x && i[0].y !== i[1].y ? (e.save(), u % 2 == 1 && e.translate(.5, .5), e.beginPath(), e.moveTo(i[0].x, i[0].y), ie(e, i, l), e.stroke(), e.closePath(), e.restore()) : (e.beginPath(), i[0].x === i[1].x ? (e.moveTo(i[0].x + v, i[0].y), e.lineTo(i[1].x + v, i[1].y)) : (e.moveTo(i[0].x, i[0].y + v), e.lineTo(i[1].x, i[1].y + v)), e.stroke(), e.closePath()))
        }))
    }
    var oe = {
        name: "line",
        checkEventOn: Qt,
        draw: function(t, e, i) {
            ne(t, e, i)
        }
    };

    function re(t, e, i) {
        var n = null != i ? i : 0,
            o = [];
        if (t.length > 1)
            if (t[0].x === t[1].x) {
                var r = e.height;
                if (o.push({
                        coordinates: [{
                            x: t[0].x,
                            y: 0
                        }, {
                            x: t[0].x,
                            y: r
                        }]
                    }), t.length > 2) {
                    o.push({
                        coordinates: [{
                            x: t[2].x,
                            y: 0
                        }, {
                            x: t[2].x,
                            y: r
                        }]
                    });
                    for (var a = t[0].x - t[2].x, s = 0; s < n; s++) {
                        var l = a * (s + 1);
                        o.push({
                            coordinates: [{
                                x: t[0].x + l,
                                y: 0
                            }, {
                                x: t[0].x + l,
                                y: r
                            }]
                        })
                    }
                }
            } else {
                var c = e.width,
                    u = ee(t[0], t[1]),
                    h = u[0],
                    d = u[1];
                if (o.push({
                        coordinates: [{
                            x: 0,
                            y: 0 * h + d
                        }, {
                            x: c,
                            y: c * h + d
                        }]
                    }), t.length > 2) {
                    var p = t[2].y - h * t[2].x;
                    o.push({
                        coordinates: [{
                            x: 0,
                            y: 0 * h + p
                        }, {
                            x: c,
                            y: c * h + p
                        }]
                    });
                    for (a = d - p, s = 0; s < n; s++) {
                        var g = d + a * (s + 1);
                        o.push({
                            coordinates: [{
                                x: 0,
                                y: 0 * h + g
                            }, {
                                x: c,
                                y: c * h + g
                            }]
                        })
                    }
                }
            } return o
    }
    var ae = {
            name: "parallelStraightLine",
            totalStep: 4,
            needDefaultPointFigure: !0,
            needDefaultXAxisFigure: !0,
            needDefaultYAxisFigure: !0,
            createPointFigures: function(t) {
                return [{
                    type: "line",
                    attrs: re(t.coordinates, t.bounding)
                }]
            }
        },
        se = {
            name: "priceChannelLine",
            totalStep: 4,
            needDefaultPointFigure: !0,
            needDefaultXAxisFigure: !0,
            needDefaultYAxisFigure: !0,
            createPointFigures: function(t) {
                return [{
                    type: "line",
                    attrs: re(t.coordinates, t.bounding, 1)
                }]
            }
        },
        le = {
            name: "priceLine",
            totalStep: 2,
            needDefaultPointFigure: !0,
            needDefaultXAxisFigure: !0,
            needDefaultYAxisFigure: !0,
            createPointFigures: function(t) {
                var e, i = t.coordinates,
                    n = t.bounding,
                    o = t.precision,
                    r = t.overlay,
                    a = t.thousandsSeparator,
                    s = t.decimalFoldThreshold,
                    l = t.yAxis,
                    c = r.points[0].value,
                    u = void 0 === c ? 0 : c,
                    h = null === (e = null == l ? void 0 : l.isInCandle()) || void 0 === e || e ? o.price : o.excludePriceVolumeMax;
                return [{
                    type: "line",
                    attrs: {
                        coordinates: [i[0], {
                            x: n.width,
                            y: i[0].y
                        }]
                    }
                }, {
                    type: "text",
                    ignoreEvent: !0,
                    attrs: {
                        x: i[0].x,
                        y: i[0].y,
                        text: q(U(u.toFixed(h), a), s),
                        baseline: "bottom"
                    }
                }]
            }
        };

    function ce(t, e) {
        if (t.length > 1) {
            var i = void 0;
            return i = t[0].x === t[1].x && t[0].y !== t[1].y ? t[0].y < t[1].y ? {
                x: t[0].x,
                y: e.height
            } : {
                x: t[0].x,
                y: 0
            } : t[0].x > t[1].x ? {
                x: 0,
                y: te(t[0], t[1], {
                    x: 0,
                    y: t[0].y
                })
            } : {
                x: e.width,
                y: te(t[0], t[1], {
                    x: e.width,
                    y: t[0].y
                })
            }, {
                coordinates: [t[0], i]
            }
        }
        return []
    }
    var ue = {
            name: "rayLine",
            totalStep: 3,
            needDefaultPointFigure: !0,
            needDefaultXAxisFigure: !0,
            needDefaultYAxisFigure: !0,
            createPointFigures: function(t) {
                return [{
                    type: "line",
                    attrs: ce(t.coordinates, t.bounding)
                }]
            }
        },
        he = {
            name: "straightLine",
            totalStep: 3,
            needDefaultPointFigure: !0,
            needDefaultXAxisFigure: !0,
            needDefaultYAxisFigure: !0,
            createPointFigures: function(t) {
                var e = t.coordinates,
                    i = t.bounding;
                return 2 === e.length ? e[0].x === e[1].x ? [{
                    type: "line",
                    attrs: {
                        coordinates: [{
                            x: e[0].x,
                            y: 0
                        }, {
                            x: e[0].x,
                            y: i.height
                        }]
                    }
                }] : [{
                    type: "line",
                    attrs: {
                        coordinates: [{
                            x: 0,
                            y: te(e[0], e[1], {
                                x: 0,
                                y: e[0].y
                            })
                        }, {
                            x: i.width,
                            y: te(e[0], e[1], {
                                x: i.width,
                                y: e[0].y
                            })
                        }]
                    }
                }] : []
            }
        },
        de = {
            name: "simpleAnnotation",
            totalStep: 2,
            styles: {
                line: {
                    style: t.LineType.Dashed
                }
            },
            createPointFigures: function(t) {
                var e, i, n = t.overlay,
                    o = t.coordinates;
                V(n.extendData) && (i = R(n.extendData) ? n.extendData(n) : null !== (e = n.extendData) && void 0 !== e ? e : "");
                var r = o[0].x,
                    a = o[0].y - 6,
                    s = a - 50,
                    l = s - 5;
                return [{
                    type: "line",
                    attrs: {
                        coordinates: [{
                            x: r,
                            y: a
                        }, {
                            x: r,
                            y: s
                        }]
                    },
                    ignoreEvent: !0
                }, {
                    type: "polygon",
                    attrs: {
                        coordinates: [{
                            x: r,
                            y: s
                        }, {
                            x: r - 4,
                            y: l
                        }, {
                            x: r + 4,
                            y: l
                        }]
                    },
                    ignoreEvent: !0
                }, {
                    type: "text",
                    attrs: {
                        x: r,
                        y: l,
                        text: null != i ? i : "",
                        align: "center",
                        baseline: "bottom"
                    },
                    ignoreEvent: !0
                }]
            }
        },
        pe = {
            name: "simpleTag",
            totalStep: 2,
            styles: {
                line: {
                    style: t.LineType.Dashed
                }
            },
            createPointFigures: function(t) {
                var e = t.bounding,
                    i = t.coordinates;
                return {
                    type: "line",
                    attrs: {
                        coordinates: [{
                            x: 0,
                            y: i[0].y
                        }, {
                            x: e.width,
                            y: i[0].y
                        }]
                    },
                    ignoreEvent: !0
                }
            },
            createYAxisFigures: function(t) {
                var e, i, n, o, r, a = t.overlay,
                    s = t.coordinates,
                    l = t.bounding,
                    c = t.yAxis,
                    u = t.precision;
                return null !== (e = null == c ? void 0 : c.isFromZero()) && void 0 !== e && e ? (n = "left", o = 0) : (n = "right", o = l.width), V(a.extendData) && (r = R(a.extendData) ? a.extendData(a) : null !== (i = a.extendData) && void 0 !== i ? i : ""), !V(r) && O(a.points[0].value) && (r = K(a.points[0].value, u.price)), {
                    type: "text",
                    attrs: {
                        x: o,
                        y: s[0].y,
                        text: null != r ? r : "",
                        align: n,
                        baseline: "middle"
                    }
                }
            }
        },
        ge = {};

    function ve(t) {
        var e;
        return null !== (e = ge[t]) && void 0 !== e ? e : null
    } [Zt, Ut, {
        name: "horizontalSegment",
        totalStep: 3,
        needDefaultPointFigure: !0,
        needDefaultXAxisFigure: !0,
        needDefaultYAxisFigure: !0,
        createPointFigures: function(t) {
            var e = t.coordinates,
                i = [];
            return 2 === e.length && i.push({
                coordinates: e
            }), [{
                type: "line",
                attrs: i
            }]
        },
        performEventPressedMove: function(t) {
            var e = t.points,
                i = t.performPoint;
            e[0].value = i.value, e[1].value = i.value
        },
        performEventMoveForDrawing: function(t) {
            var e = t.currentStep,
                i = t.points,
                n = t.performPoint;
            2 === e && (i[0].value = n.value)
        }
    }, {
        name: "horizontalStraightLine",
        totalStep: 2,
        needDefaultPointFigure: !0,
        needDefaultXAxisFigure: !0,
        needDefaultYAxisFigure: !0,
        createPointFigures: function(t) {
            var e = t.coordinates,
                i = t.bounding;
            return [{
                type: "line",
                attrs: {
                    coordinates: [{
                        x: 0,
                        y: e[0].y
                    }, {
                        x: i.width,
                        y: e[0].y
                    }]
                }
            }]
        }
    }, ae, se, le, ue, {
        name: "segment",
        totalStep: 3,
        needDefaultPointFigure: !0,
        needDefaultXAxisFigure: !0,
        needDefaultYAxisFigure: !0,
        createPointFigures: function(t) {
            var e = t.coordinates;
            return 2 === e.length ? [{
                type: "line",
                attrs: {
                    coordinates: e
                }
            }] : []
        }
    }, he, {
        name: "verticalRayLine",
        totalStep: 3,
        needDefaultPointFigure: !0,
        needDefaultXAxisFigure: !0,
        needDefaultYAxisFigure: !0,
        createPointFigures: function(t) {
            var e = t.coordinates,
                i = t.bounding;
            if (2 === e.length) {
                var n = {
                    x: e[0].x,
                    y: 0
                };
                return e[0].y < e[1].y && (n.y = i.height), [{
                    type: "line",
                    attrs: {
                        coordinates: [e[0], n]
                    }
                }]
            }
            return []
        },
        performEventPressedMove: function(t) {
            var e = t.points,
                i = t.performPoint;
            e[0].timestamp = i.timestamp, e[0].dataIndex = i.dataIndex, e[1].timestamp = i.timestamp, e[1].dataIndex = i.dataIndex
        },
        performEventMoveForDrawing: function(t) {
            var e = t.currentStep,
                i = t.points,
                n = t.performPoint;
            2 === e && (i[0].timestamp = n.timestamp, i[0].dataIndex = n.dataIndex)
        }
    }, {
        name: "verticalSegment",
        totalStep: 3,
        needDefaultPointFigure: !0,
        needDefaultXAxisFigure: !0,
        needDefaultYAxisFigure: !0,
        createPointFigures: function(t) {
            var e = t.coordinates;
            return 2 === e.length ? [{
                type: "line",
                attrs: {
                    coordinates: e
                }
            }] : []
        },
        performEventPressedMove: function(t) {
            var e = t.points,
                i = t.performPoint;
            e[0].timestamp = i.timestamp, e[0].dataIndex = i.dataIndex, e[1].timestamp = i.timestamp, e[1].dataIndex = i.dataIndex
        },
        performEventMoveForDrawing: function(t) {
            var e = t.currentStep,
                i = t.points,
                n = t.performPoint;
            2 === e && (i[0].timestamp = n.timestamp, i[0].dataIndex = n.dataIndex)
        }
    }, {
        name: "verticalStraightLine",
        totalStep: 2,
        needDefaultPointFigure: !0,
        needDefaultXAxisFigure: !0,
        needDefaultYAxisFigure: !0,
        createPointFigures: function(t) {
            var e = t.coordinates,
                i = t.bounding;
            return [{
                type: "line",
                attrs: {
                    coordinates: [{
                        x: e[0].x,
                        y: 0
                    }, {
                        x: e[0].x,
                        y: i.height
                    }]
                }
            }]
        }
    }, de, pe].forEach((function(t) {
        ge[t.name] = lt.extend(t)
    }));
    var fe = "candle_pane",
        ye = "indicator_pane_",
        me = "x_axis_pane",
        _e = function() {
            function t(t) {
                this._instances = new Map, this._progressInstanceInfo = null, this._pressedInstanceInfo = {
                    paneId: "",
                    instance: null,
                    figureType: 0,
                    figureKey: "",
                    figureIndex: -1,
                    attrsIndex: -1
                }, this._hoverInstanceInfo = {
                    paneId: "",
                    instance: null,
                    figureType: 0,
                    figureKey: "",
                    figureIndex: -1,
                    attrsIndex: -1
                }, this._clickInstanceInfo = {
                    paneId: "",
                    instance: null,
                    figureType: 0,
                    figureKey: "",
                    figureIndex: -1,
                    attrsIndex: -1
                }, this._chartStore = t
            }
            return t.prototype._overrideInstance = function(t, e) {
                var i = e.id,
                    n = e.groupId,
                    o = e.points,
                    r = e.styles,
                    a = e.lock,
                    s = e.visible,
                    l = e.zLevel,
                    c = e.mode,
                    u = e.modeSensitivity,
                    h = e.extendData,
                    d = e.onDrawStart,
                    p = e.onDrawing,
                    g = e.onDrawEnd,
                    v = e.onClick,
                    f = e.onDoubleClick,
                    y = e.onRightClick,
                    m = e.onPressedMoveStart,
                    _ = e.onPressedMoving,
                    x = e.onPressedMoveEnd,
                    S = e.onMouseEnter,
                    C = e.onMouseLeave,
                    b = e.onRemoved,
                    T = e.onSelected,
                    w = e.onDeselected,
                    E = !1,
                    I = !1;
                return W(i) && t.setId(i), W(n) && t.setGroupId(n), L(o) && t.setPoints(o) && (E = !0), V(r) && t.setStyles(r) && (E = !0), N(a) && t.setLock(a), N(s) && t.setVisible(s) && (E = !0), O(l) && t.setZLevel(l) && (E = !0, I = !0), V(c) && t.setMode(c), O(u) && t.setModeSensitivity(u), void 0 !== h && t.setExtendData(h) && (E = !0), void 0 !== d && t.setOnDrawStartCallback(d), void 0 !== p && t.setOnDrawingCallback(p), void 0 !== g && t.setOnDrawEndCallback(g), void 0 !== v && t.setOnClickCallback(v), void 0 !== f && t.setOnDoubleClickCallback(f), void 0 !== y && t.setOnRightClickCallback(y), void 0 !== m && t.setOnPressedMoveStartCallback(m), void 0 !== _ && t.setOnPressedMovingCallback(_), void 0 !== x && t.setOnPressedMoveEndCallback(x), void 0 !== S && t.setOnMouseEnterCallback(S), void 0 !== C && t.setOnMouseLeaveCallback(C), void 0 !== b && t.setOnRemovedCallback(b), void 0 !== T && t.setOnSelectedCallback(T), void 0 !== w && t.setOnDeselectedCallback(w), [E, I]
            }, t.prototype.getInstanceById = function(t) {
                var e, i;
                try {
                    for (var n = v(this._instances), o = n.next(); !o.done; o = n.next()) {
                        var r = o.value[1].find((function(e) {
                            return e.id === t
                        }));
                        if (V(r)) return r
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        o && !o.done && (i = n.return) && i.call(n)
                    } finally {
                        if (e) throw e.error
                    }
                }
                return null !== this._progressInstanceInfo && this._progressInstanceInfo.instance.id === t ? this._progressInstanceInfo.instance : null
            }, t.prototype._sort = function(t) {
                var e;
                W(t) ? null === (e = this._instances.get(t)) || void 0 === e || e.sort((function(t, e) {
                    return t.zLevel - e.zLevel
                })) : this._instances.forEach((function(t) {
                    t.sort((function(t, e) {
                        return t.zLevel - e.zLevel
                    }))
                }))
            }, t.prototype.addInstances = function(t, e, i) {
                var n = this,
                    o = t.map((function(t) {
                        var o, r, a, s, l = null !== (o = t.id) && void 0 !== o ? o : vt("overlay_");
                        if (null === n.getInstanceById(l)) {
                            var c = ve(t.name);
                            if (null !== c) {
                                var u = new c;
                                u.setPaneId(e);
                                var h = null !== (r = t.groupId) && void 0 !== r ? r : l;
                                return t.id = l, t.groupId = h, n._overrideInstance(u, t), u.isDrawing() ? n._progressInstanceInfo = {
                                    paneId: e,
                                    instance: u,
                                    appointPaneFlag: i
                                } : (n._instances.has(e) || n._instances.set(e, []), null === (a = n._instances.get(e)) || void 0 === a || a.push(u)), u.isStart() && (null === (s = u.onDrawStart) || void 0 === s || s.call(u, {
                                    overlay: u
                                })), l
                            }
                        }
                        return null
                    }));
                if (o.some((function(t) {
                        return null !== t
                    }))) {
                    this._sort();
                    var r = this._chartStore.getChart();
                    r.updatePane(1, e), r.updatePane(1, me)
                }
                return o
            }, t.prototype.getProgressInstanceInfo = function() {
                return this._progressInstanceInfo
            }, t.prototype.progressInstanceComplete = function() {
                var t;
                if (null !== this._progressInstanceInfo) {
                    var e = this._progressInstanceInfo,
                        i = e.instance,
                        n = e.paneId;
                    i.isDrawing() || (this._instances.has(n) || this._instances.set(n, []), null === (t = this._instances.get(n)) || void 0 === t || t.push(i), this._sort(n), this._progressInstanceInfo = null)
                }
            }, t.prototype.updateProgressInstanceInfo = function(t, e) {
                null !== this._progressInstanceInfo && (N(e) && e && (this._progressInstanceInfo.appointPaneFlag = e), this._progressInstanceInfo.paneId = t, this._progressInstanceInfo.instance.setPaneId(t))
            }, t.prototype.getInstances = function(t) {
                var e;
                if (!W(t)) {
                    var i = [];
                    return this._instances.forEach((function(t) {
                        i = i.concat(t)
                    })), i
                }
                return null !== (e = this._instances.get(t)) && void 0 !== e ? e : []
            }, t.prototype.override = function(t) {
                var e = this,
                    i = t.id,
                    n = t.groupId,
                    o = t.name,
                    r = !1,
                    a = !1,
                    s = function(i) {
                        var n = e._overrideInstance(i, t);
                        n[0] && (r = !0), n[1] && (a = !0)
                    };
                if (W(i)) {
                    var l = this.getInstanceById(i);
                    null !== l && s(l)
                } else {
                    var c = W(o),
                        u = W(n);
                    if (this._instances.forEach((function(t) {
                            t.forEach((function(t) {
                                (c && t.name === o || u && t.groupId === n || !c && !u) && s(t)
                            }))
                        })), null !== this._progressInstanceInfo) {
                        var h = this._progressInstanceInfo.instance;
                        (c && h.name === o || u && h.groupId === n || !c && !u) && s(h)
                    }
                }
                a && this._sort(), r && this._chartStore.getChart().updatePane(1)
            }, t.prototype.removeInstance = function(t) {
                var e, i, n, o = function(t, e) {
                        if (W(t.id)) {
                            if (e.id !== t.id) return !1
                        } else if (W(t.groupId)) {
                            if (e.groupId !== t.groupId) return !1
                        } else if (W(t.name) && e.name !== t.name) return !1;
                        return !0
                    },
                    r = [],
                    a = V(t);
                if (null !== this._progressInstanceInfo) {
                    var s = this._progressInstanceInfo.instance;
                    (!a || a && o(t, s)) && (r.push(this._progressInstanceInfo.paneId), null === (n = s.onRemoved) || void 0 === n || n.call(s, {
                        overlay: s
                    }), this._progressInstanceInfo = null)
                }
                if (a) {
                    var l = new Map,
                        c = function(e) {
                            var i = e[1].filter((function(i) {
                                var n;
                                return !o(t, i) || (r.includes(e[0]) || r.push(e[0]), null === (n = i.onRemoved) || void 0 === n || n.call(i, {
                                    overlay: i
                                }), !1)
                            }));
                            i.length > 0 && l.set(e[0], i)
                        };
                    try {
                        for (var u = v(this._instances), h = u.next(); !h.done; h = u.next()) {
                            c(h.value)
                        }
                    } catch (t) {
                        e = {
                            error: t
                        }
                    } finally {
                        try {
                            h && !h.done && (i = u.return) && i.call(u)
                        } finally {
                            if (e) throw e.error
                        }
                    }
                    this._instances = l
                } else this._instances.forEach((function(t, e) {
                    r.push(e), t.forEach((function(t) {
                        var e;
                        null === (e = t.onRemoved) || void 0 === e || e.call(t, {
                            overlay: t
                        })
                    }))
                })), this._instances.clear();
                if (r.length > 0) {
                    var d = this._chartStore.getChart();
                    r.forEach((function(t) {
                        d.updatePane(1, t)
                    })), d.updatePane(1, me)
                }
            }, t.prototype.setPressedInstanceInfo = function(t) {
                this._pressedInstanceInfo = t
            }, t.prototype.getPressedInstanceInfo = function() {
                return this._pressedInstanceInfo
            }, t.prototype.updatePointPosition = function(t, e) {
                if (t > 0) {
                    var i = this._chartStore.getDataList();
                    this._instances.forEach((function(n) {
                        n.forEach((function(n) {
                            n.points.forEach((function(n) {
                                if (!V(n.timestamp) && V(n.dataIndex)) {
                                    e === ht.Forward && (n.dataIndex = n.dataIndex + t);
                                    var o = i[n.dataIndex];
                                    n.timestamp = null == o ? void 0 : o.timestamp
                                }
                            }))
                        }))
                    }))
                }
            }, t.prototype.setHoverInstanceInfo = function(t, e) {
                var i, n, o = this._hoverInstanceInfo,
                    r = o.instance,
                    a = o.figureType,
                    s = o.figureKey,
                    l = o.figureIndex;
                if (((null == r ? void 0 : r.id) !== (null === (i = t.instance) || void 0 === i ? void 0 : i.id) || a !== t.figureType || l !== t.figureIndex) && (this._hoverInstanceInfo = t, (null == r ? void 0 : r.id) !== (null === (n = t.instance) || void 0 === n ? void 0 : n.id))) {
                    var c = !1,
                        u = !1;
                    null !== r && (u = !0, R(r.onMouseLeave) && (r.onMouseLeave(d({
                        overlay: r,
                        figureKey: s,
                        figureIndex: l
                    }, e)), c = !0)), null !== t.instance && (u = !0, t.instance.setZLevel(st), R(t.instance.onMouseEnter) && (t.instance.onMouseEnter(d({
                        overlay: t.instance,
                        figureKey: t.figureKey,
                        figureIndex: t.figureIndex
                    }, e)), c = !0)), u && this._sort(), c || this._chartStore.getChart().updatePane(1)
                }
            }, t.prototype.getHoverInstanceInfo = function() {
                return this._hoverInstanceInfo
            }, t.prototype.setClickInstanceInfo = function(t, e) {
                var i, n, o, r, a, s, l, c, u, h = this._clickInstanceInfo,
                    p = h.paneId,
                    g = h.instance,
                    v = h.figureType,
                    f = h.figureKey,
                    y = h.figureIndex;
                if (null !== (n = null === (i = t.instance) || void 0 === i ? void 0 : i.isDrawing()) && void 0 !== n && n || null === (r = null === (o = t.instance) || void 0 === o ? void 0 : o.onClick) || void 0 === r || r.call(o, d({
                        overlay: t.instance,
                        figureKey: t.figureKey,
                        figureIndex: t.figureIndex
                    }, e)), ((null == g ? void 0 : g.id) !== (null === (a = t.instance) || void 0 === a ? void 0 : a.id) || v !== t.figureType || y !== t.figureIndex) && (this._clickInstanceInfo = t, (null == g ? void 0 : g.id) !== (null === (s = t.instance) || void 0 === s ? void 0 : s.id))) {
                    null === (l = null == g ? void 0 : g.onDeselected) || void 0 === l || l.call(g, d({
                        overlay: g,
                        figureKey: f,
                        figureIndex: y
                    }, e)), null === (u = null === (c = t.instance) || void 0 === c ? void 0 : c.onSelected) || void 0 === u || u.call(c, d({
                        overlay: t.instance,
                        figureKey: t.figureKey,
                        figureIndex: t.figureIndex
                    }, e));
                    var m = this._chartStore.getChart();
                    m.updatePane(1, t.paneId), p !== t.paneId && m.updatePane(1, p), m.updatePane(1, me)
                }
            }, t.prototype.getClickInstanceInfo = function() {
                return this._clickInstanceInfo
            }, t.prototype.isEmpty = function() {
                return 0 === this._instances.size && null === this._progressInstanceInfo
            }, t.prototype.isDrawing = function() {
                var t, e;
                return null !== this._progressInstanceInfo && null !== (e = null === (t = this._progressInstanceInfo) || void 0 === t ? void 0 : t.instance.isDrawing()) && void 0 !== e && e
            }, t
        }(),
        xe = function() {
            function t() {
                this._actions = new Map
            }
            return t.prototype.execute = function(t, e) {
                var i;
                null === (i = this._actions.get(t)) || void 0 === i || i.execute(e)
            }, t.prototype.subscribe = function(t, e) {
                var i;
                this._actions.has(t) || this._actions.set(t, new et), null === (i = this._actions.get(t)) || void 0 === i || i.subscribe(e)
            }, t.prototype.unsubscribe = function(t, e) {
                var i = this._actions.get(t);
                V(i) && (i.unsubscribe(e), i.isEmpty() && this._actions.delete(t))
            }, t.prototype.has = function(t) {
                var e = this._actions.get(t);
                return V(e) && !e.isEmpty()
            }, t
        }(),
        Se = {
            light: {
                grid: {
                    horizontal: {
                        color: "#EDEDED"
                    },
                    vertical: {
                        color: "#EDEDED"
                    }
                },
                candle: {
                    priceMark: {
                        high: {
                            color: "#76808F"
                        },
                        low: {
                            color: "#76808F"
                        }
                    },
                    tooltip: {
                        rect: {
                            color: "#FEFEFE",
                            borderColor: "#F2F3F5"
                        },
                        text: {
                            color: "#76808F"
                        }
                    }
                },
                indicator: {
                    tooltip: {
                        text: {
                            color: "#76808F"
                        }
                    }
                },
                xAxis: {
                    axisLine: {
                        color: "#DDDDDD"
                    },
                    tickText: {
                        color: "#76808F"
                    },
                    tickLine: {
                        color: "#DDDDDD"
                    }
                },
                yAxis: {
                    axisLine: {
                        color: "#DDDDDD"
                    },
                    tickText: {
                        color: "#76808F"
                    },
                    tickLine: {
                        color: "#DDDDDD"
                    }
                },
                separator: {
                    color: "#DDDDDD"
                },
                crosshair: {
                    horizontal: {
                        line: {
                            color: "#76808F"
                        },
                        text: {
                            borderColor: "#686D76",
                            backgroundColor: "#686D76"
                        }
                    },
                    vertical: {
                        line: {
                            color: "#76808F"
                        },
                        text: {
                            borderColor: "#686D76",
                            backgroundColor: "#686D76"
                        }
                    }
                }
            },
            dark: {
                grid: {
                    horizontal: {
                        color: "#292929"
                    },
                    vertical: {
                        color: "#292929"
                    }
                },
                candle: {
                    priceMark: {
                        high: {
                            color: "#929AA5"
                        },
                        low: {
                            color: "#929AA5"
                        }
                    },
                    tooltip: {
                        rect: {
                            color: "rgba(10, 10, 10, .6)",
                            borderColor: "rgba(10, 10, 10, .6)"
                        },
                        text: {
                            color: "#929AA5"
                        }
                    }
                },
                indicator: {
                    tooltip: {
                        text: {
                            color: "#929AA5"
                        }
                    }
                },
                xAxis: {
                    axisLine: {
                        color: "#333333"
                    },
                    tickText: {
                        color: "#929AA5"
                    },
                    tickLine: {
                        color: "#333333"
                    }
                },
                yAxis: {
                    axisLine: {
                        color: "#333333"
                    },
                    tickText: {
                        color: "#929AA5"
                    },
                    tickLine: {
                        color: "#333333"
                    }
                },
                separator: {
                    color: "#333333"
                },
                crosshair: {
                    horizontal: {
                        line: {
                            color: "#929AA5"
                        },
                        text: {
                            borderColor: "#373a40",
                            backgroundColor: "#373a40"
                        }
                    },
                    vertical: {
                        line: {
                            color: "#929AA5"
                        },
                        text: {
                            borderColor: "#373a40",
                            backgroundColor: "#373a40"
                        }
                    }
                }
            }
        };

    function Ce(t) {
        var e;
        return null !== (e = Se[t]) && void 0 !== e ? e : null
    }
    var be = function() {
            function e(e, i) {
                var n, o, r;
                this._styles = {
                    grid: P(),
                    candle: (r = {
                        show: !0,
                        color: w,
                        textOffset: 5,
                        textSize: 10,
                        textFamily: "Helvetica Neue",
                        textWeight: "normal"
                    }, {
                        type: t.CandleType.CandleSolid,
                        bar: {
                            upColor: x,
                            downColor: m,
                            noChangeColor: C,
                            upBorderColor: x,
                            downBorderColor: m,
                            noChangeBorderColor: C,
                            upWickColor: x,
                            downWickColor: m,
                            noChangeWickColor: C
                        },
                        area: {
                            lineSize: 2,
                            lineColor: T,
                            smooth: !1,
                            value: "close",
                            backgroundColor: [{
                                offset: 0,
                                color: I(.01)
                            }, {
                                offset: 1,
                                color: I(.2)
                            }],
                            point: {
                                show: !0,
                                color: T,
                                radius: 4,
                                rippleColor: I(.3),
                                rippleRadius: 8,
                                animation: !0,
                                animationDuration: 1e3
                            }
                        },
                        priceMark: {
                            show: !0,
                            high: d({}, r),
                            low: d({}, r),
                            last: {
                                show: !0,
                                upColor: x,
                                downColor: m,
                                noChangeColor: C,
                                line: {
                                    show: !0,
                                    style: t.LineType.Dashed,
                                    dashedValue: [4, 4],
                                    size: 1
                                },
                                text: {
                                    show: !0,
                                    style: t.PolygonType.Fill,
                                    size: 12,
                                    paddingLeft: 4,
                                    paddingTop: 4,
                                    paddingRight: 4,
                                    paddingBottom: 4,
                                    borderColor: "transparent",
                                    borderStyle: t.LineType.Solid,
                                    borderSize: 0,
                                    borderDashedValue: [2, 2],
                                    color: b,
                                    family: "Helvetica Neue",
                                    weight: "normal",
                                    borderRadius: 2
                                }
                            }
                        },
                        tooltip: {
                            offsetLeft: 4,
                            offsetTop: 6,
                            offsetRight: 4,
                            offsetBottom: 6,
                            showRule: t.TooltipShowRule.Always,
                            showType: t.TooltipShowType.Standard,
                            custom: [{
                                title: "time",
                                value: "{time}"
                            }, {
                                title: "open",
                                value: "{open}"
                            }, {
                                title: "high",
                                value: "{high}"
                            }, {
                                title: "low",
                                value: "{low}"
                            }, {
                                title: "close",
                                value: "{close}"
                            }, {
                                title: "volume",
                                value: "{volume}"
                            }],
                            defaultValue: "n/a",
                            rect: {
                                position: t.CandleTooltipRectPosition.Fixed,
                                paddingLeft: 4,
                                paddingRight: 4,
                                paddingTop: 4,
                                paddingBottom: 4,
                                offsetLeft: 4,
                                offsetTop: 4,
                                offsetRight: 4,
                                offsetBottom: 4,
                                borderRadius: 4,
                                borderSize: 1,
                                borderColor: "#F2F3F5",
                                color: "#FEFEFE"
                            },
                            text: {
                                size: 12,
                                family: "Helvetica Neue",
                                weight: "normal",
                                color: w,
                                marginLeft: 8,
                                marginTop: 4,
                                marginRight: 8,
                                marginBottom: 4
                            },
                            icons: []
                        }
                    }),
                    indicator: (o = ["#FF9600", "#935EBD", T, "#E11D74", "#01C5C4"].map((function(e) {
                        return {
                            style: t.LineType.Solid,
                            smooth: !1,
                            size: 1,
                            dashedValue: [2, 2],
                            color: e
                        }
                    })), {
                        ohlc: {
                            upColor: S,
                            downColor: _,
                            noChangeColor: C
                        },
                        bars: [{
                            style: t.PolygonType.Fill,
                            borderStyle: t.LineType.Solid,
                            borderSize: 1,
                            borderDashedValue: [2, 2],
                            upColor: S,
                            downColor: _,
                            noChangeColor: C
                        }],
                        lines: o,
                        circles: [{
                            style: t.PolygonType.Fill,
                            borderStyle: t.LineType.Solid,
                            borderSize: 1,
                            borderDashedValue: [2, 2],
                            upColor: S,
                            downColor: _,
                            noChangeColor: C
                        }],
                        lastValueMark: {
                            show: !1,
                            text: {
                                show: !1,
                                style: t.PolygonType.Fill,
                                color: b,
                                size: 12,
                                family: "Helvetica Neue",
                                weight: "normal",
                                borderStyle: t.LineType.Solid,
                                borderColor: "transparent",
                                borderSize: 0,
                                borderDashedValue: [2, 2],
                                paddingLeft: 4,
                                paddingTop: 4,
                                paddingRight: 4,
                                paddingBottom: 4,
                                borderRadius: 2
                            }
                        },
                        tooltip: {
                            offsetLeft: 4,
                            offsetTop: 6,
                            offsetRight: 4,
                            offsetBottom: 6,
                            showRule: t.TooltipShowRule.Always,
                            showType: t.TooltipShowType.Standard,
                            showName: !0,
                            showParams: !0,
                            defaultValue: "n/a",
                            text: {
                                size: 12,
                                family: "Helvetica Neue",
                                weight: "normal",
                                color: w,
                                marginLeft: 8,
                                marginTop: 4,
                                marginRight: 8,
                                marginBottom: 4
                            },
                            icons: []
                        }
                    }),
                    xAxis: D(),
                    yAxis: (n = D(), n.type = t.YAxisType.Normal, n.position = t.YAxisPosition.Right, n.inside = !1, n.reverse = !1, n),
                    separator: {
                        size: 1,
                        color: E,
                        fill: !0,
                        activeBackgroundColor: I(.08)
                    },
                    crosshair: M(),
                    overlay: k()
                }, this._customApi = {
                    formatDate: j,
                    formatBigNumber: Z
                }, this._locale = "en-US", this._precision = {
                    price: 2,
                    volume: 0
                }, this._thousandsSeparator = ",", this._decimalFoldThreshold = 3, this._dataList = [], this._loadMoreCallback = null, this._loadDataCallback = null, this._loading = !0, this._forwardMore = !0, this._backwardMore = !0, this._timeScaleStore = new Tt(this), this._indicatorStore = new jt(this), this._overlayStore = new _e(this), this._tooltipStore = new Kt(this), this._actionStore = new xe, this._visibleDataList = [], this._chart = e, this.setOptions(i)
            }
            return e.prototype.adjustVisibleDataList = function() {
                this._visibleDataList = [];
                for (var t = this._timeScaleStore.getVisibleRange(), e = t.realFrom, i = t.realTo, n = e; n < i; n++) {
                    var o = this._dataList[n],
                        r = this._timeScaleStore.dataIndexToCoordinate(n);
                    this._visibleDataList.push({
                        dataIndex: n,
                        x: r,
                        data: o
                    })
                }
            }, e.prototype.setOptions = function(t) {
                var e, i, n, o;
                if (V(t)) {
                    var r = t.locale,
                        a = t.timezone,
                        s = t.styles,
                        l = t.customApi,
                        c = t.thousandsSeparator,
                        u = t.decimalFoldThreshold;
                    if (W(r) && (this._locale = r), W(a) && this._timeScaleStore.setTimezone(a), V(s)) {
                        var h = null;
                        h = W(s) ? Ce(s) : s, A(this._styles, h), L(null === (i = null === (e = null == h ? void 0 : h.candle) || void 0 === e ? void 0 : e.tooltip) || void 0 === i ? void 0 : i.custom) && (this._styles.candle.tooltip.custom = null === (o = null === (n = null == h ? void 0 : h.candle) || void 0 === n ? void 0 : n.tooltip) || void 0 === o ? void 0 : o.custom)
                    }
                    V(l) && A(this._customApi, l), W(c) && (this._thousandsSeparator = c), O(u) && u > 0 && (this._decimalFoldThreshold = u)
                }
                return this
            }, e.prototype.getStyles = function() {
                return this._styles
            }, e.prototype.getLocale = function() {
                return this._locale
            }, e.prototype.getCustomApi = function() {
                return this._customApi
            }, e.prototype.getThousandsSeparator = function() {
                return this._thousandsSeparator
            }, e.prototype.getDecimalFoldThreshold = function() {
                return this._decimalFoldThreshold
            }, e.prototype.getPrecision = function() {
                return this._precision
            }, e.prototype.setPrecision = function(t) {
                return this._precision = t, this._indicatorStore.synchronizeSeriesPrecision(), this
            }, e.prototype.getDataList = function() {
                return this._dataList
            }, e.prototype.getVisibleFirstData = function() {
                var t, e = this._timeScaleStore.getVisibleRange().from;
                return null !== (t = this._dataList[e]) && void 0 !== t ? t : null
            }, e.prototype.getVisibleDataList = function() {
                return this._visibleDataList
            }, e.prototype.addData = function(e, i, n) {
                return p(this, void 0, void 0, (function() {
                    var o, r, a, s, l, c, u;
                    return g(this, (function(h) {
                        switch (h.label) {
                            case 0:
                                if (o = !1, r = !1, a = 0, L(e)) {
                                    switch (a = e.length, i) {
                                        case ht.Init:
                                            this.clear(), this._dataList = e, this._forwardMore = null == n || n, this._timeScaleStore.resetOffsetRightDistance(), r = !0;
                                            break;
                                        case ht.Backward:
                                            this._dataList = this._dataList.concat(e), this._backwardMore = null != n && n, r = a > 0;
                                            break;
                                        case ht.Forward:
                                            this._dataList = e.concat(this._dataList), this._forwardMore = null != n && n, r = a > 0
                                    }
                                    this._loading = !1, o = !0
                                } else s = this._dataList.length, l = e.timestamp, c = G(this._dataList[s - 1], "timestamp", 0), l > c ? (this._dataList.push(e), (u = this._timeScaleStore.getLastBarRightSideDiffBarCount()) < 0 && this._timeScaleStore.setLastBarRightSideDiffBarCount(--u), a = 1, o = !0, r = !0) : l === c && (this._dataList[s - 1] = e, o = !0, r = !0);
                                if (!o) return [3, 5];
                                h.label = 1;
                            case 1:
                                return h.trys.push([1, 4, , 5]), this._overlayStore.updatePointPosition(a, i), r ? (this._timeScaleStore.adjustVisibleRange(), this._tooltipStore.recalculateCrosshair(!0), [4, this._indicatorStore.calcInstance()]) : [3, 3];
                            case 2:
                                h.sent(), this._chart.adjustPaneViewport(!1, !0, !0, !0), h.label = 3;
                            case 3:
                                return this._actionStore.execute(t.ActionType.OnDataReady), [3, 5];
                            case 4:
                                return h.sent(), [3, 5];
                            case 5:
                                return [2]
                        }
                    }))
                }))
            }, e.prototype.setLoadMoreCallback = function(t) {
                this._loadMoreCallback = t
            }, e.prototype.executeLoadMoreCallback = function(t) {
                this._forwardMore && !this._loading && V(this._loadMoreCallback) && (this._loading = !0, this._loadMoreCallback(t))
            }, e.prototype.setLoadDataCallback = function(t) {
                this._loadDataCallback = t
            }, e.prototype.executeLoadDataCallback = function(t) {
                var e = this;
                if (!this._loading && V(this._loadDataCallback) && (this._forwardMore && t.type === ht.Forward || this._backwardMore && t.type === ht.Backward)) {
                    this._loading = !0, this._loadDataCallback(d(d({}, t), {
                        callback: function(i, n) {
                            e.addData(i, t.type, n).then((function() {})).catch((function() {}))
                        }
                    }))
                }
            }, e.prototype.clear = function() {
                this._forwardMore = !0, this._backwardMore = !0, this._loading = !0, this._dataList = [], this._visibleDataList = [], this._timeScaleStore.clear(), this._tooltipStore.clear()
            }, e.prototype.getTimeScaleStore = function() {
                return this._timeScaleStore
            }, e.prototype.getIndicatorStore = function() {
                return this._indicatorStore
            }, e.prototype.getOverlayStore = function() {
                return this._overlayStore
            }, e.prototype.getTooltipStore = function() {
                return this._tooltipStore
            }, e.prototype.getActionStore = function() {
                return this._actionStore
            }, e.prototype.getChart = function() {
                return this._chart
            }, e
        }(),
        Te = "main",
        we = "xAxis",
        Ee = "yAxis",
        Ie = "separator";
    var Pe = function() {
        function t(t, e) {
            var i = this;
            this._supportedDevicePixelContentBox = !1, this._width = 0, this._height = 0, this._pixelWidth = 0, this._pixelHeight = 0, this._nextPixelWidth = 0, this._nextPixelHeight = 0, this._requestAnimationId = -1, this._mediaQueryListener = function() {
                    var t = $(i._element);
                    i._nextPixelWidth = Math.round(i._element.clientWidth * t), i._nextPixelHeight = Math.round(i._element.clientHeight * t), i._resetPixelRatio()
                }, this._listener = e, this._element = ft("canvas", t), this._ctx = this._element.getContext("2d", {
                    willReadFrequently: !0
                }),
                function() {
                    return p(this, void 0, void 0, (function() {
                        return g(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, new Promise((function(t) {
                                        var e = new ResizeObserver((function(i) {
                                            t(i.every((function(t) {
                                                return "devicePixelContentBoxSize" in t
                                            }))), e.disconnect()
                                        }));
                                        e.observe(document.body, {
                                            box: "device-pixel-content-box"
                                        })
                                    })).catch((function() {
                                        return !1
                                    }))];
                                case 1:
                                    return [2, t.sent()]
                            }
                        }))
                    }))
                }().then((function(t) {
                    i._supportedDevicePixelContentBox = t, t ? (i._resizeObserver = new ResizeObserver((function(t) {
                        var e, n = t.find((function(t) {
                                return t.target === i._element
                            })),
                            o = null === (e = null == n ? void 0 : n.devicePixelContentBoxSize) || void 0 === e ? void 0 : e[0];
                        V(o) && (i._nextPixelWidth = o.inlineSize, i._nextPixelHeight = o.blockSize, i._pixelWidth === i._nextPixelWidth && i._pixelHeight === i._nextPixelHeight || i._resetPixelRatio())
                    })), i._resizeObserver.observe(i._element, {
                        box: "device-pixel-content-box"
                    })) : (i._mediaQueryList = window.matchMedia("(resolution: ".concat($(i._element), "dppx)")), i._mediaQueryList.addListener(i._mediaQueryListener))
                })).catch((function(t) {
                    return !1
                }))
        }
        return t.prototype._resetPixelRatio = function() {
            var t = this;
            this._executeListener((function() {
                var e = t._element.clientWidth,
                    i = t._element.clientHeight,
                    n = t._nextPixelWidth / e,
                    o = t._nextPixelHeight / i;
                t._width = e, t._height = i, t._pixelWidth = t._nextPixelWidth, t._pixelHeight = t._nextPixelHeight, t._element.width = t._nextPixelWidth, t._element.height = t._nextPixelHeight, t._ctx.scale(n, o)
            }))
        }, t.prototype._executeListener = function(t) {
            var e = this; - 1 === this._requestAnimationId && (this._requestAnimationId = ct((function() {
                e._ctx.clearRect(0, 0, e._width, e._height), null == t || t(), e._listener(), e._requestAnimationId = -1
            })))
        }, t.prototype.update = function(t, e) {
            if (this._width !== t || this._height !== e) {
                if (this._element.style.width = "".concat(t, "px"), this._element.style.height = "".concat(e, "px"), !this._supportedDevicePixelContentBox) {
                    var i = $(this._element);
                    this._nextPixelWidth = Math.round(t * i), this._nextPixelHeight = Math.round(e * i), this._resetPixelRatio()
                }
            } else this._executeListener()
        }, t.prototype.getElement = function() {
            return this._element
        }, t.prototype.getContext = function() {
            return this._ctx
        }, t.prototype.destroy = function() {
            var t, e;
            null === (t = this._resizeObserver) || void 0 === t || t.unobserve(this._element), null === (e = this._mediaQueryList) || void 0 === e || e.removeListener(this._mediaQueryListener)
        }, t
    }();

    function De(t) {
        var e = {
            width: 0,
            height: 0,
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        };
        return V(t) && A(e, t), e
    }
    var Me = function(t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._bounding = De(), n._pane = i, n.init(e), n
            }
            return i(e, t), e.prototype.init = function(t) {
                this._rootContainer = t, this._container = this.createContainer(), t.appendChild(this._container)
            }, e.prototype.setBounding = function(t) {
                return A(this._bounding, t), this
            }, e.prototype.getContainer = function() {
                return this._container
            }, e.prototype.getBounding = function() {
                return this._bounding
            }, e.prototype.getPane = function() {
                return this._pane
            }, e.prototype.update = function(t) {
                this.updateImp(this._container, this._bounding, null != t ? t : 3)
            }, e.prototype.destroy = function() {
                this._rootContainer.removeChild(this._container)
            }, e
        }(qt),
        ke = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(e, t), e.prototype.init = function(e) {
                var i = this;
                t.prototype.init.call(this, e), this._mainCanvas = new Pe({
                    position: "absolute",
                    top: "0",
                    left: "0",
                    zIndex: "2",
                    boxSizing: "border-box"
                }, (function() {
                    i.updateMain(i._mainCanvas.getContext())
                })), this._overlayCanvas = new Pe({
                    position: "absolute",
                    top: "0",
                    left: "0",
                    zIndex: "2",
                    boxSizing: "border-box"
                }, (function() {
                    i.updateOverlay(i._overlayCanvas.getContext())
                }));
                var n = this.getContainer();
                n.appendChild(this._mainCanvas.getElement()), n.appendChild(this._overlayCanvas.getElement())
            }, e.prototype.createContainer = function() {
                return ft("div", {
                    margin: "0",
                    padding: "0",
                    position: "absolute",
                    top: "0",
                    overflow: "hidden",
                    boxSizing: "border-box",
                    zIndex: "1"
                })
            }, e.prototype.updateImp = function(t, e, i) {
                var n = e.width,
                    o = e.height,
                    r = e.left;
                t.style.left = "".concat(r, "px");
                var a = i,
                    s = t.clientWidth,
                    l = t.clientHeight;
                switch (n === s && o === l || (t.style.width = "".concat(n, "px"), t.style.height = "".concat(o, "px"), a = 3), a) {
                    case 0:
                        this._mainCanvas.update(n, o);
                        break;
                    case 1:
                        this._overlayCanvas.update(n, o);
                        break;
                    case 3:
                    case 4:
                        this._mainCanvas.update(n, o), this._overlayCanvas.update(n, o)
                }
            }, e.prototype.destroy = function() {
                this._mainCanvas.destroy(), this._overlayCanvas.destroy()
            }, e.prototype.getImage = function(t) {
                var e = this.getBounding(),
                    i = e.width,
                    n = e.height,
                    o = ft("canvas", {
                        width: "".concat(i, "px"),
                        height: "".concat(n, "px"),
                        boxSizing: "border-box"
                    }),
                    r = o.getContext("2d"),
                    a = $(o);
                return o.width = i * a, o.height = n * a, r.scale(a, a), r.drawImage(this._mainCanvas.getElement(), 0, 0, i, n), t && r.drawImage(this._overlayCanvas.getElement(), 0, 0, i, n), o
            }, e
        }(Me);

    function Ae(t) {
        return "transparent" === t || "none" === t || /^[rR][gG][Bb][Aa]\(([\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)[\s]*,){3}[\s]*0[\s]*\)$/.test(t) || /^[hH][Ss][Ll][Aa]\(([\s]*(360｜3[0-5][0-9]|[012]?[0-9][0-9]?)[\s]*,)([\s]*((100|[0-9][0-9]?)%|0)[\s]*,){2}([\s]*0[\s]*)\)$/.test(t)
    }

    function Fe(t, e) {
        var i = [];
        i = i.concat(e);
        for (var n = 0; n < i.length; n++) {
            var o = i[n],
                r = o.x,
                a = o.y,
                s = o.r,
                l = t.x - r,
                c = t.y - a;
            if (!(l * l + c * c > s * s)) return !0
        }
        return !1
    }

    function Le(e, i, n) {
        var o = [];
        o = o.concat(i);
        var r = n.style,
            a = void 0 === r ? t.PolygonType.Fill : r,
            s = n.color,
            l = void 0 === s ? "currentColor" : s,
            c = n.borderSize,
            u = void 0 === c ? 1 : c,
            h = n.borderColor,
            d = void 0 === h ? "currentColor" : h,
            p = n.borderStyle,
            g = void 0 === p ? t.LineType.Solid : p,
            v = n.borderDashedValue,
            f = void 0 === v ? [2, 2] : v,
            y = !(a !== t.PolygonType.Fill && n.style !== t.PolygonType.StrokeFill || W(l) && Ae(l));
        y && (e.fillStyle = l, o.forEach((function(t) {
            var i = t.x,
                n = t.y,
                o = t.r;
            e.beginPath(), e.arc(i, n, o, 0, 2 * Math.PI), e.closePath(), e.fill()
        }))), (a === t.PolygonType.Stroke || n.style === t.PolygonType.StrokeFill) && u > 0 && !Ae(d) && (e.strokeStyle = d, e.lineWidth = u, g === t.LineType.Dashed ? e.setLineDash(f) : e.setLineDash([]), o.forEach((function(t) {
            var i = t.x,
                n = t.y,
                o = t.r;
            (!y || o > u) && (e.beginPath(), e.arc(i, n, o, 0, 2 * Math.PI), e.closePath(), e.stroke())
        })))
    }
    var Re = {
        name: "circle",
        checkEventOn: Fe,
        draw: function(t, e, i) {
            Le(t, e, i)
        }
    };

    function Be(t, e) {
        var i = [];
        i = i.concat(e);
        for (var n = 0; n < i.length; n++) {
            for (var o = !1, r = i[n].coordinates, a = 0, s = r.length - 1; a < r.length; s = a++) r[a].y > t.y != r[s].y > t.y && t.x < (r[s].x - r[a].x) * (t.y - r[a].y) / (r[s].y - r[a].y) + r[a].x && (o = !o);
            if (o) return !0
        }
        return !1
    }

    function Oe(e, i, n) {
        var o = [];
        o = o.concat(i);
        var r = n.style,
            a = void 0 === r ? t.PolygonType.Fill : r,
            s = n.color,
            l = void 0 === s ? "currentColor" : s,
            c = n.borderSize,
            u = void 0 === c ? 1 : c,
            h = n.borderColor,
            d = void 0 === h ? "currentColor" : h,
            p = n.borderStyle,
            g = void 0 === p ? t.LineType.Solid : p,
            v = n.borderDashedValue,
            f = void 0 === v ? [2, 2] : v;
        a !== t.PolygonType.Fill && n.style !== t.PolygonType.StrokeFill || W(l) && Ae(l) || (e.fillStyle = l, o.forEach((function(t) {
            var i = t.coordinates;
            e.beginPath(), e.moveTo(i[0].x, i[0].y);
            for (var n = 1; n < i.length; n++) e.lineTo(i[n].x, i[n].y);
            e.closePath(), e.fill()
        }))), (a === t.PolygonType.Stroke || n.style === t.PolygonType.StrokeFill) && u > 0 && !Ae(d) && (e.strokeStyle = d, e.lineWidth = u, g === t.LineType.Dashed ? e.setLineDash(f) : e.setLineDash([]), o.forEach((function(t) {
            var i = t.coordinates;
            e.beginPath(), e.moveTo(i[0].x, i[0].y);
            for (var n = 1; n < i.length; n++) e.lineTo(i[n].x, i[n].y);
            e.closePath(), e.stroke()
        })))
    }
    var Ve = {
        name: "polygon",
        checkEventOn: Be,
        draw: function(t, e, i) {
            Oe(t, e, i)
        }
    };

    function Ne(t, e) {
        var i = [];
        i = i.concat(e);
        for (var n = 0; n < i.length; n++) {
            var o = i[n],
                r = o.x,
                a = o.width;
            a < 4 && (r -= 2, a = 4);
            var s = o.y,
                l = o.height;
            if (l < 4 && (s -= 2, l = 4), t.x >= r && t.x <= r + a && t.y >= s && t.y <= s + l) return !0
        }
        return !1
    }

    function We(e, i, n) {
        var o, r = [];
        r = r.concat(i);
        var a = n.style,
            s = void 0 === a ? t.PolygonType.Fill : a,
            l = n.color,
            c = void 0 === l ? "transparent" : l,
            u = n.borderSize,
            h = void 0 === u ? 1 : u,
            d = n.borderColor,
            p = void 0 === d ? "transparent" : d,
            g = n.borderStyle,
            v = void 0 === g ? t.LineType.Solid : g,
            f = n.borderRadius,
            y = void 0 === f ? 0 : f,
            m = n.borderDashedValue,
            _ = void 0 === m ? [2, 2] : m,
            x = null !== (o = e.roundRect) && void 0 !== o ? o : e.rect,
            S = !(s !== t.PolygonType.Fill && n.style !== t.PolygonType.StrokeFill || W(c) && Ae(c));
        if (S && (e.fillStyle = c, r.forEach((function(t) {
                var i = t.x,
                    n = t.y,
                    o = t.width,
                    r = t.height;
                e.beginPath(), x.call(e, i, n, o, r, y), e.closePath(), e.fill()
            }))), (s === t.PolygonType.Stroke || n.style === t.PolygonType.StrokeFill) && h > 0 && !Ae(p)) {
            e.strokeStyle = p, e.fillStyle = p, e.lineWidth = h, v === t.LineType.Dashed ? e.setLineDash(_) : e.setLineDash([]);
            var C = h % 2 == 1 ? .5 : 0,
                b = Math.round(2 * C);
            r.forEach((function(t) {
                var i = t.x,
                    n = t.y,
                    o = t.width,
                    r = t.height;
                o > 2 * h && r > 2 * h ? (e.beginPath(), x.call(e, i + C, n + C, o - b, r - b, y), e.closePath(), e.stroke()) : S || e.fillRect(i, n, o, r)
            }))
        }
    }
    var ze = {
        name: "rect",
        checkEventOn: Ne,
        draw: function(t, e, i) {
            We(t, e, i)
        }
    };

    function Ye(t, e) {
        var i, n, o = e.size,
            r = void 0 === o ? 12 : o,
            a = e.paddingLeft,
            s = void 0 === a ? 0 : a,
            l = e.paddingTop,
            c = void 0 === l ? 0 : l,
            u = e.paddingRight,
            h = void 0 === u ? 0 : u,
            d = e.paddingBottom,
            p = void 0 === d ? 0 : d,
            g = e.weight,
            v = void 0 === g ? "normal" : g,
            f = e.family,
            y = t.x,
            m = t.y,
            _ = t.text,
            x = t.align,
            S = void 0 === x ? "left" : x,
            C = t.baseline,
            b = void 0 === C ? "top" : C,
            T = t.width,
            w = t.height,
            E = null != T ? T : s + J(_, r, v, f) + h,
            I = null != w ? w : c + r + p;
        switch (S) {
            case "left":
            case "start":
                i = y;
                break;
            case "right":
            case "end":
                i = y - E;
                break;
            default:
                i = y - E / 2
        }
        switch (b) {
            case "top":
            case "hanging":
                n = m;
                break;
            case "bottom":
            case "ideographic":
            case "alphabetic":
                n = m - I;
                break;
            default:
                n = m - I / 2
        }
        return {
            x: i,
            y: n,
            width: E,
            height: I
        }
    }

    function He(t, e, i) {
        var n = [];
        n = n.concat(e);
        for (var o = 0; o < n.length; o++) {
            var r = Ye(n[o], i),
                a = r.x,
                s = r.y,
                l = r.width,
                c = r.height;
            if (t.x >= a && t.x <= a + l && t.y >= s && t.y <= s + c) return !0
        }
        return !1
    }

    function Xe(t, e, i) {
        var n = [];
        n = n.concat(e);
        var o = i.color,
            r = void 0 === o ? "currentColor" : o,
            a = i.size,
            s = void 0 === a ? 12 : a,
            l = i.family,
            c = i.weight,
            u = i.paddingLeft,
            h = void 0 === u ? 0 : u,
            p = i.paddingTop,
            g = void 0 === p ? 0 : p,
            v = i.paddingRight,
            f = void 0 === v ? 0 : v,
            y = n.map((function(t) {
                return Ye(t, i)
            }));
        We(t, y, d(d({}, i), {
            color: i.backgroundColor
        })), t.textAlign = "left", t.textBaseline = "top", t.font = Q(s, c, l), t.fillStyle = r, n.forEach((function(e, i) {
            var n = y[i];
            t.fillText(e.text, n.x + h, n.y + g, n.width - h - f)
        }))
    }
    var Ge = {
            name: "text",
            checkEventOn: He,
            draw: function(t, e, i) {
                Xe(t, e, i)
            }
        },
        je = Xe;

    function Ke(t, e) {
        var i, n, o, r, a = [];
        a = a.concat(e);
        for (var s = 0; s < a.length; s++) {
            var l = a[s];
            if (Math.abs((n = l, o = void 0, r = void 0, o = (i = t).x - n.x, r = i.y - n.y, Math.sqrt(o * o + r * r) - l.r)) < 2) {
                var c = l.r,
                    u = l.startAngle,
                    h = l.endAngle,
                    d = c * Math.cos(u) + l.x,
                    p = c * Math.sin(u) + l.y,
                    g = c * Math.cos(h) + l.x,
                    v = c * Math.sin(h) + l.y;
                if (t.x <= Math.max(d, g) + 2 && t.x >= Math.min(d, g) - 2 && t.y <= Math.max(p, v) + 2 && t.y >= Math.min(p, v) - 2) return !0
            }
        }
        return !1
    }

    function Ze(e, i, n) {
        var o = [];
        o = o.concat(i);
        var r = n.style,
            a = void 0 === r ? t.LineType.Solid : r,
            s = n.size,
            l = void 0 === s ? 1 : s,
            c = n.color,
            u = void 0 === c ? "currentColor" : c,
            h = n.dashedValue,
            d = void 0 === h ? [2, 2] : h;
        e.lineWidth = l, e.strokeStyle = u, a === t.LineType.Dashed ? e.setLineDash(d) : e.setLineDash([]), o.forEach((function(t) {
            var i = t.x,
                n = t.y,
                o = t.r,
                r = t.startAngle,
                a = t.endAngle;
            e.beginPath(), e.arc(i, n, o, r, a), e.stroke(), e.closePath()
        }))
    }
    var Ue = {
            name: "arc",
            checkEventOn: Ke,
            draw: function(t, e, i) {
                Ze(t, e, i)
            }
        },
        qe = {};
    [Re, oe, Ve, ze, Ge, Ge, Ue].forEach((function(t) {
        qe[t.name] = $t.extend(t)
    }));
    var $e = function(t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._widget = e, i
            }
            return i(e, t), e.prototype.getWidget = function() {
                return this._widget
            }, e.prototype.createFigure = function(t, e) {
                var i, n, o = (i = t.name, null !== (n = qe[i]) && void 0 !== n ? n : null);
                if (null !== o) {
                    var r = new o(t);
                    if (V(e)) {
                        for (var a in e) e.hasOwnProperty(a) && r.registerEvent(a, e[a]);
                        this.addChild(r)
                    }
                    return r
                }
                return null
            }, e.prototype.draw = function(t) {
                this.clear(), this.drawImp(t)
            }, e
        }(qt),
        Qe = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(e, t), e.prototype.drawImp = function(t) {
                var e, i, n = this.getWidget(),
                    o = this.getWidget().getPane(),
                    r = o.getChart(),
                    a = n.getBounding(),
                    s = r.getStyles().grid;
                if (s.show) {
                    t.save(), t.globalCompositeOperation = "destination-over";
                    var l = s.horizontal;
                    if (l.show) {
                        var c = o.getAxisComponent().getTicks().map((function(t) {
                            return {
                                coordinates: [{
                                    x: 0,
                                    y: t.coord
                                }, {
                                    x: a.width,
                                    y: t.coord
                                }]
                            }
                        }));
                        null === (e = this.createFigure({
                            name: "line",
                            attrs: c,
                            styles: l
                        })) || void 0 === e || e.draw(t)
                    }
                    var u = s.vertical;
                    if (u.show) {
                        c = r.getXAxisPane().getAxisComponent().getTicks().map((function(t) {
                            return {
                                coordinates: [{
                                    x: t.coord,
                                    y: 0
                                }, {
                                    x: t.coord,
                                    y: a.height
                                }]
                            }
                        }));
                        null === (i = this.createFigure({
                            name: "line",
                            attrs: c,
                            styles: u
                        })) || void 0 === i || i.draw(t)
                    }
                    t.restore()
                }
            }, e
        }($e),
        Je = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(e, t), e.prototype.eachChildren = function(t) {
                var e = this.getWidget().getPane().getChart().getChartStore(),
                    i = e.getVisibleDataList(),
                    n = e.getTimeScaleStore().getBarSpace();
                i.forEach((function(e, i) {
                    t(e, n, i)
                }))
            }, e
        }($e),
        ti = function(e) {
            function n() {
                var i = null !== e && e.apply(this, arguments) || this;
                return i._boundCandleBarClickEvent = function(e) {
                    return function() {
                        return i.getWidget().getPane().getChart().getChartStore().getActionStore().execute(t.ActionType.OnCandleBarClick, e), !1
                    }
                }, i
            }
            return i(n, e), n.prototype.drawImp = function(e) {
                var i = this,
                    n = this.getWidget().getPane(),
                    o = n.getId() === fe,
                    r = n.getChart().getChartStore(),
                    a = this.getCandleBarOptions(r);
                if (null !== a) {
                    var s = 0,
                        l = 0;
                    if (a.type === t.CandleType.Ohlc) {
                        var c = r.getTimeScaleStore().getBarSpace().gapBar;
                        (s = Math.min(Math.max(Math.round(.2 * c), 1), 8)) > 2 && s % 2 == 1 && s--, l = Math.floor(l / 2)
                    }
                    var u = n.getAxisComponent();
                    this.eachChildren((function(n, r) {
                        var c = n.data,
                            h = n.x;
                        if (V(c)) {
                            var d = c.open,
                                p = c.high,
                                g = c.low,
                                v = c.close,
                                f = a.type,
                                y = a.styles,
                                m = [];
                            v > d ? (m[0] = y.upColor, m[1] = y.upBorderColor, m[2] = y.upWickColor) : v < d ? (m[0] = y.downColor, m[1] = y.downBorderColor, m[2] = y.downWickColor) : (m[0] = y.noChangeColor, m[1] = y.noChangeBorderColor, m[2] = y.noChangeWickColor);
                            var _ = u.convertToPixel(d),
                                x = u.convertToPixel(v),
                                S = [_, x, u.convertToPixel(p), u.convertToPixel(g)];
                            S.sort((function(t, e) {
                                return t - e
                            }));
                            var C = [];
                            switch (f) {
                                case t.CandleType.CandleSolid:
                                    C = i._createSolidBar(h, S, r, m);
                                    break;
                                case t.CandleType.CandleStroke:
                                    C = i._createStrokeBar(h, S, r, m);
                                    break;
                                case t.CandleType.CandleUpStroke:
                                    C = v > d ? i._createStrokeBar(h, S, r, m) : i._createSolidBar(h, S, r, m);
                                    break;
                                case t.CandleType.CandleDownStroke:
                                    C = d > v ? i._createStrokeBar(h, S, r, m) : i._createSolidBar(h, S, r, m);
                                    break;
                                case t.CandleType.Ohlc:
                                    C = [{
                                        name: "rect",
                                        attrs: [{
                                            x: h - l,
                                            y: S[0],
                                            width: s,
                                            height: S[3] - S[0]
                                        }, {
                                            x: h - r.halfGapBar,
                                            y: _ + s > S[3] ? S[3] - s : _,
                                            width: r.halfGapBar,
                                            height: s
                                        }, {
                                            x: h + l,
                                            y: x + s > S[3] ? S[3] - s : x,
                                            width: r.halfGapBar - l,
                                            height: s
                                        }],
                                        styles: {
                                            color: m[0]
                                        }
                                    }]
                            }
                            C.forEach((function(t) {
                                var r, a;
                                o && (a = {
                                    mouseClickEvent: i._boundCandleBarClickEvent(n)
                                }), null === (r = i.createFigure(t, a)) || void 0 === r || r.draw(e)
                            }))
                        }
                    }))
                }
            }, n.prototype.getCandleBarOptions = function(t) {
                var e = t.getStyles().candle;
                return {
                    type: e.type,
                    styles: e.bar
                }
            }, n.prototype._createSolidBar = function(e, i, n, o) {
                return [{
                    name: "rect",
                    attrs: {
                        x: e,
                        y: i[0],
                        width: 1,
                        height: i[3] - i[0]
                    },
                    styles: {
                        color: o[2]
                    }
                }, {
                    name: "rect",
                    attrs: {
                        x: e - n.halfGapBar,
                        y: i[1],
                        width: n.gapBar,
                        height: Math.max(1, i[2] - i[1])
                    },
                    styles: {
                        style: t.PolygonType.StrokeFill,
                        color: o[0],
                        borderColor: o[1]
                    }
                }]
            }, n.prototype._createStrokeBar = function(e, i, n, o) {
                return [{
                    name: "rect",
                    attrs: [{
                        x: e,
                        y: i[0],
                        width: 1,
                        height: i[1] - i[0]
                    }, {
                        x: e,
                        y: i[2],
                        width: 1,
                        height: i[3] - i[2]
                    }],
                    styles: {
                        color: o[2]
                    }
                }, {
                    name: "rect",
                    attrs: {
                        x: e - n.halfGapBar,
                        y: i[1],
                        width: n.gapBar,
                        height: Math.max(1, i[2] - i[1])
                    },
                    styles: {
                        style: t.PolygonType.Stroke,
                        borderColor: o[1]
                    }
                }]
            }, n
        }(Je),
        ei = function(e) {
            function n() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i(n, e), n.prototype.getCandleBarOptions = function(e) {
                var i, n, o = this.getWidget().getPane();
                if (!o.getAxisComponent().isInCandle()) {
                    var r = e.getIndicatorStore().getInstances(o.getId());
                    try {
                        for (var a = v(r), s = a.next(); !s.done; s = a.next()) {
                            var l = s.value;
                            if (l.shouldOhlc && l.visible) {
                                var c = l.styles,
                                    u = e.getStyles().indicator,
                                    h = G(c, "ohlc.upColor", u.ohlc.upColor),
                                    d = G(c, "ohlc.downColor", u.ohlc.downColor),
                                    p = G(c, "ohlc.noChangeColor", u.ohlc.noChangeColor);
                                return {
                                    type: t.CandleType.Ohlc,
                                    styles: {
                                        upColor: h,
                                        downColor: d,
                                        noChangeColor: p,
                                        upBorderColor: h,
                                        downBorderColor: d,
                                        noChangeBorderColor: p,
                                        upWickColor: h,
                                        downWickColor: d,
                                        noChangeWickColor: p
                                    }
                                }
                            }
                        }
                    } catch (t) {
                        i = {
                            error: t
                        }
                    } finally {
                        try {
                            s && !s.done && (n = a.return) && n.call(a)
                        } finally {
                            if (i) throw i.error
                        }
                    }
                }
                return null
            }, n.prototype.drawImp = function(t) {
                var i = this;
                e.prototype.drawImp.call(this, t);
                var n = this.getWidget(),
                    o = n.getPane(),
                    r = o.getChart(),
                    a = n.getBounding(),
                    s = r.getXAxisPane().getAxisComponent(),
                    l = o.getAxisComponent(),
                    c = r.getChartStore(),
                    u = c.getDataList(),
                    h = c.getTimeScaleStore(),
                    d = h.getVisibleRange(),
                    p = c.getIndicatorStore().getInstances(o.getId()),
                    g = c.getStyles().indicator;
                t.save(), p.forEach((function(e) {
                    var n;
                    if (e.visible) {
                        e.zLevel < 0 ? t.globalCompositeOperation = "destination-over" : t.globalCompositeOperation = "source-over";
                        var o = !1;
                        if (null !== e.draw && (t.save(), o = null !== (n = e.draw({
                                ctx: t,
                                kLineDataList: u,
                                indicator: e,
                                visibleRange: d,
                                bounding: a,
                                barSpace: h.getBarSpace(),
                                defaultStyles: g,
                                xAxis: s,
                                yAxis: l
                            })) && void 0 !== n && n, t.restore()), !o) {
                            var r = e.result,
                                c = [];
                            i.eachChildren((function(n, o) {
                                var h, d, p, v = o.halfGapBar,
                                    f = n.dataIndex,
                                    y = n.x,
                                    m = s.convertToPixel(f - 1),
                                    _ = s.convertToPixel(f + 1),
                                    x = null !== (h = r[f - 1]) && void 0 !== h ? h : null,
                                    S = null !== (d = r[f]) && void 0 !== d ? d : null,
                                    C = null !== (p = r[f + 1]) && void 0 !== p ? p : null,
                                    b = {
                                        x: m
                                    },
                                    T = {
                                        x: y
                                    },
                                    w = {
                                        x: _
                                    };
                                e.figures.forEach((function(t) {
                                    var e = t.key,
                                        i = null == x ? void 0 : x[e];
                                    O(i) && (b[e] = l.convertToPixel(i));
                                    var n = null == S ? void 0 : S[e];
                                    O(n) && (T[e] = l.convertToPixel(n));
                                    var o = null == C ? void 0 : C[e];
                                    O(o) && (w[e] = l.convertToPixel(o))
                                })), it(u, e, f, g, (function(e, n, r) {
                                    var u, h, d;
                                    if (V(null == S ? void 0 : S[e.key])) {
                                        var p = T[e.key],
                                            g = null === (u = e.attrs) || void 0 === u ? void 0 : u.call(e, {
                                                data: {
                                                    prev: x,
                                                    current: S,
                                                    next: C
                                                },
                                                coordinate: {
                                                    prev: b,
                                                    current: T,
                                                    next: w
                                                },
                                                bounding: a,
                                                barSpace: o,
                                                xAxis: s,
                                                yAxis: l
                                            });
                                        if (!V(g)) switch (e.type) {
                                            case "circle":
                                                g = {
                                                    x: y,
                                                    y: p,
                                                    r: Math.max(1, v)
                                                };
                                                break;
                                            case "rect":
                                            case "bar":
                                                var f = null !== (h = e.baseValue) && void 0 !== h ? h : l.getRange().from,
                                                    m = l.convertToPixel(f),
                                                    _ = Math.abs(m - p);
                                                f !== (null == S ? void 0 : S[e.key]) && (_ = Math.max(1, _));
                                                g = {
                                                    x: y - v,
                                                    y: p > m ? m : p,
                                                    width: Math.max(1, 2 * v),
                                                    height: _
                                                };
                                                break;
                                            case "line":
                                                V(c[r]) || (c[r] = []), O(T[e.key]) && O(w[e.key]) && c[r].push({
                                                    coordinates: [{
                                                        x: T.x,
                                                        y: T[e.key]
                                                    }, {
                                                        x: w.x,
                                                        y: w[e.key]
                                                    }],
                                                    styles: n
                                                })
                                        }
                                        var E = e.type;
                                        V(g) && "line" !== E && (null === (d = i.createFigure({
                                            name: "bar" === E ? "rect" : E,
                                            attrs: g,
                                            styles: n
                                        })) || void 0 === d || d.draw(t))
                                    }
                                }))
                            })), c.forEach((function(e) {
                                if (e.length > 1) {
                                    for (var n = [{
                                            coordinates: [e[0].coordinates[0], e[0].coordinates[1]],
                                            styles: e[0].styles
                                        }], o = 1; o < e.length; o++) {
                                        var r = n[n.length - 1],
                                            a = e[o],
                                            s = r.coordinates[r.coordinates.length - 1];
                                        s.x === a.coordinates[0].x && s.y === a.coordinates[0].y && r.styles.style === a.styles.style && r.styles.color === a.styles.color && r.styles.size === a.styles.size && r.styles.smooth === a.styles.smooth && r.styles.dashedValue[0] === a.styles.dashedValue[0] && r.styles.dashedValue[1] === a.styles.dashedValue[1] ? r.coordinates.push(a.coordinates[1]) : n.push({
                                            coordinates: [a.coordinates[0], a.coordinates[1]],
                                            styles: a.styles
                                        })
                                    }
                                    n.forEach((function(e) {
                                        var n, o = e.coordinates,
                                            r = e.styles;
                                        null === (n = i.createFigure({
                                            name: "line",
                                            attrs: {
                                                coordinates: o
                                            },
                                            styles: r
                                        })) || void 0 === n || n.draw(t)
                                    }))
                                }
                            }))
                        }
                    }
                })), t.restore()
            }, n
        }(ti),
        ii = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(e, t), e.prototype.drawImp = function(t) {
                var e = this.getWidget(),
                    i = e.getPane(),
                    n = e.getBounding(),
                    o = e.getPane().getChart().getChartStore(),
                    r = o.getTooltipStore().getCrosshair(),
                    a = o.getStyles().crosshair;
                if (W(r.paneId) && a.show) {
                    if (r.paneId === i.getId()) {
                        var s = r.y;
                        this._drawLine(t, [{
                            x: 0,
                            y: s
                        }, {
                            x: n.width,
                            y: s
                        }], a.horizontal)
                    }
                    var l = r.realX;
                    this._drawLine(t, [{
                        x: l,
                        y: 0
                    }, {
                        x: l,
                        y: n.height
                    }], a.vertical)
                }
            }, e.prototype._drawLine = function(t, e, i) {
                var n;
                if (i.show) {
                    var o = i.line;
                    o.show && (null === (n = this.createFigure({
                        name: "line",
                        attrs: {
                            coordinates: e
                        },
                        styles: o
                    })) || void 0 === n || n.draw(t))
                }
            }, e
        }($e),
        ni = function(e) {
            function n() {
                var i = null !== e && e.apply(this, arguments) || this;
                return i._boundIconClickEvent = function(e) {
                    return function() {
                        return i.getWidget().getPane().getChart().getChartStore().getActionStore().execute(t.ActionType.OnTooltipIconClick, d({}, e)), !0
                    }
                }, i._boundIconMouseMoveEvent = function(t) {
                    return function() {
                        return i.getWidget().getPane().getChart().getChartStore().getTooltipStore().setActiveIcon(d({}, t)), !0
                    }
                }, i
            }
            return i(n, e), n.prototype.drawImp = function(t) {
                var e = this.getWidget(),
                    i = e.getPane(),
                    n = i.getChart().getChartStore(),
                    o = n.getTooltipStore().getCrosshair();
                if (V(o.kLineData)) {
                    var r = e.getBounding(),
                        a = n.getCustomApi(),
                        s = n.getThousandsSeparator(),
                        l = n.getDecimalFoldThreshold(),
                        c = n.getIndicatorStore().getInstances(i.getId()),
                        u = n.getTooltipStore().getActiveIcon(),
                        h = n.getStyles().indicator,
                        d = h.tooltip,
                        p = d.offsetLeft,
                        g = d.offsetTop,
                        v = d.offsetRight;
                    this.drawIndicatorTooltip(t, i.getId(), n.getDataList(), o, u, c, a, s, l, p, g, r.width - v, h)
                }
            }, n.prototype.drawIndicatorTooltip = function(t, e, i, n, o, r, a, s, l, c, u, h, d) {
                var p = this,
                    g = d.tooltip;
                if (this.isDrawTooltip(n, g)) {
                    var v = g.text;
                    r.forEach((function(r) {
                        var y = 0,
                            m = {
                                x: c,
                                y: u
                            },
                            _ = p.getIndicatorTooltipData(i, n, r, a, s, l, d),
                            x = _.name,
                            S = _.calcParamsText,
                            C = _.values,
                            b = _.icons,
                            T = x.length > 0,
                            w = C.length > 0;
                        if (T || w) {
                            var E = f(p.classifyTooltipIcons(b), 3),
                                I = E[0],
                                P = E[1],
                                D = E[2];
                            if (y = p.drawStandardTooltipIcons(t, o, I, m, e, r.name, c, y, h), T) {
                                var M = x;
                                S.length > 0 && (M = "".concat(M).concat(S)), y = p.drawStandardTooltipLegends(t, [{
                                    title: {
                                        text: "",
                                        color: v.color
                                    },
                                    value: {
                                        text: M,
                                        color: v.color
                                    }
                                }], m, c, y, h, v)
                            }
                            y = p.drawStandardTooltipIcons(t, o, P, m, e, r.name, c, y, h), w && (y = p.drawStandardTooltipLegends(t, C, m, c, y, h, g.text)), y = p.drawStandardTooltipIcons(t, o, D, m, e, r.name, c, y, h), u = m.y + y
                        }
                    }))
                }
                return u
            }, n.prototype.drawStandardTooltipIcons = function(t, e, i, n, o, r, a, s, l) {
                var c = this;
                if (i.length > 0) {
                    var u = 0,
                        h = 0;
                    i.forEach((function(e) {
                        var i = e.marginLeft,
                            n = void 0 === i ? 0 : i,
                            o = e.marginTop,
                            r = void 0 === o ? 0 : o,
                            a = e.marginRight,
                            s = void 0 === a ? 0 : a,
                            l = e.marginBottom,
                            c = void 0 === l ? 0 : l,
                            d = e.paddingLeft,
                            p = void 0 === d ? 0 : d,
                            g = e.paddingTop,
                            v = void 0 === g ? 0 : g,
                            f = e.paddingRight,
                            y = void 0 === f ? 0 : f,
                            m = e.paddingBottom,
                            _ = void 0 === m ? 0 : m,
                            x = e.size,
                            S = e.fontFamily,
                            C = e.icon;
                        t.font = Q(x, "normal", S), u += n + p + t.measureText(C).width + y + s, h = Math.max(h, r + v + x + _ + c)
                    })), n.x + u > l ? (n.x = a, n.y += s, s = h) : s = Math.max(s, h), i.forEach((function(i) {
                        var a, s = i.marginLeft,
                            l = void 0 === s ? 0 : s,
                            u = i.marginTop,
                            h = void 0 === u ? 0 : u,
                            d = i.marginRight,
                            p = void 0 === d ? 0 : d,
                            g = i.paddingLeft,
                            v = void 0 === g ? 0 : g,
                            f = i.paddingTop,
                            y = void 0 === f ? 0 : f,
                            m = i.paddingRight,
                            _ = void 0 === m ? 0 : m,
                            x = i.paddingBottom,
                            S = void 0 === x ? 0 : x,
                            C = i.color,
                            b = i.activeColor,
                            T = i.size,
                            w = i.fontFamily,
                            E = i.icon,
                            I = i.backgroundColor,
                            P = i.activeBackgroundColor,
                            D = (null == e ? void 0 : e.paneId) === o && (null == e ? void 0 : e.indicatorName) === r && (null == e ? void 0 : e.iconId) === i.id;
                        null === (a = c.createFigure({
                            name: "text",
                            attrs: {
                                text: E,
                                x: n.x + l,
                                y: n.y + h
                            },
                            styles: {
                                paddingLeft: v,
                                paddingTop: y,
                                paddingRight: _,
                                paddingBottom: S,
                                color: D ? b : C,
                                size: T,
                                family: w,
                                backgroundColor: D ? P : I
                            }
                        }, {
                            mouseClickEvent: c._boundIconClickEvent({
                                paneId: o,
                                indicatorName: r,
                                iconId: i.id
                            }),
                            mouseMoveEvent: c._boundIconMouseMoveEvent({
                                paneId: o,
                                indicatorName: r,
                                iconId: i.id
                            })
                        })) || void 0 === a || a.draw(t), n.x += l + v + t.measureText(E).width + _ + p
                    }))
                }
                return s
            }, n.prototype.drawStandardTooltipLegends = function(t, e, i, n, o, r, a) {
                var s = this;
                if (e.length > 0) {
                    var l = a.marginLeft,
                        c = a.marginTop,
                        u = a.marginRight,
                        h = a.marginBottom,
                        d = a.size,
                        p = a.family,
                        g = a.weight;
                    t.font = Q(d, g, p), e.forEach((function(e) {
                        var a, v, f = e.title,
                            y = e.value,
                            m = t.measureText(f.text).width,
                            _ = m + t.measureText(y.text).width,
                            x = c + d + h;
                        i.x + l + _ + u > r ? (i.x = n, i.y += o, o = x) : o = Math.max(o, x), f.text.length > 0 && (null === (a = s.createFigure({
                            name: "text",
                            attrs: {
                                x: i.x + l,
                                y: i.y + c,
                                text: f.text
                            },
                            styles: {
                                color: f.color,
                                size: d,
                                family: p,
                                weight: g
                            }
                        })) || void 0 === a || a.draw(t)), null === (v = s.createFigure({
                            name: "text",
                            attrs: {
                                x: i.x + l + m,
                                y: i.y + c,
                                text: y.text
                            },
                            styles: {
                                color: y.color,
                                size: d,
                                family: p,
                                weight: g
                            }
                        })) || void 0 === v || v.draw(t), i.x += l + _ + u
                    }))
                }
                return o
            }, n.prototype.isDrawTooltip = function(e, i) {
                var n = i.showRule;
                return n === t.TooltipShowRule.Always || n === t.TooltipShowRule.FollowCross && W(e.paneId)
            }, n.prototype.getIndicatorTooltipData = function(t, e, i, n, o, r, a) {
                var s, l, c = a.tooltip,
                    u = c.showName ? i.shortName : "",
                    h = "",
                    d = i.calcParams;
                d.length > 0 && c.showParams && (h = "(".concat(d.join(","), ")"));
                var p = {
                        name: u,
                        calcParamsText: h,
                        values: [],
                        icons: c.icons
                    },
                    g = e.dataIndex,
                    v = null !== (s = i.result) && void 0 !== s ? s : [],
                    f = [];
                if (i.visible) {
                    var y = null !== (l = v[g]) && void 0 !== l ? l : {};
                    it(t, i, g, a, (function(t, e) {
                        if (W(t.title)) {
                            var a = e.color,
                                s = y[t.key];
                            O(s) && (s = K(s, i.precision), i.shouldFormatBigNumber && (s = n.formatBigNumber(s))), f.push({
                                title: {
                                    text: t.title,
                                    color: a
                                },
                                value: {
                                    text: q(U(null != s ? s : c.defaultValue, o), r),
                                    color: a
                                }
                            })
                        }
                    })), p.values = f
                }
                if (null !== i.createTooltipDataSource) {
                    var m = this.getWidget(),
                        _ = m.getPane(),
                        x = _.getChart().getChartStore(),
                        S = i.createTooltipDataSource({
                            kLineDataList: t,
                            indicator: i,
                            visibleRange: x.getTimeScaleStore().getVisibleRange(),
                            bounding: m.getBounding(),
                            crosshair: e,
                            defaultStyles: a,
                            xAxis: _.getChart().getXAxisPane().getAxisComponent(),
                            yAxis: _.getAxisComponent()
                        }),
                        C = S.name,
                        b = S.calcParamsText,
                        T = S.values,
                        w = S.icons;
                    if (W(C) && c.showName && (p.name = C), W(b) && c.showParams && (p.calcParamsText = b), V(w) && (p.icons = w), V(T) && i.visible) {
                        var E = [],
                            I = a.tooltip.text.color;
                        T.forEach((function(t) {
                            var e = {
                                text: "",
                                color: I
                            };
                            B(t.title) ? e = t.title : e.text = t.title;
                            var i = {
                                text: "",
                                color: I
                            };
                            B(t.value) ? i = t.value : i.text = t.value, i.text = q(U(i.text, o), r), E.push({
                                title: e,
                                value: i
                            })
                        })), p.values = E
                    }
                }
                return p
            }, n.prototype.classifyTooltipIcons = function(e) {
                var i = [],
                    n = [],
                    o = [];
                return e.forEach((function(e) {
                    switch (e.position) {
                        case t.TooltipIconPosition.Left:
                            i.push(e);
                            break;
                        case t.TooltipIconPosition.Middle:
                            n.push(e);
                            break;
                        case t.TooltipIconPosition.Right:
                            o.push(e)
                    }
                })), [i, n, o]
            }, n
        }($e),
        oi = function(e) {
            function n(t) {
                var i = e.call(this, t) || this;
                return i._initEvent(), i
            }
            return i(n, e), n.prototype._initEvent = function() {
                var t = this,
                    e = this.getWidget().getPane(),
                    i = e.getId(),
                    n = e.getChart().getChartStore().getOverlayStore();
                this.registerEvent("mouseMoveEvent", (function(e) {
                    var o, r = n.getProgressInstanceInfo();
                    if (null !== r) {
                        var a = r.instance,
                            s = r.paneId;
                        a.isStart() && (n.updateProgressInstanceInfo(i), s = i);
                        var l = a.points.length - 1,
                            c = "".concat(at, "point_").concat(l);
                        return a.isDrawing() && s === i && (a.eventMoveForDrawing(t._coordinateToPoint(r.instance, e)), null === (o = a.onDrawing) || void 0 === o || o.call(a, d({
                            overlay: a,
                            figureKey: c,
                            figureIndex: l
                        }, e))), t._figureMouseMoveEvent(a, 1, c, l, 0)(e)
                    }
                    return n.setHoverInstanceInfo({
                        paneId: i,
                        instance: null,
                        figureType: 0,
                        figureKey: "",
                        figureIndex: -1,
                        attrsIndex: -1
                    }, e), !1
                })).registerEvent("mouseClickEvent", (function(e) {
                    var o, r, a = n.getProgressInstanceInfo();
                    if (null !== a) {
                        var s = a.instance,
                            l = a.paneId;
                        s.isStart() && (n.updateProgressInstanceInfo(i, !0), l = i);
                        var c = s.points.length - 1,
                            u = "".concat(at, "point_").concat(c);
                        return s.isDrawing() && l === i && (s.eventMoveForDrawing(t._coordinateToPoint(s, e)), null === (o = s.onDrawing) || void 0 === o || o.call(s, d({
                            overlay: s,
                            figureKey: u,
                            figureIndex: c
                        }, e)), s.nextStep(), s.isDrawing() || (n.progressInstanceComplete(), null === (r = s.onDrawEnd) || void 0 === r || r.call(s, d({
                            overlay: s,
                            figureKey: u,
                            figureIndex: c
                        }, e)))), t._figureMouseClickEvent(s, 1, u, c, 0)(e)
                    }
                    return n.setClickInstanceInfo({
                        paneId: i,
                        instance: null,
                        figureType: 0,
                        figureKey: "",
                        figureIndex: -1,
                        attrsIndex: -1
                    }, e), !1
                })).registerEvent("mouseDoubleClickEvent", (function(e) {
                    var o, r = n.getProgressInstanceInfo();
                    if (null !== r) {
                        var a = r.instance,
                            s = r.paneId;
                        if (a.isDrawing() && s === i && (a.forceComplete(), !a.isDrawing())) {
                            n.progressInstanceComplete();
                            var l = a.points.length - 1,
                                c = "".concat(at, "point_").concat(l);
                            null === (o = a.onDrawEnd) || void 0 === o || o.call(a, d({
                                overlay: a,
                                figureKey: c,
                                figureIndex: l
                            }, e))
                        }
                        var u = a.points.length - 1;
                        return t._figureMouseClickEvent(a, 1, "".concat(at, "point_").concat(u), u, 0)(e)
                    }
                    return !1
                })).registerEvent("mouseRightClickEvent", (function(e) {
                    var i = n.getProgressInstanceInfo();
                    if (null !== i) {
                        var o = i.instance;
                        if (o.isDrawing()) {
                            var r = o.points.length - 1;
                            return t._figureMouseRightClickEvent(o, 1, "".concat(at, "point_").concat(r), r, 0)(e)
                        }
                    }
                    return !1
                })).registerEvent("mouseUpEvent", (function(t) {
                    var e, o = n.getPressedInstanceInfo(),
                        r = o.instance,
                        a = o.figureIndex,
                        s = o.figureKey;
                    return null !== r && (null === (e = r.onPressedMoveEnd) || void 0 === e || e.call(r, d({
                        overlay: r,
                        figureKey: s,
                        figureIndex: a
                    }, t))), n.setPressedInstanceInfo({
                        paneId: i,
                        instance: null,
                        figureType: 0,
                        figureKey: "",
                        figureIndex: -1,
                        attrsIndex: -1
                    }), !1
                })).registerEvent("pressedMouseMoveEvent", (function(e) {
                    var i, o, r = n.getPressedInstanceInfo(),
                        a = r.instance,
                        s = r.figureType,
                        l = r.figureIndex,
                        c = r.figureKey;
                    if (null !== a) {
                        if (!(a.lock || null !== (o = null === (i = a.onPressedMoving) || void 0 === i ? void 0 : i.call(a, d({
                                overlay: a,
                                figureIndex: l,
                                figureKey: c
                            }, e))) && void 0 !== o && o)) {
                            var u = t._coordinateToPoint(a, e);
                            1 === s ? a.eventPressedPointMove(u, l) : a.eventPressedOtherMove(u, t.getWidget().getPane().getChart().getChartStore().getTimeScaleStore())
                        }
                        return !0
                    }
                    return !1
                }))
            }, n.prototype._createFigureEvents = function(t, e, i, n, o, r) {
                var a;
                if (!t.isDrawing()) {
                    var s = [];
                    if (V(r) && (N(r) ? r && (s = ["mouseClickEvent", "mouseDoubleClickEvent", "mouseRightClickEvent", "tapEvent", "doubleTapEvent", "mouseDownEvent", "touchStartEvent", "mouseMoveEvent", "touchMoveEvent"]) : s = r), 0 === s.length) return {
                        mouseMoveEvent: this._figureMouseMoveEvent(t, e, i, n, o),
                        mouseDownEvent: this._figureMouseDownEvent(t, e, i, n, o),
                        mouseClickEvent: this._figureMouseClickEvent(t, e, i, n, o),
                        mouseRightClickEvent: this._figureMouseRightClickEvent(t, e, i, n, o),
                        mouseDoubleClickEvent: this._figureMouseDoubleClickEvent(t, e, i, n, o)
                    };
                    a = {}, s.includes("mouseMoveEvent") || s.includes("touchMoveEvent") || (a.mouseMoveEvent = this._figureMouseMoveEvent(t, e, i, n, o)), s.includes("mouseDownEvent") || s.includes("touchStartEvent") || (a.mouseDownEvent = this._figureMouseDownEvent(t, e, i, n, o)), s.includes("mouseClickEvent") || s.includes("tapEvent") || (a.mouseClickEvent = this._figureMouseClickEvent(t, e, i, n, o)), s.includes("mouseDoubleClickEvent") || s.includes("doubleTapEvent") || (a.mouseDoubleClickEvent = this._figureMouseDoubleClickEvent(t, e, i, n, o)), s.includes("mouseRightClickEvent") || (a.mouseRightClickEvent = this._figureMouseRightClickEvent(t, e, i, n, o))
                }
                return a
            }, n.prototype._figureMouseMoveEvent = function(t, e, i, n, o) {
                var r = this;
                return function(a) {
                    var s = r.getWidget().getPane();
                    return s.getChart().getChartStore().getOverlayStore().setHoverInstanceInfo({
                        paneId: s.getId(),
                        instance: t,
                        figureType: e,
                        figureKey: i,
                        figureIndex: n,
                        attrsIndex: o
                    }, a), !0
                }
            }, n.prototype._figureMouseDownEvent = function(t, e, i, n, o) {
                var r = this;
                return function(a) {
                    var s, l = r.getWidget().getPane(),
                        c = l.getId(),
                        u = l.getChart().getChartStore().getOverlayStore();
                    return t.startPressedMove(r._coordinateToPoint(t, a)), null === (s = t.onPressedMoveStart) || void 0 === s || s.call(t, d({
                        overlay: t,
                        figureIndex: n,
                        figureKey: i
                    }, a)), u.setPressedInstanceInfo({
                        paneId: c,
                        instance: t,
                        figureType: e,
                        figureKey: i,
                        figureIndex: n,
                        attrsIndex: o
                    }), !0
                }
            }, n.prototype._figureMouseClickEvent = function(t, e, i, n, o) {
                var r = this;
                return function(a) {
                    var s = r.getWidget().getPane(),
                        l = s.getId();
                    return s.getChart().getChartStore().getOverlayStore().setClickInstanceInfo({
                        paneId: l,
                        instance: t,
                        figureType: e,
                        figureKey: i,
                        figureIndex: n,
                        attrsIndex: o
                    }, a), !0
                }
            }, n.prototype._figureMouseDoubleClickEvent = function(t, e, i, n, o) {
                return function(e) {
                    var o;
                    return null === (o = t.onDoubleClick) || void 0 === o || o.call(t, d(d({}, e), {
                        figureIndex: n,
                        figureKey: i,
                        overlay: t
                    })), !0
                }
            }, n.prototype._figureMouseRightClickEvent = function(t, e, i, n, o) {
                var r = this;
                return function(e) {
                    var o, a;
                    null !== (a = null === (o = t.onRightClick) || void 0 === o ? void 0 : o.call(t, d({
                        overlay: t,
                        figureIndex: n,
                        figureKey: i
                    }, e))) && void 0 !== a && a || r.getWidget().getPane().getChart().getChartStore().getOverlayStore().removeInstance(t);
                    return !0
                }
            }, n.prototype._coordinateToPoint = function(e, i) {
                var n, o = {},
                    r = this.getWidget().getPane(),
                    a = r.getChart(),
                    s = r.getId(),
                    l = a.getChartStore().getTimeScaleStore();
                if (this.coordinateToPointTimestampDataIndexFlag()) {
                    var c = a.getXAxisPane().getAxisComponent().convertFromPixel(i.x),
                        u = null !== (n = l.dataIndexToTimestamp(c)) && void 0 !== n ? n : void 0;
                    o.dataIndex = c, o.timestamp = u
                }
                if (this.coordinateToPointValueFlag()) {
                    var h = r.getAxisComponent(),
                        d = h.convertFromPixel(i.y);
                    if (e.mode !== t.OverlayMode.Normal && s === fe && O(o.dataIndex)) {
                        var p = l.getDataByDataIndex(o.dataIndex);
                        if (null !== p) {
                            var g = e.modeSensitivity;
                            if (d > p.high)
                                if (e.mode === t.OverlayMode.WeakMagnet) {
                                    var v = h.convertToPixel(p.high);
                                    d < h.convertFromPixel(v - g) && (d = p.high)
                                } else d = p.high;
                            else if (d < p.low)
                                if (e.mode === t.OverlayMode.WeakMagnet) {
                                    var f = h.convertToPixel(p.low);
                                    d > h.convertFromPixel(f - g) && (d = p.low)
                                } else d = p.low;
                            else {
                                var y = Math.max(p.open, p.close),
                                    m = Math.min(p.open, p.close);
                                d = d > y ? d - y < p.high - d ? y : p.high : d < m ? d - p.low < m - d ? p.low : m : y - d < d - m ? y : m
                            }
                        }
                    }
                    o.value = d
                }
                return o
            }, n.prototype.coordinateToPointValueFlag = function() {
                return !0
            }, n.prototype.coordinateToPointTimestampDataIndexFlag = function() {
                return !0
            }, n.prototype.dispatchEvent = function(t, i, n) {
                return this.getWidget().getPane().getChart().getChartStore().getOverlayStore().isDrawing() ? this.onEvent(t, i, n) : e.prototype.dispatchEvent.call(this, t, i, n)
            }, n.prototype.checkEventOn = function() {
                return !0
            }, n.prototype.drawImp = function(t) {
                var e = this,
                    i = this.getWidget(),
                    n = i.getPane(),
                    o = n.getId(),
                    r = n.getChart(),
                    a = n.getAxisComponent(),
                    s = r.getXAxisPane().getAxisComponent(),
                    l = i.getBounding(),
                    c = r.getChartStore(),
                    u = c.getCustomApi(),
                    h = c.getThousandsSeparator(),
                    p = c.getDecimalFoldThreshold(),
                    g = c.getTimeScaleStore(),
                    v = g.getDateTimeFormat(),
                    f = g.getBarSpace(),
                    y = c.getPrecision(),
                    m = c.getStyles().overlay,
                    _ = c.getOverlayStore(),
                    x = _.getHoverInstanceInfo(),
                    S = _.getClickInstanceInfo(),
                    C = this.getCompleteOverlays(_, o),
                    b = c.getIndicatorStore().getInstances(o).reduce((function(t, e) {
                        var i = e.precision;
                        return t[e.name] = i, t.max = Math.max(t.max, i), t.min = Math.min(t.min, i), t.excludePriceVolumeMax = Math.max(t.excludePriceVolumeMax, i), t.excludePriceVolumeMin = Math.min(t.excludePriceVolumeMin, i), t
                    }), d(d({}, y), {
                        max: Math.max(y.price, y.volume),
                        min: Math.min(y.price, y.volume),
                        excludePriceVolumeMax: Number.MIN_SAFE_INTEGER,
                        excludePriceVolumeMin: Number.MAX_SAFE_INTEGER
                    }));
                C.forEach((function(i) {
                    i.visible && e._drawOverlay(t, i, l, f, b, v, u, h, p, m, s, a, x, S, g)
                }));
                var T = _.getProgressInstanceInfo();
                if (null !== T) {
                    var w = this.getProgressOverlay(T, o);
                    null !== w && w.visible && this._drawOverlay(t, w, l, f, b, v, u, h, p, m, s, a, x, S, g)
                }
            }, n.prototype._drawOverlay = function(t, e, i, n, o, r, a, s, l, c, u, h, d, p, g) {
                var v = e.points.map((function(t) {
                    var e, i, n = t.dataIndex;
                    O(t.timestamp) && (n = g.timestampToDataIndex(t.timestamp));
                    var o = {
                        x: 0,
                        y: 0
                    };
                    return O(n) && (o.x = null !== (e = null == u ? void 0 : u.convertToPixel(n)) && void 0 !== e ? e : 0), O(t.value) && (o.y = null !== (i = null == h ? void 0 : h.convertToPixel(t.value)) && void 0 !== i ? i : 0), o
                }));
                if (v.length > 0) {
                    var f = (new Array).concat(this.getFigures(e, v, i, n, o, s, l, r, c, u, h));
                    this.drawFigures(t, e, f, c)
                }
                this.drawDefaultFigures(t, e, v, i, o, r, a, s, l, c, u, h, d, p)
            }, n.prototype.drawFigures = function(t, e, i, n) {
                var o = this;
                i.forEach((function(i, r) {
                    var a = i.type,
                        s = i.styles,
                        l = i.attrs,
                        c = i.ignoreEvent;
                    [].concat(l).forEach((function(l, u) {
                        var h, p, g, v = o._createFigureEvents(e, 2, null !== (h = i.key) && void 0 !== h ? h : "", r, u, c),
                            f = d(d(d({}, n[a]), null === (p = e.styles) || void 0 === p ? void 0 : p[a]), s);
                        null === (g = o.createFigure({
                            name: a,
                            attrs: l,
                            styles: f
                        }, v)) || void 0 === g || g.draw(t)
                    }))
                }))
            }, n.prototype.getCompleteOverlays = function(t, e) {
                return t.getInstances(e)
            }, n.prototype.getProgressOverlay = function(t, e) {
                return t.paneId === e ? t.instance : null
            }, n.prototype.getFigures = function(t, e, i, n, o, r, a, s, l, c, u) {
                var h, d;
                return null !== (d = null === (h = t.createPointFigures) || void 0 === h ? void 0 : h.call(t, {
                    overlay: t,
                    coordinates: e,
                    bounding: i,
                    barSpace: n,
                    precision: o,
                    thousandsSeparator: r,
                    decimalFoldThreshold: a,
                    dateTimeFormat: s,
                    defaultStyles: l,
                    xAxis: c,
                    yAxis: u
                })) && void 0 !== d ? d : []
            }, n.prototype.drawDefaultFigures = function(t, e, i, n, o, r, a, s, l, c, u, h, p, g) {
                var v, f, y = this;
                if (e.needDefaultPointFigure && ((null === (v = p.instance) || void 0 === v ? void 0 : v.id) === e.id && 0 !== p.figureType || (null === (f = g.instance) || void 0 === f ? void 0 : f.id) === e.id && 0 !== g.figureType)) {
                    var m = e.styles,
                        _ = d(d({}, c.point), null == m ? void 0 : m.point);
                    i.forEach((function(i, n) {
                        var o, r, a, s = i.x,
                            l = i.y,
                            c = _.radius,
                            u = _.color,
                            h = _.borderColor,
                            d = _.borderSize;
                        (null === (o = p.instance) || void 0 === o ? void 0 : o.id) === e.id && 1 === p.figureType && p.figureIndex === n && (c = _.activeRadius, u = _.activeColor, h = _.activeBorderColor, d = _.activeBorderSize), null === (r = y.createFigure({
                            name: "circle",
                            attrs: {
                                x: s,
                                y: l,
                                r: c + d
                            },
                            styles: {
                                color: h
                            }
                        }, y._createFigureEvents(e, 1, "".concat(at, "point_").concat(n), n, 0))) || void 0 === r || r.draw(t), null === (a = y.createFigure({
                            name: "circle",
                            attrs: {
                                x: s,
                                y: l,
                                r: c
                            },
                            styles: {
                                color: u
                            }
                        })) || void 0 === a || a.draw(t)
                    }))
                }
            }, n
        }($e),
        ri = function(t) {
            function e(e, i) {
                var n = t.call(this, e, i) || this;
                return n._gridView = new Qe(n), n._indicatorView = new ei(n), n._crosshairLineView = new ii(n), n._tooltipView = n.createTooltipView(), n._overlayView = new oi(n), n.addChild(n._tooltipView), n.addChild(n._overlayView), n.getContainer().style.cursor = "crosshair", n.registerEvent("mouseMoveEvent", (function() {
                    return i.getChart().getChartStore().getTooltipStore().setActiveIcon(), !1
                })), n
            }
            return i(e, t), e.prototype.getName = function() {
                return Te
            }, e.prototype.updateMain = function(t) {
                this.updateMainContent(t), this._indicatorView.draw(t), this._gridView.draw(t)
            }, e.prototype.createTooltipView = function() {
                return new ni(this)
            }, e.prototype.updateMainContent = function(t) {}, e.prototype.updateOverlay = function(t) {
                this._overlayView.draw(t), this._crosshairLineView.draw(t), this._tooltipView.draw(t)
            }, e
        }(ke),
        ai = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e._ripplePoint = e.createFigure({
                    name: "circle",
                    attrs: {
                        x: 0,
                        y: 0,
                        r: 0
                    },
                    styles: {
                        style: "fill"
                    }
                }), e._animationFrameTime = 0, e._animation = new dt({
                    iterationCount: 1 / 0
                }).doFrame((function(t) {
                    e._animationFrameTime = t;
                    var i = e.getWidget().getPane();
                    i.getChart().updatePane(0, i.getId())
                })), e
            }
            return i(e, t), e.prototype.drawImp = function(t) {
                var e, i, n, o = this.getWidget(),
                    r = o.getPane(),
                    a = r.getChart(),
                    s = a.getDataList().length - 1,
                    l = o.getBounding(),
                    c = r.getAxisComponent(),
                    u = a.getStyles().candle.area,
                    h = [],
                    d = Number.MAX_SAFE_INTEGER,
                    p = Number.MIN_SAFE_INTEGER,
                    g = null;
                if (this.eachChildren((function(t) {
                        var e = t.data,
                            i = t.x,
                            n = null == e ? void 0 : e[u.value];
                        if (O(n)) {
                            var o = c.convertToPixel(n);
                            p === Number.MIN_SAFE_INTEGER && (p = i), h.push({
                                x: i,
                                y: o
                            }), d = Math.min(d, o), t.dataIndex === s && (g = {
                                x: i,
                                y: o
                            })
                        }
                    })), h.length > 0) {
                    null === (e = this.createFigure({
                        name: "line",
                        attrs: {
                            coordinates: h
                        },
                        styles: {
                            color: u.lineColor,
                            size: u.lineSize,
                            smooth: u.smooth
                        }
                    })) || void 0 === e || e.draw(t);
                    var v = u.backgroundColor,
                        f = void 0;
                    if (L(v)) {
                        var y = t.createLinearGradient(0, l.height, 0, d);
                        try {
                            v.forEach((function(t) {
                                var e = t.offset,
                                    i = t.color;
                                y.addColorStop(e, i)
                            }))
                        } catch (t) {}
                        f = y
                    } else f = v;
                    t.fillStyle = f, t.beginPath(), t.moveTo(p, l.height), t.lineTo(h[0].x, h[0].y), ie(t, h, u.smooth), t.lineTo(h[h.length - 1].x, l.height), t.closePath(), t.fill()
                }
                var m = u.point;
                if (m.show && V(g)) {
                    null === (i = this.createFigure({
                        name: "circle",
                        attrs: {
                            x: g.x,
                            y: g.y,
                            r: m.radius
                        },
                        styles: {
                            style: "fill",
                            color: m.color
                        }
                    })) || void 0 === i || i.draw(t);
                    var _ = m.rippleRadius;
                    m.animation && (_ = m.radius + this._animationFrameTime / m.animationDuration * (m.rippleRadius - m.radius), this._animation.setDuration(m.animationDuration).start()), null === (n = this._ripplePoint) || void 0 === n || n.setAttrs({
                        x: g.x,
                        y: g.y,
                        r: _
                    }).setStyles({
                        style: "fill",
                        color: m.rippleColor
                    }).draw(t)
                } else this.stopAnimation()
            }, e.prototype.stopAnimation = function() {
                this._animation.stop()
            }, e
        }(Je),
        si = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(e, t), e.prototype.drawImp = function(t) {
                var e = this.getWidget().getPane(),
                    i = e.getChart().getChartStore(),
                    n = i.getStyles().candle.priceMark,
                    o = n.high,
                    r = n.low;
                if (n.show && (o.show || r.show)) {
                    var a = i.getThousandsSeparator(),
                        s = i.getDecimalFoldThreshold(),
                        l = i.getPrecision(),
                        c = e.getAxisComponent(),
                        u = Number.MIN_SAFE_INTEGER,
                        h = 0,
                        d = Number.MAX_SAFE_INTEGER,
                        p = 0;
                    this.eachChildren((function(t) {
                        var e = t.data,
                            i = t.x;
                        V(e) && (u < e.high && (u = e.high, h = i), d > e.low && (d = e.low, p = i))
                    }));
                    var g = c.convertToPixel(u),
                        v = c.convertToPixel(d);
                    o.show && u !== Number.MIN_SAFE_INTEGER && this._drawMark(t, q(U(K(u, l.price), a), s), {
                        x: h,
                        y: g
                    }, g < v ? [-2, -5] : [2, 5], o), r.show && d !== Number.MAX_SAFE_INTEGER && this._drawMark(t, q(U(K(d, l.price), a), s), {
                        x: p,
                        y: v
                    }, g < v ? [2, 5] : [-2, -5], r)
                }
            }, e.prototype._drawMark = function(t, e, i, n, o) {
                var r, a, s, l, c, u, h = i.x,
                    d = i.y + n[0];
                null === (r = this.createFigure({
                    name: "line",
                    attrs: {
                        coordinates: [{
                            x: h - 2,
                            y: d + n[0]
                        }, {
                            x: h,
                            y: d
                        }, {
                            x: h + 2,
                            y: d + n[0]
                        }]
                    },
                    styles: {
                        color: o.color
                    }
                })) || void 0 === r || r.draw(t), h > this.getWidget().getBounding().width / 2 ? (c = (l = h - 5) - o.textOffset, u = "right") : (u = "left", c = (l = h + 5) + o.textOffset);
                var p = d + n[1];
                null === (a = this.createFigure({
                    name: "line",
                    attrs: {
                        coordinates: [{
                            x: h,
                            y: d
                        }, {
                            x: h,
                            y: p
                        }, {
                            x: l,
                            y: p
                        }]
                    },
                    styles: {
                        color: o.color
                    }
                })) || void 0 === a || a.draw(t), null === (s = this.createFigure({
                    name: "text",
                    attrs: {
                        x: c,
                        y: p,
                        text: e,
                        align: u,
                        baseline: "middle"
                    },
                    styles: {
                        color: o.color,
                        size: o.textSize,
                        family: o.textFamily,
                        weight: o.textWeight
                    }
                })) || void 0 === s || s.draw(t)
            }, e
        }(Je),
        li = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(e, t), e.prototype.drawImp = function(t) {
                var e, i = this.getWidget(),
                    n = i.getPane(),
                    o = i.getBounding(),
                    r = n.getChart().getChartStore(),
                    a = r.getStyles().candle.priceMark,
                    s = a.last,
                    l = s.line;
                if (a.show && s.show && l.show) {
                    var c = n.getAxisComponent(),
                        u = r.getDataList(),
                        h = u[u.length - 1];
                    if (null != h) {
                        var d = h.close,
                            p = h.open,
                            g = c.convertToNicePixel(d),
                            v = void 0;
                        v = d > p ? s.upColor : d < p ? s.downColor : s.noChangeColor, null === (e = this.createFigure({
                            name: "line",
                            attrs: {
                                coordinates: [{
                                    x: 0,
                                    y: g
                                }, {
                                    x: o.width,
                                    y: g
                                }]
                            },
                            styles: {
                                style: l.style,
                                color: v,
                                size: l.size,
                                dashedValue: l.dashedValue
                            }
                        })) || void 0 === e || e.draw(t)
                    }
                }
            }, e
        }($e),
        ci = {
            "zh-CN": {
                time: "时间：",
                open: "开：",
                high: "高：",
                low: "低：",
                close: "收：",
                volume: "成交量：",
                turnover: "成交额：",
                change: "涨幅："
            },
            "en-US": {
                time: "Time: ",
                open: "Open: ",
                high: "High: ",
                low: "Low: ",
                close: "Close: ",
                volume: "Volume: ",
                turnover: "Turnover: ",
                change: "Change: "
            }
        };
    var ui = function(e) {
            function n() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i(n, e), n.prototype.drawImp = function(e) {
                var i = this.getWidget(),
                    n = i.getPane(),
                    o = n.getId(),
                    r = n.getChart().getChartStore(),
                    a = r.getTooltipStore().getCrosshair();
                if (V(a.kLineData)) {
                    var s = i.getBounding(),
                        l = n.getYAxisWidget().getBounding(),
                        c = r.getDataList(),
                        u = r.getPrecision(),
                        h = r.getLocale(),
                        d = r.getCustomApi(),
                        p = r.getThousandsSeparator(),
                        g = r.getDecimalFoldThreshold(),
                        v = r.getTooltipStore().getActiveIcon(),
                        f = r.getIndicatorStore().getInstances(n.getId()),
                        y = r.getTimeScaleStore().getDateTimeFormat(),
                        m = r.getStyles(),
                        _ = m.candle,
                        x = m.indicator;
                    if (_.tooltip.showType === t.TooltipShowType.Rect && x.tooltip.showType === t.TooltipShowType.Rect) {
                        var S = this.isDrawTooltip(a, _.tooltip),
                            C = this.isDrawTooltip(a, x.tooltip);
                        this._drawRectTooltip(e, c, f, s, l, a, u, y, h, d, p, g, S, C, _.tooltip.offsetTop, m)
                    } else if (_.tooltip.showType === t.TooltipShowType.Standard && x.tooltip.showType === t.TooltipShowType.Standard) {
                        var b = _.tooltip,
                            T = b.offsetLeft,
                            w = b.offsetTop,
                            E = b.offsetRight,
                            I = s.width - E,
                            P = this._drawCandleStandardTooltip(e, c, o, a, v, u, y, h, d, p, g, T, w, I, _);
                        this.drawIndicatorTooltip(e, o, c, a, v, f, d, p, g, T, P, I, x)
                    } else if (_.tooltip.showType === t.TooltipShowType.Rect && x.tooltip.showType === t.TooltipShowType.Standard) {
                        var D = _.tooltip,
                            M = (T = D.offsetLeft, w = D.offsetTop, E = D.offsetRight, I = s.width - E, this.drawIndicatorTooltip(e, o, c, a, v, f, d, p, g, T, w, I, x));
                        S = this.isDrawTooltip(a, _.tooltip);
                        this._drawRectTooltip(e, c, f, s, l, a, u, y, h, d, p, g, S, !1, M, m)
                    } else {
                        var k = _.tooltip,
                            A = (T = k.offsetLeft, w = k.offsetTop, E = k.offsetRight, I = s.width - E, this._drawCandleStandardTooltip(e, c, o, a, v, u, y, h, d, p, g, T, w, I, _));
                        C = this.isDrawTooltip(a, x.tooltip);
                        this._drawRectTooltip(e, c, f, s, l, a, u, y, h, d, p, g, !1, C, A, m)
                    }
                }
            }, n.prototype._drawCandleStandardTooltip = function(t, e, i, n, o, r, a, s, l, c, u, h, d, p, g) {
                var v, y, m, _ = g.tooltip,
                    x = _.text,
                    S = 0,
                    C = {
                        x: h,
                        y: d
                    };
                if (this.isDrawTooltip(n, _)) {
                    var b = null !== (v = n.dataIndex) && void 0 !== v ? v : 0,
                        T = this._getCandleTooltipLegends({
                            prev: null !== (y = e[b - 1]) && void 0 !== y ? y : null,
                            current: n.kLineData,
                            next: null !== (m = e[b + 1]) && void 0 !== m ? m : null
                        }, r, a, s, l, c, u, g),
                        w = f(this.classifyTooltipIcons(_.icons), 3),
                        E = w[0],
                        I = w[1],
                        P = w[2];
                    S = this.drawStandardTooltipIcons(t, o, E, C, i, "", h, S, p), S = this.drawStandardTooltipIcons(t, o, I, C, i, "", h, S, p), T.length > 0 && (S = this.drawStandardTooltipLegends(t, T, C, h, S, p, x)), S = this.drawStandardTooltipIcons(t, o, P, C, i, "", h, S, p)
                }
                return C.y + S
            }, n.prototype._drawRectTooltip = function(e, i, n, o, r, a, s, l, c, u, h, d, p, g, v, f) {
                var y, m, _, x, S, C = this,
                    b = f.candle,
                    T = f.indicator,
                    w = b.tooltip,
                    E = T.tooltip;
                if (p || g) {
                    var I = null !== (y = a.dataIndex) && void 0 !== y ? y : 0,
                        P = this._getCandleTooltipLegends({
                            prev: null !== (m = i[I - 1]) && void 0 !== m ? m : null,
                            current: a.kLineData,
                            next: null !== (_ = i[I + 1]) && void 0 !== _ ? _ : null
                        }, s, l, c, u, h, d, b),
                        D = w.offsetLeft,
                        M = w.offsetTop,
                        k = w.offsetRight,
                        A = w.offsetBottom,
                        F = w.text,
                        L = F.marginLeft,
                        R = F.marginRight,
                        B = F.marginTop,
                        O = F.marginBottom,
                        V = F.size,
                        N = F.weight,
                        W = F.family,
                        z = w.rect,
                        Y = z.position,
                        H = z.paddingLeft,
                        X = z.paddingRight,
                        G = z.paddingTop,
                        j = z.paddingBottom,
                        K = z.offsetLeft,
                        Z = z.offsetRight,
                        U = z.offsetTop,
                        q = z.offsetBottom,
                        $ = z.borderSize,
                        J = z.borderRadius,
                        tt = z.borderColor,
                        et = z.color,
                        it = 0,
                        nt = 0,
                        ot = 0;
                    p && (e.font = Q(V, N, W), P.forEach((function(t) {
                        var i = t.title,
                            n = t.value,
                            o = "".concat(i.text).concat(n.text),
                            r = e.measureText(o).width + L + R;
                        it = Math.max(it, r)
                    })), ot += (O + B + V) * P.length);
                    var rt = E.text,
                        at = rt.marginLeft,
                        st = rt.marginRight,
                        lt = rt.marginTop,
                        ct = rt.marginBottom,
                        ut = rt.size,
                        ht = rt.weight,
                        dt = rt.family,
                        pt = [];
                    if (g && (e.font = Q(ut, ht, dt), n.forEach((function(t) {
                            var n, o = null !== (n = C.getIndicatorTooltipData(i, a, t, u, h, d, T).values) && void 0 !== n ? n : [];
                            pt.push(o), o.forEach((function(t) {
                                var i = t.title,
                                    n = t.value,
                                    o = "".concat(i.text).concat(n.text),
                                    r = e.measureText(o).width + at + st;
                                it = Math.max(it, r), ot += lt + ct + ut
                            }))
                        }))), 0 !== (nt += it) && 0 !== ot) {
                        nt += 2 * $ + H + X, ot += 2 * $ + G + j;
                        var gt = o.width / 2,
                            vt = Y === t.CandleTooltipRectPosition.Pointer && a.paneId === fe,
                            ft = (null !== (x = a.realX) && void 0 !== x ? x : 0) > gt,
                            yt = 0;
                        if (vt) {
                            var mt = a.realX;
                            yt = ft ? mt - Z - nt : mt + K
                        } else ft ? (yt = K + D, f.yAxis.inside && f.yAxis.position === t.YAxisPosition.Left && (yt += r.width)) : (yt = o.width - Z - nt - k, f.yAxis.inside && f.yAxis.position === t.YAxisPosition.Right && (yt -= r.width));
                        var _t = v + U;
                        if (vt)(_t = a.y - ot / 2) + ot > o.height - q - A && (_t = o.height - q - ot - A), _t < v + U && (_t = v + U + M);
                        null === (S = this.createFigure({
                            name: "rect",
                            attrs: {
                                x: yt,
                                y: _t,
                                width: nt,
                                height: ot
                            },
                            styles: {
                                style: t.PolygonType.StrokeFill,
                                color: et,
                                borderColor: tt,
                                borderSize: $,
                                borderRadius: J
                            }
                        })) || void 0 === S || S.draw(e);
                        var xt = yt + $ + H + L,
                            St = _t + $ + G;
                        if (p && P.forEach((function(t) {
                                var i, n;
                                St += B;
                                var o = t.title;
                                null === (i = C.createFigure({
                                    name: "text",
                                    attrs: {
                                        x: xt,
                                        y: St,
                                        text: o.text
                                    },
                                    styles: {
                                        color: o.color,
                                        size: V,
                                        family: W,
                                        weight: N
                                    }
                                })) || void 0 === i || i.draw(e);
                                var r = t.value;
                                null === (n = C.createFigure({
                                    name: "text",
                                    attrs: {
                                        x: yt + nt - $ - R - X,
                                        y: St,
                                        text: r.text,
                                        align: "right"
                                    },
                                    styles: {
                                        color: r.color,
                                        size: V,
                                        family: W,
                                        weight: N
                                    }
                                })) || void 0 === n || n.draw(e), St += V + O
                            })), g) {
                            var Ct = yt + $ + H + at;
                            pt.forEach((function(t) {
                                t.forEach((function(t) {
                                    var i, n;
                                    St += lt;
                                    var o = t.title,
                                        r = t.value;
                                    null === (i = C.createFigure({
                                        name: "text",
                                        attrs: {
                                            x: Ct,
                                            y: St,
                                            text: o.text
                                        },
                                        styles: {
                                            color: o.color,
                                            size: ut,
                                            family: dt,
                                            weight: ht
                                        }
                                    })) || void 0 === i || i.draw(e), null === (n = C.createFigure({
                                        name: "text",
                                        attrs: {
                                            x: yt + nt - $ - st - X,
                                            y: St,
                                            text: r.text,
                                            align: "right"
                                        },
                                        styles: {
                                            color: r.color,
                                            size: ut,
                                            family: dt,
                                            weight: ht
                                        }
                                    })) || void 0 === n || n.draw(e), St += ut + ct
                                }))
                            }))
                        }
                    }
                }
            }, n.prototype._getCandleTooltipLegends = function(e, i, n, o, r, a, s, l) {
                var c, u, h, p, g, v = l.tooltip,
                    f = v.text.color,
                    y = e.current,
                    m = null !== (u = null === (c = e.prev) || void 0 === c ? void 0 : c.close) && void 0 !== u ? u : y.close,
                    _ = y.close - m,
                    x = i.price,
                    S = i.volume,
                    C = {
                        "{time}": r.formatDate(n, y.timestamp, "MM-DD HH:mm", t.FormatDateType.Tooltip),
                        "{open}": q(U(K(y.open, x), a), s),
                        "{high}": q(U(K(y.high, x), a), s),
                        "{low}": q(U(K(y.low, x), a), s),
                        "{close}": q(U(K(y.close, x), a), s),
                        "{volume}": q(U(K(null !== (h = y.volume) && void 0 !== h ? h : v.defaultValue, S), a), s),
                        "{turnover}": q(U(r.formatBigNumber(K(null !== (p = y.turnover) && void 0 !== p ? p : v.defaultValue, x)), a), s),
                        "{change}": 0 === m ? v.defaultValue : "".concat(U(K(_ / m * 100), a), "%")
                    };
                return (null !== (g = R(v.custom) ? v.custom(e, l) : v.custom) && void 0 !== g ? g : []).map((function(t) {
                    var e, i = t.title,
                        n = t.value,
                        r = {
                            text: "",
                            color: ""
                        };
                    B(i) ? r = d({}, i) : (r.text = i, r.color = f), r.text = function(t, e) {
                        var i, n;
                        return null !== (n = null === (i = ci[e]) || void 0 === i ? void 0 : i[t]) && void 0 !== n ? n : t
                    }(r.text, o);
                    var a = {
                        text: v.defaultValue,
                        color: ""
                    };
                    B(n) ? a = d({}, n) : (a.text = n, a.color = f);
                    var s = a.text.match(/{(\S*)}/);
                    if (null !== s && s.length > 1) {
                        var c = "{".concat(s[1], "}");
                        a.text = a.text.replace(c, null !== (e = C[c]) && void 0 !== e ? e : v.defaultValue), "{change}" === c && (a.color = 0 === _ ? l.priceMark.last.noChangeColor : _ > 0 ? l.priceMark.last.upColor : l.priceMark.last.downColor)
                    }
                    return {
                        title: r,
                        value: a
                    }
                }))
            }, n
        }(ni),
        hi = function(e) {
            function n(t, i) {
                var n = e.call(this, t, i) || this;
                return n._candleBarView = new ti(n), n._candleAreaView = new ai(n), n._candleHighLowPriceView = new si(n), n._candleLastPriceLineView = new li(n), n.addChild(n._candleBarView), n
            }
            return i(n, e), n.prototype.updateMainContent = function(e) {
                this.getPane().getChart().getStyles().candle.type !== t.CandleType.Area ? (this._candleBarView.draw(e), this._candleHighLowPriceView.draw(e), this._candleAreaView.stopAnimation()) : this._candleAreaView.draw(e), this._candleLastPriceLineView.draw(e)
            }, n.prototype.createTooltipView = function() {
                return new ui(this)
            }, n
        }(ri),
        di = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(e, t), e.prototype.drawImp = function(t) {
                var e, i, n = this,
                    o = this.getWidget(),
                    r = o.getPane(),
                    a = o.getBounding(),
                    s = r.getAxisComponent(),
                    l = this.getAxisStyles(r.getChart().getStyles());
                if (l.show) {
                    l.axisLine.show && (null === (e = this.createFigure({
                        name: "line",
                        attrs: this.createAxisLine(a, l),
                        styles: l.axisLine
                    })) || void 0 === e || e.draw(t));
                    var c = s.getTicks();
                    if (l.tickLine.show) this.createTickLines(c, a, l).forEach((function(e) {
                        var i;
                        null === (i = n.createFigure({
                            name: "line",
                            attrs: e,
                            styles: l.tickLine
                        })) || void 0 === i || i.draw(t)
                    }));
                    if (l.tickText.show) {
                        var u = this.createTickTexts(c, a, l);
                        null === (i = this.createFigure({
                            name: "text",
                            attrs: u,
                            styles: l.tickText
                        })) || void 0 === i || i.draw(t)
                    }
                }
            }, e
        }($e),
        pi = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(e, t), e.prototype.getAxisStyles = function(t) {
                return t.yAxis
            }, e.prototype.createAxisLine = function(t, e) {
                var i, n = this.getWidget().getPane().getAxisComponent(),
                    o = e.axisLine.size;
                return {
                    coordinates: [{
                        x: i = n.isFromZero() ? 0 : t.width - o,
                        y: 0
                    }, {
                        x: i,
                        y: t.height
                    }]
                }
            }, e.prototype.createTickLines = function(t, e, i) {
                var n = this.getWidget().getPane().getAxisComponent(),
                    o = i.axisLine,
                    r = i.tickLine,
                    a = 0,
                    s = 0;
                return n.isFromZero() ? (a = 0, o.show && (a += o.size), s = a + r.length) : (a = e.width, o.show && (a -= o.size), s = a - r.length), t.map((function(t) {
                    return {
                        coordinates: [{
                            x: a,
                            y: t.coord
                        }, {
                            x: s,
                            y: t.coord
                        }]
                    }
                }))
            }, e.prototype.createTickTexts = function(t, e, i) {
                var n = this.getWidget().getPane().getAxisComponent(),
                    o = i.axisLine,
                    r = i.tickLine,
                    a = i.tickText,
                    s = 0;
                n.isFromZero() ? (s = a.marginStart, o.show && (s += o.size), r.show && (s += r.length)) : (s = e.width - a.marginEnd, o.show && (s -= o.size), r.show && (s -= r.length));
                var l = this.getWidget().getPane().getAxisComponent().isFromZero() ? "left" : "right";
                return t.map((function(t) {
                    return {
                        x: s,
                        y: t.coord,
                        text: t.text,
                        align: l,
                        baseline: "middle"
                    }
                }))
            }, e
        }(di),
        gi = function(e) {
            function n() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i(n, e), n.prototype.drawImp = function(e) {
                var i, n = this.getWidget(),
                    o = n.getPane(),
                    r = n.getBounding(),
                    a = o.getChart().getChartStore(),
                    s = a.getStyles().candle.priceMark,
                    l = s.last,
                    c = l.text;
                if (s.show && l.show && c.show) {
                    var u = a.getPrecision(),
                        h = o.getAxisComponent(),
                        p = a.getDataList(),
                        g = p[p.length - 1];
                    if (V(g)) {
                        var v = g.close,
                            f = g.open,
                            y = h.convertToNicePixel(v),
                            m = void 0;
                        m = v > f ? l.upColor : v < f ? l.downColor : l.noChangeColor;
                        var _ = void 0;
                        if (h.getType() === t.YAxisType.Percentage) {
                            var x = a.getVisibleFirstData().close;
                            _ = "".concat(((v - x) / x * 100).toFixed(2), "%")
                        } else _ = K(v, u.price);
                        _ = q(U(_, a.getThousandsSeparator()), a.getDecimalFoldThreshold());
                        var S = void 0,
                            C = void 0;
                        h.isFromZero() ? (S = 0, C = "left") : (S = r.width, C = "right"), null === (i = this.createFigure({
                            name: "text",
                            attrs: {
                                x: S,
                                y: y,
                                text: _,
                                align: C,
                                baseline: "middle"
                            },
                            styles: d(d({}, c), {
                                backgroundColor: m
                            })
                        })) || void 0 === i || i.draw(e)
                    }
                }
            }, n
        }($e),
        vi = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(e, t), e.prototype.drawImp = function(t) {
                var e = this,
                    i = this.getWidget(),
                    n = i.getPane(),
                    o = i.getBounding(),
                    r = n.getChart().getChartStore(),
                    a = r.getCustomApi(),
                    s = r.getStyles().indicator,
                    l = s.lastValueMark,
                    c = l.text;
                if (l.show) {
                    var u = n.getAxisComponent(),
                        h = r.getDataList(),
                        p = h.length - 1,
                        g = r.getIndicatorStore().getInstances(n.getId()),
                        v = r.getThousandsSeparator(),
                        f = r.getDecimalFoldThreshold();
                    g.forEach((function(i) {
                        var n = i.result[p];
                        if (V(n) && i.visible) {
                            var r = i.precision;
                            it(h, i, p, s, (function(s, l) {
                                var h, p = n[s.key];
                                if (O(p)) {
                                    var g = u.convertToNicePixel(p),
                                        y = K(p, r);
                                    i.shouldFormatBigNumber && (y = a.formatBigNumber(y)), y = q(U(y, v), f);
                                    var m = void 0,
                                        _ = void 0;
                                    u.isFromZero() ? (m = 0, _ = "left") : (m = o.width, _ = "right"), null === (h = e.createFigure({
                                        name: "text",
                                        attrs: {
                                            x: m,
                                            y: g,
                                            text: y,
                                            align: _,
                                            baseline: "middle"
                                        },
                                        styles: d(d({}, c), {
                                            backgroundColor: l.color
                                        })
                                    })) || void 0 === h || h.draw(t)
                                }
                            }))
                        }
                    }))
                }
            }, e
        }($e),
        fi = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(e, t), e.prototype.coordinateToPointTimestampDataIndexFlag = function() {
                return !1
            }, e.prototype.drawDefaultFigures = function(t, e, i, n, o, r, a, s, l, c, u, h, d, p) {
                this.drawFigures(t, e, this.getDefaultFigures(e, i, n, o, r, a, s, l, u, h, p), c)
            }, e.prototype.getDefaultFigures = function(t, e, i, n, o, r, a, s, l, c, u) {
                var h, d, p = [];
                if (t.needDefaultYAxisFigure && t.id === (null === (h = u.instance) || void 0 === h ? void 0 : h.id) && u.paneId === this.getWidget().getPane().getId()) {
                    var g, v, f = Number.MAX_SAFE_INTEGER,
                        y = Number.MIN_SAFE_INTEGER;
                    null !== (d = null == c ? void 0 : c.isFromZero()) && void 0 !== d && d ? (g = "left", v = 0) : (g = "right", v = i.width), e.forEach((function(e, i) {
                        var o = t.points[i];
                        if (O(o.value)) {
                            f = Math.min(f, e.y), y = Math.max(y, e.y);
                            var r = q(U(K(o.value, n.price), a), s);
                            p.push({
                                type: "text",
                                attrs: {
                                    x: v,
                                    y: e.y,
                                    text: r,
                                    align: g,
                                    baseline: "middle"
                                },
                                ignoreEvent: !0
                            })
                        }
                    })), e.length > 1 && p.unshift({
                        type: "rect",
                        attrs: {
                            x: 0,
                            y: f,
                            width: i.width,
                            height: y - f
                        },
                        ignoreEvent: !0
                    })
                }
                return p
            }, e.prototype.getFigures = function(t, e, i, n, o, r, a, s, l, c, u) {
                var h, d;
                return null !== (d = null === (h = t.createYAxisFigures) || void 0 === h ? void 0 : h.call(t, {
                    overlay: t,
                    coordinates: e,
                    bounding: i,
                    barSpace: n,
                    precision: o,
                    thousandsSeparator: r,
                    decimalFoldThreshold: a,
                    dateTimeFormat: s,
                    defaultStyles: l,
                    xAxis: c,
                    yAxis: u
                })) && void 0 !== d ? d : []
            }, e
        }(oi),
        yi = function(e) {
            function n() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i(n, e), n.prototype.drawImp = function(t) {
                var e, i = this.getWidget(),
                    n = i.getPane(),
                    o = i.getBounding(),
                    r = i.getPane().getChart().getChartStore(),
                    a = r.getTooltipStore().getCrosshair(),
                    s = r.getStyles().crosshair;
                if (W(a.paneId) && this.compare(a, n.getId()) && s.show) {
                    var l = this.getDirectionStyles(s),
                        c = l.text;
                    if (l.show && c.show) {
                        var u = n.getAxisComponent(),
                            h = this.getText(a, r, u);
                        t.font = Q(c.size, c.weight, c.family), null === (e = this.createFigure({
                            name: "text",
                            attrs: this.getTextAttrs(h, t.measureText(h).width, a, o, u, c),
                            styles: c
                        })) || void 0 === e || e.draw(t)
                    }
                }
            }, n.prototype.compare = function(t, e) {
                return t.paneId === e
            }, n.prototype.getDirectionStyles = function(t) {
                return t.horizontal
            }, n.prototype.getText = function(e, i, n) {
                var o, r = n,
                    a = n.convertFromPixel(e.y);
                if (r.getType() === t.YAxisType.Percentage) {
                    var s = i.getVisibleFirstData();
                    o = "".concat(((a - s.close) / s.close * 100).toFixed(2), "%")
                } else {
                    var l = i.getIndicatorStore().getInstances(e.paneId),
                        c = 0,
                        u = !1;
                    r.isInCandle() ? c = i.getPrecision().price : l.forEach((function(t) {
                        c = Math.max(t.precision, c), u || (u = t.shouldFormatBigNumber)
                    })), o = K(a, c), u && (o = i.getCustomApi().formatBigNumber(o))
                }
                return q(U(o, i.getThousandsSeparator()), i.getDecimalFoldThreshold())
            }, n.prototype.getTextAttrs = function(t, e, i, n, o, r) {
                var a, s;
                return o.isFromZero() ? (a = 0, s = "left") : (a = n.width, s = "right"), {
                    x: a,
                    y: i.y,
                    text: t,
                    align: s,
                    baseline: "middle"
                }
            }, n
        }($e),
        mi = function(t) {
            function e(e, i) {
                var n = t.call(this, e, i) || this;
                return n._yAxisView = new pi(n), n._candleLastPriceLabelView = new gi(n), n._indicatorLastValueView = new vi(n), n._overlayYAxisView = new fi(n), n._crosshairHorizontalLabelView = new yi(n), n.getContainer().style.cursor = "ns-resize", n.addChild(n._overlayYAxisView), n
            }
            return i(e, t), e.prototype.getName = function() {
                return Ee
            }, e.prototype.updateMain = function(t) {
                this._yAxisView.draw(t), this.getPane().getAxisComponent().isInCandle() && this._candleLastPriceLabelView.draw(t), this._indicatorLastValueView.draw(t)
            }, e.prototype.updateOverlay = function(t) {
                this._overlayYAxisView.draw(t), this._crosshairHorizontalLabelView.draw(t)
            }, e
        }(ke),
        _i = function() {
            function t(t) {
                this._range = {
                    from: 0,
                    to: 0,
                    range: 0,
                    realFrom: 0,
                    realTo: 0,
                    realRange: 0
                }, this._prevRange = {
                    from: 0,
                    to: 0,
                    range: 0,
                    realFrom: 0,
                    realTo: 0,
                    realRange: 0
                }, this._ticks = [], this._autoCalcTickFlag = !0, this._parent = t
            }
            return t.prototype.getParent = function() {
                return this._parent
            }, t.prototype.buildTicks = function(t) {
                if (this._autoCalcTickFlag && (this._range = this.calcRange()), this._prevRange.from !== this._range.from || this._prevRange.to !== this._range.to || t) {
                    this._prevRange = this._range;
                    var e = this.optimalTicks(this._calcTicks());
                    return this._ticks = this.createTicks({
                        range: this._range,
                        bounding: this.getSelfBounding(),
                        defaultTicks: e
                    }), !0
                }
                return !1
            }, t.prototype.getTicks = function() {
                return this._ticks
            }, t.prototype.getScrollZoomEnabled = function() {
                var t;
                return null === (t = this.getParent().getOptions().axisOptions.scrollZoomEnabled) || void 0 === t || t
            }, t.prototype.setRange = function(t) {
                this._autoCalcTickFlag = !1, this._range = t
            }, t.prototype.getRange = function() {
                return this._range
            }, t.prototype.setAutoCalcTickFlag = function(t) {
                this._autoCalcTickFlag = t
            }, t.prototype.getAutoCalcTickFlag = function() {
                return this._autoCalcTickFlag
            }, t.prototype._calcTicks = function() {
                var t = this._range,
                    e = t.realFrom,
                    i = t.realTo,
                    n = t.realRange,
                    o = [];
                if (n >= 0) {
                    var r = f(this._calcTickInterval(n), 2),
                        a = r[0],
                        s = r[1],
                        l = mt(Math.ceil(e / a) * a, s),
                        c = mt(Math.floor(i / a) * a, s),
                        u = 0,
                        h = l;
                    if (0 !== a)
                        for (; h <= c;) {
                            var d = h.toFixed(s);
                            o[u] = {
                                text: d,
                                coord: 0,
                                value: d
                            }, ++u, h += a
                        }
                }
                return o
            }, t.prototype._calcTickInterval = function(t) {
                var e, i, n, o, r = (e = t / 8, i = Math.floor(xt(e)), n = St(i), e = ((o = e / n) < 1.5 ? 1 : o < 2.5 ? 2 : o < 3.5 ? 3 : o < 4.5 ? 4 : o < 5.5 ? 5 : o < 6.5 ? 6 : 8) * n, i >= -20 ? +e.toFixed(i < 0 ? -i : 0) : e),
                    a = function(t) {
                        var e = t.toString(),
                            i = e.indexOf("e");
                        if (i > 0) {
                            var n = +e.slice(i + 1);
                            return n < 0 ? -n : 0
                        }
                        var o = e.indexOf(".");
                        return o < 0 ? 0 : e.length - 1 - o
                    }(r);
                return [r, a]
            }, t
        }(),
        xi = function(e) {
            function n() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i(n, e), n.prototype.calcRange = function() {
                var e, i, n, o, r = this.getParent(),
                    a = r.getChart(),
                    s = a.getChartStore(),
                    l = Number.MAX_SAFE_INTEGER,
                    c = Number.MIN_SAFE_INTEGER,
                    u = [],
                    h = !1,
                    d = Number.MAX_SAFE_INTEGER,
                    p = Number.MIN_SAFE_INTEGER,
                    g = Number.MAX_SAFE_INTEGER;
                s.getIndicatorStore().getInstances(r.getId()).forEach((function(t) {
                    var e, i, n;
                    h || (h = null !== (e = t.shouldOhlc) && void 0 !== e && e), g = Math.min(g, t.precision), O(t.minValue) && (d = Math.min(d, t.minValue)), O(t.maxValue) && (p = Math.max(p, t.maxValue)), u.push({
                        figures: null !== (i = t.figures) && void 0 !== i ? i : [],
                        result: null !== (n = t.result) && void 0 !== n ? n : []
                    })
                }));
                var v = 4,
                    f = this.isInCandle();
                if (f) {
                    var y = s.getPrecision().price;
                    v = g !== Number.MAX_SAFE_INTEGER ? Math.min(g, y) : y
                } else g !== Number.MAX_SAFE_INTEGER && (v = g);
                var m = s.getVisibleDataList(),
                    _ = a.getStyles().candle,
                    x = _.type === t.CandleType.Area,
                    S = _.area.value,
                    C = f && !x || !f && h;
                m.forEach((function(t) {
                    var e = t.dataIndex,
                        i = t.data;
                    if (V(i) && (C && (l = Math.min(l, i.low), c = Math.max(c, i.high)), f && x)) {
                        var n = i[S];
                        O(n) && (l = Math.min(l, n), c = Math.max(c, n))
                    }
                    u.forEach((function(t) {
                        var i, n = t.figures,
                            o = null !== (i = t.result[e]) && void 0 !== i ? i : {};
                        n.forEach((function(t) {
                            var e = o[t.key];
                            O(e) && (l = Math.min(l, e), c = Math.max(c, e))
                        }))
                    }))
                })), l !== Number.MAX_SAFE_INTEGER && c !== Number.MIN_SAFE_INTEGER ? (l = Math.min(d, l), c = Math.max(p, c)) : (l = 0, c = 10);
                var b, T = this.getType();
                switch (T) {
                    case t.YAxisType.Percentage:
                        var w = s.getVisibleFirstData();
                        V(w) && O(w.close) && (l = (l - w.close) / w.close * 100, c = (c - w.close) / w.close * 100), b = Math.pow(10, -2);
                        break;
                    case t.YAxisType.Log:
                        l = xt(l), c = xt(c), b = .05 * St(-v);
                        break;
                    default:
                        b = St(-v)
                }
                if (l === c || Math.abs(l - c) < b) {
                    var E = d === l,
                        I = p === c;
                    l = E ? l : I ? l - 8 * b : l - 4 * b, c = I ? c : E ? c + 8 * b : c + 4 * b
                }
                var P = null !== (i = null === (e = this.getParent().getYAxisWidget()) || void 0 === e ? void 0 : e.getBounding().height) && void 0 !== i ? i : 0,
                    D = r.getOptions().gap,
                    M = null !== (n = null == D ? void 0 : D.top) && void 0 !== n ? n : .2;
                M >= 1 && (M /= P);
                var k = null !== (o = null == D ? void 0 : D.bottom) && void 0 !== o ? o : .1;
                k >= 1 && (k /= P);
                var A, F, L, R = Math.abs(c - l);
                return l -= R * k, c += R * M, R = Math.abs(c - l), T === t.YAxisType.Log ? (A = St(l), F = St(c), L = Math.abs(F - A)) : (A = l, F = c, L = R), {
                    from: l,
                    to: c,
                    range: R,
                    realFrom: A,
                    realTo: F,
                    realRange: L
                }
            }, n.prototype._innerConvertToPixel = function(t) {
                var e, i, n = null !== (i = null === (e = this.getParent().getYAxisWidget()) || void 0 === e ? void 0 : e.getBounding().height) && void 0 !== i ? i : 0,
                    o = this.getRange(),
                    r = (t - o.from) / o.range;
                return this.isReverse() ? Math.round(r * n) : Math.round((1 - r) * n)
            }, n.prototype.isInCandle = function() {
                return this.getParent().getId() === fe
            }, n.prototype.getType = function() {
                return this.isInCandle() ? this.getParent().getChart().getStyles().yAxis.type : t.YAxisType.Normal
            }, n.prototype.getPosition = function() {
                return this.getParent().getChart().getStyles().yAxis.position
            }, n.prototype.isReverse = function() {
                return !!this.isInCandle() && this.getParent().getChart().getStyles().yAxis.reverse
            }, n.prototype.isFromZero = function() {
                var e = this.getParent().getChart().getStyles().yAxis,
                    i = e.inside;
                return e.position === t.YAxisPosition.Left && i || e.position === t.YAxisPosition.Right && !i
            }, n.prototype.optimalTicks = function(e) {
                var i, n, o = this,
                    r = this.getParent(),
                    a = null !== (n = null === (i = r.getYAxisWidget()) || void 0 === i ? void 0 : i.getBounding().height) && void 0 !== n ? n : 0,
                    s = r.getChart().getChartStore(),
                    l = s.getCustomApi(),
                    c = [],
                    u = this.getType(),
                    h = s.getIndicatorStore().getInstances(r.getId()),
                    d = s.getThousandsSeparator(),
                    p = s.getDecimalFoldThreshold(),
                    g = 0,
                    v = !1;
                this.isInCandle() ? g = s.getPrecision().price : h.forEach((function(t) {
                    g = Math.max(g, t.precision), v || (v = t.shouldFormatBigNumber)
                }));
                var f, y = s.getStyles().xAxis.tickText.size;
                return e.forEach((function(e) {
                    var i, n = e.value,
                        r = o._innerConvertToPixel(+n);
                    switch (u) {
                        case t.YAxisType.Percentage:
                            i = "".concat(K(n, 2), "%");
                            break;
                        case t.YAxisType.Log:
                            r = o._innerConvertToPixel(xt(+n)), i = K(n, g);
                            break;
                        default:
                            i = K(n, g), v && (i = l.formatBigNumber(n))
                    }
                    i = q(U(i, d), p);
                    var s = O(f);
                    r > y && r < a - y && (s && Math.abs(f - r) > 2 * y || !s) && (c.push({
                        text: i,
                        coord: r,
                        value: n
                    }), f = r)
                })), c
            }, n.prototype.getAutoSize = function() {
                var e = this.getParent(),
                    i = e.getChart(),
                    n = i.getStyles(),
                    o = n.yAxis,
                    r = o.size;
                if ("auto" !== r) return r;
                var a = i.getChartStore(),
                    s = a.getCustomApi(),
                    l = 0;
                if (o.show && (o.axisLine.show && (l += o.axisLine.size), o.tickLine.show && (l += o.tickLine.length), o.tickText.show)) {
                    var c = 0;
                    this.getTicks().forEach((function(t) {
                        c = Math.max(c, J(t.text, o.tickText.size, o.tickText.weight, o.tickText.family))
                    })), l += o.tickText.marginStart + o.tickText.marginEnd + c
                }
                var u = n.crosshair,
                    h = 0;
                if (u.show && u.horizontal.show && u.horizontal.text.show) {
                    var d = a.getIndicatorStore().getInstances(e.getId()),
                        p = 0,
                        g = !1;
                    d.forEach((function(t) {
                        p = Math.max(t.precision, p), g || (g = t.shouldFormatBigNumber)
                    }));
                    var v = 2;
                    if (this.getType() !== t.YAxisType.Percentage)
                        if (this.isInCandle()) {
                            var f = a.getPrecision().price,
                                y = n.indicator.lastValueMark;
                            v = y.show && y.text.show ? Math.max(p, f) : f
                        } else v = p;
                    var m = K(this.getRange().to, v);
                    g && (m = s.formatBigNumber(m)), m = q(m, a.getDecimalFoldThreshold()), h += u.horizontal.text.paddingLeft + u.horizontal.text.paddingRight + 2 * u.horizontal.text.borderSize + J(m, u.horizontal.text.size, u.horizontal.text.weight, u.horizontal.text.family)
                }
                return Math.max(l, h)
            }, n.prototype.getSelfBounding = function() {
                return this.getParent().getYAxisWidget().getBounding()
            }, n.prototype.convertFromPixel = function(e) {
                var i, n, o = null !== (n = null === (i = this.getParent().getYAxisWidget()) || void 0 === i ? void 0 : i.getBounding().height) && void 0 !== n ? n : 0,
                    r = this.getRange(),
                    a = r.from,
                    s = r.range,
                    l = (this.isReverse() ? e / o : 1 - e / o) * s + a;
                switch (this.getType()) {
                    case t.YAxisType.Percentage:
                        var c = this.getParent().getChart().getChartStore().getVisibleFirstData();
                        return V(c) && O(c.close) ? c.close * l / 100 + c.close : 0;
                    case t.YAxisType.Log:
                        return St(l);
                    default:
                        return l
                }
            }, n.prototype.convertToRealValue = function(e) {
                var i = e;
                return this.getType() === t.YAxisType.Log && (i = St(e)), i
            }, n.prototype.convertToPixel = function(e) {
                var i = e;
                switch (this.getType()) {
                    case t.YAxisType.Percentage:
                        var n = this.getParent().getChart().getChartStore().getVisibleFirstData();
                        V(n) && O(n.close) && (i = (e - n.close) / n.close * 100);
                        break;
                    case t.YAxisType.Log:
                        i = xt(e);
                        break;
                    default:
                        i = e
                }
                return this._innerConvertToPixel(i)
            }, n.prototype.convertToNicePixel = function(t) {
                var e, i, n = null !== (i = null === (e = this.getParent().getYAxisWidget()) || void 0 === e ? void 0 : e.getBounding().height) && void 0 !== i ? i : 0,
                    o = this.convertToPixel(t);
                return Math.round(Math.max(.05 * n, Math.min(o, .98 * n)))
            }, n.extend = function(t) {
                var e = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i(n, e), n.prototype.createTicks = function(e) {
                        return t.createTicks(e)
                    }, n
                }(n);
                return e
            }, n
        }(_i),
        Si = {
            default: xi.extend({
                name: "default",
                createTicks: function(t) {
                    return t.defaultTicks
                }
            })
        };
    var Ci = function() {
            function t(t, e, i, n) {
                this._bounding = De(), this._chart = i, this._id = n, this._init(t, e)
            }
            return t.prototype._init = function(t, e) {
                this._rootContainer = t, this._container = ft("div", {
                    width: "100%",
                    margin: "0",
                    padding: "0",
                    position: "relative",
                    overflow: "hidden",
                    boxSizing: "border-box"
                }), null !== e ? t.insertBefore(this._container, e) : t.appendChild(this._container)
            }, t.prototype.getContainer = function() {
                return this._container
            }, t.prototype.getId = function() {
                return this._id
            }, t.prototype.getChart = function() {
                return this._chart
            }, t.prototype.getBounding = function() {
                return this._bounding
            }, t.prototype.update = function(t) {
                this._bounding.height !== this._container.clientHeight && (this._container.style.height = "".concat(this._bounding.height, "px")), this.updateImp(null != t ? t : 3, this._container, this._bounding)
            }, t.prototype.destroy = function() {
                this._rootContainer.removeChild(this._container)
            }, t
        }(),
        bi = function(t) {
            function e(e, i, n, o, r) {
                var a = t.call(this, e, i, n, o) || this;
                a._yAxisWidget = null, a._options = {
                    minHeight: 30,
                    dragEnabled: !0,
                    gap: {
                        top: .2,
                        bottom: .1
                    },
                    axisOptions: {
                        name: "default",
                        scrollZoomEnabled: !0
                    }
                };
                var s = a.getContainer();
                return a._mainWidget = a.createMainWidget(s), a._yAxisWidget = a.createYAxisWidget(s), a.setOptions(r), a
            }
            return i(e, t), e.prototype.setOptions = function(t) {
                var e, i, n, o, r, a = null === (e = t.axisOptions) || void 0 === e ? void 0 : e.name;
                return (this._options.axisOptions.name !== a && W(a) || !V(this._axis)) && (this._axis = this.createAxisComponent(null != a ? a : "default")), A(this._options, t), this.getId() === me ? (o = this.getMainWidget().getContainer(), r = "ew-resize") : (o = this.getYAxisWidget().getContainer(), r = "ns-resize"), null === (n = null === (i = t.axisOptions) || void 0 === i ? void 0 : i.scrollZoomEnabled) || void 0 === n || n ? o.style.cursor = r : o.style.cursor = "default", this
            }, e.prototype.getOptions = function() {
                return this._options
            }, e.prototype.getAxisComponent = function() {
                return this._axis
            }, e.prototype.setBounding = function(t, e, i) {
                var n, o;
                A(this.getBounding(), t);
                var r = {};
                return V(t.height) && (r.height = t.height), V(t.top) && (r.top = t.top), this._mainWidget.setBounding(r), null === (n = this._yAxisWidget) || void 0 === n || n.setBounding(r), V(e) && this._mainWidget.setBounding(e), V(i) && (null === (o = this._yAxisWidget) || void 0 === o || o.setBounding(i)), this
            }, e.prototype.getMainWidget = function() {
                return this._mainWidget
            }, e.prototype.getYAxisWidget = function() {
                return this._yAxisWidget
            }, e.prototype.updateImp = function(t) {
                var e;
                this._mainWidget.update(t), null === (e = this._yAxisWidget) || void 0 === e || e.update(t)
            }, e.prototype.destroy = function() {
                var e;
                t.prototype.destroy.call(this), this._mainWidget.destroy(), null === (e = this._yAxisWidget) || void 0 === e || e.destroy()
            }, e.prototype.getImage = function(t) {
                var e = this.getBounding(),
                    i = e.width,
                    n = e.height,
                    o = ft("canvas", {
                        width: "".concat(i, "px"),
                        height: "".concat(n, "px"),
                        boxSizing: "border-box"
                    }),
                    r = o.getContext("2d"),
                    a = $(o);
                o.width = i * a, o.height = n * a, r.scale(a, a);
                var s = this._mainWidget.getBounding();
                if (r.drawImage(this._mainWidget.getImage(t), s.left, 0, s.width, s.height), null !== this._yAxisWidget) {
                    var l = this._yAxisWidget.getBounding();
                    r.drawImage(this._yAxisWidget.getImage(t), l.left, 0, l.width, l.height)
                }
                return o
            }, e.prototype.createYAxisWidget = function(t) {
                return null
            }, e
        }(Ci),
        Ti = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(e, t), e.prototype.createAxisComponent = function(t) {
                var e = function(t) {
                    var e;
                    return null !== (e = Si[t]) && void 0 !== e ? e : Si.default
                }(null != t ? t : "default");
                return new e(this)
            }, e.prototype.createMainWidget = function(t) {
                return new ri(t, this)
            }, e.prototype.createYAxisWidget = function(t) {
                return new mi(t, this)
            }, e
        }(bi),
        wi = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(e, t), e.prototype.createMainWidget = function(t) {
                return new hi(t, this)
            }, e
        }(Ti),
        Ei = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(e, t), e.prototype.getAxisStyles = function(t) {
                return t.xAxis
            }, e.prototype.createAxisLine = function(t) {
                return {
                    coordinates: [{
                        x: 0,
                        y: 0
                    }, {
                        x: t.width,
                        y: 0
                    }]
                }
            }, e.prototype.createTickLines = function(t, e, i) {
                var n = i.tickLine,
                    o = i.axisLine.size;
                return t.map((function(t) {
                    return {
                        coordinates: [{
                            x: t.coord,
                            y: 0
                        }, {
                            x: t.coord,
                            y: o + n.length
                        }]
                    }
                }))
            }, e.prototype.createTickTexts = function(t, e, i) {
                var n = i.tickText,
                    o = i.axisLine.size,
                    r = i.tickLine.length;
                return t.map((function(t) {
                    return {
                        x: t.coord,
                        y: o + r + n.marginStart,
                        text: t.text,
                        align: "center",
                        baseline: "top"
                    }
                }))
            }, e
        }(di),
        Ii = function(e) {
            function n() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i(n, e), n.prototype.coordinateToPointTimestampDataIndexFlag = function() {
                return !0
            }, n.prototype.coordinateToPointValueFlag = function() {
                return !1
            }, n.prototype.getCompleteOverlays = function(t) {
                return t.getInstances()
            }, n.prototype.getProgressOverlay = function(t) {
                return t.instance
            }, n.prototype.getDefaultFigures = function(e, i, n, o, r, a, s, l, c, u, h) {
                var d, p = [];
                if (e.needDefaultXAxisFigure && e.id === (null === (d = h.instance) || void 0 === d ? void 0 : d.id)) {
                    var g = Number.MAX_SAFE_INTEGER,
                        v = Number.MIN_SAFE_INTEGER;
                    i.forEach((function(i, n) {
                        g = Math.min(g, i.x), v = Math.max(v, i.x);
                        var o = e.points[n];
                        if (O(o.timestamp)) {
                            var s = a.formatDate(r, o.timestamp, "YYYY-MM-DD HH:mm", t.FormatDateType.Crosshair);
                            p.push({
                                type: "text",
                                attrs: {
                                    x: i.x,
                                    y: 0,
                                    text: s,
                                    align: "center"
                                },
                                ignoreEvent: !0
                            })
                        }
                    })), i.length > 1 && p.unshift({
                        type: "rect",
                        attrs: {
                            x: g,
                            y: 0,
                            width: v - g,
                            height: n.height
                        },
                        ignoreEvent: !0
                    })
                }
                return p
            }, n.prototype.getFigures = function(t, e, i, n, o, r, a, s, l, c, u) {
                var h, d;
                return null !== (d = null === (h = t.createXAxisFigures) || void 0 === h ? void 0 : h.call(t, {
                    overlay: t,
                    coordinates: e,
                    bounding: i,
                    barSpace: n,
                    precision: o,
                    thousandsSeparator: r,
                    decimalFoldThreshold: a,
                    dateTimeFormat: s,
                    defaultStyles: l,
                    xAxis: c,
                    yAxis: u
                })) && void 0 !== d ? d : []
            }, n
        }(fi),
        Pi = function(e) {
            function n() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i(n, e), n.prototype.compare = function(t) {
                return V(t.kLineData) && t.dataIndex === t.realDataIndex
            }, n.prototype.getDirectionStyles = function(t) {
                return t.vertical
            }, n.prototype.getText = function(e, i) {
                var n, o = null === (n = e.kLineData) || void 0 === n ? void 0 : n.timestamp;
                return i.getCustomApi().formatDate(i.getTimeScaleStore().getDateTimeFormat(), o, "YYYY-MM-DD HH:mm", t.FormatDateType.Crosshair)
            }, n.prototype.getTextAttrs = function(t, e, i, n, o, r) {
                var a, s = i.realX,
                    l = "center";
                return s - e / 2 - r.paddingLeft < 0 ? (a = 0, l = "left") : s + e / 2 + r.paddingRight > n.width ? (a = n.width, l = "right") : a = s, {
                    x: a,
                    y: 0,
                    text: t,
                    align: l,
                    baseline: "top"
                }
            }, n
        }(yi),
        Di = function(t) {
            function e(e, i) {
                var n = t.call(this, e, i) || this;
                return n._xAxisView = new Ei(n), n._overlayXAxisView = new Ii(n), n._crosshairVerticalLabelView = new Pi(n), n.getContainer().style.cursor = "ew-resize", n.addChild(n._overlayXAxisView), n
            }
            return i(e, t), e.prototype.getName = function() {
                return we
            }, e.prototype.updateMain = function(t) {
                this._xAxisView.draw(t)
            }, e.prototype.updateOverlay = function(t) {
                this._overlayXAxisView.draw(t), this._crosshairVerticalLabelView.draw(t)
            }, e
        }(ke),
        Mi = function(e) {
            function n() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i(n, e), n.prototype.calcRange = function() {
                var t = this.getParent().getChart().getChartStore().getTimeScaleStore().getVisibleRange(),
                    e = t.from,
                    i = t.to,
                    n = i - 1,
                    o = i - e;
                return {
                    from: e,
                    to: n,
                    range: o,
                    realFrom: e,
                    realTo: n,
                    realRange: o
                }
            }, n.prototype.optimalTicks = function(e) {
                var i, n, o = this.getParent().getChart(),
                    r = o.getChartStore(),
                    a = r.getCustomApi().formatDate,
                    s = [],
                    l = e.length,
                    c = r.getDataList();
                if (l > 0) {
                    var u = r.getTimeScaleStore().getDateTimeFormat(),
                        h = o.getStyles().xAxis.tickText,
                        d = J("00-00 00:00", h.size, h.weight, h.family),
                        p = parseInt(e[0].value, 10),
                        g = this.convertToPixel(p),
                        v = 1;
                    if (l > 1) {
                        var f = parseInt(e[1].value, 10),
                            y = this.convertToPixel(f),
                            m = Math.abs(y - g);
                        m < d && (v = Math.ceil(d / m))
                    }
                    for (var _ = 0; _ < l; _ += v) {
                        var x = parseInt(e[_].value, 10),
                            S = c[x].timestamp,
                            C = a(u, S, "HH:mm", t.FormatDateType.XAxis);
                        if (0 !== _) {
                            var b = c[parseInt(e[_ - v].value, 10)].timestamp;
                            C = null !== (i = this._optimalTickLabel(a, u, S, b)) && void 0 !== i ? i : C
                        }
                        var T = this.convertToPixel(x);
                        s.push({
                            text: C,
                            coord: T,
                            value: S
                        })
                    }
                    if (1 === s.length) s[0].text = a(u, s[0].value, "YYYY-MM-DD HH:mm", t.FormatDateType.XAxis);
                    else {
                        var w = s[0].value,
                            E = s[1].value;
                        if (V(s[2])) {
                            var I = s[2].text;
                            /^[0-9]{2}-[0-9]{2}$/.test(I) ? s[0].text = a(u, w, "MM-DD", t.FormatDateType.XAxis) : /^[0-9]{4}-[0-9]{2}$/.test(I) ? s[0].text = a(u, w, "YYYY-MM", t.FormatDateType.XAxis) : /^[0-9]{4}$/.test(I) && (s[0].text = a(u, w, "YYYY", t.FormatDateType.XAxis))
                        } else s[0].text = null !== (n = this._optimalTickLabel(a, u, w, E)) && void 0 !== n ? n : s[0].text
                    }
                }
                return s
            }, n.prototype._optimalTickLabel = function(e, i, n, o) {
                var r = e(i, n, "YYYY", t.FormatDateType.XAxis),
                    a = e(i, n, "YYYY-MM", t.FormatDateType.XAxis),
                    s = e(i, n, "MM-DD", t.FormatDateType.XAxis);
                return r !== e(i, o, "YYYY", t.FormatDateType.XAxis) ? r : a !== e(i, o, "YYYY-MM", t.FormatDateType.XAxis) ? a : s !== e(i, o, "MM-DD", t.FormatDateType.XAxis) ? s : null
            }, n.prototype.getAutoSize = function() {
                var t = this.getParent().getChart().getStyles(),
                    e = t.xAxis,
                    i = e.size;
                if ("auto" !== i) return i;
                var n = t.crosshair,
                    o = 0;
                e.show && (e.axisLine.show && (o += e.axisLine.size), e.tickLine.show && (o += e.tickLine.length), e.tickText.show && (o += e.tickText.marginStart + e.tickText.marginEnd + e.tickText.size));
                var r = 0;
                return n.show && n.vertical.show && n.vertical.text.show && (r += n.vertical.text.paddingTop + n.vertical.text.paddingBottom + 2 * n.vertical.text.borderSize + n.vertical.text.size), Math.max(o, r)
            }, n.prototype.getSelfBounding = function() {
                return this.getParent().getMainWidget().getBounding()
            }, n.prototype.convertTimestampFromPixel = function(t) {
                var e = this.getParent().getChart().getChartStore().getTimeScaleStore(),
                    i = e.coordinateToDataIndex(t);
                return e.dataIndexToTimestamp(i)
            }, n.prototype.convertTimestampToPixel = function(t) {
                var e = this.getParent().getChart().getChartStore().getTimeScaleStore(),
                    i = e.timestampToDataIndex(t);
                return e.dataIndexToCoordinate(i)
            }, n.prototype.convertFromPixel = function(t) {
                return this.getParent().getChart().getChartStore().getTimeScaleStore().coordinateToDataIndex(t)
            }, n.prototype.convertToPixel = function(t) {
                return this.getParent().getChart().getChartStore().getTimeScaleStore().dataIndexToCoordinate(t)
            }, n.extend = function(t) {
                var e = function(e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i(n, e), n.prototype.createTicks = function(e) {
                        return t.createTicks(e)
                    }, n
                }(n);
                return e
            }, n
        }(_i),
        ki = {
            default: Mi.extend({
                name: "default",
                createTicks: function(t) {
                    return t.defaultTicks
                }
            })
        };
    var Ai = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return i(e, t), e.prototype.createAxisComponent = function(t) {
            var e = function(t) {
                var e;
                return null !== (e = ki[t]) && void 0 !== e ? e : ki.default
            }(t);
            return new e(this)
        }, e.prototype.createMainWidget = function(t) {
            return new Di(t, this)
        }, e
    }(bi);
    var Fi = function(e) {
            function n(t, i) {
                var n, o, r, a = e.call(this, t, i) || this;
                return a._dragFlag = !1, a._dragStartY = 0, a._topPaneHeight = 0, a._bottomPaneHeight = 0, a._pressedMouseMoveEvent = (n = a._pressedTouchMouseMoveEvent, o = 20, r = 0, function() {
                    var t = Date.now();
                    t - r > o && (n.apply(this, arguments), r = t)
                }), a.registerEvent("touchStartEvent", a._mouseDownEvent.bind(a)).registerEvent("touchMoveEvent", a._pressedMouseMoveEvent.bind(a)).registerEvent("touchEndEvent", a._mouseUpEvent.bind(a)).registerEvent("mouseDownEvent", a._mouseDownEvent.bind(a)).registerEvent("mouseUpEvent", a._mouseUpEvent.bind(a)).registerEvent("pressedMouseMoveEvent", a._pressedMouseMoveEvent.bind(a)).registerEvent("mouseEnterEvent", a._mouseEnterEvent.bind(a)).registerEvent("mouseLeaveEvent", a._mouseLeaveEvent.bind(a)), a
            }
            return i(n, e), n.prototype.getName = function() {
                return Ie
            }, n.prototype.checkEventOn = function() {
                return !0
            }, n.prototype._mouseDownEvent = function(t) {
                this._dragFlag = !0, this._dragStartY = t.pageY;
                var e = this.getPane();
                return this._topPaneHeight = e.getTopPane().getBounding().height, this._bottomPaneHeight = e.getBottomPane().getBounding().height, !0
            }, n.prototype._mouseUpEvent = function() {
                return this._dragFlag = !1, this._mouseLeaveEvent()
            }, n.prototype._pressedTouchMouseMoveEvent = function(e) {
                var i = e.pageY - this._dragStartY,
                    n = this.getPane(),
                    o = n.getTopPane(),
                    r = n.getBottomPane(),
                    a = i < 0;
                if (null !== o && (null == r ? void 0 : r.getOptions().dragEnabled)) {
                    var s = void 0,
                        l = void 0,
                        c = void 0,
                        u = void 0;
                    a ? (s = o, l = r, c = this._topPaneHeight, u = this._bottomPaneHeight) : (s = r, l = o, c = this._bottomPaneHeight, u = this._topPaneHeight);
                    var h = s.getOptions().minHeight;
                    if (c > h) {
                        var d = Math.max(c - Math.abs(i), h),
                            p = c - d;
                        s.setBounding({
                            height: d
                        }), l.setBounding({
                            height: u + p
                        });
                        var g = n.getChart();
                        g.getChartStore().getActionStore().execute(t.ActionType.OnPaneDrag, {
                            paneId: n.getId()
                        }), g.adjustPaneViewport(!0, !0, !0, !0, !0)
                    }
                }
                return !0
            }, n.prototype._mouseEnterEvent = function() {
                var t, e = this.getPane(),
                    i = e.getBottomPane();
                if (null !== (t = null == i ? void 0 : i.getOptions().dragEnabled) && void 0 !== t && t) {
                    var n = e.getChart().getStyles().separator;
                    return this.getContainer().style.background = n.activeBackgroundColor, !0
                }
                return !1
            }, n.prototype._mouseLeaveEvent = function() {
                return !this._dragFlag && (this.getContainer().style.background = "", !0)
            }, n.prototype.createContainer = function() {
                return ft("div", {
                    width: "100%",
                    height: "".concat(7, "px"),
                    margin: "0",
                    padding: "0",
                    position: "absolute",
                    top: "-3px",
                    zIndex: "20",
                    boxSizing: "border-box",
                    cursor: "ns-resize"
                })
            }, n.prototype.updateImp = function(t, e, i) {
                if (4 === i || 2 === i) {
                    var n = this.getPane().getChart().getStyles().separator;
                    t.style.top = "".concat(-Math.floor((7 - n.size) / 2), "px"), t.style.height = "".concat(7, "px")
                }
            }, n
        }(Me),
        Li = function(t) {
            function e(e, i, n, o, r, a) {
                var s = t.call(this, e, i, n, o) || this;
                return s.getContainer().style.overflow = "", s._topPane = r, s._bottomPane = a, s._separatorWidget = new Fi(s.getContainer(), s), s
            }
            return i(e, t), e.prototype.setBounding = function(t) {
                return A(this.getBounding(), t), this
            }, e.prototype.getTopPane = function() {
                return this._topPane
            }, e.prototype.setTopPane = function(t) {
                return this._topPane = t, this
            }, e.prototype.getBottomPane = function() {
                return this._bottomPane
            }, e.prototype.setBottomPane = function(t) {
                return this._bottomPane = t, this
            }, e.prototype.getWidget = function() {
                return this._separatorWidget
            }, e.prototype.getImage = function(t) {
                var e = this.getBounding(),
                    i = e.width,
                    n = e.height,
                    o = this.getChart().getStyles().separator,
                    r = ft("canvas", {
                        width: "".concat(i, "px"),
                        height: "".concat(n, "px"),
                        boxSizing: "border-box"
                    }),
                    a = r.getContext("2d"),
                    s = $(r);
                return r.width = i * s, r.height = n * s, a.scale(s, s), a.fillStyle = o.color, a.fillRect(0, 0, i, n), r
            }, e.prototype.updateImp = function(t, e, i) {
                if (4 === t || 2 === t) {
                    var n = this.getChart().getStyles().separator;
                    e.style.backgroundColor = n.color, e.style.height = "".concat(i.height, "px"), e.style.marginLeft = "".concat(i.left, "px"), e.style.width = "".concat(i.width, "px"), this._separatorWidget.update(t)
                }
            }, e
        }(Ci);

    function Ri() {
        var t;
        return "undefined" != typeof window && (null !== (t = window.navigator.userAgent.toLowerCase().indexOf("firefox")) && void 0 !== t ? t : -1) > -1
    }

    function Bi() {
        return "undefined" != typeof window && /iPhone|iPad|iPod/.test(window.navigator.platform)
    }
    var Oi, Vi = function() {
            function t(t, e, i) {
                var n = this;
                this._clickCount = 0, this._clickTimeoutId = null, this._clickCoordinate = {
                    x: Number.NEGATIVE_INFINITY,
                    y: Number.POSITIVE_INFINITY
                }, this._tapCount = 0, this._tapTimeoutId = null, this._tapCoordinate = {
                    x: Number.NEGATIVE_INFINITY,
                    y: Number.POSITIVE_INFINITY
                }, this._longTapTimeoutId = null, this._longTapActive = !1, this._mouseMoveStartCoordinate = null, this._touchMoveStartCoordinate = null, this._touchMoveExceededManhattanDistance = !1, this._cancelClick = !1, this._cancelTap = !1, this._unsubscribeOutsideMouseEvents = null, this._unsubscribeOutsideTouchEvents = null, this._unsubscribeMobileSafariEvents = null, this._unsubscribeMousemove = null, this._unsubscribeMouseWheel = null, this._unsubscribeContextMenu = null, this._unsubscribeRootMouseEvents = null, this._unsubscribeRootTouchEvents = null, this._startPinchMiddleCoordinate = null, this._startPinchDistance = 0, this._pinchPrevented = !1, this._preventTouchDragProcess = !1, this._mousePressed = !1, this._lastTouchEventTimeStamp = 0, this._activeTouchId = null, this._acceptMouseLeave = !Bi(), this._onFirefoxOutsideMouseUp = function(t) {
                    n._mouseUpHandler(t)
                }, this._onMobileSafariDoubleClick = function(t) {
                    n._firesTouchEvents(t) ? (++n._tapCount, null !== n._tapTimeoutId && n._tapCount > 1 && (n._mouseTouchMoveWithDownInfo(n._getCoordinate(t), n._tapCoordinate).manhattanDistance < 30 && !n._cancelTap && n._processEvent(n._makeCompatEvent(t), n._handler.doubleTapEvent), n._resetTapTimeout())) : (++n._clickCount, null !== n._clickTimeoutId && n._clickCount > 1 && (n._mouseTouchMoveWithDownInfo(n._getCoordinate(t), n._clickCoordinate).manhattanDistance < 5 && !n._cancelClick && n._processEvent(n._makeCompatEvent(t), n._handler.mouseDoubleClickEvent), n._resetClickTimeout()))
                }, this._target = t, this._handler = e, this._options = i, this._init()
            }
            return t.prototype.destroy = function() {
                null !== this._unsubscribeOutsideMouseEvents && (this._unsubscribeOutsideMouseEvents(), this._unsubscribeOutsideMouseEvents = null), null !== this._unsubscribeOutsideTouchEvents && (this._unsubscribeOutsideTouchEvents(), this._unsubscribeOutsideTouchEvents = null), null !== this._unsubscribeMousemove && (this._unsubscribeMousemove(), this._unsubscribeMousemove = null), null !== this._unsubscribeMouseWheel && (this._unsubscribeMouseWheel(), this._unsubscribeMouseWheel = null), null !== this._unsubscribeContextMenu && (this._unsubscribeContextMenu(), this._unsubscribeContextMenu = null), null !== this._unsubscribeRootMouseEvents && (this._unsubscribeRootMouseEvents(), this._unsubscribeRootMouseEvents = null), null !== this._unsubscribeRootTouchEvents && (this._unsubscribeRootTouchEvents(), this._unsubscribeRootTouchEvents = null), null !== this._unsubscribeMobileSafariEvents && (this._unsubscribeMobileSafariEvents(), this._unsubscribeMobileSafariEvents = null), this._clearLongTapTimeout(), this._resetClickTimeout()
            }, t.prototype._mouseEnterHandler = function(t) {
                var e, i, n, o = this;
                null === (e = this._unsubscribeMousemove) || void 0 === e || e.call(this), null === (i = this._unsubscribeMouseWheel) || void 0 === i || i.call(this), null === (n = this._unsubscribeContextMenu) || void 0 === n || n.call(this);
                var r = this._mouseMoveHandler.bind(this);
                this._unsubscribeMousemove = function() {
                    o._target.removeEventListener("mousemove", r)
                }, this._target.addEventListener("mousemove", r);
                var a = this._mouseWheelHandler.bind(this);
                this._unsubscribeMouseWheel = function() {
                    o._target.removeEventListener("wheel", a)
                }, this._target.addEventListener("wheel", a, {
                    passive: !1
                });
                var s = this._contextMenuHandler.bind(this);
                this._unsubscribeContextMenu = function() {
                    o._target.removeEventListener("contextmenu", s)
                }, this._target.addEventListener("contextmenu", s, {
                    passive: !1
                }), this._firesTouchEvents(t) || (this._processEvent(this._makeCompatEvent(t), this._handler.mouseEnterEvent), this._acceptMouseLeave = !0)
            }, t.prototype._resetClickTimeout = function() {
                null !== this._clickTimeoutId && clearTimeout(this._clickTimeoutId), this._clickCount = 0, this._clickTimeoutId = null, this._clickCoordinate = {
                    x: Number.NEGATIVE_INFINITY,
                    y: Number.POSITIVE_INFINITY
                }
            }, t.prototype._resetTapTimeout = function() {
                null !== this._tapTimeoutId && clearTimeout(this._tapTimeoutId), this._tapCount = 0, this._tapTimeoutId = null, this._tapCoordinate = {
                    x: Number.NEGATIVE_INFINITY,
                    y: Number.POSITIVE_INFINITY
                }
            }, t.prototype._mouseMoveHandler = function(t) {
                this._mousePressed || null !== this._touchMoveStartCoordinate || this._firesTouchEvents(t) || (this._processEvent(this._makeCompatEvent(t), this._handler.mouseMoveEvent), this._acceptMouseLeave = !0)
            }, t.prototype._mouseWheelHandler = function(t) {
                if (Math.abs(t.deltaX) > Math.abs(t.deltaY)) {
                    if (!V(this._handler.mouseWheelHortEvent)) return;
                    if (this._preventDefault(t), 0 === Math.abs(t.deltaX)) return;
                    this._handler.mouseWheelHortEvent(this._makeCompatEvent(t), -t.deltaX)
                } else {
                    if (!V(this._handler.mouseWheelVertEvent)) return;
                    var e = -t.deltaY / 100;
                    if (0 === e) return;
                    switch (this._preventDefault(t), t.deltaMode) {
                        case t.DOM_DELTA_PAGE:
                            e *= 120;
                            break;
                        case t.DOM_DELTA_LINE:
                            e *= 32
                    }
                    if (0 !== e) {
                        var i = Math.sign(e) * Math.min(1, Math.abs(e));
                        this._handler.mouseWheelVertEvent(this._makeCompatEvent(t), i)
                    }
                }
            }, t.prototype._contextMenuHandler = function(t) {
                this._preventDefault(t)
            }, t.prototype._touchMoveHandler = function(t) {
                var e = this._touchWithId(t.changedTouches, this._activeTouchId);
                if (null !== e && (this._lastTouchEventTimeStamp = this._eventTimeStamp(t), null === this._startPinchMiddleCoordinate && !this._preventTouchDragProcess)) {
                    this._pinchPrevented = !0;
                    var i = this._mouseTouchMoveWithDownInfo(this._getCoordinate(e), this._touchMoveStartCoordinate),
                        n = i.xOffset,
                        o = i.yOffset,
                        r = i.manhattanDistance;
                    if (this._touchMoveExceededManhattanDistance || !(r < 5)) {
                        if (!this._touchMoveExceededManhattanDistance) {
                            var a = .5 * n,
                                s = o >= a && !this._options.treatVertDragAsPageScroll(),
                                l = a > o && !this._options.treatHorzDragAsPageScroll();
                            s || l || (this._preventTouchDragProcess = !0), this._touchMoveExceededManhattanDistance = !0, this._cancelTap = !0, this._clearLongTapTimeout(), this._resetTapTimeout()
                        }
                        this._preventTouchDragProcess || this._processEvent(this._makeCompatEvent(t, e), this._handler.touchMoveEvent)
                    }
                }
            }, t.prototype._mouseMoveWithDownHandler = function(t) {
                0 === t.button && (this._mouseTouchMoveWithDownInfo(this._getCoordinate(t), this._mouseMoveStartCoordinate).manhattanDistance >= 5 && (this._cancelClick = !0, this._resetClickTimeout()), this._cancelClick && this._processEvent(this._makeCompatEvent(t), this._handler.pressedMouseMoveEvent))
            }, t.prototype._mouseTouchMoveWithDownInfo = function(t, e) {
                var i = Math.abs(e.x - t.x),
                    n = Math.abs(e.y - t.y);
                return {
                    xOffset: i,
                    yOffset: n,
                    manhattanDistance: i + n
                }
            }, t.prototype._touchEndHandler = function(t) {
                var e = this._touchWithId(t.changedTouches, this._activeTouchId);
                if (null === e && 0 === t.touches.length && (e = t.changedTouches[0]), null !== e) {
                    this._activeTouchId = null, this._lastTouchEventTimeStamp = this._eventTimeStamp(t), this._clearLongTapTimeout(), this._touchMoveStartCoordinate = null, null !== this._unsubscribeRootTouchEvents && (this._unsubscribeRootTouchEvents(), this._unsubscribeRootTouchEvents = null);
                    var i = this._makeCompatEvent(t, e);
                    if (this._processEvent(i, this._handler.touchEndEvent), ++this._tapCount, null !== this._tapTimeoutId && this._tapCount > 1) this._mouseTouchMoveWithDownInfo(this._getCoordinate(e), this._tapCoordinate).manhattanDistance < 30 && !this._cancelTap && this._processEvent(i, this._handler.doubleTapEvent), this._resetTapTimeout();
                    else this._cancelTap || (this._processEvent(i, this._handler.tapEvent), V(this._handler.tapEvent) && this._preventDefault(t));
                    0 === this._tapCount && this._preventDefault(t), 0 === t.touches.length && this._longTapActive && (this._longTapActive = !1, this._preventDefault(t))
                }
            }, t.prototype._mouseUpHandler = function(t) {
                if (0 === t.button) {
                    var e = this._makeCompatEvent(t);
                    if (this._mouseMoveStartCoordinate = null, this._mousePressed = !1, null !== this._unsubscribeRootMouseEvents && (this._unsubscribeRootMouseEvents(), this._unsubscribeRootMouseEvents = null), Ri()) this._target.ownerDocument.documentElement.removeEventListener("mouseleave", this._onFirefoxOutsideMouseUp);
                    if (!this._firesTouchEvents(t))
                        if (this._processEvent(e, this._handler.mouseUpEvent), ++this._clickCount, null !== this._clickTimeoutId && this._clickCount > 1) this._mouseTouchMoveWithDownInfo(this._getCoordinate(t), this._clickCoordinate).manhattanDistance < 5 && !this._cancelClick && this._processEvent(e, this._handler.mouseDoubleClickEvent), this._resetClickTimeout();
                        else this._cancelClick || this._processEvent(e, this._handler.mouseClickEvent)
                }
            }, t.prototype._clearLongTapTimeout = function() {
                null !== this._longTapTimeoutId && (clearTimeout(this._longTapTimeoutId), this._longTapTimeoutId = null)
            }, t.prototype._touchStartHandler = function(t) {
                if (null === this._activeTouchId) {
                    var e = t.changedTouches[0];
                    this._activeTouchId = e.identifier, this._lastTouchEventTimeStamp = this._eventTimeStamp(t);
                    var i = this._target.ownerDocument.documentElement;
                    this._cancelTap = !1, this._touchMoveExceededManhattanDistance = !1, this._preventTouchDragProcess = !1, this._touchMoveStartCoordinate = this._getCoordinate(e), null !== this._unsubscribeRootTouchEvents && (this._unsubscribeRootTouchEvents(), this._unsubscribeRootTouchEvents = null);
                    var n = this._touchMoveHandler.bind(this),
                        o = this._touchEndHandler.bind(this);
                    this._unsubscribeRootTouchEvents = function() {
                        i.removeEventListener("touchmove", n), i.removeEventListener("touchend", o)
                    }, i.addEventListener("touchmove", n, {
                        passive: !1
                    }), i.addEventListener("touchend", o, {
                        passive: !1
                    }), this._clearLongTapTimeout(), this._longTapTimeoutId = setTimeout(this._longTapHandler.bind(this, t), 500), this._processEvent(this._makeCompatEvent(t, e), this._handler.touchStartEvent), null === this._tapTimeoutId && (this._tapCount = 0, this._tapTimeoutId = setTimeout(this._resetTapTimeout.bind(this), 500), this._tapCoordinate = this._getCoordinate(e))
                }
            }, t.prototype._mouseDownHandler = function(t) {
                if (2 === t.button) return this._preventDefault(t), void this._processEvent(this._makeCompatEvent(t), this._handler.mouseRightClickEvent);
                if (0 === t.button) {
                    var e = this._target.ownerDocument.documentElement;
                    Ri() && e.addEventListener("mouseleave", this._onFirefoxOutsideMouseUp), this._cancelClick = !1, this._mouseMoveStartCoordinate = this._getCoordinate(t), null !== this._unsubscribeRootMouseEvents && (this._unsubscribeRootMouseEvents(), this._unsubscribeRootMouseEvents = null);
                    var i = this._mouseMoveWithDownHandler.bind(this),
                        n = this._mouseUpHandler.bind(this);
                    this._unsubscribeRootMouseEvents = function() {
                        e.removeEventListener("mousemove", i), e.removeEventListener("mouseup", n)
                    }, e.addEventListener("mousemove", i), e.addEventListener("mouseup", n), this._mousePressed = !0, this._firesTouchEvents(t) || (this._processEvent(this._makeCompatEvent(t), this._handler.mouseDownEvent), null === this._clickTimeoutId && (this._clickCount = 0, this._clickTimeoutId = setTimeout(this._resetClickTimeout.bind(this), 500), this._clickCoordinate = this._getCoordinate(t)))
                }
            }, t.prototype._init = function() {
                var t = this;
                this._target.addEventListener("mouseenter", this._mouseEnterHandler.bind(this)), this._target.addEventListener("touchcancel", this._clearLongTapTimeout.bind(this));
                var e = this._target.ownerDocument,
                    i = function(e) {
                        null != t._handler.mouseDownOutsideEvent && (e.composed && t._target.contains(e.composedPath()[0]) || null !== e.target && t._target.contains(e.target) || t._handler.mouseDownOutsideEvent({
                            x: 0,
                            y: 0,
                            pageX: 0,
                            pageY: 0
                        }))
                    };
                this._unsubscribeOutsideTouchEvents = function() {
                    e.removeEventListener("touchstart", i)
                }, this._unsubscribeOutsideMouseEvents = function() {
                    e.removeEventListener("mousedown", i)
                }, e.addEventListener("mousedown", i), e.addEventListener("touchstart", i, {
                    passive: !0
                }), Bi() && (this._unsubscribeMobileSafariEvents = function() {
                    t._target.removeEventListener("dblclick", t._onMobileSafariDoubleClick)
                }, this._target.addEventListener("dblclick", this._onMobileSafariDoubleClick)), this._target.addEventListener("mouseleave", this._mouseLeaveHandler.bind(this)), this._target.addEventListener("touchstart", this._touchStartHandler.bind(this), {
                    passive: !0
                }), this._target.addEventListener("mousedown", (function(t) {
                    if (1 === t.button) return t.preventDefault(), !1
                })), this._target.addEventListener("mousedown", this._mouseDownHandler.bind(this)), this._initPinch(), this._target.addEventListener("touchmove", (function() {}), {
                    passive: !1
                })
            }, t.prototype._initPinch = function() {
                var t = this;
                (V(this._handler.pinchStartEvent) || V(this._handler.pinchEvent) || V(this._handler.pinchEndEvent)) && (this._target.addEventListener("touchstart", (function(e) {
                    t._checkPinchState(e.touches)
                }), {
                    passive: !0
                }), this._target.addEventListener("touchmove", (function(e) {
                    if (2 === e.touches.length && null !== t._startPinchMiddleCoordinate && V(t._handler.pinchEvent)) {
                        var i = t._getTouchDistance(e.touches[0], e.touches[1]) / t._startPinchDistance;
                        t._handler.pinchEvent(d(d({}, t._startPinchMiddleCoordinate), {
                            pageX: 0,
                            pageY: 0
                        }), i), t._preventDefault(e)
                    }
                }), {
                    passive: !1
                }), this._target.addEventListener("touchend", (function(e) {
                    t._checkPinchState(e.touches)
                })))
            }, t.prototype._checkPinchState = function(t) {
                1 === t.length && (this._pinchPrevented = !1), 2 !== t.length || this._pinchPrevented || this._longTapActive ? this._stopPinch() : this._startPinch(t)
            }, t.prototype._startPinch = function(t) {
                var e, i = null !== (e = this._target.getBoundingClientRect()) && void 0 !== e ? e : {
                    left: 0,
                    top: 0
                };
                this._startPinchMiddleCoordinate = {
                    x: (t[0].clientX - i.left + (t[1].clientX - i.left)) / 2,
                    y: (t[0].clientY - i.top + (t[1].clientY - i.top)) / 2
                }, this._startPinchDistance = this._getTouchDistance(t[0], t[1]), V(this._handler.pinchStartEvent) && this._handler.pinchStartEvent({
                    x: 0,
                    y: 0,
                    pageX: 0,
                    pageY: 0
                }), this._clearLongTapTimeout()
            }, t.prototype._stopPinch = function() {
                null !== this._startPinchMiddleCoordinate && (this._startPinchMiddleCoordinate = null, V(this._handler.pinchEndEvent) && this._handler.pinchEndEvent({
                    x: 0,
                    y: 0,
                    pageX: 0,
                    pageY: 0
                }))
            }, t.prototype._mouseLeaveHandler = function(t) {
                var e, i, n;
                null === (e = this._unsubscribeMousemove) || void 0 === e || e.call(this), null === (i = this._unsubscribeMouseWheel) || void 0 === i || i.call(this), null === (n = this._unsubscribeContextMenu) || void 0 === n || n.call(this), this._firesTouchEvents(t) || this._acceptMouseLeave && (this._processEvent(this._makeCompatEvent(t), this._handler.mouseLeaveEvent), this._acceptMouseLeave = !Bi())
            }, t.prototype._longTapHandler = function(t) {
                var e = this._touchWithId(t.touches, this._activeTouchId);
                null !== e && (this._processEvent(this._makeCompatEvent(t, e), this._handler.longTapEvent), this._cancelTap = !0, this._longTapActive = !0)
            }, t.prototype._firesTouchEvents = function(t) {
                var e;
                return V(null === (e = t.sourceCapabilities) || void 0 === e ? void 0 : e.firesTouchEvents) ? t.sourceCapabilities.firesTouchEvents : this._eventTimeStamp(t) < this._lastTouchEventTimeStamp + 500
            }, t.prototype._processEvent = function(t, e) {
                null == e || e.call(this._handler, t)
            }, t.prototype._makeCompatEvent = function(t, e) {
                var i, n = this,
                    o = null != e ? e : t,
                    r = null !== (i = this._target.getBoundingClientRect()) && void 0 !== i ? i : {
                        left: 0,
                        top: 0
                    };
                return {
                    x: o.clientX - r.left,
                    y: o.clientY - r.top,
                    pageX: o.pageX,
                    pageY: o.pageY,
                    isTouch: !t.type.startsWith("mouse") && "contextmenu" !== t.type && "click" !== t.type && "wheel" !== t.type,
                    preventDefault: function() {
                        "touchstart" !== t.type && n._preventDefault(t)
                    }
                }
            }, t.prototype._getTouchDistance = function(t, e) {
                var i = t.clientX - e.clientX,
                    n = t.clientY - e.clientY;
                return Math.sqrt(i * i + n * n)
            }, t.prototype._preventDefault = function(t) {
                t.cancelable && t.preventDefault()
            }, t.prototype._getCoordinate = function(t) {
                return {
                    x: t.pageX,
                    y: t.pageY
                }
            }, t.prototype._eventTimeStamp = function(t) {
                var e;
                return null !== (e = t.timeStamp) && void 0 !== e ? e : performance.now()
            }, t.prototype._touchWithId = function(t, e) {
                for (var i = 0; i < t.length; ++i)
                    if (t[i].identifier === e) return t[i];
                return null
            }, t
        }(),
        Ni = function() {
            function t(t, e) {
                var i = this;
                this._flingStartTime = (new Date).getTime(), this._flingScrollRequestId = null, this._startScrollCoordinate = null, this._touchCoordinate = null, this._touchCancelCrosshair = !1, this._touchZoomed = !1, this._pinchScale = 1, this._mouseDownWidget = null, this._prevYAxisRange = null, this._xAxisStartScaleCoordinate = null, this._xAxisStartScaleDistance = 0, this._xAxisScale = 1, this._yAxisStartScaleDistance = 0, this._mouseMoveTriggerWidgetInfo = {
                    pane: null,
                    widget: null
                }, this._boundKeyBoardDownEvent = function(t) {
                    if (t.shiftKey) switch (t.code) {
                        case "Equal":
                            i._chart.getChartStore().getTimeScaleStore().zoom(.5);
                            break;
                        case "Minus":
                            i._chart.getChartStore().getTimeScaleStore().zoom(-.5);
                            break;
                        case "ArrowLeft":
                            (e = i._chart.getChartStore().getTimeScaleStore()).startScroll(), e.scroll(-3 * e.getBarSpace().bar);
                            break;
                        case "ArrowRight":
                            var e;
                            (e = i._chart.getChartStore().getTimeScaleStore()).startScroll(), e.scroll(3 * e.getBarSpace().bar)
                    }
                }, this._container = t, this._chart = e, this._event = new Vi(t, this, {
                    treatVertDragAsPageScroll: function() {
                        return !1
                    },
                    treatHorzDragAsPageScroll: function() {
                        return !1
                    }
                }), t.addEventListener("keydown", this._boundKeyBoardDownEvent)
            }
            return t.prototype.pinchStartEvent = function() {
                return this._touchZoomed = !0, this._pinchScale = 1, !0
            }, t.prototype.pinchEvent = function(t, e) {
                var i = this._findWidgetByEvent(t),
                    n = i.pane,
                    o = i.widget;
                if ((null == n ? void 0 : n.getId()) !== me && (null == o ? void 0 : o.getName()) === Te) {
                    var r = this._makeWidgetEvent(t, o),
                        a = 5 * (e - this._pinchScale);
                    return this._pinchScale = e, this._chart.getChartStore().getTimeScaleStore().zoom(a, {
                        x: r.x,
                        y: r.y
                    }), !0
                }
                return !1
            }, t.prototype.mouseWheelHortEvent = function(t, e) {
                var i = this._chart.getChartStore().getTimeScaleStore();
                return i.startScroll(), i.scroll(e), !0
            }, t.prototype.mouseWheelVertEvent = function(t, e) {
                var i = this._findWidgetByEvent(t).widget,
                    n = this._makeWidgetEvent(t, i);
                return (null == i ? void 0 : i.getName()) === Te && (this._chart.getChartStore().getTimeScaleStore().zoom(e, {
                    x: n.x,
                    y: n.y
                }), !0)
            }, t.prototype.mouseDownEvent = function(t) {
                var e, i, n = this._findWidgetByEvent(t),
                    o = n.pane,
                    r = n.widget;
                if (this._mouseDownWidget = r, null !== r) {
                    var a = this._makeWidgetEvent(t, r);
                    switch (r.getName()) {
                        case Ie:
                            return r.dispatchEvent("mouseDownEvent", a);
                        case Te:
                            var s = null !== (e = o.getAxisComponent().getRange()) && void 0 !== e ? e : null;
                            return this._prevYAxisRange = null === s ? s : d({}, s), this._startScrollCoordinate = {
                                x: a.x,
                                y: a.y
                            }, this._chart.getChartStore().getTimeScaleStore().startScroll(), r.dispatchEvent("mouseDownEvent", a);
                        case we:
                            return (l = r.dispatchEvent("mouseDownEvent", a)) && this._chart.updatePane(1), this._xAxisStartScaleCoordinate = {
                                x: a.x,
                                y: a.y
                            }, this._xAxisStartScaleDistance = a.pageX, l;
                        case Ee:
                            var l;
                            (l = r.dispatchEvent("mouseDownEvent", a)) && this._chart.updatePane(1);
                            s = null !== (i = o.getAxisComponent().getRange()) && void 0 !== i ? i : null;
                            return this._prevYAxisRange = null === s ? s : d({}, s), this._yAxisStartScaleDistance = a.pageY, l
                    }
                }
                return !1
            }, t.prototype.mouseMoveEvent = function(t) {
                var e, i, n, o = this._findWidgetByEvent(t),
                    r = o.pane,
                    a = o.widget,
                    s = this._makeWidgetEvent(t, a);
                if ((null === (e = this._mouseMoveTriggerWidgetInfo.pane) || void 0 === e ? void 0 : e.getId()) === (null == r ? void 0 : r.getId()) && (null === (i = this._mouseMoveTriggerWidgetInfo.widget) || void 0 === i ? void 0 : i.getName()) === (null == a ? void 0 : a.getName()) || (null == a || a.dispatchEvent("mouseEnterEvent", s), null === (n = this._mouseMoveTriggerWidgetInfo.widget) || void 0 === n || n.dispatchEvent("mouseLeaveEvent", s), this._mouseMoveTriggerWidgetInfo = {
                        pane: r,
                        widget: a
                    }), null !== a) switch (a.getName()) {
                    case Te:
                        var l = a.dispatchEvent("mouseMoveEvent", s),
                            c = this._chart.getChartStore(),
                            u = {
                                x: s.x,
                                y: s.y,
                                paneId: null == r ? void 0 : r.getId()
                            };
                        return l && null !== c.getTooltipStore().getActiveIcon() && (u = void 0, null !== a && (a.getContainer().style.cursor = "pointer")), this._chart.getChartStore().getTooltipStore().setCrosshair(u), l;
                    case Ie:
                    case we:
                    case Ee:
                        l = a.dispatchEvent("mouseMoveEvent", s);
                        return this._chart.getChartStore().getTooltipStore().setCrosshair(), l
                }
                return !1
            }, t.prototype.pressedMouseMoveEvent = function(t) {
                var e, i, n, o, r;
                if (null !== this._mouseDownWidget && this._mouseDownWidget.getName() === Ie) return this._mouseDownWidget.dispatchEvent("pressedMouseMoveEvent", t);
                var a = this._findWidgetByEvent(t),
                    s = a.pane,
                    l = a.widget;
                if (null !== l && (null === (e = this._mouseDownWidget) || void 0 === e ? void 0 : e.getPane().getId()) === (null == s ? void 0 : s.getId()) && (null === (i = this._mouseDownWidget) || void 0 === i ? void 0 : i.getName()) === l.getName()) {
                    var c = this._makeWidgetEvent(t, l);
                    switch (l.getName()) {
                        case Te:
                            var u = l.getBounding();
                            if (!(b = l.dispatchEvent("pressedMouseMoveEvent", c)) && null !== this._startScrollCoordinate) {
                                var h = s.getAxisComponent();
                                if (null !== this._prevYAxisRange && !h.getAutoCalcTickFlag() && h.getScrollZoomEnabled()) {
                                    var d = this._prevYAxisRange,
                                        p = d.from,
                                        g = d.to,
                                        v = p + (w = (T = d.range) * (S = (null !== (n = null == h ? void 0 : h.isReverse()) && void 0 !== n && n ? this._startScrollCoordinate.y - c.y : c.y - this._startScrollCoordinate.y) / u.height)),
                                        f = g + w,
                                        y = h.convertToRealValue(v),
                                        m = h.convertToRealValue(f);
                                    h.setRange({
                                        from: v,
                                        to: f,
                                        range: f - v,
                                        realFrom: y,
                                        realTo: m,
                                        realRange: m - y
                                    })
                                }
                                var _ = c.x - this._startScrollCoordinate.x;
                                this._chart.getChartStore().getTimeScaleStore().scroll(_)
                            }
                            return this._chart.getChartStore().getTooltipStore().setCrosshair({
                                x: c.x,
                                y: c.y,
                                paneId: null == s ? void 0 : s.getId()
                            }), b;
                        case we:
                            if (b = l.dispatchEvent("pressedMouseMoveEvent", c)) this._chart.updatePane(1);
                            else {
                                var x = s.getAxisComponent();
                                if (null === (o = null == x ? void 0 : x.getScrollZoomEnabled()) || void 0 === o || o) {
                                    var S = this._xAxisStartScaleDistance / c.pageX;
                                    if (Number.isFinite(S)) {
                                        var C = 10 * (S - this._xAxisScale);
                                        this._xAxisScale = S, this._chart.getChartStore().getTimeScaleStore().zoom(C, null !== (r = this._xAxisStartScaleCoordinate) && void 0 !== r ? r : void 0)
                                    }
                                }
                            }
                            return b;
                        case Ee:
                            var b;
                            if (b = l.dispatchEvent("pressedMouseMoveEvent", c)) this._chart.updatePane(1);
                            else {
                                h = s.getAxisComponent();
                                if (null !== this._prevYAxisRange && h.getScrollZoomEnabled()) {
                                    var T, w, E = this._prevYAxisRange,
                                        I = (p = E.from, g = E.to, (T = E.range) * (S = c.pageY / this._yAxisStartScaleDistance));
                                    v = p - (w = (I - T) / 2), f = g + w, y = h.convertToRealValue(v), m = h.convertToRealValue(f);
                                    h.setRange({
                                        from: v,
                                        to: f,
                                        range: I,
                                        realFrom: y,
                                        realTo: m,
                                        realRange: m - y
                                    }), this._chart.adjustPaneViewport(!1, !0, !0, !0)
                                }
                            }
                            return b
                    }
                }
                return !1
            }, t.prototype.mouseUpEvent = function(t) {
                var e = this._findWidgetByEvent(t).widget,
                    i = !1;
                if (null !== e) {
                    var n = this._makeWidgetEvent(t, e);
                    switch (e.getName()) {
                        case Te:
                        case Ie:
                        case we:
                        case Ee:
                            i = e.dispatchEvent("mouseUpEvent", n)
                    }
                    i && this._chart.updatePane(1)
                }
                return this._mouseDownWidget = null, this._startScrollCoordinate = null, this._prevYAxisRange = null, this._xAxisStartScaleCoordinate = null, this._xAxisStartScaleDistance = 0, this._xAxisScale = 1, this._yAxisStartScaleDistance = 0, i
            }, t.prototype.mouseClickEvent = function(t) {
                var e = this._findWidgetByEvent(t).widget;
                if (null !== e) {
                    var i = this._makeWidgetEvent(t, e);
                    return e.dispatchEvent("mouseClickEvent", i)
                }
                return !1
            }, t.prototype.mouseRightClickEvent = function(t) {
                var e = this._findWidgetByEvent(t).widget,
                    i = !1;
                if (null !== e) {
                    var n = this._makeWidgetEvent(t, e);
                    switch (e.getName()) {
                        case Te:
                        case we:
                        case Ee:
                            i = e.dispatchEvent("mouseRightClickEvent", n)
                    }
                    i && this._chart.updatePane(1)
                }
                return !1
            }, t.prototype.mouseDoubleClickEvent = function(t) {
                var e = this._findWidgetByEvent(t),
                    i = e.pane,
                    n = e.widget;
                if (null !== n) switch (n.getName()) {
                    case Te:
                        var o = this._makeWidgetEvent(t, n);
                        return n.dispatchEvent("mouseDoubleClickEvent", o);
                    case Ee:
                        var r = i.getAxisComponent();
                        if (!r.getAutoCalcTickFlag()) return r.setAutoCalcTickFlag(!0), this._chart.adjustPaneViewport(!1, !0, !0, !0), !0
                }
                return !1
            }, t.prototype.mouseLeaveEvent = function() {
                return this._chart.getChartStore().getTooltipStore().setCrosshair(), !0
            }, t.prototype.touchStartEvent = function(t) {
                var e = this._findWidgetByEvent(t),
                    i = e.pane,
                    n = e.widget;
                if (null !== n) {
                    var o = this._makeWidgetEvent(t, n);
                    switch (n.getName()) {
                        case Te:
                            var r = this._chart.getChartStore(),
                                a = r.getTooltipStore();
                            if (n.dispatchEvent("mouseDownEvent", o)) return this._touchCancelCrosshair = !0, this._touchCoordinate = null, a.setCrosshair(void 0, !0), this._chart.updatePane(1), !0;
                            if (null !== this._flingScrollRequestId && (ut(this._flingScrollRequestId), this._flingScrollRequestId = null), this._flingStartTime = (new Date).getTime(), this._startScrollCoordinate = {
                                    x: o.x,
                                    y: o.y
                                }, r.getTimeScaleStore().startScroll(), this._touchZoomed = !1, null !== this._touchCoordinate) {
                                var s = o.x - this._touchCoordinate.x,
                                    l = o.y - this._touchCoordinate.y;
                                Math.sqrt(s * s + l * l) < 10 ? (this._touchCoordinate = {
                                    x: o.x,
                                    y: o.y
                                }, a.setCrosshair({
                                    x: o.x,
                                    y: o.y,
                                    paneId: null == i ? void 0 : i.getId()
                                })) : (this._touchCoordinate = null, this._touchCancelCrosshair = !0, a.setCrosshair())
                            }
                            return !0;
                        case we:
                        case Ee:
                            var c = n.dispatchEvent("mouseDownEvent", o);
                            return c && this._chart.updatePane(1), c
                    }
                }
                return !1
            }, t.prototype.touchMoveEvent = function(t) {
                var e, i, n, o = this._findWidgetByEvent(t),
                    r = o.pane,
                    a = o.widget;
                if (null !== a) {
                    var s = this._makeWidgetEvent(t, a),
                        l = a.getName(),
                        c = this._chart.getChartStore(),
                        u = c.getTooltipStore();
                    switch (l) {
                        case Te:
                            if (a.dispatchEvent("pressedMouseMoveEvent", s)) return null === (e = s.preventDefault) || void 0 === e || e.call(s), u.setCrosshair(void 0, !0), this._chart.updatePane(1), !0;
                            if (null !== this._touchCoordinate) null === (i = s.preventDefault) || void 0 === i || i.call(s), u.setCrosshair({
                                x: s.x,
                                y: s.y,
                                paneId: null == r ? void 0 : r.getId()
                            });
                            else if (null !== this._startScrollCoordinate && Math.abs(this._startScrollCoordinate.x - s.x) > this._startScrollCoordinate.y - s.y) {
                                var h = s.x - this._startScrollCoordinate.x;
                                c.getTimeScaleStore().scroll(h)
                            }
                            return !0;
                        case we:
                        case Ee:
                            var d = a.dispatchEvent("pressedMouseMoveEvent", s);
                            return d && (null === (n = s.preventDefault) || void 0 === n || n.call(s), this._chart.updatePane(1)), d
                    }
                }
                return !1
            }, t.prototype.touchEndEvent = function(t) {
                var e = this,
                    i = this._findWidgetByEvent(t).widget;
                if (null !== i) {
                    var n = this._makeWidgetEvent(t, i);
                    switch (i.getName()) {
                        case Te:
                            if (i.dispatchEvent("mouseUpEvent", n), null !== this._startScrollCoordinate) {
                                var o = (new Date).getTime() - this._flingStartTime,
                                    r = (n.x - this._startScrollCoordinate.x) / (o > 0 ? o : 1) * 20;
                                if (o < 200 && Math.abs(r) > 0) {
                                    var a = this._chart.getChartStore().getTimeScaleStore(),
                                        s = function() {
                                            e._flingScrollRequestId = ct((function() {
                                                a.startScroll(), a.scroll(r), r *= .975, Math.abs(r) < 1 ? null !== e._flingScrollRequestId && (ut(e._flingScrollRequestId), e._flingScrollRequestId = null) : s()
                                            }))
                                        };
                                    s()
                                }
                            }
                            return !0;
                        case we:
                        case Ee:
                            i.dispatchEvent("mouseUpEvent", n) && this._chart.updatePane(1)
                    }
                }
                return !1
            }, t.prototype.tapEvent = function(t) {
                var e = this._findWidgetByEvent(t),
                    i = e.pane,
                    n = e.widget,
                    o = !1;
                if (null !== n) {
                    var r = this._makeWidgetEvent(t, n),
                        a = n.dispatchEvent("mouseClickEvent", r);
                    if (n.getName() === Te) {
                        var s = this._makeWidgetEvent(t, n),
                            l = this._chart.getChartStore().getTooltipStore();
                        a ? (this._touchCancelCrosshair = !0, this._touchCoordinate = null, l.setCrosshair(void 0, !0), o = !0) : (this._touchCancelCrosshair || this._touchZoomed || (this._touchCoordinate = {
                            x: s.x,
                            y: s.y
                        }, l.setCrosshair({
                            x: s.x,
                            y: s.y,
                            paneId: null == i ? void 0 : i.getId()
                        }, !0), o = !0), this._touchCancelCrosshair = !1)
                    }(o || a) && this._chart.updatePane(1)
                }
                return o
            }, t.prototype.doubleTapEvent = function(t) {
                return this.mouseDoubleClickEvent(t)
            }, t.prototype.longTapEvent = function(t) {
                var e = this._findWidgetByEvent(t),
                    i = e.pane,
                    n = e.widget;
                if (null !== n && n.getName() === Te) {
                    var o = this._makeWidgetEvent(t, n);
                    return this._touchCoordinate = {
                        x: o.x,
                        y: o.y
                    }, this._chart.getChartStore().getTooltipStore().setCrosshair({
                        x: o.x,
                        y: o.y,
                        paneId: null == i ? void 0 : i.getId()
                    }), !0
                }
                return !1
            }, t.prototype._findWidgetByEvent = function(t) {
                var e, i, n, o, r = t.x,
                    a = t.y,
                    s = this._chart.getAllSeparatorPanes(),
                    l = this._chart.getChartStore().getStyles().separator.size;
                try {
                    for (var c = v(s), u = c.next(); !u.done; u = c.next()) {
                        var h = f(u.value, 2)[1],
                            d = (_ = h.getBounding()).top - Math.round((7 - l) / 2);
                        if (r >= _.left && r <= _.left + _.width && a >= d && a <= d + 7) return {
                            pane: h,
                            widget: h.getWidget()
                        }
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        u && !u.done && (i = c.return) && i.call(c)
                    } finally {
                        if (e) throw e.error
                    }
                }
                var p = this._chart.getAllDrawPanes(),
                    g = null;
                try {
                    for (var y = v(p), m = y.next(); !m.done; m = y.next()) {
                        var _, x = m.value;
                        if (r >= (_ = x.getBounding()).left && r <= _.left + _.width && a >= _.top && a <= _.top + _.height) {
                            g = x;
                            break
                        }
                    }
                } catch (t) {
                    n = {
                        error: t
                    }
                } finally {
                    try {
                        m && !m.done && (o = y.return) && o.call(y)
                    } finally {
                        if (n) throw n.error
                    }
                }
                var S = null;
                if (null !== g) {
                    if (null === S) {
                        var C = g.getMainWidget(),
                            b = C.getBounding();
                        r >= b.left && r <= b.left + b.width && a >= b.top && a <= b.top + b.height && (S = C)
                    }
                    if (null === S) {
                        var T = g.getYAxisWidget();
                        if (null !== T) {
                            var w = T.getBounding();
                            r >= w.left && r <= w.left + w.width && a >= w.top && a <= w.top + w.height && (S = T)
                        }
                    }
                }
                return {
                    pane: g,
                    widget: S
                }
            }, t.prototype._makeWidgetEvent = function(t, e) {
                var i, n, o, r = null !== (i = null == e ? void 0 : e.getBounding()) && void 0 !== i ? i : null;
                return d(d({}, t), {
                    x: t.x - (null !== (n = null == r ? void 0 : r.left) && void 0 !== n ? n : 0),
                    y: t.y - (null !== (o = null == r ? void 0 : r.top) && void 0 !== o ? o : 0)
                })
            }, t.prototype.destroy = function() {
                this._container.removeEventListener("keydown", this._boundKeyBoardDownEvent), this._event.destroy()
            }, t
        }();
    t.DomPosition = void 0, (Oi = t.DomPosition || (t.DomPosition = {})).Root = "root", Oi.Main = "main", Oi.YAxis = "yAxis";
    var Wi = function() {
            function e(t, e) {
                this._drawPanes = [], this._separatorPanes = new Map, this._initContainer(t), this._chartEvent = new Ni(this._chartContainer, this), this._chartStore = new be(this, e), this._initPanes(e), this.adjustPaneViewport(!0, !0, !0)
            }
            return e.prototype._initContainer = function(t) {
                this._container = t, this._chartContainer = ft("div", {
                    position: "relative",
                    width: "100%",
                    outline: "none",
                    borderStyle: "none",
                    cursor: "crosshair",
                    boxSizing: "border-box",
                    userSelect: "none",
                    webkitUserSelect: "none",
                    msUserSelect: "none",
                    MozUserSelect: "none",
                    webkitTapHighlightColor: "transparent"
                }), this._chartContainer.tabIndex = 1, t.appendChild(this._chartContainer)
            }, e.prototype._initPanes = function(t) {
                var e, i = this,
                    n = null !== (e = null == t ? void 0 : t.layout) && void 0 !== e ? e : [{
                        type: "candle"
                    }],
                    o = !1,
                    r = !1,
                    a = function(t) {
                        if (!r) {
                            var e = i._createPane(Ai, me, null != t ? t : {});
                            i._xAxisPane = e, r = !0
                        }
                    };
                n.forEach((function(t) {
                    var e, n, r;
                    switch (t.type) {
                        case "candle":
                            if (!o) {
                                var s = null !== (e = t.options) && void 0 !== e ? e : {};
                                A(s, {
                                    id: fe
                                }), i._candlePane = i._createPane(wi, fe, s), (l = null !== (n = t.content) && void 0 !== n ? n : []).forEach((function(t) {
                                    i.createIndicator(t, !0, s)
                                })), o = !0
                            }
                            break;
                        case "indicator":
                            var l, c;
                            if ((l = null !== (r = t.content) && void 0 !== r ? r : []).length > 0) l.forEach((function(e) {
                                V(c) ? i.createIndicator(e, !0, {
                                    id: c
                                }) : c = i.createIndicator(e, !0, t.options)
                            }));
                            break;
                        case "xAxis":
                            a(t.options)
                    }
                })), a({
                    position: "bottom"
                })
            }, e.prototype._createPane = function(t, e, i) {
                var n, o = null,
                    r = null;
                switch (null == i ? void 0 : i.position) {
                    case "top":
                        var a = this._drawPanes[0];
                        V(a) && (r = new t(this._chartContainer, a.getContainer(), this, e, null != i ? i : {}), o = 0);
                        break;
                    case "bottom":
                        break;
                    default:
                        for (var s = this._drawPanes.length - 1; s > -1; s--) {
                            var l = this._drawPanes[s],
                                c = this._drawPanes[s - 1];
                            if ("bottom" === (null == l ? void 0 : l.getOptions().position) && "bottom" !== (null == c ? void 0 : c.getOptions().position)) {
                                r = new t(this._chartContainer, l.getContainer(), this, e, null != i ? i : {}), o = s;
                                break
                            }
                        }
                }
                if (V(r) || (r = new t(this._chartContainer, null, this, e, null != i ? i : {})), O(o) ? (this._drawPanes.splice(o, 0, r), n = o) : (this._drawPanes.push(r), n = this._drawPanes.length - 1), r.getId() !== me) {
                    var u = this._drawPanes[n + 1];
                    if (V(u) && u.getId() === me && (u = this._drawPanes[n + 2]), V(u)) V(d = this._separatorPanes.get(u)) ? d.setTopPane(r) : (d = new Li(this._chartContainer, u.getContainer(), this, "", r, u), this._separatorPanes.set(u, d));
                    var h = this._drawPanes[n - 1];
                    if (V(h) && h.getId() === me && (h = this._drawPanes[n - 2]), V(h)) {
                        var d = new Li(this._chartContainer, r.getContainer(), this, "", h, r);
                        this._separatorPanes.set(r, d)
                    }
                }
                return r
            }, e.prototype._measurePaneHeight = function() {
                var t, e = this,
                    i = Math.floor(this._container.clientHeight),
                    n = this._chartStore.getStyles().separator.size,
                    o = this._xAxisPane.getAxisComponent().getAutoSize(),
                    r = i - o - this._separatorPanes.size * n;
                r < 0 && (r = 0);
                var a = 0;
                this._drawPanes.forEach((function(t) {
                    if (t.getId() !== fe && t.getId() !== me) {
                        var e = t.getBounding().height,
                            i = t.getOptions().minHeight;
                        e < i && (e = i), a + e > r ? (a = r, e = Math.max(r - a, 0)) : a += e, t.setBounding({
                            height: e
                        })
                    }
                }));
                var s = r - a;
                null === (t = this._candlePane) || void 0 === t || t.setBounding({
                    height: s
                }), this._xAxisPane.setBounding({
                    height: o
                });
                var l = 0;
                this._drawPanes.forEach((function(t) {
                    var i = e._separatorPanes.get(t);
                    V(i) && (i.setBounding({
                        height: n,
                        top: l
                    }), l += n), t.setBounding({
                        top: l
                    }), l += t.getBounding().height
                }))
            }, e.prototype._measurePaneWidth = function() {
                var e = this,
                    i = Math.floor(this._container.clientWidth),
                    n = this._chartStore.getStyles(),
                    o = n.yAxis,
                    r = o.position === t.YAxisPosition.Left,
                    a = !o.inside,
                    s = 0,
                    l = 0,
                    c = 0,
                    u = 0;
                this._drawPanes.forEach((function(t) {
                    t.getId() !== me && (l = Math.max(l, t.getAxisComponent().getAutoSize()))
                })), l > i && (l = i), a ? (s = i - l, r ? (c = 0, u = l) : (c = i - l, u = 0)) : (s = i, u = 0, c = r ? 0 : i - l), this._chartStore.getTimeScaleStore().setTotalBarSpace(s);
                var h, d = {
                        width: i
                    },
                    p = {
                        width: s,
                        left: u
                    },
                    g = {
                        width: l,
                        left: c
                    },
                    v = n.separator.fill;
                h = a && !v ? p : d, this._drawPanes.forEach((function(t) {
                    var i;
                    null === (i = e._separatorPanes.get(t)) || void 0 === i || i.setBounding(h), t.setBounding(d, p, g)
                }))
            }, e.prototype._setPaneOptions = function(t, e) {
                var i, n;
                if (W(t.id)) {
                    var o = this.getDrawPaneById(t.id),
                        r = !1;
                    if (null !== o) {
                        var a = e;
                        if (t.id !== fe && O(t.height) && t.height > 0) {
                            var s = Math.max(null !== (i = t.minHeight) && void 0 !== i ? i : o.getOptions().minHeight, 0),
                                l = Math.max(s, t.height);
                            o.setBounding({
                                height: l
                            }), a = !0, r = !0
                        }(W(null === (n = t.axisOptions) || void 0 === n ? void 0 : n.name) || V(t.gap)) && (a = !0), o.setOptions(t), a && this.adjustPaneViewport(r, !0, !0, !0, !0)
                    }
                }
            }, e.prototype.getDrawPaneById = function(t) {
                if (t === fe) return this._candlePane;
                if (t === me) return this._xAxisPane;
                var e = this._drawPanes.find((function(e) {
                    return e.getId() === t
                }));
                return null != e ? e : null
            }, e.prototype.getContainer = function() {
                return this._container
            }, e.prototype.getChartStore = function() {
                return this._chartStore
            }, e.prototype.getXAxisPane = function() {
                return this._xAxisPane
            }, e.prototype.getAllDrawPanes = function() {
                return this._drawPanes
            }, e.prototype.getAllSeparatorPanes = function() {
                return this._separatorPanes
            }, e.prototype.adjustPaneViewport = function(t, e, i, n, o) {
                t && this._measurePaneHeight();
                var r = e,
                    a = null != o && o;
                (null != n && n || a) && this._drawPanes.forEach((function(t) {
                    var e = t.getAxisComponent().buildTicks(a);
                    r || (r = e)
                })), r && this._measurePaneWidth(), null != i && i && (this._xAxisPane.getAxisComponent().buildTicks(!0), this.updatePane(4))
            }, e.prototype.updatePane = function(t, e) {
                if (V(e)) {
                    var i = this.getDrawPaneById(e);
                    null == i || i.update(t)
                } else this._separatorPanes.forEach((function(e) {
                    e.update(t)
                })), this._drawPanes.forEach((function(e) {
                    e.update(t)
                }))
            }, e.prototype.crosshairChange = function(e) {
                var i = this,
                    n = this._chartStore.getActionStore();
                if (n.has(t.ActionType.OnCrosshairChange)) {
                    var o = {};
                    this._drawPanes.forEach((function(t) {
                        var n = t.getId(),
                            r = {};
                        i._chartStore.getIndicatorStore().getInstances(n).forEach((function(t) {
                            var i, n = t.result;
                            r[t.name] = n[null !== (i = e.dataIndex) && void 0 !== i ? i : n.length - 1]
                        })), o[n] = r
                    })), W(e.paneId) && n.execute(t.ActionType.OnCrosshairChange, d(d({}, e), {
                        indicatorData: o
                    }))
                }
            }, e.prototype.getDom = function(e, i) {
                var n, o;
                if (!W(e)) return this._chartContainer;
                var r = this.getDrawPaneById(e);
                if (null !== r) switch (null != i ? i : t.DomPosition.Root) {
                    case t.DomPosition.Root:
                        return r.getContainer();
                    case t.DomPosition.Main:
                        return r.getMainWidget().getContainer();
                    case t.DomPosition.YAxis:
                        return null !== (o = null === (n = r.getYAxisWidget()) || void 0 === n ? void 0 : n.getContainer()) && void 0 !== o ? o : null
                }
                return null
            }, e.prototype.getSize = function(e, i) {
                var n, o;
                if (!V(e)) return {
                    width: Math.floor(this._chartContainer.clientWidth),
                    height: Math.floor(this._chartContainer.clientHeight),
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                };
                var r = this.getDrawPaneById(e);
                if (null !== r) switch (null != i ? i : t.DomPosition.Root) {
                    case t.DomPosition.Root:
                        return r.getBounding();
                    case t.DomPosition.Main:
                        return r.getMainWidget().getBounding();
                    case t.DomPosition.YAxis:
                        return null !== (o = null === (n = r.getYAxisWidget()) || void 0 === n ? void 0 : n.getBounding()) && void 0 !== o ? o : null
                }
                return null
            }, e.prototype.setStyles = function(t) {
                var e, i, n;
                this._chartStore.setOptions({
                    styles: t
                }), V(null === (e = null == (n = W(t) ? Ce(t) : t) ? void 0 : n.yAxis) || void 0 === e ? void 0 : e.type) && (null === (i = this._candlePane) || void 0 === i || i.getAxisComponent().setAutoCalcTickFlag(!0)), this.adjustPaneViewport(!0, !0, !0, !0, !0)
            }, e.prototype.getStyles = function() {
                return this._chartStore.getStyles()
            }, e.prototype.setLocale = function(t) {
                this._chartStore.setOptions({
                    locale: t
                }), this.adjustPaneViewport(!0, !0, !0, !0, !0)
            }, e.prototype.getLocale = function() {
                return this._chartStore.getLocale()
            }, e.prototype.setCustomApi = function(t) {
                this._chartStore.setOptions({
                    customApi: t
                }), this.adjustPaneViewport(!0, !0, !0, !0, !0)
            }, e.prototype.setPriceVolumePrecision = function(t, e) {
                this._chartStore.setPrecision({
                    price: t,
                    volume: e
                })
            }, e.prototype.getPriceVolumePrecision = function() {
                return this._chartStore.getPrecision()
            }, e.prototype.setTimezone = function(t) {
                this._chartStore.setOptions({
                    timezone: t
                }), this._xAxisPane.getAxisComponent().buildTicks(!0), this._xAxisPane.update(3)
            }, e.prototype.getTimezone = function() {
                return this._chartStore.getTimeScaleStore().getTimezone()
            }, e.prototype.setOffsetRightDistance = function(t) {
                this._chartStore.getTimeScaleStore().setOffsetRightDistance(t, !0)
            }, e.prototype.getOffsetRightDistance = function() {
                return this._chartStore.getTimeScaleStore().getOffsetRightDistance()
            }, e.prototype.setMaxOffsetLeftDistance = function(t) {
                t < 0 || this._chartStore.getTimeScaleStore().setMaxOffsetLeftDistance(t)
            }, e.prototype.setMaxOffsetRightDistance = function(t) {
                t < 0 || this._chartStore.getTimeScaleStore().setMaxOffsetRightDistance(t)
            }, e.prototype.setLeftMinVisibleBarCount = function(t) {
                t < 0 || this._chartStore.getTimeScaleStore().setLeftMinVisibleBarCount(Math.ceil(t))
            }, e.prototype.setRightMinVisibleBarCount = function(t) {
                t < 0 || this._chartStore.getTimeScaleStore().setRightMinVisibleBarCount(Math.ceil(t))
            }, e.prototype.setBarSpace = function(t) {
                this._chartStore.getTimeScaleStore().setBarSpace(t)
            }, e.prototype.getBarSpace = function() {
                return this._chartStore.getTimeScaleStore().getBarSpace().bar
            }, e.prototype.getVisibleRange = function() {
                return this._chartStore.getTimeScaleStore().getVisibleRange()
            }, e.prototype.clearData = function() {
                this._chartStore.clear()
            }, e.prototype.getDataList = function() {
                return this._chartStore.getDataList()
            }, e.prototype.applyNewData = function(t, e, i) {
                this._chartStore.addData(t, ht.Init, e).then((function() {})).catch((function() {})).finally((function() {
                    null == i || i()
                }))
            }, e.prototype.applyMoreData = function(t, e, i) {
                this._chartStore.addData(t, ht.Forward, null == e || e).then((function() {})).catch((function() {})).finally((function() {
                    null == i || i()
                }))
            }, e.prototype.updateData = function(t, e) {
                this._chartStore.addData(t).then((function() {})).catch((function() {})).finally((function() {
                    null == e || e()
                }))
            }, e.prototype.loadMore = function(t) {
                this._chartStore.setLoadMoreCallback(t)
            }, e.prototype.setLoadDataCallback = function(t) {
                this._chartStore.setLoadDataCallback(t)
            }, e.prototype.createIndicator = function(t, e, i, n) {
                var o, r = this,
                    a = W(t) ? {
                        name: t
                    } : t;
                if (null === Gt(a.name)) return null;
                var s = null == i ? void 0 : i.id,
                    l = this.getDrawPaneById(null != s ? s : "");
                if (null !== l) this._chartStore.getIndicatorStore().addInstance(a, null != s ? s : "", null != e && e).then((function(t) {
                    var e;
                    r._setPaneOptions(null != i ? i : {}, null !== (e = l.getAxisComponent().buildTicks(!0)) && void 0 !== e && e)
                })).catch((function(t) {}));
                else {
                    null != s || (s = vt(ye));
                    var c = this._createPane(Ti, s, null != i ? i : {}),
                        u = null !== (o = null == i ? void 0 : i.height) && void 0 !== o ? o : 100;
                    c.setBounding({
                        height: u
                    }), this._chartStore.getIndicatorStore().addInstance(a, s, null != e && e).finally((function() {
                        r.adjustPaneViewport(!0, !0, !0, !0, !0), null == n || n()
                    }))
                }
                return null != s ? s : null
            }, e.prototype.overrideIndicator = function(t, e, i) {
                var n = this;
                this._chartStore.getIndicatorStore().override(t, null != e ? e : null).then((function(t) {
                    var e = f(t, 2),
                        o = e[0],
                        r = e[1];
                    (o || r) && (n.adjustPaneViewport(!1, r, !0, r), null == i || i())
                })).catch((function() {}))
            }, e.prototype.getIndicatorByPaneId = function(t, e) {
                return this._chartStore.getIndicatorStore().getInstanceByPaneId(t, e)
            }, e.prototype.removeIndicator = function(t, e) {
                var i, n, o, r = this._chartStore.getIndicatorStore();
                if (r.removeInstance(t, e)) {
                    var a = !1;
                    if (t !== fe && !r.hasInstances(t)) {
                        var s = this.getDrawPaneById(t),
                            l = this._drawPanes.findIndex((function(e) {
                                return e.getId() === t
                            }));
                        if (null !== s) {
                            a = !0;
                            var c = this._separatorPanes.get(s);
                            if (V(c)) {
                                var u = null == c ? void 0 : c.getTopPane();
                                try {
                                    for (var h = v(this._separatorPanes), d = h.next(); !d.done; d = h.next()) {
                                        var p = d.value;
                                        if (p[1].getTopPane().getId() === s.getId()) {
                                            p[1].setTopPane(u);
                                            break
                                        }
                                    }
                                } catch (t) {
                                    i = {
                                        error: t
                                    }
                                } finally {
                                    try {
                                        d && !d.done && (n = h.return) && n.call(h)
                                    } finally {
                                        if (i) throw i.error
                                    }
                                }
                                c.destroy(), this._separatorPanes.delete(s)
                            }
                            this._drawPanes.splice(l, 1), s.destroy();
                            var g = this._drawPanes[0];
                            V(g) && g.getId() === me && (g = this._drawPanes[1]), null === (o = this._separatorPanes.get(g)) || void 0 === o || o.destroy(), this._separatorPanes.delete(g)
                        }
                    }
                    this.adjustPaneViewport(a, !0, !0, !0, !0)
                }
            }, e.prototype.createOverlay = function(t, e) {
                var i = [];
                if (W(t)) i = [{
                    name: t
                }];
                else if (L(t)) i = t.map((function(t) {
                    return W(t) ? {
                        name: t
                    } : t
                }));
                else {
                    i = [t]
                }
                var n = !0;
                V(e) && null !== this.getDrawPaneById(e) || (e = fe, n = !1);
                var o = this._chartStore.getOverlayStore().addInstances(i, e, n);
                return L(t) ? o : o[0]
            }, e.prototype.getOverlayById = function(t) {
                return this._chartStore.getOverlayStore().getInstanceById(t)
            }, e.prototype.overrideOverlay = function(t) {
                this._chartStore.getOverlayStore().override(t)
            }, e.prototype.removeOverlay = function(t) {
                var e;
                V(t) && (e = W(t) ? {
                    id: t
                } : t), this._chartStore.getOverlayStore().removeInstance(e)
            }, e.prototype.setPaneOptions = function(t) {
                this._setPaneOptions(t, !1)
            }, e.prototype.setZoomEnabled = function(t) {
                this._chartStore.getTimeScaleStore().setZoomEnabled(t)
            }, e.prototype.isZoomEnabled = function() {
                return this._chartStore.getTimeScaleStore().getZoomEnabled()
            }, e.prototype.setScrollEnabled = function(t) {
                this._chartStore.getTimeScaleStore().setScrollEnabled(t)
            }, e.prototype.isScrollEnabled = function() {
                return this._chartStore.getTimeScaleStore().getScrollEnabled()
            }, e.prototype.scrollByDistance = function(t, e) {
                var i = O(e) && e > 0 ? e : 0,
                    n = this._chartStore.getTimeScaleStore();
                if (n.startScroll(), i > 0) {
                    var o = new dt({
                        duration: i
                    });
                    o.doFrame((function(e) {
                        var o = t * (e / i);
                        n.scroll(o)
                    })), o.start()
                } else n.scroll(t)
            }, e.prototype.scrollToRealTime = function(t) {
                var e = this._chartStore.getTimeScaleStore(),
                    i = e.getBarSpace().bar,
                    n = (e.getLastBarRightSideDiffBarCount() - e.getInitialOffsetRightDistance() / i) * i;
                this.scrollByDistance(n, t)
            }, e.prototype.scrollToDataIndex = function(t, e) {
                var i = this._chartStore.getTimeScaleStore(),
                    n = (i.getLastBarRightSideDiffBarCount() + (this.getDataList().length - 1 - t)) * i.getBarSpace().bar;
                this.scrollByDistance(n, e)
            }, e.prototype.scrollToTimestamp = function(t, e) {
                var i = yt(this.getDataList(), "timestamp", t);
                this.scrollToDataIndex(i, e)
            }, e.prototype.zoomAtCoordinate = function(t, e, i) {
                var n = O(i) && i > 0 ? i : 0,
                    o = this._chartStore.getTimeScaleStore(),
                    r = o.getBarSpace().bar,
                    a = r * t - r;
                if (n > 0) {
                    var s = 0,
                        l = new dt({
                            duration: n
                        });
                    l.doFrame((function(t) {
                        var i = a * (t / n),
                            r = (i - s) / o.getBarSpace().bar * 10;
                        o.zoom(r, e), s = i
                    })), l.start()
                } else o.zoom(a / r * 10, e)
            }, e.prototype.zoomAtDataIndex = function(t, e, i) {
                var n = this._chartStore.getTimeScaleStore().dataIndexToCoordinate(e);
                this.zoomAtCoordinate(t, {
                    x: n,
                    y: 0
                }, i)
            }, e.prototype.zoomAtTimestamp = function(t, e, i) {
                var n = yt(this.getDataList(), "timestamp", e);
                this.zoomAtDataIndex(t, n, i)
            }, e.prototype.convertToPixel = function(t, e) {
                var i, n = e.paneId,
                    o = void 0 === n ? fe : n,
                    r = e.absolute,
                    a = void 0 !== r && r,
                    s = [];
                if (o !== me) {
                    var l = this.getDrawPaneById(o);
                    if (null !== l) {
                        var c = this._chartStore.getTimeScaleStore(),
                            u = l.getBounding(),
                            h = (new Array).concat(t),
                            d = this._xAxisPane.getAxisComponent(),
                            p = l.getAxisComponent();
                        s = h.map((function(t) {
                            var e = {},
                                i = t.dataIndex;
                            if (O(t.timestamp) && (i = c.timestampToDataIndex(t.timestamp)), O(i) && (e.x = null == d ? void 0 : d.convertToPixel(i)), O(t.value)) {
                                var n = null == p ? void 0 : p.convertToPixel(t.value);
                                e.y = a ? u.top + n : n
                            }
                            return e
                        }))
                    }
                }
                return L(t) ? s : null !== (i = s[0]) && void 0 !== i ? i : {}
            }, e.prototype.convertFromPixel = function(t, e) {
                var i, n = e.paneId,
                    o = void 0 === n ? fe : n,
                    r = e.absolute,
                    a = void 0 !== r && r,
                    s = [];
                if (o !== me) {
                    var l = this.getDrawPaneById(o);
                    if (null !== l) {
                        var c = this._chartStore.getTimeScaleStore(),
                            u = l.getBounding(),
                            h = (new Array).concat(t),
                            d = this._xAxisPane.getAxisComponent(),
                            p = l.getAxisComponent();
                        s = h.map((function(t) {
                            var e, i, n = {};
                            if (O(t.x)) {
                                var o = null !== (e = null == d ? void 0 : d.convertFromPixel(t.x)) && void 0 !== e ? e : -1;
                                n.dataIndex = o, n.timestamp = null !== (i = c.dataIndexToTimestamp(o)) && void 0 !== i ? i : void 0
                            }
                            if (O(t.y)) {
                                var r = a ? t.y - u.top : t.y;
                                n.value = p.convertFromPixel(r)
                            }
                            return n
                        }))
                    }
                }
                return L(t) ? s : null !== (i = s[0]) && void 0 !== i ? i : {}
            }, e.prototype.executeAction = function(e, i) {
                var n;
                if (e === t.ActionType.OnCrosshairChange) {
                    var o = d({}, i);
                    o.paneId = null !== (n = o.paneId) && void 0 !== n ? n : fe, this._chartStore.getTooltipStore().setCrosshair(o)
                }
            }, e.prototype.subscribeAction = function(t, e) {
                this._chartStore.getActionStore().subscribe(t, e)
            }, e.prototype.unsubscribeAction = function(t, e) {
                this._chartStore.getActionStore().unsubscribe(t, e)
            }, e.prototype.getConvertPictureUrl = function(t, e, i) {
                var n = this,
                    o = this._chartContainer.clientWidth,
                    r = this._chartContainer.clientHeight,
                    a = ft("canvas", {
                        width: "".concat(o, "px"),
                        height: "".concat(r, "px"),
                        boxSizing: "border-box"
                    }),
                    s = a.getContext("2d"),
                    l = $(a);
                a.width = o * l, a.height = r * l, s.scale(l, l), s.fillStyle = null != i ? i : "#FFFFFF", s.fillRect(0, 0, o, r);
                var c = null != t && t;
                return this._drawPanes.forEach((function(t) {
                    var e = n._separatorPanes.get(t);
                    if (V(e)) {
                        var i = e.getBounding();
                        s.drawImage(e.getImage(c), i.left, i.top, i.width, i.height)
                    }
                    var r = t.getBounding();
                    s.drawImage(t.getImage(c), 0, r.top, o, r.height)
                })), a.toDataURL("image/".concat(null != e ? e : "jpeg"))
            }, e.prototype.resize = function() {
                this.adjustPaneViewport(!0, !0, !0, !0, !0)
            }, e.prototype.destroy = function() {
                this._chartEvent.destroy(), this._drawPanes.forEach((function(t) {
                    t.destroy()
                })), this._drawPanes = [], this._separatorPanes.forEach((function(t) {
                    t.destroy()
                })), this._separatorPanes.clear(), this._container.removeChild(this._chartContainer)
            }, e
        }(),
        zi = new Map,
        Yi = 1;
    var Hi = {
        clone: F,
        merge: A,
        isString: W,
        isNumber: O,
        isValid: V,
        isObject: B,
        isArray: L,
        isFunction: R,
        isBoolean: N,
        formatValue: G,
        formatPrecision: K,
        formatBigNumber: Z,
        formatDate: j,
        formatThousands: U,
        formatFoldDecimal: q,
        calcTextWidth: J,
        getLinearSlopeIntercept: ee,
        getLinearYFromSlopeIntercept: Jt,
        getLinearYFromCoordinates: te,
        checkCoordinateOnArc: Ke,
        checkCoordinateOnCircle: Fe,
        checkCoordinateOnLine: Qt,
        checkCoordinateOnPolygon: Be,
        checkCoordinateOnRect: Ne,
        checkCoordinateOnText: He,
        drawArc: Ze,
        drawCircle: Le,
        drawLine: ne,
        drawPolygon: Oe,
        drawRect: We,
        drawText: Xe,
        drawRectText: je
    };
    t.dispose = function(t) {
        var e, i, n;
        if (t instanceof Wi) n = t.id;
        else {
            var o = void 0;
            n = null !== (e = null == (o = W(t) ? document.getElementById(t) : t) ? void 0 : o.getAttribute("k-line-chart-id")) && void 0 !== e ? e : null
        }
        null !== n && (null === (i = zi.get(n)) || void 0 === i || i.destroy(), zi.delete(n))
    }, t.getFigureClass = function(t) {
        var e;
        return null !== (e = qe[t]) && void 0 !== e ? e : null
    }, t.getOverlayClass = function(t) {
        var e;
        return null !== (e = ge[t]) && void 0 !== e ? e : null
    }, t.getSupportedFigures = function() {
        return Object.keys(qe)
    }, t.getSupportedIndicators = function() {
        return Object.keys(Ht)
    }, t.getSupportedLocales = function() {
        return Object.keys(ci)
    }, t.getSupportedOverlays = function() {
        return Object.keys(ge)
    }, t.init = function(t, e) {
        var i;
        if (null === (i = W(t) ? document.getElementById(t) : t)) return null;
        var n = zi.get(i.id);
        if (V(n)) return n;
        var o = "k_line_chart_".concat(Yi++);
        return (n = new Wi(i, e)).id = o, i.setAttribute("k-line-chart-id", o), zi.set(o, n), n
    }, t.registerFigure = function(t) {
        qe[t.name] = $t.extend(t)
    }, t.registerIndicator = function(t) {
        Ht[t.name] = ot.extend(t)
    }, t.registerLocale = function(t, e) {
        ci[t] = d(d({}, ci[t]), e)
    }, t.registerOverlay = function(t) {
        ge[t.name] = lt.extend(t)
    }, t.registerStyles = function(t, e) {
        Se[t] = e
    }, t.registerXAxis = function(t) {
        ki[t.name] = Mi.extend(t)
    }, t.registerYAxis = function(t) {
        Si[t.name] = xi.extend(t)
    }, t.utils = Hi, t.version = function() {
        return "9.8.10"
    }
}));
