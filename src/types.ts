export interface MenuItem {
  code: string;
  name: string;
  price: string;
  description?: string;
  image?: string;
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}
