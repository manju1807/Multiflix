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