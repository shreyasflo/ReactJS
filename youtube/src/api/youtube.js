import axios from "axios";

const KEY = 'AIzaSyAYwGm7OMt7RymA3ghDBZVtfCD9Ksj8Z-U'
export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})