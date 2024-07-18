const evento = document.getElementById('button_send')
const enviarFormulario = () => {
	let nombre = document.getElementById('input_nombre').value;
	let apellido = document.getElementById('input_apellido').value;
	let mensaje = document.getElementById('mensaje').value;
	let numero = 5493704555322;
var win= window.open(`https://wa.me/${numero}?text=Hola%20mi%20nombre%20es%20${nombre}%20${apellido}, Asunto:%20${mensaje}`,'_blank');

}

evento.addEventListener('click', enviarFormulario)

