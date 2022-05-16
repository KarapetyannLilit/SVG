import './styled.css';

const People = ({ ShapeRef }) => {
    return (
        <svg ref={ShapeRef} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1600" >
            {/* <clipPath id="clip-path">
                <path className="cls-1" d="M1600,206.67V768.39c0,345.15-368.69,624.94-823.5,624.94C418.09,1393.33,113.16,1219.57,0,977V244"></path>
            </clipPath>
            <clipPath id="clip-path-2">
                <path id="SVGID" className="cls-1" d="M729.53,706.68c-11.27,14.08-27.7,17.71-40.14,12-7.56-3.42-13.62-10.3-16.13-20.36-1.66-6.75-1.68-15,.53-24.55C673.79,673.81,693.69,701.24,729.53,706.68Z"></path>
            </clipPath> */}
            <circle className="cls-3" cx="1003.46" cy="658.98" r="64.17"></circle>
            <path className="cls-4" d="M976.28,543.56c178-43-6-226-59-76C901.79,511.38,931.85,554.3,976.28,543.56Z"></path>
            <path className="cls-5" d="M1011.05,404.73c16.48,3.88,31.68,15.23,40.69,29.49,7.37,11.65,11.75,27.77,8.13,41.45"></path>
            <path className="cls-3" d="M952.11,697.59l96-84.69s-86.62-171-87.34-172.7l-33.65,54-45.75,73.49,37,68.65Z"></path>
            <path className="cls-6" d="M918.36,636.38c8.07-10,17.09-23.11,27-40.33,52.57-90.88,19.9-144.77,19.8-146.37l-38.08,44.56-45.75,73.49Z"></path>
            <path className="cls-3" d="M894.3,598.66c57.8-9.94,80.1-106.82,74.88-138.61s-16-64.33-16-64.33-.37-.59-1.09-1.65c-8.6-12.53-66.88-90.54-148.33-33.14-55.15,38.87-47,73.09-29,102.72,10.81,17.83,25.16,34,31.42,48.55C822.75,550.93,836.51,608.61,894.3,598.66Z"></path>
            <path className="cls-4" d="M772,461.05c6.17-3.91,18.32-12.25,23.11-27.5,7.86-25-1.59-39.75-1.59-39.75,14,46.07,164.47,41.28,159.51-2.77-8.6-12.53-66.88-90.54-148.32-33.14C749.58,396.76,754.06,431.41,772,461.05Z"></path>
            <ellipse className="cls-5" cx="872.42" cy="388.56" rx="19.5" ry="7.65" transform="translate(165.62 1030.85) rotate(-66.27)"></ellipse>
            <ellipse className="cls-5" cx="897.2" cy="392.67" rx="19.5" ry="7.65" transform="translate(176.67 1055.99) rotate(-66.27)"></ellipse>
            <path className="cls-6" d="M790.8,498.42c2.84,3.36,11.73.53,19.85-6.32s14.15-12.7,9.58-18.51c-4-5.1-11.73-.53-19.86,6.32S788,495.06,790.8,498.42Z"></path>
            <path className="cls-6" d="M840.28,464.79c3.06,6.3,11.34,3.56,21.06-1.05s16.06-11.59,14.16-15.62-11.34-3.56-21.06,1S836.9,457.81,840.28,464.79Z"></path>
            <circle className="cls-6" cx="821.93" cy="500.71" r="3.26"></circle>
            <circle className="cls-6" cx="861.83" cy="479.63" r="3.26"></circle>
            <path className="cls-5" d="M834.55,500.41c-.89.3-12.37,2.34-11.59,10.69S834.22,520,834.22,520"></path>
            <path className="cls-7" d="M871.3,508.62c1.1,5.13-1.31,11.27-4.32,15.56a19.32,19.32,0,0,1-13.06,8"></path>
            <ellipse className="cls-8" cx="942.89" cy="403" rx="28.86" ry="34.67" transform="translate(-78.05 307.49) rotate(-17.8)"></ellipse>
            <path className="cls-7" d="M970.37,394.18c-5.86-18.23-22.9-29.06-38.08-24.19s-22.73,23.6-16.88,41.83"></path>
            <path className="cls-7" d="M944.21,383.84a16.62,16.62,0,0,0-11.05,23.67"></path>
            <path className="cls-7" d="M936.76,388.09a33.73,33.73,0,0,1,9.82,16.57"></path>
            <path className="cls-3" d="M867.33,495.93s17.11,12.69,41.55-.89"></path>
            <polygon className="cls-6" points="1554.85 1540.93 1034.85 1519.68 903.29 969.82 1333.52 842.59 1554.85 1540.93"></polygon>
            <circle className="cls-6" cx="1173" cy="1050.22" r="216.44"></circle>
            <path className="cls-6" d="M1528.18,1095.59c16.74-20.82,33.13-65.11,27.52-91.23-6-27.88-41.79-57.33-70.18-54.69s-56.84,29.87-78.2,48.77c-59.23,52.42-192.76,65.43-199.65,144.23,34.85-2.21,163.68,57.42,198.53,55.21C1408.85,1197.72,1492.58,1139.89,1528.18,1095.59Z"></path>
            <path className="cls-9" d="M1023.26,635.63c31.09-45.76,54.84-102.5,110.08-99.59,39.37,2.07,70.4,33.09,98.71,54.22,144.46,107.8,244.84,242.77,320.1,406.55,0,0-32.8-88-144.83,1.63S1242,1252.11,937.81,1140.19c0,0-178.63-306.9-95-432.6C891.46,642.61,963.23,724,1023.26,635.63Z"></path>
            <circle className="cls-8" cx="906.1" cy="949.5" r="3.42"></circle>
            <circle className="cls-8" cx="1087.43" cy="934.8" r="3.42"></circle>
            <circle className="cls-8" cx="1194.51" cy="934.8" r="3.42"></circle>
            <circle className="cls-8" cx="975.01" cy="1034.16" r="3.42"></circle>
            <circle className="cls-8" cx="1087.43" cy="1012.12" r="3.42"></circle>
            <circle className="cls-8" cx="1140.97" cy="973.25" r="3.42"></circle>
            <circle className="cls-8" cx="1194.51" cy="1012.12" r="3.42"></circle>
            <circle className="cls-8" cx="980.36" cy="1089.01" r="3.42"></circle>
            <circle className="cls-8" cx="1033.89" cy="1050.14" r="3.42"></circle>
            <circle className="cls-8" cx="1087.43" cy="1089.01" r="3.42"></circle>
            <circle className="cls-8" cx="1140.97" cy="1050.14" r="3.42"></circle>
            <circle className="cls-8" cx="1194.51" cy="1089.01" r="3.42"></circle>
            <circle className="cls-8" cx="1275.19" cy="887.91" r="3.42"></circle>
            <circle className="cls-8" cx="1328.73" cy="849.03" r="3.42"></circle>
            <circle className="cls-8" cx="1382.27" cy="887.91" r="3.42"></circle>
            <circle className="cls-8" cx="1421.58" cy="831.25" r="3.42"></circle>
            <circle className="cls-8" cx="1466.68" cy="887.91" r="3.42"></circle>
            <circle className="cls-8" cx="1275.19" cy="965.22" r="3.42"></circle>
            <circle className="cls-8" cx="1328.73" cy="926.35" r="3.42"></circle>
            <circle className="cls-8" cx="1382.27" cy="965.22" r="3.42"></circle>
            <circle className="cls-8" cx="1435.8" cy="926.35" r="3.42"></circle>
            <circle className="cls-8" cx="1275.19" cy="1042.11" r="3.42"></circle>
            <circle className="cls-8" cx="1328.73" cy="1003.24" r="3.42"></circle>
            <circle className="cls-8" cx="1076.39" cy="585.14" r="3.42"></circle>
            <circle className="cls-8" cx="1129.93" cy="624.01" r="3.42"></circle>
            <circle className="cls-8" cx="1183.46" cy="585.14" r="3.42"></circle>
            <circle className="cls-8" cx="1237" cy="624.01" r="3.42"></circle>
            <circle className="cls-8" cx="1022.85" cy="701.33" r="3.42"></circle>
            <circle className="cls-8" cx="1076.39" cy="662.45" r="3.42"></circle>
            <circle className="cls-8" cx="1129.93" cy="701.33" r="3.42"></circle>
            <circle className="cls-8" cx="1183.46" cy="662.45" r="3.42"></circle>
            <circle className="cls-8" cx="1237" cy="701.33" r="3.42"></circle>
            <circle className="cls-8" cx="1022.85" cy="778.22" r="3.42"></circle>
            <circle className="cls-8" cx="1076.39" cy="739.34" r="3.42"></circle>
            <circle className="cls-8" cx="1129.93" cy="778.22" r="3.42"></circle>
            <circle className="cls-8" cx="1183.46" cy="739.34" r="3.42"></circle>
            <circle className="cls-8" cx="1237" cy="778.22" r="3.42"></circle>
            <circle className="cls-8" cx="875.57" cy="735.73" r="3.42"></circle>
            <circle className="cls-8" cx="929.11" cy="696.85" r="3.42"></circle>
            <circle className="cls-8" cx="982.65" cy="735.73" r="3.42"></circle>
            <circle className="cls-8" cx="875.57" cy="813.04" r="3.42"></circle>
            <circle className="cls-8" cx="929.11" cy="774.17" r="3.42"></circle>
            <circle className="cls-8" cx="982.65" cy="813.04" r="3.42"></circle>
            <circle className="cls-8" cx="875.57" cy="889.93" r="3.42"></circle>
            <circle className="cls-8" cx="929.11" cy="851.06" r="3.42"></circle>
            <circle className="cls-8" cx="982.65" cy="889.93" r="3.42"></circle>
            <circle className="cls-8" cx="1055.81" cy="821.35" r="3.42"></circle>
            <circle className="cls-8" cx="1109.35" cy="860.22" r="3.42"></circle>
            <circle className="cls-8" cx="1162.89" cy="821.35" r="3.42"></circle>
            <circle className="cls-8" cx="1216.43" cy="860.22" r="3.42"></circle>
            <circle className="cls-8" cx="1002.27" cy="937.54" r="3.42"></circle>
            <circle className="cls-8" cx="1055.81" cy="898.67" r="3.42"></circle>
            <circle className="cls-8" cx="1162.89" cy="898.67" r="3.42"></circle>
            <circle className="cls-8" cx="1055.81" cy="975.56" r="3.42"></circle>
            <line className="cls-10" x1="1388.04" y1="1014.63" x2="1438.8" y2="1174.79"></line>
            <path className="cls-8" d="M938.54,666.44l5.16,12.8,57.79-10.72,34.08-40.84c5.12-6.13,8.51-18.82,7.38-23.83l-5.14-8.55Z"></path>
            <path className="cls-3" d="M942.28,680.14s82.94,31.1,101.89-77.2"></path>
            <path className="cls-6" d="M789.31,533.91s-31.51-76.68-103.57-50.52S553.6,603.74,445,663.59c-23.17,12.77-44.72,23.54-64.3,32.6-53.92,24.95-67.15,95.6-25.85,138.31L498.05,982.65l142-187s89.58-25,130.71-70.91S837.34,583.38,789.31,533.91Z"></path>
            <circle className="cls-3" cx="550.51" cy="839.41" r="62.7"></circle>
            <path className="cls-3" d="M601.54,875.79l-99.33-76.3S615.45,619.81,616.33,618.2l28.49,56.93,38.73,77.42-43.2,64.92Z"></path>
            <path className="cls-6" d="M640.35,817.47c-7.11-10.69-14.87-24.6-23.19-42.67-43.91-95.36-6.37-146-6.12-147.57l33.78,47.9,38.73,77.42Z"></path>
            <path className="cls-11" d="M611,577.9c.52-1.9,1.08-3.8,1.62-5.75a102.65,102.65,0,0,1,7-14.12l.07-.12c.13-.22.25-.42.4-.63,40.82-66.95,146.62-61.29,183.76,15.64,9.4,20.8,6.16,40.45-2.26,59.58-10.27,23.42-28.33,46-40.46,68.9-11.47,21.6-24.56,42.62-43.3,56.33-33,24.17-85.41,3.41-105.86-32.05-13.41-23.33-19.51-51.19-12.26-97.28l.29-1.83a458.66,458.66,0,0,1,11-48.67"></path>
            <path className="cls-6" d="M789,652.28c-2.79,4.6-14.06,2.86-25.17-3.88s-19.49-12.65-15.07-20.53c3.88-6.92,14.06-2.87,25.17,3.87S791.79,647.68,789,652.28Z"></path>
            <path className="cls-6" d="M673.76,605.28c-1,5.29,8.63,11.47,21.41,13.79s23,3.44,24.9-5.39c1.68-7.75-8.63-11.46-21.42-13.78S674.72,600,673.76,605.28Z"></path>
            <circle className="cls-6" cx="751.83" cy="668.98" r="5.1"></circle>
            <circle className="cls-6" cx="692.13" cy="642.71" r="5.1"></circle>
            <path className="cls-12" d="M727.3,665.32c1.26.75,18.19,7.6,14.3,20.14s-20.15,10-20.15,10"></path>
            <path className="cls-6" d="M729.53,706.68c-11.27,14.08-27.7,17.71-40.14,12-7.56-3.42-13.62-10.3-16.13-20.36-1.66-6.75-1.68-15,.53-24.55C673.79,673.81,693.69,701.24,729.53,706.68Z"></path>
            <path className="cls-4" d="M691.12,721.44c-9.35-4.23-16.85-12.74-20-25.19a18.37,18.37,0,0,1,11.59,2.34C690.39,703.09,693.51,712.49,691.12,721.44Z"></path>
            <path className="cls-6" d="M801.61,632.5c12.53-37.81-5-68.94-12.32-79.7C743,572.74,664.6,594.72,621.38,569.53a131.1,131.1,0,0,1-12-8.6c26.37-92.15,154.81-96,200.29,3.38C819.15,585.06,810,613.37,801.61,632.5Z"></path>
            <path className="cls-8" d="M633.4,575.61c8.76,20.11,2.3,42.32-14.44,49.62s-37.41-3.1-46.17-23.21,1.07-40.59,15.55-47.87C604.65,546,624.64,555.5,633.4,575.61Z"></path>
            <path className="cls-12" d="M599.73,628.39c-46.65-20.16-28.13-66.95-11.39-74.24s36.3,1.35,45.06,21.46"></path>
            <path className="cls-12" d="M587.46,573.33a19.05,19.05,0,0,1,27.42,12"></path>
            <path className="cls-12" d="M597.08,571.35A38.72,38.72,0,0,0,601.17,593"></path>
            <path className="cls-14" d="M588.08,604.7c.67.06,13.38,1.41,18.21,11.6,5.13,10.84-1.33,26-13.31,29.25-8.5,2.3-18.83-1.68-23-10.07-3.33-6.75-1.73-14.56,1.5-19.59a19.38,19.38,0,0,1,3.52-4.07"></path>
            <circle className="cls-4" cx="647.51" cy="651.62" r="14.54"></circle>
            <path className="cls-9" d="M586.42,818.64c231.72,132.85,147.28,562.47,144.24,561.92,0,0-310.6,15.59-406,24.14-409.85,36.75-162-442.78-150.38-471.1C233.52,789.46,450.18,740.52,586.42,818.64Z"></path>
            <path className="cls-8" d="M550,844.51S507.61,797,509.45,788l49.18-16.77,68,55.94-4,15.62-17.14,2.38Z"></path>
            <path className="cls-3" d="M510.15,786.79c0,1.27,10.89,98.34,113.64,55.33"></path>
            <path className="cls-6" d="M172.51,1128.08c2.46,8.21,11.85,20,10.81,22.14-3.6,7.48-18.34,9.37-34.56,7.69-19.67-2-31.57-23.36-22.27-40.81a37.77,37.77,0,0,1,2.66-4.29c4-5.61,8.48-8.85,17.72-14.49C181.15,1077.38,172.51,1128.08,172.51,1128.08Z"></path>
            <path className="cls-6" d="M358.07,1159.3c-4,7.59-15.44,17.37-14.83,19.68,2.11,8,16.22,12.69,32.46,14.13,19.7,1.75,35.45-16.9,29.65-35.81a38.45,38.45,0,0,0-1.8-4.71c-2.88-6.28-6.41-10.57-14.63-17.61C358.76,1109.11,358.07,1159.3,358.07,1159.3Z"></path>
            <path className="cls-3" d="M191.79,967.08C188,969.56,105.11,1308,89.11,1447.51l221.06,25.77,96.4-455.11S342.47,869.77,191.79,967.08Z"></path>
            <path className="cls-5" d="M147.65,1098.57s57.83-32.7,127.64-20.8c71.11,12.13,113.78,60.4,113.78,60.4"></path>
            <path className="cls-15" d="M404.37,884.33c-31-32.86-79.78-41.52-120.9-22.8a198.17,198.17,0,0,0-74.39,58c-28.92,36.88-83,182-85.81,201.21,17.65-32.48,81.53-49.75,150.72-43.2,57.5,5.45,140.58,63.22,131.22,96.15,7.59-24.44,62.08-235.69,2.72-285.42a20,20,0,0,1-1.72-1.95C405.6,885.65,405,885,404.37,884.33Z"></path>
            <path className="cls-5" d="M404,1173.7s32.23-128.74,31.34-187"></path>
            <circle className="cls-15" cx="317.57" cy="957.77" r="114.46"></circle>
            <path className="cls-8" d="M345.89,775.52A11.65,11.65,0,0,1,358,790.39c-4.67,16-10.83,40.35-10.46,56.5.72,31.64,14.13,61.55-3.4,76.72s-38.89-44.09-40.38-74.54c-.57-11.47.48-28.15,1.73-42.42a33.42,33.42,0,0,1,30.75-30.39Z"></path>
            <path className="cls-3" d="M331.76,915.7A16.33,16.33,0,0,1,328.4,908c-.37-2.58,0-5.49,2.14-7.25,2.47-2.08,6.51-1.8,9.38-.2s4.82,4.22,6.7,6.77"></path>
            <path className="cls-8" d="M363.75,766.18a20,20,0,0,1,18.38,25.25c-4.9,18-10.48,42-10.15,56.7.73,31.64,14.84,68.5-3.4,76.71-21.25,9.57-39.19-50.55-40.38-74.53-.78-15.76,3.76-47.65,7-67.67a20,20,0,0,1,20.69-16.83Z"></path>
            <path className="cls-3" d="M357.42,916.38a21.63,21.63,0,0,1-2.25-7.81,7.91,7.91,0,0,1,.41-3.8c1.42-3.28,6.29-4.34,9.88-3s6.1,4.27,8.22,7.23"></path>
            <path className="cls-8" d="M403.65,757.53a11.58,11.58,0,0,1,10.2,14.65c-4.73,16.92-12,45.84-11.55,63.31.73,31.64,14,68.18-3.39,76.71-23.24,11.36-39.2-50.55-40.39-74.54-.76-15.31,4.75-44.82,8.84-64.15a21.6,21.6,0,0,1,22.92-17.08Z"></path>
            <path className="cls-3" d="M387.67,903.87a19.2,19.2,0,0,1-2.71-9.24c0-1.93.42-4.19,2.31-5.06,2.41-1.11,5.14.83,6.85,2.74a43.11,43.11,0,0,1,7,10.59"></path>
            <path className="cls-8" d="M420.87,746.44c14.44-.49,25.33,13.86,21.72,28.7-2.5,10.3-4.46,21.89-4.23,32.42.72,33.58,15.79,72.48-3.4,81.43-22.69,10.58-39.2-53.66-40.38-79.12-.64-13.7,1.17-30.82,3-43.71,1.54-11,10.29-19.28,20.78-19.63Z"></path>
            <path className="cls-3" d="M425.23,883.51A16.47,16.47,0,0,1,422,873a7.56,7.56,0,0,1,1-3.76,3.93,3.93,0,0,1,3.32-1.92,5.73,5.73,0,0,1,3.56,1.93,34.53,34.53,0,0,1,7.26,9.9"></path>
            <path className="cls-8" d="M450.88,752.89c-15.19,3.14-13.34,23.38-13.13,26,2.28,27.44-2.93,31.64,13.63,43.42s33.55-26.41,34-55.44c0-.22-3.34-15.6-22.67-16.38Z"></path>
            <path className="cls-3" d="M450.43,812.62c-2.05-5.75.69-12.62,6.3-15.81a8.74,8.74,0,0,1,5.07-1.32,8.45,8.45,0,0,1,4.5,2.06,12.75,12.75,0,0,1,4.69,9.91"></path>
            <path className="cls-3" d="M330.17,818.29s-11.75,46,19.69,98.09"></path>
            <path className="cls-5" d="M363.33,794S349.86,861.44,380,905.44c0,0,10,15.31,22.66,4s0-56.37,0-56.37"></path>
            <path className="cls-5" d="M394.58,797.41s.63,63,24.23,86.79c0,0,12.65,14.15,23.08-2,7.86-9.9,0-36.56-.8-47.26l-2.43-21V800.56"></path>
            <path className="cls-5" d="M305.81,804s-3,32.73-2.23,42.52c.77,9.18,9.12,71.13,32.47,78.72,2.83.92,4.35,1.65,7.53-.19,3.49-2,6.49-5.8,4.88-11.51"></path>
            <path className="cls-5" d="M349.86,916.38s13.74,19.34,24.48,3.61c5.66-9.06,2.66-18.8,2.66-18.8"></path>
            <path className="cls-5" d="M479.59,753.91s10.75,4.68,2.56,35.63-19.81,37.39-27.56,34.39-16.64-7.49-16.08-28.47"></path>
            <circle className="cls-3" cx="794.96" cy="1086.54" r="53.62"></circle>
            <path className="cls-3" d="M848.56,1086.54H741.34L752,947.71,841,915C839.57,918.81,848.56,1086.54,848.56,1086.54Z"></path>
            <path className="cls-6" d="M819.11,938.84s-22.92,69.46-73.15,79.74l4.34-54.77C782,959.46,819.11,938.84,819.11,938.84Z"></path>
            <path className="cls-6" d="M717.32,880.05s-30.17,64-17.82,84.57,55.44-38.5,55.44-38.5l-33.76-36Z"></path>
            <path className="cls-6" d="M691.59,1011.41l.9-.5a35.33,35.33,0,0,0,14-48L706,962l-.9.5a35.33,35.33,0,0,0-14,48Z"></path>
            <circle className="cls-6" cx="705.01" cy="965.32" r="5.18"></circle>
            <circle className="cls-6" cx="692.36" cy="1008.74" r="5.18"></circle>
            <path className="cls-6" d="M680.25,1050.34l.9-.5a35.33,35.33,0,0,0,14-48l-.49-.9-.91.5a35.33,35.33,0,0,0-14,48Z"></path>
            <circle className="cls-6" cx="693.81" cy="1003.77" r="5.18"></circle>
            <circle className="cls-6" cx="681.22" cy="1046.99" r="5.18"></circle>
            <path className="cls-6" d="M666.61,1087.25l.37,0a25.73,25.73,0,0,0,19.34-12.83,30,30,0,0,0,0-28.94l-3-5.54-5.54,3a30,30,0,0,0-11.88,40.79Z"></path>
            <circle className="cls-6" cx="682.4" cy="1042.96" r="5.18"></circle>
            <circle className="cls-6" cx="668.29" cy="1084.42" r="5.18"></circle>
            <path className="cls-6" d="M673.63,1085.45s17.9,26.51,1.64,41-15,17-15,17-31.15-24.45,3.76-63.58A24.16,24.16,0,0,1,673.63,1085.45Z"></path>
            <circle className="cls-6" cx="667.88" cy="1083.11" r="5.18"></circle>
            <path className="cls-8" d="M768.58,971.53a109.56,109.56,0,0,1-45.35,4.26,103.07,103.07,0,0,1-37.92-13.13c-49.08-28.21-17-86.15-17-86.15s-10.9-6.32-9.21-17.33c2.6-17,24-17.42,24-17.42s4.4-7,15-31.59c8.7-20.23,23.09-52.76,66.13-56,11.35-.85,24.64.36,40.22,4.43C879,778.06,864,866.2,864,866.2c.72,10.68.22,28.9-10.45,45.91-6,9.55-16,16.74-35.85,30.74C795,958.89,783.61,966.91,768.58,971.53Z"></path>
            <path className="cls-5" d="M768.58,972.67c-22.66,7.19-52.27,7.8-83.27-10-49.08-28.21-17-86.15-17-86.15s-10.9-6.32-9.21-17.33c2.6-17,24-17.42,24-17.42s4.4-7,15-31.59c8.7-20.23,23.09-52.76,66.13-56,11.35-.85,24.64.36,40.22,4.43C879,778.06,864,866.2,864,866.2"></path>
            <path className="cls-6" d="M747,845.69c-.92,4-10,5.34-20.21,3s-18.18-4.73-16.88-11.5c1.14-5.95,10-5.34,20.21-3S747.88,841.69,747,845.69Z"></path>
            <path className="cls-5" d="M737.16,871.15a15.37,15.37,0,0,0-9.33-9.2,14.91,14.91,0,0,0-14.56,3.27"></path>
            <path className="cls-6" d="M813.39,884.15a61,61,0,0,1-9-9.34c-15.53-19.63-20.55-46.94-13.59-70.92-13.42,2.17-32.85-.82-45.46-5.19-12.3-4.26-32.36-18-28.24-34.16,2.14-8.39,9.18-16.27,16.83-20.14,14.42-7.28,32.91-8.85,48.57-5.59,11.68,2.43,28.51,7.85,32,20.86,21.73,2.94,41.62,16.15,53.71,34.44s16.46,41.29,13.06,62.95c-3.85,24.55-17.12,42.51-32.61,61"></path>
            <path className="cls-14" d="M832.87,799.1l.65,7.95a.89.89,0,0,0,.69.8l7.76,1.83a.9.9,0,0,1,.14,1.7l-7.35,3.08a.9.9,0,0,0-.55.9l.66,7.95a.9.9,0,0,1-1.58.65l-5.2-6a.89.89,0,0,0-1-.24l-7.36,3.08a.89.89,0,0,1-1.11-1.29l4.14-6.82a.89.89,0,0,0-.09-1l-5.2-6a.9.9,0,0,1,.88-1.46l7.77,1.83a.89.89,0,0,0,1-.4l4.14-6.82A.9.9,0,0,1,832.87,799.1Z"></path>
            <path className="cls-4" d="M859.56,824.67l.66,7.94a.89.89,0,0,0,.69.8l7.76,1.83a.9.9,0,0,1,.14,1.7L861.45,840a.89.89,0,0,0-.54.9l.65,8a.89.89,0,0,1-1.57.66l-5.2-6a.91.91,0,0,0-1-.24l-7.35,3.08A.89.89,0,0,1,845.3,845l4.14-6.81a.9.9,0,0,0-.09-1.05l-5.2-6a.89.89,0,0,1,.88-1.45l7.76,1.83a.89.89,0,0,0,1-.41l4.14-6.82A.9.9,0,0,1,859.56,824.67Z"></path>
            <path className="cls-5" d="M717.74,768.68s-8.22,53.58,73,35.21"></path>
            <path className="cls-5" d="M695.79,907c6.67,10.21,18.72,14.25,28.08,10.43S736,903.7,736.4,902.11"></path>
            <ellipse className="cls-8" cx="801.15" cy="891.15" rx="35.06" ry="24.53" transform="translate(-395.99 944.5) rotate(-50.6)"></ellipse>
            <path className="cls-3" d="M807.76,875.49a14.15,14.15,0,0,1,1.32,22.18"></path>
            <path className="cls-3" d="M812.31,881.18a28.77,28.77,0,0,0-12.95,10"></path>
            <path className="cls-5" d="M805.57,860.47c6.71-1.38,13.09-.31,17.84,3.59,10.47,8.6,9,27.7-3.3,42.66s-30.74,20.12-41.21,11.52"></path>
            <path className="cls-3" d="M1034.23,1399.22H547.4c-2.55-89,25.85-238.31,83.61-284.64a203.55,203.55,0,0,1,54.83-31.29c32.36-12.43,70.27-18.2,113.59-15.86,31.4,1.7,59.59,6.75,84.61,14.67q2.85.92,5.65,1.86a242.51,242.51,0,0,1,45.77,20.89l1.44.85C1013.38,1151.78,1044.77,1307,1034.23,1399.22Z"></path>
            <path className="cls-6" d="M978.12,1403.34H582.91l18.27-77.12,44.73-127.65h0c-10.55-22-15.71-47.77-15.17-76.44,0-2.55.14-5.07.27-7.54a203.55,203.55,0,0,1,54.83-31.29c-5.59,24-13.69,79.93,20,115.27a82.17,82.17,0,0,0,6.49,6.09c27.2,22.87,81.7,33.94,122.32,11.92a85.85,85.85,0,0,0,23-18c22.63-25,31.68-64.61,26.38-116.46q2.85.92,5.65,1.86a242.51,242.51,0,0,1,45.77,20.89c.64,41.23-7.54,72.47-19.52,96.05l43.92,125.32Z"></path>
            <path className="cls-16" d="M709.52,1274.7s47.55,40.45,137.77,0"></path>
            <path className="cls-16" d="M845.52,1388s16.94-62.4,1.77-93c-90.22,40.44-137.77,0-137.77,0-11.56,47.44,0,93,0,93"></path>
            <polygon className="cls-8" points="744.9 1056.27 744.01 1070.05 781.94 1082.1 845.83 1072.67 839.9 1063.64 744.9 1056.27"></polygon>
            <path className="cls-3" d="M742.66,1069.26s38.42,60.74,105,3.36"></path>
            <path className="cls-6" d="M873.9,862.54s12.31,69.66-5,86.28-43.37-51.71-43.37-51.71l42-25.84Z"></path>
            <path className="cls-6" d="M864.22,996.05l-.74-.72a35.33,35.33,0,0,1-.87-50l.71-.74.74.72a35.33,35.33,0,0,1,.88,50Z"></path>
            <circle className="cls-6" cx="863.38" cy="948.05" r="5.18"></circle>
            <circle className="cls-6" cx="864.17" cy="993.27" r="5.18"></circle>
            <path className="cls-6" d="M864.93,1036.59l-.74-.72a35.33,35.33,0,0,1-.87-50l.71-.74.74.71a35.35,35.35,0,0,1,.88,50Z"></path>
            <circle className="cls-6" cx="864.08" cy="988.09" r="5.18"></circle>
            <circle className="cls-6" cx="864.87" cy="1033.1" r="5.18"></circle>
            <path className="cls-6" d="M868.4,1075.78l-.35-.14a25.7,25.7,0,0,1-15.29-17.46,30,30,0,0,1,7.59-27.92l4.39-4.55,4.55,4.39a30,30,0,0,1,.74,42.48Z"></path>
            <circle className="cls-6" cx="864.8" cy="1028.91" r="5.18"></circle>
            <circle className="cls-6" cx="867.51" cy="1072.62" r="5.18"></circle>
            <path className="cls-6" d="M862.09,1072.2s-24.24,20.88-12.34,39.1,10,20.3,10,20.3,36.48-15.41,13.07-62.34A24.34,24.34,0,0,0,862.09,1072.2Z"></path>
            <circle className="cls-6" cx="868.25" cy="1071.45" r="5.18"></circle>
            <circle className="cls-3" cx="1287.29" cy="853.07" r="98.4"></circle>
            <circle className="cls-5" cx="1287.29" cy="853.07" r="98.4"></circle>
            <path className="cls-8" d="M1291.71,851.25l-100.58-19.19c-.06.27-.11.54-.18.8-12.86,54.95-116.47,95.12-183.33,114.66l-1.81,3.66,44.11,163c108.13-31.46,250.54-92.36,318.22-204.26q2-3.25,3.76-6.53Z"></path>
            <path className="cls-5" d="M1372.65,902.05c-.25.44-.5.87-.76,1.3h0q-1.8,3.27-3.76,6.53c-70.22,116.1-220.89,177.3-330.26,207.68"></path>
            <path className="cls-5" d="M1007.62,947.52C1074.48,928,1178.09,887.81,1191,832.86c.06-.27.12-.53.17-.8h0"></path>
            <path className="cls-8" d="M1377.56,892.3c53.89-136.87-96.75-261.13-96.75-261.13a207,207,0,0,0-139.62,110.25c8.87,11.7,51.58,62.79,48.06,102.93l102.19,6.35Z"></path>
            <path className="cls-5" d="M1377.56,892.3c53.89-136.87-96.75-261.13-96.75-261.13a208.29,208.29,0,0,0-86.6,42.88c-29.09,24.27-45.76,52.47-53.79,68.71,8.38,11.06,46.79,53.14,48,91.61a56.63,56.63,0,0,1-.17,6.65"></path>
            <circle className="cls-15" cx="1134.95" cy="617.87" r="79.05"></circle>
            <path className="cls-15" d="M1078.42,673.13l102.1-119.29s87.74,59,119.49,95.3c0,0-94,14.48-148.63,105.55Z"></path>
            <path className="cls-9" d="M1216.85,578.15s51.41,38.55,83.16,71c0,0-94,14.48-148.63,105.55l-73-81.56"></path>
            <circle className="cls-8" cx="1107.96" cy="561.55" r="3.42"></circle>
            <circle className="cls-8" cx="1161.5" cy="600.42" r="3.42"></circle>
            <circle className="cls-8" cx="1107.96" cy="638.87" r="3.42"></circle>
            <circle className="cls-8" cx="1161.5" cy="677.74" r="3.42"></circle>
            <circle className="cls-8" cx="1215.04" cy="638.87" r="3.42"></circle>
            <path className="cls-8" d="M989.68,1052.62s-29.77-47.19-55.22-50.31c-31.14-3.82-42.11,6.89-54.73-11s35.6-25.06,72.81-32.08c32.27-6.09,78.43-18.73,78.43-18.73Z"></path>
            <path className="cls-3" d="M941.39,1004.82c-31.15-3.82-49,4.38-61.66-13.49s34.49-27.78,72.14-31.85c31.7-3.43,51.5-11.33,51.5-11.33"></path>
            <path className="cls-8" d="M912.83,1036.72s-33,11.44-58.57,9.72c-31.31-2.1-67-15.83-76.13-.43-12.23,20.53,48.43,37.81,72.14,40s58.8-2.81,58.8-2.81Z"></path>
            <path className="cls-8" d="M912.73,1071.38s-33,11.44-58.57,9.72c-31.31-2.1-67.24-16.57-76.13-.43-10.36,18.81,48.43,37.81,72.14,40s58.8-2.81,58.8-2.81Z"></path>
            <path className="cls-8" d="M931.69,1095.62s-47,13.14-72.56,11.42c-31.31-2.1-60.37-15.61-76.13-.43s42,37.23,72.14,40c23.71,2.16,71.91-5.92,71.91-5.92Z"></path>
            <path className="cls-3" d="M943.3,1004.21s-45.6,13.19-71.18,11.47c-31.31-2.1-67-17.43-76.13-.43-10.82,20.1,48.43,37.81,72.14,40s58.8-2.81,58.8-2.81"></path>
            <path className="cls-5" d="M778.13,1046c-12.23,20.53,50.48,38.34,73.84,42.93,26,5.12,70.36-3.42,70.36-3.42"></path>
            <path className="cls-5" d="M778,1080.67c-10.36,18.81,48.43,37.81,72.14,40s67.17-4.82,67.17-4.82"></path>
            <path className="cls-5" d="M783,1106.61c-15.75,15.18,42,37.23,72.14,40,23.71,2.16,58.8-2.81,58.8-2.81"></path>
            <path className="cls-5" d="M789.43,1051.53c.48-.44,1.23-.26,1.84,0a46.07,46.07,0,0,1,6.53,2.94c2.56,1.4,5.25,3.47,5.41,6.39a6.13,6.13,0,0,1-2.92,5.21,12.82,12.82,0,0,1-5.91,1.81c-2.7.27-6.31-1.4-8.32-3"></path>
            <path className="cls-5" d="M793,1084.62a25.48,25.48,0,0,1,9.68,5.42c1.53,1.37,3,3.32,2.45,5.29-.5,1.78-2.39,2.74-4.15,3.31a28.78,28.78,0,0,1-12.77,1.13"></path>
            <path className="cls-5" d="M798.59,1117.21a9.94,9.94,0,0,1,7.35,4.78,5.23,5.23,0,0,1,.8,2.37c.08,2-1.54,3.7-3.4,4.38a14.11,14.11,0,0,1-5.87.43"></path>
            <path className="cls-5" d="M802.47,1017.22a16.62,16.62,0,0,1,8.52,4.59c1.22,1.23,2.3,2.84,2.1,4.57s-1.86,3.25-3.57,4a12.44,12.44,0,0,1-9,.5"></path>
            <polygon className="cls-8" points="981.87 986.37 957.1 984.56 942.4 1006.24 909.15 1042.62 900.73 1120.35 961.12 1110.16 984.92 987.72 981.87 986.37"></polygon>
            <path className="cls-8" d="M910.32,1144.41s60.66-7.29,139.6-30.26l-44.11-163Z"></path>
            <path className="cls-5" d="M1037.13,1117.78c-72.61,20.12-126.82,26.63-126.82,26.63"></path>
            <circle className="cls-8" cx="1027" cy="1032" r="85.78"></circle>
        </svg>
    )
}

export default People