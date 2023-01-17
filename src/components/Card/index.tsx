/* eslint-disable camelcase */
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
  const {
    banner_image,
    difficulty,
    title,
    short_description,
    correct_answers_count,
    questions_count,
    answered_date,
  } = data;
  const moreThanHalfQuestionsCorrect =
    correct_answers_count > questions_count / 2;
  const performanceTextColor = moreThanHalfQuestionsCorrect
    ? 'var(--color-success)'
    : 'var(--color-error)';

  return (
    <button onClick={onClick} type='button' className='card-button'>
      <div className='wrapper card-wrapper'>
        <div className='card-image-container'>
          <img className='card-image' src={banner_image} alt='card' />
          <Difficulty difficulty={difficulty} />
        </div>
        <div className='card-text-container'>
          {answered_date !== null && (
            <div className='answered-info'>
              <p
                style={{ color: performanceTextColor }}
                className='p-small'
              >{`Você acertou ${correct_answers_count} de ${questions_count}`}</p>
              <p className='answered-date p-small'>{`Em ${answered_date
                .slice(0, 10)
                .replaceAll('-', '/')}`}</p>
            </div>
          )}

          <h1 className='heading1'>{title}</h1>
          <p className='p-medium'>{short_description}</p>
        </div>
      </div>
    </button>
  );
};
