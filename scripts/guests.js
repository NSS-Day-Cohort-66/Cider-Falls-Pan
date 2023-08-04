import { getGuests } from "./database.js";

const guests = getGuests();

export const guestList = () => {
  let html = `<ul>`;
  for (const guest of guests) {
    html += `<li class="address">${guest.firstName} ${guest.lastName}</li>`;
  }
  html += `</ul>`;
};
