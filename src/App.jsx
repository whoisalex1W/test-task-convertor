import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Converter from "./components/Converter/Converter";
import { CurrenciesService } from "./services/currencies.service";
import neededСurrencies from "./currencies";

const App = () => {
    const [currencies, setCurrencies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await CurrenciesService.getAll();
            const actualCurrencies = data.filter((el) =>
                neededСurrencies.includes(el.cc)
            );
            setCurrencies(actualCurrencies);
        };
        fetchData();
    }, []);

    return (
        <div className="App">
            <Header currencies={currencies}></Header>
            <Converter
                currencies={currencies}
                options={neededСurrencies}
            ></Converter>
        </div>
    );
};

export default App;
