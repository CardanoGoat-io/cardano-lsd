/**
 * A library cardano-lsd frontend components and animations. For details, see {@link https://github.com/CardanoGoat-io/cardano-lsd | github}
 *
 * @remarks
 * The `cardano-lsd` defines the {@link CardaNostraAdaSpinner} class. To draw the spinner, call {@link CardaNostraAdaSpinner.attachSVG | attachSVG() function}.
 *
 * @packageDocumentation
 */

/**
 * Create a new ada spinner to attach to SVG.
 *
 * @remarks
 * This method is part of the cardano-lsd animation library.
 *
 * @typeParam spinnerSettings
 * @returns A new CardaNostraAdaSpinner
 *
 * @public
 */
export declare class CardaNostraAdaSpinner {
    private _htmlId;
    private _color;
    private _delay;
    private _duration;
    constructor({ id, color, delay, duration }: spinnerSetting);
    /**
     * Get Element Id.
     *
     * @example
     *
     * ```ts
     * let spinner = new CardaNostraAdaSpinner({id="element-id"});
     * const spinnerId = spinner.htmlId;
     * ```
     * @readonly
     */
    get htmlId(): string;
    set htmlId(value: string);
    /**
     * Get Element Color.
     *
     * @example
     *
     * ```ts
     * let spinner = new CardaNostraAdaSpinner({id="element-id", color:"green"});
     * const spinnerColor = spinner.color;
     * // green
     * ```
     * @readonly
     */
    get color(): string;
    set color(value: string);
    /**
     * Get Animation Delay.
     *
     * @example
     *
     * ```ts
     * let spinner = new CardaNostraAdaSpinner({id="element-id", delay:0.5});
     * const spinnerDelay = spinner.delay;
     * // 0.5
     * ```
     * @readonly
     */
    get delay(): number;
    set delay(value: number);
    /**
     * Get Animation Duration.
     *
     * @example
     *
     * ```ts
     * let spinner = new CardaNostraAdaSpinner({id="element-id", duration:10});
     * const spinnerDuration = spinner.duration;
     * // 10
     * ```
     * @readonly
     */
    get duration(): number;
    set duration(value: number);
    /**
     * Internal _animate function
     *
     * @param svgContainer - SVG Element
     *
     * @eventProperty
     *
     * @internal
     *
     */
    protected _animate(svgContainer: SVGSVGElement): Promise<void>;
    /**
     * Attach SVG and run animation on CardaNostraAdaSpinner by Element Id.
     *
     * @remarks
     * This method attaches and animates the element.
     *
     * @example
     *
     * ```ts
     * let spinner = new CardaNostraAdaSpinner({id="element-id"});
     * // after page load attach svg to animate
     * spinner.attachSVG();
     * ```
     *
     * @eventProperty
     *
     * @public
     */
    attachSVG(): Promise<void>;
}

/**
 * Interface object spinnerSetting.
 * @param id - Element Id
 * @param color - Element Color
 * @param delay - Animation Delay Start
 * @param duration - Animation Length
 *
 */
declare type spinnerSetting = {
    id: string;
    color?: string;
    delay?: number;
    duration?: number;
};

export { }
