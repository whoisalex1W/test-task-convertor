import { useState } from "react";
import style from "../Converter/Converter.module.css";
import SelectForm from "./SelectForm/SelectForm";
import { Box, MenuItem, Stack } from "@mui/material";

const BASE_CURRENCY = "UAH";

const Converter = ({ options, currencies }) => {
    const [balance, setBalance] = useState(0);
    const [firstCurrencyRate, setfirstCurrencyRate] = useState(1);
    const [secondCurrencyRate, setsecondCurrencyRate] = useState(1);

    const currenciesCollection = options.map((el) => (
        <MenuItem key={el} value={el}>
            {el}
        </MenuItem>
    ));

    const getRate = (e) => {
        return e.target.value === BASE_CURRENCY
            ? 1
            : currencies.find((el) => el.cc === e.target.value).rate;
    };

    const selectRateFirst = (e) => {
        setfirstCurrencyRate(getRate(e));
    };

    const selectRateSecond = (e) => {
        setsecondCurrencyRate(getRate(e));
    };

    return (
        <Box className={style.form}>
            <Box
                sx={{
                    width: "600px",
                    height: "300px",
                    margin: "100px",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Stack direction={"row"} spacing={20}>
                    <SelectForm
                        label="Convert from"
                        balance={balance}
                        rate={firstCurrencyRate}
                        setBalance={setBalance}
                        selectOption={selectRateFirst}
                        currenciesCollection={currenciesCollection}
                    />

                    <SelectForm
                        label="Convert to"
                        balance={balance}
                        rate={secondCurrencyRate}
                        setBalance={setBalance}
                        selectOption={selectRateSecond}
                        currenciesCollection={currenciesCollection}
                    />
                </Stack>
            </Box>
        </Box>
    );
};

export default Converter;
