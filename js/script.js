const langs = {
  en: {
    features: "Features",
    pricing: "Pricing",
    contact: "Contact",
    hero_title: "Welcome to 4Link ERP",
    hero_sub: "Manage your business effortlessly.",
    hero_cta: "Request Demo",
    footer_text: "© 2025 4Link. All rights reserved."
  },
  ar: {
    features: "مميزات",
    pricing: "الأسعار",
    contact: "اتصل بنا",
    hero_title: "مرحبًا في 4Link ERP",
    hero_sub: "ادِر عملك بسهولة.",
    hero_cta: "اطلب عرضًا",
    footer_text: "© 2025 4Link. جميع الحقوق محفوظة."
  }
};

let current = 'en';
function applyLang() {
  document.documentElement.lang = current;
  document.documentElement.dir = current === 'ar' ? 'rtl' : 'ltr';
  for (const el of document.querySelectorAll('[data-key]')) {
    const key = el.getAttribute('data-key');
    el.textContent = langs[current][key];
  }
  document.getElementById('lang-toggle').textContent = current === 'en' ? 'AR' : 'EN';
}

document.getElementById('lang-toggle').addEventListener('click', () => {
  current = current === 'en' ? 'ar' : 'en';
  applyLang();
});

applyLang();
