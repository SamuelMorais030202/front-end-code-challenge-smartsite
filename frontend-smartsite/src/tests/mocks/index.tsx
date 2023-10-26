import { DataResponseType } from "../../types";

export const allUnitsMocks : DataResponseType[] = [
  {
    content: "\n<p>Av. Dom Severino, 1733 &#8211; Fátima<br>Teresina, PI</p>\n",
    fountain: "partial",
    id: 1,
    locker_room: "allowed",
    mask: "required",
    opened: true,
    schedules: [
      {weekdays: 'Seg. à Sex.', hour: '06h às 22h'},
      {weekdays: 'Sáb.', hour: 'Fechada'},
      {weekdays: 'Dom.', hour: 'Fechada'}
    ],
    title: "Dom Severino",
    towel: "required",
  },
  {
    content: "\n<p>Av. Raul Lopes, 1000 &#8211; Noivos<br>Teresina, PI</p>\n",
    fountain: "partial",
    id: 2,
    locker_room: "allowed",
    mask: "required",
    opened: true,
    schedules: [
      {weekdays: 'Seg. à Sex.', hour: '06h às 21h'},
      {weekdays: 'Sáb.', hour: 'Fechada'},
      {weekdays: 'Dom.', hour: 'Fechada'}
    ],
    title: "Teresina Shopping",
    towel: "required",
  },
  {
    content: "\n<p>Rua Quatorze de Dezembro, 483 &#8211; Centro<br>Campinas, SP</p>\n",
    fountain: "partial",
    id: 3,
    locker_room: "allowed",
    mask: "required",
    opened: true,
    schedules: [
      {weekdays: 'Seg. à Sex.', hour: '06h às 12h'},
      {weekdays: 'Sáb.', hour: 'Fechada'},
      {weekdays: 'Dom.', hour: 'Fechada'}
    ],
    title: "Cambuí II",
    towel: "required",
  },
  {
    content: "\n<p> Av. Comendador Gustavo Paiva, 2990 &#8211; Mangabeiras<br>Maceió, AL </p>\n",
    fountain: "partial",
    id: 4,
    locker_room: "allowed",
    mask: "required",
    opened: true,
    schedules: [
      {weekdays: 'Seg. à Sex.', hour: '12h às 23h'},
      {weekdays: 'Sáb.', hour: 'Fechada'},
      {weekdays: 'Dom.', hour: 'Fechada'}
    ],
    title: "Maceió Shopping",
    towel: "required",
  },
  {
    content: "\n<p>Avenida Bezerra de Menezes, 2450 &#8211; São Gerardo<br>Fortaleza, CE</p>\n",
    fountain: "partial",
    id: 5,
    locker_room: "allowed",
    mask: "required",
    opened: false,
    schedules: [
      {weekdays: 'Seg. à Sex.', hour: '06h às 21h'},
      {weekdays: 'Sáb.', hour: 'Fechada'},
      {weekdays: 'Dom.', hour: 'Fechada'}
    ],
    title: "North Shopping",
    towel: "required",
  }
]