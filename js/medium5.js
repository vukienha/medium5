function medium5(med) {
	
	var med = Math.round(med*100);
	var min = med - 70 + 1;
	var results = [];
	
	for (var x1 = min; x1 < med; x1++) {
		for (var x2 = x1 + 1; x2 <= x1 + 70; x2++) {
			for (var x3 = x2 + 1; x3 <= x1 + 70; x3++) {
				for (var x4 = x3 + 1; x4 <= x1 + 70; x4++) {
					for (var x5 = x4 + 1; x5 <= x1 + 70; x5++) {
						if (meet(med, x1, x2, x3, x4, x5)) {
							results.push([x1/100, x2/100, x3/100, x4/100, x5/100])

						}

					}

				}

			}

		}

	}

	return results;
}

function meet(med, x1, x2, x3, x4, x5) {
	if (med*5 == (x1+x2+x3+x4+x5)) {
		var k1 = x2-x1;
		var k2 = x3-x2;
		var k3 = x4-x3;
		var k4 = x5-x4;
		if ((k1==k2)&&(k2==k3)&&(k3==k4)) {
			return false;
		} else {
			return true;
		}	
	} else {
		return false;
	}
}