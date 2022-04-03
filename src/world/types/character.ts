type ResultType = {
  count: number;
  pages: number;
  next: string;
  prev?: any;
};

type OriginType = {
  name: string;
  url: string;
};

type LocationType = {
  name: string;
  url: string;
};

export type CharacterType = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: OriginType;
  location: LocationType;
  image: string;
  episode: string[];
  url: string;
  created: Date;
};

export interface IGetCharacter {
  info: ResultType;
  results: CharacterType[];
}
