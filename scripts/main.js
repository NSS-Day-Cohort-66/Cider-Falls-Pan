import { areaList } from "./destinations.js";
import { servicesList } from "./services.js";
import { guestList } from "./guests.js";

const destinationsDisplay = areaList();

const areasHTML = document.querySelector("#area_list");

areasHTML.innerHTML = destinationsDisplay;

const servicesDisplay = servicesList();

const servicesHTML = document.querySelector("#services_list");

servicesHTML.innerHTML = servicesDisplay;

const guestDisplay = guestList();

const guestHTML = document.querySelector("#guest_list");

guestHTML.innerHTML = guestDisplay;
