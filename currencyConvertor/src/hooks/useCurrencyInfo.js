import {useState , useEffect} from "react";

function useCurrencyInfo(currency) {
    let [data, setData] = useState(0);
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
    }, [currency])

    return data;
}

export default useCurrencyInfo