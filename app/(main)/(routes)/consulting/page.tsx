import Image from 'next/image';
import SectionWrapper from '@/components/femcalculComponents/SectionWrapper/section-wrapper';
import bannerConsulting from '../../../../public/images/banner-consulting.jpg';
import SectionBanner from '@/components/femcalculComponents/section/components/section-banner';
import SectionIntroText from '@/components/femcalculComponents/section/components/section-intro-text';

export default function ConsultingPage() {
  return (
    <>
      <SectionBanner image={bannerConsulting} title="Consulting" />
      <SectionIntroText
        text={
          'Nonlinear finite element analysis has become an essential tool for solving complex civil engineering problems. However, due to its high complexity, in order to achieve accurate predictions of the real structural behavior, there is the need for a deep knowledge on the finite element procedures applied to the different problems.'
        }
      />
      <div className="h-20"></div>
      <SectionWrapper title="Experience">
        <div className="flex w-100 justify-between ">
          <div className="max-w-[50%]">
            <h5>
              FEM Calcul has decades of experience on nonlinear finite element analysis of complex structural
              engineering problems applied to different sectors:
            </h5>
            <div className="text-md sm:ml-10 pt-4">
              <ul className={'list-disc list-inside'}>
                <li>
                  Bridge analysis: concrete cracking, force redistribution, metal and concrete creep, shrinkage, dynamic
                  loading, reliability and safety assessment.
                </li>
                <li>Tunnel linings: concrete cracking, precast, contact behavior, soil-structure interactions.</li>
                <li>
                  Dam analysis: concrete cracking, soil-structure interactions, structure-fluid interactions, dynamic
                  loading.
                </li>
                <li>
                  Historical structures: masonry cracking, structural failure assessment, strengthening solutions. Early
                  age analysis: concrete crack assessment due to cement hydration.
                </li>
                <li>
                  Historical structures: masonry cracking, structural failure assessment, strengthening solutions.{' '}
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-50">
            <Image src={'/images/FEM-beam.jpg'} height={500} width={500} alt={'beam'} />
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper title="Consulting Works" boxClassNames="justify-end">
        <div className="flex w-100 justify-between">
          <div className="max-w-50">
            <Image src={'/images/FEM-beam.jpg'} height={500} width={500} alt={'beam'} />
          </div>
          <div className="max-w-[40%]">
            <h5>FEM Calcul offers the following consulting works in the ambit of nonlinear finite element analysis:</h5>
            <div className="text-md sm:ml-10 pt-4">
              <ul className={'list-disc list-inside'}>
                <li>Modelling of structural problems</li>
                <li>Review of models</li>
                <li>Technical recommendations</li>
                <li>Analysis and interpretation of results</li>
                <li>Optimization of structural designs</li>
                <li>Assessment of structural safety of existing infrastructure</li>
                <li>Strengthening solutions for existing infrastructure</li>
                <li>Forensic structural analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
