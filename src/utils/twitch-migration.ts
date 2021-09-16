export const tChannel = ({ data }) => data;

export const tVideo = ({ data }) => {
  const video = data[0];
  return {
    available_at: video.created_at,
    channel: {
      clip_count: 0,
      english_name: "Nabinya",
      id: "700682063",
      name: "Nabinya",
      org: "Independents",
      photo:
        "https://yt3.ggpht.com/SKXj1fShFZxPrc2hpGainswwrk5qEBa8zcAtE_OR8jCOL7sj3QfSD8GI0UDXqxO_i6e9nbzCQB4=s88-c-k-c0x00ffffff-no-rj-mo",
      subscriber_count: "0",
      type: "vtuber",
      video_count: "0",
    },
    clips: [],
    comments: [],
    description: video.description,
    duration: video.duration,
    end_actual: video.published_at,
    id: video.id,
    live_tl_count: { en: 11 },
    live_viewers: video.view_count,
    published_at: video.published_at,
    recommendations: [],
    start_actual: video.created_at,
    start_scheduled: video.created_at,
    status: video.type === "archive" ? "past" : "",
    title: video.title,
    topic_id: "",
    type: video.type,
  };
};
