"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  Inbox,
  Building,
  MessageSquare,
  User,
  Settings,
  HelpCircle,
  LogOut,
  ExternalLink,
  Bell,
  Search,
  ChevronDown,
  CheckCircle2,
  Users,
  GraduationCap,
  MapPin,
  Calendar,
  Bed,
  Check,
  Send,
  X,
  ShieldCheck,
  Eye,
  FileText,
  UserCheck,
  Star,
  Clock,
  CreditCard,
  Phone,
  Mail,
  Globe,
  Edit3,
  Lock,
  Camera,
  MessageCircle,
  CheckCheck,
  Bath,
  ArrowRight,
  Sparkles,
  BookOpen,
  KeyRound,
  ShieldAlert,
  Shield,
  EyeOff,
} from "lucide-react";

export default function ProviderDashboardPage() {
  const router = useRouter();
  const { isLoggedIn, login, logout, user } = useAuth();

  // Auto ensure auth state
  useEffect(() => {
    if (!isLoggedIn) {
      login();
    }
  }, [isLoggedIn, login]);

  // Main Navigation Tab
  const [activeNav, setActiveNav] = useState<"requests" | "options" | "messages" | "profile" | "settings">("requests");

  // Requests Tab Filter
  const [activeTab, setActiveTab] = useState<"open" | "inprogress" | "past">("open");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCityFilter, setSelectedCityFilter] = useState("All Cities");

  // Modals state for Requests flow
  const [selectedCohort, setSelectedCohort] = useState<any | null>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isSuccessViewOpen, setIsSuccessViewOpen] = useState(false);

  // Share form state
  const [shareData, setShareData] = useState({
    listingUrl: "",
    availability: "Yes, available",
    monthlyRent: "4800",
    message: "",
  });



  // Options Details Modal state (Screenshot 2)
  const [selectedOptionDetails, setSelectedOptionDetails] = useState<any | null>(null);

  // Profile Edit Mode state (Screenshot 5)
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileForm, setProfileForm] = useState({
    name: "Maria Rossi",
    company: "Florence Housing Group",
    email: "maria.rossi@florencehousing.it",
    phone: "+39 055 987 6543",
    website: "https://florencehousinggroup.it",
    preferredContact: "Whatsapp",
    bio: "Specialized in premium historical center apartments for American study abroad universities since 2012. Managing over 45 certified semester flats in Florence with dedicated English-speaking on-site maintenance.",
    operationalCities: ["Florence, Italy", "Rome, Italy", "Milan, Italy"],
    languages: ["English", "Italian", "Spanish"],
    vatNumber: "IT 06892340481",
    iban: "IT69 A 03069 09606 100000012345",
    rating: "4.9 / 5.0",
    cohortsHoused: "18 Cohorts",
    responseSpeed: "< 15 mins",
    escrowStatus: "Verified",
  });

  // Temporary state while in Edit Profile mode
  const [editFormData, setEditFormData] = useState(profileForm);

  // Settings Tabs state (Screenshots 1 to 4)
  const [settingsTab, setSettingsTab] = useState<"password" | "privacy" | "terms" | "help">("password");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordForm, setPasswordForm] = useState({ current: "", new: "", confirm: "" });
  const [passwordUpdated, setPasswordUpdated] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0); // First FAQ expanded as in screenshot 4

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordUpdated(true);
    setTimeout(() => setPasswordUpdated(false), 4000);
    setPasswordForm({ current: "", new: "", confirm: "" });
  };

  const faqs = [
    {
      q: "How does AlphaHousing verify study abroad student groups?",
      a: "We work directly with approved American universities and study abroad providers (such as IES Abroad, Syracuse University, CEA CAPA, and Bocconi). Every student group must submit academic verification, parent co-sign guarantee affidavits, and deposit funds in escrow prior to lease execution.",
    },
    {
      q: "When and how do housing providers receive rental payments?",
      a: "Payments are wired directly to your verified SEPA bank account via European bank escrow within 48 hours of confirmed student move-in and digital check-in inspection.",
    },
    {
      q: "Do I have to upload my entire apartment inventory?",
      a: "No! AlphaHousing operates on targeted matching. You only submit specific available links when you receive a matching student cohort request for your city.",
    },
    {
      q: "What happens if students cause property damage?",
      a: "Every booking includes a European escrow security deposit and bilateral parent co-sign guarantees. Damage claims supported by checkout inventory photos are reimbursed directly from escrow.",
    },
    {
      q: "Can I set custom utility limits or cleaning fee policies?",
      a: "Yes, you can specify utility caps, weekly cleaning schedules, or mandatory building rules in your option submission note.",
    },
  ];

  // Messages Chat state (Screenshot 3)
  const [activeChatId, setActiveChatId] = useState("ops-team");
  const [chatSearch, setChatSearch] = useState("");
  const [newMessageText, setNewMessageText] = useState("");
  const [conversations, setConversations] = useState([
    {
      id: "ops-team",
      name: "Alpha Housing Operations Team",
      role: "Sarah Jenkins • Italy Study Abroad Coordinator",
      time: "11:20 AM",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
      unread: false,
      lastMessage: "Perfect! As soon as you submit the option wit...",
      messages: [
        {
          id: "m1",
          sender: "Sarah Jenkins (Alpha Housing Adviser)",
          avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
          time: "Oct 3, 10:15 AM",
          text: "Ciao Maria! We just received a verified request from 4 Vanderbilt students studying in Florence this Spring. They specifically requested Santa Croce or Duomo area.",
          isMe: false,
        },
        {
          id: "m2",
          sender: "Maria Rossi",
          avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
          time: "Oct 3, 10:45 AM",
          text: "Hi Sarah, wonderful! I have our Via dei Benci 4-bedroom property which is completely available for those semester dates. I will share the link in the portal now.",
          isMe: true,
        },
        {
          id: "m3",
          sender: "Sarah Jenkins (Alpha Housing Adviser)",
          avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
          time: "Oct 3, 11:20 AM",
          text: "Perfect! As soon as you submit the option with availability and price, our team will review and share it directly with the students and their parents.",
          isMe: false,
        },
      ],
    },
    {
      id: "florence-advisory",
      name: "Florence Housing Advisory",
      role: "Marco Bellini • Local Advisor",
      time: "10:05 AM",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      unread: true,
      lastMessage: "Ciao Maria! Could you confirm if the stu...",
      messages: [
        {
          id: "m1",
          sender: "Marco Bellini",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
          time: "Oct 3, 10:05 AM",
          text: "Ciao Maria! Could you confirm if the student lease for Santa Croce includes AC for May?",
          isMe: false,
        },
      ],
    },
    {
      id: "lucas-ramirez",
      name: "Lucas Ramirez & Cohort",
      role: "Michigan Cohort Leader",
      time: "9:30 AM",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      unread: true,
      lastMessage: "Hello Maria! We saw the balcony view an...",
      messages: [
        {
          id: "m1",
          sender: "Lucas Ramirez",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
          time: "Oct 3, 9:30 AM",
          text: "Hello Maria! We saw the balcony view and we are so excited. Does the kitchen have a dishwasher?",
          isMe: false,
        },
      ],
    },
    {
      id: "barcelona-admin",
      name: "Barcelona Admissions Desk",
      role: "Elena Gomez • Program Coordinator",
      time: "Yesterday",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      unread: false,
      lastMessage: "Hola Maria, thank you for submitting the Eixa...",
      messages: [],
    },
    {
      id: "sophie-martin",
      name: "Sophie Martin & Cohort",
      role: "Paris Study Abroad Group",
      time: "Oct 1",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
      unread: false,
      lastMessage: "Awesome! We sent our parent guarantee lette...",
      messages: [],
    },
    {
      id: "paris-coord",
      name: "Paris Program Coordinator",
      role: "Antoine Leroy • French Programs",
      time: "Sep 30",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80",
      unread: false,
      lastMessage: "Bonjour Maria! All lease paperwork for Rue So...",
      messages: [],
    },
    {
      id: "escrow-desk",
      name: "Alpha Escrow & Payout Desk",
      role: "Finance & Compliance Operations",
      time: "Sep 28",
      avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80",
      unread: false,
      lastMessage: "Notice: Security escrow funds for Florence Coh...",
      messages: [],
    },
  ]);

  // Mock Requests Data
  const requests = [
    {
      id: "florence-1",
      city: "Florence, Italy",
      shortCity: "Florence",
      badge: "New",
      badgeType: "red",
      studentsCount: "4 students",
      dates: "Jan 8 – May 15, 2027",
      bedrooms: "4 bedrooms",
      maxPrice: "€5,200/month (max)",
      locationInfo: "Near IES Abroad Florence",
      receivedDate: "Received Oct 3, 2026",
      image: "/images/city-florence.jpg",
      cohortTitle: "IES ABROAD FLORENCE SEMESTER IN RENAISSANCE & ART",
      universityCohort: "Vanderbilt University & Boston College Cohort",
      campusAddress: "Piazza Lorenzo de' Medici, 50123 Firenze FI, Italy",
      commuteTarget: "Under 15 minutes walking distance to campus",
      maxRentPerStudent: "€1,300 / month",
      students: [
        {
          name: "Emily Chen",
          role: "Group Leader",
          major: "Economics & Italian",
          university: "Vanderbilt University",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
        },
        {
          name: "Sarah Miller",
          role: null,
          major: "Art History",
          university: "Vanderbilt University",
          avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
        },
        {
          name: "Maya Patel",
          role: null,
          major: "International Relations",
          university: "Boston College",
          avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80",
        },
        {
          name: "Chloe Dubois",
          role: null,
          major: "Communications",
          university: "Vanderbilt University",
          avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
        },
      ],
      preferences: [
        "High-speed Wi-Fi (100+ Mbps)",
        "Washing machine in unit",
        "Quiet study desks in each room",
        "Individual twin or double beds",
      ],
      advisorNote:
        "Group of 4 female junior undergraduates who have lived in shared campus apartments together. Non-smokers, responsible, study abroad advisor has verified academic standing.",
    },
    {
      id: "barcelona-1",
      city: "Barcelona, Spain",
      shortCity: "Barcelona",
      badge: "New",
      badgeType: "red",
      studentsCount: "3 students",
      dates: "Feb 1 – Jun 15, 2027",
      bedrooms: "3 bedrooms",
      maxPrice: "€4,800/month (max)",
      locationInfo: "City center / Eixample area",
      receivedDate: "Received Oct 1, 2026",
      image: "/images/city-barcelona.jpg",
      cohortTitle: "ESADE & UPF INTERNATIONAL BUSINESS COHORT",
      universityCohort: "University of Michigan Cohort",
      campusAddress: "Avinguda de Pedralbes, 60, 08034 Barcelona, Spain",
      commuteTarget: "Under 20 minutes by Metro or walking",
      maxRentPerStudent: "€1,600 / month",
      students: [
        {
          name: "David Ross",
          role: "Group Leader",
          major: "Finance",
          university: "Univ of Michigan",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
        },
        {
          name: "Liam Garcia",
          role: null,
          major: "Marketing",
          university: "Univ of Michigan",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
        },
        {
          name: "Lucas Meyer",
          role: null,
          major: "Data Science",
          university: "Univ of Michigan",
          avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80",
        },
      ],
      preferences: [
        "High-speed Wi-Fi (100+ Mbps)",
        "Balcony / Natural light",
        "Air conditioning",
        "Modern kitchen with dishwasher",
      ],
      advisorNote:
        "3 male junior students with full academic endorsement and verified parent financial guarantees.",
    },
    {
      id: "rome-1",
      city: "Rome, Italy",
      shortCity: "Rome",
      badge: "Contacted",
      badgeType: "yellow",
      studentsCount: "5 students",
      dates: "Jan 15 – May 30, 2027",
      bedrooms: "4 bedrooms",
      maxPrice: "€5,800/month (max)",
      locationInfo: "Trastevere / Near John Cabot Univ",
      receivedDate: "Received Oct 4, 2026",
      image: "/images/city-rome.jpg",
      cohortTitle: "JOHN CABOT UNIVERSITY HUMANITIES SEMESTER",
      universityCohort: "Temple University & Loyola Chicago Cohort",
      campusAddress: "Via della Lungara, 233, 00165 Roma RM, Italy",
      commuteTarget: "Walking distance to Tiber campus",
      maxRentPerStudent: "€1,160 / month",
      students: [
        {
          name: "Olivia Taylor",
          role: "Group Leader",
          major: "Classics",
          university: "Temple University",
          avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
        },
        {
          name: "Jessica Alba",
          role: null,
          major: "History",
          university: "Loyola Chicago",
          avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
        },
      ],
      preferences: [
        "High-speed Wi-Fi",
        "2+ Bathrooms essential",
        "Furnished kitchen",
        "Proximity to John Cabot",
      ],
      advisorNote:
        "Verified student group with clean record and verified Italian study visas in progress.",
    },
  ];

  // Mock Shared Options Data (Screenshot 1)
  const sharedOptions = [
    {
      id: "opt-1",
      cityCohort: "Barcelona, Spain • 3 students cohort",
      statusBadge: "Alpha Reviewing",
      statusType: "amber",
      title: "3BR Property near City center / Eixample area",
      priceSub: "€4,400/mo • Submitted Just now",
      listingLink: "https://example.com/barcelona-3br",
      beds: "3 Beds",
      image: "/images/apartment-florence.jpg",
      advisorNote: null,
    },
    {
      id: "opt-2",
      cityCohort: "Florence, Italy • 4 students cohort",
      statusBadge: "Alpha Reviewing",
      statusType: "amber",
      title: "4BR Property near Near IES Abroad Florence",
      priceSub: "€4,800/mo • Submitted Just now",
      listingLink: "https://example.com/florence-4br",
      beds: "4 Beds",
      image: "/images/apartment-florence.jpg",
      advisorNote: null,
    },
    {
      id: "opt-3",
      cityCohort: "Florence, Italy • 4 students cohort",
      statusBadge: "Presented to Students",
      statusType: "pink",
      title: "Palazzo Santa Croce — 4 Bed Restored Historic Apartment",
      priceSub: "€4,900/mo • Submitted Oct 2, 2026",
      listingLink: "https://example.com/palazzo-santa-croce",
      beds: "4 Beds",
      image: "/images/apartment-florence.jpg",
      advisorNote:
        "Advisor Note: The student group loves the terrace and has shortlisted this as their #1 choice! Alpha advisor is coordinating lease draft.",
      details: {
        address: "Via de' Benci 18, Santa Croce, 50122 Firenze FI",
        rent: "€4,900 /mo",
        bedrooms: "4 Beds",
        bathrooms: "2 Baths",
        depositEscrow: "€2,000",
        submissionNote:
          "Includes weekly cleaning and all utilities. Located 7 min walk from Duomo and 5 min walk from IES Abroad.",
        amenities: [
          "Terrace with view",
          "Air conditioning",
          "High-speed Wi-Fi",
          "Washing Machine",
          "Dishwasher",
          "Elevator",
          "Dedicated desks",
        ],
        feedback:
          "The student group loves the terrace and has shortlisted this as their #1 choice! Alpha advisor is coordinating lease draft.",
        submittedDate: "Submitted Oct 2, 2026",
      },
    },
    {
      id: "opt-4",
      cityCohort: "Barcelona, Spain • 3 students cohort",
      statusBadge: "Alpha Reviewing",
      statusType: "amber",
      title: "Eixample Dreta Sunny Penthouse with Balcony",
      priceSub: "€4,600/mo • Submitted Oct 1, 2026",
      listingLink: "https://example.com/eixample-penthouse",
      beds: "3 Beds",
      image: "/images/apartment-florence.jpg",
      advisorNote:
        "Advisor Note: Alpha team has reviewed documentation and will present to Lucas Ramirez cohort tomorrow.",
    },
    {
      id: "opt-5",
      cityCohort: "Paris, France • 2 students cohort",
      statusBadge: "Group Housed!",
      statusType: "purple",
      title: "Latin Quarter 2BR Duplex near Sorbonne",
      priceSub: "€3,400/mo • Submitted Sep 30, 2026",
      listingLink: "https://example.com/latin-quarter-duplex",
      beds: "2 Beds",
      image: "/images/apartment-florence.jpg",
      advisorNote:
        "Advisor Note: Matched & Leased! Students confirmed agreement on Oct 3. Deposit transferred to escrow.",
    },
  ];

  // Handlers for Requests Modal
  const handleOpenDetails = (cohort: any) => {
    setSelectedCohort(cohort);
    setIsDetailsModalOpen(true);
  };

  const handleOpenShare = (cohort: any) => {
    setSelectedCohort(cohort);
    setIsDetailsModalOpen(false);
    setIsShareModalOpen(true);
  };

  const handleSendOption = (e: React.FormEvent) => {
    e.preventDefault();
    setIsShareModalOpen(false);
    setIsSuccessViewOpen(true);
  };

  // Handlers for Options Details Modal
  const handleOpenOptionDetails = (option: any) => {
    setSelectedOptionDetails(option);
  };

  // Handler for Sending Message
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessageText.trim()) return;

    setConversations((prev) =>
      prev.map((c) => {
        if (c.id === activeChatId) {
          return {
            ...c,
            lastMessage: newMessageText,
            time: "Just now",
            messages: [
              ...c.messages,
              {
                id: `m_${Date.now()}`,
                sender: profileForm.name,
                avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
                time: "Just now",
                text: newMessageText,
                isMe: true,
              },
            ],
          };
        }
        return c;
      })
    );
    setNewMessageText("");
  };

  // Profile Save Handlers
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setProfileForm(editFormData);
    setIsEditingProfile(false);
  };

  const toggleEditCity = (city: string) => {
    setEditFormData((prev) => ({
      ...prev,
      operationalCities: prev.operationalCities.includes(city)
        ? prev.operationalCities.filter((c) => c !== city)
        : [...prev.operationalCities, city],
    }));
  };

  const toggleEditLanguage = (lang: string) => {
    setEditFormData((prev) => ({
      ...prev,
      languages: prev.languages.includes(lang)
        ? prev.languages.filter((l) => l !== lang)
        : [...prev.languages, lang],
    }));
  };

  // Filtered Requests
  const filteredRequests = requests.filter((r) => {
    if (selectedCityFilter !== "All Cities" && !r.city.includes(selectedCityFilter)) {
      return false;
    }
    if (
      searchQuery &&
      !r.city.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !r.cohortTitle.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !r.locationInfo.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  const activeChat = conversations.find((c) => c.id === activeChatId) || conversations[0];

  return (
    <div className="min-h-screen flex bg-[#F8FAFC] dark:bg-[#070C18] text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200">
      {/* ========================================================================= */}
      {/* 1. LEFT SIDEBAR                                                           */}
      {/* ========================================================================= */}
      <aside className="w-64 bg-[#080E1E] text-slate-300 flex flex-col justify-between shrink-0 min-h-screen p-5 border-r border-slate-800">
        <div>
          {/* Logo */}
          <div className="pt-2 pb-8 px-2 flex items-center">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <svg
                className="w-7 h-7 shrink-0"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 30L16 10L23 23L14 30H6Z" fill="#E11D48" />
                <path d="M16 10L25 5L34 22L25 25L16 10Z" fill="#F59E0B" />
                <path d="M23 23L34 22L31 34L20 32L23 23Z" fill="#06B6D4" />
                <path d="M14 30L23 23L20 32L12 35L14 30Z" fill="#8B5CF6" />
              </svg>
              <div className="flex flex-col leading-none">
                <div className="flex items-baseline text-lg font-extrabold tracking-tight">
                  <span className="text-white">ALPHA</span>
                  <span className="text-[#E11D48] ml-0.5">Housing</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Nav Items */}
          <nav className="space-y-1.5">
            {/* Housing Requests */}
            <button
              onClick={() => setActiveNav("requests")}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${activeNav === "requests"
                ? "bg-[#E11D48] text-white shadow-sm"
                : "text-slate-400 hover:text-white hover:bg-slate-900/60"
                }`}
            >
              <div className="flex items-center gap-2.5">
                <Inbox className="w-4 h-4" />
                <span>Housing Requests</span>
              </div>
              <span
                className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${activeNav === "requests"
                  ? "bg-white text-[#E11D48]"
                  : "bg-slate-800 text-slate-300"
                  }`}
              >
                2
              </span>
            </button>

            {/* My Options */}
            <button
              onClick={() => setActiveNav("options")}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${activeNav === "options"
                ? "bg-[#E11D48] text-white shadow-sm"
                : "text-slate-400 hover:text-white hover:bg-slate-900/60"
                }`}
            >
              <div className="flex items-center gap-2.5">
                <Building className="w-4 h-4" />
                <span>My Options</span>
              </div>
              <span
                className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${activeNav === "options"
                  ? "bg-white text-[#E11D48]"
                  : "bg-slate-800 text-slate-300"
                  }`}
              >
                5
              </span>
            </button>

            {/* Messages */}
            <button
              onClick={() => setActiveNav("messages")}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${activeNav === "messages"
                ? "bg-[#E11D48] text-white shadow-sm"
                : "text-slate-400 hover:text-white hover:bg-slate-900/60"
                }`}
            >
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4" />
                <span>Messages</span>
              </div>
              <span className="px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-[#E11D48] text-white">
                2
              </span>
            </button>

            {/* My Profile */}
            <button
              onClick={() => {
                setActiveNav("profile");
                setIsEditingProfile(false);
              }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${activeNav === "profile"
                ? "bg-[#E11D48] text-white shadow-sm"
                : "text-slate-400 hover:text-white hover:bg-slate-900/60"
                }`}
            >
              <div className="flex items-center gap-2.5">
                <User className="w-4 h-4" />
                <span>My Profile</span>
              </div>
            </button>

            {/* Section: ACCOUNT & LEGAL */}
            <div className="pt-6 pb-2 px-3 text-[10px] font-bold uppercase tracking-wider text-slate-500">
              ACCOUNT &amp; LEGAL
            </div>

            <button
              onClick={() => setActiveNav("settings")}
              className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${activeNav === "settings"
                ? "bg-[#E11D48] text-white"
                : "text-slate-400 hover:text-white hover:bg-slate-900/60"
                }`}
            >
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </button>
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="pt-6 border-t border-slate-800/80 space-y-1">
          <div className="flex items-center justify-between px-3 py-1.5 text-xs text-slate-400">
            <span className="text-[11px] font-medium text-slate-400">Theme</span>
            <ThemeToggle />
          </div>
          <button
            type="button"
            onClick={() => {
              setActiveNav("settings");
              setSettingsTab("help");
            }}
            className="w-full flex items-center gap-2.5 px-3 py-2 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <HelpCircle className="w-4 h-4" />
            <span>Help &amp; Guidelines</span>
          </button>
          <button
            type="button"
            onClick={() => {
              logout();
              router.push("/providers");
            }}
            className="w-full flex items-center gap-2.5 px-3 py-2 text-xs text-slate-400 hover:text-[#E11D48] transition-colors cursor-pointer text-left"
          >
            <LogOut className="w-4 h-4" />
            <span>Log Out</span>
          </button>
        </div>
      </aside>

      {/* ========================================================================= */}
      {/* 2. MAIN DASHBOARD CONTENT AREA                                            */}
      {/* ========================================================================= */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Top Header Row */}
        <header className="h-16 bg-white dark:bg-[#090F1E] border-b border-slate-200 dark:border-slate-800 px-6 sm:px-8 flex items-center justify-between sticky top-0 z-30 shadow-2xs transition-colors duration-200">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-500">
            <span>Provider Portal</span>
            <span>/</span>
            <span className="font-semibold text-slate-800 dark:text-slate-200 capitalize">
              {activeNav === "requests"
                ? "Requests"
                : activeNav === "options"
                  ? "Options"
                  : activeNav === "messages"
                    ? "Messages"
                    : activeNav === "profile"
                      ? "Profile"
                      : "Options"}
            </span>
          </div>

          {/* Right Profile & Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            <ThemeToggle />

            <Link
              href="/providers"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-rose-200 dark:border-rose-900/60 bg-rose-50/70 dark:bg-rose-950/30 text-[#E11D48] text-xs font-semibold hover:bg-rose-100/60 dark:hover:bg-rose-900/40 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Public Website</span>
            </Link>

            {/* Notification Bell */}
            <div className="relative p-1.5 text-slate-400 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer">
              <Bell className="w-4.5 h-4.5" />
              <span className="w-2 h-2 rounded-full bg-[#E11D48] absolute top-1 right-1" />
            </div>

            {/* User Profile */}
            <div
              onClick={() => {
                setActiveNav("profile");
                setIsEditingProfile(false);
              }}
              className="flex items-center gap-2.5 pl-2 border-l border-slate-200 dark:border-slate-800 cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden relative bg-slate-200 dark:bg-slate-700 ring-2 ring-[#E11D48]/20">
                <Image
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80"
                  alt={profileForm.name}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                  {profileForm.name}
                </span>
                <span className="text-[10px] text-slate-400 dark:text-slate-400 leading-tight">
                  {profileForm.company}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* ========================================================================= */}
        {/* TAB 1: HOUSING REQUESTS (Original Dashboard)                              */}
        {/* ========================================================================= */}
        {activeNav === "requests" && (
          <main className="p-6 sm:p-8 max-w-6xl w-full mx-auto space-y-6">
            {/* Welcome Heading */}
            <div>
              <h1 className="text-2xl sm:text-[28px] font-extrabold text-slate-900 dark:text-white tracking-tight">
                Welcome, Maria
              </h1>
              <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 mt-1">
                Here are your housing requests from student groups.
              </p>
            </div>

            {/* 4 Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-[#0E172A] rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.03)] flex items-center gap-3.5 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-500 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xl font-extrabold text-slate-900 dark:text-white block leading-tight">
                    2
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">New Requests</span>
                </div>
              </div>

              <div className="bg-white dark:bg-[#0E172A] rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.03)] flex items-center gap-3.5 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xl font-extrabold text-slate-900 dark:text-white block leading-tight">
                    2
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">Active Inquiries</span>
                </div>
              </div>

              <div className="bg-white dark:bg-[#0E172A] rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.03)] flex items-center gap-3.5 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xl font-extrabold text-slate-900 dark:text-white block leading-tight">
                    3
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">Options Shared</span>
                </div>
              </div>

              <div className="bg-white dark:bg-[#0E172A] rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.03)] flex items-center gap-3.5 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xl font-extrabold text-slate-900 dark:text-white block leading-tight">
                    3
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">Groups Housed</span>
                </div>
              </div>
            </div>

            {/* Filter Bar & Search */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setActiveTab("open")}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${activeTab === "open"
                    ? "bg-[#E11D48] text-white shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                >
                  <span>Open Requests</span>
                  <span
                    className={`w-4 h-4 rounded-full text-[10px] font-bold flex items-center justify-center ${activeTab === "open"
                      ? "bg-white text-[#E11D48]"
                      : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                      }`}
                  >
                    2
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab("inprogress")}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${activeTab === "inprogress"
                    ? "bg-[#E11D48] text-white"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                >
                  In Progress
                </button>

                <button
                  onClick={() => setActiveTab("past")}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${activeTab === "past"
                    ? "bg-[#E11D48] text-white"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                >
                  Past Requests
                </button>
              </div>

              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Search city, program..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-8 pr-3 py-1.5 text-xs bg-white dark:bg-[#0E172A] border border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-[#E11D48]/30 w-44 sm:w-56"
                  />
                </div>

                <div className="relative">
                  <select
                    value={selectedCityFilter}
                    onChange={(e) => setSelectedCityFilter(e.target.value)}
                    className="appearance-none pl-3 pr-7 py-1.5 text-xs bg-white dark:bg-[#0E172A] border border-slate-200 dark:border-slate-800 rounded-lg text-slate-700 dark:text-slate-300 font-medium focus:outline-none cursor-pointer"
                  >
                    <option value="All Cities">All Cities</option>
                    <option value="Florence">Florence</option>
                    <option value="Barcelona">Barcelona</option>
                    <option value="Rome">Rome</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Requests List Cards */}
            <div className="space-y-4">
              {filteredRequests.map((req) => (
                <div
                  key={req.id}
                  className="bg-white dark:bg-[#0E172A] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-4 sm:p-5 shadow-2xs hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0">
                      <Image
                        src={req.image}
                        alt={req.city}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                          {req.city}
                        </h3>
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${req.badgeType === "red"
                            ? "bg-rose-50 dark:bg-rose-950/50 text-[#E11D48]"
                            : "bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400"
                            }`}
                        >
                          {req.badge}
                        </span>
                      </div>

                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {req.studentsCount} • {req.dates}
                      </p>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 dark:text-slate-300 pt-0.5">
                        <div className="flex items-center gap-1">
                          <Bed className="w-3.5 h-3.5 text-slate-400" />
                          <span>{req.bedrooms}</span>
                        </div>
                        <div className="font-bold text-slate-900 dark:text-white">
                          {req.maxPrice}
                        </div>
                        <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          <span>{req.locationInfo}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center gap-2 shrink-0">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleOpenDetails(req)}
                        className="px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => handleOpenShare(req)}
                        className="px-4 py-2 text-xs font-semibold text-white bg-[#E11D48] hover:bg-[#c9183d] rounded-xl shadow-xs transition-all cursor-pointer active:scale-95"
                      >
                        Share an Option &gt;
                      </button>
                    </div>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500">
                      {req.receivedDate}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </main>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: MY OPTIONS (Screenshot 1: "My Shared Options")                     */}
        {/* ========================================================================= */}
        {activeNav === "options" && (
          <main className="p-6 sm:p-8 max-w-6xl w-full mx-auto space-y-6 animate-in fade-in duration-150">
            {/* Header with Title & Action */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-[28px] font-extrabold text-slate-900 dark:text-white tracking-tight">
                  My Shared Options
                </h1>
                <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 mt-1">
                  Properties and links you have submitted for active student group requests.
                </p>
              </div>

              <button
                onClick={() => setActiveNav("requests")}
                className="px-5 py-2.5 rounded-full bg-[#E11D48] hover:bg-[#be123c] text-white text-xs font-semibold shadow-xs hover:shadow transition-all self-start sm:self-auto cursor-pointer active:scale-95"
              >
                View Open Housing Requests
              </button>
            </div>

            {/* List of 5 Shared Options */}
            <div className="space-y-4">
              {sharedOptions.map((opt) => (
                <div
                  key={opt.id}
                  className="bg-white dark:bg-[#0E172A] rounded-2xl border border-slate-200/90 dark:border-slate-800 p-4 sm:p-5 shadow-2xs hover:shadow-md transition-all space-y-3"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    {/* Left: Thumbnail & Details */}
                    <div className="flex items-start gap-4">
                      {/* Image Thumbnail with Beds Badge */}
                      <div className="relative w-24 h-24 sm:w-28 sm:h-24 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0">
                        <Image
                          src={opt.image}
                          alt={opt.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute bottom-1.5 left-1.5 px-2 py-0.5 rounded-md bg-slate-950/80 backdrop-blur-xs text-white text-[10px] font-bold flex items-center gap-1">
                          <Bed className="w-3 h-3 text-slate-300" />
                          <span>{opt.beds}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="space-y-1 min-w-0">
                        {/* Line 1: Cohort & Status Badge */}
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-slate-400" />
                            {opt.cityCohort}
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${opt.statusType === "amber"
                              ? "bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-900/60"
                              : opt.statusType === "pink"
                                ? "bg-rose-50 dark:bg-rose-950/40 text-[#E11D48] border border-rose-200 dark:border-rose-900/60"
                                : "bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-900/60"
                              }`}
                          >
                            {opt.statusBadge}
                          </span>
                        </div>

                        {/* Line 2: Property Title */}
                        <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base leading-snug">
                          {opt.title}
                        </h3>

                        {/* Line 3: Price & Link */}
                        <div className="flex flex-wrap items-center gap-x-2 text-xs text-slate-500 dark:text-slate-400 pt-0.5">
                          <span className="font-bold text-slate-900 dark:text-white">
                            {opt.priceSub.split(" • ")[0]}
                          </span>
                          <span>•</span>
                          <span>{opt.priceSub.split(" • ")[1]}</span>
                          <span>•</span>
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              if (opt.details) handleOpenOptionDetails(opt);
                            }}
                            className="text-[#E11D48] hover:underline font-medium inline-flex items-center gap-1"
                          >
                            <ExternalLink className="w-3 h-3" /> View Listing Link
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Right: Actions */}
                    <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                      <button
                        onClick={() => {
                          if (opt.details) {
                            handleOpenOptionDetails(opt);
                          } else {
                            // Default details modal
                            handleOpenOptionDetails({
                              ...opt,
                              details: {
                                address: "Eixample Dreta, 08009 Barcelona, Spain",
                                rent: "€4,400 /mo",
                                bedrooms: opt.beds,
                                bathrooms: "2 Baths",
                                depositEscrow: "€1,800",
                                submissionNote:
                                  "Centrally located student flat with elevator and furnished terrace.",
                                amenities: [
                                  "Terrace with view",
                                  "Air conditioning",
                                  "High-speed Wi-Fi",
                                  "Washing Machine",
                                ],
                                feedback: "Alpha advisor is currently reviewing photos.",
                                submittedDate: "Submitted recently",
                              },
                            });
                          }
                        }}
                        className="px-4 py-2 text-xs font-semibold text-white bg-[#E11D48] hover:bg-[#be123c] rounded-xl shadow-xs transition-all cursor-pointer active:scale-95"
                      >
                        View Details
                      </button>

                      <button
                        onClick={() => {
                          setActiveNav("messages");
                        }}
                        className="px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                        <span>Discuss Request</span>
                      </button>
                    </div>
                  </div>

                  {/* Advisor Note (Screenshot 1 cards 3, 4, 5) */}
                  {opt.advisorNote && (
                    <div className="p-3 rounded-xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-100/80 dark:border-purple-900/40 text-[11px] text-purple-900 dark:text-purple-300 leading-relaxed flex items-start gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                      <span>{opt.advisorNote}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </main>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: MESSAGES (Screenshot 3: Messenger Interface)                      */}
        {/* ========================================================================= */}
        {activeNav === "messages" && (
          <main className="p-4 sm:p-6 max-w-6xl w-full mx-auto animate-in fade-in duration-150">
            <div className="bg-white dark:bg-[#0E172A] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col md:flex-row h-[78vh] min-h-[580px] transition-colors">
              {/* Left Pane: Conversation List */}
              <div className="w-full md:w-80 lg:w-92 border-r border-slate-200 dark:border-slate-800 flex flex-col shrink-0">
                {/* Header */}
                <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h2 className="text-base font-extrabold text-slate-900 dark:text-white">
                      Messages
                    </h2>
                    <span className="text-xs text-slate-400 dark:text-slate-500">
                      {conversations.length} chats
                    </span>
                  </div>
                </div>

                {/* Search */}
                <div className="p-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="Search..."
                      value={chatSearch}
                      onChange={(e) => setChatSearch(e.target.value)}
                      className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-[#E11D48]"
                    />
                  </div>
                </div>

                {/* List Items */}
                <div className="flex-1 overflow-y-auto divide-y divide-slate-100/80 dark:divide-slate-800">
                  {conversations
                    .filter(
                      (c) =>
                        c.name.toLowerCase().includes(chatSearch.toLowerCase()) ||
                        c.role.toLowerCase().includes(chatSearch.toLowerCase())
                    )
                    .map((conv) => {
                      const isSelected = conv.id === activeChatId;
                      return (
                        <button
                          key={conv.id}
                          onClick={() => {
                            setActiveChatId(conv.id);
                          }}
                          className={`w-full p-3.5 text-left flex items-start gap-3 transition-colors cursor-pointer ${isSelected
                            ? "bg-rose-50/50 dark:bg-rose-950/30 border-l-4 border-l-[#E11D48]"
                            : "hover:bg-slate-50 dark:hover:bg-slate-800/50"
                            }`}
                        >
                          <div className="w-10 h-10 rounded-full overflow-hidden relative bg-slate-200 dark:bg-slate-700 shrink-0">
                            <Image
                              src={conv.avatar}
                              alt={conv.name}
                              fill
                              unoptimized
                              className="object-cover"
                            />
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between">
                              <h4
                                className={`text-xs truncate ${isSelected
                                  ? "font-extrabold text-slate-900 dark:text-white"
                                  : "font-semibold text-slate-800 dark:text-slate-200"
                                  }`}
                              >
                                {conv.name}
                              </h4>
                              <span className="text-[10px] text-slate-400 dark:text-slate-500 shrink-0 ml-1">
                                {conv.time}
                              </span>
                            </div>
                            <div className="flex items-center justify-between mt-0.5">
                              <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                                {conv.lastMessage}
                              </p>
                              {conv.unread && (
                                <span className="w-2 h-2 rounded-full bg-[#E11D48] shrink-0 ml-1.5" />
                              )}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                </div>
              </div>

              {/* Right Pane: Active Chat Conversation */}
              <div className="flex-1 flex flex-col min-w-0 bg-slate-50/40 dark:bg-[#070C18]/60">
                {/* Chat Header */}
                <div className="p-4 bg-white dark:bg-[#0E172A] border-b border-slate-200 dark:border-slate-800 flex items-center justify-between shrink-0 transition-colors">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-full overflow-hidden relative bg-slate-200 dark:bg-slate-700 shrink-0">
                      <Image
                        src={activeChat.avatar}
                        alt={activeChat.name}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                        {activeChat.name}
                      </h3>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                        {activeChat.role}
                      </p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold border border-emerald-200 dark:border-emerald-900/60 shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified Channel</span>
                  </div>
                </div>

                {/* Messages Stream */}
                <div className="flex-1 p-5 overflow-y-auto space-y-4">
                  {activeChat.messages && activeChat.messages.length > 0 ? (
                    activeChat.messages.map((m: any) => (
                      <div
                        key={m.id}
                        className={`flex flex-col ${m.isMe ? "items-end" : "items-start"
                          }`}
                      >
                        <div
                          className={`max-w-md sm:max-w-lg p-3.5 rounded-2xl text-xs sm:text-[13px] leading-relaxed shadow-2xs ${m.isMe
                            ? "bg-[#E11D48] text-white rounded-br-xs"
                            : "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200/90 dark:border-slate-700 rounded-bl-xs"
                            }`}
                        >
                          {m.text}
                        </div>
                        <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 px-1">
                          {m.sender} • {m.time} {m.isMe && "✓✓"}
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-12 text-slate-400 dark:text-slate-500 text-xs">
                      No messages yet in this channel. Send a note to connect!
                    </div>
                  )}
                </div>

                {/* Input Bar */}
                <form
                  onSubmit={handleSendMessage}
                  className="p-3.5 bg-white dark:bg-[#0E172A] border-t border-slate-200 dark:border-slate-800 flex items-center gap-3 shrink-0 transition-colors"
                >
                  <input
                    type="text"
                    placeholder="Type a message..."
                    value={newMessageText}
                    onChange={(e) => setNewMessageText(e.target.value)}
                    className="flex-1 px-4 py-2.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-[#E11D48]"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-[#E11D48] hover:bg-[#be123c] text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-all cursor-pointer active:scale-95"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send</span>
                  </button>
                </form>
              </div>
            </div>
          </main>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: PROFILE & EDIT PROFILE (Screenshots 4 & 5)                        */}
        {/* ========================================================================= */}
        {activeNav === "profile" && (
          <main className="p-6 sm:p-8 max-w-6xl w-full mx-auto space-y-6 animate-in fade-in duration-150">
            {/* HERO CARD (Present in both Profile and Edit Profile) */}
            <div className="bg-gradient-to-r from-rose-50/80 via-white to-amber-50/40 dark:from-[#0E172A] dark:via-[#0E172A] dark:to-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-800 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-6 transition-colors">
              {/* Left Profile Details */}
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-700 relative ring-3 ring-white dark:ring-slate-800 shadow-md">
                    <Image
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80"
                      alt={profileForm.name}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                    {isEditingProfile && (
                      <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center text-white text-[10px] font-bold gap-1 cursor-pointer">
                        <Camera className="w-3.5 h-3.5" />
                        <span>Change</span>
                      </div>
                    )}
                  </div>
                  <span className="absolute -bottom-1 -right-1 px-1.5 py-0.2 rounded bg-[#E11D48] text-white text-[9px] font-black shadow-xs">
                    PQ
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {profileForm.name}
                    </h1>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 text-[10.5px] font-bold border border-emerald-200 dark:border-emerald-900/60 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Verified Alpha Partner
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                    {profileForm.company} • Florence, Italy
                  </p>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400 pt-1">
                    <span className="flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5 text-slate-400" />
                      {profileForm.email}
                    </span>
                    <span className="flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-slate-400" />
                      {profileForm.phone}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Action Buttons */}
              <div className="flex items-center gap-2.5 self-start md:self-center">
                {isEditingProfile ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setIsEditingProfile(false)}
                      className="px-4 py-2 rounded-full border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                    >
                      ✕ Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleSaveProfile}
                      className="px-5 py-2 rounded-full bg-[#E11D48] hover:bg-[#be123c] text-white text-xs font-semibold shadow-xs transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Save Changes</span>
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => {
                        setEditFormData(profileForm);
                        setIsEditingProfile(true);
                      }}
                      className="px-5 py-2.5 rounded-full bg-[#E11D48] hover:bg-[#be123c] text-white text-xs font-semibold shadow-xs transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Edit Profile</span>
                    </button>
                    <button
                      type="button"
                      className="px-4 py-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <Lock className="w-3.5 h-3.5 text-slate-400" />
                      <span>Security</span>
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* 4 STATS PILLS GRID */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-[#0E172A] rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-2xs flex items-center gap-3.5 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-[#E11D48] flex items-center justify-center shrink-0">
                  <Star className="w-5 h-5 fill-[#E11D48]/20" />
                </div>
                <div>
                  <span className="text-lg font-extrabold text-slate-900 dark:text-white block leading-tight">
                    {profileForm.rating}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">Provider Rating</span>
                </div>
              </div>

              <div className="bg-white dark:bg-[#0E172A] rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-2xs flex items-center gap-3.5 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-lg font-extrabold text-slate-900 dark:text-white block leading-tight">
                    {profileForm.cohortsHoused}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">Students Housed</span>
                </div>
              </div>

              <div className="bg-white dark:bg-[#0E172A] rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-2xs flex items-center gap-3.5 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-lg font-extrabold text-slate-900 dark:text-white block leading-tight">
                    {profileForm.responseSpeed}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">Average Response</span>
                </div>
              </div>

              <div className="bg-white dark:bg-[#0E172A] rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-2xs flex items-center gap-3.5 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-lg font-extrabold text-slate-900 dark:text-white block leading-tight">
                    {profileForm.escrowStatus}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">SEPA Escrow Account</span>
                </div>
              </div>
            </div>

            {/* BODY SECTION: VIEW PROFILE (Screenshot 4) vs EDIT PROFILE (Screenshot 5) */}
            {!isEditingProfile ? (
              /* VIEW PROFILE MODE */
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left Column (7 cols) */}
                <div className="lg:col-span-7 space-y-5">
                  {/* About Florence Housing Group */}
                  <div className="bg-white dark:bg-[#0E172A] rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800 shadow-2xs space-y-2 transition-colors">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 flex items-center gap-1.5">
                      <span># About {profileForm.company}</span>
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      {profileForm.bio}
                    </p>
                  </div>

                  {/* Operational Cities */}
                  <div className="bg-white dark:bg-[#0E172A] rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800 shadow-2xs space-y-3 transition-colors">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>Operational Cities</span>
                      </h3>
                      <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                        {profileForm.operationalCities.length} Service Areas
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      {profileForm.operationalCities.map((city) => (
                        <span
                          key={city}
                          className="px-3 py-1.5 rounded-full bg-rose-50 dark:bg-rose-950/40 text-[#E11D48] text-xs font-semibold border border-rose-200 dark:border-rose-900/60 flex items-center gap-1"
                        >
                          <Check className="w-3 h-3 text-[#E11D48]" />
                          <span>{city}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Legal & Escrow Payout Information */}
                  <div className="bg-white dark:bg-[#0E172A] rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800 shadow-2xs space-y-3 transition-colors">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-slate-400" />
                      <span>Legal &amp; Escrow Payout Information</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                        <span className="text-[10px] uppercase font-bold text-slate-400 block">
                          VAT / Tax ID / Partita IVA
                        </span>
                        <span className="text-xs font-bold text-slate-900 dark:text-white mt-0.5 block font-mono">
                          {profileForm.vatNumber}
                        </span>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                        <span className="text-[10px] uppercase font-bold text-slate-400 block">
                          SEPA Escrow IBAN
                        </span>
                        <span className="text-xs font-bold text-slate-900 dark:text-white mt-0.5 block font-mono truncate">
                          {profileForm.iban}
                        </span>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5 pt-1">
                      <CreditCard className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>
                        Payments for accepted housing options are wired directly into this European escrow account on student move-in.
                      </span>
                    </p>
                  </div>
                </div>

                {/* Right Column (5 cols) */}
                <div className="lg:col-span-5 space-y-5">
                  {/* Contact Details */}
                  <div className="bg-white dark:bg-[#0E172A] rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800 shadow-2xs space-y-3.5 transition-colors">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400">
                      Contact Details
                    </h3>

                    <div className="space-y-3 text-xs">
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase font-bold">
                          Primary Contact
                        </span>
                        <span className="font-semibold text-slate-900 dark:text-white mt-0.5 block">
                          {profileForm.name}
                        </span>
                      </div>

                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase font-bold">
                          Email Address
                        </span>
                        <span className="font-semibold text-slate-900 dark:text-white mt-0.5 block">
                          {profileForm.email}
                        </span>
                      </div>

                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase font-bold">
                          Direct / WhatsApp
                        </span>
                        <span className="font-semibold text-slate-900 dark:text-white mt-0.5 block">
                          {profileForm.phone}
                        </span>
                      </div>

                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase font-bold">
                          Portfolio Website
                        </span>
                        <a
                          href={profileForm.website}
                          target="_blank"
                          rel="noreferrer"
                          className="font-semibold text-[#E11D48] hover:underline mt-0.5 block"
                        >
                          {profileForm.website.replace("https://", "")}
                        </a>
                      </div>

                      <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                          Preferred Channel:
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-[11px] font-bold">
                          {profileForm.preferredContact}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Languages Spoken */}
                  <div className="bg-white dark:bg-[#0E172A] rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800 shadow-2xs space-y-3 transition-colors">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 flex items-center gap-1.5">
                      <span>🗣 Languages Spoken</span>
                    </h3>

                    <div className="flex flex-wrap items-center gap-2">
                      {profileForm.languages.map((lang) => (
                        <span
                          key={lang}
                          className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* =================================================================== */
              /* EDIT PROFILE MODE (Screenshot 5)                                    */
              /* =================================================================== */
              <div className="bg-white dark:bg-[#0E172A] rounded-3xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-6 animate-in zoom-in-98 duration-150 transition-colors">
                {/* Form Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                      Edit Provider Information
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Update your agency details, service areas, and direct contact line.
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/40 text-[#E11D48] text-xs font-bold border border-rose-200 dark:border-rose-900/60">
                    Editing Mode
                  </span>
                </div>

                <form onSubmit={handleSaveProfile} className="space-y-5">
                  {/* Row 1: Contact Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Primary Contact Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={editFormData.name}
                        onChange={(e) =>
                          setEditFormData({ ...editFormData, name: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 text-xs text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Company / Agency Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={editFormData.company}
                        onChange={(e) =>
                          setEditFormData({ ...editFormData, company: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 text-xs text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48]"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Business Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={editFormData.email}
                        onChange={(e) =>
                          setEditFormData({ ...editFormData, email: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 text-xs text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Direct Phone / WhatsApp *
                      </label>
                      <input
                        type="text"
                        required
                        value={editFormData.phone}
                        onChange={(e) =>
                          setEditFormData({ ...editFormData, phone: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 text-xs text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48]"
                      />
                    </div>
                  </div>

                  {/* Row 3: Website & Preferred Contact */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Portfolio or Agency Website
                      </label>
                      <input
                        type="url"
                        value={editFormData.website}
                        onChange={(e) =>
                          setEditFormData({ ...editFormData, website: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 text-xs text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Preferred Contact Method
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {["Whatsapp", "Email", "Phone"].map((m) => (
                          <button
                            key={m}
                            type="button"
                            onClick={() =>
                              setEditFormData({ ...editFormData, preferredContact: m })
                            }
                            className={`py-2 px-2 rounded-xl text-center text-xs font-semibold border transition-all cursor-pointer ${editFormData.preferredContact === m
                              ? "border-[#E11D48] bg-rose-50 dark:bg-rose-950/40 text-[#E11D48]"
                              : "border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600 bg-white dark:bg-slate-850"
                              }`}
                          >
                            {m}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Operational Cities (Toggles) */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      Operational Cities (Select all cities where you offer student housing)
                    </label>
                    <div className="flex flex-wrap items-center gap-2">
                      {[
                        "Florence, Italy",
                        "Barcelona, Spain",
                        "Paris, France",
                        "Rome, Italy",
                        "Madrid, Spain",
                        "Milan, Italy",
                      ].map((city) => {
                        const isSelected = editFormData.operationalCities.includes(city);
                        return (
                          <button
                            key={city}
                            type="button"
                            onClick={() => toggleEditCity(city)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${isSelected
                              ? "bg-[#E11D48] text-white border-[#E11D48] shadow-xs"
                              : "bg-white dark:bg-slate-850 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                              }`}
                          >
                            {isSelected ? `✓ ${city}` : `+ ${city}`}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Languages Spoken (Toggles) */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      Languages Spoken by On-Site Staff
                    </label>
                    <div className="flex flex-wrap items-center gap-2">
                      {["English", "Italian", "Spanish", "French", "German"].map((lang) => {
                        const isSelected = editFormData.languages.includes(lang);
                        return (
                          <button
                            key={lang}
                            type="button"
                            onClick={() => toggleEditLanguage(lang)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${isSelected
                              ? "bg-slate-900 dark:bg-slate-700 text-white border-slate-900 dark:border-slate-700"
                              : "bg-white dark:bg-slate-850 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                              }`}
                          >
                            {isSelected ? `✓ ${lang}` : lang}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Agency Bio */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                        Agency Bio &amp; Experience
                      </label>
                      <span className="text-[10px] text-slate-400 dark:text-slate-500">
                        {editFormData.bio.length}/750
                      </span>
                    </div>
                    <textarea
                      rows={3}
                      maxLength={750}
                      value={editFormData.bio}
                      onChange={(e) =>
                        setEditFormData({ ...editFormData, bio: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 text-xs text-slate-800 dark:text-white leading-relaxed focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48]"
                    />
                  </div>

                  {/* Legal Payout Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        VAT / Tax ID Number
                      </label>
                      <input
                        type="text"
                        value={editFormData.vatNumber}
                        onChange={(e) =>
                          setEditFormData({ ...editFormData, vatNumber: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 text-xs font-mono text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        SEPA Payout IBAN
                      </label>
                      <input
                        type="text"
                        value={editFormData.iban}
                        onChange={(e) =>
                          setEditFormData({ ...editFormData, iban: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 text-xs font-mono text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48]"
                      />
                    </div>
                  </div>

                  {/* Form Actions */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setIsEditingProfile(false)}
                      className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-xl bg-[#E11D48] hover:bg-[#be123c] text-white text-xs font-semibold shadow-xs transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
                    >
                      <Check className="w-4 h-4" />
                      <span>Save Profile Changes</span>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </main>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: SETTINGS, LEGAL & GUIDELINES (Screenshots 1 - 4)                   */}
        {/* ========================================================================= */}
        {activeNav === "settings" && (
          <main className="p-6 sm:p-8 max-w-6xl w-full mx-auto space-y-6 animate-in fade-in duration-150">
            {/* Top Security & Settings Banner */}
            <div className="bg-white dark:bg-[#0E172A] rounded-3xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-800 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-6 transition-colors">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    ACCOUNT SECURITY STATUS: PROTECTED
                  </span>
                </div>
                <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Settings, Legal &amp; Guidelines
                </h1>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
                  Manage your account credentials, review university partnership legal terms, and access 24/7 coordinator guidelines.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <div className="p-2.5 px-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-left">
                  <span className="text-[9.5px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 block">
                    ACTIVE SESSIONS
                  </span>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 mt-0.5">
                    💻 1 Device (Current)
                  </span>
                </div>

                <div className="p-2.5 px-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-left">
                  <span className="text-[9.5px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 block">
                    COMPLIANCE
                  </span>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 mt-0.5">
                    🛡 GDPR &amp; PSD2
                  </span>
                </div>
              </div>
            </div>

            {/* 4 Settings Tabs Bar */}
            <div className="bg-white dark:bg-[#0E172A] rounded-2xl p-1.5 border border-slate-200/80 dark:border-slate-800 shadow-2xs flex flex-wrap items-center gap-1 transition-colors">
              <button
                type="button"
                onClick={() => setSettingsTab("password")}
                className={`flex-1 min-w-[130px] py-2.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${settingsTab === "password"
                  ? "bg-[#E11D48] text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
                  }`}
              >
                <KeyRound className="w-3.5 h-3.5" />
                <span>Change Password</span>
              </button>

              <button
                type="button"
                onClick={() => setSettingsTab("privacy")}
                className={`flex-1 min-w-[130px] py-2.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${settingsTab === "privacy"
                  ? "bg-[#E11D48] text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
                  }`}
              >
                <Shield className="w-3.5 h-3.5" />
                <span>Privacy Policy</span>
              </button>

              <button
                type="button"
                onClick={() => setSettingsTab("terms")}
                className={`flex-1 min-w-[130px] py-2.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${settingsTab === "terms"
                  ? "bg-[#E11D48] text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
                  }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Terms &amp; Conditions</span>
              </button>

              <button
                type="button"
                onClick={() => setSettingsTab("help")}
                className={`flex-1 min-w-[130px] py-2.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${settingsTab === "help"
                  ? "bg-[#E11D48] text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
                  }`}
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Help &amp; Guidelines</span>
              </button>
            </div>

            {/* TAB 1 CONTENT: CHANGE PASSWORD (Screenshot 1) */}
            {settingsTab === "password" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in fade-in duration-150">
                {/* Left Column: Form */}
                <div className="lg:col-span-7 bg-white dark:bg-[#0E172A] rounded-3xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-800 shadow-2xs space-y-5 transition-colors">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-[#E11D48] flex items-center justify-center shrink-0">
                      <Lock className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-base font-bold text-slate-900 dark:text-white">
                        Change Your Password
                      </h2>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        Keep your provider account and student requests secure.
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handlePasswordSubmit} className="space-y-4 pt-1">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Current Password *
                      </label>
                      <div className="relative">
                        <input
                          type={showCurrentPassword ? "text" : "password"}
                          required
                          placeholder="Enter current account password"
                          value={passwordForm.current}
                          onChange={(e) =>
                            setPasswordForm({ ...passwordForm, current: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 text-xs text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48]"
                        />
                        <button
                          type="button"
                          onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer"
                        >
                          {showCurrentPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        New Password *
                      </label>
                      <div className="relative">
                        <input
                          type={showNewPassword ? "text" : "password"}
                          required
                          placeholder="At least 8 characters"
                          value={passwordForm.new}
                          onChange={(e) =>
                            setPasswordForm({ ...passwordForm, new: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 text-xs text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48]"
                        />
                        <button
                          type="button"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer"
                        >
                          {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Confirm New Password *
                      </label>
                      <div className="relative">
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          required
                          placeholder="Re-enter new password"
                          value={passwordForm.confirm}
                          onChange={(e) =>
                            setPasswordForm({ ...passwordForm, confirm: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 text-xs text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48]"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer"
                        >
                          {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    {passwordUpdated && (
                      <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 text-emerald-800 dark:text-emerald-300 text-xs font-medium flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        <span>Password updated successfully!</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-[#E11D48] hover:bg-[#be123c] text-white text-xs font-bold shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                    >
                      <Lock className="w-4 h-4" />
                      <span>Update Password</span>
                    </button>
                  </form>
                </div>

                {/* Right Column: Guidelines & Assistance */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="bg-white dark:bg-[#0E172A] rounded-3xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-2xs space-y-3.5 transition-colors">
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                      <ShieldAlert className="w-4 h-4 text-[#E11D48]" />
                      <span>Password &amp; Security Guidelines</span>
                    </h3>

                    <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] mt-1.5 shrink-0" />
                        <span>
                          <strong>Use a unique password</strong> for your AlphaHousing portal to prevent unauthorized access to student request dossiers.
                        </span>
                      </div>

                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] mt-1.5 shrink-0" />
                        <span>
                          <strong>Protect confidential student rosters:</strong> Student passports and academic verifications are accessible only to authenticated providers.
                        </span>
                      </div>

                      <div className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] mt-1.5 shrink-0" />
                        <span>
                          <strong>Session timeout:</strong> Sessions remain active for 30 days unless you manually log out from the sidebar or change your password.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#0B132B] text-white rounded-3xl p-6 shadow-md space-y-3">
                    <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-[#E11D48]">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>SECURITY ASSISTANCE</span>
                    </div>

                    <h3 className="text-sm font-bold text-white">
                      Need help with your account?
                    </h3>

                    <p className="text-[11.5px] text-slate-300 leading-relaxed">
                      If you suspect unauthorized activity or have trouble accessing your credentials, contact our provider support desk immediately.
                    </p>

                    <div className="pt-1">
                      <a
                        href="mailto:security@alphahousing.com"
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-xs text-slate-200 border border-slate-700/80 transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 text-rose-400" />
                        <span>security@alphahousing.com</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2 CONTENT: PRIVACY POLICY (Screenshot 2) */}
            {settingsTab === "privacy" && (
              <div className="bg-white dark:bg-[#0E172A] rounded-3xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-2xs space-y-6 animate-in fade-in duration-150 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-[#E11D48] flex items-center justify-center shrink-0">
                      <Shield className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                        AlphaHousing Privacy Policy
                      </h2>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        Compliant with GDPR, European Data Protection &amp; Study Abroad Privacy Directives
                      </p>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-semibold self-start sm:self-auto">
                    Effective: October 2026
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700 space-y-2">
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#E11D48]" />
                      <span>1. Information We Collect</span>
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      When you register as an AlphaHousing Provider, we collect your agency/landlord name, business email address, WhatsApp telephone number, physical operating cities, and listing links you voluntarily submit. We do not sell or share provider contact data with third-party advertisers.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700 space-y-2">
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#E11D48]" />
                      <span>2. Student Data Confidentiality</span>
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      All student group dossiers, parent co-sign documentation, and university enrollment records displayed on AlphaHousing are confidential. Providers agree not to scrape, distribute, or use student contact information outside of executing bilateral study abroad lease agreements.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700 space-y-2">
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#E11D48]" />
                      <span>3. European Escrow &amp; Payment Security</span>
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Financial transactions, deposit holdbacks, and banking details are encrypted using AES-256 bank-level encryption. AlphaHousing complies fully with European PSD2 payment directives.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700 space-y-2">
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#E11D48]" />
                      <span>4. Data Subject Rights (GDPR)</span>
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Under EU General Data Protection Regulation, you have the right to inspect, correct, export, or request deletion of your provider profile by emailing{" "}
                      <a href="mailto:privacy@alphahousing.com" className="text-[#E11D48] font-semibold hover:underline">
                        privacy@alphahousing.com
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3 CONTENT: TERMS & CONDITIONS (Screenshot 3) */}
            {settingsTab === "terms" && (
              <div className="bg-white dark:bg-[#0E172A] rounded-3xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-2xs space-y-6 animate-in fade-in duration-150 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                        AlphaHousing Provider Terms of Service
                      </h2>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        Official B2B Housing Provider Network Agreement
                      </p>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-semibold self-start sm:self-auto">
                    2026 Academic Season
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700 space-y-2">
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      <span>1. Listing Accuracy &amp; Fair Pricing</span>
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Providers agree that all links and rates shared for student group requests reflect authentic, available properties. Monthly rent submitted in the portal must include all agreed building fees unless explicitly stated in writing.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700 space-y-2">
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      <span>2. Safety &amp; Habitability Standard</span>
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      All accommodations must comply with local European habitation laws (certificato di agibilità in Italy, cédula de habitabilidad in Spain). Each student bedroom must possess an operational window or direct ventilation, a dedicated study desk, and working heating/AC.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700 space-y-2">
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      <span>3. Non-Circumvention</span>
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Providers introduced to student cohorts or universities via AlphaHousing agree to process semester bookings through the AlphaHousing platform to maintain deposit escrow protections and student health safety insurance validity.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700 space-y-2">
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      <span>4. Cancellation &amp; Force Majeure</span>
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      In the event of academic program cancellations, university study abroad suspensions, or travel bans, standard academic force majeure provisions apply as outlined in the bilateral lease schedules.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4 CONTENT: HELP & GUIDELINES (Screenshot 4) */}
            {settingsTab === "help" && (
              <div className="space-y-6 animate-in fade-in duration-150">
                {/* Red Banner: 24/7 Provider Concierge */}
                <div className="bg-[#E11D48] text-white rounded-3xl p-6 sm:p-7 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-1.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-xs text-white text-[10px] font-bold tracking-wider uppercase inline-block">
                      24/7 PROVIDER CONCIERGE
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                      Need Help with a Student Group Request?
                    </h2>
                    <p className="text-xs text-white/90 max-w-lg">
                      Our bilingual local coordinators in Florence, Barcelona, Rome, and Paris are available by direct WhatsApp, email, or scheduled call.
                    </p>
                  </div>

                  <div className="flex flex-col items-start md:items-end gap-1.5 shrink-0">
                    <a
                      href="mailto:support@alphahousing.com"
                      className="px-4 py-2 rounded-xl bg-white text-slate-900 hover:bg-slate-100 text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#E11D48]" />
                      <span>support@alphahousing.com</span>
                    </a>
                    <span className="text-[11px] text-white/80">
                      Phone: +39 055 234 5678 (Florence HQ)
                    </span>
                  </div>
                </div>

                {/* 3 Guideline Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white dark:bg-[#0E172A] rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-2xs space-y-2 transition-colors">
                    <div className="w-8 h-8 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-[#E11D48] flex items-center justify-center">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                      1. Sharing Listing Links
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      You do not need professional photos or complex data entry. Paste your existing Airbnb or agency link, state your price, and Alpha handles the student presentation.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-[#0E172A] rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-2xs space-y-2 transition-colors">
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                      2. Escrow &amp; Deposit Rules
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      Deposits are placed by students into escrow upon booking. You receive check-in confirmation and digital inventory sign-off before funds are disbursed.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-[#0E172A] rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-2xs space-y-2 transition-colors">
                    <div className="w-8 h-8 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                      3. In-Person Inspections
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      Our local team schedules a brief 20-minute physical walkthrough to verify Wi-Fi speeds, keys, and smoke alarms before student arrivals.
                    </p>
                  </div>
                </div>

                {/* Frequently Asked Questions */}
                <div className="bg-white dark:bg-[#0E172A] rounded-3xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-800 shadow-2xs space-y-4 transition-colors">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    Frequently Asked Questions
                  </h3>

                  <div className="divide-y divide-slate-100 dark:divide-slate-800">
                    {faqs.map((faq, idx) => {
                      const isOpen = openFaqIndex === idx;
                      return (
                        <div key={idx} className="py-3.5">
                          <button
                            type="button"
                            onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                            className="w-full flex items-center justify-between text-left text-xs sm:text-[13px] font-bold text-slate-800 dark:text-slate-200 hover:text-[#E11D48] dark:hover:text-[#E11D48] transition-colors cursor-pointer"
                          >
                            <span>{faq.q}</span>
                            <ChevronDown
                              className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""
                                }`}
                            />
                          </button>
                          {isOpen && (
                            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-2.5 animate-in fade-in duration-150">
                              {faq.a}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </main>
        )}
      </div>

      {/* ========================================================================= */}
      {/* 3. "MY OPTIONS DETAILS" MODAL (Screenshot 2)                               */}
      {/* ========================================================================= */}
      {selectedOptionDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl max-h-[92vh] bg-white dark:bg-[#0E172A] rounded-3xl overflow-y-auto shadow-2xl border border-slate-100 dark:border-slate-800 animate-in zoom-in-95 duration-200">
            {/* Header with Apartment Image */}
            <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-900">
              <Image
                src={selectedOptionDetails.image}
                alt={selectedOptionDetails.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/20" />

              {/* Top Badge & Close */}
              <div className="absolute top-3.5 left-3.5 z-10">
                <span className="px-2.5 py-0.5 rounded-full bg-[#E11D48] text-white text-[10.5px] font-bold shadow-xs">
                  Presented to Student Group
                </span>
              </div>

              <button
                onClick={() => setSelectedOptionDetails(null)}
                className="absolute top-3.5 right-3.5 w-7 h-7 rounded-full bg-slate-900/60 backdrop-blur-md text-white flex items-center justify-center hover:bg-slate-900 transition-colors z-20 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Title & Cohort at bottom of Image */}
              <div className="absolute bottom-3 left-4 right-4 z-10 text-white">
                <span className="text-[10px] uppercase font-bold text-slate-300 tracking-wider block">
                  Florence, Italy • For 4 Students
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-tight mt-0.5">
                  {selectedOptionDetails.title}
                </h2>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-5 sm:p-6 space-y-4">
              {/* Option Lifecycle Progress */}
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 space-y-2.5">
                <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-400 tracking-wider block">
                  OPTION LIFECYCLE PROGRESS
                </span>

                {/* 4 Steps Stepper */}
                <div className="grid grid-cols-4 gap-2 text-center pt-1">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-[#E11D48] text-white flex items-center justify-center text-xs font-bold shadow-xs">
                      ✓
                    </div>
                    <span className="text-[10px] font-bold text-[#E11D48] mt-1 leading-tight">
                      Option Submitted
                    </span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full border-2 border-slate-300 dark:border-slate-600 text-slate-400 flex items-center justify-center text-[10px] font-bold">
                      2
                    </div>
                    <span className="text-[10px] text-slate-400 dark:text-slate-400 mt-1 leading-tight">
                      Alpha Review
                    </span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full border-2 border-slate-300 dark:border-slate-600 text-slate-400 flex items-center justify-center text-[10px] font-bold">
                      3
                    </div>
                    <span className="text-[10px] text-slate-400 dark:text-slate-400 mt-1 leading-tight">
                      Presented to Students
                    </span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full border-2 border-slate-300 dark:border-slate-600 text-slate-400 flex items-center justify-center text-[10px] font-bold">
                      4
                    </div>
                    <span className="text-[10px] text-slate-400 dark:text-slate-400 mt-1 leading-tight">
                      Leased &amp; Confirmed
                    </span>
                  </div>
                </div>

                <div className="p-2 rounded-xl bg-white dark:bg-slate-850 border border-slate-200/80 dark:border-slate-700 text-[10.5px] text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#E11D48] shrink-0" />
                  <span>
                    <strong className="text-slate-800 dark:text-white">Current Status: Option Submitted</strong> — Listing received &amp; queued for Alpha quality review. (EST: 1 to 4 hrs)
                  </span>
                </div>
              </div>

              {/* 4 Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="p-2.5 rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 text-center">
                  <span className="text-[10px] text-slate-400 dark:text-slate-400 block uppercase">Monthly Rent</span>
                  <span className="text-sm font-bold text-[#E11D48]">
                    {selectedOptionDetails.details?.rent || "€4,900 /mo"}
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 text-center">
                  <span className="text-[10px] text-slate-400 dark:text-slate-400 block uppercase">Bedrooms</span>
                  <span className="text-xs font-bold text-slate-800 dark:text-white flex items-center justify-center gap-1 mt-0.5">
                    <Bed className="w-3.5 h-3.5 text-slate-400" />
                    <span>{selectedOptionDetails.details?.bedrooms || "4 Beds"}</span>
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 text-center">
                  <span className="text-[10px] text-slate-400 dark:text-slate-400 block uppercase">Bathrooms</span>
                  <span className="text-xs font-bold text-slate-800 dark:text-white flex items-center justify-center gap-1 mt-0.5">
                    <Bath className="w-3.5 h-3.5 text-slate-400" />
                    <span>{selectedOptionDetails.details?.bathrooms || "2 Baths"}</span>
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 text-center">
                  <span className="text-[10px] text-slate-400 dark:text-slate-400 block uppercase">Deposit Escrow</span>
                  <span className="text-xs font-bold text-slate-800 dark:text-white mt-0.5 block">
                    {selectedOptionDetails.details?.depositEscrow || "€2,000"}
                  </span>
                </div>
              </div>

              {/* Property Address */}
              <div className="p-3 rounded-xl bg-white dark:bg-slate-850 border border-slate-200/80 dark:border-slate-700 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">
                    Property Address
                  </span>
                  <span className="text-xs font-semibold text-slate-900 dark:text-white mt-0.5 block">
                    {selectedOptionDetails.details?.address || "Via de' Benci 18, Santa Croce, 50122 Firenze FI"}
                  </span>
                </div>

                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="px-3 py-1.5 rounded-lg border border-rose-200 dark:border-rose-900/50 text-[#E11D48] dark:text-rose-400 text-[11px] font-semibold hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors flex items-center gap-1 shrink-0"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>Open Listing URL</span>
                </a>
              </div>

              {/* Your Submission Note */}
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 text-[11px] text-slate-600 dark:text-slate-300">
                <span className="font-bold text-slate-800 dark:text-white block mb-0.5">
                  Your Submission Note:
                </span>
                <p>
                  &ldquo;{selectedOptionDetails.details?.submissionNote || "Includes weekly cleaning and all utilities. Located 7 min walk from Duomo and 5 min walk from IES Abroad."}&rdquo;
                </p>
              </div>

              {/* Amenities & Inclusions */}
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1.5">
                  Amenities &amp; Inclusions
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {(selectedOptionDetails.details?.amenities || [
                    "Terrace with view",
                    "Air conditioning",
                    "High-speed Wi-Fi",
                    "Washing Machine",
                    "Dishwasher",
                    "Elevator",
                    "Dedicated desks",
                  ]).map((am: string, i: number) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-[10.5px] font-medium flex items-center gap-1"
                    >
                      <Check className="w-3 h-3 text-emerald-500" />
                      <span>{am}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Advisor & Student Group Feedback (Lavender Box) */}
              <div className="p-3.5 rounded-2xl bg-purple-50/80 dark:bg-purple-950/30 border border-purple-100 dark:border-purple-800/40 text-[11px] text-purple-900 dark:text-purple-200 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-purple-800 dark:text-purple-300">
                  <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                  <span>Advisor &amp; Student Group Feedback</span>
                </div>
                <p className="leading-relaxed">
                  &ldquo;{selectedOptionDetails.details?.feedback || "The student group loves the terrace and has shortlisted this as their #1 choice! Alpha advisor is coordinating lease draft."}&rdquo;
                </p>
              </div>

              {/* Footer Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[11px] text-slate-400">
                  {selectedOptionDetails.details?.submittedDate || "Submitted Oct 2, 2026"}
                </span>

                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      setSelectedOptionDetails(null);
                      setActiveNav("messages");
                    }}
                    className="flex-1 sm:flex-none px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                    <span>Discuss with Advisor</span>
                  </button>
                  <button
                    onClick={() => setSelectedOptionDetails(null)}
                    className="flex-1 sm:flex-none px-5 py-2 rounded-xl bg-[#E11D48] hover:bg-[#be123c] text-xs font-semibold text-white shadow-xs transition-all cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. "VIEW DETAILS" MODAL FOR HOUSING REQUESTS                             */}
      {/* ========================================================================= */}
      {isDetailsModalOpen && selectedCohort && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl max-h-[92vh] bg-white dark:bg-[#0E172A] rounded-3xl overflow-y-auto shadow-2xl border border-slate-100 dark:border-slate-800 animate-in zoom-in-95 duration-200">
            <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-slate-900">
              <Image
                src={selectedCohort.image}
                alt={selectedCohort.city}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-slate-950/30" />

              <button
                onClick={() => setIsDetailsModalOpen(false)}
                className="absolute top-3.5 right-3.5 w-7 h-7 rounded-full bg-slate-900/60 backdrop-blur-md text-white flex items-center justify-center hover:bg-slate-900 transition-colors z-20 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="absolute top-3.5 left-3.5 flex items-center gap-2 z-10">
                <span className="px-2.5 py-0.5 rounded-full bg-[#E11D48] text-white text-[10.5px] font-bold shadow-xs">
                  🇮🇹 Verified Student Cohort Request
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-rose-50/90 dark:bg-rose-950/70 backdrop-blur-sm text-[#E11D48] dark:text-rose-300 text-[10.5px] font-bold">
                  New Request
                </span>
              </div>

              <div className="absolute bottom-3 left-4 right-4 z-10 text-white">
                <span className="text-[10px] uppercase font-bold text-slate-300 tracking-wider block">
                  {selectedCohort.cohortTitle}
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-tight mt-0.5">
                  {selectedCohort.city}
                </h2>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/90 mt-1">
                  <span>👥 {selectedCohort.studentsCount}</span>
                  <span>🗓️ {selectedCohort.dates}</span>
                  <span className="font-bold text-amber-300">
                    💰 Max Budget: {selectedCohort.maxPrice.replace(" (max)", "")}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-6 space-y-4">
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-rose-50 dark:bg-rose-950/50 text-[#E11D48] dark:text-rose-400 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#E11D48] dark:text-rose-400 block">
                      AFFILIATED UNIVERSITY &amp; CAMPUS CENTER
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                      {selectedCohort.universityCohort}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                      {selectedCohort.campusAddress}
                    </p>
                  </div>
                </div>

                <div className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 text-[10.5px] font-medium text-slate-600 dark:text-slate-300 shrink-0 text-center">
                  {selectedCohort.commuteTarget}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                    <span>STUDENT GROUP PROFILES ({selectedCohort.students.length} STUDENTS)</span>
                  </h4>
                  <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Pre-Vetted by University
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedCohort.students.map((st: any, idx: number) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-700 bg-white dark:bg-slate-850 flex items-center gap-2.5"
                    >
                      <div className="w-9 h-9 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-700 shrink-0 relative">
                        <Image
                          src={st.avatar}
                          alt={st.name}
                          fill
                          unoptimized
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-slate-900 dark:text-white truncate">
                            {st.name}
                          </span>
                          {st.role && (
                            <span className="px-1.5 py-0.2 rounded bg-rose-50 dark:bg-rose-950/50 text-[#E11D48] dark:text-rose-300 text-[9px] font-bold shrink-0">
                              {st.role}
                            </span>
                          )}
                        </div>
                        <p className="text-[10.5px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                          {st.major} • {st.university}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200/80 dark:border-slate-700 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    PROPERTY REQUIREMENTS
                  </span>
                  <div className="text-xs space-y-1.5 text-slate-700 dark:text-slate-300">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Bedrooms:</span>
                      <span className="font-semibold text-slate-900 dark:text-white">4 Individual Bedrooms</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Target Area:</span>
                      <span className="font-semibold text-slate-900 dark:text-white">Near IES Abroad Florence</span>
                    </div>
                    <div className="flex justify-between pt-1 border-t border-slate-100 dark:border-slate-800">
                      <span className="text-slate-400">Max Rent / Student:</span>
                      <span className="font-bold text-[#E11D48]">{selectedCohort.maxRentPerStudent}</span>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200/80 dark:border-slate-700 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    GROUP PREFERENCES
                  </span>
                  <div className="space-y-1 text-[11px] text-slate-600 dark:text-slate-300">
                    {selectedCohort.preferences.map((p: string, i: number) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#F0FDF4] dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-800/40 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold text-emerald-900 dark:text-emerald-200">
                    Parent Co-Sign &amp; Escrow Guarantee
                  </h5>
                  <p className="text-[11px] text-emerald-700 dark:text-emerald-300 mt-0.5 leading-snug">
                    All 4 students have submitted notarized parent guarantee affidavits. Security deposits and advance rents are handled through AlphaHousing&apos;s protected European bank escrow.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 text-[11px] text-slate-600 dark:text-slate-300">
                <span className="font-semibold text-slate-800 dark:text-white block mb-0.5">
                  Advisor Coordination Note:
                </span>
                <p className="italic text-slate-500 dark:text-slate-400">
                  &ldquo;{selectedCohort.advisorNote}&rdquo;
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[11px] text-slate-400">
                  {selectedCohort.receivedDate}
                </span>

                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      setIsDetailsModalOpen(false);
                      setActiveNav("messages");
                    }}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-slate-500" />
                    <span>Message Advisor</span>
                  </button>
                  <button
                    onClick={() => handleOpenShare(selectedCohort)}
                    className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-[#E11D48] hover:bg-[#be123c] text-xs font-semibold text-white shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Share an Option for this Cohort</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. "SHARE AN OPTION" MODAL                                                */}
      {/* ========================================================================= */}
      {isShareModalOpen && selectedCohort && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white dark:bg-[#0E172A] rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-100 dark:border-slate-800 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Share an Option for This Request
              </h3>
              <button
                onClick={() => setIsShareModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="my-3.5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden relative bg-slate-200 dark:bg-slate-700 shrink-0">
                <Image
                  src={selectedCohort.image}
                  alt={selectedCohort.city}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate">
                  {selectedCohort.city}
                </h4>
                <p className="text-[10.5px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                  {selectedCohort.studentsCount} • {selectedCohort.dates}
                </p>
                <p className="text-[10px] text-slate-400 dark:text-slate-400 truncate mt-0.5">
                  {selectedCohort.bedrooms} • {selectedCohort.maxPrice} • {selectedCohort.locationInfo}
                </p>
              </div>
            </div>

            <form onSubmit={handleSendOption} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                  1. Send a listing link <span className="font-normal text-slate-400">(easiest)</span>
                </label>
                <input
                  type="text"
                  placeholder="Paste the URL of your listing (Airbnb, your website, etc.)"
                  value={shareData.listingUrl}
                  onChange={(e) =>
                    setShareData({ ...shareData, listingUrl: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 text-slate-900 dark:text-white placeholder:text-slate-400 text-xs focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48]"
                />
                <div className="flex flex-wrap items-center gap-1.5 mt-2">
                  <span className="text-[10px] text-slate-400">Quick fill sample:</span>
                  <button
                    type="button"
                    onClick={() =>
                      setShareData({
                        ...shareData,
                        listingUrl: "https://airbnb.com/rooms/florence-duomo-4br",
                        monthlyRent: "4800",
                      })
                    }
                    className="text-[10px] font-semibold text-[#E11D48] dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 px-2 py-0.5 rounded-md hover:bg-rose-100 dark:hover:bg-rose-900/40 transition-colors cursor-pointer"
                  >
                    + Airbnb Florence Duomo 4BR
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setShareData({
                        ...shareData,
                        listingUrl: "https://firenzehousing.it/properties/direct-listing",
                        monthlyRent: "4950",
                      })
                    }
                    className="text-[10px] font-semibold text-[#E11D48] dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 px-2 py-0.5 rounded-md hover:bg-rose-100 dark:hover:bg-rose-900/40 transition-colors cursor-pointer"
                  >
                    + Direct Firenze Housing Listing
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setShareData({
                        ...shareData,
                        listingUrl: "https://firenzehousing.it/properties/piazza-san-marco",
                        monthlyRent: "4800",
                      })
                    }
                    className="text-[10px] font-semibold text-[#E11D48] dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 px-2 py-0.5 rounded-md hover:bg-rose-100 dark:hover:bg-rose-900/40 transition-colors cursor-pointer"
                  >
                    + Modern Piazza San Marco Flat
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                  2. Availability for these dates?
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {["Yes, available", "Need to confirm", "Not available"].map((val) => {
                    const isSelected = shareData.availability === val;
                    return (
                      <button
                        key={val}
                        type="button"
                        onClick={() => setShareData({ ...shareData, availability: val })}
                        className={`py-2 px-2.5 rounded-xl text-center text-xs flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${isSelected
                          ? "border-[#E11D48] bg-rose-50/70 dark:bg-rose-950/40 text-[#E11D48] dark:text-rose-300 font-bold shadow-2xs"
                          : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600"
                          }`}
                      >
                        <span
                          className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${isSelected
                            ? "border-[#E11D48]"
                            : "border-slate-300 dark:border-slate-600"
                            }`}
                        >
                          {isSelected && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48]" />
                          )}
                        </span>
                        <span className="truncate">{val}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                  3. Monthly rent (€)
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400">
                    €
                  </span>
                  <input
                    type="number"
                    value={shareData.monthlyRent}
                    onChange={(e) =>
                      setShareData({ ...shareData, monthlyRent: e.target.value })
                    }
                    className="w-full pl-8 pr-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48]"
                  />
                </div>
                <p className="text-[10px] text-slate-400 mt-1">
                  You can also include any additional fees in the message below.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-bold text-slate-800 dark:text-slate-200">
                    Message to Alpha <span className="font-normal text-slate-400">(optional)</span>
                  </label>
                  <span className="text-[10px] text-slate-400">
                    {shareData.message.length}/500
                  </span>
                </div>
                <textarea
                  rows={2}
                  maxLength={500}
                  placeholder="Add any details about this option, or other options you may have."
                  value={shareData.message}
                  onChange={(e) =>
                    setShareData({ ...shareData, message: e.target.value })
                  }
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 text-slate-900 dark:text-white placeholder:text-slate-400 text-xs focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48]"
                />
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsShareModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#E11D48] hover:bg-[#c9183d] text-xs font-semibold text-white shadow-xs transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" /> Send to Alpha
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 6. "OPTION SENT!" CONFIRMATION SCREEN                                     */}
      {/* ========================================================================= */}
      {isSuccessViewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white dark:bg-[#070C18] animate-in fade-in duration-200 overflow-y-auto">
          <div className="absolute inset-x-0 bottom-0 h-72 z-0 pointer-events-none opacity-40">
            <Image
              src="/images/hero-pisa.jpg"
              alt="Landmark background"
              fill
              className="object-cover object-bottom blur-xs"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/80 dark:via-[#070C18]/80 to-white dark:to-[#070C18]" />
          </div>

          <div className="relative z-10 max-w-md w-full text-center space-y-5 my-auto">
            <div className="flex items-center justify-center mb-6">
              <Link href="/" className="inline-flex items-center gap-2">
                <svg
                  className="w-6 h-6 shrink-0"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 30L16 10L23 23L14 30H6Z" fill="#E11D48" />
                  <path d="M16 10L25 5L34 22L25 25L16 10Z" fill="#F59E0B" />
                  <path d="M23 23L34 22L31 34L20 32L23 23Z" fill="#06B6D4" />
                  <path d="M14 30L23 23L20 32L12 35L14 30Z" fill="#8B5CF6" />
                </svg>
                <div className="flex items-baseline text-base font-extrabold tracking-tight">
                  <span className="text-slate-900 dark:text-white">ALPHA</span>
                  <span className="text-[#E11D48] ml-0.5">Housing</span>
                </div>
              </Link>
            </div>

            <div className="w-16 h-16 rounded-full bg-[#10B981] text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20 animate-in zoom-in-75 duration-300">
              <Check className="w-9 h-9 stroke-[3]" />
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Option Sent!
              </h2>
              <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 max-w-sm mx-auto leading-relaxed mt-2">
                Thank you! Your option has been sent to the AlphaHousing team. We will review it and may contact you for any additional details.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-white dark:bg-[#0E172A] border border-slate-200/90 dark:border-slate-800 shadow-sm text-left space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900 dark:text-white">
                  {selectedCohort ? selectedCohort.city : "Florence, Italy"}
                </span>
                <span className="px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold border border-emerald-100 dark:border-emerald-800/40">
                  Under Review
                </span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-300">
                4BR Property near Near IES Abroad Florence
              </p>
              <div className="flex items-center justify-between text-[10.5px] text-slate-400 pt-1">
                <span>Proposed Rent: €{shareData.monthlyRent}/mo</span>
                <span>Availability: Confirmed</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => {
                  setIsSuccessViewOpen(false);
                  setIsDetailsModalOpen(false);
                  setIsShareModalOpen(false);
                  setActiveNav("requests");
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#E11D48] hover:bg-[#be123c] text-xs font-semibold text-white shadow-xs transition-all cursor-pointer active:scale-95"
              >
                Back to Requests
              </button>
              <button
                onClick={() => {
                  setIsSuccessViewOpen(false);
                  setActiveNav("options");
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" /> View All Shared Options
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
