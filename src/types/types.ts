export type Categories = {
  id: string;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export type Product = {
  id: string;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

export type Order = {
  id: string;
  userEmail: string;
  price: number;
  products: CartItem[];
  status: string;
  createdAt: Date;
  intent_id?: String;
};

export type CartItem = {
  id: string;
  title: string;
  img?: string;
  price: number;
  optionTitle?: string;
  quantity: number;
};

export type Cart = {
  products: CartItem[];
  totalItems: number;
  totalPrice: number;
};

export type ActionTypes = {
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
}