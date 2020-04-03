/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import { SkyconsTypes } from './ngx-skycons-types';
/** @type {?} */
export var KEYFRAME = 500;
/** @type {?} */
export var STROKE = 0.08;
/** @type {?} */
export var TAU = 2.0 * Math.PI;
/** @type {?} */
export var TWO_OVER_SQRT_2 = 2.0 / Math.sqrt(2);
var SkyconsComponent = /** @class */ (function () {
    function SkyconsComponent() {
        this.list = [];
        this.raf = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame;
        this.caf = window.cancelAnimationFrame ||
            window.webkitCancelAnimationFrame;
        this.WIND_PATHS = [
            [
                -0.7500, -0.1800, -0.7219, -0.1527, -0.6971, -0.1225,
                -0.6739, -0.0910, -0.6516, -0.0588, -0.6298, -0.0262,
                -0.6083, 0.0065, -0.5868, 0.0396, -0.5643, 0.0731,
                -0.5372, 0.1041, -0.5033, 0.1259, -0.4662, 0.1406,
                -0.4275, 0.1493, -0.3881, 0.1530, -0.3487, 0.1526,
                -0.3095, 0.1488, -0.2708, 0.1421, -0.2319, 0.1342,
                -0.1943, 0.1217, -0.1600, 0.1025, -0.1290, 0.0785,
                -0.1012, 0.0509, -0.0764, 0.0206, -0.0547, -0.0120,
                -0.0378, -0.0472, -0.0324, -0.0857, -0.0389, -0.1241,
                -0.0546, -0.1599, -0.0814, -0.1876, -0.1193, -0.1964,
                -0.1582, -0.1935, -0.1931, -0.1769, -0.2157, -0.1453,
                -0.2290, -0.1085, -0.2327, -0.0697, -0.2240, -0.0317,
                -0.2064, 0.0033, -0.1853, 0.0362, -0.1613, 0.0672,
                -0.1350, 0.0961, -0.1051, 0.1213, -0.0706, 0.1397,
                -0.0332, 0.1512, 0.0053, 0.1580, 0.0442, 0.1624,
                0.0833, 0.1636, 0.1224, 0.1615, 0.1613, 0.1565,
                0.1999, 0.1500, 0.2378, 0.1402, 0.2749, 0.1279,
                0.3118, 0.1147, 0.3487, 0.1015, 0.3858, 0.0892,
                0.4236, 0.0787, 0.4621, 0.0715, 0.5012, 0.0702,
                0.5398, 0.0766, 0.5768, 0.0890, 0.6123, 0.1055,
                0.6466, 0.1244, 0.6805, 0.1440, 0.7147, 0.1630,
                0.7500, 0.1800
            ],
            [
                -0.7500, 0.0000, -0.7033, 0.0195, -0.6569, 0.0399,
                -0.6104, 0.0600, -0.5634, 0.0789, -0.5155, 0.0954,
                -0.4667, 0.1089, -0.4174, 0.1206, -0.3676, 0.1299,
                -0.3174, 0.1365, -0.2669, 0.1398, -0.2162, 0.1391,
                -0.1658, 0.1347, -0.1157, 0.1271, -0.0661, 0.1169,
                -0.0170, 0.1046, 0.0316, 0.0903, 0.0791, 0.0728,
                0.1259, 0.0534, 0.1723, 0.0331, 0.2188, 0.0129,
                0.2656, -0.0064, 0.3122, -0.0263, 0.3586, -0.0466,
                0.4052, -0.0665, 0.4525, -0.0847, 0.5007, -0.1002,
                0.5497, -0.1130, 0.5991, -0.1240, 0.6491, -0.1325,
                0.6994, -0.1380, 0.7500, -0.1400
            ]
        ];
        this.WIND_OFFSETS = [
            { start: 0.36, end: 0.11 },
            { start: 0.56, end: 0.16 }
        ];
    }
    /**
     * @private
     * @param {?} fn
     * @param {?} i
     * @return {?}
     */
    SkyconsComponent.prototype.requestInterval = /**
     * @private
     * @param {?} fn
     * @param {?} i
     * @return {?}
     */
    function (fn, i) {
        var _this = this;
        /** @type {?} */
        var handle = { value: null };
        /** @type {?} */
        var loop = (/**
         * @return {?}
         */
        function () {
            handle.value = _this.raf(loop);
            fn();
        });
        loop();
        return handle;
    };
    /**
     * @private
     * @param {?} handle
     * @return {?}
     */
    SkyconsComponent.prototype.cancelInterval = /**
     * @private
     * @param {?} handle
     * @return {?}
     */
    function (handle) {
        this.caf(handle.value);
    };
    /**
     * @private
     * @param {?} ctx
     * @param {?} x
     * @param {?} y
     * @param {?} r
     * @return {?}
     */
    SkyconsComponent.prototype.circle = /**
     * @private
     * @param {?} ctx
     * @param {?} x
     * @param {?} y
     * @param {?} r
     * @return {?}
     */
    function (ctx, x, y, r) {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, TAU, false);
        ctx.fill();
    };
    /**
     * @param {?} ctx
     * @param {?} ax
     * @param {?} ay
     * @param {?} bx
     * @param {?} by
     * @return {?}
     */
    SkyconsComponent.prototype.line = /**
     * @param {?} ctx
     * @param {?} ax
     * @param {?} ay
     * @param {?} bx
     * @param {?} by
     * @return {?}
     */
    function (ctx, ax, ay, bx, by) {
        ctx.beginPath();
        ctx.moveTo(ax, ay);
        ctx.lineTo(bx, by);
        ctx.stroke();
    };
    /**
     * @private
     * @param {?} ctx
     * @param {?} t
     * @param {?} cx
     * @param {?} cy
     * @param {?} rx
     * @param {?} ry
     * @param {?} rmin
     * @param {?} rmax
     * @return {?}
     */
    SkyconsComponent.prototype.puff = /**
     * @private
     * @param {?} ctx
     * @param {?} t
     * @param {?} cx
     * @param {?} cy
     * @param {?} rx
     * @param {?} ry
     * @param {?} rmin
     * @param {?} rmax
     * @return {?}
     */
    function (ctx, t, cx, cy, rx, ry, rmin, rmax) {
        /** @type {?} */
        var c = Math.cos(t * TAU);
        /** @type {?} */
        var s = Math.sin(t * TAU);
        rmax -= rmin;
        this.circle(ctx, cx - s * rx, cy + c * ry + rmax * 0.5, rmin + (1 - c * 0.5) * rmax);
    };
    /**
     * @private
     * @param {?} ctx
     * @param {?} t
     * @param {?} cx
     * @param {?} cy
     * @param {?} rx
     * @param {?} ry
     * @param {?} rmin
     * @param {?} rmax
     * @return {?}
     */
    SkyconsComponent.prototype.puffs = /**
     * @private
     * @param {?} ctx
     * @param {?} t
     * @param {?} cx
     * @param {?} cy
     * @param {?} rx
     * @param {?} ry
     * @param {?} rmin
     * @param {?} rmax
     * @return {?}
     */
    function (ctx, t, cx, cy, rx, ry, rmin, rmax) {
        /** @type {?} */
        var i;
        for (i = 5; i--;)
            this.puff(ctx, t + i / 5, cx, cy, rx, ry, rmin, rmax);
    };
    /**
     * @private
     * @param {?} ctx
     * @param {?} t
     * @param {?} cx
     * @param {?} cy
     * @param {?} cw
     * @param {?} s
     * @param {?} color
     * @return {?}
     */
    SkyconsComponent.prototype.cloud = /**
     * @private
     * @param {?} ctx
     * @param {?} t
     * @param {?} cx
     * @param {?} cy
     * @param {?} cw
     * @param {?} s
     * @param {?} color
     * @return {?}
     */
    function (ctx, t, cx, cy, cw, s, color) {
        t /= 30000;
        /** @type {?} */
        var a = cw * 0.21;
        /** @type {?} */
        var b = cw * 0.12;
        /** @type {?} */
        var c = cw * 0.24;
        /** @type {?} */
        var d = cw * 0.28;
        ctx.fillStyle = color;
        this.puffs(ctx, t, cx, cy, a, b, c, d);
        ctx.globalCompositeOperation = 'destination-out';
        this.puffs(ctx, t, cx, cy, a, b, c - s, d - s);
        ctx.globalCompositeOperation = 'source-over';
    };
    /**
     * @param {?} ctx
     * @param {?} t
     * @param {?} cx
     * @param {?} cy
     * @param {?} cw
     * @param {?} s
     * @param {?} color
     * @return {?}
     */
    SkyconsComponent.prototype.sun = /**
     * @param {?} ctx
     * @param {?} t
     * @param {?} cx
     * @param {?} cy
     * @param {?} cw
     * @param {?} s
     * @param {?} color
     * @return {?}
     */
    function (ctx, t, cx, cy, cw, s, color) {
        t /= 120000;
        /** @type {?} */
        var a = cw * 0.25 - s * 0.5;
        /** @type {?} */
        var b = cw * 0.32 + s * 0.5;
        /** @type {?} */
        var c = cw * 0.50 - s * 0.5;
        /** @type {?} */
        var i;
        /** @type {?} */
        var p;
        /** @type {?} */
        var cos;
        /** @type {?} */
        var sin;
        ctx.strokeStyle = color;
        ctx.lineWidth = s;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.beginPath();
        ctx.arc(cx, cy, a, 0, TAU, false);
        ctx.stroke();
        for (i = 8; i--;) {
            p = (t + i / 8) * TAU;
            cos = Math.cos(p);
            sin = Math.sin(p);
            this.line(ctx, cx + cos * b, cy + sin * b, cx + cos * c, cy + sin * c);
        }
    };
    /**
     * @private
     * @param {?} ctx
     * @param {?} t
     * @param {?} cx
     * @param {?} cy
     * @param {?} cw
     * @param {?} s
     * @param {?} color
     * @return {?}
     */
    SkyconsComponent.prototype.moon = /**
     * @private
     * @param {?} ctx
     * @param {?} t
     * @param {?} cx
     * @param {?} cy
     * @param {?} cw
     * @param {?} s
     * @param {?} color
     * @return {?}
     */
    function (ctx, t, cx, cy, cw, s, color) {
        t /= 15000;
        /** @type {?} */
        var a = cw * 0.29 - s * 0.5;
        /** @type {?} */
        var b = cw * 0.05;
        /** @type {?} */
        var c = Math.cos(t * TAU);
        /** @type {?} */
        var p = c * TAU / -16;
        ctx.strokeStyle = color;
        ctx.lineWidth = s;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        cx += c * b;
        ctx.beginPath();
        ctx.arc(cx, cy, a, p + TAU / 8, p + TAU * 7 / 8, false);
        ctx.arc(cx + Math.cos(p) * a * TWO_OVER_SQRT_2, cy + Math.sin(p) * a * TWO_OVER_SQRT_2, a, p + TAU * 5 / 8, p + TAU * 3 / 8, true);
        ctx.closePath();
        ctx.stroke();
    };
    /**
     * @private
     * @param {?} ctx
     * @param {?} t
     * @param {?} cx
     * @param {?} cy
     * @param {?} cw
     * @param {?} s
     * @param {?} color
     * @return {?}
     */
    SkyconsComponent.prototype._rain = /**
     * @private
     * @param {?} ctx
     * @param {?} t
     * @param {?} cx
     * @param {?} cy
     * @param {?} cw
     * @param {?} s
     * @param {?} color
     * @return {?}
     */
    function (ctx, t, cx, cy, cw, s, color) {
        t /= 1350;
        /** @type {?} */
        var a = cw * 0.16;
        /** @type {?} */
        var b = TAU * 11 / 12;
        /** @type {?} */
        var c = TAU * 7 / 12;
        /** @type {?} */
        var i;
        /** @type {?} */
        var p;
        /** @type {?} */
        var x;
        /** @type {?} */
        var y;
        ctx.fillStyle = color;
        for (i = 4; i--;) {
            p = (t + i / 4) % 1;
            x = cx + ((i - 1.5) / 1.5) * (i === 1 || i === 2 ? -1 : 1) * a;
            y = cy + p * p * cw;
            ctx.beginPath();
            ctx.moveTo(x, y - s * 1.5);
            ctx.arc(x, y, s * 0.75, b, c, false);
            ctx.fill();
        }
    };
    /**
     * @private
     * @param {?} ctx
     * @param {?} t
     * @param {?} cx
     * @param {?} cy
     * @param {?} cw
     * @param {?} s
     * @param {?} color
     * @return {?}
     */
    SkyconsComponent.prototype._sleet = /**
     * @private
     * @param {?} ctx
     * @param {?} t
     * @param {?} cx
     * @param {?} cy
     * @param {?} cw
     * @param {?} s
     * @param {?} color
     * @return {?}
     */
    function (ctx, t, cx, cy, cw, s, color) {
        t /= 750;
        /** @type {?} */
        var a = cw * 0.1875;
        /** @type {?} */
        var i;
        /** @type {?} */
        var p;
        /** @type {?} */
        var x;
        /** @type {?} */
        var y;
        ctx.strokeStyle = color;
        ctx.lineWidth = s * 0.5;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        for (i = 4; i--;) {
            p = (t + i / 4) % 1;
            x = Math.floor(cx + ((i - 1.5) / 1.5) * (i === 1 || i === 2 ? -1 : 1) * a) + 0.5;
            y = cy + p * cw;
            this.line(ctx, x, y - s * 1.5, x, y + s * 1.5);
        }
    };
    /**
     * @private
     * @param {?} ctx
     * @param {?} t
     * @param {?} cx
     * @param {?} cy
     * @param {?} cw
     * @param {?} s
     * @param {?} color
     * @return {?}
     */
    SkyconsComponent.prototype._snow = /**
     * @private
     * @param {?} ctx
     * @param {?} t
     * @param {?} cx
     * @param {?} cy
     * @param {?} cw
     * @param {?} s
     * @param {?} color
     * @return {?}
     */
    function (ctx, t, cx, cy, cw, s, color) {
        t /= 3000;
        /** @type {?} */
        var a = cw * 0.16;
        /** @type {?} */
        var b = s * 0.75;
        /** @type {?} */
        var u = t * TAU * 0.7;
        /** @type {?} */
        var ux = Math.cos(u) * b;
        /** @type {?} */
        var uy = Math.sin(u) * b;
        /** @type {?} */
        var v = u + TAU / 3;
        /** @type {?} */
        var vx = Math.cos(v) * b;
        /** @type {?} */
        var vy = Math.sin(v) * b;
        /** @type {?} */
        var w = u + TAU * 2 / 3;
        /** @type {?} */
        var wx = Math.cos(w) * b;
        /** @type {?} */
        var wy = Math.sin(w) * b;
        /** @type {?} */
        var i;
        /** @type {?} */
        var p;
        /** @type {?} */
        var x;
        /** @type {?} */
        var y;
        ctx.strokeStyle = color;
        ctx.lineWidth = s * 0.5;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        for (i = 4; i--;) {
            p = (t + i / 4) % 1;
            x = cx + Math.sin((p + i / 4) * TAU) * a;
            y = cy + p * cw;
            this.line(ctx, x - ux, y - uy, x + ux, y + uy);
            this.line(ctx, x - vx, y - vy, x + vx, y + vy);
            this.line(ctx, x - wx, y - wy, x + wx, y + wy);
        }
    };
    /**
     * @private
     * @param {?} ctx
     * @param {?} t
     * @param {?} cx
     * @param {?} cy
     * @param {?} cw
     * @param {?} s
     * @param {?} color
     * @return {?}
     */
    SkyconsComponent.prototype.fogbank = /**
     * @private
     * @param {?} ctx
     * @param {?} t
     * @param {?} cx
     * @param {?} cy
     * @param {?} cw
     * @param {?} s
     * @param {?} color
     * @return {?}
     */
    function (ctx, t, cx, cy, cw, s, color) {
        t /= 30000;
        /** @type {?} */
        var a = cw * 0.21;
        /** @type {?} */
        var b = cw * 0.06;
        /** @type {?} */
        var c = cw * 0.21;
        /** @type {?} */
        var d = cw * 0.28;
        ctx.fillStyle = color;
        this.puffs(ctx, t, cx, cy, a, b, c, d);
        ctx.globalCompositeOperation = 'destination-out';
        this.puffs(ctx, t, cx, cy, a, b, c - s, d - s);
        ctx.globalCompositeOperation = 'source-over';
    };
    /**
     * @private
     * @param {?} ctx
     * @param {?} t
     * @param {?} x
     * @param {?} y
     * @param {?} cw
     * @param {?} s
     * @param {?} color
     * @return {?}
     */
    SkyconsComponent.prototype.leaf = /**
     * @private
     * @param {?} ctx
     * @param {?} t
     * @param {?} x
     * @param {?} y
     * @param {?} cw
     * @param {?} s
     * @param {?} color
     * @return {?}
     */
    function (ctx, t, x, y, cw, s, color) {
        /** @type {?} */
        var a = cw / 8;
        /** @type {?} */
        var b = a / 3;
        /** @type {?} */
        var c = 2 * b;
        /** @type {?} */
        var d = (t % 1) * TAU;
        /** @type {?} */
        var e = Math.cos(d);
        /** @type {?} */
        var f = Math.sin(d);
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
        ctx.lineWidth = s;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.beginPath();
        ctx.arc(x, y, a, d, d + Math.PI, false);
        ctx.arc(x - b * e, y - b * f, c, d + Math.PI, d, false);
        ctx.arc(x + c * e, y + c * f, b, d + Math.PI, d, true);
        ctx.globalCompositeOperation = 'destination-out';
        ctx.fill();
        ctx.globalCompositeOperation = 'source-over';
        ctx.stroke();
    };
    /**
     * @private
     * @param {?} ctx
     * @param {?} t
     * @param {?} cx
     * @param {?} cy
     * @param {?} cw
     * @param {?} s
     * @param {?} index
     * @param {?} total
     * @param {?} color
     * @return {?}
     */
    SkyconsComponent.prototype.swoosh = /**
     * @private
     * @param {?} ctx
     * @param {?} t
     * @param {?} cx
     * @param {?} cy
     * @param {?} cw
     * @param {?} s
     * @param {?} index
     * @param {?} total
     * @param {?} color
     * @return {?}
     */
    function (ctx, t, cx, cy, cw, s, index, total, color) {
        t /= 2500;
        /** @type {?} */
        var path = this.WIND_PATHS[index];
        /** @type {?} */
        var a = (t + index - this.WIND_OFFSETS[index].start) % total;
        /** @type {?} */
        var c = (t + index - this.WIND_OFFSETS[index].end) % total;
        /** @type {?} */
        var e = (t + index) % total;
        /** @type {?} */
        var b;
        /** @type {?} */
        var d;
        /** @type {?} */
        var f;
        /** @type {?} */
        var i;
        ctx.strokeStyle = color;
        ctx.lineWidth = s;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        if (a < 1) {
            ctx.beginPath();
            a *= path.length / 2 - 1;
            b = Math.floor(a);
            a -= b;
            b *= 2;
            b += 2;
            ctx.moveTo(cx + (path[b - 2] * (1 - a) + path[b] * a) * cw, cy + (path[b - 1] * (1 - a) + path[b + 1] * a) * cw);
            if (c < 1) {
                c *= path.length / 2 - 1;
                d = Math.floor(c);
                c -= d;
                d *= 2;
                d += 2;
                for (i = b; i !== d; i += 2)
                    ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);
                ctx.lineTo(cx + (path[d - 2] * (1 - c) + path[d] * c) * cw, cy + (path[d - 1] * (1 - c) + path[d + 1] * c) * cw);
            }
            else
                for (i = b; i !== path.length; i += 2)
                    ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);
            ctx.stroke();
        }
        else if (c < 1) {
            ctx.beginPath();
            c *= path.length / 2 - 1;
            d = Math.floor(c);
            c -= d;
            d *= 2;
            d += 2;
            ctx.moveTo(cx + path[0] * cw, cy + path[1] * cw);
            for (i = 2; i !== d; i += 2)
                ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);
            ctx.lineTo(cx + (path[d - 2] * (1 - c) + path[d] * c) * cw, cy + (path[d - 1] * (1 - c) + path[d + 1] * c) * cw);
            ctx.stroke();
        }
        if (e < 1) {
            e *= path.length / 2 - 1;
            f = Math.floor(e);
            e -= f;
            f *= 2;
            f += 2;
            this.leaf(ctx, t, cx + (path[f - 2] * (1 - e) + path[f] * e) * cw, cy + (path[f - 1] * (1 - e) + path[f + 1] * e) * cw, cw, s, color);
        }
    };
    /**
     * @param {?} ctx
     * @param {?} t
     * @param {?} color
     * @return {?}
     */
    SkyconsComponent.prototype.clearDay = /**
     * @param {?} ctx
     * @param {?} t
     * @param {?} color
     * @return {?}
     */
    function (ctx, t, color) {
        /** @type {?} */
        var w = ctx.canvas.width;
        /** @type {?} */
        var h = ctx.canvas.height;
        /** @type {?} */
        var s = Math.min(w, h);
        this.sun(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, color);
    };
    /**
     * @param {?} ctx
     * @param {?} t
     * @param {?} color
     * @return {?}
     */
    SkyconsComponent.prototype.clearNight = /**
     * @param {?} ctx
     * @param {?} t
     * @param {?} color
     * @return {?}
     */
    function (ctx, t, color) {
        /** @type {?} */
        var w = ctx.canvas.width;
        /** @type {?} */
        var h = ctx.canvas.height;
        /** @type {?} */
        var s = Math.min(w, h);
        this.moon(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, color);
    };
    /**
     * @param {?} ctx
     * @param {?} t
     * @param {?} color
     * @return {?}
     */
    SkyconsComponent.prototype.partlyCloudyDay = /**
     * @param {?} ctx
     * @param {?} t
     * @param {?} color
     * @return {?}
     */
    function (ctx, t, color) {
        /** @type {?} */
        var w = ctx.canvas.width;
        /** @type {?} */
        var h = ctx.canvas.height;
        /** @type {?} */
        var s = Math.min(w, h);
        this.sun(ctx, t, w * 0.625, h * 0.375, s * 0.75, s * STROKE, color);
        this.cloud(ctx, t, w * 0.375, h * 0.625, s * 0.75, s * STROKE, color);
    };
    /**
     * @param {?} ctx
     * @param {?} t
     * @param {?} color
     * @return {?}
     */
    SkyconsComponent.prototype.partlyCloudyNight = /**
     * @param {?} ctx
     * @param {?} t
     * @param {?} color
     * @return {?}
     */
    function (ctx, t, color) {
        /** @type {?} */
        var w = ctx.canvas.width;
        /** @type {?} */
        var h = ctx.canvas.height;
        /** @type {?} */
        var s = Math.min(w, h);
        this.moon(ctx, t, w * 0.667, h * 0.375, s * 0.75, s * STROKE, color);
        this.cloud(ctx, t, w * 0.375, h * 0.625, s * 0.75, s * STROKE, color);
    };
    /**
     * @param {?} ctx
     * @param {?} t
     * @param {?} color
     * @return {?}
     */
    SkyconsComponent.prototype.cloudy = /**
     * @param {?} ctx
     * @param {?} t
     * @param {?} color
     * @return {?}
     */
    function (ctx, t, color) {
        /** @type {?} */
        var w = ctx.canvas.width;
        /** @type {?} */
        var h = ctx.canvas.height;
        /** @type {?} */
        var s = Math.min(w, h);
        this.cloud(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, color);
    };
    /**
     * @param {?} ctx
     * @param {?} t
     * @param {?} color
     * @return {?}
     */
    SkyconsComponent.prototype.rain = /**
     * @param {?} ctx
     * @param {?} t
     * @param {?} color
     * @return {?}
     */
    function (ctx, t, color) {
        /** @type {?} */
        var w = ctx.canvas.width;
        /** @type {?} */
        var h = ctx.canvas.height;
        /** @type {?} */
        var s = Math.min(w, h);
        this._rain(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
        this.cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
    };
    /**
     * @param {?} ctx
     * @param {?} t
     * @param {?} color
     * @return {?}
     */
    SkyconsComponent.prototype.sleet = /**
     * @param {?} ctx
     * @param {?} t
     * @param {?} color
     * @return {?}
     */
    function (ctx, t, color) {
        /** @type {?} */
        var w = ctx.canvas.width;
        /** @type {?} */
        var h = ctx.canvas.height;
        /** @type {?} */
        var s = Math.min(w, h);
        this._sleet(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
        this.cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
    };
    /**
     * @param {?} ctx
     * @param {?} t
     * @param {?} color
     * @return {?}
     */
    SkyconsComponent.prototype.snow = /**
     * @param {?} ctx
     * @param {?} t
     * @param {?} color
     * @return {?}
     */
    function (ctx, t, color) {
        /** @type {?} */
        var w = ctx.canvas.width;
        /** @type {?} */
        var h = ctx.canvas.height;
        /** @type {?} */
        var s = Math.min(w, h);
        this._snow(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
        this.cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
    };
    /**
     * @param {?} ctx
     * @param {?} t
     * @param {?} color
     * @return {?}
     */
    SkyconsComponent.prototype.wind = /**
     * @param {?} ctx
     * @param {?} t
     * @param {?} color
     * @return {?}
     */
    function (ctx, t, color) {
        /** @type {?} */
        var w = ctx.canvas.width;
        /** @type {?} */
        var h = ctx.canvas.height;
        /** @type {?} */
        var s = Math.min(w, h);
        this.swoosh(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, 0, 2, color);
        this.swoosh(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, 1, 2, color);
    };
    /**
     * @param {?} ctx
     * @param {?} t
     * @param {?} color
     * @return {?}
     */
    SkyconsComponent.prototype.fog = /**
     * @param {?} ctx
     * @param {?} t
     * @param {?} color
     * @return {?}
     */
    function (ctx, t, color) {
        /** @type {?} */
        var w = ctx.canvas.width;
        /** @type {?} */
        var h = ctx.canvas.height;
        /** @type {?} */
        var s = Math.min(w, h);
        /** @type {?} */
        var k = s * STROKE;
        this.fogbank(ctx, t, w * 0.5, h * 0.32, s * 0.75, k, color);
        t /= 5000;
        /** @type {?} */
        var a = Math.cos((t) * TAU) * s * 0.02;
        /** @type {?} */
        var b = Math.cos((t + 0.25) * TAU) * s * 0.02;
        /** @type {?} */
        var c = Math.cos((t + 0.50) * TAU) * s * 0.02;
        /** @type {?} */
        var d = Math.cos((t + 0.75) * TAU) * s * 0.02;
        /** @type {?} */
        var n = h * 0.936;
        /** @type {?} */
        var e = Math.floor(n - k * 0.5) + 0.5;
        /** @type {?} */
        var f = Math.floor(n - k * 2.5) + 0.5;
        ctx.strokeStyle = color;
        ctx.lineWidth = k;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        this.line(ctx, a + w * 0.2 + k * 0.5, e, b + w * 0.8 - k * 0.5, e);
        this.line(ctx, c + w * 0.2 + k * 0.5, f, d + w * 0.8 - k * 0.5, f);
    };
    /**
     * @return {?}
     */
    SkyconsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    SkyconsComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.remove();
        this.ctx = this.canvas.nativeElement;
        this.add();
        this.play();
    };
    /**
     * @return {?}
     */
    SkyconsComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.ctx = this.canvas.nativeElement;
        if (!this.color) {
            this.color = '#000';
        }
        this.add();
        this.play();
    };
    /**
     * @return {?}
     */
    SkyconsComponent.prototype.add = /**
     * @return {?}
     */
    function () {
        // Return on undefined ctx.
        if (!this.ctx || !this.weather) {
            return;
        }
        /** @type {?} */
        var obj;
        /** @type {?} */
        var el = this.ctx;
        // Does nothing if canvas name doesn't exists
        if (el === null)
            return;
        obj = {
            element: el,
            context: el.getContext("2d")
        };
        this.list.push(obj);
        this.draw(obj, KEYFRAME);
    };
    /**
     * @param {?} obj
     * @param {?} time
     * @return {?}
     */
    SkyconsComponent.prototype.draw = /**
     * @param {?} obj
     * @param {?} time
     * @return {?}
     */
    function (obj, time) {
        /** @type {?} */
        var canvas = obj.context.canvas;
        if (this.resizeClear)
            canvas.width = canvas.width;
        else
            obj.context.clearRect(0, 0, canvas.width, canvas.height);
        // Clean weather in order to add more types and robustness
        this.weather = this.weather.replace(/[_-\s]/, '').toUpperCase();
        if (this.weather.includes('DAY') && this.weather.includes('CLOUD')) {
            this.weather = SkyconsTypes.PARTLY_CLOUDY_DAY;
        }
        else if (this.weather.includes('NIGHT') && this.weather.includes('CLOUD')) {
            this.weather = SkyconsTypes.PARTLY_CLOUDY_NIGHT;
        }
        else if (this.weather.includes('RAIN')) {
            this.weather = SkyconsTypes.RAIN;
        }
        switch (this.weather) {
            case SkyconsTypes.CLEAR_DAY:
                this.clearDay(obj.context, time, this.color);
                break;
            case SkyconsTypes.CLEAR_NIGHT:
                this.clearNight(obj.context, time, this.color);
                break;
            case SkyconsTypes.PARTLY_CLOUDY_DAY:
                this.partlyCloudyDay(obj.context, time, this.color);
                break;
            case SkyconsTypes.PARTLY_CLOUDY_NIGHT:
                this.partlyCloudyNight(obj.context, time, this.color);
                break;
            case SkyconsTypes.CLOUDY:
                this.cloudy(obj.context, time, this.color);
                break;
            case SkyconsTypes.RAIN:
                this.rain(obj.context, time, this.color);
                break;
            case SkyconsTypes.SLEET:
                this.sleet(obj.context, time, this.color);
                break;
            case SkyconsTypes.SNOW:
                this.snow(obj.context, time, this.color);
                break;
            case SkyconsTypes.WIND:
                this.wind(obj.context, time, this.color);
                break;
            case SkyconsTypes.FOG:
                this.fog(obj.context, time, this.color);
                break;
        }
    };
    /**
     * @return {?}
     */
    SkyconsComponent.prototype.play = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.pause();
        this.interval = this.requestInterval((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var now = Date.now();
            /** @type {?} */
            var i;
            for (i = _this.list.length; i--;)
                _this.draw(_this.list[i], now);
        }), 1000 / 60);
    };
    /**
     * @return {?}
     */
    SkyconsComponent.prototype.pause = /**
     * @return {?}
     */
    function () {
        if (this.interval) {
            this.cancelInterval(this.interval);
            this.interval = null;
        }
    };
    /**
     * @return {?}
     */
    SkyconsComponent.prototype.remove = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var el = this.ctx;
        for (var i = this.list.length; i--;) {
            if (this.list[i].element === el) {
                this.list.splice(i, 1);
                return;
            }
        }
    };
    SkyconsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sc-skycons',
                    template: "\n    <canvas #skyconCanvas class=\"skycons__canvas\"></canvas>\n  ",
                    styles: ["\n    :host {\n      width: 100%;\n      display: inline-block;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    SkyconsComponent.ctorParameters = function () { return []; };
    SkyconsComponent.propDecorators = {
        canvas: [{ type: ViewChild, args: ['skyconCanvas',] }],
        weather: [{ type: Input }],
        color: [{ type: Input }],
        resizeClear: [{ type: Input }],
        width: [{ type: Input }]
    };
    return SkyconsComponent;
}());
export { SkyconsComponent };
if (false) {
    /** @type {?} */
    SkyconsComponent.prototype.canvas;
    /** @type {?} */
    SkyconsComponent.prototype.weather;
    /** @type {?} */
    SkyconsComponent.prototype.color;
    /** @type {?} */
    SkyconsComponent.prototype.resizeClear;
    /** @type {?} */
    SkyconsComponent.prototype.width;
    /** @type {?} */
    SkyconsComponent.prototype.ctx;
    /** @type {?} */
    SkyconsComponent.prototype.interval;
    /** @type {?} */
    SkyconsComponent.prototype.list;
    /** @type {?} */
    SkyconsComponent.prototype.raf;
    /** @type {?} */
    SkyconsComponent.prototype.caf;
    /** @type {?} */
    SkyconsComponent.prototype.WIND_PATHS;
    /** @type {?} */
    SkyconsComponent.prototype.WIND_OFFSETS;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNreWNvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNreWNvbnMvIiwic291cmNlcyI6WyJsaWIvbmd4LXNreWNvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFVBQVUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUEyQyxNQUFNLGVBQWUsQ0FBQztBQUN6SCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBRW5ELE1BQU0sS0FBTyxRQUFRLEdBQUcsR0FBRzs7QUFDM0IsTUFBTSxLQUFPLE1BQU0sR0FBRyxJQUFJOztBQUMxQixNQUFNLEtBQU8sR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRTs7QUFDaEMsTUFBTSxLQUFPLGVBQWUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFFakQ7SUF5WUU7UUFsWEEsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUVWLFFBQUcsR0FBUSxNQUFNLENBQUMscUJBQXFCO1lBQ3JDLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQztRQUVyQyxRQUFHLEdBQVEsTUFBTSxDQUFDLG9CQUFvQjtZQUNwQyxNQUFNLENBQUMsMEJBQTBCLENBQUM7UUFFcEMsZUFBVSxHQUFHO1lBQ1g7Z0JBQ0UsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNO2dCQUNwRCxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU07Z0JBQ3BELENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTTtnQkFDakQsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNO2dCQUNqRCxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU07Z0JBQ2pELENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTTtnQkFDakQsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNO2dCQUNqRCxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTTtnQkFDbEQsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNO2dCQUNwRCxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU07Z0JBQ3BELENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTTtnQkFDcEQsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNO2dCQUNwRCxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU07Z0JBQ2pELENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTTtnQkFDakQsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07Z0JBQy9DLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTTtnQkFDOUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNO2dCQUM5QyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07Z0JBQzlDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTTtnQkFDOUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNO2dCQUM5QyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07Z0JBQzlDLE1BQU0sRUFBRSxNQUFNO2FBQ2Y7WUFDRDtnQkFDRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU07Z0JBQ2pELENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTTtnQkFDakQsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNO2dCQUNqRCxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU07Z0JBQ2pELENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTTtnQkFDakQsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFN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QUFTLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSzs7WUFDaEIsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSzs7WUFDdEIsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTTs7WUFDckIsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVwQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7Ozs7SUFFRCxxQ0FBVTs7Ozs7O0lBQVYsVUFBVyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUs7O1lBQ2xCLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUs7O1lBQ3RCLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU07O1lBQ3JCLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7Ozs7O0lBRUQsMENBQWU7Ozs7OztJQUFmLFVBQWdCLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSzs7WUFDdkIsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSzs7WUFDdEIsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTTs7WUFDckIsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVwQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7Ozs7O0lBRUQsNENBQWlCOzs7Ozs7SUFBakIsVUFBa0IsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLOztZQUN6QixDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLOztZQUN0QixDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNOztZQUNyQixDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRXBCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozs7Ozs7SUFFRCxpQ0FBTTs7Ozs7O0lBQU4sVUFBTyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUs7O1lBQ2QsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSzs7WUFDdEIsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTTs7WUFDckIsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVwQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7Ozs7SUFFRCwrQkFBSTs7Ozs7O0lBQUosVUFBSyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUs7O1lBQ1osQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSzs7WUFDdEIsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTTs7WUFDckIsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVwQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs7Ozs7O0lBRUQsZ0NBQUs7Ozs7OztJQUFMLFVBQU0sR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLOztZQUNiLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUs7O1lBQ3RCLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU07O1lBQ3JCLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUs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QyxDQUFDLENBQUM7Z0JBQ3ZCLE9BQU87YUFDUjtTQUNGO0lBQ0gsQ0FBQzs7Z0JBcG5CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSxxRUFFVDs2QkFDUSw0RUFLUjtpQkFDRjs7Ozs7eUJBR0UsU0FBUyxTQUFDLGNBQWM7MEJBRXhCLEtBQUs7d0JBQ0wsS0FBSzs4QkFDTCxLQUFLO3dCQUNMLEtBQUs7O0lBbW1CUix1QkFBQztDQUFBLEFBdG5CRCxJQXNuQkM7U0ExbUJZLGdCQUFnQjs7O0lBRTNCLGtDQUE4Qzs7SUFFOUMsbUNBQXlCOztJQUN6QixpQ0FBdUI7O0lBQ3ZCLHVDQUE4Qjs7SUFDOUIsaUNBQXVCOztJQUV2QiwrQkFBUzs7SUFDVCxvQ0FBYzs7SUFDZCxnQ0FBVTs7SUFFViwrQkFDcUM7O0lBRXJDLCtCQUNvQzs7SUFFcEMsc0NBc0NFOztJQUVGLHdDQUdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgSW5wdXQsIEFmdGVyVmlld0luaXQsIFNpbXBsZUNoYW5nZXMsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2t5Y29uc1R5cGVzIH0gZnJvbSAnLi9uZ3gtc2t5Y29ucy10eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBLRVlGUkFNRSA9IDUwMDtcbmV4cG9ydCBjb25zdCBTVFJPS0UgPSAwLjA4O1xuZXhwb3J0IGNvbnN0IFRBVSA9IDIuMCAqIE1hdGguUEk7XG5leHBvcnQgY29uc3QgVFdPX09WRVJfU1FSVF8yID0gMi4wIC8gTWF0aC5zcXJ0KDIpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzYy1za3ljb25zJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8Y2FudmFzICNza3ljb25DYW52YXMgY2xhc3M9XCJza3ljb25zX19jYW52YXNcIj48L2NhbnZhcz5cbiAgYCxcbiAgc3R5bGVzOiBbYFxuICAgIDpob3N0IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgYF1cbn0pXG5leHBvcnQgY2xhc3MgU2t5Y29uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcblxuICBAVmlld0NoaWxkKCdza3ljb25DYW52YXMnKSBjYW52YXM6IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KCkgd2VhdGhlcjogc3RyaW5nO1xuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSByZXNpemVDbGVhcjogYm9vbGVhbjtcbiAgQElucHV0KCkgd2lkdGg6IHN0cmluZztcblxuICBjdHg6IGFueTtcbiAgaW50ZXJ2YWw6IGFueTtcbiAgbGlzdCA9IFtdO1xuXG4gIHJhZjogYW55ID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG5cbiAgY2FmOiBhbnkgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcbiAgICB3aW5kb3cud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWU7XG5cbiAgV0lORF9QQVRIUyA9IFtcbiAgICBbXG4gICAgICAtMC43NTAwLCAtMC4xODAwLCAtMC43MjE5LCAtMC4xNTI3LCAtMC42OTcxLCAtMC4xMjI1LFxuICAgICAgLTAuNjczOSwgLTAuMDkxMCwgLTAuNjUxNiwgLTAuMDU4OCwgLTAuNjI5OCwgLTAuMDI2MixcbiAgICAgIC0wLjYwODMsIDAuMDA2NSwgLTAuNTg2OCwgMC4wMzk2LCAtMC41NjQzLCAwLjA3MzEsXG4gICAgICAtMC41MzcyLCAwLjEwNDEsIC0wLjUwMzMsIDAuMTI1OSwgLTAuNDY2MiwgMC4xNDA2LFxuICAgICAgLTAuNDI3NSwgMC4xNDkzLCAtMC4zODgxLCAwLjE1MzAsIC0wLjM0ODcsIDAuMTUyNixcbiAgICAgIC0wLjMwOTUsIDAuMTQ4OCwgLTAuMjcwOCwgMC4xNDIxLCAtMC4yMzE5LCAwLjEzNDIsXG4gICAgICAtMC4xOTQzLCAwLjEyMTcsIC0wLjE2MDAsIDAuMTAyNSwgLTAuMTI5MCwgMC4wNzg1LFxuICAgICAgLTAuMTAxMiwgMC4wNTA5LCAtMC4wNzY0LCAwLjAyMDYsIC0wLjA1NDcsIC0wLjAxMjAsXG4gICAgICAtMC4wMzc4LCAtMC4wNDcyLCAtMC4wMzI0LCAtMC4wODU3LCAtMC4wMzg5LCAtMC4xMjQxLFxuICAgICAgLTAuMDU0NiwgLTAuMTU5OSwgLTAuMDgxNCwgLTAuMTg3NiwgLTAuMTE5MywgLTAuMTk2NCxcbiAgICAgIC0wLjE1ODIsIC0wLjE5MzUsIC0wLjE5MzEsIC0wLjE3NjksIC0wLjIxNTcsIC0wLjE0NTMsXG4gICAgICAtMC4yMjkwLCAtMC4xMDg1LCAtMC4yMzI3LCAtMC4wNjk3LCAtMC4yMjQwLCAtMC4wMzE3LFxuICAgICAgLTAuMjA2NCwgMC4wMDMzLCAtMC4xODUzLCAwLjAzNjIsIC0wLjE2MTMsIDAuMDY3MixcbiAgICAgIC0wLjEzNTAsIDAuMDk2MSwgLTAuMTA1MSwgMC4xMjEzLCAtMC4wNzA2LCAwLjEzOTcsXG4gICAgICAtMC4wMzMyLCAwLjE1MTIsIDAuMDA1MywgMC4xNTgwLCAwLjA0NDIsIDAuMTYyNCxcbiAgICAgIDAuMDgzMywgMC4xNjM2LCAwLjEyMjQsIDAuMTYxNSwgMC4xNjEzLCAwLjE1NjUsXG4gICAgICAwLjE5OTksIDAuMTUwMCwgMC4yMzc4LCAwLjE0MDIsIDAuMjc0OSwgMC4xMjc5LFxuICAgICAgMC4zMTE4LCAwLjExNDcsIDAuMzQ4NywgMC4xMDE1LCAwLjM4NTgsIDAuMDg5MixcbiAgICAgIDAuNDIzNiwgMC4wNzg3LCAwLjQ2MjEsIDAuMDcxNSwgMC41MDEyLCAwLjA3MDIsXG4gICAgICAwLjUzOTgsIDAuMDc2NiwgMC41NzY4LCAwLjA4OTAsIDAuNjEyMywgMC4xMDU1LFxuICAgICAgMC42NDY2LCAwLjEyNDQsIDAuNjgwNSwgMC4xNDQwLCAwLjcxNDcsIDAuMTYzMCxcbiAgICAgIDAuNzUwMCwgMC4xODAwXG4gICAgXSxcbiAgICBbXG4gICAgICAtMC43NTAwLCAwLjAwMDAsIC0wLjcwMzMsIDAuMDE5NSwgLTAuNjU2OSwgMC4wMzk5LFxuICAgICAgLTAuNjEwNCwgMC4wNjAwLCAtMC41NjM0LCAwLjA3ODksIC0wLjUxNTUsIDAuMDk1NCxcbiAgICAgIC0wLjQ2NjcsIDAuMTA4OSwgLTAuNDE3NCwgMC4xMjA2LCAtMC4zNjc2LCAwLjEyOTksXG4gICAgICAtMC4zMTc0LCAwLjEzNjUsIC0wLjI2NjksIDAuMTM5OCwgLTAuMjE2MiwgMC4xMzkxLFxuICAgICAgLTAuMTY1OCwgMC4xMzQ3LCAtMC4xMTU3LCAwLjEyNzEsIC0wLjA2NjEsIDAuMTE2OSxcbiAgICAgIC0wLjAxNzAsIDAuMTA0NiwgMC4wMzE2LCAwLjA5MDMsIDAuMDc5MSwgMC4wNzI4LFxuICAgICAgMC4xMjU5LCAwLjA1MzQsIDAuMTcyMywgMC4wMzMxLCAwLjIxODgsIDAuMDEyOSxcbiAgICAgIDAuMjY1NiwgLTAuMDA2NCwgMC4zMTIyLCAtMC4wMjYzLCAwLjM1ODYsIC0wLjA0NjYsXG4gICAgICAwLjQwNTIsIC0wLjA2NjUsIDAuNDUyNSwgLTAuMDg0NywgMC41MDA3LCAtMC4xMDAyLFxuICAgICAgMC41NDk3LCAtMC4xMTMwLCAwLjU5OTEsIC0wLjEyNDAsIDAuNjQ5MSwgLTAuMTMyNSxcbiAgICAgIDAuNjk5NCwgLTAuMTM4MCwgMC43NTAwLCAtMC4xNDAwXG4gICAgXVxuICBdO1xuXG4gIFdJTkRfT0ZGU0VUUyA9IFtcbiAgICB7IHN0YXJ0OiAwLjM2LCBlbmQ6IDAuMTEgfSxcbiAgICB7IHN0YXJ0OiAwLjU2LCBlbmQ6IDAuMTYgfVxuICBdO1xuXG4gIHByaXZhdGUgcmVxdWVzdEludGVydmFsKGZuOiBhbnksIGk6IG51bWJlcikge1xuICAgIHZhciBoYW5kbGUgPSB7IHZhbHVlOiBudWxsIH07XG5cbiAgICBsZXQgbG9vcCA9ICgpID0+IHtcbiAgICAgIGhhbmRsZS52YWx1ZSA9IHRoaXMucmFmKGxvb3ApO1xuICAgICAgZm4oKTtcbiAgICB9XG5cbiAgICBsb29wKCk7XG4gICAgcmV0dXJuIGhhbmRsZTtcbiAgfVxuXG4gIHByaXZhdGUgY2FuY2VsSW50ZXJ2YWwoaGFuZGxlOiBhbnkpIHtcbiAgICB0aGlzLmNhZihoYW5kbGUudmFsdWUpXG4gIH1cblxuICBwcml2YXRlIGNpcmNsZShjdHgsIHgsIHksIHIpIHtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyh4LCB5LCByLCAwLCBUQVUsIGZhbHNlKTtcbiAgICBjdHguZmlsbCgpO1xuICB9XG5cbiAgbGluZShjdHgsIGF4LCBheSwgYngsIGJ5KSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oYXgsIGF5KTtcbiAgICBjdHgubGluZVRvKGJ4LCBieSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBwdWZmKGN0eCwgdCwgY3gsIGN5LCByeCwgcnksIHJtaW4sIHJtYXgpIHtcbiAgICBsZXQgYyA9IE1hdGguY29zKHQgKiBUQVUpLFxuICAgICAgcyA9IE1hdGguc2luKHQgKiBUQVUpO1xuXG4gICAgcm1heCAtPSBybWluO1xuXG4gICAgdGhpcy5jaXJjbGUoXG4gICAgICBjdHgsXG4gICAgICBjeCAtIHMgKiByeCxcbiAgICAgIGN5ICsgYyAqIHJ5ICsgcm1heCAqIDAuNSxcbiAgICAgIHJtaW4gKyAoMSAtIGMgKiAwLjUpICogcm1heFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHB1ZmZzKGN0eCwgdCwgY3gsIGN5LCByeCwgcnksIHJtaW4sIHJtYXgpIHtcbiAgICBsZXQgaTtcblxuICAgIGZvciAoaSA9IDU7IGktLTspXG4gICAgICB0aGlzLnB1ZmYoY3R4LCB0ICsgaSAvIDUsIGN4LCBjeSwgcngsIHJ5LCBybWluLCBybWF4KTtcbiAgfVxuXG4gIHByaXZhdGUgY2xvdWQoY3R4LCB0LCBjeCwgY3ksIGN3LCBzLCBjb2xvcikge1xuICAgIHQgLz0gMzAwMDA7XG5cbiAgICBsZXQgYSA9IGN3ICogMC4yMSxcbiAgICAgIGIgPSBjdyAqIDAuMTIsXG4gICAgICBjID0gY3cgKiAwLjI0LFxuICAgICAgZCA9IGN3ICogMC4yODtcblxuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICB0aGlzLnB1ZmZzKGN0eCwgdCwgY3gsIGN5LCBhLCBiLCBjLCBkKTtcblxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3V0JztcbiAgICB0aGlzLnB1ZmZzKGN0eCwgdCwgY3gsIGN5LCBhLCBiLCBjIC0gcywgZCAtIHMpO1xuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9XG5cbiAgc3VuKGN0eCwgdCwgY3gsIGN5LCBjdywgcywgY29sb3IpIHtcbiAgICB0IC89IDEyMDAwMDtcblxuICAgIGxldCBhID0gY3cgKiAwLjI1IC0gcyAqIDAuNSxcbiAgICAgIGIgPSBjdyAqIDAuMzIgKyBzICogMC41LFxuICAgICAgYyA9IGN3ICogMC41MCAtIHMgKiAwLjUsXG4gICAgICBpLCBwLCBjb3MsIHNpbjtcblxuICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICAgIGN0eC5saW5lV2lkdGggPSBzO1xuICAgIGN0eC5saW5lQ2FwID0gXCJyb3VuZFwiO1xuICAgIGN0eC5saW5lSm9pbiA9IFwicm91bmRcIjtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKGN4LCBjeSwgYSwgMCwgVEFVLCBmYWxzZSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgZm9yIChpID0gODsgaS0tOykge1xuICAgICAgcCA9ICh0ICsgaSAvIDgpICogVEFVO1xuICAgICAgY29zID0gTWF0aC5jb3MocCk7XG4gICAgICBzaW4gPSBNYXRoLnNpbihwKTtcbiAgICAgIHRoaXMubGluZShjdHgsIGN4ICsgY29zICogYiwgY3kgKyBzaW4gKiBiLCBjeCArIGNvcyAqIGMsIGN5ICsgc2luICogYyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBtb29uKGN0eCwgdCwgY3gsIGN5LCBjdywgcywgY29sb3IpIHtcbiAgICB0IC89IDE1MDAwO1xuXG4gICAgbGV0IGEgPSBjdyAqIDAuMjkgLSBzICogMC41LFxuICAgICAgYiA9IGN3ICogMC4wNSxcbiAgICAgIGMgPSBNYXRoLmNvcyh0ICogVEFVKSxcbiAgICAgIHAgPSBjICogVEFVIC8gLTE2O1xuXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gICAgY3R4LmxpbmVXaWR0aCA9IHM7XG4gICAgY3R4LmxpbmVDYXAgPSBcInJvdW5kXCI7XG4gICAgY3R4LmxpbmVKb2luID0gXCJyb3VuZFwiO1xuXG4gICAgY3ggKz0gYyAqIGI7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyhjeCwgY3ksIGEsIHAgKyBUQVUgLyA4LCBwICsgVEFVICogNyAvIDgsIGZhbHNlKTtcbiAgICBjdHguYXJjKGN4ICsgTWF0aC5jb3MocCkgKiBhICogVFdPX09WRVJfU1FSVF8yLCBjeSArIE1hdGguc2luKHApICogYSAqIFRXT19PVkVSX1NRUlRfMiwgYSwgcCArIFRBVSAqIDUgLyA4LCBwICsgVEFVICogMyAvIDgsIHRydWUpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH1cblxuICBwcml2YXRlIF9yYWluKGN0eCwgdCwgY3gsIGN5LCBjdywgcywgY29sb3IpIHtcbiAgICB0IC89IDEzNTA7XG5cbiAgICBsZXQgYSA9IGN3ICogMC4xNixcbiAgICAgIGIgPSBUQVUgKiAxMSAvIDEyLFxuICAgICAgYyA9IFRBVSAqIDcgLyAxMixcbiAgICAgIGksIHAsIHgsIHk7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG5cbiAgICBmb3IgKGkgPSA0OyBpLS07KSB7XG4gICAgICBwID0gKHQgKyBpIC8gNCkgJSAxO1xuICAgICAgeCA9IGN4ICsgKChpIC0gMS41KSAvIDEuNSkgKiAoaSA9PT0gMSB8fCBpID09PSAyID8gLTEgOiAxKSAqIGE7XG4gICAgICB5ID0gY3kgKyBwICogcCAqIGN3O1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4Lm1vdmVUbyh4LCB5IC0gcyAqIDEuNSk7XG4gICAgICBjdHguYXJjKHgsIHksIHMgKiAwLjc1LCBiLCBjLCBmYWxzZSk7XG4gICAgICBjdHguZmlsbCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3NsZWV0KGN0eCwgdCwgY3gsIGN5LCBjdywgcywgY29sb3IpIHtcbiAgICB0IC89IDc1MDtcblxuICAgIGxldCBhID0gY3cgKiAwLjE4NzUsXG4gICAgICBpLCBwLCB4LCB5O1xuXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gICAgY3R4LmxpbmVXaWR0aCA9IHMgKiAwLjU7XG4gICAgY3R4LmxpbmVDYXAgPSBcInJvdW5kXCI7XG4gICAgY3R4LmxpbmVKb2luID0gXCJyb3VuZFwiO1xuXG4gICAgZm9yIChpID0gNDsgaS0tOykge1xuICAgICAgcCA9ICh0ICsgaSAvIDQpICUgMTtcbiAgICAgIHggPSBNYXRoLmZsb29yKGN4ICsgKChpIC0gMS41KSAvIDEuNSkgKiAoaSA9PT0gMSB8fCBpID09PSAyID8gLTEgOiAxKSAqIGEpICsgMC41O1xuICAgICAgeSA9IGN5ICsgcCAqIGN3O1xuICAgICAgdGhpcy5saW5lKGN0eCwgeCwgeSAtIHMgKiAxLjUsIHgsIHkgKyBzICogMS41KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zbm93KGN0eCwgdCwgY3gsIGN5LCBjdywgcywgY29sb3IpIHtcbiAgICB0IC89IDMwMDA7XG5cbiAgICB2YXIgYSA9IGN3ICogMC4xNixcbiAgICAgIGIgPSBzICogMC43NSxcbiAgICAgIHUgPSB0ICogVEFVICogMC43LFxuICAgICAgdXggPSBNYXRoLmNvcyh1KSAqIGIsXG4gICAgICB1eSA9IE1hdGguc2luKHUpICogYixcbiAgICAgIHYgPSB1ICsgVEFVIC8gMyxcbiAgICAgIHZ4ID0gTWF0aC5jb3ModikgKiBiLFxuICAgICAgdnkgPSBNYXRoLnNpbih2KSAqIGIsXG4gICAgICB3ID0gdSArIFRBVSAqIDIgLyAzLFxuICAgICAgd3ggPSBNYXRoLmNvcyh3KSAqIGIsXG4gICAgICB3eSA9IE1hdGguc2luKHcpICogYixcbiAgICAgIGksIHAsIHgsIHk7XG5cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICBjdHgubGluZVdpZHRoID0gcyAqIDAuNTtcbiAgICBjdHgubGluZUNhcCA9IFwicm91bmRcIjtcbiAgICBjdHgubGluZUpvaW4gPSBcInJvdW5kXCI7XG5cbiAgICBmb3IgKGkgPSA0OyBpLS07KSB7XG4gICAgICBwID0gKHQgKyBpIC8gNCkgJSAxO1xuICAgICAgeCA9IGN4ICsgTWF0aC5zaW4oKHAgKyBpIC8gNCkgKiBUQVUpICogYTtcbiAgICAgIHkgPSBjeSArIHAgKiBjdztcblxuICAgICAgdGhpcy5saW5lKGN0eCwgeCAtIHV4LCB5IC0gdXksIHggKyB1eCwgeSArIHV5KTtcbiAgICAgIHRoaXMubGluZShjdHgsIHggLSB2eCwgeSAtIHZ5LCB4ICsgdngsIHkgKyB2eSk7XG4gICAgICB0aGlzLmxpbmUoY3R4LCB4IC0gd3gsIHkgLSB3eSwgeCArIHd4LCB5ICsgd3kpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZm9nYmFuayhjdHgsIHQsIGN4LCBjeSwgY3csIHMsIGNvbG9yKSB7XG4gICAgdCAvPSAzMDAwMDtcblxuICAgIGxldCBhID0gY3cgKiAwLjIxLFxuICAgICAgYiA9IGN3ICogMC4wNixcbiAgICAgIGMgPSBjdyAqIDAuMjEsXG4gICAgICBkID0gY3cgKiAwLjI4O1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIHRoaXMucHVmZnMoY3R4LCB0LCBjeCwgY3ksIGEsIGIsIGMsIGQpO1xuXG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1vdXQnO1xuICAgIHRoaXMucHVmZnMoY3R4LCB0LCBjeCwgY3ksIGEsIGIsIGMgLSBzLCBkIC0gcyk7XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gIH1cblxuICBwcml2YXRlIGxlYWYoY3R4LCB0LCB4LCB5LCBjdywgcywgY29sb3IpIHtcbiAgICBsZXQgYSA9IGN3IC8gOCxcbiAgICAgIGIgPSBhIC8gMyxcbiAgICAgIGMgPSAyICogYixcbiAgICAgIGQgPSAodCAlIDEpICogVEFVLFxuICAgICAgZSA9IE1hdGguY29zKGQpLFxuICAgICAgZiA9IE1hdGguc2luKGQpO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICAgIGN0eC5saW5lV2lkdGggPSBzO1xuICAgIGN0eC5saW5lQ2FwID0gXCJyb3VuZFwiO1xuICAgIGN0eC5saW5lSm9pbiA9IFwicm91bmRcIjtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKHgsIHksIGEsIGQsIGQgKyBNYXRoLlBJLCBmYWxzZSk7XG4gICAgY3R4LmFyYyh4IC0gYiAqIGUsIHkgLSBiICogZiwgYywgZCArIE1hdGguUEksIGQsIGZhbHNlKTtcbiAgICBjdHguYXJjKHggKyBjICogZSwgeSArIGMgKiBmLCBiLCBkICsgTWF0aC5QSSwgZCwgdHJ1ZSk7XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1vdXQnO1xuICAgIGN0eC5maWxsKCk7XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzd29vc2goY3R4LCB0LCBjeCwgY3ksIGN3LCBzLCBpbmRleCwgdG90YWwsIGNvbG9yKSB7XG4gICAgdCAvPSAyNTAwO1xuXG4gICAgbGV0IHBhdGggPSB0aGlzLldJTkRfUEFUSFNbaW5kZXhdLFxuICAgICAgYSA9ICh0ICsgaW5kZXggLSB0aGlzLldJTkRfT0ZGU0VUU1tpbmRleF0uc3RhcnQpICUgdG90YWwsXG4gICAgICBjID0gKHQgKyBpbmRleCAtIHRoaXMuV0lORF9PRkZTRVRTW2luZGV4XS5lbmQpICUgdG90YWwsXG4gICAgICBlID0gKHQgKyBpbmRleCkgJSB0b3RhbCxcbiAgICAgIGIsIGQsIGYsIGk7XG5cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICBjdHgubGluZVdpZHRoID0gcztcbiAgICBjdHgubGluZUNhcCA9IFwicm91bmRcIjtcbiAgICBjdHgubGluZUpvaW4gPSBcInJvdW5kXCI7XG5cbiAgICBpZiAoYSA8IDEpIHtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcblxuICAgICAgYSAqPSBwYXRoLmxlbmd0aCAvIDIgLSAxO1xuICAgICAgYiA9IE1hdGguZmxvb3IoYSk7XG4gICAgICBhIC09IGI7XG4gICAgICBiICo9IDI7XG4gICAgICBiICs9IDI7XG5cbiAgICAgIGN0eC5tb3ZlVG8oXG4gICAgICAgIGN4ICsgKHBhdGhbYiAtIDJdICogKDEgLSBhKSArIHBhdGhbYl0gKiBhKSAqIGN3LFxuICAgICAgICBjeSArIChwYXRoW2IgLSAxXSAqICgxIC0gYSkgKyBwYXRoW2IgKyAxXSAqIGEpICogY3dcbiAgICAgICk7XG5cbiAgICAgIGlmIChjIDwgMSkge1xuICAgICAgICBjICo9IHBhdGgubGVuZ3RoIC8gMiAtIDE7XG4gICAgICAgIGQgPSBNYXRoLmZsb29yKGMpO1xuICAgICAgICBjIC09IGQ7XG4gICAgICAgIGQgKj0gMjtcbiAgICAgICAgZCArPSAyO1xuXG4gICAgICAgIGZvciAoaSA9IGI7IGkgIT09IGQ7IGkgKz0gMilcbiAgICAgICAgICBjdHgubGluZVRvKGN4ICsgcGF0aFtpXSAqIGN3LCBjeSArIHBhdGhbaSArIDFdICogY3cpO1xuXG4gICAgICAgIGN0eC5saW5lVG8oXG4gICAgICAgICAgY3ggKyAocGF0aFtkIC0gMl0gKiAoMSAtIGMpICsgcGF0aFtkXSAqIGMpICogY3csXG4gICAgICAgICAgY3kgKyAocGF0aFtkIC0gMV0gKiAoMSAtIGMpICsgcGF0aFtkICsgMV0gKiBjKSAqIGN3XG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGVsc2VcbiAgICAgICAgZm9yIChpID0gYjsgaSAhPT0gcGF0aC5sZW5ndGg7IGkgKz0gMilcbiAgICAgICAgICBjdHgubGluZVRvKGN4ICsgcGF0aFtpXSAqIGN3LCBjeSArIHBhdGhbaSArIDFdICogY3cpO1xuXG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxuXG4gICAgZWxzZSBpZiAoYyA8IDEpIHtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcblxuICAgICAgYyAqPSBwYXRoLmxlbmd0aCAvIDIgLSAxO1xuICAgICAgZCA9IE1hdGguZmxvb3IoYyk7XG4gICAgICBjIC09IGQ7XG4gICAgICBkICo9IDI7XG4gICAgICBkICs9IDI7XG5cbiAgICAgIGN0eC5tb3ZlVG8oY3ggKyBwYXRoWzBdICogY3csIGN5ICsgcGF0aFsxXSAqIGN3KTtcblxuICAgICAgZm9yIChpID0gMjsgaSAhPT0gZDsgaSArPSAyKVxuICAgICAgICBjdHgubGluZVRvKGN4ICsgcGF0aFtpXSAqIGN3LCBjeSArIHBhdGhbaSArIDFdICogY3cpO1xuXG4gICAgICBjdHgubGluZVRvKFxuICAgICAgICBjeCArIChwYXRoW2QgLSAyXSAqICgxIC0gYykgKyBwYXRoW2RdICogYykgKiBjdyxcbiAgICAgICAgY3kgKyAocGF0aFtkIC0gMV0gKiAoMSAtIGMpICsgcGF0aFtkICsgMV0gKiBjKSAqIGN3XG4gICAgICApO1xuXG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxuXG4gICAgaWYgKGUgPCAxKSB7XG4gICAgICBlICo9IHBhdGgubGVuZ3RoIC8gMiAtIDE7XG4gICAgICBmID0gTWF0aC5mbG9vcihlKTtcbiAgICAgIGUgLT0gZjtcbiAgICAgIGYgKj0gMjtcbiAgICAgIGYgKz0gMjtcblxuICAgICAgdGhpcy5sZWFmKFxuICAgICAgICBjdHgsXG4gICAgICAgIHQsXG4gICAgICAgIGN4ICsgKHBhdGhbZiAtIDJdICogKDEgLSBlKSArIHBhdGhbZl0gKiBlKSAqIGN3LFxuICAgICAgICBjeSArIChwYXRoW2YgLSAxXSAqICgxIC0gZSkgKyBwYXRoW2YgKyAxXSAqIGUpICogY3csXG4gICAgICAgIGN3LFxuICAgICAgICBzLFxuICAgICAgICBjb2xvclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIGNsZWFyRGF5KGN0eCwgdCwgY29sb3IpIHtcbiAgICBsZXQgdyA9IGN0eC5jYW52YXMud2lkdGgsXG4gICAgICBoID0gY3R4LmNhbnZhcy5oZWlnaHQsXG4gICAgICBzID0gTWF0aC5taW4odywgaCk7XG5cbiAgICB0aGlzLnN1bihjdHgsIHQsIHcgKiAwLjUsIGggKiAwLjUsIHMsIHMgKiBTVFJPS0UsIGNvbG9yKTtcbiAgfVxuXG4gIGNsZWFyTmlnaHQoY3R4LCB0LCBjb2xvcikge1xuICAgIGxldCB3ID0gY3R4LmNhbnZhcy53aWR0aCxcbiAgICAgIGggPSBjdHguY2FudmFzLmhlaWdodCxcbiAgICAgIHMgPSBNYXRoLm1pbih3LCBoKTtcblxuICAgIHRoaXMubW9vbihjdHgsIHQsIHcgKiAwLjUsIGggKiAwLjUsIHMsIHMgKiBTVFJPS0UsIGNvbG9yKTtcbiAgfVxuXG4gIHBhcnRseUNsb3VkeURheShjdHgsIHQsIGNvbG9yKSB7XG4gICAgbGV0IHcgPSBjdHguY2FudmFzLndpZHRoLFxuICAgICAgaCA9IGN0eC5jYW52YXMuaGVpZ2h0LFxuICAgICAgcyA9IE1hdGgubWluKHcsIGgpO1xuXG4gICAgdGhpcy5zdW4oY3R4LCB0LCB3ICogMC42MjUsIGggKiAwLjM3NSwgcyAqIDAuNzUsIHMgKiBTVFJPS0UsIGNvbG9yKTtcbiAgICB0aGlzLmNsb3VkKGN0eCwgdCwgdyAqIDAuMzc1LCBoICogMC42MjUsIHMgKiAwLjc1LCBzICogU1RST0tFLCBjb2xvcik7XG4gIH1cblxuICBwYXJ0bHlDbG91ZHlOaWdodChjdHgsIHQsIGNvbG9yKSB7XG4gICAgbGV0IHcgPSBjdHguY2FudmFzLndpZHRoLFxuICAgICAgaCA9IGN0eC5jYW52YXMuaGVpZ2h0LFxuICAgICAgcyA9IE1hdGgubWluKHcsIGgpO1xuXG4gICAgdGhpcy5tb29uKGN0eCwgdCwgdyAqIDAuNjY3LCBoICogMC4zNzUsIHMgKiAwLjc1LCBzICogU1RST0tFLCBjb2xvcik7XG4gICAgdGhpcy5jbG91ZChjdHgsIHQsIHcgKiAwLjM3NSwgaCAqIDAuNjI1LCBzICogMC43NSwgcyAqIFNUUk9LRSwgY29sb3IpO1xuICB9XG5cbiAgY2xvdWR5KGN0eCwgdCwgY29sb3IpIHtcbiAgICBsZXQgdyA9IGN0eC5jYW52YXMud2lkdGgsXG4gICAgICBoID0gY3R4LmNhbnZhcy5oZWlnaHQsXG4gICAgICBzID0gTWF0aC5taW4odywgaCk7XG5cbiAgICB0aGlzLmNsb3VkKGN0eCwgdCwgdyAqIDAuNSwgaCAqIDAuNSwgcywgcyAqIFNUUk9LRSwgY29sb3IpO1xuICB9XG5cbiAgcmFpbihjdHgsIHQsIGNvbG9yKSB7XG4gICAgbGV0IHcgPSBjdHguY2FudmFzLndpZHRoLFxuICAgICAgaCA9IGN0eC5jYW52YXMuaGVpZ2h0LFxuICAgICAgcyA9IE1hdGgubWluKHcsIGgpO1xuXG4gICAgdGhpcy5fcmFpbihjdHgsIHQsIHcgKiAwLjUsIGggKiAwLjM3LCBzICogMC45LCBzICogU1RST0tFLCBjb2xvcik7XG4gICAgdGhpcy5jbG91ZChjdHgsIHQsIHcgKiAwLjUsIGggKiAwLjM3LCBzICogMC45LCBzICogU1RST0tFLCBjb2xvcik7XG4gIH1cblxuICBzbGVldChjdHgsIHQsIGNvbG9yKSB7XG4gICAgbGV0IHcgPSBjdHguY2FudmFzLndpZHRoLFxuICAgICAgaCA9IGN0eC5jYW52YXMuaGVpZ2h0LFxuICAgICAgcyA9IE1hdGgubWluKHcsIGgpO1xuXG4gICAgdGhpcy5fc2xlZXQoY3R4LCB0LCB3ICogMC41LCBoICogMC4zNywgcyAqIDAuOSwgcyAqIFNUUk9LRSwgY29sb3IpO1xuICAgIHRoaXMuY2xvdWQoY3R4LCB0LCB3ICogMC41LCBoICogMC4zNywgcyAqIDAuOSwgcyAqIFNUUk9LRSwgY29sb3IpO1xuICB9XG5cbiAgc25vdyhjdHgsIHQsIGNvbG9yKSB7XG4gICAgbGV0IHcgPSBjdHguY2FudmFzLndpZHRoLFxuICAgICAgaCA9IGN0eC5jYW52YXMuaGVpZ2h0LFxuICAgICAgcyA9IE1hdGgubWluKHcsIGgpO1xuXG4gICAgdGhpcy5fc25vdyhjdHgsIHQsIHcgKiAwLjUsIGggKiAwLjM3LCBzICogMC45LCBzICogU1RST0tFLCBjb2xvcik7XG4gICAgdGhpcy5jbG91ZChjdHgsIHQsIHcgKiAwLjUsIGggKiAwLjM3LCBzICogMC45LCBzICogU1RST0tFLCBjb2xvcik7XG4gIH1cblxuICB3aW5kKGN0eCwgdCwgY29sb3IpIHtcbiAgICBsZXQgdyA9IGN0eC5jYW52YXMud2lkdGgsXG4gICAgICBoID0gY3R4LmNhbnZhcy5oZWlnaHQsXG4gICAgICBzID0gTWF0aC5taW4odywgaCk7XG5cbiAgICB0aGlzLnN3b29zaChjdHgsIHQsIHcgKiAwLjUsIGggKiAwLjUsIHMsIHMgKiBTVFJPS0UsIDAsIDIsIGNvbG9yKTtcbiAgICB0aGlzLnN3b29zaChjdHgsIHQsIHcgKiAwLjUsIGggKiAwLjUsIHMsIHMgKiBTVFJPS0UsIDEsIDIsIGNvbG9yKTtcbiAgfVxuXG4gIGZvZyhjdHgsIHQsIGNvbG9yKSB7XG4gICAgbGV0IHcgPSBjdHguY2FudmFzLndpZHRoLFxuICAgICAgaCA9IGN0eC5jYW52YXMuaGVpZ2h0LFxuICAgICAgcyA9IE1hdGgubWluKHcsIGgpLFxuICAgICAgayA9IHMgKiBTVFJPS0U7XG5cbiAgICB0aGlzLmZvZ2JhbmsoY3R4LCB0LCB3ICogMC41LCBoICogMC4zMiwgcyAqIDAuNzUsIGssIGNvbG9yKTtcblxuICAgIHQgLz0gNTAwMDtcblxuICAgIGxldCBhID0gTWF0aC5jb3MoKHQpICogVEFVKSAqIHMgKiAwLjAyLFxuICAgICAgYiA9IE1hdGguY29zKCh0ICsgMC4yNSkgKiBUQVUpICogcyAqIDAuMDIsXG4gICAgICBjID0gTWF0aC5jb3MoKHQgKyAwLjUwKSAqIFRBVSkgKiBzICogMC4wMixcbiAgICAgIGQgPSBNYXRoLmNvcygodCArIDAuNzUpICogVEFVKSAqIHMgKiAwLjAyLFxuICAgICAgbiA9IGggKiAwLjkzNixcbiAgICAgIGUgPSBNYXRoLmZsb29yKG4gLSBrICogMC41KSArIDAuNSxcbiAgICAgIGYgPSBNYXRoLmZsb29yKG4gLSBrICogMi41KSArIDAuNTtcblxuICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICAgIGN0eC5saW5lV2lkdGggPSBrO1xuICAgIGN0eC5saW5lQ2FwID0gXCJyb3VuZFwiO1xuICAgIGN0eC5saW5lSm9pbiA9IFwicm91bmRcIjtcblxuICAgIHRoaXMubGluZShjdHgsIGEgKyB3ICogMC4yICsgayAqIDAuNSwgZSwgYiArIHcgKiAwLjggLSBrICogMC41LCBlKTtcbiAgICB0aGlzLmxpbmUoY3R4LCBjICsgdyAqIDAuMiArIGsgKiAwLjUsIGYsIGQgKyB3ICogMC44IC0gayAqIDAuNSwgZik7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLnJlbW92ZSgpO1xuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLmFkZCgpO1xuICAgIHRoaXMucGxheSgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMubmF0aXZlRWxlbWVudDtcblxuICAgIGlmICghdGhpcy5jb2xvcikge1xuICAgICAgdGhpcy5jb2xvciA9ICcjMDAwJztcbiAgICB9XG5cbiAgICB0aGlzLmFkZCgpO1xuICAgIHRoaXMucGxheSgpO1xuICB9XG5cbiAgYWRkKCkge1xuICAgIC8vIFJldHVybiBvbiB1bmRlZmluZWQgY3R4LlxuICAgIGlmICghdGhpcy5jdHggfHwgIXRoaXMud2VhdGhlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBvYmo7XG5cbiAgICBsZXQgZWwgPSB0aGlzLmN0eDtcblxuICAgIC8vIERvZXMgbm90aGluZyBpZiBjYW52YXMgbmFtZSBkb2Vzbid0IGV4aXN0c1xuICAgIGlmIChlbCA9PT0gbnVsbClcbiAgICAgIHJldHVybjtcblxuICAgIG9iaiA9IHtcbiAgICAgIGVsZW1lbnQ6IGVsLFxuICAgICAgY29udGV4dDogZWwuZ2V0Q29udGV4dChcIjJkXCIpXG4gICAgfTtcblxuICAgIHRoaXMubGlzdC5wdXNoKG9iaik7XG4gICAgdGhpcy5kcmF3KG9iaiwgS0VZRlJBTUUpO1xuICB9XG5cbiAgZHJhdyhvYmosIHRpbWUpIHtcbiAgICB2YXIgY2FudmFzID0gb2JqLmNvbnRleHQuY2FudmFzO1xuXG4gICAgaWYgKHRoaXMucmVzaXplQ2xlYXIpXG4gICAgICBjYW52YXMud2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgZWxzZVxuICAgICAgb2JqLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgICAvLyBDbGVhbiB3ZWF0aGVyIGluIG9yZGVyIHRvIGFkZCBtb3JlIHR5cGVzIGFuZCByb2J1c3RuZXNzXG4gICAgdGhpcy53ZWF0aGVyID0gdGhpcy53ZWF0aGVyLnJlcGxhY2UoL1tfLVxcc10vLCAnJykudG9VcHBlckNhc2UoKTtcbiAgICBcbiAgICBpZiAodGhpcy53ZWF0aGVyLmluY2x1ZGVzKCdEQVknKSAmJiB0aGlzLndlYXRoZXIuaW5jbHVkZXMoJ0NMT1VEJykpIHtcbiAgICAgIHRoaXMud2VhdGhlciA9IFNreWNvbnNUeXBlcy5QQVJUTFlfQ0xPVURZX0RBWTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy53ZWF0aGVyLmluY2x1ZGVzKCdOSUdIVCcpICYmIHRoaXMud2VhdGhlci5pbmNsdWRlcygnQ0xPVUQnKSkge1xuICAgICAgdGhpcy53ZWF0aGVyID0gU2t5Y29uc1R5cGVzLlBBUlRMWV9DTE9VRFlfTklHSFQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMud2VhdGhlci5pbmNsdWRlcygnUkFJTicpKSB7XG4gICAgICB0aGlzLndlYXRoZXIgPSBTa3ljb25zVHlwZXMuUkFJTjtcbiAgICB9XG4gICAgXG4gICAgc3dpdGNoICh0aGlzLndlYXRoZXIpIHtcbiAgICAgIGNhc2UgU2t5Y29uc1R5cGVzLkNMRUFSX0RBWTpcbiAgICAgICAgdGhpcy5jbGVhckRheShvYmouY29udGV4dCwgdGltZSwgdGhpcy5jb2xvcik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTa3ljb25zVHlwZXMuQ0xFQVJfTklHSFQ6XG4gICAgICAgIHRoaXMuY2xlYXJOaWdodChvYmouY29udGV4dCwgdGltZSwgdGhpcy5jb2xvcik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTa3ljb25zVHlwZXMuUEFSVExZX0NMT1VEWV9EQVk6XG4gICAgICAgIHRoaXMucGFydGx5Q2xvdWR5RGF5KG9iai5jb250ZXh0LCB0aW1lLCB0aGlzLmNvbG9yKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNreWNvbnNUeXBlcy5QQVJUTFlfQ0xPVURZX05JR0hUOlxuICAgICAgICB0aGlzLnBhcnRseUNsb3VkeU5pZ2h0KG9iai5jb250ZXh0LCB0aW1lLCB0aGlzLmNvbG9yKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNreWNvbnNUeXBlcy5DTE9VRFk6XG4gICAgICAgIHRoaXMuY2xvdWR5KG9iai5jb250ZXh0LCB0aW1lLCB0aGlzLmNvbG9yKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNreWNvbnNUeXBlcy5SQUlOOlxuICAgICAgICB0aGlzLnJhaW4ob2JqLmNvbnRleHQsIHRpbWUsIHRoaXMuY29sb3IpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU2t5Y29uc1R5cGVzLlNMRUVUOlxuICAgICAgICB0aGlzLnNsZWV0KG9iai5jb250ZXh0LCB0aW1lLCB0aGlzLmNvbG9yKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNreWNvbnNUeXBlcy5TTk9XOlxuICAgICAgICB0aGlzLnNub3cob2JqLmNvbnRleHQsIHRpbWUsIHRoaXMuY29sb3IpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU2t5Y29uc1R5cGVzLldJTkQ6XG4gICAgICAgIHRoaXMud2luZChvYmouY29udGV4dCwgdGltZSwgdGhpcy5jb2xvcik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTa3ljb25zVHlwZXMuRk9HOlxuICAgICAgICB0aGlzLmZvZyhvYmouY29udGV4dCwgdGltZSwgdGhpcy5jb2xvcik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHBsYXkoKSB7XG4gICAgdGhpcy5wYXVzZSgpO1xuXG4gICAgdGhpcy5pbnRlcnZhbCA9IHRoaXMucmVxdWVzdEludGVydmFsKCgpID0+IHtcbiAgICAgIGxldCBub3cgPSBEYXRlLm5vdygpLCBpO1xuXG4gICAgICBmb3IgKGkgPSB0aGlzLmxpc3QubGVuZ3RoOyBpLS07KVxuICAgICAgICB0aGlzLmRyYXcodGhpcy5saXN0W2ldLCBub3cpO1xuICAgIH0sIDEwMDAgLyA2MCk7XG4gIH1cblxuICBwYXVzZSgpIHtcbiAgICBpZiAodGhpcy5pbnRlcnZhbCkge1xuICAgICAgdGhpcy5jYW5jZWxJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAgICAgIHRoaXMuaW50ZXJ2YWwgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICBsZXQgZWwgPSB0aGlzLmN0eDtcblxuICAgIGZvciAobGV0IGkgPSB0aGlzLmxpc3QubGVuZ3RoOyBpLS07KVxuICAgIHtcbiAgICAgIGlmICh0aGlzLmxpc3RbaV0uZWxlbWVudCA9PT0gZWwpIHtcbiAgICAgICAgdGhpcy5saXN0LnNwbGljZShpLCAxKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG4iXX0=