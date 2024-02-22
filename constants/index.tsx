import xx99Mark2 from "@/public/xx99-mark2.png";
import xx99Mark1 from "@/public/xx99-mark1.png";
import productHeadphones from "@/public/product-card-headphones.png";
import productSpeakers from "@/public/product-card-speakers.png";
import xx59Headphones from "@/public/xx59-headphones.png";

import zx9Speaker from "@/public/zx9-speaker.png";
import zx7Speaker from "@/public/zx7-speaker.png";

import yx1WirelessEarphones from "@/public/yx1-wireless-earphones.png";

import facebookIcon from "@/public/facebook.svg";
import twitterIcon from "@/public/twitter.svg";
import instagramIcon from "@/public/instagram.svg";
import { z } from "zod";

export const navItems = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Headphones",
    link: "/headphones",
  },
  {
    text: "Speakers",
    link: "/speakers",
  },
  {
    text: "Earphones",
    link: "/earphones",
  },
];

export const headphones = [
  {
    image: xx99Mark2,
    title: "XX99 Mark II Headphones",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    price: 2999,
    reverse: false,
    link: "/headphones/xx99-mark2-headphones",
  },
  {
    image: xx99Mark1,
    title: "XX99 Mark I Headphones",
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    price: 1750,
    reverse: true,
    link: "/headphones/xx99-mark1-headphones",
  },
  {
    image: xx59Headphones,
    title: "XX59 Headphones",
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    price: 899,
    reverse: false,
    link: "/headphones/xx59-headphones",
  },
];

export const speakers = [
  {
    image: zx9Speaker,
    title: "ZX9 Speaker",
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    price: 4500,
    reverse: false,
    link: "/speakers/zx9-speaker",
  },
  {
    image: zx7Speaker,
    title: "ZX7 Speaker",
    description:
      "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    price: 3500,
    reverse: true,
    link: "/speakers/zx7-speaker",
  },
];

export const earphones = [
  {
    image: yx1WirelessEarphones,
    title: "YX1 WIRELESS EARPHONES",
    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    price: 599,
    reverse: false,
    link: "/earphones/yx1-wireless-earphones",
  },
];

export const socialIcons = [
  {
    link: "/facebook.com",
    image: facebookIcon,
    alt: "Facebook Icon",
  },
  {
    link: "/twitter.com",
    image: twitterIcon,
    alt: "Twitter Icon",
  },
  {
    link: "/instagram.com",
    image: instagramIcon,
    alt: "Instagram Icon",
  },
];

export const xx99Mark2Description = {
  descriptionTop:
    "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.",
  descriptionBottom:
    "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
};

export const xx99Mark2BoxItems = [
  {
    number: 1,
    item: "Headphone Unit",
  },
  {
    number: 2,
    item: "Replacement Earcups",
  },
  {
    number: 1,
    item: "User Manual",
  },
  {
    number: 1,
    item: "3.5mm 5m Audio Cable",
  },
  {
    number: 1,
    item: "Travel Bag",
  },
];

export const xx99Mark1Description = {
  descriptionTop:
    "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.",
  descriptionBottom:
    "From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.",
};

export const xx99Mark1BoxItems = [
  {
    number: 1,
    item: "Headphone Unit",
  },
  {
    number: 2,
    item: "Replacement Earcups",
  },
  {
    number: 1,
    item: "User Manual",
  },
  {
    number: 1,
    item: "3.5mm 5m Audio Cable",
  },
];

export const xx59Description = {
  descriptionTop:
    "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.",
  descriptionBottom:
    "More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
};

export const xx59BoxItems = [
  {
    number: 1,
    item: "Headphone Unit",
  },
  {
    number: 2,
    item: "Replacement Earcups",
  },
  {
    number: 1,
    item: "User Manual",
  },
  {
    number: 1,
    item: "3.5mm 5m Audio Cable",
  },
];

export const zx9SpeakerDescription = {
  descriptionTop:
    "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).",
  descriptionBottom:
    "Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
};

export const zx9SpeakerBoxItems = [
  {
    number: 2,
    item: "Speaker Unit",
  },
  {
    number: 2,
    item: "Speaker Cloth Panel",
  },
  {
    number: 1,
    item: "User Manual",
  },
  {
    number: 1,
    item: "3.5mm 10m Audio Cable",
  },
  {
    number: 1,
    item: "10m Optical Cable",
  },
];

export const zx7SpeakerDescription = {
  descriptionTop:
    "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.",
  descriptionBottom:
    "The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
};

