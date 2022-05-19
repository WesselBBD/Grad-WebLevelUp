export const goToPage = (fanCategory) => {
    var params = new URLSearchParams();
    params.append("fanCategory", fanCategory);

    var pageURL = "/pages/content/content.html?" + params.toString();
    location.href = pageURL;
}

export const goTo404 = () => {
    var pageURL = "/pages/404/404Page.html"
    location.href = pageURL;
}