<template>
  <svg xmlns="http://www.w3.org/2000/svg" display="none">

    <!-- Mosque Icon -->
    <symbol id="icon-mosque" viewBox="0 0 125 137">
      <path d="M75.4038 122.386C103.052 116.415 123.77 91.8193 123.77 62.3847C123.77 28.4829 96.2867 1.00003 62.3849 1.00003C28.4831 1.00003 1.00024 28.4829 1.00024 62.3847C1.00024 91.8192 21.7174 116.415 49.3656 122.386L62.3848 135.405L75.4038 122.386Z" fill="#0065FF" stroke="white" stroke-width="2"/>
      <path d="M39.0002 83.7513C39.0002 83.199 39.448 82.7513 40.0002 82.7513H83.0002C83.5525 82.7513 84.0002 83.199 84.0002 83.7513V90.1263C84.0002 90.4714 83.7204 90.7513 83.3752 90.7513H39.6252C39.2801 90.7513 39.0002 90.4714 39.0002 90.1263V83.7513Z" stroke="white" stroke-width="3"/>
      <path d="M80.5163 77.5013C80.7298 77.5013 80.9292 77.3926 81.041 77.2106C82.9239 74.1445 84.0002 70.5928 84.0002 66.8068C84.0002 57.6271 69.5002 49.7513 69.5002 49.7513C69.5002 49.7513 64.4949 46.7513 61.9169 46.7513C58.3058 46.7513 54.5002 49.2513 54.5002 49.2513C54.5002 49.2513 39.0002 57.2456 39.0002 66.8068C39.0002 70.5928 40.0766 74.1445 41.9595 77.2106C42.0713 77.3926 42.2707 77.5013 42.4842 77.5013H80.5163Z" stroke="white" stroke-width="3"/>
      <path d="M63.9181 40.4063C64.8975 40.3964 65.8982 40.2262 66.8479 39.9261C66.5353 40.3058 66.2299 40.6437 65.9744 40.8967C63.4729 43.3743 59.4284 43.4109 56.9515 41.0147C54.4871 38.6307 54.4761 34.708 56.9662 32.2417C57.2428 31.9678 57.6331 31.6355 58.0749 31.2996C57.7542 32.2565 57.5728 33.268 57.5682 34.2579C57.5605 35.8911 58.0384 37.5572 59.2853 38.7634C60.533 39.9705 62.2475 40.4232 63.9181 40.4063Z" stroke="white" stroke-width="2"/>
    </symbol>

    <!-- Close Icon -->
    <symbol id="icon-close" viewBox="0 0 24 24">
      <path d="M4 19.4678L19.468 3.99981" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M19.4688 19.4678L4.00079 3.99981" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>

    <!-- Hamburger Icon -->
    <symbol id="icon-hamburger" viewBox="0 0 24 19">
        <path d="M7.73438 1.33325H22.9983" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1.125 9.49988H23" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1.125 17.6666H15.9028" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>

    <!-- Mosque Star Icon -->
    <symbol id="icon-mosque-star" viewBox="0 0 110 110">
      <path d="M26.2517 101.438H8.53113L8.53113 49.5461L60.4548 49.5461M83.0577 90.4712V101.438H60.0238" stroke="#0065FF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M32.4075 82.1238V71.0085H54.0718M58.8715 81.2979V101.447" stroke="#0065FF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M23.6327 49.5334C19.8353 41.4132 19.7704 33.6855 23.4379 26.3505C27.1054 19.0155 34.5054 12.9246 45.6378 8.07788C56.7703 12.9246 64.1703 19.0155 67.8378 26.3505C70.5753 31.8254 71.2333 37.519 69.8119 43.4314" stroke="#0065FF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M78.2314 90.5335C91.566 90.5335 102.376 79.7237 102.376 66.3891C102.376 53.0545 91.566 42.2446 78.2314 42.2446C64.8968 42.2446 54.0869 53.0545 54.0869 66.3891C54.0869 79.7237 64.8968 90.5335 78.2314 90.5335Z" stroke="#0065FF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M78.2328 72.5384L71.003 76.3393L72.3838 68.2888L66.5348 62.5875L74.6179 61.4129L78.2328 54.0884L81.8477 61.4129L89.9308 62.5875L84.0818 68.2888L85.4625 76.3393L78.2328 72.5384Z" stroke="#0065FF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>

    <!-- Result Star Icon -->
    <symbol id="icon-result-star" viewBox="0 0 110 110">
      <path d="M8.25671 28.7419V13.5751C8.25671 10.5561 10.7041 8.10864 13.7232 8.10864H95.7207C98.7398 8.10864 101.187 10.5561 101.187 13.5751V77.351C101.187 80.37 98.7398 82.8175 95.7207 82.8175H13.7232C10.7041 82.8175 8.25671 80.37 8.25671 77.351V52.7766" stroke="#0065FF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M37.5 51.4128L30.3926 55L31.75 47.4021L26 42.0213L33.9463 40.9128L37.5 34L41.0537 40.9128L49 42.0213L43.25 47.4021L44.6074 55L37.5 51.4128Z" stroke="#0065FF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M72.5 51.4128L65.3926 55L66.75 47.4021L61 42.0213L68.9463 40.9128L72.5 34L76.0537 40.9128L84 42.0213L78.25 47.4021L79.6074 55L72.5 51.4128Z" stroke="#0065FF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M32.4004 83.364H19.6453V102.041H32.4004V83.364Z" stroke="#0065FF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M89.7986 83.364H77.0435V102.041H89.7986V83.364Z" stroke="#0065FF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>

    <!-- Nearest Icon -->
    <symbol id="icon-nearest" viewBox="0 0 32 33">
        <path d="M10.6836 31.1738H21.3239" stroke="#0065FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.031 8.35742C18.2674 9.22287 19.7147 10.3138 20.3729 11.6301C21.0311 12.9465 20.9001 14.4051 19.9801 16.006H12.0819C11.1618 14.4051 11.0309 12.9465 11.6891 11.6301C12.3473 10.3138 13.7946 9.22287 16.031 8.35742Z" stroke="#0065FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.9688 8.12684V7.03906" stroke="#0065FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18.8513 24.4827L15.9992 27.6613L8.15273 18.9165C4.26438 14.583 4.62525 7.91793 8.95874 4.02958C10.8931 2.29395 13.4003 1.33398 15.9992 1.33398C21.8214 1.33398 26.5413 6.05383 26.5413 11.8761C26.5413 14.4749 25.5813 16.9822 23.8457 18.9165" stroke="#0065FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>

    <!-- Direction Icon -->
    <symbol id="icon-direction" viewBox="0 0 32 32">
        <path d="M15.9959 12.1746C17.4089 12.1746 18.5543 11.0316 18.5543 9.6215C18.5543 8.21144 17.4089 7.06836 15.9959 7.06836C14.5829 7.06836 13.4375 8.21144 13.4375 9.6215C13.4375 11.0316 14.5829 12.1746 15.9959 12.1746Z" stroke="#0065FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.9958 16.1738C19.1367 16.1738 21.683 18.7201 21.683 21.861V22.3985H10.3086V21.861C10.3086 18.7201 12.8548 16.1738 15.9958 16.1738Z" stroke="#0065FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M23.5001 7.24455C24.6823 7.24455 25.6407 6.28563 25.6407 5.10274C25.6407 3.91986 24.6823 2.96094 23.5001 2.96094C22.3178 2.96094 21.3594 3.91986 21.3594 5.10274C21.3594 6.28563 22.3178 7.24455 23.5001 7.24455Z" stroke="#0065FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M25.7033 10.6777C26.4256 10.9632 27.0789 11.3848 27.6312 11.9109C28.771 12.9967 29.481 14.5272 29.481 16.223V16.8001H24.0781" stroke="#0065FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5.46875 3.23633V27.3316H28.9918" stroke="#0065FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2.59766 5.13281L5.3318 2.39867L8.06595 5.13281" stroke="#0065FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M26.8945 24.373L29.6287 27.1072L26.8945 29.8413" stroke="#0065FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>

    <!-- Groups Icon -->
    <symbol id="icon-groups" viewBox="0 0 32 32">
        <path d="M15.9983 16.6508C17.721 16.6508 19.1176 15.2543 19.1176 13.5315C19.1176 11.8087 17.721 10.4121 15.9983 10.4121C14.2755 10.4121 12.8789 11.8087 12.8789 13.5315C12.8789 15.2543 14.2755 16.6508 15.9983 16.6508Z" stroke="#0065FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.9988 20.4707C20.3409 20.4707 23.8608 23.9907 23.8608 28.3328V29.0936H8.13672V28.3328C8.13672 23.9907 11.6567 20.4707 15.9988 20.4707Z" stroke="#0065FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22.0017 7.89991C23.351 7.89991 24.4448 6.80608 24.4448 5.45679C24.4448 4.10749 23.351 3.01367 22.0017 3.01367C20.6524 3.01367 19.5586 4.10749 19.5586 5.45679C19.5586 6.80608 20.6524 7.89991 22.0017 7.89991Z" stroke="#0065FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M24.7617 11.2969C25.5581 11.6125 26.2784 12.0788 26.8874 12.6605C28.1442 13.8611 28.9271 15.5535 28.9271 17.4288V18.0669H25.3566" stroke="#0065FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.0017 7.89991C11.351 7.89991 12.4448 6.80608 12.4448 5.45679C12.4448 4.10749 11.351 3.01367 10.0017 3.01367C8.65241 3.01367 7.55859 4.10749 7.55859 5.45679C7.55859 6.80608 8.65241 7.89991 10.0017 7.89991Z" stroke="#0065FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.23438 11.2969C6.43798 11.6125 5.71769 12.0788 5.10868 12.6605C3.85192 13.8611 3.06904 15.5535 3.06904 17.4288V18.0669H6.63951" stroke="#0065FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>

    <!-- Mosque Groups Icon -->
    <symbol id="icon-mosque-group" viewBox="0 0 32 32">
        <path d="M19.5494 18.7754H3.04688V29.0772H19.5494V18.7754Z" stroke="#0065FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.2365 22.7559C12.75 22.7559 13.9769 23.9828 13.9769 25.4962V29.0597H8.49609V25.4962C8.49609 23.9828 9.72301 22.7559 11.2365 22.7559Z" stroke="#0065FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.0878 8.42383C14.1081 9.59262 16.0627 11.0659 16.9516 12.8437C17.8405 14.6214 17.6636 16.5913 16.4211 18.7533H5.75449C4.51196 16.5913 4.33513 14.6214 5.22402 12.8437C6.1129 11.0659 8.0675 9.59262 11.0878 8.42383Z" stroke="#0065FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22.582 12.7812H28.9886V22.4912H23.8649" stroke="#0065FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22.5977 15.7754C23.2836 16.2397 23.7344 17.0251 23.7344 17.9158V22.474" stroke="#0065FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.4531 5.8205C16.8261 5.42166 17.2689 5.0428 17.7818 4.68393C18.6558 4.07239 19.7329 3.51889 21.0132 3.02344C23.86 4.12508 25.7023 5.51372 26.5401 7.18935C27.3779 8.86498 27.2112 10.7217 26.0401 12.7594H21.6512" stroke="#0065FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>

    <!-- Share Icon -->
    <symbol id="icon-share" viewBox="0 0 16 18">
        <path d="M5.27237 9.72754L10.3633 13.3639" stroke="#112435" stroke-width="2" stroke-linejoin="round"/>
        <path d="M10.3633 4.63672L5.27237 8.27313" stroke="#112435" stroke-width="2" stroke-linejoin="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7301 3.90936C14.7301 5.11372 13.7534 6.09118 12.5483 6.09118C11.3432 6.09118 10.3665 5.11372 10.3665 3.90936C10.3665 2.70427 11.3432 1.72754 12.5483 1.72754C13.7534 1.72754 14.7301 2.70427 14.7301 3.90936Z" stroke="#112435" stroke-width="2" stroke-linejoin="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7301 14.092C14.7301 15.2963 13.7534 16.2738 12.5483 16.2738C11.3432 16.2738 10.3665 15.2963 10.3665 14.092C10.3665 12.8869 11.3432 11.9102 12.5483 11.9102C13.7534 11.9102 14.7301 12.8869 14.7301 14.092Z" stroke="#112435" stroke-width="2" stroke-linejoin="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.99965 9.00018C5.99965 10.2045 5.02293 11.182 3.81784 11.182C2.61274 11.182 1.63602 10.2045 1.63602 9.00018C1.63602 7.79509 2.61274 6.81836 3.81784 6.81836C5.02293 6.81836 5.99965 7.79509 5.99965 9.00018Z" stroke="#112435" stroke-width="2" stroke-linejoin="round"/>
    </symbol>

    <!-- Mosque V1 Icon -->
    <symbol id="icon-mosque-v1" viewBox="0 0 82 82">
        <path d="M56.4745 45.099C58.2746 45.099 59.7339 46.542 59.7339 48.3222V76H50.1983V66.5C50.1983 61.4921 46.0931 57.4323 41.029 57.4323C36.2628 57.4323 32.346 61.0285 31.9017 65.6267L31.8597 66.5V76H22.3242V48.3222C22.3242 46.542 23.7834 45.099 25.5835 45.099H56.4745ZM10.889 34.0984C13.5891 34.0984 15.778 36.263 15.778 38.9332V76H6V38.9332C6 36.263 8.18887 34.0984 10.889 34.0984ZM71.111 34.0984C73.8111 34.0984 76 36.263 76 38.9332V76H66.222V38.9332C66.222 36.263 68.4109 34.0984 71.111 34.0984ZM40.5028 7C50.3454 10.4592 56.5968 14.8197 59.2571 20.0813C61.9174 25.3429 61.3882 31.1731 57.6695 37.5718H23.3362C19.6175 31.1731 19.0883 25.3429 21.7486 20.0813C24.4089 14.8197 30.6603 10.4592 40.5028 7Z" stroke="#0065FF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>

    <!-- Mosque V2 Icon -->
    <symbol id="icon-mosque-v2" viewBox="0 0 82 82">
        <path d="M66.7855 51.2972C68.4239 51.2972 69.7521 52.6254 69.7521 54.2639V77.0008H50.4555V67.6504C50.4555 62.7351 46.4708 58.7504 41.5555 58.7504C36.9293 58.7504 33.1275 62.2801 32.6962 66.7933L32.6555 67.6504V77.0008H13.1445V54.2639C13.1445 52.6254 14.4728 51.2972 16.1112 51.2972H66.7855ZM41.0765 5.80078C53.1933 10.1071 60.8892 15.5352 64.1642 22.0851C67.4392 28.6351 66.7877 35.8929 62.2097 43.8584H19.9433C15.3653 35.8929 14.7139 28.6351 17.9889 22.0851C21.2638 15.5352 28.9597 10.1071 41.0765 5.80078Z" stroke="#0065FF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>

    <!-- Mosque V3 Icon -->
    <symbol id="icon-mosque-v3" viewBox="0 0 82 82">
        <path d="M66.7855 51.2972C68.4239 51.2972 69.7521 52.6254 69.7521 54.2639V77.0008H50.4555V67.6504C50.4555 62.7351 46.4708 58.7504 41.5555 58.7504C36.9293 58.7504 33.1275 62.2801 32.6962 66.7933L32.6555 67.6504V77.0008H13.1445V54.2639C13.1445 52.6254 14.4728 51.2972 16.1112 51.2972H66.7855ZM41.0765 5.80078C53.1933 10.1071 60.8892 15.5352 64.1642 22.0851C67.4392 28.6351 66.7877 35.8929 62.2097 43.8584H19.9433C15.3653 35.8929 14.7139 28.6351 17.9889 22.0851C21.2638 15.5352 28.9597 10.1071 41.0765 5.80078Z" stroke="#0065FF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>

    <!-- Arrow Right Icon -->
    <symbol id="icon-arrow-right" viewBox="0 0 18 19">
        <path d="M9.10938 2.39062L16.2198 9.50106L9.10938 16.6115" stroke="#10202B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>

    <!-- Arrow Left Icon -->
    <symbol id="icon-arrow-left" viewBox="0 0 18 19">
        <path d="M8.89062 2.39062L1.78019 9.50106L8.89062 16.6115" stroke="#10202B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>

    <!-- Menu Location Icon -->
    <symbol id="icon-menu-location" viewBox="0 0 40 40">
        <path d="M18.52 1.81641H21.4018C27.2908 1.81641 32.0648 6.59041 32.0648 12.4794C32.0648 14.5083 31.486 16.495 30.3964 18.2063L22.7726 30.1801C21.7839 31.733 19.7235 32.1904 18.1706 31.2016C17.7595 30.9399 17.4108 30.5912 17.1491 30.1801L9.52536 18.2063C6.36248 13.2387 7.82549 6.64771 12.7931 3.48483C14.5044 2.3952 16.4912 1.81641 18.52 1.81641Z" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20 16.6673C22.3012 16.6673 24.1667 14.8018 24.1667 12.5007C24.1667 10.1995 22.3012 8.33398 20 8.33398C17.6989 8.33398 15.8334 10.1995 15.8334 12.5007C15.8334 14.8018 17.6989 16.6673 20 16.6673Z"  stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M32.9167 32.5586L34.1667 38.2245H5.83337L8.33337 26.8926H14.5834" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>

    <!-- Menu How Icon -->
    <symbol id="icon-menu-how" viewBox="0 0 40 42">
        <path d="M12.9071 39.2321H5.75732V19.0039H34.3565V39.2321H25.2628" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.1592 30.924V26.8574H24.8411V39.3503" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M19.9998 2.50586C24.3494 4.39951 27.2406 6.77926 28.6735 9.64512C30.1065 12.511 30.0811 15.5302 28.5974 18.7029H11.4023C9.91859 15.5302 9.89321 12.511 11.3261 9.64512C12.7591 6.77926 15.6503 4.39951 19.9998 2.50586Z" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>

    <!-- Menu About Icon -->
    <symbol id="icon-menu-about" viewBox="0 0 40 40">
        <path d="M8.53311 31.467C5.59845 28.5323 3.78333 24.4781 3.78333 20C3.78333 11.0437 11.0438 3.7832 20.0001 3.7832C28.9564 3.7832 36.2169 11.0437 36.2169 20C36.2169 23.4184 35.1592 26.5898 33.3532 29.2048L34.5292 36.4266L27.5069 34.3784C25.2624 35.5527 22.7088 36.2168 20.0001 36.2168" stroke-width="3.66667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20 17.3933C20.9205 17.3933 21.6667 18.1395 21.6667 19.06V25.7122C21.6667 26.6327 20.9205 27.3789 20 27.3789C19.0796 27.3789 18.3334 26.6327 18.3334 25.7122V19.06C18.3334 18.1395 19.0796 17.3933 20 17.3933ZM20 12.6211C20.9205 12.6211 21.6667 13.3673 21.6667 14.2878C21.6667 15.2082 20.9205 15.9544 20 15.9544C19.0796 15.9544 18.3334 15.2082 18.3334 14.2878C18.3334 13.3673 19.0796 12.6211 20 12.6211Z" />
    </symbol>

    <!-- Menu Contact Icon -->
    <symbol id="icon-menu-contact" viewBox="0 0 40 40">
        <path d="M12.8204 5.70312H34.8452C36.6861 5.70312 38.1785 7.19551 38.1785 9.03646V19.9747V30.9129C38.1785 32.7539 36.6861 34.2463 34.8452 34.2463H5.16732C3.32637 34.2463 1.83398 32.7539 1.83398 30.9129V10.4389" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M38.1014 10.4824C34.512 13.201 29.128 17.279 21.9492 22.7162C20.7976 23.5885 19.2065 23.5885 18.0549 22.7162C10.9241 17.3153 5.57602 13.2646 2.01062 10.5642" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>

    <!-- Plus Icon -->
    <symbol id="icon-plus" viewBox="0 0 18 18">
      <path d="M9 1V17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M1 9L17 9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>

    <!-- Minus Icon -->
    <symbol id="icon-minus" viewBox="0 0 18 2">
      <path d="M1 1L17 0.999999" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>

    <!-- Map Green Icon -->
    <symbol id="icon-map-green" viewBox="0 0 46 46">
        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="46" height="46">
          <path d="M46 0H0V46H46V0Z" fill="white"/>
        </mask>
        <g mask="url(#mask0)">
          <path d="M22.9999 0C32.9886 0 41.0861 8.09746 41.0861 18.0862C41.0861 22.3664 39.5681 26.5079 36.802 29.7743L22.9999 46.0728L9.19777 29.7743C2.74262 22.1516 3.6891 10.7392 11.3118 4.28406C14.5782 1.518 18.7197 0 22.9999 0Z" fill="#21973B"/>
          <path d="M30.3646 18.3338C30.8409 18.3338 31.2271 18.72 31.2271 19.1963V26.9695H25.6169V23.3789C25.6169 21.9499 24.4585 20.7914 23.0294 20.7914C21.6845 20.7914 20.5792 21.8176 20.4538 23.1297L20.4419 23.3789V26.9695H14.7695V19.1963C14.7695 18.72 15.1557 18.3338 15.632 18.3338H30.3646ZM22.8902 6.26953C26.4129 7.5215 28.6504 9.09961 29.6025 11.0039C30.5546 12.9082 30.3652 15.0182 29.0343 17.334H16.7461C15.4152 15.0182 15.2258 12.9082 16.1779 11.0039C17.1301 9.09961 19.3675 7.5215 22.8902 6.26953Z" fill="white"/>
        </g>
    </symbol>

    <!-- Map Arrow Down Icon -->
    <symbol id="icon-arrow-down" viewBox="0 0 12 12">
      <path d="M10.5355 6.00039L6 10.5359L1.46445 6.00039" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </symbol>


  </svg>
</template>

<script>
  export default {
    name: "svg-container"
  }
</script>
