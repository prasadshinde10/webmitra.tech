// ============================================================
// WebMitr.Tech — script.js
// Beginner-friendly JS:
// - language switching
// - navbar scroll style
// - active nav link highlight
// - mobile menu
// - scroll reveal
// - basic form feedback
// ============================================================

// --- Translation strings for EN / हिंदी / मराठी ---
const translations = {
  en: {
    nav_home: "Home", nav_industries: "Industries", nav_services: "Services",
    nav_pricing: "Pricing", nav_about: "About", nav_contact: "Contact", nav_cta: "Get Your Website",
    hero_badge: "Trusted by Growing Businesses",
    hero_title_1: "Build", hero_title_2: "Professional Websites", hero_title_3: "for Any Business",
    hero_sub: "We help restaurants, startups, hospitals & local businesses grow online with modern, trust-building websites.",
    hero_cta1: "Get Your Website", hero_cta2: "See Our Work",
    hero_trust: "Trusted by growing businesses across Maharashtra",
    hero_trust_title: "Trusted by local teams",
    hero_trust_caption: "Restaurants, clinics, hotels, and builders rely on our fast, dependable delivery.",
    stat_1: "Businesses Served", stat_2: "Industries Covered", stat_3: "Fastest Delivery", stat_4: "Average Rating",
    why_label: "The Challenge", why_title: "Why Businesses Miss Out Without a Website",
    why_sub: "Every day without a professional online presence is revenue walking to your competitor.",
    prob1_h: "No Online Credibility", prob1_p: "Customers can't trust businesses they can't verify online.",
    prob2_h: "Your Work Goes Unseen", prob2_p: "Your best projects, dishes, and services are invisible without a website.",
    prob3_h: "Customers Can't Reach You", prob3_p: "No inquiry forms, no booking page — leads lost forever.",
    prob4_h: "Competitors Win By Default", prob4_p: "Businesses with websites consistently outperform those without one.",
    sol_title: "WebMitraStudio Solves This — Simply & Professionally",
    sol_1: "Mobile-first design that works perfectly on all devices",
    sol_2: "WhatsApp & inquiry forms for instant leads 24/7",
    sol_3: "Google-ready SEO to get discovered locally",
    sol_4: "Fast delivery — website live in a few days",
    sol_5: "Gallery to showcase your work, food, rooms, or services",
    sol_6: "Ongoing support — your long-term digital partner",
    sol_cta: "Start Your Project →",
    ind_label: "Who We Build For", ind_title: "We Build Websites for ", ind_title2: "Every Industry",
    ind_sub: "From a local restaurant to a multi-specialty hospital — we've built for them all.",
    ind1_h: "Restaurants & Cafes", ind1_p: "Online menus, reservation booking, food showcases, and delivery integrations that fill tables.", ind1_tag: "Menu · Reservations · Delivery",
    ind2_h: "Hotels & Resorts", ind2_p: "Room galleries, booking CTAs, amenity showcases, and review sections that drive direct bookings.", ind2_tag: "Bookings · Gallery · Reviews",
    ind3_h: "Hospitals & Clinics", ind3_p: "Doctor profiles, appointment booking, and trust-building layouts for healthcare businesses.", ind3_tag: "Appointments · Doctors · Trust",
    ind4_h: "Startups", ind4_p: "High-converting landing pages, investor-ready websites, and product showcases.", ind4_tag: "Landing Pages · Product · Investors",
    ind5_h: "Local Businesses", ind5_p: "Shops, salons, coaching centers — trust-first websites that generate walk-ins and calls.", ind5_tag: "Local SEO · Leads · Walk-ins",
    ind6_h: "Real Estate", ind6_p: "Property listings, project galleries, and credibility pages for developers and agents.", ind6_tag: "Listings · Gallery · Inquiries",
    cta1_h: "Ready to Get Your Website Live?", cta1_p: "Join growing businesses across Maharashtra who trust WebMitraStudio.", cta1_urgency: "Get your website in a few days", cta1_btn: "Get Your Website →",
    svc_label: "What We Do", svc_title: "End-to-End Digital ", svc_title2: "Services",
    svc_sub: "Everything your business needs to establish, grow, and stand out online.",
    s1_h: "Website Design & Development", s1_p: "Modern, responsive websites custom-designed to reflect your brand and convert visitors into customers.",
    s2_h: "Landing Pages", s2_p: "High-converting single-page experiences for campaigns, launches, or lead generation.",
    s3_h: "Branding & Identity", s3_p: "Logo, color palette, and brand guidelines that make your business recognizable.",
    s4_h: "SEO Setup", s4_p: "Local and on-page SEO that gets your business found on Google by nearby customers.",
    s5_h: "WhatsApp Integration", s5_p: "Chat buttons and lead capture flows that turn website visitors into real conversations.",
    s6_h: "Website Maintenance", s6_p: "Ongoing updates, content changes, and monitoring so your website stays fast and fresh.",
    s_link: "Learn more →",
    testi_label: "Client Stories", testi_title: "Trusted by growing businesses ",
    t1_text: '"Our restaurant bookings doubled within 3 weeks. The WhatsApp integration brings us 10–15 new customers every week."',
    t2_text: '"Fast delivery, professional design, and always available on WhatsApp. Our clinic now gets appointment requests every day."',
    price_label: "Transparent Pricing", price_title: "Simple, ", price_title2: "Honest Pricing",
    price_sub: "No hidden charges. No surprises. Pick the plan that fits your business.",
    p1_name: "Basic Website", p1_del: "Delivery: 7–10 days", p1_f1: "5 pages website", p1_f2: "Mobile responsive design", p1_f3: "WhatsApp inquiry button", p1_f4: "Contact form", p1_f5: "Google Maps", p1_f6: "Basic SEO",
    p2_name: "Business Website", p2_del: "Delivery: 10–14 days", p2_f1: "Everything in Basic", p2_f2: "Up to 10 pages", p2_f3: "Image gallery", p2_f4: "Advanced lead capture", p2_f5: "Brochure download", p2_f6: "Performance optimization",
    p3_name: "Premium Website", p3_del: "Delivery: 14–18 days", p3_f1: "Everything in Business", p3_f2: "Premium UI design", p3_f3: "Multilingual support", p3_f4: "Blog / News section", p3_f5: "Advanced SEO", p3_f6: "Full optimization",
    p_popular: "⭐ Most Popular", p_cta: "Get Started →",
    cta2_h: "Not Sure Which Plan? Let's Talk.", cta2_p: "Tell us about your business — we'll recommend the best option, free.", cta2_u: "We typically reply within 2–4 hours", cta2_btn: "Chat on WhatsApp",
    trust_label: "Why Choose Us", trust_title: "Why Businesses Trust ",
    tr1_h: "Professional Design", tr1_p: "Custom-designed for your industry. Built to impress and convert.",
    tr2_h: "Transparent Pricing", tr2_p: "Clear, fixed pricing. No hidden charges. You know what you're getting.",
    tr3_h: "Fast Delivery", tr3_p: "Your website goes live in a few days. We respect your time.",
    tr4_h: "Personalized Support", tr4_p: "Direct WhatsApp access. Always available. Partner, not just a vendor.",
    about_label: "Who We Are", about_title: "Your Digital Partner for ", about_title2: "Business Growth",
    about_sub: "WebMitr.Tech is a focused digital agency based in Chhatrapati Sambhajinagar, Maharashtra.",
    af1_h: "Multi-industry specialists", af1_p: "Restaurants, hospitals, hotels, startups, real estate — all covered.",
    af2_h: "Local team, personal service", af2_p: "Based in Maharashtra, real accountability and local understanding.",
    af3_h: "Results-driven design", af3_p: "Every decision made to generate more leads, bookings, and inquiries.",
    af4_h: "Long-term partnership", af4_p: "We don't just hand you a website — we stay as your growth partner.",
    about_cta: "Start Your Project →",
    about_card_desc: "A website is your first impression, 24/7 salesperson, and credibility certificate. Everything we build earns trust and generates real business.",
    contact_label: "Get In Touch", contact_title: "Let's Build Your ", contact_title2: "Website Together",
    contact_sub: "Tell us about your business and we'll get back within 24 hours.",
    contact_info_h: "Contact Information", contact_info_p: "Reach us on WhatsApp or send a message — we reply within 2–4 hours.",
    c_loc_l: "Location", c_ph_l: "Phone / WhatsApp", c_em_l: "Email", c_hrs_l: "Working Hours", c_hrs_v: "Mon–Sat: 9 AM – 7 PM",
    wa_btn: "💬 Chat on WhatsApp",
    form_h: "Send Us a Message", f_name: "Your Name", f_phone: "Phone Number", f_email: "Email Address",
    f_btype: "Business Type", f_select: "Select your business type", f_msg: "Your Message",
    f_submit: "Send Message →", f_note: "⚡ We typically reply within 2–4 hours during business hours."
  },

  hi: {
    nav_home: "होम", nav_industries: "उद्योग", nav_services: "सेवाएं",
    nav_pricing: "मूल्य", nav_about: "हमारे बारे में", nav_contact: "संपर्क", nav_cta: "वेबसाइट पाएं",
    hero_badge: "बढ़ते व्यवसायों द्वारा विश्वसनीय",
    hero_title_1: "बनाएं", hero_title_2: "प्रोफेशनल वेबसाइट", hero_title_3: "हर व्यवसाय के लिए",
    hero_sub: "हम रेस्तरां, स्टार्टअप, अस्पताल और स्थानीय व्यवसायों को आधुनिक वेबसाइट से ऑनलाइन बढ़ने में मदद करते हैं।",
    hero_cta1: "वेबसाइट पाएं", hero_cta2: "हमारा काम देखें",
    hero_trust: "महाराष्ट्र के बढ़ते व्यवसायों द्वारा विश्वसनीय",
    hero_trust_title: "स्थानीय टीमों का भरोसा",
    hero_trust_caption: "रेस्तरां, क्लिनिक, होटल और बिल्डर्स तेज़, भरोसेमंद डिलीवरी के लिए हम पर भरोसा करते हैं।",
    stat_1: "व्यवसाय सेवित", stat_2: "उद्योग शामिल", stat_3: "सबसे तेज़ डिलीवरी", stat_4: "औसत रेटिंग",
    why_label: "चुनौती", why_title: "वेबसाइट के बिना व्यवसाय क्यों पिछड़ते हैं",
    why_sub: "बिना ऑनलाइन उपस्थिति के हर दिन आपकी आमदनी प्रतिस्पर्धी के पास जाती है।",
    prob1_h: "ऑनलाइन विश्वसनीयता नहीं", prob1_p: "ग्राहक उन व्यवसायों पर भरोसा नहीं करते जो ऑनलाइन नहीं हैं।",
    prob2_h: "आपका काम अनदेखा रहता है", prob2_p: "वेबसाइट के बिना आपकी सेवाएं और काम कोई नहीं देख पाता।",
    prob3_h: "ग्राहक संपर्क नहीं कर पाते", prob3_p: "इनक्वायरी फॉर्म या बुकिंग पेज न होने पर लीड हमेशा खो जाती है।",
    prob4_h: "प्रतिस्पर्धी जीत जाते हैं", prob4_p: "वेबसाइट वाले व्यवसाय हमेशा आगे रहते हैं।",
    sol_title: "WebMitraStudio इसे सरल और प्रोफेशनल तरीके से हल करता है",
    sol_1: "मोबाइल-फर्स्ट डिज़ाइन जो सभी डिवाइस पर बढ़िया काम करे",
    sol_2: "WhatsApp और इनक्वायरी फॉर्म से 24/7 लीड",
    sol_3: "Google SEO ताकि स्थानीय ग्राहक आपको खोज सकें",
    sol_4: "तेज़ डिलीवरी — कुछ ही दिनों में वेबसाइट लाइव",
    sol_5: "अपना काम, खाना, कमरे या सेवाएं दिखाने के लिए गैलरी",
    sol_6: "दीर्घकालिक सहायता — आपका डिजिटल साझेदार",
    sol_cta: "प्रोजेक्ट शुरू करें →",
    ind_label: "हम किसके लिए बनाते हैं", ind_title: "हर उद्योग के लिए ", ind_title2: "वेबसाइट बनाते हैं",
    ind_sub: "स्थानीय रेस्तरां ���े लेकर अस्पताल तक — हमने सबके लिए बनाया है।",
    ind1_h: "रेस्तरां और कैफे", ind1_p: "ऑनलाइन मेनू, बुकिंग, फोटो शोकेस औ�� डिलीवरी इंटीग्रेशन।", ind1_tag: "मेनू · बुकिंग · डिलीवरी",
    ind2_h: "होटल और रिसॉर्ट", ind2_p: "रूम गैलरी, बुकिंग CTA, और रिव्यू सेक्शन।", ind2_tag: "बुकिंग · गैलरी · रिव्यू",
    ind3_h: "अस्पताल और क्लिनिक", ind3_p: "डॉक्टर प्रोफाइल, अपॉइंटमेंट बुकिंग, और ट्रस्ट-बिल्डिंग लेआउट।", ind3_tag: "अपॉइंटमेंट · डॉक्टर · विश्वास",
    ind4_h: "स्टार्टअप", ind4_p: "हाई-कन्वर्टिंग लैंडिंग पेज और इन्वेस्टर-रेडी वेबसाइट।", ind4_tag: "लैंडिंग पेज · प्रोडक्ट · निवेशक",
    ind5_h: "स्थानीय व्यवसाय", ind5_p: "दुकान, सैलून, कोचिंग — वॉक-इन और कॉल के लिए ट्रस्ट-फर्स्ट वेबसाइट।", ind5_tag: "लोकल SEO · लीड · वॉक-इन",
    ind6_h: "रियल एस्टेट", ind6_p: "प्रॉपर्टी लिस्टिंग, प्रोजेक्ट गैलरी और बिल्डर क्रेडिबिलिटी पेज।", ind6_tag: "लिस्टिंग · गैलरी · इनक्वायरी",
    cta1_h: "क्या आप अपनी वेबसाइट लाइव करने के लिए तैयार हैं?", cta1_p: "WebMitraStudio पर भरोसा करने वाले व्यवसायों में शामिल हों।", cta1_urgency: "कुछ ही दिनों में वेबसाइट लाइव करें", cta1_btn: "वेबसाइट पाएं →",
    svc_label: "हम क्या करते हैं", svc_title: "पूर्ण डिजिटल ", svc_title2: "सेवाएं",
    svc_sub: "आपके व्यवसाय को ऑनलाइन स्थापित करने और बढ़ाने के लिए सब कुछ।",
    s1_h: "वेबसाइट डिज़ाइन और डेवलपमेंट", s1_p: "आधुनिक, रिस्पॉन्सिव वेबसाइट जो आपके ब्रांड को दर्शाए।",
    s2_h: "लैंडिंग पेज", s2_p: "हाई-कन्वर्टिंग पेज कैम्पेन और लीड जनरेशन के लिए।",
    s3_h: "ब्रांडिंग और आइडेंटिटी", s3_p: "लोगो, कलर पैलेट और ब्रांड गाइडलाइंस।",
    s4_h: "SEO सेटअप", s4_p: "स्थानीय SEO ताकि Google पर ग्राहक आपको खोजें।",
    s5_h: "WhatsApp इंटीग्रेशन", s5_p: "चैट बटन और लीड कैप्चर फ्लो।",
    s6_h: "वेबसाइट मेंटेनेंस", s6_p: "नियमित अपडेट और मॉनिटरिंग।",
    s_link: "और जानें →",
    testi_label: "ग्राहक अनुभव", testi_title: "महाराष्ट्र के बढ़ते व्यवसायों का ",
    t1_text: '"3 हफ्तों में रेस्तरां बुकिंग दोगुनी हो गई। WhatsApp से हर हफ्ते 10–15 नए ग्राहक आते हैं।"',
    t2_text: '"तेज़ डिलीवरी, प्रोफेशनल डिज़ाइन, हमेशा WhatsApp पर उपलब्ध। हमारे क्लिनिक को अब रोज़ ऑनलाइन अपॉइंटमेंट मिलती है।"',
    price_label: "पारदर्शी मूल्य", price_title: "सरल, ", price_title2: "ईमानदार मूल्य",
    price_sub: "कोई छिपे हुए शुल्क नहीं। अपने व्यवसाय के लिए उचित प्लान चुनें।",
    p1_name: "बेसिक वेबसाइट", p1_del: "डिलीवरी: 7–10 दिन", p1_f1: "5 पेज वेबसाइट", p1_f2: "मोबाइल रिस्पॉन्सिव", p1_f3: "WhatsApp बटन", p1_f4: "कॉन्टैक्ट फॉर्म", p1_f5: "Google Maps", p1_f6: "बेसिक SEO",
    p2_name: "बिज़नेस वेबसाइट", p2_del: "डिलीवरी: 10–14 दिन", p2_f1: "बेसिक सब कुछ", p2_f2: "10 पेज तक", p2_f3: "इमेज गैलरी", p2_f4: "एडवांस्ड लीड कैप्चर", p2_f5: "ब्रोशर डाउनलोड", p2_f6: "परफॉर्मेंस ऑप्टिमाइज़ेशन",
    p3_name: "प्रीमियम वेबसाइट", p3_del: "डिलीवरी: 14–18 दिन", p3_f1: "बिज़नेस सब कुछ", p3_f2: "प्रीमियम UI डिज़ाइन", p3_f3: "बहुभाषी सपोर्ट", p3_f4: "ब्लॉग / न्यूज़ सेक्शन", p3_f5: "एडवांस्ड SEO", p3_f6: "पूर्ण ऑप्टिमाइज़ेशन",
    p_popular: "⭐ सबसे लोकप्रिय", p_cta: "शुरू करें →",
    cta2_h: "प्लान तय नहीं? बात करते हैं।", cta2_p: "अपने व्यवसाय के बारे में बताएं — हम सही विकल्प बताएंगे।", cta2_u: "हम आमतौर पर 2–4 घंटों में जवाब देते हैं", cta2_btn: "WhatsApp पर चैट करें",
    trust_label: "हमें क्यों चुनें", trust_title: "व्यवसाय क्यों करते हैं भरोसा ",
    tr1_h: "प्रोफेशनल डिज़ाइन", tr1_p: "आपके उद्योग के लिए कस्टम डिज़ाइन — टेम्पलेट नहीं।",
    tr2_h: "पारदर्शी मूल्य", tr2_p: "स्पष्ट, निश्चित मूल्य। कोई छिपे हुए शुल्क नहीं।",
    tr3_h: "तेज़ डिलीवरी", tr3_p: "कुछ ही दिनों में आपकी वेबसाइट लाइव।",
    tr4_h: "व्यक्तिगत सहायता", tr4_p: "WhatsApp पर सीधा एक्सेस। हमेशा उपलब्ध।",
    about_label: "हम कौन हैं", about_title: "आपका डिजिटल साझेदार ", about_title2: "व्यवसाय विकास के लिए",
    about_sub: "WebMitr.Tech छत्रपति संभाजीनगर, महाराष्ट्र में एक डिजिटल एजेंसी है।",
    af1_h: "बहु-उद्योग विशेषज्ञ", af1_p: "रेस्तरां, अस्पताल, होटल, स्टार्टअप — सभी के लिए।",
    af2_h: "स्थानीय टीम", af2_p: "महाराष्ट्र में आधारित, स्थानीय व्यवसाय की समझ।",
    af3_h: "परिणाम-उन्मुख डिज़ाइन", af3_p: "हर निर्णय अधिक लीड और बुकिंग के लिए।",
    af4_h: "दीर्घकालिक साझेदारी", af4_p: "सिर्फ वेबसाइट नहीं — आपके साथ हमेशा।",
    about_cta: "प्रोजेक्ट शुरू करें →",
    about_card_desc: "वेबसाइट आपकी पहली छाप, 24/7 सेल्समैन और विश्वसनीयता का प्रमाण है।",
    contact_label: "संपर्क करें", contact_title: "आपकी वेबसाइट ", contact_title2: "मिलकर बनाते हैं",
    contact_sub: "अपने व्यवसाय के बारे में बताएं — हम 24 घंटे में जवाब देंगे।",
    contact_info_h: "संपर्क जानकारी", contact_info_p: "WhatsApp पर या मैसेज भेजें — 2–4 घंटे में जवाब।",
    c_loc_l: "स्थान", c_ph_l: "फोन / WhatsApp", c_em_l: "ईमेल", c_hrs_l: "कार्य समय", c_hrs_v: "सोम–शनि: सुबह 9 – शाम 7",
    wa_btn: "💬 WhatsApp पर चैट करें",
    form_h: "हमें संदेश भेजें", f_name: "आपका नाम", f_phone: "फोन नंबर", f_email: "ईमेल पता",
    f_btype: "व्यवसाय प्रकार", f_select: "व्यवसाय प्रकार चुनें", f_msg: "आपका संदेश",
    f_submit: "संदेश भेजें →", f_note: "⚡ हम आमतौर पर 2–4 घंटों में जवाब देते हैं।"
  },

  mr: {
    nav_home: "मुख्यपृष्ठ", nav_industries: "उद्योग", nav_services: "सेवा",
    nav_pricing: "किंमत", nav_about: "आमच्याबद्दल", nav_contact: "संपर्क", nav_cta: "वेबसाइट मिळवा",
    hero_badge: "वाढत्या व्यवसायांचा विश्वास",
    hero_title_1: "तयार करा", hero_title_2: "व्यावसायिक वेबसाइट", hero_title_3: "प्रत्येक व्यवसायासाठी",
    hero_sub: "आम्ही रेस्तरॉ���, स्टार्टअप, रुग्णालये आणि स्थानिक व्यवसायांना आधुनिक वेबसाइटने ऑनलाइन वाढण्यास मदत करतो।",
    hero_cta1: "वेबसाइट मिळवा", hero_cta2: "आमचे काम पाहा",
    hero_trust: "महाराष्ट्रातील वाढत्या व्यवसायांचा विश्वास",
    hero_trust_title: "स्थानिक टीम्सचा विश्वास",
    hero_trust_caption: "रेस्टॉरंट्स, क्लिनिक्स, हॉटेल्स आणि बिल्डर्स जलद, विश्वासार्ह डिलिव्हरीसाठी आमच्यावर भरोसा करतात.",
    stat_1: "व्यवसाय सेवित", stat_2: "उद्योग समाविष्ट", stat_3: "सर्वात जलद वितरण", stat_4: "सरासरी रेटिंग",
    why_label: "आव्हान", why_title: "वेबसाइटशिवाय व्यवसाय का मागे राहतात",
    why_sub: "ऑनलाइन उपस्थितीशिवाय प्रत्येक दिवस तुमचा महसूल प्रतिस्पर्ध्याकडे जातो.",
    prob1_h: "ऑनलाइन विश्वासार्हता नाही", prob1_p: "ऑनलाइन न सापडणाऱ्या व्यवसायांवर ग्राहकांचा विश्वास बसत नाही.",
    prob2_h: "तुमचे का�� अदृश्य राहते", prob2_p: "वेबसाइटशिवाय तुमच्या सेवा व काम कुणाला दिसत नाही.",
    prob3_h: "ग्राहक संपर्क करू शकत नाहीत", prob3_p: "चौकशी फॉर्म किंवा बुकिंग पेज नसल्यास लीड कायमची हरते.",
    prob4_h: "स्पर्धक जिंकतात", prob4_p: "वेबसाइट असलेले व्यवसाय नेहमीच पुढे असतात.",
    sol_title: "WebMitraStudio हे सोप्या व व्यावसायिक पद्धतीने सोडवते",
    sol_1: "मोबाइल-फर्स्ट डिझाइन जे सर्व डिव्हाइसवर उत्तम काम करते",
    sol_2: "WhatsApp आणि चौकशी फॉर्म — 24/7 लीड्स",
    sol_3: "Google SEO ताकि स्थानिक ग्राहक तु���्हाला शोधू शकतील",
    sol_4: "जलद वितरण — काही दिवसांत वेबसाइट लाइव्ह",
    sol_5: "तुमचे काम, जेवण, खोल्या किंवा सेवा दाखवण्यासाठी गॅलरी",
    sol_6: "दीर्घकालीन सहाय्य — तुमचा डिजिटल भागीदार",
    sol_cta: "प्रकल्प सुरू करा →",
    ind_label: "आम्ही कुणासाठी बनवतो", ind_title: "प्रत्येक उद्योगासाठी ", ind_title2: "वेबसाइट बनवतो",
    ind_sub: "स्थानिक रेस्तरॉंपासून रुग्णालयापर्यंत — आम्ही सर्वांसाठी बनवले आहे.",
    ind1_h: "रेस्तरॉं आणि कॅफे", ind1_p: "ऑनलाइन मेनू, बुकिंग, फोटो शोकेस आणि डिलिव्हरी इंटिग्रेशन.", ind1_tag: "मेनू · बुकिंग · डिलिव्हरी",
    ind2_h: "हॉटेल आणि रिसॉर्ट", ind2_p: "रूम गॅलरी, बुकिंग CTA, आणि रिव्ह्यू सेक्शन.", ind2_tag: "बुकिंग · गॅलरी · रिव्ह्यू",
    ind3_h: "रुग्णालय आणि क्लिनिक", ind3_p: "डॉक्टर प्रोफाइल, अपॉइंटमेंट बुकिंग, आणि विश्वास-निर्मिती लेआउट.", ind3_tag: "अपॉइंटमेंट · डॉक्टर · विश्वास",
    ind4_h: "स्टार्टअप", ind4_p: "हाय-कन्व्हर्टिंग लँडिंग पेज आणि इन्व्हेस्टर-रेडी वेबसाइट.", ind4_tag: "लँडिंग पेज · प्रोडक्ट · गुंतवणूकदार",
    ind5_h: "स्थानिक व्यवसाय", ind5_p: "दुकान, सलून, कोचिंग — वॉक-इन आणि कॉलसाठी वेबसाइट.", ind5_tag: "लोकल SEO · लीड्स · वॉक-इन",
    ind6_h: "रिअल इस्टेट", ind6_p: "प्रॉपर्टी लिस्टिंग, प्रोजेक्ट गॅलरी आणि बिल्डर क्रेडिबिलिटी पेज.", ind6_tag: "लिस्टिंग · गॅलरी · चौकशी",
    cta1_h: "तुमची वेबसाइट लाइव्ह करण्यास तयार आहात?", cta1_p: "WebMitraStudio वर विश्वास ठेवणाऱ्या व्यवसायांमध्ये सामील व्हा.", cta1_urgency: "काही दिवसांत वेबसाइट लाइव्ह करा", cta1_btn: "वेबसाइट मिळवा →",
    svc_label: "आम्ही काय करतो", svc_title: "संपूर्ण डिजिटल ", svc_title2: "सेवा",
    svc_sub: "तुमचा व्यवसाय ऑनलाइन प्रस्थापित करण्यासाठी आणि वाढवण्यासाठी सर्व काही.",
    s1_h: "वेबसाइट डिझाइन आणि डेव्हलपमेंट", s1_p: "आधुनिक, रिस्पॉन्सिव्ह वेबसाइट जी तुमच्या ब्रँडला प्रतिबिंबित करते.",
    s2_h: "लँडिंग पेज", s2_p: "मोहिमा आणि लीड जनरेशनसाठी हाय-कन्व्हर्टिंग पेज.",
    s3_h: "ब्रँडिंग आणि आयडेंटिटी", s3_p: "लोगो, रंग पॅलेट आणि ब्रँड मार्गदर्शक तत्त्वे.",
    s4_h: "SEO सेटअप", s4_p: "स्थानिक SEO ताकि Google वर ग्राहक तुम्हाला शोधतील.",
    s5_h: "WhatsApp इंटिग्रेशन", s5_p: "चॅट बटन आणि लीड कॅप्चर फ्लो.",
    s6_h: "वेबसाइट देखभाल", s6_p: "नियमित अपडेट आणि मॉनिटरिंग.",
    s_link: "अधिक जाणा →",
    testi_label: "ग्राहकांचे अनुभव", testi_title: "महाराष्ट्रातील वाढत्या व्यवसायांचा ",
    t1_text: '"3 आठवड्यांत रेस्तरॉं बुकिंग दुप्पट झाली. WhatsApp मुळे दर आठवड्याला 10–15 नवीन ग्राहक येतात."',
    t2_text: '"जलद वितरण, व्यावसायिक डिझाइन, नेहमी WhatsApp वर उपलब्ध. आमच्या क्लिनिकला आता रोज ऑनलाइन अपॉइंटमेंट मिळतात."',
    price_label: "पारदर्शक किंमत", price_title: "सोपी, ", price_title2: "प्रामाणिक किंमत",
    price_sub: "कोणतेही लपलेले शुल्क नाही. तुमच्या व्यवसायासाठी योग्य प्लान निवडा.",
    p1_name: "बेसिक वेबसाइट", p1_del: "वितरण: 7–10 दिवस", p1_f1: "5 पेज वेबसाइट", p1_f2: "मोबाइल रिस्पॉन्सिव्ह", p1_f3: "WhatsApp बटन", p1_f4: "संपर्क फॉर्म", p1_f5: "Google Maps", p1_f6: "बेसिक SEO",
    p2_name: "बिझनेस वेबसाइट", p2_del: "वितरण: 10–14 दिवस", p2_f1: "बेसिकमधील सर्व काही", p2_f2: "10 पेजपर्यंत", p2_f3: "इमेज गॅलरी", p2_f4: "प्रगत लीड कॅप्चर", p2_f5: "ब्रोशर डाउनलोड", p2_f6: "परफॉर्मन्स ऑप्टिमायझेशन",
    p3_name: "प्रीमियम वेबसाइट", p3_del: "वितरण: 14–18 दिवस", p3_f1: "बिझनेसमधील सर्व काही", p3_f2: "प्रीमियम UI डिझाइन", p3_f3: "बहुभाषी समर्थन", p3_f4: "ब्लॉग / बातम्या विभाग", p3_f5: "प्रगत SEO", p3_f6: "संपूर्ण ऑप्टिमायझेशन",
    p_popular: "⭐ सर्वाधिक लोकप्रिय", p_cta: "सुरू करा →",
    cta2_h: "प्लान निश्चित नाही? बोलूया.", cta2_p: "तुमच्या व्यवसायाबद्दल सांगा — आम्ही योग्य पर्याय सुचवू.", cta2_u: "आम्ही साधारणपणे 2–4 तासांत उत्तर देतो", cta2_btn: "WhatsApp वर चॅट करा",
    trust_label: "आम्हाला का निवडावे", trust_title: "व्यवसाय का विश्वास ठेवतात ",
    tr1_h: "व्यावसायिक डिझाइन", tr1_p: "तुमच्या उद्योगासाठी कस्टम डिझाइन — टेम्पलेट नाही.",
    tr2_h: "पारदर्शक किंमत", tr2_p: "स्पष्ट, निश्चित किंमत. कोणतेही लपलेले शुल्क नाही.",
    tr3_h: "जलद वितरण", tr3_p: "काही दिवसांत वेबसाइट लाइव्ह. आम्ही वेळ पाळतो.",
    tr4_h: "वैयक्तिक सहाय्य", tr4_p: "WhatsApp वर थेट प्रवेश. नेहमी उपलब्ध.",
    about_label: "आम्ही कोण आहोत", about_title: "तुमचा डिजिटल भागीदार ", about_title2: "व्यवसाय वाढीसाठी",
    about_sub: "WebMitr.Tech ही छत्रपती संभाजीनगर, महाराष्ट्र येथील एक डिजिटल एजन्सी आहे.",
    af1_h: "बहु-उद्योग तज्ज्ञ", af1_p: "रेस्तरॉं, रुग्णालये, हॉटेल, स्टार्टअप — सर्वांसाठी.",
    af2_h: "स्थानिक टीम", af2_p: "महाराष्ट्रात आधारित, स्थानिक व्यवसायाची समज.",
    af3_h: "परिणाम-केंद्रित डिझाइन", af3_p: "प्रत्येक निर्णय अधिक लीड्स आणि बुकिंगसाठी.",
    af4_h: "दीर्घकालीन भागीदारी", af4_p: "फक्त वेबसाइट नाही — तुमच्यासोबत नेहमीच.",
    about_cta: "प्रकल्प सुरू करा →",
    about_card_desc: "वेबसाइट तुमची पहिली छाप, 24/7 सेल्समन आणि विश्वासार्हतेचा पुरावा आहे.",
    contact_label: "संपर्क साधा", contact_title: "तुमची वेबसाइट ", contact_title2: "एकत्र बनवूया",
    contact_sub: "तुमच्या व्यवसायाबद्दल सांगा — आम्ही 24 तासांत उत्तर देऊ.",
    contact_info_h: "संपर्क माहिती", contact_info_p: "WhatsApp वर किंवा संदेश पाठवा — 2–4 तासांत उत्तर.",
    c_loc_l: "स्थान", c_ph_l: "फोन / WhatsApp", c_em_l: "ईमेल", c_hrs_l: "कार्यालयीन वेळ", c_hrs_v: "सोम–शनि: सकाळी 9 – संध्याकाळी 7",
    wa_btn: "💬 WhatsApp वर चॅट करा",
    form_h: "आम्हाला संदेश पाठवा", f_name: "तुमचे नाव", f_phone: "फोन नंबर", f_email: "ईमेल पत्ता",
    f_btype: "व्यवसाय प्रकार", f_select: "व्यवसाय प्रकार निवडा", f_msg: "तुमचा संदेश",
    f_submit: "संदेश पाठवा →", f_note: "⚡ आम्ही साधारणपणे 2–4 तासांत उत्तर देतो."
  }
};

