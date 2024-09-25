"use server";
import { API_KEY } from "@/config/urls";
import { env } from "@/env.mjs";
import { getInfoURL } from "@/config/urls";

export const FetchMovieInfo = async (data: any) => {
  try {
    const fetchPromises = data.results.map(async (element: any) => {
      const link = `${getInfoURL(element.id)}`;
      await fetch(link, { next: { revalidate: 21600 } });
    });

    await Promise.all(fetchPromises);
  } catch (error) {
    console.error("Error occurred while pre-fetching video links:", error);
  }
};

export async function fetchCarousalData(type: string) {
  try {
    const url = new URL(
      `https://sup-proxy.zephex0-f6c.workers.dev/api-json?url=https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
    );
    const response = await fetch(url.toString(), {
      next: { revalidate: 60 * 60 * 24 * 7 },
    });
    if (!response.ok) throw new Error("Failed to fetch data");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
}
