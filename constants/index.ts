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
import home from '@/assets/icons/home.png'

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

export const data = {
  onboarding,
};