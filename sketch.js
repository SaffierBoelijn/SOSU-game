//COLORS
const COLOR_BACKGROUND = "#1E1B2E"; // achtergrond
const COLOR_CARD = "#2B2640";       // kaarten en balken
const COLOR_PANEL = "#3A3452";      // lichtere vlakken
const COLOR_BORDER = "#5A5280";     // randen
const COLOR_PINK = "#FF66AA";       // knoppen en selectie
const COLOR_BLUE = "#66CCFF";       // krimpende ringen
const COLOR_YELLOW = "#FFD166";     // rang
const COLOR_TEXT = "#FFFFFF";       // tekst
const COLOR_SUBTEXT = "#A9A3C4";    // grijze tekst


//ARRAYS
const LEVELS = [
  {
    name: "Level 1", song: "Duvet – bôa", difficulty: "Easy", stars: 1, highscore: 0, length: 211, file: "songs/Bôa - Duvet.mp3",
    balls: [
      { x: 551, y: 537, start: 335 },
      { x: 441, y: 384, start: 508 },
      { x: 223, y: 334, start: 583 },
      { x: 448, y: 420, start: 661 },
      { x: 674, y: 474, start: 739 },
      { x: 847, y: 555, start: 817 },
      { x: 642, y: 344, start: 892 },
      { x: 441, y: 238, start: 970 },
      { x: 624, y: 211, start: 1047 },
      { x: 744, y: 363, start: 1124 },
      { x: 600, y: 191, start: 1202 },
      { x: 790, y: 266, start: 1280 },
      { x: 692, y: 496, start: 1356 },
      { x: 485, y: 559, start: 1434 },
      { x: 558, y: 305, start: 1511 },
      { x: 567, y: 554, start: 1589 },
      { x: 286, y: 509, start: 1665 },
      { x: 258, y: 296, start: 1746 },
      { x: 451, y: 272, start: 1823 },
      { x: 215, y: 405, start: 1901 },
      { x: 467, y: 469, start: 1978 },
      { x: 490, y: 221, start: 2056 },
      { x: 234, y: 263, start: 2132 },
      { x: 479, y: 362, start: 2210 },
      { x: 572, y: 169, start: 2292 },
      { x: 376, y: 340, start: 2383 },
      { x: 609, y: 373, start: 2460 },
      { x: 705, y: 542, start: 2538 },
      { x: 433, y: 455, start: 2614 },
      { x: 552, y: 198, start: 2692 },
      { x: 511, y: 424, start: 2861 },
      { x: 703, y: 372, start: 2944 },
      { x: 796, y: 558, start: 3021 },
      { x: 616, y: 445, start: 3099 },
      { x: 847, y: 451, start: 3177 },
      { x: 1098, y: 375, start: 3254 },
      { x: 845, y: 350, start: 3330 },
      { x: 762, y: 183, start: 3408 },
      { x: 584, y: 326, start: 3485 },
      { x: 788, y: 481, start: 3563 },
      { x: 962, y: 553, start: 3641 },
      { x: 813, y: 423, start: 3718 },
      { x: 684, y: 570, start: 3794 },
      { x: 859, y: 326, start: 3872 },
      { x: 626, y: 377, start: 3949 },
      { x: 791, y: 476, start: 4027 },
      { x: 886, y: 300, start: 4104 },
      { x: 691, y: 265, start: 4182 },
      { x: 515, y: 216, start: 4258 },
      { x: 222, y: 164, start: 4336 },
      { x: 206, y: 387, start: 4413 },
      { x: 373, y: 166, start: 4491 },
      { x: 408, y: 406, start: 4567 },
      { x: 295, y: 550, start: 4646 },
      { x: 520, y: 487, start: 4736 },
      { x: 795, y: 372, start: 4818 },
      { x: 1010, y: 310, start: 4895 },
      { x: 1049, y: 513, start: 4972 },
      { x: 844, y: 311, start: 5050 },
      { x: 1067, y: 443, start: 5128 },
      { x: 1067, y: 205, start: 5204 },
      { x: 930, y: 445, start: 5281 },
      { x: 899, y: 247, start: 5357 },
      { x: 1037, y: 389, start: 5437 },
      { x: 749, y: 341, start: 5513 },
      { x: 489, y: 456, start: 5591 },
      { x: 583, y: 273, start: 5668 },
      { x: 581, y: 488, start: 5745 },
      { x: 331, y: 344, start: 5821 },
      { x: 151, y: 317, start: 5892 },
      { x: 427, y: 324, start: 5962 },
      { x: 538, y: 533, start: 6114 },
      { x: 499, y: 290, start: 6269 },
      { x: 388, y: 505, start: 6423 },
      { x: 422, y: 266, start: 6576 },
      { x: 171, y: 164, start: 6656 },
      { x: 339, y: 325, start: 6733 },
      { x: 526, y: 417, start: 6887 },
      { x: 760, y: 532, start: 7042 },
      { x: 821, y: 251, start: 7118 },
      { x: 971, y: 470, start: 7195 },
      { x: 865, y: 304, start: 7273 },
      { x: 674, y: 446, start: 7350 },
      { x: 953, y: 428, start: 7428 },
      { x: 734, y: 407, start: 7506 },
      { x: 702, y: 227, start: 7582 },
      { x: 920, y: 252, start: 7660 },
      { x: 1088, y: 382, start: 7737 },
      { x: 832, y: 517, start: 7815 },
      { x: 921, y: 326, start: 7892 },
      { x: 1093, y: 560, start: 7970 },
      { x: 854, y: 447, start: 8046 },
      { x: 1012, y: 546, start: 8124 },
      { x: 925, y: 333, start: 8202 },
      { x: 713, y: 396, start: 8279 },
      { x: 438, y: 301, start: 8356 },
      { x: 416, y: 495, start: 8432 },
      { x: 211, y: 460, start: 8512 },
      { x: 405, y: 523, start: 8605 },
      { x: 418, y: 309, start: 8683 },
      { x: 216, y: 309, start: 8760 },
      { x: 216, y: 491, start: 8838 },
      { x: 190, y: 246, start: 8914 },
      { x: 278, y: 466, start: 8992 },
      { x: 454, y: 389, start: 9069 },
      { x: 552, y: 178, start: 9147 },
      { x: 272, y: 187, start: 9224 },
      { x: 456, y: 253, start: 9300 },
      { x: 699, y: 368, start: 9378 },
      { x: 692, y: 568, start: 9458 },
      { x: 871, y: 379, start: 9533 },
      { x: 1113, y: 337, start: 9704 },
      { x: 1031, y: 544, start: 9786 },
      { x: 822, y: 419, start: 9863 },
      { x: 823, y: 160, start: 9941 },
      { x: 654, y: 300, start: 10019 },
      { x: 851, y: 282, start: 10096 },
      { x: 1121, y: 358, start: 10172 },
      { x: 841, y: 350, start: 10249 },
      { x: 593, y: 205, start: 10327 },
      { x: 616, y: 388, start: 10405 },
      { x: 766, y: 553, start: 10482 },
      { x: 528, y: 461, start: 10560 },
      { x: 344, y: 275, start: 10638 },
      { x: 164, y: 287, start: 10714 },
      { x: 353, y: 383, start: 10791 },
      { x: 327, y: 180, start: 10868 },
      { x: 453, y: 348, start: 10943 },
      { x: 288, y: 273, start: 11010 },
      { x: 485, y: 352, start: 11081 },
      { x: 388, y: 160, start: 11157 },
      { x: 198, y: 201, start: 11235 },
      { x: 488, y: 161, start: 11312 },
      { x: 721, y: 187, start: 11389 },
      { x: 520, y: 253, start: 11465 },
      { x: 593, y: 537, start: 11545 },
      { x: 780, y: 480, start: 11623 },
      { x: 883, y: 262, start: 11698 },
      { x: 917, y: 548, start: 11776 },
      { x: 735, y: 563, start: 11853 },
      { x: 974, y: 569, start: 11931 },
      { x: 1077, y: 404, start: 12006 }
    ]
  },
  {
    name: "Level 2", song: "wheredoistart – Ken Carson", difficulty: "Normal", stars: 3, highscore: 0, length: 164, file: "songs/Ken Carson - wheredoistart.mp3",
    balls: [
      { x: 336, y: 454, start: 40 },
      { x: 607, y: 314, start: 133 },
      { x: 285, y: 298, start: 228 },
      { x: 520, y: 456, start: 322 },
      { x: 434, y: 225, start: 416 },
      { x: 807, y: 183, start: 511 },
      { x: 940, y: 386, start: 611 },
      { x: 695, y: 341, start: 661 },
      { x: 362, y: 472, start: 710 },
      { x: 741, y: 467, start: 756 },
      { x: 924, y: 180, start: 803 },
      { x: 1126, y: 366, start: 850 },
      { x: 902, y: 486, start: 898 },
      { x: 671, y: 326, start: 921 },
      { x: 336, y: 195, start: 945 },
      { x: 467, y: 456, start: 991 },
      { x: 234, y: 343, start: 1039 },
      { x: 564, y: 302, start: 1086 },
      { x: 719, y: 491, start: 1110 },
      { x: 1085, y: 533, start: 1133 },
      { x: 971, y: 176, start: 1181 },
      { x: 631, y: 214, start: 1228 },
      { x: 471, y: 559, start: 1274 },
      { x: 442, y: 194, start: 1298 },
      { x: 241, y: 463, start: 1321 },
      { x: 604, y: 448, start: 1369 },
      { x: 564, y: 156, start: 1416 },
      { x: 231, y: 287, start: 1462 },
      { x: 529, y: 460, start: 1486 },
      { x: 848, y: 520, start: 1509 },
      { x: 749, y: 227, start: 1557 },
      { x: 643, y: 545, start: 1603 },
      { x: 919, y: 359, start: 1646 },
      { x: 673, y: 218, start: 1668 },
      { x: 408, y: 303, start: 1693 },
      { x: 626, y: 413, start: 1741 },
      { x: 797, y: 237, start: 1787 },
      { x: 670, y: 564, start: 1838 },
      { x: 462, y: 344, start: 1862 },
      { x: 200, y: 386, start: 1886 },
      { x: 378, y: 158, start: 1933 },
      { x: 640, y: 308, start: 1980 },
      { x: 397, y: 327, start: 2028 },
      { x: 562, y: 529, start: 2051 },
      { x: 223, y: 494, start: 2074 },
      { x: 514, y: 390, start: 2121 },
      { x: 753, y: 311, start: 2168 },
      { x: 1060, y: 249, start: 2216 },
      { x: 758, y: 180, start: 2239 },
      { x: 472, y: 386, start: 2262 },
      { x: 187, y: 267, start: 2309 },
      { x: 543, y: 168, start: 2356 },
      { x: 506, y: 472, start: 2401 },
      { x: 225, y: 514, start: 2425 },
      { x: 269, y: 275, start: 2447 },
      { x: 363, y: 530, start: 2493 },
      { x: 556, y: 268, start: 2540 },
      { x: 541, y: 521, start: 2591 },
      { x: 689, y: 261, start: 2616 },
      { x: 414, y: 454, start: 2639 },
      { x: 680, y: 484, start: 2687 },
      { x: 931, y: 433, start: 2733 },
      { x: 635, y: 334, start: 2780 },
      { x: 399, y: 225, start: 2804 },
      { x: 506, y: 471, start: 2827 },
      { x: 710, y: 151, start: 2873 },
      { x: 1055, y: 293, start: 2921 },
      { x: 718, y: 375, start: 2965 },
      { x: 419, y: 346, start: 3015 },
      { x: 224, y: 203, start: 3063 },
      { x: 351, y: 479, start: 3110 },
      { x: 627, y: 259, start: 3156 },
      { x: 977, y: 221, start: 3180 },
      { x: 811, y: 477, start: 3204 },
      { x: 1100, y: 497, start: 3248 },
      { x: 889, y: 246, start: 3298 },
      { x: 601, y: 185, start: 3344 },
      { x: 589, y: 481, start: 3368 },
      { x: 843, y: 565, start: 3392 },
      { x: 934, y: 331, start: 3439 },
      { x: 744, y: 172, start: 3486 },
      { x: 558, y: 381, start: 3534 },
      { x: 930, y: 355, start: 3556 },
      { x: 652, y: 486, start: 3580 },
      { x: 285, y: 432, start: 3627 },
      { x: 258, y: 160, start: 3674 },
      { x: 534, y: 399, start: 3727 },
      { x: 258, y: 220, start: 3817 },
      { x: 499, y: 282, start: 3863 },
      { x: 786, y: 454, start: 3910 },
      { x: 817, y: 187, start: 3934 },
      { x: 1114, y: 394, start: 3956 },
      { x: 952, y: 173, start: 4003 },
      { x: 1016, y: 514, start: 4051 },
      { x: 672, y: 467, start: 4098 },
      { x: 357, y: 480, start: 4122 },
      { x: 613, y: 329, start: 4145 },
      { x: 931, y: 242, start: 4191 },
      { x: 596, y: 191, start: 4239 },
      { x: 367, y: 316, start: 4286 },
      { x: 180, y: 502, start: 4310 },
      { x: 223, y: 240, start: 4332 },
      { x: 504, y: 356, start: 4379 },
      { x: 753, y: 414, start: 4427 },
      { x: 1000, y: 267, start: 4474 },
      { x: 642, y: 157, start: 4498 },
      { x: 373, y: 187, start: 4520 },
      { x: 728, y: 301, start: 4567 },
      { x: 1033, y: 322, start: 4615 },
      { x: 809, y: 544, start: 4662 },
      { x: 775, y: 260, start: 4686 },
      { x: 1075, y: 152, start: 4710 },
      { x: 894, y: 429, start: 4757 },
      { x: 544, y: 408, start: 4804 },
      { x: 804, y: 227, start: 4852 },
      { x: 1018, y: 491, start: 4874 },
      { x: 718, y: 335, start: 4898 },
      { x: 522, y: 568, start: 4945 },
      { x: 216, y: 482, start: 4991 },
      { x: 535, y: 278, start: 5034 },
      { x: 790, y: 526, start: 5057 },
      { x: 919, y: 293, start: 5080 },
      { x: 679, y: 219, start: 5129 },
      { x: 1050, y: 189, start: 5176 },
      { x: 812, y: 407, start: 5222 },
      { x: 892, y: 179, start: 5246 },
      { x: 988, y: 469, start: 5270 },
      { x: 695, y: 525, start: 5321 },
      { x: 456, y: 289, start: 5369 },
      { x: 203, y: 451, start: 5416 },
      { x: 206, y: 169, start: 5440 },
      { x: 337, y: 508, start: 5463 },
      { x: 630, y: 296, start: 5509 },
      { x: 393, y: 381, start: 5557 },
      { x: 152, y: 333, start: 5604 },
      { x: 263, y: 570, start: 5628 },
      { x: 504, y: 524, start: 5650 },
      { x: 764, y: 502, start: 5697 },
      { x: 1029, y: 569, start: 5745 },
      { x: 1058, y: 227, start: 5792 },
      { x: 698, y: 316, start: 5816 },
      { x: 509, y: 532, start: 5839 },
      { x: 833, y: 494, start: 5885 },
      { x: 1120, y: 567, start: 5933 },
      { x: 974, y: 366, start: 5980 },
      { x: 788, y: 534, start: 6004 },
      { x: 683, y: 263, start: 6028 },
      { x: 646, y: 503, start: 6074 },
      { x: 914, y: 390, start: 6121 },
      { x: 1117, y: 256, start: 6168 },
      { x: 988, y: 520, start: 6192 },
      { x: 742, y: 491, start: 6216 },
      { x: 540, y: 353, start: 6263 },
      { x: 291, y: 282, start: 6309 },
      { x: 453, y: 496, start: 6356 },
      { x: 634, y: 294, start: 6380 },
      { x: 686, y: 534, start: 6402 },
      { x: 363, y: 392, start: 6446 },
      { x: 641, y: 349, start: 6491 },
      { x: 471, y: 162, start: 6539 },
      { x: 206, y: 291, start: 6564 },
      { x: 479, y: 399, start: 6586 },
      { x: 753, y: 514, start: 6635 },
      { x: 1038, y: 556, start: 6682 },
      { x: 758, y: 309, start: 6727 },
      { x: 550, y: 552, start: 6823 },
      { x: 875, y: 429, start: 6918 },
      { x: 648, y: 195, start: 7010 },
      { x: 395, y: 353, start: 7103 },
      { x: 609, y: 152, start: 7198 },
      { x: 813, y: 386, start: 7293 },
      { x: 1071, y: 348, start: 7390 },
      { x: 856, y: 517, start: 7437 },
      { x: 526, y: 531, start: 7486 },
      { x: 213, y: 433, start: 7534 },
      { x: 494, y: 377, start: 7580 },
      { x: 841, y: 298, start: 7627 },
      { x: 649, y: 502, start: 7674 },
      { x: 647, y: 187, start: 7698 },
      { x: 527, y: 423, start: 7722 },
      { x: 271, y: 401, start: 7768 },
      { x: 440, y: 221, start: 7815 },
      { x: 432, y: 532, start: 7862 },
      { x: 628, y: 234, start: 7886 },
      { x: 835, y: 442, start: 7910 },
      { x: 1089, y: 394, start: 7957 },
      { x: 889, y: 177, start: 8005 },
      { x: 812, y: 510, start: 8050 },
      { x: 1068, y: 500, start: 8074 },
      { x: 1027, y: 239, start: 8098 },
      { x: 679, y: 178, start: 8145 },
      { x: 395, y: 387, start: 8193 },
      { x: 648, y: 364, start: 8240 },
      { x: 930, y: 273, start: 8262 },
      { x: 712, y: 521, start: 8286 },
      { x: 699, y: 205, start: 8333 },
      { x: 903, y: 365, start: 8379 },
      { x: 669, y: 528, start: 8422 },
      { x: 306, y: 441, start: 8445 },
      { x: 234, y: 187, start: 8470 },
      { x: 185, y: 518, start: 8517 },
      { x: 455, y: 426, start: 8563 },
      { x: 715, y: 409, start: 8615 },
      { x: 521, y: 189, start: 8638 },
      { x: 202, y: 179, start: 8662 },
      { x: 471, y: 414, start: 8709 },
      { x: 227, y: 391, start: 8757 },
      { x: 465, y: 282, start: 8804 },
      { x: 730, y: 553, start: 8828 },
      { x: 457, y: 568, start: 8850 },
      { x: 635, y: 289, start: 8898 },
      { x: 964, y: 153, start: 8945 },
      { x: 963, y: 506, start: 8991 },
      { x: 613, y: 394, start: 9038 },
      { x: 858, y: 155, start: 9086 },
      { x: 966, y: 470, start: 9133 },
      { x: 775, y: 267, start: 9180 },
      { x: 608, y: 476, start: 9203 },
      { x: 583, y: 186, start: 9226 },
      { x: 473, y: 462, start: 9274 },
      { x: 338, y: 190, start: 9321 },
      { x: 248, y: 515, start: 9368 },
      { x: 466, y: 347, start: 9392 },
      { x: 199, y: 177, start: 9416 },
      { x: 525, y: 224, start: 9462 },
      { x: 895, y: 155, start: 9509 },
      { x: 625, y: 348, start: 9557 },
      { x: 848, y: 556, start: 9580 },
      { x: 541, y: 486, start: 9604 }
    ]
  },
  {
    name: "Level 3", song: "Choppa Won't Miss – PlayboiCarti", difficulty: "Hard", stars: 5, highscore: 0, length: 218, file: "songs/PlayboiCarti - Choppa Won't Miss.mp3",
    balls: [
      { x: 875, y: 378, start: 23 },
      { x: 1027, y: 559, start: 67 },
      { x: 751, y: 496, start: 112 },
      { x: 1008, y: 394, start: 158 },
      { x: 753, y: 243, start: 203 },
      { x: 600, y: 439, start: 246 },
      { x: 917, y: 500, start: 288 },
      { x: 1127, y: 271, start: 308 },
      { x: 809, y: 364, start: 331 },
      { x: 498, y: 477, start: 375 },
      { x: 279, y: 387, start: 420 },
      { x: 453, y: 160, start: 463 },
      { x: 406, y: 428, start: 485 },
      { x: 171, y: 227, start: 508 },
      { x: 400, y: 282, start: 551 },
      { x: 608, y: 528, start: 573 },
      { x: 636, y: 273, start: 595 },
      { x: 452, y: 457, start: 640 },
      { x: 743, y: 551, start: 662 },
      { x: 856, y: 315, start: 685 },
      { x: 539, y: 267, start: 728 },
      { x: 228, y: 343, start: 772 },
      { x: 433, y: 533, start: 817 },
      { x: 362, y: 246, start: 839 },
      { x: 661, y: 309, start: 862 },
      { x: 864, y: 152, start: 906 },
      { x: 963, y: 471, start: 928 },
      { x: 1076, y: 222, start: 949 },
      { x: 725, y: 222, start: 994 },
      { x: 683, y: 464, start: 1016 },
      { x: 964, y: 525, start: 1039 },
      { x: 1007, y: 276, start: 1080 },
      { x: 751, y: 208, start: 1126 },
      { x: 855, y: 460, start: 1171 },
      { x: 516, y: 367, start: 1192 },
      { x: 279, y: 283, start: 1214 },
      { x: 609, y: 248, start: 1257 },
      { x: 844, y: 345, start: 1303 },
      { x: 485, y: 363, start: 1346 },
      { x: 629, y: 539, start: 1392 },
      { x: 902, y: 343, start: 1436 },
      { x: 1015, y: 546, start: 1480 },
      { x: 700, y: 399, start: 1523 },
      { x: 437, y: 483, start: 1569 },
      { x: 568, y: 188, start: 1611 },
      { x: 339, y: 257, start: 1656 },
      { x: 154, y: 428, start: 1700 },
      { x: 189, y: 194, start: 1723 },
      { x: 501, y: 343, start: 1745 },
      { x: 616, y: 547, start: 1789 },
      { x: 743, y: 233, start: 1833 },
      { x: 992, y: 356, start: 1877 },
      { x: 724, y: 372, start: 1900 },
      { x: 556, y: 561, start: 1922 },
      { x: 367, y: 312, start: 1965 },
      { x: 708, y: 212, start: 1987 },
      { x: 509, y: 410, start: 2010 },
      { x: 183, y: 264, start: 2054 },
      { x: 456, y: 176, start: 2076 },
      { x: 722, y: 322, start: 2097 },
      { x: 971, y: 366, start: 2142 },
      { x: 742, y: 535, start: 2187 },
      { x: 477, y: 437, start: 2230 },
      { x: 750, y: 355, start: 2252 },
      { x: 973, y: 255, start: 2274 },
      { x: 784, y: 553, start: 2319 },
      { x: 570, y: 385, start: 2341 },
      { x: 744, y: 225, start: 2362 },
      { x: 650, y: 490, start: 2407 },
      { x: 429, y: 393, start: 2429 },
      { x: 555, y: 165, start: 2451 },
      { x: 790, y: 392, start: 2496 },
      { x: 1022, y: 466, start: 2539 },
      { x: 924, y: 234, start: 2582 },
      { x: 592, y: 187, start: 2606 },
      { x: 632, y: 412, start: 2628 },
      { x: 359, y: 206, start: 2671 },
      { x: 353, y: 474, start: 2694 },
      { x: 610, y: 557, start: 2716 },
      { x: 892, y: 377, start: 2761 },
      { x: 699, y: 175, start: 2783 },
      { x: 693, y: 415, start: 2805 },
      { x: 415, y: 535, start: 2848 },
      { x: 183, y: 293, start: 2893 },
      { x: 216, y: 522, start: 2936 },
      { x: 452, y: 374, start: 2960 },
      { x: 742, y: 346, start: 2982 },
      { x: 1074, y: 381, start: 3025 },
      { x: 905, y: 169, start: 3048 },
      { x: 606, y: 289, start: 3070 },
      { x: 290, y: 166, start: 3114 },
      { x: 477, y: 312, start: 3137 },
      { x: 721, y: 352, start: 3158 },
      { x: 997, y: 436, start: 3202 },
      { x: 875, y: 249, start: 3245 },
      { x: 530, y: 308, start: 3291 },
      { x: 725, y: 530, start: 3314 },
      { x: 365, y: 537, start: 3335 },
      { x: 382, y: 233, start: 3379 },
      { x: 627, y: 316, start: 3400 },
      { x: 852, y: 416, start: 3422 },
      { x: 928, y: 202, start: 3467 },
      { x: 711, y: 477, start: 3489 },
      { x: 472, y: 492, start: 3511 },
      { x: 496, y: 190, start: 3555 },
      { x: 653, y: 370, start: 3599 },
      { x: 1007, y: 392, start: 3642 },
      { x: 809, y: 280, start: 3665 },
      { x: 1111, y: 209, start: 3688 },
      { x: 1103, y: 501, start: 3732 },
      { x: 751, y: 511, start: 3778 },
      { x: 451, y: 325, start: 3822 },
      { x: 276, y: 474, start: 3865 },
      { x: 238, y: 157, start: 3910 },
      { x: 444, y: 350, start: 3953 },
      { x: 688, y: 393, start: 3999 },
      { x: 911, y: 308, start: 4042 },
      { x: 1129, y: 261, start: 4085 },
      { x: 1004, y: 495, start: 4131 },
      { x: 752, y: 375, start: 4173 },
      { x: 965, y: 319, start: 4196 },
      { x: 734, y: 537, start: 4218 },
      { x: 509, y: 422, start: 4262 },
      { x: 290, y: 473, start: 4307 },
      { x: 639, y: 450, start: 4350 },
      { x: 374, y: 214, start: 4372 },
      { x: 635, y: 184, start: 4395 },
      { x: 817, y: 354, start: 4439 },
      { x: 1076, y: 556, start: 4462 },
      { x: 787, y: 567, start: 4483 },
      { x: 687, y: 251, start: 4526 },
      { x: 398, y: 433, start: 4548 },
      { x: 740, y: 440, start: 4572 },
      { x: 973, y: 267, start: 4615 },
      { x: 1061, y: 490, start: 4659 },
      { x: 760, y: 365, start: 4704 },
      { x: 1010, y: 182, start: 4726 },
      { x: 765, y: 207, start: 4749 },
      { x: 632, y: 437, start: 4793 },
      { x: 540, y: 217, start: 4815 },
      { x: 252, y: 372, start: 4836 },
      { x: 526, y: 529, start: 4881 },
      { x: 407, y: 197, start: 4903 },
      { x: 736, y: 191, start: 4926 },
      { x: 983, y: 415, start: 4969 },
      { x: 1099, y: 150, start: 5013 },
      { x: 794, y: 309, start: 5058 },
      { x: 502, y: 247, start: 5079 },
      { x: 432, y: 564, start: 5101 },
      { x: 686, y: 481, start: 5144 },
      { x: 775, y: 214, start: 5168 },
      { x: 555, y: 231, start: 5190 },
      { x: 900, y: 264, start: 5233 },
      { x: 794, y: 568, start: 5256 },
      { x: 714, y: 291, start: 5278 },
      { x: 972, y: 424, start: 5323 },
      { x: 641, y: 542, start: 5367 },
      { x: 648, y: 209, start: 5412 },
      { x: 891, y: 345, start: 5434 },
      { x: 1108, y: 273, start: 5455 },
      { x: 1001, y: 527, start: 5500 },
      { x: 736, y: 469, start: 5522 },
      { x: 414, y: 543, start: 5544 },
      { x: 310, y: 324, start: 5587 },
      { x: 560, y: 398, start: 5610 },
      { x: 238, y: 526, start: 5632 },
      { x: 211, y: 225, start: 5675 },
      { x: 475, y: 152, start: 5720 },
      { x: 571, y: 466, start: 5764 },
      { x: 275, y: 497, start: 5785 },
      { x: 525, y: 298, start: 5807 },
      { x: 310, y: 368, start: 5852 },
      { x: 655, y: 405, start: 5873 },
      { x: 934, y: 494, start: 5895 },
      { x: 1022, y: 257, start: 5940 },
      { x: 801, y: 323, start: 5962 },
      { x: 527, y: 247, start: 5986 },
      { x: 316, y: 167, start: 6030 },
      { x: 582, y: 388, start: 6074 },
      { x: 367, y: 496, start: 6117 },
      { x: 370, y: 260, start: 6139 },
      { x: 155, y: 203, start: 6161 },
      { x: 171, y: 445, start: 6206 },
      { x: 300, y: 231, start: 6250 },
      { x: 499, y: 382, start: 6295 },
      { x: 762, y: 561, start: 6340 },
      { x: 1015, y: 541, start: 6384 },
      { x: 711, y: 439, start: 6429 },
      { x: 906, y: 334, start: 6472 },
      { x: 1113, y: 505, start: 6517 },
      { x: 1021, y: 269, start: 6560 },
      { x: 740, y: 201, start: 6603 },
      { x: 749, y: 457, start: 6648 },
      { x: 539, y: 289, start: 6670 },
      { x: 342, y: 552, start: 6692 },
      { x: 198, y: 367, start: 6737 },
      { x: 455, y: 435, start: 6780 },
      { x: 565, y: 184, start: 6824 },
      { x: 764, y: 401, start: 6847 },
      { x: 567, y: 560, start: 6869 },
      { x: 414, y: 305, start: 6911 },
      { x: 190, y: 382, start: 6935 },
      { x: 364, y: 564, start: 6957 },
      { x: 624, y: 352, start: 7000 },
      { x: 546, y: 560, start: 7022 },
      { x: 469, y: 335, start: 7045 },
      { x: 786, y: 275, start: 7088 },
      { x: 959, y: 474, start: 7134 },
      { x: 694, y: 442, start: 7177 },
      { x: 931, y: 328, start: 7199 },
      { x: 665, y: 248, start: 7222 },
      { x: 922, y: 182, start: 7266 },
      { x: 770, y: 386, start: 7288 },
      { x: 977, y: 542, start: 7309 },
      { x: 652, y: 484, start: 7354 },
      { x: 389, y: 305, start: 7376 },
      { x: 585, y: 163, start: 7398 },
      { x: 263, y: 153, start: 7442 },
      { x: 252, y: 392, start: 7486 },
      { x: 576, y: 353, start: 7531 },
      { x: 781, y: 552, start: 7553 },
      { x: 1033, y: 443, start: 7575 },
      { x: 1049, y: 168, start: 7617 },
      { x: 894, y: 385, start: 7641 },
      { x: 646, y: 233, start: 7663 },
      { x: 377, y: 438, start: 7708 },
      { x: 667, y: 370, start: 7730 },
      { x: 962, y: 280, start: 7752 },
      { x: 947, y: 517, start: 7797 },
      { x: 639, y: 539, start: 7840 },
      { x: 653, y: 305, start: 7885 },
      { x: 989, y: 283, start: 7907 },
      { x: 743, y: 192, start: 7928 },
      { x: 637, y: 442, start: 7974 },
      { x: 472, y: 183, start: 7995 },
      { x: 225, y: 359, start: 8017 },
      { x: 488, y: 353, start: 8062 },
      { x: 697, y: 542, start: 8084 },
      { x: 811, y: 220, start: 8105 },
      { x: 884, y: 491, start: 8149 },
      { x: 659, y: 418, start: 8194 },
      { x: 834, y: 269, start: 8239 },
      { x: 1074, y: 368, start: 8261 },
      { x: 907, y: 569, start: 8282 },
      { x: 684, y: 352, start: 8326 },
      { x: 510, y: 198, start: 8349 },
      { x: 836, y: 350, start: 8371 },
      { x: 1108, y: 486, start: 8416 },
      { x: 750, y: 493, start: 8438 },
      { x: 447, y: 462, start: 8459 },
      { x: 361, y: 194, start: 8503 },
      { x: 627, y: 213, start: 8548 },
      { x: 948, y: 226, start: 8591 },
      { x: 1098, y: 429, start: 8613 },
      { x: 891, y: 567, start: 8636 },
      { x: 566, y: 567, start: 8680 },
      { x: 341, y: 332, start: 8723 },
      { x: 613, y: 404, start: 8769 },
      { x: 795, y: 222, start: 8814 },
      { x: 458, y: 205, start: 8859 },
      { x: 238, y: 475, start: 8903 },
      { x: 221, y: 167, start: 8946 },
      { x: 494, y: 156, start: 8991 },
      { x: 401, y: 367, start: 9035 },
      { x: 194, y: 216, start: 9079 },
      { x: 279, y: 562, start: 9122 },
      { x: 635, y: 560, start: 9144 },
      { x: 712, y: 266, start: 9165 },
      { x: 1025, y: 159, start: 9210 },
      { x: 1045, y: 388, start: 9254 },
      { x: 772, y: 390, start: 9297 },
      { x: 467, y: 506, start: 9320 },
      { x: 582, y: 223, start: 9342 },
      { x: 258, y: 224, start: 9387 },
      { x: 207, y: 452, start: 9409 },
      { x: 489, y: 326, start: 9430 },
      { x: 727, y: 176, start: 9474 },
      { x: 739, y: 404, start: 9497 },
      { x: 547, y: 524, start: 9519 },
      { x: 515, y: 263, start: 9563 },
      { x: 197, y: 319, start: 9607 },
      { x: 472, y: 484, start: 9651 },
      { x: 588, y: 190, start: 9674 },
      { x: 824, y: 205, start: 9696 },
      { x: 667, y: 481, start: 9740 },
      { x: 404, y: 426, start: 9761 },
      { x: 641, y: 267, start: 9784 },
      { x: 938, y: 462, start: 9828 },
      { x: 1016, y: 219, start: 9850 },
      { x: 795, y: 216, start: 9873 },
      { x: 786, y: 484, start: 9916 },
      { x: 620, y: 267, start: 9961 },
      { x: 457, y: 509, start: 10005 },
      { x: 254, y: 416, start: 10027 },
      { x: 485, y: 350, start: 10050 },
      { x: 675, y: 503, start: 10093 },
      { x: 863, y: 235, start: 10115 },
      { x: 925, y: 519, start: 10137 },
      { x: 1043, y: 300, start: 10182 },
      { x: 710, y: 249, start: 10204 },
      { x: 527, y: 372, start: 10225 },
      { x: 315, y: 539, start: 10270 },
      { x: 279, y: 255, start: 10314 },
      { x: 520, y: 423, start: 10358 },
      { x: 716, y: 289, start: 10380 },
      { x: 979, y: 176, start: 10402 },
      { x: 1065, y: 463, start: 10447 },
      { x: 724, y: 521, start: 10469 },
      { x: 414, y: 347, start: 10490 },
      { x: 311, y: 549, start: 10535 },
      { x: 159, y: 354, start: 10579 },
      { x: 454, y: 186, start: 10622 },
      { x: 653, y: 293, start: 10667 },
      { x: 471, y: 470, start: 10711 },
      { x: 200, y: 479, start: 10757 },
      { x: 154, y: 210, start: 10801 },
      { x: 436, y: 189, start: 10845 },
      { x: 165, y: 385, start: 10888 },
      { x: 412, y: 328, start: 10911 },
      { x: 638, y: 171, start: 10932 },
      { x: 541, y: 490, start: 10976 },
      { x: 313, y: 236, start: 11021 },
      { x: 629, y: 335, start: 11064 },
      { x: 865, y: 157, start: 11086 },
      { x: 1073, y: 449, start: 11109 },
      { x: 811, y: 278, start: 11152 },
      { x: 584, y: 482, start: 11174 },
      { x: 855, y: 440, start: 11196 },
      { x: 1119, y: 441, start: 11241 },
      { x: 1028, y: 233, start: 11263 },
      { x: 733, y: 286, start: 11285 },
      { x: 794, y: 531, start: 11329 },
      { x: 1027, y: 460, start: 11373 },
      { x: 1002, y: 218, start: 11418 },
      { x: 745, y: 380, start: 11440 },
      { x: 491, y: 526, start: 11462 },
      { x: 502, y: 236, start: 11507 },
      { x: 802, y: 165, start: 11529 },
      { x: 828, y: 471, start: 11550 },
      { x: 1127, y: 496, start: 11595 },
      { x: 966, y: 246, start: 11617 },
      { x: 718, y: 306, start: 11639 },
      { x: 417, y: 161, start: 11681 },
      { x: 335, y: 378, start: 11727 },
      { x: 189, y: 202, start: 11772 },
      { x: 176, y: 499, start: 11793 },
      { x: 415, y: 553, start: 11816 },
      { x: 474, y: 339, start: 11859 },
      { x: 774, y: 218, start: 11882 },
      { x: 1042, y: 371, start: 11904 },
      { x: 736, y: 508, start: 11949 },
      { x: 635, y: 239, start: 11970 },
      { x: 369, y: 257, start: 11992 },
      { x: 429, y: 512, start: 12036 },
      { x: 619, y: 263, start: 12080 },
      { x: 321, y: 283, start: 12124 },
      { x: 599, y: 436, start: 12146 },
      { x: 437, y: 216, start: 12169 },
      { x: 659, y: 293, start: 12213 },
      { x: 306, y: 293, start: 12257 },
      { x: 261, y: 519, start: 12301 },
      { x: 582, y: 480, start: 12323 },
      { x: 763, y: 219, start: 12346 },
      { x: 453, y: 260, start: 12390 },
      { x: 172, y: 389, start: 12433 },
      { x: 350, y: 161, start: 12478 },
      { x: 669, y: 259, start: 12523 },
      { x: 909, y: 379, start: 12567 },
      { x: 1046, y: 154, start: 12610 },
      { x: 756, y: 359, start: 12655 },
      { x: 1003, y: 354, start: 12700 },
      { x: 686, y: 493, start: 12744 },
      { x: 798, y: 247, start: 12787 },
      { x: 1036, y: 180, start: 12832 },
      { x: 1120, y: 501, start: 12877 }
    ]
  }
];
let balls = [];
let hitEffects = [];


