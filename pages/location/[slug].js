import LocationTable from '../../components/LocationTable';

export default function LocationPage({ data, type }) {
  return (
    <div>
      <LocationTable data={data} type={type} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.params;

  const isCounty = slug.endsWith('-county');
  const baseSlug = slug.replace('-county', '');
  const type = isCounty ? 'county' : 'city';

  const apiUrl = isCounty
    ? `http://localhost:3000/api/countries/${baseSlug}`
    : `http://localhost:3000/api/cities/${baseSlug}`;

  const res = await fetch(apiUrl);
  const data = await res.json();
  const formattedData = data.map((row) => ({
    ...row,
    populationFormatted: row.population.toLocaleString('en-IN'), // or 'en-US'
  }));
  

  return {
    props: {
      data:formattedData ,
      type,
    },
  };
}
