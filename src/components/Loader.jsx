import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styled from "styled-components";

const Loader = ({ again }) => {
  const LoaderWrapper = styled.div`
    .loader {
      margin: 0;
      padding: 0;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      z-index: 1200;
      background-color: #e9dbd4;
    }
    .progress {
      margin: 0;
      padding: 0;
      position: absolute;
      bottom: 0%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 400px;
      width: 100%;
      flex-direction: column;
    }
    #percent {
      margin: 0;
      padding: 0;
      position: absolute;
      top: 10%;
      left: 10%;
      margin-bottom: 50px;
      color: black;
      font-size: 100px;
      font-family: "Ogg";
    }
    #bar {
      margin: 0;
      padding: 0;
      width: 80%;
      margin-top: 20px;
    }
    #barc {
      margin: 0;
      padding: 0;
      width: 1%;
      padding: 1px 0px;
      background-color: black;
    }
  `;

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
    <LoaderWrapper>
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
    </LoaderWrapper>
  );
};

export default Loader;