//VARIABLES
let currentScreen = "menu";
let coins = 0;
let chosenLvl = 0;
let songs = [];
let score = 0;
let highestCombo = 0;
let perfectHits = 0;
let goodHits = 0;
let missHits = 0;
let coinsEarned = 0;
let previousScreen;
let optionsTab = 0;
let draggingSlider = -1;
let gameFrame = 0;
let songStartTime = 0;
const HIT_FRAME = 83;
const PERFECT_WINDOW = 6;
const GOOD_WINDOW = 14;

const VOLUME_LABELS = ["Master", "Music", "Effects"];
const volumes = [1, 1, 1];
const tempVolumes = [1, 1, 1];
const CONTINUE_TIME = 600;
let MAX_LIVES = 5;
let lives = MAX_LIVES;
let combo = 0;
let continueTimer = CONTINUE_TIME;



//P5 FUNCTIONS
function preload() {
  for (let i = 0; i < LEVELS.length; i++) {
    if (LEVELS[i].file !== "") {
      songs[i] = loadSound(LEVELS[i].file);
    }
  }
}

function setup() {
  createCanvas(1280, 720);

  for (let i = 0; i < LEVELS.length; i++) {
    if (songs[i]) {
      LEVELS[i].length = songs[i].duration();
    }
  }
}

