"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { MediaVideoItem } from "@/types/site";
import { Button } from "@/components/ui/button";

interface MediaVideoShowcaseProps {
  videos: MediaVideoItem[];
}

export default function MediaVideoShowcase({ videos }: MediaVideoShowcaseProps) {
  const [activeVideo, setActiveVideo] = useState<MediaVideoItem | null>(null);
  const [videoLoadError, setVideoLoadError] = useState(false);

  useEffect(() => {
    setVideoLoadError(false);
  }, [activeVideo]);

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {videos.map((video) => (
          <article
            key={video.url}
            className="group overflow-hidden rounded-[1.75rem] border border-emerald-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <button
              type="button"
              onClick={() => setActiveVideo(video)}
              className="relative block w-full text-left"
              aria-label={`${video.title} ভিডিও দেখুন`}
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-slate-950/35" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-2xl text-emerald-700 shadow-lg">
                    ▶
                  </span>
                </div>
              </div>
            </button>

            <div className="space-y-3 p-6">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold text-slate-900">{video.title}</h3>
                <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">{video.duration}</span>
              </div>
              <p className="text-sm leading-7 text-slate-600">{video.description}</p>
              <Button variant="outline" onClick={() => setActiveVideo(video)}>
                ভিডিও দেখুন
              </Button>
            </div>
          </article>
        ))}
      </div>

      {activeVideo ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-3 sm:p-6">
          <div className="w-full max-w-4xl overflow-hidden rounded-2xl border border-white/20 bg-slate-900 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/15 px-4 py-3 text-white">
              <h3 className="text-sm font-semibold sm:text-base">{activeVideo.title}</h3>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="rounded-md border border-white/25 px-3 py-1 text-xs hover:bg-white/10"
              >
                বন্ধ করুন
              </button>
            </div>
            <div className="relative aspect-video w-full bg-black">
              {activeVideo.videoFile && !videoLoadError ? (
                <video
                  controls
                  autoPlay
                  playsInline
                  poster={activeVideo.thumbnail}
                  className="h-full w-full"
                  onError={() => setVideoLoadError(true)}
                >
                  <source src={activeVideo.videoFile} type="video/mp4" />
                  আপনার ব্রাউজার ভিডিও প্লে সাপোর্ট করে না।
                </video>
              ) : (
                <div className="flex h-full w-full items-center justify-center p-6 text-center text-slate-200">
                  <div className="space-y-3">
                    <p className="text-sm sm:text-base">
                      ভিডিও ফাইল পাওয়া যায়নি বা প্লে করা যাচ্ছে না।
                    </p>
                    <p className="text-xs text-slate-400">
                      Facebook Reel embed restricted হলে local mp4 file লাগবে।
                    </p>
                    <Link href={activeVideo.url} target="_blank" rel="noreferrer">
                      <Button variant="outline" className="border-white/35 bg-white/10 text-white hover:bg-white/20">
                        Facebook এ ভিডিও দেখুন
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
