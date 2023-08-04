import {
  getAreas,
  getServices,
  getAreaServices,
  getGuests,
} from "./database.js";

const guests = getGuests();

document.addEventListener("click", (clickEvent) => {
  const clickTarget = clickEvent.target;
  if (clickTarget.dataset.type === "title") {
    let count = 0;
    for (const guest of guests) {
      if (guest.areaId === parseInt(clickTarget.dataset.id)) {
        count++;
      }
    }
    window.alert(`There are ${output} guests in this area.`);
  }
});

const connectServiceToArea = (areaService, Services) => {
  for (const service of Services) {
    if (areaService.serviceId === service.id) {
      return service.name;
    }
  }
};

export const northWestService = () => {
  const areas = getAreas();
  const areaServices = getAreaServices();
  const services = getServices();

  let service = "";
  let HTMLstring = "";
  for (const area of areas) {
    if (area.name === "Lodge") {
      for (const areaService of areaServices) {
        if (area.id === areaService.areaId) {
          service += connectServiceToArea(areaService, services) + ", ";
        }
      }
      HTMLstring += `<h3>Northwest</h3>
      <div>${area.name}</div>
      <p> This area supports ${service}</p>`;
    }
  }

  HTMLstring += `</section>`;
  return HTMLstring;
};

export const northService = () => {
  const areas = getAreas();
  const areaServices = getAreaServices();
  const services = getServices();

  let service = "";
  let HTMLstring = "";
  for (const area of areas) {
    if (area.name === "Lost Wolf Hiking Trail") {
      for (const areaService of areaServices) {
        if (area.id === areaService.areaId) {
          service += connectServiceToArea(areaService, services) + ", ";
        }
      }
      HTMLstring += `<h3>North</h3>
        <div>${area.name}</div>
        <p> This area supports ${service}</p>`;
    }
  }
  HTMLstring += `</section>`;
  return HTMLstring;
};

export const northEastService = () => {
  const areas = getAreas();
  const areaServices = getAreaServices();
  const services = getServices();

  let service = "";
  let HTMLstring = "";
  for (const area of areas) {
    if (area.name === "Chamfort River") {
      for (const areaService of areaServices) {
        if (area.id === areaService.areaId) {
          service += connectServiceToArea(areaService, services) + ", ";
        }
      }
      HTMLstring += `<h3>Northeast</h3>
        <div>${area.name}</div>
        <p> This area supports ${service}</p>`;
    }
  }
  HTMLstring += `</section>`;
  return HTMLstring;
};

export const SouthWestService = () => {
  const areas = getAreas();
  const areaServices = getAreaServices();
  const services = getServices();

  let service = "";
  let HTMLstring = "";
  for (const area of areas) {
    if (area.name === "Gander River") {
      for (const areaService of areaServices) {
        if (area.id === areaService.areaId) {
          service += connectServiceToArea(areaService, services) + ", ";
        }
      }
      HTMLstring += `<h3>Southwest</h3>
          <div>${area.name}</div>
          <p> This area supports ${service}</p>`;
    }
  }
  HTMLstring += `</section>`;
  return HTMLstring;
};

export const SouthService = () => {
  const areas = getAreas();
  const areaServices = getAreaServices();
  const services = getServices();

  let service = "";
  let HTMLstring = "";
  for (const area of areas) {
    if (area.name === "Campgrounds") {
      for (const areaService of areaServices) {
        if (area.id === areaService.areaId) {
          service += connectServiceToArea(areaService, services) + ", ";
        }
      }
      HTMLstring += `<h3>South</h3>
            <div>${area.name}</div>
            <p> This area supports ${service}</p>`;
    }
  }
  HTMLstring += `</section>`;
  return HTMLstring;
};

export const SouthEastService = () => {
  const areas = getAreas();
  const areaServices = getAreaServices();
  const services = getServices();

  let service = "";
  let HTMLstring = "";
  for (const area of areas) {
    if (area.name === "Pine Bluffs Trails") {
      for (const areaService of areaServices) {
        if (area.id === areaService.areaId) {
          service += connectServiceToArea(areaService, services) + ", ";
        }
      }
      HTMLstring += `<h3>Southeast</h3>
              <div>${area.name}</div>
              <p> This area supports ${service}</p>`;
    }
  }
  HTMLstring += `</section>`;
  return HTMLstring;
};
