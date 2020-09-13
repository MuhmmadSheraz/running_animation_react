import React from "react";
import "./animation.css";
import img1 from "../../Assets/img1.gif";
import img2 from "../../Assets/img2.gif";
import useWebAnimations from "@wellyshen/use-web-animations";

export default Animation = () => {
  const { ref, getAnimation } = useWebAnimations({
    playbackRate: 0.5,
    keyframes: [
      { transform: "translate(-100%,0)" },
      { transform: "translate(150%,0)" },
    ],
    timing: {
      duration: 3000,
      iterations: Infinity,
    },
  });
  const increament = () => {
      const animation = getAnimation();
      setInterval(() => {
        if (animation.playbackRate > 1) {
          animation.playbackRate = 1;
        }
      }, 5000);
    return animation.updatePlaybackRate(animation.playbackRate * 1.5);
  };

  return (
    <div className="bgWrapper" onClick={increament}>
      <div className="images" ref={ref}>
        <img src={img1} />
        <img src={img2} />
      </div>
    </div>
  );
};
