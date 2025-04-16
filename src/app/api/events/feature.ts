// pages/api/events/featured.ts

import { NextApiRequest, NextApiResponse } from 'next';

// Example response
const featuredEvents = [
  {
    id: 1,
    title: 'Hackathon 2025',
    eventType: 'Hackathon',
    startDate: '2025-05-01',
    endDate: '2025-05-02',
    location: 'New York, NY',
    description: 'Join us for an exciting hackathon.',
    organizerId: 1,
    participantLimit: 100,
    prizePool: '$10,000',
    image: 'https://example.com/event-image.jpg',
  },
  // Add more events here
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.status(200).json(featuredEvents);
  }
  
  res.status(405).json({ message: 'Method Not Allowed' });
}
