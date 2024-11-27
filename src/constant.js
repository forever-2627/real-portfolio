export const PAUSE_REASON = [
  'Feedback request',
  'Asset request',
  'Work Complete',
  'Blocked',
  'Other / Personal',
];

export const RESUME_REASON = [
  'Feedback sent',
  'Assets sent',
  'No reason for Pause',
  'Other',
];

export const DATA_CURRENCY = {
	'GBP (£)': '£',
	'EUR (€)': '€',
	'USD ($)': '$',
}

export const JOB_TYPE = {
  'create-content' : 'Create & Content',
  'technical-development' : 'Technical & Development',
  'marketing' : 'Marketing & Business Support',
}

export const FREELANCER_TYPE = {
  'video-production': 'Video production',
  'ux-design': 'UX Design',
  'ui-design': 'UI Design',
  'graphic-design': 'Graphic Design',
  'social-media': 'Social Media Content',
  'creative-writing': 'Creative Writing',
  'animation': 'Animation',
  'logo-design': 'Logo Design',
  'video-editing': 'Video Editing',
}

export const FREELANCER_AND_TYPE_DATA = [
  {
    'key': 'create-content',
    'label': 'Creative & Content',
    'children': [
      {
        'key': 'video-production',
        'label': 'Video production',
      },
      {
        'key': 'ux-design',
        'label': 'UX Design',
      },
      {
        'key': 'ui-design',
        'label': 'UI Design',
      },
      {
        'key': 'graphic-design',
        'label': 'Graphic Design',
      },
      {
        'key': 'social-media',
        'label': 'Social Media Content',
      },
      {
        'key': 'creative-writing',
        'label': 'Creative Writing',
      },
      {
        'key': 'animation',
        'label': 'Animation',
      },
      {
        'key': 'logo-design',
        'label': 'Logo Design',
      },
      {
        'key': 'video-editing',
        'label': 'Video Editing',
      },
    ]
  },
  {
    'key': 'technical-development',
    'label': 'Technical & Development',
    'children': [
      {
        'key': 'web-development',
        'label': 'Web Development',
      },
      {
        'key': 'software-engineering',
        'label': 'Software Engineering',
      },
      {
        'key': 'data-science',
        'label': 'Data Science',
      },
      {
        'key': 'cybersecurity',
        'label': 'Cybersecurity',
      },
      {
        'key': 'cloud-computing',
        'label': 'Cloud Computing',
      },
      {
        'key': 'mobile-app',
        'label': 'Mobile App Development',
      },
      {
        'key': 'devops',
        'label': 'Devops Engineering',
      },
      {
        'key': 'blockchain',
        'label': 'BLockchain Development',
      },
      {
        'key': 'artificial',
        'label': 'Artificial Intelligence & Machine Learning',
      },
    ]
  }, {
    'key': 'marketing',
    'label': 'Marketing & Business Support',
    'children': [
      {
        'key': 'digital-marketing',
        'label': 'Digital Marketing',
      },
      {
        'key': 'seo',
        'label': 'Seo',
      },
      {
        'key': 'market-research',
        'label': 'Market Research',
      },
      {
        'key': 'content-marketing',
        'label': 'Content Marketing',
      },
      {
        'key': 'email-marketing',
        'label': 'Email Marketing',
      },
      {
        'key': 'social-marketing',
        'label': 'Social Marketing',
      },
      {
        'key': 'advertising',
        'label': 'Advertising',
      },

      {
        'key': 'business-development',
        'label': 'Business Development',
      },

      {
        'key': 'finance-legal',
        'label': 'Finance & Legal',
      },
    ]
  }
]

export const INPUT_CLASSES = 'focus:outline-none px-4 text-[#010101] text-left bg-[#ffffffb0] border border-black rounded-lg font-poppins text-base shadow-input-custom';
export const LARGE_BUTTON_CLASSES = 'text-midnight-blue font-bold bg-[#50f8d0] rounded-3xl flex justify-center items-center font-poppins text-base shadow-[4px_5px_0_4px_#160042] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0_2px_#160042] w-full text-xl py-4 mx-auto';
export const MODAL_CLASSES = 'p-6 rounded-xl shadow-lg w-96 border-2';
export const BUTTON_CLASSES = 'text-midnight-blue font-bold bg-[#50f8d0] rounded-3xl flex justify-center items-center font-poppins text-base shadow-[4px_5px_0_4px_#160042] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0_2px_#160042] text-xl py-4 mx-auto';
export const DEFAULT_BUTTON = 'px-4 py-2 rounded-2xl border-1 border-black text-[#1D1B44] shadow-[0px_1.95px_0px_2.44px_#1F1F1F]';
export const SM_PRIMARY_BUTTON = 'px-4 py-3 rounded-3xl border-1 text-base border-black text-[#1D1B44] shadow-[2px_3px_0_2px_#160042] bg-[#50F8D0]';



// ======================================================== NEW
export const INTRODUCTION = "FullStack Web Developer, AI Engineer, GIS Specialist"
export const DESCRIPTION = "I am a seasoned full-stack software engineer with over 8 years of professional experience, specializing in backend development. My expertise lies in crafting robust and scalable SaaS-based architectures on the Amazon AWS platform."