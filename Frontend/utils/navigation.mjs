export const goToPage = (fanCategory) => {
    const params = new URLSearchParams();
    params.append("fanCategory", fanCategory);

    const pageURL = "/pages/content/content.html?" + params.toString();
    location.href = pageURL;
}

export const goTo404 = () => {
    const pageURL = "/404Page.html"
    location.href = pageURL;
}

export const addArg = (arg, value) => {
    const url = new URL(window.location.href);
    const params = url.searchParams;

    params.set(arg.toLocaleLowerCase(), value);

    window.history.replaceState(null, null, url);
}
