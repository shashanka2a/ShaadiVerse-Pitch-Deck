'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Heart, DollarSign, Globe, Shield, TrendingUp, Users, Zap, Target } from 'lucide-react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 10;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const slides = [
    <TitleSlide key="0" />,
    <ProblemSlide key="1" />,
    <SolutionSlide key="2" />,
    <MarketSlide key="3" />,
    <ProductSlide key="4" />,
    <BusinessModelSlide key="5" />,
    <GTMSlide key="6" />,
    <CompetitiveSlide key="7" />,
    <TeamSlide key="8" />,
    <AskSlide key="9" />,
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5E6E8] to-[#E8D5D8] flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-4">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="relative">
            {slides[currentSlide]}

            {/* Slide counter */}
            <div className="absolute top-6 right-8 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-200">
              <span className="text-[#C41E3A]">
                {currentSlide + 1} / {totalSlides}
              </span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)}
            className="bg-white hover:bg-gray-50 p-2 rounded-full shadow-lg transition-all border border-gray-200"
          >
            <ChevronLeft className="w-6 h-6 text-[#C41E3A]" />
          </button>
          
          <div className="flex gap-2">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentSlide ? 'bg-[#C41E3A] w-8' : 'bg-white border border-gray-300'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % totalSlides)}
            className="bg-white hover:bg-gray-50 p-2 rounded-full shadow-lg transition-all border border-gray-200"
          >
            <ChevronRight className="w-6 h-6 text-[#C41E3A]" />
          </button>
        </div>

        {/* Desktop recommendation */}
        <p className="text-xs text-gray-500 opacity-70 text-center mt-2">
          For the best experience, please view on laptop or desktop
        </p>
      </div>

      {/* Keyboard hint */}
      <div className="fixed bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow-lg text-sm text-gray-600 border border-gray-200">
        Use ← → arrow keys to navigate
      </div>
    </div>
  );
}

function TitleSlide() {
  return (
    <div className="relative min-h-[600px] flex flex-col items-center justify-center p-16 bg-white">
      <div className="absolute inset-0 opacity-60">
        <Image 
          src="/image.png"
          alt="Indian wedding traditional ceremony"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="relative z-10 text-center space-y-6">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Heart className="w-16 h-16 text-[#C41E3A] fill-[#C41E3A]" />
          <h1 className="text-7xl text-gray-900">ShaadiVerse</h1>
        </div>
        <p className="text-3xl max-w-3xl mx-auto text-white font-bold italic drop-shadow-lg">
          Organizing India's Massive <span className="text-[#C41E3A] border-b-4 border-[#C41E3A] drop-shadow-lg">Tier-2 & Tier-3</span> Wedding Market
        </p>
        <div className="mt-12 w-24 h-1 bg-[#C41E3A] mx-auto"></div>
      </div>
    </div>
  );
}

