
import api from './api'

const getAllCountrys = async () => {
    try {
        return await api.get('all')
            .then(async function (response) {
                return response.data
            })
            .catch(async function (error) {
                console.log(error)
                return error
            });

    } catch (error) {
        console.log(error)
    }
};

const getCountryName = async (name) => {
    try {
        return await api.get(`name/${name}`)
            .then(async function (response) {
                return response.data
            })
            .catch(async function (error) {

                if(error.response.status === 404) {
                   return []
                }else {
                    return error
                }
                
            });

    } catch (error) {
        console.log(error)
    }
};

const getCountryCode = async (code) => {
    try {
        return await api.get(`alpha/${code}`)
            .then(async function (response) {
                return response.data
            })
            .catch(async function (error) {

                if(error.response.status === 404) {
                   return []
                }else {
                    return error
                }
                
            });

    } catch (error) {
        console.log(error)
    }
};

const getCountryRegion = async (region) => {
    try {
        return await api.get(`region/${region}`)
            .then(async function (response) {
                return response.data
            })
            .catch(async function (error) {

                if(error.response.status === 404) {
                   return []
                }else {
                    return error
                }
                
            });

    } catch (error) {
        console.log(error)
    }
};

export default {
    getAllCountrys,
    getCountryName,
    getCountryRegion,
    getCountryCode
}