import { WINDOW_RESIZE, TOGGLE_TRIANGLE, TOGGLE_SQUARE, TOGGLE_CIRCLE, TOGGLE_PAGE01, TOGGLE_PAGE02, TOGGLE_PAGE03, TOGGLE_LOADER, TOGGLE_ABOUT, SET_PALETTE } from '../constants';
import { log } from 'ruucm-util';

export function windowResize({ width, height }) {

  log('windowResize!!')
  log('width', width)
  log('height', height)

  const w = width >= height ? 100 : width * 100 / height;
  const h = height > width ? 100 : height * 100 / width;

  return {
    type: WINDOW_RESIZE,
    payload: { width, height, w, h },
  };

}

function toggleShape(type) {
  return {
    type: type
  };
}

export let toggleTriangle = () => toggleShape(TOGGLE_TRIANGLE);
export let toggleSquare = () => toggleShape(TOGGLE_SQUARE);
export let toggleCircle = () => toggleShape(TOGGLE_CIRCLE);
export let togglePage01 = () => toggleShape(TOGGLE_PAGE01);
export let togglePage02 = () => toggleShape(TOGGLE_PAGE02);
export let togglePage03 = () => toggleShape(TOGGLE_PAGE03);
export let toggleLoader = () => toggleShape(TOGGLE_LOADER);

export function toggleAbout() {
  return { type: TOGGLE_ABOUT };
}

export function setPalette(palette) {
  return {
    type: SET_PALETTE,
    palette
  };
}

const keyMap = {
  a: toggleCircle,
  s: toggleTriangle,
  d: toggleSquare,
  u: () => setPalette('JAZZY'),
  i: () => setPalette('AWAKE'),
  o: () => setPalette('SLEEPY'),
  p: () => setPalette('ZEN'),
};

export function triggerKeyboardEvents(e) {
  const key = e.key.toLowerCase();
  const action = keyMap[key];
  return action ? action() : {};
}
