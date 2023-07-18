import axios from "axios"
const BASE_URL = "https://youtube138.p.rapidapi.com"
const options = {
    params: {
      hl: 'en',
      gl: 'US'
    },
    headers: {
    'X-RapidAPI-Key': '',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
    
  };
  // temel url sonuna çektiği url'i ekleyecek yanına optionsdaki bilgilerimizi ekleyecek
  export const fetchDataFromApi = async (url)=>{
    const {data}= await axios.get(`${BASE_URL}/${url}`,options)
    return data
  }