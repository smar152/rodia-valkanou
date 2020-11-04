import PageLayout from '../../Components/pageLayout.js';
import { getPagesData } from '../../data/pagesData.js';

export default function Organwsi() {
  const pages = getPagesData();
  const pageContent = pages.organwsi.content;
  return (
    <div>
      <PageLayout key="page" pageContent={pageContent} />
    </div>
  );
}
