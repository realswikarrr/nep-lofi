import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/main";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [currentVideo, setCurrentVideo] = useState<any>();
  const [playing, setPlaying] = useState(false);
  const [results, setResults] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const MY_PLAYLIST = process.env.NEXT_PUBLIC_YOUTUBE_PLAYLIST_ID;
    const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
    const REQUEST_URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${MY_PLAYLIST}&key=${YOUTUBE_API_KEY}&maxResults=10`;

    const fetchData = async () => {
      const response = await fetch(REQUEST_URL);
      const results = await response.json();
      setResults(results.items);
      setCurrentVideo(results.items[0]);
    };

    fetchData();
  }, []);

  return (
    <Layout
      id={currentVideo?.snippet.resourceId.videoId}
      playing={playing}
      loading={loading}
      setLoading={setLoading}
    >
      <Component
        {...pageProps}
        id={currentVideo?.snippet.resourceId.videoId}
        playing={playing}
        results={results}
        setPlaying={setPlaying}
        setCurrentVideo={setCurrentVideo}
        currentVideo={currentVideo}
        loading={loading}
      />
    </Layout>
  );
}

export default MyApp;