// Apply language: swaps all [data-i18n] text nodes and updates button styles
function applyLang(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    const isActive = btn.getAttribute('data-lang') === lang;
    btn.classList.toggle('active', isActive);
    btn.style.background = isActive ? 'var(--gold)' : '';
    btn.style.color      = isActive ? '#1a1a1a'    : '';
  });

  document.documentElement.setAttribute('lang', lang);
}

// Wire up language buttons
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.getAttribute('data-lang')));
});

// Navbar scroll style
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 36);
}, { passive: true });

// Highlight active nav link
const allSections = document.querySelectorAll('section[id]');
const navLinks    = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';

  allSections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 90) current = section.id;
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}, { passive: true });

// Mobile menu toggle
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

hamburger.addEventListener('keydown', e => {
  if (e.key === 'Enter') mobileMenu.classList.toggle('open');
});

function closeMobile() {
  mobileMenu.classList.remove('open');
}
window.closeMobile = closeMobile;

// Close mobile if user clicks outside navbar
document.addEventListener('click', e => {
  if (!navbar.contains(e.target)) closeMobile();
});

// Scroll reveal
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.10, rootMargin: '0px 0px -32px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Contact form submission (WhatsApp click-to-chat)
const leadCaptureForm = document.getElementById('leadCaptureForm');
const leadFormStatus = document.getElementById('leadFormStatus');
const whatsappHref = document.querySelector('.wa-btn')?.getAttribute('href') || '';
const whatsappLeadNumber = whatsappHref.match(/wa\.me\/(\d+)/i)?.[1] || '';
const formatFieldLabel = key => key.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase());

