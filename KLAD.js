
        
var superegg = new THREE.Shape();
( function rounded( ctx, x, y, width, height, radius ) {
					ctx.moveTo( x, y + radius );
					ctx.lineTo( x, y + height - radius );
					ctx.quadraticCurveTo( x, y + height, x + radius, y + height );
					ctx.lineTo( x + width - radius, y + height );
					ctx.quadraticCurveTo( x + width, y + height, x + width, y + height - radius );
					ctx.lineTo( x + width, y + radius );
					ctx.quadraticCurveTo( x + width, y, x + width - radius, y );
					ctx.lineTo( x + radius, y );
					ctx.quadraticCurveTo( x, y, x, y + radius );
				} )( superegg, -8, -4.5, 16, 9, 1 );


//FIRSTSCREEN









if(i % 1 == 0){
var map = new THREE.TextureLoader().load("/assets/firstepisode/pinkass.jpg");
}
else if(i % 2 == 0){
var map = new THREE.TextureLoader().load("/assets/firstepisode/sheets.jpg");
    }
else if(i % 3 == 0){
var map = new THREE.TextureLoader().load("/assets/firstepisode/boobs.jpg");
}



      var theta = i * 1.05 + Math.PI;
      var geometry = new THREE.ShapeBufferGeometry( superegg );
      var material = new THREE.MeshBasicMaterial();
      material.side = THREE.DoubleSide;
      material.transparent=true;
      material.opacity=0.7;
      material.shadowSide = THREE.BackSide;
          var map = THREE.ImageUtils.loadTexture("/assets/Brick-2399-bump-map.jpg");

      map.wrapS = map.wrapT = THREE.ClampToEdgeWrapping;
    //        material.bumpMap = map;

    material.color = new THREE.Color(0xC0C0C0);
      var screen = new THREE.Mesh(geometry, material);
      screen.receiveShadow = true;
      screen.castShadow = true;
      screen.position.setFromCylindricalCoords( 16, theta, 0 );
      vector.x = screen.position.x * 2;
      vector.y = screen.position.y;
      vector.z = screen.position.z * 2;
      
      screen.lookAt( vector );
      screen.name = 'screen';
      helix.add( screen );
      
  