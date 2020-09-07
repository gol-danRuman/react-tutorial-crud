import axios from '../Axios/index';
import { config } from '../config/common';

export const postBookApi = async (data: any) => {
    return await axios.request({
        url: `/api/book`,
        method: 'post',
        data: data,
        headers: { 'Content-Type': 'multipart/form-data' }
    }).then((res: any) => {
        return res.data
    })
}

export const getAllBookApi = async () => {
    return await axios.request({
        url: `/api/book`,
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }).then((res: any) => {
        console.log(res)
        return res.data
    })
}

export const updateBookApi = async (id: String, data: any) => {

    return await axios.request({
        url: `/api/book/${id}`,
        method: 'post',
        data: data,
        headers: { 'Content-Type': 'multipart/form-data'}
    }).then((res: any) => {
        return res.data
    })
}

export const getBookApi = async (id: any) => {
    return await axios.request({
        url: `/api/book/${id}`,
        method: 'get',
        headers: { 'Content-Type': 'application/json' }
    }).then((res: any) => {
        return res.data
    })
}

export const deleteBookApi =  async (id: any) => {
    return await axios.request({
        url: `/api/book/${id}`,
        method: 'delete'
    })
    .then((res: any) => {
        return res.data
    })
}