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
      { name: "Mid South Club", par: 72, length: 6577, rating: 73.0, slope: 135, holes: 18 },
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
      { name: "Mid South Club", par: 72, length: 6577, rating: 73.0, slope: 135, holes: 18 },
      { name: "Mid Pines", par: 72, length: 6723, rating: 71.0, slope: 126, holes: 18 },
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
      { name: "Mid South Club", par: 72, length: 6577, rating: 73.0, slope: 135, holes: 18 },
      { name: "Mid Pines", par: 72, length: 6723, rating: 71.0, slope: 126, holes: 18 },
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
      { name: "Mid South Club", par: 72, length: 6577, rating: 73.0, slope: 135, holes: 18 }
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
      { name: "Mid South Club", par: 72, length: 6577, rating: 73.0, slope: 135, holes: 18 }
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
      { name: "Mid South Club", par: 72, length: 6577, rating: 73.0, slope: 135, holes: 18 },
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
      { name: "Dunes West Golf and River Club", par: 72, length: 6871, rating: 73.0, slope: 134, holes: 18 },
      { name: "RiverTowne Country Club", par: 72, length: 7133, rating: 75.0, slope: 145, holes: 18 }
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
      { name: "Leatherstocking Course", par: 72, length: 6401, rating: 71.0, slope: 133, holes: 18 }
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
      { name: "Sandstone Hollow", par: 27, length: 1482, rating: 70.0, slope: 110, holes: 9 },
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
      { name: "Heron Point by Pete Dye", par: 72, length: 7035, rating: 74.0, slope: 140, holes: 18 },
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
    description: "The Stay & Play Golf Package at Ventana Canyon offers a luxurious desert getaway featuring two Tom Fazio 18-hole championship courses, spacious guest suites with breathtaking views, complimentary breakfast, and a $50 resort credit for stays of three nights or longer.",
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
  },
  {
    id: 18,
    name: "Palmetto Dunes Oceanfront Resort",
    location: "South Carolina",
    price: { min: 600, max: 900 },
    partySize: 4,
    description: "The Golf Stay and Play Package at Palmetto Dunes offers customizable accommodations on Hilton Head Island, including four days and three nights in a two-bedroom villa, along with two or three rounds of golf on your choice of three championship courses, and additional perks like dining discounts and a Toptracer experience.",
    website: "https://www.palmettodunes.com/golf/golf-rates-and-packages",
    imageUrl: "https://www.palmettodunes.com/img/asset/bWFpbi9ibG9nL2dvbGYyaGVhZGVyLmpwZWc=?w=370&h=240&fit=crop&dpr=2&s=59c63369bcf15206e005f0e395ee57e2",
    numberOfRounds: 3,
    numberOfNights: 3,
    perks: ["Golf cart included", "Free tennis & pickleball", "Toptracer experience"],
    courses: [
      { name: "Robert Trent Jones Course", par: 72, length: 7005, rating: 74.8, slope: 141, holes: 18 },
      { name: "George Fazio Course", par: 70, length: 6873, rating: 74.2, slope: 145, holes: 18 },
      { name: "Arthur Hills Course", par: 72, length: 6907, rating: 74.3, slope: 147, holes: 18 }
    ],
    userRating: 0,
    reviews: []
  },
  {
    id: 19,
    name: "Ocean Annie's North Myrtle Beach Package",
    location: "South Carolina",
    price: { min: 245, max: 345 },
    partySize: 2,
    description: "The North Myrtle Beach Package at Ocean Annie's Resorts includes three nights of accommodations, three rounds of golf at Beachwood, Eagle Nest, and Azalea Sands, along with daily breakfast.",
    website: "https://oceananniesresorts.com/elite-golf-package/north-myrtle-beach-package/",
    imageUrl: "https://oceananniesresorts.com/wp-content/uploads/2022/10/Azalea-Sands-Golf-Course.jpg",
    numberOfRounds: 3,
    numberOfNights: 3,
    perks: ["Free breakfast", "Golf cart included"],
    courses: [
      { name: "Beachwood", par: 72, length: 6820, rating: 71.7, slope: 129, holes: 18 },
      { name: "Eagle Nest", par: 72, length: 8168, rating: 78.1, slope: 143, holes: 18 },
      { name: "Azalea Sands", par: 72, length: 6444, rating: 71.0, slope: 126, holes: 18 }
    ],
    userRating: 0,
    reviews: []
  },
  {
    id: 20,
    name: "Ocean Annie's Legend's Package",
    location: "South Carolina",
    price: { min: 325, max: 425 },
    partySize: 2,
    description: "The Legends Package at Ocean Annie's Resorts invites you to indulge in a thrilling golf getaway with three nights of oceanview accommodations, three rounds of golf at top courses, and daily breakfast, all while enjoying the vibrant atmosphere of Myrtle Beach and its stunning coastline.",
    website: "https://oceananniesresorts.com/elite-golf-package/legends-package/",
    imageUrl: "https://oceananniesresorts.com/wp-content/uploads/2022/10/Legends-Golf-Course.jpg",
    numberOfRounds: 3,
    numberOfNights: 3,
    perks: ["Free breakfast", "Golf cart included", "2 free beers per round"],
    courses: [
      { name: "Legends Heathland", par: 71, length: 6800, rating: 72.8, slope: 131, holes: 18 },
      { name: "Moorland", par: 72, length: 6755, rating: 74.0, slope: 140, holes: 18 },
      { name: "Parkland", par: 72, length: 7108, rating: 74.9, slope: 136, holes: 18 },
      { name: "Oyster Bay", par: 70, length: 6685, rating: 72.1, slope: 136, holes: 18 },
      { name: "Heritage", par: 71, length: 7118, rating: 74.9, slope: 138, holes: 18 }
    ],
    userRating: 0,
    reviews: []
  },
  {
    id: 21,
    name: "Ocean Annie's Big Cats Package",
    location: "South Carolina",
    price: { min: 300, max: 400 },
    partySize: 2,
    description: "The Big Cats Package at Ocean Annie's Resorts offers an exhilarating golf experience with three nights of oceanview accommodations, three rounds of golf at premier courses including Leopard’s Chase, Tiger’s Eye, Lion’s Paw, and Panther’s Run, along with daily breakfast and access to resort amenities.",
    website: "https://oceananniesresorts.com/elite-golf-package/big-cats-package/",
    imageUrl: "https://oceananniesresorts.com/wp-content/uploads/2022/10/Big-Cats-Package-Image.jpg",
    numberOfRounds: 3,
    numberOfNights: 3,
    perks: ["Free breakfast", "Golf cart included"],
    courses: [
      { name: "Leopard's Chase", par: 72, length: 7155, rating: 74.3, slope: 140, holes: 18 },
      { name: "Tiger's Eye", par: 72, length: 7014, rating: 73.3, slope: 141, holes: 18 },
      { name: "Lion's Paw", par: 72, length: 7003, rating: 74.0, slope: 132, holes: 18 },
      { name: "Panther's Run", par: 72, length: 7089, rating: 73.7, slope: 140, holes: 18 }
    ],
    userRating: 0,
    reviews: []
  },
  {
    id: 22,
    name: "Ocean Annie's Sea Trail Package",
    location: "South Carolina",
    price: { min: 260, max: 360 },
    partySize: 2,
    description: "The Sea Trail Triple Course Package at Ocean Annie's Resorts offers an exciting golf getaway with three nights of oceanview accommodations, three rounds of golf on the renowned Sea Trail courses—Jones, Byrd, and Maples—along with daily breakfast and a complimentary afternoon replay on any Sea Trail course.",
    website: "https://oceananniesresorts.com/elite-golf-package/sea-trail-triple-course-package/",
    imageUrl: "https://oceananniesresorts.com/wp-content/uploads/2021/03/Sea-Trail-Golf-Course-e1614699791397.png",
    numberOfRounds: 3,
    numberOfNights: 3,
    perks: ["Free breakfast", "Golf cart included"],
    courses: [
      { name: "Sea Trail Jones", par: 72, length: 6754, rating: 73.2, slope: 138, holes: 18 },
      { name: "Byrd", par: 72, length: 6658, rating: 72.6, slope: 129, holes: 18 },
      { name: "Maples", par: 72, length: 6384, rating: 72.0, slope: 138, holes: 18 }
    ],
    userRating: 0,
    reviews: []
  },
  {
    id: 23,
    name: "Ocean Annie's Barefoot Package",
    location: "South Carolina",
    price: { min: 414, max: 514 },
    partySize: 2,
    description: "The Barefoot Golf Package at Ocean Annie's Resorts includes three nights of accommodations, three rounds of golf with cart at your choice of Barefoot courses—Dye, Love, Fazio, or Norman—and breakfast each morning, with a bonus fourth round free after 1 PM.",
    website: "https://oceananniesresorts.com/elite-golf-package/barefoot-golf-package/",
    imageUrl: "https://oceananniesresorts.com/wp-content/uploads/2019/09/Barefoot-Package.jpg",
    numberOfRounds: 4,
    numberOfNights: 3,
    perks: ["Free breakfast", "Golf cart included", "Free 4th round"],
    courses: [
      { name: "Barefoot Dye", par: 72, length: 7343, rating: 76.0, slope: 143, holes: 18 },
      { name: "Love", par: 72, length: 7047, rating: 74.9, slope: 141, holes: 18 },
      { name: "Fazio", par: 71, length: 6834, rating: 73.3, slope: 144, holes: 18 },
      { name: "Norman", par: 72, length: 7035, rating: 74.2, slope: 141, holes: 18 }
    ],
    userRating: 0,
    reviews: []
  },
  {
    id: 24,
    name: "Ocean Annie's Coastal Escape Package",
    location: "South Carolina",
    price: { min: 343, max: 443 },
    partySize: 2,
    description: "The Coastal Escape Golf Package at Ocean Annie's Resorts offers a delightful getaway with three nights of oceanview accommodations, three rounds of golf at your choice of premier courses—including Tidewater, Arcadian Shores, and Beachwood—along with daily breakfast and access to resort amenities.",
    website: "https://oceananniesresorts.com/elite-golf-package/coastal-escape-golf-package/",
    imageUrl: "https://oceananniesresorts.com/wp-content/uploads/2019/09/East-Coast-Package-CTA.jpg",
    numberOfRounds: 3,
    numberOfNights: 3,
    perks: ["Free breakfast", "Golf cart included"],
    courses: [
      { name: "Tidewater", par: 72, length: 7044, rating: 74.3, slope: 144, holes: 18 },
      { name: "Arcadian Shores", par: 72, length: 6857, rating: 72.9, slope: 138, holes: 18 },
      { name: "Beachwood", par: 72, length: 6820, rating: 71.7, slope: 129, holes: 18 },
      { name: "Eagle Nest", par: 72, length: 8168, rating: 78.1, slope: 143, holes: 18 },
      { name: "Azalea Sands", par: 72, length: 6444, rating: 71.0, slope: 126, holes: 18 },
      { name: "Pearl", par: 72, length: 7006, rating: 73.2, slope: 132, holes: 18 }
    ],
    userRating: 0,
    reviews: []
  },
  {
    id: 25,
    name: "Ocean Annie's Myrtle Beach Elite Package",
    location: "South Carolina",
    price: { min: 323, max: 423 },
    partySize: 2,
    description: "Experience the ultimate golf getaway with three nights of oceanview accommodations and rounds at premier courses, all while enjoying the vibrant atmosphere of Myrtle Beach.",
    website: "https://oceananniesresorts.com/elite-golf-package/myrtle-beach-elite-package/",
    imageUrl: "https://oceananniesresorts.com/wp-content/uploads/2019/09/Elite-Package-CTA-600x400-1.jpg",
    numberOfRounds: 3,
    numberOfNights: 3,
    perks: ["Free breakfast", "Golf cart included"],
    courses: [
      { name: "Arcadian Shores", par: 72, length: 6857, rating: 72.9, slope: 138, holes: 18 },
      { name: "Tidewater", par: 72, length: 7044, rating: 74.3, slope: 144, holes: 18 },
      { name: "Arrowhead", par: 72, length: 6697, rating: 72.1, slope: 139, holes: 18 },
      { name: "Prestwick", par: 72, length: 7086, rating: 74.7, slope: 138, holes: 18 }
    ],
    userRating: 0,
    reviews: []
  },
  {
    id: 26,
    name: "La Quinta Resort Package",
    location: "California",
    price: { min: 945, max: 1140 },
    partySize: 2,
    description: " Elevate your golf experience with luxurious accommodations and daily rounds on legendary courses designed by golf icons, all set against the stunning backdrop of the California desert.",
    website: "https://www.laquintaresort.com/rooms/special-offers/stay-and-play/",
    imageUrl: "https://laquintaresort.com/wp-content/uploads/2017/02/Stadium-Course_311x310.jpg",
    numberOfRounds: 2,
    numberOfNights: 3,
    perks: ["Golf cart included"],
    courses: [
      { name: "The Stadium Course at PGA WEST", par: 72, length: 7300, rating: 75.8, slope: 148, holes: 18 },
      { name: "Mountain Course at La Quinta Resort", par: 72, length: 6666, rating: 72.9, slope: 135, holes: 18 },
      { name: "Greg Norman Course at PGA WEST", par: 72, length: 7156, rating: 75.1, slope: 139, holes: 18 },
      { name: "Nicklaus Tournament Course at PGA WEST", par: 72, length: 7204, rating: 75.3, slope: 143, holes: 18 },
      { name: "Dunes Course at La Quinta Resort", par: 72, length: 6578, rating: 72.4, slope: 134, holes: 18 }
    ],
    userRating: 0,
    reviews: []
  },
  {
    id: 27,
    name: "Hammock Beach Ocean Course Package",
    location: "Florida",
    price: { min: 568, max: 668 },
    partySize: 4,
    description: "Indulge in a luxurious coastal retreat with exclusive golf packages that offer breathtaking oceanfront courses and top-notch amenities for an unforgettable golfing experience.",
    website: "https://www.hammockbeach.com/palm-coast-hotel-offers/golf-packages-1/",
    imageUrl: "https://www.hammockbeach.com/site/assets/files/3660/hotel.jpg",
    numberOfRounds: 2,
    numberOfNights: 2,
    perks: ["$25 breakfast credit"],
    courses: [
      { name: "The Ocean Course", par: 72, length: 7201, rating: 77.0, slope: 147, holes: 18 }
    ],
    userRating: 0,
    reviews: []
  },
  {
    id: 28,
    name: "Hammock Beach Just Golf Package",
    location: "Florida",
    price: { min: 460, max: 560 },
    partySize: 4,
    description: "Indulge in a luxurious coastal retreat with exclusive golf packages that offer breathtaking oceanfront courses and top-notch amenities for an unforgettable golfing experience.",
    website: "https://www.hammockbeach.com/palm-coast-hotel-offers/golf-packages-1/",
    imageUrl: "https://www.hammockbeach.com/site/assets/files/3656/dji_0260.2048x1152-srcset.jpg",
    numberOfRounds: 3,
    numberOfNights: 2,
    perks: ["10% off accommodations"],
    courses: [
      { name: "The Ocean Course", par: 72, length: 7201, rating: 77.0, slope: 147, holes: 18 },
      { name: "The Conservatory Course", par: 72, length: 7776, rating: 78.2, slope: 150, holes: 18 }
    ],
    userRating: 0,
    reviews: []
  },
  {
    id: 29,
    name: "Hammock Beach Conservatory Course Package",
    location: "Florida",
    price: { min: 446, max: 546 },
    partySize: 4,
    description: "Indulge in a luxurious coastal retreat with exclusive golf packages that offer breathtaking oceanfront courses and top-notch amenities for an unforgettable golfing experience.",
    website: "https://www.hammockbeach.com/palm-coast-hotel-offers/golf-packages-1/",
    imageUrl: "https://www.hammockbeach.com/site/assets/files/3662/hab-con-9th_hole.2048x1361-srcset.jpg",
    numberOfRounds: 2,
    numberOfNights: 2,
    perks: ["$25 breakfast credit", "10% off accommodations"],
    courses: [
      { name: "The Conservatory Course", par: 72, length: 7776, rating: 78.2, slope: 150, holes: 18 }
    ],
    userRating: 0,
    reviews: []
  },
  {
    id: 30,
    name: "Hammock Beach Mid Week Package",
    location: "Florida",
    price: { min: 428, max: 528 },
    partySize: 4,
    description: "Indulge in a luxurious coastal retreat with exclusive golf packages that offer breathtaking oceanfront courses and top-notch amenities for an unforgettable golfing experience.",
    website: "https://www.hammockbeach.com/palm-coast-hotel-offers/golf-packages-1/",
    imageUrl: "https://www.hammockbeach.com/site/assets/files/3658/golf_midweek.webp",
    numberOfRounds: 2,
    numberOfNights: 2,
    perks: ["25% off accommodations"],
    courses: [
      { name: "The Conservatory Course", par: 72, length: 7776, rating: 78.2, slope: 150, holes: 18 }
    ],
    userRating: 0,
    reviews: []
  }
];