import bg from "../assets/videos/flag.mp4";

const Background = ()=>
{
  return (
    <div className="fixed top-0 left-0 w-full h-full">
      <video
        autoPlay
        muted
        loop
        className="min-w-full min-h-full w-auto h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover z-0"
      >
        <source src={bg} type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.4)] z-10"></div>
    </div>
  );
};

export default Background;