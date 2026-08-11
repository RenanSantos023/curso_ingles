async function enviar() {

    const link = document.getElementById("link").value.trim();

    if (!link) {
        alert("Digite um link.");
        return;
    }

    try {

        const response = await fetch(
            "https://rp9b96v3ih.execute-api.sa-east-1.amazonaws.com/dev",
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    link: link
                })
            }
        );

        if (!response.ok) {
            throw new Error("Erro ao chamar a API");
        }

        alert("Link enviado com sucesso!");

    } catch (e) {
        console.error(e);
        alert("Erro ao enviar.");
    }

}