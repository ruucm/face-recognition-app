import { WINDOW_RESIZE, SUBMIT_TEST, SUBMIT_URL } from '../constants';
import { log } from 'ruucm-util';

export function windowResize({ width, height }) {
  const w = width >= height ? 100 : width * 100 / height;
  const h = height > width ? 100 : height * 100 / width;
  return {
    type: WINDOW_RESIZE,
    payload: { width, height, w, h },
  };
}

export function submitTest(yellowSize) {
  return {
    type: SUBMIT_TEST,
    payload: { yellowSize },
  };
}

export function submitUrl(isSubmitted) {
  return {
    type: SUBMIT_URL,
    payload: { isSubmitted },
  };
}
