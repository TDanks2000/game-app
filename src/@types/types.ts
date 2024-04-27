export type IGDBImageSize =
  | 'original'
  | 'cover_small'
  | 'screenshot_med'
  | 'cover_big'
  | 'logo_med'
  | 'screenshot_big'
  | 'screenshot_huge'
  | 'thumb'
  | 'micro'
  | '720p'
  | '1080p';

export interface Provider {
  label: string;
  value: string;
}

export interface InfoProps {
  error: Error | null;
  isPending: boolean;
}
