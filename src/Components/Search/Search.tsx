import React from 'react';

interface SearchProps {
  search: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: (e: React.SyntheticEvent) => void;
}

const Search: React.FC<SearchProps> = ({ search, handleSearchChange, onSearchSubmit }) => {
  return (
    <form onSubmit={onSearchSubmit}>
      <input type="text" value={search} onChange={handleSearchChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
