export const Difficulty = ({ difficulty }: { difficulty: string }) => {
  const difficultyColor =
    difficulty === 'easy' ? 'var(--color-secondary)' : 'var(--color-error)';

  return (
    <div
      className='difficulty btn-small'
      style={{ background: difficultyColor }}
    >
      {difficulty.toUpperCase()}
    </div>
  );
};
