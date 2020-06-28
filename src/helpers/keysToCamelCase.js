
import { camelCase, isObject, isPlainObject, mapKeys, mapValues } from 'lodash-es';

export function keysToCamelCase(obj) {
  return recursiveCaseTransform(camelCase, obj);
}

function recursiveCaseTransform(transformFn, value) {
  if (!isObject(value)) {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map((iValue) => recursiveCaseTransform(transformFn, iValue));
  }

  const camelCaseObj = mapKeys(value, (_, key) => transformFn(key));

  return mapValues(camelCaseObj, (iValue) => {
    if (isPlainObject(iValue)) {
      return recursiveCaseTransform(transformFn, iValue);
    }

    if (Array.isArray(iValue)) {
      return iValue.map((jValue) => recursiveCaseTransform(transformFn, jValue));
    }

    return iValue;
  });
}
