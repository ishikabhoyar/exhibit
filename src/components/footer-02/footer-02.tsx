import { Separator } from "@/components/ui/separator";
import {
  InstagramIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const footerSections = [
  {
    title: "Event",
    links: [
      {
        title: "About Prakalpa",
        href: "#about",
      },
      {
        title: "Schedule",
        href: "#timeline",
      },
      {
        title: "Venue",
        href: "https://docs.google.com/forms/d/e/1FAIpQLScSlgu3YroZbGOMRzWjPBNcuslHPdkq5Hy4YcuTQ3IDcWupHA/closedform?pli=1",
      },
      {
        title: "Rules",
        href: "#rules",
      },
      {
        title: "Judges",
        href: "#judges",
      },
      {
        title: "FAQ",
        href: "#faq",
      },
    ],
  },
  {
    title: "Participate",
    links: [
      {
        title: "Registration",
        href: "#register",
      },
      {
        title: "Submission Guidelines",
        href: "#guidelines",
      },
      {
        title: "Categories",
        href: "#categories",
      },
      {
        title: "Prizes",
        href: "#prizes",
      },
      {
        title: "Past Winners",
        href: "#winners",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        title: "Blog",
        href: "#",
      },
      {
        title: "Previous Events",
        href: "#",
      },
      {
        title: "Photo Gallery",
        href: "#",
      },
      {
        title: "Downloads",
        href: "#",
      },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        title: "Event Team",
        href: "#team",
      },
      {
        title: "ISTE KJSCE",
        href: "https://iste.kjsce.somaiya.edu/",
      },
      {
        title: "Somaiya Vidyavihar",
        href: "https://somaiya.edu/",
      },
      {
        title: "Email Us",
        href: "mailto:iste@somaiya.edu",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        title: "Terms & Conditions",
        href: "#",
      },
      {
        title: "Privacy Policy",
        href: "#",
      },
      {
        title: "Code of Conduct",
        href: "#",
      },
    ],
  },
];

const Footer = () => {
  return (
      <footer>
        <div className="max-w-screen-xl mx-auto">
          <div className="py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-x-8 gap-y-10 px-6 xl:px-0">
            <div className="col-span-full xl:col-span-2">
              {/* Add logo */}
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="https://prakalpa2025.istekjsce.com/assets/IsteFinal-D5BB2Cg3.svg"
                  alt="ISTE KJSCE Logo"
                  width={50}
                  height={50}
                  className="dark:invert"
                />
                <h2 className="text-2xl font-bold">PRAKALPA 2025</h2>
              </div>

              <p className="mt-4 text-muted-foreground">
                National Level Working Model Project Competition and Paper Presentation by ISTE KJSCE.
                
              </p>
              
              <div className="mt-6">
                <p className="text-sm text-muted-foreground">
                  <strong>Venue:</strong> K. J. Somaiya College of Engineering,<br />
                  Vidyavihar, Mumbai - 400077
                </p>
              </div>
            </div>

            {footerSections.map(({ title, links }) => (
              <div key={title}>
                <h6 className="font-semibold">{title}</h6>
                <ul className="mt-6 space-y-4">
                  {links.map(({ title, href }) => (
                    <li key={title}>
                      <Link
                        href={href}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Separator />
          <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
            {/* Copyright */}
            <span className="text-muted-foreground">
              &copy; {new Date().getFullYear()}{" "}
              <Link href="https://iste.kjsce.somaiya.edu/" target="_blank">
              ISTE KJSCE
              </Link>
              . All rights reserved. Made with love by Ishika Bhoyar.
            </span>

            <div className="flex items-center gap-5 text-muted-foreground">
              <Link href="https://instagram.com/istekjsce" target="_blank" aria-label="Instagram">
                <InstagramIcon className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com/company/iste-kjsce" target="_blank" aria-label="LinkedIn">
                <LinkedinIcon className="h-5 w-5" />
              </Link>
              <Link href="mailto:iste@somaiya.edu" target="_blank" aria-label="Email">
                <MailIcon className="h-5 w-5" />
              </Link>
              <Link href="https://github.com/iste-kjsce" target="_blank" aria-label="GitHub">
                <GithubIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
