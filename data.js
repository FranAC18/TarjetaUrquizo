const cardData = {
    profile: {
        name: "Fredy Urquizo",
        title: "Fotografía Profesional",
        description: "Fotógrafo especializado en documentar la magia de los XV años",
        image: "assets/img/fotourquizo.jpeg", // coloca aquí tu logo o foto
        fallbackImage: "assets/img/fotourquizo.jpeg"
    },
    contact: {
        phone: "593982492695", // importante: sin espacios
        phoneDisplay: "+593 98 249 2695",
        email: "frobert1984@gmail.com",
        whatsappMessage: "Hola, me gustaría información sobre fotografía para XV años.",
        company: "Fredy Urquizo Fotografía",
        note: "Fotografía de XV Años",
        address: "Ecuador", // puedes hacerlo más específico si quieres posicionamiento local
        url: typeof window !== 'undefined' ? window.location.href : "https://tusitio.com/",
        googleMapsEmbed: "" // opcional, puedes agregar ubicación después
    },
    social: [
        {
            name: "Instagram",
            url: "https://www.instagram.com/fredy_urquizo_fotografo?igsh=OWYwZGdybTBiazFx&utm_source=qr",
            icon: "instagram"
        },
        {
            name: "TikTok",
            url: "https://www.tiktok.com/@fredyurquizofotografia?_r=1&_t=ZS-95crqC8J5jc",
            icon: "music-2" // o "music-2"
        },
        {
            name: "Facebook",
            url: "https://www.facebook.com/share/1Ax92LE63A/?mibextid=wwXIfr",
            icon: "facebook"
        }
    ]
};