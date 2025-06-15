"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { Schedule } from "@/components/ui/schedule";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/footer-02/footer-02";
import {
  IconHome,
  IconCalendarEvent,
  IconInfoCircle,
  IconUserShare,
  IconList,
} from "@tabler/icons-react";

export default function Home() {
  const dockItems = [
    {
      title: "Home",
      icon: <IconHome className="h-6 w-6" />,
      href: "#top", // Navigate to top of the page
    },
    {
      title: "Schedule",
      icon: <IconCalendarEvent className="h-6 w-6" />,
      href: "#timeline", // Timeline section already has an ID
    },
    {
      title: "About",
      icon: <IconInfoCircle className="h-6 w-6" />,
      href: "#about", // Will scroll to element with id="about"
    },
    {
      title: "Register",
      icon: <IconUserShare className="h-6 w-6" />,
      href: "https://docs.google.com/forms/d/e/1FAIpQLScSlgu3YroZbGOMRzWjPBNcuslHPdkq5Hy4YcuTQ3IDcWupHA/closedform?pli=1", // Will scroll to element with id="venue" 
    },
    {
      title: "Categories",
      icon: <IconList className="h-6 w-6" />,
      href: "#categories", // Will scroll to element with id="team"
    },
  ];

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <>
      <HeroParallax products={products} />

      {/* Add About Us section here */}
      <section id="about" className="w-full py-24 bg-neutral-50 dark:bg-neutral-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mb-8">
            About PRAKALPA
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-neutral-600 dark:text-neutral-400 text-lg mb-6">
                PRAKALPA is ISTE KJSCE's flagship event - a <span className="font-semibold text-neutral-800 dark:text-neutral-200">National Level Working Model Project Competition and Paper Presentation</span> that brings together innovative minds from across the country.
              </p>

              <p className="text-neutral-600 dark:text-neutral-400 text-lg mb-6">
                Since its inception, PRAKALPA has served as a platform for students to showcase their technical prowess and innovative solutions to real-world problems. The competition encourages participants to think beyond conventional boundaries and develop working prototypes that address contemporary challenges.
              </p>

            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2940&auto=format&fit=crop"
                alt="Students collaborating on a project"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="mt-20">

            <div className="flex flex-wrap gap-4 mt-8">
              <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-md flex-1 basis-64">
                <h4 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 mb-2">Vision</h4>
                <p className="text-neutral-600 dark:text-neutral-400">To create a community of technically proficient and innovative engineers ready to tackle global challenges.</p>
              </div>

              <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-md flex-1 basis-64">
                <h4 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 mb-2">Mission</h4>
                <p className="text-neutral-600 dark:text-neutral-400">To provide platforms and opportunities for students to develop technical skills and showcase their talents.</p>
              </div>

              <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-md flex-1 basis-64">
                <h4 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 mb-2">Values</h4>
                <p className="text-neutral-600 dark:text-neutral-400">Innovation, collaboration, excellence, and integrity in all technical and educational endeavors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-full py-20" id="categories">
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
          Project Submission Categories
        </h2>
        <Carousel items={cards} />
      </div>

      <Schedule />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Separator className="h-1 bg-neutral-200 dark:bg-neutral-800 relative z-10" />
      </div>

      <Footer />

      <FloatingDock
        items={dockItems}
        desktopClassName="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50"
        mobileClassName="fixed bottom-4 right-4 z-50"
      />
    </>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Join us for the National Level Working Model Project Competition.
              </span>{" "}
              Showcase your innovative ideas, connect with industry experts, and compete
              for exciting prizes. PRAKALPA 2025 brings together the brightest minds from
              across the country.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Project mockup"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Hardware Project",
    title: "1st Prize Rs.10000/-",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Software Project",
    title: "1st Prize Rs.10000/-",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Paper Presentation",
    title: "1st Prize Rs.10000/-",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },

];

const products = [
  {
    title: "Cybersecurity",
    link: "#",
    thumbnail:
      "https://i.pinimg.com/736x/e6/ec/86/e6ec86d140147e8dc72514dbd2af546f.jpg",
  },
  {
    title: "Game development",
    link: "#",
    thumbnail:
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
  },
  {
    title: "Blockchain",
    link: "#",
    thumbnail:
      "https://i.pinimg.com/736x/7e/9c/4c/7e9c4c06e9b19c0ce5c6959f37af068e.jpg",
  },

  {
    title: "Web Development",
    link: "#",
    thumbnail:
      "https://i.pinimg.com/736x/22/bc/8e/22bc8ebef610eb881071e1a7007a7a80.jpg",
  },
  {
    title: "Robotics",
    link: "#",
    thumbnail:
      "https://i.pinimg.com/736x/38/5e/d7/385ed712e43c1db062f3d62f0de0b2a8.jpg",
  },
  {
    title: "Internet Of Things",
    link: "#",
    thumbnail:
      "https://i.pinimg.com/736x/13/f5/07/13f507317af7ab4305c15388ffce0e82.jpg",
  },

  {
    title: "Cloud Computing",
    link: "#",
    thumbnail:
      "https://i.pinimg.com/736x/51/d5/48/51d548911242e61017adcdfbed429f59.jpg",
  },
  {
    title: "Autonomous Vehicles",
    link: "#",
    thumbnail:
      "https://i.pinimg.com/736x/e3/30/0e/e3300e421c6b718193276f3f760ee194.jpg",
  },
  {
    title: "Biotechnology",
    link: "#",
    thumbnail:
      "https://i.pinimg.com/736x/57/ee/c0/57eec0bd5bac21d1fac6825bfaa598c7.jpg",
  },
  {
    title: "Coding",
    link: "#",
    thumbnail:
      "https://images.pexels.com/photos/1933900/pexels-photo-1933900.jpeg",
  },
  {
    title: "AIML",
    link: "#",
    thumbnail:
      "https://i.pinimg.com/736x/32/f9/48/32f9485364e3258a5e21471f74b4f1cc.jpg",
  },

  {
    title: "Robotics2",
    link: "#",
    thumbnail:
      "https://i.pinimg.com/736x/38/5e/d7/385ed712e43c1db062f3d62f0de0b2a8.jpg",
  },
  {
    title: "Internet Of Things2",
    link: "#",
    thumbnail:
      "https://i.pinimg.com/736x/13/f5/07/13f507317af7ab4305c15388ffce0e82.jpg",
  },
  {
    title: "Coding2",
    link: "#",
    thumbnail:
      "https://images.pexels.com/photos/1933900/pexels-photo-1933900.jpeg",
  },
  {
    title: "AIML2",
    link: "#",
    thumbnail:
      "https://i.pinimg.com/736x/32/f9/48/32f9485364e3258a5e21471f74b4f1cc.jpg",
  },
];
