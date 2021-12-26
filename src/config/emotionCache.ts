import { default as createCache } from "@emotion/cache";
export { CacheProvider, type EmotionCache } from "@emotion/react";

export const createEmotionCache = () => createCache({ key: "css" });