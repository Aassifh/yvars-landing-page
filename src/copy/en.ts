import type { Copy } from './types';

export const en: Copy = {
  meta: {
    title: 'YVARS · Voice qualitative research and market intelligence',
    description:
      'YVARS runs voice interviews in French, English and Arabic, then links those verbatims to competitive intelligence. A workspace for deciding, not a frozen deck.',
  },
  a11y: {
    skip: 'Skip to content',
    home: 'YVARS, back to top',
    sections: 'Sections',
    sectionsMobile: 'Mobile sections',
    languages: 'Language',
    footer: 'Footer',
  },
  nav: {
    product: 'Product',
    useCases: 'Use cases',
    audience: 'Who it is for',
    why: 'Why YVARS',
    faq: 'FAQ',
    cta: 'Request a demo',
    participate: 'Take part',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  hero: {
    eyebrow: 'Qualitative research platform',
    lines: ['Hear your customers.', 'See the market.', 'Act.'],
    subtitle:
      'YVARS runs voice interviews that adapt in real time, then links those verbatims to competitive intelligence. You keep the study frame; you get material you can still interrogate.',
    languages: 'Studies run in French, English and Arabic.',
    cta: 'Request a demo',
    secondary: 'See the product',
  },
  story: {
    eyebrow: 'The product',
    title: 'One study, from voice to shelf.',
    subtitle:
      'Scroll: the same workspace transforms, from the guide to the interview, through to a confrontation with market prices. One protocol, three languages: French, English, Arabic.',
    live: 'Study',
    study: 'Hydrating cream',
    beats: [
      {
        id: 'design',
        kicker: '01',
        title: 'Design',
        description:
          'Turn a business question into a guide the interview actually follows: research axes, brief, probing rules, quotas. You frame the field. The conversation does not drift off-topic.',
      },
      {
        id: 'collect',
        kicker: '02',
        title: 'Collect',
        description:
          'You invite your own base: clients, prospects, recruiter sample. The participation link captures profiles and quotas before the first minute of voice, for clean segmentation.',
      },
      {
        id: 'interview',
        kicker: '03',
        title: 'Interview',
        description:
          '1:1 voice interviews that probe in real time based on what each person says. Not a frozen script: a hesitation, a contradiction, an unspoken point is dug into, in French, English or Arabic.',
      },
      {
        id: 'analyze',
        kicker: '04',
        title: 'Analyze',
        description:
          'Transcripts, axes, insight radar and analysis chat. Explore verbatims as soon as sessions arrive, without waiting for the end of fieldwork to open the file.',
      },
      {
        id: 'intel',
        kicker: '05',
        title: 'Cross',
        description:
          'What people say, set against what is on the shelf: prices, private label, gaps. The Intelligence Lab is for deciding, not for stacking a quali report and an Excel file.',
      },
    ],
    canvas: {
      panels: {
        guide: 'Guide',
        quotas: 'Quotas',
        interview: 'Voice interview',
        insights: 'Insights',
        intel: 'Intelligence Lab',
      },
      axes: ['Perceived hydration', 'Texture & finish', 'Value for money'],
      quotas: [
        { label: '18–24', value: '4 / 8' },
        { label: '25–34', value: '6 / 8' },
        { label: 'Sensitive skin', value: '5 / 6' },
      ],
      probing: '“What makes this texture hard to live with day to day?”',
      insights: [
        { label: 'Texture', note: 'Too sticky', level: 72 },
        { label: 'Price', note: 'Felt too high', level: 81 },
      ],
      quote: 'Too expensive for what it delivers.',
      brand: 'Brand',
      brandPrice: '€12.90',
      competitor: 'Competitor',
      competitorPrice: '€9.40',
      fusion: 'The price gap confirms the verbatim, not the other way around.',
    },
  },
  useCases: {
    eyebrow: 'Use cases',
    title: 'From skincare to shelf, from journey to brand',
    subtitle:
      'The same building blocks (guide, voice, insights, market intelligence) fold around your question. You bring the respondents. YVARS runs the interview and structures what to keep.',
    languages: {
      title: 'French, English, Arabic',
      body: 'The interview is held in the language of the study. Same probing depth, same deliverables, whether the participant speaks French, English or Arabic.',
      items: [
        { code: 'fr', label: 'Français', native: 'Français' },
        { code: 'en', label: 'English', native: 'English' },
        { code: 'ar', label: 'العربية', native: 'العربية' },
      ],
    },
    clusters: [
      {
        title: 'Product & packaging tests',
        description:
          'Real use, sensory, promise comprehension, go / no-go. The interview digs into texture, pack, usage ritual: spontaneous language, not an item grid. You then cross it with what is actually on the shelf.',
        chips: ['Skincare', 'Food', 'Texture', 'Packaging'],
      },
      {
        title: 'Shopper & merchandising',
        description:
          'Choice in aisle, finding the SKU, trade-offs versus private label and promotions. Purchase verbatims sit next to observed prices: why this SKU moves, why the other stays on the shelf.',
        chips: ['Aisle', 'Private label', 'Fixture'],
      },
      {
        title: 'Journey & UX',
        description:
          'Onboarding, subscription, app or service: where trust breaks, where interface wording confuses. A voice interview follows the friction. It is not a frozen usability test, nor a post-click survey.',
        chips: ['Banking', 'Insurance', 'Mobile app'],
      },
      {
        title: 'Brand & trust',
        description:
          'Positioning, renewal, signals of doubt or pride. What people say spontaneously about you, and about those they compare you to, before it shows up in a tracker.',
        chips: ['Perception', 'Loyalty', 'Brand tone'],
      },
      {
        title: 'Price & competition',
        description:
          'Lived value for money, set against labels, gaps and white spaces. The Intelligence Lab ties a “too expensive” to a real gap, to decide on promo, pack or promise, not to stack two silos.',
        chips: ['Price', 'White spaces', 'Promo'],
      },
      {
        title: 'Innovation & concepts',
        description:
          'Before launch: clarity of the idea, desirability, imagined frictions, words that land or block. A structured guide, probes that follow surprise, in French, English or Arabic depending on the field.',
        chips: ['Concept', 'Prototype', 'NPD'],
      },
    ],
  },
  audience: {
    eyebrow: 'Who it is for',
    title: 'For those who hold the quali',
    subtitle:
      'YVARS is not a recruitment marketplace. It is the space where the study is designed, spoken, read, and crossed with the shelf, in the participant’s language.',
    items: [
      {
        title: 'Institutes and independents',
        body: 'You design the guide, you bring the field (your base, your recruiter, your client file). YVARS runs the voice interviews and returns segmented material, transcripts, axes, that you can still interrogate.',
      },
      {
        title: 'Insights, category, innovation',
        body: 'A product, pack, price or concept question, and little time before the call. Sessions move while the team works. Radar, axes and chat open from the first verbatims, without waiting for an end-of-field deck.',
      },
      {
        title: 'Retail and shopper',
        body: 'What people say about the aisle, read next to observed prices. Why this SKU turns, why the other stays. One space to link the verbatim and the label, rather than two vendors and two calendars.',
      },
    ],
  },
  workspace: {
    eyebrow: 'In the workspace',
    title: 'The material, not the slide',
    subtitle:
      'What you open after the sessions: the voice, the text, the axes, and the shelf. Not a dead PDF, a file you keep exploring.',
    items: [
      {
        title: 'Guide, brief, quotas',
        body: 'The study frame stays yours. Axes, probing rules and targets are set before the first voice.',
      },
      {
        title: '1:1 voice interviews',
        body: 'In French, English or Arabic. Real-time probes, based on what the person says, inside the perimeter you set.',
      },
      {
        title: 'Transcripts, radar, chat',
        body: 'Verbatims arrive as they come. You filter by quota, follow an axis, ask a question of the corpus, without calling a vendor back.',
      },
      {
        title: 'Intelligence Lab',
        body: 'Verbatims and market prices in the same view. A “too expensive” is read against a real gap, then you decide.',
      },
    ],
  },
  why: {
    eyebrow: 'Why YVARS',
    title: 'Classic methods no longer move at the pace of decisions.',
    lead: 'Quali takes too long to produce, and too little time to serve. YVARS inverts that: sessions run in parallel, the material stays alive, the shelf enters the same room.',
    withoutLabel: 'Without YVARS',
    withLabel: 'With YVARS',
    rows: [
      {
        without: 'Moderation and analysis over several weeks, often too late to bend the plan.',
        with: 'Asynchronous voice interviews: sessions move while you work, insights open as they come.',
      },
      {
        without: 'Insights frozen in a deck, already dated at delivery, impossible to interrogate.',
        with: 'A living workspace: radar, axes, insight chat on the verbatims. You query the material, you do not archive it.',
      },
      {
        without: 'Quali and market prices live in two silos, two vendors, two calendars.',
        with: 'Intelligence Lab: fusion of verbatims and competitive intelligence, to decide in the same space.',
      },
      {
        without: 'Frozen guides, forgotten probes, uneven depth from one interview to the next.',
        with: 'Adaptive probes: the interview digs according to what each person says, inside the frame you set.',
      },
      {
        without: 'A study stuck in a single language, or late translations that flatten the point.',
        with: 'Voice interviews in French, English or Arabic: the participant’s language, not a subtitle after the fact.',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'A clearer look at YVARS',
    items: [
      {
        q: 'What is YVARS?',
        a: 'YVARS is a qualitative research platform. It runs 1:1 voice interviews, structures insights (transcripts, axes, radar, chat), and crosses those verbatims with competitive intelligence in an Intelligence Lab. It is not a recruitment marketplace.',
      },
      {
        q: 'How is it different from a survey or a chatbot?',
        a: 'The interview is spoken and adapts in real time: probes, follow-up, tracking what the person says. It is not a frozen grid, nor a text Q&A, nor a script read in one pass.',
      },
      {
        q: 'Do you recruit participants?',
        a: 'Both exist. Institutes and brands can invite their own base. For some briefs we also build a panel of paid respondents. Applying does not guarantee an interview: we write when a profile matches.',
      },
      {
        q: 'Which languages are supported?',
        a: 'Voice interviews can be run in French, English and Arabic. You choose the study language; the interview listens and speaks in that language, with the same kind of probes and the same deliverables.',
      },
      {
        q: 'What does the Intelligence Lab do?',
        a: 'It puts what people say next to what is on the shelf: prices, gaps, competing offers. The goal is not a second report. It is to check whether a verbatim (“too expensive”) matches a real gap, then decide.',
      },
      {
        q: 'Who uses YVARS?',
        a: 'Institutes and consultants who keep control of the field, insights / category / innovation teams with a question to settle, retail and shopper teams who want to read the aisle with the verbatims.',
      },
      {
        q: 'How do we start?',
        a: 'Request a demo. We come back to you to set a conversation around your next study: question, languages, type of respondents.',
      },
    ],
  },
  contact: {
    eyebrow: 'Demo',
    title: 'Let’s talk about your next study',
    subtitle:
      'Question, target, language (French, English or Arabic): describe what you need. We reply to organise a demonstration.',
    points: [
      'The question you want to settle',
      'Who you can invite (base, recruiter, clients)',
      'The field language: French, English or Arabic',
    ],
    name: 'Name',
    email: 'Email',
    org: 'Organisation',
    message: 'Message',
    submit: 'Send the request',
    sending: 'Opening your email client…',
    sent: 'Your email client opens with the message ready.',
    subject: 'YVARS demo request',
    privacy: 'No account to create. Your message opens in your email client.',
  },
  footer: {
    blurb:
      'Voice qualitative research and market intelligence, in the same workspace. French, English, Arabic.',
    copyright: `© ${new Date().getFullYear()} YVARS`,
    top: 'Back to top',
  },
  panel: {
    meta: {
      title: 'YVARS · Take part in a study',
      description:
        'Join the YVARS panel. If a brief matches, you do a paid voice interview. Applying does not guarantee a call.',
    },
    skip: 'Skip to the form',
    eyebrow: 'Panel',
    title: 'Speak in a study. Get paid if we select you.',
    subtitle:
      'You apply to our pool. When a client brief matches your profile, we contact you for a voice interview (about 15 to 30 minutes). The interview is paid. The amount is stated before you accept.',
    points: [
      'Payment only if you are selected and you finish the interview.',
      'French, English or Arabic, depending on the study.',
      'Applying stores your profile. It is not a promise of a call.',
    ],
    stepsTitle: 'How it works',
    steps: [
      { title: 'You apply', body: 'A few facts so we can find you when a brief opens.' },
      { title: 'We write', body: 'If the profile fits: date, language, topic, amount.' },
      { title: 'You speak', body: '1:1 voice interview. Then the payment we named.' },
    ],
    formTitle: 'Apply to the panel',
    formLead: 'No account to create. The message opens in your email client.',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    city: 'City',
    country: 'Country',
    age: 'Age band',
    ageOptions: [
      { id: '18-24', label: '18-24' },
      { id: '25-34', label: '25-34' },
      { id: '35-44', label: '35-44' },
      { id: '45-54', label: '45-54' },
      { id: '55+', label: '55+' },
    ],
    languages: 'Languages for an interview',
    languageOptions: [
      { id: 'fr', label: 'Français' },
      { id: 'en', label: 'English' },
      { id: 'ar', label: 'العربية' },
    ],
    occupation: 'Occupation / situation',
    topics: 'Topics that interest you (optional)',
    topicOptions: [
      { id: 'care', label: 'Care, beauty' },
      { id: 'food', label: 'Food' },
      { id: 'retail', label: 'Shopping, retail' },
      { id: 'finance', label: 'Banking, insurance' },
      { id: 'tech', label: 'Apps, mobile' },
      { id: 'other', label: 'Other' },
    ],
    about: 'A word about you (optional)',
    consent:
      'I am 18 or older. I agree to be contacted for YVARS studies. I understand payment applies only if I am selected and I finish the interview.',
    submit: 'Send my application',
    sending: 'Opening your email client…',
    sent: 'Your email client opens with the message ready.',
    subject: 'YVARS panel application',
    privacy: 'Answers are used to build the panel and to offer interviews. You can ask for deletion at any time.',
    languagesRequired: 'Choose at least one language.',
    consentRequired: 'Tick the box to send.',
  },
};
