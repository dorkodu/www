"use strict";
exports.id = 502;
exports.ids = [502];
exports.modules = {

/***/ 2804:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Meta)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/website.ts
const website = {
    root: "https://dorkodu.com",
    twitter: {
        username: "dorkodu"
    }
};

;// CONCATENATED MODULE: ./src/components/Meta.tsx


const Meta = ({ title , description , url , keywords , image  })=>{
    const URL = website.root + url;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: title
            }, "title"),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "title",
                content: description
            }, "meta:title"),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: description
            }, "meta:description"),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "keywords",
                content: keywords
            }, "meta:keywords"),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1.0, maximum-scale=5"
            }, "meta:viewport"),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                httpEquiv: "Content-Type",
                content: "text/html;charset=UTF-8"
            }, "meta:contentType"),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                charSet: "UTF-8"
            }, "meta:charset"),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "og:type",
                content: "website"
            }, "og:type"),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "og:url",
                content: URL
            }, "og:url"),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "og:title",
                content: title
            }, "og:title"),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "og:description",
                content: description
            }, "og:description"),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:card",
                content: "summary"
            }, "twitter:card"),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:site",
                content: website.twitter.username
            }, "twitter:site"),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:url",
                content: URL
            }, "twitter:url"),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:title",
                content: title
            }, "twitter:title"),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:description",
                content: description
            }, "twitter:description"),
            image && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:image",
                        content: image.src
                    }, "twitter:image"),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:image:alt",
                        content: image.alt
                    }, "twitter:image:alt"),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "og:image",
                        content: image.src
                    }, "og:image"),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "og:image:alt",
                        content: image.alt
                    }, "og:image:alt")
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/apple-touch-icon.png?v=2"
            }, "apple-touch-icon"),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/favicon-32x32.png?v=2"
            }, "icon:32"),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/favicon-16x16.png?v=2"
            }, "icon:16"),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "manifest",
                href: "/site.webmanifest"
            }, "manifest"),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "mask-icon",
                href: "/safari-pinned-tab.svg?v=2",
                color: "#20df30"
            }, "mask-icon"),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "shortcut icon",
                href: "/favicon.ico?v=2"
            }, "shortcut icon"),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "msapplication-TileColor",
                content: "#20df30"
            }, "msapplication-TileColor"),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "msapplication-TileImage",
                content: "/mstile-144x144.png?v=2"
            }, "msapplication-TileImage"),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "msapplication-config",
                content: "/browserconfig.xml?v=2"
            }, "msapplication-config"),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "theme-color",
                content: "#20df30"
            }, "theme-color")
        ]
    });
};
/* harmony default export */ const components_Meta = (Meta);


/***/ }),

/***/ 2910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layouts_WebsiteLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mantine/core"
var core_ = __webpack_require__(2247);
// EXTERNAL MODULE: external "@tabler/icons-react"
var icons_react_ = __webpack_require__(2236);
;// CONCATENATED MODULE: ./src/components/Footer/FooterBlock.tsx




