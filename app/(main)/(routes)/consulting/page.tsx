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
          <>
            <p>
              Nonlinear finite element analysis has become an essential tool for solving complex civil engineering
              problems.
            </p>
            <br />
            <p>
              However, due to its high complexity, in order to achieve accurate predictions of the real structural
              behavior, there is the need for a deep knowledge on the finite element procedures applied to the different
              problems.
            </p>
          </>
        }
      />
      <SectionWrapper title="Experience">
        <div className="flex w-100 justify-between ">
          <div className="max-w-100 md:max-w-[50%]">
            <div className="text-lg md:text-2xl">
              FEM Calcul has decades of experience on nonlinear finite element analysis of complex structural
              engineering problems applied to different sectors:
            </div>
            <div className="text-sm md:text-lg sm:ml-10 pt-4">
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
          <div className="hidden md:max-w-50 md:block">
            <Image src={'/images/FEM-beam.jpg'} height={500} width={500} alt={'beam'} />
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper title="Consulting Works" boxClassNames="md:justify-end">
        <div className="flex w-100 justify-between">
          <div className="hidden md:block md:max-w-50">
            <Image src={'/images/FEM-beam.jpg'} height={500} width={500} alt={'beam'} />
          </div>
          <div className="md:max-w-[40%]">
            <div className="text-lg md:text-2xl">
              FEM Calcul offers the following consulting works in the ambit of nonlinear finite element analysis:
            </div>
            <div className="text-sm md:text-lg sm:ml-10 pt-4">
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
