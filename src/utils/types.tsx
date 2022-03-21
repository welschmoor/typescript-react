
export interface Listing {
  id: string;
  price: number;
  image: string;
  title: string;
}

export interface ListingsData {
  listings: Listing[];
}

export interface DeleteListingData {
  deleteListing: Listing;
}

export interface DeleteListingVariables {
  id: string;
}