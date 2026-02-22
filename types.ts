
export interface Property {
  id: string;
  title: string;
  priceNGN: number;
  priceUSD: number;
  location: string;
  beds: number;
  baths: number;
  area: string;
  image: string;
  isVerified: boolean;
}

export type SearchType = 'Buy' | 'Rent' | 'Short-let';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
