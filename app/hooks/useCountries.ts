import { useEffect, useState } from "react";
import api from "../services/apiPublic";
import { ICountry } from "../interfaces";

const useCountries = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    api
      .get("/countries")
      .then((response) => {
        const data = response.data.map((c: ICountry) => ({
          id: c.id,
          name: c.name,
        }));
        setCountries(data);
      })
      .catch((err) => {
        setError(err.message || "Failed to fetch countries");
      })
      .finally(() => setLoading(false));
  }, []);

  return { countries, loading, error };
};

export default useCountries;
