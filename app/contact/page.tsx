import ContactPage from "@/components/ContactPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Makabis and Benet | Luxury Event Decorators in Nigeria",
    template: "%s | Makabis and Benet",
  },
  description:
    "Makabis and Benet is a premium event decoration company in Nigeria specializing in weddings, corporate events, birthdays, and luxury celebrations. We create stylish, elegant, and unforgettable event experiences.",

  keywords: [
    "event decorator in Nigeria",
    "event planner in Lagos",
    "wedding decoration Nigeria",
    "luxury event styling",
    "corporate event decoration",
    "birthday party decoration",
    "Makabis and Benet",
    "event styling company",
  ],

  authors: [{ name: "Makabis and Benet" }],
  creator: "Makabis and Benet",
  publisher: "Makabis and Benet",

  openGraph: {
    title: "Makabis and Benet | Luxury Event Decorators in Nigeria",
    description:
      "We design and deliver creative, stylish, and elegant event decorations for weddings, corporate events, and special celebrations across Nigeria.",
    url: "https://makabisandbenet.com/contact",
    siteName: "Makabis and Benet",
    locale: "en_NG",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Makabis and Benet | Luxury Event Decorators",
    description:
      "Premium event decoration services in Nigeria for weddings, corporate events, and luxury celebrations.",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1
    },
  },
  alternates: {
    canonical: "https://makabisandbenet.com/contact"
  }
};

const page = () => {
  return (
   <>
    <ContactPage />
   </>
  );
};

export default page;
