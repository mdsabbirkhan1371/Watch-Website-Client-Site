import video from '../../../assets/Video/video1.mp4';
import warranty from '../../../assets/Warranty/warranty.avif';
const Video = () => {
  return (
    <div>
      <div className="md:flex justify-around p-5 items-center my-12">
        <div className="space-y-2">
          <h3 className="text-3xl">True Square X Kunihiko Morinaga </h3>
          <h3 className="text-3xl">Special Edition</h3>
          <p>MAKING THE INVISIBLE VISIBLE</p>
          <button className="btn btn-primary">Discover More</button>
        </div>
        <div>
          <video width="600" controls autoPlay muted>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-5 p-5">
        <div>
          <img className="w-full h-96" src={warranty} alt="image" />
        </div>
        <div className="space-y-2 md:mt-16 ms-12">
          <h3 className="text-2xl">5-year International Warranty </h3>
          <p className=" font-bold">
            As of 1st November 2023, all new Rado watches benefit from a 5-year
            International Warranty.
          </p>
          <p>
            At Rado we have always made watches that are built to last – not
            just for a few years, but for a lifetime. We take care to use
            materials that are proven to resist wear and tear. High-tech ceramic
            cases and bracelets, Ceramos™, sapphire crystal, stainless steel and
            titanium all serve to enclose and protect the sophisticated Swiss
            movements that power our watches. We take great pride in the high
            quality, reliability and performance of our products, and are
            pleased to offer our customers additional support in the care and
            handling of their watches.
          </p>

          <button className="btn btn-primary">Discover More</button>
        </div>
      </div>

      {/* warranty section  */}
    </div>
  );
};

export default Video;
