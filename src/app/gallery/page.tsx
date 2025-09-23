import { SpeedInsights } from "@vercel/speed-insights/next"
export default function GalleryPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-[#181818]">
      <h1 className="text-4xl font-bold">Gallery Page</h1>
      <p className="mt-4 text-lg">Check out our stunning gallery.</p>
      <SpeedInsights />
    </div>
  );
}