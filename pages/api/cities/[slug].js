export default function handler(req, res) {
    const { slug } = req.query;
  
    const data = {
      paris: [{ id: 10, name: 'Eiffel Tower', population: 1_200_000 }],
      berlin: [{ id: 11, name: 'Brandenburg Gate', population: 900_000 }]
    };
  
    res.status(200).json(data[slug] || []);
  }
  