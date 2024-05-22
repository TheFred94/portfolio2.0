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
    keyframes: {
      slideDown: {
        from: { height: 0 },
        to: { height: 'var(--radix-accordion-content-height)' },
      },
      slideUp: {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: 0 },
      },
    },
    animation: {
      slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
    },
  },
  plugins: [],
};
