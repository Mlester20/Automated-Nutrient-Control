import person from "@/assets/icons/person.png";
import pin from "@/assets/icons/pin.png";
import point from "@/assets/icons/point.png";
import profile from "@/assets/icons/profile.png";
import search from "@/assets/icons/search.png";
import selectedMarker from "@/assets/icons/selected-marker.png";
import star from "@/assets/icons/star.png";
import target from "@/assets/icons/target.png";
import to from "@/assets/icons/to.png";
import books from "@/assets/icons/books.png";
import calculate from '@/assets/icons/calculate.png';
import history from '@/assets/icons/history.png';
import onboarding9 from '@/assets/images/onboarding9.png';
import onboarding10 from '@/assets/images/onboarding10.png';
import coprameal  from '@/assets/images/coprameal.jpg'
import Fishmeal from '@/assets/images/Fishmeal.jpg';
import gabi from '@/assets/images/gabi.jpg';
import indigofera from '@/assets/images/indigofera.jpg';
import ipilipil from '@/assets/images/ipilipil.jpg';
import kakawati from '@/assets/images/kakawati.jpg';
import kangkong from '@/assets/images/kangkong.jpg'
import resonii from '@/assets/images/rensonii.jpg';
import Ricebran from '@/assets/images/Ricebran.jpg';
import Soybeanmeal from '@/assets/images/Soybeanmeal.jpg';
import home from '@/assets/icons/home.png';
import broilerChicken from '@/assets/images/broilerChicken.png';
import layerChicken from '@/assets/images/layersChicken.jpg';
import dualPurposeChicken from '@/assets/images/dualPurposeChicken.jpg';
import landRace from '@/assets/images/landRace.jpg'
import largeWhitePig from '@/assets/images/largeWhitePig.jpg';
import nativePig from '@/assets/images/nativePig.jpg';
import tilipia from '@/assets/images/tilipia.jpg';
import milkFish from '@/assets/images/milkFish.jpg';
import molasses from '@/assets/images/molasses.jpg';
import sweetpotato from '@/assets/images/sweet potato.jpg';
import corngrits from '@/assets/images/corn-grits.jpg';
import manimanihan from '@/assets/images/mani manihan.jpg';
import madreagua from '@/assets/images/madre agua.jpg';
import blueTilapia from '@/assets/images/blueTilapia.png';
import nileTilapia from '@/assets/images/nileTilapia.png';

export const images = {
  onboarding9,
  onboarding10,
  coprameal,
  Fishmeal,
  gabi,
  indigofera,
  ipilipil,
  kakawati,
  kangkong,
  resonii,
  Ricebran,
  Soybeanmeal,
  landRace,
  largeWhitePig,
  nativePig,
  tilipia,
  milkFish,
  molasses,
  sweetpotato,
  corngrits,
  manimanihan,
  madreagua,
  blueTilapia,
  nileTilapia
};

export const icons = {
  person,
  pin,
  point,
  profile,
  search,
  selectedMarker,
  star,
  target,
  to,
  calculate,
  books,
  history,
  home,
  broilerChicken,
  dualPurposeChicken,
  layerChicken,
};


export const onboarding = [
    {
      id: 1,
      title: "Calculate the perfect feed for your livestock!",
      description:
        "Easily calculate the right blend of ingredients for optimal livestock nutrition.",
      image: images.onboarding9,
    },
    {
      id: 2,
      title: "Organic feeding made easy",
      description:
        "Select your livestock’s details and get accurate crude nutrients with organic ingredients.",
      image: images.onboarding10,
    },
];

export const ingredients = [
  {
    id: 1,
    title: 'Copra Meal',
    image: images.coprameal,
    availability: 'Feed stores, coconut mills, markets',
    types:'Protein feed',
    source:'Protein source'
  },
  {
    id: 2,
    title: 'Fish Meal',
    image: images.Fishmeal,
    availability: 'Feed mills, agricultural stores',
    types:'Protein feed',
    source:'Protein source'
  },
  {
    id: 3,
    title: 'Indigo Fera',
    image: images.indigofera,
    availability: 'Local surroundings',
    types:'Legume forage',
    source:'Protein source'
  },
  {
    id: 4,
    title: 'Ipil-Ipil',
    image: images.ipilipil,
    availability: 'Local surroundings',
    types:'Legume forage',
    source:'Protein source'
  },
  {
    id: 5,
    title: 'Kakawati',
    image: images.kakawati,
    availability: 'local surroundings',
    types:'Legume forage tree',
    source:'Protein source'
  },
  {
    id: 6,
    title: 'Kangkong',
    image: images.kangkong,
    availability: 'Local surroundings ',
    types:'Aquatic vegetable forage',
    source:'Green forage'
  },
  {
    id: 7,
    title: 'Rensoni',
    image: images.resonii,
    availability: 'Local surroundings ',
    types:'Legume forage',
    source:'Protein source'
  },
  {
    id: 8,
    title: 'Rice Bran',
    image: images.Ricebran,
    availability: 'Feed stores, rice mills, agricultural supply shops.',
    types:'Carbohydrate-rich feed',
    source:'Energy source'
  },
  {
    id: 9,
    title: 'Soy Bean Meal',
    image: images.Soybeanmeal,
    availability: 'Feed stores, agricultural supply shops.',
    types:'High-protein feed',
    source:'Protein source'
  },
   {
    id: 10,
    title: 'Molasses',
    image: images.molasses,
    availability: 'Sugar mills, feed stores',
    types:'Energy supplement',
    source:'Energy source'
  },
  {
    id: 11,
    title: 'Sweet Potato',
    image: images.sweetpotato,
    availability: 'Markets, local farms',
    types:'	Carbohydrate-rich feed',
    source:'energy source'
  },
  {
    id: 12,
    title: 'Corngrits',
    image: images.corngrits,
    availability: 'Markets, agricultural stores',
    types:'Energy supplement',
    source:'energy source'
  },
  {
    id: 13,
    title: 'Mani manihan',
    image: images.manimanihan,
    availability: 'local surroundings ',
    types:'Grass forage',
    source:'protien source'
  },
  {
    id: 14,
    title: 'Gabi',
    image: images.gabi,
    availability: 'local surroundings, Markets ',
    types:'Green leafy forage',
    source:'energy source'
  },
  {
    id: 15,
    title: 'Madre Agua',
    image: images.madreagua,
    availability: 'local surroundings ',
    types:'	Legume forage',
    source:'Protein source'
  },
];


