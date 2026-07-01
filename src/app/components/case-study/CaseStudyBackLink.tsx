import Link from 'next/link';

export default function CaseStudyBackLink() {
  return (
    <Link href="/#work" className="cs-back-link" aria-label="Back to work">
      <span className="cs-back-link__arrow" aria-hidden="true">←</span>
      <span>Back to work</span>
    </Link>
  );
}
