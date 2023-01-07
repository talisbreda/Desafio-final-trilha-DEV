import './styles.css';

export const InputField = ({ placeholder }: { placeholder: string }) => {
  return (
    <input placeholder={placeholder} type={placeholder.replace('-', '')} />
  );
};
