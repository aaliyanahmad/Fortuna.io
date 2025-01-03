// src/Viewport.js
const Viewport = () => {
    const styles = {
        app: {
            textAlign: 'center',
            padding: '20px', // Default padding for mobile
        },
        appLogo: {
            height: '30vmin', // Default logo size for mobile
        },
        appHeader: {
            backgroundColor: '#282c34',
            minHeight: '100vh', // Full height for mobile
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 'calc(10px + 2vmin)', // Responsive font size
            color: 'white',
        },
        // Media queries
        view: {
        '@media (min-width: 768px)': {
            app: {
                padding: '40px', // Increase padding for larger screens
            },
            appLogo: {
                height: '20vmin', // Adjust logo size for tablets
            },
            appHeader: {
                minHeight: '80vh', // Adjust header height for tablets
                fontSize: 'calc(12px + 2vmin)', // Slightly larger font size
            },
        },
        '@media (min-width: 1024px)': {
            app: {
                padding: '60px', // Further increase padding for desktops
            },
            appLogo: {
                height: '15vmin', // Adjust logo size for desktops
            },
            appHeader: {
                minHeight: '70vh', // Adjust header height for desktops
                fontSize: 'calc(14px + 2vmin)', // Larger font size for desktops
            },
        },
    }
    };

    return styles;
};

export default Viewport;