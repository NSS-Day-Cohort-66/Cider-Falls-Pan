import { getServices, getAreaServices, getAreas } from "./database.js";

const services = getServices();
const areaServices = getAreaServices();
const areas = getAreas();

export const servicesList = () => {
  let html = `<ul>`;
  for (const service of services) {
    html += `<li data-type="service" data-id="${service.id}" data-name="${service.name}">${service.name}</li>`;
  }
  html += `</ul>`;
  return html;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  let areasServed = [];
  let serviceId = itemClicked.dataset.id;
  let message = `${itemClicked.dataset.name} is available in:\n`;
  if (itemClicked.dataset.type === "service") {
    for (const areaService of areaServices) {
      if (parseInt(serviceId) === areaService.serviceId) {
        for (const area of areas) {
          if (areaService.areaId === area.id) {
            areasServed.push(area.name);
          }
        }
      }
    }
    message += areasServed.join(`\n`);
    window.alert(message);
  }
});
