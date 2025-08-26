import axios from "axios";
import { useEffect, useState } from "react";

const App7 = () => {
  const [value, setValue] = useState("");
  const [rates, setRates] = useState({});
  const [currency, setCurency] = useState(null);

  useEffect(() => {
    console.log(`effect run, currency is now, `, currency);

    if (currency) {
      console.log(`fetching exchange rates....`);

      axios
        .get(`https://open.er-api.com/v6/latest/${currency}`)
        .then((response) => {
          setRates(response.data.rates);
        });
    }
  }, [currency]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (event) => {
    event.preventDefault();
    setCurency(value);
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        currency: <input onChange={handleChange} value={value} />
        <button type="submit">exchange rate</button>
      </form>
      <pre>{JSON.stringify(rates, null, 2)}</pre>
    </div>
  );
};

export default App7;
