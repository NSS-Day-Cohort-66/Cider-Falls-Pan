const database = {
  areas: [
    {
      id: 1,
      name: "Lodge",
    },
    {
      id: 2,
      name: "Lost Wolf Hiking Trail",
    },
    {
      id: 3,
      name: "Chamfort River",
    },
    {
      id: 4,
      name: "Gander River",
    },
    {
      id: 5,
      name: "Campgrounds",
    },
    {
      id: 6,
      name: "Pine Bluffs Trails",
    },
  ],
  guests: [
    { id: 1, firstName: "John", lastName: "Smith", parkId: 1 },
    { id: 2, firstName: "Jane", lastName: "Doe", parkId: 2 },
    { id: 3, firstName: "Michael", lastName: "Johnson", parkId: 3 },
    { id: 4, firstName: "Emily", lastName: "Williams", parkId: 4 },
    { id: 5, firstName: "William", lastName: "Brown", parkId: 5 },
    { id: 6, firstName: "Emma", lastName: "Jones", parkId: 6 },
    { id: 7, firstName: "James", lastName: "Miller", parkId: 1 },
    { id: 8, firstName: "Olivia", lastName: "Davis", parkId: 2 },
    { id: 9, firstName: "David", lastName: "Garcia", parkId: 3 },
    { id: 10, firstName: "Sophia", lastName: "Rodriguez", parkId: 4 },
    { id: 11, firstName: "Daniel", lastName: "Martinez", parkId: 5 },
    { id: 12, firstName: "Ava", lastName: "Lopez", parkId: 6 },
    { id: 13, firstName: "Joseph", lastName: "Hernandez", parkId: 1 },
    { id: 14, firstName: "Mia", lastName: "Moore", parkId: 2 },
    { id: 15, firstName: "Andrew", lastName: "Jackson", parkId: 3 },
    { id: 16, firstName: "Ella", lastName: "Lee", parkId: 4 },
    { id: 17, firstName: "Christopher", lastName: "White", parkId: 5 },
    { id: 18, firstName: "Sofia", lastName: "Taylor", parkId: 6 },
    { id: 19, firstName: "Matthew", lastName: "Anderson", parkId: 1 },
    { id: 20, firstName: "Isabella", lastName: "Thomas", parkId: 2 },
  ],
  services: [
    {
      id: 1,
      name: "Rafting",
    },
    {
      id: 2,
      name: "Canoeing",
    },
    {
      id: 3,
      name: "Fishing",
    },
    {
      id: 4,
      name: "Hiking",
    },
    {
      id: 5,
      name: "Picknicking",
    },
    {
      id: 6,
      name: "Rock Climbing",
    },
    {
      id: 7,
      name: "Lodging",
    },
    {
      id: 8,
      name: "Parking",
    },
    {
      id: 9,
      name: "Information",
    },
    {
      id: 10,
      name: "Zip Lines",
    },
  ],
  areaServices: [
    {
      id: 1,
      areaId: 3,
      serviceId: 1,
    },
    {
      id: 2,
      areaId: 3,
      serviceId: 2,
    },
    {
      id: 3,
      areaId: 3,
      serviceId: 3,
    },
    {
      id: 4,
      areaId: 2,
      serviceId: 4,
    },
    {
      id: 5,
      areaId: 2,
      serviceId: 5,
    },
    {
      id: 5,
      areaId: 2,
      serviceId: 6,
    },
    {
      id: 6,
      areaId: 1,
      serviceId: 5,
    },
    {
      id: 7,
      areaId: 1,
      serviceId: 7,
    },
    {
      id: 8,
      areaId: 1,
      serviceId: 8,
    },
    {
      id: 9,
      areaId: 1,
      serviceId: 9,
    },
    {
      id: 10,
      areaId: 4,
      serviceId: 3,
    },
    {
      id: 11,
      areaId: 4,
      serviceId: 4,
    },
    {
      id: 12,
      areaId: 5,
      serviceId: 7,
    },
    {
      id: 13,
      areaId: 5,
      serviceId: 8,
    },
    {
      id: 14,
      areaId: 5,
      serviceId: 9,
    },
    {
      id: 15,
      areaId: 6,
      serviceId: 4,
    },
    {
      id: 16,
      areaId: 6,
      serviceId: 5,
    },
    {
      id: 17,
      areaId: 6,
      serviceId: 10,
    },
  ],
};

export const getAreas = () => {
  return database.areas.map((area) => ({ ...area }));
};
export const getGuests = () => {
  return database.guests.map((guest) => ({ ...guest }));
};
export const getServices = () => {
  return database.services.map((service) => ({ ...service }));
};
export const getAreaServices = () => {
  return database.areaServices.map((areaService) => ({ ...areaService }));
};
