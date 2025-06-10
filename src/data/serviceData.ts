export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  imageUrl: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const serviceData: Service[] = [
  {
    id: 'leak-detection',
    title: 'Leak Detection & Repair',
    slug: 'leak-detection',
    shortDescription: 'Professional detection and repair of visible and hidden leaks using advanced technology.',
    fullDescription: 'Our expert plumbers use the latest leak detection technology to locate and repair leaks quickly with minimal disruption. We can find hidden leaks behind walls, under floors, and in hard-to-reach places without unnecessary damage to your property. From small drips to major pipe bursts, we handle all types of leaks efficiently and effectively.',
    features: [
      'Non-invasive leak detection using acoustic equipment',
      'Thermal imaging to locate hidden leaks',
      'Pressure testing for comprehensive leak detection',
      'Prompt emergency leak repair service',
      'Repair of leaks in pipes, faucets, toilets, and fixtures',
      'Prevention advice to avoid future leaks'
    ],
    benefits: [
      'Prevents water damage to your property',
      'Reduces water bills by eliminating waste',
      'Protects against mold and structural damage',
      'Minimizes disruption compared to traditional detection methods',
      'Provides long-lasting, reliable repairs'
    ],
    imageUrl: 'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    faqs: [
      {
        question: 'How can I tell if I have a hidden water leak?',
        answer: 'Signs of hidden leaks include unexplained increases in water bills, the sound of running water when no taps are on, damp or discolored walls/ceilings, musty odors, or reduced water pressure. If you notice any of these signs, it\'s best to call a professional for an inspection.'
      },
      {
        question: 'How do you detect leaks without damaging my walls or floors?',
        answer: 'We use non-invasive technologies like acoustic leak detectors, thermal imaging cameras, and pressure testing to locate leaks accurately without unnecessary damage to your property. These methods allow us to pinpoint the exact location of leaks before making any repairs.'
      },
      {
        question: 'How quickly can you respond to a leak emergency?',
        answer: 'We offer 24/7 emergency service and aim to arrive within 60 minutes for urgent leak situations in Edinburgh. For severe leaks, we recommend turning off your main water supply until our plumbers arrive.'
      }
    ]
  },
  {
    id: 'drain-cleaning',
    title: 'Drain Cleaning & Unblocking',
    slug: 'drain-cleaning',
    shortDescription: 'Effective solutions for blocked drains and pipes using professional equipment and techniques.',
    fullDescription: 'We provide comprehensive drain cleaning and unblocking services for residential and commercial properties. Using professional-grade equipment like high-pressure water jetters and drain snakes, we can clear even the most stubborn blockages. Our services include preventative maintenance to keep your drains flowing freely and emergency unblocking for sudden clogs.',
    features: [
      'High-pressure water jetting for complete cleaning',
      'CCTV drain surveys to identify blockage causes',
      'Mechanical drain snaking for tough obstructions',
      'Biological treatments for organic blockages',
      'Regular maintenance programs available',
      'Emergency drain unblocking service'
    ],
    benefits: [
      'Prevents unpleasant odors and backups',
      'Reduces the risk of flooding and water damage',
      'Extends the lifespan of your plumbing system',
      'Improves drainage efficiency',
      'Preventative maintenance saves money long-term'
    ],
    imageUrl: 'https://images.pexels.com/photos/7045577/pexels-photo-7045577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    faqs: [
      {
        question: 'What causes blocked drains?',
        answer: 'Common causes include hair, grease, food waste, foreign objects, tree roots, scale buildup, collapsed pipes, and improper disposal of non-flushable items like wet wipes and nappies.'
      },
      {
        question: 'How can I prevent my drains from blocking?',
        answer: 'Use drain guards to catch hair and food particles, avoid pouring grease down sinks, only flush toilet paper, run hot water after using sinks, and schedule regular professional maintenance to keep drains clear.'
      },
      {
        question: 'Is high-pressure water jetting safe for all pipes?',
        answer: 'In most cases, yes. Our technicians assess your plumbing system first and adjust the pressure accordingly. However, for very old or damaged pipes, we may recommend alternative methods to avoid causing damage.'
      }
    ]
  },
  {
    id: 'boiler-repair',
    title: 'Boiler Repair & Installation',
    slug: 'boiler-repair',
    shortDescription: 'Expert servicing, repair, and installation of all boiler types by certified engineers.',
    fullDescription: 'Our Gas Safe registered engineers provide comprehensive boiler services including repairs, installations, replacements, and annual servicing. We work with all major boiler brands and types, including combi, system, and conventional boilers. From strange noises and leaks to complete breakdowns, we can diagnose and fix your boiler problems efficiently, or help you choose and install a new energy-efficient model.',
    features: [
      'Gas Safe registered engineers',
      'Repair and servicing of all boiler brands',
      'New boiler installation and system upgrades',
      'Annual boiler servicing and maintenance',
      'Energy-efficient boiler recommendations',
      'Manufacturer warranty protection'
    ],
    benefits: [
      'Ensures safe and efficient operation',
      'Reduces energy bills with efficient systems',
      'Extends boiler lifespan with regular maintenance',
      'Provides reliable hot water and heating',
      'Peace of mind with professional installation'
    ],
    imageUrl: 'https://images.pexels.com/photos/4099471/pexels-photo-4099471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    faqs: [
      {
        question: 'How often should I service my boiler?',
        answer: 'We recommend annual servicing to maintain efficiency, ensure safety, and comply with warranty requirements. Regular servicing helps identify potential issues before they become major problems.'
      },
      {
        question: 'What are the signs that my boiler needs repair?',
        answer: 'Warning signs include unusual noises, leaks or drips, reduced heating performance, pilot light going out, yellow instead of blue flame, increased energy bills, and frequent pressure drops.'
      },
      {
        question: 'How long does a boiler installation take?',
        answer: 'A straightforward replacement typically takes 1-2 days. For new installations or system changes (like switching from a conventional to a combi boiler), it may take 2-3 days depending on the complexity of the work required.'
      }
    ]
  },
  {
    id: 'bathroom-plumbing',
    title: 'Bathroom Plumbing',
    slug: 'bathroom-plumbing',
    shortDescription: 'Complete bathroom plumbing services from repairs to full installations and renovations.',
    fullDescription: 'We offer comprehensive bathroom plumbing services including repairs, installations, and complete renovations. Our experienced plumbers can handle everything from fixing leaky taps and shower heads to installing new toilets, sinks, baths, and shower systems. We also provide expert advice on bathroom layouts and fixtures to maximize space and functionality while ensuring proper plumbing installation.',
    features: [
      'Toilet installation, repair, and replacement',
      'Shower and bath installation and repairs',
      'Sink and basin fitting and maintenance',
      'Fixing leaky taps and shower heads',
      'Water pressure issues resolved',
      'Complete bathroom renovation plumbing'
    ],
    benefits: [
      'Improves bathroom functionality and efficiency',
      'Prevents water damage from leaks',
      'Updates outdated fixtures for better performance',
      'Increases property value with modern installations',
      'Expert advice on water-saving fixtures'
    ],
    imageUrl: 'https://images.pexels.com/photos/6489100/pexels-photo-6489100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    faqs: [
      {
        question: 'How long does a bathroom renovation typically take?',
        answer: 'A full bathroom renovation usually takes 2-3 weeks depending on the scope of work. Simple fixture replacements can be completed in 1-2 days, while extensive renovations involving structural changes may take longer.'
      },
      {
        question: 'Can you help me choose the right fixtures for my bathroom?',
        answer: 'Yes! We provide expert advice on selecting fixtures that match your style preferences, budget, and practical needs. We can recommend water-efficient options and layouts that maximize your available space.'
      },
      {
        question: 'Do I need to replace my entire toilet if it\'s leaking?',
        answer: 'Not necessarily. Many toilet leaks can be fixed by replacing individual components like the flush valve, fill valve, or wax ring. Our plumbers will assess the issue and recommend the most cost-effective solution.'
      }
    ]
  },
  {
    id: 'kitchen-plumbing',
    title: 'Kitchen Plumbing',
    slug: 'kitchen-plumbing',
    shortDescription: 'Professional plumbing services for kitchen sinks, taps, appliances, and waste disposal units.',
    fullDescription: 'Our kitchen plumbing services cover everything from repairing leaky taps and blocked sinks to installing new sinks, taps, dishwashers, and waste disposal units. We ensure all connections are secure and properly installed to prevent leaks and water damage. Whether you\'re renovating your kitchen or dealing with plumbing issues, our experienced team provides reliable solutions tailored to your needs.',
    features: [
      'Sink and tap installation and repair',
      'Dishwasher and washing machine plumbing',
      'Waste disposal unit fitting and maintenance',
      'Under-sink water filter installation',
      'Drain unblocking and maintenance',
      'Gas line installation for stoves and ovens'
    ],
    benefits: [
      'Ensures efficient water flow and drainage',
      'Prevents water damage to cabinets and floors',
      'Proper installation of appliances prevents leaks',
      'Improves kitchen functionality',
      'Expert advice on water-saving fixtures'
    ],
    imageUrl: 'https://images.pexels.com/photos/6958516/pexels-photo-6958516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    faqs: [
      {
        question: 'Can you install a new kitchen sink as part of a renovation?',
        answer: 'Absolutely! We can remove your old sink and install a new one, ensuring all connections are properly sealed and secure. We work with all types of sinks including undermount, drop-in, farmhouse, and integrated designs.'
      },
      {
        question: 'How do I know if my kitchen tap needs replacing?',
        answer: 'Signs include persistent leaks despite washer replacements, stiff or difficult operation, corrosion or mineral buildup, inconsistent water flow, and outdated style. We can assess your current tap and recommend suitable replacements.'
      },
      {
        question: 'Can you connect my refrigerator to the water supply for the ice maker?',
        answer: 'Yes, we can install water lines for refrigerators with ice makers or water dispensers. We ensure proper installation with quality materials to prevent leaks and provide reliable water supply to your appliance.'
      }
    ]
  },
  {
    id: 'pipe-repair',
    title: 'Pipe Repair & Replacement',
    slug: 'pipe-repair',
    shortDescription: 'Expert repair and replacement of damaged, leaking, or outdated pipes in any location.',
    fullDescription: 'We provide comprehensive pipe repair and replacement services for all types of plumbing systems. Whether you\'re dealing with leaking pipes, burst pipes in an emergency, frozen pipes, or simply want to upgrade old pipework, our skilled plumbers can help. We work with copper, PEX, PVC, and other pipe materials to ensure your plumbing system is reliable and efficient.',
    features: [
      'Emergency pipe burst repairs',
      'Replacement of corroded or damaged pipes',
      'Frozen pipe thawing and repair',
      'Upgrading outdated galvanized pipes',
      'Pipe rerouting and installation',
      'Preventative maintenance to avoid future issues'
    ],
    benefits: [
      'Prevents water damage to your property',
      'Improves water pressure and flow',
      'Reduces risk of future leaks and bursts',
      'Modern pipes improve water quality',
      'Energy savings from efficient plumbing'
    ],
    imageUrl: 'https://images.pexels.com/photos/4116197/pexels-photo-4116197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    faqs: [
      {
        question: 'How do I know if my pipes need replacing?',
        answer: 'Signs include frequent leaks, discolored water, reduced water pressure, visible corrosion, strange noises in your plumbing system, and pipes over 50 years old (especially galvanized steel). A professional inspection can determine if replacement is necessary.'
      },
      {
        question: 'What types of pipes do you use for replacements?',
        answer: 'We primarily use copper, PEX, and CPVC depending on the application and your preferences. Each material has its advantages: copper is durable and naturally antimicrobial, PEX is flexible and resistant to freezing, and CPVC is cost-effective for many applications.'
      },
      {
        question: 'How long does pipe replacement take?',
        answer: 'The timeframe depends on the extent of the work. Small section replacements might take just a few hours, while whole-house repiping typically takes 2-5 days. We aim to complete work efficiently while minimizing disruption to your home.'
      }
    ]
  },
  {
    id: 'water-heater',
    title: 'Water Heater Services',
    slug: 'water-heater',
    shortDescription: 'Installation, repair, and maintenance of all types of water heaters for reliable hot water.',
    fullDescription: 'Our water heater services cover all aspects of installation, repair, maintenance, and replacement for both traditional tank and tankless water heaters. We help you select the right size and type of water heater for your home\'s needs and ensure it\'s properly installed for optimal performance. Our technicians can diagnose and fix common water heater issues including temperature problems, leaks, strange noises, and complete failures.',
    features: [
      'Installation of tank and tankless water heaters',
      'Repair of all water heater brands and models',
      'Regular maintenance to extend lifespan',
      'Replacement of outdated or inefficient units',
      'Energy-efficient system recommendations',
      'Emergency service for no hot water situations'
    ],
    benefits: [
      'Ensures reliable hot water supply',
      'Improves energy efficiency and reduces bills',
      'Extends equipment lifespan with proper maintenance',
      'Proper sizing provides adequate hot water for your needs',
      'Professional installation prevents safety issues'
    ],
    imageUrl: 'https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    faqs: [
      {
        question: 'How do I know if I should repair or replace my water heater?',
        answer: 'Consider replacement if your unit is over 10 years old, repairs would cost more than 50% of a new unit, it\'s frequently breaking down, it\'s inefficient, or not meeting your hot water needs. We can assess your current unit and provide honest recommendations.'
      },
      {
        question: 'What are the advantages of tankless water heaters?',
        answer: 'Tankless water heaters provide unlimited hot water on demand, use less energy, last longer (15-20 years vs. 8-12 for traditional tanks), take up less space, and reduce the risk of catastrophic leaks and water damage. However, they typically have a higher upfront cost.'
      },
      {
        question: 'How often should water heaters be maintained?',
        answer: 'We recommend annual maintenance for both tank and tankless water heaters. This includes flushing the system to remove sediment, checking pressure relief valves, inspecting anodes, and ensuring all components are functioning properly.'
      }
    ]
  },
  {
    id: 'commercial-plumbing',
    title: 'Commercial Plumbing',
    slug: 'commercial-plumbing',
    shortDescription: 'Specialized plumbing services for businesses, restaurants, retail, and commercial properties.',
    fullDescription: 'Our commercial plumbing services are designed to meet the unique needs of businesses, restaurants, retail spaces, and other commercial properties. We understand that plumbing issues can disrupt your operations and affect your bottom line, so we provide prompt, efficient service to minimize downtime. From routine maintenance to complex installations and emergency repairs, our team has the expertise to handle commercial plumbing projects of all sizes.',
    features: [
      'Commercial kitchen plumbing installation and repair',
      'Bathroom fixtures for high-traffic commercial spaces',
      'Backflow testing and prevention',
      'Water conservation solutions',
      'Code compliance and inspections',
      'Preventative maintenance programs',
      '24/7 emergency service for businesses'
    ],
    benefits: [
      'Minimizes business disruption and downtime',
      'Ensures compliance with commercial building codes',
      'Prevents costly water damage and emergencies',
      'Specialized knowledge of commercial systems',
      'Customized maintenance plans for your business'
    ],
    imageUrl: 'https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    faqs: [
      {
        question: 'Do you offer maintenance contracts for commercial properties?',
        answer: 'Yes, we provide customized maintenance contracts tailored to your business needs. These can include regular inspections, preventative maintenance, priority service, and discounted rates on repairs. Regular maintenance helps prevent costly emergencies and extends the life of your plumbing system.'
      },
      {
        question: 'Can you work around our business hours to minimize disruption?',
        answer: 'Absolutely. We understand that plumbing work can disrupt your operations, so we offer flexible scheduling including evenings, weekends, and off-hours service for many types of commercial plumbing work.'
      },
      {
        question: 'Do you handle plumbing for commercial kitchen installations?',
        answer: 'Yes, we specialize in commercial kitchen plumbing including installation of sinks, dishwashers, grease traps, drainage systems, and gas lines. We ensure all installations meet health department regulations and commercial building codes.'
      }
    ]
  },
  {
    id: 'emergency-plumbing',
    title: 'Emergency Plumbing',
    slug: 'emergency-plumbing',
    shortDescription: '24/7 emergency plumbing service for urgent issues like burst pipes, floods, and major leaks.',
    fullDescription: 'Our 24/7 emergency plumbing service provides immediate assistance for urgent plumbing issues that can\'t wait. We respond quickly to emergencies like burst pipes, severe leaks, flooding, backed-up sewage, and no hot water situations. Our emergency team arrives equipped with the tools and parts to resolve most issues on the first visit, minimizing damage to your property and restoring your plumbing system as quickly as possible.',
    features: [
      'Available 24 hours a day, 7 days a week',
      'Fast response times (aim for 60 minutes or less)',
      'Fully equipped vans with common parts and tools',
      'Burst pipe and major leak repair',
      'Emergency drain unblocking',
      'Water supply shutoff and restoration',
      'Emergency boiler and water heater repair'
    ],
    benefits: [
      'Immediate response to prevent extensive damage',
      'Skilled technicians ready for any emergency',
      'Reduces water damage restoration costs',
      'Peace of mind knowing help is always available',
      'Temporary solutions when needed until permanent fix'
    ],
    imageUrl: 'https://images.pexels.com/photos/3862131/pexels-photo-3862131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    faqs: [
      {
        question: 'What should I do if a pipe bursts while waiting for you to arrive?',
        answer: 'First, shut off your main water supply to stop the flow. Then, drain the pipes by running cold taps and flushing toilets. Remove as much water as possible using mops, towels, or a wet vacuum. Take photos for insurance purposes if there\'s significant damage. If water is near electrical outlets, turn off electricity to those areas.'
      },
      {
        question: 'How quickly can you respond to an emergency?',
        answer: 'We aim to arrive within 60 minutes for true emergencies in Edinburgh. Response time may vary depending on your location, current call volume, and weather conditions, but we prioritize emergencies and will give you an honest estimated arrival time when you call.'
      },
      {
        question: 'Is there an extra charge for emergency service outside normal hours?',
        answer: 'Yes, emergency service outside normal business hours (evenings, weekends, and holidays) does carry a higher rate. However, we\'re transparent about our pricing and will explain all costs before beginning work. For true emergencies, the cost of immediate service is usually far less than the potential damage from delaying repairs.'
      }
    ]
  },
  {
    id: 'toilet-repairs',
    title: 'Toilet Repairs and Installation',
    slug: 'toilet-repairs',
    shortDescription: 'Expert repair and installation of all toilet types, fixing leaks, blockages, and flushing issues.',
    fullDescription: 'We provide comprehensive toilet repair and installation services to address common issues like leaks, running toilets, weak flushes, blockages, and complete toilet replacements. Our plumbers work with all toilet types and brands, ensuring proper installation and efficient operation. Whether you need a quick repair or want to upgrade to a modern, water-efficient toilet, we deliver reliable service with quality workmanship.',
    features: [
      'Repair of running toilets and leaks',
      'Fixing weak flush and refill issues',
      'Toilet blockage clearance',
      'Complete toilet replacement and installation',
      'Cracked tank or bowl repair or replacement',
      'Water-efficient toilet recommendations',
      'Repair and replacement of toilet components'
    ],
    benefits: [
      'Stops water waste from leaks and running toilets',
      'Prevents damage to flooring and subfloor',
      'Improves flushing performance',
      'Water-efficient models reduce water bills',
      'Professional installation ensures proper function'
    ],
    imageUrl: 'https://images.pexels.com/photos/7533347/pexels-photo-7533347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    faqs: [
      {
        question: 'Why does my toilet keep running after flushing?',
        answer: 'A running toilet is typically caused by a faulty flapper valve that\'s not sealing properly, a problem with the fill valve, an incorrect float height, or a damaged flush valve. These issues prevent the tank from shutting off properly after flushing. Our plumbers can quickly diagnose and fix the specific cause.'
      },
      {
        question: 'How long does it take to install a new toilet?',
        answer: 'A straightforward toilet replacement typically takes 1-2 hours. If there are complications like floor damage, unusual plumbing configurations, or the need for additional repairs, it may take longer. We ensure proper installation including secure mounting, leak-free connections, and proper sealing.'
      },
      {
        question: 'Can you help me choose a water-efficient toilet?',
        answer: 'Yes, we can recommend various water-efficient options based on your budget and preferences. Modern low-flow toilets use 1.28 gallons per flush or less while maintaining excellent flushing performance. We can explain the differences between dual-flush, pressure-assisted, and gravity-fed models to help you make the best choice.'
      }
    ]
  }
];