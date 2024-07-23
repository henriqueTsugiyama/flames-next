'use client'

import Image from "next/image";
import styles from '../../ui/styles/carousel.module.css'
export default function Carousel() {
    let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n: number) {
    showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n: number) {
    showSlides(slideIndex = n);
    }

    function showSlides(n: number) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        Array.from(dots).forEach((dot) => {
            // Cast the element to HTMLElement to access the style property
            const dotElement = dot as HTMLElement;
            dotElement.style.backgroundColor = "red"; // Example of setting a style property
        });
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        const lastSlideElement = slides[slideIndex-1] as HTMLElement;
        lastSlideElement.style.display = "block";
        dots[slideIndex-1].className += " active";
    }

    return (
        <>
        <div className={`${styles.slideshow_container}`}>
            {/* <!-- Full-width images with number and caption text --> */}
             <div className={`${styles.mySlides} ${styles.fade}`}>
                <div className={`${styles.numbertext}`}>1 / 3</div>
                 <Image 
                    src="img1.jpg"
                    width={180}
                    height={180} 
                    className="w-full"
                    alt="Image 1"
                  />
                <div className={`${styles.text}`}>Caption Text</div>
            </div>
           
            <div className={`${styles.mySlides} ${styles.fade}`}>
                <div className={`${styles.numbertext}`}>2 / 3</div>
                 <Image 
                    src="img2.jpg"
                    width={180}
                    height={180} 
                    className={"w-full"}
                    alt="Image 2"
                  />
                <div className={`${styles.text}`}>Caption Two</div>
            </div>

            <div className={`${styles.mySlides} ${styles.fade}`}>
                <div className={`${styles.numbertext}`}>3 / 3</div>
                 <Image 
                    src="img3.jpg"
                    width={180}
                    height={180} 
                    className={"w-full"}
                    alt="Image 3"
                  />
                <div className={`${styles.text}`}>Caption Three</div>
            </div>
            {/*<!-- Next and previous buttons -->*/}
            <a className={`${styles.prev}`} onClick={() => plusSlides(-1)}>&#10094;</a>
            <a className={`${styles.next}`} onClick={() => plusSlides(1)}>&#10095;</a>
            <br/>
        </div>

            {/* <!-- The dots/circles --> */}
         <div className={`text-center`}>
            <span className={`${styles.dot}`} onClick={() => currentSlide(1)}></span>
            <span className={`${styles.dot}`} onClick={() => currentSlide(2)}></span>
            <span className={`${styles.dot}`} onClick={() => currentSlide(3)}></span> 
        </div>
        </>
    );
}