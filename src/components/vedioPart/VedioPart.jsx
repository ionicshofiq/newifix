const VedioPart = () => {
  return (
    <div className="player-wrapper max-w-[1200px] mx-auto h-[700px] my-10">
      <iframe
        width="100%"
        height="700px"
        src="https://www.youtube.com/embed/cBYGR8CGDd0?si=BoZYE8-TPuOzUhkK"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen></iframe>
    </div>
  );
};

export default VedioPart;
