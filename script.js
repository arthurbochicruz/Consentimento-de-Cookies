const view = document.getElementById('popupCookies')
const aceitouCookie = localStorage.getItem("aceitouCookie")


if (aceitouCookie !== "true") {
setTimeout(() => {
    view.style.display = "block"
}, 500);
}


    document.getElementById('botaoAceitar').addEventListener("click",() => {
            localStorage.setItem("aceitouCookie", "true")
            const aceitouCookie = localStorage.getItem("aceitouCookie")
            if (aceitouCookie === "true") {
                view.style.display = "none";
                alert("Você aceitou os cookies, obrigado por aceitar, você pode continuar usando o site, o pedido foi aceito não será pedido novamente.");
            }
    })


document.getElementById('botaoRecusar').addEventListener("click",() => {
    setTimeout(() => {
        view.style.display = "none";
        alert("Você recusou os cookies, não é possível continuar usando este site, você será redirecionado.");
        window.location.replace('https://www.google.com');
    }, 1000);
})
