module.exports = {
  content: ['./src/components/Navbar.jsx', './src/components/Sidebar.jsx', './src/components/Featured.jsx'],
  theme: {
    fontFamily: {
      'mukta': ['Mukta', 'sans-serif'],
      'nautigal': ['The Nautigal', 'cursive']
    },
    colors: {
      red: '#E51A1A',
      white: '#fff'
    },
    extend: {},
    container: {
      center: true,
      screens: {
        lg: '1324px'
      }
    },
  },
  plugins: [],
}
