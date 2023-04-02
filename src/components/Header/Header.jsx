import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Stack,
    Skeleton,
} from "@mui/material";
import Currency from "../Currency/Currency";

const Header = ({ currencies }) => {
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Typography>Currencies</Typography>
                    <Box sx={{ marginLeft: "auto" }}>
                        {currencies && currencies.length > 0 ? (
                            <Stack
                                spacing={3}
                                direction={"row"}
                                alignItems={"center"}
                            >
                                {currencies.map((el) => (
                                    <Currency
                                        key={el.cc}
                                        cc={el.cc}
                                        rate={el.rate}
                                    />
                                ))}
                            </Stack>
                        ) : (
                            <Skeleton
                                variant="rectangular"
                                width={600}
                                height={40}
                            />
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
