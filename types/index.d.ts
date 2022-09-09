export interface ServiceItem {
  icon: string;
  alt: string;
  title: string;
  description: string;
}

export interface Member {
  id: number;
  image: string;
  alt: string;
  name: string;
  position: string;
  description?: string;
}

export enum BTN_TYPE {
  NORMAL = "normal",
  OUTLINE = "outline",
  BIG_ACTION = "big-action",
}
