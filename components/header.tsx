"use client";
import Verzologosmall from "@/app/components/verzoLogoSmall";
import { HoverCard } from "@radix-ui/react-hover-card";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import {
  ArrowUpDown,
  ChevronDown,
  ChevronUp,
  Mail,
  Menu,
  Phone,
  PlusCircle,
  Scroll,
} from "lucide-react";
import { Button } from "./ui/button";
import React from "react";
import Mobilemenu from "./MobileMenu";
import { usePathname, useRouter } from "next/navigation";
import { useNotification } from "./notification-context";

const features = [
  {
    name: "Features",
    byProduct: [
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18.2402 3H5.7602C4.89863 3 4.2002 3.80589 4.2002 4.8V21L6.8002 19.2L9.4002 21L12.0002 19.2L14.6002 21L17.2002 19.2L19.8002 21V4.8C19.8002 3.80589 19.1018 3 18.2402 3Z"
              stroke="url(#paint0_linear_6560_7021)"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_6560_7021"
                x1="4.2002"
                y1="3.30435"
                x2="23.1773"
                y2="8.57133"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.307292" stopColor="#027DFF" stopOpacity="0.9" />
                <stop offset="0.494792" stopColor="#027DFF" stopOpacity="0.9" />
                <stop offset="0.958333" stopColor="#027DFF" />
              </linearGradient>
            </defs>
          </svg>
        ),
        header: "Create - Send Invoices",
        description: "Create invoices to send them to your customer",
        link: "/invoicing",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M7.44705 20.19C6.92311 20.3646 6.63995 20.9309 6.8146 21.4549C6.98925 21.9788 7.55557 22.262 8.07951 22.0873L7.44705 20.19ZM13.9941 21.554L13.9033 20.5582L13.9941 21.554ZM17.7325 20.7233L18.1711 21.622L17.7325 20.7233ZM21.3047 17.4737L20.5276 16.8443L20.5276 16.8443L21.3047 17.4737ZM18.8615 15.4404L19.5686 16.1475L18.8615 15.4404ZM17.2163 17.0856L17.9234 17.7927L17.2163 17.0856ZM12.7479 16.8156C12.1956 16.8156 11.7479 17.2633 11.7479 17.8156C11.7479 18.3679 12.1956 18.8156 12.7479 18.8156V16.8156ZM20.9248 15.2361L20.3701 16.0682L20.9248 15.2361ZM9.0277 14.6911L9.47491 15.5855L9.47491 15.5855L9.0277 14.6911ZM13.4992 14.282L13.7624 13.3173L13.4992 14.282ZM15.2454 14.7583L14.9823 15.723L15.2454 14.7583ZM15.7987 16.8417L15.0916 16.1346L15.7987 16.8417ZM14.1177 17.1085C13.7272 17.499 13.7272 18.1322 14.1177 18.5227C14.5082 18.9132 15.1414 18.9132 15.5319 18.5227L14.1177 17.1085ZM8.07951 22.0873C8.19626 22.0484 8.44761 22.0202 8.89936 22.0524C9.33067 22.0832 9.83463 22.1587 10.412 22.2494C11.5078 22.4215 12.8949 22.6583 14.0848 22.5499L13.9033 20.5582C13.0163 20.639 11.911 20.4604 10.7223 20.2736C10.1573 20.1849 9.57089 20.0952 9.04163 20.0575C8.5328 20.0212 7.95337 20.0212 7.44705 20.19L8.07951 22.0873ZM14.0848 22.5499C14.8487 22.4803 15.5009 22.4472 16.1017 22.3385C16.753 22.2206 17.3637 22.016 18.1711 21.622L17.2939 19.8246C16.6146 20.1561 16.1798 20.2918 15.7455 20.3704C15.2605 20.4582 14.7869 20.4777 13.9033 20.5582L14.0848 22.5499ZM18.1711 21.622C18.9545 21.2396 19.7101 20.6232 20.3592 19.9995C21.018 19.3666 21.6161 18.6781 22.0818 18.1031L20.5276 16.8443C20.0931 17.3807 19.5523 18.0013 18.9735 18.5573C18.3851 19.1227 17.8047 19.5753 17.2939 19.8246L18.1711 21.622ZM18.1544 14.7333L16.5092 16.3785L17.9234 17.7927L19.5686 16.1475L18.1544 14.7333ZM15.454 16.8156H12.7479V18.8156H15.454V16.8156ZM16.5092 16.3785C16.2294 16.6584 15.8498 16.8156 15.454 16.8156V18.8156C16.3802 18.8156 17.2685 18.4476 17.9234 17.7927L16.5092 16.3785ZM21.4795 14.4041C20.4344 13.7073 19.0426 13.8451 18.1544 14.7333L19.5686 16.1475C19.7827 15.9334 20.1182 15.9002 20.3701 16.0682L21.4795 14.4041ZM22.0818 18.1031C23.0545 16.902 22.6882 15.2098 21.4795 14.4041L20.3701 16.0682C20.677 16.2727 20.7012 16.6299 20.5276 16.8443L22.0818 18.1031ZM3.19405 14.6617H6.51713V12.6617H3.19405V14.6617ZM6.3479 14.4925V21.9694H8.3479V14.4925H6.3479ZM6.51713 21.8002H3.19405V23.8002H6.51713V21.8002ZM3.36328 21.9694V14.4925H1.36328V21.9694H3.36328ZM3.19405 21.8002C3.28751 21.8002 3.36328 21.876 3.36328 21.9694H1.36328C1.36328 22.9805 2.18295 23.8002 3.19405 23.8002V21.8002ZM6.3479 21.9694C6.3479 21.876 6.42367 21.8002 6.51713 21.8002V23.8002C7.52823 23.8002 8.3479 22.9805 8.3479 21.9694H6.3479ZM6.51713 14.6617C6.42366 14.6617 6.3479 14.586 6.3479 14.4925H8.3479C8.3479 13.4814 7.52823 12.6617 6.51713 12.6617V14.6617ZM3.19405 12.6617C2.18294 12.6617 1.36328 13.4814 1.36328 14.4925H3.36328C3.36328 14.586 3.28751 14.6617 3.19405 14.6617V12.6617ZM8.21049 16.2177L9.47491 15.5855L8.58048 13.7966L7.31607 14.4288L8.21049 16.2177ZM11.6284 15.0771H11.9691V13.0771H11.6284V15.0771ZM13.2361 15.2468L14.9823 15.723L15.5086 13.7935L13.7624 13.3173L13.2361 15.2468ZM15.0916 16.1346L14.1177 17.1085L15.5319 18.5227L16.5058 17.5488L15.0916 16.1346ZM14.9823 15.723C15.1647 15.7728 15.2253 16.0009 15.0916 16.1346L16.5058 17.5488C17.7253 16.3293 17.1724 14.2473 15.5086 13.7935L14.9823 15.723ZM11.9691 15.0771C12.3971 15.0771 12.8232 15.1342 13.2361 15.2468L13.7624 13.3173C13.1779 13.1579 12.5749 13.0771 11.9691 13.0771V15.0771ZM9.47491 15.5855C10.1436 15.2512 10.8809 15.0771 11.6284 15.0771V13.0771C10.5704 13.0771 9.52684 13.3235 8.58048 13.7966L9.47491 15.5855ZM17.1479 7.84635C17.1479 9.12935 16.1078 10.1694 14.8248 10.1694V12.1694C17.2124 12.1694 19.1479 10.2339 19.1479 7.84635H17.1479ZM14.8248 10.1694C13.5418 10.1694 12.5017 9.12935 12.5017 7.84635H10.5017C10.5017 10.2339 12.4373 12.1694 14.8248 12.1694V10.1694ZM12.5017 7.84635C12.5017 6.56335 13.5418 5.52327 14.8248 5.52327V3.52327C12.4373 3.52327 10.5017 5.45878 10.5017 7.84635H12.5017ZM14.8248 5.52327C16.1078 5.52327 17.1479 6.56335 17.1479 7.84635H19.1479C19.1479 5.45878 17.2124 3.52327 14.8248 3.52327V5.52327ZM11.5017 6.84635C10.2187 6.84635 9.17867 5.80627 9.17867 4.52327H7.17867C7.17867 6.91084 9.11417 8.84635 11.5017 8.84635V6.84635ZM9.17867 4.52327C9.17867 3.24027 10.2187 2.2002 11.5017 2.2002V0.200195C9.11417 0.200195 7.17867 2.1357 7.17867 4.52327H9.17867ZM11.5017 2.2002C12.7847 2.2002 13.8248 3.24027 13.8248 4.52327H15.8248C15.8248 2.1357 13.8893 0.200195 11.5017 0.200195V2.2002Z"
              fill="url(#paint0_linear_6560_7043)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_6560_7043"
                x1="2.36328"
                y1="1.56541"
                x2="25.7091"
                y2="8.23652"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.307292" stopColor="#027DFF" stopOpacity="0.9" />
                <stop offset="0.494792" stopColor="#027DFF" stopOpacity="0.9" />
                <stop offset="0.958333" stopColor="#027DFF" />
              </linearGradient>
            </defs>
          </svg>
        ),
        header: "Manage your payroll",
        description: "Pay your team without stress",
        link: "/payroll",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9.55742 21.5574H4.75741C3.43193 21.5574 2.35741 20.4828 2.35742 19.1574L2.35751 4.75741C2.35752 3.43193 3.43204 2.35742 4.75751 2.35742H15.5578C16.8833 2.35742 17.9578 3.43194 17.9578 4.75742V9.55742M6.5578 7.15742H13.7578M6.5578 10.7574H13.7578M6.5578 14.3574H10.1578M13.1576 18.2484L18.2488 13.1573L21.6429 16.5514L16.5517 21.6426H13.1576V18.2484Z"
              stroke="url(#paint0_linear_6560_7046)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_6560_7046"
                x1="2.35742"
                y1="2.6835"
                x2="25.2746"
                y2="10.0227"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.307292" stopColor="#027DFF" stopOpacity="0.9" />
                <stop offset="0.494792" stopColor="#027DFF" stopOpacity="0.9" />
                <stop offset="0.958333" stopColor="#027DFF" />
              </linearGradient>
            </defs>
          </svg>
        ),
        header: "Manage your expenses",
        description: "Track Your Business Expenses Without Lifting a Finger",
        link: "/expense",
      },
      {
        icon: (
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.95012 9.30141H21.9501M7.55012 13.5014H10.5501M5.75059 5.10156H20.1502C21.4757 5.10156 22.5502 6.17524 22.5502 7.50069L22.5505 16.5026C22.5505 17.8281 21.476 18.9016 20.1505 18.9015L5.75082 18.9014C4.42537 18.9014 3.35088 17.8269 3.35084 16.5015L3.35059 7.50163C3.35055 6.17612 4.42508 5.10156 5.75059 5.10156Z"
              stroke="url(#paint0_linear_14727_10747)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_14727_10747"
                x1="3.35059"
                y1="5.3349"
                x2="24.3394"
                y2="14.6865"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.307292" stopColor="#027DFF" stopOpacity="0.9" />
                <stop offset="0.494792" stopColor="#027DFF" stopOpacity="0.9" />
                <stop offset="0.958333" stopColor="#027DFF" />
              </linearGradient>
            </defs>
          </svg>
        ),
        header: "Virtual Cards For Your Business Spending",
        description:
          "Create virtual cards for secure, trackable payments anytime.",
        link: "/card",
      },
    ],
    byUseCase: [
      {
        header: "Freelancers",
        description:
          "Tired of chasing payments, tracking expenses and spending hours on records? Our all-in-one tool lets you send invoices, manage spending, and stay in control of your finances effortlessly, right within your daily workflow. Read more…",
        link: "/use-case/freelancers",
      },
      {
        header: "Solopreneurs",
        description:
          "When you’re the one handling sales, spend, and salaries, it’s easy for things to fall through the cracks. Verzo helps you keep everything organized in one place so you stay focused on running your business, not running after details. Read more…",

        link: "/use-case/solopreneurs",
      },
      {
        header: "Small businesses",
        description:
          "The more your business grows, the harder it is to track who’s paying, what’s being bought, and where money’s going. Verzo brings clarity to your cashflow and keeps your team moving with tools built for small business demands. Read more…",

        link: "/use-case/small-businesses",
      },
    ],
  },
];