if (leadCaptureForm) {
  leadCaptureForm.addEventListener('submit', e => {
    e.preventDefault();

    if (!leadCaptureForm.checkValidity()) {
      leadCaptureForm.reportValidity();
      return;
    }

    const submitBtn = leadCaptureForm.querySelector('.form-submit-btn');
    const originalBtnHtml = submitBtn ? submitBtn.innerHTML : '';

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '⏳ Opening WhatsApp...';
    }

    if (leadFormStatus) {
      leadFormStatus.textContent = 'Preparing your WhatsApp message...';
    }

    try {
      const formData = new FormData(leadCaptureForm);
      const fieldLabelMap = {
        name: 'Name',
        phone: 'Phone',
        email: 'Email',
        business_type: 'Business Type',
        message: 'Message'
      };
      const allowedLeadFields = Object.keys(fieldLabelMap);

      const leadDetails = allowedLeadFields
        .map(key => [key, formData.get(key)])
        .filter(([, value]) => String(value || '').trim() !== '')
        .map(([key, value]) => {
          const label = fieldLabelMap[key] || formatFieldLabel(key);
          return `${label}: ${String(value).trim()}`;
        });

      const whatsappMessage = [
        'New Lead from Webmitra Website:',
        ...leadDetails
      ].join('\n');

      if (!whatsappLeadNumber) {
        throw new Error('WhatsApp number unavailable');
      }

      const whatsappUrl = `https://wa.me/${whatsappLeadNumber}?text=${encodeURIComponent(whatsappMessage)}`;
      const whatsappWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      if (!whatsappWindow) {
        throw new Error('WhatsApp popup blocked');
      }

      if (leadFormStatus) {
        leadFormStatus.textContent = "✅ WhatsApp opened with your message. Please tap Send to complete (form kept as-is until you send).";
      }
    } catch (error) {
      if (leadFormStatus) {
        leadFormStatus.textContent = '❌ Could not open WhatsApp (popup may be blocked). Please allow popups or use the chat button.';
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;
      }
    }
  });
}
