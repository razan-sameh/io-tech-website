// components/footer/SocialLinks.tsx
import { FaTwitter, FaFacebookF, FaGooglePlusG } from 'react-icons/fa';

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      <a href="#" className="hover:text-gray-300 transition-colors" aria-label="Twitter">
        <FaTwitter size={20} />
      </a>
      <a href="#" className="hover:text-gray-300 transition-colors" aria-label="Facebook">
        <FaFacebookF size={20} />
      </a>
      <a href="#" className="hover:text-gray-300 transition-colors" aria-label="Google Plus">
        <FaGooglePlusG size={20} />
      </a>
    </div>
  );
}
