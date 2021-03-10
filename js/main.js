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
panorama10 = new PANOLENS.ImagePanorama( 'images/360_0034_Stitch_XHC.jpg' );	//lépcsőház fent
panorama11 = new PANOLENS.ImagePanorama( 'images/360_0035_Stitch_XHC.jpg' );	//emeleti szoba
panorama12 = new PANOLENS.ImagePanorama( 'images/360_0037_Stitch_XHC.jpg' );	//emeleki gy szoba
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
	case "10": viewer.add(panorama10); break;
	case "11": viewer.add(panorama11); break;
	case "12": viewer.add(panorama12); break;
}
viewer.add( panorama6,panorama1,panorama2,panorama3,panorama4,panorama5,panorama7,panorama8,panorama9,panorama10,panorama11,panorama12 );

panorama1.link( panorama2, new THREE.Vector3( -1091.24, -822.89, 5000.00 ));
panorama1.link( panorama4, new THREE.Vector3( -5000.00, -566.15, 1080.05 ));

panorama2.link( panorama1, new THREE.Vector3( -5000.00, -431.78, 676.02 ));

panorama4.link( panorama1, new THREE.Vector3( 5000.00, -117.38, 1452.50 ));
panorama4.link( panorama3, new THREE.Vector3( 3915.68, -582.92, -5000.00 ));
panorama4.link( panorama5, new THREE.Vector3( -773.69, -1008.60, 5000.00 ));
panorama4.link( panorama6, new THREE.Vector3( -5000.00, -956.37, -454.42 ));

panorama3.link( panorama4, new THREE.Vector3( -5000.00, -702.79, 708.70 ));

panorama5.link( panorama4, new THREE.Vector3( -5000.00, -942.63, -364.44 ));

panorama6.link( panorama9, new THREE.Vector3( 5000.00, 1699.45, -940.30 ));
panorama6.link( panorama7, new THREE.Vector3( 5000.00, -705.13, 3160.58 ));
panorama6.link( panorama4, new THREE.Vector3( -5000.00, -513.70, 3566.34 ));
panorama6.link( panorama8, new THREE.Vector3( 1713.39, -348.63, -5000.00 ));

panorama7.link( panorama6, new THREE.Vector3( -1020.32, -818.63, -5000.00 ));
panorama7.link( panorama9, new THREE.Vector3( 2801.82, 1579.60, -5000.00 ));

panorama8.link( panorama6, new THREE.Vector3( 5000.00, -38.70, 839.03 ));

panorama9.link( panorama6, new THREE.Vector3( 5000.00, -3940.62, 692.72 ));
panorama9.link( panorama10, new THREE.Vector3( 5000.00, -805.59, -1051.92 ));
panorama9.link( panorama11, new THREE.Vector3( 5000.00, 1120.76, 1303.32 ));
panorama9.link( panorama12, new THREE.Vector3( 5000.00, 1542.69, -265.72 ));

panorama10.link( panorama9, new THREE.Vector3( 5000.00, -3940.62, 692.72 ));
panorama10.link( panorama11, new THREE.Vector3( 5000.00, 1120.76, 1303.32 ));
panorama10.link( panorama12, new THREE.Vector3( 5000.00, 1542.69, -265.72 ));

panorama11.link( panorama10, new THREE.Vector3( 5000.00, 1120.76, 1303.32 ));

panorama12.link( panorama10, new THREE.Vector3( 5000.00, 1120.76, 1303.32 ));
	