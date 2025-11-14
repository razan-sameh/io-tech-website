// components/Footer.tsx

import EmailSubscription from "./components/EmailSubscription";
import FooterBottom from "./components/FooterBottom";
import SocialLinks from "./components/SocialLinks";


export default function Footer() {
  return (
    <footer className="bg-primary mt-2 text-white">
      {/* Top section */}
      <div className="border-b border-white/20 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center md:justify-end items-center gap-4 md:gap-8">
            <EmailSubscription />
            <div className="flex items-center gap-4 md:gap-8">
              <p className="text-white transition-colors">Contacts</p>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <FooterBottom />
    </footer>
  );
}
