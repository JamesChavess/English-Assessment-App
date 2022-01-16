import {getData} from './loadExcel.js';

const prosNconsContainer = document.getElementById("prosNconsContainer");

const prosNCons = ()=>{
    const strengthBar = document.createElement('div');
    const strengthSpan = document.createElement('span');
    const strengthPercent = document.createElement('h3');

    prosNconsContainer.append(strengthBar,strengthSpan,strengthPercent)
}

prosNCons();