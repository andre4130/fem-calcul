import CardComponent from '../cardComponent';
import consulting from '../../../../public/images/consulting.jpg';
import research from '../../../../public/images/research.jpg';
import education from '../../../../public/images/education.jpg';

export default function SectionsShortcut() {
  return (
    <>
      <h4 className="pl-6 py-4">
        <strong>Services Offered</strong>
      </h4>
      <div className="w-full min-h-40 flex justify-center p-4">
        <div className="min-h-100 flex sm:flex-row flex-col sm:justify-center justify-around w-full ">
          <CardComponent title={'Consulting'} linkTo={'/consulting'} img={consulting} />
          <CardComponent title={'Education'} linkTo={'/education'} img={education} />
          <CardComponent title={'Research'} linkTo={'/research'} img={research} />
        </div>
      </div>
    </>
  );
}
