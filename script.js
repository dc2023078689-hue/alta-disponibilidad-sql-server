const figures={
  arquitectura:['assets/arquitectura.png','Figura 1. Arquitectura logica con Listener, replicas, WSFC y testigo de quorum.'],
  despliegue:['assets/despliegue.png','Figura 2. Despliegue de servidores Windows Server 2022 y router virtual.'],
  red:['assets/red.png','Figura 3. Segmentos virtuales de clientes, servidores, administracion y replicacion.'],
  seguridad:['assets/seguridad.png','Figura 4. Zonas de confianza, monitoreo, identidades y respaldos.']
};
document.querySelectorAll('.tab').forEach(button=>{
  button.addEventListener('click',()=>{
    document.querySelectorAll('.tab').forEach(b=>{b.classList.remove('active');b.setAttribute('aria-selected','false')});
    button.classList.add('active');button.setAttribute('aria-selected','true');
    const [src,caption]=figures[button.dataset.figure];
    const img=document.getElementById('figure-image');img.src=src;img.alt=caption;
    document.getElementById('figure-caption').textContent=caption;
  });
});