function draw() {
  if (currentScreen === "menu") {
    drawMenu();
  } else if (currentScreen === "levelSelect") {
    drawLevelSelect();
  } else if (currentScreen === "game") {
    if (songs[chosenLvl]) {
      gameFrame = (getAudioContext().currentTime - songStartTime) * 60;
    } else {
      gameFrame = gameFrame + 1;
    }
    drawGame();
    checkLevelEnd();
  } else if (currentScreen === "pause") {
    drawGame();
    drawPause();
  } else if (currentScreen === "continue") {
    continueTimer = continueTimer - 1;
    if (continueTimer <= 0) {
      stopSong();
      currentScreen = "results";
    }
    drawGame();
    drawContinue();
  } else if (currentScreen === "results") {
    drawResults();
  } else if (currentScreen === "options") {
    drawOptions();
  }
  
}

function mousePressed() {
  if (currentScreen === "menu") {
    if (isHovered(780, 214, 500, 84)) {
      currentScreen = "levelSelect";
    } else if (isHovered(780, 314, 500, 84)) {
      previousScreen = currentScreen;
      copyVolumes(volumes, tempVolumes);
      currentScreen = "options";
    } else if (isHovered(780, 414, 500, 84)) {
      // niks of later store scherm
    } else if (isHovered(780, 514, 500, 84)) {
      // niks of later buy coins scherm
    }
  }

  else if (currentScreen === "levelSelect") {
    if (isHovered(40, 642, 190, 56)) {
      currentScreen = "menu";
    } else if (isHovered(1050, 642, 190, 56)) {
      startGame();
    }
  }

  else if (currentScreen === "pause") {
    if (isHovered(490, 310, 300, 64)) {
      currentScreen = "game";
      resumeSong();
    } else if (isHovered(490, 392, 300, 64)) {
      previousScreen = currentScreen;
      copyVolumes(volumes, tempVolumes);
      currentScreen = "options";
    } else if (isHovered(490, 474, 300, 64)) {
      stopSong();
      currentScreen = "menu";
    }
  }

  else if (currentScreen === "continue") {
    if (isHovered(385, 584, 250, 64) && coins >= 50) {
      coins = coins - 50;
      lives = MAX_LIVES;
      resumeSong();
      currentScreen = "game";
    } else if (isHovered(645, 584, 250, 64)) {
      stopSong();
      currentScreen = "results";
    }
  }

  else if (currentScreen === "results") {
    if (isHovered(40, 642, 220, 56)) {
      startGame();
    } else if (isHovered(530, 642, 220, 56)) {
      currentScreen = "menu";
    } else if (isHovered(1020, 642, 220, 56)) {
      if (chosenLvl < LEVELS.length - 1) {
        chosenLvl = chosenLvl + 1;
      }
      startGame();
    }
  }

  else if (currentScreen === "options") {
    if (isHovered(40, 642, 190, 56)) {
      currentScreen = previousScreen;
    } else if (isHovered(1050, 642, 190, 56)) {
      copyVolumes(tempVolumes, volumes);
    }
    for (let i = 0; i < 3; i++) {
      if (isHovered(56, 130 + i * 70, 268, 58)) {
        optionsTab = i;
      }
    }
    if (optionsTab === 0) {
      for (let i = 0; i < volumes.length; i++) {
        if (isHovered(545, 196 + i * 64 - 5, 570, 36)) {
          draggingSlider = i;
        }
      }
    }
  }

  else if (currentScreen === "game") {
    if (isHovered(580, 22, 120, 38)) {
      pauseSong();
      currentScreen = "pause";
      return;
    }

    let hitBall = false;

    for (let i = 0; i < balls.length; i++) {
      const ball = balls[i];

      if (ball.visible && gameFrame >= ball.start && dist(mouseX, mouseY, ball.x, ball.y) < 55) {
        const diff = gameFrame - (ball.start + HIT_FRAME);
        const offset = abs(diff);
        if (diff < -GOOD_WINDOW - 10) {
          hitBall = true;
          break;
        }
        if (offset <= PERFECT_WINDOW) {
          perfectHits = perfectHits + 1;
          score = score + 300;
          combo = combo + 1;
          lives = min(MAX_LIVES, lives + 0.5);
          addHitEffect(ball.x, ball.y, COLOR_PINK);
        } else if (offset <= GOOD_WINDOW) {
          goodHits = goodHits + 1;
          score = score + 100;
          combo = combo + 1;
          addHitEffect(ball.x, ball.y, COLOR_BLUE);
        } else {
          missHits = missHits + 1;
          lives = lives - 1;
          combo = 0;
        }
        highestCombo = max(highestCombo, combo);
        ball.visible = false;
        hitBall = true;
        break;
      }
    }

    //MISCLICK
    if (!hitBall) {
      lives = lives - 1;
      combo = 0;
      addHitEffect(mouseX, mouseY, COLOR_BORDER);
    }

    if (lives <= 0) {
      goToContinue();
    }
  }
}

