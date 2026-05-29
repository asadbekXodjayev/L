import React, { useEffect, useState } from 'react';
import './WorkCom.css';

export const worksData = [
    // 1. Studio
    {
        category: "Studio",
        title: "Dilshoda, April 2025",
        photos: [
            { src: "/works/photo_39_2025-11-15_22-38-48.jpg", alt: "Dilshoda" },
        ],
    },
    {
        category: "Studio",
        title: "Shahzoda, June 2025",
        photos: [
            { src: "/works/photo_13_2025-11-15_22-38-48.jpg", alt: "Shahzoda" },
            { src: "/works/photo_14_2025-11-15_22-38-48.jpg", alt: "Shahzoda" },
            { src: "/works/photo_15_2025-11-15_22-38-48.jpg", alt: "Shahzoda" },
            { src: "/works/photo_16_2025-11-15_22-38-48.jpg", alt: "Shahzoda" },
            { src: "/works/photo_17_2025-11-15_22-38-48.jpg", alt: "Shahzoda" },
        ],
    },
    {
        category: "Studio",
        title: "Madina, June 2025",
        photos: [
            { src: "/works/photo_18_2025-11-15_22-38-48.jpg", alt: "Madina" },
            { src: "/works/photo_19_2025-11-15_22-38-48.jpg", alt: "Madina" },
            { src: "/works/photo_20_2025-11-15_22-38-48.jpg", alt: "Madina" },
        ],
    },
    {
        category: "Studio",
        title: "Sabina, October 2025",
        photos: [
            { src: "/works/photo_40_2025-11-15_22-38-48.jpg", alt: "Sabina" },
            { src: "/works/photo_41_2025-11-15_22-38-48.jpg", alt: "Sabina" },
            { src: "/works/photo_42_2025-11-15_22-38-48.jpg", alt: "Sabina" },
        ],
    },

    // 2. Wedding
    {
        category: "Wedding",
        title: "Ulugbek & Severa, May 2025",
        photos: [
            { src: "/works/photo_21_2025-11-15_22-38-12.jpg", alt: "Ulugbek & Severa" },
            { src: "/works/photo_22_2025-11-15_22-38-12.jpg", alt: "Ulugbek & Severa" },
            { src: "/works/photo_23_2025-11-15_22-38-12.jpg", alt: "Ulugbek & Severa" },
            { src: "/works/photo_24_2025-11-15_22-38-12.jpg", alt: "Ulugbek & Severa" },
            { src: "/works/photo_25_2025-11-15_22-38-12.jpg", alt: "Ulugbek & Severa" },
            { src: "/works/photo_26_2025-11-15_22-38-12.jpg", alt: "Ulugbek & Severa" },
        ],
    },
    {
        category: "Wedding",
        title: "Zarifjon & Zuhra, July 2025",
        photos: [
            { src: "/works/photo_16_2025-11-15_22-38-12.jpg", alt: "Zarifjon & Zuhra" },
            { src: "/works/photo_17_2025-11-15_22-38-12.jpg", alt: "Zarifjon & Zuhra" },
            { src: "/works/photo_18_2025-11-15_22-38-12.jpg", alt: "Zarifjon & Zuhra" },
            { src: "/works/photo_19_2025-11-15_22-38-12.jpg", alt: "Zarifjon & Zuhra" },
            { src: "/works/photo_20_2025-11-15_22-38-12.jpg", alt: "Zarifjon & Zuhra" },
        ],
    },
    {
        category: "Wedding",
        title: "Asilbek & Rashida, August 2025",
        photos: [
            { src: "/works/photo_1_2025-11-15_22-38-12.jpg", alt: "Asilbek & Rashida" },
            { src: "/works/photo_2_2025-11-15_22-38-12.jpg", alt: "Asilbek & Rashida" },
            { src: "/works/photo_3_2025-11-15_22-38-12.jpg", alt: "Asilbek & Rashida" },
            { src: "/works/photo_4_2025-11-15_22-38-12.jpg", alt: "Asilbek & Rashida" },
            { src: "/works/photo_5_2025-11-15_22-38-12.jpg", alt: "Asilbek & Rashida" },
            { src: "/works/photo_6_2025-11-15_22-38-12.jpg", alt: "Asilbek & Rashida" },
            { src: "/works/photo_7_2025-11-15_22-38-12.jpg", alt: "Asilbek & Rashida" },
            { src: "/works/photo_8_2025-11-15_22-38-12.jpg", alt: "Asilbek & Rashida" },
            { src: "/works/photo_10_2025-11-15_22-38-12.jpg", alt: "Asilbek & Rashida" },
            { src: "/works/photo_11_2025-11-15_22-38-12.jpg", alt: "Asilbek & Rashida" },
            { src: "/works/photo_12_2025-11-15_22-38-12.jpg", alt: "Asilbek & Rashida" },
            { src: "/works/photo_13_2025-11-15_22-38-12.jpg", alt: "Asilbek & Rashida" },
            { src: "/works/photo_14_2025-11-15_22-38-12.jpg", alt: "Asilbek & Rashida" },
            { src: "/works/photo_15_2025-11-15_22-38-12.jpg", alt: "Asilbek & Rashida" },
        ],
    },

    // 3. Commercial
    {
        category: "Commercial",
        title: "For brand Manisa, July 2025",
        photos: [
            { src: "/works/photo_1_2025-11-15_22-38-48.jpg", alt: "For brand Manisa" },
            { src: "/works/photo_2_2025-11-15_22-38-48.jpg", alt: "For brand Manisa" },
            { src: "/works/photo_3_2025-11-15_22-38-48.jpg", alt: "For brand Manisa" },
            { src: "/works/photo_4_2025-11-15_22-38-48.jpg", alt: "For brand Manisa" },
        ],
    },
    {
        category: "Commercial",
        title: "Meros Gallery Fashion Show, September 2025",
        photos: [
            { src: "/works/photo_5_2025-11-15_22-38-48.jpg", alt: "Meros Gallery Fashion Show" },
            { src: "/works/photo_8_2025-11-15_22-38-48.jpg", alt: "Meros Gallery Fashion Show" },
            { src: "/works/photo_10_2025-11-15_22-38-48.jpg", alt: "Meros Gallery Fashion Show" },
            { src: "/works/photo_11_2025-11-15_22-38-48.jpg", alt: "Meros Gallery Fashion Show" },
            { src: "/works/photo_12_2025-11-15_22-38-48.jpg", alt: "Meros Gallery Fashion Show" },
        ],
    },
    {
        category: "Commercial",
        title: "For Volna Fitness Club, November 2025",
        photos: [
            { src: "/works/photo_6_2025-11-15_22-38-48.jpg", alt: "For Volna Fitness Club" },
            { src: "/works/photo_7_2025-11-15_22-38-48.jpg", alt: "For Volna Fitness Club" },
            { src: "/works/photo_9_2025-11-15_22-38-48.jpg", alt: "For Volna Fitness Club" },
        ],
    },

    // 4. Street Shoot
    {
        category: "Street Shoot",
        title: "Sabina, June 2025",
        photos: [
            { src: "/works/photo_34_2025-11-15_22-38-48.jpg", alt: "Sabina" },
        ],
    },
    {
        category: "Street Shoot",
        title: "Mavluda, July 2025",
        photos: [
            { src: "/works/photo_21_2025-11-15_22-38-48.jpg", alt: "Mavluda" },
            { src: "/works/photo_22_2025-11-15_22-38-48.jpg", alt: "Mavluda" },
        ],
    },
    {
        category: "Street Shoot",
        title: "Mohina, August 2025",
        photos: [
            { src: "/works/photo_23_2025-11-15_22-38-48.jpg", alt: "Mohina" },
            { src: "/works/photo_24_2025-11-15_22-38-48.jpg", alt: "Mohina" },
            { src: "/works/photo_25_2025-11-15_22-38-48.jpg", alt: "Mohina" },
            { src: "/works/photo_26_2025-11-15_22-38-48.jpg", alt: "Mohina" },
        ],
    },
    {
        category: "Street Shoot",
        title: "Dilshoda, August 2025",
        photos: [
            { src: "/works/photo_36_2025-11-15_22-38-48.jpg", alt: "Dilshoda" },
            { src: "/works/dilshoda22.jpg", alt: "Dilshoda" },
        ],
    },
    {
        category: "Street Shoot",
        title: "Japanese Garden, September 2025",
        photos: [
            { src: "/works/garden1.jpg", alt: "Japanese Garden" },
            { src: "/works/garden2.jpg", alt: "Japanese Garden" },
            { src: "/works/garden3.jpg", alt: "Japanese Garden" },            
            { src: "/works/garden4.jpg", alt: "Japanese Garden" },
            { src: "/works/garden5.jpg", alt: "Japanese Garden" },
            { src: "/works/garden6.jpg", alt: "Japanese Garden" },
            { src: "/works/garden7.jpg", alt: "Japanese Garden" },
        ],
    },
    {
        category: "Street Shoot",
        title: "Sabina, September 2025",
        photos: [
            { src: "/works/photo_27_2025-11-15_22-38-48.jpg", alt: "Sabina" },
            { src: "/works/photo_28_2025-11-15_22-38-48.jpg", alt: "Sabina" },
            { src: "/works/photo_29_2025-11-15_22-38-48.jpg", alt: "Sabina" },
        ],
    },
    {
        category: "Street Shoot",
        title: "Shohsanam, October 2025",
        photos: [
            { src: "/works/photo_30_2025-11-15_22-38-48.jpg", alt: "Shohsanam" },
            { src: "/works/photo_31_2025-11-15_22-38-48.jpg", alt: "Shohsanam" },
            { src: "/works/photo_32_2025-11-15_22-38-48.jpg", alt: "Shohsanam" },
        ],
    },
    {
        category: "Street Shoot",
        title: "Marjona, November 2025",
        photos: [
            { src: "/works/photo_37_2025-11-15_22-38-48.jpg", alt: "Marjona" },
            { src: "/works/photo_38_2025-11-15_22-38-48.jpg", alt: "Marjona" },
        ],
    },
    {
        category: "Street Shoot",
        title: "Shohsanam, March 2026",
        photos: [
            { src: "/works/mart1.jpg", alt: "Shohsanam" },
            { src: "/works/mart2.jpg", alt: "Shohsanam" },
            { src: "/works/mart3.jpg", alt: "Shohsanam" },
            { src: "/works/mart4.jpg", alt: "Shohsanam" },
            { src: "/works/mart5.jpg", alt: "Shohsanam" },
            { src: "/works/mart6.jpg", alt: "Shohsanam" },
            { src: "/works/mart7.jpg", alt: "Shohsanam" },
        ],
    },
    {
        category: "Commercial",
        title: "seevlyn, May 2026",
        photos: [
            { src: "/works/May1.jpg", alt: "seevlyn" },
            { src: "/works/May2.jpg", alt: "seevlyn" },
            { src: "/works/May3.jpg", alt: "seevlyn" },
            { src: "/works/May4.jpg", alt: "seevlyn" },
            { src: "/works/May5.jpg", alt: "seevlyn" },
            { src: "/works/May6.jpg", alt: "seevlyn" },
            { src: "/works/May7.jpg", alt: "seevlyn" },
            { src: "/works/May8.jpg", alt: "seevlyn" },
            { src: "/works/May9.jpg", alt: "seevlyn" },
            { src: "/works/May10.jpg", alt: "seevlyn" },
        ],
    },
];


