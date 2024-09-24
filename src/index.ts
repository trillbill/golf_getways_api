import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { golfCourses } from './golfCourses';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;
const frontendUrl = process.env.FRONTEND_URL || 'https://www.golfgetaways.io';

// Add this near the top of your file, after setting up your app
app.get('/', (req, res) => {
  res.status(200).send('Golf Getaways API is running');
});

// CORS configuration
app.use(cors({
  origin: frontendUrl,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.post('/api/search', (req, res) => {
  try {
    const { maxPrice, location, partySize } = req.body;

    const filteredCourses = golfCourses.filter(course => {
      const matchesLocation = !location || course.location === location;
      const matchesMaxPrice = !maxPrice || course.price.min <= maxPrice; // Check if min price is less than or equal to maxPrice
      const matchesPartySize = partySize === 'any' || course.partySize === parseInt(partySize);

      return matchesLocation && matchesMaxPrice && matchesPartySize;
    });

    console.log(`Found ${filteredCourses.length} matching courses`);
    res.json(filteredCourses);
  } catch (error) {
    console.error('Error processing search request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Frontend URL set to ${frontendUrl}`);
});