function keyPressed() {
  if (keyCode === ESCAPE) {
    if (currentScreen === "game") {
      pauseSong();
      currentScreen = "pause";
    } else if (currentScreen === "pause") {
      resumeSong();
      currentScreen = "game";
    }
  }
}

function mouseReleased() {
  draggingSlider = -1;
}


//HELPERS
function isHovered(x, y, w, h) {
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}

function formatTime(seconds) {
  const minutes = floor(seconds / 60);
  const rest = floor(seconds % 60);
  return `${minutes}:${nf(rest, 2)}`;
}

function getAccuracy() {
  const totalHits = perfectHits + goodHits + missHits;
  if (totalHits === 0) {
    return 0;
  }
  return (perfectHits + goodHits * 0.5) / totalHits * 100;
}

function getRank(accuracy) {
  if (accuracy >= 95) {
    return "S";
  } else if (accuracy >= 90) {
    return "A";
  } else if (accuracy >= 80) {
    return "B";
  } else if (accuracy >= 70) {
    return "C";
  } else {
    return "D";
  }
}

function copyVolumes(from, to) {
  for (let i = 0; i < from.length; i++) {
    to[i] = from[i];
  }
}

function playSong() {
  stopSong();

  const song = songs[chosenLvl];
  if (song) {
    songStartTime = getAudioContext().currentTime;
    song.play(0, 1, volumes[0] * volumes[1], 0);
  }
}

