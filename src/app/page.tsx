"use client";
import React, { useState } from "react";
import {
  About,
  ContactDialog,
  Footer,
  Header,
} from "@/components/sections";

const Portfolio = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  return (
    <>
      <ContactDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
      <Header setIsDialogOpen={setIsDialogOpen} />
      <main className="px-8 pt-8">
        <About />
        {/* Uncomment these as you build/import them:
        <Skills skills={skillList} />
        <Projects projects={projectData} />
        <Certifications certifications={certifications} />
        <Testimonials testimonials={testimonials} />
        <Contact />
        <IconsShowcase /> 
        */}
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;