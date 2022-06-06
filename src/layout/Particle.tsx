import Particles from "react-tsparticles";

export const Particle = () => {
  const options = {
    /* custom options */
    background: {
      color: {
        value: "#a1970d",
      },
    },
  };

  return <Particles width="200px" height="250px" options={options} />;
};
