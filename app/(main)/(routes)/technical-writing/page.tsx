import SectionBanner from '@/components/femcalculComponents/section/components/section-banner';
import SectionIntroText from '@/components/femcalculComponents/section/components/section-intro-text';
import SectionWrapper from '@/components/femcalculComponents/SectionWrapper/section-wrapper';

import technicalWriting from '../../../../public/images/technical_writing.jpg';

export default function TechnicalWritingPage() {
  return (
    <>
      <SectionBanner image={technicalWriting} title="Technical writing" />
      <SectionIntroText
        text={
          <>
            <p>
              Solving complex structural problems with nonlinear finite element analysis is complex, however, the work
              does not end there. We need to be able to communicate and defend our modelling choices, workflow and
              results interpretation.
            </p>
            <br />
            <p>
              FEM Calcul has decades of scientific and technical writing in the ambit of finite element analysis applied
              to structural civil engineering problems. We can help your institution to correctly communicate your work
              internally to stakeholders and externally to clients and partners.
            </p>
            <br />
            <p>
              We are also experienced on technical writing of manuals and tutorials, so we can help your institution
              with documenting technical procedures in the ambit of the structural finite element analysis.
            </p>
          </>
        }
      />
      <SectionWrapper title="Services offered">
        <div className="flex w-100 justify-between ">
          <div className="max-w-100 md:max-w-[50%]">
            <div className="text-lg md:text-2xl">The services offered are:</div>
            <div className="text-sm md:text-lg :ml-10 pt-4">
              <ul className={'list-disc list-inside'}>
                <li>Technical writing of internal procedures</li>
                <li>Technical writing of reports</li>
                <li>Technical edition of internal documentation</li>
                <li>Digital transition of the internal documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
