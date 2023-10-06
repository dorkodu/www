export default function SpotifyEmbed() {
  return (
    <iframe
      style={{ borderRadius: "12px" }}
      src="https://open.spotify.com/embed/playlist/1JjHkm5GrtUt6bGogDce5e?utm_source=generator&theme=0"
      width="100%"
      height="400"
      frameBorder="0"
      allowFullScreen={false}
      title="Spotify"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"></iframe>
  );
}
