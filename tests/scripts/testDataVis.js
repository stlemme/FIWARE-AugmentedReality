/**
 *  Project: FI-WARE  
 *  Copyright (c) 2014 Center for Internet Excellence, University of Oulu, All Rights Reserved
 *  For conditions of distribution and use, see copyright notice in license.txt
 */

var imageMarkerTransformsTestSet = [
[0.9993240237236023, -0.005340270232409239, 0.03638020157814026, 0, 0.03012629970908165, 0.6861760020256042, -0.7268120050430298, 0, -0.021081900224089622, 0.7274159789085388, 0.6858729720115662, 0, 0.4328179955482483, 0.24311700463294983, -4.429570198059082, 1], [0.6031789779663086, 0.5404649972915649, -0.5865769982337952, 0, -0.7975919842720032, 0.413098007440567, -0.4395419955253601, 0, 0.004756620153784752, 0.7329720258712769, 0.6802430152893066, 0, 1.5257600545883179, -0.4839420020580292, -5.117090225219727, 1], [0.042637601494789124, 0.88926100730896, -0.4554089903831482, 0, -0.9967330098152161, 0.006567529868334532, -0.08049490302801132, 0, -0.06859000027179718, 0.45735299587249756, 0.8866360187530518, 0, 1.3195199966430664, 0.5786020159721375, -5.9986701011657715, 1], [0.9998930096626282, 0.013710499741137028, -0.005171719938516617, 0, -0.013171199709177017, 0.6862310171127319, -0.7272639870643616, 0, -0.0064221699722111225, 0.7272539734840393, 0.6863380074501038, 0, -0.32134300470352173, 0.8115140199661255, -8.257209777832031, 1], [0.9971429705619812, 0.010191399604082108, -0.07484500110149384, 0, -0.05299830064177513, 0.8004189729690552, -0.5970939993858337, 0, 0.05382220074534416, 0.5993540287017822, 0.7986720204353333, 0, -1.398319959640503, -1.840499997138977, -12.699199676513672, 1]
];

var marker3x3TransformsTestSet = [
[-0.025094300508499146, 0.7592470049858093, -0.6503180265426636, 0, -0.9993600249290466, -0.0024591099936515093, 0.035691998898983, 0, 0.025499900802969933, 0.6507980227470398, 0.7588229775428772, 0, -1.1724599599838257, 1.3897099494934082, -4.19734001159668, 1], [-0.844527006149292, 0.46411100029945374, -0.2671619951725006, 0, -0.5055549740791321, -0.5264530181884766, 0.6835650205612183, 0, 0.17660099267959595, 0.7123540043830872, 0.6792370080947876, 0, -1.160290002822876, -0.4102030098438263, -3.504650115966797, 1], [-0.9871929883956909, 0.04172170162200928, 0.1539749950170517, 0, 0.053471699357032776, -0.8228200078010559, 0.5657809972763062, 0, 0.15029899775981903, 0.5667679905891418, 0.8100519776344299, 0, -0.740435004234314, -0.8599860072135925, -4.077030181884766, 1], [-0.06860180199146271, 0.7577840089797974, -0.6488890051841736, 0, -0.997409999370575, -0.03800810128450394, 0.06106169894337654, 0, 0.021608499810099602, 0.6513969898223877, 0.7584289908409119, 0, -1.5671299695968628, 2.199399948120117, -7.305749893188477, 1], [-0.10005299746990204, 0.8955870270729065, -0.43349000811576843, 0, -0.9896119832992554, -0.04436910152435303, 0.13674399256706238, 0, 0.10323300212621689, 0.44266900420188904, 0.8907229900360107, 0, -2.467099905014038, 0.6142280101776123, -10.139900207519531, 1]
];

var marker5x5TransformsTestSet = [
[0.9988390207290649, -0.017553800716996193, 0.04486130177974701, 0, 0.042556699365377426, 0.7579159736633301, -0.6509630084037781, 0, -0.022574199363589287, 0.6521160006523132, 0.7577829957008362, 0, 1.040369987487793, 1.272570013999939, -4.063819885253906, 1], [0.5487149953842163, 0.5686429738998413, -0.6128270030021667, 0, -0.8290190100669861, 0.46470698714256287, -0.3110870122909546, 0, 0.10788799822330475, 0.6787430047988892, 0.726406991481781, 0, 0.19331400096416473, 0.7275890111923218, -4.337470054626465, 1], [-0.045321401208639145, 0.9019079804420471, -0.42954298853874207, 0, -0.9964519739151001, -0.01028790045529604, 0.08353489637374878, 0, 0.07092180103063583, 0.4318050146102905, 0.8991739749908447, 0, -0.5998979806900024, 1.0393999814987183, -4.4734601974487305, 1], [0.9998990297317505, 0.011341099627315998, 0.008540459908545017, 0, -0.002995670074597001, 0.7565540075302124, -0.6539239883422852, 0, -0.01387760043144226, 0.6538329720497131, 0.7565119862556458, 0, 0.5178170204162598, 2.191190004348755, -7.2093000411987305, 1], [0.9992340207099915, 0.02469410002231598, -0.03035620041191578, 0, -0.036214299499988556, 0.8774710297584534, -0.47826001048088074, 0, 0.014826499857008457, 0.4789929986000061, 0.8776929974555969, 0, -0.30903398990631104, 0.6206910014152527, -9.890629768371582, 1]
];


