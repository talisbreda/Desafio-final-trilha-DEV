import './styles.css';

export const Difficulty = ({ difficulty }: { difficulty: string }) => {
  let translatedDifficulty = '';
  let difficultyColor = '';

  switch (difficulty) {
    case 'easy': {
      translatedDifficulty = 'FÁCIL';
      difficultyColor = 'var(--color-secondary)';
      break;
    }
    default: {
      translatedDifficulty = 'DIFÍCIL';
      difficultyColor = 'var(--color-error)';
    }
  }

  return (
    <div
      className='difficulty btn-small'
      style={{ background: difficultyColor }}
    >
      {translatedDifficulty.toUpperCase()}
    </div>
  );
};
