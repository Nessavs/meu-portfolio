// Configuração das partículas
const particlesConfig = {
  fullScreen: {
    enable: false, // Importante: para não ocupar a tela inteira, apenas o container
    zIndex: 0
  },
  particles: {
    number: {
      value: 50, // Quantidade de partículas
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#a855f7" // A cor roxa do seu tema
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5,
      random: true
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#a855f7", // Cor das linhas de conexão
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1, // Velocidade do movimento
      direction: "none",
      out_mode: "out"
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse" // As partículas se afastam do mouse
      },
      onclick: {
        enable: true,
        mode: "push" // Adiciona novas partículas ao clicar
      },
      resize: true
    }
  }
};

export default particlesConfig;