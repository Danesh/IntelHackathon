servoMountOuterRadius = 6.0;
servoMountInnerRadius = 2.5;
servoInnerLength = 23.0;
servoInnerWidth = 11.5;
servoOuterLength = servoInnerLength + 12;
servoOuterWidth = servoInnerWidth + 6;
servoMountHeight = 6;
servoShaftPosition = servoInnerLength - 6;

armLengthCenterToCenter = 81.5;
armHeight = 3.0;
armWidth = 9.0;

stylusHolderOuterRadius = 7.5;
stylusHolderInnerRadius = 3.0;

servoCounterWeightLength = 24.0;

module servoShaftMount() {
	difference() {
		cylinder(r=servoMountOuterRadius, h=armHeight);
   translate([0,0,-1]) // start 1 mm below the surface
		cylinder(r=servoMountInnerRadius, h=armHeight+2);
	}
}

module servoCounterWeight() {
	cube([servoCounterWeightLength, armWidth, armHeight]);
}

module servoMount() {
	difference() {
  	cube([servoOuterLength, servoOuterWidth, servoMountHeight]);
		translate([6, 3, 0]) {
			cube([servoInnerLength, servoInnerWidth, servoMountHeight]);
		}
		translate([3.7, 8.75, 0]) {
			cylinder(r=1, h=6);
		}
		translate([31.3, 8.75, 0]) {
			cylinder(r=1, h=6);
		}
	}
}

module arm() {
	cube([armLengthCenterToCenter - servoShaftPosition - 12, armWidth, armHeight]);
}

union() {
	servoShaftMount();
	translate([-servoMountInnerRadius - servoCounterWeightLength, -armWidth / 2.0, 0]) servoCounterWeight();
	translate([servoMountInnerRadius, -armWidth / 2.0, 0])	arm();
	translate([armLengthCenterToCenter - servoShaftPosition - 12, -servoOuterWidth / 2.0, 0]) servoMount();
}