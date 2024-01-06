export type CardType =
  | 'big'
  | 'rounded'
  | 'normal'
  | 'horizontal'
  | 'horizontal-colorful';

export interface Card {
  id?: string;
  title: string;
  subtitle?: string;
  description: string;
  detail?: string;
  date?: string;
  imgUrl?: string;
  imgUrls?: string[];
}