function stopSong() {
  for (let i = 0; i < songs.length; i++) {
    if (songs[i]) {
      songs[i].stop();
    }
  }
}

function pauseSong() {
  const song = songs[chosenLvl];
  if (song) {
    // Bewaar de positie voor het hervatten.
    gameFrame = (getAudioContext().currentTime - songStartTime) * 60;
    song.stop();
  }
}

function resumeSong() {
  const song = songs[chosenLvl];
  if (song) {
    const seconds = gameFrame / 60;
    songStartTime = getAudioContext().currentTime - seconds;
    song.play(0, 1, volumes[0] * volumes[1], seconds);
  }
}

function goToContinue() {
  pauseSong();
  continueTimer = CONTINUE_TIME;
  currentScreen = "continue";
}

function addHitEffect(x, y, effectColor) {
  hitEffects.push({ x: x, y: y, frame: gameFrame, color: effectColor });
}


//SCREENS
function drawMenu() {
  background(COLOR_BACKGROUND);
  ellipseMode(CORNER);

  //COINS
  fill(COLOR_CARD);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(1064, 24, 176, 44, 22);

  noStroke();
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(17);
  text(`Coins: ${coins}`, 1152, 36);

  //CIRCLES
  fill(COLOR_BACKGROUND);
  stroke(COLOR_BLUE);
  strokeWeight(2);
  circle(140, 100, 520);

  fill(COLOR_CARD);
  stroke(COLOR_PINK);
  strokeWeight(4);
  circle(175, 135, 450);

  fill(COLOR_PANEL);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  circle(218, 178, 364);

  //CIRCLE TEXT
  noStroke();
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(88);
  text("SOSU", 400, 296);

  fill(COLOR_SUBTEXT);
  textSize(26);
  text("GAME", 400, 404);

  //MENU BUTTONS
  drawMenuButton("START", "Choose a level", 214);
  drawMenuButton("OPTIONS", "Sound and controls", 314);
  drawMenuButton("STORE", "Buy skins", 414);
  drawMenuButton("BUY COINS", "Get extra coins", 514);
}

