import { TextSplitter } from "../utilss/textSplitter";
import gsap from "gsap";

export function initialFX() {
  document.body.style.overflowY = "auto";
  const mainElements = document.getElementsByTagName("main");
  if (mainElements.length > 0) {
    mainElements[0].classList.add("main-active");
  }
  
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  const selectors = [".landing-info h3", ".landing-intro h2", ".landing-intro h1"];
  const elements = selectors.flatMap(selector => Array.from(document.querySelectorAll(selector)));
  
  if (elements.length > 0) {
    var landingText = new TextSplitter(elements, {
      type: "chars,lines",
      linesClass: "split-line",
    });
    if (landingText.chars && landingText.chars.length > 0) {
      gsap.fromTo(
        landingText.chars,
        { opacity: 0, y: 80, filter: "blur(5px)" },
        {
          opacity: 1,
          duration: 1.2,
          filter: "blur(0px)",
          ease: "power3.inOut",
          y: 0,
          stagger: 0.025,
          delay: 0.3,
        }
      );
    }
  }

  let TextProps = { type: "chars,lines", linesClass: "split-h2" };

  const elLandingH2Info = document.querySelector(".landing-h2-info");
  if (elLandingH2Info) {
    var landingText2 = new TextSplitter(".landing-h2-info", TextProps);
    if (landingText2.chars && landingText2.chars.length > 0) {
      gsap.fromTo(
        landingText2.chars,
        { opacity: 0, y: 80, filter: "blur(5px)" },
        {
          opacity: 1,
          duration: 1.2,
          filter: "blur(0px)",
          ease: "power3.inOut",
          y: 0,
          stagger: 0.025,
          delay: 0.3,
        }
      );
    }
  }

  const elLandingInfoH2 = document.querySelectorAll(".landing-info-h2");
  if (elLandingInfoH2.length > 0) {
    gsap.fromTo(
      ".landing-info-h2",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        duration: 1.2,
        ease: "power1.inOut",
        y: 0,
        delay: 0.8,
      }
    );
  }

  const commonEls = document.querySelectorAll(".header, .icons-section, .nav-fade");
  if (commonEls.length > 0) {
    gsap.fromTo(
      [".header", ".icons-section", ".nav-fade"],
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.2,
        ease: "power1.inOut",
        delay: 0.1,
      }
    );
  }

  if (document.querySelector(".landing-h2-info") && document.querySelector(".landing-h2-info-1")) {
    var landingText3 = new TextSplitter(".landing-h2-info-1", TextProps);
    var landingText2_again = new TextSplitter(".landing-h2-info", TextProps);
    LoopText(landingText2_again, landingText3);
  }

  if (document.querySelector(".landing-h2-1") && document.querySelector(".landing-h2-2")) {
    var landingText4 = new TextSplitter(".landing-h2-1", TextProps);
    var landingText5 = new TextSplitter(".landing-h2-2", TextProps);
    LoopText(landingText4, landingText5);
  }
}

function LoopText(Text1: TextSplitter, Text2: TextSplitter) {
  if (!Text1.chars || Text1.chars.length === 0 || !Text2.chars || Text2.chars.length === 0) return;
  
  var tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;

  tl.fromTo(
    Text2.chars,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
      y: 0,
      stagger: 0.1,
      delay: delay,
    },
    0
  )
    .fromTo(
      Text1.chars,
      { y: 80 },
      {
        duration: 1.2,
        ease: "power3.inOut",
        y: 0,
        stagger: 0.1,
        delay: delay2,
      },
      1
    )
    .fromTo(
      Text1.chars,
      { y: 0 },
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay,
      },
      0
    )
    .to(
      Text2.chars,
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay2,
      },
      1
    );
}
