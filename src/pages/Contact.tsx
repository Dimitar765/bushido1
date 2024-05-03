
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Contact: React.FC = () => {
  const emailAddress = 'bushido.san3@gmail.com';
  return (
    <div>
      <div className="flex justify-around items-center text-center h-screen text-2xl bg-slate-200">
        <div className="w-1/2 border border-red-500 p-4">
          <h1>Bushido SAN</h1>
          <p>Address: bulevar Arsenija Carnoevica 165, Beograd</p>
          {/* <p>Maill: bushido.san3@gmail.com</p> */}
          <a href={`mailto:${emailAddress}`}>Send us an email: bushido.san3@gmail.com</a>
          <p>Phone: +381 64 579812</p>
          <div className="flex justify-center gap-4 py-4">
            <a href="https://www.facebook.com/bushido.san.nbg" target="_blank" rel="https://www.facebook.com/bushido.san.nbg">{<FaFacebookSquare />}</a>
            <a href="https://www.instagram.com/_bushido_san_/" target="_blank" rel="noopener noreferrer">{<FaInstagramSquare />}</a>
          </div>
        </div>
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.107596911876!2d20.398502087684463!3d44.81937259647881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a657f39740533%3A0x181daa1cd60e774c!2sBulevar%20Arsenija%20%C4%8Carnojevi%C4%87a%20165%2C%20Beograd%2011070%2C%20Serbia!5e0!3m2!1sen!2smk!4v1714646472126!5m2!1sen!2smk" width="600" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
      </div>
    </div >
  );
};

export default Contact
