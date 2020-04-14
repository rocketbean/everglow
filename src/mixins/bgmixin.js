export const bgmixin = {
	methods: {
		assignParticleBg (el, opts = {}) {
			return particlesJS(el, 
        {
          "particles": {
            "number": {
              "value": 130,
              "density": {
                "enable": true,
                "value_area": 394.57382081613633
              }
            },
            "color": {
              "value": "#826868"
            },
            "shape": {
              "type": "image",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              },
              "image": {
                "src": `data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='66.667px' height='70px' viewBox='0 0 66.667 70' enable-background='new 0 0 66.667 70' xml:space='preserve'%3E%3Cg%3E%3Cpath fill='%232e7d32 ' d='M59.695,49.757v0.003c0.021,0.01,0.496,0.195,0.646,0.282c0.189,0.14,0.334,0.338,0.334,0.591 c0,0.042-0.101,0.356-0.105,0.368c-5.02,12.727-18.358,15.307-26.354,15.471c-2.355-0.005-6.876-0.186-11.722-2.371 c-1.505-0.678-2.936-1.568-4.285-2.615c-0.099-0.072-0.2-0.135-0.299-0.209c-1.441-1.097-2.726-2.354-3.818-3.773 c-0.068-0.081-0.141-0.158-0.208-0.24c-3.792-4.592-5.1-13.878-1.388-17.791c1.981-2.087,4.479-2.928,6.363-3.27 c1.327-0.27,2.919-0.387,3.899-0.387c1.043,0,5.598,0.064,8.057,2.522c2.008,2.151,2.753,4.044,3.089,5.979 c0.325,1.868,0.498,7.834,0.498,7.834s0,0.183,0.153,0.183c0.114,0,0.152-0.174,0.152-0.174s0.391-5.834,0.65-7.816 c0.25-1.906,0.829-3.885,2.848-5.903c1.877-1.878,5.009-2.609,7.36-2.854l5.428-0.432c0,0,0.187-0.023,0.187-0.138 c0-0.115-0.189-0.153-0.189-0.153l-5.428-0.433c-2.352-0.244-5.442-0.951-7.319-2.828c-2.019-2.02-2.639-4.022-2.889-5.929 c-0.259-1.982-0.649-7.816-0.649-7.816s-0.039-0.174-0.153-0.174c-0.153,0-0.153,0.183-0.153,0.183s-0.173,5.965-0.497,7.834 c-0.336,1.934-1.081,3.826-3.09,5.979c-2.458,2.458-6.049,2.447-8.057,2.522c-0.258-0.001-0.514-0.003-0.763-0.003 c-1.205,0-2.349-0.12-3.427-0.333c-1.856-0.408-4.211-1.293-6.07-3.236c-2.432-2.544-2.704-7.384-1.553-11.719 c0.021-0.084,0.932-3.252,2.657-5.692c1.082-1.526,2.378-2.881,3.851-4.063c0.478-0.384,0.966-0.737,1.459-1.069 c1.142-0.819,2.288-1.426,3.534-1.988c2.695-1.215,4.753-1.903,7.165-2.198c2.357-0.322,4.039-0.333,4.337-0.333 c0.026,0,0.402-0.007,0.568-0.007c8.026,0.221,21.099,2.874,26.055,15.441c0.005,0.011,0.105,0.326,0.105,0.368 c0,0.253-0.145,0.451-0.334,0.591c-0.15,0.086-0.626,0.271-0.646,0.282v0.004c-1.404,0.551-2.402,1.911-2.402,3.512 c0,2.088,1.683,3.713,3.77,3.713c2.248,0,3.726-2.151,3.726-4.567c-0.036-0.501-0.07-1.002-0.145-1.495 c-0.011-0.065-0.021-0.138-0.03-0.198C62.805,10.053,51.276,0.951,35.192,0.951L33.316,0.93C16.49,1.065,3.791,11.191,3.459,23.758 c0.002,1.367,0.089,3.397,1.101,6.294C5.48,32.688,3.571,34,2.735,34.449c-0.236,0.148-0.485,0.28-0.757,0.374 c0,0-0.106,0.041-0.106,0.192c0,0.113,0.106,0.152,0.106,0.152c0.247,0.07,0.472,0.177,0.686,0.299 c0.8,0.407,2.845,1.716,1.896,4.435c-1.021,2.921-1.101,4.963-1.101,6.329c0.326,12.573,13.11,22.704,29.942,22.84l1.791-0.021 c16.693,0,28.491-9.863,29.596-21.591c0-4.112-2.301-5.097-4.013-4.927c-2.076,0.207-3.482,1.625-3.482,3.713 C57.293,47.845,58.291,49.204,59.695,49.757'/%3E%3C/g%3E%3C/svg%3E%0A`,
                "width": 50,
                "height": 50
              }
            },
            "opacity": {
              "value": 0.2324947488255008,
              "random": true,
              "anim": {
                "enable": true,
                "speed": 0.3248308849205381,
                "opacity_min": 0.008120772123013452,
                "sync": true
              }
            },
            "size": {
              "value": 10,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 1,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": false,
              "distance": 205.17838682439088,
              "color": "#878787",
              "opacity": 0.4,
              "width": 2
            },
            "move": {
              "enable": true,
              "speed": 0.4,
              "direction": "bottom",
              "random": true,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": true,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": false,
                "mode": "bubble"
              },
              "onclick": {
                "enable": true,
                "mode": "repulse"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 400,
                "line_linked": {
                  "opacity": 0.5
                }
              },
              "bubble": {
                "distance": 400,
                "size": 4,
                "duration": 0.3,
                "opacity": 1,
                "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true
        }
        )
		}
	}
}