const WorkCom = ({ works }) => {
    const data = works || worksData;
    const [visibleItems, setVisibleItems] = useState([]);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState(null);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const allIndexes = data.flatMap((work) =>
                work.photos.map((_, idx) => idx)
            );
            setVisibleItems(allIndexes);
        }, 100);
        return () => clearTimeout(timeout);
    }, [data]);

    const openLightbox = (photo) => {
        setCurrentPhoto(photo);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setCurrentPhoto(null);
    };

    return (
        <div className="gallery-wrapper">
            {data.map((work, wIndex) => (
                <div key={wIndex} className="work-item">
                    <h3 className="work-category">{work.category}</h3>
                    <h2 className="work-title">{work.title}</h2>
                    <div className="gallery">
                        {work.photos.map((photo, pIndex) => (
                            <div
                                key={pIndex}
                                className={`gallery-item ${visibleItems.includes(pIndex) ? "visible" : ""}`}
                                onClick={() => openLightbox(photo)}
                                style={{ cursor: 'pointer' }}
                            >
                                <img src={photo.src} alt={photo.alt} />
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            {/* Lightbox */}
            {lightboxOpen && currentPhoto && (
                <div className="lightbox" onClick={closeLightbox}>
                    <span className="lightbox-close">&times;</span>
                    <img
                        src={currentPhoto.src}
                        alt={currentPhoto.alt}
                        className="lightbox-img"
                        onClick={(e) => e.stopPropagation()} // prevent closing when clicking on image
                    />
                </div>
            )}
        </div>
    );
};

export default WorkCom;
