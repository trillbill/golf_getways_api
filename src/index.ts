import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Mock dataset (move this to a separate file later)
const golfCourses = [
  { id: 1, name: "Pebble Beach Golf Links", location: "California", price: 2000, maxPartySize: 4 },
  { id: 2, name: "Augusta National Golf Club", location: "Georgia", price: 3000, maxPartySize: 4 },
  { id: 3, name: "St Andrews Links", location: "Scotland", price: 1500, maxPartySize: 8 },
  { id: 4, name: "TPC Sawgrass", location: "Florida", price: 1000, maxPartySize: 6 },
  { id: 5, name: "Whistling Straits", location: "Wisconsin", price: 800, maxPartySize: 12 },
];

app.post('/api/search', (req, res) => {
  const { maxPrice, partySize, location } = req.body;

  const filteredCourses = golfCourses.filter(course => {
    const priceMatch = course.price <= maxPrice;
    const partySizeMatch = course.maxPartySize >= partySize;
    const locationMatch = location ? course.location.toLowerCase().includes(location.toLowerCase()) : true;

    return priceMatch && partySizeMatch && locationMatch;
  });

  res.json(filteredCourses);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
