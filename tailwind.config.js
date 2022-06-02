module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      transitionProperty: {
        height: 'height',
        width: 'width',
        spacing: 'margin, padding',
      },
      fontFamily: {
        DancingScript: ['Dancing Script', 'cursive'],
        Caveat: ['Caveat', 'cursive'],
        DMSans: ['DM Sans', 'cursive'],
        IndieFlower: ['Indie Flower', 'cursive'],
        Pacifico: ['Pacifico', 'cursive'],
        PatrickHand: ['Patrick Hand', 'cursive'],
        Satisfy: ['Satisfy', 'cursive'],
        ShadowsIntoLight: ['Shadows Into Light', 'cursive'],
      },
      boxShadow: {
        btn: '-3px -3px 4px rgba(255, 255, 255, 0.9),3px 3px 4px rgba(192, 208, 229, 0.7);',
        btnActive:
          'inset -2px -2px 3px rgba(255, 255, 255, 0.5),inset 4px 4px 6px rgba(192, 208, 229, 0.7)',
        btn3d: '0px 5px 0px',
        btn3dActive: '0px 2px 0px',
      },
      borderWidth: {
        3: '3px',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *')
      addVariant('first', '& > :first-child')
      addVariant('last', '& > :last-child')
      addVariant('not-last', '& > :not(:last-child)')
      addVariant('not-first', '& > :not(:first-child)')
      addVariant('odd', '& > :nth-child(odd)')
      addVariant('even', '& > :nth-child(even)')
      addVariant('child-hover', '& > *:hover')
    },
  ],
}
