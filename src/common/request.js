import config from "./config.js";

export default{
	config:{
		baseUrl: config.webUrl,
		data: {},
		method: "get"
	},
	request(options = {}){
		// console.log(this.config.baseUrl + ' is working!');
    const axios = require('axios');

    options.header = options.header || {
      'Content-Type':'application/json',
      'Authorization': 'none'
    };
		options.method = options.method || this.config.method;
		options.url = this.config.baseUrl+options.url;
		return axios(options);
	},
	get(url,data,options={}){
		options.url = url;
		options.params = data;
		options.method = 'get';
		return this.request(options);
	},
	post(url,data,options={}){
		options.url = url;
		options.data = data;
		options.method = 'post';
		return this.request(options);
	}
}