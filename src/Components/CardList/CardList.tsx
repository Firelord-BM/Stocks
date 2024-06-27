import { SyntheticEvent } from "react";
import { CompanySearch } from "../../company";
import Card from "../Card/Card";
import { v4 as uuidv4 } from "uuid";

interface Props {
  searchResults: CompanySearch[];
  onPortfolioCreate:(e:SyntheticEvent)=>void
}

const CardList: React.FC<Props> = ({ onPortfolioCreate,searchResults }: Props): JSX.Element => {
  // console.log("Search Results in CardList:", searchResults);
  return (
    <div className="">
      {searchResults.length > 0 ? (
        searchResults.map((result) => (
          <Card id={result.symbol} key={uuidv4()} searchResult={result} onPortfolioCreate={onPortfolioCreate} />
        ))
      ) : (
        <h1>No results</h1>
      )}
    </div>
  );
}

export default CardList;
