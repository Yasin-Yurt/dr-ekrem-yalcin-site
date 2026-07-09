import { PageContent } from './content/types';
import { surgeryContent } from './content/surgery';
import { diseasesContent } from './content/diseases';

export type { FAQItem, PageContent } from './content/types';

export const contentData: Record<string, PageContent> = {
  ...surgeryContent,
  ...diseasesContent
};
