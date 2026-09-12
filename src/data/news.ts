/** Plain, serializable content, ready for a future news API. */
export type NewsLanguage = 'en' | 'fr' | 'ar'
export type NewsTranslation = {
  title: string
  excerpt: string
  content: string[]
  category?: string
  imageAlt?: string
}
export type NewsArticle = {
  id: string
  slug: string
  images: string[]
  /** Confirmed publication date, YYYY-MM-DD. Omit when unknown. */
  date?: string
  featured?: boolean
  translations: Record<NewsLanguage, NewsTranslation>
}

// Add one object per article. All languages share its URL and photographs.
// Put images in public/images/news/. images[0] is the cover/thumbnail.
export const newsArticles: NewsArticle[] = [
  {
    "id": "1",
    "slug": "preparing-for-the-new-school-year",
    "images": [
      "/images/news/news-1.jpg"
    ],
    "featured": true,
    "translations": {
      "en": {
        "title": "Preparing Together for a New School Year!",
        "excerpt": "Training sessions and educational meetings in preparation for a new academic year at Lycée Saint-Elie.",
        "category": "School News",
        "imageAlt": "Teacher training at Lycée Saint-Elie",
        "content": [
          "A training session on the Montessori approach with educational consultant Yolande Berdagji.",
          "A training session with Arabic language coordinator Robert Nasta.",
          "A meeting for the kindergarten and first primary sections with section coordinator Josiana Harfouche."
        ]
      },
      "fr": {
        "title": "Ensemble, préparons une nouvelle année scolaire !",
        "excerpt": "Des formations et rencontres pédagogiques en préparation d’une nouvelle année scolaire au Lycée Saint-Elie.",
        "category": "Actualités de l'école",
        "imageAlt": "Formation des enseignants au Lycée Saint-Elie",
        "content": [
          "Une formation autour de l’approche Montessori avec la conseillère pédagogique Yolande Berdagji.",
          "Une formation avec le coordinateur de langue arabe Robert Nasta.",
          "Une réunion des sections maternelle et primaire avec la responsable de section Josiana Harfouche."
        ]
      },
      "ar": {
        "title": "نستعدّ معًا لعامٍ دراسي!",
        "excerpt": "دورات ولقاءات تربوية استعدادًا لانطلاق عام دراسي جديد في ثانوية مار الياس – درب السيم.",
        "content": [
          "دورة تدريبية حول مبدأ منتسوري مع المستشارة التربوية الأستاذة يولاند بردغجي.",
          "دورة تدريبية مع منسق اللغة العربية الأستاذ روبير نسطا.",
          "إجتماع لمرحلة الروضات وقسم الابتدائي الأول مع مسؤولة القسم الأستاذة جوزيانا حرفوش."
        ],
        "category": "أخبار المدرسة",
        "imageAlt": "دورة تدريبية للهيئة التعليمية في ثانوية مار الياس"
      }
    }
  },
  {
    "id": "2",
    "slug": "before-the-school-year-the-story-begins",
    "images": [
      "/images/news/news-2.jpg"
    ],
    "featured": true,
    "translations": {
      "en": {
        "title": "Before the School Year Begins… the Story Begins.",
        "excerpt": "At Lycée Saint-Elie – Darbessim, we believe that before books and classrooms, every new pupil needs safety, confidence and a sense of belonging.",
        "category": "School News",
        "imageAlt": "Welcoming new pupils and their families at Lycée Saint-Elie",
        "content": [
          "At Lycée Saint-Elie – Darbessim, we believe that before books and classrooms, every new pupil needs safety, confidence and a sense of belonging.",
          "That is why the school principal, Father Dr. Eid Bou Rached, welcomed a group of our new pupils and their families to discover our mission, campus, sections, administration and teachers… and begin their journey with us in their second home.",
          "Welcome to the Lycée Saint-Elie family… Here the journey begins, and here we build the future together."
        ]
      },
      "fr": {
        "title": "Avant que l’année scolaire ne commence… l’histoire commence.",
        "excerpt": "Au Lycée Saint-Elie – Darbessim, nous croyons qu’avant les livres et les salles de classe, chaque nouvel élève a besoin de sécurité, de confiance et d’un sentiment d’appartenance.",
        "category": "Actualités de l'école",
        "imageAlt": "Accueil des nouveaux élèves et de leurs familles au Lycée Saint-Elie",
        "content": [
          "Au Lycée Saint-Elie – Darbessim, nous croyons qu’avant les livres et les salles de classe, chaque nouvel élève a besoin de sécurité, de confiance et d’un sentiment d’appartenance.",
          "C’est pourquoi le chef d’établissement, le père Dr Eid Bou Rached, a accueilli un groupe de nos nouveaux élèves et leurs familles afin de leur faire découvrir notre mission, notre établissement, nos sections, notre administration et nos enseignants… et de commencer leur parcours avec nous dans leur deuxième maison.",
          "Bienvenue dans la famille du Lycée Saint-Elie… Ici commence le voyage, et ici nous construisons ensemble l’avenir."
        ]
      },
      "ar": {
        "title": "قبل أن يبدأ العام الدراسي… تبدأ الحكاية.",
        "excerpt": "في ثانوية مار الياس – درب السيم، نؤمن أنّ كل تلميذ جديد يحتاج قبل الكتب والصفوف إلى الأمان، الثقة والشعور بالانتماء.",
        "content": [
          "في ثانوية مار الياس – درب السيم، نؤمن أنّ كل تلميذ جديد يحتاج قبل الكتب والصفوف إلى الأمان، الثقة والشعور بالانتماء.",
          "لذلك استقبل رئيس الثانوية الخوري الدكتور عيد بوراشد عدد من تلامذتنا الجدد وذويهم، ليكتشفوا رسالتنا، صرحنا، أقسامنا، إدارتنا وأساتذتنا… ويبدأوا رحلتهم معنا في بيتهم الثاني.",
          "أهلًا بكم في عائلة ثانوية مار الياس… هنا تبدأ الرحلة، وهنا نصنع المستقبل معًا."
        ],
        "category": "أخبار المدرسة",
        "imageAlt": "استقبال التلامذة الجدد وذويهم في ثانوية مار الياس"
      }
    }
  },
  {
    "id": "3",
    "slug": "opening-school-year-2026-2027",
    "images": [
      "/images/news/news-3.jpg"
    ],
    "featured": true,
    "translations": {
      "en": {
        "title": "Lycée Saint-Elie – Darbessim Opens the 2026–2027 School Year",
        "excerpt": "Lycée Saint-Elie – Darbessim opened the new school year with an educational gathering bringing together the teaching and administrative teams.",
        "category": "School News",
        "imageAlt": "The teaching and administrative teams gathering at Lycée Saint-Elie",
        "content": [
          "Lycée Saint-Elie – Darbessim began the 2026–2027 school year with a gathering of its teaching and administrative teams, an educational milestone intended to bring everyone together as they embark on a new year with a clear vision and renewed ambition.",
          "During the gathering, the school principal, Father Dr. Eid Bou Rached, introduced the school’s vision and mission, built around three key words: the human person – creativity – citizenship.",
          "Dr. René Karam, president of the Association of English Language Coordinators in Lebanon and the school’s English language coordinator, then gave an academic presentation on the teacher’s role in educational preparation and coordination. He explored how this strengthens pupils’ intellectual, scientific and cultural productivity and helps them develop their abilities in analysis, research and critical thinking.",
          "Micheline Chabab, educational consultant, international trainer in neuro-linguistic programming and educational neuroscience, and founder of Shaghaf Academy for Training and Personal Development, then launched this year’s educational workshop. Drawing on the school’s vision and mission, the workshop aims to turn that vision into daily educational practice that supports the development of teachers and learners together.",
          "The gathering concluded with Holy Mass, as we raised our prayers to the Lord, asking that the new school year be a year of peace, good health, success and generosity, and that He protect every member of our educational family—teachers, staff and pupils—and their families.",
          "Together, we nurture the human person, unleash creativity and shape responsible citizens for a better future."
        ]
      },
      "fr": {
        "title": "Le Lycée Saint-Elie – Darbessim ouvre l’année scolaire 2026–2027",
        "excerpt": "Le Lycée Saint-Elie – Darbessim a ouvert la nouvelle année scolaire par une rencontre pédagogique réunissant les équipes enseignante et administrative.",
        "category": "Actualités de l'école",
        "imageAlt": "Réunion des équipes enseignante et administrative au Lycée Saint-Elie",
        "content": [
          "Le Lycée Saint-Elie – Darbessim a inauguré l’année scolaire 2026–2027 par une rencontre réunissant les équipes enseignante et administrative, une étape pédagogique destinée à entamer ensemble une nouvelle année porteuse d’une vision claire et d’une ambition renouvelée.",
          "Au cours de cette rencontre, le chef d’établissement, le père Dr Eid Bou Rached, a présenté la vision et la mission du lycée, fondées sur trois mots clés : la personne humaine – la créativité – la citoyenneté.",
          "Le Dr René Karam, président de l’Association des coordinateurs de langue anglaise au Liban et coordinateur de langue anglaise au lycée, a ensuite présenté une intervention académique sur le rôle de l’enseignant dans la préparation et la coordination pédagogiques. Il a exposé leur contribution au renforcement de la productivité intellectuelle, scientifique et culturelle de l’élève, ainsi qu’au développement de ses capacités d’analyse, de recherche et de pensée critique.",
          "Micheline Chabab, conseillère pédagogique, formatrice internationale en programmation neurolinguistique et en neurosciences éducatives, et fondatrice de Shaghaf Academy pour la formation et le développement personnel, a ensuite lancé l’atelier pédagogique de cette année. Inspiré de la vision et de la mission du lycée, cet atelier vise à traduire cette vision en pratiques pédagogiques quotidiennes contribuant au développement conjoint de l’enseignant et de l’apprenant.",
          "La rencontre s’est achevée par la célébration de la messe. Nous avons élevé nos prières vers le Seigneur, demandant que la nouvelle année scolaire soit une année de paix, de santé, de réussite et de générosité, et qu’Il protège tous les membres de notre famille éducative, enseignants, employés et élèves, ainsi que leurs familles.",
          "Ensemble, nous formons la personne humaine, libérons la créativité et préparons des citoyens responsables pour un avenir meilleur."
        ]
      },
      "ar": {
        "title": "ثانوية مار الياس – درب السيم تفتتح العام الدراسي ٢٠٢٦-٢٠٢٧",
        "excerpt": "افتتحت ثانوية مار الياس – درب السيم العام الدراسي الجديد بلقاء تربوي جمع الهيئتين التعليمية والإدارية.",
        "content": [
          "استهلّت ثانوية مار الياس – درب السيم العام الدراسي ٢٠٢٦-٢٠٢٧ بلقاء جمع الهيئتين التعليمية والإدارية، في محطة تربوية تهدف إلى الانطلاق معًا نحو عام جديد يحمل رؤيا واضحة وطموحًا متجدّدًا.",
          "خلال اللقاء، أطلق رئيس الثانوية الخوري الدكتور عيد بوراشد رؤيا ورسالة الثانوية، المرتكزتين على ثلاث كلمات أساسية: الإنسان – الإبداع – المواطنة.",
          "ثم قدّم الدكتور ريني كرم، رئيس رابطة منسقي اللغة الإنكليزية في لبنان ومنسق اللغة الإنكليزية في الثانوية، عرضًا أكاديميًا تناول دور المعلّم في التحضير والتنسيق التربوي، وأثر ذلك في تعزيز الإنتاجية الفكرية والعلمية والثقافية لدى التلميذ، ومساعدته على تطوير قدراته في التحليل والبحث والتفكير النقدي.",
          "بعدها، أطلقت الأستاذة ميشلين الشباب، المستشارة التربوية والمدرّبة الدولية في علم البرمجة اللغوية العصبية وعلم الأعصاب التربوي، ومؤسسة شغف أكاديمي للتدريب وتطوير الذات، ورشة العمل التربوية لهذا العام، انطلاقًا من رؤيا الثانوية ورسالتها، وبهدف تحويل هذه الرؤيا إلى ممارسة تربوية يومية تُسهم في تطوير المعلّم والمتعلّم معًا.",
          "واختُتم اللقاء بالقداس الإلهي، رافعين صلاتنا إلى الرب، طالبين أن تكون السنة الدراسية الجديدة سنة سلام، عافية، نجاح وعطاء، وأن يحفظ جميع أفراد أسرتنا التربوية، معلّمين وموظفين وتلامذة، وعائلاتهم.",
          "معًا نبني الإنسان، نطلق الإبداع، ونصنع مواطنًا مسؤولًا من أجل مستقبل أفضل."
        ],
        "category": "أخبار المدرسة",
        "imageAlt": "لقاء الهيئتين التعليمية والإدارية في ثانوية مار الياس"
      }
    }
  }
]


export function newsLanguage(language: string): NewsLanguage {
  return language.startsWith('ar') ? 'ar' : language.startsWith('fr') ? 'fr' : 'en'
}

type TranslationSource = { translations?: Partial<Record<NewsLanguage, NewsTranslation>> }
const emptyTranslation: NewsTranslation = { title: '', excerpt: '', content: [] }

/** Resolve the content language too, so fallback English is never laid out as Arabic. */
export function resolveArticleTranslation(article: TranslationSource | undefined, language: string) {
  const selected = newsLanguage(language)
  for (const candidate of [selected, 'en', 'fr', 'ar'] as const) {
    const translation = article?.translations?.[candidate]
    if (translation) return { language: candidate, translation }
  }
  return { language: selected, translation: emptyTranslation }
}

export function getArticleTranslation(article: TranslationSource | undefined, language: string): NewsTranslation {
  return resolveArticleTranslation(article, language).translation
}

// Existing event slots remain separate from published article content.
export const events: { id: string; date: string | null; draft: boolean }[] = [
  { id: 'visit', date: null, draft: true },
  { id: 'gathering', date: null, draft: true },
]
