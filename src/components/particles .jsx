import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { useCallback } from "react"

export default function Particle_gen() {
 
  const particlesInit = useCallback(async (engine) => {
    //console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async (container) => {
    //console.log(container);
}, []);
return (
    <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        className="h-[8000px] w-full absolute z-[-9] md:h-[5200px] "
        options={{
            fpsLimit: 60,
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 600
      }
    },
    color: {
      value: "#fff",
      animation: {
        enable: true,
        speed: 10,
        sync: true
      }
    },
    shape: {
      type: "circle",
      stroke: {
        width: 5,
        color:"#050816"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "https://cdn.matteobruni.it/images/particles/github.svg",
        width: 200,
        height: 200
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 10,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 1,
      random: true,
      anim: {
        enable: false,
        speed: 20,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 100,
      color: "random",
      opacity: 0.4,
      width: 1,
      triangles: {
        enable: true,
        color: "#06d6a0",
        opacity: 0.1,
        
      }
    },
    move: {
      enable: true,
      speed: 0.1,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      attract: {
        enable: false,
        rotateX: 1200,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 0.8,
        speed: 3
      },
      repulse: {
        distance: 200
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true,
  background: {
    color: "#050816",
    image: "",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover"
  },
   fullScreen:{enable:false}
        }}
    />
);
}
