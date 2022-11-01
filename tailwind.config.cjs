/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        mediumTurquoise: '#00CFC1',
        brunswickGreen: '#2C4F42',
        fireBrick: '#BB0A21',
        erieBlack: '#252627',
        turquoiseBlue: '#00FFE7',
      },
    },
  },
  plugins: [],
};
