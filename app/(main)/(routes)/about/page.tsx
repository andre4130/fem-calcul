import SectionBanner from '@/components/femcalculComponents/section/components/section-banner';
import SectionIntroText from '@/components/femcalculComponents/section/components/section-intro-text';
import Image from 'next/image';
import denise from '../../../../public/images/denise.jpg';
import CardComponent from '../../(components)/cardComponent';
export default function AboutPage() {
  return (
    <>
      <div className="flex justify-center pt-8">
        <Image src={denise} alt={'denise_ferreira'} height={370} width={370} />
      </div>
      <SectionIntroText
        text={
          <>
            <p>
              It brings together decades of experience in both academia and industry in the ambit of complex nonlinear
              finite element analysis applied to numerous and diverse engineering problems. FEM Calcul aims to help
              engineers on achieving more accurate and efficient simulations of complex problems, that result in safer,
              more economical and overall optimized civil infrastructure.
            </p>
            <br />
            <p>
              <strong>Dr. Denise Ferreira</strong> is the founder and CEO of FEM Calcul. She obtained her MSc in
              Structural Engineering from University of Porto, Portugal (2009) and her PhD from Polytechnic University
              of Catalonia, Barcelona (2013). She worked as a university lecturer and academic researcher being involved
              in several projects focused on the analysis of concrete structures, covering both numerical and
              experimental fields. She has worked as a researcher in University of Porto, Polytechnic University of
              Catalonia and TU Delft. After her academic career she moved to industry. She has worked at DIANA FEA BV,
              in The Netherlands, since 2016 taken different roles: a kernel developer, documentation curator for the
              DIANA developments ,training tutor, client support engineer and product specialist. She is a DIANA Expert
              and, with FEM Calcul, she continues her collaborating with DIANA FEA BV with the tasks of technical
              writing, training, costumer support and product development.
            </p>
            <br />
            <p>
              At FEM Calcul we are committed to high standards, to delivering high quality work and always finding the
              best solutions for the most complex engineering problems.
            </p>
            <br />
            <p className=" underline pt-8">
              <strong>FEM Calcul stands for:</strong>
            </p>
            <div className="p-5 mt-12 rounded-md bg-neutral-200 flex justify-center align-middle">
              <p>
                <strong>FEM</strong>, of course, is the acronym of <strong>FINITE ELEMENT METHOD</strong>. We are truly
                experts on using the finite element method to optimize engineering structural solutions.
              </p>
            </div>
            <div className="p-5 mt-12 rounded-md bg-neutral-200 flex justify-center align-middle">
              <p>
                <strong>FEM</strong> is the verb <strong>TO DO</strong> in Catalan language. FEM Calcul is based on the
                earth of Barcelona, Catalunya. We praise ourselves to be <strong>DOERS</strong>. There is no challenge
                that we cannot handle, we truly get things done.
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
        }
      />
    </>
  );
}
