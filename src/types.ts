enum GiantBombStatus {
  OK = 1,
  ERROR_INVALID_API_KEY = 100,
  ERROR_OBJECT_NOT_FOUND = 101,
  ERROR_URL_FORMAT = 102,
  ERROR_JSONP_REQUIRES_CALLBACK = 103,
  ERROR_FILTER = 104,
  ERROR_SUBSCRIBER_ONLY_VIDEO = 105
}

interface Image {
  icon_url: string;
  medium_url: string;
  screen_url: string;
  screen_large_url: string;
  small_url: string;
  super_url: string;
  thumb_url: string;
  tiny_url: string;
  original_url: string;
  image_tags: string;
}

interface ImageTags {
  api_detail_url: string;
  name: string;
  total: number;
}

interface Rating {
  api_detail_url: string;
  id: number;
  name: string;
}

interface Platform {
  api_detail_url: string;
  id: number;
  name: string;
  site_detail_url: string;
  abbreviation: string
}

interface GiantBombResponse<T> {
  status_code: GiantBombStatus | number;
  error: string;
  number_of_total_results: number;
  number_of_page_results: number;
  limit: number;
  offset: number;
  results: (T)[] | null;
  version: string;
}

interface GiantBombGamesList {
  aliases?: string | null;
  api_detail_url: string;
  date_added: string;
  date_last_updated: string;
  deck: string;
  description: string | null;
  expected_release_day?: string | null;
  expected_release_month?: string | null;
  expected_release_quarter?: number | null;
  expected_release_year?: number | null;
  guid: string;
  id: number;
  image: Image | null;
  image_tags?: Array<ImageTags | null> | null;
  name: string;
  number_of_user_reviews: number;
  original_game_rating?: Rating[] | null;
  original_release_date?: string | null;
  platforms?: Platform[] | null;
  site_detail_url: string;
  resource_type: string;
}

type GiantBombSearchResponse = GiantBombResponse<GiantBombGamesList>;
