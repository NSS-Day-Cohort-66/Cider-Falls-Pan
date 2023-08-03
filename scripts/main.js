import { servicesList } from "./services.js";

const servicesDisplay = servicesList();

const servicesHTML = document.querySelector("#services_list");

servicesHTML.innerHTML = servicesDisplay;
