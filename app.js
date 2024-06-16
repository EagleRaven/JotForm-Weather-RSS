async function fetchRSSFeed(url) {
    const headline = document.getElementById("headline");
    try {
        const response = await fetch(url);
        const text = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, "application/xml");

        const titles = xml.getElementsByTagName("title");
        for (let i = 0; i < titles.length; i++) {
            headline.innerHTML = titles[i].textContent
        }
    } catch (error) {
        console.error("Error fetching the RSS feed:", error);
    }
}

const rssFeedUrl = "https://www.weather.gov/rss_page.php?site_name=ajk";
fetchRSSFeed(rssFeedUrl);