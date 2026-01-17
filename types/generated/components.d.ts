import type { Schema, Struct } from '@strapi/strapi';

export interface AboutAboutStat extends Struct.ComponentSchema {
  collectionName: 'components_about_about_stats';
  info: {
    displayName: 'about-stat';
  };
  attributes: {
    subTextDown: Schema.Attribute.String;
    subTextUp: Schema.Attribute.String;
    textprefix: Schema.Attribute.String;
    textSuffix: Schema.Attribute.String;
  };
}

export interface AboutCultureSection extends Struct.ComponentSchema {
  collectionName: 'components_about_culture_sections';
  info: {
    displayName: 'culture-section';
  };
  attributes: {
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    subtitle: Schema.Attribute.String;
    titleDark: Schema.Attribute.String;
    titleLight: Schema.Attribute.String;
  };
}

export interface AboutFounderSection extends Struct.ComponentSchema {
  collectionName: 'components_about_founder_sections';
  info: {
    displayName: 'founder-section';
  };
  attributes: {
    designation: Schema.Attribute.String;
    headlineBold: Schema.Attribute.String;
    headlineLight: Schema.Attribute.Text;
    name: Schema.Attribute.String;
    photo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    profileLink: Schema.Attribute.String;
    shortBio: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface AboutGlobalImpact extends Struct.ComponentSchema {
  collectionName: 'components_about_global_impacts';
  info: {
    displayName: 'global-impact';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.String;
    stats: Schema.Attribute.Component<'about.about-stat', true>;
    titleDown: Schema.Attribute.String;
    titleUp: Schema.Attribute.String;
  };
}

export interface AboutHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_about_hero_sections';
  info: {
    displayName: 'hero-section';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    badgeText: Schema.Attribute.String;
    primaryButton: Schema.Attribute.Component<'shared.button', false>;
    secondaryButton: Schema.Attribute.Component<'shared.button', false>;
    subTitle: Schema.Attribute.Text;
    titleDown: Schema.Attribute.Text;
    titleUp: Schema.Attribute.Text;
  };
}

export interface AboutStoryHighlight extends Struct.ComponentSchema {
  collectionName: 'components_about_story_highlights';
  info: {
    displayName: 'story-highlight';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Schema.Attribute.String;
  };
}

export interface AboutStorySection extends Struct.ComponentSchema {
  collectionName: 'components_about_story_sections';
  info: {
    displayName: 'story-section';
  };
  attributes: {
    darkText: Schema.Attribute.Text;
    eyebrowLabel: Schema.Attribute.String;
    highlightedText: Schema.Attribute.Text;
    leftHighlight: Schema.Attribute.Component<'about.story-highlight', false>;
    lightText: Schema.Attribute.Text;
    milestones: Schema.Attribute.Component<'about.timeline-item', true>;
    rightHighlight: Schema.Attribute.Component<'about.story-highlight', false>;
  };
}

export interface AboutTimelineItem extends Struct.ComponentSchema {
  collectionName: 'components_about_timeline_items';
  info: {
    displayName: 'timeline-item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    isActive: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
    year: Schema.Attribute.String;
  };
}

export interface FooterSectionFooter extends Struct.ComponentSchema {
  collectionName: 'components_footer_section_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {};
}

export interface FooterSectionFooterBase extends Struct.ComponentSchema {
  collectionName: 'components_footer_section_footer_bases';
  info: {
    displayName: 'footerBase';
  };
  attributes: {
    copyrightText: Schema.Attribute.String;
    copyrightYear: Schema.Attribute.String;
    footerLogoLarge: Schema.Attribute.Media<'images' | 'files'>;
    footerLogoSmall: Schema.Attribute.Media<'images' | 'files'>;
    links: Schema.Attribute.Component<'shared.labels', true>;
  };
}

export interface FooterSectionFooterExpand extends Struct.ComponentSchema {
  collectionName: 'components_footer_section_footer_expands';
  info: {
    displayName: 'footerExpand';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    linkGroups: Schema.Attribute.Component<'shared.link-groups', true>;
  };
}

export interface FooterSectionFooterHead extends Struct.ComponentSchema {
  collectionName: 'components_footer_section_footer_heads';
  info: {
    displayName: 'footerHead';
  };
  attributes: {
    footerShowReel: Schema.Attribute.Media<'images' | 'files'>;
    Heading: Schema.Attribute.String;
    headingLite: Schema.Attribute.String;
    social_links: Schema.Attribute.Relation<
      'oneToMany',
      'api::social-link.social-link'
    >;
  };
}

export interface FooterSectionFooterQuickLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_section_footer_quick_links';
  info: {
    displayName: 'footerQuickLinks';
  };
  attributes: {
    label: Schema.Attribute.String;
    navigation_items: Schema.Attribute.Relation<
      'oneToMany',
      'api::navigation-item.navigation-item'
    >;
  };
}

