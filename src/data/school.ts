import school1 from '../assets/school-1.jpg'
import school2 from '../assets/school-2.jpg'
import school3 from '../assets/school-3.jpg'

export const navigation = [
  { key: 'home', to: '/' },
  { key: 'about', to: '/about' },
  { key: 'academics', to: '/academics' },
  { key: 'student_life', to: '/student-life' },
  { key: 'news_events', to: '/news' },
  { key: 'alumni', to: '/alumni' },
  { key: 'contact', to: '/contact' },
] as const

// Draft cycle names; confirm the school's official programs before publication.
export const programs = [
  { id: 'early', title: 'home.early_years', description: 'home.a_nurturing_environment_focused_on_curiosity_exploration', image: school1 },
  { id: 'primary', title: 'home.primary_school', description: 'home.strong_academic_foundations_combined_with_collaboration_and', image: school2 },
  { id: 'middle', title: 'home.middle_school', description: 'home.developing_independence_critical_thinking_confidence_and_responsibility', image: school3 },
  { id: 'secondary', title: 'home.secondary_school', description: 'home.preparing_students_for_university_careers_leadership_and', image: school1 },
] as const

// Existing figures retained as unverified placeholders, not official statistics.
export const statistics = [
  { id: 'students', value: 1200, suffix: '+', label: 'home.students' },
  { id: 'alumni', value: 3500, suffix: '+', label: 'home.alumni_label' },
  { id: 'educators', value: 60, suffix: '+', label: 'home.teachers_educators' },
  { id: 'years', value: 25, suffix: '+', label: 'home.years_of_education' },
] as const

export const admissionSteps = ['inquiry', 'visit', 'documents', 'evaluation', 'registration'] as const
export const admissionFaq = ['apply', 'documents', 'fees', 'visit'] as const
export const gallery = [school1, school2, school3]
