export const data = {
  name: 'Preetham Reddy Matta',
  shortName: 'Preetham Reddy',
  title: 'Data Scientist',
  tagline: 'I make data\ndo something.',
  subTagline: 'ML engineer at Bolt. Statistical thinker. Building models that cut churn, predict demand, and create competitive edge.',
  location: 'Cleveland, OH',
  email: 'preethamreddy656@gmail.com',
  phone: '216-418-0205',
  linkedin: 'https://www.linkedin.com/in/preethamreddy-3381a21ba',
  github: 'https://github.com/preet',

  stats: [
    { value: '10%', label: 'Retention Uplift', sub: 'at Bolt via optimization models' },
    { value: '24%', label: 'MAPE Reduction', sub: 'Walmart forecasting vs baseline' },
    { value: '45%', label: 'Engagement Lift', sub: 'via ML-driven user segmentation' },
    { value: '15%', label: 'Accuracy Gain', sub: 'stock price prediction at Cognizant' },
  ],

  about: [
    "Data Scientist with 3+ years of experience owning the full ML lifecycle — from exploratory analysis and feature engineering, through model training and validation, to production deployment and monitoring.",
    "At Bolt, I build supply-demand optimization systems and demand forecasting pipelines that directly move retention and revenue metrics. Before that, at Cognizant, I led analytical work that reduced customer drop-offs by 50 percentage points and saved 10 hours per week in manual reporting.",
    "My work spans forecasting (ARIMA, SARIMA, Prophet), NLP, recommendation systems, and rigorous A/B testing. I care about models that get used — which means building for interpretability, reliability, and real business alignment.",
  ],

  experience: [
    {
      company: 'Bolt',
      role: 'Data Scientist',
      type: 'Internship',
      period: 'June 2025 – Present',
      location: 'Cleveland, OH',
      color: 'teal' as const,
      bullets: [
        'Built ML models to optimize supply-demand marketplace efficiency, contributing to a 10% increase in customer retention and a 5% reduction in revenue churn on legacy products.',
        'Delivered customer preference research that informed product roadmap decisions, resulting in a 10% increase in targeted sales.',
        'Designed and deployed interactive stakeholder dashboards translating complex model outputs into actionable business signals.',
      ],
    },
    {
      company: 'Cleveland State University',
      role: 'Graduate Teaching Assistant',
      type: 'Part-time',
      period: 'May 2024 – Sep 2024',
      location: 'Cleveland, OH',
      color: 'amber' as const,
      bullets: [
        'Instructed graduate-level SQL including joins, aggregations, indexing, and query performance tuning.',
        'Evaluated database design projects and provided structured feedback on schema normalization and optimization strategies.',
      ],
    },
    {
      company: 'Cleveland State University',
      role: 'Statistics Tutor',
      type: 'Part-time',
      period: 'Jan 2024 – Sep 2024',
      location: 'Cleveland, OH',
      color: 'amber' as const,
      bullets: [
        'Tutored 40+ students across Statistics, Probability, Calculus, and Algebra over three consecutive semesters.',
        'Developed structured explanation frameworks that improved student understanding of quantitative reasoning.',
      ],
    },
    {
      company: 'Cognizant',
      role: 'Data Analyst',
      type: 'Full-time',
      period: 'Jul 2021 – Jun 2023',
      location: 'Hyderabad, India',
      color: 'violet' as const,
      bullets: [
        'Conducted comprehensive EDA using advanced visualization and summary statistics, enabling data-driven decisions that contributed to a 10% revenue increase and 20% operational efficiency improvement.',
        'Performed regression analysis on stock price movements vs. industry trends, achieving 15% higher predictive accuracy over the previous 4-year benchmark.',
        'Built Tableau and Power BI dashboards from Amplitude and Segment data, eliminating 10 hours per week of manual reporting.',
        'Applied hypothesis testing, segmentation analysis, and ML algorithms that reduced sign-up drop-offs from 60% to 10% and lifted user engagement by 45%.',
      ],
    },
  ],

  projects: [
    {
      title: 'Walmart Weekly Sales Forecasting',
      subtitle: 'Time-Series Forecasting · Retail Analytics',
      description: 'Analyzed 143 weeks of sales across 45 stores to build production-grade demand forecasting models. Discovered that external factors like fuel price, CPI, and temperature collectively explain less than 3% of variance — shifting the strategy toward seasonality-driven modeling.',
      outcomes: [
        '24% MAPE reduction vs. moving-average baseline using Prophet',
        'Revealed holiday spikes and store-level variability guiding inventory and staffing decisions',
        'Compared ARIMA, SARIMA, and Prophet; Prophet won on both accuracy and interpretability',
      ],
      tags: ['Python', 'Prophet', 'ARIMA', 'SARIMA', 'Matplotlib', 'Seaborn', 'Pandas'],
      color: 'teal' as const,
      featured: true,
      icon: '📈',
    },
    {
      title: 'Amazon A/B Testing & LTV Modeling',
      subtitle: 'Statistical Analysis · Product Analytics',
      description: 'End-to-end pricing strategy analysis on 1,000+ Amazon product listings. Designed a statistically rigorous A/B test, built a Customer Lifetime Value model, and delivered a complete engagement and pricing strategy grounded in bootstrap simulations and power analysis.',
      outcomes: [
        'Identified a statistically significant 6% engagement uplift for high-discount products',
        'Revealed top 25% of users contribute 80% of total LTV — enabling precise targeting',
        'Delivered complete stats workflow: t-tests, chi-square, confidence intervals, power analysis',
      ],
      tags: ['Python', 'A/B Testing', 'LTV Modeling', 'Bootstrap', 'scipy', 'pandas', 'Seaborn'],
      color: 'amber' as const,
      featured: true,
      icon: '🧪',
    },
    {
      title: 'Uber Fare Prediction — Spatial-Temporal Modeling',
      subtitle: 'Geospatial ML · Regression Modeling',
      description: 'Modeled 190K+ Uber trips using engineered geospatial and temporal features. Systematically benchmarked Linear Regression, Random Forest, and XGBoost — achieving strong spatial prediction accuracy with significant RMSE reduction.',
      outcomes: [
        'R² up to 0.79 with XGBoost after geospatial feature engineering',
        '15% RMSE reduction (5.08 → 4.32) vs. baseline model',
        'Key features: haversine distance, time-of-day bins, day-of-week, and pickup zone clustering',
      ],
      tags: ['Python', 'XGBoost', 'Random Forest', 'Scikit-learn', 'Geospatial', 'Feature Engineering'],
      color: 'violet' as const,
      featured: false,
      icon: '🗺️',
    },
  ],

  skills: {
    'ML & Modeling': [
      { name: 'XGBoost / Random Forest', level: 92 },
      { name: 'Neural Networks / LSTM', level: 85 },
      { name: 'ARIMA / SARIMA / Prophet', level: 90 },
      { name: 'NLP (Naïve Bayes, TF-IDF)', level: 82 },
      { name: 'Recommendation Systems', level: 80 },
    ],
    'Statistics & Analysis': [
      { name: 'A/B Testing & Hypothesis Testing', level: 92 },
      { name: 'Customer LTV Modeling', level: 88 },
      { name: 'Segmentation & Clustering', level: 85 },
      { name: 'Regression Analysis', level: 90 },
      { name: 'EDA & Feature Engineering', level: 94 },
    ],
    'Engineering & MLOps': [
      { name: 'Python', level: 95 },
      { name: 'SQL (PostgreSQL)', level: 90 },
      { name: 'MLflow / Experiment Tracking', level: 82 },
      { name: 'AWS SageMaker', level: 80 },
      { name: 'Docker / FastAPI', level: 78 },
    ],
    'Tools & Platforms': [
      { name: 'Tableau / Power BI', level: 88 },
      { name: 'Matplotlib / Seaborn', level: 92 },
      { name: 'R', level: 75 },
      { name: 'Flask / REST APIs', level: 76 },
      { name: 'Linux / CI-CD', level: 74 },
    ],
  },

  education: [
    {
      school: 'Cleveland State University',
      degree: "Master's in Computer Science",
      period: 'Aug 2023 – May 2025',
      location: 'Cleveland, OH',
    },
    {
      school: 'Keshav Memorial College of Engineering',
      degree: "Bachelor's in Computer Science",
      period: 'Aug 2018 – May 2022',
      location: 'Hyderabad, India',
    },
  ],

  certifications: [
    'Supervised Machine Learning: Regression & Classification',
    'Advanced Learning Algorithms',
    'Unsupervised Learning, Recommenders & Reinforcement Learning',
  ],
}
