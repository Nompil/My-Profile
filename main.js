document.addEventListener('DOMContentLoaded', () => {
  // Navigation Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  const header = document.querySelector('.site-header');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      nav.classList.toggle('open');
      if (header) {
        header.classList.toggle('open');
      }
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
        if (header) {
          header.classList.remove('open');
        }
      });
    });
  }

  // Form submission affordance for the native Formspree post.
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', () => {
      const thanks = document.querySelector('.thanks');
      const submitButton = form.querySelector('button[type="submit"]');
      if (thanks) {
        thanks.classList.remove('hide');
      }
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
      }
    });
  }

  // Grounded portfolio Q&A.
  const assistantInput = document.getElementById('portfolio-question');
  const assistantButton = document.getElementById('portfolio-ask-button');
  const assistantTitle = document.getElementById('assistant-answer-title');
  const assistantBody = document.getElementById('assistant-answer-body');
  const assistantSources = document.getElementById('assistant-source-list');

  const portfolioAnswers = [
    {
      id: 'systems',
      patterns: ['system', 'systems analyst', 'business analyst', 'technical ba', 'solutions analyst', 'requirements'],
      title: 'Why is Nompilo suitable for a Systems Analyst role?',
      paragraphs: [
        'Nompilo fits Systems Analyst work because her portfolio shows the full analyst loop: understand the business process, map the system behaviour, document the gap, define the fix and support delivery.',
        'The strongest evidence is not only coursework. It is live-platform work, banking operations, SOP improvement and reporting automation.'
      ],
      bullets: [
        'Audited a live Laravel platform and documented 100+ security, logic, data integrity and architecture findings.',
        'Designed TrustCircle business rules, workflow logic, database structure and role-based access before building the platform.',
        'Co-authored an African Bank SOP improvement after identifying a recurring escalation pattern in the 3G support process.',
        'Built reporting structures that turned task tracking into repeatable weekly and monthly management views.'
      ],
      sources: [
        { label: 'Case studies', href: './projects.html' },
        { label: 'CV page', href: './cv.html' },
        { label: 'Reporting case study', href: './projects.html#reporting' }
      ]
    },
    {
      id: 'security',
      patterns: ['cyber', 'security', 'risk', 'vulnerability', 'protected', 'protection', 'rbac', 'audit', 'hunting', 'mitre', 't1078'],
      title: 'What cybersecurity evidence is already visible?',
      paragraphs: [
        'The portfolio now includes a dedicated cybersecurity case study plus security-minded systems analysis, QA and operational support evidence.',
        'The strongest public claim is grounded and specific: Nompilo can reason about attacker behaviour, access misuse, telemetry, audit findings and practical remediation.'
      ],
      bullets: [
        'Advanced Threat Hunting project covers hypothesis-driven hunting, IOC vs TTP reasoning, telemetry mapping, MITRE ATT&CK and T1078 Valid Accounts.',
        'InspHired audit work flagged SQL injection exposure, RBAC gaps, cross-tenant leakage and workflow risks.',
        'TrustCircle includes JWT authentication, role-based access control, bcrypt, SSL/TLS and AWS deployment considerations.',
        'African Bank support involved Active Directory security group assignment, Cisco ISE checks, Mimecast and service-provider escalation processes.'
      ],
      sources: [
        { label: 'Security section', href: './index.html#security-heading' },
        { label: 'Threat hunting case', href: './projects.html#threat-hunting' },
        { label: 'InspHired audit case', href: './projects.html#audit' },
        { label: 'Skills and certifications', href: './skills.html' }
      ]
    },
    {
      id: 'software',
      patterns: ['software', 'developer', 'full-stack', 'full stack', 'backend', 'frontend', 'build', 'code', 'trustcircle'],
      title: 'What proof shows she can build software?',
      paragraphs: [
        'The portfolio shows software delivery through deployed projects, backend and frontend implementation, database work and testing discipline.',
        'The strongest project proof is TrustCircle, supported by the Smart Irrigation Scheduler and internship development experience.'
      ],
      bullets: [
        'Built TrustCircle with Node.js, React, PostgreSQL, PayFast integration and AWS services.',
        'Delivered 350+ passing automated tests on TrustCircle.',
        'Built Smart Irrigation Scheduler for South African farmers with crop logic, weather forecasts and custom-domain deployment.',
        'Worked with React.js, JavaScript, MySQL, third-party APIs, GitHub and Trello-managed sprints during internship work.'
      ],
      sources: [
        { label: 'TrustCircle case study', href: './projects.html#trustcircle' },
        { label: 'Live TrustCircle', href: 'https://trustcircle.co.za' },
        { label: 'GitHub', href: 'https://github.com/Nompil' }
      ]
    },
    {
      id: 'qa',
      patterns: ['qa', 'test', 'testing', 'quality', 'bugs', 'issues', 'review'],
      title: 'What QA and audit evidence can employers verify?',
      paragraphs: [
        'Nompilo has practical QA evidence across platform auditing, workflow testing and automated tests.',
        'This matters because she can identify defects, explain their business impact and help teams move from findings to fixes.'
      ],
      bullets: [
        'Documented 100+ critical issues in a live multi-tenant platform.',
        'Classified security, business logic, data integrity and architecture issues by severity.',
        'Contributed to end-to-end testing and workflow review for InspHired Connect.',
        'Delivered 350+ automated tests passing on TrustCircle.'
      ],
      sources: [
        { label: 'InspHired audit case', href: './projects.html#audit' },
        { label: 'TrustCircle case study', href: './projects.html#trustcircle' }
      ]
    },
    {
      id: 'reporting',
      patterns: ['bi', 'data', 'dashboard', 'report', 'reporting', 'power bi', 'tracker', 'kpi'],
      title: 'What BI and reporting evidence is included?',
      paragraphs: [
        'The reporting case study shows Nompilo can structure operational data, automate reporting flow and produce management-friendly views.',
        'This supports BI Developer, Data Analyst and analyst roles where stakeholders need clear status, time and KPI visibility.'
      ],
      bullets: [
        'Designed SharePoint list structures for task tracking.',
        'Connected Power Automate flows to support repeatable reporting.',
        'Built Power BI dashboards with weekly, monthly, employee, task and status views.',
        'Prepared reporting outputs for Excel and PDF review.'
      ],
      sources: [
        { label: 'Reporting case study', href: './projects.html#reporting' },
        { label: 'Skills page', href: './skills.html' }
      ]
    },
    {
      id: 'different',
      patterns: ['different', 'stand out', 'standout', 'top applicant', 'competitor', 'unique', 'special'],
      title: 'What makes Nompilo different from other applicants?',
      paragraphs: [
        'Nompilo stands out because her profile is not only a list of tools. It shows how she thinks through messy systems, documents risk, improves process and still builds working software.',
        'Her personal principle also adds a memorable human layer: dreams delayed are not dreams denied. It shows resilience without distracting from the technical proof.'
      ],
      bullets: [
        'She combines analyst thinking, developer implementation, QA discipline, support operations, security awareness and reporting.',
        'She has numbers recruiters can remember: 100+ findings, 350+ tests, 500+ SIM assets and 9 certifications.',
        'She can speak to both technical teams and business stakeholders because her work includes systems, SOPs, dashboards and live support.',
        'Her cybersecurity evidence is now more specific: threat hunting concepts, MITRE ATT&CK T1078, telemetry mapping, platform audit work and secure systems thinking.'
      ],
      sources: [
        { label: 'Home proof points', href: './index.html' },
        { label: 'About page', href: './about.html' },
        { label: 'Case studies', href: './projects.html' }
      ]
    },
    {
      id: 'availability',
      patterns: ['available', 'availability', 'start', 'immediately', 'notice', 'remote', 'relocate', 'location'],
      title: 'Is Nompilo available immediately?',
      paragraphs: [
        'Yes. The portfolio positions Nompilo as available immediately, based in Midrand, Johannesburg, and open to remote roles or opportunities across South Africa.'
      ],
      bullets: [
        'No notice period required.',
        'Open to analyst, developer, QA, IT support, cybersecurity, BI, data and system administration roles.',
        'Recruiters can contact her directly by email, phone, LinkedIn or the portfolio contact page.'
      ],
      sources: [
        { label: 'Contact page', href: './contact.html' },
        { label: 'CV page', href: './cv.html' },
        { label: 'LinkedIn', href: 'https://linkedin.com/in/nompilo-eugenia-mchunu-2385a763' }
      ]
    },
    {
      id: 'cv',
      patterns: ['cv', 'resume', 'document', 'ats', 'download'],
      title: 'Which CV should recruiters use?',
      paragraphs: [
        'Recruiters should use NE Mchunu CV as the primary hiring document. The ATS version is available for portals that parse documents more strictly.'
      ],
      bullets: [
        'Primary CV: NE Mchunu CV.docx.',
        'ATS document: NE Mchunu CV ATS.docx.',
        'The CV page also summarises best-fit roles, availability, security direction and supported feedback.'
      ],
      sources: [
        { label: 'CV page', href: './cv.html' },
        { label: 'Download NE Mchunu CV', href: './NE Mchunu CV.docx' },
        { label: 'Download ATS CV', href: './NE Mchunu CV ATS.docx' }
      ]
    }
  ];

  const renderAssistantAnswer = (answer) => {
    if (!assistantTitle || !assistantBody || !assistantSources) {
      return;
    }

    assistantTitle.textContent = answer.title;
    assistantBody.replaceChildren();
    assistantSources.replaceChildren();

    answer.paragraphs.forEach((paragraph) => {
      const p = document.createElement('p');
      p.textContent = paragraph;
      assistantBody.appendChild(p);
    });

    if (answer.bullets.length) {
      const list = document.createElement('ul');
      answer.bullets.forEach((bullet) => {
        const item = document.createElement('li');
        item.textContent = bullet;
        list.appendChild(item);
      });
      assistantBody.appendChild(list);
    }

    answer.sources.forEach((source) => {
      const link = document.createElement('a');
      link.href = source.href;
      link.textContent = source.label;
      if (source.href.startsWith('http') || source.href.endsWith('.pdf')) {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
      }
      assistantSources.appendChild(link);
    });
  };

  const findPortfolioAnswer = (question) => {
    const normalizedQuestion = question.trim().toLowerCase();
    if (!normalizedQuestion) {
      return portfolioAnswers[5];
    }

    let bestAnswer = portfolioAnswers[5];
    let bestScore = 0;

    portfolioAnswers.forEach((answer) => {
      const score = answer.patterns.reduce((total, pattern) => {
        return normalizedQuestion.includes(pattern) ? total + pattern.length : total;
      }, 0);

      if (score > bestScore) {
        bestScore = score;
        bestAnswer = answer;
      }
    });

    return bestAnswer;
  };

  const askPortfolio = () => {
    if (!assistantInput) {
      return;
    }
    renderAssistantAnswer(findPortfolioAnswer(assistantInput.value));
  };

  if (assistantInput && assistantButton) {
    assistantButton.addEventListener('click', askPortfolio);
    assistantInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        askPortfolio();
      }
    });

    document.querySelectorAll('[data-question]').forEach((button) => {
      button.addEventListener('click', () => {
        assistantInput.value = button.dataset.question;
        askPortfolio();
      });
    });

    renderAssistantAnswer(portfolioAnswers[0]);
  }

  // Dynamic Timestamp
  const dateSpan = document.getElementById('current-date');
  if (dateSpan) {
    dateSpan.textContent = new Date().toLocaleString('en-ZA', {
      timeZone: 'Africa/Johannesburg',
      dateStyle: 'long',
      timeStyle: 'short'
    });
  }

});
