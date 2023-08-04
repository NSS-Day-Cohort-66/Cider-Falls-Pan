import { getGuests } from "./database.js";

const guests = getGuests();

export const guestList = () => {
  let html = `<ul style="column-count:2;">`;
  for (const guest of guests) {
    html += `<li class="address">${guest.firstName} ${guest.lastName}</li>`;
  }
  html += `</ul>`;
  return html;
};
