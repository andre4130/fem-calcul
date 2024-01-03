import { Linkedin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className=" h-[100px] bg-primary-dark text-white p-5">
      <div className="flex flex-row w-full h-full justify-between">
        <div className="flex flex-col justify-between">
          <a target="_blank" href="https://www.linkedin.com/in/denise-ferreira-fem/" rel="noopener noreferrer">
            <Linkedin />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/denise-ferreira-fem/" rel="noopener noreferrer">
            <Linkedin />
          </a>
        </div>
        <div className="h-full flex items-center justify-center">
          FEM Calcul - Structural Analysis Consulting © {currentYear}
        </div>
        <div className="h-full justify-center">
          <div className="flex flex-row">
            <Phone /> <p className="pl-3">+34 611 65 00 38</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
