import Home from '../assets/wired-gradient-63-home-hover-3d-roll 1.svg';
import Edit from '../assets/wired-gradient-245-edit-document.svg';
import Avatar from '../assets/wired-gradient-268-avatar-man (2).svg';
import Delivery from '../assets/wired-gradient-497-truck-delivery-hover-pinch 1.svg';
import Medicine from '../assets/image 174.svg';
import Whatsapp from '../assets/wired-gradient-2543-logo-whatsapp-hover-pinch (1) 1.svg';

export const Facilities = () => {

  const facilitiesOptions = [
    {
      imgUrl: Home,
      txt: 'Home Service Blood Test'
    },
    {
      imgUrl: Edit,
      txt: 'Personalized Plans'
    },
    {
      imgUrl: Avatar,
      txt: 'Obesity Specialized Expert'
    },
    {
      imgUrl: Delivery,
      txt: 'Free cooler delivery'
    },
    {
      imgUrl: Medicine,
      txt: 'Prescription Medicine & Delivery'
    },
    {
      imgUrl: Whatsapp,
      txt: '24/7 Available on WhatsApp'
    },
  ];

  return (
    <div className="facilities-container">
      {facilitiesOptions.map((item, index) => (
        <div
          key={index}
          className="facilities-content"
        >
          <img src={item.imgUrl} alt={item.txt}/>
          <p>{item.txt}</p>
        </div>
      ))}
    </div>
  );
}