"use strict";
exports.id = 338;
exports.ids = [338];
exports.modules = {

/***/ 6338:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ HeroIndex)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2247);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__);



const styles = {
    HeroIndex: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.createStyles)((theme)=>({
            wrapper: {
                position: "relative",
                paddingBottom: 80,
                "@media (max-width: 755px)": {
                    paddingTop: 80,
                    paddingBottom: 60
                }
            },
            inner: {
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                gap: theme.spacing.xl,
                alignItems: "center",
                paddingTop: `calc(${theme.spacing.xl} * 4)`,
                paddingBottom: `calc(${theme.spacing.xl} * 4)`,
                [theme.fn.smallerThan("md")]: {
                    flexDirection: "column",
                    gap: +theme.spacing.md * 2
                }
            },
            content: {
                maxWidth: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.rem)(480),
                marginRight: `calc(${theme.spacing.xl} * 3)`,
                [theme.fn.smallerThan("md")]: {
                    maxWidth: "100%",
                    marginRight: 0
                }
            },
            image: {
                flex: 1,
                maxWidth: 400
            },
            title: {
                fontWeight: 800,
                fontSize: 40,
                letterSpacing: -1.25,
                color: theme.colorScheme === "dark" ? theme.white : theme.black,
                maxWidth: 600,
                [theme.fn.smallerThan(520)]: {
                    fontSize: 30,
                    textAlign: "left"
                },
                [theme.fn.smallerThan(360)]: {
                    fontSize: 28
                },
                [theme.fn.smallerThan(330)]: {
                    fontSize: 26
                }
            },
            description: {
                fontWeight: 500,
                fontSize: theme.fontSizes.xl,
                "@media (max-width: 520px)": {
                    fontSize: theme.fontSizes.md
                }
            },
            cta: {
                marginTop: theme.spacing.md,
                display: "flex",
                "@media (max-width: 520px)": {
                    flexDirection: "column"
                }
            },
            ctaButton: {
                "&:not(:first-of-type)": {
                    marginLeft: theme.spacing.md
                },
                "@media (max-width: 520px)": {
                    "&:not(:first-of-type)": {
                        marginTop: theme.spacing.md,
                        marginLeft: 0
                    }
                }
            }
        }))
};
function HeroIndex() {
    const { classes: $  } = styles.HeroIndex();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Container, {
        p: 0,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: $.inner,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: $.content,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                        spacing: 8,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Title, {
                                className: $.title,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        mb: -8,
                                        children: "Your life, one place."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        span: true,
                                        children: "Just like a"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        variant: "gradient",
                                        gradient: {
                                            from: "#00cc44",
                                            to: "lime",
                                            deg: 360
                                        },
                                        span: true,
                                        children: "\xa0digital mind.\xa0"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                size: "xl",
                                color: "dimmed",
                                className: $.description,
                                maw: 500,
                                children: [
                                    "With all apps you need, life's like a game. Say hello to\xa0",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("u", {
                                                children: "your own digital mind"
                                            })
                                        })
                                    }),
                                    ". Fulfill your dreams."
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: $.cta,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                    className: $.ctaButton,
                                    size: "lg",
                                    radius: 22,
                                    rightIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__.IconArrowRight, {}),
                                    children: "Create Account"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Image, {
                    src: "/images/dorkodu-ecosystem.svg",
                    className: $.image
                })
            ]
        })
    });
}


/***/ })

};
;