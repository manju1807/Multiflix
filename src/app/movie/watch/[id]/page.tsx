import VideoPlayer from '@/components/containers/movies/videoplayer';

export default async function Info({ params }: any) {
  const id = params.id;

  return <VideoPlayer id={id} />;
}
