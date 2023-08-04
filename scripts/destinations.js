import {
  getAreas,
  getServices,
  getAreaServices,
  getGuests,
} from "./database.js";

const guests = getGuests()
const areas = getAreas()
const services = getServices()
const areaServices = getAreaServices()


document.addEventListener(
    "click",
    (clickEvent) => {
        const clickTarget = clickEvent.target
        if (clickTarget.dataset.type === "title") {
            let count = 0
            for (const guest of guests) {
                if (guest.parkId === parseInt(clickTarget.dataset.id)) {
                    count++
                }
            }
            window.alert(`There are ${count} guests in this area.`)
        }
    } 
)

export const areaList = () => {
  let htmlString = `<div class="area-container">`
  for (const area of areas) {
    htmlString += `<div class="area-card">
    <h3 data-type="title" data-id="${area.id}">${area.name}</h3>
    <ul>`
    for (const item of areaServices) {
      if (item.areaId === area.id) {
        for (const service of services) {
          if (service.id === item.serviceId) {
            htmlString += `<li>${service.name}</li>`
          }
        }
      }
    }
    htmlString += `</ul></div>`
  }
  htmlString += `</div>`
  return htmlString
}