import { Card } from './card.model';

// TODO replace with actual API return model
export interface GetNews {
  _id?: string; // TODO remove optional
  title: string;
  detail?: string;
  description: string;
  publication_date?: string;
  featured_image: string;
  image_banner: string;
  friendly_url?: string;
  post_detail?: { type: 'text' | 'image'; value: string }[];
  url_attachment?: string;
}

export type NewsCategory = 'noticias' | 'charlas' | 'recursos_educativos';

export function mapNewsToCard(news: GetNews, urlAttachment: string): Card {
  return {
    id: news.friendly_url,
    title: news.title,
    description: news.post_detail?.find((x) => x.type === 'text')?.value || '',
    date: news.publication_date,
    imgUrl: urlAttachment + news.image_banner,
    subtitle: news.detail || '',
  };
}
