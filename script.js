function sendEmail(){
    let params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
        sexo : document.getElementById("sexo").value,
        interesses : document.getElementById("interesses").value
    }

    emailjs.send("service_0okaobe", "template_lbvx3o7", params)
    .then(function(response) {
        alert("Mensagem enviada com sucesso :)");
    })
    .catch(function(error) {
        alert("Ocorreu um erro ao enviar o email: " + error);
    });
}