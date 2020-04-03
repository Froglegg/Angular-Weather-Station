import { Component, ViewChild, Input, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const SkyconsTypes = {
    CLEAR_DAY: 'CLEARDAY',
    CLEAR_NIGHT: 'CLEARNIGHT',
    PARTLY_CLOUDY_DAY: 'PARTLYCLOUDYDAY',
    PARTLY_CLOUDY_NIGHT: 'PARTLYCLOUDYNIGHT',
    CLOUDY: 'CLOUDY',
    RAIN: 'RAIN',
    SLEET: 'SLEET',
    SNOW: 'SNOW',
    WIND: 'WIND',
    FOG: 'FOG',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const KEYFRAME = 500;
/** @type {?} */
const STROKE = 0.08;
/** @type {?} */
const TAU = 2.0 * Math.PI;
/** @type {?} */
const TWO_OVER_SQRT_2 = 2.0 / Math.sqrt(2);
class SkyconsComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SkyconsModule {
}
SkyconsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SkyconsComponent],
                imports: [],
                exports: [SkyconsComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { KEYFRAME, STROKE, TAU, TWO_OVER_SQRT_2, SkyconsComponent, SkyconsTypes, SkyconsModule };

//# sourceMappingURL=ngx-skycons.js.map