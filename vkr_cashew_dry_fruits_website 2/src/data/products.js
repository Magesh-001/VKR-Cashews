// Central product data file — single source of truth for all product pages, filters, search, related products

export const WHATSAPP_NUMBER = '918838885921'
export const PHONE_1 = '8838885921'
export const PHONE_2 = '9345020801'
export const EMAIL = 'vkrcashews@gmail.com'

export const WHATSAPP_DEFAULT_MSG = encodeURIComponent(
  'Hello VKR Cashew & Dry Fruits, I am interested in your products. Please share the details and best price.'
)

export const getWhatsAppProductMsg = (productName) =>
  encodeURIComponent(
    `Hello VKR Cashew & Dry Fruits, I am interested in ${productName}. Please share the best price and available quantities.`
  )

export const products = [
  // ── CASHEWS ──────────────────────────────────────────────────────────────
  {
    id: 'w180',
    slug: 'w180',
    name: 'W180 Cashews',
    displayName: 'W-180 Grade (King Cashew)',
    category: 'Cashews',
    categorySlug: 'cashews',
    type: 'whole',
    grade: 'Grade W-180',
    badge: 'King Size',
    subBadge: 'Export Standard',
    tagline: 'The Undisputed King of Cashews',
    count: 'Count: 160–180 nuts/lb',
    countNum: '170–180 / lb',
    uniformity: '99.8% Whole Kernel',
    packaging: 'Nitrogen vacuum pack 10kg, 20kg bulk tin, 500g pouch',
    description:
      'The undisputed "King of Cashews". Extra jumbo whole kernels offering a luxurious crisp bite and naturally sweet butter finish.',
    longDescription:
      'Large premium whole cashews selected for quality and appearance. Known as the King of Cashews, offering immense visual prestige and rich buttery flavor. Hand-selected for luxurious hampers, five-star culinary dessert toppings, and corporate gifting. Pure ivory hue, rich oil content, and zero broken kernels.',
    keyApplications: [
      'Luxury gift hampers',
      'Artisanal festive presentations',
      'Five-star culinary confectionery',
      'Corporate VIP gifting',
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCddXDttEzsTIiSYjerbUtB1oYKqZ1vuoEdVnu5cSJGyD5RttAwAiz2t1UWq-3-SaS9Hvc65jBTYHA7wOfPz-8n18F-Y8MVRqooPvZuqmvKbodygaQQLsSkvhwJkU3DuPUlNKyjwS_3XpXp8V2GIKSGGIWUpk0X3uF41eWc0ptGH0f4pprapGV8y2ly0Fdnxu4BXp1yX2esePgzE9QDJHK21TPizjadtT-EuYqihuL7cC4xSS4s-LYQ',
    tags: ['w180', 'king', 'jumbo', 'cashews', 'whole', 'export'],
  },
  {
    id: 'w240',
    slug: 'w240',
    name: 'W240 Cashews',
    displayName: 'W-240 Grade (Jumbo Select)',
    category: 'Cashews',
    categorySlug: 'cashews',
    type: 'whole',
    grade: 'Grade W-240',
    badge: 'Jumbo Select',
    subBadge: 'Boutique Choice',
    tagline: 'Large Whole — Festive & Premium Grade',
    count: 'Count: 220–240 nuts/lb',
    countNum: '220–240 / lb',
    uniformity: 'Uniform Ivory Kernel',
    packaging: '500g Luxury Pack, 10kg Vacuum, 50kg Master Burlap',
    description:
      'Large whole cashews with a rich buttery crunch and uniform size. The preferred premium choice for festive luxury hampers.',
    longDescription:
      'Carefully selected whole cashews with excellent taste and quality. Ideal for luxury sweet making, festive gifting hampers, and gourmet retail shelves. Carefully graded large whole kernels prized by artisanal sweet manufacturers and premium gift packagers for their imposing profile and crunchy texture.',
    keyApplications: [
      'Festive gift boxes and hampers',
      'Artisanal Indian sweet making',
      'Premium retail display shelves',
      'Dry roasting & spice coating',
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCoRQWBRopp7SUfXeWd3aI-BYCt1x6XWUUuj1Pdl3WMKfG8JzCY4XPyXPuHzn_O0bnVOcMcfQh1Z5GJQvgOWIq67H-572WO52eK1m2hkYtyLdKmxNoLhaHPbB5iDUBfI4xjQuBW8DgZnlKb9chG0e3QWxRApEt9h3H7rSlHWPECs_GzpeVYjHFLM02qWjLODHjHDxZio-abmkMDe6Krb_aWW6-XAkYaq5vkPGQaZWGBdz5iwr0eVKzh',
    tags: ['w240', 'jumbo', 'large', 'cashews', 'whole', 'festive'],
  },
  {
    id: 'w320',
    slug: 'w320',
    name: 'W320 Cashews',
    displayName: 'W-320 Grade (Popular Standard)',
    category: 'Cashews',
    categorySlug: 'cashews',
    type: 'whole',
    grade: 'Grade W-320',
    badge: 'Popular Grade',
    subBadge: 'Global Benchmark',
    tagline: 'Global Benchmark — Most Traded Grade',
    count: 'Count: 300–320 nuts/lb',
    countNum: '300–320 / lb',
    uniformity: 'Consistent Benchmark Grading',
    packaging: '1kg Stand-up Pouch, 11.34kg Tin, 50kg Bags',
    description:
      'The global benchmark standard for whole cashew nuts. Exceptional balance of uniform appearance, crisp mouthfeel, and value.',
    longDescription:
      'A popular whole cashew grade suitable for a wide range of uses. The global benchmark for everyday consumption, roasting, gifting, and culinary creations. The most versatile and universally sought-after cashew grade globally. Ideal for daily snacking, confectioneries, spice roasting, and mass distribution.',
    keyApplications: [
      'Everyday healthy snacking',
      'Commercial confectioneries and bakeries',
      'Salted, spiced, and roasted snacks',
      'Wholesale and supermarket supply',
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC9ICmKZAF_4HhxoYYBPJMlRBTcUIcTW_pPvcvh8z4jzZ69BIl5CYPp5VOuVg6TSWo1VTgXVEgXaHAWnMHFkYIq7Ws3CXWUsPt5Z8y0wB00ZfIm8p4zSRmUWcAMAEEoKZyuBq8ajlyOxq8iCVbR19UwLuyNfw57MpV6Nd1_cO17LkPTfKuVbIMOf3iVT1z0NLdQFkKtofgVR2lYQHxePTEyQylBmS-X9jl3fvMcJjp8hMNR6lgi97RB',
    tags: ['w320', 'popular', 'standard', 'cashews', 'whole', 'table'],
  },
  {
    id: 'w400',
    slug: 'w400',
    name: 'W400 Cashews',
    displayName: 'W-400 Grade (Economy Whole)',
    category: 'Cashews',
    categorySlug: 'cashews',
    type: 'whole',
    grade: 'Grade W-400',
    badge: 'Economy Whole',
    subBadge: 'Value Whole Nut',
    tagline: 'Compact Whole — Maximum Nut Yield',
    count: 'Count: 380–400 nuts/lb',
    countNum: '380–400 / lb',
    uniformity: 'Maximum Whole Nut Yield / kg',
    packaging: '10kg Sealed Pouch, Bulk Master Bag, 50kg Jute',
    description:
      'Compact whole cashew kernels retaining 100% of authentic sweetness and buttery texture. Highly demanded for sweetmaking and culinary blending.',
    longDescription:
      'Smaller whole cashews offering great taste and value. Perfect for confectionery, commercial bakeries, institutional catering, and high-volume recipes. Cost-effective whole kernel offering the authentic Panruti cashew sweetness at a modest price point. Excellent for high-output confectionery kitchens.',
    keyApplications: [
      'Commercial mithai and sweet makers',
      'Bakery biscuits and pastries',
      'Institutional bulk cooking',
      'High-volume catering food prep',
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCJ3ac6A73ZLYEqtOIr6ippw3Qh84_2g0i5Q1lCsulyO_GmkBGuDJQV6WTygBervf5rGpQZ-I6WtikNaC4IOrrwfJkACnQ059UN80h3ML2a3hFykiaOqj2ihiWQ-dPgSAQGs_Gt1Hm_DnL8FMOcDj8c87r1olnDy86iB6x-cB9AHIiVGDIkhUqrydhOhJkLFcu0JptedTMT5kdCbbbcQPdzbQf9UCMwETjwa69iB7ny2WfaXoMN26kU',
    tags: ['w400', 'economy', 'small', 'cashews', 'whole', 'baking'],
  },
  {
    id: 'splits',
    slug: 'splits',
    name: 'Cashew Splits (JH)',
    displayName: 'Cashew Splits (JH Grade)',
    category: 'Cashews',
    categorySlug: 'cashews',
    type: 'pieces',
    grade: 'JH Splits',
    badge: 'Cooking Grade',
    subBadge: 'Culinary Halves',
    tagline: 'Naturally Split Halves — Fast Oil & Syrup Absorption',
    count: 'Split Kernels: Natural Halves',
    countNum: 'Natural Halves',
    uniformity: 'Naturally Halved • Dust Free',
    packaging: '5kg Food-grade Pouch, 20kg Master Carton, 50kg Bulk',
    description:
      'Naturally split cashew halves (JH grade). Ideal for traditional Indian sweets (kaju katli, Mysore pak, halwa), everyday cooking, and garnishes.',
    longDescription:
      'Quality cashew splits suitable for traditional Indian sweets (kaju katli, Mysore pak, halwa), everyday cooking, snacks, and gourmet food preparation. Hand-separated kernel splits without chips or fines. Absorbs ghee and syrups quickly, making it the premier choice for traditional sweet manufacturers.',
    keyApplications: [
      'Kaju Katli and traditional halwas',
      'Pulao, biryani, and dessert garnishing',
      'Fried spicy cashew snack blends',
      'Hotel & restaurant culinary gravies',
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCbbh_K5oGjikdMaDNlgn4fun9sd-q8wJX6nxysx2PZwINx-iX5uenQexPXECfxnY6eA2jxzMHtiKpbjZMlTkRQUMd-f5bVy0fOb88XsAK_6OJDeute6U_-yNlJosJ4IRVHAEqRrIul6OY0gGKVpYMW_fLkDTIwVyodCyC3-eM0QDvOrLaYKeVQShph6BXARi_cSsmjY7xQFBjOhawZQIqOj8IbFQ-tfo78N49lpt741aUDv1uJhpFp',
    tags: ['splits', 'jh', 'halves', 'cashews', 'kaju katli', 'cooking'],
  },
  {
    id: 'wsp',
    slug: 'wsp',
    name: 'Cashew Pieces (WSP)',
    displayName: 'Cashew Pieces (WSP Grade)',
    category: 'Cashews',
    categorySlug: 'cashews',
    type: 'pieces',
    grade: 'WSP Pieces',
    badge: 'Selected Pieces',
    subBadge: 'Gravy & Paste Grade',
    tagline: 'Selected White Small Pieces for Gravies & Bakeries',
    count: 'Sorting: Sifted Uniform Pieces',
    countNum: 'Sifted Clean Pieces',
    uniformity: 'Roast Fragrance • Moisture < 5%',
    packaging: '10kg Pack, 25kg / 50kg Bags for HoReCa',
    description:
      'Selected cashew pieces suitable for culinary applications, rich gravies, nut purees, cookie baking, ice creams, and bulk kitchen preparations.',
    longDescription:
      'Selected cashew pieces suitable for culinary applications, rich gravies, nut purees, cookie baking, ice creams, and bulk institutional kitchen food preparations. Cost-effective cashew pieces sorted from whole kernels during processing. Uncompromised nutritional value and natural cashew creaminess.',
    keyApplications: [
      'Shahi paneer, korma, and Mughlai gravies',
      'Industrial biscuit and cookie manufacturing',
      'Cashew butter, nut purees, and confectionery fillings',
      'Commercial ice cream and dessert toppings',
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCYvyPsXNY43-z7w1vndtTEhwYToAmWr_MWmIHLFw0HQmWkFb7RYZpMLC8GJvSbQ0hliF_VDuJAx8fY_DOnQYtBqUcIKzyyH7ChYIUhuUwN3aPBpG9VyWMW8EZRTlAuTiebtl_n-3m45cGcBYGL26T_2gnX6n7FzFohmkv9m_L_ZPg_h0iJRrfN_v39yqF1qqM86qY1UU4KLcUbcl9nuYkehuYNk-A5G8jd-5swXsoQ_cHdHhUuCUUZ',
    tags: ['wsp', 'pieces', 'cashews', 'gravy', 'baking', 'industrial'],
  },

  // ── DRY FRUITS ────────────────────────────────────────────────────────────
  {
    id: 'almonds',
    slug: 'almonds',
    name: 'Almonds (Badam)',
    displayName: 'California Almonds (Badam)',
    category: 'Dry Fruits',
    categorySlug: 'dry-fruits',
    type: 'treenut',
    grade: 'California Grade',
    badge: 'Tree Nut',
    subBadge: 'Whole Kernel',
    tagline: 'Super Grade Badam — Rich in Natural Oils & Vitamin E',
    count: 'Non-GMO • Unpolished',
    countNum: 'California Grade A',
    uniformity: 'Uniform Almond Kernels',
    packaging: '250g Pouch, 500g Vacuum Pack, 1kg Tin Box, 10kg Wholesale Box',
    description:
      'Premium quality almonds. Rich in natural oils, protein, and dietary fiber with an unbeatable fresh crunch. Sourced from choice orchards.',
    longDescription:
      'Direct farm harvest. Abundant in Vitamin E, plant protein, magnesium, and dietary fiber. Excellent for daily cognitive wellness, baking, and traditional Indian sweet craft. Vacuum batch certified to preserve natural crunch and prevent oxidation.',
    keyApplications: [
      'Daily morning wellness and snacking',
      'Badam halwa, kheer, and traditional sweets',
      'Baking, granola, and artisanal chocolates',
      'Festive gift boxes and corporate assortments',
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA1rwBFmSVKezu5mX6IJTGdGyj9TCjOP4XuUJ03fXyD-pJIXeIP1KrkI8_LyZ2ufztMfd2fw5wyRcm3jebKc4-OrW9KgZgIpmwrc4dTXqu_Hgry0aLf2yeeCAb-eNaj4Ezq66gEL-GcIfjicQQVjvVujLOpuDZbDija2fdslzYZUe5WYrW9it3aHbEsm7MahYdKg2q_WXZidDx-lyz_MFEBA5Kknj94b_-i-RyRjVlGDc6A54li9N0N',
    tags: ['almonds', 'badam', 'california', 'dry fruits', 'treenut', 'nuts'],
  },
  {
    id: 'walnuts',
    slug: 'walnuts',
    name: 'Walnuts (Akhrot)',
    displayName: 'Kashmiri Walnuts (Akhrot)',
    category: 'Dry Fruits',
    categorySlug: 'dry-fruits',
    type: 'treenut',
    grade: 'Kashmiri Select',
    badge: 'Tree Nut',
    subBadge: 'Extra Light Halves',
    tagline: 'Hand-Cracked Kashmiri Akhrot — High Natural ALA Omega-3',
    count: 'Extra Light Halves',
    countNum: 'Golden Kashmir Halves',
    uniformity: 'Zero Chemical Bleach • Light Halves',
    packaging: '250g Nitrogen Flush, 500g Vacuum Pack, 1kg Tin, 5kg Box',
    description:
      'Naturally rich and delicious walnuts. Packed with omega-3 fatty acids, golden light halves with delicate mild flavor and no bitterness.',
    longDescription:
      'Hand-cracked walnut kernels packed with Alpha-Linolenic Acid (ALA Omega-3), antioxidants, and polyphenols. Zero chemical bleaches, vacuum preserved for pure natural freshness. Hand-sorted golden halves selected for mild buttery taste.',
    keyApplications: [
      'Cognitive memory health and daily wellness',
      'Fresh garden salads and gourmet bakery brownies',
      'Traditional confectionery and walnut pies',
      'Luxury nutrition hampers',
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDWzFo-dsyYbV0k2nhSO-MMxhnDT7SZLpw8-qpZczFlWJco4tbx7RbqX2R-JzgaR2kQxYogbfDoksfxvym7fmDsHy3pOSCQO2Pz6eDpqhOvkGWvoYtatzfJxEiOXWRfZ9iERTA_m-qVmdA_ZvtrVL14F2UB7pIzyM-qsPeh2TNY1x4zoO-DLbzr4HMs00fjQgx6yvP_FlElifTGF1FedsnWqmeDidif8zAKceflPn4Xhu9vxeOt3ODC',
    tags: ['walnuts', 'akhrot', 'kashmir', 'dry fruits', 'omega3', 'halves'],
  },
  {
    id: 'athi-palam',
    slug: 'athi-palam',
    name: 'Athi Palam (Dry Figs)',
    displayName: 'Athi Palam — Brown Organic Dry Fig',
    category: 'Dry Fruits',
    categorySlug: 'dry-fruits',
    type: 'driedfruit',
    grade: 'Brown Organic',
    badge: 'Signature Harvest',
    subBadge: 'Organic Sun-Dried',
    tagline: 'Brown Organic Dry Fig / Anjeer — 100% Naturally Sun-Dried',
    count: '100% Natural Dried',
    countNum: 'Sun-Dried Garland Select',
    uniformity: 'Soft Texture • Dense Natural Seeds',
    packaging: '200g Garland Pack, 500g Sealed Tray, 1kg Gift Tin, 10kg Carton',
    description:
      'Brown Organic Dry Fig. Tender, sweet, fiber-rich whole dried figs sourced for superior softness, dense seeds, and vital digestive wellness.',
    longDescription:
      '100% naturally dried whole figs free from artificial syrups and preservatives. Packed with iron, soluble fibers, and calcium to fortify stamina and digestive vitality. Traditionally garlanded and shade-cured for rich caramel notes.',
    keyApplications: [
      'Traditional Ayurvedic morning soaked tonic',
      'Natural low-GI sweetening for milk and desserts',
      'High-fiber stamina boosting snack',
      'Artisanal festive gift baskets',
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDHND3Q62kdrlRyfzTZQ2bnirS0zqX_Cspl_DkoX76Fp7At-2lRiUFs6kQgs0vTP1LySMGMHzQHX6_AL7aVxnWRudvh97coRek5RnD_dNIz__LQenF_e9e-CF5Nrua-IDC4xnhqywwxPbYCYQyXhCauOZZMBO2dXNArq7l23VSVahenzV_KyiTFPl0pkjeh2ixP3udyCooZhnZxlG6EHRdNTfvzqD3ty4eL-61nc6OAGhs5vSmtXsRD',
    tags: ['athi palam', 'figs', 'anjeer', 'dry fruits', 'organic', 'sun-dried'],
  },
  {
    id: 'dates',
    slug: 'dates',
    name: 'Dates (Khajoor)',
    displayName: 'Royal Dates (Khajoor)',
    category: 'Dry Fruits',
    categorySlug: 'dry-fruits',
    type: 'driedfruit',
    grade: 'Arabian Select',
    badge: 'Dried Fruit',
    subBadge: 'Semi-Moist',
    tagline: 'Naturally Sweet Premium Dates — Zero Added Sugar',
    count: 'Zero Added Sugar',
    countNum: 'Selected Khajoor',
    uniformity: 'Plump Amber Flesh • Soft Caramel',
    packaging: '500g Sealed Box, 1kg Gift Pack, 5kg Wooden Crate',
    description:
      'Naturally sweet premium dates. Soft, luscious texture bursting with natural caramel sweetness, vital potassium, and energizing minerals.',
    longDescription:
      'Naturally cured tree-ripened dates with high energy yield. High in natural potassium, magnesium, and dietary fiber. Ideal for daily vitality and fasting nourishment. Zero added syrups, glazing agents, or artificial preservatives.',
    keyApplications: [
      'Instant natural pre-workout energy',
      'Iftar and Ramadan fasting observance',
      'Sugar-free milkshakes and raw date pastes',
      'Assorted stuffed date confectionery',
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCvRVCq5ZzcBKNHzOEasd0i_ya90uxAtWh9UJLNAedcaXp9E156kbfqNrJJI6r4oKVwq5IV_B1QmmRNyicdPnd2P1TGDhLe0G3v2L_vlC90VMrqoCFMPA2q1YmbsoUTydCKOa6qBiSYiQU96hATn0edgoVkPK90z9iJymldywz30Ypp9307Ly-oZNIyE42s6YQ6_OHv4SavO-3hW2x-nLsmeJlLb7nUZ7s80u-JzA_2bVKhusHeyiTE',
    tags: ['dates', 'khajoor', 'medjool', 'arabian', 'dry fruits', 'energy'],
  },
  {
    id: 'raisins',
    slug: 'raisins',
    name: 'Raisins (Kismis)',
    displayName: 'Golden Raisins (Kismis)',
    category: 'Dry Fruits',
    categorySlug: 'dry-fruits',
    type: 'driedfruit',
    grade: 'Golden Kismis',
    badge: 'Dried Fruit',
    subBadge: 'Long Indian Green',
    tagline: 'Golden Sun-Dried Grapes — Sweet & Plump',
    count: 'Sun-Dried • Natural',
    countNum: 'Long Indian Green',
    uniformity: 'Tender Juicy Grapes • Clean Sort',
    packaging: '250g Pouch, 500g Pack, 1kg Pack, 15kg Wholesale Tin',
    description:
      'Sweet and naturally dried raisins. Golden, plump, and juicy sun-dried grapes perfect for daily snacking, baking, and festive sweets.',
    longDescription:
      'Cultivated from premium seedless grapes. Naturally shade-dried to lock in tender succulence, iron, and digestive nutrients without added artificial colorants. Perfect for traditional Indian sweet dishes, biryanis, and baked goods.',
    keyApplications: [
      'Payasam, kheer, and Pongal garnish',
      'Biryani and pulao rice delicacy',
      'Baking breads, cookies, and plum cakes',
      'Healthy snacking for children',
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuATIJNTHJ6HuwE094GD3F3fbZGu2UFvkUsU5ocIEk6OOBdfB2OCbzV5rHIRcglMlE_gGM8LZjFDKnogSs5aQOgTMVVu86t97gMwD5Q07m7m0ZGXY6oZK8SaGDgSBNb7cUhg4lV9-QcyPxKRQ-f3EEb8QOMgOSYoAU8umcGm5xKBGhfvEg_FTCbFYQeE5VBPdf_sfBnZ5a-g_9cS6r7buPsTkC34779q1tH2jfccTWZlfz_zImXiYMFw',
    tags: ['raisins', 'kismis', 'kishmish', 'golden', 'dry fruits'],
  },
  {
    id: 'black-raisins',
    slug: 'black-raisins',
    name: 'Black Raisins',
    displayName: 'Dark Black Raisins (Karuppu Drakshai)',
    category: 'Dry Fruits',
    categorySlug: 'dry-fruits',
    type: 'driedfruit',
    grade: 'Dark Therapeutic',
    badge: 'Dried Fruit',
    subBadge: 'Antioxidant Rich',
    tagline: 'Black Drakshai — Deeply Sweet with Therapeutic Goodness',
    count: 'Iron Rich • Natural',
    countNum: 'Sun-Cured Black Seedless',
    uniformity: 'High Anthocyanin • Plump Texture',
    packaging: '250g Standup Pouch, 500g Pack, 1kg Tin, 10kg Carton',
    description:
      'Premium dark raisins. Deeply flavorful, naturally antioxidant-rich dried black grapes with traditional therapeutic and blood-toning goodness.',
    longDescription:
      'Rich in anthocyanins, iron, and purifying antioxidants. Widely recommended for traditional wellness infusions, women’s nutrition, and digestion balance. Sourced from choice vineyards and dried without artificial additives.',
    keyApplications: [
      'Ayurvedic overnight water infusion',
      'Nutritional support for hemoglobin and iron',
      'Gourmet baked loaves and holiday cakes',
      'Daily holistic nutrition',
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD9rntFLZoHsjN4EK6Gvz0XRQk_K0ncinrCmq95PJKyTN27YsQsniYP0iCqNkrlXSEXTbUhiBmmoj3eEPjirkjQ7SpU_74fJo768zCFIs0nSGWor1hfzgqIFcKhkMj_6uw5VTOh549Dx9vCh5KlTd8XWwSpfWG5CVIAJzofQ1WWmG2n6GWxEw2hN7HWZgEeHZCi-P1BrX5dybp-wvFT8ontm1y2YT-1nYvtvTsaPcLCinhQlUj_d2MK',
    tags: ['black raisins', 'drakshai', 'kismis', 'dry fruits', 'iron'],
  },
  {
    id: 'pista',
    slug: 'pista',
    name: 'Pista (Pistachios)',
    displayName: 'Roasted Pistachios (Pista)',
    category: 'Dry Fruits',
    categorySlug: 'dry-fruits',
    type: 'treenut',
    grade: 'Gourmet Kernels',
    badge: 'Tree Nut',
    subBadge: 'Roasted & Salted',
    tagline: 'Dry-Roasted In-Shell Pistachios with Vibrant Emerald Kernels',
    count: 'Naturally Opened',
    countNum: 'In-Shell Slow Roasted',
    uniformity: 'Naturally Split Shells • Light Sea Salt',
    packaging: '250g Foil Pouch, 500g Canister, 1kg Tin Box, 10kg Wholesale Sack',
    description:
      'Premium pistachios. Lightly salted & roasted in-shell pistachios with vibrant green kernels and a savory, satisfying gourmet snap.',
    longDescription:
      'Artisanal slow roasted with mild sea-salt crystallization. Distinct emerald-green hue with high antioxidant levels, lutein, and healthy heart fats. Naturally opened shells guarantee ease of eating and peak ripeness at harvest.',
    keyApplications: [
      'Premium table snacking and cocktail service',
      'Indian ice cream, kulfi, and shrikhand topping',
      'Garnishing royal biryanis and gourmet sweets',
      'Executive corporate gift hampers',
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCAXx64IGFTk6cqR1mMKOI8ynPJaagerRH9o9-IfICPe1M3VFSSrB8_wnPsBATKrWTSses_ala8H2zSCLj2hJiS-qPcTyOFAVOks2mVMwfqOWd6kU25-NAvtoH9ywPkZ1L0PRPrOYOgzzn66vmIeAld7SBqxToNPWoGqJqaiCmRSWwLrYEXqUm7e7gDwqK96rkyiYOBq1CbaFvDWYQZpcyxlv5VMvsj51nl44iB8lY0HkVqSv_mw4IE',
    tags: ['pista', 'pistachios', 'roasted', 'salted', 'dry fruits', 'treenut'],
  },
  {
    id: 'foxnuts',
    slug: 'foxnuts',
    name: 'Foxnuts / Makhana',
    displayName: 'Foxnuts (Phool Makhana)',
    category: 'Dry Fruits',
    categorySlug: 'dry-fruits',
    type: 'superfood',
    grade: 'Phool Makhana',
    badge: 'Superfood',
    subBadge: 'Jumbo 5-Soota',
    tagline: 'Grade-1 Popped Lotus Seeds — Crunchy & Protein-Rich',
    count: 'Low Calorie • High Protein',
    countNum: 'Jumbo 5-Soota Selected',
    uniformity: 'Spotless Snowy Kernels • Maximum Pop',
    packaging: '250g Nitrogen Zip Pouch, 500g Bulk Pouch, 2kg Institutional Bag',
    description:
      'Makhana / Foxnuts. Crunchy, high-protein popped lotus seeds carefully handpicked and sorted for uniform size, low sodium, and clean purity.',
    longDescription:
      'Low calorie, gluten-free, anti-aging superfood high in calcium, magnesium, and protein. Hand-graded for spotless snowy kernels and exceptional popping snap. Ideal for vrat (fasting), ghee roasting, or rich makhana kheer desserts.',
    keyApplications: [
      'Vrat (fasting) cuisine and nutritious snacks',
      'Ghee-roasted seasoned snack bowls',
      'Royal makhana curry and rich dessert kheer',
      'Guilt-free weight-conscious daily crunch',
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBf4TOG1WGS5NLHUT26rsAmTB3_zBuyPDzU3aMasacBiIQT4WQzco_fNt552IKyDuxsmo-EpVBj1DuPPnakm8-OEANGkFPwjJUlESxwG20wEXLYJ9B4a3m5V1oXn299rjj154JqZ2UOu7i0ww4b0eJY3sI8dfxGxWEaO0A4Yn5KiSAGnl3Tk_t9NXvKkuhDOyUeFExCtsuUSfIT_-d7p_iZ3HmPwqdMNL2f_aQQb1RC6nKm9ZKm2pDY',
    tags: ['foxnuts', 'makhana', 'lotus seeds', 'vrat', 'superfood', 'dry fruits'],
  },
]

export const cashews = products.filter((p) => p.categorySlug === 'cashews')
export const dryFruits = products.filter((p) => p.categorySlug === 'dry-fruits')

export const getProductBySlug = (slug) => {
  if (!slug) return null
  return products.find((p) => p.slug.toLowerCase() === slug.toLowerCase())
}

export const getRelatedProducts = (currentSlug, categorySlug, count = 3) => {
  return products
    .filter((p) => p.slug !== currentSlug && p.categorySlug === categorySlug)
    .slice(0, count)
}

export const searchProducts = (query) => {
  if (!query || !query.trim()) return []
  const q = query.toLowerCase().trim()
  return products.filter((p) => {
    return (
      p.name.toLowerCase().includes(q) ||
      p.displayName.toLowerCase().includes(q) ||
      p.slug.toLowerCase().includes(q) ||
      p.grade.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.tags.some((tag) => tag.toLowerCase().includes(q)) ||
      p.description.toLowerCase().includes(q)
    )
  })
}
