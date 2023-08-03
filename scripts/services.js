import { getServices } from "./database.js";

const services = getServices();

export const servicesList = () => {
  let html = `<ul>`;
  for (const service of services) {
    html += `<li data-type="service" data-id"${service.id}">${service.name}</li>`;
  }
  html += `</ul>`;
  return html;
};
