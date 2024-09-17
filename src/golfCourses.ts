interface Course {
  name: string;
  par: number;
  length: number; // in yards
}

export interface GolfCourse {
  id: number;
  name: string;
  location: string;
  price: number;
  partySize: number;
  description: string;
  website: string;
  imageUrl: string;
  numberOfRounds: number;
  numberOfNights: number;
  perks: string[];
  courses: Course[];
  userRating: number;
  reviews: number;
  mealsIncluded: string[];
}

export const golfCourses: GolfCourse[] = [
  {
    id: 1,
    name: "Talamore Golf Resort - Royal Golf Package",
    location: "North Carolina",
    price: 352,
    partySize: 4,
    description: "Experience royal treatment with 3 rounds on two championship courses, including the Rees Jones-designed Talamore. Enjoy luxurious villa accommodation and stunning Sandhills scenery.",
    website: "https://www.talamoregolfresort.com/packages/royal-golf-package/",
    imageUrl: "https://www.talamoregolfresort.com/wp-content/uploads/2016/09/Hole-9-site-666x499.jpg",
    numberOfRounds: 3,
    numberOfNights: 2,
    perks: ["Free breakfast", "Golf cart included"],
    courses: [
      { name: "Talamore Golf Club", par: 72, length: 6840 },
      { name: "Mid South Club", par: 71, length: 6649 }
    ],
    userRating: 4.5,
    reviews: 120,
    mealsIncluded: ["Breakfast"]
  },
  {
    id: 2,
    name: "Talamore Golf Resort - St. Andrews Package",
    location: "North Carolina",
    price: 297,
    partySize: 4,
    description: "Immerse yourself in golf history with this Scottish-inspired package. Play 3 rounds on challenging courses, including the newly renovated Mid South Club, while enjoying comfortable villa accommodations.",
    website: "https://www.talamoregolfresort.com/packages/st-andrews-golf-package/",
    imageUrl: "https://www.talamoregolfresort.com/wp-content/uploads/2021/10/mid_south_slider2-661x496.jpg",
    numberOfRounds: 3,
    numberOfNights: 2,
    perks: ["Free breakfast", "Golf cart included"],
    courses: [
      { name: "Talamore Golf Club", par: 72, length: 6840 },
      { name: "Mid South Club", par: 71, length: 6649 }
    ],
    userRating: 4.5,
    reviews: 120,
    mealsIncluded: ["Breakfast"]
  },
  {
    id: 3,
    name: "Talamore Golf Resort - Midland Road Masters Package",
    location: "North Carolina",
    price: 549,
    partySize: 4,
    description: "Indulge in a premium golfing experience with 3 nights in a luxurious lodge and 3 rounds on top-rated courses. Enjoy the newly redesigned Talamore course and the challenging Mid South Club.",
    website: "https://www.talamoregolfresort.com/packages/midland-road-masters-package/",
    imageUrl: "https://www.talamoregolfresort.com/wp-content/uploads/2019/10/Mid-South9b-800x510-1-680x510.jpg",
    numberOfRounds: 3,
    numberOfNights: 3,
    perks: ["Free breakfast", "Golf cart included"],
    courses: [
      { name: "Talamore Golf Club", par: 72, length: 6840 },
      { name: "Mid South Club", par: 71, length: 6649 }
    ],
    userRating: 4.5,
    reviews: 120,
    mealsIncluded: ["Breakfast"]
  },
  {
    id: 4,
    name: "Talamore Golf Resort - Midland Road Cottage Package",
    location: "North Carolina",
    price: 533,
    partySize: 8,
    description: "Perfect for groups, this package offers 3 rounds on premier courses and spacious cottage accommodation. Enjoy the camaraderie of group golf while experiencing the best of Pinehurst area courses.",
    website: "https://www.talamoregolfresort.com/packages/midland-road-masters-at-our-golf-cottage/",
    imageUrl: "https://www.talamoregolfresort.com/wp-content/uploads/2021/10/Mid-South-Club-Hole-17-674x506.png",
    numberOfRounds: 3,
    numberOfNights: 2,
    perks: ["Free breakfast", "Golf cart included"],
    courses: [
      { name: "Talamore Golf Club", par: 72, length: 6840 },
      { name: "Mid South Club", par: 71, length: 6649 }
    ],
    userRating: 4.5,
    reviews: 120,
    mealsIncluded: ["Breakfast"]
  },
  {
    id: 5,
    name: "Talamore Golf Resort - Signature Package at Our Golf Cottage",
    location: "North Carolina",
    price: 340,
    partySize: 8,
    description: "Experience the ultimate group golf getaway with 3 nights in a luxury cottage and 3 rounds on signature courses. Enjoy the newly enhanced Talamore course and the scenic Mid South Club.",
    website: "https://www.talamoregolfresort.com/packages/signature-package-at-our-golf-cottage/",
    imageUrl: "https://www.talamoregolfresort.com/wp-content/uploads/2019/10/IMG_0123pe-825x510-1-680x510.jpg",
    numberOfRounds: 3,
    numberOfNights: 3,
    perks: ["Free breakfast", "Golf cart included"],
    courses: [
      { name: "Talamore Golf Club", par: 72, length: 6840 },
      { name: "Mid South Club", par: 71, length: 6649 }
    ],
    userRating: 4.5,
    reviews: 120,
    mealsIncluded: ["Breakfast"]
  },
  {
    id: 6,
    name: "Talamore Golf Resort - Signature Package",
    location: "North Carolina",
    price: 311,
    partySize: 4,
    description: "Elevate your golf experience with 3 nights in a luxurious lodge and 3 rounds on premier courses. Enjoy the challenging layouts and stunning views of both Talamore and Mid South Clubs.",
    website: "https://www.talamoregolfresort.com/packages/signature-golf-package/",
    imageUrl: "https://www.talamoregolfresort.com/wp-content/uploads/2019/10/MidSouth2b-800x510-1-680x510.jpg",
    numberOfRounds: 3,
    numberOfNights: 3,
    perks: ["Free breakfast", "Golf cart included"],
    courses: [
      { name: "Talamore Golf Club", par: 72, length: 6840 },
      { name: "Mid South Club", par: 71, length: 6649 }
    ],
    userRating: 4.5,
    reviews: 120,
    mealsIncluded: ["Breakfast"]
  },
  {
    id: 7,
    name: "Talamore Golf Resort - Legends Package",
    location: "North Carolina",
    price: 301,
    partySize: 4,
    description: "3 nights in a luxurious 2-bedroom / 2-bath Mid South Lodge",
    website: "https://www.talamoregolfresort.com/packages/legends-golf-package/",
    imageUrl: "https://www.talamoregolfresort.com/wp-content/uploads/2022/05/EcoBunkers-Sod-Wall-1236x927.jpg",
    numberOfRounds: 3,
    numberOfNights: 3,
    perks: ["Free breakfast", "Golf cart included"],
    courses: [
      { name: "Talamore Golf Club", par: 72, length: 6840 },
      { name: "Mid South Club", par: 71, length: 6649 }
    ],
    userRating: 4.5,
    reviews: 120,
    mealsIncluded: ["Breakfast"]
  }
];