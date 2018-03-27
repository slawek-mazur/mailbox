// @flow

class Api {
  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'dataType': 'json',
    }
  }

  static get(route) {
    return this.xhr(route, null, 'GET');
  }

  static patch(route, params) {
    return this.xhr(route, Api.asJson(params), 'PATCH');
  }

  static post(route, params) {
    return this.xhr(route, Api.asFormData(params), 'POST', {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'});
  }

  static delete(route, params) {
    return this.xhr(route, params, 'DELETE');
  }

  static xhr(route, params, verb, headers) {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const host = 'https://stricte.io/inbox/';
    const token = '9b1b7253-68d4-4da9-9791-214890d60442';
    const url = `${proxy}${host}${route}?token=${token}`;

    let options = Object.assign({method: verb}, params ? {body: params} : null);
    options.headers = {...Api.headers(), ...headers};
    return fetch(url, options).then(resp => {

      let json = resp.json().catch(function (err) {
        console.info(err.message);
        return '';
      });

      if (resp.ok) {
        return json
      }
      return json.then(err => {
        throw err
      });
    });
  }

  static asJson(params) {
    return JSON.stringify(params);
  }

  static asFormData(params) {
    return Object.keys(params).map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    }).join('&');
  }
}

export default Api
