declare namespace $ { }
export = $;

declare namespace $ {
    namespace $$ {
        let $$: typeof $;
    }
    type $mol_ambient_context = (typeof globalThis) & (typeof $.$$) & (typeof $);
    function $mol_ambient(this: $mol_ambient_context, overrides: Partial<$mol_ambient_context>): $mol_ambient_context;
}

declare namespace $ {
    function $mol_class<Class extends any>(Class: Class): Class;
}

declare namespace $ {
    class $mol_object2 extends Object {
        static $: $mol_ambient_context;
        static readonly $$: $mol_ambient_context;
        $: typeof $mol_object2.$;
        readonly $$: $mol_ambient_context;
        constructor(init?: (obj: any) => void);
        static make<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: Instance) => void): Instance;
        static toString(): any;
        destructor(): void;
        toString(): any;
        toJSON(): any;
    }
}

declare namespace $ {
    class $mol_wrapper extends $mol_object2 {
        static wrap: (task: (...ags: any[]) => any) => (...ags: any[]) => any;
        static run<Result>(task: () => Result): Result;
        static func<Args extends any[], Result, Host = void>(func: (this: Host, ...args: Args) => Result): (this: Host, ...args: Args) => Result;
        static readonly class: <Class extends new (...args: any[]) => any>(Class: Class) => Class;
        static readonly method: <Host, Field extends keyof Host, Args extends any[], Result>(obj: Host, name: Field, descr: TypedPropertyDescriptor<(this: Host, ...args: Args) => Result>) => TypedPropertyDescriptor<(this: Host, ...args: Args) => Result>;
    }
}

declare namespace $ {
    function $mol_dev_format_register(config: {
        header: (val: any, config: any) => any;
        hasBody: (val: any, config: any) => false;
    } | {
        header: (val: any, config: any) => any;
        hasBody: (val: any, config: any) => boolean;
        body: (val: any, config: any) => any;
    }): void;
    let $mol_dev_format_head: symbol;
    let $mol_dev_format_body: symbol;
    function $mol_dev_format_native(obj: any): any;
    function $mol_dev_format_auto(obj: any): any;
    function $mol_dev_format_element(element: string, style: object, ...content: any[]): any[];
    let $mol_dev_format_div: any;
    let $mol_dev_format_span: any;
    let $mol_dev_format_ol: any;
    let $mol_dev_format_li: any;
    let $mol_dev_format_table: any;
    let $mol_dev_format_tr: any;
    let $mol_dev_format_td: any;
    let $mol_dev_format_accent: any;
    let $mol_dev_format_strong: any;
    let $mol_dev_format_string: any;
    let $mol_dev_format_shade: any;
    let $mol_dev_format_indent: any;
}

declare namespace $ {
    function $mol_maybe<Value>(value: Value | null | undefined): Value[];
}

declare namespace $ {
    function $mol_log(path: any, ...values: any[]): void;
}

declare namespace $ {
    function $mol_log_context(next?: () => void): () => void;
}

declare namespace $ {
    function $mol_log_debug(next?: string): string;
}

declare namespace $ {
    var $mol_log_filter: (next?: string) => string;
}

declare namespace $ {
    function $mol_log_group<Task extends Function, This>(name: string, task: Task): Task;
}

declare namespace $ {
    class $mol_log2 extends $mol_wrapper {
        readonly host: any;
        readonly id: string;
        readonly args: any[];
        static current: $mol_log2;
        static wrap<This extends {
            $: $mol_ambient_context;
        }, Args extends any[], Result>(task: (this: This, ...args: Args) => Result): (this: This, ...args: Args) => any;
        constructor(host: any, id: string, args: any[]);
        stream: $mol_log2_line[];
        flush(): void;
        info(...values: any[]): void;
        static info(...values: any[]): void;
        /**
         * Enable all logs
         *
         * 	$mol_log2.excludes = []
         *
         * Exclude all atom logs:
         *
         * 	$mol_log2.excludes = [ , /˸|🠈|⏭|⏯|►|💤|☍|☌|✓|✔|✘|🕱|�/ ]
         *
         * Disable logs:
         *
         * 	$mol_log2.excludes = null
         */
        static excludes: RegExp[];
        static prefix: any[];
    }
    class $mol_log2_indent extends $mol_wrapper {
        static wrap<This extends {
            $: $mol_ambient_context;
        }, Args extends any[], Result>(task: (this: This, ...args: Args) => Result): (this: This, ...args: Args) => any;
    }
    class $mol_log2_table extends $mol_log2 {
    }
    class $mol_log2_hidden extends $mol_log2 {
        flush(): void;
    }
    class $mol_log2_line extends Array<any> {
        constructor(...items: any[]);
    }
    class $mol_log2_token extends Array<any> {
        constructor(...items: any[]);
    }
    let $mol_log2_token_empty: $mol_log2_token;
    let $mol_log2_token_indent: $mol_log2_token;
    let $mol_log2_legend: $mol_log2_table;
}

declare namespace $ {
}

declare namespace $ {
    function $mol_fail(error: any): never;
}

declare namespace $ {
    function $mol_fail_hidden(error: any): never;
}

