export interface ResponsiveImageOptions {
  sizes?: string;
  widths?: number[];
}

const DEFAULT_WIDTHS = [480, 768, 1080, 1600, 2400];

function buildUnsplashSrcSet(src: string, widths: number[]) {
  try {
    const sourceUrl = new URL(src);

    if (!sourceUrl.hostname.includes('images.unsplash.com')) {
      return undefined;
    }

    return widths
      .map((width) => {
        const variantUrl = new URL(sourceUrl.toString());
        variantUrl.searchParams.set('w', String(width));
        return `${variantUrl.toString()} ${width}w`;
      })
      .join(', ');
  } catch {
    return undefined;
  }
}

export function getResponsiveImageProps(
  src: string,
  options: ResponsiveImageOptions = {},
) {
  const { sizes, widths = DEFAULT_WIDTHS } = options;
  const srcSet = buildUnsplashSrcSet(src, widths);

  return {
    ...(srcSet ? { srcSet } : {}),
    ...(sizes ? { sizes } : {}),
  };
}
