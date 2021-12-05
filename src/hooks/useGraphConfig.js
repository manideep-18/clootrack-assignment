import axios from "axios";
import { useQuery } from "react-query";

const getGraphConfig = (url) => {
  return async function () {
    const { data } = await axios.get(url);
    return data;
  };
};

export const useGraphConfig = (key, url) => {
  return useQuery(key, getGraphConfig(url));
};
