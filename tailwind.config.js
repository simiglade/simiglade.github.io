const plugin = require("tailwindcss/plugin");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      display: ["group-hover"],
      borderWidth: ["group-hover"],
    },
  },
  plugins: [
    plugin(
      function ({
        addUtilities,
        theme
      }) {
        const fontFamily = theme("fontFamily.sans");
        addUtilities({
          ".text-h1": {
            fontFamily,
            fontWeight: 300,
            fontSize: "6rem",
            lineHeight: 1.167,
            letterSpacing: "-0.01562em",
          },
          ".text-h2": {
            fontFamily,
            fontWeight: 300,
            fontSize: "3.75rem",
            lineHeight: 1.2,
            letterSpacing: "-0.00833em",
          },
          ".text-h3": {
            fontFamily,
            fontWeight: 400,
            fontSize: "3rem",
            lineHeight: 1.167,
            letterSpacing: "0em",
          },
          ".text-h4": {
            fontFamily,
            fontWeight: 400,
            fontSize: "2.125rem",
            lineHeight: 1.235,
            letterSpacing: "0.00735em",
          },
          ".text-h5": {
            fontFamily,
            fontWeight: 400,
            fontSize: "1.5rem",
            lineHeight: 1.334,
            letterSpacing: "0em",
          },
          ".text-h6": {
            fontFamily,
            fontWeight: 500,
            fontSize: "1.25rem",
            lineHeight: 1.6,
            letterSpacing: "0.0075em",
          },
          ".text-subtitle1": {
            fontFamily,
            fontWeight: 400,
            fontSize: "1rem",
            lineHeight: 1.75,
            letterSpacing: "0.00938em",
          },
          ".text-subtitle2": {
            fontFamily,
            fontWeight: 500,
            fontSize: "0.875rem",
            lineHeight: 1.57,
            letterSpacing: "0.00714em",
          },
          ".text-body1": {
            fontFamily,
            fontWeight: 400,
            fontSize: "1rem",
            lineHeight: 1.5,
            letterSpacing: "0.00938em",
          },
          ".text-body2": {
            fontFamily,
            fontWeight: 400,
            fontSize: "0.875rem",
            lineHeight: 1.43,
            letterSpacing: "0.01071em",
          },
          ".text-button": {
            fontFamily,
            fontWeight: 500,
            fontSize: "0.875rem",
            lineHeight: 1.75,
            letterSpacing: "0.02857em",
          },
          ".text-caption": {
            fontFamily,
            fontWeight: 400,
            fontSize: "0.75rem",
            lineHeight: 1.66,
            letterSpacing: "0.03333em",
          },
          ".text-overline": {
            fontFamily,
            fontWeight: 400,
            fontSize: "0.75rem",
            lineHeight: 2.66,
            letterSpacing: "0.08333em",
            textTransform: "uppercase",
          },
        }, {
          variants: ['responsive', 'hover'],
        });
      }, {
        theme: {
          extend: {
            colors: {
              primary: {
                light: "#6beeff",
                DEFAULT: "#00C2FF",
                main: "#00C2FF",
                dark: "#233972",
                contrastText: "#ffffff",
              },
              secondary: {
                light: "#ff9b49",
                DEFAULT: "#FF6916",
                main: "#FF6916",
                dark: "#c43700",
                contrastText: "#ffffff",
              },
              success: {
                dark: "#007717",
                DEFAULT: "#28a745",
                main: "#28a745",
                light: "#64da73",
                contrastText: "#ffffff",
              },
              info: {
                dark: "#007388",
                DEFAULT: "#17a2b8",
                main: "#17a2b8",
                light: "#60d4ea",
                contrastText: "#ffffff",
              },
              warning: {
                dark: "#c79100",
                DEFAULT: "#ffc107",
                main: "#ffc107",
                light: "#fff350",
                contrastText: "#ffffff",
              },
              error: {
                dark: "#a3001e",
                DEFAULT: "#dc3545",
                main: "#dc3545",
                light: "#ff6b70",
                contrastText: "#ffffff",
              },
              divider: "rgba(0, 0, 0, 0.12)",
              action: {
                active: "rgba(0, 0, 0, 0.54)",
                hover: "rgba(0, 0, 0, 0.04)",
                selected: "rgba(0, 0, 0, 0.08)",
                disabled: "rgba(0, 0, 0, 0.26)",
                disabledBackground: "rgba(0, 0, 0, 0.12)",
                focus: "rgba(0, 0, 0, 0.12)",
              },
            },
            textColor: {
              textPrimary: "#233972",
              textSecondary: "rgba(0, 0, 0, 0.54)",
              disabled: "rgba(0, 0, 0, 0.38)",
              hint: "rgba(0, 0, 0, 0.38)",
            },
            backgroundColor: {
              disabled: "rgba(0, 0, 0, 0.12)",
            },
            opacity: {
              focus: ".12",
              activated: ".12",
              disabled: ".38",
              selected: ".08",
              hover: ".04",
            },
            fontFamily: {
              sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
            },
            boxShadow: {
              1: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
              2: "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
              3: "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
              4: "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
              5: "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
              6: "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
              7: "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
              8: "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
              9: "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
              10: "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
              11: "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
              12: "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
              13: "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
              14: "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
              15: "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
              16: "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
              17: "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
              18: "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
              19: "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
              20: "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
              21: "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
              22: "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
              23: "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
              24: "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
            },
            zIndex: {
              mobileStepper: 1000,
              speedDial: 1050,
              appBar: 1100,
              drawer: 1200,
              modal: 1300,
              snackbar: 1400,
              tooltip: 1500,
            },
          },
        },
        variants: {
          extend: {
            backgroundColor: ["active"],
            boxShadow: ["active"],
            transitionDuration: ['hover', 'focus'],
          },
        },
      }
    ),
  ],
};