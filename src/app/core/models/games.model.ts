import { Card } from './card.model';

// TODO replace with actual API return model
export interface Game extends Card {
  urlIframe: string;
  urlApk: string;
  color: string;
  recommended: Game[];
}
