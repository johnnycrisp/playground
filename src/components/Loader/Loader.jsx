import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./_loader.scss";

const Loader = ({ again }) => {
  const load = gsap.timeline({
    paused: "true",
  });
  let loader = useRef(null);
  let progress = useRef(null);
  let percent = useRef(null);
  let bar = useRef(null);
  let barc = useRef(null);

  useEffect(() => {
    load.to([percent, bar], {
      duration: 0.2,
      opacity: 0,
      zIndex: -1,
    });
    load.to(progress, {
      duration: 0.6,
      width: "0%",
    });
    load.to(loader, {
      visibility: "hidden",
      zIndex: -1,
    });

    loading();
  }, [again]);

  let id;
  let width1 = 1;

  function loading() {
    id = setInterval(frame, 20);
  }
  function frame() {
    if (width1 >= 100) {
      clearInterval(id);
      load.play();
    } else {
      width1++;
      document.getElementById("barc").style.width = width1 + "%";
      document.getElementById("percent").innerHTML = width1 + "%";
    }
  }

  return (
    <div class="loader" ref={(el) => (loader = el)}>
      <div class="progress" ref={(el) => (progress = el)}>
        <div id="percent" ref={(el) => (percent = el)}>
          1%
        </div>
        <div id="bar" ref={(el) => (bar = el)}>
          <div id="barc" ref={(el) => (barc = el)}></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
