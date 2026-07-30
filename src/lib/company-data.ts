export const companyInfo = {
  name: 'Noval Aeroethics',
  tagline: 'Precision Engineering for Aerospace & Beyond',
  address: '#23, Shiridi Saibaba Layout, Byraveshwara Industrial Estate, Andrahalli, Viswaneedam, Bangalore - 560 091',
  phone1: '8489992025',
  phone2: '8870851124',
  email: 'novalaeroethics@gmail.com',
};

export const aboutData = {
  established: 2026,
  story:
    'Established in 2026, Noval Aeroethics is focused on delivering high-precision engineering and manufacturing solutions across critical industries. The company specializes in aerospace components, precision parts, and machined components, all crafted to meet the highest industry standards. With a strong commitment to quality and innovation, we serve the complex and demanding needs of the aerospace and defense sectors through advanced manufacturing practices and stringent quality control. Equipped with modern CNC machinery and having a skilled technical team, we ensure reliable performance, dimensional accuracy, and consistent product quality. The company continues to build its reputation as a dependable engineering partner by prioritizing precision, process excellence, and customer satisfaction in every project it undertakes.',
  mission:
    'To deliver precision-engineered components that meet the highest standards of quality, reliability, and performance for the aerospace and defense industries, while fostering long-term partnerships built on trust and excellence.',
  vision:
    'To become a globally recognized leader in precision manufacturing, known for innovation, uncompromising quality, and the ability to solve the most complex engineering challenges for our clients worldwide.',
};

export const servicesData = [
  {
    title: 'CNC Machining',
    shortDesc:
      'Advanced multi-axis CNC machining for complex aerospace components with exceptional precision and surface finish.',
image: "/images/cnc-machine-working.jpg",
    description:
      'Our CNC machining capabilities encompass a wide range of operations including milling, turning, drilling, and boring. We utilize state-of-the-art Cosmos CVM 1160 machining centers with 3-axis and 4-axis capabilities, delivering components with position accuracy of 5 microns and repeatability accuracy of 3 microns. Our experienced machinists program and execute complex toolpaths to produce intricate geometries required in aerospace applications, ensuring every component meets strict dimensional tolerances and surface finish requirements.',
    benefits: [
      '3-axis and 4-axis machining capabilities',
      'Position accuracy up to 5 microns',
      'High-speed spindle up to 12,000 RPM',
      'Complex geometry machining',
      'Superior surface finish quality',
      'Wide range of materials processed',
    ],
    applications: [
      'Aerospace structural components',
      'Engine mountings and brackets',
      'Landing gear fittings',
      'Turbine components',
      'Fuel system parts',
      'Hydraulic system housings',
    ],
    industries: ['Aerospace & Defense', 'Aviation', 'Automotive', 'Industrial Equipment'],
  },
  {
    id: 'aerospace-components',
    title: 'Aerospace Components',
    shortDesc:
      'Manufacturing of critical aerospace components that meet stringent industry standards and certifications.',
image: "/images/service-cnc-machining.jpg",
    description:
      'We specialize in the manufacturing of precision aerospace components that are critical to the safety and performance of aircraft systems. Every component we produce undergoes rigorous quality inspection and testing to ensure it meets or exceeds the exacting requirements of the aerospace industry. From brackets and housings to complex structural fittings, our manufacturing processes are designed to deliver components with exceptional dimensional accuracy, material integrity, and surface quality. We work with a variety of aerospace-grade materials including aluminium alloys, titanium, and stainless steel.',
    benefits: [
      'ISO certified manufacturing processes',
      'Aerospace-grade material expertise',
      'Stringent quality control at every stage',
      'Full traceability documentation',
      'Dimensional inspection reports provided',
      'Compliance with industry specifications',
    ],
    applications: [
      'Aircraft structural brackets',
      'Engine and nacelle components',
      'Flight control surfaces',
      'Interior cabin fittings',
      'Avionics housings',
      'Fuel and hydraulic fittings',
    ],
    industries: ['Aerospace & Defense', 'Commercial Aviation', 'Space', 'General Aviation'],
  },
  {
    id: 'precision-parts',
    title: 'Precision Parts',
    shortDesc:
      'High-precision machined parts with micron-level accuracy for demanding engineering applications.',
    image: '/images/service-precision-parts.jpg',
    description:
      'Our precision parts manufacturing service delivers components with tolerances as tight as 3 microns, meeting the demands of the most challenging engineering applications. We combine advanced CNC technology with meticulous process planning and in-process inspection to ensure that every part we produce conforms to exact specifications. Our skilled team of engineers and machinists brings decades of combined experience in precision manufacturing, enabling us to tackle complex geometries and tight tolerances that many other shops cannot achieve consistently.',
    benefits: [
      'Tolerances as tight as 3 microns',
      'Advanced in-process inspection',
      'Experienced engineering team',
      'Complex geometry capabilities',
      'Consistent batch-to-batch quality',
      'Competitive lead times',
    ],
    applications: [
      'Precision shafts and pins',
      'Tight-tolerance housings',
      'Valve bodies and fittings',
      'Coupling and connector components',
      'Measurement fixtures',
      'Custom engineered parts',
    ],
    industries: ['Aerospace', 'Defense', 'Medical Devices', 'Precision Engineering'],
  },
  {
    id: 'quality-inspection',
    title: 'Quality Inspection',
    shortDesc:
      'Comprehensive quality inspection and testing services with precision measuring instruments and full documentation.',
    image: '/images/service-quality-inspection.jpg',
    description:
      'Quality is the foundation of everything we do at Noval Aeroethics. Our comprehensive quality inspection services ensure that every component leaving our facility meets the highest standards of dimensional accuracy and material integrity. We employ a full suite of precision measuring instruments including vernier calipers, micrometers, height gauges, dial indicators, pin gauges, thread plug gauges, and slip gauges. Our quality team conducts thorough first-article inspections, in-process checks, and final inspections with complete documentation and traceability.',
    benefits: [
      'ISO certified quality management system',
      'Full dimensional inspection reports',
      'First article inspection capability',
      'Complete traceability documentation',
      'Calibrated precision instruments',
      'Non-destructive testing awareness',
    ],
    applications: [
      'Incoming material inspection',
      'In-process quality verification',
      'Final component inspection',
      'First article inspection reports',
      'Dimensional conformance testing',
      'Surface finish measurement',
    ],
    industries: ['Aerospace', 'Defense', 'Automotive', 'Medical Devices'],
  },
];