function drawLevelSelect() {
  background(COLOR_BACKGROUND);
  ellipseMode(CORNER);

  //NAV
  fill(COLOR_CARD);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(0, 0, 1280, 80);

  //NAV TEXT
  noStroke();
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(30);
  text("CHOOSE A LEVEL", 40, 24);

  //COINS
  fill(COLOR_CARD);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(1064, 20, 176, 44, 22);

  noStroke();
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(17);
  text(`Coins: ${coins}`, 1152, 36);

  //CIRCLES
  fill(COLOR_BACKGROUND);
  stroke(COLOR_BLUE);
  strokeWeight(2);
  circle(140, 130, 440);

  fill(COLOR_CARD);
  stroke(COLOR_PINK);
  strokeWeight(4);
  circle(170, 160, 380);

  fill(COLOR_PANEL);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  circle(207, 197, 306);

  //CIRCLE TEXT
  const level = LEVELS[chosenLvl];

  noStroke();
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  fill(COLOR_SUBTEXT);
  textSize(19);
  text(level.name.toUpperCase(), 360, 238);

  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(72);
  text("PLAY", 360, 284);

  textStyle(NORMAL);
  fill(COLOR_TEXT);
  textSize(22);
  text(level.difficulty, 360, 378);

  //DIFFICULTY DOTS
  stroke(COLOR_BORDER);
  strokeWeight(1.5);
  for (let i = 0; i < 5; i++) {
    if (i < level.stars) {
      fill(COLOR_PINK);
    } else {
      fill(COLOR_CARD);
    }
    circle(305 + i * 23, 418, 17);
  }

  //CIRCLE HINT
  noStroke();
  textAlign(CENTER, TOP);
  textStyle(NORMAL);
  fill(COLOR_SUBTEXT);
  textSize(15);
  text("click or press ENTER", 360, 452);

  //LEVEL CARDS
  for (let i = 0; i < LEVELS.length; i++) {
    const cardY = 165 + i * 130;
    drawLevelCard(LEVELS[i], cardY);

    if (isHovered(780, cardY, 500, 110)) {
      chosenLvl = i;
    }
  }

  //BOTTOM BAR
  fill(COLOR_CARD);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(0, 620, 1280, 100);

  //BACK BUTTON
  fill(COLOR_CARD);
  if (isHovered(40, 642, 190, 56)) {
    stroke(COLOR_PINK);
  } else {
    stroke(COLOR_BORDER);
  }
  strokeWeight(2);
  rect(40, 642, 190, 56, 12);

  noStroke();
  textAlign(CENTER, CENTER);
  textStyle(NORMAL);
  fill(COLOR_TEXT);
  textSize(20);
  text("< BACK", 135, 670);

  //LEVEL STATS
  const stats = [
    ["HIGHSCORE", level.highscore],
    ["NOTES", level.balls.length],
    ["LENGTH", formatTime(level.length)]
  ];

  noStroke();
  textAlign(LEFT, TOP);
  for (let i = 0; i < stats.length; i++) {
    const statX = 320 + i * 200;

    textStyle(BOLD);
    fill(COLOR_SUBTEXT);
    textSize(13);
    text(stats[i][0], statX, 640);

    fill(COLOR_TEXT);
    textSize(28);
    text(stats[i][1], statX, 660);
  }

  //PLAY BUTTON
  fill(COLOR_CARD);
  if (isHovered(1050, 642, 190, 56)) {
    stroke(COLOR_PINK);
    strokeWeight(4);
  } else {
    stroke(COLOR_BORDER);
    strokeWeight(2);
  }
  rect(1050, 642, 190, 56, 12);

  noStroke();
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(20);
  text("PLAY", 1145, 670);
}

function drawGame() {
  background(COLOR_BACKGROUND);
  ellipseMode(CORNER);

  //HUD BAR
  fill(COLOR_CARD);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(0, 0, 1280, 80);

  //SCORE
  noStroke();
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  fill(COLOR_SUBTEXT);
  textSize(13);
  text("SCORE", 40, 12);

  fill(COLOR_TEXT);
  textSize(32);
  text(score, 40, 30);

  //PAUSE BUTTON
  fill(COLOR_CARD);
  if (isHovered(580, 22, 120, 38)) {
    stroke(COLOR_PINK);
  } else {
    stroke(COLOR_BORDER);
  }
  strokeWeight(2);
  rect(580, 22, 120, 38, 19);

  noStroke();
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(16);
  text("II  PAUSE", 640, 41);

  //LIVES
  textAlign(LEFT, TOP);
  fill(COLOR_SUBTEXT);
  textSize(13);
  text("LIVES", 960, 14);

  fill(COLOR_PANEL);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(960, 38, 280, 18, 9);

  noStroke();
  fill(COLOR_PINK);
  rect(960, 38, max(0, 280 * (lives / MAX_LIVES)), 18, 9);

  //COMBO
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(52);
  text(`x${combo}`, 40, 630);

  fill(COLOR_SUBTEXT);
  textSize(15);
  text("COMBO", 144, 660);

  //ACCURACY
  textAlign(RIGHT, TOP);
  fill(COLOR_TEXT);
  textSize(34);
  text(`${round(getAccuracy())}%`, 1240, 640);


  //BALLS
  for (let i = balls.length - 1; i >= 0; i--) {
    drawObject(balls[i]);
  }

  //HIT EFFECTS
  push();
  ellipseMode(CENTER);
  for (let i = hitEffects.length - 1; i >= 0; i--) {
    const effect = hitEffects[i];
    const age = gameFrame - effect.frame;

    if (age > 20) {
      hitEffects.splice(i, 1);
    } else {
      const effectColor = color(effect.color);
      effectColor.setAlpha(255 * (1 - age / 20));

      noFill();
      stroke(effectColor);
      strokeWeight(6 - age / 4);
      circle(effect.x, effect.y, 110 + age * 4);
    }
  }
  pop();
}

function drawPause() {
  //DARK OVERLAY
  noStroke();
  fill(0, 0, 0, 150);
  rect(0, 0, 1280, 720);

  //PAUSE CARD
  fill(COLOR_CARD);
  stroke(COLOR_PINK);
  strokeWeight(4);
  rect(440, 100, 400, 520, 24);

  //PAUSE ICON
  noStroke();
  fill(COLOR_PINK);
  rect(610, 136, 18, 54, 5);
  rect(652, 136, 18, 54, 5);

  //TITLE
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(42);
  text("PAUSE", 640, 206);

  //BUTTONS
  const buttons = ["CONTINUE", "OPTIONS", "QUIT"];
  for (let i = 0; i < buttons.length; i++) {
    const buttonY = 310 + i * 82;

    fill(COLOR_CARD);
    if (isHovered(490, buttonY, 300, 64)) {
      stroke(COLOR_PINK);
    } else {
      stroke(COLOR_BORDER);
    }
    strokeWeight(2);
    rect(490, buttonY, 300, 64, 12);

    noStroke();
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    fill(COLOR_TEXT);
    textSize(20);
    text(buttons[i], 640, buttonY + 32);
  }

  //HINT
  textAlign(CENTER, TOP);
  textStyle(NORMAL);
  fill(COLOR_SUBTEXT);
  textSize(15);
  text("press esc to continue", 640, 568);
}

