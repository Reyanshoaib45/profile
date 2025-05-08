
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PenCraftProject from "@/components/PenCraftProject";

const PenCraftProjectPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <PenCraftProject />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PenCraftProjectPage;
