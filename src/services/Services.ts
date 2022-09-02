import { Axios } from "../config/Axios";
import { environment } from "../config/Enviroment";
import { AxiosResponse } from 'axios';

const requestParams = {
    api_key: environment.apiKey,
	page: undefined as number | undefined,
	language: 'en-US'
}

async function findAll (page?: number): Promise<AxiosResponse<any, any>> {   
    if (page !== undefined) requestParams.page = page;
    const response = await Axios.get('/top_rated', { params: requestParams });
    return response;
}

const findOne = async (id: string | undefined): Promise<AxiosResponse<any, any>> => {
    const response = await Axios.get(`/${id}`, { params: requestParams });  
    return response;
}


export const MoviesServices = {
    findAll,
    findOne
}


