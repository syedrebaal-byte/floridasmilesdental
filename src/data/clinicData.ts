export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialty: 'Cosmetic & General' | 'Implant & Periodontics' | 'Endodontics' | 'Oral Surgery' | 'Aesthetics';
  credentials: string;
  bio: string;
  locations: string[];
}

export interface Service {
  id: string;
  title: string;
  category: 'Cosmetic' | 'Restorative' | 'Orthodontics' | 'Surgical & Specialty' | 'Preventive';
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  idealFor: string[];
  duration: string;
  recovery: string;
}

export interface OfficeLocation {
  id: string;
  name: string;
  city: string;
  address: string;
  suite: string;
  fullAddress: string;
  phone: string;
  phoneRaw: string;
  hours: string;
  parking: string;
  googleMapsUrl: string;
  features: string[];
}

export const CLINIC_LOCATIONS: OfficeLocation[] = [
  {
    id: 'ft-lauderdale',
    name: 'Fort Lauderdale Practice',
    city: 'Fort Lauderdale',
    address: '255 SE 14th St',
    suite: 'Suite 200',
    fullAddress: '255 SE 14th St Suite 200, Fort Lauderdale, FL 33316',
    phone: '(954) 523-6525',
    phoneRaw: '9545236525',
    hours: 'Monday – Friday: 8:00 AM – 6:00 PM',
    parking: 'Complimentary private patient parking & valet access',
    googleMapsUrl: 'https://maps.google.com/?q=255+SE+14th+St+Suite+200+Fort+Lauderdale+FL+33316',
    features: ['3D CBCT Cone-Beam Imaging', 'Digital Intraoral Scanning', 'Dedicated Surgical Suite', 'Same-Day Emergency Care']
  },
  {
    id: 'lighthouse-point',
    name: 'Lighthouse Point Practice',
    city: 'Lighthouse Point',
    address: '2211 NE 36th St',
    suite: 'Suite 201',
    fullAddress: '2211 NE 36th St #201, Lighthouse Point, FL 33064',
    phone: '(954) 943-2466',
    phoneRaw: '9549432466',
    hours: 'Monday – Friday: 8:00 AM – 6:00 PM',
    parking: 'Reserved on-site surface parking directly in front of entrance',
    googleMapsUrl: 'https://maps.google.com/?q=2211+NE+36th+St+201+Lighthouse+Point+FL+33064',
    features: ['Cosmetic Smile Studio', 'Digital Aligner Center', 'Sedation Dentistry Options', 'Modern Comfort Amenities']
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-peter-scerbo',
    name: 'Dr. Peter Scerbo',
    title: 'Lead Cosmetic & General Dentist',
    specialty: 'Cosmetic & General',
    credentials: 'DMD, Comprehensive Smile Design',
    bio: 'Founder and clinical director of Florida Smiles Dental. Dr. Scerbo has dedicated his career to delivering artistic smile restorations and gentle, patient-centered clinical excellence across Broward County.',
    locations: ['Fort Lauderdale', 'Lighthouse Point']
  },
  {
    id: 'dr-steven-berkowitz',
    name: 'Dr. Steven Berkowitz',
    title: 'Board-Certified Periodontist & Implantologist',
    specialty: 'Implant & Periodontics',
    credentials: 'DDS, MS, Board Certified in Periodontology',
    bio: 'Specializing in advanced dental implantology, bone reconstruction, and minimally invasive laser gum treatments. Dr. Berkowitz provides surgical precision for complex dental restorations.',
    locations: ['Fort Lauderdale', 'Lighthouse Point']
  },
  {
    id: 'dr-joel-rosenfeld',
    name: 'Dr. Joel Rosenfeld',
    title: 'Oral & Maxillofacial Surgeon',
    specialty: 'Oral Surgery',
    credentials: 'DMD, MD, Maxillofacial Surgery Specialist',
    bio: 'Extensive expertise in wisdom tooth removal, bone regeneration, and complex surgical implant placements with a focus on maximum patient comfort and rapid recovery.',
    locations: ['Fort Lauderdale']
  },
  {
    id: 'dr-t-cem-sayin',
    name: 'Dr. T. Cem Sayin',
    title: 'Endodontist & Root Canal Specialist',
    specialty: 'Endodontics',
    credentials: 'DDS, PhD, Advanced Endodontics',
    bio: 'Specialist in microscopic endodontic therapy, saving natural teeth with gentle, pain-free techniques and high-magnification surgical visualization.',
    locations: ['Fort Lauderdale']
  },
  {
    id: 'dr-chloe-reyes',
    name: 'Dr. Chloe Reyes',
    title: 'General & Aesthetic Dentist',
    specialty: 'Cosmetic & General',
    credentials: 'DMD, Restorative Dentistry',
    bio: 'Known for her gentle touch and artistic aesthetic eye, Dr. Reyes focuses on preventive health, composite bonding, and comprehensive family care.',
    locations: ['Fort Lauderdale', 'Lighthouse Point']
  },
  {
    id: 'dr-mark-behar',
    name: 'Dr. Mark Behar',
    title: 'Senior Cosmetic & Restorative Dentist',
    specialty: 'Cosmetic & General',
    credentials: 'DDS, Mastership in Aesthetic Dentistry',
    bio: 'Decades of clinical experience crafting custom porcelain veneers, full-mouth reconstructions, and functional occlusal rehabilitations.',
    locations: ['Lighthouse Point']
  },
  {
    id: 'dr-daniel-nagler',
    name: 'Dr. Daniel Nagler',
    title: 'Periodontist & Regenerative Specialist',
    specialty: 'Implant & Periodontics',
    credentials: 'DMD, Periodontal Medicine & Regenerative Surgery',
    bio: 'Dedicated to long-term periodontal stability, soft tissue aesthetics, and advanced implant therapy using state-of-the-art biological growth factors.',
    locations: ['Lighthouse Point']
  },
  {
    id: 'dr-anas-selman',
    name: 'Dr. Anas Selman',
    title: 'Endodontic Specialist',
    specialty: 'Endodontics',
    credentials: 'DMD, Endodontic Micro-Surgery',
    bio: 'Focuses on 3D CBCT guided root canal procedures, addressing acute dental infections swiftly and restoring comfort for patients in distress.',
    locations: ['Lighthouse Point']
  },
  {
    id: 'jose-mendieta',
    name: 'Jose Mendieta, APRN',
    title: 'Facial Aesthetics & Clinical Injectables Specialist',
    specialty: 'Aesthetics',
    credentials: 'APRN, Board-Certified Aesthetic Medicine',
    bio: 'Provides harmonizing aesthetic injectables including Botox for TMJ relief and facial rejuvenation, complementing comprehensive smile makeovers.',
    locations: ['Fort Lauderdale', 'Lighthouse Point']
  }
];

