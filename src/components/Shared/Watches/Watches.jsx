import { useEffect, useState } from 'react';
import Watch from '../../Pages/Watch/Watch';

const Watches = () => {
  const [watches, setWatches] = useState([]);
  useEffect(() => {
    try {
      fetch(
        'https://watch-websites-server-site-4fm7hh36b-md-sabbir-khans-projects.vercel.app/watches'
      )
        .then(res => res.json())
        .then(data => {
          setWatches(data);
        });
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div className="my-12">
      <h3 className="text-center">All Watches : {watches.length}</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {watches.map(watch => (
          <Watch watch={watch} key={watch._id}></Watch>
        ))}
      </div>
    </div>
  );
};

export default Watches;
