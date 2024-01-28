import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Profile from "@/images/profile.jpg";
const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    designation: "Founder",
    quote:
    "As the founder, my journey began with a simple yet profound belief: that travel has the power to transform lives. Guided by this vision, we embarked on a mission to curate extraordinary experiences, inspire wanderlust, and create memories that last a lifetime. Our passion fuels our innovation, our commitment, and our dedication to excellence.",
    image: Profile,
    socialMedia: [
      { icon: <FaFacebook />, link: "https://www.facebook.com/johndoe" },
      { icon: <FaTwitter />, link: "https://www.twitter.com/johndoe" },
      { icon: <FaInstagram />, link: "https://www.instagram.com/johndoe" },
      { icon: <FaLinkedin />, link: "https://www.linkedin.com/johndoe" },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "C.E.O",
    quote:
    "As CEO, I envision our travel company as more than just a service provider; it's a conduit for exploration, connection, and enrichment. By fostering innovation, fostering a culture of excellence, and prioritizing customer satisfaction, we're not just shaping the travel industry; we're redefining the way people experience the world.",
    image: Profile,
    socialMedia: [
        { icon: <FaFacebook />, link: "https://www.facebook.com/johndoe" },
        { icon: <FaTwitter />, link: "https://www.twitter.com/johndoe" },
        { icon: <FaInstagram />, link: "https://www.instagram.com/johndoe" },
        { icon: <FaLinkedin />, link: "https://www.linkedin.com/johndoe" },
      ],
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Manager",
    quote:
      "As your dedicated travel manager, my mission is to curate seamless and unforgettable experiences tailored to your desires. With meticulous planning and a passion for excellence, I ensure every journey is executed flawlessly, leaving you with cherished memories and a longing for the next adventure.",
    image: Profile,
    socialMedia: [
        { icon: <FaFacebook />, link: "https://www.facebook.com/johndoe" },
        { icon: <FaTwitter />, link: "https://www.twitter.com/johndoe" },
        { icon: <FaInstagram />, link: "https://www.instagram.com/johndoe" },
        { icon: <FaLinkedin />, link: "https://www.linkedin.com/johndoe" },
      ],
  },
//   {
//     id: 4,
//     name: "Jane Smith",
//     designation: "Web Developer",
//     quote:
//       "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
//     image: Profile,
//     socialMedia: [
//         { icon: <FaFacebook />, link: "https://www.facebook.com/johndoe" },
//         { icon: <FaTwitter />, link: "https://www.twitter.com/johndoe" },
//         { icon: <FaInstagram />, link: "https://www.instagram.com/johndoe" },
//         { icon: <FaLinkedin />, link: "https://www.linkedin.com/johndoe" },
//       ],
//   },
];

const OurTeam = () => {
  return (
    <div className="bg-white w-full flex justify-center py-12">
      <div className="w-10/12">
        <div className="text-center mb-8">
        <p className="text-lg text-[#222222] font-semibold py-1">
            <span className="pl-12 pr-2 bg-[#FF9933]">Meet</span>Our Team
          </p>
        <p className="palanquin-dark-medium text-[#222222] text-2xl lg:text-4xl font-bold py-1">
            "The Dream Makers<br /> Behind the Journey"
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-[#F1F1F1] p-5 w-full rounded-lg overflow-hidden"
            >
              <div className="w-full flex justify-center h- object-cover ">
                <img
                  src={member.image.src}
                  alt={member.name}
                  className="rounded-full h-40"
                />
              </div>
              <div className="px-2 text-center">
                <h2 className="text-2xl font-bold mb-2">{member.name}</h2>
                <h2 className="text-sm font-bold mb-2 text-[#3C56F8]">{member.designation}</h2>
                <p className="h-80 lg:h-56 font text-gray-600 cedarville-cursive-regular mb-4">"{member.quote}"</p>
                <div className="py-4 flex justify-center">
                  {member.socialMedia.map((social, index) => (
                <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className="mr-4 text-[#3C56F8] hover:text-gray-800 transition duration-300">
                  {social.icon}
                </a>
              ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default OurTeam;