export interface HomePageSectionsBenefitsCards extends Struct.ComponentSchema {
  collectionName: 'components_home_page_sections_benefits_cards';
  info: {
    displayName: 'benefits-cards';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    subHeading: Schema.Attribute.String;
  };
}

export interface HomePageSectionsBenefitsSection
  extends Struct.ComponentSchema {
  collectionName: 'components_home_page_sections_benefits_sections';
  info: {
    displayName: 'benefits-section';
  };
  attributes: {
    benefits: Schema.Attribute.Component<
      'home-page-sections.benefits-cards',
      true
    >;
    button: Schema.Attribute.Component<'shared.button', false>;
    headingBold: Schema.Attribute.String;
    headingDown: Schema.Attribute.String;
    headingLite: Schema.Attribute.String;
    headingUp: Schema.Attribute.String;
  };
}

export interface HomePageSectionsBlogPreview extends Struct.ComponentSchema {
  collectionName: 'components_home_page_sections_blog_previews';
  info: {
    displayName: 'blog-preview';
  };
  attributes: {
    blog_posts: Schema.Attribute.Relation<
      'oneToMany',
      'api::blog-post.blog-post'
    >;
    button: Schema.Attribute.Component<'shared.button', false>;
    heading: Schema.Attribute.Text;
    subheading: Schema.Attribute.Text;
  };
}

export interface HomePageSectionsCaseStudiesShowcase
  extends Struct.ComponentSchema {
  collectionName: 'components_home_page_sections_case_studies_showcases';
  info: {
    displayName: 'case-studies-showcase';
  };
  attributes: {
    boldHeading: Schema.Attribute.String;
    featured_case_studies: Schema.Attribute.Relation<
      'oneToMany',
      'api::case-study.case-study'
    >;
    heading: Schema.Attribute.String;
    subheading: Schema.Attribute.String;
    viewAllButton: Schema.Attribute.Component<'shared.button', false>;
  };
}

export interface HomePageSectionsCasestudyInfo extends Struct.ComponentSchema {
  collectionName: 'components_home_page_sections_casestudy_infos';
  info: {
    displayName: 'casestudy-info';
  };
  attributes: {
    caseStudyInfoItem: Schema.Attribute.Component<
      'home-page-sections.infovalue-item',
      true
    >;
    type: Schema.Attribute.Enumeration<['stat values', 'description']>;
  };
}

export interface HomePageSectionsContactForm extends Struct.ComponentSchema {
  collectionName: 'components_home_page_sections_contact_forms';
  info: {
    displayName: 'contact-form';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    circularText: Schema.Attribute.String;
    contactInfo: Schema.Attribute.Component<'shared.contact-info', false>;
    label: Schema.Attribute.Text & Schema.Attribute.Required;
    mainHeading: Schema.Attribute.String;
  };
}

export interface HomePageSectionsFaqList extends Struct.ComponentSchema {
  collectionName: 'components_home_page_sections_faq_lists';
  info: {
    displayName: 'faq-list';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    faqs: Schema.Attribute.Relation<'oneToMany', 'api::qna.qna'>;
    heading: Schema.Attribute.String;
    headingLite: Schema.Attribute.String;
  };
}

export interface HomePageSectionsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_home_page_sections_hero_sections';
  info: {
    displayName: 'hero-section';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    buttons: Schema.Attribute.Component<'shared.button', true>;
    haloImageDown: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    haloImageUpper: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    headline: Schema.Attribute.Text;
    MainItemImage: Schema.Attribute.Media<'images' | 'files'>;
    subheadline: Schema.Attribute.Text;
  };
}

export interface HomePageSectionsInfovalueItem extends Struct.ComponentSchema {
  collectionName: 'components_home_page_sections_infovalue_items';
  info: {
    displayName: 'infovalue-item';
  };
  attributes: {
    heading: Schema.Attribute.String;
    subHeading: Schema.Attribute.String;
  };
}