export const SERVICES: Service[] = [
  {
    id: 'dental-implants',
    title: 'Dental Implants & All-on-X',
    category: 'Restorative',
    shortDesc: 'Permanent titanium and zirconia tooth replacements that look, feel, and function like natural teeth.',
    fullDesc: 'From single-tooth restorations to full-arch All-on-X teeth in a day, our team of board-certified periodontists and surgeons utilize 3D computer-guided planning for predictable, lifelong stability.',
    highlights: [
      '3D CBCT Computer-Guided Precision Placement',
      'High-Grade Medical Titanium & Biocompatible Zirconia',
      'Same-Day Temporary Teeth Available for Qualified Cases',
      'Lifelong Durability with 98%+ Success Rate'
    ],
    idealFor: ['Missing one or multiple teeth', 'Unstable dentures', 'Failing bridge work', 'Severe bone loss restoration'],
    duration: '1–2 hours per surgical appointment',
    recovery: 'Most patients resume normal activities within 24–48 hours'
  },
  {
    id: 'cosmetic-veneers',
    title: 'Porcelain Veneers & Smile Makeovers',
    category: 'Cosmetic',
    shortDesc: 'Handcrafted ultra-thin ceramic shells designed to correct discoloration, gaps, chips, and misalignment.',
    fullDesc: 'Custom-crafted by master dental ceramists to mirror the natural translucency, texture, and brilliance of genuine enamel. Every smile makeover is digitally simulated beforehand so you preview your results.',
    highlights: [
      'Digital Smile Design preview before any tooth modification',
      'Stain-resistant, high-strength feldspathic & E.max porcelain',
      'Minimally invasive enamel-sparing preparation',
      'Artistic color matching tailored to skin tone and facial symmetry'
    ],
    idealFor: ['Discolored or tetracycline-stained teeth', 'Chipped or worn edges', 'Diastemas (gaps)', 'Uneven tooth lengths'],
    duration: '2 to 3 appointments over 2 weeks',
    recovery: 'Immediate return to daily activities'
  },
  {
    id: 'invisalign-aligners',
    title: 'Invisalign® & Angel Clear Aligners',
    category: 'Orthodontics',
    shortDesc: 'Virtually invisible removable aligners that gently straighten teeth without metal brackets or wires.',
    fullDesc: 'Straighten your smile discreetly using proprietary SmartTrack material. We utilize high-resolution iTero digital scans—meaning zero messy impression putty—to map out each millimeter of tooth movement.',
    highlights: [
      'Zero goopy molds: 100% digital 3D intraoral scanning',
      'Removable for eating, drinking, brushing, and flossing',
      'Average treatment time 6 to 14 months',
      'Includes custom retainers and tooth whitening upon completion'
    ],
    idealFor: ['Crowded or overlapping teeth', 'Spacing issues', 'Mild to moderate overbites and crossbites', 'Relapsed orthodontic alignment'],
    duration: 'Check-ins every 6–8 weeks (often hybrid virtual)',
    recovery: 'Zero downtime; minor initial pressure for 24 hours per tray'
  },
  {
    id: 'emergency-dentistry',
    title: 'Same-Day Emergency Dental Care',
    category: 'Surgical & Specialty',
    shortDesc: 'Immediate relief for severe toothaches, broken teeth, lost restorations, or traumatic injuries.',
    fullDesc: 'Dental emergencies cannot wait. We reserve daily appointment slots at both Fort Lauderdale and Lighthouse Point locations to diagnose the source of pain, provide immediate relief, and repair damage.',
    highlights: [
      'Reserved same-day emergency appointment blocks',
      'Immediate diagnostic digital X-rays and pulp testing',
      'Gentle local anesthesia and sedation options for pain relief',
      'Walk-in emergency guidance: Direct line (954) 523-6525'
    ],
    idealFor: ['Intense throbbing tooth pain', 'Cracked, fractured, or knocked-out tooth', 'Swollen jaw or dental abscess', 'Dislodged crowns or fillings'],
    duration: '30–60 minutes for immediate relief & stabilization',
    recovery: 'Immediate pain relief protocol provided'
  },
  {
    id: 'periodontal-laser',
    title: 'Periodontics & Laser Gum Therapy',
    category: 'Preventive',
    shortDesc: 'Advanced treatment of periodontal disease, gum recession, and soft-tissue enhancement.',
    fullDesc: 'Led by Dr. Steven Berkowitz and Dr. Daniel Nagler, our periodontal department utilizes state-of-the-art laser protocols to eradicate deep bacterial infection and regenerate healthy bone support without scalpels.',
    highlights: [
      'Minimally invasive laser periodontal pocket sterilization',
      'Pinhole & connective tissue grafting for receding gums',
      'Crown lengthening & aesthetic gum contouring',
      'Comprehensive bone grafting and sinus elevation'
    ],
    idealFor: ['Bleeding or swollen gums', 'Loose teeth or receding gumlines', 'Gummy smiles', 'Implant maintenance'],
    duration: '45–90 minutes depending on quadrants treated',
    recovery: 'Minimal discomfort, quick healing within 48 hours'
  },
  {
    id: 'gentle-endodontics',
    title: 'Endodontics & Gentle Root Canals',
    category: 'Restorative',
    shortDesc: 'Precision microscopic care to relieve pain and preserve your natural tooth structure.',
    fullDesc: 'Modern root canal therapy is no more uncomfortable than having a routine filling. Our endodontists utilize surgical microscopes and rotary nickel-titanium instrumentation to cleanse root canals thoroughly in a single relaxing visit.',
    highlights: [
      '3D CBCT imaging to locate intricate microscopic canals',
      'Profound modern local anesthesia ensuring complete comfort',
      'Preserves your natural biological tooth root',
      'Completed in one streamlined 60-minute visit'
    ],
    idealFor: ['Deep dental decay reaching the nerve', 'Lingering sensitivity to hot or cold', 'Pulp infection after trauma', 'Tooth abscess'],
    duration: '60 minutes',
    recovery: 'Mild tenderness resolved with over-the-counter medication within 24h'
  },
  {
    id: 'facial-aesthetics',
    title: 'Facial Aesthetics & TMJ Relief',
    category: 'Cosmetic',
    shortDesc: 'Aesthetic neuromodulators and dermal fillers to soften fine lines and alleviate jaw grinding tension.',
    fullDesc: 'Administered by Jose Mendieta, APRN, our medical aesthetic therapies complement your new smile by framing your lips and relaxing hyperactive masseter muscles responsible for clenching and TMJ discomfort.',
    highlights: [
      'Therapeutic Botox for jaw clenching, migraine & TMJ relief',
      'Subtle lip volume and perioral smoothing',
      'Expert anatomical injector with extensive clinical training',
      'Natural, balanced aesthetic results'
    ],
    idealFor: ['Jaw clenching (bruxism)', 'Gummy smile correction', 'Marionette lines & lip volume', 'Facial rejuvenation'],
    duration: '20–30 minutes',
    recovery: 'Zero downtime; results emerge over 3–7 days'
  }
];

