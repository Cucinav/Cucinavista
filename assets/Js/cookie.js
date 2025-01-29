

document.addEventListener('DOMContentLoaded', function () {
    cookieConsent.init({
        acceptText: "Accetta tutti",
        rejectText: "Rifiuta",
        settingsText: "Personalizza",
        policyURL: "cookieplicy.html"
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("cookie-banner");
    const acceptButton = document.getElementById("accept-cookies");

    if (!localStorage.getItem("cookiesAccepted")) {
        banner.style.display = "block";
    }

    acceptButton.addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", "true");
        banner.style.display = "none";
    });
});