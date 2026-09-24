export const CURRENCY = "INR";
export const STORE_NAME = "Store Name";

export const CATALOG = [
  {
    id: "product-1",
    position: 1,
    name: "Product 1",
    description: "This are Headphones",
    price: 10000,
    image: "/images/headphone.png",
    category: "Category 1",
  },
  {
    id: "product-2",
    position: 2,
    name: "Product 2",
    description: "This is an airdope",
    price: 20000,
    image: "/images/airdopes.png",
    category: "Category 1",
  },
  {
    id: "product-3",
    position: 3,
    name: "Product 3",
    description: "This is a bluetoothed earphone",
    price: 30000,
    image: "/images/bluetooth.png",
    category: "Category 1",
  },
  {
    id: "product-4",
    position: 4,
    name: "Product 4",
    description: "Its a smartwatch",
    price: 40000,
    image: "/images/smartwatch.png",
    category: "Category 2",
  },
  {
    id: "product-5",
    position: 5,
    name: "Product 5",
    description: "Its a speaker",
    price: 50000,
    image: "/images/speaker.png",
    category: "Category 2",
  },
  {
    id: "product-6",
    position: 6,
    name: "Product 6",
    description: "its a keyboard",
    price: 60000,
    image: "/images/keyboard.png",
    category: "Category 2",
  },
  {
    id: "product-7",
    position: 7,
    name: "Product 7",
    description: "its a mouse",
    price: 70000,
    image: "/images/mouse.png",
    category: "Category 3",
  },
  {
    id: "product-8",
    position: 8,
    name: "Product 8",
    description: "Its a powerbank",
    price: 80000,
    image: "/images/powerbank.png",
    category: "Category 3",
  },
];

export function findProduct(id) {
  return CATALOG.find((product) => product.id === id) || null;
}

export function toPublicProduct({ id, name, description, price, image, category }) {
  return { id, name, description, price, image, category };
}
