export interface FAQItem {
  question: string;
  answer: string;
}

export interface PageContent {
  title: string;
  definition: string;
  mechanism: string;
  clinicalProcess: string;
  symptoms: string[];
  diagnosis: string[];
  treatments: string[];
  whenToSeeDoctor: string;
  postTreatment: string;
  lifestyle: string;
  faq: FAQItem[];
}
