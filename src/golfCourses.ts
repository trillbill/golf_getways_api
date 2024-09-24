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
  price: { min: number; max: number };
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
    name: "Talamore Golf Resort Royal Golf Package",
    location: "North Carolina",
    price: { min: 352, max: 352 },
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
    name: "Talamore Golf Resort St. Andrews Package",
    location: "North Carolina",
    price: { min: 297, max: 297 },
    partySize: 4,
    description: "Immerse yourself in golf history with this Scottish-inspired package. Play 3 rounds on challenging courses, including the newly renovated Talamore course, while enjoying comfortable villa accommodations.",
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
    name: "Talamore Golf Resort Midland Road Masters Package",
    location: "North Carolina",
    price: { min: 549, max: 549 },
    partySize: 4,
    description: "Indulge in a premium golfing experience with 3 nights in a luxurious lodge and 4 rounds on top-rated courses. Enjoy the newly redesigned Talamore course and the challenging Mid South Club.",
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
    name: "Talamore Golf Resort Midland Road Cottage Package",
    location: "North Carolina",
    price: { min: 533, max: 533 },
    partySize: 8,
    description: "Perfect for groups, this package offers 4 rounds on premier courses and spacious cottage accommodation. Enjoy the camaraderie of group golf while experiencing the best of Pinehurst area courses.",
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
    name: "Talamore Golf Resort Signature Package at Our Golf Cottage",
    location: "North Carolina",
    price: { min: 340, max: 340 },
    partySize: 8,
    description: "Experience the ultimate group golf getaway with 2 nights in a luxury cottage and 3 rounds on signature courses. Enjoy the newly enhanced Talamore course and the scenic Mid South Club.",
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
    name: "Talamore Golf Resort Signature Package",
    location: "North Carolina",
    price: { min: 311, max: 311 },
    partySize: 4,
    description: "Elevate your golf experience with 2 nights in a luxurious lodge and 3 rounds on premier courses. Enjoy the challenging layouts and stunning views of both Talamore and Mid South Clubs.",
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
    name: "Talamore Golf Resort Legends Package",
    location: "North Carolina",
    price: { min: 301, max: 301 },
    partySize: 4,
    description: "Play like a legend with 2 nights and 3 rounds on iconic Sandhills courses. Experience the newly renovated Talamore with its unique sod-wall bunkers and the challenging Mid South Club.",
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
    name: "Grandover Resort Golf Package",
    location: "North Carolina",
    price: { min: 539, max: 539 },
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
    price: { min: 459, max: 459 },
    partySize: 4,
    description: "The Charming Charleston Package from Troon Golf Vacations offers a perfect blend of golf and southern hospitality, featuring a 3-night stay at the Courtyard - Charleston Mt. Pleasant and three rounds of golf across two prestigious courses.",
    website: "https://www.duneswestgolfclub.com/-golf-vacations",
    imageUrl: "https://ygt-res.cloudinary.com/image/upload/c_fit,h_1280,q_80,w_1920/v1614089169/Venues/Dunes%20West%20Golf%20and%20River%20Club/dunes-west-golf-river-club-1.jpg",
    numberOfRounds: 3,
    numberOfNights: 3,
    perks: [],
    courses: [
      { name: "Dunes West Golf and River Club", par: 72, length: 6871, rating: 73, slope: 134, holes: 18 },
      { name: "RiverTowne Country Club", par: 72, length: 7133, rating: 75, slope: 145, holes: 18 }
    ],
    userRating: 0,
    reviews: []
  },
  {
    id: 10,
    name: "Indian Wells Stay and Play Package",
    location: "California",
    price: { min: 1207, max: 1207 },
    partySize: 4,
    description: "Experience the ultimate golf getaway with Indian Wells Golf Resort's exclusive stay-and-play package, offering luxurious accommodations at premier local hotels and unforgettable rounds on two award-winning courses set against the breathtaking backdrop of the Santa Rosa Mountains.",
    website: "https://www.indianwellsgolfresort.com/indian-wells-resort-packages/",
    imageUrl: "https://www.indianwellsgolfresort.com/wp-content/uploads/sites/8991/2023/07/IW_Players_17.jpg",
    numberOfRounds: 3,
    numberOfNights: 3,
    perks: ["Free breakfast", "Complimentary shuttle"],
    courses: [
      { name: "Indian Wells Celebrity Course", par: 72, length: 7038, rating: 74.3, slope: 138, holes: 18 },
      { name: "Indian Wells Players Course", par: 72, length: 7376, rating: 75.3, slope: 139, holes: 18 }
    ],
    userRating: 0,
    reviews: []
  },
  {
    id: 11,
    name: "We-Ko-Pa Golf Club Package",
    location: "Arizona",
    price: { min: 282, max: 639 },
    partySize: 2,
    description: "The We-Ko-Pa Golf Club offers an exceptional Stay-and-Play package at the adjacent We-Ko-Pa Casino Resort, featuring luxurious accommodations and a round of golf at one of Arizona's premier courses. Enjoy a unique blend of fine dining, spa services, and Vegas-style gaming, all while experiencing the stunning desert landscape.",
    website: "https://wekopa.com/rates-and-packages/",
    imageUrl: "https://golf-pass.brightspotcdn.com/dims4/default/37a4b61/2147483647/strip/true/crop/1440x929+0+30/resize/930x600!/format/webp/quality/90/?url=https%3A%2F%2Fgolf-pass-brightspot.s3.amazonaws.com%2F63%2F0c%2Fce9503097fc23ca32cc85b39d6db%2F405.jpg",
    numberOfRounds: 1,
    numberOfNights: 1,
    perks: [],
    courses: [
      { name: "We-Ko-Pa Golf Club", par: 72, length: 7225, rating: 73.4, slope: 138, holes: 18 }
    ],
    userRating: 0,
    reviews: []
  },
  {
    id: 12,
    name: "Reunion Resort Ultimate Golf Package",
    location: "Florida",
    price: { min: 199, max: 650 },
    partySize: 4,
    description: "Experience supreme amenities and golf club perks with customizable packages at Reunion Resort, offering luxurious accommodations and daily rounds of golf for groups of up to 11 players.",
    website: "https://www.reunionresortgolf.com/packages",
    imageUrl: "https://symphony.cdn.tambourine.com/reunion-resort-golf/media/reunion-golf-gallery-9-6064ccffc9912.jpg",
    numberOfRounds: 3,
    numberOfNights: 2,
    perks: ["Parking included", "$30 breakfast credit"],
    courses: [
      { name: "Arnold Palmer Course", par: 72, length: 7010, rating: 72.8, slope: 142, holes: 18 },
      { name: "Tom Watson Course", par: 72, length: 7257, rating: 74.9, slope: 141, holes: 18 },
      { name: "Jack Nicklaus Course", par: 72, length: 7244, rating: 74.8, slope: 140, holes: 18 }
    ],
    userRating: 0,
    reviews: []
  },
  {
    id: 13,
    name: "The Otesaga Resort Golf Package",
    location: "New York",
    price: { min: 226, max: 580 },
    partySize: 5,
    description: "Enjoy an ultimate golf getaway at The Otesaga Resort, featuring unlimited golf on the championship Leatherstocking Golf Course, charming accommodations, and complimentary amenities in a picturesque lakeside setting.",
    website: "https://www.otesaga.com/offers/golf-package",
    imageUrl: "https://assets.milestoneinternet.com/cdn-cgi/image/f=auto/the-otesaga-resort-hotel/otesaga/dining-options/19-golf-book-a-tee-time.jpg?width=800&height=600",
    numberOfRounds: 10,
    numberOfNights: 3,
    perks: ["15% pro shop discount", "Complimentary range balls", "Unlimited rounds", "Golf cart included"],
    courses: [
      { name: "Leatherstocking Course", par: 72, length: 6401, rating: 71, slope: 133, holes: 18 }
    ],
    userRating: 0,
    reviews: []
  },
  {
    id: 14,
    name: "Turning Stone Resort Champions Package",
    location: "New York",
    price: { min: 618, max: 750 },
    partySize: 4,
    description: "The Champions Package at Turning Stone Resort offers a comprehensive golf experience, including two nights of accommodation and rounds at three premier courses—Atunyote, Shenendoah, and Kaluhyat—along with unlimited replays on the same day at select courses.",
    website: "https://www.turningstone.com/accommodations/packages/champions-package",
    imageUrl: "https://www.turningstone.com/uploads/category/resized/17267003111484345523golf-atunyote-experience.webp",
    numberOfRounds: 3,
    numberOfNights: 2,
    perks: ["Complimentary 9 hole golf"],
    courses: [
      { name: "Atunyote", par: 72, length: 7315, rating: 75.8, slope: 143, holes: 18 },
      { name: "Shenendoah", par: 72, length: 7013, rating: 74.2, slope: 140, holes: 18 },
      { name: "Kaluhyat", par: 72, length: 7105, rating: 75.2, slope: 145, holes: 18 },
      { name: "Sandstone Hollow", par: 27, length: 1482, rating: 70, slope: 110, holes: 9 },
      { name: "Atunyote", par: 36, length: 3388, rating: 34.8, slope: 102, holes: 9 }
    ],
    userRating: 0,
    reviews: []
  },
  {
    id: 15,
    name: "Sea Pines Resort Villa Golf Package",
    location: "South Carolina",
    price: { min: 720, max: 1000 },
    partySize: 4,
    description: "Take advantage of Sea Pines Resort's villa golf package and experience world-class golf and a comfortable and convenient living space to enjoy after a great day on the course.",
    website: "https://www.seapines.com/offers-and-packages/villa-golf-package",
    imageUrl: "https://www.seapines.com/sites/default/files/media/images/gallery-golflawn.jpg",
    numberOfRounds: 3,
    numberOfNights: 2,
    perks: ["$75 replay rates"],
    courses: [
      { name: "Harbour Town Golf Links", par: 71, length: 7110, rating: 75.6, slope: 148, holes: 18 },
      { name: "Heron Point by Pete Dye", par: 72, length: 7035, rating: 74, slope: 140, holes: 18 },
      { name: "Atlantic Dunes by Davis Love III", par: 72, length: 7010, rating: 74.3, slope: 143, holes: 18 }
    ],
    userRating: 0,
    reviews: []
  },
  {
    id: 16,
    name: "Mission Resort and Club Golf Package",
    location: "Florida",
    price: { min: 135, max: 268 },
    partySize: 4,
    description: "Discover Florida's hidden gem with Mission Inn Resort & Club's stay-and-play package, offering charming accommodations and exceptional golf on two picturesque courses nestled in the rolling hills of Central Florida.",
    website: "https://www.missionresortandclubgolf.com/howey-in-the-hills-golf-club",
    imageUrl: "https://symphony.cdn.tambourine.com/mission-inn-golf-redesign/media/missionresort_clubgolf-homepage-feedyourpassion-small-65d4e57a783bc.jpeg",
    numberOfRounds: 3,
    numberOfNights: 3,
    perks: ["Free shared cart", "Daily range balls", "Complimentary breakfast buffet"],
    courses: [
      { name: "El Campeón", par: 72, length: 7015, rating: 73.8, slope: 136, holes: 18 },
      { name: "Las Colinas", par: 71, length: 6867, rating: 75.4, slope: 132, holes: 18 }
    ],
    userRating: 0,
    reviews: []
  },
  {
    id: 17,
    name: "Ventana Canyon Club Golf Package",
    location: "Arizona",
    price: { min: 385, max: 797 },
    partySize: 2,
    description: "Discover Florida's hidden gem with Mission Inn Resort & Club's stay-and-play package, offering charming accommodations and exceptional golf on two picturesque courses nestled in the rolling hills of Central Florida.",
    website: "https://www.ventanacanyonclub.com/offers/stay-play-golf-package/",
    imageUrl: "https://www.ventanacanyonclub.com/wp-content/uploads/2020/11/MG_7296.jpg",
    numberOfRounds: 2,
    numberOfNights: 2,
    perks: ["Golf cart included", "Use of practice facilities", "Complimentary breakfast"],
    courses: [
      { name: "Mountain Course", par: 72, length: 6898, rating: 72.8, slope: 143, holes: 18 },
      { name: "Canyon Course", par: 72, length: 6836, rating: 71.7, slope: 137, holes: 18 }
    ],
    userRating: 0,
    reviews: []
  }
];