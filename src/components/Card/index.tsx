import './styles.css';
import cardImage from '../../assets/images/card-image.svg';

export const Card = () => {
  return (
    <div className='wrapper card-wrapper'>
      <div className='card-image-container'>
        <img className='card-image' src={cardImage} alt='card' />
        <div
          className='difficulty btn-small'
          style={{ background: 'var(--color-secondary)' }}
        >
          FÁCIL
        </div>
      </div>
      <div className='card-text-container'>
        <h4 className='heading1'>UI</h4>
        <p className='p-medium'>Questões sobre interface</p>
      </div>
    </div>
  );
};
