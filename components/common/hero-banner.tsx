import Link from "next/link";
import { Home } from "lucide-react";

interface HeroBannerProps {
  title: string;
  breadcrumb: string;
  backgroundImage: string;
}

const HeroBanner = ({ title, breadcrumb, backgroundImage }: HeroBannerProps) => {
  return (
    <section
      className="hero-section min-h-[400px]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-overlay" />
      <h1 className="hero-title">{title}</h1>
      <div className="hero-breadcrumb">
        <Link href="/" className="flex items-center gap-1 hover:text-primary">
          <Home className="w-4 h-4" /> HOME
        </Link>
        <span>›</span>
        <span>{breadcrumb}</span>
      </div>
    </section>
  );
};

export default HeroBanner;
