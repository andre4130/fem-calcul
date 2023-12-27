import SectionBanner from '@/components/femcalculComponents/section/components/section-banner';
import SectionIntroText from '@/components/femcalculComponents/section/components/section-intro-text';
import research from '../../../../public/images/research.jpg';
import SectionWrapper from '@/components/femcalculComponents/SectionWrapper/section-wrapper';
import { PublicFundingResearch } from './(config)/publicFundingResearch';
import ResearchCard from './(components)/research-card';

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
      <SectionWrapper title={'Research with Public Funding'}>
        <div className=" grid grid-rows-2 grid-flow-col gap-6">
          {PublicFundingResearch.map((research) => (
            <ResearchCard researchInfo={research} />
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
