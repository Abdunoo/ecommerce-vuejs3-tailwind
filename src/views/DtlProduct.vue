<template>
<div class="relative flex-grow-0 w-screen h-screen bg-gray-100">
   <div class="absolute inset-0 w-full h-full px-4 space-y-4 overflow-auto">
      <div class="flex items-center justify-between w-full pt-4">
         <div class="p-2 text-black bg-white rounded-full">
            <span @click="$router.back()" class="">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
               </svg>
            </span>
         </div>
         <span class="text-lg font-medium text-black">Sneaker Shop</span>
         <span @click="this.$router.push('/cart')" class="p-2 bg-white rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
               <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
         </span>
      </div>
      <div class="flex flex-col w-3/4 space-y-1">
         <span class="text-2xl font-bold">{{ product.title }}</span>
         <span class="text-gray-600">{{ product.category }}</span>
         <span class="text-gray-600">Stock {{ product.qty }}</span>
         <span class="text-2xl font-semibold">Rp {{ product.price }}</span>
      </div>
      <div class="flex flex-col w-full space-y-4 lg:flex-row">
         <div class="flex justify-center border-y-4 rounded-br-3xl rounded-tl-3xl lg:w-1/2">
            <img :src="product.image_url" class="object-cover sm:w-3/4" alt="" />
         </div>
         <div class="grid w-full h-auto grid-cols-5 gap-2 overflow-auto lg:w-1/2 lg:h-1/6">
            <div class="bg-white rounded-lg">
               <img :src="product.image_url" class="object-cover" alt="" />
            </div>
            <div class="bg-white rounded-lg">
               <img :src="product.image_url" class="object-cover" alt="" />
            </div>
            <div class="bg-white rounded-lg">
               <img :src="product.image_url" class="object-cover" alt="" />
            </div>
            <div class="bg-white rounded-lg">
               <img :src="product.image_url" class="object-cover" alt="" />
            </div>
            <div class="bg-white rounded-lg">
               <img :src="product.image_url" class="object-cover" alt="" />
            </div>
         </div>
      </div>
      <div class="">
         <p class="text-sm">
            The Max Air 270 unit delivers unrivaled, all-day comfort. The sleek,
            running-inspired design roots you to everything Nike........
         </p>
         <p class="text-sm font-medium text-right text-blue-400">Read More</p>
      </div>
      <div style="height: 70px"></div>
      <div class="fixed flex justify-around w-full px-4 space-x-4 bottom-8">
         <div class="flex items-center justify-between px-4 py-2 space-x-4 text-white bg-blue-400 rounded-xl">
            <span @click="plus()">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
            </span>
            <span> {{ qty }} </span>
            <span @click="minus()">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" /></svg>
            </span>
         </div>
         <div @click="addToCart()" class="flex items-center p-3 px-10 space-x-5 text-white bg-blue-400 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
               <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span class="text-sm font-semibold">Add To Cart</span>
         </div>
      </div>
   </div>
</div>
</template>

<script>
import { makeRequest } from "@/helpers/api";

export default {
   name: "DetailProduct",
   data() {
      return {
         product: {},
         qty: 1,
      };
   },
   methods: {
      async getDetailProduct(id) {
         try {
            let response = await makeRequest({
               url: `product/${id}`,
               method: 'GET'
            })
            if (response.code == 200) {
               this.product = response.data;
            }            
         } catch (error) {
            this.$toast.error('Error = '+ error);
         }
      },
      async addToCart() {
         const params = {
            product_id: this.product.id,
            qty: this.qty
         };
         try {
            let response = await makeRequest({
               url: `cart`,
               method: 'POST',
               data: params
            })
            if (response.code == 200) {
               this.$toast.success('Produk berhasil ditambahkan ke keranjang');
            }            
         } catch (error) {
            this.$toast.error('Error = '+ error);
         }
      },
      plus() {
         this.qty++
      },
      minus() {
         this.qty--
      }
   },
   mounted() {
      const productId = this.$route.params.id;
      this.product.id = productId;
      this.getDetailProduct(productId);
   },
};
</script>
