
const GOOGLE_API_KEY="AIzaSyBTYwE7N1lbeMjT12IJrwAzPpDzke_UJhI";
export const YOUTUBE_VIDEO_API='https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key='+
GOOGLE_API_KEY;

// Search for youtube api 
// In videos, ref copy curl link 

// For generating youtube api key, search youtube api key auth and create key

// Initially we were getting only 5 videos . In order to increase the count we added one param &maxResults=50

// Also we have made US to IN for regionCode=IN param

export const YOUTUBE_SEARCH_API='http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';


