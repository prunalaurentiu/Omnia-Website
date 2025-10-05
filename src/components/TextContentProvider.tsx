import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the structure for all text content
export interface TextContent {
  // Header
  header: {
    brandName: string;
    navigation: {
      home: string;
      strategy: string;
      team: string;
      insights: string;
      results: string;
      contact: string;
    };
  };
  
  // Hero Section
  hero: {
    headline: string;
    description: string;
    buttons: {
      primary: string;
      secondary: string;
    };
    metrics: {
      aum: {
        value: string;
        label: string;
      };
      companies: {
        value: string;
        label: string;
      };
      successRate: {
        value: string;
        label: string;
      };
    };
  };
  
  // Strategy Section
  strategy: {
    title: string;
    description: string;
    pillars: {
      development: {
        title: string;
        description: string;
        features: string[];
      };
      operations: {
        title: string;
        description: string;
        features: string[];
      };
      outcomes: {
        title: string;
        description: string;
        features: string[];
      };
    };
  };
  
  // Team Section
  team: {
    title: string;
    description: string;
    members: {
      name: string;
      role: string;
      bio: string;
      experience: string;
    }[];
  };
  
  // Insights Section
  insights: {
    title: string;
    description: string;
    articles: {
      title: string;
      excerpt: string;
      date: string;
      readTime: string;
      category: string;
    }[];
  };
  
  // Media Section
  media: {
    title: string;
    description: string;
    coverage: {
      title: string;
      publication: string;
      date: string;
      excerpt: string;
    }[];
  };
  
  // Results Section
  results: {
    title: string;
    description: string;
    metrics: {
      label: string;
      value: string;
      description: string;
    }[];
    investorPerformance: {
      metric: string;
      value: string;
      description: string;
    }[];
    portfolioHighlights: {
      company: string;
      industry: string;
      investment: string;
      outcome: string;
      multiple: string;
    }[];
  };
  
  // Contact Section
  contact: {
    title: string;
    description: string;
    office: {
      title: string;
      address: string;
      phone: string;
      email: string;
    };
    form: {
      title: string;
      nameLabel: string;
      emailLabel: string;
      messageLabel: string;
      submitButton: string;
    };
  };
  
  // Footer
  footer: {
    brandName: string;
    description: string;
    sections: {
      company: {
        title: string;
        links: { label: string; href: string; }[];
      };
      investors: {
        title: string;
        links: { label: string; href: string; }[];
      };
      legal: {
        title: string;
        links: { label: string; href: string; }[];
      };
    };
    copyright: string;
  };
}

