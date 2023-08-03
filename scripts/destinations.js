import { getAreas, getServices, getAreaServices, getGuests } from "./database.js";

const guests = getGuests()

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickTarget = clickEvent.target
        if (clickTarget.dataset.type === "title") {
            let count = 0
            for (const guest of guests) {
                if (guest.areaId === parseInt(clickTarget.dataset.id)) {
                    count++
                }
            }
            window.alert(`There are ${output} guests in this area.`)
        }
    } 
)