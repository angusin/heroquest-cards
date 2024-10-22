export interface Card {
  id: number;
  type: string;
  name: string;
  isFavorite: boolean;
  collectionId: number;
  imageUrl: string;
  userId: number;
  createDate: Date;
}
