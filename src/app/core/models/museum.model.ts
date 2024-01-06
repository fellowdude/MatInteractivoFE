export interface IMuseumBanner {
  body: string;
  image: string;
  color?: string;
}

export interface Museum {
  headerTitle: string;
  headerSubtitle: string;
  title: string;
  subtitle?: string;
  body: string;
  body2?: string;
  id: string;
  imgUrl: string;
  color: string;
  banners: IMuseumBanner[];
  footerText: string;
}
