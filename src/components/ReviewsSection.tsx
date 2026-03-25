import { motion } from 'motion/react';
import { ExternalLink, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import { customerReviews, googleReviewsUrl } from '../data/reviewsData';
import { fetchGoogleReviews, type GoogleReview } from '../lib/reviewsApi';

interface ReviewCardData {
  id: string;
  name: string;
  text: string;
  rating: number;
  meta: string;
  authorUri?: string;
  authorPhotoUri?: string;
}

export function ReviewsSection() {
  const appleEase = [0.28, 0, 0.4, 1] as const;
  const [reviewsUrl, setReviewsUrl] = useState(googleReviewsUrl);
  const [businessName, setBusinessName] = useState('Angelo Renovates');
  const [averageRating, setAverageRating] = useState<number | null>(null);
  const [totalReviews, setTotalReviews] = useState<number | null>(null);
  const [isLiveGoogle, setIsLiveGoogle] = useState(false);
  const [reviews, setReviews] = useState<ReviewCardData[]>(
    customerReviews.map((review) => ({
      id: review.id,
      name: review.name,
      text: review.text,
      rating: review.rating,
      meta: review.location,
    })),
  );

  useEffect(() => {
    let isCancelled = false;

    async function loadReviews() {
      try {
        const data = await fetchGoogleReviews();

        if (isCancelled || data.reviews.length === 0) {
          return;
        }

        setReviewsUrl(data.reviewsUrl || googleReviewsUrl);
        setBusinessName(data.businessName || 'Angelo Renovates');
        setAverageRating(data.rating);
        setTotalReviews(data.totalReviews);
        setIsLiveGoogle(true);
        setReviews(
          data.reviews.map((review: GoogleReview) => ({
            id: review.id,
            name: review.author.displayName,
            text: review.text,
            rating: review.rating,
            meta: review.relativePublishTimeDescription || 'Google review',
            authorUri: review.author.uri,
            authorPhotoUri: review.author.photoUri,
          })),
        );
      } catch {
        if (isCancelled) {
          return;
        }

        setReviewsUrl(googleReviewsUrl);
        setIsLiveGoogle(false);
      }
    }

    loadReviews();

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <section
      className="py-32 px-6"
      style={{
        background: '#F5F5F7',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: appleEase }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-5">
            {[...Array(5)].map((_, index) => (
              <Star key={index} size={22} className="text-yellow-500 fill-yellow-500" />
            ))}
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              letterSpacing: '-0.04em',
              color: '#000',
              marginBottom: '1rem',
            }}
          >
            Wat klanten zeggen
          </h2>
          <p
            style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
              color: 'rgba(0, 0, 0, 0.5)',
            }}
          >
            Tevreden klanten zijn mijn beste referentie
          </p>

          {isLiveGoogle ? (
            <p
              className="mt-4"
              style={{
                fontSize: '0.98rem',
                color: 'rgba(0, 0, 0, 0.62)',
                fontWeight: 500,
              }}
            >
              Live Google reviews voor {businessName}
            </p>
          ) : null}

          {averageRating !== null && totalReviews !== null ? (
            <p
              className={isLiveGoogle ? 'mt-2' : 'mt-4'}
              style={{
                fontSize: '0.98rem',
                color: 'rgba(0, 0, 0, 0.62)',
                fontWeight: 500,
              }}
            >
              Google score: {averageRating.toFixed(1)} / 5 op basis van {totalReviews} reviews
            </p>
          ) : null}

          <motion.a
            href={reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, ease: appleEase }}
            className="inline-flex items-center gap-2 mt-8 px-5 py-3 rounded-full bg-white text-black hover:text-yellow-600 transition-colors duration-300"
            style={{
              border: '1px solid rgba(0, 0, 0, 0.08)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
              fontSize: '0.95rem',
              fontWeight: 600,
              letterSpacing: '-0.01em',
            }}
          >
            <span>Bekijk alle reviews op Google</span>
            <ExternalLink size={16} />
          </motion.a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.article
              key={review.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: appleEase }}
              className="p-8 rounded-3xl"
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(0, 0, 0, 0.06)',
              }}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    size={20}
                    className="text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>

              <p
                className="mb-6"
                style={{
                  fontSize: '1.0625rem',
                  lineHeight: 1.7,
                  color: 'rgba(0, 0, 0, 0.7)',
                }}
              >
                "{review.text}"
              </p>

              <div>
                {review.authorUri ? (
                  <a
                    href={review.authorUri}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 hover:text-yellow-600 transition-colors duration-300"
                    style={{
                      fontSize: '1rem',
                      color: '#000',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {review.authorPhotoUri ? (
                      <img
                        src={review.authorPhotoUri}
                        alt={review.name}
                        className="w-10 h-10 rounded-full object-cover"
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                      />
                    ) : null}
                    <span>{review.name}</span>
                  </a>
                ) : (
                  <p
                    style={{
                      fontSize: '1rem',
                      color: '#000',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {review.name}
                  </p>
                )}
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'rgba(0, 0, 0, 0.5)',
                  }}
                >
                  {review.meta}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
