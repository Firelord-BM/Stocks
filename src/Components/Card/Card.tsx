import React, { SyntheticEvent } from "react";
import { CompanySearch } from "../../company";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";

interface Props {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate:(e:SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({ id, searchResult,onPortfolioCreate}: Props): JSX.Element => {
  // console.log("Card data:", searchResult);
  return (
    <div className="m-8 p-12 flex flex-col items-center gap-3 border rounded-lg shadow-xl w-1/2" key={id}>
      <img
        src="/apple-logo.jpg"
        alt="Image"
        className="rounded-full aspect-square w-[204px]"
      />
      <div className="space-y-1 text-center">
        <h2 className="text-lg ">{searchResult.name} <span className="tracking-widest">({searchResult.symbol})</span></h2>
        <p className="text-xl font-bold">{searchResult.currency}</p>
      </div>
      <p className="text-center">
        {searchResult.exchangeShortName} - {searchResult.stockExchange}
      </p>
      <AddPortfolio onPortfolioCreate={onPortfolioCreate} symbol={searchResult.symbol}/>
    </div>
  );
}

export default Card;
