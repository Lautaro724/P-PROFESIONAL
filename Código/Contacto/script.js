const evento = document.getElementById('button_send')
const enviarFormulario = () => {
	let nombre = document.getElementById('input_nombre').value.trim();
	let apellido = document.getElementById('input_apellido').value.trim();
	let mensaje = document.getElementById('mensaje').value.trim();
	let numero = 5493704555322;
	//---------MENSAJE DE ALERTA AL NO COMPLETAR LOS INPUTS Y ENVIAR EL FORMULARIO---------//
	if (nombre === "" || apellido === "" || mensaje === "") {
        alert("Por favor, completa todos los campos antes de enviar el formulario.");
        return;
    }
    //---------ENVIA LOS DATOS INTRODUCIDOS MEDIANTE EL USO DE WHATSAPP---------//
	var win= window.open(`https://wa.me/${numero}?text=Hola%20mi%20nombre%20es%20${nombre}%20${apellido}, Asunto:%20${mensaje}`,'_blank');

}
//---------ABRE LA APLICACIÓN DE WHATSAPP EN UNA VENTANA---------//
evento.addEventListener('click', enviarFormulario)

