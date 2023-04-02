import { Typography, Stack } from "@mui/material";
import CurrencyFlag from "react-currency-flags";

const Currency = ({ cc, rate }) => (
    <Stack key={cc} spacing={1} direction={"row"} alignItems={"center"}>
        <CurrencyFlag currency={cc} size="md" />
        <Typography>{cc}</Typography>
        {rate && <Typography>{rate}</Typography>}
    </Stack>
);

export default Currency;
