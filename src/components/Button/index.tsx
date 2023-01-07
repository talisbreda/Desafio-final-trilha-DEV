import './styles.css';

export const Button = ({
  text,
  textSize,
}: {
  text: string;
  textSize?: string;
}) => {
  return (
    <button type='button' className={`defaultButton ${textSize}`}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  textSize: 'btn-medium',
};
