import {getData} from './loadExcel.js';
import {PrintData} from './loadExcel.js';

const circleBarsContainer = document.getElementById("circleBarsContainer");
const svgns = "http://www.w3.org/2000/svg";


export function circularProgressBar(percent, skill, color) {
  const percentage = 250 - (250 * percent) / 100; 
  const skillContainer = document.createElement("section");
  const skillProgressLeft = document.createElement("aside");
  const skillProgressRight = document.createElement("aside");
  const circleBar = document.createElementNS(svgns, "svg");
  const innerCircle = document.createElementNS(svgns, "circle");
  const outterCircle = document.createElementNS(svgns, "circle");
  const percentCounter = document.createElement("h2");
  const skillName = document.createElement("span");
  const linearBar = document.createElement("progress");
  let num = 0;
  let run = setInterval(frames, 50);

  skillContainer.classList.add("skillContainer");
  skillProgressLeft.classList.add("skillProgressLeft");
  skillProgressRight.classList.add("skillProgressRight");

  circleBar.setAttribute("height", "90px");
  circleBar.setAttribute("width", "90px");

  innerCircle.style.fill = "none";
  innerCircle.style.stroke = "rgba(221, 221, 221, 0.651";
  innerCircle.style.strokeDasharray = "2510";
  innerCircle.style.strokeWidth = "10";
  innerCircle.style.cx = "45";
  innerCircle.style.cy = "45";
  innerCircle.style.r = "40";

  outterCircle.setAttribute("fill", "none");
  outterCircle.setAttribute("stroke", color);
  outterCircle.setAttribute("stroke-dasharray", "251");
  outterCircle.setAttribute("stroke-dashoffset", percentage);
  outterCircle.setAttribute("stroke-width", "10");
  outterCircle.setAttribute("cx", "45");
  outterCircle.setAttribute("cy", "45");
  outterCircle.setAttribute("r", "40");
  outterCircle.classList.add("outterCircle");

  percentCounter.style.color = color;
  percentCounter.style.zIndex = "3";
  percentCounter.style.position = "relative";
  percentCounter.style.top = "-30px";
  percentCounter.style.right = "73px";

  skillName.innerText = skill;
  skillName.style.marginTop = "10px";
  skillName.style.color = color;

  linearBar.max = "100";

  //linearBar.style.backgroundColor= color;//dylema

  circleBarsContainer.append(skillContainer);
  skillContainer.append(skillProgressLeft, skillProgressRight);
  skillProgressLeft.append(circleBar);
  skillProgressRight.append(skillName, linearBar, percentCounter);
  circleBar.append(innerCircle, outterCircle);

  function frames() {
    num++;
    if (num === percent + 1) {
      clearInterval(run);
    } else {
      linearBar.value = num;
      percentCounter.textContent = num + "%";
    }
  }

  let dynamicStyles = null;

  function addAnimation(body) {
    if (!dynamicStyles) {
      dynamicStyles = document.createElement("style");
      dynamicStyles.type = "text/css";
      document.head.appendChild(dynamicStyles);
    }

    dynamicStyles.sheet.insertRule(body, dynamicStyles.length);
  }

  addAnimation(`  
  @keyframes animate{
    0% {
      stroke-dashoffset: 250;
    }
    100%{
      stroke-dashoffset: ${percent}*25;
    }
  }
    `);
}

getData();



