export type ProductBadge = "NEW" | "LOW IN STOCK" | "LIMITED";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  type: string;
  price: number;
  badge?: ProductBadge;
  colors: Array<{
    name: string;
    value: string;
  }>;
  images: {
    primary: string;
    hover: string;
    gallery: string[];
  };
  description: string;
};

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

export const products: Product[] = [
  {
    id: "atlas-brief-01",
    slug: "atlas-structured-brief",
    name: "Executive Laptop Tote",
    category: "Laptop Totes",
    type: "Laptop tote",
    price: 22000,
    badge: "NEW",
    colors: [
      { name: "Cognac", value: "#A0522D" },
      { name: "Black", value: "#1A1A1A" },
      { name: "Burgundy", value: "#722F37" }
    ],
    images: {
      primary:
        "/images/gwethbtl/tea-briefcase.png",
      hover:
        "/images/gwethbtl/burgundy-executive-bag.png",
      gallery: [
        "/images/gwethbtl/tea-briefcase.png",
        "/images/gwethbtl/burgundy-executive-bag.png"
      ]
    },
    description:
      "A structured laptop tote with a protected device bay, document sleeve, and burnished leather handles."
  },
  {
    id: "marais-tote-02",
    slug: "marais-work-tote",
    name: "Signature Leather Wallet",
    category: "Wallets",
    type: "Wallet",
    price: 5000,
    badge: "LOW IN STOCK",
    colors: [
      { name: "Oxblood", value: "#722F37" },
      { name: "Tan", value: "#C49A6C" },
      { name: "Ivory", value: "#E8E4DE" }
    ],
    images: {
      primary:
        "/images/gwethbtl/akinyi-laptop-tote.png",
      hover:
        "/images/gwethbtl/green-croc-tote.png",
      gallery: [
        "/images/gwethbtl/akinyi-laptop-tote.png",
        "/images/gwethbtl/green-croc-tote.png"
      ]
    },
    description:
      "A compact wallet with clean slots, secure stitching, and a profile made for everyday use."
  },
  {
    id: "nomad-duffle-03",
    slug: "nomad-weekend-duffle",
    name: "Kisumu Work Backpack",
    category: "Backpacks",
    type: "Backpack",
    price: 24000,
    badge: "LIMITED",
    colors: [
      { name: "Saddle", value: "#8B4513" },
      { name: "Coffee", value: "#4A2E21" }
    ],
    images: {
      primary:
        "/images/gwethbtl/green-croc-tote.png",
      hover:
        "/images/gwethbtl/akinyi-laptop-tote.png",
      gallery: [
        "/images/gwethbtl/green-croc-tote.png",
        "/images/gwethbtl/akinyi-laptop-tote.png"
      ]
    },
    description:
      "A durable leather backpack with a practical interior, brass hardware, and a polished work profile."
  },
  {
    id: "kivu-satchel-04",
    slug: "kivu-shoulder-satchel",
    name: "Kwarme Messenger Bag",
    category: "Messenger Bags",
    type: "Messenger bag",
    price: 12000,
    badge: "NEW",
    colors: [
      { name: "Mocha", value: "#6F4E37" },
      { name: "Black", value: "#1A1A1A" },
      { name: "Brass", value: "#C9A227" }
    ],
    images: {
      primary:
        "/images/gwethbtl/burgundy-executive-bag.png",
      hover:
        "/images/gwethbtl/tea-briefcase.png",
      gallery: [
        "/images/gwethbtl/burgundy-executive-bag.png",
        "/images/gwethbtl/tea-briefcase.png"
      ]
    },
    description:
      "A compact messenger bag with quiet hardware, an adjustable strap, and room for daily essentials."
  }
];

export const featuredProducts = products;

export const productOfMonth: Product = {
  id: "maison-carryall-05",
  slug: "maison-carryall",
  name: "Founder Edit Laptop Tote",
  category: "Laptop Totes",
  type: "Laptop tote",
  price: 28000,
  badge: "NEW",
  colors: [
    { name: "Cognac", value: "#A0522D" },
    { name: "Bone", value: "#E8E4DE" },
    { name: "Burgundy", value: "#722F37" }
  ],
  images: {
    primary: "/images/gwethbtl/akinyi-laptop-tote.png",
    hover: "/images/gwethbtl/green-croc-tote.png",
    gallery: [
      "/images/gwethbtl/akinyi-laptop-tote.png",
      "/images/gwethbtl/green-croc-tote.png"
    ]
  },
  description:
    "Dorcas Odiembo's monthly edit pairs full-grain leather, a light interior, concealed laptop storage, and a work-to-weekend silhouette."
};

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0
  }).format(value);
