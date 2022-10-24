import React from "react";
import {Row, Col, Typography, Card, Button, Layout} from "antd";
import "../../sass/layout-header.scss";
import UserButton from "../../components/layout/GlobalHeader/UserButton/UserButton";


const VagaEspecifica = (props) => {  
  const { Title, Paragraph, Text, Link } = Typography;

  const tag_vaga_alimenta = (
    <svg width="138" height="30" viewBox="0 0 138 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="138" height="30" rx="4" fill="#E7E7E7"/>
      <path d="M20.082 11.0059H21.333L17.7305 21H16.582L13 11.0059H14.2305L16.5273 17.4727C16.7917 18.2155 17.0013 18.9378 17.1562 19.6396C17.3203 18.9014 17.5345 18.1654 17.7988 17.4316L20.082 11.0059ZM27.1504 21L26.9248 19.9336H26.8701C26.4964 20.403 26.1227 20.722 25.749 20.8906C25.3799 21.0547 24.9173 21.1367 24.3613 21.1367C23.6185 21.1367 23.0352 20.9453 22.6113 20.5625C22.1921 20.1797 21.9824 19.6351 21.9824 18.9287C21.9824 17.4157 23.1924 16.6227 25.6123 16.5498L26.8838 16.5088V16.0439C26.8838 15.4561 26.7562 15.0231 26.501 14.7451C26.2503 14.4626 25.847 14.3213 25.291 14.3213C24.6667 14.3213 23.9603 14.5127 23.1719 14.8955L22.8232 14.0273C23.1924 13.8268 23.5957 13.6696 24.0332 13.5557C24.4753 13.4417 24.9173 13.3848 25.3594 13.3848C26.2526 13.3848 26.9134 13.583 27.3418 13.9795C27.7747 14.376 27.9912 15.0117 27.9912 15.8867V21H27.1504ZM24.5869 20.2002C25.2933 20.2002 25.847 20.0065 26.248 19.6191C26.6536 19.2318 26.8564 18.6895 26.8564 17.9922V17.3154L25.7217 17.3633C24.8193 17.3952 24.1676 17.5365 23.7666 17.7871C23.3701 18.0332 23.1719 18.4183 23.1719 18.9424C23.1719 19.3525 23.2949 19.6647 23.541 19.8789C23.7917 20.0931 24.1403 20.2002 24.5869 20.2002ZM31.4707 21H30.3359V10.3633H31.4707V21ZM37.042 21.1367C35.9346 21.1367 35.0596 20.7995 34.417 20.125C33.779 19.4505 33.46 18.514 33.46 17.3154C33.46 16.1077 33.7562 15.1484 34.3486 14.4375C34.9456 13.7266 35.7454 13.3711 36.748 13.3711C37.6868 13.3711 38.4297 13.681 38.9766 14.3008C39.5234 14.916 39.7969 15.7295 39.7969 16.7412V17.459H34.6357C34.6585 18.3385 34.8796 19.0062 35.2988 19.4619C35.7227 19.9176 36.3174 20.1455 37.083 20.1455C37.8896 20.1455 38.6872 19.9769 39.4756 19.6396V20.6514C39.0745 20.8245 38.694 20.9476 38.334 21.0205C37.9785 21.098 37.5479 21.1367 37.042 21.1367ZM36.7344 14.3213C36.1328 14.3213 35.652 14.5173 35.292 14.9092C34.9365 15.3011 34.7269 15.8434 34.6631 16.5361H38.5801C38.5801 15.8206 38.4206 15.2738 38.1016 14.8955C37.7826 14.5127 37.3268 14.3213 36.7344 14.3213ZM49.9824 21L49.7568 19.9336H49.7021C49.3285 20.403 48.9548 20.722 48.5811 20.8906C48.2119 21.0547 47.7493 21.1367 47.1934 21.1367C46.4505 21.1367 45.8672 20.9453 45.4434 20.5625C45.0241 20.1797 44.8145 19.6351 44.8145 18.9287C44.8145 17.4157 46.0244 16.6227 48.4443 16.5498L49.7158 16.5088V16.0439C49.7158 15.4561 49.5882 15.0231 49.333 14.7451C49.0824 14.4626 48.679 14.3213 48.123 14.3213C47.4987 14.3213 46.7923 14.5127 46.0039 14.8955L45.6553 14.0273C46.0244 13.8268 46.4277 13.6696 46.8652 13.5557C47.3073 13.4417 47.7493 13.3848 48.1914 13.3848C49.0846 13.3848 49.7454 13.583 50.1738 13.9795C50.6068 14.376 50.8232 15.0117 50.8232 15.8867V21H49.9824ZM47.4189 20.2002C48.1253 20.2002 48.679 20.0065 49.0801 19.6191C49.4857 19.2318 49.6885 18.6895 49.6885 17.9922V17.3154L48.5537 17.3633C47.6514 17.3952 46.9997 17.5365 46.5986 17.7871C46.2021 18.0332 46.0039 18.4183 46.0039 18.9424C46.0039 19.3525 46.127 19.6647 46.373 19.8789C46.6237 20.0931 46.9723 20.2002 47.4189 20.2002ZM54.3027 21H53.168V10.3633H54.3027V21ZM57.8438 21H56.709V13.5078H57.8438V21ZM56.6133 11.4775C56.6133 11.2178 56.6771 11.0286 56.8047 10.9102C56.9323 10.7871 57.0918 10.7256 57.2832 10.7256C57.4655 10.7256 57.6227 10.7871 57.7549 10.9102C57.887 11.0332 57.9531 11.2223 57.9531 11.4775C57.9531 11.7327 57.887 11.9242 57.7549 12.0518C57.6227 12.1748 57.4655 12.2363 57.2832 12.2363C57.0918 12.2363 56.9323 12.1748 56.8047 12.0518C56.6771 11.9242 56.6133 11.7327 56.6133 11.4775ZM69.7998 21V16.126C69.7998 15.529 69.6722 15.0824 69.417 14.7861C69.1618 14.4854 68.7653 14.335 68.2275 14.335C67.5212 14.335 66.9993 14.5378 66.6621 14.9434C66.3249 15.349 66.1562 15.9733 66.1562 16.8164V21H65.0215V16.126C65.0215 15.529 64.8939 15.0824 64.6387 14.7861C64.3835 14.4854 63.9847 14.335 63.4424 14.335C62.7314 14.335 62.2096 14.5492 61.877 14.9775C61.5488 15.4014 61.3848 16.0986 61.3848 17.0693V21H60.25V13.5078H61.1729L61.3574 14.5332H61.4121C61.6263 14.1686 61.9271 13.8838 62.3145 13.6787C62.7064 13.4736 63.1439 13.3711 63.627 13.3711C64.7982 13.3711 65.5638 13.7949 65.9238 14.6426H65.9785C66.2018 14.2507 66.5254 13.9408 66.9492 13.7129C67.373 13.485 67.8561 13.3711 68.3984 13.3711C69.2461 13.3711 69.8796 13.5898 70.2988 14.0273C70.7227 14.4603 70.9346 15.1553 70.9346 16.1123V21H69.7998ZM76.4443 21.1367C75.3369 21.1367 74.4619 20.7995 73.8193 20.125C73.1813 19.4505 72.8623 18.514 72.8623 17.3154C72.8623 16.1077 73.1585 15.1484 73.751 14.4375C74.348 13.7266 75.1478 13.3711 76.1504 13.3711C77.0892 13.3711 77.832 13.681 78.3789 14.3008C78.9258 14.916 79.1992 15.7295 79.1992 16.7412V17.459H74.0381C74.0609 18.3385 74.2819 19.0062 74.7012 19.4619C75.125 19.9176 75.7197 20.1455 76.4854 20.1455C77.292 20.1455 78.0895 19.9769 78.8779 19.6396V20.6514C78.4769 20.8245 78.0964 20.9476 77.7363 21.0205C77.3809 21.098 76.9502 21.1367 76.4443 21.1367ZM76.1367 14.3213C75.5352 14.3213 75.0544 14.5173 74.6943 14.9092C74.3389 15.3011 74.1292 15.8434 74.0654 16.5361H77.9824C77.9824 15.8206 77.8229 15.2738 77.5039 14.8955C77.1849 14.5127 76.7292 14.3213 76.1367 14.3213ZM86.2676 21V16.1533C86.2676 15.5426 86.1286 15.0869 85.8506 14.7861C85.5726 14.4854 85.1374 14.335 84.5449 14.335C83.7611 14.335 83.1868 14.5469 82.8223 14.9707C82.4577 15.3945 82.2754 16.0941 82.2754 17.0693V21H81.1406V13.5078H82.0635L82.248 14.5332H82.3027C82.5352 14.1641 82.861 13.8792 83.2803 13.6787C83.6995 13.4736 84.1667 13.3711 84.6816 13.3711C85.584 13.3711 86.263 13.5898 86.7188 14.0273C87.1745 14.4603 87.4023 15.1553 87.4023 16.1123V21H86.2676ZM92.1602 20.2002C92.3607 20.2002 92.5544 20.1865 92.7412 20.1592C92.9281 20.1273 93.0762 20.0954 93.1855 20.0635V20.9316C93.0625 20.9909 92.8802 21.0387 92.6387 21.0752C92.4017 21.1162 92.1875 21.1367 91.9961 21.1367C90.5469 21.1367 89.8223 20.3734 89.8223 18.8467V14.3896H88.749V13.8428L89.8223 13.3711L90.3008 11.7715H90.957V13.5078H93.1309V14.3896H90.957V18.7988C90.957 19.25 91.0641 19.5964 91.2783 19.8379C91.4925 20.0794 91.7865 20.2002 92.1602 20.2002ZM99.2969 21L99.0713 19.9336H99.0166C98.6429 20.403 98.2692 20.722 97.8955 20.8906C97.5264 21.0547 97.0638 21.1367 96.5078 21.1367C95.765 21.1367 95.1816 20.9453 94.7578 20.5625C94.3385 20.1797 94.1289 19.6351 94.1289 18.9287C94.1289 17.4157 95.3389 16.6227 97.7588 16.5498L99.0303 16.5088V16.0439C99.0303 15.4561 98.9027 15.0231 98.6475 14.7451C98.3968 14.4626 97.9935 14.3213 97.4375 14.3213C96.8132 14.3213 96.1068 14.5127 95.3184 14.8955L94.9697 14.0273C95.3389 13.8268 95.7422 13.6696 96.1797 13.5557C96.6217 13.4417 97.0638 13.3848 97.5059 13.3848C98.3991 13.3848 99.0599 13.583 99.4883 13.9795C99.9212 14.376 100.138 15.0117 100.138 15.8867V21H99.2969ZM96.7334 20.2002C97.4398 20.2002 97.9935 20.0065 98.3945 19.6191C98.8001 19.2318 99.0029 18.6895 99.0029 17.9922V17.3154L97.8682 17.3633C96.9658 17.3952 96.3141 17.5365 95.9131 17.7871C95.5166 18.0332 95.3184 18.4183 95.3184 18.9424C95.3184 19.3525 95.4414 19.6647 95.6875 19.8789C95.9382 20.0931 96.2868 20.2002 96.7334 20.2002ZM105.477 21.1367C104.392 21.1367 103.551 20.804 102.954 20.1387C102.362 19.4688 102.065 18.5231 102.065 17.3018C102.065 16.0485 102.366 15.0801 102.968 14.3965C103.574 13.7129 104.435 13.3711 105.552 13.3711C105.912 13.3711 106.272 13.4098 106.632 13.4873C106.992 13.5648 107.274 13.6559 107.479 13.7607L107.131 14.7246C106.88 14.6243 106.607 14.5423 106.311 14.4785C106.014 14.4102 105.752 14.376 105.524 14.376C104.002 14.376 103.241 15.3467 103.241 17.2881C103.241 18.2087 103.426 18.915 103.795 19.4072C104.169 19.8994 104.72 20.1455 105.449 20.1455C106.074 20.1455 106.714 20.0111 107.37 19.7422V20.7471C106.869 21.0068 106.238 21.1367 105.477 21.1367ZM106.488 22.9756C106.488 23.4176 106.313 23.7594 105.962 24.001C105.616 24.2425 105.101 24.3633 104.417 24.3633C104.185 24.3633 103.966 24.3428 103.761 24.3018V23.5771C103.966 23.6136 104.203 23.6318 104.472 23.6318C104.832 23.6318 105.103 23.5863 105.285 23.4951C105.472 23.404 105.565 23.2354 105.565 22.9893C105.565 22.7933 105.474 22.6338 105.292 22.5107C105.114 22.3923 104.777 22.2943 104.28 22.2168L104.882 21H105.634L105.258 21.7861C106.078 21.9639 106.488 22.3604 106.488 22.9756ZM113.762 21L113.536 19.9336H113.481C113.108 20.403 112.734 20.722 112.36 20.8906C111.991 21.0547 111.529 21.1367 110.973 21.1367C110.23 21.1367 109.646 20.9453 109.223 20.5625C108.803 20.1797 108.594 19.6351 108.594 18.9287C108.594 17.4157 109.804 16.6227 112.224 16.5498L113.495 16.5088V16.0439C113.495 15.4561 113.368 15.0231 113.112 14.7451C112.862 14.4626 112.458 14.3213 111.902 14.3213C111.278 14.3213 110.572 14.5127 109.783 14.8955L109.435 14.0273C109.804 13.8268 110.207 13.6696 110.645 13.5557C111.087 13.4417 111.529 13.3848 111.971 13.3848C112.864 13.3848 113.525 13.583 113.953 13.9795C114.386 14.376 114.603 15.0117 114.603 15.8867V21H113.762ZM111.198 20.2002C111.905 20.2002 112.458 20.0065 112.859 19.6191C113.265 19.2318 113.468 18.6895 113.468 17.9922V17.3154L112.333 17.3633C111.431 17.3952 110.779 17.5365 110.378 17.7871C109.981 18.0332 109.783 18.4183 109.783 18.9424C109.783 19.3525 109.906 19.6647 110.152 19.8789C110.403 20.0931 110.752 20.2002 111.198 20.2002ZM112.88 12.5029C112.684 12.5029 112.493 12.4619 112.306 12.3799C112.119 12.2933 111.934 12.1999 111.752 12.0996C111.574 11.9948 111.401 11.9014 111.232 11.8193C111.068 11.7327 110.909 11.6895 110.754 11.6895C110.526 11.6895 110.353 11.7578 110.234 11.8945C110.12 12.0312 110.032 12.2386 109.968 12.5166H109.298C109.357 11.9652 109.517 11.5345 109.776 11.2246C110.041 10.9102 110.38 10.7529 110.795 10.7529C111.005 10.7529 111.207 10.7962 111.403 10.8828C111.599 10.9648 111.786 11.0583 111.964 11.1631C112.142 11.2633 112.312 11.3568 112.477 11.4434C112.641 11.5254 112.796 11.5664 112.941 11.5664C113.165 11.5664 113.331 11.5003 113.44 11.3682C113.55 11.2314 113.639 11.0218 113.707 10.7393H114.384C114.325 11.2907 114.165 11.7236 113.905 12.0381C113.65 12.348 113.308 12.5029 112.88 12.5029ZM123.414 17.2471C123.414 18.4684 123.106 19.4232 122.491 20.1113C121.876 20.7949 121.026 21.1367 119.941 21.1367C119.271 21.1367 118.677 20.9795 118.157 20.665C117.638 20.3506 117.237 19.8994 116.954 19.3115C116.672 18.7236 116.53 18.0355 116.53 17.2471C116.53 16.0257 116.836 15.0755 117.446 14.3965C118.057 13.7129 118.905 13.3711 119.989 13.3711C121.037 13.3711 121.869 13.7197 122.484 14.417C123.104 15.1143 123.414 16.0576 123.414 17.2471ZM117.706 17.2471C117.706 18.2041 117.897 18.9333 118.28 19.4346C118.663 19.9359 119.226 20.1865 119.969 20.1865C120.712 20.1865 121.274 19.9382 121.657 19.4414C122.045 18.9401 122.238 18.2087 122.238 17.2471C122.238 16.2946 122.045 15.5723 121.657 15.0801C121.274 14.5833 120.707 14.335 119.955 14.335C119.212 14.335 118.652 14.5788 118.273 15.0664C117.895 15.554 117.706 16.2809 117.706 17.2471Z" fill="#1B1B1B"/>
    </svg>
  );
  const tag_vaga_remoto = (
    <svg width="81" height="30" viewBox="0 0 81 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="81" height="30" rx="4" fill="#E7E7E7"/>
      <path d="M16.5361 16.8438V21H15.374V11.0059H18.1152C19.3411 11.0059 20.2458 11.2406 20.8291 11.71C21.417 12.1794 21.7109 12.8857 21.7109 13.8291C21.7109 15.1507 21.041 16.0439 19.7012 16.5088L22.415 21H21.041L18.6211 16.8438H16.5361ZM16.5361 15.8457H18.1289C18.9492 15.8457 19.5508 15.6839 19.9336 15.3604C20.3164 15.0322 20.5078 14.5423 20.5078 13.8906C20.5078 13.2298 20.3118 12.7536 19.9199 12.4619C19.5326 12.1702 18.9082 12.0244 18.0469 12.0244H16.5361V15.8457ZM27.0225 21.1367C25.915 21.1367 25.04 20.7995 24.3975 20.125C23.7594 19.4505 23.4404 18.514 23.4404 17.3154C23.4404 16.1077 23.7367 15.1484 24.3291 14.4375C24.9261 13.7266 25.7259 13.3711 26.7285 13.3711C27.6673 13.3711 28.4102 13.681 28.957 14.3008C29.5039 14.916 29.7773 15.7295 29.7773 16.7412V17.459H24.6162C24.639 18.3385 24.86 19.0062 25.2793 19.4619C25.7031 19.9176 26.2979 20.1455 27.0635 20.1455C27.8701 20.1455 28.6676 19.9769 29.4561 19.6396V20.6514C29.055 20.8245 28.6745 20.9476 28.3145 21.0205C27.959 21.098 27.5283 21.1367 27.0225 21.1367ZM26.7148 14.3213C26.1133 14.3213 25.6325 14.5173 25.2725 14.9092C24.917 15.3011 24.7074 15.8434 24.6436 16.5361H28.5605C28.5605 15.8206 28.401 15.2738 28.082 14.8955C27.763 14.5127 27.3073 14.3213 26.7148 14.3213ZM41.2686 21V16.126C41.2686 15.529 41.141 15.0824 40.8857 14.7861C40.6305 14.4854 40.234 14.335 39.6963 14.335C38.9899 14.335 38.4681 14.5378 38.1309 14.9434C37.7936 15.349 37.625 15.9733 37.625 16.8164V21H36.4902V16.126C36.4902 15.529 36.3626 15.0824 36.1074 14.7861C35.8522 14.4854 35.4535 14.335 34.9111 14.335C34.2002 14.335 33.6784 14.5492 33.3457 14.9775C33.0176 15.4014 32.8535 16.0986 32.8535 17.0693V21H31.7188V13.5078H32.6416L32.8262 14.5332H32.8809C33.0951 14.1686 33.3958 13.8838 33.7832 13.6787C34.1751 13.4736 34.6126 13.3711 35.0957 13.3711C36.2669 13.3711 37.0326 13.7949 37.3926 14.6426H37.4473C37.6706 14.2507 37.9941 13.9408 38.418 13.7129C38.8418 13.485 39.3249 13.3711 39.8672 13.3711C40.7148 13.3711 41.3483 13.5898 41.7676 14.0273C42.1914 14.4603 42.4033 15.1553 42.4033 16.1123V21H41.2686ZM51.2148 17.2471C51.2148 18.4684 50.9072 19.4232 50.292 20.1113C49.6768 20.7949 48.8268 21.1367 47.7422 21.1367C47.0723 21.1367 46.4775 20.9795 45.958 20.665C45.4385 20.3506 45.0374 19.8994 44.7549 19.3115C44.4723 18.7236 44.3311 18.0355 44.3311 17.2471C44.3311 16.0257 44.6364 15.0755 45.2471 14.3965C45.8577 13.7129 46.7054 13.3711 47.79 13.3711C48.8382 13.3711 49.6699 13.7197 50.2852 14.417C50.9049 15.1143 51.2148 16.0576 51.2148 17.2471ZM45.5068 17.2471C45.5068 18.2041 45.6982 18.9333 46.0811 19.4346C46.4639 19.9359 47.0267 20.1865 47.7695 20.1865C48.5124 20.1865 49.0752 19.9382 49.458 19.4414C49.8454 18.9401 50.0391 18.2087 50.0391 17.2471C50.0391 16.2946 49.8454 15.5723 49.458 15.0801C49.0752 14.5833 48.5078 14.335 47.7559 14.335C47.013 14.335 46.4525 14.5788 46.0742 15.0664C45.696 15.554 45.5068 16.2809 45.5068 17.2471ZM55.6309 20.2002C55.8314 20.2002 56.0251 20.1865 56.2119 20.1592C56.3988 20.1273 56.5469 20.0954 56.6562 20.0635V20.9316C56.5332 20.9909 56.3509 21.0387 56.1094 21.0752C55.8724 21.1162 55.6582 21.1367 55.4668 21.1367C54.0176 21.1367 53.293 20.3734 53.293 18.8467V14.3896H52.2197V13.8428L53.293 13.3711L53.7715 11.7715H54.4277V13.5078H56.6016V14.3896H54.4277V18.7988C54.4277 19.25 54.5348 19.5964 54.749 19.8379C54.9632 20.0794 55.2572 20.2002 55.6309 20.2002ZM64.627 17.2471C64.627 18.4684 64.3193 19.4232 63.7041 20.1113C63.0889 20.7949 62.2389 21.1367 61.1543 21.1367C60.4844 21.1367 59.8896 20.9795 59.3701 20.665C58.8506 20.3506 58.4495 19.8994 58.167 19.3115C57.8844 18.7236 57.7432 18.0355 57.7432 17.2471C57.7432 16.0257 58.0485 15.0755 58.6592 14.3965C59.2699 13.7129 60.1175 13.3711 61.2021 13.3711C62.2503 13.3711 63.082 13.7197 63.6973 14.417C64.3171 15.1143 64.627 16.0576 64.627 17.2471ZM58.9189 17.2471C58.9189 18.2041 59.1104 18.9333 59.4932 19.4346C59.876 19.9359 60.4388 20.1865 61.1816 20.1865C61.9245 20.1865 62.4873 19.9382 62.8701 19.4414C63.2575 18.9401 63.4512 18.2087 63.4512 17.2471C63.4512 16.2946 63.2575 15.5723 62.8701 15.0801C62.4873 14.5833 61.9199 14.335 61.168 14.335C60.4251 14.335 59.8646 14.5788 59.4863 15.0664C59.1081 15.554 58.9189 16.2809 58.9189 17.2471Z" fill="#1B1B1B"/>
    </svg>
  );
  const tag_vaga_clt = (
    <svg width="52" height="30" viewBox="0 0 52 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="52" height="30" rx="4" fill="#E7E7E7"/>
      <path d="M19.6533 11.9014C18.555 11.9014 17.6868 12.2682 17.0488 13.002C16.4154 13.7311 16.0986 14.7314 16.0986 16.0029C16.0986 17.3109 16.404 18.3226 17.0146 19.0381C17.6299 19.749 18.5049 20.1045 19.6396 20.1045C20.3369 20.1045 21.1322 19.9792 22.0254 19.7285V20.7471C21.3327 21.0068 20.4782 21.1367 19.4619 21.1367C17.9899 21.1367 16.8529 20.6901 16.0508 19.7969C15.2533 18.9036 14.8545 17.6344 14.8545 15.9893C14.8545 14.9593 15.0459 14.057 15.4287 13.2822C15.8161 12.5075 16.3721 11.9105 17.0967 11.4912C17.8258 11.0719 18.6826 10.8623 19.667 10.8623C20.7152 10.8623 21.6312 11.0537 22.415 11.4365L21.9229 12.4346C21.1663 12.0791 20.4098 11.9014 19.6533 11.9014ZM24.2061 21V11.0059H25.3682V19.9473H29.7773V21H24.2061ZM34.5557 21H33.3936V12.0381H30.2285V11.0059H37.7207V12.0381H34.5557V21Z" fill="#1B1B1B"/>
    </svg>
  );

    const logo = (
      <svg
        width="139"
        height="33"
        viewBox="0 0 139 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M58.6523 8.86719L53.0391 26H47.5898L42 8.86719H47.2031L49.5352 17.5508C49.6211 17.8789 49.7188 18.3008 49.8281 18.8164C49.9453 19.3242 50.0508 19.832 50.1445 20.3398C50.2461 20.8477 50.3086 21.2617 50.332 21.582C50.3633 21.2617 50.4219 20.8516 50.5078 20.3516C50.5938 19.8516 50.6875 19.3516 50.7891 18.8516C50.8984 18.3438 51 17.9258 51.0938 17.5977L53.4727 8.86719H58.6523ZM66.7266 12.4883C68.4062 12.4883 69.7188 12.9062 70.6641 13.7422C71.6094 14.5703 72.082 15.7539 72.082 17.293V26H68.9062L68.0273 24.2422H67.9336C67.5586 24.7109 67.1719 25.0938 66.7734 25.3906C66.3828 25.6797 65.9336 25.8906 65.4258 26.0234C64.918 26.1641 64.2969 26.2344 63.5625 26.2344C62.7969 26.2344 62.1094 26.0781 61.5 25.7656C60.8906 25.4531 60.4102 24.9805 60.0586 24.3477C59.707 23.7148 59.5312 22.9141 59.5312 21.9453C59.5312 20.5234 60.0234 19.4688 61.0078 18.7812C61.9922 18.0938 63.418 17.707 65.2852 17.6211L67.5 17.5508V17.3633C67.5 16.7695 67.3516 16.3477 67.0547 16.0977C66.7656 15.8477 66.375 15.7227 65.8828 15.7227C65.3594 15.7227 64.7734 15.8164 64.125 16.0039C63.4844 16.1836 62.8398 16.418 62.1914 16.707L60.8672 13.6836C61.6328 13.293 62.5 12.9961 63.4688 12.793C64.4375 12.5898 65.5234 12.4883 66.7266 12.4883ZM67.5234 20.0703L66.4688 20.1172C65.625 20.1484 65.0312 20.2969 64.6875 20.5625C64.3516 20.8203 64.1836 21.1914 64.1836 21.6758C64.1836 22.1289 64.3047 22.4648 64.5469 22.6836C64.7891 22.8945 65.1094 23 65.5078 23C66.0625 23 66.5352 22.8242 66.9258 22.4727C67.3242 22.1211 67.5234 21.6641 67.5234 21.1016V20.0703ZM79.7344 31.7656C77.8516 31.7656 76.3984 31.4492 75.375 30.8164C74.3594 30.1914 73.8516 29.2891 73.8516 28.1094C73.8516 27.3203 74.0977 26.668 74.5898 26.1523C75.082 25.6367 75.8203 25.2656 76.8047 25.0391C76.3984 24.8672 76.043 24.5898 75.7383 24.207C75.4414 23.8242 75.293 23.4453 75.293 23.0703C75.293 22.6562 75.4062 22.293 75.6328 21.9805C75.8594 21.6602 76.332 21.2812 77.0508 20.8438C76.3633 20.5391 75.8203 20.0625 75.4219 19.4141C75.0312 18.7656 74.8359 17.9766 74.8359 17.0469C74.8359 16.0859 75.0547 15.2656 75.4922 14.5859C75.9375 13.9062 76.582 13.3867 77.4258 13.0273C78.2773 12.668 79.3125 12.4883 80.5312 12.4883C80.6953 12.4883 80.9453 12.5039 81.2812 12.5352C81.6172 12.5586 81.957 12.5898 82.3008 12.6289C82.6445 12.6602 82.9102 12.6914 83.0977 12.7227H87.7266V14.9375L85.9102 15.6055C86.0352 15.832 86.1289 16.0781 86.1914 16.3438C86.2539 16.6094 86.2852 16.8906 86.2852 17.1875C86.2852 18.6172 85.7812 19.7266 84.7734 20.5156C83.7734 21.3047 82.2773 21.6992 80.2852 21.6992C79.793 21.6992 79.4023 21.668 79.1133 21.6055C79.0586 21.707 79.0156 21.8086 78.9844 21.9102C78.9609 22.0039 78.9492 22.0938 78.9492 22.1797C78.9492 22.3594 79.0547 22.5039 79.2656 22.6133C79.4844 22.7148 79.7461 22.7852 80.0508 22.8242C80.3633 22.8633 80.6602 22.8828 80.9414 22.8828H83.1445C84.6367 22.8828 85.7539 23.1953 86.4961 23.8203C87.2383 24.4453 87.6094 25.3867 87.6094 26.6445C87.6094 28.2617 86.918 29.5195 85.5352 30.418C84.1602 31.3164 82.2266 31.7656 79.7344 31.7656ZM79.957 28.9062C80.5117 28.9062 81.0703 28.8555 81.6328 28.7539C82.1953 28.6602 82.668 28.5039 83.0508 28.2852C83.4336 28.0664 83.625 27.7773 83.625 27.418C83.625 27.1445 83.5117 26.9375 83.2852 26.7969C83.0586 26.6641 82.7656 26.5742 82.4062 26.5273C82.0469 26.4805 81.668 26.457 81.2695 26.457H79.4883C79.1602 26.457 78.8594 26.5078 78.5859 26.6094C78.3203 26.7188 78.1094 26.8633 77.9531 27.043C77.7969 27.2227 77.7188 27.4258 77.7188 27.6523C77.7188 28.0273 77.9219 28.3281 78.3281 28.5547C78.7344 28.7891 79.2773 28.9062 79.957 28.9062ZM80.5781 19.1094C81.0156 19.1094 81.3516 18.9414 81.5859 18.6055C81.8281 18.2695 81.9492 17.7656 81.9492 17.0938C81.9492 16.4062 81.8359 15.8906 81.6094 15.5469C81.3828 15.2031 81.0391 15.0312 80.5781 15.0312C80.1016 15.0312 79.7461 15.2031 79.5117 15.5469C79.2773 15.8828 79.1602 16.3906 79.1602 17.0703C79.1602 17.75 79.2773 18.2617 79.5117 18.6055C79.7461 18.9414 80.1016 19.1094 80.5781 19.1094ZM96.2344 12.4883C97.9141 12.4883 99.2266 12.9062 100.172 13.7422C101.117 14.5703 101.59 15.7539 101.59 17.293V26H98.4141L97.5352 24.2422H97.4414C97.0664 24.7109 96.6797 25.0938 96.2812 25.3906C95.8906 25.6797 95.4414 25.8906 94.9336 26.0234C94.4258 26.1641 93.8047 26.2344 93.0703 26.2344C92.3047 26.2344 91.6172 26.0781 91.0078 25.7656C90.3984 25.4531 89.918 24.9805 89.5664 24.3477C89.2148 23.7148 89.0391 22.9141 89.0391 21.9453C89.0391 20.5234 89.5312 19.4688 90.5156 18.7812C91.5 18.0938 92.9258 17.707 94.793 17.6211L97.0078 17.5508V17.3633C97.0078 16.7695 96.8594 16.3477 96.5625 16.0977C96.2734 15.8477 95.8828 15.7227 95.3906 15.7227C94.8672 15.7227 94.2812 15.8164 93.6328 16.0039C92.9922 16.1836 92.3477 16.418 91.6992 16.707L90.375 13.6836C91.1406 13.293 92.0078 12.9961 92.9766 12.793C93.9453 12.5898 95.0312 12.4883 96.2344 12.4883ZM97.0312 20.0703L95.9766 20.1172C95.1328 20.1484 94.5391 20.2969 94.1953 20.5625C93.8594 20.8203 93.6914 21.1914 93.6914 21.6758C93.6914 22.1289 93.8125 22.4648 94.0547 22.6836C94.2969 22.8945 94.6172 23 95.0156 23C95.5703 23 96.043 22.8242 96.4336 22.4727C96.832 22.1211 97.0312 21.6641 97.0312 21.1016V20.0703ZM114.574 21.9219C114.574 22.7656 114.387 23.5117 114.012 24.1602C113.637 24.8086 113.035 25.3164 112.207 25.6836C111.387 26.0508 110.305 26.2344 108.961 26.2344C108.016 26.2344 107.168 26.1836 106.418 26.082C105.676 25.9805 104.922 25.7852 104.156 25.4961V21.8281C104.992 22.2109 105.844 22.4883 106.711 22.6602C107.578 22.8242 108.262 22.9062 108.762 22.9062C109.277 22.9062 109.652 22.8516 109.887 22.7422C110.129 22.625 110.25 22.4531 110.25 22.2266C110.25 22.0312 110.168 21.8672 110.004 21.7344C109.848 21.5938 109.562 21.4336 109.148 21.2539C108.742 21.0742 108.168 20.832 107.426 20.5273C106.691 20.2227 106.078 19.8906 105.586 19.5312C105.102 19.1719 104.738 18.7422 104.496 18.2422C104.254 17.7422 104.133 17.1289 104.133 16.4023C104.133 15.1055 104.633 14.1289 105.633 13.4727C106.633 12.8164 107.957 12.4883 109.605 12.4883C110.48 12.4883 111.305 12.5859 112.078 12.7812C112.852 12.9688 113.652 13.2461 114.48 13.6133L113.227 16.5664C112.57 16.2695 111.906 16.0312 111.234 15.8516C110.562 15.6719 110.027 15.582 109.629 15.582C109.27 15.582 108.992 15.6289 108.797 15.7227C108.602 15.8164 108.504 15.9531 108.504 16.1328C108.504 16.2969 108.57 16.4414 108.703 16.5664C108.844 16.6914 109.105 16.8359 109.488 17C109.871 17.1641 110.43 17.3945 111.164 17.6914C111.938 18.0039 112.574 18.3398 113.074 18.6992C113.582 19.0508 113.957 19.4805 114.199 19.9883C114.449 20.4961 114.574 21.1406 114.574 21.9219ZM124.957 26H120.328V12.6523H116.145V8.86719H129.129V12.6523H124.957V26ZM131.578 26V8.86719H136.23V26H131.578Z"
          fill="#6D6D6D"
        />
        <rect y="2" width="28" height="28" fill="#38B000" />
      </svg>
    );

    const logo_vaga = (
        <svg width="80" height="80" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.9531 0H54V18H29.9531V0ZM29.9531 54V24.0469H54V54H29.9531ZM0 54V36H24.0469V54H0ZM0 29.9531V0H24.0469V29.9531H0Z" fill="black"/>
        </svg>
      );
  
    return (
      <>
        <Layout.Header className="site-layout-sub-header-background layout-header" style={{ height: "80px" }}>
          <Row justify="center" style={{ width: "100%" }}>
            <Col span={8} style={{ marginTop: "1%" }}>
              <Row>
                <div style={{ marginLeft: "35%" }}>{logo}</div>
              </Row>
            </Col>
            <Col span={8} style={{ marginTop: "1%", display: "flex", flexDirection: "row" }}>
              <Row justify="center" style={{ width: "100%" }}>
                <h3 style={{ marginRight: "1%" }}>Vagas</h3>
                <h3 style={{ marginLeft: "1%", fontWeight: "bold" }}>Planos para empresas</h3>
              </Row>
            </Col>
            <Col span={8} style={{ marginTop: "1%" }}>
              <Row justify="center" style={{ marginLeft: "8%" }}>
                <UserButton
                  username={"João da Silva"}
                  accessLevel={"account_admin"}
                />
              </Row>
            </Col>
          </Row>
        </Layout.Header>
        <Layout >
          <Row justify="center">
            <Col span={18}>
                <Row>
                    <Card bordered={false} style={{ height: "100%", width: "100%", alignContent: "center", marginTop: "2%" }}>
                      <Row align="middle">
                        <Col span ={4}>
                            <Row justify="center">
                              <div>{logo_vaga}</div>
                            </Row>
                        </Col>
                        <Col span ={16}>
                          <Row>
                          <h2>Desenvolvedor Back-end Java Júnior</h2>
                          <div class="imagemGreen" style={{marginInline:"10px",position: "relative"}}>{tag_vaga_clt}</div>
                          <div class="imagemGreen" style={{marginInline:"10px",position: "relative"}}>{tag_vaga_remoto}</div>
                          <div class="imagemGreen" style={{marginInline:"10px" ,position: "relative"}}>{tag_vaga_alimenta}</div>
                          </Row>
                            <h2>LoremTI</h2>
                            <h2>São Paulo - SP</h2>
                        </Col>
                        <Col span ={4}>
                          <Row align="middle">
                            <Button type="primary" style={{ marginRight: "0%", marginTop: "0%" }} href="/user/DeveloperApply">Candidatar-se</Button>
                          </Row>
                        </Col>
                      </Row>
                    </Card>
                </Row>
                <Row>
                  <Card bordered={false} style={{ height: "100%", width: "100%", alignContent: "center", marginTop: "2%" }}>
                    <div style={{ justifyContent: "center", marginLeft: "4%", marginTop: "1%" }}>
                    <Row justify="start">
                      <Col span={23} >
                        <h2>LoremTI</h2>
                        <Paragraph >Médio porte</Paragraph>
                        <Paragraph >+200 funcionários</Paragraph>
                        <h2>Descrição da empresa</h2>
                        <Paragraph class="justificado">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue lorem vel lectus tristique, in bibendum lorem laoreet. Curabitur tortor felis, molestie ut tellus nec, lacinia vulputate velit. Quisque ornare suscipit porta. Maecenas metus augue, imperdiet vitae accumsan eu, hendrerit fermentum erat. Vestibulum libero libero, volutpat id pulvinar in, placerat at purus. Proin consequat nisi tortor, ac lobortis odio ultrices sed. Etiam dolor quam, scelerisque vitae ex vel, feugiat semper felis. Nulla venenatis auctor rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In mattis nibh mauris, non pretium eros feugiat eget.</Paragraph>
                      </Col>
                    </Row>
                    </div>
                  </Card>
                </Row>
                <Row>
                  <Card bordered={false} style={{ height: "100%", width: "100%", alignContent: "center", marginTop: "2%" }}>
                    <div style={{ justifyContent: "center", marginLeft: "4%", marginTop: "1%" }}>
                    <Row justify="start">
                      <Col span={24}>
                        <h2>Descrição da vaga</h2>
                        <Paragraph class="justificado">• Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
                        <Paragraph class="justificado">• Curabitur nec justo ac leo eleifend finibus.</Paragraph>
                        <Paragraph class="justificado">• Donec quis augue ultrices, rhoncus mauris ac, euismod est.</Paragraph>
                        <Paragraph class="justificado">• Duis euismod quam eget lobortis faucibus.</Paragraph>
                        <h2>Requisitos</h2>
                        <Paragraph class="justificado">• Sed eget nulla placerat, aliquet ex quis, tincidunt enim.</Paragraph>
                        <Paragraph class="justificado">• Phasellus sit amet urna mattis, sollicitudin est in, convallis massa.</Paragraph>
                        <Paragraph class="justificado">• Ut dignissim felis vel faucibus elementum.</Paragraph>
                        <h2>Benefícios</h2>
                        <Paragraph class="justificado">• Sed vulputate justo a metus accumsan aliquam.</Paragraph>
                        <Paragraph class="justificado">• Duis euismod quam eget lobortis faucibus.</Paragraph>
                        <Paragraph class="justificado">• Phasellus sit amet urna mattis, sollicitudin est in, convallis massa.</Paragraph>
                        <Row>
                        <div class="imagemGreen" style={{marginTop:"1%",marginInline:"0px",position: "relative"}}>{tag_vaga_clt}</div>
                        <div class="imagemGreen" style={{marginTop:"1%",marginInline:"15px",position: "relative"}}>{tag_vaga_remoto}</div>
                        <div class="imagemGreen" style={{marginTop:"1%",marginInline:"0px" ,position: "relative"}}>{tag_vaga_alimenta}</div>
                        </Row>
                      </Col>
                    </Row>
                    </div>
                  </Card>
                </Row>
            </Col>
          </Row>
        </Layout>
        <Layout.Footer style={{ textAlign: "center", marginTop: "5%", position:"relative", width:"100%", bottom:0 }}>
          <Row justify="center" style={{ width: "100%" }} align="bottom">
            <Col span={8}>
              <Row>
                <div style={{ marginLeft: "30%" }}>{logo}</div>
              </Row>
              <Row>
                <p style={{ marginLeft: "30%" }}>CNPJ 00.000.000/000-00</p>
              </Row>
            </Col>
            <Col span={8}>
              <Row justify="center" style={{ width: "100%", position: "absolute", bottom: "1px" }} align="bottom">
                <p>VagasTI - 2022</p>
              </Row>
            </Col>
            <Col span={8} style={{ marginTop: "1%", display: "flex", flexDirection: "column" }}>
              <Row justify="end" style={{ marginRight: "30%" }}>
                <Link>Termos de Serviço</Link>
              </Row >
              <Row justify="end" style={{ marginRight: "30%" }}>
                <Link>Politica de Privacidade</Link>
              </Row>
              <Row justify="end" style={{ marginRight: "30%" }}>
                <Link>Sobre Nós</Link>
              </Row >
            </Col>
          </Row>
        </Layout.Footer>
      </>
    );
  };
  
  export default VagaEspecifica;