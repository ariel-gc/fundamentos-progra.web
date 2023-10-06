document.getElementById("btn-login").addEventListener("click", login);

function validation_alert(ptext) {
    swal.fire({
        title: "Verificar la entrada de datos",
        text: ptext,
        confirmButtonText: "Intentar de nuevo",
        confirmButtonColor: "#008383",
        html: '<iframe src="https://lottie.host/?file=a7af0101-f1a5-401c-a98c-9972e42bb5a7/xOTy3GtvgL.json"></iframe> <br><p>' + ptext + "</p>",
    });
}

function login() {
    let user_input = document.getElementById("in-txt-user").value;
    let pass_input = document.getElementById("in-txt-pass").value;
    let username = "cenfo";
    let password = "123";
    let input = [user_input, pass_input];
    let input_id = ["in-txt-user", "in-txt-pass"];
    let error_count = 0;
    let text = "";
    for (let i = 0; i < input.lenght; i++) {
        document.getElementById(input_id[i]).classList.remove("error");
        if (input[i] == "") {
            text = "No deben haber campos vacíos";
            validation_alert(text);
            document.getElementById(input_id[i]).classList.add("error");
            error_count++;
        }
    }

    if(error_count == 0) {
        if (user_input == username && pass_input == password) {
            swal.fire({
                //icon: "success",
                title: "Crendenciales correctas",
                showConfirmButton: false,
                timer: 3000,
                html: '<iframe width="320" height="240" src="https://lottie.host/?file=808ff9e5-3298-4236-95bd-97c940a12681/oIpRWeURTk.json"></iframe> <br><br><p>Redirigiendo página</p>',
            }).then(() => {
                window.location.href = "landing.html"
            });
        } else {
            text = "Usuario o contraseña incorrecta.";
            validation_alert(text);
        }
    }
}