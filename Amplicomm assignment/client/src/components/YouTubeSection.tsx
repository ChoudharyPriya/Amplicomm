import { useState } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function YouTubeSection() {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayVideo = () => {
    setShowVideo(true);
  };

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Button 
            size="lg"
            className="bg-primary hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold text-white transition-colors"
          >
            Lorem ipsum
          </Button>
        </div>
        
        {!showVideo ? (
          <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-2xl cursor-pointer" onClick={handlePlayVideo}>
            <div className="aspect-video">
              <div className="relative w-full h-full bg-gray-800 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675"
                  alt="Health Education Video Thumbnail"
                  className="w-full h-full object-cover opacity-75"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="w-20 h-20 bg-red-600 hover:bg-red-700 rounded-full shadow-lg transition-all transform hover:scale-105"
                    onClick={handlePlayVideo}
                  >
                    <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/hBEKGBLAB80?autoplay=1"
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Health Education Video"
            />
          </div>
        )}
      </div>
    </section>
  );
}
