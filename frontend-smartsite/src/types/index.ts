export type ShedulesType = {
  weekdays: string;
  hour: string;
}

export type DataResponseType = {
  id: number;
  mask: 'required' | 'recommended';
  fountain: 'partial' | 'not_allowed';
  towel: 'required' | 'recommended';
  opened: boolean;
  locker_room: 'allowed' | 'closed' | 'partial';
  content: string;
  schedules: ShedulesType[];
  title: string;
};

export type ImageType = "mask" | "towel" | "fountain" | "locker_room";
export type ImageStatus = "recommended" | "required" | "partial" | "not_allowed" | "allowed" | "closed";