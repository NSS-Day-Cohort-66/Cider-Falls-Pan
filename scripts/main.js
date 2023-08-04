import { northWestService } from "./destinations.js";
import { servicesList } from "./services.js";

const destinationsDisplay = northWestService();

const areasHTML = document.querySelector("#area_list");

areasHTML.innerHTML = destinationsDisplay;

const servicesDisplay = servicesList();

const servicesHTML = document.querySelector("#services_list");

servicesHTML.innerHTML = servicesDisplay;
