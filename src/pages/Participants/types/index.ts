export type TParticipantFields =
  | "id"
  | "surname"
  | "name"
  | "middleName"
  | "city"
  | "distance"
  | "hasPayment";

export type TFields = {
  surname: string;
  name: string;
  middleName: string;
  city: string;
  distance: number;
  hasPayment: boolean;
};
