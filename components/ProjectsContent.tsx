import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ImageModal from "./ImageModal";

const ProjectsContent = () => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    // Load YouTube API
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    let player: any;

    (window as any).onYouTubeIframeAPIReady = () => {
      player = new (window as any).YT.Player(iframeRef.current, {
        events: {},
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && player) {
          player.pauseVideo(); 
        }
      },
      { threshold: 0.4 }
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => observer.disconnect();
  }, []);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  return (
    <div className="flex flex-col bg-[#EBEBEB]">
      <div className="flex flex-col pb-20 px-5 md:px-10 lg:px-20 gap-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-10 ">
          <div
            className="relative w-full h-100 md:h-162.5"
            onClick={() => setActiveImage("/img/pro1.jpg")}
          >
            <Image
              src="/img/pro1.jpg"
              alt="display"
              fill
              className="object-cover"
            />
            {activeImage && (
              <ImageModal
                src={activeImage}
                onClose={() => setActiveImage(null)}
              />
            )}
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="relative w-full h-75" onClick={() => setActiveImage("/img/pro2.jpg")}>
              <Image
                src="/img/pro2.jpg"
                alt="display"
                fill
                className="object-cover"
              />
              {activeImage && (
              <ImageModal
                src={activeImage}
                onClose={() => setActiveImage(null)}
              />
            )}
            </div>

            <div className="relative w-full h-75 " onClick={() => setActiveImage("/img/pro3.jpg")}>
              <Image
                src="/img/pro3.jpg"
                alt="display"
                fill
                className="object-cover"
              />
              {activeImage && (
              <ImageModal
                src={activeImage}
                onClose={() => setActiveImage(null)}
              />
            )}
            </div>

            <div className="relative w-full h-81.25" onClick={() => setActiveImage("/img/pro5.jpg")}>
              <Image
                src="/img/pro5.jpg"
                alt="display"
                fill
                className="object-cover"
              />
              {activeImage && (
              <ImageModal
                src={activeImage}
                onClose={() => setActiveImage(null)}
              />
            )}
            </div>

            <div className="relative w-full h-81.25 " onClick={() => setActiveImage("/img/pro6.jpg")}>
              <Image
                src="/img/pro6.jpg"
                alt="display"
                fill
                className="object-cover"
              />
              {activeImage && (
              <ImageModal
                src={activeImage}
                onClose={() => setActiveImage(null)}
              />
            )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="relative w-full h-85" onClick={() => setActiveImage("/img/pro11.jpg")}>
            <Image
              src="/img/pro11.jpg"
              alt="display"
              fill
              className="object-cover"
            />
            {activeImage && (
              <ImageModal
                src={activeImage}
                onClose={() => setActiveImage(null)}
              />
            )}
          </div>
          <div className="relative w-full h-85" onClick={() => setActiveImage("/img/pro12.jpg")}>
            <Image
              src="/img/pro12.jpg"
              alt="display"
              fill
              className="object-cover"
            />
            {activeImage && (
              <ImageModal
                src={activeImage}
                onClose={() => setActiveImage(null)}
              />
            )}
          </div>
          <div className="relative w-full h-85" onClick={() => setActiveImage("/img/pro13.jpg")}>
            <Image
              src="/img/pro13.jpg"
              alt="display"
              fill
              className="object-cover"
            />
            {activeImage && (
              <ImageModal
                src={activeImage}
                onClose={() => setActiveImage(null)}
              />
            )}
          </div>
          <div className="relative w-full h-85" onClick={() => setActiveImage("/img/pro14.jpg")}>
            <Image
              src="/img/pro14.jpg"
              alt="display"
              fill
              className="object-cover"
            />
            {activeImage && (
              <ImageModal
                src={activeImage}
                onClose={() => setActiveImage(null)}
              />
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-10 ">
          <div className="relative w-full h-100 md:h-162.5" onClick={() => setActiveImage("/img/pro24.jpg")}>
            <Image
              src="/img/pro24.jpg"
              alt="display"
              fill
              className="object-cover"
            />
            {activeImage && (
              <ImageModal
                src={activeImage}
                onClose={() => setActiveImage(null)}
              />
            )}
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="relative w-full h-75" onClick={() => setActiveImage("/img/pro25.jpg")}>
              <Image
                src="/img/pro25.jpg"
                alt="display"
                fill
                className="object-cover"
              />
              {activeImage && (
              <ImageModal
                src={activeImage}
                onClose={() => setActiveImage(null)}
              />
            )}
            </div>

            <div className="relative w-full h-75" onClick={() => setActiveImage("/img/pro26.jpg")}>
              <Image
                src="/img/pro26.jpg"
                alt="display"
                fill
                className="object-cover"
              />
              {activeImage && (
              <ImageModal
                src={activeImage}
                onClose={() => setActiveImage(null)}
              />
            )}
            </div>

            <div className="relative w-full h-81.25" onClick={() => setActiveImage("/img/pro27.jpg")}>
              <Image
                src="/img/pro27.jpg"
                alt="display"
                fill
                className="object-cover"
              />
              {activeImage && (
              <ImageModal
                src={activeImage}
                onClose={() => setActiveImage(null)}
              />
            )}
            </div>

            <div className="relative w-full h-81.25" onClick={() => setActiveImage("/img/pro28.jpg")}>
              <Image
                src="/img/pro28.jpg"
                alt="display"
                fill
                className="object-cover"
              />
              {activeImage && (
              <ImageModal
                src={activeImage}
                onClose={() => setActiveImage(null)}
              />
            )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="relative w-full h-85" onClick={() => setActiveImage("/img/banner1.jpg")}>
            <Image
              src="/img/banner1.jpg"
              alt="display"
              fill
              className="object-cover"
            />
            {activeImage && (
              <ImageModal
                src={activeImage}
                onClose={() => setActiveImage(null)}
              />
            )}
          </div>
          <div className="relative w-full h-85" onClick={() => setActiveImage("/img/serr.jpg")}>
            <Image
              src="/img/serr.jpg"
              alt="display"
              fill
              className="object-cover"
            />
            {activeImage && (
              <ImageModal
                src={activeImage}
                onClose={() => setActiveImage(null)}
              />
            )}
          </div>
          <div className="relative w-full h-85" onClick={() => setActiveImage("/img/abb.jpeg")}>
            <Image
              src="/img/abb.jpeg"
              alt="display"
              fill
              className="object-cover"
            />
            {activeImage && (
              <ImageModal
                src={activeImage}
                onClose={() => setActiveImage(null)}
              />
            )}
          </div>
          <div className="relative w-full h-85" onClick={() => setActiveImage("/img/abbs.jpg")}>
            <Image
              src="/img/abbs.jpg"
              alt="display"
              fill
              className="object-cover"
            />
            {activeImage && (
              <ImageModal
                src={activeImage}
                onClose={() => setActiveImage(null)}
              />
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-10 ">
          <div className="relative w-full h-100 md:h-162.5" onClick={() => setActiveImage("/img/pro35.jpeg")}>
            <Image
              src="/img/pro35.jpeg"
              alt="display"
              fill
              className="object-cover"
            />
            {activeImage && (
              <ImageModal
                src={activeImage}
                onClose={() => setActiveImage(null)}
              />
            )}
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="relative w-full h-75" onClick={() => setActiveImage("/img/pro32.jpg")}>
              <Image
                src="/img/pro32.jpg"
                alt="display"
                fill
                className="object-cover"
              />
              {activeImage && (
              <ImageModal
                src={activeImage}
                onClose={() => setActiveImage(null)}
              />
            )}
            </div>

            <div className="relative w-full h-75" onClick={() => setActiveImage("/img/pro34.jpg")}>
              <Image
                src="/img/pro34.jpg"
                alt="display"
                fill
                className="object-cover"
              />
              {activeImage && (
              <ImageModal
                src={activeImage}
                onClose={() => setActiveImage(null)}
              />
            )}
            </div>

            <div className="relative w-full h-81.25" onClick={() => setActiveImage("/img/pro33.jpg")}>
              <Image
                src="/img/pro33.jpg"
                alt="display"
                fill
                className="object-cover"
              />
              {activeImage && (
              <ImageModal
                src={activeImage}
                onClose={() => setActiveImage(null)}
              />
            )}
            </div>

            <div className="relative w-full h-81.25" onClick={() => setActiveImage("/img/pro36.jpg")}>
              <Image
                src="/img/pro36.jpg"
                alt="display"
                fill
                className="object-cover"
              />
              {activeImage && (
              <ImageModal
                src={activeImage}
                onClose={() => setActiveImage(null)}
              />
            )}
            </div>
          </div>
        </div>
      </div>

      <section className="relative w-full h-[40vh] md:h-screen overflow-hidden">
      <iframe
        ref={iframeRef}
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/bkC8gM6AVLM?enablejsapi=1&controls=1&modestbranding=1"
        title="YouTube video player"
        allow="fullscreen"
        allowFullScreen
      />

      <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
    </section>
    </div>
  );
};

export default ProjectsContent;
