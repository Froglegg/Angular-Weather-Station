/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import { SkyconsTypes } from './ngx-skycons-types';
/** @type {?} */
export const KEYFRAME = 500;
/** @type {?} */
export const STROKE = 0.08;
/** @type {?} */
export const TAU = 2.0 * Math.PI;
/** @type {?} */
export const TWO_OVER_SQRT_2 = 2.0 / Math.sqrt(2);
export class SkyconsComponent {
    constructor() {
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
    requestInterval(fn, i) {
        /** @type {?} */
        var handle = { value: null };
        /** @type {?} */
        let loop = (/**
         * @return {?}
         */
        () => {
            handle.value = this.raf(loop);
            fn();
        });
        loop();
        return handle;
    }
    /**
     * @private
     * @param {?} handle
     * @return {?}
     */
    cancelInterval(handle) {
        this.caf(handle.value);
    }
    /**
     * @private
     * @param {?} ctx
     * @param {?} x
     * @param {?} y
     * @param {?} r
     * @return {?}
     */
    circle(ctx, x, y, r) {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, TAU, false);
        ctx.fill();
    }
    /**
     * @param {?} ctx
     * @param {?} ax
     * @param {?} ay
     * @param {?} bx
     * @param {?} by
     * @return {?}
     */
    line(ctx, ax, ay, bx, by) {
        ctx.beginPath();
        ctx.moveTo(ax, ay);
        ctx.lineTo(bx, by);
        ctx.stroke();
    }
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
    puff(ctx, t, cx, cy, rx, ry, rmin, rmax) {
        /** @type {?} */
        let c = Math.cos(t * TAU);
        /** @type {?} */
        let s = Math.sin(t * TAU);
        rmax -= rmin;
        this.circle(ctx, cx - s * rx, cy + c * ry + rmax * 0.5, rmin + (1 - c * 0.5) * rmax);
    }
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
    puffs(ctx, t, cx, cy, rx, ry, rmin, rmax) {
        /** @type {?} */
        let i;
        for (i = 5; i--;)
            this.puff(ctx, t + i / 5, cx, cy, rx, ry, rmin, rmax);
    }
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
    cloud(ctx, t, cx, cy, cw, s, color) {
        t /= 30000;
        /** @type {?} */
        let a = cw * 0.21;
        /** @type {?} */
        let b = cw * 0.12;
        /** @type {?} */
        let c = cw * 0.24;
        /** @type {?} */
        let d = cw * 0.28;
        ctx.fillStyle = color;
        this.puffs(ctx, t, cx, cy, a, b, c, d);
        ctx.globalCompositeOperation = 'destination-out';
        this.puffs(ctx, t, cx, cy, a, b, c - s, d - s);
        ctx.globalCompositeOperation = 'source-over';
    }
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
    sun(ctx, t, cx, cy, cw, s, color) {
        t /= 120000;
        /** @type {?} */
        let a = cw * 0.25 - s * 0.5;
        /** @type {?} */
        let b = cw * 0.32 + s * 0.5;
        /** @type {?} */
        let c = cw * 0.50 - s * 0.5;
        /** @type {?} */
        let i;
        /** @type {?} */
        let p;
        /** @type {?} */
        let cos;
        /** @type {?} */
        let sin;
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
    }
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
    moon(ctx, t, cx, cy, cw, s, color) {
        t /= 15000;
        /** @type {?} */
        let a = cw * 0.29 - s * 0.5;
        /** @type {?} */
        let b = cw * 0.05;
        /** @type {?} */
        let c = Math.cos(t * TAU);
        /** @type {?} */
        let p = c * TAU / -16;
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
    }
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
    _rain(ctx, t, cx, cy, cw, s, color) {
        t /= 1350;
        /** @type {?} */
        let a = cw * 0.16;
        /** @type {?} */
        let b = TAU * 11 / 12;
        /** @type {?} */
        let c = TAU * 7 / 12;
        /** @type {?} */
        let i;
        /** @type {?} */
        let p;
        /** @type {?} */
        let x;
        /** @type {?} */
        let y;
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
    }
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
    _sleet(ctx, t, cx, cy, cw, s, color) {
        t /= 750;
        /** @type {?} */
        let a = cw * 0.1875;
        /** @type {?} */
        let i;
        /** @type {?} */
        let p;
        /** @type {?} */
        let x;
        /** @type {?} */
        let y;
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
    }
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
    _snow(ctx, t, cx, cy, cw, s, color) {
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
    }
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
    fogbank(ctx, t, cx, cy, cw, s, color) {
        t /= 30000;
        /** @type {?} */
        let a = cw * 0.21;
        /** @type {?} */
        let b = cw * 0.06;
        /** @type {?} */
        let c = cw * 0.21;
        /** @type {?} */
        let d = cw * 0.28;
        ctx.fillStyle = color;
        this.puffs(ctx, t, cx, cy, a, b, c, d);
        ctx.globalCompositeOperation = 'destination-out';
        this.puffs(ctx, t, cx, cy, a, b, c - s, d - s);
        ctx.globalCompositeOperation = 'source-over';
    }
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
    leaf(ctx, t, x, y, cw, s, color) {
        /** @type {?} */
        let a = cw / 8;
        /** @type {?} */
        let b = a / 3;
        /** @type {?} */
        let c = 2 * b;
        /** @type {?} */
        let d = (t % 1) * TAU;
        /** @type {?} */
        let e = Math.cos(d);
        /** @type {?} */
        let f = Math.sin(d);
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
    }
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
    swoosh(ctx, t, cx, cy, cw, s, index, total, color) {
        t /= 2500;
        /** @type {?} */
        let path = this.WIND_PATHS[index];
        /** @type {?} */
        let a = (t + index - this.WIND_OFFSETS[index].start) % total;
        /** @type {?} */
        let c = (t + index - this.WIND_OFFSETS[index].end) % total;
        /** @type {?} */
        let e = (t + index) % total;
        /** @type {?} */
        let b;
        /** @type {?} */
        let d;
        /** @type {?} */
        let f;
        /** @type {?} */
        let i;
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
    }
    /**
     * @param {?} ctx
     * @param {?} t
     * @param {?} color
     * @return {?}
     */
    clearDay(ctx, t, color) {
        /** @type {?} */
        let w = ctx.canvas.width;
        /** @type {?} */
        let h = ctx.canvas.height;
        /** @type {?} */
        let s = Math.min(w, h);
        this.sun(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, color);
    }
    /**
     * @param {?} ctx
     * @param {?} t
     * @param {?} color
     * @return {?}
     */
    clearNight(ctx, t, color) {
        /** @type {?} */
        let w = ctx.canvas.width;
        /** @type {?} */
        let h = ctx.canvas.height;
        /** @type {?} */
        let s = Math.min(w, h);
        this.moon(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, color);
    }
    /**
     * @param {?} ctx
     * @param {?} t
     * @param {?} color
     * @return {?}
     */
    partlyCloudyDay(ctx, t, color) {
        /** @type {?} */
        let w = ctx.canvas.width;
        /** @type {?} */
        let h = ctx.canvas.height;
        /** @type {?} */
        let s = Math.min(w, h);
        this.sun(ctx, t, w * 0.625, h * 0.375, s * 0.75, s * STROKE, color);
        this.cloud(ctx, t, w * 0.375, h * 0.625, s * 0.75, s * STROKE, color);
    }
    /**
     * @param {?} ctx
     * @param {?} t
     * @param {?} color
     * @return {?}
     */
    partlyCloudyNight(ctx, t, color) {
        /** @type {?} */
        let w = ctx.canvas.width;
        /** @type {?} */
        let h = ctx.canvas.height;
        /** @type {?} */
        let s = Math.min(w, h);
        this.moon(ctx, t, w * 0.667, h * 0.375, s * 0.75, s * STROKE, color);
        this.cloud(ctx, t, w * 0.375, h * 0.625, s * 0.75, s * STROKE, color);
    }
    /**
     * @param {?} ctx
     * @param {?} t
     * @param {?} color
     * @return {?}
     */
    cloudy(ctx, t, color) {
        /** @type {?} */
        let w = ctx.canvas.width;
        /** @type {?} */
        let h = ctx.canvas.height;
        /** @type {?} */
        let s = Math.min(w, h);
        this.cloud(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, color);
    }
    /**
     * @param {?} ctx
     * @param {?} t
     * @param {?} color
     * @return {?}
     */
    rain(ctx, t, color) {
        /** @type {?} */
        let w = ctx.canvas.width;
        /** @type {?} */
        let h = ctx.canvas.height;
        /** @type {?} */
        let s = Math.min(w, h);
        this._rain(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
        this.cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
    }
    /**
     * @param {?} ctx
     * @param {?} t
     * @param {?} color
     * @return {?}
     */
    sleet(ctx, t, color) {
        /** @type {?} */
        let w = ctx.canvas.width;
        /** @type {?} */
        let h = ctx.canvas.height;
        /** @type {?} */
        let s = Math.min(w, h);
        this._sleet(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
        this.cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
    }
    /**
     * @param {?} ctx
     * @param {?} t
     * @param {?} color
     * @return {?}
     */
    snow(ctx, t, color) {
        /** @type {?} */
        let w = ctx.canvas.width;
        /** @type {?} */
        let h = ctx.canvas.height;
        /** @type {?} */
        let s = Math.min(w, h);
        this._snow(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
        this.cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
    }
    /**
     * @param {?} ctx
     * @param {?} t
     * @param {?} color
     * @return {?}
     */
    wind(ctx, t, color) {
        /** @type {?} */
        let w = ctx.canvas.width;
        /** @type {?} */
        let h = ctx.canvas.height;
        /** @type {?} */
        let s = Math.min(w, h);
        this.swoosh(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, 0, 2, color);
        this.swoosh(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, 1, 2, color);
    }
    /**
     * @param {?} ctx
     * @param {?} t
     * @param {?} color
     * @return {?}
     */
    fog(ctx, t, color) {
        /** @type {?} */
        let w = ctx.canvas.width;
        /** @type {?} */
        let h = ctx.canvas.height;
        /** @type {?} */
        let s = Math.min(w, h);
        /** @type {?} */
        let k = s * STROKE;
        this.fogbank(ctx, t, w * 0.5, h * 0.32, s * 0.75, k, color);
        t /= 5000;
        /** @type {?} */
        let a = Math.cos((t) * TAU) * s * 0.02;
        /** @type {?} */
        let b = Math.cos((t + 0.25) * TAU) * s * 0.02;
        /** @type {?} */
        let c = Math.cos((t + 0.50) * TAU) * s * 0.02;
        /** @type {?} */
        let d = Math.cos((t + 0.75) * TAU) * s * 0.02;
        /** @type {?} */
        let n = h * 0.936;
        /** @type {?} */
        let e = Math.floor(n - k * 0.5) + 0.5;
        /** @type {?} */
        let f = Math.floor(n - k * 2.5) + 0.5;
        ctx.strokeStyle = color;
        ctx.lineWidth = k;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        this.line(ctx, a + w * 0.2 + k * 0.5, e, b + w * 0.8 - k * 0.5, e);
        this.line(ctx, c + w * 0.2 + k * 0.5, f, d + w * 0.8 - k * 0.5, f);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.remove();
        this.ctx = this.canvas.nativeElement;
        this.add();
        this.play();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.ctx = this.canvas.nativeElement;
        if (!this.color) {
            this.color = '#000';
        }
        this.add();
        this.play();
    }
    /**
     * @return {?}
     */
    add() {
        // Return on undefined ctx.
        if (!this.ctx || !this.weather) {
            return;
        }
        /** @type {?} */
        let obj;
        /** @type {?} */
        let el = this.ctx;
        // Does nothing if canvas name doesn't exists
        if (el === null)
            return;
        obj = {
            element: el,
            context: el.getContext("2d")
        };
        this.list.push(obj);
        this.draw(obj, KEYFRAME);
    }
    /**
     * @param {?} obj
     * @param {?} time
     * @return {?}
     */
    draw(obj, time) {
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
    }
    /**
     * @return {?}
     */
    play() {
        this.pause();
        this.interval = this.requestInterval((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let now = Date.now();
            /** @type {?} */
            let i;
            for (i = this.list.length; i--;)
                this.draw(this.list[i], now);
        }), 1000 / 60);
    }
    /**
     * @return {?}
     */
    pause() {
        if (this.interval) {
            this.cancelInterval(this.interval);
            this.interval = null;
        }
    }
    /**
     * @return {?}
     */
    remove() {
        /** @type {?} */
        let el = this.ctx;
        for (let i = this.list.length; i--;) {
            if (this.list[i].element === el) {
                this.list.splice(i, 1);
                return;
            }
        }
    }
}
SkyconsComponent.decorators = [
    { type: Component, args: [{
                selector: 'sc-skycons',
                template: `
    <canvas #skyconCanvas class="skycons__canvas"></canvas>
  `,
                styles: [`
    :host {
      width: 100%;
      display: inline-block;
    }
  `]
            }] }
];
/** @nocollapse */
SkyconsComponent.ctorParameters = () => [];
SkyconsComponent.propDecorators = {
    canvas: [{ type: ViewChild, args: ['skyconCanvas',] }],
    weather: [{ type: Input }],
    color: [{ type: Input }],
    resizeClear: [{ type: Input }],
    width: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNreWNvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNreWNvbnMvIiwic291cmNlcyI6WyJsaWIvbmd4LXNreWNvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFVBQVUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUEyQyxNQUFNLGVBQWUsQ0FBQztBQUN6SCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBRW5ELE1BQU0sT0FBTyxRQUFRLEdBQUcsR0FBRzs7QUFDM0IsTUFBTSxPQUFPLE1BQU0sR0FBRyxJQUFJOztBQUMxQixNQUFNLE9BQU8sR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRTs7QUFDaEMsTUFBTSxPQUFPLGVBQWUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFjakQsTUFBTSxPQUFPLGdCQUFnQjtJQTZYM0I7UUFsWEEsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUVWLFFBQUcsR0FBUSxNQUFNLENBQUMscUJBQXFCO1lBQ3JDLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQztRQUVyQyxRQUFHLEdBQVEsTUFBTSxDQUFDLG9CQUFvQjtZQUNwQyxNQUFNLENBQUMsMEJBQTBCLENBQUM7UUFFcEMsZUFBVSxHQUFHO1lBQ1g7Z0JBQ0UsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNO2dCQUNwRCxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU07Z0JBQ3BELENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTTtnQkFDakQsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNO2dCQUNqRCxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU07Z0JBQ2pELENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTTtnQkFDakQsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNO2dCQUNqRCxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTTtnQkFDbEQsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNO2dCQUNwRCxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU07Z0JBQ3BELENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTTtnQkFDcEQsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNO2dCQUNwRCxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU07Z0JBQ2pELENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTTtnQkFDakQsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07Z0JBQy9DLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTTtnQkFDOUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNO2dCQUM5QyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07Z0JBQzlDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTTtnQkFDOUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNO2dCQUM5QyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07Z0JBQzlDLE1BQU0sRUFBRSxNQUFNO2FBQ2Y7WUFDRDtnQkFDRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU07Z0JBQ2pELENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTTtnQkFDakQsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNO2dCQUNqRCxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU07Z0JBQ2pELENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTTtnQkFDakQsQ0FBQyxNQUFNLEVBQUUsTUFBTSxF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LEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7Ozs7SUFFRCxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLOztZQUNsQixDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLOztZQUN0QixDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNOztZQUNyQixDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRXBCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7Ozs7OztJQUVELGVBQWUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUs7O1lBQ3ZCLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUs7O1lBQ3RCLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU07O1lBQ3JCLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7Ozs7OztJQUVELGlCQUFpQixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSzs7WUFDekIsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSzs7WUFDdEIsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTTs7WUFDckIsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVwQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7Ozs7O0lBRUQsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSzs7WUFDZCxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLOztZQUN0QixDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNOztZQUNyQixDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRXBCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7Ozs7OztJQUVELElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUs7O1lBQ1osQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSzs7WUFDdEIsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTTs7WUFDckIsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVwQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs7Ozs7O0lBRUQsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSzs7WUFDYixDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLOztZQUN0QixDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNOztZQUNyQixDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRXBCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Ozs7Ozs7SUFFRCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLOztZQUNaLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUs7O1lBQ3RCLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU07O1lBQ3JCLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDcEUsQ0FBQzs7Ozs7OztJQUVELElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUs7O1lBQ1osQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSzs7WUFDdEIsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTTs7WUFDckIsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVwQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFD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bnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCwgU2ltcGxlQ2hhbmdlcywgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTa3ljb25zVHlwZXMgfSBmcm9tICcuL25neC1za3ljb25zLXR5cGVzJztcblxuZXhwb3J0IGNvbnN0IEtFWUZSQU1FID0gNTAwO1xuZXhwb3J0IGNvbnN0IFNUUk9LRSA9IDAuMDg7XG5leHBvcnQgY29uc3QgVEFVID0gMi4wICogTWF0aC5QSTtcbmV4cG9ydCBjb25zdCBUV09fT1ZFUl9TUVJUXzIgPSAyLjAgLyBNYXRoLnNxcnQoMik7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NjLXNreWNvbnMnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxjYW52YXMgI3NreWNvbkNhbnZhcyBjbGFzcz1cInNreWNvbnNfX2NhbnZhc1wiPjwvY2FudmFzPlxuICBgLFxuICBzdHlsZXM6IFtgXG4gICAgOmhvc3Qge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICBgXVxufSlcbmV4cG9ydCBjbGFzcyBTa3ljb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuXG4gIEBWaWV3Q2hpbGQoJ3NreWNvbkNhbnZhcycpIGNhbnZhczogRWxlbWVudFJlZjtcblxuICBASW5wdXQoKSB3ZWF0aGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJlc2l6ZUNsZWFyOiBib29sZWFuO1xuICBASW5wdXQoKSB3aWR0aDogc3RyaW5nO1xuXG4gIGN0eDogYW55O1xuICBpbnRlcnZhbDogYW55O1xuICBsaXN0ID0gW107XG5cbiAgcmFmOiBhbnkgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZTtcblxuICBjYWY6IGFueSA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuICAgIHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZTtcblxuICBXSU5EX1BBVEhTID0gW1xuICAgIFtcbiAgICAgIC0wLjc1MDAsIC0wLjE4MDAsIC0wLjcyMTksIC0wLjE1MjcsIC0wLjY5NzEsIC0wLjEyMjUsXG4gICAgICAtMC42NzM5LCAtMC4wOTEwLCAtMC42NTE2LCAtMC4wNTg4LCAtMC42Mjk4LCAtMC4wMjYyLFxuICAgICAgLTAuNjA4MywgMC4wMDY1LCAtMC41ODY4LCAwLjAzOTYsIC0wLjU2NDMsIDAuMDczMSxcbiAgICAgIC0wLjUzNzIsIDAuMTA0MSwgLTAuNTAzMywgMC4xMjU5LCAtMC40NjYyLCAwLjE0MDYsXG4gICAgICAtMC40Mjc1LCAwLjE0OTMsIC0wLjM4ODEsIDAuMTUzMCwgLTAuMzQ4NywgMC4xNTI2LFxuICAgICAgLTAuMzA5NSwgMC4xNDg4LCAtMC4yNzA4LCAwLjE0MjEsIC0wLjIzMTksIDAuMTM0MixcbiAgICAgIC0wLjE5NDMsIDAuMTIxNywgLTAuMTYwMCwgMC4xMDI1LCAtMC4xMjkwLCAwLjA3ODUsXG4gICAgICAtMC4xMDEyLCAwLjA1MDksIC0wLjA3NjQsIDAuMDIwNiwgLTAuMDU0NywgLTAuMDEyMCxcbiAgICAgIC0wLjAzNzgsIC0wLjA0NzIsIC0wLjAzMjQsIC0wLjA4NTcsIC0wLjAzODksIC0wLjEyNDEsXG4gICAgICAtMC4wNTQ2LCAtMC4xNTk5LCAtMC4wODE0LCAtMC4xODc2LCAtMC4xMTkzLCAtMC4xOTY0LFxuICAgICAgLTAuMTU4MiwgLTAuMTkzNSwgLTAuMTkzMSwgLTAuMTc2OSwgLTAuMjE1NywgLTAuMTQ1MyxcbiAgICAgIC0wLjIyOTAsIC0wLjEwODUsIC0wLjIzMjcsIC0wLjA2OTcsIC0wLjIyNDAsIC0wLjAzMTcsXG4gICAgICAtMC4yMDY0LCAwLjAwMzMsIC0wLjE4NTMsIDAuMDM2MiwgLTAuMTYxMywgMC4wNjcyLFxuICAgICAgLTAuMTM1MCwgMC4wOTYxLCAtMC4xMDUxLCAwLjEyMTMsIC0wLjA3MDYsIDAuMTM5NyxcbiAgICAgIC0wLjAzMzIsIDAuMTUxMiwgMC4wMDUzLCAwLjE1ODAsIDAuMDQ0MiwgMC4xNjI0LFxuICAgICAgMC4wODMzLCAwLjE2MzYsIDAuMTIyNCwgMC4xNjE1LCAwLjE2MTMsIDAuMTU2NSxcbiAgICAgIDAuMTk5OSwgMC4xNTAwLCAwLjIzNzgsIDAuMTQwMiwgMC4yNzQ5LCAwLjEyNzksXG4gICAgICAwLjMxMTgsIDAuMTE0NywgMC4zNDg3LCAwLjEwMTUsIDAuMzg1OCwgMC4wODkyLFxuICAgICAgMC40MjM2LCAwLjA3ODcsIDAuNDYyMSwgMC4wNzE1LCAwLjUwMTIsIDAuMDcwMixcbiAgICAgIDAuNTM5OCwgMC4wNzY2LCAwLjU3NjgsIDAuMDg5MCwgMC42MTIzLCAwLjEwNTUsXG4gICAgICAwLjY0NjYsIDAuMTI0NCwgMC42ODA1LCAwLjE0NDAsIDAuNzE0NywgMC4xNjMwLFxuICAgICAgMC43NTAwLCAwLjE4MDBcbiAgICBdLFxuICAgIFtcbiAgICAgIC0wLjc1MDAsIDAuMDAwMCwgLTAuNzAzMywgMC4wMTk1LCAtMC42NTY5LCAwLjAzOTksXG4gICAgICAtMC42MTA0LCAwLjA2MDAsIC0wLjU2MzQsIDAuMDc4OSwgLTAuNTE1NSwgMC4wOTU0LFxuICAgICAgLTAuNDY2NywgMC4xMDg5LCAtMC40MTc0LCAwLjEyMDYsIC0wLjM2NzYsIDAuMTI5OSxcbiAgICAgIC0wLjMxNzQsIDAuMTM2NSwgLTAuMjY2OSwgMC4xMzk4LCAtMC4yMTYyLCAwLjEzOTEsXG4gICAgICAtMC4xNjU4LCAwLjEzNDcsIC0wLjExNTcsIDAuMTI3MSwgLTAuMDY2MSwgMC4xMTY5LFxuICAgICAgLTAuMDE3MCwgMC4xMDQ2LCAwLjAzMTYsIDAuMDkwMywgMC4wNzkxLCAwLjA3MjgsXG4gICAgICAwLjEyNTksIDAuMDUzNCwgMC4xNzIzLCAwLjAzMzEsIDAuMjE4OCwgMC4wMTI5LFxuICAgICAgMC4yNjU2LCAtMC4wMDY0LCAwLjMxMjIsIC0wLjAyNjMsIDAuMzU4NiwgLTAuMDQ2NixcbiAgICAgIDAuNDA1MiwgLTAuMDY2NSwgMC40NTI1LCAtMC4wODQ3LCAwLjUwMDcsIC0wLjEwMDIsXG4gICAgICAwLjU0OTcsIC0wLjExMzAsIDAuNTk5MSwgLTAuMTI0MCwgMC42NDkxLCAtMC4xMzI1LFxuICAgICAgMC42OTk0LCAtMC4xMzgwLCAwLjc1MDAsIC0wLjE0MDBcbiAgICBdXG4gIF07XG5cbiAgV0lORF9PRkZTRVRTID0gW1xuICAgIHsgc3RhcnQ6IDAuMzYsIGVuZDogMC4xMSB9LFxuICAgIHsgc3RhcnQ6IDAuNTYsIGVuZDogMC4xNiB9XG4gIF07XG5cbiAgcHJpdmF0ZSByZXF1ZXN0SW50ZXJ2YWwoZm46IGFueSwgaTogbnVtYmVyKSB7XG4gICAgdmFyIGhhbmRsZSA9IHsgdmFsdWU6IG51bGwgfTtcblxuICAgIGxldCBsb29wID0gKCkgPT4ge1xuICAgICAgaGFuZGxlLnZhbHVlID0gdGhpcy5yYWYobG9vcCk7XG4gICAgICBmbigpO1xuICAgIH1cblxuICAgIGxvb3AoKTtcbiAgICByZXR1cm4gaGFuZGxlO1xuICB9XG5cbiAgcHJpdmF0ZSBjYW5jZWxJbnRlcnZhbChoYW5kbGU6IGFueSkge1xuICAgIHRoaXMuY2FmKGhhbmRsZS52YWx1ZSlcbiAgfVxuXG4gIHByaXZhdGUgY2lyY2xlKGN0eCwgeCwgeSwgcikge1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKHgsIHksIHIsIDAsIFRBVSwgZmFsc2UpO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cblxuICBsaW5lKGN0eCwgYXgsIGF5LCBieCwgYnkpIHtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyhheCwgYXkpO1xuICAgIGN0eC5saW5lVG8oYngsIGJ5KTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH1cblxuICBwcml2YXRlIHB1ZmYoY3R4LCB0LCBjeCwgY3ksIHJ4LCByeSwgcm1pbiwgcm1heCkge1xuICAgIGxldCBjID0gTWF0aC5jb3ModCAqIFRBVSksXG4gICAgICBzID0gTWF0aC5zaW4odCAqIFRBVSk7XG5cbiAgICBybWF4IC09IHJtaW47XG5cbiAgICB0aGlzLmNpcmNsZShcbiAgICAgIGN0eCxcbiAgICAgIGN4IC0gcyAqIHJ4LFxuICAgICAgY3kgKyBjICogcnkgKyBybWF4ICogMC41LFxuICAgICAgcm1pbiArICgxIC0gYyAqIDAuNSkgKiBybWF4XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgcHVmZnMoY3R4LCB0LCBjeCwgY3ksIHJ4LCByeSwgcm1pbiwgcm1heCkge1xuICAgIGxldCBpO1xuXG4gICAgZm9yIChpID0gNTsgaS0tOylcbiAgICAgIHRoaXMucHVmZihjdHgsIHQgKyBpIC8gNSwgY3gsIGN5LCByeCwgcnksIHJtaW4sIHJtYXgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjbG91ZChjdHgsIHQsIGN4LCBjeSwgY3csIHMsIGNvbG9yKSB7XG4gICAgdCAvPSAzMDAwMDtcblxuICAgIGxldCBhID0gY3cgKiAwLjIxLFxuICAgICAgYiA9IGN3ICogMC4xMixcbiAgICAgIGMgPSBjdyAqIDAuMjQsXG4gICAgICBkID0gY3cgKiAwLjI4O1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIHRoaXMucHVmZnMoY3R4LCB0LCBjeCwgY3ksIGEsIGIsIGMsIGQpO1xuXG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1vdXQnO1xuICAgIHRoaXMucHVmZnMoY3R4LCB0LCBjeCwgY3ksIGEsIGIsIGMgLSBzLCBkIC0gcyk7XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gIH1cblxuICBzdW4oY3R4LCB0LCBjeCwgY3ksIGN3LCBzLCBjb2xvcikge1xuICAgIHQgLz0gMTIwMDAwO1xuXG4gICAgbGV0IGEgPSBjdyAqIDAuMjUgLSBzICogMC41LFxuICAgICAgYiA9IGN3ICogMC4zMiArIHMgKiAwLjUsXG4gICAgICBjID0gY3cgKiAwLjUwIC0gcyAqIDAuNSxcbiAgICAgIGksIHAsIGNvcywgc2luO1xuXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gICAgY3R4LmxpbmVXaWR0aCA9IHM7XG4gICAgY3R4LmxpbmVDYXAgPSBcInJvdW5kXCI7XG4gICAgY3R4LmxpbmVKb2luID0gXCJyb3VuZFwiO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoY3gsIGN5LCBhLCAwLCBUQVUsIGZhbHNlKTtcbiAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICBmb3IgKGkgPSA4OyBpLS07KSB7XG4gICAgICBwID0gKHQgKyBpIC8gOCkgKiBUQVU7XG4gICAgICBjb3MgPSBNYXRoLmNvcyhwKTtcbiAgICAgIHNpbiA9IE1hdGguc2luKHApO1xuICAgICAgdGhpcy5saW5lKGN0eCwgY3ggKyBjb3MgKiBiLCBjeSArIHNpbiAqIGIsIGN4ICsgY29zICogYywgY3kgKyBzaW4gKiBjKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG1vb24oY3R4LCB0LCBjeCwgY3ksIGN3LCBzLCBjb2xvcikge1xuICAgIHQgLz0gMTUwMDA7XG5cbiAgICBsZXQgYSA9IGN3ICogMC4yOSAtIHMgKiAwLjUsXG4gICAgICBiID0gY3cgKiAwLjA1LFxuICAgICAgYyA9IE1hdGguY29zKHQgKiBUQVUpLFxuICAgICAgcCA9IGMgKiBUQVUgLyAtMTY7XG5cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICBjdHgubGluZVdpZHRoID0gcztcbiAgICBjdHgubGluZUNhcCA9IFwicm91bmRcIjtcbiAgICBjdHgubGluZUpvaW4gPSBcInJvdW5kXCI7XG5cbiAgICBjeCArPSBjICogYjtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKGN4LCBjeSwgYSwgcCArIFRBVSAvIDgsIHAgKyBUQVUgKiA3IC8gOCwgZmFsc2UpO1xuICAgIGN0eC5hcmMoY3ggKyBNYXRoLmNvcyhwKSAqIGEgKiBUV09fT1ZFUl9TUVJUXzIsIGN5ICsgTWF0aC5zaW4ocCkgKiBhICogVFdPX09WRVJfU1FSVF8yLCBhLCBwICsgVEFVICogNSAvIDgsIHAgKyBUQVUgKiAzIC8gOCwgdHJ1ZSk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3JhaW4oY3R4LCB0LCBjeCwgY3ksIGN3LCBzLCBjb2xvcikge1xuICAgIHQgLz0gMTM1MDtcblxuICAgIGxldCBhID0gY3cgKiAwLjE2LFxuICAgICAgYiA9IFRBVSAqIDExIC8gMTIsXG4gICAgICBjID0gVEFVICogNyAvIDEyLFxuICAgICAgaSwgcCwgeCwgeTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcblxuICAgIGZvciAoaSA9IDQ7IGktLTspIHtcbiAgICAgIHAgPSAodCArIGkgLyA0KSAlIDE7XG4gICAgICB4ID0gY3ggKyAoKGkgLSAxLjUpIC8gMS41KSAqIChpID09PSAxIHx8IGkgPT09IDIgPyAtMSA6IDEpICogYTtcbiAgICAgIHkgPSBjeSArIHAgKiBwICogY3c7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHgubW92ZVRvKHgsIHkgLSBzICogMS41KTtcbiAgICAgIGN0eC5hcmMoeCwgeSwgcyAqIDAuNzUsIGIsIGMsIGZhbHNlKTtcbiAgICAgIGN0eC5maWxsKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2xlZXQoY3R4LCB0LCBjeCwgY3ksIGN3LCBzLCBjb2xvcikge1xuICAgIHQgLz0gNzUwO1xuXG4gICAgbGV0IGEgPSBjdyAqIDAuMTg3NSxcbiAgICAgIGksIHAsIHgsIHk7XG5cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICBjdHgubGluZVdpZHRoID0gcyAqIDAuNTtcbiAgICBjdHgubGluZUNhcCA9IFwicm91bmRcIjtcbiAgICBjdHgubGluZUpvaW4gPSBcInJvdW5kXCI7XG5cbiAgICBmb3IgKGkgPSA0OyBpLS07KSB7XG4gICAgICBwID0gKHQgKyBpIC8gNCkgJSAxO1xuICAgICAgeCA9IE1hdGguZmxvb3IoY3ggKyAoKGkgLSAxLjUpIC8gMS41KSAqIChpID09PSAxIHx8IGkgPT09IDIgPyAtMSA6IDEpICogYSkgKyAwLjU7XG4gICAgICB5ID0gY3kgKyBwICogY3c7XG4gICAgICB0aGlzLmxpbmUoY3R4LCB4LCB5IC0gcyAqIDEuNSwgeCwgeSArIHMgKiAxLjUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3Nub3coY3R4LCB0LCBjeCwgY3ksIGN3LCBzLCBjb2xvcikge1xuICAgIHQgLz0gMzAwMDtcblxuICAgIHZhciBhID0gY3cgKiAwLjE2LFxuICAgICAgYiA9IHMgKiAwLjc1LFxuICAgICAgdSA9IHQgKiBUQVUgKiAwLjcsXG4gICAgICB1eCA9IE1hdGguY29zKHUpICogYixcbiAgICAgIHV5ID0gTWF0aC5zaW4odSkgKiBiLFxuICAgICAgdiA9IHUgKyBUQVUgLyAzLFxuICAgICAgdnggPSBNYXRoLmNvcyh2KSAqIGIsXG4gICAgICB2eSA9IE1hdGguc2luKHYpICogYixcbiAgICAgIHcgPSB1ICsgVEFVICogMiAvIDMsXG4gICAgICB3eCA9IE1hdGguY29zKHcpICogYixcbiAgICAgIHd5ID0gTWF0aC5zaW4odykgKiBiLFxuICAgICAgaSwgcCwgeCwgeTtcblxuICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICAgIGN0eC5saW5lV2lkdGggPSBzICogMC41O1xuICAgIGN0eC5saW5lQ2FwID0gXCJyb3VuZFwiO1xuICAgIGN0eC5saW5lSm9pbiA9IFwicm91bmRcIjtcblxuICAgIGZvciAoaSA9IDQ7IGktLTspIHtcbiAgICAgIHAgPSAodCArIGkgLyA0KSAlIDE7XG4gICAgICB4ID0gY3ggKyBNYXRoLnNpbigocCArIGkgLyA0KSAqIFRBVSkgKiBhO1xuICAgICAgeSA9IGN5ICsgcCAqIGN3O1xuXG4gICAgICB0aGlzLmxpbmUoY3R4LCB4IC0gdXgsIHkgLSB1eSwgeCArIHV4LCB5ICsgdXkpO1xuICAgICAgdGhpcy5saW5lKGN0eCwgeCAtIHZ4LCB5IC0gdnksIHggKyB2eCwgeSArIHZ5KTtcbiAgICAgIHRoaXMubGluZShjdHgsIHggLSB3eCwgeSAtIHd5LCB4ICsgd3gsIHkgKyB3eSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmb2diYW5rKGN0eCwgdCwgY3gsIGN5LCBjdywgcywgY29sb3IpIHtcbiAgICB0IC89IDMwMDAwO1xuXG4gICAgbGV0IGEgPSBjdyAqIDAuMjEsXG4gICAgICBiID0gY3cgKiAwLjA2LFxuICAgICAgYyA9IGN3ICogMC4yMSxcbiAgICAgIGQgPSBjdyAqIDAuMjg7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgdGhpcy5wdWZmcyhjdHgsIHQsIGN4LCBjeSwgYSwgYiwgYywgZCk7XG5cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLW91dCc7XG4gICAgdGhpcy5wdWZmcyhjdHgsIHQsIGN4LCBjeSwgYSwgYiwgYyAtIHMsIGQgLSBzKTtcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgfVxuXG4gIHByaXZhdGUgbGVhZihjdHgsIHQsIHgsIHksIGN3LCBzLCBjb2xvcikge1xuICAgIGxldCBhID0gY3cgLyA4LFxuICAgICAgYiA9IGEgLyAzLFxuICAgICAgYyA9IDIgKiBiLFxuICAgICAgZCA9ICh0ICUgMSkgKiBUQVUsXG4gICAgICBlID0gTWF0aC5jb3MoZCksXG4gICAgICBmID0gTWF0aC5zaW4oZCk7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gICAgY3R4LmxpbmVXaWR0aCA9IHM7XG4gICAgY3R4LmxpbmVDYXAgPSBcInJvdW5kXCI7XG4gICAgY3R4LmxpbmVKb2luID0gXCJyb3VuZFwiO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoeCwgeSwgYSwgZCwgZCArIE1hdGguUEksIGZhbHNlKTtcbiAgICBjdHguYXJjKHggLSBiICogZSwgeSAtIGIgKiBmLCBjLCBkICsgTWF0aC5QSSwgZCwgZmFsc2UpO1xuICAgIGN0eC5hcmMoeCArIGMgKiBlLCB5ICsgYyAqIGYsIGIsIGQgKyBNYXRoLlBJLCBkLCB0cnVlKTtcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLW91dCc7XG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH1cblxuICBwcml2YXRlIHN3b29zaChjdHgsIHQsIGN4LCBjeSwgY3csIHMsIGluZGV4LCB0b3RhbCwgY29sb3IpIHtcbiAgICB0IC89IDI1MDA7XG5cbiAgICBsZXQgcGF0aCA9IHRoaXMuV0lORF9QQVRIU1tpbmRleF0sXG4gICAgICBhID0gKHQgKyBpbmRleCAtIHRoaXMuV0lORF9PRkZTRVRTW2luZGV4XS5zdGFydCkgJSB0b3RhbCxcbiAgICAgIGMgPSAodCArIGluZGV4IC0gdGhpcy5XSU5EX09GRlNFVFNbaW5kZXhdLmVuZCkgJSB0b3RhbCxcbiAgICAgIGUgPSAodCArIGluZGV4KSAlIHRvdGFsLFxuICAgICAgYiwgZCwgZiwgaTtcblxuICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICAgIGN0eC5saW5lV2lkdGggPSBzO1xuICAgIGN0eC5saW5lQ2FwID0gXCJyb3VuZFwiO1xuICAgIGN0eC5saW5lSm9pbiA9IFwicm91bmRcIjtcblxuICAgIGlmIChhIDwgMSkge1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAgICBhICo9IHBhdGgubGVuZ3RoIC8gMiAtIDE7XG4gICAgICBiID0gTWF0aC5mbG9vcihhKTtcbiAgICAgIGEgLT0gYjtcbiAgICAgIGIgKj0gMjtcbiAgICAgIGIgKz0gMjtcblxuICAgICAgY3R4Lm1vdmVUbyhcbiAgICAgICAgY3ggKyAocGF0aFtiIC0gMl0gKiAoMSAtIGEpICsgcGF0aFtiXSAqIGEpICogY3csXG4gICAgICAgIGN5ICsgKHBhdGhbYiAtIDFdICogKDEgLSBhKSArIHBhdGhbYiArIDFdICogYSkgKiBjd1xuICAgICAgKTtcblxuICAgICAgaWYgKGMgPCAxKSB7XG4gICAgICAgIGMgKj0gcGF0aC5sZW5ndGggLyAyIC0gMTtcbiAgICAgICAgZCA9IE1hdGguZmxvb3IoYyk7XG4gICAgICAgIGMgLT0gZDtcbiAgICAgICAgZCAqPSAyO1xuICAgICAgICBkICs9IDI7XG5cbiAgICAgICAgZm9yIChpID0gYjsgaSAhPT0gZDsgaSArPSAyKVxuICAgICAgICAgIGN0eC5saW5lVG8oY3ggKyBwYXRoW2ldICogY3csIGN5ICsgcGF0aFtpICsgMV0gKiBjdyk7XG5cbiAgICAgICAgY3R4LmxpbmVUbyhcbiAgICAgICAgICBjeCArIChwYXRoW2QgLSAyXSAqICgxIC0gYykgKyBwYXRoW2RdICogYykgKiBjdyxcbiAgICAgICAgICBjeSArIChwYXRoW2QgLSAxXSAqICgxIC0gYykgKyBwYXRoW2QgKyAxXSAqIGMpICogY3dcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgZWxzZVxuICAgICAgICBmb3IgKGkgPSBiOyBpICE9PSBwYXRoLmxlbmd0aDsgaSArPSAyKVxuICAgICAgICAgIGN0eC5saW5lVG8oY3ggKyBwYXRoW2ldICogY3csIGN5ICsgcGF0aFtpICsgMV0gKiBjdyk7XG5cbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG5cbiAgICBlbHNlIGlmIChjIDwgMSkge1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAgICBjICo9IHBhdGgubGVuZ3RoIC8gMiAtIDE7XG4gICAgICBkID0gTWF0aC5mbG9vcihjKTtcbiAgICAgIGMgLT0gZDtcbiAgICAgIGQgKj0gMjtcbiAgICAgIGQgKz0gMjtcblxuICAgICAgY3R4Lm1vdmVUbyhjeCArIHBhdGhbMF0gKiBjdywgY3kgKyBwYXRoWzFdICogY3cpO1xuXG4gICAgICBmb3IgKGkgPSAyOyBpICE9PSBkOyBpICs9IDIpXG4gICAgICAgIGN0eC5saW5lVG8oY3ggKyBwYXRoW2ldICogY3csIGN5ICsgcGF0aFtpICsgMV0gKiBjdyk7XG5cbiAgICAgIGN0eC5saW5lVG8oXG4gICAgICAgIGN4ICsgKHBhdGhbZCAtIDJdICogKDEgLSBjKSArIHBhdGhbZF0gKiBjKSAqIGN3LFxuICAgICAgICBjeSArIChwYXRoW2QgLSAxXSAqICgxIC0gYykgKyBwYXRoW2QgKyAxXSAqIGMpICogY3dcbiAgICAgICk7XG5cbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG5cbiAgICBpZiAoZSA8IDEpIHtcbiAgICAgIGUgKj0gcGF0aC5sZW5ndGggLyAyIC0gMTtcbiAgICAgIGYgPSBNYXRoLmZsb29yKGUpO1xuICAgICAgZSAtPSBmO1xuICAgICAgZiAqPSAyO1xuICAgICAgZiArPSAyO1xuXG4gICAgICB0aGlzLmxlYWYoXG4gICAgICAgIGN0eCxcbiAgICAgICAgdCxcbiAgICAgICAgY3ggKyAocGF0aFtmIC0gMl0gKiAoMSAtIGUpICsgcGF0aFtmXSAqIGUpICogY3csXG4gICAgICAgIGN5ICsgKHBhdGhbZiAtIDFdICogKDEgLSBlKSArIHBhdGhbZiArIDFdICogZSkgKiBjdyxcbiAgICAgICAgY3csXG4gICAgICAgIHMsXG4gICAgICAgIGNvbG9yXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgY2xlYXJEYXkoY3R4LCB0LCBjb2xvcikge1xuICAgIGxldCB3ID0gY3R4LmNhbnZhcy53aWR0aCxcbiAgICAgIGggPSBjdHguY2FudmFzLmhlaWdodCxcbiAgICAgIHMgPSBNYXRoLm1pbih3LCBoKTtcblxuICAgIHRoaXMuc3VuKGN0eCwgdCwgdyAqIDAuNSwgaCAqIDAuNSwgcywgcyAqIFNUUk9LRSwgY29sb3IpO1xuICB9XG5cbiAgY2xlYXJOaWdodChjdHgsIHQsIGNvbG9yKSB7XG4gICAgbGV0IHcgPSBjdHguY2FudmFzLndpZHRoLFxuICAgICAgaCA9IGN0eC5jYW52YXMuaGVpZ2h0LFxuICAgICAgcyA9IE1hdGgubWluKHcsIGgpO1xuXG4gICAgdGhpcy5tb29uKGN0eCwgdCwgdyAqIDAuNSwgaCAqIDAuNSwgcywgcyAqIFNUUk9LRSwgY29sb3IpO1xuICB9XG5cbiAgcGFydGx5Q2xvdWR5RGF5KGN0eCwgdCwgY29sb3IpIHtcbiAgICBsZXQgdyA9IGN0eC5jYW52YXMud2lkdGgsXG4gICAgICBoID0gY3R4LmNhbnZhcy5oZWlnaHQsXG4gICAgICBzID0gTWF0aC5taW4odywgaCk7XG5cbiAgICB0aGlzLnN1bihjdHgsIHQsIHcgKiAwLjYyNSwgaCAqIDAuMzc1LCBzICogMC43NSwgcyAqIFNUUk9LRSwgY29sb3IpO1xuICAgIHRoaXMuY2xvdWQoY3R4LCB0LCB3ICogMC4zNzUsIGggKiAwLjYyNSwgcyAqIDAuNzUsIHMgKiBTVFJPS0UsIGNvbG9yKTtcbiAgfVxuXG4gIHBhcnRseUNsb3VkeU5pZ2h0KGN0eCwgdCwgY29sb3IpIHtcbiAgICBsZXQgdyA9IGN0eC5jYW52YXMud2lkdGgsXG4gICAgICBoID0gY3R4LmNhbnZhcy5oZWlnaHQsXG4gICAgICBzID0gTWF0aC5taW4odywgaCk7XG5cbiAgICB0aGlzLm1vb24oY3R4LCB0LCB3ICogMC42NjcsIGggKiAwLjM3NSwgcyAqIDAuNzUsIHMgKiBTVFJPS0UsIGNvbG9yKTtcbiAgICB0aGlzLmNsb3VkKGN0eCwgdCwgdyAqIDAuMzc1LCBoICogMC42MjUsIHMgKiAwLjc1LCBzICogU1RST0tFLCBjb2xvcik7XG4gIH1cblxuICBjbG91ZHkoY3R4LCB0LCBjb2xvcikge1xuICAgIGxldCB3ID0gY3R4LmNhbnZhcy53aWR0aCxcbiAgICAgIGggPSBjdHguY2FudmFzLmhlaWdodCxcbiAgICAgIHMgPSBNYXRoLm1pbih3LCBoKTtcblxuICAgIHRoaXMuY2xvdWQoY3R4LCB0LCB3ICogMC41LCBoICogMC41LCBzLCBzICogU1RST0tFLCBjb2xvcik7XG4gIH1cblxuICByYWluKGN0eCwgdCwgY29sb3IpIHtcbiAgICBsZXQgdyA9IGN0eC5jYW52YXMud2lkdGgsXG4gICAgICBoID0gY3R4LmNhbnZhcy5oZWlnaHQsXG4gICAgICBzID0gTWF0aC5taW4odywgaCk7XG5cbiAgICB0aGlzLl9yYWluKGN0eCwgdCwgdyAqIDAuNSwgaCAqIDAuMzcsIHMgKiAwLjksIHMgKiBTVFJPS0UsIGNvbG9yKTtcbiAgICB0aGlzLmNsb3VkKGN0eCwgdCwgdyAqIDAuNSwgaCAqIDAuMzcsIHMgKiAwLjksIHMgKiBTVFJPS0UsIGNvbG9yKTtcbiAgfVxuXG4gIHNsZWV0KGN0eCwgdCwgY29sb3IpIHtcbiAgICBsZXQgdyA9IGN0eC5jYW52YXMud2lkdGgsXG4gICAgICBoID0gY3R4LmNhbnZhcy5oZWlnaHQsXG4gICAgICBzID0gTWF0aC5taW4odywgaCk7XG5cbiAgICB0aGlzLl9zbGVldChjdHgsIHQsIHcgKiAwLjUsIGggKiAwLjM3LCBzICogMC45LCBzICogU1RST0tFLCBjb2xvcik7XG4gICAgdGhpcy5jbG91ZChjdHgsIHQsIHcgKiAwLjUsIGggKiAwLjM3LCBzICogMC45LCBzICogU1RST0tFLCBjb2xvcik7XG4gIH1cblxuICBzbm93KGN0eCwgdCwgY29sb3IpIHtcbiAgICBsZXQgdyA9IGN0eC5jYW52YXMud2lkdGgsXG4gICAgICBoID0gY3R4LmNhbnZhcy5oZWlnaHQsXG4gICAgICBzID0gTWF0aC5taW4odywgaCk7XG5cbiAgICB0aGlzLl9zbm93KGN0eCwgdCwgdyAqIDAuNSwgaCAqIDAuMzcsIHMgKiAwLjksIHMgKiBTVFJPS0UsIGNvbG9yKTtcbiAgICB0aGlzLmNsb3VkKGN0eCwgdCwgdyAqIDAuNSwgaCAqIDAuMzcsIHMgKiAwLjksIHMgKiBTVFJPS0UsIGNvbG9yKTtcbiAgfVxuXG4gIHdpbmQoY3R4LCB0LCBjb2xvcikge1xuICAgIGxldCB3ID0gY3R4LmNhbnZhcy53aWR0aCxcbiAgICAgIGggPSBjdHguY2FudmFzLmhlaWdodCxcbiAgICAgIHMgPSBNYXRoLm1pbih3LCBoKTtcblxuICAgIHRoaXMuc3dvb3NoKGN0eCwgdCwgdyAqIDAuNSwgaCAqIDAuNSwgcywgcyAqIFNUUk9LRSwgMCwgMiwgY29sb3IpO1xuICAgIHRoaXMuc3dvb3NoKGN0eCwgdCwgdyAqIDAuNSwgaCAqIDAuNSwgcywgcyAqIFNUUk9LRSwgMSwgMiwgY29sb3IpO1xuICB9XG5cbiAgZm9nKGN0eCwgdCwgY29sb3IpIHtcbiAgICBsZXQgdyA9IGN0eC5jYW52YXMud2lkdGgsXG4gICAgICBoID0gY3R4LmNhbnZhcy5oZWlnaHQsXG4gICAgICBzID0gTWF0aC5taW4odywgaCksXG4gICAgICBrID0gcyAqIFNUUk9LRTtcblxuICAgIHRoaXMuZm9nYmFuayhjdHgsIHQsIHcgKiAwLjUsIGggKiAwLjMyLCBzICogMC43NSwgaywgY29sb3IpO1xuXG4gICAgdCAvPSA1MDAwO1xuXG4gICAgbGV0IGEgPSBNYXRoLmNvcygodCkgKiBUQVUpICogcyAqIDAuMDIsXG4gICAgICBiID0gTWF0aC5jb3MoKHQgKyAwLjI1KSAqIFRBVSkgKiBzICogMC4wMixcbiAgICAgIGMgPSBNYXRoLmNvcygodCArIDAuNTApICogVEFVKSAqIHMgKiAwLjAyLFxuICAgICAgZCA9IE1hdGguY29zKCh0ICsgMC43NSkgKiBUQVUpICogcyAqIDAuMDIsXG4gICAgICBuID0gaCAqIDAuOTM2LFxuICAgICAgZSA9IE1hdGguZmxvb3IobiAtIGsgKiAwLjUpICsgMC41LFxuICAgICAgZiA9IE1hdGguZmxvb3IobiAtIGsgKiAyLjUpICsgMC41O1xuXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gICAgY3R4LmxpbmVXaWR0aCA9IGs7XG4gICAgY3R4LmxpbmVDYXAgPSBcInJvdW5kXCI7XG4gICAgY3R4LmxpbmVKb2luID0gXCJyb3VuZFwiO1xuXG4gICAgdGhpcy5saW5lKGN0eCwgYSArIHcgKiAwLjIgKyBrICogMC41LCBlLCBiICsgdyAqIDAuOCAtIGsgKiAwLjUsIGUpO1xuICAgIHRoaXMubGluZShjdHgsIGMgKyB3ICogMC4yICsgayAqIDAuNSwgZiwgZCArIHcgKiAwLjggLSBrICogMC41LCBmKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuYWRkKCk7XG4gICAgdGhpcy5wbGF5KCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5uYXRpdmVFbGVtZW50O1xuXG4gICAgaWYgKCF0aGlzLmNvbG9yKSB7XG4gICAgICB0aGlzLmNvbG9yID0gJyMwMDAnO1xuICAgIH1cblxuICAgIHRoaXMuYWRkKCk7XG4gICAgdGhpcy5wbGF5KCk7XG4gIH1cblxuICBhZGQoKSB7XG4gICAgLy8gUmV0dXJuIG9uIHVuZGVmaW5lZCBjdHguXG4gICAgaWYgKCF0aGlzLmN0eCB8fCAhdGhpcy53ZWF0aGVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IG9iajtcblxuICAgIGxldCBlbCA9IHRoaXMuY3R4O1xuXG4gICAgLy8gRG9lcyBub3RoaW5nIGlmIGNhbnZhcyBuYW1lIGRvZXNuJ3QgZXhpc3RzXG4gICAgaWYgKGVsID09PSBudWxsKVxuICAgICAgcmV0dXJuO1xuXG4gICAgb2JqID0ge1xuICAgICAgZWxlbWVudDogZWwsXG4gICAgICBjb250ZXh0OiBlbC5nZXRDb250ZXh0KFwiMmRcIilcbiAgICB9O1xuXG4gICAgdGhpcy5saXN0LnB1c2gob2JqKTtcbiAgICB0aGlzLmRyYXcob2JqLCBLRVlGUkFNRSk7XG4gIH1cblxuICBkcmF3KG9iaiwgdGltZSkge1xuICAgIHZhciBjYW52YXMgPSBvYmouY29udGV4dC5jYW52YXM7XG5cbiAgICBpZiAodGhpcy5yZXNpemVDbGVhcilcbiAgICAgIGNhbnZhcy53aWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICBlbHNlXG4gICAgICBvYmouY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxuICAgIC8vIENsZWFuIHdlYXRoZXIgaW4gb3JkZXIgdG8gYWRkIG1vcmUgdHlwZXMgYW5kIHJvYnVzdG5lc3NcbiAgICB0aGlzLndlYXRoZXIgPSB0aGlzLndlYXRoZXIucmVwbGFjZSgvW18tXFxzXS8sICcnKS50b1VwcGVyQ2FzZSgpO1xuICAgIFxuICAgIGlmICh0aGlzLndlYXRoZXIuaW5jbHVkZXMoJ0RBWScpICYmIHRoaXMud2VhdGhlci5pbmNsdWRlcygnQ0xPVUQnKSkge1xuICAgICAgdGhpcy53ZWF0aGVyID0gU2t5Y29uc1R5cGVzLlBBUlRMWV9DTE9VRFlfREFZO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLndlYXRoZXIuaW5jbHVkZXMoJ05JR0hUJykgJiYgdGhpcy53ZWF0aGVyLmluY2x1ZGVzKCdDTE9VRCcpKSB7XG4gICAgICB0aGlzLndlYXRoZXIgPSBTa3ljb25zVHlwZXMuUEFSVExZX0NMT1VEWV9OSUdIVDtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy53ZWF0aGVyLmluY2x1ZGVzKCdSQUlOJykpIHtcbiAgICAgIHRoaXMud2VhdGhlciA9IFNreWNvbnNUeXBlcy5SQUlOO1xuICAgIH1cbiAgICBcbiAgICBzd2l0Y2ggKHRoaXMud2VhdGhlcikge1xuICAgICAgY2FzZSBTa3ljb25zVHlwZXMuQ0xFQVJfREFZOlxuICAgICAgICB0aGlzLmNsZWFyRGF5KG9iai5jb250ZXh0LCB0aW1lLCB0aGlzLmNvbG9yKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNreWNvbnNUeXBlcy5DTEVBUl9OSUdIVDpcbiAgICAgICAgdGhpcy5jbGVhck5pZ2h0KG9iai5jb250ZXh0LCB0aW1lLCB0aGlzLmNvbG9yKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNreWNvbnNUeXBlcy5QQVJUTFlfQ0xPVURZX0RBWTpcbiAgICAgICAgdGhpcy5wYXJ0bHlDbG91ZHlEYXkob2JqLmNvbnRleHQsIHRpbWUsIHRoaXMuY29sb3IpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU2t5Y29uc1R5cGVzLlBBUlRMWV9DTE9VRFlfTklHSFQ6XG4gICAgICAgIHRoaXMucGFydGx5Q2xvdWR5TmlnaHQob2JqLmNvbnRleHQsIHRpbWUsIHRoaXMuY29sb3IpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU2t5Y29uc1R5cGVzLkNMT1VEWTpcbiAgICAgICAgdGhpcy5jbG91ZHkob2JqLmNvbnRleHQsIHRpbWUsIHRoaXMuY29sb3IpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU2t5Y29uc1R5cGVzLlJBSU46XG4gICAgICAgIHRoaXMucmFpbihvYmouY29udGV4dCwgdGltZSwgdGhpcy5jb2xvcik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTa3ljb25zVHlwZXMuU0xFRVQ6XG4gICAgICAgIHRoaXMuc2xlZXQob2JqLmNvbnRleHQsIHRpbWUsIHRoaXMuY29sb3IpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU2t5Y29uc1R5cGVzLlNOT1c6XG4gICAgICAgIHRoaXMuc25vdyhvYmouY29udGV4dCwgdGltZSwgdGhpcy5jb2xvcik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTa3ljb25zVHlwZXMuV0lORDpcbiAgICAgICAgdGhpcy53aW5kKG9iai5jb250ZXh0LCB0aW1lLCB0aGlzLmNvbG9yKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNreWNvbnNUeXBlcy5GT0c6XG4gICAgICAgIHRoaXMuZm9nKG9iai5jb250ZXh0LCB0aW1lLCB0aGlzLmNvbG9yKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcGxheSgpIHtcbiAgICB0aGlzLnBhdXNlKCk7XG5cbiAgICB0aGlzLmludGVydmFsID0gdGhpcy5yZXF1ZXN0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgbGV0IG5vdyA9IERhdGUubm93KCksIGk7XG5cbiAgICAgIGZvciAoaSA9IHRoaXMubGlzdC5sZW5ndGg7IGktLTspXG4gICAgICAgIHRoaXMuZHJhdyh0aGlzLmxpc3RbaV0sIG5vdyk7XG4gICAgfSwgMTAwMCAvIDYwKTtcbiAgfVxuXG4gIHBhdXNlKCkge1xuICAgIGlmICh0aGlzLmludGVydmFsKSB7XG4gICAgICB0aGlzLmNhbmNlbEludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuICAgICAgdGhpcy5pbnRlcnZhbCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIGxldCBlbCA9IHRoaXMuY3R4O1xuXG4gICAgZm9yIChsZXQgaSA9IHRoaXMubGlzdC5sZW5ndGg7IGktLTspXG4gICAge1xuICAgICAgaWYgKHRoaXMubGlzdFtpXS5lbGVtZW50ID09PSBlbCkge1xuICAgICAgICB0aGlzLmxpc3Quc3BsaWNlKGksIDEpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==