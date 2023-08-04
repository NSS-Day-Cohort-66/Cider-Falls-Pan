import { northWestService } from "./destinations.js";

const destinationsDisplay = northWestService();

const areasHTML = document.querySelector("#area_list");

areasHTML.innerHTML = destinationsDisplay;
