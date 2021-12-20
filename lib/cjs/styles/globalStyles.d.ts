/// <reference types="react" />
declare var _styles: any;
declare var _material: any;
declare function GlobalStyles(): React.CElement<{
    styles: {
        "*": {
            margin: number;
            padding: number;
        };
        "#root": {
            width: string;
            height: string;
            flex: string;
        };
        input: {
            "&[type=number]": {
                MozAppearance: string;
                "&::-webkit-outer-spin-button": {
                    margin: number;
                    WebkitAppearance: string;
                };
                "&::-webkit-inner-spin-button": {
                    margin: number;
                    WebkitAppearance: string;
                };
            };
        };
        textarea: {
            "&::-webkit-input-placeholder": {
                color: any;
            };
            "&::-moz-placeholder": {
                opacity: number;
                color: any;
            };
            "&:-ms-input-placeholder": {
                color: any;
            };
            "&::placeholder": {
                color: any;
            };
        };
        img: {
            display: string;
            maxWidth: string;
        };
        ".blur-up": {
            WebkitFilter: string;
            filter: string;
            transition: string;
        };
        ".blur-up.lazyloaded ": {
            WebkitFilter: string;
            filter: string;
        };
    };
}, React.Component<{
    styles: {
        "*": {
            margin: number;
            padding: number;
        };
        "#root": {
            width: string;
            height: string;
            flex: string;
        };
        input: {
            "&[type=number]": {
                MozAppearance: string;
                "&::-webkit-outer-spin-button": {
                    margin: number;
                    WebkitAppearance: string;
                };
                "&::-webkit-inner-spin-button": {
                    margin: number;
                    WebkitAppearance: string;
                };
            };
        };
        textarea: {
            "&::-webkit-input-placeholder": {
                color: any;
            };
            "&::-moz-placeholder": {
                opacity: number;
                color: any;
            };
            "&:-ms-input-placeholder": {
                color: any;
            };
            "&::placeholder": {
                color: any;
            };
        };
        img: {
            display: string;
            maxWidth: string;
        };
        ".blur-up": {
            WebkitFilter: string;
            filter: string;
            transition: string;
        };
        ".blur-up.lazyloaded ": {
            WebkitFilter: string;
            filter: string;
        };
    };
}, any, any>>;
