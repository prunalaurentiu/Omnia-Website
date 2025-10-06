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
      slug: string;
      title: string;
      excerpt: string;
      content: string;
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
      url: string;
    }[];
  };
  
  // Results Section
  results: {
    title: string;
    description: string;
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
        slug: "future-of-b2b-saas",
        title: "The Future of B2B SaaS: Trends Shaping 2024",
        excerpt: "Exploring the key trends that will define the B2B software landscape, from AI integration to evolving customer expectations.",
        content:
          "B2B SaaS has entered a new maturity curve where vertical expertise outweighs horizontal feature sets. Buyers now expect products that solve industry-specific workflows, integrate with legacy data sources, and come with embedded analytics that shorten time-to-value. Founders that build deep partnerships with launch customers and co-design modules around regulated processes will continue to capture disproportionate market share.\n\nArtificial intelligence is shifting from a stand-alone capability to an operating principle. Instead of marketing AI as a differentiator, leading companies embed machine learning into onboarding, security, and customer success so users experience tangible productivity gains without retraining their teams. This requires disciplined data governance and model monitoring from day one—areas where Omnia Prime actively supports portfolio companies.\n\nFinally, the financing landscape is rewarding efficient growth. Investors prioritise net revenue retention, capital-light expansion strategies, and diversified go-to-market playbooks over headline ARR growth. Operators that master usage-based pricing, channel partnerships, and customer-led community building will outperform as the market normalises.",
        date: "March 15, 2024",
        readTime: "5 min read",
        category: "Market Analysis"
      },
      {
        slug: "operational-excellence-in-high-growth",
        title: "Operational Excellence in High-Growth Startups",
        excerpt: "How portfolio companies can maintain operational efficiency while scaling rapidly in competitive markets.",
        content:
          "Scaling companies often inherit the heroics of their founding teams—processes live in spreadsheets, vendor relationships depend on personal rapport, and institutional knowledge is rarely documented. The first step toward operational excellence is mapping critical workflows and deciding which ones require automation, outsourcing, or new leadership. Building a 90-day plan that clarifies decision rights, success metrics, and weekly operating cadences keeps execution on track even as headcount doubles.\n\nCommercial acceleration should happen in lockstep with operational upgrades. Implementing structured sales stages, revenue forecasting discipline, and post-sale handoffs enables teams to spot friction before it reaches customers. Paired with scenario-based financial planning, leadership can invest confidently in growth levers without overextending working capital.\n\nThe final ingredient is cultural. High-performing scale-ups promote continuous improvement rituals—retrospectives, cross-functional stand-ups, and transparent dashboards—that highlight bottlenecks early. Omnia Prime partners with founders to install these habits, ensuring that growth compounds instead of creating hidden fragility.",
        date: "March 8, 2024",
        readTime: "7 min read",
        category: "Operations"
      },
      {
        slug: "esg-integration-private-equity",
        title: "ESG Integration in Private Equity",
        excerpt: "Best practices for incorporating environmental, social, and governance factors into investment decisions.",
        content:
          "ESG integration begins before an investment memorandum is drafted. Sector screening must evaluate regulatory headwinds, resource intensity, and community impact alongside financial attractiveness. During due diligence, leading funds assess carbon baselines, workforce policies, and governance structures to quantify both risks and upside. These diagnostics set realistic improvement targets that can be embedded into shareholder agreements and management incentives.\n\nPost-close, ESG moves from policy to execution. Portfolio companies benefit from pragmatic roadmaps that blend quick wins—energy-efficiency audits, safety training refreshers, inclusive hiring frameworks—with longer-term initiatives such as supplier diversification and circular product design. Tracking progress requires consistent data collection and board-level review so ESG metrics carry the same weight as EBITDA and cash conversion.\n\nWhen executed with intent, ESG creates measurable enterprise value. Companies unlock cheaper financing, win contracts that mandate sustainability credentials, and retain talent that wants to work for responsible employers. Omnia Prime leverages its operating network to help founders capture these benefits while meeting institutional LP expectations.",
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
        title: "123Credit crește de cinci ori într-un an",
        publication: "HotNews.ro",
        date: "Accessed 2024",
        excerpt: "HotNews.ro prezintă modul în care marketplace-ul 123Credit, susținut de Omnia Capital, a devenit liderul digital al creditării din România după o creștere accelerată.",
        url: "https://hotnews.ro/123credit-creste-de-5-ori-intr-un-an-noul-lider-digital-al-creditarii-din-romania-2070591?utm"
      },
      {
        title: "Dumagas, companie din portofoliul Omnia Capital, intră pe segmentul auto",
        publication: "Ziarul Financiar",
        date: "Accessed 2024",
        excerpt: "Ziarul Financiar relatează extinderea transportatorului Dumagas, preluat de Omnia Capital, către noi linii de business din zona auto.",
        url: "https://www.zf.ro/auto/dumagas-preluata-in-urma-cu-doi-ani-de-omnia-capital-a-intrat-pe-22769406?utm"
      },
      {
        title: "Matei Ladea explică cum companiile românești pot accelera investițiile",
        publication: "Ziarul Financiar",
        date: "Accessed 2024",
        excerpt: "Cofondatorul Omnia Capital, Matei Ladea, discută despre soluțiile prin care antreprenorii locali pot finanța planuri ambițioase de creștere.",
        url: "https://www.zf.ro/companii/matei-ladea-omnia-capital-companiile-romanesti-pot-acum-investi-in-22779046?utm"
      },
      {
        title: "Omnia Capital investește în platforma Cargo Buddy",
        publication: "Profit.ro",
        date: "Accessed 2024",
        excerpt: "Profit.ro anunță preluarea unei participații la Cargo Buddy de către Omnia Capital pentru a accelera digitalizarea transporturilor.",
        url: "https://www.profit.ro/povesti-cu-profit/auto-transporturi/tranzactie-omnia-capital-preia-o-parte-din-actiunile-cargo-buddy-platforma-lansata-de-mihai-nastase-21654638?utm"
      },
      {
        title: "Dumagas, controlat de Omnia Capital, pariază pe extindere",
        publication: "Ziarul Financiar",
        date: "Accessed 2024",
        excerpt: "Ziarul Financiar urmărește planurile de creștere ale transportatorului Dumagas după integrarea în portofoliul Omnia Capital.",
        url: "https://www.zf.ro/companii/transportatorul-local-dumagas-controlat-omnia-capital-pariaza-22167552?utm"
      },
      {
        title: "ZF Live: Matei Ladea despre strategia Omnia Capital",
        publication: "Ziarul Financiar",
        date: "Accessed 2024",
        excerpt: "Matei Ladea, cofondator Omnia Capital, explică la ZF Live modul în care fondul urmărește companii românești cu potențial regional.",
        url: "https://www.zf.ro/companii/zf-live-matei-ladea-cofondator-omnia-capital-ne-uitat-900-companii-21779125?utm"
      },
      {
        title: "Omnia Capital preia Dumagas de la Bancroft",
        publication: "CEE Legal Matters",
        date: "Accessed 2024",
        excerpt: "CEE Legal Matters analizează achiziția Dumagas de către Omnia Capital și implicarea echipei juridice în tranzacție.",
        url: "https://ceelegalmatters.com/deal-5/22871-deal-5-omnia-chief-evangelist-matei-ladea-on-dumagas-acquisition-from-bancroft?utm"
      },
      {
        title: "15 minute cu un antreprenor: Matei Ladea",
        publication: "Ziarul Financiar",
        date: "Accessed 2024",
        excerpt: "Interviul ZF 15 minute cu Matei Ladea explorează parcursul Omnia Capital și filosofia de parteneriat cu fondatorii.",
        url: "https://www.zf.ro/zf-15-minute-cu-un-antreprenor/zf-15-minute-cu-un-antreprenor-matei-ladea-cofondator-al-omnia-20778656?utm"
      },
      {
        title: "123credit.ro ridică 3 milioane de euro cu sprijinul Omnia Capital",
        publication: "Profit.ro",
        date: "Accessed 2024",
        excerpt: "Profit.ro detaliază runda de finanțare prin care Omnia Capital susține extinderea platformei 123credit.ro.",
        url: "https://www.profit.ro/povesti-cu-profit/startup-ul-123credit-ro-a-obtinut-o-finantare-de-3-milioane-de-euro-prin-intermediul-omnia-capital-in-a-doua-runda-de-finantare-20851209?utm"
      },
      {
        title: "Omnia Capital finalizează preluarea Dumagas",
        publication: "Romania Insider",
        date: "Accessed 2024",
        excerpt: "Romania Insider anunță finalizarea tranzacției prin care Omnia Capital a preluat transportatorul Dumagas.",
        url: "https://www.romania-insider.com/omnia-capital-dumagas-takeover-2023?utm"
      },
      {
        title: "Fondatorii Omnia Capital discută achiziția Dumagas",
        publication: "ZF Investiți în România",
        date: "Accessed 2024",
        excerpt: "Emisiunea ZF Investiți în România prezintă planurile fondatorilor Omnia Capital după achiziția transportatorului Dumagas.",
        url: "https://www.zf.ro/zf-investiti-in-romania/zf-investiti-in-romania-fondatorii-companiei-care-a-preluat-dumagas-22344218?utm"
      }
    ]
  },
  
  results: {
    title: "Track Record",
    description: "By combining sector-specific expertise, commercial acceleration and operational excellence, Omnia Prime delivers top-quartile returns while supporting Romania’s industrial and digital transformation.",
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
    description: "Dedicated growth-equity partner supporting Eastern Europe with institutional capital and hands-on execution.",
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