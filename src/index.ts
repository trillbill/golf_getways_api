import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;
const frontendUrl = process.env.FRONTEND_URL || 'https://golf-getaways.vercel.app';

app.use(cors(
  {
    origin: frontendUrl,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }
));
app.use(express.json());

// Mock dataset (move this to a separate file later)
const golfCourses = [
  { 
    id: 1, 
    name: "Talamore Golf Resort - Royal Golf Package", 
    location: "North Carolina", 
    price: 352,
    partySize: 4,
    description: "2 nights in a spacious 2-bedroom / 2-bath Talamore Villa",  
    website: "https://www.talamoregolfresort.com/packages/royal-golf-package/",
    imageUrl: "https://www.talamoregolfresort.com/wp-content/uploads/2016/09/Hole-9-site-666x499.jpg"
  },
  {
    id: 2,
    name: "Talamore Golf Resort - St. Andrews Package",
    location: "North Carolina",
    price: 297,
    partySize: 4,
    description: "2 nights in a spacious 2-bedroom / 2-bath Talamore Villa",
    website: "https://www.talamoregolfresort.com/packages/st-andrews-golf-package/",
    imageUrl: "https://www.talamoregolfresort.com/wp-content/uploads/2021/10/mid_south_slider2-661x496.jpg"
  },
  {
    id: 3,
    name: "Talamore Golf Resort - Midland Road Masters Package",
    location: "North Carolina",
    price: 549,
    partySize: 4,
    description: "3 nights in a luxurious 2-bedroom / 2-bath Mid South Lodge",
    website: "https://www.talamoregolfresort.com/packages/midland-road-masters-package/",
    imageUrl: "https://www.talamoregolfresort.com/wp-content/uploads/2019/10/Mid-South9b-800x510-1-680x510.jpg"
  },
  {
    id: 4,
    name: "Talamore Golf Resort - Midland Road Cottage Package",
    location: "North Carolina",
    price: 533,
    partySize: 8,
    description: "2 nights in a spacious 2-bedroom / 2-bath Talamore Villa",
    website: "https://www.talamoregolfresort.com/packages/midland-road-masters-at-our-golf-cottage/",
    imageUrl: "https://www.talamoregolfresort.com/wp-content/uploads/2021/10/Mid-South-Club-Hole-17-674x506.png"
  },
  {
    id: 5,
    name: "Talamore Golf Resort - Signature Package at Our Golf Cottage",
    location: "North Carolina",
    price: 340,
    partySize: 8,
    description: "3 nights in a luxurious 2-bedroom / 2-bath Mid South Lodge",
    website: "https://www.talamoregolfresort.com/packages/signature-package-at-our-golf-cottage/",
    imageUrl: "https://www.talamoregolfresort.com/wp-content/uploads/2019/10/IMG_0123pe-825x510-1-680x510.jpg"
  },
  {
    id: 6,
    name: "Talamore Golf Resort - Signature Package",
    location: "North Carolina",
    price: 311,
    partySize: 4,
    description: "3 nights in a luxurious 2-bedroom / 2-bath Mid South Lodge",
    website: "https://www.talamoregolfresort.com/packages/signature-golf-package/",
    imageUrl: "https://www.talamoregolfresort.com/wp-content/uploads/2019/10/MidSouth2b-800x510-1-680x510.jpg"
  },
  {
    id: 7,
    name: "Talamore Golf Resort - Legends Package",
    location: "North Carolina",
    price: 301,
    partySize: 4,
    description: "3 nights in a luxurious 2-bedroom / 2-bath Mid South Lodge",
    website: "https://www.talamoregolfresort.com/packages/legends-golf-package/",
    imageUrl: "https://www.talamoregolfresort.com/wp-content/uploads/2022/05/EcoBunkers-Sod-Wall-1236x927.jpg"
  }
];

app.post('/api/search', (req, res) => {
  const { maxPrice, partySize, location } = req.body;

  const filteredCourses = golfCourses.filter(course => {
    const priceMatch = course.price <= maxPrice;
    const partySizeMatch = partySize === 'any' || course.partySize === partySize;
    const locationMatch = location === 'anywhere' || course.location.toLowerCase().includes(location.toLowerCase());

    return priceMatch && partySizeMatch && locationMatch;
  });

  res.json(filteredCourses);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
