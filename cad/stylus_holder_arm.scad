servoMountOuterRadius = 6.0;
servoMountInnerRadius = 2.5;

armLengthCenterToCenter = 81.5;
armHeight = 3.0;
armWidth = 9.0;

stylusHolderOuterRadius = 7.5;
stylusHolderInnerRadius = 3.0;

module servoShaftMount() {
	difference() {
		cylinder(r=servoMountOuterRadius, h=armHeight);
   translate([0,0,-1]) // start 1 mm below the surface
		cylinder(r=servoMountInnerRadius, h=armHeight+2);
	}
}

module stylusHolder() {
	difference() {
		cylinder(r=stylusHolderOuterRadius, h=armHeight);
		cylinder(r=stylusHolderInnerRadius, h=armHeight);
	}
}

module arm() {
	cube([armLengthCenterToCenter - servoMountInnerRadius - stylusHolderOuterRadius, armWidth, armHeight]);
}

union() {
	servoShaftMount();
	translate([servoMountInnerRadius, -armWidth / 2.0, 0])	arm();
	translate([armLengthCenterToCenter - stylusHolderInnerRadius, 0, 0]) stylusHolder();
}
