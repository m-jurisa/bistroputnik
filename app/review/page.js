import ReviewPageContent from '../../components/ReviewPageContent';
import { LanguageProvider } from '../../components/LanguageProvider';
import { menuData } from '../../data/menu';
import { reviewLinks } from '../../data/review-links';

export const metadata = {
  title: 'Leave a Review',
  description:
    'Choose where to leave a review for Bistro Putnik in Baška Voda.',
};

export default function ReviewPage() {
  return (
    <LanguageProvider>
      <ReviewPageContent business={menuData.business} links={reviewLinks} />
    </LanguageProvider>
  );
}
