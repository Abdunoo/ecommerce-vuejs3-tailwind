// api = 
export const apiUrl = 'https://sandbox2.panemu.com/assessment/api/';
// export const apiUrl = 'http://localhost:8000/assessment/api/';
export const unique_key = 'H8m4z/'; 

import axios, { AxiosRequestConfig } from 'axios';

export async function makeRequest({
    url,
    method,
    data,
    headers
}) {
    try {
        url = apiUrl + unique_key + url;
        
        let config: AxiosRequestConfig = {
            url: url,
            method,
            data,
            headers,
        };

        let response = await axios(config);
        return response.data;
    } catch (error) {
        throw error;
    }
}