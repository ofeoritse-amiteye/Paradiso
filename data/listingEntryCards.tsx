export interface ListingEntryCard {
  title: string;
  image: string;
  href: string;
}

export const listingEntryCards: ListingEntryCard[] = [
  {
    title: "New listings",
    image: "/listing.jpg",
    href: "/buy",
  },
  {
    title: "Price reduced",
    image: "/concept.jpg",
    href: "/rent",
  },
  {
    title: "Open houses",
    image: "/openhouse.jpg",
    href: "/new-construction",
  },
  {
    title: "Recently sold",
    image: "/apartment.jpg",
    href: "/luxury",
  },
  {
    title: "New construnctions",
    image: "/construction.jpg",
    href: "/open-houses",
  },
  {
    title: "Lands",
    image: "/kland.jpg",
    href: "/condos",
  },
  {
    title: "Foreclosures",
    image: "/higher.jpg",
    href: "/townhomes",
  },
  {
    title: "Trenches",
    image: "/trenches.jpg",
    href: "/multi-family",
  },
];
