deviceWidth = 76.0;
deviceHeight = 153.0;

platformHeight = 3.0;
platformWallHeight = 10.0;
platformWallThickness = 3.0;

totalWidth = deviceWidth + platformWallThickness * 2;
totalHeight = deviceHeight + platformWallThickness * 2;

holeRadius = 5.0;

module cutout() {
	cube([totalWidth / 3, totalHeight / 2.5, platformHeight]);
}

difference() {
	union() {
		// main platform
		cube([totalWidth, totalHeight, platformHeight]);

		// top supports
		cube([totalWidth / 3, platformWallThickness, platformWallHeight]);
		translate([totalWidth - totalWidth / 3, 0, 0]) {
			cube([totalWidth / 3, platformWallThickness, platformWallHeight]);
		}

		// bottom supports
		translate([0, totalHeight - platformWallThickness, 0]) {
			cube([totalWidth / 3, platformWallThickness, platformWallHeight]);
			translate([totalWidth - totalWidth / 3, 0, 0]) {
				cube([totalWidth / 3, platformWallThickness, platformWallHeight]);
			}
		}
	
		// left side support
		translate([0, (totalHeight - totalHeight / 3) / 2]) {
			cube([platformWallThickness, totalHeight / 3, platformWallHeight]);
		}
		translate([totalWidth - platformWallThickness, (totalHeight - totalHeight / 3) / 2]) {
			cube([platformWallThickness, totalHeight / 3, platformWallHeight]);
		}
	}
	translate([10, 10, 0]) cutout();
	translate([totalWidth - totalWidth / 3 - 10, 10, 0]) cutout();
	translate([0, totalHeight - totalHeight / 2.5 - 20, 0]) {
		translate([10, 10, 0]) cutout();
		translate([totalWidth - totalWidth / 3 - 10, 10, 0]) cutout();
	}
}
