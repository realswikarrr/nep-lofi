import Image from "next/image";
import Layout from "../components/layout/article";

const Tracks = ({ results, setCurrentVideo, setPlaying }: any) => {
  console.log(results);
  return (
    <Layout>
      <div className="mt-10 grid h-screen grid-cols-1 lg:grid-cols-4 gap-5 p-20 pt-4 overflow-y-scroll overflow-hidden place-items-center ">
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
                <h1 className="text-white truncate w-60 ">
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
