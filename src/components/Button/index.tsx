import './styles.css';

export const Button = ({
  text,
  textSize,
  onClick,
}: {
  text: string;
  textSize?: string;
  onClick: () => Promise<void>;
}) => {
  return (
    <button
      onClick={onClick}
      type='button'
      className={`defaultButton ${textSize}`}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  textSize: 'btn-medium',
};