function drawContinue() {
  ellipseMode(CORNER);

  //DARK OVERLAY
  noStroke();
  fill(0, 0, 0, 150);
  rect(0, 0, 1280, 720);

  //COINS
  fill(COLOR_CARD);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(1064, 24, 176, 44, 22);

  noStroke();
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(17);
  text(`Coins: ${coins}`, 1152, 36);

  //CIRCLES
  noFill();
  stroke(COLOR_BLUE);
  strokeWeight(2);
  circle(460, 90, 360);

  fill(COLOR_CARD);
  stroke(COLOR_PINK);
  strokeWeight(4);
  circle(490, 120, 300);

  fill(COLOR_PANEL);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  circle(522, 152, 236);

  //COUNTDOWN
  noStroke();
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(86);
  text(ceil(continueTimer / 60), 640, 216);

  textStyle(NORMAL);
  fill(COLOR_SUBTEXT);
  textSize(17);
  text("seconds", 640, 322);

  //TITLE
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(38);
  text("OUT OF LIVES!", 640, 474);

  textStyle(NORMAL);
  fill(COLOR_SUBTEXT);
  textSize(19);
  text("Continue for 50 coins?", 640, 528);

  //YES BUTTON
  fill(COLOR_CARD);
  if (isHovered(385, 584, 250, 64)) {
    stroke(COLOR_PINK);
    strokeWeight(4);
  } else {
    stroke(COLOR_BORDER);
    strokeWeight(2);
  }
  rect(385, 584, 250, 64, 12);

  noStroke();
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(20);
  text("YES  •  50 COINS", 510, 616);

  //NO BUTTON
  fill(COLOR_CARD);
  if (isHovered(645, 584, 250, 64)) {
    stroke(COLOR_PINK);
  } else {
    stroke(COLOR_BORDER);
  }
  strokeWeight(2);
  rect(645, 584, 250, 64, 12);

  noStroke();
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(20);
  text("NO", 770, 616);
}

function drawResults() {
  background(COLOR_BACKGROUND);
  ellipseMode(CORNER);

  const level = LEVELS[chosenLvl];
  const accuracy = getAccuracy();

  //NAV
  fill(COLOR_CARD);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(0, 0, 1280, 80);

  noStroke();
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(30);
  text("RESULTS", 40, 24);

  //COINS EARNED
  fill(COLOR_CARD);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(1064, 20, 176, 44, 22);

  noStroke();
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(17);
  text(`+${coinsEarned} coins`, 1152, 32);

  //CIRCLES
  noFill();
  stroke(COLOR_BLUE);
  strokeWeight(2);
  circle(120, 150, 400);

  fill(COLOR_CARD);
  stroke(COLOR_PINK);
  strokeWeight(4);
  circle(152, 182, 336);

  fill(COLOR_PANEL);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  circle(188, 218, 264);

  //RANK
  noStroke();
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  fill(COLOR_SUBTEXT);
  textSize(16);
  text("RANK", 320, 248);

  fill(COLOR_YELLOW);
  textSize(140);
  text(getRank(accuracy), 320, 264);

  textStyle(NORMAL);
  fill(COLOR_SUBTEXT);
  textSize(16);
  text(`${level.name}  •  ${level.difficulty}`, 320, 420);

  //SCORE CARD
  fill(COLOR_CARD);
  stroke(COLOR_PINK);
  strokeWeight(4);
  rect(600, 110, 640, 124, 18);

  noStroke();
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  fill(COLOR_SUBTEXT);
  textSize(14);
  text("SCORE", 630, 132);

  fill(COLOR_TEXT);
  textSize(50);
  text(score, 630, 154);

  //STATS CARD
  fill(COLOR_CARD);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(600, 254, 640, 108, 18);

  const stats = [
    ["ACCURACY", `${round(accuracy)}%`],
    ["HIGHEST COMBO", `x${highestCombo}`],
    ["COINS EARNED", `+${coinsEarned}`]
  ];

  noStroke();
  textAlign(LEFT, TOP);
  for (let i = 0; i < stats.length; i++) {
    const statX = 630 + i * 205;

    textStyle(BOLD);
    fill(COLOR_SUBTEXT);
    textSize(13);
    text(stats[i][0], statX, 276);

    fill(COLOR_TEXT);
    textSize(32);
    text(stats[i][1], statX, 298);
  }

  //HIT TILES
  const hits = [
    ["PERFECT", perfectHits, COLOR_PINK],
    ["GOOD", goodHits, COLOR_BORDER],
    ["MISS", missHits, COLOR_CARD]
  ];

  for (let i = 0; i < hits.length; i++) {
    const tileX = 600 + i * 220;

    fill(COLOR_CARD);
    stroke(COLOR_BORDER);
    strokeWeight(2);
    rect(tileX, 382, 200, 208, 18);

    fill(hits[i][2]);
    stroke(COLOR_BORDER);
    strokeWeight(2);
    circle(tileX + 85, 409, 30);

    noStroke();
    textAlign(CENTER, TOP);
    textStyle(BOLD);
    fill(COLOR_TEXT);
    textSize(40);
    text(hits[i][1], tileX + 100, 458);

    fill(COLOR_SUBTEXT);
    textSize(15);
    text(hits[i][0], tileX + 100, 516);
  }

  //BOTTOM BAR
  fill(COLOR_CARD);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(0, 620, 1280, 100);

  //BUTTONS
  const buttons = [
    ["RETRY", 40],
    ["MENU", 530],
    ["NEXT LEVEL", 1020]
  ];

  for (let i = 0; i < buttons.length; i++) {
    const buttonX = buttons[i][1];

    fill(COLOR_CARD);
    if (isHovered(buttonX, 642, 220, 56)) {
      stroke(COLOR_PINK);
      strokeWeight(4);
    } else {
      stroke(COLOR_BORDER);
      strokeWeight(2);
    }
    rect(buttonX, 642, 220, 56, 12);

    noStroke();
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    fill(COLOR_TEXT);
    textSize(20);
    text(buttons[i][0], buttonX + 110, 670);
  }
}

function drawOptions() {
  background(COLOR_BACKGROUND);
  ellipseMode(CORNER);

  //NAV
  fill(COLOR_CARD);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(0, 0, 1280, 80);

  noStroke();
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(30);
  text("OPTIONS", 40, 28);

  //OPTIONS
  fill(COLOR_CARD);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(40, 110, 300, 480, 18);

  const option = ["SOUND", "CONTROLS", "HOW TO PLAY"];

  for(let i = 0; i < option.length; i++){
    const statY = 130 + i * 70;

    
   if (i === optionsTab || isHovered(56, statY, 268, 58)) {
      noFill();
      stroke(COLOR_BORDER);
      strokeWeight(4);
      rect(56, statY, 268, 58, 12);
    }
    noStroke();
    textAlign(LEFT, TOP);
    textStyle(BOLD);
    fill(COLOR_TEXT);
    textSize(18);
    text(option[i], 82, statY + 20);
  }

  //SELECTED TAB
  const tabs = [drawSoundTab, drawControlsTab, drawHowToPlayTab];
  tabs[optionsTab]();

  //BOTTOM BAR
  fill(COLOR_CARD);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(0, 620, 1280, 100);

  //BUTTONS
  fill(COLOR_CARD);
  if(isHovered(40, 642, 190, 56, 12)){
    stroke(COLOR_PINK);
    strokeWeight(4);
  } else {
    stroke(COLOR_BORDER);
  strokeWeight(2);
  }
  rect(40, 642, 190, 56, 12)

  noStroke();
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(20);
  text("< BACK", 95, 660);

  fill(COLOR_CARD);
  if(isHovered(1050, 642, 190, 56, 12)){
    stroke(COLOR_PINK);
    strokeWeight(4);
  } else {
    stroke(COLOR_BORDER);
  strokeWeight(2);
  }
  rect(1050, 642, 190, 56, 12)

  noStroke();
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(20);
  text("SAVE", 1118, 660);
  
}


//COMPONENTS
function drawMenuButton(title, subtitle, y) {
  const hovered = isHovered(780, y, 500, 84);

  push();
  if (hovered) {
    translate(1280, y + 42);
    scale(1.2);
    translate(-1280, -(y + 42));
  }

  //BUTTON
  fill(COLOR_CARD);
  if (hovered) {
    stroke(COLOR_PINK);
    strokeWeight(4);
  } else {
    stroke(COLOR_BORDER);
    strokeWeight(2);
  }
  rect(780, y, 560, 84, 18);

  //ICON
  fill(COLOR_PANEL);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  circle(815, y + 25, 34);

  //TEXT
  noStroke();
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(22);
  text(title, 876, y + 16);

  textStyle(NORMAL);
  fill(COLOR_SUBTEXT);
  textSize(15);
  text(subtitle, 876, y + 50);

  pop();
}

