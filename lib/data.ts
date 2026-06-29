export type ProductBadge = "NEW" | "LOW IN STOCK" | "LIMITED";

export type ProductColor = {
  name: string;
  hex: string;
  image?: string;
  value?: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  collection: string;
  type: string;
  price: number;
  compareAtPrice?: number;
  badge?: ProductBadge;
  colors: ProductColor[];
  sizes?: string[];
  images: string[];
  description: string;
  fullDescription: string;
  details: {
    dimensions: string;
    material: string;
    hardware: string;
    interior: string;
    strap: string;
  };
  tags: string[];
  inStock: boolean;
  sku: string;
  shipping: {
    freeThreshold: number;
    time: string;
  };
};

export const primaryImage = (product: Product) => product.images[0];

export const hoverImage = (product: Product) =>
  product.images[1] ?? product.images[0];

export const colorHex = (color: ProductColor) => color.hex ?? color.value ?? "#8B4513";

export const categories = [
  {
    name: "Laptop Totes",
    slug: "laptop-totes",
    description: "Structured totes and work bags with protected laptop space."
  },
  {
    name: "Wallets",
    slug: "wallets",
    description: "Slim everyday pieces cut from premium genuine leather."
  },
  {
    name: "Backpacks",
    slug: "backpacks",
    description: "Hands-free work and travel carry with a clean profile."
  },
  {
    name: "Messenger Bags",
    slug: "messenger-bags",
    description: "Crossbody work bags for documents, devices, and daily tools."
  },
  {
    name: "Belts",
    slug: "belts",
    description: "Timeless leather belts finished with quiet brass detail."
  }
];

const localImages = {
  akinyi: "/images/gwethbtl/akinyi-laptop-tote.png",
  burgundy: "/images/gwethbtl/burgundy-executive-bag.png",
  green: "/images/gwethbtl/green-croc-tote.png",
  tea: "/images/gwethbtl/tea-briefcase.png",
  heroTea: "/images/gwethbtl/hero-tea-briefcase-wide.png",
  heroGreen: "/images/gwethbtl/hero-green-tote-wide.png",
  heroBurgundy: "/images/gwethbtl/hero-burgundy-bag-wide.png"
};

const thongeImages = {
  loibon: localImages.tea,
  detailOne: localImages.burgundy,
  productView: localImages.green,
  edition: localImages.akinyi,
  detailTwo: localImages.heroBurgundy,
  productFortyTwo: localImages.heroGreen
};

