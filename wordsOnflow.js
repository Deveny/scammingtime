//SCRIPT 
import { Flow } from "/three/examples/jsm/modifiers/CurveModifier.js";
  //banner
    
const curve = new THREE.CatmullRomCurve3([new THREE.Vector3( 200, 0, -200 ),
                      new THREE.Vector3( 275, 0, -0 ),
	                   new THREE.Vector3( 200, 0, 200 ),
                      	new THREE.Vector3( 0, 0, 275 ),
	                   new THREE.Vector3( -200, 0,200 ),
                      	new THREE.Vector3( -275, 0,0 ),
	                   new THREE.Vector3( -200, 0, -200 ),
                      	new THREE.Vector3( 0, 0, -275 )

]);
curve.curveType = "centripetal";
curve.closed = true;
const loader = new THREE.FontLoader();
loader.load( "three/examples/fonts/helvetiker_regular.typeface.json", function (
					font){

const geometry = new THREE.TextBufferGeometry( "sure thing", {
						font: font,
						size:100,
						height: 1,
						curveSegments:2000,
						bevelEnabled: false,
						bevelThickness: 0.02,
						bevelSize: 0.01,
						bevelOffset: 0,
						bevelSegments: 50,			} );

					geometry.rotateX( Math.PI );

					const material = new THREE.MeshStandardMaterial( {
						color: 0xFFB6C1,
                        opacity:1,
                       // depthTest: false, depthWrite:false
					} );

					const objectToCurve = new THREE.Mesh( geometry, material );

					flow = new Flow( objectToCurve );
					flow.updateCurve( 0, curve );
					scene.add( flow.object3D );

				} );
                
                
        //INSIDE ANIMATE-LOOP
        					flow.moveAlongCurve( 0.001 );
