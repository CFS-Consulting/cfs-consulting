const colors = require("tailwindcss/colors");

module.exports = {
    content: [
        "./resources/**/*.antlers.html",
        "./resources/**/*.antlers.php",
        "./resources/**/*.blade.php",
        "./content/**/*.md",
    ],
    theme: {
        fontFamily: {
            sans: ["supria-sans", "sans-serif"],
            serif: ["palast-variable", "serif"],
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            white: colors.white,
            neutral: {
                dark: "#343A40",
                text: "#495057",
                light: "#EBEDEE",
                lighter: "#FDFBFB",
            },
            brand: {
                pink: "#E11D77",
                "pink-light": "#FFE3ED",
                green: "#0D9488",
                "green-light": "#F0FDFA",
                yellow: "#FFD43B",
                "yellow-light": "#FFF7D9",
            },
        },
        extend: {},
    },
    plugins: [require("@tailwindcss/typography")],
};
