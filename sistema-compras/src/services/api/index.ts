import axios from "axios";
import type { ResultData } from "./types";

const api = axios.create({
    baseURL: "https://parseapi.back4app.com",
    headers: {
        'X-Parse-Application-Id': "NagNYx7p2YyWo7n8z4nIyb69ZYIb0e2XC25MuLkD",
        'X-Parse-REST-API-Key': "lUJyVPVrY8YIrWhK8hNY2BE9cuyx4loNHpNyypEW"
    }
});

const getAllProducts = async () => {
    try {
        const result: ResultData = await api.get("/classes/ProductData");
        return result;
    } catch (error) {
        console.error(error);
    }
}

export {  getAllProducts };