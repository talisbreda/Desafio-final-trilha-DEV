import './styles.css';
import { Quiz } from '../../utils/getQuizzes';
import { Difficulty } from '../Difficulty';

export const Card = ({
  data,
  onClick,
}: {
  data: Quiz;
  onClick: () => void;
}) => {
  return (
    <button onClick={onClick} type='button' className='card-button'>
      <div className='wrapper card-wrapper'>
        <div className='card-image-container'>
          <img className='card-image' src={data.banner_image} alt='card' />
          <Difficulty difficulty={data.difficulty} />
        </div>
        <div className='card-text-container'>
          <h4 className='heading1'>{data.title}</h4>
          <p className='p-medium'>{data.short_description}</p>
        </div>
      </div>
    </button>
  );
};
