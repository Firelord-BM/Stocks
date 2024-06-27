import { useState, ChangeEvent, SyntheticEvent, useEffect } from 'react';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';
import ListPortfolio from './Components/Portfolio/ListPortfolio/ListPortfolio';

function App() {
  const [search, setSearch] = useState<string>("");
  const [portfolioValues,setPortfolioValues] = useState<string[]>([])
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    // console.log("Search input changed:", e.target.value);
  };

  const onPortfolioCreate = (e:any) => {
    e.preventDefault();
    const updatedPortfolio = [...portfolioValues, e.target[0].value];
    const exists = portfolioValues.find((value)=> value === e.target[0].value);
    if(exists)return;
    setPortfolioValues(updatedPortfolio)
  }
  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setServerError(null);
    // console.log("Search button clicked with query:", search);
    const result = await searchCompanies(search);
    // console.log("Full API Response:", result);
    if (typeof result === "string") {
      setServerError(result);
      console.log("Server error:", result);
    } else if (Array.isArray(result)) {
      // console.log("Fetched data:", result);
      setSearchResult(result);
    }
  };

  useEffect(() => {
    // console.log("searchResult state updated:", searchResult);
  }, [searchResult]);

  return (
    <div className='container m-4'>
      <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange} />
<ListPortfolio portfolioValues={portfolioValues} />
      <CardList searchResults={searchResult} onPortfolioCreate={onPortfolioCreate}/>
    </div>
  );
}

export default App;
