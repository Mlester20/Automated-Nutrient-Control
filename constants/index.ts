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
    description: 'A by-product of coconut oil extraction, high in energy and fiber, often used as livestock feed to enhance growth and weight gain.'
  },
  {
    id: 2,
    title: 'Fish Meal',
    image: images.Fishmeal,
    description: 'A high-protein feed ingredient made from ground fish or fish by-products, rich in essential amino acids and omega-3 fatty acids.'
  },
  {
    id: 3,
    title: 'Indigo Fera',
    image: images.indigofera,
    description: 'A leguminous plant known for its high protein content, used as a forage crop for livestock to support healthy growth and nutrition.'
  },
  {
    id: 4,
    title: 'Ipil-Ipil',
    image: images.ipilipil,
    description: 'A versatile tree legume with leaves rich in protein, commonly used as a sustainable feed ingredient for livestock and poultry.'
  },
  {
    id: 5,
    title: 'Kakawati',
    image: images.kakawati,
    description: 'Also known as Madre de Cacao, its leaves are used as an organic feed ingredient due to their high nutrient content and medicinal properties.'
  },
  {
    id: 6,
    title: 'Kangkong',
    image: images.kangkong,
    description: 'A fast-growing water plant rich in vitamins and minerals, often used as a green feed supplement for livestock and poultry.'
  },
  {
    id: 7,
    title: 'Resoni',
    image: images.resonii,
    description: 'A type of forage plant valued for its high protein content and digestibility, making it an ideal feed for livestock.'
  },
  {
    id: 8,
    title: 'Rice Bran',
    image: images.Ricebran,
    description: 'A by-product of rice milling, it is a good source of energy, fiber, and essential fatty acids for animal feed formulations.'
  },
  {
    id: 9,
    title: 'Soy Bean Meal',
    image: images.Soybeanmeal,
    description: 'A high-protein feed ingredient derived from soybeans, widely used to support growth and reproduction in livestock and poultry.'
  }
];


export const Credits = [
  {
      id: 1,
      title: 'Automated Nutrient Control Version 1.0',
      description: 'This application was developed by the students of Isabela State University, Roxas Campus. It is designed to assist farmers who are looking to self-mix their own feed using locally available ingredients. The app aims to provide a user-friendly platform for small-scale farmers, particularly those in rural areas, to calculate organic feeds for their livestock. By using this application, farmers can optimize the nutritional content of their feeds, promoting healthier livestock and contributing to sustainable farming practices',
      image: onboarding9,
  }
]

export const liveStocks = [
  {
    id: 1,
    title: 'Broiler Chicken',
    description: 'Broilers are chickens bred and raised exclusively for meat production. Broilers grow rapidly and produce large breast muscles. The typical raising period is 35-36 days, with a targeted body weight ranging from 2kg to 4.5kg (4.4 to 9.9lbs). Common breeds are Ross 308/708, Cobb 500/700, Arbor Acres broiler, etc.',
    image: broilerChicken,
  },
  {
    id: 2,
    title: 'Dual Purpose Chicken',
    description: 'Dual-purpose chickens are versatile breeds suitable for both egg and meat production. These chickens are valued by small-scale farmers for their balanced utility. Common dual-purpose breeds include Rhode Island Reds, Sussex, and Plymouth Rocks. Their eggs are medium to large in size, and they can reach an average body weight of 2.5kg to 4kg (5.5 to 8.8lbs).',
    image: dualPurposeChicken,
  },
  {
    id: 3,
    title: 'Layer Chicken',
    description: 'Layer chickens are specifically bred for consistent egg production. These chickens start laying eggs at around 18-20 weeks of age and can lay up to 300 eggs annually. Common breeds include White Leghorns, Lohmann Browns, and Isa Browns. They are typically smaller in size, with a body weight ranging from 1.5kg to 2kg (3.3 to 4.4lbs).',
    image: layerChicken,
  },
];


export const data = {
  onboarding,
};