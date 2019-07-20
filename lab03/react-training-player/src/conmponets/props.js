import PropTypes from 'prop-types'

const { string, bool, number, array, oneOfType, shape, object, func } = PropTypes

export const propTypes = {
  url: oneOfType([ string, array, object ]),
  playing: bool,
  loop: bool,
  controls: bool,
  volume: number,
  muted: bool,
  playbackRate: number,
  width: oneOfType([ string, number ]),
  height: oneOfType([ string, number ]),
  style: object,
  progressInterval: number,
  playsinline: bool,
  pip: bool,
  light: oneOfType([ bool, string ]),
  wrapper: oneOfType([
    string,
    func,
    shape({ render: func.isRequired })
  ]),
  config: shape({
    file: shape({
      attributes: object,
      tracks: array,
      forceVideo: bool,
      forceAudio: bool,
      forceHLS: bool,
      forceDASH: bool,
      hlsOptions: object,
      hlsVersion: string,
      dashVersion: string
    })
  }),
  onReady: func,
  onStart: func,
  onPlay: func,
  onPause: func,
  onBuffer: func,
  onBufferEnd: func,
  onEnded: func,
  onError: func,
}

export const defaultProps = {
  playing: false,
  loop: false,
  controls: false,
  volume: null,
  muted: false,
  playbackRate: 1,
  width: '640px',
  height: '360px',
  style: {},
  progressInterval: 1000,
  playsinline: false,
  pip: false,
  light: false,
  wrapper: 'div',
  config: {
    file: {
      attributes: {},
      tracks: [],
      forceVideo: false,
      forceAudio: false,
      forceHLS: false,
      forceDASH: false,
      hlsOptions: {},
      hlsVersion: '0.10.1',
      dashVersion: '2.9.2'
    }
  },
  onReady: function () {},
  onStart: function () {},
  onPlay: function () {},
  onPause: function () {},
  onBuffer: function () {},
  onBufferEnd: function () {},
  onEnded: function () {},
  onError: function () {}
}

export const DEPRECATED_CONFIG_PROPS = [
  'fileConfig'
]
