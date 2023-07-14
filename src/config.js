import Configstore from 'configstore';

export const configstore = new Configstore('muzovano');

export default {
  CANVAS_TOP_PADDING: 6,
  CANVAS_BOTTOM_PADDING: 4,
  CANVAS_FRAME_STROKE_WIDTH: 0.5,
  CANVAS_BG: '#ffffff',
  CANVAS_SIZE: 1000,
  COVER_SIZE: 1000 / 600,
  SHADOW_SIZE: 1.5,
  FONT_FAMILY: 'NeutralFace',
  FONT_FAMILY2: 'NeutralFace-Bold',
  FONT_TTF_PATH: 'fonts/NeutralFace.ttf',
  FONT_TTF_PATH2: 'fonts/NeutralFace-Bold.ttf',
  PREVIEW_FOLDER_PATH: 'preview',
  SPOTIFY_FOLDER_PATH: 'spotifyData',
  VIBRANT_ORDER: [
    'Vibrant',
    'DarkVibrant',
    'LightVibrant',
    'Muted',
    'DarkMuted',
    'LightMuted',
  ],
  DEFAULT_COLOR_ACCENT: 1,
  DEFAULT_COLOR_SECONDARY: 5,
  DEFAULT_COLOR_START: 1,
  DEFAULT_COLOR_END: 5,
  GRADIENT_DEFAULT_START: 1,
  GRADIENT_DEFAULT_END: 5,
  COLORS: [
    'accent',
    'secondary',
    'start',
    'end',
    'text',
    'logo',
    'frame',
    'vignette',
    'shadow',
  ],
};
