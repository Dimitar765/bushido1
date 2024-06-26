import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';

import React from 'react';

interface FooterProps {
  name: string;
  email: string;
  phone: string;
  address: string;
}

const Footer: React.FC<FooterProps> = ({ name, email, phone, address }) => {
  return (
    // <footer style={{ backgroundColor: '#bg-slate-200', padding: '20px', textAlign: 'center' }}>
    <footer className='bg-slate-200 p-20 text-center text-xl'>
      <div>
        <strong>{name} Bushido SAN</strong>
      </div>
      <div>
        Email: <a href={`mailto:${email}`}>{email}bushido.san3@gmail.com</a>
      </div>
      <div>
        Phone: <a href={`tel:${phone}`}>{phone} +381 64 579812</a>
      </div>
      <div>
        Address: < a href={`add:${address}`}>{address}bulevar Arsenija Carnoevica 165, Beograd </a>
      </div>

      <div className="flex justify-center gap-4 py-4">
        <a href="https://www.facebook.com/bushido.san.nbg" target="_blank" rel="https://www.facebook.com/bushido.san.nbg">{<FaFacebookSquare />}</a>
        <a href="https://www.instagram.com/_bushido_san_/" target="_blank" rel="noopener noreferrer">{<FaInstagramSquare />}</a>
      </div>
      <div>
        &copy; {new Date().getFullYear()} Mite & Ace
      </div>
    </footer>
  );
};


export default Footer