export const capabilitiesData = {
  machine: {
    name: 'Cosmos CVM 1160',
    tableSize: 'X1100, Y650, Z650',
    axes: '3 Axis & 4 Axis',
    spindleSpeed: '12,000 RPM',
    repeatability: '0.003mm (3 micron)',
    positionAccuracy: '0.005mm (5 micron)',
    image: '/images/cnc-machine.jpg',
  },
  processes: [
    {
      title: 'CNC Milling',
      description:
        'High-speed precision milling operations for complex contours, pockets, and profiles. Our 3-axis and 4-axis capabilities allow us to machine intricate geometries with exceptional accuracy, producing components that meet the tightest aerospace tolerances.',
    },
    {
      title: 'CNC Turning',
      description:
        'Precision turning operations for cylindrical components including shafts, pins, bushings, and fittings. Our turning processes deliver superior surface finish and dimensional accuracy on both internal and external profiles.',
    },
    {
      title: 'Drilling & Tapping',
      description:
        'Precision drilling and tapping operations for creating threaded holes and through-holes in aerospace components. We maintain exact position accuracy and thread quality across all hole-making operations.',
    },
    {
      title: 'Boring & Reaming',
      description:
        'High-precision boring and reaming for achieving tight-tolerance bores and precision holes. These operations are critical for components requiring exact dimensional control and superior surface finish.',
    },
    {
      title: 'Surface Finishing',
      description:
        'A range of surface finishing operations to achieve the required surface roughness and aesthetic quality. We control surface finish parameters to meet aerospace specifications and customer requirements.',
    },
    {
      title: 'Deburring & Edge Finishing',
      description:
        'Careful deburring and edge finishing to remove sharp edges and burrs, ensuring component safety and handling. This critical step is performed with precision hand tools and controlled processes.',
    },
  ],
  materials: [
    'Aluminium Alloys (6061, 7075, 2024)',
    'Stainless Steel (304, 316, 17-4PH)',
    'Titanium Alloys (Ti-6Al-4V)',
    'Mild Steel & Alloy Steel',
    'Brass & Copper Alloys',
    'Engineering Plastics',
  ],
};

export const productsData = [
  {
    id: 'aerospace-brackets',
    name: 'Aerospace Brackets',
    category: 'Structural Components',
    image: '/images/product-aerospace-bracket.jpg',
    description:
      'Precision machined structural brackets for aircraft assembly, featuring complex geometries with multiple mounting surfaces and lightening pockets. Manufactured from aerospace-grade aluminium alloys with tight dimensional tolerances.',
  },
  
  
  {
    id: 'structural-fittings',
    name: 'Structural Fittings',
    category: 'Structural Components',
    image: '/images/product-structural-fitting.jpg',
    description:
    'Precision machined structural fittings for airframe assembly and load-bearing applications. Manufactured to meet stringent aerospace requirements with full dimensional inspection and material certification.',
  },
  {
    id: 'shafts-couplings',
    name: 'Shafts & Couplings',
    category: 'Rotational Components',
    image: '/images/product-shaft.jpg',
    description:
    'Precision turned and milled shafts, couplings, and rotational components for actuation systems and mechanical assemblies. Features include tight concentricity, surface finish control, and dimensional accuracy.',
  },
  
];

