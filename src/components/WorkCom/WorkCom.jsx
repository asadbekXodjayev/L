import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './WorkCom.css';
import Skeleton from '../Skeleton/Skeleton.jsx';

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
            { src: "/works/may1.jpg", alt: "seevlyn" },
            { src: "/works/may2.jpg", alt: "seevlyn" },
            { src: "/works/may3.jpg", alt: "seevlyn" },
            { src: "/works/may4.jpg", alt: "seevlyn" },
            { src: "/works/may5.jpg", alt: "seevlyn" },
            { src: "/works/may6.jpg", alt: "seevlyn" },
            { src: "/works/may7.jpg", alt: "seevlyn" },
            { src: "/works/may8.jpg", alt: "seevlyn" },
            { src: "/works/may9.jpg", alt: "seevlyn" },
            { src: "/works/may10.jpg", alt: "seevlyn" },
        ],
    },
];


const SWIPE_THRESHOLD = 50; // px

/* Gallery thumbnail that shows a shimmer skeleton until the image loads. */
const GalleryImage = ({ photo }) => {
    const [loaded, setLoaded] = useState(false);
    return (
        <>
            {!loaded && <Skeleton className="gallery-skeleton" />}
            <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                onLoad={() => setLoaded(true)}
                onError={() => setLoaded(true)}
                style={{ opacity: loaded ? 1 : 0 }}
            />
        </>
    );
};

const WorkCom = ({ works }) => {
    const data = works || worksData;

    // Lightbox operates on a whole work's photo group.
    // box = { photos: [...], index: n, title: '...' } | null
    const [box, setBox] = useState(null);
    const isOpen = box !== null;

    const openLightbox = (work, index) => {
        setBox({ photos: work.photos, index, title: work.title });
    };

    const closeLightbox = useCallback(() => setBox(null), []);

    const showNext = useCallback(() => {
        setBox((b) =>
            b ? { ...b, index: (b.index + 1) % b.photos.length } : b
        );
    }, []);

    const showPrev = useCallback(() => {
        setBox((b) =>
            b ? { ...b, index: (b.index - 1 + b.photos.length) % b.photos.length } : b
        );
    }, []);

    // Keyboard navigation + body scroll lock while open
    useEffect(() => {
        if (!isOpen) return;

        const onKey = (e) => {
            if (e.key === 'Escape') closeLightbox();
            else if (e.key === 'ArrowRight') showNext();
            else if (e.key === 'ArrowLeft') showPrev();
        };

        document.addEventListener('keydown', onKey);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = prevOverflow;
        };
    }, [isOpen, closeLightbox, showNext, showPrev]);

    // Touch swipe (mobile)
    const touchStartX = React.useRef(null);
    const onTouchStart = (e) => {
        touchStartX.current = e.changedTouches[0].clientX;
    };
    const onTouchEnd = (e) => {
        if (touchStartX.current === null) return;
        const delta = e.changedTouches[0].clientX - touchStartX.current;
        if (delta <= -SWIPE_THRESHOLD) showNext();
        else if (delta >= SWIPE_THRESHOLD) showPrev();
        touchStartX.current = null;
    };

    const current = isOpen ? box.photos[box.index] : null;
    const hasMany = isOpen && box.photos.length > 1;

    return (
        <div className="gallery-wrapper">
            {data.map((work, wIndex) => (
                <div key={wIndex} className="work-item">
                    <motion.div
                        className="work-head"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="work-category">
                            {work.category}
                        </span>
                        <h2 className="work-title">{work.title}</h2>
                    </motion.div>
                    <div className="gallery">
                        {work.photos.map((photo, pIndex) => (
                            <motion.button
                                key={pIndex}
                                type="button"
                                className="gallery-item"
                                onClick={() => openLightbox(work, pIndex)}
                                aria-label={`Open ${photo.alt} (${pIndex + 1} of ${work.photos.length})`}
                                initial={{ opacity: 0, y: 32 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ duration: 0.5, delay: Math.min(pIndex * 0.05, 0.4) }}
                            >
                                <GalleryImage photo={photo} />
                            </motion.button>
                        ))}
                    </div>
                </div>
            ))}

            {/* Lightbox */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="lightbox"
                        onClick={closeLightbox}
                        role="dialog"
                        aria-modal="true"
                        aria-label={`${box.title} — image ${box.index + 1} of ${box.photos.length}`}
                        onTouchStart={onTouchStart}
                        onTouchEnd={onTouchEnd}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.22 }}
                    >
                        <button
                            className="lightbox-close"
                            onClick={closeLightbox}
                            aria-label="Close"
                        >
                            <FontAwesomeIcon icon={faXmark} />
                        </button>

                        {hasMany && (
                            <button
                                className="lightbox-nav prev"
                                onClick={(e) => { e.stopPropagation(); showPrev(); }}
                                aria-label="Previous image"
                            >
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </button>
                        )}

                        <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={current.src}
                                    src={current.src}
                                    alt={current.alt}
                                    className="lightbox-img"
                                    initial={{ opacity: 0, scale: 0.96 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.25 }}
                                />
                            </AnimatePresence>
                            <figcaption className="lightbox-caption">
                                <span className="lightbox-title">{box.title}</span>
                                {hasMany && (
                                    <span className="lightbox-counter">
                                        {box.index + 1} / {box.photos.length}
                                    </span>
                                )}
                            </figcaption>
                        </figure>

                        {hasMany && (
                            <button
                                className="lightbox-nav next"
                                onClick={(e) => { e.stopPropagation(); showNext(); }}
                                aria-label="Next image"
                            >
                                <FontAwesomeIcon icon={faChevronRight} />
                            </button>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default WorkCom;