const FooterBlock = ()=>{
    const { classes , theme  } = style.FooterWithLinks();
    const data = [
        {
            title: "Company",
            links: [
                {
                    label: "About",
                    link: "/about"
                },
                {
                    label: "Jobs",
                    link: "/jobs"
                },
                {
                    label: "Garden",
                    link: "/garden"
                },
                {
                    label: "For Business",
                    link: "/business"
                },
                {
                    label: "For Creators",
                    link: "/creators"
                }
            ]
        },
        {
            title: "Products",
            links: [
                {
                    label: "Wander",
                    link: "https://wander.dorkodu.com"
                },
                {
                    label: "Forum",
                    link: "https://forum.dorkodu.com"
                },
                {
                    label: "ID",
                    link: "https://id.dorkodu.com"
                }
            ]
        },
        {
            title: "Resources",
            links: [
                {
                    label: "README",
                    link: "/readme"
                },
                {
                    label: "Terms",
                    link: "/terms"
                },
                {
                    label: "Privacy",
                    link: "/privacy"
                },
                {
                    label: "Press",
                    link: "/press"
                },
                {
                    label: "Open Source",
                    link: "https://github.com/dorkodu"
                },
                {
                    label: "Contact Us",
                    link: "/contact"
                }
            ]
        }
    ];
    const groups = data.map((group)=>{
        const links = group.links.map((link, index)=>/*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                className: classes.link,
                component: "a",
                href: link.link,
                onClick: (event)=>event.preventDefault(),
                children: link.label
            }, index));
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: classes.wrapper,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                    className: classes.title,
                    children: group.title
                }),
                links
            ]
        }, group.title);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: classes.footer,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Container, {
                className: classes.inner,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: classes.logo,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Image, {
                                src: theme.colorScheme === "dark" ? "/images/dorkodu_Logo_Colorful.svg" : "/images/dorkodu_Logo_Dark.svg",
                                height: 40,
                                width: "auto",
                                mb: "md",
                                fit: "unset"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Text, {
                                size: 18,
                                weight: 400,
                                color: "dimmed",
                                className: classes.description,
                                children: [
                                    "We are the",
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                                        weight: 500,
                                        span: true,
                                        children: "dream fulfillment technology company"
                                    }),
                                    " ",
                                    "for the humankind."
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: classes.groups,
                        children: groups
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Container, {
                className: classes.afterFooter,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Stack, {
                        spacing: 4,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                                color: "dimmed",
                                size: "sm",
                                children: "Proudly from humans. \uD83C\uDF0E\uD83C\uDDF9\uD83C\uDDF7"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Text, {
                                color: "dimmed",
                                size: "md",
                                weight: 500,
                                children: [
                                    "\xa9 ",
                                    new Date().getFullYear(),
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        style: {
                                            fontWeight: 800
                                        },
                                        children: "Dorkodu"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Group, {
                        spacing: 0,
                        className: classes.social,
                        position: "right",
                        noWrap: true,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.ActionIcon, {
                                size: 40,
                                component: "a",
                                href: "https://twitter.com/dorkodu",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconBrandTwitter, {
                                    size: 28
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.ActionIcon, {
                                size: 40,
                                component: "a",
                                href: "https://github.com/dorkodu",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconBrandGithub, {
                                    size: 28
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.ActionIcon, {
                                size: 40,
                                component: "a",
                                href: "https://youtube.com/@dorkodu",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconBrandYoutube, {
                                    size: 28
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.ActionIcon, {
                                size: 40,
                                component: "a",
                                href: "https://instagram.com/dorkodu",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconBrandInstagram, {
                                    size: 28
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
const style = {
    FooterWithLinks: (0,core_.createStyles)((theme)=>({
            footer: {
                marginTop: 120,
                paddingTop: +theme.spacing.xl * 2,
                paddingBottom: +theme.spacing.xl * 2,
                backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.gray[2],
                borderTop: `10px solid ${theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[1]}`
            },
            logo: {
                maxWidth: 300,
                marginLeft: 10,
                [theme.fn.smallerThan("sm")]: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }
            },
            description: {
                marginTop: 5,
                [theme.fn.smallerThan("sm")]: {
                    marginTop: theme.spacing.xs,
                    textAlign: "center"
                }
            },
            inner: {
                display: "flex",
                justifyContent: "space-between",
                [theme.fn.smallerThan("sm")]: {
                    flexDirection: "column",
                    alignItems: "center",
                    rowGap: +theme.spacing.md * 3
                }
            },
            groups: {
                display: "flex",
                flexWrap: "wrap",
                gap: theme.spacing.xl,
                justifyContent: "space-evenly",
                [theme.fn.smallerThan(500)]: {
                    flexDirection: "column"
                }
            },
            wrapper: {
                minWidth: 120
            },
            link: {
                display: "block",
                color: theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7],
                fontSize: +theme.fontSizes.sm * 1.025,
                paddingTop: 3,
                paddingBottom: 3,
                "&:hover": {
                    textDecoration: "underline"
                }
            },
            title: {
                fontSize: theme.fontSizes.md,
                fontWeight: 800,
                textTransform: "uppercase",
                marginBottom: +theme.spacing.xs / 2,
                color: theme.colorScheme === "dark" ? theme.white : theme.colors.dark[6]
            },
            afterFooter: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: theme.spacing.xl,
                paddingTop: theme.spacing.xl,
                paddingBottom: theme.spacing.xl,
                borderTop: `2px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`,
                [theme.fn.smallerThan("sm")]: {
                    flexDirection: "column",
                    "*": {
                        textAlign: "center"
                    }
                }
            },
            social: {
                [theme.fn.smallerThan("sm")]: {
                    marginTop: theme.spacing.xs
                }
            }
        }))
};

// EXTERNAL MODULE: external "@mantine/hooks"
var hooks_ = __webpack_require__(32);
;// CONCATENATED MODULE: ./src/components/ColorToggle.tsx



function ColorToggleSegment({ size  }) {
    const { colorScheme , toggleColorScheme  } = useMantineColorScheme();
    return /*#__PURE__*/ _jsx(SegmentedControl, {
        radius: "md",
        size: size,
        value: colorScheme,
        onChange: (value)=>{
            toggleColorScheme(value);
        },
        data: [
            {
                value: "light",
                label: /*#__PURE__*/ _jsx(Center, {
                    children: /*#__PURE__*/ _jsx(IconSun, {
                        size: 18,
                        stroke: 3
                    })
                })
            },
            {
                value: "dark",
                label: /*#__PURE__*/ _jsx(Center, {
                    children: /*#__PURE__*/ _jsx(IconMoon, {
                        size: 18,
                        stroke: 3
                    })
                })
            }
        ]
    });
}
function ColorToggleIcon({ size  }) {
    const { colorScheme , toggleColorScheme  } = useMantineColorScheme();
    return /*#__PURE__*/ _jsx(ActionIcon, {
        onClick: ()=>toggleColorScheme(colorScheme === "dark" ? "light" : "dark"),
        size: size,
        sx: (theme)=>({
                backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
                color: theme.colorScheme === "dark" ? theme.colors.yellow[4] : theme.colors.blue[6]
            }),
        children: colorScheme === "dark" ? /*#__PURE__*/ _jsx(IconSun, {
            size: 18
        }) : /*#__PURE__*/ _jsx(IconMoonStars, {
            size: 18
        })
    });
}

function ColorToggleSwitch({ size  }) {
    const { colorScheme , toggleColorScheme  } = (0,core_.useMantineColorScheme)();
    const theme = (0,core_.useMantineTheme)();
    return /*#__PURE__*/ jsx_runtime_.jsx(core_.Switch, {
        checked: colorScheme === "dark",
        onChange: ()=>toggleColorScheme(colorScheme === "dark" ? "light" : "dark"),
        size: size,
        styles: {},
        onLabel: /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconSunFilled, {
            color: theme.white,
            size: 18
        }),
        offLabel: /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconMoonFilled, {
            color: theme.colors.gray[3],
            size: 18
        })
    });
}

// EXTERNAL MODULE: external "@dorkodu/prism"
var prism_ = __webpack_require__(7219);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.2.4_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js
var next_link = __webpack_require__(2612);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Header/HeaderWithMegaMenu.tsx







const links = {
    product: [
        {
            link: "https://forum.dorkodu.com",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(core_.Image, {
                src: "/images/logos/forum_Icon.svg",
                width: 48,
                height: 48,
                alt: "Forum",
                withPlaceholder: true
            }),
            title: "Forum",
            description: "Social Discourse"
        },
        {
            link: "https://id.dorkodu.com",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(core_.Image, {
                src: "/images/logos/id_Icon.svg",
                width: 48,
                height: 48,
                alt: "Dorkodu ID",
                withPlaceholder: true
            }),
            title: "ID",
            description: "Your Digital Identity"
        }
    ],
    company: [
        {
            link: "/jobs",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(core_.ThemeIcon, {
                variant: "light",
                radius: "md",
                size: "lg",
                color: "green",
                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconBriefcase, {})
            }),
            title: "Jobs",
            description: "Join the revolution."
        },
        {
            link: "/readme",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(core_.ThemeIcon, {
                variant: "light",
                radius: "md",
                size: "lg",
                color: "green",
                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconLicense, {})
            }),
            title: "README",
            description: "The Dorkodu Manifesto"
        },
        {
            link: "/garden",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(core_.ThemeIcon, {
                variant: "light",
                radius: "md",
                size: "lg",
                color: "green",
                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconPlant, {})
            }),
            title: "Garden",
            description: "Our ideas, public."
        }
    ],
    business: [
        {
            link: "/business",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(core_.ThemeIcon, {
                variant: "light",
                radius: "md",
                size: "lg",
                color: "green",
                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconBuildingCommunity, {
                    stroke: 2.25
                })
            }),
            title: "For Business",
            description: "Grow together."
        },
        {
            link: "/creators",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(core_.ThemeIcon, {
                variant: "light",
                radius: "md",
                size: "lg",
                color: "green",
                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconHeartHandshake, {
                    stroke: 2
                })
            }),
            title: "For Creators",
            description: "Create together."
        }
    ]
};
const HeaderWithMegaMenu = ()=>{
    const [drawerOpened, { toggle: toggleDrawer , close: closeDrawer  }] = (0,hooks_.useDisclosure)(false);
    const [productLinksOpened, { toggle: toggleProductLinks  }] = (0,hooks_.useDisclosure)(false);
    const [companyLinksOpened, { toggle: toggleCompanyLinks  }] = (0,hooks_.useDisclosure)(false);
    const { classes , theme  } = useStyles();
    const MenuButtonsWithIcon = (list)=>{
        return list.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: item.link,
                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.UnstyledButton, {
                    className: classes.subLink,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Group, {
                        noWrap: true,
                        align: "center",
                        children: [
                            item.icon,
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                                        size: "sm",
                                        weight: 500,
                                        color: theme.colorScheme == "dark" ? theme.white : theme.colors.dark[9],
                                        children: item.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                                        size: "xs",
                                        color: "dimmed",
                                        weight: 450,
                                        children: item.description
                                    })
                                ]
                            })
                        ]
                    })
                })
            }, item.title));
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Box, {
        pb: 75,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(core_.Header, {
                height: "auto",
                px: "md",
                withBorder: false,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Group, {
                    position: "apart",
                    sx: {
                        height: "100%",
                        maxWidth: 920,
                        marginLeft: "auto",
                        marginRight: "auto",
                        paddingTop: 15,
                        paddingBottom: 15
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Image, {
                                src: "/images/dorkodu_Logo_Colorful.svg",
                                alt: "Dorkodu",
                                height: 40
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Group, {
                            sx: {
                                height: "100%"
                            },
                            spacing: 0,
                            className: classes.hiddenMobile,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/about",
                                    className: classes.link,
                                    children: "About"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.HoverCard, {
                                    width: 500,
                                    position: "bottom",
                                    radius: "md",
                                    shadow: "md",
                                    withinPortal: true,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.HoverCard.Target, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(core_.UnstyledButton, {
                                                className: classes.link,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Center, {
                                                    inline: true,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                                                            component: "span",
                                                            mr: 5,
                                                            children: "Our Work"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconChevronDown, {
                                                            size: 18,
                                                            color: theme.colors.gray[5]
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.HoverCard.Dropdown, {
                                            sx: {
                                                overflow: "hidden",
                                                marginTop: 16
                                            },
                                            p: "sm",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(core_.Group, {
                                                    position: "apart",
                                                    px: "md",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                                                        weight: 600,
                                                        children: "Products"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(core_.Divider, {
                                                    my: "sm",
                                                    mx: "-md",
                                                    color: theme.colorScheme === "dark" ? "dark.5" : "gray.1"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(core_.SimpleGrid, {
                                                    cols: 2,
                                                    spacing: 0,
                                                    children: MenuButtonsWithIcon(links.product)
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: classes.dropdownFooter,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Group, {
                                                        position: "apart",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                                                                        weight: 500,
                                                                        size: "sm",
                                                                        children: "Get started"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                                                                        size: "xs",
                                                                        color: "dimmed",
                                                                        children: "Create an account to start using Dorkodu."
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                                                                variant: "default",
                                                                children: "Create Account"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.HoverCard, {
                                    width: 250,
                                    position: "bottom",
                                    radius: "md",
                                    shadow: "md",
                                    withinPortal: true,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.HoverCard.Target, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: classes.link,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Center, {
                                                    inline: true,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                                                            component: "span",
                                                            mr: 5,
                                                            children: "Company"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconChevronDown, {
                                                            size: 18,
                                                            color: theme.colors.gray[5]
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.HoverCard.Dropdown, {
                                            sx: {
                                                overflow: "hidden"
                                            },
                                            p: 8,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Stack, {
                                                spacing: 0,
                                                children: [
                                                    MenuButtonsWithIcon(links.company),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Divider, {
                                                        my: 8,
                                                        color: theme.colorScheme === "dark" ? "dark.4" : "gray.2"
                                                    }),
                                                    MenuButtonsWithIcon(links.business)
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Group, {
                            className: classes.hiddenMobile,
                            spacing: 8,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(ColorToggleSwitch, {
                                    size: "md"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                                    variant: "default",
                                    radius: Number(theme.radius.lg) - 1,
                                    children: "Log In"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                                    radius: Number(theme.radius.lg) - 1,
                                    children: "Sign Up"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Burger, {
                            opened: drawerOpened,
                            onClick: toggleDrawer,
                            size: "md",
                            color: theme.colorScheme === "dark" ? prism_.tokens.color.gray(75) : prism_.tokens.color.gray(20),
                            className: classes.hiddenDesktop
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(core_.Drawer, {
                opened: drawerOpened,
                onClose: closeDrawer,
                size: "75%",
                padding: "md",
                className: classes.hiddenDesktop,
                zIndex: 1000000,
                title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Group, {
                    position: "apart",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Title, {
                            order: 2,
                            size: "h3",
                            children: "Dorkodu"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(ColorToggleSwitch, {
                            size: "md"
                        })
                    ]
                }),
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.ScrollArea, {
                    sx: {
                        height: "calc(100vh - 60px)"
                    },
                    mx: "-md",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            className: classes.link,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "About"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.UnstyledButton, {
                            className: classes.link,
                            onClick: toggleProductLinks,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Center, {
                                inline: true,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                                        component: "span",
                                        mr: 5,
                                        children: "Products"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconChevronDown, {
                                        size: 16,
                                        color: theme.colors.gray[5],
                                        stroke: 3
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Collapse, {
                            in: productLinksOpened,
                            children: MenuButtonsWithIcon(links.product)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.UnstyledButton, {
                            className: classes.link,
                            onClick: toggleCompanyLinks,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Center, {
                                inline: true,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Box, {
                                        component: "span",
                                        mr: 5,
                                        children: "Company"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconChevronDown, {
                                        size: 16,
                                        color: theme.colors.gray[5],
                                        stroke: 3
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Collapse, {
                            in: companyLinksOpened,
                            children: [
                                MenuButtonsWithIcon(links.company),
                                MenuButtonsWithIcon(links.business)
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Divider, {
                            my: "sm",
                            color: theme.colorScheme === "dark" ? "dark.5" : "gray.1"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Group, {
                            position: "center",
                            spacing: "xs",
                            grow: true,
                            pb: "xl",
                            px: 0,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                                    variant: "default",
                                    radius: Number(theme.radius.lg) - 1,
                                    children: "Log In"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                                    radius: Number(theme.radius.lg) - 1,
                                    children: "Sign Up"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
const useStyles = (0,core_.createStyles)((theme)=>({
        link: {
            display: "flex",
            alignItems: "center",
            height: "100%",
            paddingTop: 4,
            paddingBottom: 4,
            paddingLeft: theme.spacing.sm,
            paddingRight: theme.spacing.sm,
            textDecoration: "none",
            borderRadius: theme.spacing.sm,
            color: theme.colorScheme === "dark" ? theme.white : theme.black,
            fontWeight: 500,
            fontSize: theme.fontSizes.sm,
            cursor: "pointer",
            [theme.fn.smallerThan("sm")]: {
                height: 42,
                display: "flex",
                alignItems: "center",
                width: "100%"
            },
            ...theme.fn.hover({
                color: theme.colorScheme === "dark" ? theme.colors.white : theme.colors.green[9],
                backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.green[1],
                textDecoration: "underline"
            })
        },
        subLink: {
            width: "100%",
            padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
            borderRadius: theme.radius.md,
            ...theme.fn.hover({
                backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[1]
            }),
            "&:active": theme.activeStyles
        },
        dropdownFooter: {
            backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[1],
            margin: -theme.spacing.md,
            marginTop: theme.spacing.sm,
            padding: `${theme.spacing.md}px ${Number(theme.spacing.md) * 2}px`,
            paddingBottom: theme.spacing.xl,
            borderTop: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]}`
        },
        hiddenMobile: {
            [theme.fn.smallerThan("sm")]: {
                display: "none"
            }
        },
        hiddenDesktop: {
            [theme.fn.largerThan("sm")]: {
                display: "none"
            }
        }
    }));

;// CONCATENATED MODULE: ./src/layouts/WebsiteLayout.tsx




const WebsiteLayout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(HeaderWithMegaMenu, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Container, {
                    children: children
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(FooterBlock, {})
        ]
    });
};
/* harmony default export */ const layouts_WebsiteLayout = (WebsiteLayout);


/***/ })

};
;