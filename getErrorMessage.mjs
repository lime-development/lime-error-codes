import errorsJson from './errors.json' assert { type: 'json' };

export function getErrorMessage(code, lang = 'en') {
  return errorsJson[code]?.[lang] || errorsJson["UNKNOWN"]?.[lang] || `Unknown error (${code})`;
}
