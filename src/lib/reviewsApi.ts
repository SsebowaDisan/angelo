export interface GoogleReviewAuthor {
  displayName: string;
  uri: string;
  photoUri: string;
}

export interface GoogleReview {
  id: string;
  rating: number;
  text: string;
  relativePublishTimeDescription: string;
  publishTime: string;
  googleMapsUri: string;
  author: GoogleReviewAuthor;
}

export interface ReviewsApiResponse {
  provider: 'google';
  businessName: string;
  rating: number;
  totalReviews: number;
  reviewsUrl: string;
  reviews: GoogleReview[];
}

interface ErrorResponse {
  message?: string;
}

export async function fetchGoogleReviews(): Promise<ReviewsApiResponse> {
  const response = await fetch('/api/reviews');

  let data: ReviewsApiResponse | ErrorResponse | null = null;
  try {
    data = (await response.json()) as ReviewsApiResponse | ErrorResponse;
  } catch {
    data = null;
  }

  if (!response.ok) {
    throw new Error(data?.message ?? 'Google reviews konden niet geladen worden.');
  }

  return data as ReviewsApiResponse;
}