export const Credits = [
  {
      id: 1,
      title: 'Automated Nutrient Control Version 1.0',
      description: 'This application was developed by the students of Isabela State University, Roxas Campus. It is designed to assist farmers who are looking to self-mix their own feed using locally available ingredients. The app aims to provide a user-friendly platform for small-scale farmers, particularly those in rural areas, to calculate organic feeds for their livestock. By using this application, farmers can optimize the nutritional content of their feeds, promoting healthier livestock and contributing to sustainable farming practices\n\nPlease contact us for any feedback or suggestions, including additional livestock and ingredients you want to add.\nContact No. 09614988526',
      image: onboarding9,
  }
]

export const chickens = [
  {
      id: 1,
      title: "Broiler",
      description: "A plump, white chicken raised for its soft and juicy meat. It grows very quickly and a favorite in many dishes. Ideal for food production.  ",
      image: broilerChicken,
      nutrientValues: [
          { stage: "Pre-Starter", crudeProtein: "21% - 23%"},
          { stage: "Starter", crudeProtein: "19% - 20%"},
          { stage: "Grower", crudeProtein: "18% - 19%"},
          { stage: "Finisher", crudeProtein: "16% - 17%" }
      ],
  },
  {
    id: 2,
    title: "Dual Purpose Chicken",
    description: "This chicken gives both eggs and meat, making it ideal for families or small farms. It is strong and can live in different environments.  Making it versatile for small-scale farming.",
    image: dualPurposeChicken,
    nutrientValues: [
        { stage: "Pre-Starter", crudeProtein: "21% - 23%"},
        { stage: "Starter", crudeProtein: "19% - 20%"},
        { stage: "Grower", crudeProtein: "18% - 19%"},
        { stage: "Finisher", crudeProtein: "16% - 17%" }
    ],
},
{
  id: 3,
  title: "Layer",
  description: "A slim chicken that lays many eggs. It has a calm personality and is perfect for egg farming.",
  image: layerChicken,
  nutrientValues: [
      { stage: "Pre-Starter", crudeProtein: "21% - 23%"},
      { stage: "Starter", crudeProtein: "19% - 20%"},
      { stage: "Grower", crudeProtein: "18% - 19%"},
      { stage: "Finisher", crudeProtein: "16% - 17%" }
  ],
},
];

export const pigs = [
  {
      id: 1,
      title: "Large White Pig",
      description: "A big, white pig with a smooth body and upright ears. It grows fast and provides a lot of high-quality meat. It is calm and gentle in nature",
      image: largeWhitePig,
      nutrientValues: [
          { stage: "Starter", crudeProtein: "18% - 20%"},
          { stage: "Grower", crudeProtein: "15% - 16%"},
          { stage: "Finisher", crudeProtein: "13% - 14%" },
      ],
  },
  {
    id: 2,
    title: "Land Race Pig",
    description: "A long-bodied pig with droopy ears, famous for its high-quality and tender meat, and strong mothering skills.  Often used for breeding as they are excellent mothers.",
    image: landRace,
    nutrientValues: [
      { stage: "Starter", crudeProtein: "18% - 20%"},
      { stage: "Grower", crudeProtein: "15% - 16%"},
      { stage: "Finisher", crudeProtein: "13% - 14%" },
      { stage: "Young gilts/boar", crudeProtein: "15% - 16%" },
      { stage: "Older sow/boar", crudeProtein: "13% - 14%" }
    ],
  },
  {
    id: 3,
    title: "Native Pig",
    description: "A small, black or brown pig that is strong and can survive in tough conditions. Its meat is rich in flavor, often used in traditional dishes.",
    image: nativePig,
    nutrientValues: [
      { stage: "Starter", crudeProtein: "18% - 20%"},
      { stage: "Grower", crudeProtein: "15% - 16%"},
      { stage: "Finisher", crudeProtein: "13% - 14%" },
      { stage: "Young gilts/boar", crudeProtein: "15% - 16%" },
      { stage: "Older sow/boar", crudeProtein: "13% - 14%" }
    ],
  },
];


export const data = {
  onboarding,
};