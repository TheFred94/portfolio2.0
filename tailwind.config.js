/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    fontFamily: {
      header1: ['Satoshi-Black'],
      header2: ['Satoshi-BlackItalic'],
      header2Alt: ['JetBrainsMono-ExtraBoldItalic'],
      header3: ['Satoshi-Bold'],
      header4: ['Satoshi-Medium'],
      paragraph: ['Satoshi-Regular'],
      paragraphAc: ['Satoshi-Medium'],
    },
    colors: {
      Bg: 'var(--Bg)',
      Tx: 'var(--Tx)',
      Sc: 'var(--Sc)',
      St: 'var(--St)',
      TxGray: 'var(--TxGray)',
      Ac: 'var(--Ac)',
    },
    extend: {},
  },
  plugins: [],
};