const resources = [
  {
    name: "Resources",
    byProduct: [
      {
        header: "Blog",
        description: "Get insights to the latest Verzo features and trends",
        link: "https://blog.verzo.app/",
      },
      {
        header: "Knowledge base",
        description: "Search anything you need to know about Verzo",
        link: "/knowledgebase",
      },
    ],
    byUseCase: [
      {
        header: "Careers",
        description: "Discover open roles and apply join our team",
        link: "#",
      },
    ],
  },
];

export function FixedHeader() {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [clickedMenu, setClickedMenu] = useState<string | null>(null);
  // Track how each menu was opened: 'hover' | 'click'
  const [, setMenuOpenMethod] = useState<Record<string, "hover" | "click">>({});
  const emailAddress = "technology@verzo.app";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { notificationVisible } = useNotification();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleCloseMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const router = useRouter();
  const pathname = usePathname();

  const handleNavClick = (link: string) => {
    setHoveredMenu(null);
    setClickedMenu(null);
    setMenuOpenMethod({});
    // Force navigation even if on same page
    if (pathname === link) {
      router.push(link);
      router.refresh(); // Force a refresh if on same page
    }
  };

  const handleMenuClick = (menuName: string) => {
    const isCurrentlyOpen =
      clickedMenu === menuName || hoveredMenu === menuName;

    if (isCurrentlyOpen) {
      // Close menu regardless of how it was opened
      setClickedMenu(null);
      setHoveredMenu(null);
      setMenuOpenMethod((prev) => {
        const updated = { ...prev };
        delete updated[menuName];
        return updated;
      });
    } else {
      // Open menu by click
      setClickedMenu(menuName);
      setHoveredMenu(null); // Clear hover state when clicking
      setMenuOpenMethod((prev) => ({ ...prev, [menuName]: "click" }));
    }
  };

  const handleMouseEnter = (menuName: string) => {
    // Clear any pending timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }

    // Open menu by hover (or keep it open if already open)
    setHoveredMenu((prevHovered) => {
      // If menu wasn't already open, mark it as hover-opened
      // If it was click-opened, we'll keep it open but don't change the method
      if (!clickedMenu && prevHovered !== menuName) {
        setMenuOpenMethod((prev) => ({ ...prev, [menuName]: "hover" }));
      }
      return menuName;
    });
  };

  const handleMouseLeave = () => {
    // Add a small delay before closing to allow movement to dropdown content
    hoverTimeoutRef.current = setTimeout(() => {
      // Close all open menus on hover away (flexible: works for both hover-opened and click-opened)
      setHoveredMenu((currentHovered) => {
        if (currentHovered) {
          setMenuOpenMethod((prev) => {
            const updated = { ...prev };
            delete updated[currentHovered];
            return updated;
          });
          return null;
        }
        return currentHovered;
      });

      setClickedMenu((currentClicked) => {
        if (currentClicked) {
          setMenuOpenMethod((prev) => {
            const updated = { ...prev };
            delete updated[currentClicked];
            return updated;
          });
          return null;
        }
        return currentClicked;
      });

      hoverTimeoutRef.current = null;
    }, 150); // 150ms delay to allow mouse movement to dropdown
  };

  const isMenuOpen = (menuName: string) => {
    return clickedMenu === menuName || hoveredMenu === menuName;
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        // Close all menus regardless of how they were opened
        setClickedMenu(null);
        setHoveredMenu(null);
        setMenuOpenMethod({});
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <header
        className="border-b fixed left-0 right-0 w-full bg-white transition-all duration-300 z-50"
        style={{ top: notificationVisible ? "2.5rem" : 0 }}
      >
        <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between h-[80px]">
          <Link href="/">
            <Verzologosmall />
          </Link>
          <div className="hidden md:flex items-center gap-14" ref={dropdownRef}>
            <Link
              href="/about"
              className="text-black text-lg hover:text-gray-900"
            >
              About us
            </Link>
            {features.map((item) => (
              <HoverCard
                key={item.name}
                open={isMenuOpen("feature")}
                onOpenChange={() => {}} // Disable default behavior
              >
                <HoverCardTrigger
                  className="text-gray-600 flex flex-row items-center gap-x-[6px] text-primary-greytext hover:text-primary-brandBlue cursor-pointer transition-colors"
                  onClick={() => handleMenuClick("feature")}
                  onMouseEnter={() => handleMouseEnter("feature")}
                  onMouseLeave={handleMouseLeave}
                >
                  <span className="text-black text-lg">Features</span>
                  <div className="relative w-4 h-4">
                    <ChevronDown
                      className={`w-4 h-4 absolute transition-all duration-300 ${
                        isMenuOpen("feature")
                          ? "opacity-0 transform rotate-180"
                          : "opacity-100"
                      }`}
                    />
                    <ChevronUp
                      className={`w-4 h-4 absolute transition-all duration-300 ${
                        isMenuOpen("feature")
                          ? "opacity-100 transform rotate-0"
                          : "opacity-0 transform -rotate-180"
                      }`}
                    />
                  </div>
                </HoverCardTrigger>

                <HoverCardContent
                  className="w-screen mr-[3px] bg-white flex flex-col gap-y-[31px] shadow-md mt-[16px] rounded-b-[30px] h-[650px]"
                  onMouseEnter={() => handleMouseEnter("feature")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="w-[85%] mx-auto flex flex-row gap-x-[56px] justify-between pt-[20px] pb-[72px] h-full">
                    <div className="gap-y-[16px] flex flex-col w-1/3 h-full">
                      <p className="text-[16px] text-primary-greytext pl-[16px]">
                        By Product
                      </p>
                      {item.byProduct.map((product, productIndex) => (
                        <Link
                          href={product.link}
                          key={productIndex}
                          onClick={() => handleNavClick(product.link)}
                        >
                          <button className="flex flex-col gap-y-2 p-4 hover:bg-gray-50 hover:text-gray-700 text-gray-400 duration-100 transition-all ease-in-out cursor-pointer rounded-[14px]">
                            <div className="flex items-center">
                              {product.icon && (
                                <div className="mr-2 h-4 mt-[-2px]">
                                  {product.icon}
                                </div>
                              )}
                              <h2 className="text-[14px] font-medium text-gray-700">
                                {product.header}
                              </h2>
                            </div>
                            <p className="text-[14px] text-start">
                              {product.description}
                            </p>
                          </button>
                        </Link>
                      ))}
                    </div>
                    <div className="gap-y-[16px] flex flex-col w-1/3 h-full">
                      <p className="text-[16px] text-primary-greytext pl-[16px]">
                        By Use Case
                      </p>
                      {item.byUseCase.map((useCase, useCaseIndex) => (
                        <Link href={useCase.link} key={useCaseIndex}>
                          <div className="flex flex-col gap-y-2 p-4 hover:bg-gray-50 hover:text-gray-700 text-gray-400 duration-100 transition-all ease-in-out cursor-pointer rounded-[14px]">
                            <div className="flex items-center">
                              <h2 className="text-[16px] font-medium text-gray-700">
                                {useCase.header}
                              </h2>
                            </div>
                            <p className="text-[14px]">{useCase.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <button className="w-1/3 bg-gray-100 bg-opacity-70 cursor-default rounded-[24px] flex flex-col justify-center items-start gap-y-[24px] h-[240px] p-[32px]">
                      <p className="text-[17px] text-primary-greytext">
                        Useful links
                      </p>
                      <ul className="flex flex-col gap-y-[20px]">
                        <Link href="https://beta.verzo.app/" target="_blank">
                          <li className="flex flex-row gap-x-[14px] items-center cursor-pointer text-[16px] font-medium text-gray-700">
                            <PlusCircle className="text-gray-500 w-5 h-5" />
                            Sign up
                          </li>
                        </Link>
                        <div>
                          <Link target="_blank" href="https://blog.verzo.app/">
                            <li className="flex flex-row gap-x-[14px] items-center text-[16px] font-medium text-gray-700">
                              <Scroll className="text-gray-500 w-5 h-5" />
                              Our Blog
                            </li>
                          </Link>
                        </div>
                        <Link href={`mailto:${emailAddress}`}>
                          <li className="flex flex-row gap-x-[14px] items-center cursor-pointer text-[16px] font-medium text-gray-700">
                            <Mail className="text-gray-500 w-5 h-5" />
                            Send us a mail
                          </li>
                        </Link>
                      </ul>
                    </button>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}

            <Link
              href="/pricing"
              className="text-black text-lg hover:text-gray-900"
            >
              Pricing
            </Link>

            {resources.map((item) => (
              <HoverCard
                key={item.name}
                open={isMenuOpen("company")}
                onOpenChange={() => {}} // Disable default behavior
              >
                <HoverCardTrigger
                  className="text-gray-600 flex flex-row items-center gap-x-[6px] text-primary-greytext hover:text-primary-brandBlue cursor-pointer transition-colors"
                  onClick={() => handleMenuClick("company")}
                  onMouseEnter={() => handleMouseEnter("company")}
                  onMouseLeave={handleMouseLeave}
                >
                  <span className="text-black text-lg">Company</span>
                  <div className="relative w-4 h-4">
                    <ChevronDown
                      className={`w-4 h-4 absolute transition-all duration-300 ${
                        isMenuOpen("company")
                          ? "opacity-0 transform rotate-180"
                          : "opacity-100"
                      }`}
                    />
                    <ChevronUp
                      className={`w-4 h-4 absolute transition-all duration-300 ${
                        isMenuOpen("company")
                          ? "opacity-100 transform rotate-0"
                          : "opacity-0 transform -rotate-180"
                      }`}
                    />
                  </div>
                </HoverCardTrigger>

                <HoverCardContent
                  className="w-screen mr-[3px] flex flex-col gap-y-[31px] bg-white shadow-md mt-[16px] rounded-b-[30px] h-[600px]"
                  onMouseEnter={() => handleMouseEnter("company")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="w-[85%] mx-auto flex flex-row gap-x-[56px] justify-between pt-[45px] pb-[72px] h-full">
                    <div className="gap-y-[16px] flex flex-col w-1/3 h-full">
                      {item.byProduct.map((product, productIndex) => (
                        <React.Fragment key={productIndex}>
                          {product.link.includes("blog") ? (
                            <a
                              href={product.link}
                              className="flex flex-col gap-y-2 p-4 hover:bg-gray-50 hover:text-gray-700 text-gray-700 rounded-[14px]"
                            >
                              <div className="flex items-center">
                                <h2 className="text-[16px] font-medium">
                                  {product.header}
                                </h2>
                              </div>
                              <p className="text-[14px] text-start">
                                {product.description}
                              </p>
                            </a>
                          ) : (
                            <button
                              className="flex flex-col gap-y-2 p-4 bg-gray-50 text-gray-500 cursor-not-allowed rounded-[14px]"
                              disabled
                            >
                              <div className="flex items-center">
                                <h2 className="text-[16px] font-medium">
                                  {product.header}
                                </h2>
                              </div>
                              <p className="text-[14px] text-start">
                                {product.description}
                              </p>
                            </button>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                    <div className="gap-y-[16px] flex flex-col w-1/3 h-full">
                      {item.byUseCase.map((useCase, useCaseIndex) => (
                        <button
                          key={useCaseIndex}
                          className="flex flex-col gap-y-2 p-4 bg-gray-50 text-gray-500 cursor-not-allowed rounded-[14px]"
                          disabled
                        >
                          <div className="flex items-center">
                            <h2 className="text-[16px] font-medium text-gray-500">
                              {useCase.header}
                            </h2>
                          </div>
                          <p className="text-[14px]">{useCase.description}</p>
                        </button>
                      ))}
                    </div>
                    <button className="w-1/3 bg-gray-100 bg-opacity-70 cursor-default rounded-[24px] flex flex-col justify-center items-start gap-y-[24px] h-[240px] p-[32px]">
                      <p className="text-[17px] text-primary-greytext">
                        Useful links
                      </p>
                      <ul className="flex flex-col gap-y-[20px]">
                        <Link href="/pricing">
                          <li className="flex flex-row gap-x-[14px] items-center cursor-pointer text-[16px] font-medium text-gray-700">
                            <ArrowUpDown className="text-gray-500 w-5 h-5" />
                            Verzo Perks
                          </li>
                        </Link>
                        <Link target="_blank" href="https://blog.verzo.app/">
                          <li className="flex flex-row gap-x-[14px] items-center text-[16px] font-medium text-gray-700">
                            <Scroll className="text-gray-500 w-5 h-5" />
                            Our Blog
                          </li>
                        </Link>
                        <Link href="tel:09066181506">
                          <li className="flex flex-row gap-x-[14px] items-center cursor-pointer text-[16px] font-medium text-gray-700">
                            <Phone className="text-gray-500 w-5 h-5" />
                            Talk to our team
                          </li>
                        </Link>
                      </ul>
                    </button>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}

            {resources.map((item) => (
              <HoverCard
                key={item.name}
                open={isMenuOpen("resources")}
                onOpenChange={() => {}} // Disable default behavior
              >
                <HoverCardTrigger
                  className="text-gray-600 flex flex-row items-center gap-x-[6px] text-primary-greytext hover:text-primary-brandBlue cursor-pointer transition-colors"
                  onClick={() => handleMenuClick("resources")}
                  onMouseEnter={() => handleMouseEnter("resources")}
                  onMouseLeave={handleMouseLeave}
                >
                  <span className="text-black text-lg">Resources</span>
                  <div className="relative w-4 h-4">
                    <ChevronDown
                      className={`w-4 h-4 absolute transition-all duration-300 ${
                        isMenuOpen("resources")
                          ? "opacity-0 transform rotate-180"
                          : "opacity-100"
                      }`}
                    />
                    <ChevronUp
                      className={`w-4 h-4 absolute transition-all duration-300 ${
                        isMenuOpen("resources")
                          ? "opacity-100 transform rotate-0"
                          : "opacity-0 transform -rotate-180"
                      }`}
                    />
                  </div>
                </HoverCardTrigger>

                <HoverCardContent
                  className="w-screen mr-[3px] flex flex-col gap-y-[31px] bg-white shadow-md mt-[16px] rounded-b-[30px] h-[600px]"
                  onMouseEnter={() => handleMouseEnter("resources")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="w-[85%] mx-auto flex flex-row gap-x-[56px] justify-between pt-[45px] pb-[72px] h-full">
                    <div className="gap-y-[16px] flex flex-col w-1/3 h-full">
                      {item.byProduct.map((product, productIndex) => (
                        <React.Fragment key={productIndex}>
                          {product.link.includes("blog") ? (
                            <a
                              href={product.link}
                              className="flex flex-col gap-y-2 p-4 hover:bg-gray-50 hover:text-gray-700 text-gray-700 rounded-[14px]"
                            >
                              <div className="flex items-center">
                                <h2 className="text-[14px] font-medium">
                                  {product.header}
                                </h2>
                              </div>
                              <p className="text-[14px] text-start">
                                {product.description}
                              </p>
                            </a>
                          ) : (
                            <button
                              className="flex flex-col gap-y-2 p-4 bg-gray-50 text-gray-500 cursor-not-allowed rounded-[14px]"
                              disabled
                            >
                              <div className="flex items-center">
                                <h2 className="text-[14px] font-medium">
                                  {product.header}
                                </h2>
                              </div>
                              <p className="text-[14px] text-start">
                                {product.description}
                              </p>
                            </button>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                    <div className="gap-y-[16px] flex flex-col w-1/3 h-full">
                      {item.byUseCase.map((useCase, useCaseIndex) => (
                        <button
                          key={useCaseIndex}
                          className="flex flex-col gap-y-2 p-4 bg-gray-50 text-gray-500 cursor-not-allowed rounded-[14px]"
                          disabled
                        >
                          <div className="flex items-center">
                            <h2 className="text-[16px] font-medium text-gray-500">
                              {useCase.header}
                            </h2>
                          </div>
                          <p className="text-[14px]">{useCase.description}</p>
                        </button>
                      ))}
                    </div>
                    <button className="w-1/3 bg-gray-100 bg-opacity-70 cursor-default rounded-[24px] flex flex-col justify-center items-start gap-y-[24px] h-[240px] p-[32px]">
                      <p className="text-[17px] text-primary-greytext">
                        Useful links
                      </p>
                      <ul className="flex flex-col gap-y-[20px]">
                        <Link href="/pricing">
                          <li className="flex flex-row gap-x-[14px] items-center cursor-pointer text-[16px] font-medium text-gray-700">
                            <ArrowUpDown className="text-gray-500 w-5 h-5" />
                            Verzo Perks
                          </li>
                        </Link>
                        <Link target="_blank" href="https://blog.verzo.app/">
                          <li className="flex flex-row gap-x-[14px] items-center text-[16px] font-medium text-gray-700">
                            <Scroll className="text-gray-500 w-5 h-5" />
                            Our Blog
                          </li>
                        </Link>
                        <Link href="tel:09066181506">
                          <li className="flex flex-row gap-x-[14px] items-center cursor-pointer text-[16px] font-medium text-gray-700">
                            <Phone className="text-gray-500 w-5 h-5" />
                            Talk to our team
                          </li>
                        </Link>
                      </ul>
                    </button>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden md:block">
            <Button
              variant="outline"
              className="border-radius-sm bg-primary-brandBlue text-white py-5"
            >
              Start your free trial
            </Button>
          </div>
        </nav>
      </header>
      <Mobilemenu open={mobileMenuOpen} onClose={handleCloseMobileMenu} />
    </>
  );
}
