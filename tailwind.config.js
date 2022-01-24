module.exports = {
  content: ['./src/App.js', './src/components/Navbar.jsx', './src/components/Sidebar.jsx', './src/components/Featured.jsx', './src/components/FavAlert.jsx'],
  theme: {
    fontFamily: {
      'mukta': ['Mukta', 'sans-serif'],
      'nautigal': ['The Nautigal', 'cursive']
    },
    colors: {
      red: '#E51A1A',
      white: '#fff',
      green: '#15803d'
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
