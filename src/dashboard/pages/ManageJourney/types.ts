export interface ManageJourneyProps {
  content: {
    title: string;
    description?: string;
  },
  dispatch?: (action: any) => void;
  user: {
    name: string;
    trelloToken: string;
    email: string;
  };
}

export type CardType = {
  id?: string,
  name?: string,
  idList?: string,
  shortUrl?: string,
}

export type ListType = {
  id?: string,
  name?: string,
  cards?: [],
}

export type BoardDataType = {
  id?: string,
  name?: string,
  url?: string,
  lists?: [
    {
      id: string,
      name: string,
      cards: [
        {
          id: string,
          name: string,
          url: string,
          idList: string,
        }
      ]
    }
  ]
}

export type BoardType = {
  successful: boolean,
  data?: BoardDataType,
  progress?: number  
}
