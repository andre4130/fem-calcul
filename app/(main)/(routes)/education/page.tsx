import SectionBanner from '@/components/femcalculComponents/section/components/section-banner';
import education from '../../../../public/images/education.jpg';
import SectionIntroText from '@/components/femcalculComponents/section/components/section-intro-text';
import SectionWrapper from '@/components/femcalculComponents/SectionWrapper/section-wrapper';
export default function EducationPage() {
  return (
    <>
      <SectionBanner image={education} title="Education" titleStyle={{ color: '#FFF' }} />
      <SectionIntroText
        text={
          <>
            <p>
              FEM Calcul has more than 10 years of experience on finite element educational to both professional and
              academic sectors.
            </p>
            <br />
            <p>
              FEM Calcul offers courses of finite element analysis from beginners, to intermediate and advanced levels.
              These courses are designed to equip students with knowledge on the background of the finite element method
              in order to apply it with confidence and critical thinking to real engineering problems
            </p>
          </>
        }
      />

      <SectionWrapper title="Education Services">
        <div className="flex w-100 justify-between ">
          <div className="max-w-100 md:max-w-[50%]">
            <div className="text-lg md:text-2xl">
              FEM Calcul offers courses to individual persons, groups from commercial companies, universities or
              research organizations. The courses are designed to suit the needs of each client and focus on their areas
              of interest. Popular topics of the FEM Calcul courses are:
            </div>
            <div className="text-sm md:text-lg :ml-10 pt-4">
              <ul className={'list-disc list-inside'}>
                <li>Introduction to finite element analysis</li>
                <li>Nonlinear finite element analysis</li>
                <li>Parametrization of models and analysis automation</li>
                <li>Discrete and smeared cracking simulation in concrete structures</li>
                <li>Early age concrete cracking</li>
                <li>Meso and macro modelling of masonry structures</li>
                <li>Discrete and embedded reinforcement</li>
                <li>Numerical stability of nonlinear finite element analysis</li>
                <li>Interpretation of finite element results</li>
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
