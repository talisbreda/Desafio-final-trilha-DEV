import './styles.css';
import { Quiz } from '../../utils/getQuizzes';

export const Card = ({ data }: { data: Quiz }) => {
  const difficultyColor =
    data.difficulty === 'easy'
      ? 'var(--color-secondary)'
      : 'var(--color-error)';

  return (
    <div className='wrapper card-wrapper'>
      <div className='card-image-container'>
        <img className='card-image' src={data.banner_image} alt='card' />
        <div
          className='difficulty btn-small'
          style={{ background: difficultyColor }}
        >
          {data.difficulty.toUpperCase()}
        </div>
      </div>
      <div className='card-text-container'>
        <h4 className='heading1'>{data.title}</h4>
        <p className='p-medium'>{data.short_description}</p>
      </div>
    </div>
  );
};
