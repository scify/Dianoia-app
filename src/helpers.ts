import {URLSearchParams} from "@angular/http";

export class Helpers {
  static getURLParam(paramName) {
    const params = new URLSearchParams(window.location.search);
    let tokenParamArr = params.paramsMap.get("?" + paramName) ? params.paramsMap.get("?" + paramName) : params.paramsMap.get(paramName);
    if (!tokenParamArr)
      tokenParamArr = [];
    let tokenParam = null;
    if (tokenParamArr.length)
      tokenParam = tokenParamArr[0];
    return tokenParam;
  }
}
