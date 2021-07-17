const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./public/index.html', './src/stories/**/*.{js,jsx}'],
  theme: {
    colors: {
      default: {
        DEFAULT: '#E0E0E0',
        dark: '#AEAEAE',
      },
      primary: {
        DEFAULT: '#2962FF',
        dark: '#0039CB',
      },
      secondary: {
        DEFAULT: '#455A64',
        dark: '#1C313A',
      },
      danger: {
        DEFAULT: '#D32F2F',
        dark: '#9A0007',
      },
      grey: {
        DEFAULT: '#9E9E9E',
        dark: '#3F3F3F',
      },
      white: '#ffffff',
    },
    fontFamily: {
      notosans: ['Noto Sans JP', ...defaultTheme.fontFamily.serif],
    },
  },
};
