import Link from "next/link";
import { Rocket, Github, Twitter, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative z-10 mt-20 border-t border-slate-800 bg-black/40 backdrop-blur-sm">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Indian_Space_Research_Organisation_Logo.svg" alt="ISRO Logo" width={40} height={40} />
              <span className="text-xl font-bold">ISRO</span>
            </Link>
            <p className="max-w-xs text-sm text-slate-400">
              The Indian Space Research Organisation is the national space agency of India, headquartered in Bengaluru.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "About", "Missions", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
              Resources
            </h3>
            <ul className="space-y-2">
              {["Satellites", "Technology", "Research", "Publications", "Open Data"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/resources#${item.toLowerCase()}`}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 text-slate-400" />
                <span className="text-slate-400 text-sm">
                  info@isro.gov.in
                </span>
              </li>
              <li className="text-slate-400 text-sm">
                ISRO Headquarters,
                <br />
                Antariksh Bhavan,
                <br />
                New BEL Road, Bengaluru,
                <br />
                Karnataka 560094
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-slate-800 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-slate-400">
              &copy; {currentYear} Indian Space Research Organisation. All rights reserved.
            </p>
            <p className="flex items-center text-sm text-slate-400">
              Made by Archit Mishra
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}