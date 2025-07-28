import type { ImageSourcePropType } from "react-native";

export interface IContactItemBase {
  id: string;
  icon: ImageSourcePropType;
  title: string;
  description: string;
}
export interface IContactSupport extends IContactItemBase {
  type: "support";
  email: string;
}

export interface IContactPhone extends IContactItemBase {
  type: "phone";
  phone: string;
}

export interface IContactLocation extends IContactItemBase {
  type: "location";
  location: string;
}

export type ContactItem = IContactSupport | IContactPhone | IContactLocation;
