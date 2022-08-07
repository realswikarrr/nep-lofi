import Image from "next/image";

const Tracks = ({ results, setCurrentVideo, setPlaying }: any) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-20 place-items-center h-screen overflow-scroll">
      {results &&
        results.map((video: any) => {
          return (
            <div key={video.id} className="flex flex-col">
              <Image
                onClick={() => {
                  setCurrentVideo(video);
                  setPlaying(true);
                }}
                src={video.snippet.thumbnails.maxres.url}
                alt={video.snippet.title}
                width={500}
                height={300}
                className="object-cover cursor-pointer"
              />
              <p className="text-white truncate w-60">{video.snippet.title}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Tracks;
