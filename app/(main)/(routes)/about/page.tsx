import SectionIntroText from '@/components/femcalculComponents/section/components/section-intro-text';
import Image from 'next/image';
import denise from '../../../../public/images/denise.jpg';
import SectionWrapper from '@/components/femcalculComponents/SectionWrapper/section-wrapper';
export default function AboutPage() {
  return (
    <>
      <div className="flex justify-center pt-8">
        <Image src={denise} alt={'denise_ferreira'} height={370} width={370} />
      </div>
      <SectionIntroText
        text={
          <>
            <p className=" italic text-2xl ">
              <strong>FEM CALCUL</strong> brings together decades of experience in both academia and industry in the
              ambit of complex nonlinear finite element analysis applied to numerous and diverse engineering problems.
              FEM Calcul aims to help engineers on achieving more accurate and efficient simulations of complex
              problems, that result in safer, more economical and overall optimized civil infrastructure.
            </p>
            <SectionWrapper title={'Academic career'}>
              <p className="text-justify">
                <strong>Dr. Denise Ferreira</strong>, the founder and CEO of FEM Calcul, obtained her MSc in Structural
                Engineering from University of Porto, Portugal (2009) and her <strong>PhD</strong> from Polytechnic
                University of Catalonia, Barcelona (2013). She worked as a university lecturer and academic researcher
                being involved in several projects focused on the analysis of concrete structures, covering both
                numerical and experimental fields. She has worked as a researcher in{' '}
                <strong>Universidade do Porto</strong>, Universitat Politècnica de Catalunya (UPC) and TU Delft.
              </p>
            </SectionWrapper>
            <SectionWrapper title={'Professional career'}>
              <p className="text-justify">
                She has worked at DIANA FEA BV, in The Netherlands, since 2016 taken different roles: a kernel
                developer, documentation curator for the DIANA developments ,training tutor, client support engineer and
                product specialist. She is a DIANA Expert and, with FEM Calcul, she continues her collaborating with
                DIANA FEA BV with the tasks of technical writing, training, costumer support and product development.
              </p>
            </SectionWrapper>
            <SectionWrapper title={'Our mission'}>
              <p className="text-justify ">
                At FEM Calcul we are committed to high standards, to delivering high quality work and always finding the
                best solutions for the most complex engineering problems.
              </p>
            </SectionWrapper>
            {/* <p className=" underline pt-8">
              <strong>FEM Calcul stands for:</strong>
            </p> */}
            <SectionWrapper title={'Our values'}>
              <>
                <div className="p-5 mt-12 rounded-md bg-neutral-200 flex justify-center align-middle">
                  <p>
                    <strong>FEM</strong>, of course, is the acronym of <strong>FINITE ELEMENT METHOD</strong>. We are
                    truly experts on using the finite element method to optimize engineering structural solutions.
                  </p>
                </div>
                <div className="p-5 mt-12 rounded-md bg-neutral-200 flex justify-center align-middle">
                  <p>
                    <strong>FEM</strong> is the verb <strong>TO DO</strong> in Catalan language. FEM Calcul is based in
                    the hearth of Barcelona, Catalunya. We praise ourselves to be <strong>DOERS</strong>. There is no
                    challenge that we cannot handle, we truly get things done.
                  </p>
                </div>
                <div className="p-5 mt-12 rounded-md bg-neutral-200 flex justify-center align-middle">
                  <p>
                    We support the raising of the <strong>FEMinine</strong> leadership in the STEM field. We belief that
                    equal opportunities for both women and men and equal representativeness in business will lead to a
                    better world.
                  </p>
                </div>
              </>
            </SectionWrapper>
          </>
        }
      />
    </>
  );
}
