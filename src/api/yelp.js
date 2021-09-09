import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer l1DtgnxF4_WebFIQfggwANJ_52hkH8YXRYaYNMwRDjFW4qNDv0paS_7PRykoaiiyJPZZpixpwpqJX8bH_0ccXLuGajolPYol62RSd6FTEZItrVSv-OTc1t-fID06YXYx',
    },
});
