"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "@mantine/core"
var core_ = __webpack_require__(2247);
// EXTERNAL MODULE: external "@mantine/hooks"
var hooks_ = __webpack_require__(32);
// EXTERNAL MODULE: external "@dorkodu/prism"
var prism_ = __webpack_require__(7219);
;// CONCATENATED MODULE: ./src/styles/theme.ts

const theme = {
    ...prism_.theme,
    focusRing: "auto",
    respectReducedMotion: true,
    cursorType: "pointer",
    defaultRadius: "md",
    dir: "ltr",
    white: prism_.tokens.color.gray(100),
    black: prism_.tokens.color.gray(5),
    colors: {
        dorkodu: [
            prism_.tokens.color.green(95),
            prism_.tokens.color.green(88),
            prism_.tokens.color.green(80),
            prism_.tokens.color.green(76),
            prism_.tokens.color.green(67),
            prism_.tokens.color.green(60),
            prism_.tokens.color.green(50),
            prism_.tokens.color.green(45),
            prism_.tokens.color.green(40),
            prism_.tokens.color.green(35)
        ]
    },
    primaryColor: "green",
    defaultGradient: {
        deg: 60,
        from: "green",
        to: "lime"
    },
    fontFamily: `Rubik, Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, sans-serif`,
    fontFamilyMonospace: `ui-monospace, "JetBrains Mono", "Cascadia Mono", SFMono-Regular, "Segoe UI Mono", "Roboto Mono", Liberation Mono, Courier New, "Ubuntu Mono",  Menlo, Monaco, Consolas, monospace`,
    lineHeight: 1.25,
    headings: {
        fontWeight: 600,
        fontFamily: "Rubik",
        sizes: {
            h1: {
                lineHeight: 1.25,
                fontWeight: 800
            },
            h2: {
                lineHeight: 1.25,
                fontWeight: 750
            },
            h3: {
                lineHeight: 1.3,
                fontWeight: 650
            },
            h4: {
                lineHeight: 1.3,
                fontWeight: 600
            },
            h5: {
                lineHeight: 1.35,
                fontWeight: 550
            },
            h6: {
                lineHeight: 1.35,
                fontWeight: 500
            }
        }
    },
    globalStyles: (theme)=>({})
};
/* harmony default export */ const styles_theme = (theme);

// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.2.4_react-dom@18.2.0_react@18.2.0/node_modules/next/script.js
var script = __webpack_require__(6433);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.2.4_react-dom@18.2.0_react@18.2.0/node_modules/next/font/google/target.css?{"path":"src/styles/fonts.ts","import":"Rubik","arguments":[{"weight":"variable","subsets":["latin","latin-ext"],"style":["normal","italic"]}],"variableName":"Rubik"}
var fonts_ts_import_Rubik_arguments_weight_variable_subsets_latin_latin_ext_style_normal_italic_variableName_Rubik_ = __webpack_require__(1884);
var fonts_ts_import_Rubik_arguments_weight_variable_subsets_latin_latin_ext_style_normal_italic_variableName_Rubik_default = /*#__PURE__*/__webpack_require__.n(fonts_ts_import_Rubik_arguments_weight_variable_subsets_latin_latin_ext_style_normal_italic_variableName_Rubik_);
;// CONCATENATED MODULE: ./src/pages/_app.tsx








function App(props) {
    const { Component , pageProps  } = props;
    const [colorScheme, setColorScheme] = (0,hooks_.useLocalStorage)({
        key: "theme",
        defaultValue: "light",
        getInitialValueInEffect: false,
        serialize: (value)=>value,
        deserialize: (value)=>value
    });
    const toggleColorScheme = (value)=>{
        const scheme = value || (colorScheme === "dark" ? "light" : "dark");
        const color = scheme === "light" ? "#ffffff" : "#1A1B1E";
        document.documentElement.style.backgroundColor = color;
        const themeColor = document.querySelector('meta[name="theme-color"]');
        if (themeColor) themeColor.content = color;
        setColorScheme(scheme);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        className: style_default().dynamic([
                            [
                                "11d5efc8775a7d3c",
                                [
                                    (fonts_ts_import_Rubik_arguments_weight_variable_subsets_latin_latin_ext_style_normal_italic_variableName_Rubik_default()).style.fontFamily
                                ]
                            ]
                        ]),
                        children: "Dorkodu"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "minimum-scale=1, initial-scale=1, width=device-width",
                        className: style_default().dynamic([
                            [
                                "11d5efc8775a7d3c",
                                [
                                    (fonts_ts_import_Rubik_arguments_weight_variable_subsets_latin_latin_ext_style_normal_italic_variableName_Rubik_default()).style.fontFamily
                                ]
                            ]
                        ])
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "robots",
                        content: "notranslate",
                        className: style_default().dynamic([
                            [
                                "11d5efc8775a7d3c",
                                [
                                    (fonts_ts_import_Rubik_arguments_weight_variable_subsets_latin_latin_ext_style_normal_italic_variableName_Rubik_default()).style.fontFamily
                                ]
                            ]
                        ])
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "googlebot",
                        content: "notranslate",
                        className: style_default().dynamic([
                            [
                                "11d5efc8775a7d3c",
                                [
                                    (fonts_ts_import_Rubik_arguments_weight_variable_subsets_latin_latin_ext_style_normal_italic_variableName_Rubik_default()).style.fontFamily
                                ]
                            ]
                        ])
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "google",
                        content: "notranslate",
                        className: style_default().dynamic([
                            [
                                "11d5efc8775a7d3c",
                                [
                                    (fonts_ts_import_Rubik_arguments_weight_variable_subsets_latin_latin_ext_style_normal_italic_variableName_Rubik_default()).style.fontFamily
                                ]
                            ]
                        ])
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                        id: "ColorThemeFARTBlocker",
                        strategy: "beforeInteractive",
                        children: `function set(e){let t="light"===e?"#ffffff":"#1A1B1E";document.documentElement.style.backgroundColor=t,document.querySelector('meta[name="theme-color"]').setAttribute("content",t)}let theme=localStorage.getItem("theme");"light"!==theme&&"dark"!==theme&&(theme="light",localStorage.setItem("theme","light")),set(theme);`
                    }),
                    jsx_runtime_.jsx((style_default()), {
                        id: "11d5efc8775a7d3c",
                        dynamic: [
                            (fonts_ts_import_Rubik_arguments_weight_variable_subsets_latin_latin_ext_style_normal_italic_variableName_Rubik_default()).style.fontFamily
                        ],
                        children: `html{font-family:${(fonts_ts_import_Rubik_arguments_weight_variable_subsets_latin_latin_ext_style_normal_italic_variableName_Rubik_default()).style.fontFamily}}`
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(core_.ColorSchemeProvider, {
                colorScheme: colorScheme,
                toggleColorScheme: toggleColorScheme,
                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.MantineProvider, {
                    withGlobalStyles: true,
                    withNormalizeCSS: true,
                    theme: {
                        ...styles_theme,
                        colorScheme
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 7219:
/***/ ((module) => {

module.exports = require("@dorkodu/prism");

/***/ }),

/***/ 2247:
/***/ ((module) => {

module.exports = require("@mantine/core");

/***/ }),

/***/ 32:
/***/ ((module) => {

module.exports = require("@mantine/hooks");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [683,550,30], () => (__webpack_exec__(4273)));
module.exports = __webpack_exports__;

})();