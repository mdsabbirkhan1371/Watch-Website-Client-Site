import { useEffect, useState } from 'react';
import Watch from '../../Pages/Watch/Watch';

const Watches = () => {
  const [watches, setWatches] = useState([]);
  useEffect(() => {
    try {
      fetch('http://localhost:5000/watches')
        .then(res => res.json())
        .then(data => {
          setWatches(data);
        });
    } catch (err) {
      console.error(err);
    }
  }, []);
  return (
    <div>
      <h3 className="text-center">All Watches Data: {watches.length}</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {watches.map(watch => (
          <Watch watch={watch} key={watch._id}></Watch>
        ))}
      </div>
    </div>
  );
};

export default Watches;
