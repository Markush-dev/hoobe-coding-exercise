import instagram from './../assets/instagram.svg';
import threads from './../assets/threads.svg';
import tiktok from './../assets/tiktok.svg';
import twitter from './../assets/twitter.svg';

export const getSocialsImage = (platform) => {
    switch (platform) {
        case 0:
            return instagram
        case 59:
            return threads
        case 6:
            return tiktok
        case 7:
            return twitter
        default: 
            return instagram
    }
}