export const products: Product[] = [
  {
    id: "founder-edit-laptop-tote-01",
    slug: "founder-edit-laptop-tote",
    name: "Founder Edit Laptop Tote",
    category: "Laptop Totes",
    collection: "Founder Edit",
    type: "Laptop tote",
    price: 28000,
    badge: "NEW",
    colors: [
      { name: "Cognac", hex: "#A0522D", image: localImages.akinyi },
      { name: "Brown", hex: "#5A351F", image: localImages.tea },
      { name: "Black", hex: "#1A1A1A", image: thongeImages.detailOne }
    ],
    sizes: ["13 inch", "15 inch"],
    images: [
      localImages.akinyi,
      localImages.heroTea,
      localImages.tea,
      thongeImages.detailOne
    ],
    description:
      "Dorcas Odiembo's monthly edit pairs full-grain leather, a light interior, concealed laptop storage, and a work-to-weekend silhouette.",
    fullDescription:
      "The Founder Edit Laptop Tote is built for the founder, operator, and daily commuter who needs structure without stiffness. It pairs full-grain leather with a bright cotton interior, a concealed laptop bay, document organization, and reinforced handles for long days between meetings.",
    details: {
      dimensions: "H 32cm x W 42cm x D 14cm",
      material: "Full-grain leather",
      hardware: "Brass hardware",
      interior: "Light cotton lining with padded laptop compartment",
      strap: "Detachable, adjustable shoulder strap"
    },
    tags: ["work", "laptop", "tote", "founder-edit"],
    inStock: true,
    sku: "GWL-FELT-001",
    shipping: {
      freeThreshold: 15000,
      time: "Ships within 2-3 business days from Nairobi"
    }
  },
  {
    id: "executive-laptop-tote-02",
    slug: "executive-laptop-tote",
    name: "Executive Laptop Tote",
    category: "Laptop Totes",
    collection: "Executive Work",
    type: "Laptop tote",
    price: 22000,
    badge: "NEW",
    colors: [
      { name: "Brown", hex: "#5A351F", image: localImages.tea },
      { name: "Black", hex: "#1A1A1A", image: thongeImages.loibon }
    ],
    sizes: ["Medium", "Large"],
    images: [
      localImages.tea,
      localImages.burgundy,
      localImages.heroTea,
      thongeImages.loibon
    ],
    description:
      "A structured laptop tote with a protected device bay, document sleeve, and burnished leather handles.",
    fullDescription:
      "The Executive Laptop Tote keeps work essentials ordered without losing the natural character of leather. It has a protected laptop area, a document sleeve, reliable interior pockets, and a polished profile that moves cleanly from desk to dinner.",
    details: {
      dimensions: "H 31cm x W 40cm x D 13cm",
      material: "Full-grain leather",
      hardware: "Antique brass hardware",
      interior: "Cotton lining, laptop compartment, and document sleeve",
      strap: "Fixed leather handles with optional shoulder strap"
    },
    tags: ["work", "laptop", "executive", "tote"],
    inStock: true,
    sku: "GWL-ELT-002",
    shipping: {
      freeThreshold: 15000,
      time: "Ships within 2-3 business days from Nairobi"
    }
  },
  {
    id: "signature-leather-wallet-03",
    slug: "signature-leather-wallet",
    name: "Signature Leather Wallet",
    category: "Wallets",
    collection: "Everyday Essentials",
    type: "Wallet",
    price: 5000,
    colors: [
      { name: "Brown", hex: "#5A351F", image: thongeImages.productView },
      { name: "Black", hex: "#1A1A1A", image: thongeImages.detailOne },
      { name: "Tan", hex: "#C49A6C", image: localImages.akinyi }
    ],
    images: [
      thongeImages.productView,
      thongeImages.detailOne,
      localImages.akinyi
    ],
    description:
      "A compact wallet with clean slots, secure stitching, and a profile made for everyday use.",
    fullDescription:
      "The Signature Leather Wallet is cut for daily use with a slim profile, smooth card access, and reinforced stitching. It is compact enough for a front pocket while still carrying cards, notes, and IDs without bulk.",
    details: {
      dimensions: "H 9cm x W 11cm x D 2cm",
      material: "Full-grain leather",
      hardware: "No external hardware",
      interior: "Leather card slots and note sleeve",
      strap: "Not applicable"
    },
    tags: ["wallet", "gift", "everyday"],
    inStock: true,
    sku: "GWL-SLW-003",
    shipping: {
      freeThreshold: 15000,
      time: "Ships within 2-3 business days from Nairobi"
    }
  },
  {
    id: "kisumu-work-backpack-04",
    slug: "kisumu-work-backpack",
    name: "Kisumu Work Backpack",
    category: "Backpacks",
    collection: "Kisumu Work",
    type: "Backpack",
    price: 34000,
    badge: "LOW IN STOCK",
    colors: [
      { name: "Green", hex: "#2E4A3D", image: localImages.green },
      { name: "Brown", hex: "#5A351F", image: thongeImages.edition }
    ],
    sizes: ["Large"],
    images: [
      localImages.green,
      localImages.heroGreen,
      thongeImages.edition,
      thongeImages.detailTwo
    ],
    description:
      "A durable leather backpack with a practical interior, brass hardware, and a polished work profile.",
    fullDescription:
      "The Kisumu Work Backpack gives laptop carry a hands-free shape. The structured body protects devices and notebooks, while the adjustable straps and organized lining keep the silhouette clean for commuting and short travel.",
    details: {
      dimensions: "H 43cm x W 31cm x D 15cm",
      material: "Full-grain leather",
      hardware: "Brass zips and buckles",
      interior: "Cotton lining, laptop sleeve, and zip pocket",
      strap: "Adjustable padded leather shoulder straps"
    },
    tags: ["backpack", "work", "travel", "laptop"],
    inStock: true,
    sku: "GWL-KWB-004",
    shipping: {
      freeThreshold: 15000,
      time: "Ships within 2-3 business days from Nairobi"
    }
  },
  {
    id: "kwame-messenger-bag-05",
    slug: "kwame-messenger-bag",
    name: "Kwame Messenger Bag",
    category: "Messenger Bags",
    collection: "Kwame Carry",
    type: "Messenger bag",
    price: 12000,
    badge: "NEW",
    colors: [
      { name: "Brown", hex: "#5A351F", image: localImages.burgundy },
      { name: "Black", hex: "#1A1A1A", image: thongeImages.productFortyTwo }
    ],
    sizes: ["Small", "Medium"],
    images: [
      localImages.burgundy,
      thongeImages.productFortyTwo,
      localImages.heroBurgundy,
      localImages.tea
    ],
    description:
      "A compact messenger bag with quiet hardware, an adjustable strap, and room for daily essentials.",
    fullDescription:
      "The Kwame Messenger Bag is a light daily crossbody for documents, a tablet, chargers, and small tools. It keeps the front profile clean while offering enough organization for errands, meetings, and weekend movement.",
    details: {
      dimensions: "H 27cm x W 34cm x D 9cm",
      material: "Full-grain leather",
      hardware: "Brass hardware",
      interior: "Cotton lining with slip and zip pockets",
      strap: "Adjustable crossbody strap"
    },
    tags: ["messenger", "crossbody", "daily"],
    inStock: true,
    sku: "GWL-KMB-005",
    shipping: {
      freeThreshold: 15000,
      time: "Ships within 2-3 business days from Nairobi"
    }
  },
  {
    id: "atlas-structured-brief-06",
    slug: "atlas-structured-brief",
    name: "Atlas Structured Brief",
    category: "Laptop Totes",
    collection: "Atlas Briefs",
    type: "Briefcase",
    price: 26000,
    compareAtPrice: 30000,
    badge: "LIMITED",
    colors: [
      { name: "Burgundy", hex: "#722F37", image: localImages.burgundy },
      { name: "Black", hex: "#1A1A1A", image: thongeImages.detailTwo }
    ],
    sizes: ["15 inch"],
    images: [
      localImages.burgundy,
      localImages.heroBurgundy,
      thongeImages.detailTwo,
      thongeImages.loibon
    ],
    description:
      "A structured brief with a crisp profile, laptop storage, brass hardware, and a limited burgundy finish.",
    fullDescription:
      "The Atlas Structured Brief is built around a firm silhouette and practical work interior. It carries a laptop, papers, and daily tools with a confident shape, finished in limited colors for a more formal leather carry.",
    details: {
      dimensions: "H 30cm x W 41cm x D 11cm",
      material: "Full-grain leather",
      hardware: "Polished brass hardware",
      interior: "Cotton lining, laptop compartment, and organizer pockets",
      strap: "Detachable, adjustable leather shoulder strap"
    },
    tags: ["briefcase", "limited", "work", "laptop"],
    inStock: true,
    sku: "GWL-ASB-006",
    shipping: {
      freeThreshold: 15000,
      time: "Ships within 2-3 business days from Nairobi"
    }
  }
];

export const featuredProducts = products.slice(0, 4);

export const productOfMonth: Product = products[0];

export const formatPrice = (value: number) =>
  `Ksh ${new Intl.NumberFormat("en-KE", {
    maximumFractionDigits: 0
  }).format(value)}`;