export const ACCEPTED_INSURANCES = [
  'Delta Dental PPO',
  'MetLife Dental',
  'Cigna Dental PPO',
  'Aetna Dental',
  'Guardian Dental',
  'Humana Dental',
  'UnitedHealthcare Dental',
  'BlueCross BlueShield Dental',
  'Principal Financial',
  'Ameritas'
];

export const PATIENT_FAQS = [
  {
    question: 'How do I know whether dental implants or a bridge are right for me?',
    answer: 'Dental implants are the gold standard because they replace the tooth root directly in the jawbone, preserving surrounding bone structure and avoiding the need to shave down adjacent healthy teeth. During your consultation, we take a 3D CBCT scan to assess your bone density and tailor the best solution.'
  },
  {
    question: 'What should I do if I have a severe dental emergency after hours?',
    answer: 'If you are experiencing severe dental trauma, uncontrolled bleeding, or intense throbbing pain, please call our Fort Lauderdale office at (954) 523-6525 or our Lighthouse Point office at (954) 943-2466 immediately. We provide on-call instructions and prioritize same-day emergency appointments during morning hours.'
  },
  {
    question: 'Do you offer financing options for patients without dental insurance?',
    answer: 'Yes! We believe everyone deserves a healthy, radiant smile. We offer 0% APR financing options through CareCredit, Sunbit, and Proceed Finance. We also offer our in-house Florida Smiles Dental Savings Plan, which includes your bi-annual cleanings, exams, and substantial discounts on all cosmetic and restorative procedures.'
  },
  {
    question: 'How many visits does a porcelain veneer smile makeover require?',
    answer: 'Typically just two to three visits! In visit one, we capture digital 3D scans and design your smile blueprint. In visit two, we prepare the teeth and place custom temporaries so you can test-drive your smile. In the final visit, your handcrafted porcelain veneers are permanently bonded in place.'
  },
  {
    question: 'Can I see the same dentist at both Fort Lauderdale and Lighthouse Point?',
    answer: 'Several of our doctors, including Dr. Peter Scerbo, Dr. Steven Berkowitz, and Dr. Chloe Reyes, rotate between our Fort Lauderdale and Lighthouse Point offices. You can select your preferred doctor and clinic location when booking your visit.'
  }
];
