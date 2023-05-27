module.exports = {
    content: [
        "./resources/**/*.antlers.html",
        "./resources/**/*.antlers.php",
        "./resources/**/*.blade.php",
        "./resources/**/*.vue",
        "./content/**/*.md",
    ],
    theme: {
        fontFamily: {
            sans: ["supria-sans", "sans-serif"],
            serif: ["palast-variable", "serif"],
        },
        extend: {},
    },
    plugins: [require("@tailwindcss/typography")],
};
