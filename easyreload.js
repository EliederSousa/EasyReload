/**
 *  EasyReload.js
 *  
 *  Copyright (c) 2023, Elieder Sousa
 *  eliedersousa<at>gmail<dot>com
 *  
 *  Distributed under the MIT license.
 *  
 *  @date     28/06/23
 *  @version  v1.0
 *  
 *  @brief    A simple Javascript class to reload an HTML page every X seconds. Useful when your IDE does not provide live update. 
 *
 *  @example EasyReload.init( seconds );
 */
class EasyReload {
	static init( time ) {
		window._re = new Date().getTime();
		setInterval( function() {
			document.title = '* reload in ' + (time - ((new Date().getTime() - window._re) / 1000 >> 0)) + 's *';
		}, 1000);
		setTimeout( function() {			
			location.reload();
		}, time * 1000);
	}
}