export interface HomePageSectionsMarqueeItem extends Struct.ComponentSchema {
  collectionName: 'components_home_page_sections_marquee_items';
  info: {
    displayName: 'marquee-Item';
  };
  attributes: {
    label: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomePageSectionsServicesGrid extends Struct.ComponentSchema {
  collectionName: 'components_home_page_sections_services_grids';
  info: {
    displayName: 'services-grid';
  };
  attributes: {
    heading: Schema.Attribute.String;
    headingBold: Schema.Attribute.String & Schema.Attribute.Required;
    serviceCard: Schema.Attribute.Component<'shared.service-card', true>;
    subheading: Schema.Attribute.String;
  };
}

export interface HomePageSectionsStatsSection extends Struct.ComponentSchema {
  collectionName: 'components_home_page_sections_stats_sections';
  info: {
    displayName: 'stats-section';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'shared.button', true>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    headingLite: Schema.Attribute.String;
    stats: Schema.Attribute.Component<'shared.stat-card', true>;
  };
}

export interface ServicesBottomHero extends Struct.ComponentSchema {
  collectionName: 'components_services_bottom_heroes';
  info: {
    displayName: 'bottomHero';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.Text;
    headingBottom: Schema.Attribute.String;
    headingTop: Schema.Attribute.String;
    primaryButton: Schema.Attribute.Component<'shared.button', false>;
    secondaryButton: Schema.Attribute.Component<'shared.button', false>;
  };
}

export interface ServicesCategoryHighlight extends Struct.ComponentSchema {
  collectionName: 'components_services_category_highlights';
  info: {
    displayName: 'category-highlight';
  };
  attributes: {
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subHeading: Schema.Attribute.String;
  };
}

export interface ServicesHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_services_hero_sections';
  info: {
    displayName: 'hero-section';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    badgeText: Schema.Attribute.String;
    primaryButton: Schema.Attribute.Component<'shared.button', false>;
    secondaryButton: Schema.Attribute.Component<'shared.button', false>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ServicesImpactSection extends Struct.ComponentSchema {
  collectionName: 'components_services_impact_sections';
  info: {
    displayName: 'impactSection';
  };
  attributes: {
    eyebrowText: Schema.Attribute.String;
    impactStats: Schema.Attribute.Component<'services.impact-stat', true>;
  };
}

export interface ServicesImpactStat extends Struct.ComponentSchema {
  collectionName: 'components_services_impact_stats';
  info: {
    displayName: 'impactStat';
  };
  attributes: {
    darkText: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    lightText: Schema.Attribute.String;
    textPrefix: Schema.Attribute.String;
    textSuffix: Schema.Attribute.String;
  };
}

export interface ServicesServiceCategory extends Struct.ComponentSchema {
  collectionName: 'components_services_service_categories';
  info: {
    displayName: 'ServiceCategory';
  };
  attributes: {
    description: Schema.Attribute.Text;
    highlights: Schema.Attribute.Component<'services.category-highlight', true>;
    label: Schema.Attribute.String;
    layout: Schema.Attribute.Enumeration<['left', 'right']>;
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    style: Schema.Attribute.Enumeration<['primary', 'secondary', 'outline']>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCaseStudyCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_case_study_cards';
  info: {
    displayName: 'case-study-card';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.button', false>;
    leftSectionHeading: Schema.Attribute.Text;
    leftSectionImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    lineTitleDown: Schema.Attribute.String;
    lineTitleUp: Schema.Attribute.String;
    mainHeading: Schema.Attribute.String;
    rightInfoSection: Schema.Attribute.Component<
      'home-page-sections.casestudy-info',
      false
    >;
    rightSectionCoverImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    tag: Schema.Attribute.Relation<'oneToOne', 'api::tag.tag'>;
  };
}

export interface SharedContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_infos';
  info: {
    displayName: 'contact-info';
  };
  attributes: {
    address: Schema.Attribute.String;
    email: Schema.Attribute.Email;
    phone: Schema.Attribute.String;
  };
}

export interface SharedFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq_items';
  info: {
    displayName: 'faq-item';
  };
  attributes: {
    answer: Schema.Attribute.Blocks & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFooter extends Struct.ComponentSchema {
  collectionName: 'components_shared_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    copyrightText: Schema.Attribute.Text;
    links: Schema.Attribute.Component<'shared.labels', true>;
  };
}

export interface SharedLabels extends Struct.ComponentSchema {
  collectionName: 'components_shared_labels';
  info: {
    displayName: 'labels';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.Text;
  };
}

export interface SharedLinkGroups extends Struct.ComponentSchema {
  collectionName: 'components_shared_link_groups';
  info: {
    displayName: 'linkGroups';
  };
  attributes: {
    footer_links: Schema.Attribute.Relation<
      'oneToMany',
      'api::footer-link.footer-link'
    >;
    name: Schema.Attribute.String;
  };
}

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'open-graph';
  };
  attributes: {
    ogDescription: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    ogImage: Schema.Attribute.Media<'images' | 'files'>;
    ogSiteName: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Your website/brand name'>;
    ogTitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    ogType: Schema.Attribute.Enumeration<
      ['website', 'article', 'product', 'video ', 'book']
    > &
      Schema.Attribute.DefaultTo<'website'>;
    ogUrl: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'The canonical URL of the page'>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Override default canonical URL if needed'>;
    Keywords: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Focus keywords (comma-separated)'>;
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 120;
      }> &
      Schema.Attribute.DefaultTo<'SEO meta description (150-160 characters optimal)'>;
    metaRobots: Schema.Attribute.Enumeration<
      [
        'index, follow',
        'noindex, follow',
        'index, nofollow',
        'noindex, nofollow',
      ]
    > &
      Schema.Attribute.DefaultTo<'index, follow'>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }> &
      Schema.Attribute.DefaultTo<'"SEO title tag (50-60 characters optimal)"'>;
    openGraph: Schema.Attribute.Component<'shared.open-graph', false>;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface SharedServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_cards';
  info: {
    displayName: 'service-card';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_medias';
  info: {
    displayName: 'socialMedia';
  };
  attributes: {
    platform: Schema.Attribute.Enumeration<['facebook', 'twitter', 'linkedin']>;
    url: Schema.Attribute.Text;
  };
}

export interface SharedStatCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_stat_cards';
  info: {
    displayName: 'stat-card';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    subLabel: Schema.Attribute.String & Schema.Attribute.Required;
    valuePrefix: Schema.Attribute.String & Schema.Attribute.Required;
    valueSuffix: Schema.Attribute.String;
  };
}

