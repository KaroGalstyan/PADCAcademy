import { useEffect, useState } from "react";
import api from "@/app/services/apiPublic";
import { Country } from "../interfaces";

const useCountryById = (id: number | null) => {
  const [country, setCountry] = useState<Country | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id === null) return;

    setLoading(true);
    api
      .get(`/countries/${id}`)
      .then((res) => setCountry(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  return { country, loading, error };
};

export default useCountryById;
