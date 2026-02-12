import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Horizon Intern - Premium Internship Platform",
  description: "Join Horizon Intern for cutting-edge internships in Web Dev, AI/ML, Python, and Data Analytics. Apply now and kickstart your career.",
};

const programSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOccupationalProgram",
      name: "Horizon Intern Virtual Internship Program",
      description:
        "Virtual internship program covering AI/ML and Python tracks with mentor reviews and project-based outcomes.",
      educationalProgramMode: "online",
      timeToComplete: "P6M",
      occupationalCredentialAwarded: "Certificate of Completion",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      provider: {
        "@type": "Organization",
        name: "Horizon Intern",
      },
    },
    {
      "@type": "Course",
      name: "Free AI/ML Internship with Certificate",
      description:
        "AI/ML internship track with model building, API integration, and mentor-guided evaluations in a virtual format.",
      educationalLevel: "Beginner to Intermediate",
      courseMode: "online",
      timeRequired: "P1M",
      provider: {
        "@type": "Organization",
        name: "Horizon Intern",
      },
    },
    {
      "@type": "Course",
      name: "Python Internship for Students",
      description:
        "Python internship track focused on automation, API development, testing, and portfolio-ready project delivery.",
      educationalLevel: "Beginner to Intermediate",
      courseMode: "online",
      timeRequired: "P1M",
      provider: {
        "@type": "Organization",
        name: "Horizon Intern",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TKQ4LJSVH9"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TKQ4LJSVH9');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(programSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
