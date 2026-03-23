const LUCIDE_ICONS = {
    facebook: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
    instagram: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>`,
    phone: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    mail: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    whatsapp: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`,
    globe: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    share: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
    "user-plus": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>`,
    "music-2": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><circle cx="8" cy="18" r="4"/><path d="M12 18V2l7 4"/></svg>`,
    check: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><polyline points="20 6 9 17 4 12"/></svg>`
};

function populateDOM() {
    // 1. Metadata básica
    document.getElementById('page-title').textContent = `${cardData.profile.name} - Tarjeta Digital`;
    document.getElementById('page-desc').content = `Tarjeta de presentación digital de ${cardData.profile.name}`;

    // 2. Perfil
    const profileImg = document.getElementById('profile-image');
    profileImg.src = cardData.profile.image;
    profileImg.onerror = function () {
        this.src = cardData.profile.fallbackImage;
        document.getElementById('profile-blur').style.backgroundImage = `url(${cardData.profile.fallbackImage})`;
    };
    document.getElementById('profile-blur').style.backgroundImage = `url(${cardData.profile.image})`;
    document.getElementById('profile-name').textContent = cardData.profile.name;
    document.getElementById('profile-title').textContent = cardData.profile.title;
    document.getElementById('profile-description').textContent = cardData.profile.description;

    // 3. Acciones Rápidas (USANDO EL DICCIONARIO)
    const quickActionsContainer = document.getElementById('quick-actions');
    const waUrl = `https://wa.me/${cardData.contact.phone}?text=${encodeURIComponent(cardData.contact.whatsappMessage)}`;
    
    quickActionsContainer.innerHTML = `
        <a href="${waUrl}" target="_blank" class="action-btn" aria-label="WhatsApp">${LUCIDE_ICONS.whatsapp}</a>
        <a href="tel:+${cardData.contact.phone}" class="action-btn" aria-label="Llamar">${LUCIDE_ICONS.phone}</a>
        <a href="mailto:${cardData.contact.email}" class="action-btn" aria-label="Email">${LUCIDE_ICONS.mail}</a>
        <a href="https://${cardData.contact.url.replace('https://','')}" target="_blank" class="action-btn" aria-label="Web">${LUCIDE_ICONS.globe}</a>
    `;

    // 4. Redes Sociales (USANDO EL DICCIONARIO)
    const socialLinksContainer = document.getElementById('social-links');
    socialLinksContainer.innerHTML = ''; 
    cardData.social.forEach(social => {
        const a = document.createElement('a');
        a.href = social.url;
        a.target = "_blank";
        a.className = "social-btn";
        a.innerHTML = LUCIDE_ICONS[social.icon] || ''; 
        socialLinksContainer.appendChild(a);
    });

    // 5. Iconos en botones estáticos
    document.getElementById('save-contact-btn').insertAdjacentHTML('afterbegin', LUCIDE_ICONS['user-plus']);
    document.getElementById('share-btn').insertAdjacentHTML('afterbegin', LUCIDE_ICONS.share);
}

/**
 * Función para generar archivo vCard
 */
function createVCard(data) {
    return `BEGIN:VCARD
VERSION:3.0
FN:${data.profile.name}
ORG:${data.contact.company}
TITLE:${data.profile.title}
TEL;TYPE=CELL:${data.contact.phoneDisplay}
EMAIL;TYPE=WORK:${data.contact.email}
URL:${data.contact.url}
NOTE:${data.contact.note.replace(/\n/g, '\\n')}
END:VCARD`;
}

// Inicializar cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // 1. Rellenar datos en pantalla
    populateDOM();

    // 2. Configurar el botón de guardar contacto (vCard)
    const saveContactBtn = document.getElementById('save-contact-btn');
    saveContactBtn.addEventListener('click', () => {
        const vCardContent = createVCard(cardData);

        // Crear un Blob e iniciar descarga
        const blob = new Blob([vCardContent], { type: 'text/vcard;charset=utf-8' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = `${cardData.profile.name.replace(/\s+/g, '_')}_Contacto.vcf`;

        document.body.appendChild(link);
        link.click();

        // Limpieza de memoria
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        // Feedback al usuario (opcional)
        const originalText = saveContactBtn.innerHTML;
        saveContactBtn.innerHTML = '<i data-lucide="check" class="icon"></i>¡Guardado!';
        lucide.createIcons();

        setTimeout(() => {
            saveContactBtn.innerHTML = originalText;
            lucide.createIcons();
        }, 2000);
    });

    // 3. Configurar API Nativa Web Share
    const shareBtn = document.getElementById('share-btn');
    if (!navigator.share) {
        shareBtn.parentElement.style.display = 'none'; // Ocultar si el navegador no lo soporta
    } else {
        shareBtn.addEventListener('click', async () => {
            try {
                await navigator.share({
                    title: `${cardData.profile.name} - ${cardData.profile.title}`,
                    text: `Aquí tienes la tarjeta digital de ${cardData.profile.name}.`,
                    url: cardData.contact.url
                });
            } catch (error) {
                console.log('Cancelado / Error al compartir:', error);
            }
        });
    }
});
