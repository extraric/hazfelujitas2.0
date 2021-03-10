const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const cam = urlParams.get('cam');
console.log(cam);
var panorama1, panorama2, panorama3, panorama4, panorama5, panorama6, panorama7, panorama8, panorama9, viewer;
panorama1 = new PANOLENS.ImagePanorama( 'images/360_0041_Stitch_XHC.jpg' );	//nappali
panorama2 = new PANOLENS.ImagePanorama( 'images/360_0042_Stitch_XHC.jpg' );	//hálószoba
panorama3 = new PANOLENS.ImagePanorama( 'images/360_0039_Stitch_XHC.jpg' );	//fürdőszoba
panorama4 = new PANOLENS.ImagePanorama( 'images/360_0040_Stitch_XHC.jpg' );	//előszoba
panorama5 = new PANOLENS.ImagePanorama( 'images/360_0038_Stitch_XHC.jpg' );	//szoba
panorama6 = new PANOLENS.ImagePanorama( 'images/360_0031_Stitch_XHC.jpg' );	//előtér
panorama7 = new PANOLENS.ImagePanorama( 'images/360_0029_Stitch_XHC.jpg' );	//konyha
panorama8 = new PANOLENS.ImagePanorama( 'images/360_0032_Stitch_XHC.jpg' );	//kisszoba
panorama9 = new PANOLENS.ImagePanorama( 'images/360_0033_Stitch_XHC.jpg' );	//lépcsőház
viewer = new PANOLENS.Viewer({ output: 'console' });
switch(urlParams.get('cam')){
	case "1": viewer.add(panorama1); break;
	case "2": viewer.add(panorama2); break;
	case "3": viewer.add(panorama3); break;
	case "4": viewer.add(panorama4); break;
	case "5": viewer.add(panorama5); break;
	case "6": viewer.add(panorama6); break;
	case "7": viewer.add(panorama7); break;
	case "8": viewer.add(panorama8); break;
	case "9": viewer.add(panorama9); break;
}
viewer.add( panorama6,panorama1,panorama2,panorama3,panorama4,panorama5,panorama7,panorama8,panorama9 );

// Pair
panorama7.link( panorama6, new THREE.Vector3( -1020.32, -818.63, -5000.00 ));
panorama7.link( panorama9, new THREE.Vector3( 2801.82, 1579.60, -5000.00 ));


panorama6.link( panorama9, new THREE.Vector3( 5000.00, 1699.45, -940.30 ));
panorama6.link( panorama7, new THREE.Vector3( 5000.00, -705.13, 3160.58 ));
panorama6.link( panorama4, new THREE.Vector3( -5000.00, -513.70, 3566.34 ));
panorama6.link( panorama8, new THREE.Vector3( 1713.39, -348.63, -5000.00 ));
	