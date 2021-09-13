export default (function () {
    let links
    document.addEventListener("DOMContentLoaded", () => {
        links = document.querySelectorAll('a')
    })
    return links
}) ()