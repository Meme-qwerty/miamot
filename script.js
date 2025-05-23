const container = document.getElementById('container');
const emojis = ['❤️', '🌻', '💗', '💞']; // Puedes cambiar los emojis



function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    heart.style.left = Math.random() * 100 + 'vw'; // Posición horizontal aleatoria
    heart.style.top = '-50px'; // Empiezan arriba (fuera de la pantalla)
    heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // Velocidad variable
    container.appendChild(heart);
    

    // Elimina el corazón después de que termine la animación
    setTimeout(() => {
        heart.remove();
    }, 5000);
}
// Genera un corazón cada 300ms
setInterval(createHeart, 300);




// CONTADOR
function updateCounter() {
    const startDate = new Date("2024-08-23"); // Tu fecha de inicio
    const now = new Date();

    // Cálculo de años completos
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    // Ajuste si el día o mes actual es menor que el de inicio
    if (days < 0) {
        months--;
        // Días en el mes anterior
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    // Cálculo de horas, minutos y segundos (igual que antes)
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Actualiza el DOM
    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

// Actualiza cada segundo
setInterval(updateCounter, 1000);
updateCounter(); // Ejecuta inmediatamente







// Carrusel Polaroid
let currentPhotos = {
  left: 0,
  right: 0
};

function showPhoto(containerId, index) {
  const container = document.getElementById(containerId);
  const imgs = container.querySelectorAll('img');
  imgs.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

function nextPhoto(side) {
  const containerId = side === 'left' ? 'polaroid-left' : 'polaroid-right';
  const imgs = document.getElementById(containerId).querySelectorAll('img');
  currentPhotos[side] = (currentPhotos[side] + 1) % imgs.length;
  showPhoto(containerId, currentPhotos[side]);
}

function prevPhoto(side) {
  const containerId = side === 'left' ? 'polaroid-left' : 'polaroid-right';
  const imgs = document.getElementById(containerId).querySelectorAll('img');
  currentPhotos[side] = (currentPhotos[side] - 1 + imgs.length) % imgs.length;
  showPhoto(containerId, currentPhotos[side]);
}

// Inicializar ambas polaroids
showPhoto('polaroid-left', 0);
showPhoto('polaroid-right', 0);

// Productor musica
const songs = [
    {
        title: "Canción 1",
        artist: "Artista 1",
        src: "audio/cancion1.mp3",
        cover: "images/portada1.jpg"
    },
    {
        title: "Canción 2",
        artist: "Artista 2",
        src: "audio/cancion2.mp3",
        cover: "images/portada2.jpg"
    },
    {
        title: "Canción 3",
        artist: "Artista 3",
        src: "audio/cancion3.mp3",
        cover: "images/portada3.jpg"
    }
];

let currentSong = 0;

document.getElementById("nextButton").addEventListener("click", () => {
    currentSong = (currentSong + 1) % songs.length;

    const song = songs[currentSong];
    document.getElementById("audioSource").src = song.src;
    document.getElementById("audioPlayer").load(); // Recarga el nuevo src
    document.getElementById("title").textContent = song.title;
    document.getElementById("artist").textContent = song.artist;
    document.getElementById("cover").src = song.cover;
});






 
















