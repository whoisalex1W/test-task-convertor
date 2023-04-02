import { Input, Select, Card, Typography, Stack } from "@mui/material";
import style from "../SelectForm/SelectForm.module.css";
import { useState } from "react";
import Currency from "../../Currency/Currency";

const SelectForm = (props) => {
    const [select, setSelect] = useState("");

    const handleSelect = (e) => {
        props.selectOption(e);
        setSelect(e.target.value);
    };

    const handleChange = (e) => {
        props.setBalance(e.target.value * props.rate);
    };

    return (
        <>
            <Card sx={{ padding: "20px 20px 0 20px" }}>
                <Stack spacing={2}>
                    <Typography>{props.label}</Typography>
                    <Input
                        placeholder="0"
                        type="number"
                        className={style.input}
                        value={+(props.balance / props.rate).toFixed(2) || ""}
                        onChange={handleChange}
                    />
                    <Select
                        className={style.select}
                        onChange={handleSelect}
                        value={select}
                        renderValue={(value) => <Currency cc={value} />}
                    >
                        {props.currenciesCollection}
                    </Select>
                </Stack>
            </Card>
        </>
    );
};

export default SelectForm;
