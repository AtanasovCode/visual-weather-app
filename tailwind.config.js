/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#061c09',
        'background': '#f0fcf2',
        'primary': '#35d646',
        'secondary': '#8eb9e8',
        'accent': '#6460df',
      },
      backgroundImage: {
        'hero': "url('https://images.unsplash.com/photo-1464427219274-ab9450eba98b?q=80&w=1946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        //weather images:
        'snow': "url('https://images.unsplash.com/photo-1610571672253-f737af626d8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        'rain': "url('https://images.unsplash.com/photo-1468476396571-4d6f2a427ee7?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        'fog': "url('https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        'cloudy': "url('https://images.unsplash.com/photo-1429305336325-b84ace7eba3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        'clear-sky': "url('https://images.unsplash.com/photo-1647259455654-c733db665d93?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        'clear-night': "url('https://images.unsplash.com/photo-1496467606013-2b7b9caa2a67?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        'cloudy-night': "url('https://images.unsplash.com/photo-1686080186970-4de7f7ad70cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        'cloudy-day': "url('https://images.unsplash.com/photo-1519541312928-0872bb28207b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdWR5JTIwZGF5fGVufDB8MHwwfHx8Mg%3D%3D')",

      },
      screens: {
        '2xl': "1600px",
        'xl': "1330px",
        '2xs': "475px",
        'xs': "550px",
      }
    },
  },
  plugins: [],
}