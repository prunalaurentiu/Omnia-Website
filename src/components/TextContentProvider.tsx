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
    sections: Record<
      string,
      {
        title: string;
        links: { label: string; href: string }[];
      }
    >;
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
        slug: "eastern-europe-hidden-bottleneck",
        title: "Eastern Europe's Hidden Bottleneck: When Strong Products Meet Weak Sales",
        excerpt:
          "Across Central and Eastern Europe, founder-led companies with world-class products plateau because commercial systems never caught up. We explore the historical roots and the operating fixes that unlock disciplined growth.",
        content:
          "Across Central and Eastern Europe, a quiet paradox plays out in boardrooms every day. Companies that build excellent products and deliver reliable services find themselves inexplicably stuck—not because they can't compete on quality, but because they never learned to sell. The roots run deep. For half a century under planned economies, demand was allocated rather than won. Factories focused on production targets, not customer conversations. Sales wasn't a profession; it was a distribution function.\n\nThat legacy has left scars that still shape how businesses operate today. Walk into a typical mid-sized firm in Warsaw, Bucharest, or Sofia, and you'll often find the same pattern: the founder is still the chief salesperson. Pipeline visibility lives in spreadsheets that only one person understands. Forecasts swing wildly. Big deals close—or don't—based on personal relationships rather than process. Pricing remains stubbornly cost-plus. Sales teams discount reflexively rather than defending value. Deal terms vary wildly from customer to customer, quietly eroding margins through unmanaged concessions. When procurement departments across Western Europe send out tenders, the instinct is to chase volume by undercutting competitors, not to walk away or reframe the conversation.\n\nThe commercial infrastructure that Western peers take for granted is often missing or underused. CRM systems exist but aren't trusted or properly configured. There's little revenue operations expertise, weak attribution, almost no systematic win-loss analysis. Customer success—the discipline of ensuring clients actually realize value after the contract is signed—barely registers as a category. Churn quietly offsets new business, masking weak net retention that never makes it into board discussions. Meanwhile, the brand side remains thin. Strong engineering rarely translates into compelling narratives. Case studies, third-party certifications, and category leadership signals that would reassure Western buyers are scarce. Export ambitions run into friction: language barriers, regulatory complexity, labeling standards, VAT and GDPR compliance, and the challenge of selecting and managing distributors in unfamiliar markets.\n\nThe talent picture compounds the problem. Formal sales training is rare. Compensation structures often cap commissions, limiting upside motivation. Language skills—particularly business-level English or German—remain patchy, restricting which markets teams can credibly address. Banks haven't helped. Conservative lending cultures favor tangible assets over brand equity, pushing marketing and commercial investment down the priority list. The result is a working-capital trap: long payment cycles strain cash flow, which further delays investment in the very capabilities that could accelerate growth. This isn't about effort or intelligence. It's about systems that were never built. While post-transition companies perfected operations and manufacturing, sales and marketing were treated as support functions, not core disciplines. The cultural and institutional memory of how to build markets—rather than just fulfill demand—simply isn't there.\n\nThe cost is measured in stalled trajectories. Growth plateaus despite product strength. Pricing power erodes. Customer acquisition becomes more expensive, sales cycles stretch longer, and revenue concentrates dangerously in a handful of accounts. When exit conversations begin, technical excellence isn't enough to overcome weak commercial foundations—and valuations suffer accordingly. Yet the opportunity is equally clear. The region's next productivity leap won't come from making better things—it already does that well. It will come from building better markets for what it makes: structured pricing that captures value, disciplined pipelines that forecast reliably, credible brands that command premium positioning, export-ready operations that scale across borders, and customer success models that turn one-time buyers into compounding relationships.\n\nThis isn't a product problem. It's a commercial system problem. And unlike product development, commercial systems can be installed, learned, and scaled—if leaders recognize what's missing and commit to building it.",
        date: "April 5, 2024",
        readTime: "9 min read",
        category: "Commercial Strategy"
      },
      {
        slug: "building-value-through-sustainable-ownership",
        title: "Building Value Through Sustainable Ownership",
        excerpt:
          "Governance, people, and environmental discipline are no longer compliance checkboxes—they're the operating system of superior exits. Omnia's sustainable ownership model shows how ESG compounds value in practice.",
        content:
          "In private equity, ownership isn't just about control—it's where value actually compounds. And increasingly, the businesses that command the best exits are those that treated governance, people, and environmental responsibility as strategic priorities rather than compliance checkboxes. Start with governance. Clean board discipline, independent advisors who challenge assumptions, a business intelligence manager reporting directly to the board, tight financial controls, and proper minority-shareholder protections—these aren't luxuries. They sharpen decision-making, reduce the risk of fraud or opacity, and make a company credible to institutional buyers. When exit conversations begin, governance gaps shrink the buyer universe and invite discounts. Strong governance does the opposite.\n\nThen there's the social side—how a company actually treats its people. Inclusive leadership that draws from the full talent pool. Health benefits that go beyond the statutory minimum. Salaries that are indexed above inflation so people aren't constantly job-hunting. Profit-sharing that aligns incentives. Real investment in safety and training. These aren't just ethical choices; they're economic ones. Retention improves, productivity rises, and the company earns the community license to operate that regulators and customers increasingly expect.\n\nOmnia Capital treats ESG—environmental, social, and governance factors—not as a reporting burden but as a primary value-creation lever. That view reflects market reality: Western strategics and private equity buyers now systematically price ESG into their bids. Companies with clean governance, low environmental risk, and strong employee metrics move through due diligence faster and command premium valuations. Those without get discounted or filtered out entirely.\n\nAlthough an SFDR Article 6 investment firm, Omnia sets a practical floor: comply with European sustainability disclosure rules at minimum, but aim higher wherever it creates value. ESG isn't bolted on after a deal closes—it's hard-wired into screening, investment committee papers, and shareholder agreements from day one. Exclusion lists, \"do no significant harm\" checks aligned with EU Taxonomy standards, and diligence protocols borrowed from institutional LPs surface both risks and clear upgrade paths. Deals move forward only when there's a credible plan to address what's broken.\n\nOn the environmental side, the focus is operational: efficiency improvements that cut costs and reduce regulatory exposure. At Dumagas, a portfolio logistics company, average fuel consumption and CO₂ emissions per vehicle dropped by more than a third through fleet upgrades and route optimization. Certifications—EcoVadis, Green Carrier, ISO 50001—reinforced credibility with customers and regulators. Simple process fixes, like automated invoicing that eliminated unnecessary trips, compounded the gains.\n\nThroughout, Omnia tracks ESG KPIs—carbon intensity, employee turnover, diversity metrics, safety incidents—alongside financial performance. That transparency speeds diligence when exit time arrives, de-risks the process, and often unlocks premium pricing, especially with Western buyers applying their own ESG screens. The approach is pragmatic, not ideological. Omnia doesn't claim an Article 9 \"sustainable investment\" label, but it does operate ESG-forward in practice, ensuring that none of its investments undermine EU climate and social objectives. Negatives are either avoided or actively mitigated.\n\nBehind this stance is Matei Ladea's conviction, shaped by formal training in sustainable investing and the UN Sustainable Development Goals: ESG isn't a separate workstream—it's the operating system of modern value creation. Integrating culture, governance, and environmental realism doesn't just produce better exits. It builds more resilient companies and delivers superior outcomes for investors, employees, and society alike.",
        date: "April 12, 2024",
        readTime: "8 min read",
        category: "Sustainable Ownership"
      },
      {
        slug: "why-romania-why-now",
        title: "Why Romania—and Why Now",
        excerpt:
          "Romania pairs accelerating institutional capital with founder-led succession needs. We outline the market thesis powering Omnia's Fix → Build → Scale playbook and why the timing is right for disciplined operators.",
        content:
          "Romania is the most compelling private-equity market in Eastern Europe because it combines real economic momentum with structural underpenetration of professional capital. After a soft 2023, fundraising rebounded sharply in 2024—catalyzed by the EIF-managed Recovery Equity Fund and local family offices—signaling both liquidity and policy support. Yet penetration remains thin relative to GDP, which keeps pricing attractive and the runway for professional investors long. The pipes are opening, the pool is still shallow, and the upside is disproportionate.\n\nThe market offers repeatable themes: fragmented mid-market leaders in consumer services, healthcare, logistics, and tech-enabled B2B; owner-operator succession; and businesses that can export process discipline and digitalization to win regionally. Deal flow is robust—consumer and services led 2024 activity—and exits, though still concentrated, doubled in value, proving realizations are feasible even without active IPO windows.\n\nWe anchor our conviction in impact that shows up in financials and headcount, not press releases. From 2019 to 2023, PE-backed firms in Romania added tens of thousands of jobs and delivered positive five-year EBITDA growth despite a volatile 2023 energy cycle. That's evidence operational value creation travels well through macro noise. That's the canvas we paint on.\n\nOmnia Capital's approach converts this structural arbitrage into compounding cash flows through an operator's lens: Fix → Build → Scale.\n\nFix: management, governance, cash flow, commercial discipline, investment rationalization, warranty and claims control, and a CFO upgrade with IFRS-ready reporting.\n\nBuild: commercial engines—account-based sales, yield management—digitalization through telematics, ERP and BI systems, workflow automation, and professional organization design with KPI-linked incentives.\n\nScale: buy-and-build in fragmented niches, cross-border roll-outs into DACH, Benelux, and CEE, and structured co-investments to accelerate M&A.\n\nWhy Romania for Omnia specifically? We're local enough to price complexity and global enough to unlock markets. The market still lacks domestic pensions as limited partners—another sign the S-curve is early—while foreign capital already dominates fundraising. We turn that to our advantage with Western-grade governance and exit optionality: trade sales or dual-track processes where relevant. Our deal activity illustrates proprietary access and our agnostic investment thesis, from tech-enabled operators to logistics and transportation, supporting real-economy verticals.",
        date: "April 19, 2024",
        readTime: "7 min read",
        category: "Market Thesis"
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
        date: "",
        excerpt: "HotNews.ro prezintă modul în care marketplace-ul 123Credit, susținut de Omnia Capital, a devenit liderul digital al creditării din România după o creștere accelerată.",
        url: "https://hotnews.ro/123credit-creste-de-5-ori-intr-un-an-noul-lider-digital-al-creditarii-din-romania-2070591?utm"
      },
      {
        title: "Dumagas, companie din portofoliul Omnia Capital, intră pe segmentul auto",
        publication: "Ziarul Financiar",
        date: "",
        excerpt: "Ziarul Financiar relatează extinderea transportatorului Dumagas, preluat de Omnia Capital, către noi linii de business din zona auto.",
        url: "https://www.zf.ro/auto/dumagas-preluata-in-urma-cu-doi-ani-de-omnia-capital-a-intrat-pe-22769406?utm"
      },
      {
        title: "Matei Ladea explică cum companiile românești pot accelera investițiile",
        publication: "Ziarul Financiar",
        date: "",
        excerpt: "Cofondatorul Omnia Capital, Matei Ladea, discută despre soluțiile prin care antreprenorii locali pot finanța planuri ambițioase de creștere.",
        url: "https://www.zf.ro/companii/matei-ladea-omnia-capital-companiile-romanesti-pot-acum-investi-in-22779046?utm"
      },
      {
        title: "Omnia Capital investește în platforma Cargo Buddy",
        publication: "Profit.ro",
        date: "",
        excerpt: "Profit.ro anunță preluarea unei participații la Cargo Buddy de către Omnia Capital pentru a accelera digitalizarea transporturilor.",
        url: "https://www.profit.ro/povesti-cu-profit/auto-transporturi/tranzactie-omnia-capital-preia-o-parte-din-actiunile-cargo-buddy-platforma-lansata-de-mihai-nastase-21654638?utm"
      },
      {
        title: "Dumagas, controlat de Omnia Capital, pariază pe extindere",
        publication: "Ziarul Financiar",
        date: "",
        excerpt: "Ziarul Financiar urmărește planurile de creștere ale transportatorului Dumagas după integrarea în portofoliul Omnia Capital.",
        url: "https://www.zf.ro/companii/transportatorul-local-dumagas-controlat-omnia-capital-pariaza-22167552?utm"
      },
      {
        title: "ZF Live: Matei Ladea despre strategia Omnia Capital",
        publication: "Ziarul Financiar",
        date: "",
        excerpt: "Matei Ladea, cofondator Omnia Capital, explică la ZF Live modul în care fondul urmărește companii românești cu potențial regional.",
        url: "https://www.zf.ro/companii/zf-live-matei-ladea-cofondator-omnia-capital-ne-uitat-900-companii-21779125?utm"
      },
      {
        title: "Omnia Capital preia Dumagas de la Bancroft",
        publication: "CEE Legal Matters",
        date: "",
        excerpt: "CEE Legal Matters analizează achiziția Dumagas de către Omnia Capital și implicarea echipei juridice în tranzacție.",
        url: "https://ceelegalmatters.com/deal-5/22871-deal-5-omnia-chief-evangelist-matei-ladea-on-dumagas-acquisition-from-bancroft?utm"
      },
      {
        title: "15 minute cu un antreprenor: Matei Ladea",
        publication: "Ziarul Financiar",
        date: "",
        excerpt: "Interviul ZF 15 minute cu Matei Ladea explorează parcursul Omnia Capital și filosofia de parteneriat cu fondatorii.",
        url: "https://www.zf.ro/zf-15-minute-cu-un-antreprenor/zf-15-minute-cu-un-antreprenor-matei-ladea-cofondator-al-omnia-20778656?utm"
      },
      {
        title: "123credit.ro ridică 3 milioane de euro cu sprijinul Omnia Capital",
        publication: "Profit.ro",
        date: "",
        excerpt: "Profit.ro detaliază runda de finanțare prin care Omnia Capital susține extinderea platformei 123credit.ro.",
        url: "https://www.profit.ro/povesti-cu-profit/startup-ul-123credit-ro-a-obtinut-o-finantare-de-3-milioane-de-euro-prin-intermediul-omnia-capital-in-a-doua-runda-de-finantare-20851209?utm"
      },
      {
        title: "Omnia Capital finalizează preluarea Dumagas",
        publication: "Romania Insider",
        date: "",
        excerpt: "Romania Insider anunță finalizarea tranzacției prin care Omnia Capital a preluat transportatorul Dumagas.",
        url: "https://www.romania-insider.com/omnia-capital-dumagas-takeover-2023?utm"
      },
      {
        title: "Fondatorii Omnia Capital discută achiziția Dumagas",
        publication: "ZF Investiți în România",
        date: "",
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