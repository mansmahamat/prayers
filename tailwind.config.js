module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      quran: ['Mcs_Swer_Al_Quran_2', 'Helvetica', 'Arial', 'sans-serif'],
      beautiful: ['QuranSurah01-w1yO6', 'sans-serif'],
      otherquran: ['quran_common', 'sans-serif'],
      sans: ['PlayfairDisplaySC-Regular', 'sans-serif']
    },

    container: {
      center: true,

      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
