import ReactPlayer from "react-player/youtube";

const Player = (props: any) => {
  const { id, playing, loading, setLoading } = props;
  console.log(loading);
  const url = `https://www.youtube.com/watch?v=${id}`;

  return (
    <div className="absolute top-0 left-0 invisible -z-10">
      <ReactPlayer
        url={url}
        playing={playing}
        width="100%"
        height="100%"
        onBuffer={() => setLoading(true)}
        onBufferEnd={() => setLoading(false)}
      />
    </div>
  );
};

export default Player;
