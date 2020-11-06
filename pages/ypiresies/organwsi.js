import PageLayout from '../../Components/pageLayout.js';
import { getPagesData } from '../../data/pagesData.js';

export default function Organwsi() {
  const pages = getPagesData();
  const pageContent = pages.organwsi.content;
  const pageTitle = pages.organwsi.title;
  const pageSubtitle = pages.organwsi.subtitle;
  return (
    <div>
      <PageLayout
        key="page"
        pageTitle={pageTitle}
        pageSubtitle={pageSubtitle}
        pageContent={pageContent}
      />
    </div>
  );
}
