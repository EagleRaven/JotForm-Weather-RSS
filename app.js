function refresh(){
    location.reload();
}

setInterval(refresh, 3600000) // 1000 = 1 sec, 60000 = 1 min, 3600000 = 1 hour


async function fetchRSSFeed(url) {
    const headline = document.getElementById("headline");
    try {
        const response = await fetch(url);
        const text = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, "application/xml");

        const titles = xml.getElementsByTagName("text");

        headline.innerHTML = titles[0].textContent;


    } catch (error) {
        console.error("Error fetching the RSS feed:", error);
    }
}



const rssFeedUrl = "https://forecast.weather.gov/MapClick.php?lat=58.301&lon=-134.4246&unit=0&lg=english&FcstType=dwml";
fetchRSSFeed(rssFeedUrl);