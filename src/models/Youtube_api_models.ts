// TypeScript interfaces for YouTube video and channel data

export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface Thumbnails {
  default: Thumbnail;
  medium: Thumbnail;
  high: Thumbnail;
  standard?: Thumbnail;
  maxres?: Thumbnail;
}

export interface Localized {
  title: string;
  description: string;
}

export interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  tags?: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: Localized;
  defaultLanguage?: string;
  defaultAudioLanguage?: string;
}

export interface ContentDetails {
  duration: string;
  dimension: string;
  definition: string;
  caption: string;
  licensedContent: boolean;
  contentRating: Record<string, unknown>;
  projection: string;
  regionRestriction?: {
    allowed: string[];
  };
}

export interface Statistics {
  viewCount: string;
  likeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface ChannelThumbnails {
  default: Thumbnail;
  medium: Thumbnail;
  high: Thumbnail;
}

export interface ChannelLocalized {
  title: string;
  description: string;
}

export interface ChannelSnippet {
  id: string;
  title: string;
  description: string;
  customUrl: string;
  publishedAt: string;
  thumbnails: ChannelThumbnails;
  localized: ChannelLocalized;
  country?: string;
  defaultLanguage?: string;
  defaultAudioLanguage?: string;
}

export interface ChannelContentDetails {
  relatedPlaylists: {
    likes: string;
    uploads: string;
  };
}

export interface ChannelStatistics {
  viewCount: string;
  subscriberCount: string;
  hiddenSubscriberCount: boolean;
  videoCount: string;
}

export interface ChannelData {
  kind: string;
  etag: string;
  snippet: ChannelSnippet;
  contentDetails: ChannelContentDetails;
  statistics: ChannelStatistics;
}

interface YouTubeFeedData {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  contentDetails: ContentDetails;
  statistics: Statistics;
  channelData: ChannelData;
}
export interface YouTubeSearchData {
  kind: string;
  etag: string;
  id: {
    videoId: string;
  };
  snippet: Snippet;
  contentDetails: ContentDetails;
  statistics: Statistics;
  channelData: ChannelData;
}
export default YouTubeFeedData;
