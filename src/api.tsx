import axios from "axios";
import { CompanySearch } from "./company";

interface SearchResponse {
  data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
  try {
    const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
    if (!API_KEY) {
      throw new Error("API key is missing");
    }
    // console.log("API Key:", API_KEY);
    const { data } = await axios.get<SearchResponse>(`https://financialmodelingprep.com/api/v3/search-ticker?query=${query}&limit=10&exchange=NASDAQ&apikey=${API_KEY}`);
    console.log("API Response:", data);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error message:", error.message);
      return error.message;
    } else {
      console.error("Unexpected error:", error);
      return "An unexpected error has occurred";
    }
  }
};
