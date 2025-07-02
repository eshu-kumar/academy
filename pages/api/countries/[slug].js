export default function handler(req, res) {
    const { slug } = req.query;
  
    const data = {
      france: [{ id: 1, name: 'Paris', population: 2_000_000 }],
      germany: [{ id: 2, name: 'Berlin', population: 3_600_000 }]
    };
  
    res.status(200).json(data[slug] || []);
  }
  