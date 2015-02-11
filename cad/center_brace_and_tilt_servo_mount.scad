deviceLength = 153;

totalLength = deviceLength + 41;
totalWidth = 23.0;
thickness = 3.0;
servoCutoutLength = 23.0;
servoCutoutWidth = 13.0;
screwEdgeToServoEdgeDistance = 62.5;
servoMountingHoleSpacing = 27.5;
servoMountingHoleRadius = 0.75;

pivotHoleRadius = 1.5;

module screwAndNutCutout() {
	union() {
		cube([3, 10, thickness]);
		translate([3.0, 3.5, 0]) cube([16, 3.0, thickness]);
		translate([7.0, 2.0, 0]) cube([3, 6, thickness]);
	}
}

module screwAndNutCutoutRotated() {
	rotate([0, 0, -90]) {
		screwAndNutCutout();
	}
}

module topPlateSlot() {
	cube([thickness, thickness, thickness]);
}

union() {
	difference() {
		cube([totalLength, totalWidth, thickness]);
		translate([totalLength - screwEdgeToServoEdgeDistance, 0, 0]) {
			cube([servoCutoutLength, servoCutoutWidth, thickness]);
			translate([-2.3, 7.6, 0]) {
				cylinder(r=servoMountingHoleRadius, h=thickness);
				translate([servoMountingHoleSpacing, 0, 0]) cylinder(r=servoMountingHoleRadius, h=thickness);
			}
		}
		translate([0, 6.0, 0]) screwAndNutCutout();
		translate([deviceLength / 2, 1811, 0]) screwAndNutCutoutRotated();
		translate([totalLength - 3.5, 4.5, 0]) cylinder(r=pivotHoleRadius, h=thickness);
	}
	translate([totalLength - 34, totalWidth, 0]) topPlateSlot();
}
