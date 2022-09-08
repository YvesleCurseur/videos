import axios from 'axios'

const KEY = 'AIzaSyAj0COvTCJ6pynKM-Z7NGmRkv8o5JKG4Yc'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})

