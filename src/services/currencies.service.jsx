import axios from "axios";

export const CurrenciesService = {
    async getAll() {
        const response = await axios.get(
            "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
        );

        return response.data;
    },
};
