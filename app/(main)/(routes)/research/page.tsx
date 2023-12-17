import SectionBanner from '@/components/femcalculComponents/section/components/section-banner';
import SectionIntroText from '@/components/femcalculComponents/section/components/section-intro-text';
import research from '../../../../public/images/research.jpg';
import SectionWrapper from '@/components/femcalculComponents/SectionWrapper/section-wrapper';

export default function ResearchPage() {
  return (
    <>
      <SectionBanner
        image={research}
        title="Research"
        style={{ backgroundPosition: 'center' }}
        titleStyle={{ color: 'white' }}
      />
      <SectionIntroText
        text={
          'FEM Calcul is built on decades of research on computational methods applied to structural civil engineering.'
        }
      />
      <SectionWrapper title={'Research Projects'}>
        <>projects here</>
      </SectionWrapper>
    </>
  );
}