// Default text content
const defaultTextContent: TextContent = {
  header: {
    brandName: "OMNIA PRIME",
    navigation: {
      home: "Home",
      strategy: "Strategy",
      team: "Team",
      insights: "Insights",
      results: "Results",
      contact: "Contact"
    }
  },
  
  hero: {
    headline: "We turn under-capitalized sectors into regional leaders",
    description: "Omnia Prime is a growth‑equity fund focused on Romania and the broader Balkans and invests in under‑capitalized sectors such as digital transformation, logistics, business and industrial services, manufacturing and other traditional industries. By pairing strategic vision with hands‑on operational excellence, we partner with exceptional founders to unlock growth and create sustainable competitive advantages.",
    buttons: {
      primary: "Partner With Us",
      secondary: "View Portfolio"
    },
    metrics: {
      aum: {
        value: "€50–70M",
        label: "Target commitments"
      },
      companies: {
        value: ">16",
        label: "Deal Pipeline"
      },
      successRate: {
        value: "€2–7M",
        label: "Investment Focus"
      }
    }
  },
  
  strategy: {
    title: "Strategy",
    description: "Our strategy combines growth capital with operational know-how to build profitable platforms in overlooked sectors that are essential to Eastern Europe’s development.",
    pillars: {
      development: {
        title: "Development",
        description: "We concentrate on industrial, logistics, business services, manufacturing and other traditional industries that have lacked professional capital and modernization.",
        features: [
          "Sector focus: Industrial and manufacturing companies, logistics providers, business services, B2B SaaS platforms, selective consumer businesses and other under-capitalized sectors",
          "Flexible deal mix: 60–70% growth equity stakes, 20–30% late-stage venture investments and up to 20% opportunistic special situations",
          "Ticket sizes: €2–3 million for venture rounds and €6–7 million for buyout/control transactions",
          "Geographic reach: Deploy EIF capital in Romania with selective deals across the Balkans and Central-Eastern Europe"
        ]
      },
      operations: {
        title: "Operations",
        description: "We pair active ownership with commercial acceleration and disciplined execution to unlock growth from day one.",
        features: [
          "Active management & board involvement: Secure board seats or observer roles, build leadership teams and intervene quickly when change is required",
          "Strategic & commercial acceleration: Install structured sales processes, pricing discipline and CRM-driven pipeline management",
          "Operational efficiency & professionalisation: Launch 100-day plans covering IT upgrades, refinancing, governance and zero-based budgeting",
          "Flexible ownership: Comfortable with minority or majority stakes, aligning incentives through board rights and earn-outs"
        ]
      },
      outcomes: {
        title: "Outcomes",
        description: "Our approach delivers measurable value creation and embeds ESG improvements across every investment.",
        features: [
          "Value creation and impact: Deliver top-quartile returns while accelerating Romania’s industrial and digital transformation",
          "Measured results: Track revenue growth, margin improvement, return on capital, job creation and ESG progress",
          "ESG integration: Apply a ‘do no significant harm’ principle with proactive upgrades to energy efficiency, inclusion and governance"
        ]
      }
    }
  },

  team: {
    title: "Leadership Team",
    description: "Omnia Prime’s leadership combines growth investing, sales acceleration and operational transformation expertise tailored to Romania and the broader Balkans.",
    members: [
      {
        name: "Matei Ladea",
        role: "General Partner (Managing Partner)",
        bio: "Serial entrepreneur and M&A specialist who launched Lidl across Eastern Europe, completed Harvard Business School and sustainable-investing programs, and led the buyout of bespoke suit maker SARTO to >500% revenue growth and ~30% net margins. Leads fundraising, origination and strategy while mentoring founders on sustainable scaling and ESG.",
        experience: "Fundraising, origination & strategy leadership"
      },
      {
        name: "Bogdan Georgescu",
        role: "General Partner (Managing Partner)",
        bio: "Banking, trading and sales-management expert who founded SAGE Petrochem and co-founded an SEC-registered investment advisory. Renowned sales coach with 1,500+ professionals trained, leading deal execution, due diligence and portfolio value-creation while monitoring macro risks.",
        experience: "Deal execution & commercial acceleration"
      },
      {
        name: "Laurentiu Pruna",
        role: "Investment Manager",
        bio: "Operator-turned-project leader with finance background and Lean Six Sigma Black Belt who scaled Delivery Hero and Bolt Market operations, launched new markets, built advertising streams and led commercial execution at SARTO. Translates diligence into 100-day plans that drive EBITDA expansion.",
        experience: "Operational excellence & market expansion"
      },
      {
        name: "Alexandru Andries",
        role: "Investment Analyst",
        bio: "Engineer and entrepreneur who served as COO of Kopilot by Smart Diesel, launching digital applications for trucking. Leads industry research, financial analysis and CRM-driven sourcing while implementing organisational tools that improve portfolio company structure and culture.",
        experience: "Data-driven sourcing & portfolio analytics"
      }
    ]
  },
  
  insights: {
    title: "Insights & Research",
    description: "Stay informed with our latest market analysis, industry insights, and thought leadership on technology investment trends.",
    articles: [
      {
        title: "The Future of B2B SaaS: Trends Shaping 2024",
        excerpt: "Exploring the key trends that will define the B2B software landscape, from AI integration to evolving customer expectations.",
        date: "March 15, 2024",
        readTime: "5 min read",
        category: "Market Analysis"
      },
      {
        title: "Operational Excellence in High-Growth Startups",
        excerpt: "How portfolio companies can maintain operational efficiency while scaling rapidly in competitive markets.",
        date: "March 8, 2024", 
        readTime: "7 min read",
        category: "Operations"
      },
      {
        title: "ESG Integration in Private Equity",
        excerpt: "Best practices for incorporating environmental, social, and governance factors into investment decisions.",
        date: "February 28, 2024",
        readTime: "6 min read",
        category: "ESG"
      }
    ]
  },
  
  media: {
    title: "Media Coverage",
    description: "Recent coverage and recognition of Omnia Prime's investment approach and portfolio company successes.",
    coverage: [
      {
        title: "Omnia Prime Leads €25M Series B in TechFlow",
        publication: "European Private Equity",
        date: "March 20, 2024",
        excerpt: "Investment focuses on scaling TechFlow's AI-powered workflow automation platform across European markets."
      },
      {
        title: "The Rise of Operational Private Equity in Europe",
        publication: "Financial Times",
        date: "March 12, 2024", 
        excerpt: "Omnia Prime featured as a leading example of hands-on investment approach driving superior returns."
      },
      {
        title: "Sustainability in Tech Investments",
        publication: "TechCrunch Europe",
        date: "February 25, 2024",
        excerpt: "How Omnia Prime integrates ESG principles into its investment thesis and portfolio management."
      }
    ]
  },
  
  results: {
    title: "Track Record",
    description: "By combining sector-specific expertise, commercial acceleration and operational excellence, Omnia Prime delivers top-quartile returns while supporting Romania’s industrial and digital transformation.",
    metrics: [
      {
        label: "Value creation & impact",
        value: "Top-quartile returns",
        description: "Hands-on partnership unlocks sustainable competitive advantages across traditional industries."
      },
      {
        label: "Measured results",
        value: "EBITDA 2x at Dumagas",
        description: "Turnaround doubled EBITDA from €1.9M to €3.8M, lifted net profit to ~€2M and reduced debt by ~30%."
      },
      {
        label: "Job creation",
        value: "250+ roles",
        description: "Portfolio companies have created over 250 new jobs, 95% of which are held by Romanian citizens."
      },
      {
        label: "Investment analytics",
        value: "Scanned more than 500 companies",
        description: "Taking the time to make the best decision for our investors’ capital."
      }
    ],
    investorPerformance: [
      {
        metric: "Net IRR",
        value: "15%+",
        description: "Targeting mid-teens internal rates of return."
      },
      {
        metric: "DPI",
        value: "2.5x–3.0x",
        description: "Projected distributions to paid-in capital over the fund’s life."
      },
      {
        metric: "Success rate",
        value: "100%",
        description: "Meaningful value creation in every principal investment to date."
      }
    ],
    portfolioHighlights: [
      {
        company: "SARTO",
        industry: "Luxury retail",
        investment: "Acquisition, 2015",
        outcome: ">500% revenue growth with ~30% net margins and a franchise expansion",
        multiple: "Exit in negotiations, >5x expected"
      },
      {
        company: "123Credit",
        industry: "Fintech marketplace",
        investment: "Growth equity, 2022",
        outcome: "Revenue expected to exceed €4M by 2025 with strong lender partnerships",
        multiple: "Exit in negotiations, >3x expected"
      },
      {
        company: "Dumagas Transport",
        industry: "Logistics & freight",
        investment: "Buyout, 2023",
        outcome: "Launched sales division, added €20M new business and doubled EBITDA to €3.8M",
        multiple: "Exit in negotiations, >3x expected"
      }
    ]
  },

  contact: {
    title: "Get in Touch",
    description: "We welcome partnerships with exceptional entrepreneurs and co-investors who share our vision for transforming Eastern Europe’s economy. Please use the contact details above to discuss opportunities—we typically respond within 24 hours.",
    office: {
      title: "Head Office",
      address: "Aleea Alexandru 30, Bucharest, Romania",
      phone: "+40 721 596 298",
      email: "invest@omnia.capital"
    },
    form: {
      title: "Send us a message",
      nameLabel: "Full Name",
      emailLabel: "Email Address",
      messageLabel: "Message",
      submitButton: "Send Message"
    }
  },

  footer: {
    brandName: "OMNIA PRIME",
    description: "Growth-equity fund transforming Romania and the Balkans through operational excellence and strategic vision.",
    sections: {
      company: {
        title: "Company",
        links: [
          { label: "About Us", href: "#about" },
          { label: "Portfolio", href: "#portfolio" },
          { label: "Team", href: "#team" },
          { label: "Careers", href: "#careers" }
        ]
      },
      investors: {
        title: "Investors",
        links: [
          { label: "Fund Documents", href: "#documents" },
          { label: "Reports", href: "#reports" },
          { label: "Portal Login", href: "#login" },
          { label: "Contact IR", href: "#ir" }
        ]
      },
      legal: {
        title: "Legal",
        links: [
          { label: "Privacy Policy", href: "#privacy" },
          { label: "Terms of Service", href: "#terms" },
          { label: "Compliance", href: "#compliance" },
          { label: "Disclosures", href: "#disclosures" }
        ]
      }
    },
    copyright: "© 2024 Omnia Prime. All rights reserved."
  }
};

