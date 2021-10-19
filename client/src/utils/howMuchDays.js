
//Recibe dos STRINGS de tipo 2021-01-01 y 2021-01-15 y calcula cuantos dias transcurren entre ambas fechas 
//Retorna cantidad de dias

export const howMuchDays = (arrivealDate, departureDate) => {
  const f1 = arrivealDate.split("-");
  const f2 = departureDate.split("-");

  arrivealDate = Date.UTC(f1[0], f1[1], f1[2]);
  departureDate = Date.UTC(f2[0], f2[1], f2[2]);

  const dif = departureDate - arrivealDate;
  var days = Math.floor(dif / (1000 * 60 * 60 * 24));
  return days;
};
