import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Banker's Hill Law Firm, A.P.C.",
    tagline: "Your Legal Advocates. We Fight.",
    phone: "(619) 230-0330",
    phoneHref: "tel:+16192300330",
    email: "info@bankershilllaw.com",
    address: "2355 India St, San Diego, CA 92101",
    city: "San Diego",
    serviceAreas: ["San Diego", "Chula Vista", "National City", "El Cajon", "La Mesa", "Spring Valley", "Santee"],
    license: "State Bar of California",
    since: "2005",
    google_rating: "4.9",
    review_count: "200",
    emergency: false,
    theme: "slate",
    niche: "lawfirm",
  },

  services: [
    { icon: "shield-check", title: "Personal Injury", desc: "We represent victims of various accidents, ensuring fair compensation for their suffering.", urgent: false },
    { icon: "truck", title: "Car Accidents", desc: "Expert legal support for car accident victims, navigating claims and securing your rights.", urgent: false },
    { icon: "briefcase", title: "Workers’ Compensation", desc: "Assisting injured workers in obtaining the benefits they deserve for workplace incidents.", urgent: false },
    { icon: "home", title: "Estate Planning", desc: "Comprehensive estate planning services to protect your assets and secure your family's future.", urgent: false },
    { icon: "dollar-sign", title: "Bankruptcy", desc: "Guiding individuals through Chapter 7 and Chapter 13 bankruptcy for a fresh financial start.", urgent: false },
    { icon: "award", title: "Immigration Law", desc: "Navigating complex immigration processes for work, family, and permanent residency visas.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "San Diego, CA", stars: 5, text: "After my car accident, Banker's Hill Law Firm was a lifesaver. They handled everything from medical bills to insurance claims, allowing me to focus on recovery. Their team was incredibly supportive and secured a settlement far beyond my expectations. Highly recommend their professional and compassionate service!" },
    { name: "Mark T.", location: "Chula Vista, CA", stars: 5, text: "I was facing a difficult workers' compensation case, and Banker's Hill Law Firm stepped in with expert guidance. They explained every step clearly and fought tirelessly for my rights. Thanks to them, I received the benefits I needed to get back on my feet. Truly dedicated and effective." },
    { name: "Jessica R.", location: "La Mesa, CA", stars: 5, text: "Estate planning felt overwhelming until I consulted with Banker's Hill Law Firm. They made the process simple and clear, helping me create a comprehensive plan that gives me peace of mind. Their attention to detail and personalized approach were exceptional. A truly trustworthy firm." }
  ],

  trustBadges: [
    "State Bar Licensed", "Free Case Evaluation", "Client-Focused Representation", "Experienced Legal Team", "Contingency Fee Basis", "Trusted Local Firm"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1000, label: "Cases Won", suffix: "+", decimals: 0 },
    { value: 15, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Timely Action", desc: "We act swiftly to protect your rights and build a strong case from the start." },
    { icon: "dollar-sign", title: "No Win, No Fee", desc: "You pay nothing unless we win your personal injury or workers' comp case." },
    { icon: "award", title: "Experienced Attorneys", desc: "Our team brings years of specialized legal expertise to every case." },
    { icon: "thumbs-up", title: "Client Satisfaction", desc: "We prioritize clear communication and achieving the best outcomes for our clients." },
    { icon: "phone", title: "Accessible Support", desc: "Our team is available to answer your questions and provide updates." },
    { icon: "shield-check", title: "Dedicated Advocacy", desc: "We are fierce advocates for justice, fighting tirelessly for your best interests." }
  ],

  formServiceOptions: ["Personal Injury", "Car Accidents", "Workers’ Compensation", "Estate Planning", "Bankruptcy", "Immigration Law"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!