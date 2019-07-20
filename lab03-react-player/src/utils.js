import loadScript from 'load-script'
import merge from 'deepmerge'

import { DEPRECATED_CONFIG_PROPS } from './props'

export function randomString () {
  return Math.random().toString(36).substr(2, 5)
}

export function queryString (object) {
  return Object
    .keys(object)
    .map(key => `${key}=${object[key]}`)
    .join('&')
}

// Util function to load an external SDK
// or return the SDK if it is already loaded
const resolves = {}
export function getLoad (url, sdkGlobal, sdkReady = null, isLoaded = () => true, fetchScript = loadScript) {
  if (window[sdkGlobal] && isLoaded(window[sdkGlobal])) {
    return Promise.resolve(window[sdkGlobal])
  }
  return new Promise((resolve, reject) => {
    // If we are already loading the SDK, add the resolve
    // function to the existing array of resolve functions
    if (resolves[url]) {
      resolves[url].push(resolve)
      return
    }
    resolves[url] = [resolve]
    const onLoaded = sdk => {
      // When loaded, resolve all pending promises
      resolves[url].forEach(resolve => resolve(sdk))
    }
    if (sdkReady) {
      const previousOnReady = window[sdkReady]
      window[sdkReady] = function () {
        if (previousOnReady) previousOnReady()
        onLoaded(window[sdkGlobal])
      }
    }
    fetchScript(url, err => {
      if (err) reject(err)
      if (!sdkReady) {
        onLoaded(window[sdkGlobal])
      }
    })
  })
}

export function getConfig (props, defaultProps, showWarning) {
  let config = merge(defaultProps.config, props.config)
  for (let p of DEPRECATED_CONFIG_PROPS) {
    if (props[p]) {
      const key = p.replace(/Config$/, '')
      config = merge(config, { [key]: props[p] })     
    }
  }
  return config
}

export function omit (object, ...arrays) {
  const omitKeys = [].concat(...arrays)
  const output = {}
  const keys = Object.keys(object)
  for (let key of keys) {
    if (omitKeys.indexOf(key) === -1) {
      output[key] = object[key]
    }
  }
  return output
}

export function callPlayer (method, ...args) {
  // Util method for calling a method on this.player
  // but guard against errors and console.warn instead
  if (!this.player || !this.player[method]) {
    let message = `PlayerContainer: ${this.constructor.displayName} player could not call %c${method}%c – `
    if (!this.player) {
      message += 'The player was not available'
    } else if (!this.player[method]) {
      message += 'The method was not available'
    }
    console.warn(message, 'font-weight: bold', '')
    return null
  }
  return this.player[method](...args)
}

export function isObject (val) {
  return val !== null && typeof val === 'object'
}

// Deep comparison of two objects but ignoring
// functions, for use in shouldComponentUpdate
export function isEqual (a, b) {
  if (typeof a === 'function' && typeof b === 'function') {
    return true
  }
  if (a instanceof Array && b instanceof Array) {
    if (a.length !== b.length) {
      return false
    }
    for (let i = 0; i !== a.length; i++) {
      if (!isEqual(a[i], b[i])) {
        return false
      }
    }
    return true
  }
  if (isObject(a) && isObject(b)) {
    if (Object.keys(a).length !== Object.keys(b).length) {
      return false
    }
    for (let key of Object.keys(a)) {
      if (!isEqual(a[key], b[key])) {
        return false
      }
    }
    return true
  }
  return a === b
}

export function isMediaStream (url) {
  return (
    typeof window !== 'undefined' &&
    typeof window.MediaStream !== 'undefined' &&
    url instanceof window.MediaStream
  )
}
