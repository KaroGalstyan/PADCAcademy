import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeroSection from "@/app/components/home/HeroSection";
import AboutSection from "@/app/components/home/AboutSection";
import CoursesSection from "@/app/components/home/CoursesSection";
import SuccessStories from "@/app/components/home/SuccessStoriesSection";
import PricingSection from "@/app/components/home/PricingSection";
import ContactSection from "@/app/components/home/ContactUsSection";
import Footer from "@/app/components/home/FooterSection";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <HeroSection />
        <AboutSection />
        <CoursesSection />
        <SuccessStories />
        <PricingSection />
        <ContactSection />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
