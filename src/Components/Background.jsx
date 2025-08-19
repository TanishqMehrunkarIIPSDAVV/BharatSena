import flagImage from '../assets/images/flag.png';

const Background = ()=>
{
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-blend-multiply bg-no-repeat bg-center bg-cover bg-[rgba(0,0,0,0.3)]"
      style={{
        backgroundImage: `url(${flagImage})`,
      }}
    >
    </div>
  );
};

export default Background;