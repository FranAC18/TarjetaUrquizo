const cardData = {
    profile: {
        name: "Podovyda",
        title: "Clínica Podológica",
        description: "Tu bienestar en cada paso",
        // La imagen que se cargará, sube tu logo a la carpeta assets/img/felipelarrea.png
        image: "assets/img/podovyda.png",
        // Imagen de respaldo si no encuentra la principal
        fallbackImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=256&h=256"
    },
    contact: {
        phone: "593984344164", // Solo números y código de país, usado para enlaces de WhatsApp y llamada
        phoneDisplay: "+593 98 434 4164", // Usado para mostrar visualmente en la vCard
        email: "podovyda@gmail.com",
        whatsappMessage: "Hola, me gustaría obtener más información sobre sus servicios.",
        company: "Podovyda",
        note: "Clínica Podológica",
        url: "www.podovyda.com",
        address: "Calle Río Chimbo y Echandía, Santo Domingo, Ecuador", // Texto para SEO
        googleMapsIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d352.6500190630828!2d-79.16343965067671!3d-0.2526918803426913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d54653d5535f29%3A0x36ef1819ac7d4bd0!2sC.%20Echandia%20%26%20C.%20Rio%20Chimbo%2C%20Santo%20Domingo!5e0!3m2!1ses!2sec!4v1774041092589!5m2!1ses!2sec"
    },
    social: [
        { name: "Instagram", url: "https://www.instagram.com/podovyda/", icon: "instagram" },
        { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61586768471405", icon: "facebook" },
        // Lucide usa íconos generales así que 'music-2' o 'video' puede servir como tiktok de manera nativa sin recargar svgs personalizados

    ]
};
