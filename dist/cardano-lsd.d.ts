export declare class CardaNostraAdaSpinner {
    private _htmlId;
    private _color;
    private _delay;
    private _duration;
    constructor({ id, color, delay, duration }: spinnerSetting);
    get htmlId(): string;
    set htmlId(value: string);
    get color(): string;
    set color(value: string);
    get delay(): number;
    set delay(value: number);
    get duration(): number;
    set duration(value: number);
    protected _animate(svgContainer: SVGSVGElement): Promise<void>;
    attachSVG(): Promise<void>;
}

declare interface spinnerSetting {
    id: string;
    color?: string;
    delay?: number;
    duration?: number;
}

export { }