function drawLevelCard(level, y) {
  const hovered = isHovered(780, y, 500, 110);

  push();
  if (hovered) {
    translate(1280, y + 55);
    scale(1.2);
    translate(-1280, -(y + 55));
  }

  //CARD
  fill(COLOR_CARD);
  if (hovered) {
    stroke(COLOR_PINK);
    strokeWeight(4);
  } else {
    stroke(COLOR_BORDER);
    strokeWeight(2);
  }
  rect(780, y, 560, 110, 18);

  //THUMBNAIL
  fill(COLOR_PANEL);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(796, y + 16, 78, 78, 12);

  //TEXT
  noStroke();
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(22);
  text(level.name, 898, y + 16);

  textStyle(NORMAL);
  fill(COLOR_SUBTEXT);
  textSize(15);
  text(level.song, 898, y + 46);

  //DIFFICULTY DOTS
  stroke(COLOR_BORDER);
  strokeWeight(1.5);
  for (let i = 0; i < 5; i++) {
    if (i < level.stars) {
      fill(COLOR_PINK);
    } else {
      fill(COLOR_CARD);
    }
    circle(898 + i * 19, y + 76, 13);
  }

  //HIGHSCORE
  noStroke();
  textStyle(NORMAL);
  fill(COLOR_SUBTEXT);
  textSize(15);
  if (level.highscore > 0) {
    text("highscore: " + level.highscore, 1010, y + 76);
  }

  pop();
}

function drawSoundTab() {
  fill(COLOR_CARD);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(370, 110, 870, 480, 18);

  noStroke();
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(22);
  text("SOUND", 404, 136);

    //SLIDERS
  for (let i = 0; i < volumes.length; i++) {
    const sliderY = 196 + i * 64;

    //DRAGGING
    if (mouseIsPressed && draggingSlider === i) {
      tempVolumes[i] = constrain((mouseX - 560) / 540, 0, 1);
    }

    //LABEL
    noStroke();
    textAlign(LEFT, TOP);
    textStyle(NORMAL);
    fill(COLOR_TEXT);
    textSize(18);
    text(VOLUME_LABELS[i], 404, sliderY);

    //TRACK
    fill(COLOR_PANEL);
    rect(560, sliderY + 8, 540, 10, 5);

    //FILLED PART
    fill(COLOR_PINK);
    rect(560, sliderY + 8, 540 * tempVolumes[i], 10, 5);

    //KNOB
    fill(COLOR_CARD);
    stroke(COLOR_PINK);
    strokeWeight(3);
    circle(560 + 540 * tempVolumes[i] - 15, sliderY - 2, 30);

    //PERCENTAGE
    noStroke();
    textStyle(BOLD);
    fill(COLOR_TEXT);
    text(`${round(tempVolumes[i] * 100)}%`, 1130, sliderY);
  }
}

function drawControlsTab() {
  fill(COLOR_CARD);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(370, 110, 870, 480, 18);

  noStroke();
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(22);
  text("CONTROLS", 404, 136);

  //CLICK WITH 
  textSize(18);
  textStyle(NORMAL);
  text("Click with", 404, 198);

  //BUTTONS
  fill(COLOR_CARD);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(560, 184, 180, 54, 27);

  noStroke();
  textAlign(LEFT, TOP);
  textStyle(NORMAL);
  fill(COLOR_TEXT);
  textSize(18);
  text("Mouse", 622, 202);

  fill(COLOR_CARD);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(760, 184, 180, 54, 27);

  noStroke();
  textAlign(LEFT, TOP);
  textStyle(NORMAL);
  fill(COLOR_TEXT);
  textSize(18);
  text("Keys Z/X", 815, 202);

  //LINE
  fill(COLOR_BORDER);
  noStroke();
  rect(404, 272, 802, 2, 27);

  //KEYS
  const keysOption = [
    ["Mouse/Z/X", "Hit a circle"],
    ["ESC", "Pause the game"],
    ["ENTER", "Start a level"]
  ];

  noStroke();
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(22);
  text("KEYS", 404, 300);

  for(let i = 0; i < keysOption.length; i++){
    const statY = 346 + i * 55;

    //BUTTONS
    fill(COLOR_CARD)
    stroke(COLOR_BORDER);
    strokeWeight(2);
    rect(404, statY, 180, 44, 10)

    //KEY TEXT
    noStroke();
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    fill(COLOR_TEXT);
    textSize(16);
    text(keysOption[i][0], 494, statY + 22);
    
    //ACTION TEXT
    textAlign(LEFT, TOP);
    textStyle(NORMAL);
    textSize(18);
    text(keysOption[i][1], 610, statY + 12);
  }
}

function drawHowToPlayTab() {
  ellipseMode(CORNER);

  //PANEL
  fill(COLOR_CARD);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(370, 110, 870, 480, 18);

  //TITLE
  noStroke();
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(22);
  text("HOW TO PLAY", 404, 136);

  //STEPS
  const steps = [
    ["Click the circle when the ring hits it", "Perfect timing gives the most points"],
    ["Hold the mouse and follow the slider", "Let go too early and it counts as a miss"],
    ["Don't miss too often", "Every miss costs a piece of your life bar"]
  ];

  for (let i = 0; i < steps.length; i++) {
    const stepY = 186 + i * 106;

    //STEP CARD
    fill(COLOR_CARD);
    stroke(COLOR_BORDER);
    strokeWeight(2);
    rect(404, stepY, 802, 92, 14);

    //ICON BOX
    fill(COLOR_PANEL);
    stroke(COLOR_BORDER);
    strokeWeight(2);
    rect(420, stepY + 12, 68, 68, 10);

    //ICON
    if (i === 0) {
      noFill();
      stroke(COLOR_BLUE);
      strokeWeight(2);
      circle(430, stepY + 22, 48);

      fill(COLOR_CARD);
      stroke(COLOR_PINK);
      strokeWeight(3);
      circle(439, stepY + 31, 30);
    } else if (i === 1) {
      fill(COLOR_CARD);
      stroke(COLOR_BORDER);
      strokeWeight(2);
      rect(428, stepY + 34, 52, 24, 12);

      fill(COLOR_CARD);
      stroke(COLOR_PINK);
      strokeWeight(3);
      circle(428, stepY + 34, 24);
    } else {
      fill(COLOR_CARD);
      stroke(COLOR_BORDER);
      strokeWeight(2);
      rect(430, stepY + 39, 48, 14, 7);

      noStroke();
      fill(COLOR_PINK);
      rect(430, stepY + 39, 18, 14, 7);
    }

    //STEP TEXT
    noStroke();
    textAlign(LEFT, TOP);
    textStyle(BOLD);
    fill(COLOR_TEXT);
    textSize(20);
    text(`${i + 1}.`, 512, stepY + 20);

    textSize(18);
    text(steps[i][0], 545, stepY + 20);

    textStyle(NORMAL);
    fill(COLOR_SUBTEXT);
    textSize(14);
    text(steps[i][1], 512, stepY + 54);
  }

  //POINTS
  noStroke();
  textAlign(LEFT, TOP);
  textStyle(NORMAL);
  fill(COLOR_SUBTEXT);
  textSize(15);
  text("Perfect = 300  •  Good = 100  •  Miss = 0  •  Higher combo = more points", 404, 520);
}

function drawObject(ball) {
  if (currentScreen !== "game") {
    return;
  }
  ellipseMode(CENTER);

  if (ball.visible && gameFrame >= ball.start) {
    ball.ringSize = 200 - (gameFrame - ball.start);

    //BALL
    fill(COLOR_CARD);
    stroke(COLOR_PINK);
    strokeWeight(4);
    circle(ball.x, ball.y, 110);

    //NUMBER
    noStroke();
    fill(COLOR_TEXT);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    textSize(32);
    text(ball.number, ball.x, ball.y);

    //RING
    noFill();
    stroke(COLOR_BLUE);
    strokeWeight(2);
    circle(ball.x, ball.y, max(110, ball.ringSize));

    if (gameFrame > ball.start + HIT_FRAME + GOOD_WINDOW) {
      ball.visible = false;
      missHits = missHits + 1;
      lives = lives - 1;
      combo = 0;

      if (lives <= 0 && currentScreen === "game") {
        goToContinue();
        return;
      }
    }
  }
}

function startGame() {
  currentScreen = "game";
  const levelBalls = LEVELS[chosenLvl].balls;
  balls = [];

  for (let i = 0; i < levelBalls.length; i++) {
    balls.push({
      x: levelBalls[i].x,
      y: levelBalls[i].y,
      start: levelBalls[i].start,
      ringSize: 200,
      number: i + 1,
      visible: true
    });
  }

  gameFrame = 0;
  score = 0;
  combo = 0;
  highestCombo = 0;
  perfectHits = 0;
  goodHits = 0;
  missHits = 0;
  if (chosenLvl === 2) {
    MAX_LIVES = 10;
  } else {
    MAX_LIVES = 5;
  }

  lives = MAX_LIVES;
  coinsEarned = 0;
  hitEffects = [];

  playSong();
  currentScreen = "game";
}

function checkLevelEnd() {
  if (currentScreen !== "game") {
    return;
  }
  let allDone = true;

  for (let i = 0; i < balls.length; i++) {
    if (balls[i].visible) {
      allDone = false;
    }
  }

  if (allDone) {
    coinsEarned = floor(score / 1000);
    coins = coins + coinsEarned;

    if (score > LEVELS[chosenLvl].highscore) {
      LEVELS[chosenLvl].highscore = score;
    }

    stopSong();
    currentScreen = "results";
  }
}