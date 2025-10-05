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
    performanceMetrics: {
      label: string;
      value: number;
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
    brandName: "OMNIA CAPITAL",
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
    headline: "Creștem platforme profitabile prin execuție operațională",
    description: "Omnia Capital combines strategic vision with operational excellence to build and scale profitable technology platforms. We partner with exceptional founders to create sustainable competitive advantages.",
    buttons: {
      primary: "Partner With Us",
      secondary: "View Portfolio"
    },
    metrics: {
      aum: {
        value: "€462M",
        label: "Assets Under Management"
      },
      companies: {
        value: "16+",
        label: "Portfolio Companies"
      },
      successRate: {
        value: "95%",
        label: "Success Rate"
      }
    }
  },
  
  strategy: {
    title: "Strategy",
    description: "Our three-pillar approach ensures sustainable growth and exceptional returns through strategic development, operational excellence, and outcome-focused execution.",
    pillars: {
      development: {
        title: "Development",
        description: "We identify and develop emerging technology platforms with strong market potential and scalable business models that can drive sustainable growth.",
        features: [
          "Market Research & Analysis - Deep dive into sector trends and competitive landscapes",
          "Product Development - Technical due diligence and product roadmap optimization", 
          "Technology Infrastructure - Scalable architecture and platform development",
          "Team Building - Recruiting top talent and building high-performance teams"
        ]
      },
      operations: {
        title: "Operations",
        description: "Our operational expertise helps portfolio companies optimize processes, improve efficiency, and accelerate growth through proven methodologies.",
        features: [
          "Process Optimization - Streamlining workflows and eliminating inefficiencies",
          "Operational Excellence - Implementing best-in-class operational frameworks",
          "Strategic Partnerships - Building key relationships across the value chain",
          "Resource Allocation - Optimizing capital deployment and human resources"
        ]
      },
      outcomes: {
        title: "Outcomes",
        description: "We focus on sustainable, measurable outcomes that create long-term value for all stakeholders through data-driven approaches.",
        features: [
          "Performance Metrics - KPI tracking and data-driven decision making",
          "Value Creation - Sustainable growth strategies and market expansion",
          "Exit Strategies - Strategic planning for optimal exit timing and valuation",
          "Stakeholder Returns - Maximizing returns for investors, founders, and employees"
        ]
      }
    }
  },
  
  team: {
    title: "Leadership Team",
    description: "Our experienced team combines deep industry expertise with operational excellence to drive exceptional results for our portfolio companies.",
    members: [
      {
        name: "Alexandra Chen",
        role: "Managing Partner",
        bio: "Former McKinsey partner with 15+ years of strategic consulting experience across technology and healthcare sectors.",
        experience: "15+ years experience"
      },
      {
        name: "David Rodriguez",
        role: "Investment Partner", 
        bio: "Ex-Goldman Sachs VP with expertise in growth equity and technology investments across Europe and North America.",
        experience: "12+ years experience"
      },
      {
        name: "Sarah Mitchell",
        role: "Operating Partner",
        bio: "Former CTO of three successful tech startups with deep expertise in scaling technology platforms and building high-performing teams.",
        experience: "18+ years experience"
      },
      {
        name: "Michael Thompson",
        role: "Principal",
        bio: "Former management consultant at McKinsey & Company with specialized focus on technology sector investments and operational transformations across Central and Eastern Europe.",
        experience: "10+ years experience"
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
    description: "Recent coverage and recognition of Omnia Capital's investment approach and portfolio company successes.",
    coverage: [
      {
        title: "Omnia Capital Leads €25M Series B in TechFlow",
        publication: "European Private Equity",
        date: "March 20, 2024",
        excerpt: "Investment focuses on scaling TechFlow's AI-powered workflow automation platform across European markets."
      },
      {
        title: "The Rise of Operational Private Equity in Europe",
        publication: "Financial Times",
        date: "March 12, 2024", 
        excerpt: "Omnia Capital featured as a leading example of hands-on investment approach driving superior returns."
      },
      {
        title: "Sustainability in Tech Investments",
        publication: "TechCrunch Europe",
        date: "February 25, 2024",
        excerpt: "How Omnia Capital integrates ESG principles into its investment thesis and portfolio management."
      }
    ]
  },
  
  results: {
    title: "Track Record",
    description: "Our disciplined approach and operational expertise have delivered consistent superior returns across market cycles.",
    metrics: [
      {
        label: "Net IRR",
        value: "28.4%",
        description: "Across all funds since inception"
      },
      {
        label: "Revenue Growth",
        value: "4.2x",
        description: "Average portfolio company growth"
      },
      {
        label: "Job Creation",
        value: "2,400+",
        description: "New positions across portfolio"
      },
      {
        label: "Market Cap",
        value: "€1.8B",
        description: "Combined portfolio valuation"
      }
    ],
    performanceMetrics: [
      {
        label: "Portfolio Growth",
        value: 85,
        description: "Year-over-year portfolio value increase"
      },
      {
        label: "Operational Efficiency", 
        value: 92,
        description: "Process optimization and cost reduction"
      },
      {
        label: "Market Expansion",
        value: 78,
        description: "New market penetration success rate"
      },
      {
        label: "Revenue Growth",
        value: 89,
        description: "Portfolio company revenue increase"
      }
    ],
    investorPerformance: [
      {
        metric: "Net IRR",
        value: "15.2%",
        description: "Internal Rate of Return"
      },
      {
        metric: "DPI Multiple",
        value: "2.8x",
        description: "Distributions to Paid-In Capital"
      },
      {
        metric: "Success Rate",
        value: "95%",
        description: "Profitable Exits"
      }
    ],
    portfolioHighlights: [
      {
        company: "TechFlow",
        industry: "Workflow Automation",
        investment: "Series A, 2022",
        outcome: "3.2x revenue growth",
        multiple: "4.1x"
      },
      {
        company: "DataVault",
        industry: "Cybersecurity",
        investment: "Growth, 2021",
        outcome: "Exit to Cisco",
        multiple: "5.8x"
      },
      {
        company: "CloudScale",
        industry: "Infrastructure",
        investment: "Series B, 2020",
        outcome: "IPO 2023",
        multiple: "7.2x"
      }
    ]
  },
  
  contact: {
    title: "Get in Touch",
    description: "Ready to partner with us? We'd love to hear from exceptional entrepreneurs and co-investors.",
    office: {
      title: "Bucharest Office",
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
    brandName: "OMNIA CAPITAL",
    description: "Building profitable technology platforms through operational excellence and strategic vision.",
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
    copyright: "© 2024 Omnia Capital. All rights reserved."
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