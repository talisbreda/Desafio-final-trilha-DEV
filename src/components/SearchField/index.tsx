import search from '../../assets/images/search-icon.svg';

export const SearchField = ({
  placeholder,
  handleSearch,
}: {
  placeholder: string;
  handleSearch: () => void;
}) => {
  return (
    <div className='container'>
      <input
        className='search-input input-text input-field'
        placeholder={placeholder}
        type='text'
        onChange={handleSearch}
      />
      <button
        onClick={handleSearch}
        type='button'
        className='button-input-icon'
      >
        <img className='input-icon' src={search} alt='Search' />
      </button>
    </div>
  );
};
