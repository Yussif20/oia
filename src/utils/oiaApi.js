// API utility for OIA stores endpoints
export const OIA_API = {
  logo: "https://oiastores.com/Logo",
  banner: "https://oiastores.com/items/banner",
  products: "https://oiastores.com/items",
};

export async function fetchOiaLogo() {
  const res = await fetch(OIA_API.logo);
  if (!res.ok) throw new Error("Failed to fetch logo");
  return res.blob(); // returns image blob
}

export async function fetchOiaBanner() {
  const res = await fetch(OIA_API.banner);
  if (!res.ok) throw new Error("Failed to fetch banner");
  return res.blob(); // returns image blob
}

export async function fetchOiaProducts() {
  const res = await fetch(OIA_API.products);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json(); // expects JSON product list
}
