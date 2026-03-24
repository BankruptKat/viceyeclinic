import { client } from "./sanity";

// ─── Doctors ─────────────────────────────────────────────
export async function getAllDoctors() {
    return client.fetch(
        `*[_type == "doctor"] | order(order asc, name asc, _createdAt asc) {
      order,
      name,
      "slug": slug.current,
      title,
      role,
      image,
      credentials,
      affiliations,
      bio,
      specializations
    }`
    );
}

export async function getDoctorBySlug(slug: string) {
    return client.fetch(
        `*[_type == "doctor" && slug.current == $slug][0] {
      name,
      "slug": slug.current,
      title,
      role,
      image,
      credentials,
      affiliations,
      bio,
      specializations
    }`,
        { slug }
    );
}

// ─── Eye Conditions ──────────────────────────────────────
export async function getAllConditions() {
    return client.fetch(
        `*[_type == "condition"] | order(_createdAt asc) {
      title,
      "slug": slug.current,
      shortDescription,
      icon,
      sections
    }`
    );
}

// ─── FAQs ────────────────────────────────────────────────
export async function getAllFaqs() {
    return client.fetch(
        `*[_type == "faq"] | order(order asc, _createdAt asc) {
      question,
      answer
    }`
    );
}

// ─── Patient Info (singleton) ────────────────────────────
export async function getPatientInfo() {
    return client.fetch(
        `*[_type == "patientInfo"][0] {
      firstVisitTitle,
      firstVisitDescription,
      firstVisitDuration,
      firstVisitSteps,
      firstVisitNotes,
      firstVisitWhatToBring,
      consultationTitle,
      consultationDescription,
      consultationDuration,
      consultationSteps,
      consultationNotes,
      costsTitle,
      costsDescription,
      uninsuredExamples
    }`
    );
}

// ─── Site Settings (singleton) ───────────────────────────
export async function getSiteSettings() {
    return client.fetch(
        `*[_type == "siteSettings"][0] {
      name,
      tagline,
      description,
      addressSuite,
      addressStreet,
      addressCity,
      addressProvince,
      addressPostalCode,
      addressLandmark,
      phone,
      fax,
      officeHoursWeekdays,
      officeHoursFriday,
      officeHoursHolidays,
      phoneHoursWeekdays,
      phoneHoursFriday,
      staff
    }`
    );
}
