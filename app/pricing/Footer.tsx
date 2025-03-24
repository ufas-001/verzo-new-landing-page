import Link from "next/link";
import VerzologosmallWhite from "../components/verzoWhiteLogo";
import XLogo from "../components/XLogo";
import LinkedInLogo from "../components/LinkedInLogo";
import InstagramLogo from "../components/InstagramLogo";

export default function Footer() {
  return (
    <footer className="bg-primary-brandBlue text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Logo and Social Links - Left Side */}
          <div className="md:col-span-3 space-y-6">
            <Link href="/" className="text-2xl font-bold block mb-4">
              <VerzologosmallWhite />
            </Link>

            {/* Social Links moved under logo */}
            <div className="flex gap-4">
              <Link href="#" className="hover:opacity-80">
                <XLogo />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:opacity-80">
                <LinkedInLogo />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="hover:opacity-80">
                <InstagramLogo />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Empty space for alignment */}
          <div className="hidden md:block md:col-span-3"></div>

          {/* Links - Right Side */}
          <div className="md:col-span-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Product Links */}
              <div>
                <h3 className="text-lg mb-4">Product</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="#" className="hover:opacity-80">
                      Invoice
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:opacity-80">
                      Purchase
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:opacity-80">
                      Expense
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:opacity-80">
                      Virtual card
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company Links */}
              <div>
                <h3 className="text-lg mb-4">Company</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="#" className="hover:opacity-80">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:opacity-80">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:opacity-80">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Resources Links */}
              <div>
                <h3 className="text-lg mb-4">Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="#" className="hover:opacity-80">
                      Use cases
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:opacity-80">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:opacity-80">
                      Knowledgebase
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:opacity-80">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:opacity-80">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:opacity-80">
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright - Centered at Bottom */}
        <div className="">
          <p className="text-sm text-center">
            © 2023 Verzo Inc. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
