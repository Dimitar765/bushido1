
// function Contact() {
//   return (
//     <div>Contact</div>
//   )
// }


// import React from 'react';

const Contact: React.FC = () => {
  const emailAddress = 'bushido.san3@gmail.com';
  return (
    <div className="w-full h-100 bg-red-400">
      <h1>Bushido SAN</h1>
      <p>Address: bulevar Arsenija Carnoevica 165, Beograd</p>
      {/* <p>Maill: bushido.san3@gmail.com</p> */}
      <a href={`mailto:${emailAddress}`}>Send us an email: bushido.san3@gmail.com</a>
      <p>Phone: +381 64 579812</p>
      <div style={{ display: 'flex', flexDirection: 'column', }}>
        <a href="https://www.facebook.com/bushido.san.nbg" target="_blank" rel="https://www.facebook.com/bushido.san.nbg">Facebook</a>
        <a href="https://www.instagram.com/_bushido_san_/" target="_blank" rel="noopener noreferrer">Instagram</a>
        {/* <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">TikTok</a> */}
      </div>
      {/* <img src="im.jpg" alt="Logo" /> */}
    </div>
  );
};

export default Contact