interface TextContentContextType {
  textContent: TextContent;
  updateTextContent: (path: string, value: any) => void;
  isEditing: boolean;
  setIsEditing: (editing: boolean) => void;
  resetToDefaults: () => void;
}

const TextContentContext = createContext<TextContentContextType | undefined>(undefined);

const STORAGE_KEY = 'omnia-capital-text-content';

// Helper function to deep merge objects, preserving new fields in defaults
function deepMerge(target: any, source: any): any {
  const result = { ...target };
  
  for (const key in source) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(target[key] || {}, source[key]);
    } else {
      result[key] = source[key];
    }
  }
  
  return result;
}

export function TextContentProvider({ children }: { children: ReactNode }) {
  const [textContent, setTextContent] = useState<TextContent>(defaultTextContent);
  const [isEditing, setIsEditing] = useState(false);

  // Load content from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const savedContent = JSON.parse(saved);
        // Merge saved content with defaults to ensure new fields are included
        const mergedContent = deepMerge(defaultTextContent, savedContent);
        setTextContent(mergedContent);
      }
    } catch (error) {
      console.warn('Failed to load saved content:', error);
    }
  }, []);

  // Save content to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(textContent));
    } catch (error) {
      console.warn('Failed to save content:', error);
    }
  }, [textContent]);

  const updateTextContent = (path: string, value: any) => {
    setTextContent(prev => {
      const newContent = { ...prev };
      const pathArray = path.split('.');
      let current: any = newContent;
      
      // Navigate to the parent of the target property
      for (let i = 0; i < pathArray.length - 1; i++) {
        if (!current[pathArray[i]]) {
          current[pathArray[i]] = {};
        }
        current = current[pathArray[i]];
      }
      
      // Set the value
      current[pathArray[pathArray.length - 1]] = value;
      
      return newContent;
    });
  };

  const resetToDefaults = () => {
    setTextContent(defaultTextContent);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <TextContentContext.Provider value={{ 
      textContent, 
      updateTextContent, 
      isEditing, 
      setIsEditing,
      resetToDefaults
    }}>
      {children}
    </TextContentContext.Provider>
  );
}

export function useTextContent() {
  const context = useContext(TextContentContext);
  if (context === undefined) {
    throw new Error('useTextContent must be used within a TextContentProvider');
  }
  return context;
}