export const zx7SpeakerBoxItems = [
  {
    number: 2,
    item: "Speaker Unit",
  },
  {
    number: 2,
    item: "Speaker Cloth Panel",
  },
  {
    number: 1,
    item: "User Manual",
  },
  {
    number: 1,
    item: "3.5mm 7.5m Audio Cable",
  },
  {
    number: 1,
    item: "7.5m Optical Cable",
  },
];

export const yx1EarphonesDescription = {
  descriptionTop:
    "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.",
  descriptionBottom:
    "The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
};

export const yx1EarphonesBoxItems = [
  {
    number: 2,
    item: "Earphone Unit",
  },
  {
    number: 6,
    item: "Multi-size Earplugs",
  },
  {
    number: 1,
    item: "User Manual",
  },
  {
    number: 1,
    item: "USB-C Charging Cable",
  },
  {
    number: 1,
    item: "Travel Pouch",
  },
];

export const youMayAlsoLike1 = [
  {
    image: productHeadphones,
    title: "XX99 Mark I",
    link: "/headphones/xx99-mark1-headphones",
    index: 1,
  },
  {
    image: xx59Headphones,
    title: "xx59",
    link: "/headphones/xx59-headphones",
    index: 1,
  },
  {
    image: productSpeakers,
    title: "ZX9 Speaker",
    link: "/speakers/zx9-speaker",
    index: 2,
  },
];

export const youMayAlsoLike2 = [
  {
    image: xx99Mark2,
    title: "XX99 Mark II",
    link: "/headphones/xx99-mark2-headphones",
    index: 1,
  },
  {
    image: xx59Headphones,
    title: "xx59",
    link: "/headphones/xx59-headphones",
    index: 1,
  },
  {
    image: productSpeakers,
    title: "ZX9 Speaker",
    link: "/speakers/zx9-speaker",
    index: 2,
  },
];

export const youMayAlsoLike3 = [
  {
    image: xx99Mark2,
    title: "XX99 Mark II",
    link: "/headphones/xx99-mark2-headphones",
    index: 1,
  },
  {
    image: productHeadphones,
    title: "XX99 Mark I",
    link: "/headphones/xx99-mark1-headphones",
    index: 1,
  },
  {
    image: productSpeakers,
    title: "ZX9 Speaker",
    link: "/speakers/zx9-speaker",
    index: 2,
  },
];

export const youMayAlsoLike4 = [
  {
    image: zx7Speaker,
    title: "ZX7 Speaker",
    link: "/speakers/zx7-speaker",
    index: 2,
  },
  {
    image: productHeadphones,
    title: "XX99 Mark I",
    link: "/headphones/xx99-mark1-headphones",
    index: 1,
  },
  {
    image: xx59Headphones,
    title: "xx59",
    link: "/headphones/xx59-headphones",
    index: 1,
  },
];

export const youMayAlsoLike5 = [
  {
    image: productSpeakers,
    title: "ZX9 Speaker",
    link: "/speakers/zx9-speaker",
    index: 2,
  },
  {
    image: productHeadphones,
    title: "XX99 Mark I",
    link: "/headphones/xx99-mark1-headphones",
    index: 1,
  },
  {
    image: xx59Headphones,
    title: "xx59",
    link: "/headphones/xx59-headphones",
    index: 1,
  },
];

export const youMayAlsoLike6 = [
  {
    image: productHeadphones,
    title: "XX99 Mark I",
    link: "/headphones/xx99-mark1-headphones",
    index: 1,
  },
  {
    image: xx59Headphones,
    title: "xx59",
    link: "/headphones/xx59-headphones",
    index: 1,
  },
  {
    image: productSpeakers,
    title: "ZX9 Speaker",
    link: "/speakers/zx9-speaker",
    index: 2,
  },
];

export const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email(),
  phone: z.string().refine((value) => /^[-+\d\s]{7,15}$/g.test(value), {
    message: "Invalid phone number",
  }),
  address: z.string().min(1, {
    message: "Address can't be empty",
  }),
  zipCode: z.string().refine((value) => /^[\d\dA-Za-z\s-]{3,}$/g.test(value), {
    message: "Invalid ZIP Code",
  }),
  city: z.string().min(1, {
    message: "City can't be empty",
  }),
  country: z.string().min(1, {
    message: "Country can't be empty",
  }),
  eMoneyNumber: z
    .string()
    .min(9, {
      message: "Your eMoney number must contain 9 characters",
    })
    .max(9, {
      message: "Your eMoney number must contain 9 characters",
    }),
  eMoneyPin: z.string().refine((value) => /^\d{4,8}$/g.test(value), {
    message: "Invalid ZIP Code",
  }),
});
