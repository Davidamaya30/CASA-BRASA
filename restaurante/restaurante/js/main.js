// Menú hamburguesa (móvil)
const menuBoton = document.getElementById('menuBoton');
const navegacion = document.getElementById('navegacion');
menuBoton.addEventListener('click', () => {
  const abierto = navegacion.classList.toggle('abierto');
  menuBoton.setAttribute('aria-expanded', abierto);
});
navegacion.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navegacion.classList.remove('abierto');
  menuBoton.setAttribute('aria-expanded', 'false');
}));

// Ver y ocultar ingredientes de cada plato
document.querySelectorAll('.ingredientes-boton').forEach(boton => {
  boton.addEventListener('click', () => {
    const lista = boton.nextElementSibling;
    const abrir = lista.hidden;
    lista.hidden = !abrir;
    boton.setAttribute('aria-expanded', abrir);
    boton.textContent = abrir ? 'Ocultar ingredientes' : 'Ver ingredientes';
  });
});

// Formulario de reservas
const form = document.getElementById('formReserva');
const mensaje = document.getElementById('mensaje');
document.getElementById('fecha').min = new Date().toISOString().split('T')[0];
form.addEventListener('submit', e => {
  e.preventDefault();
  const campos = ['nombre', 'fecha', 'personas'].map(id => document.getElementById(id));
  let valido = true;
  campos.forEach(c => {
    const ok = c.value.trim() !== '';
    c.classList.toggle('error', !ok);
    if (!ok) valido = false;
  });
  if (!valido) {
    mensaje.textContent = 'Completa todos los campos para reservar.';
    return;
  }
  const [nombre, fecha, personas] = campos.map(c => c.value.trim());
  mensaje.textContent = `Reserva lista, ${nombre}: mesa para ${personas} el ${fecha}.`;
  form.reset();
});
