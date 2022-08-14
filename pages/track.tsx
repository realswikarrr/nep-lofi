import Image from "next/image";
import Layout from "../components/layout/article";

const Tracks = ({ results, setCurrentVideo, setPlaying }: any) => {
  return (
    <Layout delay="0.7">
      <div className="grid scrollbar scrollbar-hide h-screen grid-cols-1 lg:grid-cols-4 gap-3 p-44 pb-0  pt-0 mt-5 overflow-y-scroll place-items-center overflow-x-hidden">
        {results &&
          results.map((video: any) => {
            return (
              <div key={video.id}>
                <Image
                  onClick={() => {
                    setCurrentVideo(video);
                    setPlaying(true);
                  }}
                  src={video?.snippet.thumbnails.standard.url}
                  alt={video?.snippet.title}
                  width={500}
                  height={300}
                  className="object-cover cursor-pointer"
                />
                <h1 className="text-white truncate w-60 overflow-hidden ">
                  {video.snippet.title}
                </h1>
              </div>
            );
          })}
      </div>
    </Layout>
  );
};

export default Tracks;
