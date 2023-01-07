import './styles.css';

export const Button = ({ text }: { text: string }) => {
  return (
    <button type='button' className='defaultButton'>
      {text}
    </button>
  );
};
