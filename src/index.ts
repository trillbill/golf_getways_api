import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { golfCourses } from './golfCourses';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;
const frontendUrl = process.env.FRONTEND_URL || 'https://golf-getaways.vercel.app';

console.log(`Configuring CORS for frontend URL: ${frontendUrl}`);
app.use(cors({
  origin: frontendUrl,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  if (req.method === 'POST') {
    console.log('Request body:', req.body);
  }
  next();
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.post('/api/search', (req, res) => {
  try {
    console.log('Received search request:', req.body);
    const { maxPrice, partySize, location } = req.body;

    const filteredCourses = golfCourses.filter(course => {
      const priceMatch = course.price <= maxPrice;
      const partySizeMatch = partySize === 'any' || course.partySize === parseInt(partySize);
      const locationMatch = location === 'anywhere' || course.location.toLowerCase().includes(location.toLowerCase());

      return priceMatch && partySizeMatch && locationMatch;
    });

    console.log(`Found ${filteredCourses.length} matching courses`);
    res.json(filteredCourses);
  } catch (error) {
    console.error('Error processing search request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Catch-all route for undefined routes
app.use((req, res) => {
  console.log(`Received request for undefined route: ${req.method} ${req.path}`);
  res.status(404).send('Not Found');
});

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Frontend URL set to ${frontendUrl}`);
});

server.timeout = 120000; // 2 minutes
