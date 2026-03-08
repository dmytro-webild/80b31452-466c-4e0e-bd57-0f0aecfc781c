"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="smallMedium"
      sizing="largeSizeMediumTitles"
      background="aurora"
      cardStyle="glass-elevated"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="solid"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Studio Arc"
          navItems={[
            { name: "Work", id: "projects" },
            { name: "Process", id: "process" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" },
          ]}
          button={{ text: "Get In Touch", href: "contact" }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Architecture That Defines Spaces"
          description="We create thoughtfully designed buildings and environments that balance form, function, and human experience. Each project is a reflection of our commitment to spatial excellence."
          tag="Est. 2015"
          background={{ variant: "plain" }}
          buttons={[
            { text: "View Our Work", href: "projects" },
            { text: "Learn More", href: "about" },
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/architecture-shadows-city-day_23-2149451224.jpg"
          imageAlt="Modern architectural building design"
          imagePosition="right"
          mediaAnimation="slide-up"
          tagAnimation="slide-up"
          buttonAnimation="slide-up"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          tag="Our Philosophy"
          title="Design with purpose and precision. We believe architecture should enhance the way people live, work, and connect."
          useInvertedBackground={false}
          tagAnimation="slide-up"
          buttons={[{ text: "See Our Projects", href: "projects" }]}
        />
      </div>

      <div id="process" data-section="process">
        <FeatureCardSix
          title="Our Design Process"
          description="From concept to completion, we follow a systematic approach that ensures every project meets the highest standards of design and craftsmanship."
          tag="Methodology"
          textboxLayout="default"
          useInvertedBackground={false}
          tagAnimation="slide-up"
          features={[
            {
              id: 1,
              title: "Discovery & Research",              description: "We immerse ourselves in understanding the site, local context, client needs, and cultural significance. This foundation informs every design decision.",              imageSrc: "http://img.b2bpic.net/free-photo/busy-young-coworkes-stand-knees-floor_273609-28672.jpg"},
            {
              id: 2,
              title: "Concept Development",              description: "Translating insights into architectural concepts that balance aesthetic vision with practical constraints and client objectives.",              imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-tall-unique-building-berlin-germany_181624-13036.jpg"},
            {
              id: 3,
              title: "Design Refinement",              description: "Through iterative design phases, we refine details, optimize materials, and ensure structural integrity while maintaining design integrity.",              imageSrc: "http://img.b2bpic.net/free-photo/eyeglasses-paper-plan-table_23-2148039940.jpg"},
            {
              id: 4,
              title: "Implementation",              description: "Close collaboration with contractors and specialists ensures our designs are realized with precision and attention to every detail on site.",              imageSrc: "http://img.b2bpic.net/free-photo/young-woman-wearing-trucker-hat_23-2149432339.jpg"},
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Studio Achievements"
          description="Recognized excellence in architectural design and sustainable building practices across residential, commercial, and institutional projects."
          tag="By The Numbers"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          tagAnimation="slide-up"
          metrics={[
            { id: "1", value: "85+", description: "Completed Projects" },
            { id: "2", value: "12", description: "Awards Won" },
            { id: "3", value: "18", description: "Years Experience" },
            { id: "4", value: "200K", description: "Sqm Designed" },
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get In Touch"
          title="Ready to bring your vision to life"
          description="Let's discuss how we can create exceptional architectural solutions for your next project. Whether you're planning a new building or reimagining an existing space, we're here to collaborate."
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/business-woman-leaving-office-job-sunset-waving-man-employee-working-online-presentation-planning-data-research-information-create-startup-management-report_482257-50938.jpg"
          imageAlt="Architecture studio workspace collaboration"
          mediaAnimation="slide-up"
          tagAnimation="slide-up"
          inputPlaceholder="your@email.com"
          buttonText="Subscribe"
          termsText="We respect your privacy. You can unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Studio",              items: [
                { label: "About", href: "#about" },
                { label: "Work", href: "#projects" },
                { label: "Process", href: "#process" },
              ],
            },
            {
              title: "Connect",              items: [
                { label: "LinkedIn", href: "https://linkedin.com" },
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Contact", href: "#contact" },
              ],
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookies", href: "#" },
              ],
            },
          ]}
          copyrightText="© 2024 Studio Arc. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}