export interface SharedTextTags extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_tags';
  info: {
    displayName: 'textTags';
  };
  attributes: {
    tags: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.about-stat': AboutAboutStat;
      'about.culture-section': AboutCultureSection;
      'about.founder-section': AboutFounderSection;
      'about.global-impact': AboutGlobalImpact;
      'about.hero-section': AboutHeroSection;
      'about.story-highlight': AboutStoryHighlight;
      'about.story-section': AboutStorySection;
      'about.timeline-item': AboutTimelineItem;
      'footer-section.footer': FooterSectionFooter;
      'footer-section.footer-base': FooterSectionFooterBase;
      'footer-section.footer-expand': FooterSectionFooterExpand;
      'footer-section.footer-head': FooterSectionFooterHead;
      'footer-section.footer-quick-links': FooterSectionFooterQuickLinks;
      'home-page-sections.benefits-cards': HomePageSectionsBenefitsCards;
      'home-page-sections.benefits-section': HomePageSectionsBenefitsSection;
      'home-page-sections.blog-preview': HomePageSectionsBlogPreview;
      'home-page-sections.case-studies-showcase': HomePageSectionsCaseStudiesShowcase;
      'home-page-sections.casestudy-info': HomePageSectionsCasestudyInfo;
      'home-page-sections.contact-form': HomePageSectionsContactForm;
      'home-page-sections.faq-list': HomePageSectionsFaqList;
      'home-page-sections.hero-section': HomePageSectionsHeroSection;
      'home-page-sections.infovalue-item': HomePageSectionsInfovalueItem;
      'home-page-sections.marquee-item': HomePageSectionsMarqueeItem;
      'home-page-sections.services-grid': HomePageSectionsServicesGrid;
      'home-page-sections.stats-section': HomePageSectionsStatsSection;
      'services.bottom-hero': ServicesBottomHero;
      'services.category-highlight': ServicesCategoryHighlight;
      'services.hero-section': ServicesHeroSection;
      'services.impact-section': ServicesImpactSection;
      'services.impact-stat': ServicesImpactStat;
      'services.service-category': ServicesServiceCategory;
      'shared.button': SharedButton;
      'shared.case-study-card': SharedCaseStudyCard;
      'shared.contact-info': SharedContactInfo;
      'shared.faq-item': SharedFaqItem;
      'shared.footer': SharedFooter;
      'shared.labels': SharedLabels;
      'shared.link-groups': SharedLinkGroups;
      'shared.open-graph': SharedOpenGraph;
      'shared.seo': SharedSeo;
      'shared.service-card': SharedServiceCard;
      'shared.social-media': SharedSocialMedia;
      'shared.stat-card': SharedStatCard;
      'shared.text-tags': SharedTextTags;
    }
  }
}
