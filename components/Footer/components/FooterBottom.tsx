// components/footer/FooterBottom.tsx
import FooterNav from './FooterNav';

export default function FooterBottom() {
  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <FooterNav />
          <p className="text-center lg:text-right text-sm text-gray-300 whitespace-nowrap">
            © 2024 . All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
