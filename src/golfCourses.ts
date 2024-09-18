interface Course {
  name: string;
  par: number;
  length: number;
  rating: number;
  slope: number;
  holes: number;
}

interface Review {
  name: string;
  date: string;
  rating: number;
  review: string;
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
  reviews: Review[];
}

export const golfCourses: GolfCourse[] = [
  {
    id: 1,
    name: "Talamore Golf Resort - Royal Golf Package",
    location: "North Carolina",
    price: 352,
    partySize: 4,
    description: "Experience royal treatment with 3 rounds on 3 courses, including the Rees Jones-designed Talamore. Enjoy luxurious villa accommodation and stunning Sandhills scenery.",
    website: "https://www.talamoregolfresort.com/packages/royal-golf-package/",
    imageUrl: "https://www.talamoregolfresort.com/wp-content/uploads/2016/09/Hole-9-site-666x499.jpg",
    numberOfRounds: 3,
    numberOfNights: 2,
    perks: ["Free breakfast", "Golf cart included", "Green fees included"],
    courses: [
      { name: "Talamore Golf Club", par: 71, length: 6840, rating: 72.9, slope: 142, holes: 18 },
      { name: "Mid South Club", par: 72, length: 6577, rating: 73, slope: 135, holes: 18 },
      { name: "Tot Hill Farm", par: 72, length: 6614, rating: 72.1, slope: 144, holes: 18 }
    ],
    userRating: 0,
    reviews: []
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
    perks: ["Free breakfast", "Golf cart included", "Green fees included"],
    courses: [
      { name: "The New Course at Talamore", par: 71, length: 6840, rating: 72.9, slope: 142, holes: 18 },
      { name: "Legacy", par: 72, length: 7019, rating: 73.2, slope: 132, holes: 18 },
      { name: "Longleaf Golf and Family Club", par: 72, length: 6709, rating: 72.4, slope: 132, holes: 18 },
      { name: "Carolina Trace Creek", par: 72, length: 6792, rating: 73.2, slope: 131, holes: 18 },
      { name: "Hyland", par: 72, length: 6823, rating: 72.1, slope: 141, holes: 18 },
      { name: "7 Lakes", par: 72, length: 6869, rating: 74.1, slope: 142, holes: 18 }
    ],
    userRating: 0,
    reviews: []
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
    numberOfRounds: 4,
    numberOfNights: 3,
    perks: ["Free breakfast", "Golf cart included", "Green fees included"],
    courses: [
      { name: "The New Course at Talamore", par: 71, length: 6840, rating: 72.9, slope: 142, holes: 18 },
      { name: "Mid South Club", par: 72, length: 6577, rating: 73, slope: 135, holes: 18 },
      { name: "Mid Pines", par: 72, length: 6723, rating: 71, slope: 126, holes: 18 },
      { name: "Pine Needles", par: 71, length: 7015, rating: 73.5, slope: 135, holes: 18 }
    ],
    userRating: 0,
    reviews: []
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
    numberOfRounds: 4,
    numberOfNights: 3,
    perks: ["Free breakfast", "Golf cart included", "Green fees included"],
    courses: [
      { name: "The New Course at Talamore", par: 71, length: 6840, rating: 72.9, slope: 142, holes: 18 },
      { name: "Mid South Club", par: 72, length: 6577, rating: 73, slope: 135, holes: 18 },
      { name: "Mid Pines", par: 72, length: 6723, rating: 71, slope: 126, holes: 18 },
      { name: "Pine Needles", par: 71, length: 7015, rating: 73.5, slope: 135, holes: 18 }
    ],
    userRating: 0,
    reviews: []
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
    numberOfNights: 2,
    perks: ["Free breakfast", "Golf cart included", "Green fees included"],
    courses: [
      { name: "Talamore Golf Club", par: 71, length: 6840, rating: 72.9, slope: 142, holes: 18 },
      { name: "Mid South Club", par: 72, length: 6577, rating: 73, slope: 135, holes: 18 }
    ],
    userRating: 0,
    reviews: []
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
    numberOfNights: 2,
    perks: ["Free breakfast", "Golf cart included", "Green fees included"],
    courses: [
      { name: "Talamore Golf Club", par: 71, length: 6840, rating: 72.9, slope: 142, holes: 18 },
      { name: "Mid South Club", par: 72, length: 6577, rating: 73, slope: 135, holes: 18 }
    ],
    userRating: 0,
    reviews: []
  },
  {
    id: 7,
    name: "Talamore Golf Resort - Legends Package",
    location: "North Carolina",
    price: 301,
    partySize: 4,
    description: "Play like a legend with 3 nights and 3 rounds on iconic Sandhills courses. Experience the newly renovated Talamore with its unique sod-wall bunkers and the challenging Mid South Club.",
    website: "https://www.talamoregolfresort.com/packages/legends-golf-package/",
    imageUrl: "https://www.talamoregolfresort.com/wp-content/uploads/2022/05/EcoBunkers-Sod-Wall-1236x927.jpg",
    numberOfRounds: 3,
    numberOfNights: 2,
    perks: ["Free breakfast", "Golf cart included", "Green fees included"],
    courses: [
      { name: "Talamore Golf Club", par: 71, length: 6840, rating: 72.9, slope: 142, holes: 18 },
      { name: "Mid South Club", par: 72, length: 6577, rating: 73, slope: 135, holes: 18 },
      { name: "Legacy", par: 72, length: 7019, rating: 73.2, slope: 132, holes: 18 }
    ],
    userRating: 0,
    reviews: []
  },
  {
    id: 8,
    name: "Grandover Resort - Golf Package",
    location: "North Carolina",
    price: 539,
    partySize: 2,
    description: "Experience world-class golf at Grandover Resort in Greensboro, North Carolina. This premier golf destination offers two 18-hole championship courses designed by David Graham and Gary Panks.",
    website: "https://grandoverresort.com/golf/",
    imageUrl: "https://golf-pass.brightspotcdn.com/a4/78/e3d1da569c2783e822d4b3cb6501/57954.jpg",
    numberOfRounds: 2,
    numberOfNights: 1,
    perks: ["Free breakfast"],
    courses: [
      { name: "East Course", par: 72, length: 7100, rating: 74.3, slope: 140, holes: 18 },
      { name: "West Course", par: 72, length: 6800, rating: 72.5, slope: 136, holes: 18 }
    ],
    userRating: 0,
    reviews: []
  },
  {
    id: 9,
    name: "Dunes West Golf Club Package",
    location: "South Carolina",
    price: 459,
    partySize: 4,
    description: "The Charming Charleston Package from Troon Golf Vacations offers a perfect blend of golf and southern hospitality, featuring a 3-night stay at the Courtyard - Charleston Mt. Pleasant and three rounds of golf across two prestigious courses.",
    website: "https://www.duneswestgolfclub.com/-golf-vacations",
    imageUrl: "https://ygt-res.cloudinary.com/image/upload/c_fit,h_1280,q_80,w_1920/v1614089169/Venues/Dunes%20West%20Golf%20and%20River%20Club/dunes-west-golf-river-club-1.jpg",
    numberOfRounds: 3,
    numberOfNights: 3,
    perks: [],
    courses: [
      { name: "Dunes West Golf and River Club", par: 72, length: 6871, rating: 73, slope: 134 , holes: 18 },
      { name: "RiverTowne Country Club", par: 72, length: 7133, rating: 75, slope: 145, holes: 18 }
    ],
    userRating: 0,
    reviews: []
  },
];