export const qualityData = {
  isoCertified: true,
  policy: [
    'High Quality Products',
    'Optimized Cost Management',
    'On Time Delivery',
    'Reliability',
  ],
  policyDescription:
    'At Noval Aeroethics, our quality policy is the cornerstone of our operations. We are committed to delivering high-quality products through optimized cost management, ensuring on-time delivery, and maintaining unwavering reliability. Every component we manufacture undergoes rigorous inspection and testing to guarantee it meets the exacting standards required by the aerospace and defense industries. Our ISO certification reflects our systematic approach to quality management and our dedication to continuous improvement in every aspect of our manufacturing processes.',
  instruments: [
    { name: 'Vernier Caliper', description: 'For precise measurement of external and internal dimensions with accuracy up to 0.02mm' },
    { name: 'Micrometer', description: 'For high-precision measurement of thickness, diameter, and length with accuracy up to 0.01mm' },
    { name: 'Height Gauge', description: 'For accurate vertical measurement and layout work on surface plates' },
    { name: 'Dial Indicator', description: 'For measuring small variations in dimension, runout, and flatness' },
    { name: 'Pin Gauges', description: 'For verifying hole diameters and ensuring conformance to tight tolerances' },
    { name: 'Thread Plug Gauges', description: 'For inspecting internal threads to ensure proper thread form and pitch diameter' },
    { name: 'Slip Gauges', description: 'Precision gauge blocks for setting up measuring instruments and verifying accuracy' },
  ],
  inspectionProcess: [
    {
      step: 1,
      title: 'Incoming Material Inspection',
      description: 'All raw materials are verified against material certificates and checked for dimensional conformance before entering the production process.',
    },
    {
      step: 2,
      title: 'In-Process Inspection',
      description: 'Components are inspected at critical stages during machining to ensure dimensional accuracy is maintained throughout the manufacturing process.',
    },
    {
      step: 3,
      title: 'Final Inspection',
      description: 'Completed components undergo comprehensive dimensional inspection using calibrated instruments, with full inspection reports generated for every order.',
    },
    {
      step: 4,
      title: 'Documentation & Traceability',
      description: 'Complete documentation including material certificates, inspection reports, and traceability records are provided with every shipment for full quality assurance.',
    },
  ],
};

export const highlights = [
  { label: 'ISO Certified', value: 'ISO' },
  { label: '12,000 RPM', value: '12000' },
  { label: '3 & 4 Axis', value: 'AXIS' },
  { label: '3 Micron Accuracy', value: '3μm' },
];

export const whyChooseUs = [
  {
    title: 'Quality',
    description: 'Every component is manufactured under a rigorous ISO-certified quality management system, ensuring consistent excellence and full traceability.',
  },
  {
    title: 'Precision',
    description: 'With 3-micron repeatability accuracy and advanced CNC capabilities, we deliver components that meet the most demanding aerospace tolerances.',
  },
  {
    title: 'On-Time Delivery',
    description: 'We understand the critical nature of aerospace supply chains and commit to reliable, on-time delivery for every project we undertake.',
  },
  {
    title: 'Customer Satisfaction',
    description: 'We build lasting partnerships by prioritizing clear communication, flexibility, and a deep commitment to exceeding customer expectations.',
  },
];

export const timelineData = [
  { year: '2026', title: 'Company Founded', description: 'Noval Aeroethics established in Bangalore with a vision for precision engineering excellence.' },
  { year: '2026', title: 'ISO Certification', description: 'Achieved ISO certification, establishing our commitment to international quality standards.' },
  { year: '2026', title: 'CNC Installation', description: 'Installed Cosmos CVM 1160 4-axis machining center with 12,000 RPM spindle capability.' },
  { year: '2026', title: 'Aerospace Partnerships', description: 'Began supplying precision components to aerospace and defense sector clients.' },
];

export type PageId = 'home' | 'about' | 'services' | 'capabilities' | 'products' | 'quality' | 'contact' | 'enquiry';

export const navItems: { label: string; page: PageId }[] = [
  { label: 'Home', page: 'home' },
  { label: 'About', page: 'about' },
  { label: 'Services', page: 'services' },
  { label: 'Capabilities', page: 'capabilities' },
  { label: 'Products', page: 'products' },
  { label: 'Quality', page: 'quality' },
  { label: 'Contact', page: 'contact' },
];
