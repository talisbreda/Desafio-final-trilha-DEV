import './styles.css';

export const Button = ({
  text,
  textSize,
  width,
  onClick,
}: {
  text: string;
  textSize?: string;
  width?: string;
  onClick: () => Promise<void> | void;
}) => {
  return (
    <button
      onClick={onClick}
      type='button'
      className={`defaultButton ${textSize}`}
      style={{ width }}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  textSize: 'btn-medium',
  width: 'var(--default-input-width)',
};
