<template>
  <div class="overflow-x-hidden">
    <!-- Hero Standard -->
    <section>
      <div class="w-screen lg:pt-32 xl:pt-20 pb-12">
        <!-- NAVBAR -->
        <nav
          class="w-full font-inter lg:absolute lg:top-0 mb-10 lg:mb-0"
          x-data="{isOpen: false, menuOne:false}"
        >
          <!-- CONTAINER -->
          <div
            class="flex flex-col lg:flex-row px-6 lg:px-10 py-8 xl:px-20 relative lg:items-center lg:justify-between"
          >
            <!-- SVG LOGO - YOU CAN REPLACE THIS, MAKE SURE TO INCLUDE THE CSS CLASSES ALREADY ATTACHED TO THE SVG -->
            <a
              href="
            "
            >
              <svg
                class="top-5 left-5 absolute lg:relative lg:inset-0"
                width="76"
                height="32"
                viewBox="0 0 76 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.256 25C13.344 25 16.848 21.424 16.848 16.264C16.848 11.032 13.272 7.456 8.088 7.456H1.944V25H8.256ZM7.8 10.288C11.424 10.288 13.608 12.544 13.608 16.264C13.608 19.912 11.472 22.168 7.968 22.168H5.016V10.288H7.8ZM24.5816 25.312C27.6776 25.312 29.8376 23.752 30.3416 21.16H27.6296C27.2936 22.288 26.2376 22.912 24.6296 22.912C22.6856 22.912 21.5816 21.856 21.3656 19.768L30.2936 19.744V18.856C30.2936 15.16 28.0376 12.784 24.4856 12.784C21.0056 12.784 18.5816 15.352 18.5816 19.072C18.5816 22.744 21.0536 25.312 24.5816 25.312ZM24.5096 15.184C26.2616 15.184 27.3896 16.264 27.3896 17.896H21.4376C21.7256 16.12 22.7816 15.184 24.5096 15.184ZM35.4814 25H38.3614L43.3054 13.144H40.2814L38.1214 18.592C37.6174 19.888 37.1854 21.136 37.0174 21.88C36.8734 21.232 36.4654 20.008 35.9614 18.592L33.8974 13.144H30.7774L35.4814 25ZM46.4526 10.768C47.4126 10.768 48.2286 9.976 48.2286 8.992C48.2286 8.008 47.4126 7.24 46.4526 7.24C45.4686 7.24 44.6766 8.008 44.6766 8.992C44.6766 9.976 45.4686 10.768 46.4526 10.768ZM42.1566 30.568C42.9246 30.784 43.3566 30.832 43.9086 30.832C46.4766 30.832 47.9166 29.2 47.9166 26.68V13.144H44.9886V26.344C44.9886 27.544 44.6526 28.12 43.6446 28.12C43.2846 28.12 43.0446 28.096 42.6366 27.976L42.1566 30.568ZM50.2457 19.048C50.2457 22.744 52.9097 25.288 56.5817 25.288C60.2537 25.288 62.9177 22.744 62.9177 19.048C62.9177 15.352 60.2537 12.808 56.5817 12.808C52.9097 12.808 50.2457 15.352 50.2457 19.048ZM53.1737 19.048C53.1737 16.888 54.5657 15.424 56.5817 15.424C58.5977 15.424 59.9897 16.888 59.9897 19.048C59.9897 21.208 58.5977 22.672 56.5817 22.672C54.5657 22.672 53.1737 21.208 53.1737 19.048ZM63.7613 30.496C64.4093 30.664 65.1293 30.76 65.9453 30.76C67.8893 30.76 69.1373 29.848 70.0253 27.64L75.8333 13.144H72.8093L69.5933 21.784L66.5453 13.144H63.4493L68.2253 25.504L67.8893 26.392C67.3853 27.784 66.6653 28.048 65.5133 28.048H63.7613V30.496Z"
                  fill="#160042"
                />
                <circle
                  cx="46"
                  cy="8"
                  r="3"
                  fill="url(#paint0_linear_1247_10972)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1247_10972"
                    x1="44.5"
                    y1="6"
                    x2="48.6491"
                    y2="6.18668"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#292D32" />
                    <stop offset="1" />
                  </linearGradient>
                </defs>
              </svg>
            </a>

            <!-- MENU CONTENT 1 -->
            <div
              class="flex flex-col lg:flex lg:flex-row mt-14 lg:mt-0 space-y-8 lg:space-y-0 lg:space-x-1"
              x-bind:class="isOpen ? 'show' : 'hidden'"
            >
              <!-- DROPDOWN -->
              <div class="flex flex-col relative">
                <a
                  x-on:click.prevent="menuOne = !menuOne"
                  href=""
                  class="lg:hover:bg-[#F7F8FD] rounded-full lg:px-6 lg:py-4 lg:hover:text-black flex flex-row"
                  x-bind:class="menuOne ? 'text-black lg:border lg:border-black lg:bg-[#F7F8FD]' : 'text-black lg:border lg:border-white' "
                  >Component
                  <svg
                    x-bind:class="menuOne ? 'rotate-180' : 'rotate-0' "
                    class="fill-current transition"
                    style="width: 24px; height: 24px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                    />
                  </svg>
                </a>

                <!-- DROP DOWN MENU ONE -->
                <div
                  class="bg-white z-50 w-full flex flex-col lg:flex-row lg:flex-wrap lg:absolute lg:top-20 px-5 lg:px-75 lg:py-7 lg:shadow-[0_16px_64px_-15px_rgba(45,96,173,0.15)] rounded-2xl py-5 lg:w-[800px] xl:w-[950px]"
                  x-show="menuOne"
                  x-on:click.outside="menuOne = false"
                >
                  <!-- ITEM -->
                  <a
                    class="flex flex-col hover:bg-gray-50 px-5 py-5 xl:px-8 rounded-2xl lg:basis-[248px] grow"
                    href=""
                  >
                    <!-- ICON -->
                    <div class="relative">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M28 30.3335H4C3.45333 30.3335 3 29.8802 3 29.3335C3 28.7868 3.45333 28.3335 4 28.3335H28C28.5467 28.3335 29 28.7868 29 29.3335C29 29.8802 28.5467 30.3335 28 30.3335Z"
                          fill="#160042"
                        />
                        <path
                          d="M7.46667 11.1733H5.33333C4.6 11.1733 4 11.7733 4 12.5067V24C4 24.7333 4.6 25.3333 5.33333 25.3333H7.46667C8.2 25.3333 8.8 24.7333 8.8 24V12.5067C8.8 11.76 8.2 11.1733 7.46667 11.1733Z"
                          fill="#160042"
                        />
                        <path
                          d="M17.0682 6.91992H14.9349C14.2016 6.91992 13.6016 7.51992 13.6016 8.25326V23.9999C13.6016 24.7333 14.2016 25.3333 14.9349 25.3333H17.0682C17.8016 25.3333 18.4016 24.7333 18.4016 23.9999V8.25326C18.4016 7.51992 17.8016 6.91992 17.0682 6.91992Z"
                          fill="#160042"
                        />
                        <path
                          d="M26.6659 2.6665H24.5326C23.7992 2.6665 23.1992 3.2665 23.1992 3.99984V23.9998C23.1992 24.7332 23.7992 25.3332 24.5326 25.3332H26.6659C27.3992 25.3332 27.9992 24.7332 27.9992 23.9998V3.99984C27.9992 3.2665 27.3992 2.6665 26.6659 2.6665Z"
                          fill="#160042"
                        />
                      </svg>
                    </div>

                    <!-- TEXT -->
                    <h2
                      class="text-black text-lg font-inter font-medium mb-1 mt-5"
                    >
                      Analytics
                    </h2>
                    <p
                      class="text-gray-500 text-[14px] font-inter leading-[24px] max-w-[250px] lg:max-w-[400px]"
                    >
                      Get a better understanding of where your traffic is coming
                      from
                    </p>
                  </a>

                  <!-- ITEM -->
                  <a
                    class="flex flex-col hover:bg-gray-50 px-5 py-5 xl:px-8 rounded-2xl lg:basis-[248px] grow"
                    href=""
                  >
                    <!-- ICON -->
                    <div class="relative">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M27.9727 14.2667C27.6794 9.06667 23.826 4.73333 18.6794 3.85333C18.5994 2.82667 17.746 2 16.6927 2H15.3594C14.306 2 13.466 2.81333 13.3727 3.84C8.19938 4.69333 4.31938 9.04 4.02604 14.2667C3.07938 14.4267 2.35938 15.24 2.35938 16.2267V17.56C2.35938 18.6667 3.25271 19.56 4.35938 19.56H5.69271C6.79938 19.56 7.69271 18.6667 7.69271 17.56V16.2267C7.69271 15.24 6.97271 14.4267 6.02604 14.2667C6.30604 10.1067 9.35937 6.65333 13.4394 5.85333C13.666 6.70667 14.4394 7.33333 15.3594 7.33333H16.6927C17.6127 7.33333 18.3727 6.70667 18.6127 5.86667C22.666 6.68 25.6927 10.1333 25.9727 14.2667C25.026 14.4267 24.306 15.24 24.306 16.2267V17.56C24.306 18.6667 25.1994 19.56 26.306 19.56H27.6394C28.746 19.56 29.6394 18.6667 29.6394 17.56V16.2267C29.6394 15.24 28.9194 14.4133 27.9727 14.2667Z"
                          fill="#160042"
                        />
                        <path
                          d="M21.0284 22.0666L18.8417 24H13.1751L10.9884 22.0666C9.72173 21.0266 9.72173 20.2266 10.6817 19L14.5351 14.12C14.8017 13.7866 15.1084 13.56 15.4551 13.44C15.8151 13.32 16.2017 13.32 16.5751 13.44C16.9084 13.56 17.2151 13.7866 17.4951 14.12L21.3351 18.9866C22.3084 20.2133 22.2551 20.9733 21.0284 22.0666Z"
                          fill="#160042"
                        />
                        <path
                          d="M17.7615 29.3333H14.3082C13.0815 29.3333 12.1615 28.3333 12.4015 27.2666L12.8149 25.4133C12.8949 25.04 13.2282 24.7866 13.6015 24.7866H18.4682C18.8415 24.7866 19.1615 25.04 19.2549 25.4133L19.6682 27.2666C19.9215 28.4 19.0682 29.3333 17.7615 29.3333Z"
                          fill="#160042"
                        />
                      </svg>
                    </div>

                    <!-- TEXT -->
                    <h2
                      class="text-black text-lg font-inter font-medium mb-1 mt-5"
                    >
                      Engagement
                    </h2>
                    <p
                      class="text-gray-500 text-[14px] font-inter leading-[24px] max-w-[250px] lg:max-w-[400px]"
                    >
                      Speak directly to your customers in a more meaningful way
                    </p>
                  </a>

                  <!-- ITEM -->
                  <a
                    class="flex flex-col hover:bg-gray-50 px-5 py-5 xl:px-8 rounded-2xl lg:basis-[248px] grow"
                    href=""
                  >
                    <!-- ICON -->
                    <div class="relative">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.588 2.66663H10.4146C5.5613 2.66663 2.66797 5.55996 2.66797 10.4133V21.5733C2.66797 26.44 5.5613 29.3333 10.4146 29.3333H21.5746C26.428 29.3333 29.3213 26.44 29.3213 21.5866V10.4133C29.3346 5.55996 26.4413 2.66663 21.588 2.66663ZM7.0013 15.8533C7.0413 13.5066 7.97464 11.2933 9.62797 9.63996C11.3346 7.93329 13.6013 6.99996 16.0013 6.99996C18.4013 6.99996 20.668 7.93329 22.3613 9.63996C22.4013 9.67996 22.4413 9.73329 22.4813 9.78663V8.63996C22.4813 8.09329 22.9346 7.63996 23.4813 7.63996C24.028 7.63996 24.4813 8.09329 24.4813 8.63996V12.1733C24.4813 12.72 24.028 13.1733 23.4813 13.1733H19.948C19.4013 13.1733 18.948 12.72 18.948 12.1733C18.948 11.6266 19.4013 11.1733 19.948 11.1733H21.0546C21.0146 11.1333 20.988 11.0933 20.948 11.0533C19.628 9.73329 17.868 8.99996 16.0013 8.99996C14.1346 8.99996 12.3746 9.73329 11.0546 11.0533C9.7613 12.3466 9.0413 14.0666 9.01464 15.8933C9.0013 16.4266 8.54797 16.8666 8.0013 16.8666H7.98797C7.4413 16.8666 7.0013 16.4 7.0013 15.8533ZM22.3613 22.36C20.668 24.0533 18.4013 25 16.0013 25C13.6013 25 11.3346 24.0666 9.6413 22.36C9.6013 22.32 9.5613 22.2666 9.5213 22.2133V23.3466C9.5213 23.8933 9.06797 24.3466 8.5213 24.3466C7.97464 24.3466 7.5213 23.8933 7.5213 23.3466V19.8133C7.5213 19.2666 7.97464 18.8133 8.5213 18.8133H12.0546C12.6013 18.8133 13.0546 19.2666 13.0546 19.8133C13.0546 20.36 12.6013 20.8133 12.0546 20.8133H10.948C10.988 20.8533 11.0146 20.8933 11.0546 20.9333C12.3746 22.2533 14.1346 22.9866 16.0013 22.9866C17.868 22.9866 19.628 22.2533 20.948 20.9333C22.2546 19.6266 22.988 17.88 22.988 16.0133C22.988 15.4666 23.4413 15.0133 23.988 15.0133C24.5346 15.0133 24.988 15.4666 24.988 16.0133C24.988 18.4266 24.0546 20.68 22.3613 22.36Z"
                          fill="#160042"
                        />
                      </svg>

                      <span
                        class="absolute inset-0 bg-gradient-to-r from-[#8A74FF] to-[#0BC4FF] opacity-40 blur-xl w-[30px]"
                      ></span>
                    </div>

                    <!-- TEXT -->
                    <h2
                      class="text-black text-lg font-inter font-medium mb-1 mt-5"
                    >
                      Automations
                    </h2>
                    <p
                      class="text-gray-500 text-[14px] font-inter leading-[24px] max-w-[250px] lg:max-w-[400px]"
                    >
                      Build strategic funnels that will drive your customers to
                      convert
                    </p>
                  </a>

                  <!-- ITEM -->
                  <a
                    class="flex flex-col hover:bg-gray-50 px-5 py-5 xl:px-8 rounded-2xl lg:basis-[248px] grow"
                    href=""
                  >
                    <!-- ICON -->
                    <div class="relative">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24.721 5.56006L17.3877 2.81339C16.6277 2.53339 15.3877 2.53339 14.6277 2.81339L7.29437 5.56006C5.88104 6.09339 4.73438 7.74673 4.73438 9.2534V20.0534C4.73438 21.1334 5.44104 22.5601 6.30771 23.2001L13.641 28.6801C14.9344 29.6534 17.0544 29.6534 18.3477 28.6801L25.681 23.2001C26.5477 22.5467 27.2544 21.1334 27.2544 20.0534V9.2534C27.2677 7.74673 26.121 6.09339 24.721 5.56006ZM17.001 17.1601V20.6667C17.001 21.2134 16.5477 21.6667 16.001 21.6667C15.4544 21.6667 15.001 21.2134 15.001 20.6667V17.1601C13.6544 16.7334 12.6677 15.4801 12.6677 14.0001C12.6677 12.1601 14.161 10.6667 16.001 10.6667C17.841 10.6667 19.3344 12.1601 19.3344 14.0001C19.3344 15.4934 18.3477 16.7334 17.001 17.1601Z"
                          fill="#160042"
                        />
                      </svg>
                    </div>

                    <!-- TEXT -->
                    <h2
                      class="text-black text-lg font-inter font-medium mb-1 mt-5"
                    >
                      Security
                    </h2>
                    <p
                      class="text-gray-500 text-[14px] font-inter leading-[24px] max-w-[250px] lg:max-w-[400px]"
                    >
                      Your customers data will be safe and secure
                    </p>
                  </a>

                  <!-- ITEM -->
                  <a
                    class="flex flex-col hover:bg-gray-50 px-5 py-5 xl:px-8 rounded-2xl lg:basis-[248px] grow"
                    href=""
                  >
                    <!-- ICON -->
                    <div class="relative">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M28.6654 14.5333V5.46663C28.6654 3.46663 27.812 2.66663 25.692 2.66663H20.3054C18.1854 2.66663 17.332 3.46663 17.332 5.46663V14.5333C17.332 16.5333 18.1854 17.3333 20.3054 17.3333H25.692C27.812 17.3333 28.6654 16.5333 28.6654 14.5333Z"
                          fill="#160042"
                        />
                        <path
                          d="M14.6654 17.4666V26.5333C14.6654 28.5333 13.812 29.3333 11.692 29.3333H6.30536C4.18536 29.3333 3.33203 28.5333 3.33203 26.5333V17.4666C3.33203 15.4666 4.18536 14.6666 6.30536 14.6666H11.692C13.812 14.6666 14.6654 15.4666 14.6654 17.4666Z"
                          fill="#160042"
                        />
                        <path
                          d="M28.6654 26.5333V22.8C28.6654 20.8 27.812 20 25.692 20H20.3054C18.1854 20 17.332 20.8 17.332 22.8V26.5333C17.332 28.5333 18.1854 29.3333 20.3054 29.3333H25.692C27.812 29.3333 28.6654 28.5333 28.6654 26.5333Z"
                          fill="#160042"
                        />
                        <path
                          d="M14.6654 9.19996V5.46663C14.6654 3.46663 13.812 2.66663 11.692 2.66663H6.30536C4.18536 2.66663 3.33203 3.46663 3.33203 5.46663V9.19996C3.33203 11.2 4.18536 12 6.30536 12H11.692C13.812 12 14.6654 11.2 14.6654 9.19996Z"
                          fill="#160042"
                        />
                      </svg>
                    </div>

                    <!-- TEXT -->
                    <h2
                      class="text-black text-lg font-inter font-medium mb-1 mt-5"
                    >
                      Integrations
                    </h2>
                    <p
                      class="text-gray-500 text-[14px] font-inter leading-[24px] max-w-[250px] lg:max-w-[400px]"
                    >
                      Connect with third-party tools that you’re already using
                    </p>
                  </a>

                  <!-- ITEM -->
                  <a
                    class="flex flex-col hover:bg-gray-50 px-5 py-5 xl:px-8 rounded-2xl lg:basis-[248px] grow"
                    href=""
                  >
                    <!-- ICON -->
                    <div class="relative">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.0676 2.9467C20.5209 2.40003 19.5742 2.77336 19.5742 3.53336V8.1867C19.5742 10.1334 21.2276 11.7467 23.2409 11.7467C24.5076 11.76 26.2676 11.76 27.7742 11.76C28.5342 11.76 28.9342 10.8667 28.4009 10.3334C26.4809 8.40003 23.0409 4.92003 21.0676 2.9467Z"
                          fill="#160042"
                        />
                        <path
                          d="M27.332 13.5866H23.4787C20.3187 13.5866 17.7454 11.0133 17.7454 7.85329V3.99996C17.7454 3.26663 17.1454 2.66663 16.412 2.66663H10.7587C6.65203 2.66663 3.33203 5.33329 3.33203 10.0933V21.9066C3.33203 26.6666 6.65203 29.3333 10.7587 29.3333H21.2387C25.3454 29.3333 28.6654 26.6666 28.6654 21.9066V14.92C28.6654 14.1866 28.0654 13.5866 27.332 13.5866ZM15.332 23.6666H9.9987C9.45203 23.6666 8.9987 23.2133 8.9987 22.6666C8.9987 22.12 9.45203 21.6666 9.9987 21.6666H15.332C15.8787 21.6666 16.332 22.12 16.332 22.6666C16.332 23.2133 15.8787 23.6666 15.332 23.6666ZM17.9987 18.3333H9.9987C9.45203 18.3333 8.9987 17.88 8.9987 17.3333C8.9987 16.7866 9.45203 16.3333 9.9987 16.3333H17.9987C18.5454 16.3333 18.9987 16.7866 18.9987 17.3333C18.9987 17.88 18.5454 18.3333 17.9987 18.3333Z"
                          fill="#160042"
                        />
                      </svg>
                    </div>

                    <!-- TEXT -->
                    <h2
                      class="text-black text-lg font-inter font-medium mb-1 mt-5"
                    >
                      Reports
                    </h2>
                    <p
                      class="text-gray-500 text-[14px] font-inter leading-[24px] max-w-[250px] lg:max-w-[400px]"
                    >
                      Get detailed report that will help you make more informed
                      decisions
                    </p>
                  </a>
                </div>
              </div>

              <a
                href=""
                class="lg:hover:bg-[#F7F8FD] font-inter rounded-full lg:px-6 lg:py-4 lg:hover:text-black"
                >Templates</a
              >
              <a
                href=""
                class="lg:hover:bg-[#F7F8FD] font-inter rounded-full lg:px-6 lg:py-4 lg:hover:text-black"
                >Pricing</a
              >
              <a
                href=""
                class="lg:hover:bg-[#F7F8FD] font-inter rounded-full lg:px-6 lg:py-4 lg:hover:text-black pb-8 lg:pb-0"
                >FAQs</a
              >
            </div>

            <!-- MENU CONTENT 2 -->
            <div
              class="flex flex-col lg:flex lg:flex-row space-y-8 lg:space-y-0 lg:space-x-1"
              x-bind:class="isOpen ? 'show' : 'hidden'"
            >
              <a
                href=""
                class="lg:hover:bg-[#F7F8FD] font-inter rounded-full lg:px-6 lg:py-4 lg:hover:text-black"
                >Sign Up</a
              >
              <a
                class="px-9 py-4 font-inter text-center bg-black text-white rounded-[6px] border border-black hover:text-black hover:bg-white"
                href=""
                >Login</a
              >
            </div>

            <!-- BURGER MENU -->
            <a
              href=""
              class="absolute top-5 right-5 lg:hidden"
              x-on:click.prevent="isOpen = !isOpen"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 12H20.25"
                  stroke="#160042"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.75 6H20.25"
                  stroke="#160042"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.75 18H20.25"
                  stroke="#160042"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </nav>

        <header
          class="w-full px-6 max-w-[1600px] justify-center items-center mx-auto flex flex-col lg:px-10 lg:flex-row lg:justify-between xl:px-20"
        >
          <!-- TEXT SECTION -->
          <div class="max-w-[556px] lg:mr-12">
            <h1
              class="text-black text-[55px] text-center font-black leading-[72px] xl:text-[68px] xl:leading-[94px] lg:text-left"
            >
              The Website You Want Without The Dev Time.
            </h1>

            <p
              class="font-inter text-base font-light text-center lg:text-left px-5 lg:px-0 leading-[30px] mt-4 text-[#71717A] max-w-[600px] lg:max-w-[500px]"
            >
              Use premium tailwindcss components to ship your product faster to
              your customers. Build better and faster with Devjoy
            </p>

            <div
              class="flex flex-row flex-wrap justify-center lg:justify-start items-center mt-12"
            >
              <button
                class="px-6 py-4 font-inter text-base text-white bg-black w-full rounded-[6px] max-w-[400px] md:w-auto"
              >
                Try it out
              </button>

              <button
                class="bg-white border border-[#160042] text-black rounded-[6px] px-6 py-4 font-inter text-base flex flex-row w-full max-w-[400px] items-center justify-center mt-6 md:w-auto md:mt-0 md:ml-6"
              >
                <p>Explore Components</p>

                <svg
                  class="ml-2"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 15L15 5"
                    stroke="#160042"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.875 5H15V13.125"
                    stroke="#160042"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="max-w-[700px]"
            viewBox="0 0 500 500"
          >
            <g id="freepik--Speakers--inject-117">
              <path
                d="M90.91,358.14a25.74,25.74,0,1,0,25.73,25.73A25.73,25.73,0,0,0,90.91,358.14Zm0,35a9.31,9.31,0,1,1,9.31-9.31A9.31,9.31,0,0,1,90.91,393.18Z"
                style="fill: #263238"
              ></path>
              <path
                d="M90.91,317.62a15.88,15.88,0,1,0,15.88,15.88A15.88,15.88,0,0,0,90.91,317.62Zm0,21.62a5.74,5.74,0,1,1,5.74-5.74A5.74,5.74,0,0,1,90.91,339.24Z"
                style="fill: #263238"
              ></path>
              <rect
                x="57.85"
                y="309.48"
                width="66.12"
                height="107.61"
                rx="3.94"
                style="fill: none; stroke: #263238; stroke-miterlimit: 10"
              ></rect>
              <path
                d="M404.87,358.14a25.74,25.74,0,1,0,25.74,25.73A25.73,25.73,0,0,0,404.87,358.14Zm0,35a9.31,9.31,0,1,1,9.31-9.31A9.3,9.3,0,0,1,404.87,393.18Z"
                style="fill: #263238"
              ></path>
              <path
                d="M404.87,317.62a15.88,15.88,0,1,0,15.88,15.88A15.88,15.88,0,0,0,404.87,317.62Zm0,21.62a5.74,5.74,0,1,1,5.75-5.74A5.74,5.74,0,0,1,404.87,339.24Z"
                style="fill: #263238"
              ></path>
              <rect
                x="371.82"
                y="309.48"
                width="66.12"
                height="107.61"
                rx="3.94"
                style="fill: none; stroke: #263238; stroke-miterlimit: 10"
              ></rect>
            </g>
            <g id="freepik--Graphics--inject-117">
              <line
                x1="151.84"
                y1="60.08"
                x2="151.84"
                y2="76.88"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></line>
              <line
                x1="160.24"
                y1="68.48"
                x2="143.43"
                y2="68.48"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></line>
              <line
                x1="115.08"
                y1="162.98"
                x2="115.08"
                y2="174.53"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></line>
              <line
                x1="120.86"
                y1="168.76"
                x2="109.31"
                y2="168.76"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></line>
              <line
                x1="369.2"
                y1="51.68"
                x2="369.2"
                y2="63.23"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></line>
              <line
                x1="374.97"
                y1="57.45"
                x2="363.42"
                y2="57.45"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></line>
              <line
                x1="299.89"
                y1="321.54"
                x2="299.89"
                y2="333.09"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></line>
              <line
                x1="305.67"
                y1="327.32"
                x2="294.12"
                y2="327.32"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></line>
              <line
                x1="356.07"
                y1="153.53"
                x2="356.07"
                y2="167.18"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></line>
              <line
                x1="362.9"
                y1="160.36"
                x2="349.25"
                y2="160.36"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></line>
              <line
                x1="390.2"
                y1="57.98"
                x2="390.2"
                y2="71.63"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></line>
              <line
                x1="397.02"
                y1="64.8"
                x2="383.37"
                y2="64.8"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></line>
              <path
                d="M89.88,121.5a4.73,4.73,0,1,1-4.72-4.72A4.72,4.72,0,0,1,89.88,121.5Z"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M335.6,301.59a4.73,4.73,0,1,1-4.73-4.73A4.73,4.73,0,0,1,335.6,301.59Z"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M412.25,144.61a4.73,4.73,0,1,1-4.73-4.73A4.72,4.72,0,0,1,412.25,144.61Z"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <circle
                cx="115.08"
                cy="39.6"
                r="3.68"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></circle>
              <circle
                cx="168.64"
                cy="301.06"
                r="3.68"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></circle>
              <circle
                cx="83.58"
                cy="210.76"
                r="3.68"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></circle>
            </g>
            <g id="freepik--Wave--inject-117">
              <path
                d="M65.1,242.84H74V232a5,5,0,0,1,5-5h0a5,5,0,0,1,5,5V262.9a5.34,5.34,0,0,0,5.33,5.34h0a5.34,5.34,0,0,0,5.34-5.34v-56a6.48,6.48,0,0,1,6.48-6.47h0a6.47,6.47,0,0,1,6.47,6.47v75a6.1,6.1,0,0,0,6.1,6.1h0a6.1,6.1,0,0,0,6.09-6.1v-91.5a8,8,0,0,1,8-8h0a8,8,0,0,1,8,8V281.5a6.48,6.48,0,0,0,6.48,6.48h0a6.48,6.48,0,0,0,6.48-6.48V208.91a7.62,7.62,0,0,1,7.62-7.62h0a7.62,7.62,0,0,1,7.62,7.62v53.55a5.71,5.71,0,0,0,5.71,5.71h0a5.71,5.71,0,0,0,5.72-5.71V233.35a5.45,5.45,0,0,1,5.45-5.45h0a5.45,5.45,0,0,1,5.45,5.45v9.49h10.14"
                style="fill: none; stroke: #263238; stroke-miterlimit: 10"
              ></path>
              <path
                d="M189.33,242.84h8.86V232a5,5,0,0,1,4.95-5h0a5,5,0,0,1,5,5V262.9a5.34,5.34,0,0,0,5.34,5.34h0a5.34,5.34,0,0,0,5.33-5.34v-56a6.48,6.48,0,0,1,6.48-6.47h0a6.47,6.47,0,0,1,6.47,6.47v75a6.1,6.1,0,0,0,6.1,6.1h0a6.1,6.1,0,0,0,6.09-6.1v-91.5a8,8,0,0,1,8-8h0a8,8,0,0,1,8,8V281.5a6.47,6.47,0,0,0,6.47,6.48h0a6.48,6.48,0,0,0,6.48-6.48V208.91a7.62,7.62,0,0,1,7.62-7.62h0a7.62,7.62,0,0,1,7.62,7.62v53.55a5.71,5.71,0,0,0,5.71,5.71h0a5.71,5.71,0,0,0,5.72-5.71V233.35A5.45,5.45,0,0,1,305,227.9h0a5.45,5.45,0,0,1,5.45,5.45v9.49h10.14"
                style="fill: none; stroke: #263238; stroke-miterlimit: 10"
              ></path>
              <path
                d="M313.56,242.84h8.86V232a5,5,0,0,1,4.95-5h0a5,5,0,0,1,4.95,5V262.9a5.34,5.34,0,0,0,5.34,5.34h0A5.34,5.34,0,0,0,343,262.9v-56a6.48,6.48,0,0,1,6.48-6.47h0a6.47,6.47,0,0,1,6.47,6.47v75A6.1,6.1,0,0,0,362,288h0a6.09,6.09,0,0,0,6.09-6.1v-91.5a8,8,0,0,1,8-8h0a8,8,0,0,1,8,8V281.5a6.48,6.48,0,0,0,6.47,6.48h0a6.48,6.48,0,0,0,6.48-6.48V208.91a7.62,7.62,0,0,1,7.62-7.62h0a7.62,7.62,0,0,1,7.62,7.62v53.55a5.71,5.71,0,0,0,5.71,5.71h0a5.71,5.71,0,0,0,5.72-5.71V233.35a5.45,5.45,0,0,1,5.45-5.45h0a5.45,5.45,0,0,1,5.45,5.45v9.49H444.8"
                style="fill: none; stroke: #263238; stroke-miterlimit: 10"
              ></path>
            </g>
            <g id="freepik--Floor--inject-117">
              <ellipse
                cx="243.72"
                cy="454.9"
                rx="97.13"
                ry="23.1"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></ellipse>
            </g>
            <g id="freepik--Character--inject-117">
              <path
                d="M209.24,63.05s1.57-4.9,3-8.75,3.85-7,5.08-7.88,7.35-3,19.25-.35,17.33,7,19.25,8.58,1.93,4.2,2.28,7.35a59,59,0,0,0,1.05,6.13s-1.23-2.63-16.28-4.73S222,59.9,217.64,62s-9.45,4.73-9.45,4.73Z"
                style="
                  fill: #263238;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M213,88.33a50.46,50.46,0,0,1-7-1.13c-5.71-1.14-10.38-5.4-5.19-12.49s8.56-12.49,8.56-12.49,2.15-4,10.38-6.13,26.08,3.26,33.08,5.94S265.42,68,268,72.55s.35,5.94-3.85,10.34-6.82,5.74-13.82,7.66S213,88.33,213,88.33Z"
                style="
                  fill: #263238;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M218.44,65s-6.75,6.23-6.75,9.34.52,13.49,1.3,17.38,6.49,15.83,8.82,17.65,10.38-.26,10.38-.26l3.9,5.19,21-13.49s-3.38-7.53-3.64-8.31a44.11,44.11,0,0,1-.26-5.45s3.12-1.55,4.16-4.15a19,19,0,0,0,1-6s-9.08-9.08-19.2-12.19S218.44,65,218.44,65Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M220.26,74.63l.52,4.15s-2.6,2.85-2.6,4.93,3.63,2.08,3.63,2.08"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <polyline
                points="227.78 73.33 228.04 75.15 234.53 73.07"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></polyline>
              <polyline
                points="215.07 78.78 214.39 81.67 218.54 79.33"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></polyline>
              <ellipse
                cx="233.03"
                cy="74.85"
                rx="1.24"
                ry="1.07"
                style="fill: #263238"
              ></ellipse>
              <ellipse
                cx="218.02"
                cy="80.6"
                rx="1.24"
                ry="1.07"
                style="fill: #263238"
              ></ellipse>
              <path
                d="M224.29,71.1s1.41-5,6.12-5.95a6.06,6.06,0,0,1,5.43,1.58"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  stroke-width: 2px;
                "
              ></path>
              <path
                d="M218.51,73.55s-1.56-1.21-2.8-.7a4.41,4.41,0,0,0-2.62,3.5"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  stroke-width: 2px;
                "
              ></path>
              <path
                d="M246.87,71.8c3,2.45,2.45,6.13,4.72,5.25a20.75,20.75,0,0,0,4.23-2.43,58.28,58.28,0,0,0-11.59-7.81A6.5,6.5,0,0,0,246.87,71.8Z"
                style="
                  fill: #263238;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <polygon
                points="232.19 109.14 240.56 102.95 236.09 114.33 232.19 109.14"
                style="
                  fill: #263238;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></polygon>
              <path
                d="M229.81,416.05s-12.95,9.1-15.05,9.45-11.2,2.1-12.25,4.2-1.75,4.9,1.75,5.6,19.25,1.75,24.85,1.75,11.9.35,15-.35,8.05.7,9.8-6.3,1.4-12.6.35-16.45S229.81,416.05,229.81,416.05Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M246.91,433.86a176.11,176.11,0,0,0-21.2-.93c-8.94.27-21-1.6-23.71-2.05-.65,1.85-.61,3.84,2.26,4.42,3.5.7,19.25,1.75,24.85,1.75s11.9.35,15-.35c1.67-.37,3.82-.16,5.74-.91Z"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M227.07,429.73h0a.52.52,0,0,1-.52-.53l.05-1.83a.51.51,0,0,1,.53-.51.54.54,0,0,1,.52.54l0,1.82A.51.51,0,0,1,227.07,429.73Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M227.11,428.44h0a1.07,1.07,0,0,1-1-1.08l.16-7.05a1.08,1.08,0,0,1,1.07-1,1.05,1.05,0,0,1,1,1.07l-.16,7.05A1.05,1.05,0,0,1,227.11,428.44Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M214.74,427.06a1.55,1.55,0,0,1-1.38-.85,2.42,2.42,0,0,1,0-2.36c.8-1.39,2.82-1.66,3.66-1.71a1.58,1.58,0,0,1,.18,3.15,5.05,5.05,0,0,0-.88.15,1.56,1.56,0,0,1-.87,1.46A1.63,1.63,0,0,1,214.74,427.06Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M218.63,424.66a1.53,1.53,0,0,1-1.39-.85,2.42,2.42,0,0,1,0-2.36c.81-1.39,2.83-1.65,3.66-1.7a1.57,1.57,0,0,1,.19,3.14,5,5,0,0,0-.89.15,1.56,1.56,0,0,1-.87,1.46A1.59,1.59,0,0,1,218.63,424.66Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M222.51,422.27a1.56,1.56,0,0,1-1.39-.85,2.41,2.41,0,0,1,0-2.36c.8-1.4,2.82-1.66,3.65-1.71a1.57,1.57,0,1,1,.19,3.14,4.27,4.27,0,0,0-.88.16,1.59,1.59,0,0,1-.87,1.45A1.65,1.65,0,0,1,222.51,422.27Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M205.39,428.27s.17.34,3.59.34,4.44,1.54,4.78,2.73"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M237.74,427.08a5.81,5.81,0,0,1,2.66-1.37"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M233.06,432.71a29.41,29.41,0,0,1,3.25-4.28"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M215.54,244.89s-.35,22.05-.35,44.8,1.17,43.56,4,50.21,10.3,41.15,11,45.7-.35,11.55-.35,15a19.9,19.9,0,0,0,1.05,6.3s-1.75,2.8-1.75,4.55-2.1,5.25,0,6.3,3.5,2.1,14,3.85,17.15-8.4,18.9-11.2-8.2-69.5-9.6-81.75-.47-37.61,1.63-47.41,1.05-32.55-.35-37.1-15.05-7.35-22.4-6.65S215.54,244.89,215.54,244.89Z"
                style="
                  fill: #263238;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M242.49,254.69s-7.58,53.71-7.58,62.46,3.85,18.55,4.9,22.75,5.05,51.65,6.1,54.8,1.4,11.55,1.4,11.55-2.8,1.05-3.15,3.15,1.4,3.5,1.4,5.25-1.75,4.55-2.45,7a8.2,8.2,0,0,0,.35,4.9s-7,9.45-10.15,12.6-11.2,9.1-15.75,12.25-13.65,7-14,11.9,3.15,9.1,11.9,9.45,24.5.7,33.25-.35,25.9-10.85,28.7-14.35S282,454.2,282,444.4s.35-19.25,0-20.3-1-2.8-.35-8.4a19,19,0,0,0-1.05-9.45A44.39,44.39,0,0,0,282,401c.35-2.1-2.45-7-2.45-7s1.95-36.25,1.95-44.3-10.15-25.55-10.15-25.55,1.4-7.35,1.4-8.75-2.1-4.9-2.1-4.9S281,281.64,282,277.79s3.85-16.45,4.55-20.65-1.75-12.95-4.9-18.2-16.8-11.55-21.7-7.35S242.49,254.69,242.49,254.69Z"
                style="
                  fill: #263238;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M212.74,245.24s9.45,16.45,15.75,19.6,12.6-1.4,21.35-10.85,14-16.8,20.3-14.35,17.85,26.25,19.6,29.05,1.4-23.1-2.1-31.15-21.35-11.2-43-8.4S212.74,245.24,212.74,245.24Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M211,234s-.7,6.3-.7,9.8,5.25,3.15,5.25,3.15,15.75-6.65,33.25-7.7,35,3.5,37.8,3.5,4.2-2.45,4.2-5.25-3.15-9.1-3.15-9.1-7.35-8.05-29.05-8.75-37.45-.35-42,3.5S211,234,211,234Z"
                style="
                  fill: #666;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M255.94,96.84s-19.65,15-23.67,18.09-.67,5.8.23,6.47a17.6,17.6,0,0,1,2.45,3.13,129.49,129.49,0,0,1-14.73,11.38c-8.71,5.81-10.27,6.7-12.73,9.82s-11.6,13.4-11.6,13.4a55.05,55.05,0,0,0,1.34-9.82c0-4,1.84-8.89-.17-12.24s-6.92-7.59-11.38-7.59-8.49,1.56-11.17,5.8-4.74,12.91-6.3,22.29-8.43,20.8-5.53,25.26,7.59,10,13.84,10,11.83-.45,14.74-3.13,16.68-8.52,18.24-9.64a51.09,51.09,0,0,1,5.36-2.9s-.22,17.19-1.11,24.11-6.7,23.44-7.15,27,5.14,7.14,5.14,7.14,5.8-6,23-7.59a220.8,220.8,0,0,1,41.3.67c4.24.67,10.27,3.58,13,.9s4.46-2.68,4-8.71-1.33-12.5-1.33-15.18,1.78-24.11,1.78-24.78,5.81-26.12,5.81-26.12,13.17-4,22.1-5.8,12.72-14.06,9.82-21.21-14.29-14.51-19.2-17.86-21.21-4-23.44-3.12-9.15-.45-14.51-1.12-8.26-.67-9.15-.45l-.9.23s-1.34-7.37-3.34-8.71S255.94,96.84,255.94,96.84Z"
                style="
                  fill: #92e3a9;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M306.93,145.29a26.88,26.88,0,0,0,3.76.48"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M283.68,111.17s-5.81,3.13-4.25,8.26,12.06,17,17,21a23.21,23.21,0,0,0,7,3.9"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M294.39,140s3.8,5.36,7.59,6.92a16.93,16.93,0,0,0,6.92,1.34"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M194.86,174.75a19.19,19.19,0,0,1-2.26,5.18"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M195.89,159.13s-.62,8.3-.62,12.54"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M195.5,178.81s-1.79,4.24-4.47,4.91"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <polyline
                points="213.13 158.72 214.86 177.21 210.01 162.52"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></polyline>
              <path
                d="M275.42,140.86s2.23,9.83,10,12.06,12.73,1.56,12.73,1.56"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M223.17,221.21c-1,3.81-.77,6.4,1.82,7.58"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M227.32,208.33a50.28,50.28,0,0,1-2,6.45l-.41,1.08"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M234.35,137.72a97,97,0,0,0-3.06,10.56c-1.75,8.4-2.1,28.35-2.1,39.9a95.93,95.93,0,0,1-1.26,17.23"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M236.19,112.23s-2.8,4.9-1.4,6.3,4.2,6.65,4.2,6.65-1.83,4.52-3.76,10"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M231.66,187.82a8.16,8.16,0,0,1-5.49-1.91c-3.89-3.32-5.22-10.63-4.33-23.7,0-.52.08-1.05.14-1.58.11-13.59,7.35-29.12,7.72-30,.22-.53,1.24-2.64,1.77-2.42s1-1,.79-.51c0,0-.18.43-.45,1.13,1.22-2.74,2.08-4.5,2.2-4.75a1.06,1.06,0,0,1,1.41-.48,1,1,0,0,1,.47,1.41c-.1.21-10.18,20.82-11.81,35.75a26,26,0,0,0,.2,3.5c.33,2.52,1.32,5.59,4.13,5.93,4.33.52,11.47-5.35,15.2-14.92,5.55-14.21,18.44-43.84,18.57-44.14a1,1,0,0,1,2,.71,264.86,264.86,0,0,0-7.32,35.89c-2.26,17.81-10,37-22.16,39.75A13.7,13.7,0,0,1,231.66,187.82Zm-8-18.61c0,8,1.24,12.87,3.85,15.11,1.62,1.38,3.8,1.74,6.68,1.09,9.52-2.15,18-17.76,20.54-38,1.12-8.8,2.76-17.14,4.21-23.59-4.25,9.93-10.11,23.75-13.39,32.15-3.77,9.66-11.57,17-17.41,16.24A5.94,5.94,0,0,1,223.68,169.21Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <polygon
                points="234.79 118.53 233.74 126.58 236.89 125.18 234.79 118.53"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></polygon>
              <path
                d="M263.81,113.85s-8.93,3.8-11.61,5.58"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M279,108.72s.67,2.45,4.46,5.8,11.16,2.68,14.07,1.12,3.73-6.52,3.73-6.52-4.4-4.87-6.64-5.09S279.88,102.47,279,108.72Z"
                style="
                  fill: #666;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M302.82,106.22c-.43-.81-.89-1.59-1.36-2.35a3.43,3.43,0,0,0,.24-.33,2.86,2.86,0,0,0,.45-2.68c-.45-.89-2.46-4.68-3.13-4.68-.35,0-1.9.24-3.31.47l-.26-.25a12,12,0,0,1-1.7-1.91c.45-1.51,2.11-5.58,1.7-7s-4.46-2.9-6-2.68c-1,.15-3.26,2.93-4.7,4.87l-2-.36c-.71-2.07-2.11-5.91-2.93-6.07-1.11-.23-3.12,2.23-3.12,3.35,0,.36.07,1.27.17,2.33l-2.63,1.68s-3.57,8.71-5.13,10.5-8,5.8-12.06,6-8.48.67-7.59,3.35,4,2.9,10,3.57,11.16-2.23,13.39-3.57,6.92-.67,10.05-.67,7.37-1.11,8.26-1.11,3.35,2,6,2.68,7.59-.9,7.59-.9S305.05,110.46,302.82,106.22Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M288.75,88.14l-.22,6.25s-1.56,5.13-.67,6.92,4.46.22,4.91-.67,3.8-12,3.57-13.39-3.35-3.13-5.13-3.13a4.06,4.06,0,0,0-2.9,1.34"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M304.38,100.86s4,2.68,4.24,3.57-.45,6-.45,8.71-.89,5.36-2.45,3.8-1.56-6.7-1.79-7.59-1.34-1.34-1.34-1.34"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M278.71,81s-5.58-1.11-6,1.12-.67,9.6,1.12,10,4.68.67,5.13,0,2-8.49,1.79-9.83S278.71,81,278.71,81Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M294.33,96.84s5.36-4,6.92-4.46S306.84,96,306.84,96a57,57,0,0,1-1.79,8.71c-1.12,3.35-2.46,4.46-3.8,4.46a2.76,2.76,0,0,1-2.67-2.9c0-1.79.67-7.59.67-7.59"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M282.73,91.26s-2,2.68-3.8,3.13a21.07,21.07,0,0,1-4.24.45"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M285,92.6a3.16,3.16,0,0,0,2.68,2.68"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M295.23,100s-.45,2.9,2.9,2.23"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M191.7,125.91a96.85,96.85,0,0,0,6.48-11.84c2.68-6,4.91-9.82,7.81-13.17s10.5-9.3,11.16-9.37c2-.23,2,2.23,2,2.23s3.57-2,4.69-1.12.65,3.11-1.12,4.47c-2.9,2.23-6.69,8-6.92,8.7a6.41,6.41,0,0,1-.67,1.34s4.91,2.91,4.91,4.25a10.8,10.8,0,0,1-.89,3.34A8.57,8.57,0,0,1,218,120.1c-1.56,2.46-2.67,4.91-4,4.91s-2-.22-2-1.56,1.56-4.46,1.56-4.46a25.5,25.5,0,0,0-3.57,4c-1.34,2-2.68,4.47-4.91,5.36s-6.25,2-6.25,2L194.77,137a8.64,8.64,0,0,1-5.75-.86c-2.45-1.56-3.12-4.91-3.12-4.91Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M190.14,126.13a4.59,4.59,0,0,0,2,3.79c2.23,1.79,6.7,2,6.7,2s.89-.67.89.45-3.35,6.92-4.69,9.15-8.7,2.68-11.38-.89-2.46-8.26-2-8.93,6.47-6,6.47-6S189.92,124.57,190.14,126.13Z"
                style="
                  fill: #666;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M219.16,93.76s-5.58,3.79-7.37,6.25-2.9,3.8-2.9,3.8"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <line
                x1="214.03"
                y1="111.4"
                x2="219.16"
                y2="114.74"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></line>
              <path
                d="M215.14,107.15s-1.56-1.11-2.68-.44"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M282.06,433.84q-1.65,1.46-3.6,3.21c-7,6.3-17.5,6.3-17.5,6.3s-3.5-15.75-7.7-16.8-9.8,0-9.8,0-7,9.45-10.15,12.6-11.2,9.1-15.75,12.25-13.65,7-14,11.9.84,7.12,9.25,9.58c7.79,2.27,27.15.57,35.9-.48s25.9-10.85,28.7-14.35S282,454.2,282,444.4C282,440.68,282,437,282.06,433.84Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M281.32,448.91a95.33,95.33,0,0,1-26.73,15.36c-12.9,4.92-29.49,5.23-41.48,3.08-6.15-1.11-8.57-2.94-9.47-4.46a3,3,0,0,0-.08.41c-.35,4.9.84,7.12,9.25,9.58,7.79,2.27,27.15.57,35.9-.48s25.9-10.85,28.7-14.35c2.34-2.92,3.94-3.66,4.41-9.49C281.65,448.68,281.49,448.78,281.32,448.91Z"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M223.15,448.25s-4.09,1.37-2.05,3.12c.94.8,10.25,6.28,12.64,4.74C237.41,453.75,223.15,448.25,223.15,448.25Z"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M234.93,453.21s19.35-13.52,21.81-17.51"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M238.31,453.56a1.61,1.61,0,0,1-1.12-.46c-6-6-11-5.43-11.25-5.4a1.57,1.57,0,0,1-.48-3.11c.27,0,6.72-1,14,6.28a1.57,1.57,0,0,1,0,2.23A1.6,1.6,0,0,1,238.31,453.56Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M243.53,450.18a1.56,1.56,0,0,1-1.16-.51c-5.84-6.4-12.72-5.65-12.78-5.65a1.57,1.57,0,1,1-.38-3.12c.35,0,8.56-.94,15.48,6.64a1.57,1.57,0,0,1-1.16,2.64Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M248.14,446.8a1.55,1.55,0,0,1-1.23-.6c-4.42-5.54-11.68-6-12.93-5.62a1.58,1.58,0,0,1-1.43-2.81c1.95-1.08,11.29-.47,16.82,6.47a1.57,1.57,0,0,1-1.23,2.56ZM234,440.59Zm.12-.06Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M251.83,443.11a1.58,1.58,0,0,1-1.17-.51,19.15,19.15,0,0,0-13-6.25,1.58,1.58,0,0,1,0-3.15,22.22,22.22,0,0,1,15.3,7.28,1.57,1.57,0,0,1-1.16,2.63Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M256.13,454.88h0a1.06,1.06,0,0,1-1-1.08l.06-2.77a1,1,0,0,1,1.05-1h0a1.05,1.05,0,0,1,1,1.07l-.06,2.78A1.05,1.05,0,0,1,256.13,454.88Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M256.19,452.62h0a1.58,1.58,0,0,1-1.54-1.61l.24-10.74a1.58,1.58,0,1,1,3.15.07l-.24,10.74A1.58,1.58,0,0,1,256.19,452.62Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M248,462.64a6.56,6.56,0,0,1,.91,2.69"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M212.05,455.6s-2.56,1.7,1.88,3.58,16.06.69,23.74-.85a9.91,9.91,0,0,1,6.7.76"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M276.78,442.29a15.27,15.27,0,0,1,1.37-2.24"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M274.39,453a26.83,26.83,0,0,1,1.36-8.28"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
            </g>
            <g id="freepik--Microphone--inject-117">
              <path
                d="M278.41,163.42a10.5,10.5,0,1,0-12,8.73A10.52,10.52,0,0,0,278.41,163.42Z"
                style="
                  fill: #666;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M321,174.26,274.41,170l2.27-14.34,45.6,10.3a2.44,2.44,0,0,1,1.88,2.77l-.55,3.5A2.45,2.45,0,0,1,321,174.26Z"
                style="
                  fill: #263238;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <polygon
                points="279.13 156.19 276.68 155.64 274.41 169.98 276.92 170.21 279.13 156.19"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></polygon>
              <path
                d="M265,171.81a10.89,10.89,0,0,0,1.42.34l.29,0L270,151.46c-.1,0-.19,0-.29-.06a11.94,11.94,0,0,0-1.45-.11Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
            </g>
          </svg>
        </header>
      </div>
    </section>

    <!-- Hero Standard with Testimonial -->
    <section>
      <div class="w-screen lg:pt-40 pb-12 relative">
        <!-- NAVBAR -->
        <nav
          class="w-full font-inter lg:absolute lg:top-0 mb-10 lg:mb-0"
          x-data="{isOpen: false, menuOne:false}"
        >
          <!-- CONTAINER -->
          <div
            class="flex flex-col lg:flex-row px-6 lg:px-10 py-8 xl:px-20 relative lg:items-center lg:justify-between"
          >
            <!-- SVG LOGO - YOU CAN REPLACE THIS, MAKE SURE TO INCLUDE THE CSS CLASSES ALREADY ATTACHED TO THE SVG -->
            <a
              href="
            "
            >
              <svg
                class="top-5 left-5 absolute lg:relative lg:inset-0"
                width="76"
                height="32"
                viewBox="0 0 76 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.256 25C13.344 25 16.848 21.424 16.848 16.264C16.848 11.032 13.272 7.456 8.088 7.456H1.944V25H8.256ZM7.8 10.288C11.424 10.288 13.608 12.544 13.608 16.264C13.608 19.912 11.472 22.168 7.968 22.168H5.016V10.288H7.8ZM24.5816 25.312C27.6776 25.312 29.8376 23.752 30.3416 21.16H27.6296C27.2936 22.288 26.2376 22.912 24.6296 22.912C22.6856 22.912 21.5816 21.856 21.3656 19.768L30.2936 19.744V18.856C30.2936 15.16 28.0376 12.784 24.4856 12.784C21.0056 12.784 18.5816 15.352 18.5816 19.072C18.5816 22.744 21.0536 25.312 24.5816 25.312ZM24.5096 15.184C26.2616 15.184 27.3896 16.264 27.3896 17.896H21.4376C21.7256 16.12 22.7816 15.184 24.5096 15.184ZM35.4814 25H38.3614L43.3054 13.144H40.2814L38.1214 18.592C37.6174 19.888 37.1854 21.136 37.0174 21.88C36.8734 21.232 36.4654 20.008 35.9614 18.592L33.8974 13.144H30.7774L35.4814 25ZM46.4526 10.768C47.4126 10.768 48.2286 9.976 48.2286 8.992C48.2286 8.008 47.4126 7.24 46.4526 7.24C45.4686 7.24 44.6766 8.008 44.6766 8.992C44.6766 9.976 45.4686 10.768 46.4526 10.768ZM42.1566 30.568C42.9246 30.784 43.3566 30.832 43.9086 30.832C46.4766 30.832 47.9166 29.2 47.9166 26.68V13.144H44.9886V26.344C44.9886 27.544 44.6526 28.12 43.6446 28.12C43.2846 28.12 43.0446 28.096 42.6366 27.976L42.1566 30.568ZM50.2457 19.048C50.2457 22.744 52.9097 25.288 56.5817 25.288C60.2537 25.288 62.9177 22.744 62.9177 19.048C62.9177 15.352 60.2537 12.808 56.5817 12.808C52.9097 12.808 50.2457 15.352 50.2457 19.048ZM53.1737 19.048C53.1737 16.888 54.5657 15.424 56.5817 15.424C58.5977 15.424 59.9897 16.888 59.9897 19.048C59.9897 21.208 58.5977 22.672 56.5817 22.672C54.5657 22.672 53.1737 21.208 53.1737 19.048ZM63.7613 30.496C64.4093 30.664 65.1293 30.76 65.9453 30.76C67.8893 30.76 69.1373 29.848 70.0253 27.64L75.8333 13.144H72.8093L69.5933 21.784L66.5453 13.144H63.4493L68.2253 25.504L67.8893 26.392C67.3853 27.784 66.6653 28.048 65.5133 28.048H63.7613V30.496Z"
                  fill="#160042"
                />
                <circle
                  cx="46"
                  cy="8"
                  r="3"
                  fill="url(#paint0_linear_1247_10972)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1247_10972"
                    x1="44.5"
                    y1="6"
                    x2="48.6491"
                    y2="6.18668"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#292D32" />
                    <stop offset="1" />
                  </linearGradient>
                </defs>
              </svg>
            </a>

            <!-- MENU CONTENT 1 -->
            <div
              class="flex flex-col lg:flex lg:flex-row mt-14 lg:mt-0 space-y-8 lg:space-y-0 lg:space-x-1"
              x-bind:class="isOpen ? 'show' : 'hidden'"
            >
              <!-- DROPDOWN -->
              <div class="flex flex-col relative">
                <a
                  x-on:click.prevent="menuOne = !menuOne"
                  href=""
                  class="lg:hover:bg-[#F7F8FD] rounded-full lg:px-6 lg:py-4 lg:hover:text-black flex flex-row"
                  x-bind:class="menuOne ? 'text-black lg:border lg:border-black lg:bg-[#F7F8FD]' : 'text-black lg:border lg:border-white' "
                  >Component
                  <svg
                    x-bind:class="menuOne ? 'rotate-180' : 'rotate-0' "
                    class="fill-current transition"
                    style="width: 24px; height: 24px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                    />
                  </svg>
                </a>

                <!-- DROP DOWN MENU ONE -->
                <div
                  class="bg-white z-50 w-full flex flex-col lg:flex-row lg:flex-wrap lg:absolute lg:top-20 px-5 lg:px-75 lg:py-7 lg:shadow-[0_16px_64px_-15px_rgba(45,96,173,0.15)] rounded-2xl py-5 lg:w-[800px] xl:w-[950px]"
                  x-show="menuOne"
                  x-on:click.outside="menuOne = false"
                >
                  <!-- ITEM -->
                  <a
                    class="flex flex-col hover:bg-gray-50 px-5 py-5 xl:px-8 rounded-2xl lg:basis-[248px] grow"
                    href=""
                  >
                    <!-- ICON -->
                    <div class="relative">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M28 30.3335H4C3.45333 30.3335 3 29.8802 3 29.3335C3 28.7868 3.45333 28.3335 4 28.3335H28C28.5467 28.3335 29 28.7868 29 29.3335C29 29.8802 28.5467 30.3335 28 30.3335Z"
                          fill="#160042"
                        />
                        <path
                          d="M7.46667 11.1733H5.33333C4.6 11.1733 4 11.7733 4 12.5067V24C4 24.7333 4.6 25.3333 5.33333 25.3333H7.46667C8.2 25.3333 8.8 24.7333 8.8 24V12.5067C8.8 11.76 8.2 11.1733 7.46667 11.1733Z"
                          fill="#160042"
                        />
                        <path
                          d="M17.0682 6.91992H14.9349C14.2016 6.91992 13.6016 7.51992 13.6016 8.25326V23.9999C13.6016 24.7333 14.2016 25.3333 14.9349 25.3333H17.0682C17.8016 25.3333 18.4016 24.7333 18.4016 23.9999V8.25326C18.4016 7.51992 17.8016 6.91992 17.0682 6.91992Z"
                          fill="#160042"
                        />
                        <path
                          d="M26.6659 2.6665H24.5326C23.7992 2.6665 23.1992 3.2665 23.1992 3.99984V23.9998C23.1992 24.7332 23.7992 25.3332 24.5326 25.3332H26.6659C27.3992 25.3332 27.9992 24.7332 27.9992 23.9998V3.99984C27.9992 3.2665 27.3992 2.6665 26.6659 2.6665Z"
                          fill="#160042"
                        />
                      </svg>
                    </div>

                    <!-- TEXT -->
                    <h2
                      class="text-black text-lg font-inter font-medium mb-1 mt-5"
                    >
                      Analytics
                    </h2>
                    <p
                      class="text-gray-500 text-[14px] font-inter leading-[24px] max-w-[250px] lg:max-w-[400px]"
                    >
                      Get a better understanding of where your traffic is coming
                      from
                    </p>
                  </a>

                  <!-- ITEM -->
                  <a
                    class="flex flex-col hover:bg-gray-50 px-5 py-5 xl:px-8 rounded-2xl lg:basis-[248px] grow"
                    href=""
                  >
                    <!-- ICON -->
                    <div class="relative">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M27.9727 14.2667C27.6794 9.06667 23.826 4.73333 18.6794 3.85333C18.5994 2.82667 17.746 2 16.6927 2H15.3594C14.306 2 13.466 2.81333 13.3727 3.84C8.19938 4.69333 4.31938 9.04 4.02604 14.2667C3.07938 14.4267 2.35938 15.24 2.35938 16.2267V17.56C2.35938 18.6667 3.25271 19.56 4.35938 19.56H5.69271C6.79938 19.56 7.69271 18.6667 7.69271 17.56V16.2267C7.69271 15.24 6.97271 14.4267 6.02604 14.2667C6.30604 10.1067 9.35937 6.65333 13.4394 5.85333C13.666 6.70667 14.4394 7.33333 15.3594 7.33333H16.6927C17.6127 7.33333 18.3727 6.70667 18.6127 5.86667C22.666 6.68 25.6927 10.1333 25.9727 14.2667C25.026 14.4267 24.306 15.24 24.306 16.2267V17.56C24.306 18.6667 25.1994 19.56 26.306 19.56H27.6394C28.746 19.56 29.6394 18.6667 29.6394 17.56V16.2267C29.6394 15.24 28.9194 14.4133 27.9727 14.2667Z"
                          fill="#160042"
                        />
                        <path
                          d="M21.0284 22.0666L18.8417 24H13.1751L10.9884 22.0666C9.72173 21.0266 9.72173 20.2266 10.6817 19L14.5351 14.12C14.8017 13.7866 15.1084 13.56 15.4551 13.44C15.8151 13.32 16.2017 13.32 16.5751 13.44C16.9084 13.56 17.2151 13.7866 17.4951 14.12L21.3351 18.9866C22.3084 20.2133 22.2551 20.9733 21.0284 22.0666Z"
                          fill="#160042"
                        />
                        <path
                          d="M17.7615 29.3333H14.3082C13.0815 29.3333 12.1615 28.3333 12.4015 27.2666L12.8149 25.4133C12.8949 25.04 13.2282 24.7866 13.6015 24.7866H18.4682C18.8415 24.7866 19.1615 25.04 19.2549 25.4133L19.6682 27.2666C19.9215 28.4 19.0682 29.3333 17.7615 29.3333Z"
                          fill="#160042"
                        />
                      </svg>
                    </div>

                    <!-- TEXT -->
                    <h2
                      class="text-black text-lg font-inter font-medium mb-1 mt-5"
                    >
                      Engagement
                    </h2>
                    <p
                      class="text-gray-500 text-[14px] font-inter leading-[24px] max-w-[250px] lg:max-w-[400px]"
                    >
                      Speak directly to your customers in a more meaningful way
                    </p>
                  </a>

                  <!-- ITEM -->
                  <a
                    class="flex flex-col hover:bg-gray-50 px-5 py-5 xl:px-8 rounded-2xl lg:basis-[248px] grow"
                    href=""
                  >
                    <!-- ICON -->
                    <div class="relative">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.588 2.66663H10.4146C5.5613 2.66663 2.66797 5.55996 2.66797 10.4133V21.5733C2.66797 26.44 5.5613 29.3333 10.4146 29.3333H21.5746C26.428 29.3333 29.3213 26.44 29.3213 21.5866V10.4133C29.3346 5.55996 26.4413 2.66663 21.588 2.66663ZM7.0013 15.8533C7.0413 13.5066 7.97464 11.2933 9.62797 9.63996C11.3346 7.93329 13.6013 6.99996 16.0013 6.99996C18.4013 6.99996 20.668 7.93329 22.3613 9.63996C22.4013 9.67996 22.4413 9.73329 22.4813 9.78663V8.63996C22.4813 8.09329 22.9346 7.63996 23.4813 7.63996C24.028 7.63996 24.4813 8.09329 24.4813 8.63996V12.1733C24.4813 12.72 24.028 13.1733 23.4813 13.1733H19.948C19.4013 13.1733 18.948 12.72 18.948 12.1733C18.948 11.6266 19.4013 11.1733 19.948 11.1733H21.0546C21.0146 11.1333 20.988 11.0933 20.948 11.0533C19.628 9.73329 17.868 8.99996 16.0013 8.99996C14.1346 8.99996 12.3746 9.73329 11.0546 11.0533C9.7613 12.3466 9.0413 14.0666 9.01464 15.8933C9.0013 16.4266 8.54797 16.8666 8.0013 16.8666H7.98797C7.4413 16.8666 7.0013 16.4 7.0013 15.8533ZM22.3613 22.36C20.668 24.0533 18.4013 25 16.0013 25C13.6013 25 11.3346 24.0666 9.6413 22.36C9.6013 22.32 9.5613 22.2666 9.5213 22.2133V23.3466C9.5213 23.8933 9.06797 24.3466 8.5213 24.3466C7.97464 24.3466 7.5213 23.8933 7.5213 23.3466V19.8133C7.5213 19.2666 7.97464 18.8133 8.5213 18.8133H12.0546C12.6013 18.8133 13.0546 19.2666 13.0546 19.8133C13.0546 20.36 12.6013 20.8133 12.0546 20.8133H10.948C10.988 20.8533 11.0146 20.8933 11.0546 20.9333C12.3746 22.2533 14.1346 22.9866 16.0013 22.9866C17.868 22.9866 19.628 22.2533 20.948 20.9333C22.2546 19.6266 22.988 17.88 22.988 16.0133C22.988 15.4666 23.4413 15.0133 23.988 15.0133C24.5346 15.0133 24.988 15.4666 24.988 16.0133C24.988 18.4266 24.0546 20.68 22.3613 22.36Z"
                          fill="#160042"
                        />
                      </svg>

                      <span
                        class="absolute inset-0 bg-gradient-to-r from-[#8A74FF] to-[#0BC4FF] opacity-40 blur-xl w-[30px]"
                      ></span>
                    </div>

                    <!-- TEXT -->
                    <h2
                      class="text-black text-lg font-inter font-medium mb-1 mt-5"
                    >
                      Automations
                    </h2>
                    <p
                      class="text-gray-500 text-[14px] font-inter leading-[24px] max-w-[250px] lg:max-w-[400px]"
                    >
                      Build strategic funnels that will drive your customers to
                      convert
                    </p>
                  </a>

                  <!-- ITEM -->
                  <a
                    class="flex flex-col hover:bg-gray-50 px-5 py-5 xl:px-8 rounded-2xl lg:basis-[248px] grow"
                    href=""
                  >
                    <!-- ICON -->
                    <div class="relative">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24.721 5.56006L17.3877 2.81339C16.6277 2.53339 15.3877 2.53339 14.6277 2.81339L7.29437 5.56006C5.88104 6.09339 4.73438 7.74673 4.73438 9.2534V20.0534C4.73438 21.1334 5.44104 22.5601 6.30771 23.2001L13.641 28.6801C14.9344 29.6534 17.0544 29.6534 18.3477 28.6801L25.681 23.2001C26.5477 22.5467 27.2544 21.1334 27.2544 20.0534V9.2534C27.2677 7.74673 26.121 6.09339 24.721 5.56006ZM17.001 17.1601V20.6667C17.001 21.2134 16.5477 21.6667 16.001 21.6667C15.4544 21.6667 15.001 21.2134 15.001 20.6667V17.1601C13.6544 16.7334 12.6677 15.4801 12.6677 14.0001C12.6677 12.1601 14.161 10.6667 16.001 10.6667C17.841 10.6667 19.3344 12.1601 19.3344 14.0001C19.3344 15.4934 18.3477 16.7334 17.001 17.1601Z"
                          fill="#160042"
                        />
                      </svg>
                    </div>

                    <!-- TEXT -->
                    <h2
                      class="text-black text-lg font-inter font-medium mb-1 mt-5"
                    >
                      Security
                    </h2>
                    <p
                      class="text-gray-500 text-[14px] font-inter leading-[24px] max-w-[250px] lg:max-w-[400px]"
                    >
                      Your customers data will be safe and secure
                    </p>
                  </a>

                  <!-- ITEM -->
                  <a
                    class="flex flex-col hover:bg-gray-50 px-5 py-5 xl:px-8 rounded-2xl lg:basis-[248px] grow"
                    href=""
                  >
                    <!-- ICON -->
                    <div class="relative">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M28.6654 14.5333V5.46663C28.6654 3.46663 27.812 2.66663 25.692 2.66663H20.3054C18.1854 2.66663 17.332 3.46663 17.332 5.46663V14.5333C17.332 16.5333 18.1854 17.3333 20.3054 17.3333H25.692C27.812 17.3333 28.6654 16.5333 28.6654 14.5333Z"
                          fill="#160042"
                        />
                        <path
                          d="M14.6654 17.4666V26.5333C14.6654 28.5333 13.812 29.3333 11.692 29.3333H6.30536C4.18536 29.3333 3.33203 28.5333 3.33203 26.5333V17.4666C3.33203 15.4666 4.18536 14.6666 6.30536 14.6666H11.692C13.812 14.6666 14.6654 15.4666 14.6654 17.4666Z"
                          fill="#160042"
                        />
                        <path
                          d="M28.6654 26.5333V22.8C28.6654 20.8 27.812 20 25.692 20H20.3054C18.1854 20 17.332 20.8 17.332 22.8V26.5333C17.332 28.5333 18.1854 29.3333 20.3054 29.3333H25.692C27.812 29.3333 28.6654 28.5333 28.6654 26.5333Z"
                          fill="#160042"
                        />
                        <path
                          d="M14.6654 9.19996V5.46663C14.6654 3.46663 13.812 2.66663 11.692 2.66663H6.30536C4.18536 2.66663 3.33203 3.46663 3.33203 5.46663V9.19996C3.33203 11.2 4.18536 12 6.30536 12H11.692C13.812 12 14.6654 11.2 14.6654 9.19996Z"
                          fill="#160042"
                        />
                      </svg>
                    </div>

                    <!-- TEXT -->
                    <h2
                      class="text-black text-lg font-inter font-medium mb-1 mt-5"
                    >
                      Integrations
                    </h2>
                    <p
                      class="text-gray-500 text-[14px] font-inter leading-[24px] max-w-[250px] lg:max-w-[400px]"
                    >
                      Connect with third-party tools that you’re already using
                    </p>
                  </a>

                  <!-- ITEM -->
                  <a
                    class="flex flex-col hover:bg-gray-50 px-5 py-5 xl:px-8 rounded-2xl lg:basis-[248px] grow"
                    href=""
                  >
                    <!-- ICON -->
                    <div class="relative">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.0676 2.9467C20.5209 2.40003 19.5742 2.77336 19.5742 3.53336V8.1867C19.5742 10.1334 21.2276 11.7467 23.2409 11.7467C24.5076 11.76 26.2676 11.76 27.7742 11.76C28.5342 11.76 28.9342 10.8667 28.4009 10.3334C26.4809 8.40003 23.0409 4.92003 21.0676 2.9467Z"
                          fill="#160042"
                        />
                        <path
                          d="M27.332 13.5866H23.4787C20.3187 13.5866 17.7454 11.0133 17.7454 7.85329V3.99996C17.7454 3.26663 17.1454 2.66663 16.412 2.66663H10.7587C6.65203 2.66663 3.33203 5.33329 3.33203 10.0933V21.9066C3.33203 26.6666 6.65203 29.3333 10.7587 29.3333H21.2387C25.3454 29.3333 28.6654 26.6666 28.6654 21.9066V14.92C28.6654 14.1866 28.0654 13.5866 27.332 13.5866ZM15.332 23.6666H9.9987C9.45203 23.6666 8.9987 23.2133 8.9987 22.6666C8.9987 22.12 9.45203 21.6666 9.9987 21.6666H15.332C15.8787 21.6666 16.332 22.12 16.332 22.6666C16.332 23.2133 15.8787 23.6666 15.332 23.6666ZM17.9987 18.3333H9.9987C9.45203 18.3333 8.9987 17.88 8.9987 17.3333C8.9987 16.7866 9.45203 16.3333 9.9987 16.3333H17.9987C18.5454 16.3333 18.9987 16.7866 18.9987 17.3333C18.9987 17.88 18.5454 18.3333 17.9987 18.3333Z"
                          fill="#160042"
                        />
                      </svg>
                    </div>

                    <!-- TEXT -->
                    <h2
                      class="text-black text-lg font-inter font-medium mb-1 mt-5"
                    >
                      Reports
                    </h2>
                    <p
                      class="text-gray-500 text-[14px] font-inter leading-[24px] max-w-[250px] lg:max-w-[400px]"
                    >
                      Get detailed report that will help you make more informed
                      decisions
                    </p>
                  </a>
                </div>
              </div>

              <a
                href=""
                class="lg:hover:bg-[#F7F8FD] font-inter rounded-full lg:px-6 lg:py-4 lg:hover:text-black"
                >Templates</a
              >
              <a
                href=""
                class="lg:hover:bg-[#F7F8FD] font-inter rounded-full lg:px-6 lg:py-4 lg:hover:text-black"
                >Pricing</a
              >
              <a
                href=""
                class="lg:hover:bg-[#F7F8FD] font-inter rounded-full lg:px-6 lg:py-4 lg:hover:text-black pb-8 lg:pb-0"
                >FAQs</a
              >
            </div>

            <!-- MENU CONTENT 2 -->
            <div
              class="flex flex-col lg:flex lg:flex-row space-y-8 lg:space-y-0 lg:space-x-1"
              x-bind:class="isOpen ? 'show' : 'hidden'"
            >
              <a
                href=""
                class="lg:hover:bg-[#F7F8FD] font-inter rounded-full lg:px-6 lg:py-4 lg:hover:text-black"
                >Sign Up</a
              >
              <a
                class="px-9 py-4 font-inter text-center bg-black text-white rounded-[6px] border border-black hover:text-black hover:bg-white"
                href=""
                >Login</a
              >
            </div>

            <!-- BURGER MENU -->
            <a
              href=""
              class="absolute top-5 right-5 lg:hidden"
              x-on:click.prevent="isOpen = !isOpen"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 12H20.25"
                  stroke="#160042"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.75 6H20.25"
                  stroke="#160042"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.75 18H20.25"
                  stroke="#160042"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </nav>

        <header
          class="w-full px-6 max-w-[1600px] justify-center items-center mx-auto flex flex-col lg:px-10 lg:flex-row lg:justify-between xl:px-20"
        >
          <!-- TEXT SECTION -->
          <div class="max-w-[556px] lg:mr-12">
            <h1
              class="text-black text-[55px] text-center font-black leading-[72px] xl:text-[68px] xl:leading-[94px] lg:text-left"
            >
              The Website You Want Without The Dev Time.
            </h1>

            <p
              class="font-inter text-base font-light text-center lg:text-left px-5 lg:px-0 leading-[30px] mt-4 text-[#71717A] max-w-[600px] lg:max-w-[500px]"
            >
              Use premium tailwindcss components to ship your product faster to
              your customers. Build better and faster with Devjoy
            </p>

            <div
              class="flex flex-row flex-wrap justify-center lg:justify-start items-center mt-12"
            >
              <button
                class="px-6 py-4 font-inter text-base text-white bg-black w-full rounded-[6px] max-w-[400px] md:w-auto"
              >
                Try it out
              </button>

              <button
                class="bg-white border border-[#160042] text-black rounded-[6px] px-6 py-4 font-inter text-base flex flex-row w-full max-w-[400px] items-center justify-center mt-6 md:w-auto md:mt-0 md:ml-6"
              >
                <p>Explore Components</p>

                <svg
                  class="ml-2"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 15L15 5"
                    stroke="#160042"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.875 5H15V13.125"
                    stroke="#160042"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>

            <!-- REVIEW DIV -->
            <div
              class="flex flex-col justify-center items-center lg:items-start mt-14 font-inter"
            >
              <!-- STARS -->
              <div class="flex flex-row">
                <svg
                  class="mr-1"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.633 3.59829L12.8767 6.15481C13.0471 6.50571 13.5025 6.85444 13.8887 6.9186L16.1861 7.33049C17.6573 7.59101 17.984 8.66188 16.9186 9.70977L15.1041 11.4845C14.8011 11.782 14.6211 12.3703 14.7148 12.7855L15.2013 15.0124C15.5836 16.7704 14.6462 17.4417 13.1096 16.5075L10.963 15.2022C10.5721 14.9637 9.93147 14.9618 9.54073 15.1862L7.36664 16.437C5.81037 17.331 4.88608 16.6403 5.30886 14.8929L5.84887 12.6818C5.94972 12.2684 5.79092 11.6759 5.49345 11.373L3.70864 9.55513C2.66743 8.48634 3.01826 7.42375 4.49237 7.19453L6.794 6.83829C7.18261 6.77496 7.64634 6.44608 7.82146 6.09592L9.12379 3.56367C9.83459 2.19983 10.9617 2.21475 11.633 3.59829Z"
                    fill="#F6AD1B"
                  />
                </svg>
                <svg
                  class="mr-1"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.633 3.59829L12.8767 6.15481C13.0471 6.50571 13.5025 6.85444 13.8887 6.9186L16.1861 7.33049C17.6573 7.59101 17.984 8.66188 16.9186 9.70977L15.1041 11.4845C14.8011 11.782 14.6211 12.3703 14.7148 12.7855L15.2013 15.0124C15.5836 16.7704 14.6462 17.4417 13.1096 16.5075L10.963 15.2022C10.5721 14.9637 9.93147 14.9618 9.54073 15.1862L7.36664 16.437C5.81037 17.331 4.88608 16.6403 5.30886 14.8929L5.84887 12.6818C5.94972 12.2684 5.79092 11.6759 5.49345 11.373L3.70864 9.55513C2.66743 8.48634 3.01826 7.42375 4.49237 7.19453L6.794 6.83829C7.18261 6.77496 7.64634 6.44608 7.82146 6.09592L9.12379 3.56367C9.83459 2.19983 10.9617 2.21475 11.633 3.59829Z"
                    fill="#F6AD1B"
                  />
                </svg>
                <svg
                  class="mr-1"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.633 3.59829L12.8767 6.15481C13.0471 6.50571 13.5025 6.85444 13.8887 6.9186L16.1861 7.33049C17.6573 7.59101 17.984 8.66188 16.9186 9.70977L15.1041 11.4845C14.8011 11.782 14.6211 12.3703 14.7148 12.7855L15.2013 15.0124C15.5836 16.7704 14.6462 17.4417 13.1096 16.5075L10.963 15.2022C10.5721 14.9637 9.93147 14.9618 9.54073 15.1862L7.36664 16.437C5.81037 17.331 4.88608 16.6403 5.30886 14.8929L5.84887 12.6818C5.94972 12.2684 5.79092 11.6759 5.49345 11.373L3.70864 9.55513C2.66743 8.48634 3.01826 7.42375 4.49237 7.19453L6.794 6.83829C7.18261 6.77496 7.64634 6.44608 7.82146 6.09592L9.12379 3.56367C9.83459 2.19983 10.9617 2.21475 11.633 3.59829Z"
                    fill="#F6AD1B"
                  />
                </svg>
                <svg
                  class="mr-1"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.633 3.59829L12.8767 6.15481C13.0471 6.50571 13.5025 6.85444 13.8887 6.9186L16.1861 7.33049C17.6573 7.59101 17.984 8.66188 16.9186 9.70977L15.1041 11.4845C14.8011 11.782 14.6211 12.3703 14.7148 12.7855L15.2013 15.0124C15.5836 16.7704 14.6462 17.4417 13.1096 16.5075L10.963 15.2022C10.5721 14.9637 9.93147 14.9618 9.54073 15.1862L7.36664 16.437C5.81037 17.331 4.88608 16.6403 5.30886 14.8929L5.84887 12.6818C5.94972 12.2684 5.79092 11.6759 5.49345 11.373L3.70864 9.55513C2.66743 8.48634 3.01826 7.42375 4.49237 7.19453L6.794 6.83829C7.18261 6.77496 7.64634 6.44608 7.82146 6.09592L9.12379 3.56367C9.83459 2.19983 10.9617 2.21475 11.633 3.59829Z"
                    fill="#F6AD1B"
                  />
                </svg>
                <svg
                  class="mr-1"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.633 3.59829L12.8767 6.15481C13.0471 6.50571 13.5025 6.85444 13.8887 6.9186L16.1861 7.33049C17.6573 7.59101 17.984 8.66188 16.9186 9.70977L15.1041 11.4845C14.8011 11.782 14.6211 12.3703 14.7148 12.7855L15.2013 15.0124C15.5836 16.7704 14.6462 17.4417 13.1096 16.5075L10.963 15.2022C10.5721 14.9637 9.93147 14.9618 9.54073 15.1862L7.36664 16.437C5.81037 17.331 4.88608 16.6403 5.30886 14.8929L5.84887 12.6818C5.94972 12.2684 5.79092 11.6759 5.49345 11.373L3.70864 9.55513C2.66743 8.48634 3.01826 7.42375 4.49237 7.19453L6.794 6.83829C7.18261 6.77496 7.64634 6.44608 7.82146 6.09592L9.12379 3.56367C9.83459 2.19983 10.9617 2.21475 11.633 3.59829Z"
                    fill="#F6AD1B"
                  />
                </svg>
              </div>

              <h2 class="text-gray-900 text-base font-medium mt-4 lg:mt-6 mb-3">
                Would highly recommend!
              </h2>

              <p
                class="font-light text-base text-gray-500 text-center lg:text-left max-w-[400px] lg:max-w-[350px]"
              >
                I would highly recommend Devjoy to save time with designing and
                developing
              </p>

              <div class="flex flex-row items-center justify-center">
                <img
                  class="mt-3 mr-4 w-10 h-10"
                  src="https://firebasestorage.googleapis.com/v0/b/tailwindfolio.appspot.com/o/templates%2Fassets%2Fprofile-image.png?alt=media&token=27f4b360-852e-486a-849e-77c8b56feaeb"
                  alt="Profile Image"
                />

                <h2 class="text-gray-900 text-base font-medium mt-6 mb-3">
                  Aleeyah
                </h2>
              </div>
            </div>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="max-w-[700px]"
            viewBox="0 0 500 500"
          >
            <g id="freepik--Speakers--inject-117">
              <path
                d="M90.91,358.14a25.74,25.74,0,1,0,25.73,25.73A25.73,25.73,0,0,0,90.91,358.14Zm0,35a9.31,9.31,0,1,1,9.31-9.31A9.31,9.31,0,0,1,90.91,393.18Z"
                style="fill: #263238"
              ></path>
              <path
                d="M90.91,317.62a15.88,15.88,0,1,0,15.88,15.88A15.88,15.88,0,0,0,90.91,317.62Zm0,21.62a5.74,5.74,0,1,1,5.74-5.74A5.74,5.74,0,0,1,90.91,339.24Z"
                style="fill: #263238"
              ></path>
              <rect
                x="57.85"
                y="309.48"
                width="66.12"
                height="107.61"
                rx="3.94"
                style="fill: none; stroke: #263238; stroke-miterlimit: 10"
              ></rect>
              <path
                d="M404.87,358.14a25.74,25.74,0,1,0,25.74,25.73A25.73,25.73,0,0,0,404.87,358.14Zm0,35a9.31,9.31,0,1,1,9.31-9.31A9.3,9.3,0,0,1,404.87,393.18Z"
                style="fill: #263238"
              ></path>
              <path
                d="M404.87,317.62a15.88,15.88,0,1,0,15.88,15.88A15.88,15.88,0,0,0,404.87,317.62Zm0,21.62a5.74,5.74,0,1,1,5.75-5.74A5.74,5.74,0,0,1,404.87,339.24Z"
                style="fill: #263238"
              ></path>
              <rect
                x="371.82"
                y="309.48"
                width="66.12"
                height="107.61"
                rx="3.94"
                style="fill: none; stroke: #263238; stroke-miterlimit: 10"
              ></rect>
            </g>
            <g id="freepik--Graphics--inject-117">
              <line
                x1="151.84"
                y1="60.08"
                x2="151.84"
                y2="76.88"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></line>
              <line
                x1="160.24"
                y1="68.48"
                x2="143.43"
                y2="68.48"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></line>
              <line
                x1="115.08"
                y1="162.98"
                x2="115.08"
                y2="174.53"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></line>
              <line
                x1="120.86"
                y1="168.76"
                x2="109.31"
                y2="168.76"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></line>
              <line
                x1="369.2"
                y1="51.68"
                x2="369.2"
                y2="63.23"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></line>
              <line
                x1="374.97"
                y1="57.45"
                x2="363.42"
                y2="57.45"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></line>
              <line
                x1="299.89"
                y1="321.54"
                x2="299.89"
                y2="333.09"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></line>
              <line
                x1="305.67"
                y1="327.32"
                x2="294.12"
                y2="327.32"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></line>
              <line
                x1="356.07"
                y1="153.53"
                x2="356.07"
                y2="167.18"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></line>
              <line
                x1="362.9"
                y1="160.36"
                x2="349.25"
                y2="160.36"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></line>
              <line
                x1="390.2"
                y1="57.98"
                x2="390.2"
                y2="71.63"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></line>
              <line
                x1="397.02"
                y1="64.8"
                x2="383.37"
                y2="64.8"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></line>
              <path
                d="M89.88,121.5a4.73,4.73,0,1,1-4.72-4.72A4.72,4.72,0,0,1,89.88,121.5Z"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M335.6,301.59a4.73,4.73,0,1,1-4.73-4.73A4.73,4.73,0,0,1,335.6,301.59Z"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M412.25,144.61a4.73,4.73,0,1,1-4.73-4.73A4.72,4.72,0,0,1,412.25,144.61Z"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <circle
                cx="115.08"
                cy="39.6"
                r="3.68"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></circle>
              <circle
                cx="168.64"
                cy="301.06"
                r="3.68"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></circle>
              <circle
                cx="83.58"
                cy="210.76"
                r="3.68"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></circle>
            </g>
            <g id="freepik--Wave--inject-117">
              <path
                d="M65.1,242.84H74V232a5,5,0,0,1,5-5h0a5,5,0,0,1,5,5V262.9a5.34,5.34,0,0,0,5.33,5.34h0a5.34,5.34,0,0,0,5.34-5.34v-56a6.48,6.48,0,0,1,6.48-6.47h0a6.47,6.47,0,0,1,6.47,6.47v75a6.1,6.1,0,0,0,6.1,6.1h0a6.1,6.1,0,0,0,6.09-6.1v-91.5a8,8,0,0,1,8-8h0a8,8,0,0,1,8,8V281.5a6.48,6.48,0,0,0,6.48,6.48h0a6.48,6.48,0,0,0,6.48-6.48V208.91a7.62,7.62,0,0,1,7.62-7.62h0a7.62,7.62,0,0,1,7.62,7.62v53.55a5.71,5.71,0,0,0,5.71,5.71h0a5.71,5.71,0,0,0,5.72-5.71V233.35a5.45,5.45,0,0,1,5.45-5.45h0a5.45,5.45,0,0,1,5.45,5.45v9.49h10.14"
                style="fill: none; stroke: #263238; stroke-miterlimit: 10"
              ></path>
              <path
                d="M189.33,242.84h8.86V232a5,5,0,0,1,4.95-5h0a5,5,0,0,1,5,5V262.9a5.34,5.34,0,0,0,5.34,5.34h0a5.34,5.34,0,0,0,5.33-5.34v-56a6.48,6.48,0,0,1,6.48-6.47h0a6.47,6.47,0,0,1,6.47,6.47v75a6.1,6.1,0,0,0,6.1,6.1h0a6.1,6.1,0,0,0,6.09-6.1v-91.5a8,8,0,0,1,8-8h0a8,8,0,0,1,8,8V281.5a6.47,6.47,0,0,0,6.47,6.48h0a6.48,6.48,0,0,0,6.48-6.48V208.91a7.62,7.62,0,0,1,7.62-7.62h0a7.62,7.62,0,0,1,7.62,7.62v53.55a5.71,5.71,0,0,0,5.71,5.71h0a5.71,5.71,0,0,0,5.72-5.71V233.35A5.45,5.45,0,0,1,305,227.9h0a5.45,5.45,0,0,1,5.45,5.45v9.49h10.14"
                style="fill: none; stroke: #263238; stroke-miterlimit: 10"
              ></path>
              <path
                d="M313.56,242.84h8.86V232a5,5,0,0,1,4.95-5h0a5,5,0,0,1,4.95,5V262.9a5.34,5.34,0,0,0,5.34,5.34h0A5.34,5.34,0,0,0,343,262.9v-56a6.48,6.48,0,0,1,6.48-6.47h0a6.47,6.47,0,0,1,6.47,6.47v75A6.1,6.1,0,0,0,362,288h0a6.09,6.09,0,0,0,6.09-6.1v-91.5a8,8,0,0,1,8-8h0a8,8,0,0,1,8,8V281.5a6.48,6.48,0,0,0,6.47,6.48h0a6.48,6.48,0,0,0,6.48-6.48V208.91a7.62,7.62,0,0,1,7.62-7.62h0a7.62,7.62,0,0,1,7.62,7.62v53.55a5.71,5.71,0,0,0,5.71,5.71h0a5.71,5.71,0,0,0,5.72-5.71V233.35a5.45,5.45,0,0,1,5.45-5.45h0a5.45,5.45,0,0,1,5.45,5.45v9.49H444.8"
                style="fill: none; stroke: #263238; stroke-miterlimit: 10"
              ></path>
            </g>
            <g id="freepik--Floor--inject-117">
              <ellipse
                cx="243.72"
                cy="454.9"
                rx="97.13"
                ry="23.1"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></ellipse>
            </g>
            <g id="freepik--Character--inject-117">
              <path
                d="M209.24,63.05s1.57-4.9,3-8.75,3.85-7,5.08-7.88,7.35-3,19.25-.35,17.33,7,19.25,8.58,1.93,4.2,2.28,7.35a59,59,0,0,0,1.05,6.13s-1.23-2.63-16.28-4.73S222,59.9,217.64,62s-9.45,4.73-9.45,4.73Z"
                style="
                  fill: #263238;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M213,88.33a50.46,50.46,0,0,1-7-1.13c-5.71-1.14-10.38-5.4-5.19-12.49s8.56-12.49,8.56-12.49,2.15-4,10.38-6.13,26.08,3.26,33.08,5.94S265.42,68,268,72.55s.35,5.94-3.85,10.34-6.82,5.74-13.82,7.66S213,88.33,213,88.33Z"
                style="
                  fill: #263238;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M218.44,65s-6.75,6.23-6.75,9.34.52,13.49,1.3,17.38,6.49,15.83,8.82,17.65,10.38-.26,10.38-.26l3.9,5.19,21-13.49s-3.38-7.53-3.64-8.31a44.11,44.11,0,0,1-.26-5.45s3.12-1.55,4.16-4.15a19,19,0,0,0,1-6s-9.08-9.08-19.2-12.19S218.44,65,218.44,65Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M220.26,74.63l.52,4.15s-2.6,2.85-2.6,4.93,3.63,2.08,3.63,2.08"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <polyline
                points="227.78 73.33 228.04 75.15 234.53 73.07"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></polyline>
              <polyline
                points="215.07 78.78 214.39 81.67 218.54 79.33"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></polyline>
              <ellipse
                cx="233.03"
                cy="74.85"
                rx="1.24"
                ry="1.07"
                style="fill: #263238"
              ></ellipse>
              <ellipse
                cx="218.02"
                cy="80.6"
                rx="1.24"
                ry="1.07"
                style="fill: #263238"
              ></ellipse>
              <path
                d="M224.29,71.1s1.41-5,6.12-5.95a6.06,6.06,0,0,1,5.43,1.58"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  stroke-width: 2px;
                "
              ></path>
              <path
                d="M218.51,73.55s-1.56-1.21-2.8-.7a4.41,4.41,0,0,0-2.62,3.5"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  stroke-width: 2px;
                "
              ></path>
              <path
                d="M246.87,71.8c3,2.45,2.45,6.13,4.72,5.25a20.75,20.75,0,0,0,4.23-2.43,58.28,58.28,0,0,0-11.59-7.81A6.5,6.5,0,0,0,246.87,71.8Z"
                style="
                  fill: #263238;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <polygon
                points="232.19 109.14 240.56 102.95 236.09 114.33 232.19 109.14"
                style="
                  fill: #263238;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></polygon>
              <path
                d="M229.81,416.05s-12.95,9.1-15.05,9.45-11.2,2.1-12.25,4.2-1.75,4.9,1.75,5.6,19.25,1.75,24.85,1.75,11.9.35,15-.35,8.05.7,9.8-6.3,1.4-12.6.35-16.45S229.81,416.05,229.81,416.05Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M246.91,433.86a176.11,176.11,0,0,0-21.2-.93c-8.94.27-21-1.6-23.71-2.05-.65,1.85-.61,3.84,2.26,4.42,3.5.7,19.25,1.75,24.85,1.75s11.9.35,15-.35c1.67-.37,3.82-.16,5.74-.91Z"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M227.07,429.73h0a.52.52,0,0,1-.52-.53l.05-1.83a.51.51,0,0,1,.53-.51.54.54,0,0,1,.52.54l0,1.82A.51.51,0,0,1,227.07,429.73Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M227.11,428.44h0a1.07,1.07,0,0,1-1-1.08l.16-7.05a1.08,1.08,0,0,1,1.07-1,1.05,1.05,0,0,1,1,1.07l-.16,7.05A1.05,1.05,0,0,1,227.11,428.44Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M214.74,427.06a1.55,1.55,0,0,1-1.38-.85,2.42,2.42,0,0,1,0-2.36c.8-1.39,2.82-1.66,3.66-1.71a1.58,1.58,0,0,1,.18,3.15,5.05,5.05,0,0,0-.88.15,1.56,1.56,0,0,1-.87,1.46A1.63,1.63,0,0,1,214.74,427.06Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M218.63,424.66a1.53,1.53,0,0,1-1.39-.85,2.42,2.42,0,0,1,0-2.36c.81-1.39,2.83-1.65,3.66-1.7a1.57,1.57,0,0,1,.19,3.14,5,5,0,0,0-.89.15,1.56,1.56,0,0,1-.87,1.46A1.59,1.59,0,0,1,218.63,424.66Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M222.51,422.27a1.56,1.56,0,0,1-1.39-.85,2.41,2.41,0,0,1,0-2.36c.8-1.4,2.82-1.66,3.65-1.71a1.57,1.57,0,1,1,.19,3.14,4.27,4.27,0,0,0-.88.16,1.59,1.59,0,0,1-.87,1.45A1.65,1.65,0,0,1,222.51,422.27Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M205.39,428.27s.17.34,3.59.34,4.44,1.54,4.78,2.73"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M237.74,427.08a5.81,5.81,0,0,1,2.66-1.37"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M233.06,432.71a29.41,29.41,0,0,1,3.25-4.28"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M215.54,244.89s-.35,22.05-.35,44.8,1.17,43.56,4,50.21,10.3,41.15,11,45.7-.35,11.55-.35,15a19.9,19.9,0,0,0,1.05,6.3s-1.75,2.8-1.75,4.55-2.1,5.25,0,6.3,3.5,2.1,14,3.85,17.15-8.4,18.9-11.2-8.2-69.5-9.6-81.75-.47-37.61,1.63-47.41,1.05-32.55-.35-37.1-15.05-7.35-22.4-6.65S215.54,244.89,215.54,244.89Z"
                style="
                  fill: #263238;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M242.49,254.69s-7.58,53.71-7.58,62.46,3.85,18.55,4.9,22.75,5.05,51.65,6.1,54.8,1.4,11.55,1.4,11.55-2.8,1.05-3.15,3.15,1.4,3.5,1.4,5.25-1.75,4.55-2.45,7a8.2,8.2,0,0,0,.35,4.9s-7,9.45-10.15,12.6-11.2,9.1-15.75,12.25-13.65,7-14,11.9,3.15,9.1,11.9,9.45,24.5.7,33.25-.35,25.9-10.85,28.7-14.35S282,454.2,282,444.4s.35-19.25,0-20.3-1-2.8-.35-8.4a19,19,0,0,0-1.05-9.45A44.39,44.39,0,0,0,282,401c.35-2.1-2.45-7-2.45-7s1.95-36.25,1.95-44.3-10.15-25.55-10.15-25.55,1.4-7.35,1.4-8.75-2.1-4.9-2.1-4.9S281,281.64,282,277.79s3.85-16.45,4.55-20.65-1.75-12.95-4.9-18.2-16.8-11.55-21.7-7.35S242.49,254.69,242.49,254.69Z"
                style="
                  fill: #263238;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M212.74,245.24s9.45,16.45,15.75,19.6,12.6-1.4,21.35-10.85,14-16.8,20.3-14.35,17.85,26.25,19.6,29.05,1.4-23.1-2.1-31.15-21.35-11.2-43-8.4S212.74,245.24,212.74,245.24Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M211,234s-.7,6.3-.7,9.8,5.25,3.15,5.25,3.15,15.75-6.65,33.25-7.7,35,3.5,37.8,3.5,4.2-2.45,4.2-5.25-3.15-9.1-3.15-9.1-7.35-8.05-29.05-8.75-37.45-.35-42,3.5S211,234,211,234Z"
                style="
                  fill: #666;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M255.94,96.84s-19.65,15-23.67,18.09-.67,5.8.23,6.47a17.6,17.6,0,0,1,2.45,3.13,129.49,129.49,0,0,1-14.73,11.38c-8.71,5.81-10.27,6.7-12.73,9.82s-11.6,13.4-11.6,13.4a55.05,55.05,0,0,0,1.34-9.82c0-4,1.84-8.89-.17-12.24s-6.92-7.59-11.38-7.59-8.49,1.56-11.17,5.8-4.74,12.91-6.3,22.29-8.43,20.8-5.53,25.26,7.59,10,13.84,10,11.83-.45,14.74-3.13,16.68-8.52,18.24-9.64a51.09,51.09,0,0,1,5.36-2.9s-.22,17.19-1.11,24.11-6.7,23.44-7.15,27,5.14,7.14,5.14,7.14,5.8-6,23-7.59a220.8,220.8,0,0,1,41.3.67c4.24.67,10.27,3.58,13,.9s4.46-2.68,4-8.71-1.33-12.5-1.33-15.18,1.78-24.11,1.78-24.78,5.81-26.12,5.81-26.12,13.17-4,22.1-5.8,12.72-14.06,9.82-21.21-14.29-14.51-19.2-17.86-21.21-4-23.44-3.12-9.15-.45-14.51-1.12-8.26-.67-9.15-.45l-.9.23s-1.34-7.37-3.34-8.71S255.94,96.84,255.94,96.84Z"
                style="
                  fill: #92e3a9;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M306.93,145.29a26.88,26.88,0,0,0,3.76.48"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M283.68,111.17s-5.81,3.13-4.25,8.26,12.06,17,17,21a23.21,23.21,0,0,0,7,3.9"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M294.39,140s3.8,5.36,7.59,6.92a16.93,16.93,0,0,0,6.92,1.34"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M194.86,174.75a19.19,19.19,0,0,1-2.26,5.18"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M195.89,159.13s-.62,8.3-.62,12.54"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M195.5,178.81s-1.79,4.24-4.47,4.91"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <polyline
                points="213.13 158.72 214.86 177.21 210.01 162.52"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></polyline>
              <path
                d="M275.42,140.86s2.23,9.83,10,12.06,12.73,1.56,12.73,1.56"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M223.17,221.21c-1,3.81-.77,6.4,1.82,7.58"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M227.32,208.33a50.28,50.28,0,0,1-2,6.45l-.41,1.08"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M234.35,137.72a97,97,0,0,0-3.06,10.56c-1.75,8.4-2.1,28.35-2.1,39.9a95.93,95.93,0,0,1-1.26,17.23"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M236.19,112.23s-2.8,4.9-1.4,6.3,4.2,6.65,4.2,6.65-1.83,4.52-3.76,10"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M231.66,187.82a8.16,8.16,0,0,1-5.49-1.91c-3.89-3.32-5.22-10.63-4.33-23.7,0-.52.08-1.05.14-1.58.11-13.59,7.35-29.12,7.72-30,.22-.53,1.24-2.64,1.77-2.42s1-1,.79-.51c0,0-.18.43-.45,1.13,1.22-2.74,2.08-4.5,2.2-4.75a1.06,1.06,0,0,1,1.41-.48,1,1,0,0,1,.47,1.41c-.1.21-10.18,20.82-11.81,35.75a26,26,0,0,0,.2,3.5c.33,2.52,1.32,5.59,4.13,5.93,4.33.52,11.47-5.35,15.2-14.92,5.55-14.21,18.44-43.84,18.57-44.14a1,1,0,0,1,2,.71,264.86,264.86,0,0,0-7.32,35.89c-2.26,17.81-10,37-22.16,39.75A13.7,13.7,0,0,1,231.66,187.82Zm-8-18.61c0,8,1.24,12.87,3.85,15.11,1.62,1.38,3.8,1.74,6.68,1.09,9.52-2.15,18-17.76,20.54-38,1.12-8.8,2.76-17.14,4.21-23.59-4.25,9.93-10.11,23.75-13.39,32.15-3.77,9.66-11.57,17-17.41,16.24A5.94,5.94,0,0,1,223.68,169.21Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <polygon
                points="234.79 118.53 233.74 126.58 236.89 125.18 234.79 118.53"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></polygon>
              <path
                d="M263.81,113.85s-8.93,3.8-11.61,5.58"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M279,108.72s.67,2.45,4.46,5.8,11.16,2.68,14.07,1.12,3.73-6.52,3.73-6.52-4.4-4.87-6.64-5.09S279.88,102.47,279,108.72Z"
                style="
                  fill: #666;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M302.82,106.22c-.43-.81-.89-1.59-1.36-2.35a3.43,3.43,0,0,0,.24-.33,2.86,2.86,0,0,0,.45-2.68c-.45-.89-2.46-4.68-3.13-4.68-.35,0-1.9.24-3.31.47l-.26-.25a12,12,0,0,1-1.7-1.91c.45-1.51,2.11-5.58,1.7-7s-4.46-2.9-6-2.68c-1,.15-3.26,2.93-4.7,4.87l-2-.36c-.71-2.07-2.11-5.91-2.93-6.07-1.11-.23-3.12,2.23-3.12,3.35,0,.36.07,1.27.17,2.33l-2.63,1.68s-3.57,8.71-5.13,10.5-8,5.8-12.06,6-8.48.67-7.59,3.35,4,2.9,10,3.57,11.16-2.23,13.39-3.57,6.92-.67,10.05-.67,7.37-1.11,8.26-1.11,3.35,2,6,2.68,7.59-.9,7.59-.9S305.05,110.46,302.82,106.22Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M288.75,88.14l-.22,6.25s-1.56,5.13-.67,6.92,4.46.22,4.91-.67,3.8-12,3.57-13.39-3.35-3.13-5.13-3.13a4.06,4.06,0,0,0-2.9,1.34"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M304.38,100.86s4,2.68,4.24,3.57-.45,6-.45,8.71-.89,5.36-2.45,3.8-1.56-6.7-1.79-7.59-1.34-1.34-1.34-1.34"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M278.71,81s-5.58-1.11-6,1.12-.67,9.6,1.12,10,4.68.67,5.13,0,2-8.49,1.79-9.83S278.71,81,278.71,81Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M294.33,96.84s5.36-4,6.92-4.46S306.84,96,306.84,96a57,57,0,0,1-1.79,8.71c-1.12,3.35-2.46,4.46-3.8,4.46a2.76,2.76,0,0,1-2.67-2.9c0-1.79.67-7.59.67-7.59"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M282.73,91.26s-2,2.68-3.8,3.13a21.07,21.07,0,0,1-4.24.45"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M285,92.6a3.16,3.16,0,0,0,2.68,2.68"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M295.23,100s-.45,2.9,2.9,2.23"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M191.7,125.91a96.85,96.85,0,0,0,6.48-11.84c2.68-6,4.91-9.82,7.81-13.17s10.5-9.3,11.16-9.37c2-.23,2,2.23,2,2.23s3.57-2,4.69-1.12.65,3.11-1.12,4.47c-2.9,2.23-6.69,8-6.92,8.7a6.41,6.41,0,0,1-.67,1.34s4.91,2.91,4.91,4.25a10.8,10.8,0,0,1-.89,3.34A8.57,8.57,0,0,1,218,120.1c-1.56,2.46-2.67,4.91-4,4.91s-2-.22-2-1.56,1.56-4.46,1.56-4.46a25.5,25.5,0,0,0-3.57,4c-1.34,2-2.68,4.47-4.91,5.36s-6.25,2-6.25,2L194.77,137a8.64,8.64,0,0,1-5.75-.86c-2.45-1.56-3.12-4.91-3.12-4.91Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M190.14,126.13a4.59,4.59,0,0,0,2,3.79c2.23,1.79,6.7,2,6.7,2s.89-.67.89.45-3.35,6.92-4.69,9.15-8.7,2.68-11.38-.89-2.46-8.26-2-8.93,6.47-6,6.47-6S189.92,124.57,190.14,126.13Z"
                style="
                  fill: #666;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M219.16,93.76s-5.58,3.79-7.37,6.25-2.9,3.8-2.9,3.8"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <line
                x1="214.03"
                y1="111.4"
                x2="219.16"
                y2="114.74"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></line>
              <path
                d="M215.14,107.15s-1.56-1.11-2.68-.44"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M282.06,433.84q-1.65,1.46-3.6,3.21c-7,6.3-17.5,6.3-17.5,6.3s-3.5-15.75-7.7-16.8-9.8,0-9.8,0-7,9.45-10.15,12.6-11.2,9.1-15.75,12.25-13.65,7-14,11.9.84,7.12,9.25,9.58c7.79,2.27,27.15.57,35.9-.48s25.9-10.85,28.7-14.35S282,454.2,282,444.4C282,440.68,282,437,282.06,433.84Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M281.32,448.91a95.33,95.33,0,0,1-26.73,15.36c-12.9,4.92-29.49,5.23-41.48,3.08-6.15-1.11-8.57-2.94-9.47-4.46a3,3,0,0,0-.08.41c-.35,4.9.84,7.12,9.25,9.58,7.79,2.27,27.15.57,35.9-.48s25.9-10.85,28.7-14.35c2.34-2.92,3.94-3.66,4.41-9.49C281.65,448.68,281.49,448.78,281.32,448.91Z"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M223.15,448.25s-4.09,1.37-2.05,3.12c.94.8,10.25,6.28,12.64,4.74C237.41,453.75,223.15,448.25,223.15,448.25Z"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M234.93,453.21s19.35-13.52,21.81-17.51"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M238.31,453.56a1.61,1.61,0,0,1-1.12-.46c-6-6-11-5.43-11.25-5.4a1.57,1.57,0,0,1-.48-3.11c.27,0,6.72-1,14,6.28a1.57,1.57,0,0,1,0,2.23A1.6,1.6,0,0,1,238.31,453.56Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M243.53,450.18a1.56,1.56,0,0,1-1.16-.51c-5.84-6.4-12.72-5.65-12.78-5.65a1.57,1.57,0,1,1-.38-3.12c.35,0,8.56-.94,15.48,6.64a1.57,1.57,0,0,1-1.16,2.64Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M248.14,446.8a1.55,1.55,0,0,1-1.23-.6c-4.42-5.54-11.68-6-12.93-5.62a1.58,1.58,0,0,1-1.43-2.81c1.95-1.08,11.29-.47,16.82,6.47a1.57,1.57,0,0,1-1.23,2.56ZM234,440.59Zm.12-.06Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M251.83,443.11a1.58,1.58,0,0,1-1.17-.51,19.15,19.15,0,0,0-13-6.25,1.58,1.58,0,0,1,0-3.15,22.22,22.22,0,0,1,15.3,7.28,1.57,1.57,0,0,1-1.16,2.63Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M256.13,454.88h0a1.06,1.06,0,0,1-1-1.08l.06-2.77a1,1,0,0,1,1.05-1h0a1.05,1.05,0,0,1,1,1.07l-.06,2.78A1.05,1.05,0,0,1,256.13,454.88Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M256.19,452.62h0a1.58,1.58,0,0,1-1.54-1.61l.24-10.74a1.58,1.58,0,1,1,3.15.07l-.24,10.74A1.58,1.58,0,0,1,256.19,452.62Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M248,462.64a6.56,6.56,0,0,1,.91,2.69"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M212.05,455.6s-2.56,1.7,1.88,3.58,16.06.69,23.74-.85a9.91,9.91,0,0,1,6.7.76"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M276.78,442.29a15.27,15.27,0,0,1,1.37-2.24"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M274.39,453a26.83,26.83,0,0,1,1.36-8.28"
                style="
                  fill: none;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
            </g>
            <g id="freepik--Microphone--inject-117">
              <path
                d="M278.41,163.42a10.5,10.5,0,1,0-12,8.73A10.52,10.52,0,0,0,278.41,163.42Z"
                style="
                  fill: #666;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <path
                d="M321,174.26,274.41,170l2.27-14.34,45.6,10.3a2.44,2.44,0,0,1,1.88,2.77l-.55,3.5A2.45,2.45,0,0,1,321,174.26Z"
                style="
                  fill: #263238;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
              <polygon
                points="279.13 156.19 276.68 155.64 274.41 169.98 276.92 170.21 279.13 156.19"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></polygon>
              <path
                d="M265,171.81a10.89,10.89,0,0,0,1.42.34l.29,0L270,151.46c-.1,0-.19,0-.29-.06a11.94,11.94,0,0,0-1.45-.11Z"
                style="
                  fill: #fff;
                  stroke: #263238;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                "
              ></path>
            </g>
          </svg>
        </header>
      </div>
    </section>

    <!-- Features - Large Hero -->
    <section>
      <div class="w-screen relative lg:pt-40 pb-12">
        <!-- NAVBAR -->
        <nav
          class="w-full font-inter lg:absolute lg:top-0 mb-10 lg:mb-0"
          x-data="{isOpen: false, menuOne:false}"
        >
          <!-- CONTAINER -->
          <div
            class="flex flex-col lg:flex-row px-6 lg:px-10 py-8 xl:px-20 relative lg:items-center lg:justify-between"
          >
            <!-- SVG LOGO - YOU CAN REPLACE THIS, MAKE SURE TO INCLUDE THE CSS CLASSES ALREADY ATTACHED TO THE SVG -->
            <a
              href="
            "
            >
              <svg
                class="top-5 left-5 absolute lg:relative lg:inset-0"
                width="76"
                height="32"
                viewBox="0 0 76 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.256 25C13.344 25 16.848 21.424 16.848 16.264C16.848 11.032 13.272 7.456 8.088 7.456H1.944V25H8.256ZM7.8 10.288C11.424 10.288 13.608 12.544 13.608 16.264C13.608 19.912 11.472 22.168 7.968 22.168H5.016V10.288H7.8ZM24.5816 25.312C27.6776 25.312 29.8376 23.752 30.3416 21.16H27.6296C27.2936 22.288 26.2376 22.912 24.6296 22.912C22.6856 22.912 21.5816 21.856 21.3656 19.768L30.2936 19.744V18.856C30.2936 15.16 28.0376 12.784 24.4856 12.784C21.0056 12.784 18.5816 15.352 18.5816 19.072C18.5816 22.744 21.0536 25.312 24.5816 25.312ZM24.5096 15.184C26.2616 15.184 27.3896 16.264 27.3896 17.896H21.4376C21.7256 16.12 22.7816 15.184 24.5096 15.184ZM35.4814 25H38.3614L43.3054 13.144H40.2814L38.1214 18.592C37.6174 19.888 37.1854 21.136 37.0174 21.88C36.8734 21.232 36.4654 20.008 35.9614 18.592L33.8974 13.144H30.7774L35.4814 25ZM46.4526 10.768C47.4126 10.768 48.2286 9.976 48.2286 8.992C48.2286 8.008 47.4126 7.24 46.4526 7.24C45.4686 7.24 44.6766 8.008 44.6766 8.992C44.6766 9.976 45.4686 10.768 46.4526 10.768ZM42.1566 30.568C42.9246 30.784 43.3566 30.832 43.9086 30.832C46.4766 30.832 47.9166 29.2 47.9166 26.68V13.144H44.9886V26.344C44.9886 27.544 44.6526 28.12 43.6446 28.12C43.2846 28.12 43.0446 28.096 42.6366 27.976L42.1566 30.568ZM50.2457 19.048C50.2457 22.744 52.9097 25.288 56.5817 25.288C60.2537 25.288 62.9177 22.744 62.9177 19.048C62.9177 15.352 60.2537 12.808 56.5817 12.808C52.9097 12.808 50.2457 15.352 50.2457 19.048ZM53.1737 19.048C53.1737 16.888 54.5657 15.424 56.5817 15.424C58.5977 15.424 59.9897 16.888 59.9897 19.048C59.9897 21.208 58.5977 22.672 56.5817 22.672C54.5657 22.672 53.1737 21.208 53.1737 19.048ZM63.7613 30.496C64.4093 30.664 65.1293 30.76 65.9453 30.76C67.8893 30.76 69.1373 29.848 70.0253 27.64L75.8333 13.144H72.8093L69.5933 21.784L66.5453 13.144H63.4493L68.2253 25.504L67.8893 26.392C67.3853 27.784 66.6653 28.048 65.5133 28.048H63.7613V30.496Z"
                  fill="#160042"
                />
                <circle
                  cx="46"
                  cy="8"
                  r="3"
                  fill="url(#paint0_linear_1247_10972)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1247_10972"
                    x1="44.5"
                    y1="6"
                    x2="48.6491"
                    y2="6.18668"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#292D32" />
                    <stop offset="1" />
                  </linearGradient>
                </defs>
              </svg>
            </a>

            <!-- MENU CONTENT 1 -->
            <div
              class="flex flex-col lg:flex lg:flex-row mt-14 lg:mt-0 space-y-8 lg:space-y-0 lg:space-x-1"
              x-bind:class="isOpen ? 'show' : 'hidden'"
            >
              <!-- DROPDOWN -->
              <div class="flex flex-col relative">
                <a
                  x-on:click.prevent="menuOne = !menuOne"
                  href=""
                  class="lg:hover:bg-[#F7F8FD] rounded-full lg:px-6 lg:py-4 lg:hover:text-black flex flex-row"
                  x-bind:class="menuOne ? 'text-black lg:border lg:border-black lg:bg-[#F7F8FD]' : 'text-black lg:border lg:border-white' "
                  >Component
                  <svg
                    x-bind:class="menuOne ? 'rotate-180' : 'rotate-0' "
                    class="fill-current transition"
                    style="width: 24px; height: 24px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                    />
                  </svg>
                </a>

                <!-- DROP DOWN MENU ONE -->
                <div
                  class="bg-white z-50 w-full flex flex-col lg:flex-row lg:flex-wrap lg:absolute lg:top-20 px-5 lg:px-75 lg:py-7 lg:shadow-[0_16px_64px_-15px_rgba(45,96,173,0.15)] rounded-2xl py-5 lg:w-[800px] xl:w-[950px]"
                  x-show="menuOne"
                  x-on:click.outside="menuOne = false"
                >
                  <!-- ITEM -->
                  <a
                    class="flex flex-col hover:bg-gray-50 px-5 py-5 xl:px-8 rounded-2xl lg:basis-[248px] grow"
                    href=""
                  >
                    <!-- ICON -->
                    <div class="relative">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M28 30.3335H4C3.45333 30.3335 3 29.8802 3 29.3335C3 28.7868 3.45333 28.3335 4 28.3335H28C28.5467 28.3335 29 28.7868 29 29.3335C29 29.8802 28.5467 30.3335 28 30.3335Z"
                          fill="#160042"
                        />
                        <path
                          d="M7.46667 11.1733H5.33333C4.6 11.1733 4 11.7733 4 12.5067V24C4 24.7333 4.6 25.3333 5.33333 25.3333H7.46667C8.2 25.3333 8.8 24.7333 8.8 24V12.5067C8.8 11.76 8.2 11.1733 7.46667 11.1733Z"
                          fill="#160042"
                        />
                        <path
                          d="M17.0682 6.91992H14.9349C14.2016 6.91992 13.6016 7.51992 13.6016 8.25326V23.9999C13.6016 24.7333 14.2016 25.3333 14.9349 25.3333H17.0682C17.8016 25.3333 18.4016 24.7333 18.4016 23.9999V8.25326C18.4016 7.51992 17.8016 6.91992 17.0682 6.91992Z"
                          fill="#160042"
                        />
                        <path
                          d="M26.6659 2.6665H24.5326C23.7992 2.6665 23.1992 3.2665 23.1992 3.99984V23.9998C23.1992 24.7332 23.7992 25.3332 24.5326 25.3332H26.6659C27.3992 25.3332 27.9992 24.7332 27.9992 23.9998V3.99984C27.9992 3.2665 27.3992 2.6665 26.6659 2.6665Z"
                          fill="#160042"
                        />
                      </svg>
                    </div>

                    <!-- TEXT -->
                    <h2
                      class="text-black text-lg font-inter font-medium mb-1 mt-5"
                    >
                      Analytics
                    </h2>
                    <p
                      class="text-gray-500 text-[14px] font-inter leading-[24px] max-w-[250px] lg:max-w-[400px]"
                    >
                      Get a better understanding of where your traffic is coming
                      from
                    </p>
                  </a>

                  <!-- ITEM -->
                  <a
                    class="flex flex-col hover:bg-gray-50 px-5 py-5 xl:px-8 rounded-2xl lg:basis-[248px] grow"
                    href=""
                  >
                    <!-- ICON -->
                    <div class="relative">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M27.9727 14.2667C27.6794 9.06667 23.826 4.73333 18.6794 3.85333C18.5994 2.82667 17.746 2 16.6927 2H15.3594C14.306 2 13.466 2.81333 13.3727 3.84C8.19938 4.69333 4.31938 9.04 4.02604 14.2667C3.07938 14.4267 2.35938 15.24 2.35938 16.2267V17.56C2.35938 18.6667 3.25271 19.56 4.35938 19.56H5.69271C6.79938 19.56 7.69271 18.6667 7.69271 17.56V16.2267C7.69271 15.24 6.97271 14.4267 6.02604 14.2667C6.30604 10.1067 9.35937 6.65333 13.4394 5.85333C13.666 6.70667 14.4394 7.33333 15.3594 7.33333H16.6927C17.6127 7.33333 18.3727 6.70667 18.6127 5.86667C22.666 6.68 25.6927 10.1333 25.9727 14.2667C25.026 14.4267 24.306 15.24 24.306 16.2267V17.56C24.306 18.6667 25.1994 19.56 26.306 19.56H27.6394C28.746 19.56 29.6394 18.6667 29.6394 17.56V16.2267C29.6394 15.24 28.9194 14.4133 27.9727 14.2667Z"
                          fill="#160042"
                        />
                        <path
                          d="M21.0284 22.0666L18.8417 24H13.1751L10.9884 22.0666C9.72173 21.0266 9.72173 20.2266 10.6817 19L14.5351 14.12C14.8017 13.7866 15.1084 13.56 15.4551 13.44C15.8151 13.32 16.2017 13.32 16.5751 13.44C16.9084 13.56 17.2151 13.7866 17.4951 14.12L21.3351 18.9866C22.3084 20.2133 22.2551 20.9733 21.0284 22.0666Z"
                          fill="#160042"
                        />
                        <path
                          d="M17.7615 29.3333H14.3082C13.0815 29.3333 12.1615 28.3333 12.4015 27.2666L12.8149 25.4133C12.8949 25.04 13.2282 24.7866 13.6015 24.7866H18.4682C18.8415 24.7866 19.1615 25.04 19.2549 25.4133L19.6682 27.2666C19.9215 28.4 19.0682 29.3333 17.7615 29.3333Z"
                          fill="#160042"
                        />
                      </svg>
                    </div>

                    <!-- TEXT -->
                    <h2
                      class="text-black text-lg font-inter font-medium mb-1 mt-5"
                    >
                      Engagement
                    </h2>
                    <p
                      class="text-gray-500 text-[14px] font-inter leading-[24px] max-w-[250px] lg:max-w-[400px]"
                    >
                      Speak directly to your customers in a more meaningful way
                    </p>
                  </a>

                  <!-- ITEM -->
                  <a
                    class="flex flex-col hover:bg-gray-50 px-5 py-5 xl:px-8 rounded-2xl lg:basis-[248px] grow"
                    href=""
                  >
                    <!-- ICON -->
                    <div class="relative">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.588 2.66663H10.4146C5.5613 2.66663 2.66797 5.55996 2.66797 10.4133V21.5733C2.66797 26.44 5.5613 29.3333 10.4146 29.3333H21.5746C26.428 29.3333 29.3213 26.44 29.3213 21.5866V10.4133C29.3346 5.55996 26.4413 2.66663 21.588 2.66663ZM7.0013 15.8533C7.0413 13.5066 7.97464 11.2933 9.62797 9.63996C11.3346 7.93329 13.6013 6.99996 16.0013 6.99996C18.4013 6.99996 20.668 7.93329 22.3613 9.63996C22.4013 9.67996 22.4413 9.73329 22.4813 9.78663V8.63996C22.4813 8.09329 22.9346 7.63996 23.4813 7.63996C24.028 7.63996 24.4813 8.09329 24.4813 8.63996V12.1733C24.4813 12.72 24.028 13.1733 23.4813 13.1733H19.948C19.4013 13.1733 18.948 12.72 18.948 12.1733C18.948 11.6266 19.4013 11.1733 19.948 11.1733H21.0546C21.0146 11.1333 20.988 11.0933 20.948 11.0533C19.628 9.73329 17.868 8.99996 16.0013 8.99996C14.1346 8.99996 12.3746 9.73329 11.0546 11.0533C9.7613 12.3466 9.0413 14.0666 9.01464 15.8933C9.0013 16.4266 8.54797 16.8666 8.0013 16.8666H7.98797C7.4413 16.8666 7.0013 16.4 7.0013 15.8533ZM22.3613 22.36C20.668 24.0533 18.4013 25 16.0013 25C13.6013 25 11.3346 24.0666 9.6413 22.36C9.6013 22.32 9.5613 22.2666 9.5213 22.2133V23.3466C9.5213 23.8933 9.06797 24.3466 8.5213 24.3466C7.97464 24.3466 7.5213 23.8933 7.5213 23.3466V19.8133C7.5213 19.2666 7.97464 18.8133 8.5213 18.8133H12.0546C12.6013 18.8133 13.0546 19.2666 13.0546 19.8133C13.0546 20.36 12.6013 20.8133 12.0546 20.8133H10.948C10.988 20.8533 11.0146 20.8933 11.0546 20.9333C12.3746 22.2533 14.1346 22.9866 16.0013 22.9866C17.868 22.9866 19.628 22.2533 20.948 20.9333C22.2546 19.6266 22.988 17.88 22.988 16.0133C22.988 15.4666 23.4413 15.0133 23.988 15.0133C24.5346 15.0133 24.988 15.4666 24.988 16.0133C24.988 18.4266 24.0546 20.68 22.3613 22.36Z"
                          fill="#160042"
                        />
                      </svg>

                      <span
                        class="absolute inset-0 bg-gradient-to-r from-[#8A74FF] to-[#0BC4FF] opacity-40 blur-xl w-[30px]"
                      ></span>
                    </div>

                    <!-- TEXT -->
                    <h2
                      class="text-black text-lg font-inter font-medium mb-1 mt-5"
                    >
                      Automations
                    </h2>
                    <p
                      class="text-gray-500 text-[14px] font-inter leading-[24px] max-w-[250px] lg:max-w-[400px]"
                    >
                      Build strategic funnels that will drive your customers to
                      convert
                    </p>
                  </a>

                  <!-- ITEM -->
                  <a
                    class="flex flex-col hover:bg-gray-50 px-5 py-5 xl:px-8 rounded-2xl lg:basis-[248px] grow"
                    href=""
                  >
                    <!-- ICON -->
                    <div class="relative">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24.721 5.56006L17.3877 2.81339C16.6277 2.53339 15.3877 2.53339 14.6277 2.81339L7.29437 5.56006C5.88104 6.09339 4.73438 7.74673 4.73438 9.2534V20.0534C4.73438 21.1334 5.44104 22.5601 6.30771 23.2001L13.641 28.6801C14.9344 29.6534 17.0544 29.6534 18.3477 28.6801L25.681 23.2001C26.5477 22.5467 27.2544 21.1334 27.2544 20.0534V9.2534C27.2677 7.74673 26.121 6.09339 24.721 5.56006ZM17.001 17.1601V20.6667C17.001 21.2134 16.5477 21.6667 16.001 21.6667C15.4544 21.6667 15.001 21.2134 15.001 20.6667V17.1601C13.6544 16.7334 12.6677 15.4801 12.6677 14.0001C12.6677 12.1601 14.161 10.6667 16.001 10.6667C17.841 10.6667 19.3344 12.1601 19.3344 14.0001C19.3344 15.4934 18.3477 16.7334 17.001 17.1601Z"
                          fill="#160042"
                        />
                      </svg>
                    </div>

                    <!-- TEXT -->
                    <h2
                      class="text-black text-lg font-inter font-medium mb-1 mt-5"
                    >
                      Security
                    </h2>
                    <p
                      class="text-gray-500 text-[14px] font-inter leading-[24px] max-w-[250px] lg:max-w-[400px]"
                    >
                      Your customers data will be safe and secure
                    </p>
                  </a>

                  <!-- ITEM -->
                  <a
                    class="flex flex-col hover:bg-gray-50 px-5 py-5 xl:px-8 rounded-2xl lg:basis-[248px] grow"
                    href=""
                  >
                    <!-- ICON -->
                    <div class="relative">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M28.6654 14.5333V5.46663C28.6654 3.46663 27.812 2.66663 25.692 2.66663H20.3054C18.1854 2.66663 17.332 3.46663 17.332 5.46663V14.5333C17.332 16.5333 18.1854 17.3333 20.3054 17.3333H25.692C27.812 17.3333 28.6654 16.5333 28.6654 14.5333Z"
                          fill="#160042"
                        />
                        <path
                          d="M14.6654 17.4666V26.5333C14.6654 28.5333 13.812 29.3333 11.692 29.3333H6.30536C4.18536 29.3333 3.33203 28.5333 3.33203 26.5333V17.4666C3.33203 15.4666 4.18536 14.6666 6.30536 14.6666H11.692C13.812 14.6666 14.6654 15.4666 14.6654 17.4666Z"
                          fill="#160042"
                        />
                        <path
                          d="M28.6654 26.5333V22.8C28.6654 20.8 27.812 20 25.692 20H20.3054C18.1854 20 17.332 20.8 17.332 22.8V26.5333C17.332 28.5333 18.1854 29.3333 20.3054 29.3333H25.692C27.812 29.3333 28.6654 28.5333 28.6654 26.5333Z"
                          fill="#160042"
                        />
                        <path
                          d="M14.6654 9.19996V5.46663C14.6654 3.46663 13.812 2.66663 11.692 2.66663H6.30536C4.18536 2.66663 3.33203 3.46663 3.33203 5.46663V9.19996C3.33203 11.2 4.18536 12 6.30536 12H11.692C13.812 12 14.6654 11.2 14.6654 9.19996Z"
                          fill="#160042"
                        />
                      </svg>
                    </div>

                    <!-- TEXT -->
                    <h2
                      class="text-black text-lg font-inter font-medium mb-1 mt-5"
                    >
                      Integrations
                    </h2>
                    <p
                      class="text-gray-500 text-[14px] font-inter leading-[24px] max-w-[250px] lg:max-w-[400px]"
                    >
                      Connect with third-party tools that you’re already using
                    </p>
                  </a>

                  <!-- ITEM -->
                  <a
                    class="flex flex-col hover:bg-gray-50 px-5 py-5 xl:px-8 rounded-2xl lg:basis-[248px] grow"
                    href=""
                  >
                    <!-- ICON -->
                    <div class="relative">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.0676 2.9467C20.5209 2.40003 19.5742 2.77336 19.5742 3.53336V8.1867C19.5742 10.1334 21.2276 11.7467 23.2409 11.7467C24.5076 11.76 26.2676 11.76 27.7742 11.76C28.5342 11.76 28.9342 10.8667 28.4009 10.3334C26.4809 8.40003 23.0409 4.92003 21.0676 2.9467Z"
                          fill="#160042"
                        />
                        <path
                          d="M27.332 13.5866H23.4787C20.3187 13.5866 17.7454 11.0133 17.7454 7.85329V3.99996C17.7454 3.26663 17.1454 2.66663 16.412 2.66663H10.7587C6.65203 2.66663 3.33203 5.33329 3.33203 10.0933V21.9066C3.33203 26.6666 6.65203 29.3333 10.7587 29.3333H21.2387C25.3454 29.3333 28.6654 26.6666 28.6654 21.9066V14.92C28.6654 14.1866 28.0654 13.5866 27.332 13.5866ZM15.332 23.6666H9.9987C9.45203 23.6666 8.9987 23.2133 8.9987 22.6666C8.9987 22.12 9.45203 21.6666 9.9987 21.6666H15.332C15.8787 21.6666 16.332 22.12 16.332 22.6666C16.332 23.2133 15.8787 23.6666 15.332 23.6666ZM17.9987 18.3333H9.9987C9.45203 18.3333 8.9987 17.88 8.9987 17.3333C8.9987 16.7866 9.45203 16.3333 9.9987 16.3333H17.9987C18.5454 16.3333 18.9987 16.7866 18.9987 17.3333C18.9987 17.88 18.5454 18.3333 17.9987 18.3333Z"
                          fill="#160042"
                        />
                      </svg>
                    </div>

                    <!-- TEXT -->
                    <h2
                      class="text-black text-lg font-inter font-medium mb-1 mt-5"
                    >
                      Reports
                    </h2>
                    <p
                      class="text-gray-500 text-[14px] font-inter leading-[24px] max-w-[250px] lg:max-w-[400px]"
                    >
                      Get detailed report that will help you make more informed
                      decisions
                    </p>
                  </a>
                </div>
              </div>

              <a
                href=""
                class="lg:hover:bg-[#F7F8FD] font-inter rounded-full lg:px-6 lg:py-4 lg:hover:text-black"
                >Templates</a
              >
              <a
                href=""
                class="lg:hover:bg-[#F7F8FD] font-inter rounded-full lg:px-6 lg:py-4 lg:hover:text-black"
                >Pricing</a
              >
              <a
                href=""
                class="lg:hover:bg-[#F7F8FD] font-inter rounded-full lg:px-6 lg:py-4 lg:hover:text-black pb-8 lg:pb-0"
                >FAQs</a
              >
            </div>

            <!-- MENU CONTENT 2 -->
            <div
              class="flex flex-col lg:flex lg:flex-row space-y-8 lg:space-y-0 lg:space-x-1"
              x-bind:class="isOpen ? 'show' : 'hidden'"
            >
              <a
                href=""
                class="lg:hover:bg-[#F7F8FD] font-inter rounded-full lg:px-6 lg:py-4 lg:hover:text-black"
                >Sign Up</a
              >
              <a
                class="px-9 py-4 font-inter text-center bg-black text-white rounded-[6px] border border-black hover:text-black hover:bg-white"
                href=""
                >Login</a
              >
            </div>

            <!-- BURGER MENU -->
            <a
              href=""
              class="absolute top-5 right-5 lg:hidden"
              x-on:click.prevent="isOpen = !isOpen"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 12H20.25"
                  stroke="#160042"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.75 6H20.25"
                  stroke="#160042"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.75 18H20.25"
                  stroke="#160042"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </nav>

        <!-- TEXT DIV -->
        <div
          class="max-w-[550px] lg:max-w-[900px] flex flex-col items-center justify-center px-6 lg:px-10 mx-auto text-center"
        >
          <h1
            class="text-black text-[55px] text-center font-black leading-[72px] xl:text-[68px] xl:leading-[94px] mx-auto"
          >
            The Website You Want Without The Dev Time.
          </h1>

          <p
            class="font-inter text-base font-light text-center px-5 lg:px-0 leading-[30px] mt-4 text-[#71717A] max-w-[600px] lg:max-w-[500px]"
          >
            Use premium tailwindcss components to ship your product faster to
            your customers. Build better and faster with Devjoy
          </p>

          <div
            class="flex flex-row flex-wrap justify-center lg:justify-start items-center mt-12"
          >
            <button
              class="px-6 py-4 font-inter text-base text-white bg-black w-full rounded-[6px] max-w-[400px] md:w-auto"
            >
              Try it out
            </button>

            <button
              class="bg-white border border-[#160042] text-black rounded-[6px] px-6 py-4 font-inter text-base flex flex-row w-full max-w-[400px] items-center justify-center mt-6 md:w-auto md:mt-0 md:ml-6"
            >
              <p>Explore Components</p>

              <svg
                class="ml-2"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 15L15 5"
                  stroke="#160042"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.875 5H15V13.125"
                  stroke="#160042"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="mt-12 max-w-[700px] w-[90%] mx-auto"
          viewBox="0 0 500 500"
        >
          <g id="freepik--Speakers--inject-117">
            <path
              d="M90.91,358.14a25.74,25.74,0,1,0,25.73,25.73A25.73,25.73,0,0,0,90.91,358.14Zm0,35a9.31,9.31,0,1,1,9.31-9.31A9.31,9.31,0,0,1,90.91,393.18Z"
              style="fill: #263238"
            ></path>
            <path
              d="M90.91,317.62a15.88,15.88,0,1,0,15.88,15.88A15.88,15.88,0,0,0,90.91,317.62Zm0,21.62a5.74,5.74,0,1,1,5.74-5.74A5.74,5.74,0,0,1,90.91,339.24Z"
              style="fill: #263238"
            ></path>
            <rect
              x="57.85"
              y="309.48"
              width="66.12"
              height="107.61"
              rx="3.94"
              style="fill: none; stroke: #263238; stroke-miterlimit: 10"
            ></rect>
            <path
              d="M404.87,358.14a25.74,25.74,0,1,0,25.74,25.73A25.73,25.73,0,0,0,404.87,358.14Zm0,35a9.31,9.31,0,1,1,9.31-9.31A9.3,9.3,0,0,1,404.87,393.18Z"
              style="fill: #263238"
            ></path>
            <path
              d="M404.87,317.62a15.88,15.88,0,1,0,15.88,15.88A15.88,15.88,0,0,0,404.87,317.62Zm0,21.62a5.74,5.74,0,1,1,5.75-5.74A5.74,5.74,0,0,1,404.87,339.24Z"
              style="fill: #263238"
            ></path>
            <rect
              x="371.82"
              y="309.48"
              width="66.12"
              height="107.61"
              rx="3.94"
              style="fill: none; stroke: #263238; stroke-miterlimit: 10"
            ></rect>
          </g>
          <g id="freepik--Graphics--inject-117">
            <line
              x1="151.84"
              y1="60.08"
              x2="151.84"
              y2="76.88"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></line>
            <line
              x1="160.24"
              y1="68.48"
              x2="143.43"
              y2="68.48"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></line>
            <line
              x1="115.08"
              y1="162.98"
              x2="115.08"
              y2="174.53"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></line>
            <line
              x1="120.86"
              y1="168.76"
              x2="109.31"
              y2="168.76"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></line>
            <line
              x1="369.2"
              y1="51.68"
              x2="369.2"
              y2="63.23"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></line>
            <line
              x1="374.97"
              y1="57.45"
              x2="363.42"
              y2="57.45"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></line>
            <line
              x1="299.89"
              y1="321.54"
              x2="299.89"
              y2="333.09"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></line>
            <line
              x1="305.67"
              y1="327.32"
              x2="294.12"
              y2="327.32"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></line>
            <line
              x1="356.07"
              y1="153.53"
              x2="356.07"
              y2="167.18"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></line>
            <line
              x1="362.9"
              y1="160.36"
              x2="349.25"
              y2="160.36"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></line>
            <line
              x1="390.2"
              y1="57.98"
              x2="390.2"
              y2="71.63"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></line>
            <line
              x1="397.02"
              y1="64.8"
              x2="383.37"
              y2="64.8"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></line>
            <path
              d="M89.88,121.5a4.73,4.73,0,1,1-4.72-4.72A4.72,4.72,0,0,1,89.88,121.5Z"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M335.6,301.59a4.73,4.73,0,1,1-4.73-4.73A4.73,4.73,0,0,1,335.6,301.59Z"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M412.25,144.61a4.73,4.73,0,1,1-4.73-4.73A4.72,4.72,0,0,1,412.25,144.61Z"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <circle
              cx="115.08"
              cy="39.6"
              r="3.68"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></circle>
            <circle
              cx="168.64"
              cy="301.06"
              r="3.68"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></circle>
            <circle
              cx="83.58"
              cy="210.76"
              r="3.68"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></circle>
          </g>
          <g id="freepik--Wave--inject-117">
            <path
              d="M65.1,242.84H74V232a5,5,0,0,1,5-5h0a5,5,0,0,1,5,5V262.9a5.34,5.34,0,0,0,5.33,5.34h0a5.34,5.34,0,0,0,5.34-5.34v-56a6.48,6.48,0,0,1,6.48-6.47h0a6.47,6.47,0,0,1,6.47,6.47v75a6.1,6.1,0,0,0,6.1,6.1h0a6.1,6.1,0,0,0,6.09-6.1v-91.5a8,8,0,0,1,8-8h0a8,8,0,0,1,8,8V281.5a6.48,6.48,0,0,0,6.48,6.48h0a6.48,6.48,0,0,0,6.48-6.48V208.91a7.62,7.62,0,0,1,7.62-7.62h0a7.62,7.62,0,0,1,7.62,7.62v53.55a5.71,5.71,0,0,0,5.71,5.71h0a5.71,5.71,0,0,0,5.72-5.71V233.35a5.45,5.45,0,0,1,5.45-5.45h0a5.45,5.45,0,0,1,5.45,5.45v9.49h10.14"
              style="fill: none; stroke: #263238; stroke-miterlimit: 10"
            ></path>
            <path
              d="M189.33,242.84h8.86V232a5,5,0,0,1,4.95-5h0a5,5,0,0,1,5,5V262.9a5.34,5.34,0,0,0,5.34,5.34h0a5.34,5.34,0,0,0,5.33-5.34v-56a6.48,6.48,0,0,1,6.48-6.47h0a6.47,6.47,0,0,1,6.47,6.47v75a6.1,6.1,0,0,0,6.1,6.1h0a6.1,6.1,0,0,0,6.09-6.1v-91.5a8,8,0,0,1,8-8h0a8,8,0,0,1,8,8V281.5a6.47,6.47,0,0,0,6.47,6.48h0a6.48,6.48,0,0,0,6.48-6.48V208.91a7.62,7.62,0,0,1,7.62-7.62h0a7.62,7.62,0,0,1,7.62,7.62v53.55a5.71,5.71,0,0,0,5.71,5.71h0a5.71,5.71,0,0,0,5.72-5.71V233.35A5.45,5.45,0,0,1,305,227.9h0a5.45,5.45,0,0,1,5.45,5.45v9.49h10.14"
              style="fill: none; stroke: #263238; stroke-miterlimit: 10"
            ></path>
            <path
              d="M313.56,242.84h8.86V232a5,5,0,0,1,4.95-5h0a5,5,0,0,1,4.95,5V262.9a5.34,5.34,0,0,0,5.34,5.34h0A5.34,5.34,0,0,0,343,262.9v-56a6.48,6.48,0,0,1,6.48-6.47h0a6.47,6.47,0,0,1,6.47,6.47v75A6.1,6.1,0,0,0,362,288h0a6.09,6.09,0,0,0,6.09-6.1v-91.5a8,8,0,0,1,8-8h0a8,8,0,0,1,8,8V281.5a6.48,6.48,0,0,0,6.47,6.48h0a6.48,6.48,0,0,0,6.48-6.48V208.91a7.62,7.62,0,0,1,7.62-7.62h0a7.62,7.62,0,0,1,7.62,7.62v53.55a5.71,5.71,0,0,0,5.71,5.71h0a5.71,5.71,0,0,0,5.72-5.71V233.35a5.45,5.45,0,0,1,5.45-5.45h0a5.45,5.45,0,0,1,5.45,5.45v9.49H444.8"
              style="fill: none; stroke: #263238; stroke-miterlimit: 10"
            ></path>
          </g>
          <g id="freepik--Floor--inject-117">
            <ellipse
              cx="243.72"
              cy="454.9"
              rx="97.13"
              ry="23.1"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></ellipse>
          </g>
          <g id="freepik--Character--inject-117">
            <path
              d="M209.24,63.05s1.57-4.9,3-8.75,3.85-7,5.08-7.88,7.35-3,19.25-.35,17.33,7,19.25,8.58,1.93,4.2,2.28,7.35a59,59,0,0,0,1.05,6.13s-1.23-2.63-16.28-4.73S222,59.9,217.64,62s-9.45,4.73-9.45,4.73Z"
              style="
                fill: #263238;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M213,88.33a50.46,50.46,0,0,1-7-1.13c-5.71-1.14-10.38-5.4-5.19-12.49s8.56-12.49,8.56-12.49,2.15-4,10.38-6.13,26.08,3.26,33.08,5.94S265.42,68,268,72.55s.35,5.94-3.85,10.34-6.82,5.74-13.82,7.66S213,88.33,213,88.33Z"
              style="
                fill: #263238;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M218.44,65s-6.75,6.23-6.75,9.34.52,13.49,1.3,17.38,6.49,15.83,8.82,17.65,10.38-.26,10.38-.26l3.9,5.19,21-13.49s-3.38-7.53-3.64-8.31a44.11,44.11,0,0,1-.26-5.45s3.12-1.55,4.16-4.15a19,19,0,0,0,1-6s-9.08-9.08-19.2-12.19S218.44,65,218.44,65Z"
              style="
                fill: #fff;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M220.26,74.63l.52,4.15s-2.6,2.85-2.6,4.93,3.63,2.08,3.63,2.08"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <polyline
              points="227.78 73.33 228.04 75.15 234.53 73.07"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></polyline>
            <polyline
              points="215.07 78.78 214.39 81.67 218.54 79.33"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></polyline>
            <ellipse
              cx="233.03"
              cy="74.85"
              rx="1.24"
              ry="1.07"
              style="fill: #263238"
            ></ellipse>
            <ellipse
              cx="218.02"
              cy="80.6"
              rx="1.24"
              ry="1.07"
              style="fill: #263238"
            ></ellipse>
            <path
              d="M224.29,71.1s1.41-5,6.12-5.95a6.06,6.06,0,0,1,5.43,1.58"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-width: 2px;
              "
            ></path>
            <path
              d="M218.51,73.55s-1.56-1.21-2.8-.7a4.41,4.41,0,0,0-2.62,3.5"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-width: 2px;
              "
            ></path>
            <path
              d="M246.87,71.8c3,2.45,2.45,6.13,4.72,5.25a20.75,20.75,0,0,0,4.23-2.43,58.28,58.28,0,0,0-11.59-7.81A6.5,6.5,0,0,0,246.87,71.8Z"
              style="
                fill: #263238;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <polygon
              points="232.19 109.14 240.56 102.95 236.09 114.33 232.19 109.14"
              style="
                fill: #263238;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></polygon>
            <path
              d="M229.81,416.05s-12.95,9.1-15.05,9.45-11.2,2.1-12.25,4.2-1.75,4.9,1.75,5.6,19.25,1.75,24.85,1.75,11.9.35,15-.35,8.05.7,9.8-6.3,1.4-12.6.35-16.45S229.81,416.05,229.81,416.05Z"
              style="
                fill: #fff;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M246.91,433.86a176.11,176.11,0,0,0-21.2-.93c-8.94.27-21-1.6-23.71-2.05-.65,1.85-.61,3.84,2.26,4.42,3.5.7,19.25,1.75,24.85,1.75s11.9.35,15-.35c1.67-.37,3.82-.16,5.74-.91Z"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M227.07,429.73h0a.52.52,0,0,1-.52-.53l.05-1.83a.51.51,0,0,1,.53-.51.54.54,0,0,1,.52.54l0,1.82A.51.51,0,0,1,227.07,429.73Z"
              style="
                fill: #fff;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M227.11,428.44h0a1.07,1.07,0,0,1-1-1.08l.16-7.05a1.08,1.08,0,0,1,1.07-1,1.05,1.05,0,0,1,1,1.07l-.16,7.05A1.05,1.05,0,0,1,227.11,428.44Z"
              style="
                fill: #fff;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M214.74,427.06a1.55,1.55,0,0,1-1.38-.85,2.42,2.42,0,0,1,0-2.36c.8-1.39,2.82-1.66,3.66-1.71a1.58,1.58,0,0,1,.18,3.15,5.05,5.05,0,0,0-.88.15,1.56,1.56,0,0,1-.87,1.46A1.63,1.63,0,0,1,214.74,427.06Z"
              style="
                fill: #fff;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M218.63,424.66a1.53,1.53,0,0,1-1.39-.85,2.42,2.42,0,0,1,0-2.36c.81-1.39,2.83-1.65,3.66-1.7a1.57,1.57,0,0,1,.19,3.14,5,5,0,0,0-.89.15,1.56,1.56,0,0,1-.87,1.46A1.59,1.59,0,0,1,218.63,424.66Z"
              style="
                fill: #fff;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M222.51,422.27a1.56,1.56,0,0,1-1.39-.85,2.41,2.41,0,0,1,0-2.36c.8-1.4,2.82-1.66,3.65-1.71a1.57,1.57,0,1,1,.19,3.14,4.27,4.27,0,0,0-.88.16,1.59,1.59,0,0,1-.87,1.45A1.65,1.65,0,0,1,222.51,422.27Z"
              style="
                fill: #fff;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M205.39,428.27s.17.34,3.59.34,4.44,1.54,4.78,2.73"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M237.74,427.08a5.81,5.81,0,0,1,2.66-1.37"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M233.06,432.71a29.41,29.41,0,0,1,3.25-4.28"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M215.54,244.89s-.35,22.05-.35,44.8,1.17,43.56,4,50.21,10.3,41.15,11,45.7-.35,11.55-.35,15a19.9,19.9,0,0,0,1.05,6.3s-1.75,2.8-1.75,4.55-2.1,5.25,0,6.3,3.5,2.1,14,3.85,17.15-8.4,18.9-11.2-8.2-69.5-9.6-81.75-.47-37.61,1.63-47.41,1.05-32.55-.35-37.1-15.05-7.35-22.4-6.65S215.54,244.89,215.54,244.89Z"
              style="
                fill: #263238;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M242.49,254.69s-7.58,53.71-7.58,62.46,3.85,18.55,4.9,22.75,5.05,51.65,6.1,54.8,1.4,11.55,1.4,11.55-2.8,1.05-3.15,3.15,1.4,3.5,1.4,5.25-1.75,4.55-2.45,7a8.2,8.2,0,0,0,.35,4.9s-7,9.45-10.15,12.6-11.2,9.1-15.75,12.25-13.65,7-14,11.9,3.15,9.1,11.9,9.45,24.5.7,33.25-.35,25.9-10.85,28.7-14.35S282,454.2,282,444.4s.35-19.25,0-20.3-1-2.8-.35-8.4a19,19,0,0,0-1.05-9.45A44.39,44.39,0,0,0,282,401c.35-2.1-2.45-7-2.45-7s1.95-36.25,1.95-44.3-10.15-25.55-10.15-25.55,1.4-7.35,1.4-8.75-2.1-4.9-2.1-4.9S281,281.64,282,277.79s3.85-16.45,4.55-20.65-1.75-12.95-4.9-18.2-16.8-11.55-21.7-7.35S242.49,254.69,242.49,254.69Z"
              style="
                fill: #263238;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M212.74,245.24s9.45,16.45,15.75,19.6,12.6-1.4,21.35-10.85,14-16.8,20.3-14.35,17.85,26.25,19.6,29.05,1.4-23.1-2.1-31.15-21.35-11.2-43-8.4S212.74,245.24,212.74,245.24Z"
              style="
                fill: #fff;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M211,234s-.7,6.3-.7,9.8,5.25,3.15,5.25,3.15,15.75-6.65,33.25-7.7,35,3.5,37.8,3.5,4.2-2.45,4.2-5.25-3.15-9.1-3.15-9.1-7.35-8.05-29.05-8.75-37.45-.35-42,3.5S211,234,211,234Z"
              style="
                fill: #666;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M255.94,96.84s-19.65,15-23.67,18.09-.67,5.8.23,6.47a17.6,17.6,0,0,1,2.45,3.13,129.49,129.49,0,0,1-14.73,11.38c-8.71,5.81-10.27,6.7-12.73,9.82s-11.6,13.4-11.6,13.4a55.05,55.05,0,0,0,1.34-9.82c0-4,1.84-8.89-.17-12.24s-6.92-7.59-11.38-7.59-8.49,1.56-11.17,5.8-4.74,12.91-6.3,22.29-8.43,20.8-5.53,25.26,7.59,10,13.84,10,11.83-.45,14.74-3.13,16.68-8.52,18.24-9.64a51.09,51.09,0,0,1,5.36-2.9s-.22,17.19-1.11,24.11-6.7,23.44-7.15,27,5.14,7.14,5.14,7.14,5.8-6,23-7.59a220.8,220.8,0,0,1,41.3.67c4.24.67,10.27,3.58,13,.9s4.46-2.68,4-8.71-1.33-12.5-1.33-15.18,1.78-24.11,1.78-24.78,5.81-26.12,5.81-26.12,13.17-4,22.1-5.8,12.72-14.06,9.82-21.21-14.29-14.51-19.2-17.86-21.21-4-23.44-3.12-9.15-.45-14.51-1.12-8.26-.67-9.15-.45l-.9.23s-1.34-7.37-3.34-8.71S255.94,96.84,255.94,96.84Z"
              style="
                fill: #92e3a9;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M306.93,145.29a26.88,26.88,0,0,0,3.76.48"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M283.68,111.17s-5.81,3.13-4.25,8.26,12.06,17,17,21a23.21,23.21,0,0,0,7,3.9"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M294.39,140s3.8,5.36,7.59,6.92a16.93,16.93,0,0,0,6.92,1.34"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M194.86,174.75a19.19,19.19,0,0,1-2.26,5.18"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M195.89,159.13s-.62,8.3-.62,12.54"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M195.5,178.81s-1.79,4.24-4.47,4.91"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <polyline
              points="213.13 158.72 214.86 177.21 210.01 162.52"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></polyline>
            <path
              d="M275.42,140.86s2.23,9.83,10,12.06,12.73,1.56,12.73,1.56"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M223.17,221.21c-1,3.81-.77,6.4,1.82,7.58"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M227.32,208.33a50.28,50.28,0,0,1-2,6.45l-.41,1.08"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M234.35,137.72a97,97,0,0,0-3.06,10.56c-1.75,8.4-2.1,28.35-2.1,39.9a95.93,95.93,0,0,1-1.26,17.23"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M236.19,112.23s-2.8,4.9-1.4,6.3,4.2,6.65,4.2,6.65-1.83,4.52-3.76,10"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M231.66,187.82a8.16,8.16,0,0,1-5.49-1.91c-3.89-3.32-5.22-10.63-4.33-23.7,0-.52.08-1.05.14-1.58.11-13.59,7.35-29.12,7.72-30,.22-.53,1.24-2.64,1.77-2.42s1-1,.79-.51c0,0-.18.43-.45,1.13,1.22-2.74,2.08-4.5,2.2-4.75a1.06,1.06,0,0,1,1.41-.48,1,1,0,0,1,.47,1.41c-.1.21-10.18,20.82-11.81,35.75a26,26,0,0,0,.2,3.5c.33,2.52,1.32,5.59,4.13,5.93,4.33.52,11.47-5.35,15.2-14.92,5.55-14.21,18.44-43.84,18.57-44.14a1,1,0,0,1,2,.71,264.86,264.86,0,0,0-7.32,35.89c-2.26,17.81-10,37-22.16,39.75A13.7,13.7,0,0,1,231.66,187.82Zm-8-18.61c0,8,1.24,12.87,3.85,15.11,1.62,1.38,3.8,1.74,6.68,1.09,9.52-2.15,18-17.76,20.54-38,1.12-8.8,2.76-17.14,4.21-23.59-4.25,9.93-10.11,23.75-13.39,32.15-3.77,9.66-11.57,17-17.41,16.24A5.94,5.94,0,0,1,223.68,169.21Z"
              style="
                fill: #fff;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <polygon
              points="234.79 118.53 233.74 126.58 236.89 125.18 234.79 118.53"
              style="
                fill: #fff;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></polygon>
            <path
              d="M263.81,113.85s-8.93,3.8-11.61,5.58"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M279,108.72s.67,2.45,4.46,5.8,11.16,2.68,14.07,1.12,3.73-6.52,3.73-6.52-4.4-4.87-6.64-5.09S279.88,102.47,279,108.72Z"
              style="
                fill: #666;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M302.82,106.22c-.43-.81-.89-1.59-1.36-2.35a3.43,3.43,0,0,0,.24-.33,2.86,2.86,0,0,0,.45-2.68c-.45-.89-2.46-4.68-3.13-4.68-.35,0-1.9.24-3.31.47l-.26-.25a12,12,0,0,1-1.7-1.91c.45-1.51,2.11-5.58,1.7-7s-4.46-2.9-6-2.68c-1,.15-3.26,2.93-4.7,4.87l-2-.36c-.71-2.07-2.11-5.91-2.93-6.07-1.11-.23-3.12,2.23-3.12,3.35,0,.36.07,1.27.17,2.33l-2.63,1.68s-3.57,8.71-5.13,10.5-8,5.8-12.06,6-8.48.67-7.59,3.35,4,2.9,10,3.57,11.16-2.23,13.39-3.57,6.92-.67,10.05-.67,7.37-1.11,8.26-1.11,3.35,2,6,2.68,7.59-.9,7.59-.9S305.05,110.46,302.82,106.22Z"
              style="
                fill: #fff;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M288.75,88.14l-.22,6.25s-1.56,5.13-.67,6.92,4.46.22,4.91-.67,3.8-12,3.57-13.39-3.35-3.13-5.13-3.13a4.06,4.06,0,0,0-2.9,1.34"
              style="
                fill: #fff;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M304.38,100.86s4,2.68,4.24,3.57-.45,6-.45,8.71-.89,5.36-2.45,3.8-1.56-6.7-1.79-7.59-1.34-1.34-1.34-1.34"
              style="
                fill: #fff;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M278.71,81s-5.58-1.11-6,1.12-.67,9.6,1.12,10,4.68.67,5.13,0,2-8.49,1.79-9.83S278.71,81,278.71,81Z"
              style="
                fill: #fff;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M294.33,96.84s5.36-4,6.92-4.46S306.84,96,306.84,96a57,57,0,0,1-1.79,8.71c-1.12,3.35-2.46,4.46-3.8,4.46a2.76,2.76,0,0,1-2.67-2.9c0-1.79.67-7.59.67-7.59"
              style="
                fill: #fff;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M282.73,91.26s-2,2.68-3.8,3.13a21.07,21.07,0,0,1-4.24.45"
              style="
                fill: #fff;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M285,92.6a3.16,3.16,0,0,0,2.68,2.68"
              style="
                fill: #fff;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M295.23,100s-.45,2.9,2.9,2.23"
              style="
                fill: #fff;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M191.7,125.91a96.85,96.85,0,0,0,6.48-11.84c2.68-6,4.91-9.82,7.81-13.17s10.5-9.3,11.16-9.37c2-.23,2,2.23,2,2.23s3.57-2,4.69-1.12.65,3.11-1.12,4.47c-2.9,2.23-6.69,8-6.92,8.7a6.41,6.41,0,0,1-.67,1.34s4.91,2.91,4.91,4.25a10.8,10.8,0,0,1-.89,3.34A8.57,8.57,0,0,1,218,120.1c-1.56,2.46-2.67,4.91-4,4.91s-2-.22-2-1.56,1.56-4.46,1.56-4.46a25.5,25.5,0,0,0-3.57,4c-1.34,2-2.68,4.47-4.91,5.36s-6.25,2-6.25,2L194.77,137a8.64,8.64,0,0,1-5.75-.86c-2.45-1.56-3.12-4.91-3.12-4.91Z"
              style="
                fill: #fff;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M190.14,126.13a4.59,4.59,0,0,0,2,3.79c2.23,1.79,6.7,2,6.7,2s.89-.67.89.45-3.35,6.92-4.69,9.15-8.7,2.68-11.38-.89-2.46-8.26-2-8.93,6.47-6,6.47-6S189.92,124.57,190.14,126.13Z"
              style="
                fill: #666;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M219.16,93.76s-5.58,3.79-7.37,6.25-2.9,3.8-2.9,3.8"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <line
              x1="214.03"
              y1="111.4"
              x2="219.16"
              y2="114.74"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></line>
            <path
              d="M215.14,107.15s-1.56-1.11-2.68-.44"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M282.06,433.84q-1.65,1.46-3.6,3.21c-7,6.3-17.5,6.3-17.5,6.3s-3.5-15.75-7.7-16.8-9.8,0-9.8,0-7,9.45-10.15,12.6-11.2,9.1-15.75,12.25-13.65,7-14,11.9.84,7.12,9.25,9.58c7.79,2.27,27.15.57,35.9-.48s25.9-10.85,28.7-14.35S282,454.2,282,444.4C282,440.68,282,437,282.06,433.84Z"
              style="
                fill: #fff;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M281.32,448.91a95.33,95.33,0,0,1-26.73,15.36c-12.9,4.92-29.49,5.23-41.48,3.08-6.15-1.11-8.57-2.94-9.47-4.46a3,3,0,0,0-.08.41c-.35,4.9.84,7.12,9.25,9.58,7.79,2.27,27.15.57,35.9-.48s25.9-10.85,28.7-14.35c2.34-2.92,3.94-3.66,4.41-9.49C281.65,448.68,281.49,448.78,281.32,448.91Z"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M223.15,448.25s-4.09,1.37-2.05,3.12c.94.8,10.25,6.28,12.64,4.74C237.41,453.75,223.15,448.25,223.15,448.25Z"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M234.93,453.21s19.35-13.52,21.81-17.51"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M238.31,453.56a1.61,1.61,0,0,1-1.12-.46c-6-6-11-5.43-11.25-5.4a1.57,1.57,0,0,1-.48-3.11c.27,0,6.72-1,14,6.28a1.57,1.57,0,0,1,0,2.23A1.6,1.6,0,0,1,238.31,453.56Z"
              style="
                fill: #fff;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M243.53,450.18a1.56,1.56,0,0,1-1.16-.51c-5.84-6.4-12.72-5.65-12.78-5.65a1.57,1.57,0,1,1-.38-3.12c.35,0,8.56-.94,15.48,6.64a1.57,1.57,0,0,1-1.16,2.64Z"
              style="
                fill: #fff;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M248.14,446.8a1.55,1.55,0,0,1-1.23-.6c-4.42-5.54-11.68-6-12.93-5.62a1.58,1.58,0,0,1-1.43-2.81c1.95-1.08,11.29-.47,16.82,6.47a1.57,1.57,0,0,1-1.23,2.56ZM234,440.59Zm.12-.06Z"
              style="
                fill: #fff;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M251.83,443.11a1.58,1.58,0,0,1-1.17-.51,19.15,19.15,0,0,0-13-6.25,1.58,1.58,0,0,1,0-3.15,22.22,22.22,0,0,1,15.3,7.28,1.57,1.57,0,0,1-1.16,2.63Z"
              style="
                fill: #fff;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M256.13,454.88h0a1.06,1.06,0,0,1-1-1.08l.06-2.77a1,1,0,0,1,1.05-1h0a1.05,1.05,0,0,1,1,1.07l-.06,2.78A1.05,1.05,0,0,1,256.13,454.88Z"
              style="
                fill: #fff;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M256.19,452.62h0a1.58,1.58,0,0,1-1.54-1.61l.24-10.74a1.58,1.58,0,1,1,3.15.07l-.24,10.74A1.58,1.58,0,0,1,256.19,452.62Z"
              style="
                fill: #fff;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M248,462.64a6.56,6.56,0,0,1,.91,2.69"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M212.05,455.6s-2.56,1.7,1.88,3.58,16.06.69,23.74-.85a9.91,9.91,0,0,1,6.7.76"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M276.78,442.29a15.27,15.27,0,0,1,1.37-2.24"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M274.39,453a26.83,26.83,0,0,1,1.36-8.28"
              style="
                fill: none;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
          </g>
          <g id="freepik--Microphone--inject-117">
            <path
              d="M278.41,163.42a10.5,10.5,0,1,0-12,8.73A10.52,10.52,0,0,0,278.41,163.42Z"
              style="
                fill: #666;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <path
              d="M321,174.26,274.41,170l2.27-14.34,45.6,10.3a2.44,2.44,0,0,1,1.88,2.77l-.55,3.5A2.45,2.45,0,0,1,321,174.26Z"
              style="
                fill: #263238;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
            <polygon
              points="279.13 156.19 276.68 155.64 274.41 169.98 276.92 170.21 279.13 156.19"
              style="
                fill: #fff;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></polygon>
            <path
              d="M265,171.81a10.89,10.89,0,0,0,1.42.34l.29,0L270,151.46c-.1,0-.19,0-.29-.06a11.94,11.94,0,0,0-1.45-.11Z"
              style="
                fill: #fff;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
          </g>
        </svg>
      </div>
      <!-- NAVBAR -->
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