declare namespace $ {
    class $mol_after_frame extends $mol_object2 {
        task: () => void;
        id: any;
        constructor(task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    function $mol_compare_any(a: any, b: any): boolean;
}

declare namespace $ {
    const $mol_conform_stack: any[];
    function $mol_conform<Target, Source>(target: Target, source: Source): Target;
    const $mol_conform_handlers: WeakMap<Object, (target: any, source: any) => any>;
    function $mol_conform_handler<Class>(cl: {
        new (...args: any[]): Class;
    }, handler: (target: Class, source: Class) => Class): void;
}

declare namespace $ {
    function $mol_array_trim<Item>(array: Item[]): Item[];
}

declare namespace $ {
    const enum $mol_fiber_status {
        persist = -3,
        actual = -2,
        doubt = -1,
        obsolete = 0
    }
    function $mol_fiber_defer<Value = void>(calculate: () => Value): $mol_fiber<any>;
    function $mol_fiber_func<This, Args extends any[], Result>(calculate: (this: This, ...args: Args) => Result): (this: This, ...args: Args) => Result;
    function $mol_fiber_root<Calculate extends (this: This, ...args: any[]) => Result, Result = void, This = void>(calculate: Calculate): Calculate;
    function $mol_fiber_method<Host, Value>(obj: Host, name: keyof Host, descr: TypedPropertyDescriptor<(this: Host, ...args: any[]) => Value>): TypedPropertyDescriptor<(this: Host, ...args: any[]) => Value>;
    function $mol_fiber_sync<Args extends any[], Value = void, This = void>(request: (this: This, ...args: Args) => PromiseLike<Value>): (...args: Args) => Value;
    function $mol_fiber_warp(): Promise<void>;
    function $mol_fiber_fence(func: () => any): any;
    function $mol_fiber_unlimit<Result>(task: () => Result): Result;
    class $mol_fiber_solid extends $mol_wrapper {
        static func<This, Args extends any[], Result>(task: (this: This, ...args: Args) => Result): (this: This, ...args: Args) => Result;
    }
    class $mol_fiber<Value = any> extends $mol_wrapper {
        static wrap<This, Args extends any[], Result>(task: (this: This, ...args: Args) => Result): (this: This, ...args: Args) => any;
        static quant: number;
        static deadline: number;
        static liveline: number;
        static current: $mol_fiber<any>;
        static scheduled: $mol_after_frame;
        static queue: (() => PromiseLike<any>)[];
        static tick(): Promise<void>;
        static schedule(): Promise<any>;
        value: Value;
        error: Error | PromiseLike<Value>;
        cursor: $mol_fiber_status;
        masters: (number | $mol_fiber<any>)[];
        calculate: () => Value;
        schedule(): void;
        wake(): Value;
        push(value: Value): Value;
        fail(error: Error | PromiseLike<Value>): Error | PromiseLike<Value>;
        wait(promise: PromiseLike<Value>): PromiseLike<Value>;
        complete(): void;
        complete_master(master_index: number): void;
        pull(): void;
        update(): void;
        get(): Value;
        limit(): void;
        master: $mol_fiber;
        rescue(master: $mol_fiber, master_index: number): void;
        obey(master: $mol_fiber, master_index: number): number;
        lead(slave: $mol_fiber, master_index: number): number;
        dislead(slave_index: number): void;
        disobey(master_index: number): void;
        obsolete_slaves(): void;
        obsolete(master_index: number): void;
        forget(): void;
        abort(): boolean;
        destructor(): void;
    }
    let $mol_fiber_token_runned: $mol_log2_token;
    let $mol_fiber_token_changed1: $mol_log2_token;
    let $mol_fiber_token_changed2: $mol_log2_token;
    let $mol_fiber_token_actualized: $mol_log2_token;
    let $mol_fiber_token_sleeped: $mol_log2_token;
    let $mol_fiber_token_failed: $mol_log2_token;
    let $mol_fiber_token_destructed: $mol_log2_token;
}

declare namespace $ {
    const $mol_owning_map: WeakMap<any, any>;
    function $mol_owning_allow<Having>(having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_get<Having, Owner extends object>(having: Having, Owner?: {
        new (): Owner;
    }): Owner | null;
    function $mol_owning_check<Owner, Having>(owner: Owner, having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_catch<Owner, Having>(owner: Owner, having: Having): boolean;
}

declare namespace $ {
    function $mol_atom2_value<Value>(task: () => Value): Value;
    class $mol_atom2<Value = any> extends $mol_fiber<Value> {
        static readonly current: $mol_atom2<any>;
        static cached: boolean;
        static reap_task: $mol_fiber<any>;
        static reap_queue: $mol_atom2<any>[];
        static reap(atom: $mol_atom2): void;
        slaves: (number | $mol_fiber<any>)[];
        rescue(master: $mol_atom2, cursor: number): void;
        get(): Value;
        pull(): void | Value;
        _value: Value;
        value: Value;
        _error: Error | PromiseLike<Value>;
        error: null | Error | PromiseLike<Value>;
        put(next: Value): Value;
        complete_master(master_index: number): void;
        obey(master: $mol_fiber, master_index: number): number;
        lead(slave: $mol_fiber, master_index: number): number;
        dislead(slave_index: number): void;
        obsolete(master_index?: number): void;
        doubt(master_index?: number): void;
        obsolete_slaves(): void;
        doubt_slaves(): void;
        readonly fresh: (this: void) => void;
        readonly alone: boolean;
        readonly derived: boolean;
        destructor(): void;
    }
    let $mol_atom2_token_revalidation: $mol_log2_token;
    let $mol_atom2_token_stumbled: $mol_log2_token;
    let $mol_atom2_token_revalidated: $mol_log2_token;
    let $mol_atom2_token_leaded: $mol_log2_token;
    let $mol_atom2_token_disleaded: $mol_log2_token;
    let $mol_atom2_token_obsoleted: $mol_log2_token;
    let $mol_atom2_token_doubted: $mol_log2_token;
}

declare namespace $ {
    function $mol_const<Value>(value: Value): {
        (): Value;
        '()': Value;
    };
}

declare namespace $ {
    function $mol_atom2_field<Host extends object, Field extends keyof Host, Value extends Host[Field]>(proto: Host, name: Field, descr?: TypedPropertyDescriptor<Value>): any;
}

declare namespace $ {
    namespace $$ { }
    const $mol_object_field: unique symbol;
    class $mol_object extends Object {
        static $: $mol_ambient_context;
        static readonly $$: $mol_ambient_context;
        _$: $mol_ambient_context;
        $: $mol_ambient_context;
        readonly $$: $mol_ambient_context;
        static make<Instance>(this: {
            new (): Instance;
        }, config: Partial<Instance>): Instance;
        static toString(): string;
        toString(): string;
        toJSON(): string;
        destructor(): void;
        [Symbol.toStringTag]: string;
    }
}

declare namespace $ {
    class $mol_mem_force extends Object {
        constructor();
        $mol_mem_force: boolean;
        static $mol_mem_force: boolean;
        static toString(): string;
    }
    class $mol_mem_force_cache extends $mol_mem_force {
    }
    class $mol_mem_force_update extends $mol_mem_force {
    }
    class $mol_mem_force_fail extends $mol_mem_force_cache {
    }
}

declare namespace $ {
    function $mol_mem<Host extends object, Field extends keyof Host, Value>(proto: Host, name: Field, descr?: TypedPropertyDescriptor<(next?: Value, force?: $mol_mem_force) => Value>): any;
}

declare namespace $ {
    class $mol_window extends $mol_object {
        static size(next?: {
            width: number;
            height: number;
        }, force?: $mol_mem_force): {
            width: number;
            height: number;
        };
    }
}

declare namespace $ {
    function $mol_dict_key(value: any): any;
    class $mol_dict<Key, Value> extends Map<Key, Value> {
        get(key: Key): Value;
        has(key: Key): boolean;
        set(key: Key, value: Value): this;
        delete(key: Key): boolean;
        forEach(back: (value: Value, key: Key, dict: Map<Key, Value>) => void, context?: any): void;
        [Symbol.iterator](): {
            [Symbol.iterator](): any;
            next(): IteratorResult<[Key, Value], any>;
        };
    }
}

declare namespace $ {
    function $mol_mem_key<Host extends object, Field extends keyof Host, Key, Value>(proto: Host, name: Field, descr?: TypedPropertyDescriptor<(key: Key, next?: Value, force?: $mol_mem_force) => Value>): any;
}

declare namespace $ {
    function $mol_atom2_autorun(calculate: () => any): $mol_atom2<unknown>;
}

declare namespace $ {
    var $mol_dom_context: Window & Pick<typeof globalThis, 'Node' | 'Element' | 'HTMLElement' | 'XMLHttpRequest' | 'DOMParser' | 'XMLSerializer'>;
}

declare namespace $ {
}

declare namespace $ {
    class $mol_defer extends $mol_object {
        run: () => void;
        constructor(run: () => void);
        destructor(): void;
        static all: $mol_defer[];
        static timer: any;
        static scheduleNative: (handler: () => void) => any;
        static schedule(): void;
        static unschedule(): void;
        static add(defer: $mol_defer): void;
        static drop(defer: $mol_defer): void;
        static run(): void;
    }
}

declare namespace $ {
    class $mol_after_tick extends $mol_object2 {
        task: () => void;
        promise: any;
        cancelled: boolean;
        constructor(task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    class $mol_view_selection extends $mol_object {
        static focused(next?: Element[]): Element[];
        static focus(event: FocusEvent): void;
        static blur(event: FocusEvent): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    function $mol_dom_render_attributes(el: Element, attrs: {
        [key: string]: string | number | boolean | null;
    }): void;
}

declare namespace $ {
    function $mol_fail_catch(error: object): boolean;
}

declare namespace $ {
    function $mol_dom_render_styles(el: Element, styles: {
        [key: string]: string | number;
    }): void;
}

declare namespace $ {
    function $mol_dom_render_fields(el: Element, fields: {
        [key: string]: any;
    }): void;
}

declare namespace $ {
    function $mol_dom_render_children(el: Element, childNodes: NodeList | Array<Node | string | null>): void;
}

declare namespace $ {
    function $mol_func_name(func: Function): string;
    function $mol_func_name_from<Target extends Function>(target: Target, source: Function): Target;
}

declare namespace $ {
    function $mol_deprecated<Host extends {
        constructor: Function;
    }, Method extends Function>(message: string): (host: Host, field: string, descr: TypedPropertyDescriptor<Method>) => void;
}

declare namespace $ {
    type $mol_view_content = $mol_view | Node | string | number | boolean;
    function $mol_view_visible_width(): number;
    function $mol_view_visible_height(): number;
    function $mol_view_state_key(suffix: string): string;
    class $mol_view extends $mol_object {
        static Root(id: number): $mol_view;
        autorun(): $mol_atom2<unknown>;
        static autobind(): void;
        title(): string;
        focused(next?: boolean): boolean;
        state_key(suffix?: string): string;
        dom_name(): string;
        dom_name_space(): string;
        sub(): readonly (string | number | boolean | Node | $mol_view)[];
        sub_visible(): readonly (string | number | boolean | Node | $mol_view)[];
        minimal_width(): number;
        minimal_height(): number;
        content_height(): number;
        dom_id(): string;
        dom_node(next?: Element): Element;
        dom_tree(next?: Element): Element;
        dom_node_actual(): Element;
        render(): void;
        static view_classes(): (typeof $mol_view)[];
        view_names_owned(): string[];
        view_names(): string[];
        attr_static(): {
            [key: string]: string | number | boolean | null;
        };
        attr(): {
            [key: string]: string | number | boolean | null;
        };
        style(): {
            [key: string]: string | number;
        };
        field(): {
            [key: string]: any;
        };
        event(): {
            [key: string]: (event: Event) => void;
        };
        event_async(): {
            [key: string]: (event: Event) => void;
        };
        plugins(): readonly $mol_view[];
    }
}

interface Window {
    cordova: any;
}
declare namespace $ {
}

declare namespace $ {
    enum $mol_keyboard_code {
        backspace = 8,
        tab = 9,
        enter = 13,
        shift = 16,
        ctrl = 17,
        alt = 18,
        pause = 19,
        capsLock = 20,
        escape = 27,
        space = 32,
        pageUp = 33,
        pageDown = 34,
        end = 35,
        home = 36,
        left = 37,
        up = 38,
        right = 39,
        down = 40,
        insert = 45,
        delete = 46,
        key0 = 48,
        key1 = 49,
        key2 = 50,
        key3 = 51,
        key4 = 52,
        key5 = 53,
        key6 = 54,
        key7 = 55,
        key8 = 56,
        key9 = 57,
        A = 65,
        B = 66,
        C = 67,
        D = 68,
        E = 69,
        F = 70,
        G = 71,
        H = 72,
        I = 73,
        J = 74,
        K = 75,
        L = 76,
        M = 77,
        N = 78,
        O = 79,
        P = 80,
        Q = 81,
        R = 82,
        S = 83,
        T = 84,
        U = 85,
        V = 86,
        W = 87,
        X = 88,
        Y = 89,
        Z = 90,
        metaLeft = 91,
        metaRight = 92,
        select = 93,
        numpad0 = 96,
        numpad1 = 97,
        numpad2 = 98,
        numpad3 = 99,
        numpad4 = 100,
        numpad5 = 101,
        numpad6 = 102,
        numpad7 = 103,
        numpad8 = 104,
        numpad9 = 105,
        multiply = 106,
        add = 107,
        subtract = 109,
        decimal = 110,
        divide = 111,
        F1 = 112,
        F2 = 113,
        F3 = 114,
        F4 = 115,
        F5 = 116,
        F6 = 117,
        F7 = 118,
        F8 = 119,
        F9 = 120,
        F10 = 121,
        F11 = 122,
        F12 = 123,
        numLock = 144,
        scrollLock = 145,
        semicolon = 186,
        equals = 187,
        comma = 188,
        dash = 189,
        period = 190,
        forwardSlash = 191,
        graveAccent = 192,
        bracketOpen = 219,
        slashBack = 220,
        slashBackLeft = 226,
        bracketClose = 221,
        quoteSingle = 222
    }
}

declare namespace $ {
    class $mol_button extends $mol_view {
        /**
         *  ```
         *  enabled true
         *  ```
         **/
        enabled(): boolean;
        /**
         *  ```
         *  minimal_height 40
         *  ```
         **/
        minimal_height(): number;
        /**
         *  ```
         *  click?event null
         *  ```
         **/
        click(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event_click?event null
         *  ```
         **/
        event_click(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event *
         *  	^
         *  	click?event <=> event_activate?event
         *  	keypress?event <=> event_key_press?event
         *  ```
         **/
        event(): {
            "click": (event?: any) => any;
            "keypress": (event?: any) => any;
        };
        /**
         *  ```
         *  event_activate?event null
         *  ```
         **/
        event_activate(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event_key_press?event null
         *  ```
         **/
        event_key_press(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  attr *
         *  	^
         *  	disabled <= disabled
         *  	role \button
         *  	tabindex <= tab_index
         *  	title <= hint
         *  ```
         **/
        attr(): {
            "disabled": boolean;
            "role": string;
            "tabindex": number;
            "title": string;
        };
        /**
         *  ```
         *  disabled false
         *  ```
         **/
        disabled(): boolean;
        /**
         *  ```
         *  tab_index 0
         *  ```
         **/
        tab_index(): number;
        /**
         *  ```
         *  hint \
         *  ```
         **/
        hint(): string;
        /**
         *  ```
         *  sub /$mol_view_content <= title
         *  ```
         **/
        sub(): readonly (string | number | boolean | Node | $mol_view)[];
    }
}

declare namespace $.$$ {
    class $mol_button extends $.$mol_button {
        disabled(): boolean;
        event_activate(next: Event): void;
        event_key_press(event: KeyboardEvent): void;
        tab_index(): number;
    }
}

declare namespace $ {
    class $mol_button_typed extends $mol_button {
    }
}
declare namespace $ {
    class $mol_button_major extends $mol_button_typed {
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_theme \$mol_theme_accent
         *  ```
         **/
        attr(): {
            "mol_theme": string;
            "disabled": boolean;
            "role": string;
            "tabindex": number;
            "title": string;
        };
    }
}
declare namespace $ {
    class $mol_button_minor extends $mol_button_typed {
    }
}

declare namespace $ {
    class $mol_scroll extends $mol_view {
        /**
         *  ```
         *  minimal_height 0
         *  ```
         **/
        minimal_height(): number;
        /**
         *  ```
         *  field *
         *  	^
         *  	scrollTop <= scroll_top?val
         *  	scrollLeft <= scroll_left?val
         *  	scrollBottom <= scroll_bottom?val
         *  	scrollRight <= scroll_right?val
         *  ```
         **/
        field(): {
            "scrollTop": any;
            "scrollLeft": any;
            "scrollBottom": any;
            "scrollRight": any;
        };
        /**
         *  ```
         *  scroll_top?val 0
         *  ```
         **/
        scroll_top(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  scroll_left?val 0
         *  ```
         **/
        scroll_left(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  scroll_bottom?val 0
         *  ```
         **/
        scroll_bottom(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  scroll_right?val 0
         *  ```
         **/
        scroll_right(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event *
         *  	^
         *  	scroll?event <=> event_scroll?event
         *  ```
         **/
        event(): {
            "scroll": (event?: any) => any;
        };
        /**
         *  ```
         *  event_scroll?event null
         *  ```
         **/
        event_scroll(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  Strut $mol_view style * transform <= strut_transform
         *  ```
         **/
        Strut(): $mol_view;
        /**
         *  ```
         *  strut_transform \
         *  ```
         **/
        strut_transform(): string;
    }
}

declare namespace $.$$ {
    function $mol_scroll_top(): number;
    function $mol_scroll_left(): number;
    function $mol_scroll_moving(): boolean;
    class $mol_scroll extends $.$mol_scroll {
        scroll_bottom(next?: number): number;
        scroll_right(next?: number): number;
        event_scroll(next?: Event): void;
        readonly $$: $mol_ambient_context;
        strut_transform(): string;
        sub_visible(): readonly (string | number | boolean | Node | $mol_view)[];
    }
}

declare namespace $ {
    class $mol_state_session<Value> extends $mol_object {
        static 'native()': Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
        static native(): Storage | {
            getItem(key: string): any;
            setItem(key: string, value: string): void;
            removeItem(key: string): void;
        };
        static value<Value>(key: string, next?: Value): Value;
        prefix(): string;
        value(key: string, next?: Value): Value;
    }
}

declare namespace $ {
    class $mol_page extends $mol_view {
        /**
         *  ```
         *  sub /
         *  	<= Head
         *  	<= Body
         *  	<= Foot
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  Head $mol_view
         *  	attr * mol_theme \$mol_theme_base
         *  	sub <= head
         *  ```
         **/
        Head(): $mol_view;
        /**
         *  ```
         *  head /
         *  	<= Title
         *  	<= Tools
         *  ```
         **/
        head(): readonly any[];
        /**
         *  ```
         *  Title $mol_button
         *  	sub / <= title
         *  	event_click?val <=> event_top?val
         *  ```
         **/
        Title(): $$.$mol_button;
        /**
         *  ```
         *  event_top?val null
         *  ```
         **/
        event_top(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  Tools $mol_view sub <= tools
         *  ```
         **/
        Tools(): $mol_view;
        /**
         *  ```
         *  tools /$mol_view_content
         *  ```
         **/
        tools(): readonly (string | number | boolean | Node | $mol_view)[];
        /**
         *  ```
         *  Body $mol_scroll
         *  	scroll_top?val <=> body_scroll_top?val
         *  	sub <= body
         *  ```
         **/
        Body(): $$.$mol_scroll;
        /**
         *  ```
         *  body_scroll_top?val 0
         *  ```
         **/
        body_scroll_top(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  body /$mol_view_content
         *  ```
         **/
        body(): readonly (string | number | boolean | Node | $mol_view)[];
        /**
         *  ```
         *  Foot $mol_view
         *  	attr * mol_theme \$mol_theme_base
         *  	sub <= foot
         *  ```
         **/
        Foot(): $mol_view;
        /**
         *  ```
         *  foot /$mol_view
         *  ```
         **/
        foot(): readonly $mol_view[];
    }
}

declare namespace $.$$ {
    class $mol_page extends $.$mol_page {
        body_scroll_top(next?: number): number;
    }
}

declare namespace $ {
    class $mol_time_base {
        static patterns: any;
        static formatter(pattern: string): any;
        toString(pattern: string): string;
    }
}

declare namespace $ {
    type $mol_time_duration_config = number | string | {
        year?: number;
        month?: number;
        day?: number;
        hour?: number;
        minute?: number;
        second?: number;
    };
    class $mol_time_duration extends $mol_time_base {
        constructor(config?: $mol_time_duration_config);
        readonly year: number;
        readonly month: number;
        readonly day: number;
        readonly hour: number;
        readonly minute: number;
        readonly second: number;
        summ(config: $mol_time_duration_config): $mol_time_duration;
        mult(numb: number): $mol_time_duration;
        count(config: $mol_time_duration_config): number;
        valueOf(): number;
        toJSON(): string;
        toString(pattern?: string): string;
        static patterns: {
            '#Y': (duration: $mol_time_duration) => string;
            '#M': (duration: $mol_time_duration) => string;
            '#D': (duration: $mol_time_duration) => string;
            '#h': (duration: $mol_time_duration) => string;
            '#m': (duration: $mol_time_duration) => string;
            '#s': (duration: $mol_time_duration) => string;
            '+hh': (duration: $mol_time_duration) => string;
            'mm': (duration: $mol_time_duration) => string;
        };
    }
}

declare namespace $ {
    type $mol_time_moment_config = number | Date | string | {
        year?: number;
        month?: number;
        day?: number;
        hour?: number;
        minute?: number;
        second?: number;
        offset?: $mol_time_duration_config;
    };
    class $mol_time_moment extends $mol_time_base {
        constructor(config?: $mol_time_moment_config);
        readonly year: number | undefined;
        readonly month: number | undefined;
        readonly day: number | undefined;
        readonly hour: number | undefined;
        readonly minute: number | undefined;
        readonly second: number | undefined;
        readonly offset: $mol_time_duration | undefined;
        readonly weekday: number;
        private _native;
        readonly native: Date;
        private _normal;
        readonly normal: $mol_time_moment;
        merge(config: $mol_time_moment_config): $mol_time_moment;
        shift(config: $mol_time_duration_config): $mol_time_moment;
        toOffset(config: $mol_time_duration_config): $mol_time_moment;
        valueOf(): number;
        toJSON(): string;
        toString(pattern?: string): string;
        static patterns: {
            'YYYY': (moment: $mol_time_moment) => string;
            'AD': (moment: $mol_time_moment) => string;
            'YY': (moment: $mol_time_moment) => string;
            'Month': (moment: $mol_time_moment) => string;
            'DD Month': (moment: $mol_time_moment) => string;
            'D Month': (moment: $mol_time_moment) => string;
            'Mon': (moment: $mol_time_moment) => string;
            'DD Mon': (moment: $mol_time_moment) => string;
            'D Mon': (moment: $mol_time_moment) => string;
            '-MM': (moment: $mol_time_moment) => string;
            'MM': (moment: $mol_time_moment) => string;
            'M': (moment: $mol_time_moment) => string;
            'WeekDay': (moment: $mol_time_moment) => string;
            'WD': (moment: $mol_time_moment) => string;
            '-DD': (moment: $mol_time_moment) => string;
            'DD': (moment: $mol_time_moment) => string;
            'D': (moment: $mol_time_moment) => string;
            'Thh': (moment: $mol_time_moment) => string;
            'hh': (moment: $mol_time_moment) => string;
            'h': (moment: $mol_time_moment) => string;
            ':mm': (moment: $mol_time_moment) => string;
            'mm': (moment: $mol_time_moment) => string;
            'm': (moment: $mol_time_moment) => string;
            ':ss': (moment: $mol_time_moment) => string;
            'ss': (moment: $mol_time_moment) => string;
            's': (moment: $mol_time_moment) => string;
            '.sss': (moment: $mol_time_moment) => string;
            'sss': (moment: $mol_time_moment) => string;
            'Z': (moment: $mol_time_moment) => string;
        };
    }
}

declare namespace $ {
    class $mol_unit extends $mol_object {
        'valueOf()': number;
        constructor(value?: number);
        prefix(): string;
        postfix(): string;
        valueOf(): number;
        delimiter(): string;
        value_view(): string;
        toString(): string;
        static summ(a: $mol_unit, b: $mol_unit): any;
        mult(m: number): this;
    }
}

declare namespace $ {
    class $mol_unit_money extends $mol_unit {
    }
    class $mol_unit_money_usd extends $mol_unit_money {
        prefix(): string;
    }
    class $mol_unit_money_rur extends $mol_unit_money {
        postfix(): string;
    }
}

declare namespace $ {
    function $mol_stub_select_random<Value>(list: Value[]): Value;
    function $mol_stub_strings(prefix?: string, count?: number, length?: number): any[];
    function $mol_stub_code(length?: number): string;
    function $mol_stub_price(max?: number): $mol_unit_money_usd;
    function $mol_stub_product_name(): string;
    function $mol_stub_company_name_big(): string;
    function $mol_stub_company_name_small(): string;
    function $mol_stub_company_name(): string;
    function $mol_stub_person_name(): string;
    function $mol_stub_city(): string;
    function $mol_stub_time(maxShift?: number): $mol_time_moment;
}

declare namespace $ {
    class $mol_app_supplies_domain_provider extends $mol_object {
        id(): string;
        name(): string;
    }
    class $mol_app_supplies_domain_supply_group extends $mol_object {
        id(): string;
        name(): string;
        manager(): $mol_app_supplies_domain_person;
    }
    class $mol_app_supplies_domain_supply_division extends $mol_object {
        id(): string;
        name(): string;
    }
    class $mol_app_supplies_domain_pay_method extends $mol_object {
        id(): string;
        name(): string;
    }
    class $mol_app_supplies_domain_debitor extends $mol_object {
        id(): string;
        name(): string;
    }
    class $mol_app_supplies_domain_supply_position extends $mol_object {
        name(): string;
        supply_moment(): $mol_time_moment;
        division(): $mol_app_supplies_domain_supply_division;
        store(): $mol_app_supplies_domain_store;
        price(): $mol_unit_money;
        quantity(): number;
        cost(): $mol_unit_money;
    }
    class $mol_app_supplies_domain_attachment extends $mol_object {
        url_thumb(): string;
        url_load(): string;
    }
    class $mol_app_supplies_domain_person extends $mol_object {
        id(): string;
        name(): string;
    }
    class $mol_app_supplies_domain_contract extends $mol_object {
        id(): string;
    }
    class $mol_app_supplies_domain_ballance_unit extends $mol_object {
        id(): string;
        name(): string;
    }
    class $mol_app_supplies_domain_consumer extends $mol_object {
        id(): string;
        name(): string;
    }
    class $mol_app_supplies_domain_store extends $mol_object {
        id(): string;
        name(): string;
    }
    class $mol_app_supplies_domain_supply extends $mol_object {
        id(): string;
        provider(): $mol_app_supplies_domain_provider;
        consumer(): $mol_app_supplies_domain_consumer;
        group(): $mol_app_supplies_domain_supply_group;
        status(next?: $mol_app_supplies_domain_supply_status): $mol_app_supplies_domain_supply_status;
        ballance_unit(): $mol_app_supplies_domain_ballance_unit;
        manager(): $mol_app_supplies_domain_person;
        contract(): $mol_app_supplies_domain_contract;
        pay_method(): $mol_app_supplies_domain_pay_method;
        debitor(): $mol_app_supplies_domain_debitor;
        positions(): $mol_app_supplies_domain_supply_position[];
        attachments(next?: $mol_app_supplies_domain_attachment[]): $mol_app_supplies_domain_attachment[];
        cost(): $mol_unit_money;
    }
    enum $mol_app_supplies_domain_supply_status {
        pending,
        approved
    }
    class $mol_app_supplies_domain_mock extends $mol_object {
        supplies(): $mol_app_supplies_domain_supply[];
        positions(supply: string): $mol_app_supplies_domain_supply_position[];
        supply_status(id: string, next?: $mol_app_supplies_domain_supply_status): $mol_app_supplies_domain_supply_status;
        supply(id: string): $mol_app_supplies_domain_supply;
        provider(id: string): $mol_app_supplies_domain_provider;
        consumer(id: string): $mol_app_supplies_domain_consumer;
        ballance_unit(id: string): $mol_app_supplies_domain_ballance_unit;
        division(id: string): $mol_app_supplies_domain_supply_division;
        supply_group(id: string): $mol_app_supplies_domain_supply_group;
        store(id: string): $mol_app_supplies_domain_store;
        person(id: string): $mol_app_supplies_domain_person;
        contract(id: string): $mol_app_supplies_domain_person;
        pay_method(id: string): $mol_app_supplies_domain_pay_method;
        debitor(id: string): $mol_app_supplies_domain_pay_method;
        position(id: {
            supply: string;
            position: string;
        }): $mol_app_supplies_domain_supply_position;
        attachments(id: string, next?: $mol_app_supplies_domain_attachment[]): $mol_app_supplies_domain_attachment[];
        attachment(id: {
            supply: string;
            attachment: string;
        }): $mol_app_supplies_domain_attachment;
    }
}

declare namespace $ {
    class $mol_float extends $mol_view {
    }
}

declare namespace $ {
    class $mol_bar extends $mol_view {
    }
}

declare namespace $ {
    class $mol_plugin extends $mol_view {
        dom_node(next?: Element): Element;
        attr_static(): {
            [key: string]: string | number | boolean;
        };
        event(): {
            [key: string]: (event: Event) => void;
        };
        render(): void;
    }
}

declare namespace $ {
    class $mol_meter extends $mol_plugin {
        /**
         *  ```
         *  zoom 1
         *  ```
         **/
        zoom(): number;
        /**
         *  ```
         *  width?val 0
         *  ```
         **/
        width(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  height?val 0
         *  ```
         **/
        height(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  left?val 0
         *  ```
         **/
        left(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  right?val 0
         *  ```
         **/
        right(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  bottom?val 0
         *  ```
         **/
        bottom(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  top?val 0
         *  ```
         **/
        top(val?: any, force?: $mol_mem_force): any;
    }
}

declare namespace $.$$ {
    class $mol_meter extends $.$mol_meter {
        rect(): {
            left: number;
            top: number;
            right: number;
            bottom: number;
            width: number;
            height: number;
            zoom: number;
        };
        top(): number;
        bottom(): number;
        left(): number;
        right(): number;
        width(): number;
        height(): number;
        zoom(): number;
    }
}

declare namespace $ {
    class $mol_pop extends $mol_view {
        /**
         *  ```
         *  event * keydown?event <=> keydown?event
         *  ```
         **/
        event(): {
            "keydown": (event?: any) => any;
        };
        /**
         *  ```
         *  keydown?event null
         *  ```
         **/
        keydown(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  showed?val false
         *  ```
         **/
        showed(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  plugins /$mol_plugin <= Meter
         *  ```
         **/
        plugins(): readonly $mol_plugin[];
        top(): number;
        bottom(): number;
        left(): number;
        right(): number;
        /**
         *  ```
         *  Meter $mol_meter
         *  	top => top
         *  	bottom => bottom
         *  	left => left
         *  	right => right
         *  ```
         **/
        Meter(): $$.$mol_meter;
        /**
         *  ```
         *  sub /
         *  	<= Anchor
         *  	<= Bubble
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  Anchor null
         *  ```
         **/
        Anchor(): any;
        /**
         *  ```
         *  Bubble $mol_pop_bubble
         *  	align <= align
         *  	content <= bubble_content
         *  	height_max <= height_max
         *  ```
         **/
        Bubble(): $mol_pop_bubble;
        /**
         *  ```
         *  align \bottom_center
         *  ```
         **/
        align(): string;
        /**
         *  ```
         *  bubble_content /$mol_view_content
         *  ```
         **/
        bubble_content(): readonly (string | number | boolean | Node | $mol_view)[];
        /**
         *  ```
         *  height_max 9999
         *  ```
         **/
        height_max(): number;
    }
}
declare namespace $ {
    class $mol_pop_bubble extends $mol_scroll {
        /**
         *  ```
         *  sub <= content
         *  ```
         **/
        sub(): readonly (string | number | boolean | Node | $mol_view)[];
        /**
         *  ```
         *  content /$mol_view_content
         *  ```
         **/
        content(): readonly (string | number | boolean | Node | $mol_view)[];
        /**
         *  ```
         *  style *
         *  	^
         *  	maxHeight <= height_max
         *  ```
         **/
        style(): {
            "maxHeight": number;
        };
        /**
         *  ```
         *  height_max 9999
         *  ```
         **/
        height_max(): number;
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_pop_align <= align
         *  	tabindex 0
         *  ```
         **/
        attr(): {
            "mol_pop_align": string;
            "tabindex": number;
        };
        /**
         *  ```
         *  align \
         *  ```
         **/
        align(): string;
    }
}

declare namespace $.$$ {
    class $mol_pop extends $.$mol_pop {
        sub(): any[];
        height_max(): number;
        align(): string;
        keydown(event: KeyboardEvent): void;
    }
}

declare namespace $ {
    class $mol_dimmer extends $mol_view {
        /**
         *  ```
         *  haystack \
         *  ```
         **/
        haystack(): string;
        /**
         *  ```
         *  needle \
         *  ```
         **/
        needle(): string;
        /**
         *  ```
         *  sub <= parts
         *  ```
         **/
        sub(): readonly (string | number | boolean | Node | $mol_view)[];
        /**
         *  ```
         *  parts /$mol_view_content
         *  ```
         **/
        parts(): readonly (string | number | boolean | Node | $mol_view)[];
        /**
         *  ```
         *  Low!id $mol_view sub / <= string!id
         *  ```
         **/
        Low(id: any): $mol_view;
        /**
         *  ```
         *  string!id \
         *  ```
         **/
        string(id: any): string;
    }
}

declare namespace $.$$ {
    class $mol_dimmer extends $.$mol_dimmer {
        parts(): any[];
        strings(): string[];
        string(index: number): string;
    }
}

declare namespace $ {
    class $mol_state_local<Value> extends $mol_object {
        static 'native()': Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
        static native(): Storage | {
            getItem(key: string): any;
            setItem(key: string, value: string): void;
            removeItem(key: string): void;
        };
        static value<Value>(key: string, next?: Value, force?: $mol_mem_force): Value | null;
        prefix(): string;
        value(key: string, next?: Value): Value;
    }
}

declare namespace $ {
}

declare namespace $ {
    function $mol_dom_parse(text: string, type?: SupportedType): Document;
}

declare var $node: any;

declare namespace $ {
    class $mol_fetch_response extends $mol_object2 {
        readonly native: Response;
        constructor(native: Response);
        headers(): Headers;
        mime(): string;
        stream(): ReadableStream<Uint8Array>;
        text(): string;
        json(): any;
        buffer(): any;
        xml(): Document;
        xhtml(): Document;
        html(): Document;
    }
    class $mol_fetch extends $mol_object2 {
        static request: (input: RequestInfo, init?: RequestInit) => Response;
        static response(input: RequestInfo, init?: RequestInit): $mol_fetch_response;
        static stream(input: RequestInfo, init?: RequestInit): ReadableStream<Uint8Array>;
        static text(input: RequestInfo, init?: RequestInit): string;
        static json(input: RequestInfo, init?: RequestInit): any;
        static buffer(input: RequestInfo, init?: RequestInit): void;
        static xml(input: RequestInfo, init?: RequestInit): Document;
        static xhtml(input: RequestInfo, init?: RequestInit): Document;
        static html(input: RequestInfo, init?: RequestInit): Document;
    }
}

declare namespace $ {
    class $mol_file extends $mol_object {
        static absolute(path: string): $mol_file;
        static relative(path: string): $mol_file;
        static base: string;
        path(): string;
        parent(): $mol_file;
        name(): string;
        ext(): string;
        content(next?: string, force?: $mol_mem_force): string;
        resolve(path: string): $mol_file;
        relate(base?: $mol_file): void;
    }
}

declare namespace $ {
    interface $mol_locale_dict {
        [key: string]: string;
    }
    class $mol_locale extends $mol_object {
        static lang_default(): string;
        static lang(next?: string): string;
        static source(lang: string): any;
        static texts(lang: string, next?: $mol_locale_dict): $mol_locale_dict;
        static text(key: string): string;
    }
}

declare namespace $ {
    class $mol_nav extends $mol_plugin {
        /**
         *  ```
         *  cycle?val false
         *  ```
         **/
        cycle(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  mod_ctrl false
         *  ```
         **/
        mod_ctrl(): boolean;
        /**
         *  ```
         *  mod_shift false
         *  ```
         **/
        mod_shift(): boolean;
        /**
         *  ```
         *  mod_alt false
         *  ```
         **/
        mod_alt(): boolean;
        /**
         *  ```
         *  keys_x?val /
         *  ```
         **/
        keys_x(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  keys_y?val /
         *  ```
         **/
        keys_y(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  current_x?val \
         *  ```
         **/
        current_x(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  current_y?val \
         *  ```
         **/
        current_y(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event_up?event null
         *  ```
         **/
        event_up(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event_down?event null
         *  ```
         **/
        event_down(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event_left?event null
         *  ```
         **/
        event_left(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event_right?event null
         *  ```
         **/
        event_right(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event *
         *  	^
         *  	keydown?event <=> event_key?event
         *  ```
         **/
        event(): {
            "keydown": (event?: any) => any;
        };
        /**
         *  ```
         *  event_key?event null
         *  ```
         **/
        event_key(event?: any, force?: $mol_mem_force): any;
    }
}

declare namespace $.$$ {
    class $mol_nav extends $.$mol_nav {
        event_key(event?: KeyboardEvent): void;
        event_up(event?: KeyboardEvent): void;
        event_down(event?: KeyboardEvent): void;
        event_left(event: KeyboardEvent): void;
        event_right(event: KeyboardEvent): void;
        index_y(): any;
        index_x(): any;
    }
}

declare namespace $ {
    class $mol_list extends $mol_view {
        /**
         *  ```
         *  sub <= rows
         *  ```
         **/
        sub(): readonly $mol_view[];
        /**
         *  ```
         *  rows /$mol_view
         *  ```
         **/
        rows(): readonly $mol_view[];
        /**
         *  ```
         *  Empty null
         *  ```
         **/
        Empty(): any;
    }
}

declare namespace $.$$ {
    class $mol_list extends $.$mol_list {
        sub(): any[] | readonly $mol_view[];
        row_offsets(): number[];
        row_context(index: number): $mol_ambient_context;
        sub_visible(): any[] | readonly $mol_view[];
        minimal_height(): number;
    }
}

declare namespace $ {
    class $mol_string extends $mol_view {
        /**
         *  ```
         *  dom_name \input
         *  ```
         **/
        dom_name(): string;
        /**
         *  ```
         *  enabled true
         *  ```
         **/
        enabled(): boolean;
        /**
         *  ```
         *  debounce 0
         *  ```
         **/
        debounce(): number;
        /**
         *  ```
         *  minimal_height 40
         *  ```
         **/
        minimal_height(): number;
        /**
         *  ```
         *  autocomplete false
         *  ```
         **/
        autocomplete(): boolean;
        /**
         *  ```
         *  field *
         *  	^
         *  	disabled <= disabled
         *  	value <= value_changed?val
         *  	placeholder <= hint
         *  	type <= type?val
         *  	spellcheck <= spellcheck
         *  	autocomplete <= autocomplete_native
         *  ```
         **/
        field(): {
            "disabled": boolean;
            "value": any;
            "placeholder": string;
            "type": any;
            "spellcheck": boolean;
            "autocomplete": string;
        };
        /**
         *  ```
         *  disabled false
         *  ```
         **/
        disabled(): boolean;
        /**
         *  ```
         *  value_changed?val <=> value?val
         *  ```
         **/
        value_changed(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  value?val \
         *  ```
         **/
        value(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  hint \
         *  ```
         **/
        hint(): string;
        /**
         *  ```
         *  type?val \text
         *  ```
         **/
        type(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  spellcheck false
         *  ```
         **/
        spellcheck(): boolean;
        /**
         *  ```
         *  autocomplete_native \
         *  ```
         **/
        autocomplete_native(): string;
        /**
         *  ```
         *  attr *
         *  	^
         *  	maxlength <= length_max
         *  ```
         **/
        attr(): {
            "maxlength": number;
        };
        /**
         *  ```
         *  length_max Infinity
         *  ```
         **/
        length_max(): number;
        /**
         *  ```
         *  event *
         *  	^
         *  	input?event <=> event_change?event
         *  	keydown?event <=> event_key_press?event
         *  ```
         **/
        event(): {
            "input": (event?: any) => any;
            "keydown": (event?: any) => any;
        };
        /**
         *  ```
         *  event_change?event null
         *  ```
         **/
        event_change(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event_key_press?event null
         *  ```
         **/
        event_key_press(event?: any, force?: $mol_mem_force): any;
    }
}

declare namespace $.$$ {
    class $mol_string extends $.$mol_string {
        event_change(next?: Event): void;
        event_key_press(next?: KeyboardEvent): void;
        disabled(): boolean;
        autocomplete_native(): "on" | "off";
    }
}

declare namespace $ {
    class $mol_after_timeout extends $mol_object2 {
        delay: number;
        task: () => void;
        id: any;
        constructor(delay: number, task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    class $mol_state_time extends $mol_object {
        static now(precision?: number, next?: number): number;
    }
}

declare namespace $ {
    function $mol_font_canvas(next?: CanvasRenderingContext2D): CanvasRenderingContext2D;
}

declare namespace $ {
    function $mol_font_measure(size: number, face: string, text: string): number;
}

declare namespace $ {
    class $mol_svg extends $mol_view {
        /**
         *  ```
         *  dom_name \svg
         *  ```
         **/
        dom_name(): string;
        /**
         *  ```
         *  dom_name_space \http://www.w3.org/2000/svg
         *  ```
         **/
        dom_name_space(): string;
        /**
         *  ```
         *  text_width?text 0
         *  ```
         **/
        text_width(text?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  font_size 16
         *  ```
         **/
        font_size(): number;
        /**
         *  ```
         *  font_family \
         *  ```
         **/
        font_family(): string;
    }
}

declare namespace $.$$ {
    class $mol_svg extends $.$mol_svg {
        computed_style(): CSSStyleDeclaration;
        font_size(): number;
        font_family(): any;
        text_width(text: string): number;
    }
}

declare namespace $ {
    class $mol_svg_root extends $mol_svg {
        /**
         *  ```
         *  dom_name \svg
         *  ```
         **/
        dom_name(): string;
        /**
         *  ```
         *  attr *
         *  	^
         *  	viewBox <= view_box
         *  	preserveAspectRatio <= aspect
         *  ```
         **/
        attr(): {
            "viewBox": string;
            "preserveAspectRatio": string;
        };
        /**
         *  ```
         *  view_box \0 0 100 100
         *  ```
         **/
        view_box(): string;
        /**
         *  ```
         *  aspect \xMidYMid
         *  ```
         **/
        aspect(): string;
    }
}

declare namespace $ {
    class $mol_svg_path extends $mol_svg {
        /**
         *  ```
         *  dom_name \path
         *  ```
         **/
        dom_name(): string;
        /**
         *  ```
         *  attr *
         *  	^
         *  	d <= geometry
         *  ```
         **/
        attr(): {
            "d": string;
        };
        /**
         *  ```
         *  geometry \
         *  ```
         **/
        geometry(): string;
    }
}

declare namespace $ {
    class $mol_icon extends $mol_svg_root {
        /**
         *  ```
         *  view_box \0 0 24 24
         *  ```
         **/
        view_box(): string;
        /**
         *  ```
         *  minimal_width 16
         *  ```
         **/
        minimal_width(): number;
        /**
         *  ```
         *  minimal_height 16
         *  ```
         **/
        minimal_height(): number;
        /**
         *  ```
         *  sub / <= Path
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  Path $mol_svg_path geometry <= path
         *  ```
         **/
        Path(): $mol_svg_path;
        /**
         *  ```
         *  path \
         *  ```
         **/
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chevron extends $mol_icon {
        /**
         *  ```
         *  path \M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z
         *  ```
         **/
        path(): string;
    }
}

declare namespace $ {
    function $mol_match_text<Variant>(query: string, values: (variant: Variant) => string[]): (variant: Variant) => boolean;
}

declare namespace $ {
    class $mol_select extends $mol_pop {
        /**
         *  ```
         *  dictionary *
         *  ```
         **/
        dictionary(): {};
        /**
         *  ```
         *  options /string
         *  ```
         **/
        options(): readonly string[];
        /**
         *  ```
         *  value?val \
         *  ```
         **/
        value(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  minimal_height 40
         *  ```
         **/
        minimal_height(): number;
        /**
         *  ```
         *  Option_row!id $mol_button_minor
         *  	event_click?event <=> event_select!id?event
         *  	sub <= option_content!id
         *  ```
         **/
        Option_row(id: any): $mol_button_minor;
        /**
         *  ```
         *  event_select!id?event null
         *  ```
         **/
        event_select(id: any, event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  option_content!id / <= Option_label!id
         *  ```
         **/
        option_content(id: any): readonly any[];
        /**
         *  ```
         *  Option_label!id $mol_dimmer
         *  	minimal_height 40
         *  	haystack <= option_label!id
         *  	needle <= filter_pattern?val
         *  ```
         **/
        Option_label(id: any): $$.$mol_dimmer;
        /**
         *  ```
         *  option_label!id \
         *  ```
         **/
        option_label(id: any): string;
        /**
         *  ```
         *  filter_pattern?val \
         *  ```
         **/
        filter_pattern(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  No_options $mol_view sub / <= no_options_message
         *  ```
         **/
        No_options(): $mol_view;
        /**
         *  ```
         *  no_options_message @ \No options
         *  ```
         **/
        no_options_message(): string;
        /**
         *  ```
         *  plugins /
         *  	^
         *  	<= Nav
         *  ```
         **/
        plugins(): readonly any[];
        /**
         *  ```
         *  Nav $mol_nav
         *  	keys_y <= nav_components
         *  	current_y?component <=> option_focused?component
         *  	cycle?val <=> nav_cycle?val
         *  ```
         **/
        Nav(): $$.$mol_nav;
        /**
         *  ```
         *  nav_components /$mol_view
         *  ```
         **/
        nav_components(): readonly $mol_view[];
        /**
         *  ```
         *  option_focused?component null
         *  ```
         **/
        option_focused(component?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  nav_cycle?val true
         *  ```
         **/
        nav_cycle(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  showed?val <=> options_showed?val
         *  ```
         **/
        showed(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  options_showed?val false
         *  ```
         **/
        options_showed(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  Anchor <= Trigger
         *  ```
         **/
        Anchor(): $mol_button_minor;
        /**
         *  ```
         *  Trigger $mol_button_minor
         *  	click?event <=> open?event
         *  	sub <= trigger_content
         *  ```
         **/
        Trigger(): $mol_button_minor;
        /**
         *  ```
         *  open?event null
         *  ```
         **/
        open(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  trigger_content /$mol_view_content
         *  ```
         **/
        trigger_content(): readonly (string | number | boolean | Node | $mol_view)[];
        /**
         *  ```
         *  bubble_content / <= Menu
         *  ```
         **/
        bubble_content(): readonly any[];
        /**
         *  ```
         *  Menu $mol_list rows <= menu_content
         *  ```
         **/
        Menu(): $$.$mol_list;
        /**
         *  ```
         *  menu_content /$mol_view
         *  ```
         **/
        menu_content(): readonly $mol_view[];
        /**
         *  ```
         *  option_content_current /$mol_view_content
         *  ```
         **/
        option_content_current(): readonly (string | number | boolean | Node | $mol_view)[];
        /**
         *  ```
         *  Filter $mol_string
         *  	value?val <=> filter_pattern?val
         *  	hint <= filter_hint
         *  	debounce <= debounce
         *  ```
         **/
        Filter(): $$.$mol_string;
        /**
         *  ```
         *  filter_hint <= hint
         *  ```
         **/
        filter_hint(): string;
        /**
         *  ```
         *  hint @ \Search..
         *  ```
         **/
        hint(): string;
        /**
         *  ```
         *  debounce 200
         *  ```
         **/
        debounce(): number;
        /**
         *  ```
         *  Trigger_icon $mol_icon_chevron
         *  ```
         **/
        Trigger_icon(): $mol_icon_chevron;
    }
}

declare namespace $.$$ {
    class $mol_select extends $.$mol_select {
        filter_pattern(next?: string): string;
        open(): void;
        options_showed(next?: boolean): boolean;
        options(): readonly string[];
        options_filtered(): readonly string[];
        option_label(id: string): any;
        option_rows(): $mol_view[];
        option_focused(component?: $mol_view): $mol_view;
        event_select(id: string, event?: MouseEvent): void;
        nav_components(): $mol_view[];
        option_content_current(): readonly any[];
        trigger_content(): any[];
        menu_content(): $mol_view[];
    }
}

declare namespace $ {
    class $mol_icon_cross extends $mol_icon {
        /**
         *  ```
         *  path \M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z
         *  ```
         **/
        path(): string;
    }
}

declare namespace $ {
    class $mol_search extends $mol_bar {
        /**
         *  ```
         *  query?val \
         *  ```
         **/
        query(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  sub /
         *  	<= Suggest
         *  	<= Clear
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  Suggest $mol_select
         *  	value?val <=> suggest_selected?val
         *  	filter_pattern?val <=> suggest_selected?val
         *  	hint <= hint
         *  	filter_pattern?val <=> query?val
         *  	options_showed <= suggests_showed
         *  	options <= suggests
         *  	Trigger_icon null
         *  	debounce <= debounce
         *  ```
         **/
        Suggest(): $$.$mol_select;
        /**
         *  ```
         *  suggest_selected?val \
         *  ```
         **/
        suggest_selected(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  hint @ \Search...
         *  ```
         **/
        hint(): string;
        /**
         *  ```
         *  suggests_showed false
         *  ```
         **/
        suggests_showed(): boolean;
        /**
         *  ```
         *  suggests /string
         *  ```
         **/
        suggests(): readonly string[];
        /**
         *  ```
         *  debounce 200
         *  ```
         **/
        debounce(): number;
        /**
         *  ```
         *  Clear $mol_button_minor
         *  	sub / <= Clear_icon
         *  	event_click?val <=> event_clear?val
         *  ```
         **/
        Clear(): $mol_button_minor;
        /**
         *  ```
         *  Clear_icon $mol_icon_cross
         *  ```
         **/
        Clear_icon(): $mol_icon_cross;
        /**
         *  ```
         *  event_clear?val null
         *  ```
         **/
        event_clear(val?: any, force?: $mol_mem_force): any;
    }
}

declare namespace $.$$ {
    class $mol_search extends $.$mol_search {
        suggests_showed(): boolean;
        suggest_selected(next?: string): void;
        sub(): ($mol_button_minor | $mol_select)[];
        event_clear(event?: Event): void;
    }
}

declare var cordova: any;
declare namespace $ {
    var $mol_cordova: any;
    function $mol_cordova_camera(): any;
}

declare namespace $ {
    class $mol_code extends $mol_view {
        /**
         *  ```
         *  sub /
         *  	<= Manual
         *  	<= Scan
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  Manual $mol_search
         *  	query?val <=> value?val
         *  	hint <= hint
         *  	debounce <= debounce
         *  ```
         **/
        Manual(): $$.$mol_search;
        /**
         *  ```
         *  value?val \
         *  ```
         **/
        value(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  hint <= format
         *  ```
         **/
        hint(): string;
        /**
         *  ```
         *  format \
         *  ```
         **/
        format(): string;
        /**
         *  ```
         *  debounce 200
         *  ```
         **/
        debounce(): number;
        /**
         *  ```
         *  Scan $mol_button
         *  	event_click?val <=> event_scan?val
         *  	sub / <= scan_label
         *  ```
         **/
        Scan(): $$.$mol_button;
        /**
         *  ```
         *  event_scan?val null
         *  ```
         **/
        event_scan(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  scan_label @ \Scan
         *  ```
         **/
        scan_label(): string;
    }
}

declare namespace $.$$ {
    class $mol_code extends $.$mol_code {
        scan_support(): boolean;
        sub(): ($mol_button | $mol_search)[];
        event_scan(): void;
    }
}

declare namespace $ {
    function $mol_merge_dict<Target, Source>(target: Target, source: Source): Target & Source;
}

declare namespace $ {
    class $mol_state_arg extends $mol_object {
        prefix: string;
        static href(next?: string, force?: $mol_mem_force): string;
        static dict(next?: {
            [key: string]: string | null;
        }): {
            [key: string]: string;
        };
        static dict_cut(except: string[]): {
            [key: string]: string;
        };
        static value(key: string, next?: string | null): string;
        static link(next: {
            [key: string]: string;
        }): string;
        static make_link(next: {
            [key: string]: string | null;
        }): string;
        static encode(str: string): string;
        constructor(prefix?: string);
        value(key: string, next?: string): string;
        sub(postfix: string): $mol_state_arg;
        link(next: {
            [key: string]: string;
        }): string;
    }
}

declare namespace $ {
    class $mol_link extends $mol_view {
        /**
         *  ```
         *  minimal_height 40
         *  ```
         **/
        minimal_height(): number;
        /**
         *  ```
         *  dom_name \a
         *  ```
         **/
        dom_name(): string;
        /**
         *  ```
         *  attr *
         *  	^
         *  	href <= uri
         *  	title <= hint
         *  	target <= target
         *  	download <= file_name
         *  	mol_link_current <= current
         *  ```
         **/
        attr(): {
            "href": string;
            "title": string;
            "target": string;
            "download": string;
            "mol_link_current": boolean;
        };
        /**
         *  ```
         *  uri \
         *  ```
         **/
        uri(): string;
        /**
         *  ```
         *  hint \
         *  ```
         **/
        hint(): string;
        /**
         *  ```
         *  target \_self
         *  ```
         **/
        target(): string;
        /**
         *  ```
         *  file_name \
         *  ```
         **/
        file_name(): string;
        /**
         *  ```
         *  current false
         *  ```
         **/
        current(): boolean;
        /**
         *  ```
         *  sub /$mol_view_content <= title
         *  ```
         **/
        sub(): readonly (string | number | boolean | Node | $mol_view)[];
        /**
         *  ```
         *  arg *
         *  ```
         **/
        arg(): {};
        /**
         *  ```
         *  event *
         *  	^
         *  	click?event <=> click?event
         *  ```
         **/
        event(): {
            "click": (event?: any) => any;
        };
        /**
         *  ```
         *  click?event <=> event_click?event
         *  ```
         **/
        click(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event_click?event null
         *  ```
         **/
        event_click(event?: any, force?: $mol_mem_force): any;
    }
}

declare namespace $.$$ {
    class $mol_link extends $.$mol_link {
        uri(): string;
        current(): boolean;
        event_click(event?: Event): void;
        file_name(): string;
    }
}

declare namespace $ {
    class $mol_card extends $mol_list {
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_card_status_type <= status
         *  ```
         **/
        attr(): {
            "mol_card_status_type": string;
        };
        /**
         *  ```
         *  status \
         *  ```
         **/
        status(): string;
        /**
         *  ```
         *  rows /$mol_view
         *  	<= Content
         *  	<= Status
         *  ```
         **/
        rows(): readonly $mol_view[];
        /**
         *  ```
         *  Content $mol_view sub <= content
         *  ```
         **/
        Content(): $mol_view;
        /**
         *  ```
         *  content /$mol_view_content
         *  ```
         **/
        content(): readonly (string | number | boolean | Node | $mol_view)[];
        /**
         *  ```
         *  Status $mol_view
         *  	minimal_height 30
         *  	sub / <= status_text
         *  ```
         **/
        Status(): $mol_view;
        /**
         *  ```
         *  status_text <= status
         *  ```
         **/
        status_text(): string;
    }
}

declare namespace $.$$ {
    class $mol_card extends $.$mol_card {
        rows(): $mol_view[];
    }
}

declare namespace $ {
    class $mol_row extends $mol_view {
    }
}
declare namespace $ {
    class $mol_row_sub extends $mol_view {
    }
}

declare namespace $.$$ {
    class $mol_row extends $.$mol_row {
        item_offsets_top(): number[];
        sub_visible(): (string | number | boolean | Node | $mol_view)[];
        minimal_height(): number;
    }
}

declare namespace $ {
    class $mol_labeler extends $mol_view {
        /**
         *  ```
         *  sub /
         *  	<= Title
         *  	<= Content
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  Title $mol_view sub <= label
         *  ```
         **/
        Title(): $mol_view;
        /**
         *  ```
         *  label /$mol_view_content <= title
         *  ```
         **/
        label(): readonly (string | number | boolean | Node | $mol_view)[];
        /**
         *  ```
         *  Content $mol_view sub <= content
         *  ```
         **/
        Content(): $mol_view;
        /**
         *  ```
         *  content /
         *  ```
         **/
        content(): readonly any[];
    }
}

declare namespace $ {
    class $mol_cost extends $mol_view {
        /**
         *  ```
         *  value null
         *  ```
         **/
        value(): any;
        /**
         *  ```
         *  sub /
         *  	<= Prefix
         *  	<= Value
         *  	<= Postfix
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  Prefix $mol_view sub / <= prefix
         *  ```
         **/
        Prefix(): $mol_view;
        /**
         *  ```
         *  prefix \
         *  ```
         **/
        prefix(): string;
        /**
         *  ```
         *  Value $mol_view sub / <= value_view
         *  ```
         **/
        Value(): $mol_view;
        /**
         *  ```
         *  value_view \
         *  ```
         **/
        value_view(): string;
        /**
         *  ```
         *  Postfix $mol_view sub / <= postfix
         *  ```
         **/
        Postfix(): $mol_view;
        /**
         *  ```
         *  postfix \
         *  ```
         **/
        postfix(): string;
    }
}

declare namespace $.$$ {
    class $mol_cost extends $.$mol_cost {
        value(): $mol_unit_money;
        prefix(): string;
        value_view(): string;
        postfix(): string;
    }
}

declare namespace $ {
    class $mol_app_supplies_card extends $mol_link {
        /**
         *  ```
         *  supply null
         *  ```
         **/
        supply(): any;
        /**
         *  ```
         *  minimal_height 125
         *  ```
         **/
        minimal_height(): number;
        /**
         *  ```
         *  sub / <= Card
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  Card $mol_card
         *  	status <= status
         *  	Content <= Group
         *  ```
         **/
        Card(): $$.$mol_card;
        /**
         *  ```
         *  status \
         *  ```
         **/
        status(): string;
        /**
         *  ```
         *  Group $mol_row sub <= items
         *  ```
         **/
        Group(): $$.$mol_row;
        /**
         *  ```
         *  items /
         *  	<= Code_item
         *  	<= Cost_item
         *  	<= Provider_item
         *  ```
         **/
        items(): readonly any[];
        /**
         *  ```
         *  Code_item $mol_labeler
         *  	title <= code_title
         *  	content / <= code
         *  ```
         **/
        Code_item(): $mol_labeler;
        /**
         *  ```
         *  code_title @ \Code
         *  ```
         **/
        code_title(): string;
        /**
         *  ```
         *  code \
         *  ```
         **/
        code(): string;
        /**
         *  ```
         *  Cost_item $mol_labeler
         *  	title <= cost_title
         *  	content / <= Cost
         *  ```
         **/
        Cost_item(): $mol_labeler;
        /**
         *  ```
         *  cost_title @ \Cost
         *  ```
         **/
        cost_title(): string;
        /**
         *  ```
         *  Cost $mol_cost value <= cost
         *  ```
         **/
        Cost(): $$.$mol_cost;
        /**
         *  ```
         *  cost $mol_unit_money valueOf 0
         *  ```
         **/
        cost(): $mol_unit_money;
        /**
         *  ```
         *  Provider_item $mol_labeler
         *  	title <= provider_title
         *  	content / <= provider_name
         *  ```
         **/
        Provider_item(): $mol_labeler;
        /**
         *  ```
         *  provider_title @ \Provider
         *  ```
         **/
        provider_title(): string;
        /**
         *  ```
         *  provider_name \
         *  ```
         **/
        provider_name(): string;
    }
}

declare namespace $.$$ {
    class $mol_app_supplies_card extends $.$mol_app_supplies_card {
        supply(): $mol_app_supplies_domain_supply;
        code(): string;
        provider_name(): string;
        cost(): $mol_unit_money;
        status(): string;
    }
}

declare namespace $ {
    class $mol_app_supplies_list extends $mol_page {
        /**
         *  ```
         *  supplies /$mol_app_supplies_domain_supply
         *  ```
         **/
        supplies(): readonly $mol_app_supplies_domain_supply[];
        /**
         *  ```
         *  sub /
         *  	<= Head
         *  	<= Search_bar
         *  	<= Body
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  Search_bar $mol_float sub / <= Search
         *  ```
         **/
        Search_bar(): $mol_float;
        /**
         *  ```
         *  Search $mol_code
         *  	hint <= search_hint
         *  	value?val <=> search_query?val
         *  ```
         **/
        Search(): $$.$mol_code;
        /**
         *  ```
         *  search_hint @ \Search supply by bar code
         *  ```
         **/
        search_hint(): string;
        /**
         *  ```
         *  search_query?val \
         *  ```
         **/
        search_query(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  body / <= Supply_rows
         *  ```
         **/
        body(): readonly any[];
        /**
         *  ```
         *  Supply_rows $mol_list rows <= supply_rows
         *  ```
         **/
        Supply_rows(): $$.$mol_list;
        /**
         *  ```
         *  supply_rows /$mol_view
         *  ```
         **/
        supply_rows(): readonly $mol_view[];
        /**
         *  ```
         *  Supply_row!index $mol_app_supplies_card
         *  	supply <= supply!index
         *  	arg <= supply_arg!index
         *  ```
         **/
        Supply_row(index: any): $$.$mol_app_supplies_card;
        /**
         *  ```
         *  supply!index null
         *  ```
         **/
        supply(index: any): any;
        /**
         *  ```
         *  supply_arg!index * supply <= supply_id!index
         *  ```
         **/
        supply_arg(index: any): {
            "supply": string;
        };
        /**
         *  ```
         *  supply_id!index \
         *  ```
         **/
        supply_id(index: any): string;
    }
}

declare namespace $.$$ {
    class $mol_app_supplies_list extends $.$mol_app_supplies_list {
        supply_rows(): $mol_app_supplies_card[];
        supply(index: number): $mol_app_supplies_domain_supply;
        supply_id(index: number): string;
    }
}

declare namespace $ {
    class $mol_check extends $mol_button_minor {
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_check_checked <= checked?val
         *  	aria-checked <= checked?val
         *  	role \checkbox
         *  ```
         **/
        attr(): {
            "mol_check_checked": any;
            "aria-checked": any;
            "role": string;
            "disabled": boolean;
            "tabindex": number;
            "title": string;
        };
        /**
         *  ```
         *  checked?val false
         *  ```
         **/
        checked(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  sub /
         *  	<= Icon
         *  	<= label
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  Icon null
         *  ```
         **/
        Icon(): any;
        /**
         *  ```
         *  label / <= Title
         *  ```
         **/
        label(): readonly any[];
        /**
         *  ```
         *  Title $mol_view sub / <= title
         *  ```
         **/
        Title(): $mol_view;
        /**
         *  ```
         *  title \
         *  ```
         **/
        title(): string;
    }
}

declare namespace $.$$ {
    class $mol_check extends $.$mol_check {
        event_click(next?: Event): void;
        sub(): any[];
    }
}

declare namespace $ {
    class $mol_switch extends $mol_view {
        /**
         *  ```
         *  minimal_height 40
         *  ```
         **/
        minimal_height(): number;
        /**
         *  ```
         *  Option!id $mol_check
         *  	checked?val <=> option_checked!id?val
         *  	title <= option_title!id
         *  	enabled <= option_enabled!id
         *  ```
         **/
        Option(id: any): $$.$mol_check;
        /**
         *  ```
         *  option_checked!id?val false
         *  ```
         **/
        option_checked(id: any, val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  option_title!id \
         *  ```
         **/
        option_title(id: any): string;
        /**
         *  ```
         *  option_enabled!id <= enabled
         *  ```
         **/
        option_enabled(id: any): boolean;
        /**
         *  ```
         *  enabled true
         *  ```
         **/
        enabled(): boolean;
        /**
         *  ```
         *  value?val null
         *  ```
         **/
        value(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  options *
         *  ```
         **/
        options(): {};
        /**
         *  ```
         *  sub <= items
         *  ```
         **/
        sub(): readonly $mol_check[];
        /**
         *  ```
         *  items /$mol_check
         *  ```
         **/
        items(): readonly $mol_check[];
    }
}

declare namespace $.$$ {
    class $mol_switch extends $.$mol_switch {
        value(next?: any): any;
        options(): {
            [key: string]: string;
        };
        items(): $mol_check[];
        option_title(key: string): string;
        option_checked(key: string, next?: boolean): boolean;
    }
}

declare namespace $ {
    class $mol_deck extends $mol_list {
        /**
         *  ```
         *  items / *
         *  	title \
         *  	Content <= Content
         *  ```
         **/
        items(): readonly any[];
        /**
         *  ```
         *  Content $mol_view
         *  ```
         **/
        Content(): $mol_view;
        /**
         *  ```
         *  rows /$mol_view
         *  	<= Switch
         *  	<= Content
         *  ```
         **/
        rows(): readonly $mol_view[];
        /**
         *  ```
         *  Switch $mol_switch
         *  	value?val <=> current?val
         *  	options <= switch_options
         *  ```
         **/
        Switch(): $$.$mol_switch;
        /**
         *  ```
         *  current?val \0
         *  ```
         **/
        current(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  switch_options *
         *  ```
         **/
        switch_options(): {};
    }
}

declare namespace $.$$ {
    class $mol_deck extends $.$mol_deck {
        current(next?: string): string;
        switch_options(): Record<string, string>;
        Content(): any;
    }
}

declare namespace $ {
    class $mol_section extends $mol_list {
        /**
         *  ```
         *  rows /
         *  	<= Head
         *  	<= Content
         *  ```
         **/
        rows(): readonly any[];
        /**
         *  ```
         *  Head $mol_view sub <= head
         *  ```
         **/
        Head(): $mol_view;
        /**
         *  ```
         *  head /
         *  ```
         **/
        head(): readonly any[];
        /**
         *  ```
         *  Content null
         *  ```
         **/
        Content(): any;
    }
}

declare namespace $ {
    class $mol_tiler extends $mol_view {
        /**
         *  ```
         *  sub <= items
         *  ```
         **/
        sub(): readonly $mol_view[];
        /**
         *  ```
         *  items /$mol_view
         *  ```
         **/
        items(): readonly $mol_view[];
    }
}

declare namespace $.$$ {
    class $mol_tiler extends $.$mol_tiler {
        sub(): $mol_view[];
        groupItems(path: number[]): readonly $mol_view[];
        groupChilds(path: number[]): $mol_view[];
        child(path: number[]): $mol_view;
        group(path: number[]): $mol_view;
        item(path: number[]): $mol_view;
    }
}

declare namespace $ {
    class $mol_icon_attach extends $mol_icon {
        /**
         *  ```
         *  path \M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z
         *  ```
         **/
        path(): string;
    }
}

declare namespace $ {
    class $mol_attach extends $mol_card {
        /**
         *  ```
         *  Content $mol_tiler items <= content
         *  ```
         **/
        Content(): $$.$mol_tiler;
        /**
         *  ```
         *  content /$mol_view
         *  ```
         **/
        content(): readonly $mol_view[];
        /**
         *  ```
         *  items?val /$mol_view
         *  ```
         **/
        items(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  Add $mol_attach_add file_new?val <=> attach_new?val
         *  ```
         **/
        Add(): $$.$mol_attach_add;
        /**
         *  ```
         *  attach_new?val \
         *  ```
         **/
        attach_new(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  Item!id $mol_attach_item title <= attach_title
         *  ```
         **/
        Item(id: any): $$.$mol_attach_item;
        /**
         *  ```
         *  attach_title \
         *  ```
         **/
        attach_title(): string;
    }
}
declare namespace $ {
    class $mol_attach_item extends $mol_link {
        /**
         *  ```
         *  url_thumb?val \
         *  ```
         **/
        url_thumb(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  uri?val <=> url_load?val
         *  ```
         **/
        uri(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  url_load?val \
         *  ```
         **/
        url_load(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  style *
         *  	^
         *  	backgroundImage <= style_bg
         *  ```
         **/
        style(): {
            "backgroundImage": string;
        };
        /**
         *  ```
         *  style_bg \
         *  ```
         **/
        style_bg(): string;
        /**
         *  ```
         *  attr *
         *  	^
         *  	download <= title
         *  ```
         **/
        attr(): {
            "download": string;
            "href": string;
            "title": string;
            "target": string;
            "mol_link_current": boolean;
        };
        /**
         *  ```
         *  title \
         *  ```
         **/
        title(): string;
    }
}
declare namespace $ {
    class $mol_attach_add extends $mol_button_minor {
        /**
         *  ```
         *  minimal_height 60
         *  ```
         **/
        minimal_height(): number;
        /**
         *  ```
         *  file_new?val \
         *  ```
         **/
        file_new(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  sub /
         *  	<= Icon
         *  	<= Input
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  Icon $mol_icon_attach
         *  ```
         **/
        Icon(): $mol_icon_attach;
        /**
         *  ```
         *  Input $mol_attach_add_input
         *  	event_capture?val <=> event_capture?val
         *  	event_picked?val <=> event_picked?val
         *  ```
         **/
        Input(): $mol_attach_add_input;
        /**
         *  ```
         *  event_capture?val null
         *  ```
         **/
        event_capture(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event_picked?val null
         *  ```
         **/
        event_picked(val?: any, force?: $mol_mem_force): any;
    }
}
declare namespace $ {
    class $mol_attach_add_input extends $mol_view {
        /**
         *  ```
         *  dom_name \input
         *  ```
         **/
        dom_name(): string;
        /**
         *  ```
         *  attr *
         *  	^
         *  	type <= type
         *  	accept <= accept
         *  	multiple <= multiple
         *  ```
         **/
        attr(): {
            "type": string;
            "accept": string;
            "multiple": boolean;
        };
        /**
         *  ```
         *  type \file
         *  ```
         **/
        type(): string;
        /**
         *  ```
         *  accept \image/*;capture=camera
         *  ```
         **/
        accept(): string;
        /**
         *  ```
         *  multiple true
         *  ```
         **/
        multiple(): boolean;
        /**
         *  ```
         *  event_click?val <=> event_capture?val
         *  ```
         **/
        event_click(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event_capture?val null
         *  ```
         **/
        event_capture(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event *
         *  	^
         *  	change?val <=> event_picked?val
         *  ```
         **/
        event(): {
            "change": (val?: any) => any;
        };
        /**
         *  ```
         *  event_picked?val null
         *  ```
         **/
        event_picked(val?: any, force?: $mol_mem_force): any;
    }
}

declare namespace $.$$ {
    class $mol_attach extends $.$mol_attach {
        attach_new(next?: string): void;
        content(): any[];
    }
    class $mol_attach_item extends $.$mol_attach_item {
        style_bg(): string;
    }
    class $mol_attach_add extends $.$mol_attach_add {
        file_new(next?: string, force?: $mol_mem_force_fail): string;
        event_capture(next: Event): void;
        event_picked(next: Event): void;
    }
}

declare namespace $ {
    class $mol_icon_tick extends $mol_icon {
        /**
         *  ```
         *  path \M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z
         *  ```
         **/
        path(): string;
    }
}

declare namespace $ {
    class $mol_check_box extends $mol_check {
        /**
         *  ```
         *  Icon $mol_icon_tick
         *  ```
         **/
        Icon(): $mol_icon_tick;
    }
}

declare namespace $ {
    class $mol_app_supplies_position extends $mol_card {
        /**
         *  ```
         *  minimal_height 70
         *  ```
         **/
        minimal_height(): number;
        /**
         *  ```
         *  position $mol_app_supplies_domain_supply_position
         *  ```
         **/
        position(): $mol_app_supplies_domain_supply_position;
        /**
         *  ```
         *  Content <= Row
         *  ```
         **/
        Content(): $mol_view;
        /**
         *  ```
         *  Row $mol_view sub /
         *  	<= Main_group
         *  	<= Addon_group
         *  	<= Supply_group
         *  ```
         **/
        Row(): $mol_view;
        /**
         *  ```
         *  Main_group $mol_row sub /
         *  	<= Product_item
         *  	<= Cost_item
         *  ```
         **/
        Main_group(): $$.$mol_row;
        /**
         *  ```
         *  Product_item $mol_labeler
         *  	title <= product_title
         *  	content / <= product_name
         *  ```
         **/
        Product_item(): $mol_labeler;
        /**
         *  ```
         *  product_title @ \Product
         *  ```
         **/
        product_title(): string;
        /**
         *  ```
         *  product_name \
         *  ```
         **/
        product_name(): string;
        /**
         *  ```
         *  Cost_item $mol_labeler
         *  	title <= cost_title
         *  	content / <= Cost
         *  ```
         **/
        Cost_item(): $mol_labeler;
        /**
         *  ```
         *  cost_title @ \Cost
         *  ```
         **/
        cost_title(): string;
        /**
         *  ```
         *  Cost $mol_cost value <= cost
         *  ```
         **/
        Cost(): $$.$mol_cost;
        /**
         *  ```
         *  cost $mol_unit_money valueOf 0
         *  ```
         **/
        cost(): $mol_unit_money;
        /**
         *  ```
         *  Addon_group $mol_row sub /
         *  	<= Division_item
         *  	<= Price_item
         *  ```
         **/
        Addon_group(): $$.$mol_row;
        /**
         *  ```
         *  Division_item $mol_labeler
         *  	title <= division_title
         *  	content / <= division_name
         *  ```
         **/
        Division_item(): $mol_labeler;
        /**
         *  ```
         *  division_title @ \Division
         *  ```
         **/
        division_title(): string;
        /**
         *  ```
         *  division_name \
         *  ```
         **/
        division_name(): string;
        /**
         *  ```
         *  Price_item $mol_labeler
         *  	title <= price_label
         *  	content / <= Price
         *  ```
         **/
        Price_item(): $mol_labeler;
        /**
         *  ```
         *  price_label @ \Price
         *  ```
         **/
        price_label(): string;
        /**
         *  ```
         *  Price $mol_cost value <= price
         *  ```
         **/
        Price(): $$.$mol_cost;
        /**
         *  ```
         *  price $mol_unit_money valueOf 0
         *  ```
         **/
        price(): $mol_unit_money;
        /**
         *  ```
         *  Supply_group $mol_row sub /
         *  	<= Quantity_item
         *  	<= Supply_date_item
         *  	<= Store_item
         *  ```
         **/
        Supply_group(): $$.$mol_row;
        /**
         *  ```
         *  Quantity_item $mol_labeler
         *  	title <= quantity_title
         *  	content / <= quantity
         *  ```
         **/
        Quantity_item(): $mol_labeler;
        /**
         *  ```
         *  quantity_title @ \Quantity
         *  ```
         **/
        quantity_title(): string;
        /**
         *  ```
         *  quantity \
         *  ```
         **/
        quantity(): string;
        /**
         *  ```
         *  Supply_date_item $mol_labeler
         *  	title <= supply_date_title
         *  	content / <= supply_date
         *  ```
         **/
        Supply_date_item(): $mol_labeler;
        /**
         *  ```
         *  supply_date_title @ \Supply date
         *  ```
         **/
        supply_date_title(): string;
        /**
         *  ```
         *  supply_date \
         *  ```
         **/
        supply_date(): string;
        /**
         *  ```
         *  Store_item $mol_labeler
         *  	title <= store_title
         *  	content / <= store_name
         *  ```
         **/
        Store_item(): $mol_labeler;
        /**
         *  ```
         *  store_title @ \Store
         *  ```
         **/
        store_title(): string;
        /**
         *  ```
         *  store_name \
         *  ```
         **/
        store_name(): string;
    }
}

declare namespace $.$$ {
    class $mol_app_supplies_position extends $.$mol_app_supplies_position {
        product_name(): string;
        price(): $mol_unit_money;
        quantity(): string;
        cost(): $mol_unit_money;
        supply_date(): string;
        division_name(): string;
        store_name(): string;
    }
}

declare namespace $ {
    class $mol_app_supplies_detail extends $mol_page {
        /**
         *  ```
         *  supply null
         *  ```
         **/
        supply(): any;
        /**
         *  ```
         *  title @ \Supply
         *  ```
         **/
        title(): string;
        /**
         *  ```
         *  tools / <= Close
         *  ```
         **/
        tools(): readonly any[];
        /**
         *  ```
         *  Close $mol_link
         *  	sub / <= Close_icon
         *  	arg <= close_arg
         *  ```
         **/
        Close(): $$.$mol_link;
        /**
         *  ```
         *  Close_icon $mol_icon_cross
         *  ```
         **/
        Close_icon(): $mol_icon_cross;
        /**
         *  ```
         *  close_arg * supply null
         *  ```
         **/
        close_arg(): {
            "supply": any;
        };
        /**
         *  ```
         *  body / <= Content
         *  ```
         **/
        body(): readonly any[];
        /**
         *  ```
         *  Content $mol_list rows /
         *  	<= Descr_card
         *  	<= Attach_section
         *  	<= Positions_section
         *  ```
         **/
        Content(): $$.$mol_list;
        /**
         *  ```
         *  Descr_card $mol_card Content <= Descr_deck
         *  ```
         **/
        Descr_card(): $$.$mol_card;
        /**
         *  ```
         *  Descr_deck $mol_deck items /
         *  	<= Org
         *  	<= Cons
         *  ```
         **/
        Descr_deck(): $$.$mol_deck;
        /**
         *  ```
         *  Org *
         *  	title <= org_title
         *  	Content <= Org_content
         *  ```
         **/
        Org(): {
            "title": string;
            "Content": $$.$mol_row;
        };
        /**
         *  ```
         *  org_title @ \Organization
         *  ```
         **/
        org_title(): string;
        /**
         *  ```
         *  Org_content $mol_row sub <= org_items
         *  ```
         **/
        Org_content(): $$.$mol_row;
        /**
         *  ```
         *  org_items /
         *  	<= Provider
         *  	<= Consumer
         *  	<= Supply_group
         *  	<= Ballance_unit_item
         *  ```
         **/
        org_items(): readonly any[];
        /**
         *  ```
         *  Provider $mol_labeler
         *  	title <= provider_title
         *  	content / <= provider_name
         *  ```
         **/
        Provider(): $mol_labeler;
        /**
         *  ```
         *  provider_title @ \Provider
         *  ```
         **/
        provider_title(): string;
        /**
         *  ```
         *  provider_name \
         *  ```
         **/
        provider_name(): string;
        /**
         *  ```
         *  Consumer $mol_labeler
         *  	title <= customer_label
         *  	content / <= consumer_name
         *  ```
         **/
        Consumer(): $mol_labeler;
        /**
         *  ```
         *  customer_label @ \Consumer
         *  ```
         **/
        customer_label(): string;
        /**
         *  ```
         *  consumer_name \
         *  ```
         **/
        consumer_name(): string;
        /**
         *  ```
         *  Supply_group $mol_labeler
         *  	title <= supply_group_title
         *  	content / <= supply_group_name
         *  ```
         **/
        Supply_group(): $mol_labeler;
        /**
         *  ```
         *  supply_group_title @ \Supply Group
         *  ```
         **/
        supply_group_title(): string;
        /**
         *  ```
         *  supply_group_name \
         *  ```
         **/
        supply_group_name(): string;
        /**
         *  ```
         *  Ballance_unit_item $mol_labeler
         *  	title <= ballance_unit_title
         *  	content / <= ballance_unit_name
         *  ```
         **/
        Ballance_unit_item(): $mol_labeler;
        /**
         *  ```
         *  ballance_unit_title @ \Ballance Unit
         *  ```
         **/
        ballance_unit_title(): string;
        /**
         *  ```
         *  ballance_unit_name \
         *  ```
         **/
        ballance_unit_name(): string;
        /**
         *  ```
         *  Cons *
         *  	title <= cons_title
         *  	Content <= Cons_content
         *  ```
         **/
        Cons(): {
            "title": string;
            "Content": $$.$mol_row;
        };
        /**
         *  ```
         *  cons_title @ \Consumer
         *  ```
         **/
        cons_title(): string;
        /**
         *  ```
         *  Cons_content $mol_row sub <= cons_items
         *  ```
         **/
        Cons_content(): $$.$mol_row;
        /**
         *  ```
         *  cons_items /
         *  	<= Contract
         *  	<= Pay_method
         *  	<= Manager
         *  	<= Debitor
         *  ```
         **/
        cons_items(): readonly any[];
        /**
         *  ```
         *  Contract $mol_labeler
         *  	title <= contract_title
         *  	content / <= contract_id
         *  ```
         **/
        Contract(): $mol_labeler;
        /**
         *  ```
         *  contract_title @ \Contract
         *  ```
         **/
        contract_title(): string;
        /**
         *  ```
         *  contract_id \
         *  ```
         **/
        contract_id(): string;
        /**
         *  ```
         *  Pay_method $mol_labeler
         *  	title <= pay_method_title
         *  	content / <= pay_method_name
         *  ```
         **/
        Pay_method(): $mol_labeler;
        /**
         *  ```
         *  pay_method_title @ \Pay Method
         *  ```
         **/
        pay_method_title(): string;
        /**
         *  ```
         *  pay_method_name \
         *  ```
         **/
        pay_method_name(): string;
        /**
         *  ```
         *  Manager $mol_labeler
         *  	title <= manager_title
         *  	content / <= manager_name
         *  ```
         **/
        Manager(): $mol_labeler;
        /**
         *  ```
         *  manager_title @ \Manager
         *  ```
         **/
        manager_title(): string;
        /**
         *  ```
         *  manager_name \
         *  ```
         **/
        manager_name(): string;
        /**
         *  ```
         *  Debitor $mol_labeler
         *  	title <= debitod_title
         *  	content / <= debitor_name
         *  ```
         **/
        Debitor(): $mol_labeler;
        /**
         *  ```
         *  debitod_title @ \Debitor
         *  ```
         **/
        debitod_title(): string;
        /**
         *  ```
         *  debitor_name \
         *  ```
         **/
        debitor_name(): string;
        /**
         *  ```
         *  Attach_section $mol_section
         *  	head / <= attach_title
         *  	Content <= Attach
         *  ```
         **/
        Attach_section(): $mol_section;
        /**
         *  ```
         *  attach_title @ \Attachments
         *  ```
         **/
        attach_title(): string;
        /**
         *  ```
         *  Attach $mol_attach
         *  	items <= attachments
         *  	attach_new?val <=> attach_new?val
         *  ```
         **/
        Attach(): $$.$mol_attach;
        /**
         *  ```
         *  attachments /$mol_view
         *  ```
         **/
        attachments(): readonly $mol_view[];
        /**
         *  ```
         *  attach_new?val null
         *  ```
         **/
        attach_new(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  Positions_section $mol_section
         *  	head <= positions_head
         *  	Content <= Positions
         *  ```
         **/
        Positions_section(): $mol_section;
        /**
         *  ```
         *  positions_head /
         *  	<= positions_title
         *  	<= Cost
         *  ```
         **/
        positions_head(): readonly any[];
        /**
         *  ```
         *  positions_title @ \Positions
         *  ```
         **/
        positions_title(): string;
        /**
         *  ```
         *  Cost $mol_labeler
         *  	title <= cost_title
         *  	content / <= Cost_value
         *  ```
         **/
        Cost(): $mol_labeler;
        /**
         *  ```
         *  cost_title @ \Cost
         *  ```
         **/
        cost_title(): string;
        /**
         *  ```
         *  Cost_value $mol_cost value <= cost
         *  ```
         **/
        Cost_value(): $$.$mol_cost;
        /**
         *  ```
         *  cost $mol_unit_money valueOf 0
         *  ```
         **/
        cost(): $mol_unit_money;
        /**
         *  ```
         *  Positions $mol_list rows <= positions
         *  ```
         **/
        Positions(): $$.$mol_list;
        /**
         *  ```
         *  positions /$mol_view
         *  ```
         **/
        positions(): readonly $mol_view[];
        /**
         *  ```
         *  foot / <= Actions
         *  ```
         **/
        foot(): readonly any[];
        /**
         *  ```
         *  Actions $mol_row sub <= actions
         *  ```
         **/
        Actions(): $$.$mol_row;
        /**
         *  ```
         *  actions / <= Approve
         *  ```
         **/
        actions(): readonly any[];
        /**
         *  ```
         *  Approve $mol_check_box
         *  	checked?val <=> approved?val
         *  	title <= approved_title
         *  ```
         **/
        Approve(): $mol_check_box;
        /**
         *  ```
         *  approved?val false
         *  ```
         **/
        approved(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  approved_title @ \Approved
         *  ```
         **/
        approved_title(): string;
        /**
         *  ```
         *  Position!index $mol_app_supplies_position position <= position!index
         *  ```
         **/
        Position(index: any): $$.$mol_app_supplies_position;
        /**
         *  ```
         *  position!index null
         *  ```
         **/
        position(index: any): any;
        /**
         *  ```
         *  Attachment!index $mol_attach_item
         *  	url_thumb <= attachment_thumb!index
         *  	url_load <= attachment_load!index
         *  ```
         **/
        Attachment(index: any): $$.$mol_attach_item;
        /**
         *  ```
         *  attachment_thumb!index \
         *  ```
         **/
        attachment_thumb(index: any): string;
        /**
         *  ```
         *  attachment_load!index \
         *  ```
         **/
        attachment_load(index: any): string;
    }
}

declare namespace $.$$ {
    class $mol_app_supplies_detail extends $.$mol_app_supplies_detail {
        supply(): $mol_app_supplies_domain_supply;
        title(): string;
        approved(next?: boolean): boolean;
        provider_name(): string;
        consumer_name(): string;
        ballance_unit_name(): string;
        supply_group_name(): string;
        manager_name(): string;
        pay_method_name(): string;
        debitor_name(): string;
        contract_id(): string;
        cost(): $mol_unit_money;
        status(): string;
        positions(): $mol_app_supplies_position[];
        position(index: number): $mol_app_supplies_domain_supply_position;
        attachments(): $mol_attach_item[];
        attachment_thumb(index: number): string;
        attachment_load(index: number): string;
        attach_new(next?: string): void;
        body_scroll_top(next?: number): number;
    }
}

declare namespace $ {
    class $mol_touch extends $mol_plugin {
        /**
         *  ```
         *  start_zoom?val 0
         *  ```
         **/
        start_zoom(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  start_distance?val 0
         *  ```
         **/
        start_distance(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  zoom?val 1
         *  ```
         **/
        zoom(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  start_pan?val /
         *  	0
         *  	0
         *  ```
         **/
        start_pan(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  pan?val /
         *  	0
         *  	0
         *  ```
         **/
        pan(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  pos?val /
         *  	NaN
         *  	NaN
         *  ```
         **/
        pos(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  start_pos?val null
         *  ```
         **/
        start_pos(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  swipe_precision 16
         *  ```
         **/
        swipe_precision(): number;
        /**
         *  ```
         *  swipe_right?val null
         *  ```
         **/
        swipe_right(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  swipe_bottom?val null
         *  ```
         **/
        swipe_bottom(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  swipe_left?val null
         *  ```
         **/
        swipe_left(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  swipe_top?val null
         *  ```
         **/
        swipe_top(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  swipe_from_right?val null
         *  ```
         **/
        swipe_from_right(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  swipe_from_bottom?val null
         *  ```
         **/
        swipe_from_bottom(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  swipe_from_left?val null
         *  ```
         **/
        swipe_from_left(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  swipe_from_top?val null
         *  ```
         **/
        swipe_from_top(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  swipe_to_right?val null
         *  ```
         **/
        swipe_to_right(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  swipe_to_bottom?val null
         *  ```
         **/
        swipe_to_bottom(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  swipe_to_left?val null
         *  ```
         **/
        swipe_to_left(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  swipe_to_top?val null
         *  ```
         **/
        swipe_to_top(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  style *
         *  	^
         *  	touch-action \none
         *  ```
         **/
        style(): {
            "touch-action": string;
        };
        /**
         *  ```
         *  event *
         *  	^
         *  	touchstart?event <=> event_start?event
         *  	touchmove?event <=> event_move?event
         *  	touchend?event <=> event_end?event
         *  	mousedown?event <=> event_start?event
         *  	mousemove?event <=> event_move?event
         *  	mouseup?event <=> event_end?event
         *  	mouseleave?event <=> event_leave?event
         *  	wheel?event <=> event_wheel?event
         *  ```
         **/
        event(): {
            "touchstart": (event?: any) => any;
            "touchmove": (event?: any) => any;
            "touchend": (event?: any) => any;
            "mousedown": (event?: any) => any;
            "mousemove": (event?: any) => any;
            "mouseup": (event?: any) => any;
            "mouseleave": (event?: any) => any;
            "wheel": (event?: any) => any;
        };
        /**
         *  ```
         *  event_start?event null
         *  ```
         **/
        event_start(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event_move?event null
         *  ```
         **/
        event_move(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event_end?event null
         *  ```
         **/
        event_end(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event_leave?event null
         *  ```
         **/
        event_leave(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event_wheel?event null
         *  ```
         **/
        event_wheel(event?: any, force?: $mol_mem_force): any;
    }
}

declare namespace $.$$ {
    class $mol_touch extends $.$mol_touch {
        rect(): ClientRect | DOMRect;
        event_start(event: TouchEvent | MouseEvent): void;
        event_leave(event: TouchEvent | MouseEvent): void;
        event_move(event: TouchEvent | MouseEvent): void;
        swipe_left(event?: TouchEvent | MouseEvent): void;
        swipe_right(event?: TouchEvent | MouseEvent): void;
        swipe_top(event?: TouchEvent | MouseEvent): void;
        swipe_bottom(event?: TouchEvent | MouseEvent): void;
        event_end(event?: TouchEvent | MouseEvent): void;
        event_wheel(event: WheelEvent): void;
    }
}

declare namespace $ {
    function $mol_dom_render_events(el: Element, events: {
        [key: string]: (event: Event) => any;
    }): void;
    function $mol_dom_render_events_async(el: Element, events: {
        [key: string]: (event: Event) => any;
    }): void;
}

declare namespace $ {
    class $mol_ghost extends $mol_view {
        /**
         *  ```
         *  Sub $mol_view
         *  ```
         **/
        Sub(): $mol_view;
    }
}

declare namespace $.$$ {
    class $mol_ghost extends $.$mol_ghost {
        dom_node(): Element;
        dom_tree(): Element;
        title(): string;
    }
}

declare namespace $ {
    class $mol_book extends $mol_view {
        /**
         *  ```
         *  sub <= pages_wrapped
         *  ```
         **/
        sub(): readonly $mol_view[];
        /**
         *  ```
         *  pages_wrapped /$mol_view
         *  ```
         **/
        pages_wrapped(): readonly $mol_view[];
        /**
         *  ```
         *  pages /$mol_view
         *  ```
         **/
        pages(): readonly $mol_view[];
        /**
         *  ```
         *  plugins /$mol_plugin
         *  	<= Meter
         *  	<= Touch
         *  ```
         **/
        plugins(): readonly $mol_plugin[];
        width(): number;
        /**
         *  ```
         *  Meter $mol_meter width => width
         *  ```
         **/
        Meter(): $$.$mol_meter;
        /**
         *  ```
         *  Touch $mol_touch
         *  	swipe_from_left?val <=> event_front_up?val
         *  	swipe_to_left?val <=> event_front_down?val
         *  ```
         **/
        Touch(): $$.$mol_touch;
        /**
         *  ```
         *  event_front_up?val null
         *  ```
         **/
        event_front_up(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event_front_down?val null
         *  ```
         **/
        event_front_down(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  Page!index $mol_book_page
         *  	Sub <= page!index
         *  	visible <= page_visible!index
         *  ```
         **/
        Page(index: any): $mol_book_page;
        /**
         *  ```
         *  page!index null
         *  ```
         **/
        page(index: any): any;
        /**
         *  ```
         *  page_visible!index true
         *  ```
         **/
        page_visible(index: any): boolean;
        /**
         *  ```
         *  Placeholder $mol_book_placeholder title <= title
         *  ```
         **/
        Placeholder(): $mol_book_placeholder;
    }
}
declare namespace $ {
    class $mol_book_placeholder extends $mol_view {
        /**
         *  ```
         *  minimal_width 400
         *  ```
         **/
        minimal_width(): number;
        /**
         *  ```
         *  attr *
         *  	^
         *  	tabindex null
         *  ```
         **/
        attr(): {
            "tabindex": any;
        };
    }
}
declare namespace $ {
    class $mol_book_page extends $mol_ghost {
        /**
         *  ```
         *  attr_static *
         *  	^
         *  	tabindex 0
         *  	mol_book_page_visible true
         *  ```
         **/
        attr_static(): {
            "tabindex": number;
            "mol_book_page_visible": boolean;
        };
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_book_page_focused <= focused
         *  	mol_book_page_visible <= visible
         *  ```
         **/
        attr(): {
            "mol_book_page_focused": boolean;
            "mol_book_page_visible": boolean;
        };
        /**
         *  ```
         *  visible true
         *  ```
         **/
        visible(): boolean;
    }
}

declare namespace $.$$ {
    class $mol_book extends $.$mol_book {
        pages_extended(): $mol_view[];
        break_point(): number;
        page(index: number): $mol_view;
        page_visible(index: number): boolean;
        pages_wrapped(): $mol_view[];
        title(): string;
        event_front_up(event?: Event): void;
        event_front_down(event?: Event): void;
        minimal_width(): number;
    }
}

declare namespace $ {
    class $mol_form_field extends $mol_labeler {
        /**
         *  ```
         *  label /
         *  	<= name
         *  	<= Bid
         *  ```
         **/
        label(): readonly any[];
        /**
         *  ```
         *  name \
         *  ```
         **/
        name(): string;
        /**
         *  ```
         *  Bid $mol_view sub / <= bid
         *  ```
         **/
        Bid(): $mol_view;
        /**
         *  ```
         *  bid \
         *  ```
         **/
        bid(): string;
        /**
         *  ```
         *  Content <= control
         *  ```
         **/
        Content(): any;
        /**
         *  ```
         *  control null
         *  ```
         **/
        control(): any;
    }
}

declare namespace $ {
    class $mol_form extends $mol_view {
        /**
         *  ```
         *  submit_blocked false
         *  ```
         **/
        submit_blocked(): boolean;
        /**
         *  ```
         *  event *
         *  	^
         *  	keydown?event <=> keydown?event
         *  ```
         **/
        event(): {
            "keydown": (event?: any) => any;
        };
        /**
         *  ```
         *  keydown?event null
         *  ```
         **/
        keydown(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  submit?event null
         *  ```
         **/
        submit(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  sub /
         *  	<= Bar_fields
         *  	<= Bar_buttons
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  Bar_fields $mol_view sub <= form_fields
         *  ```
         **/
        Bar_fields(): $mol_view;
        /**
         *  ```
         *  form_fields /$mol_form_field
         *  ```
         **/
        form_fields(): readonly $mol_form_field[];
        /**
         *  ```
         *  Bar_buttons $mol_row sub <= buttons
         *  ```
         **/
        Bar_buttons(): $$.$mol_row;
        /**
         *  ```
         *  buttons /$mol_view
         *  ```
         **/
        buttons(): readonly $mol_view[];
    }
}

declare namespace $.$$ {
    class $mol_form extends $.$mol_form {
        submit_blocked(): boolean;
        keydown(next: KeyboardEvent): void;
    }
}

declare namespace $ {
    class $mol_app_supplies_enter extends $mol_view {
        /**
         *  ```
         *  entered?val false
         *  ```
         **/
        entered(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  minimal_width 400
         *  ```
         **/
        minimal_width(): number;
        /**
         *  ```
         *  sub / <= form
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  form $mol_form
         *  	form_fields /
         *  		<= loginField
         *  		<= passwordField
         *  	buttons / <= submit
         *  ```
         **/
        form(): $$.$mol_form;
        /**
         *  ```
         *  loginField $mol_form_field
         *  	name <= loginLabel
         *  	control <= loginControl
         *  ```
         **/
        loginField(): $mol_form_field;
        /**
         *  ```
         *  loginLabel @ \User name
         *  ```
         **/
        loginLabel(): string;
        /**
         *  ```
         *  loginControl $mol_string value?val <=> login?val
         *  ```
         **/
        loginControl(): $$.$mol_string;
        /**
         *  ```
         *  login?val \
         *  ```
         **/
        login(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  passwordField $mol_form_field
         *  	name <= passwordLabel
         *  	control <= passControl
         *  ```
         **/
        passwordField(): $mol_form_field;
        /**
         *  ```
         *  passwordLabel @ \Pass word
         *  ```
         **/
        passwordLabel(): string;
        /**
         *  ```
         *  passControl $mol_string
         *  	value?val <=> password?val
         *  	type \password
         *  ```
         **/
        passControl(): $$.$mol_string;
        /**
         *  ```
         *  password?val \
         *  ```
         **/
        password(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  submit $mol_button_major
         *  	sub / <= submitLabel
         *  	event_click?val <=> event_submit?val
         *  	disabled <= submit_blocked
         *  ```
         **/
        submit(): $mol_button_major;
        /**
         *  ```
         *  submitLabel @ \Log In
         *  ```
         **/
        submitLabel(): string;
        /**
         *  ```
         *  event_submit?val null
         *  ```
         **/
        event_submit(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  submit_blocked false
         *  ```
         **/
        submit_blocked(): boolean;
    }
}

declare namespace $.$$ {
    class $mol_app_supplies_enter extends $.$mol_app_supplies_enter {
        event_submit(): void;
    }
}

declare namespace $ {
    class $mol_app_supplies extends $mol_book {
        /**
         *  ```
         *  enter $mol_app_supplies_enter entered?val <=> entered?val
         *  ```
         **/
        enter(): $$.$mol_app_supplies_enter;
        /**
         *  ```
         *  entered?val false
         *  ```
         **/
        entered(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  List $mol_app_supplies_list
         *  	minimal_width 600
         *  	supplies <= supplies
         *  	tools <= tools_root
         *  	title <= list_title
         *  	search_query?val <=> supply_id?val
         *  ```
         **/
        List(): $$.$mol_app_supplies_list;
        /**
         *  ```
         *  supplies /$mol_app_supplies_domain_supply
         *  ```
         **/
        supplies(): readonly $mol_app_supplies_domain_supply[];
        /**
         *  ```
         *  tools_root /
         *  ```
         **/
        tools_root(): readonly any[];
        /**
         *  ```
         *  list_title @ \Supplies
         *  ```
         **/
        list_title(): string;
        /**
         *  ```
         *  supply_id?val \
         *  ```
         **/
        supply_id(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  Detail $mol_app_supplies_detail
         *  	minimal_width 800
         *  	supply <= supply
         *  	event_top?val <=> event_front_up?val
         *  ```
         **/
        Detail(): $$.$mol_app_supplies_detail;
        /**
         *  ```
         *  supply null
         *  ```
         **/
        supply(): any;
    }
}

declare namespace $.$$ {
    class $mol_app_supplies extends $.$mol_app_supplies {
        entered(next?: boolean): boolean;
        pages(): $mol_view[] | $mol_app_supplies_enter[];
        Placeholder(): $mol_book_placeholder;
        domain(): $mol_app_supplies_domain_mock;
        supplies(): $mol_app_supplies_domain_supply[];
        supply_id(next?: string): string;
        supply(): $mol_app_supplies_domain_supply;
    }
}