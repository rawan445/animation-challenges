
import {  motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Loaders = () => {
    const [position, setPosition] = useState(0);
    const sequence = [0, 2, 3, 4, 5, 6, 7, 8];

    useEffect(() => {
        const interval = setInterval(() => {
            setPosition((prevPosition) => (prevPosition + 1) % sequence.length);
        }, 600);

        return () => clearInterval(interval);
    }, []);

    const Star = [
        { x: 0, y: 0 },
        { x: 0, y: 1200, scale: 0, opacity: 0 },
        { x: 0, y: 1200, scale: 0.4 },
        { x: 0, y: 1200, scale: 0.3 },
        { x: 0, y: 1200, scale: 0.3 },
        { x: 0, y: 1200, scale: 0.3 },
        { x: 0, y: 1200, scale: 0.3 },
        { x: 0, y: 1200, scale: 0.3 },
    ];
    const Parenthesis = [
        { x: 0, y: 0 },
        { x: 0, y: -1100, scale: 1.5, },
        { x: 0, y: -1100, scale: 1.5, },
        { x: -900, y: -1100, scale: 1.5, },
        { x: -900, y: -1100, scale: 1.5, },
        { x: 1300, y: 0, scale: 0, opacity: 0 },
        { x: 1300, y: 0, scale: 1, },
        { x: 1300, y: 0, opacity: 1 },
    ];

    const Slash = [
        { x: 0, y: 0, scale: 1, },
        { x: 0, y: 0, },
        { x: 0, y: 0, },
        { x: -1100, y: 0, },
        { x: -1100, y: 0, },
        { x: -1300, y: 1200, scale: 0, opacity: 0 },
        { x: -1300, y: 1200, scale: 0.4, opacity: 1 },
        { x: -1300, y: 1200, scale: 0.4, },
    ]
    const Slash1 = [
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: -1400, y: 0, scale: 0, opacity: 0 },
        { x: -1400, y: 0, scale: 1, opacity: 1 },
    ]
    const CurlyBracket = [
        { x: 0, y: 0, opacity: 1, scale: 1 },
        { x: -10, y: 0, opacity: 1, scale: 1 },
        { x: 0, y: 0, opacity: 1, scale: 0 },
        { x: 1300, y: 0, opacity: 0, scale: 0 },
        { x: 1300, y: 0, opacity: 1, scale: 1 },
        { x: 1300, y: 0, opacity: 1, scale: 1 },
        { x: 1300, y: 0, opacity: 1, scale: 1 },
        { x: 2300, y: 0, opacity: 1, scale: 0.3 },
    ]
    const GreaterThan = [
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: -1200, scale: 1.8, },
        { x: 0, y: -1200, scale: 1.8, },
        { x: 1400, y: -1200, scale: 1.8, },
    ]
    // const GreaterThan = [
    //     { x: 0, y: 0 },
    //     { x: 0, y: 0 },
    //     { x: 0, y: 0 },
    //     { x: 0, y: 0 },
    //     { x: 0, y: 0 },
    //     { x: 0, y: 0 },
    //     { x: 0, y: 0 },
    //     { x: 0, y: 0 },
    // ]
    return (
        <div className="w-screen h-screen flex justify-center items-center">

            <div>
                <svg width="200" height="200" viewBox="0 0 2632 2170" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                        animate={{ x: Star[position].x, y: Star[position].y, scale: Star[position].scale, opacity: Star[position].opacity }}
                        transition={{ duration: 0.4 }}
                        d="M1169.84 456.212C1194.43 418.567 1210.44 381.02 1228.97 344.902C1265.48 273.504 1299.87 200.972 1337.71 130.362C1372.35 65.7636 1457.69 56.2537 1512.54 105.774C1565.11 153.225 1567.62 204.766 1533.18 259.46C1476.07 350.273 1418.13 440.543 1360.72 531.207C1356.58 537.712 1347.07 543.772 1352.25 552.592C1357.23 560.969 1367.33 556.682 1374.96 556.337C1484.75 551.706 1594.43 545.645 1704.26 542.146C1773.34 539.929 1812.32 574.224 1824.24 642.666C1836.66 713.916 1779.94 781.717 1707.71 776.938C1661.05 773.833 1614.38 774.868 1567.72 770.828C1503.27 765.26 1438.28 765.457 1373.53 763.535C1366.54 763.338 1357.27 760.037 1352.99 767.231C1348.36 775.016 1357.27 780.535 1360.87 786.251C1418.72 877.654 1477.06 968.713 1535 1060.02C1566 1108.9 1563.44 1154.97 1528.11 1198.72C1495.34 1239.33 1442.07 1254.85 1392.6 1237.21C1362.89 1226.61 1345.55 1202.77 1331.85 1175.96C1281.84 1078.3 1232.02 980.539 1181.96 882.877C1179.05 877.211 1177.82 870.214 1169.3 865.976C1141.85 918.65 1114.31 971.226 1087.06 1023.95C1058.87 1078.45 1031.43 1133.39 1002.85 1187.69C963.972 1261.45 869.268 1256.03 818.221 1210.5C776.733 1173.5 769.243 1115.65 799.645 1067.85C859.414 973.837 919.429 879.921 979.001 785.758C982.598 780.091 991.368 774.425 986.244 766.639C982.45 760.874 974.073 763.387 967.717 763.437C858.625 764.077 749.878 773.193 640.934 777.283C600.629 778.81 563.624 770.286 539.431 734.168C512.232 693.517 509.571 649.318 527.851 604.971C545.59 561.905 579.342 541.21 626.497 541.703C735.589 542.885 844.385 551.558 953.329 556.14C955.793 556.239 958.257 556.682 960.72 556.485C969.442 555.746 981.464 561.363 986.195 553.676C991.96 544.364 981.612 535.642 976.537 527.709C916.67 433.94 855.57 340.96 796.738 246.551C762.345 191.363 783.976 119.029 840.443 90.1543C907.455 55.8595 975.995 78.4763 1007.04 141.252C1050.2 228.565 1096.42 314.401 1141.31 400.877C1150.28 418.123 1159.15 435.369 1169.94 456.261L1169.84 456.212Z" fill="#512DA8" />
                    <motion.path
                        animate={{ x: CurlyBracket[position].x, y: CurlyBracket[position].y, scale: CurlyBracket[position].scale, opacity: CurlyBracket[position].opacity }}
                        transition={{ duration: 0.4 }}
                        d="M182.591 173.329C183.823 89.6614 250.687 19.692 334.551 16.5385C389.146 14.469 443.741 6.93004 498.829 14.8632C537.854 20.4804 570.374 52.6072 570.128 91.9773C569.882 132.382 536.031 166.825 495.134 168.155C483.653 168.5 472.024 169.486 460.691 168.254C417.38 163.573 388.407 195.207 388.703 241.13C389.195 324.798 388.949 408.515 388.703 492.182C388.456 559.885 358.991 610.687 300.355 644.981C292.373 649.662 279.069 652.865 279.709 663.755C280.251 673.166 293.112 674.3 300.897 678.34C332.678 694.847 351.747 723.82 372.738 750.872C401.908 826.261 384.416 904.903 388.505 982.017C390.378 1017.2 387.421 1052.68 389.294 1087.86C391.856 1136.84 412.699 1152.46 454.138 1153.69C471.236 1154.18 488.285 1152.9 505.481 1156.94C546.427 1166.55 571.656 1193.9 569.734 1234.45C568.108 1268.69 552.734 1301.36 503.806 1306.88C429.698 1315.16 355.049 1317.13 282.419 1295.5C233.047 1280.82 183.527 1212.23 182.887 1158.12C181.753 1061.3 183.675 964.426 180.916 867.651C179.93 833.554 178.895 796.302 150.465 769.842C136.323 756.637 121.689 745.698 99.6142 744.17C25.6052 738.997 -0.608361 700.661 13.139 633.796C13.9766 629.805 14.1245 625.715 14.5679 621.625C34.9672 591.322 65.2212 581.467 99.9098 577.771C146.868 572.745 169.287 547.024 172.588 498.785C182.542 486.22 181.753 471.29 181.753 456.557" fill="#F20057" />
                    <motion.path
                        animate={{ x: Slash[position].x, y: Slash[position].y, scale: Slash[position].scale, opacity: Slash[position].opacity }}
                        transition={{ duration: 0.4 }}
                        d="M1864 1307.77C1811.38 1311.22 1743.88 1261.55 1767.28 1183.84C1790.44 1106.93 1815.37 1030.55 1839.61 953.98C1903.42 752.35 1967.18 550.769 2031.09 349.189C2055.33 272.666 2079.38 195.995 2104.66 119.817C2117.76 80.398 2152.5 56.7957 2194.63 55.2682C2235.72 53.79 2277.46 78.0329 2293.72 112.377C2304.17 134.403 2304.21 157.019 2297.07 179.587C2248.98 332.041 2200.64 484.397 2152.4 636.802C2102.64 793.888 2052.82 950.974 2003.05 1108.11C1988.67 1153.44 1975.07 1199.07 1959.89 1244.11C1946.64 1283.48 1909.34 1307.37 1864.05 1307.77H1864Z" fill="#159EF4" />
                    <motion.path
                        animate={{ x: Slash1[position].x, y: Slash1[position].y, scale: Slash1[position].scale, opacity: Slash1[position].opacity }}
                        transition={{ duration: 0.4 }}
                        d="M2196.45 1307.77C2141.91 1312.01 2073.57 1258.89 2098.65 1180.54C2170.63 955.754 2241.83 730.669 2313.23 505.683C2353.39 379.098 2393.15 252.414 2433.56 125.927C2451.74 68.9663 2505.99 42.0626 2562.85 60.6389C2620.06 79.3138 2644.5 128.637 2625.82 187.569C2561.77 390.037 2497.81 592.554 2433.66 795.021C2386.6 943.534 2339.3 1091.95 2292.09 1240.41C2279.23 1280.91 2242.33 1306.83 2196.45 1307.77Z" fill="#159EF4" />
                    <motion.path
                        animate={{ x: GreaterThan[position].x, y: GreaterThan[position].y, scale: GreaterThan[position].scale }}
                        transition={{ duration: 0.4 }}
                        d="M441.918 1826.87C497.055 1848.9 552.192 1870.87 607.33 1893C678.037 1921.38 748.745 1949.91 819.403 1978.39C861.286 1995.24 879.32 2026.14 866.706 2059.35C851.628 2099.11 813.54 2116.75 772.298 2100.05C627.285 2041.31 482.175 1982.82 338.246 1921.53C269.066 1892.06 248.815 1826.33 284.637 1766.02C296.561 1745.96 314.94 1733.74 335.585 1725.27C477.986 1666.53 620.436 1607.95 763.133 1549.95C806.099 1532.51 838.669 1540.93 858.231 1571.88C877.349 1614.5 867.544 1641.9 824.084 1659.98C739.137 1695.31 653.647 1729.41 567.96 1763.01C530.857 1777.55 493.705 1792.28 457.341 1808.69C449.506 1812.24 439.159 1814.16 441.918 1826.87Z" fill="#FEA212" />
                    <motion.path
                        animate={{ x: Parenthesis[position].x, y: Parenthesis[position].y, scale: Parenthesis[position].scale, opacity: Parenthesis[position].opacity }}
                        transition={{ duration: 0.4 }}
                        d="M1057.4 1775.18C1058.92 1652.1 1087.94 1534.23 1154.51 1426.62C1165.21 1409.32 1178.41 1395.48 1197.97 1388.58C1216.15 1382.17 1233.7 1381.93 1248.63 1395.97C1263.75 1410.16 1264.1 1427.7 1257.54 1446.03C1244.59 1482.3 1231.63 1518.56 1222.22 1556.06C1194.08 1668.06 1189.4 1781.05 1203 1895.51C1211.47 1967.01 1230.94 2035.2 1256.26 2102.12C1264.44 2123.75 1265.03 2144.59 1244.63 2159.97C1224.73 2174.94 1204.77 2169.38 1185.26 2157.5C1172.3 2149.62 1162.54 2139.22 1154.61 2126.31C1088.73 2019.44 1058.97 1902.61 1057.44 1775.23L1057.4 1775.18Z" fill="#C9D2DC" />
                    <motion.path
                        d="M1939.44 2027.42C1939.15 2071.22 1909.43 2100.34 1864.84 2100.59C1817.54 2100.84 1788.12 2071.27 1788.62 2024.07C1789.11 1980.75 1819.12 1952.42 1864.5 1952.37C1910.37 1952.32 1939.74 1981.69 1939.44 2027.42Z" fill="#C8D1DB" />
                    <motion.path
                        d="M1539.54 1947.69C1581.22 1947.79 1613.5 1980.46 1613.69 2022.79C1613.94 2067.28 1582.41 2098.47 1537.91 2097.73C1495.54 2096.99 1463.95 2064.57 1464.4 2022.29C1464.84 1980.9 1498.34 1947.64 1539.49 1947.69H1539.54Z" fill="#C8D1DC" />
                </svg>
            </div>


        </div>
    );
};

export default Loaders;
