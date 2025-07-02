import Link from "next/link";
import VerzologosmallWhite from "../components/verzoWhiteLogo";
import XLogo from "../components/XLogo";
import LinkedInLogo from "../components/LinkedInLogo";
import InstagramLogo from "../components/InstagramLogo";

export default function Footer() {
  return (
    <footer className="bg-primary-brandBlue text-white py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-12 mb-8 md:mb-12">
          {/* Logo and Social Links - Top on mobile, Left on desktop */}
          <div className="flex flex-col items-center lg:items-start space-y-4 lg:space-y-6">
            <Link href="/" className="text-2xl font-bold">
              <VerzologosmallWhite />
            </Link>

            {/* Social Links */}
            <div className="flex gap-4">
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <XLogo />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <LinkedInLogo />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <InstagramLogo />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex-1 lg:max-w-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Product Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Product</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="#"
                      className="hover:opacity-80 transition-opacity text-sm md:text-base"
                    >
                      Invoice
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:opacity-80 transition-opacity text-sm md:text-base"
                    >
                      Purchase
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:opacity-80 transition-opacity text-sm md:text-base"
                    >
                      Expense
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:opacity-80 transition-opacity text-sm md:text-base"
                    >
                      Virtual card
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="#"
                      className="hover:opacity-80 transition-opacity text-sm md:text-base"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:opacity-80 transition-opacity text-sm md:text-base"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:opacity-80 transition-opacity text-sm md:text-base"
                    >
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Resources Links */}
              <div className="sm:col-span-2 lg:col-span-1">
                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="#"
                      className="hover:opacity-80 transition-opacity text-sm md:text-base"
                    >
                      Use cases
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:opacity-80 transition-opacity text-sm md:text-base"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:opacity-80 transition-opacity text-sm md:text-base"
                    >
                      Knowledgebase
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:opacity-80 transition-opacity text-sm md:text-base"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:opacity-80 transition-opacity text-sm md:text-base"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:opacity-80 transition-opacity text-sm md:text-base"
                    >
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright - Bottom */}
        <div className="pt-6 md:pt-8 border-t border-white/20">
          <p className="text-xs md:text-sm text-center opacity-80">
            © 2023 Verzo Inc. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
