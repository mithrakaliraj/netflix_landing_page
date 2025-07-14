document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('languagesSelect');
    const languageSelectFooter = document.getElementById('languagesSelectFooter');

    const loadLanguage = (language) => {
        fetch(`translations/${language}.json`)
            .then(response => response.json())
            .then(data => {
                applyTranslations(data);
            })
            .catch(error => console.error('Error loading language:', error));
    };

    const applyTranslations = (translations) => {
        // Header
        document.querySelector('.signin__button').textContent = translations.header.signin;

        // Hero
        document.querySelector('.hero__title').innerHTML = translations.hero.title;
        document.querySelector('.hero__subtitle').textContent = translations.hero.subtitle;
        document.querySelector('.hero__description').textContent = translations.hero.description;
        document.querySelector('.email__input').placeholder = translations.hero.email_placeholder;
        document.querySelector('.primary__button').innerHTML = `${translations.hero.get_started} <i class="fal fa-chevron-right"></i>`;

        // Features
        const featureTitles = document.querySelectorAll('.feature__title');
        featureTitles[0].textContent = translations.features.feature1_title;
        featureTitles[1].textContent = translations.features.feature2_title;
        featureTitles[2].textContent = translations.features.feature3_title;
        featureTitles[3].textContent = translations.features.feature4_title;

        const featureSubtitles = document.querySelectorAll('.feature__sub__title');
        featureSubtitles[0].textContent = translations.features.feature1_subtitle;
        featureSubtitles[1].textContent = translations.features.feature2_subtitle;
        featureSubtitles[2].textContent = translations.features.feature3_subtitle;
        featureSubtitles[3].textContent = translations.features.feature4_subtitle;

        // Footer
        document.querySelector('.footer__header').textContent = translations.footer.header;

        const footerLinks = document.querySelectorAll('.footer__link a');
        footerLinks[0].textContent = translations.footer.faq;
        footerLinks[1].textContent = translations.footer.help_centre;
        footerLinks[2].textContent = translations.footer.account;
        footerLinks[3].textContent = translations.footer.media_centre;
        footerLinks[4].textContent = translations.footer.investor_relations;
        footerLinks[5].textContent = translations.footer.jobs;
        footerLinks[6].textContent = translations.footer.ways_to_watch;
        footerLinks[7].textContent = translations.footer.terms_of_use;
        footerLinks[8].textContent = translations.footer.privacy;
        footerLinks[9].textContent = translations.footer.cookie_preferences;
        footerLinks[10].textContent = translations.footer.corporate_information;
        footerLinks[11].textContent = translations.footer.contact_us;
        footerLinks[12].textContent = translations.footer.speed_test;
        footerLinks[13].textContent = translations.footer.legal_notices;
        footerLinks[14].textContent = translations.footer.only_on_netflix;

        document.querySelector('.footer__copyright').textContent = translations.footer.copyright;
    };

    languageSelect.addEventListener('change', (event) => {
        loadLanguage(event.target.value);
    });

    languageSelectFooter.addEventListener('change', (event) => {
        loadLanguage(event.target.value);
    });

    // Load default language (English) on page load
    loadLanguage('english');
});