function ProblemSlide() {
  const problems = [
    {
      icon: DollarSign,
      title: "Too Expensive",
      desc: "Apps like WedMeGood list luxury vendors (photographers charging ₹1 Lakh/day) which Tier-2 families cannot afford.",
    },
    {
      icon: Globe,
      title: "Too Complicated",
      desc: "English-heavy interfaces and complex filters intimidate non-tech-savvy parents in small towns.",
    },
    {
      icon: Shield,
      title: "No Price Transparency",
      desc: 'Most listings say "Price on Request." Small town users want to see the rate immediately.',
    },
    {
      icon: Users,
      title: "Trust Deficit",
      desc: "In small towns, booking a stranger online feels risky without 'social proof.'",
    },
  ];

  return (
    <div className="min-h-[600px] p-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <h2 className="text-5xl text-[#C41E3A] mb-4">The Problem</h2>
      <p className="text-2xl text-gray-700 mb-12">Current Platforms Are Built for the 1%, Not the 99%</p>
      
      <div className="grid grid-cols-2 gap-6">
        {problems.map((problem, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <problem.icon className="w-12 h-12 text-[#C41E3A] mb-4" />
            <h3 className="text-xl text-[#8B1538] mb-3">{problem.title}</h3>
            <p className="text-gray-600">{problem.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SolutionSlide() {
  return (
    <div className="min-h-[600px] p-16 bg-white">
      <h2 className="text-5xl text-[#C41E3A] mb-4">The Solution</h2>
      <p className="text-2xl text-gray-700 mb-8">WeddingBazaar – Simple, Affordable, Trustworthy</p>
      
      <div className="bg-gradient-to-br from-[#FFF5E6] to-[#FFE8CC] p-8 rounded-xl mb-8">
        <p className="text-xl text-gray-800 mb-2">Core Concept:</p>
        <p className="text-2xl text-[#8B1538]">A discovery platform specifically for budgets between ₹5 Lakh – ₹15 Lakh</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white border-2 border-[#C41E3A] p-6 rounded-xl">
          <h3 className="text-xl text-[#8B1538] mb-3">Budget-First</h3>
          <p className="text-gray-600">We only list vendors who offer "Standard Packages" (e.g., Full Wedding Decor @ ₹50,000)</p>
        </div>
        
        <div className="bg-white border-2 border-[#C41E3A] p-6 rounded-xl">
          <h3 className="text-xl text-[#8B1538] mb-3">Multi-Language Support</h3>
          <p className="text-gray-600">App available in Hindi, Telugu, etc.</p>
        </div>
        
        <div className="bg-white border-2 border-[#C41E3A] p-6 rounded-xl">
          <h3 className="text-xl text-[#8B1538] mb-3">Video-Led</h3>
          <p className="text-gray-600">Browse vendors through photos/videos (Reels) of their work</p>
        </div>
        
        <div className="bg-white border-2 border-[#C41E3A] p-6 rounded-xl">
          <h3 className="text-xl text-[#8B1538] mb-3">WhatsApp Centric</h3>
          <p className="text-gray-600">One-click to chat with vendors on WhatsApp</p>
        </div>
      </div>
    </div>
  );
}

function MarketSlide() {
  return (
    <div className="min-h-[600px] p-16 bg-white">
      <h2 className="text-5xl text-[#C41E3A] mb-4">The Market Opportunity</h2>
      <p className="text-2xl text-gray-700 mb-12">The Real Wedding Market is in Tier-2 Cities</p>
      
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border-2 border-[#C41E3A]/30 shadow-md">
          <div className="text-6xl text-[#C41E3A] mb-4">10M</div>
          <h3 className="text-2xl text-gray-900 mb-2">Total Market</h3>
          <p className="text-gray-600">Weddings happen in India every year</p>
        </div>
        
        <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border-2 border-[#C41E3A]/30 shadow-md">
          <div className="text-6xl text-[#C41E3A] mb-4">80%</div>
          <h3 className="text-2xl text-gray-900 mb-2">The Split</h3>
          <p className="text-gray-600">Of weddings happen in Tier-2, Tier-3 towns and villages</p>
        </div>
        
        <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border-2 border-[#C41E3A]/30 shadow-md">
          <div className="text-6xl text-[#C41E3A] mb-4">$50B</div>
          <h3 className="text-2xl text-gray-900 mb-2">Market Size</h3>
          <p className="text-gray-600">The "Budget Wedding" market is worth annually</p>
        </div>
        
        <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border-2 border-[#C41E3A]/30 shadow-md">
          <div className="text-6xl text-[#C41E3A] mb-4">99%</div>
          <h3 className="text-2xl text-gray-900 mb-2">The Gap</h3>
          <p className="text-gray-600">Unorganized (offline). NO digital winner in this segment</p>
        </div>
      </div>
    </div>
  );
}

function ProductSlide() {
  const features = [
    {
      icon: DollarSign,
      title: '"Show Price" Button',
      desc: "No hidden costs. Vendors must display starting package rates.",
    },
    {
      icon: Target,
      title: 'Local Categories',
      desc: 'We list "Tent Houses," "Marriage Gardens," and "Halwais" – terms locals actually use.',
    },
    {
      icon: Zap,
      title: 'Voice Search',
      desc: 'Users can search by speaking (e.g., "Kam budget wala photographer").',
    },
    {
      icon: Shield,
      title: 'Trust Markers',
      desc: '"Aadhar Verified" badges for every vendor to prevent fraud.',
    },
  ];

  return (
    <div className="min-h-[600px] p-16 bg-gradient-to-br from-gray-50 to-white">
      <h2 className="text-5xl text-[#C41E3A] mb-4">The Product</h2>
      <p className="text-2xl text-gray-700 mb-12">Built for "Bharat" User Behavior</p>
      
      <div className="grid grid-cols-2 gap-6">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border-2 border-[#C41E3A]/20 shadow-md">
            <feature.icon className="w-12 h-12 text-[#C41E3A] mb-4" />
            <h3 className="text-xl text-[#8B1538] mb-3">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function BusinessModelSlide() {
  return (
    <div className="min-h-[600px] p-16 bg-white">
      <h2 className="text-5xl text-[#C41E3A] mb-4">Business Model</h2>
      <p className="text-2xl text-gray-700 mb-8">How We Make Money</p>
      
      <div className="bg-gradient-to-br from-[#FFF5E6] to-[#FFE8CC] p-6 rounded-xl mb-8 text-center">
        <p className="text-2xl text-[#8B1538]">Strategy: High Volume, Low Ticket Size (SaaS)</p>
      </div>

      <div className="space-y-6">
        <div className="bg-gradient-to-r from-[#C41E3A]/10 to-transparent p-6 rounded-xl border-l-4 border-[#C41E3A]">
          <h3 className="text-2xl text-[#8B1538] mb-3">Vendor Subscription</h3>
          <p className="text-gray-700">Vendors pay a small monthly fee (e.g., ₹499/month) to be listed. We do not take a commission on bookings (unlike OYO/Uber).</p>
        </div>
        
        <div className="bg-gradient-to-r from-[#C41E3A]/10 to-transparent p-6 rounded-xl border-l-4 border-[#C41E3A]">
          <h3 className="text-2xl text-[#8B1538] mb-3">Paid Ads (Boost)</h3>
          <p className="text-gray-700">Vendors pay extra to appear at the top of search results in their city.</p>
        </div>
        
        <div className="bg-gradient-to-r from-[#C41E3A]/10 to-transparent p-6 rounded-xl border-l-4 border-[#C41E3A]">
          <h3 className="text-2xl text-[#8B1538] mb-3">Lead Unlock</h3>
          <p className="text-gray-700">Vendors get 5 customer phone numbers for free, then pay ₹50 per lead after that.</p>
        </div>
      </div>
    </div>
  );
}

function GTMSlide() {
  return (
    <div className="min-h-[600px] p-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <h2 className="text-5xl text-[#C41E3A] mb-4">Go-To-Market Strategy</h2>
      <p className="text-2xl text-gray-700 mb-12">Hyper-Local Acquisition</p>
      
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-start gap-4">
            <div className="bg-[#C41E3A] text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
              <span className="text-xl">1</span>
            </div>
            <div>
              <h3 className="text-xl text-[#8B1538] mb-2">Phase 1 (The Hubs)</h3>
              <p className="text-gray-600">Launch in 3 major Tier-2 hubs (e.g., Nizamabad, Warangal, Medchal)</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-start gap-4">
            <div className="bg-[#C41E3A] text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
              <span className="text-xl">2</span>
            </div>
            <div>
              <h3 className="text-xl text-[#8B1538] mb-2">Onboarding</h3>
              <p className="text-gray-600">"Feet-on-street" team visits local markets to onboard offline vendors</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-start gap-4">
            <div className="bg-[#C41E3A] text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
              <span className="text-xl">3</span>
            </div>
            <div>
              <h3 className="text-xl text-[#8B1538] mb-2">Referral Program</h3>
              <p className="text-gray-600">Incentivize Beauty Parlors and Panditjis (Priests) to recommend the app to families</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-start gap-4">
            <div className="bg-[#C41E3A] text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
              <span className="text-xl">4</span>
            </div>
            <div>
              <h3 className="text-xl text-[#8B1538] mb-2">Content</h3>
              <p className="text-gray-600">Create "City Guides" on YouTube (e.g., "Best Budget Marriage Halls in Kanpur")</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CompetitiveSlide() {
  return (
    <div className="min-h-[600px] p-16 bg-white">
      <h2 className="text-5xl text-[#C41E3A] mb-4">Competitive Landscape</h2>
      <p className="text-2xl text-gray-700 mb-12">Why We Win</p>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#C41E3A] text-white">
              <th className="p-4 text-left"></th>
              <th className="p-4 text-left">Price Point</th>
              <th className="p-4 text-left">Language</th>
              <th className="p-4 text-left">Focus</th>
              <th className="p-4 text-left">Verification</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="p-4 text-[#8B1538]">WedMeGood</td>
              <td className="p-4 text-gray-600">High Price</td>
              <td className="p-4 text-gray-600">English First</td>
              <td className="p-4 text-gray-600">Metro Focus</td>
              <td className="p-4 text-gray-600">Selective</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-4 text-[#8B1538]">JustDial</td>
              <td className="p-4 text-gray-600">Mixed</td>
              <td className="p-4 text-gray-600">Multi-lingual</td>
              <td className="p-4 text-gray-600">General</td>
              <td className="p-4 text-gray-600">Unverified</td>
            </tr>
            <tr className="bg-gradient-to-r from-[#C41E3A]/10 to-transparent border-2 border-[#C41E3A]">
              <td className="p-4 text-[#C41E3A]">ShaadiVerse (Us)</td>
              <td className="p-4 text-[#8B1538]">Affordable</td>
              <td className="p-4 text-[#8B1538]">Multi-Lingual</td>
              <td className="p-4 text-[#8B1538]">Wedding-Only</td>
              <td className="p-4 text-[#8B1538]">Verified</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-8 bg-gradient-to-br from-[#FFF5E6] to-[#FFE8CC] p-6 rounded-xl">
        <h3 className="text-xl text-[#8B1538] mb-3">Our Moat</h3>
        <p className="text-gray-700">We own the verified data of the "unorganized" vendors that Google doesn't have</p>
      </div>
    </div>
  );
}

function TeamSlide() {
  return (
    <div className="min-h-[600px] p-16 bg-gradient-to-br from-gray-50 to-white">
      <h2 className="text-5xl text-[#C41E3A] mb-4">The Team</h2>
      <p className="text-2xl text-gray-700 mb-12">The Right Team to Build for Bharat</p>
      
      <div className="grid grid-cols-2 gap-8 mb-8">
        {/* Founder 1 */}
        <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#C41E3A]/30">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 shadow-lg border-2 border-[#C41E3A]/30">
              <Image 
                src="/bhavana.png"
                alt="Bhavana Sirpa"
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl text-[#8B1538] mb-1">Bhavana Sirpa</h3>
              <p className="text-gray-600">Co-Founder & CEO</p>
            </div>
          </div>
          <div className="space-y-3 mb-4">
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#C41E3A] mt-2"></div>
              <p className="text-gray-700">Growth Operations Lead, Cokpit</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#C41E3A] mt-2"></div>
              <p className="text-gray-700">Expert in GTM, Strategic Partnerships, Enterprise Sales</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#C41E3A] mt-2"></div>
              <p className="text-gray-700">Led 0→1 product-market strategy across India, APAC</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#C41E3A] mt-2"></div>
              <p className="text-gray-700">Former pageant titleholder, certified fitness coach</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600 italic">"Driving growth where innovation meets execution."</p>
          </div>
        </div>

        {/* Founder 2 */}
        <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#C41E3A]/30">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 shadow-lg border-2 border-[#C41E3A]/30">
              <Image 
                src="/shashank.png"
                alt="Shashank Jagannatham"
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl text-[#8B1538] mb-1">Shashank Jagannatham</h3>
              <p className="text-gray-600">Co-Founder & CTO</p>
            </div>
          </div>
          <div className="space-y-3 mb-4">
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#C41E3A] mt-2"></div>
              <p className="text-gray-700">Founder, Kampus & MenuOS</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#C41E3A] mt-2"></div>
              <p className="text-gray-700">MS CS in University of Florida</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#C41E3A] mt-2"></div>
              <p className="text-gray-700">Full-stack developer + product builder</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#C41E3A] mt-2"></div>
              <p className="text-gray-700">Judge at ShellHacks & DubHacks</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600 italic">"Never Stop Building"</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#FFF5E6] to-[#FFE8CC] p-6 rounded-xl">
        <h3 className="text-xl text-[#8B1538] mb-3">Why This Team Wins</h3>
        <p className="text-gray-700">Enterprise growth expertise meets prolific product execution. Bhavana delivers proven 0→1 scaling (Cokpit, GTM), while Shashank brings 25+ products and deep technical expertise for SMBs. Together, they combine strategic vision with relentless execution.</p>
      </div>
    </div>
  );
}

function AskSlide() {
  return (
    <div className="min-h-[600px] p-16 bg-white">
      <h2 className="text-5xl text-[#C41E3A] mb-4">The Ask</h2>
      <p className="text-2xl text-gray-700 mb-12">Join Us in Digitizing India's Biggest Celebration</p>
      
      <div className="bg-gradient-to-br from-[#C41E3A]/10 to-transparent p-8 rounded-xl border-2 border-[#C41E3A] mb-8 text-center">
        <h3 className="text-3xl text-[#C41E3A] mb-4">Raising ₹10 Lakhs</h3>
        <p className="text-xl text-gray-700">For 12 months of runway</p>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-[#C41E3A]/30 text-center shadow-md">
          <div className="text-5xl text-[#C41E3A] mb-2">50%</div>
          <p className="text-gray-700">Vendor Acquisition (Sales Team)</p>
        </div>
        
        <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-[#C41E3A]/30 text-center shadow-md">
          <div className="text-5xl text-[#C41E3A] mb-2">30%</div>
          <p className="text-gray-700">Product & Tech Development</p>
        </div>
        
        <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-[#C41E3A]/30 text-center shadow-md">
          <div className="text-5xl text-[#C41E3A] mb-2">20%</div>
          <p className="text-gray-700">Marketing</p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#FFF5E6] to-[#FFE8CC] p-8 rounded-xl text-center">
        <p className="text-2xl text-[#8B1538]">
          To become the default wedding app for the next <span className="border-b-4 border-[#C41E3A]">500 million Indians</span>
        </p>
      </div>
    </div>
  );
}


