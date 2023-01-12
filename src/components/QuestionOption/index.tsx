import './styles.css';

export const QuestionOption = ({
  index,
  text,
  correct,
  onClick,
}: {
  index: number;
  text: string;
  correct?: boolean;
  onClick: () => void;
}) => {
  const letters = ['A', 'B', 'C', 'D', 'E'];
  const borderOnClick = correct ? 'var(--color-success)' : 'var(--color-error)';

  const handleClick = () => {
    const container = document.querySelector(
      `.answer${index}`,
    ) as HTMLDivElement;
    container.style.border = `1px solid ${borderOnClick}`;
    container.style.background = 'var(--ink-light-gray)';
    onClick();
  };

  return (
    <button onClick={handleClick} type='button'>
      <div className={`option-container answer${index}`}>
        <div className='p-large'>{`${letters[index - 1]}.`}</div>
        <div className='p-large'>{text}</div>
      </div>
    </button>
  );
};

QuestionOption.defaultProps = {
  correct: false,
};
