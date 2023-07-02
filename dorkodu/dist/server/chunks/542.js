"use strict";
exports.id = 542;
exports.ids = [542];
exports.modules = {

/***/ 4542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$m": () => (/* binding */ Showcase),
/* harmony export */   "Ey": () => (/* binding */ StoryCard),
/* harmony export */   "GM": () => (/* binding */ WIP),
/* harmony export */   "NZ": () => (/* binding */ SectionTitle),
/* harmony export */   "RW": () => (/* binding */ StarDivider)
/* harmony export */ });
/* unused harmony export punctuation */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_emoji__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9744);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2247);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mantine_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32);
/* harmony import */ var _mantine_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mantine_hooks__WEBPACK_IMPORTED_MODULE_3__);




const SectionTitle = ({ icon , title , text  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Container, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Flex, {
            gap: 15,
            align: "center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    sx: {
                        width: 40
                    },
                    children: icon
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    sx: {
                        width: "100% - 40px"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Title, {
                            order: 2,
                            sx: {
                                letterSpacing: -0.75
                            },
                            children: title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Text, {
                            weight: 500,
                            color: "dimmed",
                            maw: 400,
                            children: text
                        })
                    ]
                })
            ]
        })
    });
};
const StarDivider = ()=>{
    const theme = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.useMantineTheme)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Text, {
        weight: 600,
        size: "5rem",
        mr: 5,
        mt: "2.5rem",
        mb: "4rem",
        color: theme.colorScheme == "dark" ? theme.colors.dark[6] : theme.colors.gray[3],
        sx: {
            userSelect: "none"
        },
        align: "center",
        children: "꘏"
    });
};
const StoryCard = ({ icon , text , order  })=>{
    const theme = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_2__.useMantineTheme)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Paper, {
        shadow: "sm",
        withBorder: true,
        p: "md",
        m: 10,
        sx: {
            backgroundColor: theme.colorScheme == "dark" ? theme.colors.dark[8] : theme.white
        },
        radius: 10,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Group, {
                position: "apart",
                mb: 8,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        w: 36,
                        children: icon
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Text, {
                        weight: 900,
                        size: 30,
                        variant: "gradient",
                        children: order
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: text
            })
        ]
    });
};
const punctuation = (/* unused pure expression or super */ null && ([
    "＊",
    "⁕",
    "๛",
    "⹈",
    "꘏",
    "꘎",
    "⋆",
    "⭑",
    "☸"
]));
const Showcase = ({ content , noCenter =false , size =1  })=>{
    const isSmallScreen = (0,_mantine_hooks__WEBPACK_IMPORTED_MODULE_3__.useMediaQuery)("(max-width: 720px)");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Container, {
        py: 40,
        px: 0,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Flex, {
            direction: isSmallScreen ? "column" : "row",
            align: noCenter ? "flex-start" : "center",
            justify: noCenter ? "flex-start" : "center",
            gap: 20,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        flex: size
                    },
                    children: content[0]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        flex: 1
                    },
                    children: content[1]
                })
            ]
        })
    });
};
const WIP = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Container, {
        size: 600,
        my: 50,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Paper, {
            radius: 10,
            sx: ($)=>({
                    backgroundColor: $.colors.orange[2],
                    padding: 12
                }),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Group, {
                noWrap: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles_emoji__WEBPACK_IMPORTED_MODULE_1__/* .Emoji */ .dy, {
                        size: 40,
                        emoji: _styles_emoji__WEBPACK_IMPORTED_MODULE_1__/* .SadFace */ .LY
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Title, {
                                order: 3,
                                sx: ($)=>({
                                        color: $.colors.yellow[7]
                                    }),
                                children: "Oops!"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                color: "dark",
                                children: "This page is currently not available."
                            })
                        ]
                    })
                ]
            })
        })
    });


/***/ })

};
;