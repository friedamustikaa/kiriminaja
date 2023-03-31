<template>
  <!-- Sliders -->
  <div class="py-3 xl:py-14 relative">
    <div class="container xl:w-10/12 2xl:w-9/12 mx-auto px-3 relative">
      <section>
        <span class="text-sm inline-block italic text-violet-600 bg-violet-200 p-1.5 rounded-full ">Agregator Logistik
          Multi
          Ekspedisi, Bisa Kirim Paket COD</span>
        <div>
          <Sliders />
        </div>
      </section>

      <section class="my-16">
        <form action="https://kiriminaja.com/cekaja"
          class="p-5 xl:p-10 rounded-3xl bg-violet-200 dark:bg-neutral-material-800 relative">
          <div class="grid xl:w-11/12 xl:grid-cols-3">
            <div class="mb-3 xl:mb-0">
              <label class="block text-xs" for="from">Asal</label>
              <div class="pt-2">
                <select type="text" name="from" id="from" required
                  class="set-origin bg-transparent placeholder-neutral-500 outline-0 w-full"></select>
              </div>
            </div>
            <div
              class="mb-3 xl:mb-0 xl:pl-3 xl:border-l xl:border-dashed xl:border-l-violet-700 xl:dark:border-l-neutral-material-700">
              <label class="block text-xs" for="thru">Tujuan</label>
              <div class="pt-2">
                <select type="text" name="thru" id="thru" required
                  class="set-destination bg-transparent placeholder-neutral-500 outline-0 w-full"></select>
              </div>
            </div>
            <div
              class="mb-3 xl:mb-0 xl:pl-3 xl:border-l xl:border-dashed xl:border-l-violet-700 xl:dark:border-l-neutral-material-700">
              <label for="weight" class="block text-xs">Berat</label>
              <input type="number" name="weight" id="weight" value="1000" required
                class="pt-2 bg-transparent placeholder-neutral-500 outline-0 w-full" placeholder="Berat..." />
            </div>
          </div>
          <button aria-label="shipping-price"
            class="bg-violet-800 xl:aspect-square dark:bg-violet-700 w-full xl:w-auto p-4 text-white rounded-full xl:absolute xl:right-3 xl:top-1/2 xl:-translate-y-1/2 xl:right-5">
            <svg xmlns="http://www.w3.org/2000/svg" class="inline-block" width="24" height="24" viewBox="0 0 24 24"
              stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="10" cy="10" r="7"></circle>
              <line x1="21" y1="21" x2="15" y2="15"></line>
            </svg>
            <span class="xl:hidden ml-3">Cek Ongkir</span>
          </button>
        </form>
      </section>
    </div>


    <section>
      <div class="  border-solid border-1 border-neutral-500">
        <hr>
        <div class="container xl:w-10/12 2xl:w-9/12 mx-auto px-3 py-10 relative"><div class="grid xl:grid-cols-6">
            <img src="https://kiriminaja-static-file.imgix.net/home-v3/logistics/jne.png" alt="">
            <img src="https://kiriminaja-static-file.imgix.net/home-v3/logistics/jnt.png" alt="">
            <img src="https://kiriminaja-static-file.imgix.net/home-v3/logistics/sicepat.png" alt="">
            <img src="https://kiriminaja-static-file.imgix.net/home-v3/logistics/sap.png" alt="">
            <img src="https://kiriminaja-static-file.imgix.net/home-v3/logistics/ncs.png" alt="">
            <img src="https://kiriminaja-static-file.imgix.net/home-v3/logistics/sentral.png" alt="">
          </div>
          <!-- <div class="owl-trusted owl-carousel owl-theme mt-4 dark:grayscale dark:contrast-50">
            <div class="item">
              <div class="my-3 p-4 mb-lg-0 col-lg text-center">
                <img src="https://kiriminaja-static-file.imgix.net/home-v3/logistics/jne.png" height="50px"
                  alt="Kurir jne" class="img-fluid">
              </div>
            </div>
            <div class="item">
              <div class="my-3 p-4 mb-lg-0 col-lg text-center">
                <img src="https://kiriminaja-static-file.imgix.net/home-v3/logistics/jnt.png" height="50px"
                  alt="Kurir jnt" class="img-fluid">
              </div>
            </div>
            <div class="item">
              <div class="my-3 p-4 mb-lg-0 col-lg text-center">
                <img src="https://kiriminaja-static-file.imgix.net/home-v3/logistics/sicepat.png" height="50px"
                  alt="Kurir sicepat" class="img-fluid">
              </div>
            </div>
            <div class="item">
              <div class="my-3 p-4 mb-lg-0 col-lg text-center">
                <img src="https://kiriminaja-static-file.imgix.net/home-v3/logistics/sap.png" height="50px"
                  alt="Kurir sap" class="img-fluid">
              </div>
            </div>
            <div class="item">
              <div class="my-3 p-4 mb-lg-0 col-lg text-center">
                <img src="https://kiriminaja-static-file.imgix.net/home-v3/logistics/ncs.png" height="50px"
                  alt="Kurir ncs" class="img-fluid">
              </div>
            </div>
            <div class="item">
              <div class="my-3 p-4 mb-lg-0 col-lg text-center">
                <img src="https://kiriminaja-static-file.imgix.net/home-v3/logistics/sentral.png" height="50px"
                  alt="Kurir sentral" class="img-fluid">
              </div>
            </div>
            <div class="item">
              <div class="my-3 p-4 mb-lg-0 col-lg text-center">
                <img src="https://kiriminaja-static-file.imgix.net/home-v3/logistics/anteraja.png" height="50px"
                  alt="Kurir anteraja" class="img-fluid">
              </div>
            </div>
            <div class="item">
              <div class="my-3 p-4 mb-lg-0 col-lg text-center">
                <img src="https://kiriminaja-static-file.imgix.net/home-v3/logistics/ninja.png" height="50px"
                  alt="Kurir ninja" class="img-fluid">
              </div>
            </div>
            <div class="item">
              <div class="my-3 p-4 mb-lg-0 col-lg text-center">
                <img src="https://kiriminaja-static-file.imgix.net/home-v3/logistics/idx.png" height="50px"
                  alt="Kurir idx" class="img-fluid">
              </div>
            </div>
            <div class="item">
              <div class="my-3 p-4 mb-lg-0 col-lg text-center">
                <img src="https://kiriminaja-static-file.imgix.net/home-v3/logistics/gosend.png" height="50px"
                  alt="Kurir GoSend" class="img-fluid">
              </div>
            </div>
            <div class="item">
              <div class="my-3 p-4 mb-lg-0 col-lg text-center">
                <img src="https://kiriminaja-static-file.imgix.net/home-v3/logistics/grab_express.png" height="50px"
                  alt="Kurir Grab Express" class="img-fluid">
              </div>
            </div>
            <div class="item">
              <div class="my-3 p-4 mb-lg-0 col-lg text-center">
                <img src="https://kiriminaja-static-file.imgix.net/home-v3/logistics/borzo.png" height="50px"
                  alt="Kurir Borzo Delivery" class="img-fluid">
              </div>
            </div>
          </div> -->
        </div>
        <hr>
      </div>
    </section>


    <section class="my-24">
      <div class="container xl:w-10/12 2xl:w-9/12 mx-auto px-3 relative">
        <div class="grid xl:grid-cols-6 mb-10">
          <div class="xl:col-span-3">
            <p class="text-violet-400 font-semibold mb-2">Empowering UMKM</p>
            <p class="font-display text-neutral-950 font-bold text-4xl mb-5">Jangkauan untuk semua <br> kebutuhan
              pengiriman
              paketmu</p>
            <p class=" text-lg dark:text-neutral-material-300  xl:w-9/12 text-gray-600">Persembahan dari kami untuk
              mempermudah kebutuhan bisnismu</p>
          </div>
        </div>
        <div>
          <div class="grid xl:grid-cols-3 gap-5">
            <div class="py-6 px-7 group dark:bg-neutral-material-800 rounded-3xl bg-violet-200 relative overflow-hidden">
              <div class="mb-3">
                <div
                  class="inline-block p-3 bg-gradient-to-b from-violet-200 dark:from-neutral-material-600 dark:to-neutral-material-700 to-violet-300 text-white rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" class="armchair" width="24" height="24" viewBox="0 0 24 24"
                    stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M5 11a2 2 0 0 1 2 2v2h10v-2a2 2 0 1 1 4 0v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z">
                    </path>
                    <path d="M5 11v-5a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v5"></path>
                    <path d="M6 19v2"></path>
                    <path d="M18 19v2"></path>
                  </svg>
                </div>
              </div>
              <h4 class="font-bold text-lg font-display mb-3">Ongkir Up to Date</h4>
              <p class="text-sm">Ongkos kirim langsung dari ekspedisi, tanpa perubahan</p>
            </div>
            <div class="py-6 px-7 group dark:bg-neutral-material-800 rounded-3xl bg-violet-200 relative overflow-hidden">
              <div class="mb-3">
                <div
                  class="inline-block p-3 bg-gradient-to-b from-violet-200 dark:from-neutral-material-600 dark:to-neutral-material-700 to-violet-300 text-white rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" class="truck-loading" width="24" height="24" viewBox="0 0 24 24"
                    stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M2 3h1a2 2 0 0 1 2 2v10a2 2 0 0 0 2 2h15"></path>
                    <rect x="9" y="6" width="10" height="8" rx="3"></rect>
                    <circle cx="9" cy="19" r="2"></circle>
                    <circle cx="18" cy="19" r="2"></circle>
                  </svg>
                </div>
              </div>
              <h4 class="font-bold text-lg font-display mb-3">Pickup & Dropoff</h4>
              <p class="text-sm">Tentukan dan pilih opsi pengiriman dropoff dan pickup</p>
            </div>
            <div class="py-6 px-7 group dark:bg-neutral-material-800 rounded-3xl bg-violet-200 relative overflow-hidden">
              <div class="mb-3">
                <div
                  class="inline-block p-3 bg-gradient-to-b from-violet-200 dark:from-neutral-material-600 dark:to-neutral-material-700 to-violet-300 text-white rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" class="focus-centered" width="24" height="24"
                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="12" cy="12" r="1"></circle>
                    <path d="M4 8v-2a2 2 0 0 1 2 -2h2"></path>
                    <path d="M4 16v2a2 2 0 0 0 2 2h2"></path>
                    <path d="M16 4h2a2 2 0 0 1 2 2v2"></path>
                    <path d="M16 20h2a2 2 0 0 0 2 -2v-2"></path>
                  </svg>
                </div>
              </div>
              <h4 class="font-bold text-lg font-display mb-3">AWB Terpusat</h4>
              <p class="text-sm">Gak perlu pusing menunggu dapet AWB, kami yang antrikan</p>
            </div>
            <div class="py-6 px-7 group dark:bg-neutral-material-800 rounded-3xl bg-violet-200 relative overflow-hidden">
              <div class="mb-3">
                <div
                  class="inline-block p-3 bg-gradient-to-b from-violet-200 dark:from-neutral-material-600 dark:to-neutral-material-700 to-violet-300 text-white rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" class="git-branch" width="24" height="24" viewBox="0 0 24 24"
                    stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="7" cy="18" r="2"></circle>
                    <circle cx="7" cy="6" r="2"></circle>
                    <circle cx="17" cy="6" r="2"></circle>
                    <line x1="7" y1="8" x2="7" y2="16"></line>
                    <path d="M9 18h6a2 2 0 0 0 2 -2v-5"></path>
                    <polyline points="14 14 17 11 20 14"></polyline>
                  </svg>
                </div>
              </div>
              <h4 class="font-bold text-lg font-display mb-3">Tracking Satu Pintu</h4>
              <p class="text-sm">Hasil ekspedisi kami buat dengan satu konsep penyajian</p>
            </div>
            <div class="py-6 px-7 group dark:bg-neutral-material-800 rounded-3xl bg-violet-200 relative overflow-hidden">
              <div class="mb-3">
                <div
                  class="inline-block p-3 bg-gradient-to-b from-violet-200 dark:from-neutral-material-600 dark:to-neutral-material-700 to-violet-300 text-white rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" class="world-upload" width="24" height="24" viewBox="0 0 24 24"
                    stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M21 12a9 9 0 1 0 -9 9"></path>
                    <path d="M3.6 9h16.8"></path>
                    <path d="M3.6 15h8.4"></path>
                    <path d="M11.578 3a17 17 0 0 0 0 18"></path>
                    <path d="M12.5 3c1.719 2.755 2.5 5.876 2.5 9"></path>
                    <path d="M18 21v-7m3 3l-3 -3l-3 3"></path>
                  </svg>
                </div>
              </div>
              <h4 class="font-bold text-lg font-display mb-3">Jangkauan Terluas</h4>
              <p class="text-sm">Selalu terbuka untuk seluruh area origin dan destinasi</p>
            </div>
            <div class="py-6 px-7 group dark:bg-neutral-material-800 rounded-3xl bg-violet-200 relative overflow-hidden">
              <div class="mb-3">
                <div
                  class="inline-block p-3 bg-gradient-to-b from-violet-200 dark:from-neutral-material-600 dark:to-neutral-material-700 to-violet-300 text-white rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" class="headset" width="24" height="24" viewBox="0 0 24 24"
                    stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <rect x="4" y="13" rx="2" width="4" height="6"></rect>
                    <rect x="16" y="13" rx="2" width="4" height="6"></rect>
                    <path d="M4 15v-3a8 8 0 0 1 16 0v3"></path>
                    <path d="M18 19a6 3 0 0 1 -6 3"></path>
                  </svg>
                </div>
              </div>
              <h4 class="font-bold text-lg font-display mb-3">Selalu Ada</h4>
              <p class="text-sm">Kami selalu siap sedia ada setiap hari tanpa libur</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="my-24">
      <div class="container xl:w-10/12 2xl:w-9/12 mx-auto px-3 relative">
        <div class="grid xl:grid-cols-6">
          <div class="xl:col-span-3">
            <p class="text-violet-400 font-semibold mb-2">Makin Simpel</p>
            <p class="font-display text-neutral-950 font-bold text-4xl mb-5">Solusi Pengiriman untuk Mempercepat Bisnis
              Anda</p>
            <p class=" text-lg dark:text-neutral-material-300  xl:w-9/12 text-gray-600">Ekspedisi terbaik yang kami
              pilihkan hanya untuk kamu lho</p>
          </div>
        </div>
        <div>
          <div class="grid xl:grid-cols-2 gap-12 xl:items-center">
            <div>
              <div class="grid xl:grid-cols-2 gap-4 xl:gap-x-7 xl:gap-y-10">
                <div class="group relative overflow-hidden">
                  <div class="mb-3 gap-3 flex items-center">
                    <div class="inline-block bg-violet-200 dark:bg-neutral-material-700 p-1 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="18"
                        height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M5 12l5 5l10 -10"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-semibold text-violet-700 dark:text-white">Kurir fleksibel</h4>
                    </div>
                  </div>
                  <div>
                    <p class="text-neutral-600 dark:text-neutral-300">Kamu bisa pilih preferensi terbaikmu. Mau same day,
                      reguler, kargo, atau instan? Bisaa</p>
                  </div>
                </div>
                <div class="group relative overflow-hidden">
                  <div class="mb-3 gap-3 flex items-center">
                    <div class="inline-block bg-violet-200 dark:bg-neutral-material-700 p-1 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="18"
                        height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M5 12l5 5l10 -10"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-semibold text-violet-700 dark:text-white">Pencairan COD Tercepat</h4>
                    </div>
                  </div>
                  <div>
                    <p class="text-neutral-600 dark:text-neutral-300">Kapan saldo COD cair? Yap, setelah paketmu terkirim,
                      1x24 jam saldomu langsung cair lho*</p>
                  </div>
                </div>
                <div class="group relative overflow-hidden">
                  <div class="mb-3 gap-3 flex items-center">
                    <div class="inline-block bg-violet-200 dark:bg-neutral-material-700 p-1 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="18"
                        height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M5 12l5 5l10 -10"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-semibold text-violet-700 dark:text-white">Dropoff atau Pickup</h4>
                    </div>
                  </div>
                  <div>
                    <p class="text-neutral-600 dark:text-neutral-300">Mager buat nganter ke kurir? Kurir mitra kami bisa
                      lho jemput paket ke rumah kalo kamu mager</p>
                  </div>
                </div>
                <div class="group relative overflow-hidden">
                  <div class="mb-3 gap-3 flex items-center">
                    <div class="inline-block bg-violet-200 dark:bg-neutral-material-700 p-1 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="18"
                        height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M5 12l5 5l10 -10"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-semibold text-violet-700 dark:text-white">Tanpa minimal paket</h4>
                    </div>
                  </div>
                  <div>
                    <p class="text-neutral-600 dark:text-neutral-300">Paket kamu masih sedikit? Takut ngga dijemput? Ngga
                      dong, kurir akan tetep jemput tanpa minimum order</p>
                  </div>
                </div>
                <div class="group relative overflow-hidden">
                  <div class="mb-3 gap-3 flex items-center">
                    <div class="inline-block bg-violet-200 dark:bg-neutral-material-700 p-1 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="18"
                        height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M5 12l5 5l10 -10"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-semibold text-violet-700 dark:text-white">Meminimalisir rasio retur</h4>
                    </div>
                  </div>
                  <div>
                    <p class="text-neutral-600 dark:text-neutral-300">Kami punya fitur paket bermasalah dan undelivery.
                      Analisa dini untuk mengurangi paket returmu</p>
                  </div>
                </div>
                <div class="group relative overflow-hidden">
                  <div class="mb-3 gap-3 flex items-center">
                    <div class="inline-block bg-violet-200 dark:bg-neutral-material-700 p-1 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="18"
                        height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M5 12l5 5l10 -10"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-semibold text-violet-700 dark:text-white">Aplikasi user friendly</h4>
                    </div>
                  </div>
                  <div>
                    <p class="text-neutral-600 dark:text-neutral-300">Mau tambah paket dari mana nih? Upload? Parse?
                      Tracking? Print? Bisa dong cukup satu pintu</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="xl:px-8 xl:py-12">
              <img src="https://kiriminaja-static-file.imgix.net/home-v3/home-ill-2.webp" class="w-full" alt="Easy Use">
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container xl:w-10/12 2xl:w-9/12 mx-auto px-3 relative">
        <PromoApps />
      </div>
    </section>
  </div>
</template>