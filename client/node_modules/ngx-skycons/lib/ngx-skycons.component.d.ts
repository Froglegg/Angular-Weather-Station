import { OnInit, ElementRef, AfterViewInit, SimpleChanges, OnChanges } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare const KEYFRAME = 500;
export declare const STROKE = 0.08;
export declare const TAU: number;
export declare const TWO_OVER_SQRT_2: number;
export declare class SkyconsComponent implements OnInit, AfterViewInit, OnChanges {
    canvas: ElementRef;
    weather: string;
    color: string;
    resizeClear: boolean;
    width: string;
    ctx: any;
    interval: any;
    list: any[];
    raf: any;
    caf: any;
    WIND_PATHS: number[][];
    WIND_OFFSETS: {
        start: number;
        end: number;
    }[];
    private requestInterval;
    private cancelInterval;
    private circle;
    line(ctx: any, ax: any, ay: any, bx: any, by: any): void;
    private puff;
    private puffs;
    private cloud;
    sun(ctx: any, t: any, cx: any, cy: any, cw: any, s: any, color: any): void;
    private moon;
    private _rain;
    private _sleet;
    private _snow;
    private fogbank;
    private leaf;
    private swoosh;
    constructor();
    clearDay(ctx: any, t: any, color: any): void;
    clearNight(ctx: any, t: any, color: any): void;
    partlyCloudyDay(ctx: any, t: any, color: any): void;
    partlyCloudyNight(ctx: any, t: any, color: any): void;
    cloudy(ctx: any, t: any, color: any): void;
    rain(ctx: any, t: any, color: any): void;
    sleet(ctx: any, t: any, color: any): void;
    snow(ctx: any, t: any, color: any): void;
    wind(ctx: any, t: any, color: any): void;
    fog(ctx: any, t: any, color: any): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    add(): void;
    draw(obj: any, time: any): void;
    play(): void;
    pause(): void;
    remove(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SkyconsComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SkyconsComponent, "sc-skycons", never, {
    "color": "color";
    "weather": "weather";
    "resizeClear": "resizeClear";
    "width": "width";
}, {}, never>;
}

//# sourceMappingURL=ngx-skycons.component.d.ts.map