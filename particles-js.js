particlesJS('particles-js', {
        particles: {
            number: { value: 300 },
            color: { 
                value: ['#b6e1ec', '#f5b0ec', '#f1f095', '#e4e4dd'],
                random: true
            },
            shape: {
                type: 'circle'
            },
            size: {
                value: 6,
                random: true,
                anim: {
                    speed: 6,
                    size_min: 2
                }
            },
            opacity: {
                value: 1
            },
            move: {
                enable: true,
                speed: 3,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out'
            },
            line_linked: {
                enable: false
            }
        },
        interactivity: {
            events: {
                onhover: {
                    enable: false
                }
            }
        }
    });
