<template>
<div class="w-screen h-screen bg-gray-100">
   <div class="w-full h-full overflow-hidden bg-gray-100">
      <div class="w-full h-full px-4 space-y-4">
         <div class="flex items-center justify-between w-full pt-4">
            <div class="p-2 text-black bg-white rounded-full" @click="$router.back()">
               <span class="">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
               </span>
            </div>
            <span class="text-lg font-medium text-black ">Admin Dashboard</span>
            <span></span>
         </div>
         <div class="grid w-full grid-cols-4 gap-2 md:gap-4 ">
            <div @click="getProduct('')" class="flex items-center justify-around p-2 space-x-2 bg-white rounded-lg">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="hidden w-10 h-10 md:flex">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
               </svg>
               <p class="text-sm "> All</p>
            </div>
            <div @click="getProduct('Outdoor')" class="flex items-center justify-around p-2 space-x-2 bg-white rounded-lg">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="hidden w-10 h-10 md:flex">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
               </svg>
               <p class="text-sm "> Outdoor</p>
            </div>
            <div @click="getProduct('Tennis')" class="flex items-center justify-around p-2 space-x-2 bg-white rounded-lg">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="hidden w-10 h-10 md:flex">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
               </svg>
               <p class="text-sm "> Tennis</p>
            </div>
            <div @click="getProduct('Running')" class="flex items-center justify-around p-2 space-x-2 bg-white rounded-lg">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="hidden w-10 h-10 md:flex">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
               </svg>
               <p class="text-sm "> Running</p>
            </div>
         </div>
         <div class="flex items-center justify-between p-2 text-sm bg-white rounded-lg">
            <span>Data All Product</span>
            <button class="p-2 text-white bg-blue-500 rounded-lg" @click="selectedId = 0">Tambah Product</button>
         </div>
         <div class="flex w-full h-full">
            <div class="w-full h-full" :class="{'hidden md:flex flex-col mr-4':selectedId != null}">
               <div class="grid w-full grid-cols-4 px-4 py-2 font-medium bg-white rounded-t-lg">
                  <span>Name</span>
                  <span>Quantity</span>
                  <span>Category</span>
                  <span>Action</span>
               </div>
               <div class="relative flex flex-row flex-grow-0 w-full h-full text-gray-600 bg-white">
                  <div class="absolute inset-0 px-4 overflow-y-auto">
                     <div v-for="(product, index) in lstProducts" class="grid grid-cols-4 gap-8 py-4 bg-white border-b">
                        <span>{{product.title}}</span>
                        <span>{{product.qty}}</span>
                        <span>{{product.category}}</span>
                        <span @click="showMenu(product.id)" class="">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                           </svg>
                           <div v-if="showMenuId === product.id" class="absolute flex flex-col items-start justify-center w-20 h-16 py-4 bg-gray-200 rounded-lg cursor-pointer">
                              <p class="w-full px-2 hover:bg-white" @click="selectedId = product.id">Edit</p>
                              <p class="w-full px-2 hover:bg-white" @click="remove(product.id)">Delete</p>
                           </div>
                        </span>
                     </div>
                     <div style="height: 250px; width: max-content;"></div>
                  </div>
               </div>
            </div>
            <div v-if="selectedId != null" class="w-full h-full rounded-lg">
               <edit-product @closeEdit="close()" :id="selectedId  "></edit-product>
            </div>
         </div>
      </div>
   </div>

</div>
</template>

<script>
import EditProduct from "../components/EditProduct.vue";
import { makeRequest } from '@/helpers/api';
export default {
   name: "Admin",
   components: {
      EditProduct
   },
   data() {
      return {
         lstProducts: [],
         selectedId: null,
         showMenuId: null,
      }
   },
   methods: {
      showMenu(productId) {
         this.showMenuId = this.showMenuId == productId ? null : productId;
      },
      async getProduct(cat) {
         let response = await makeRequest({
            url: `product?limit=20&page=1&&category=${cat}`,
            method: 'GET'
         })
         this.lstProducts = response.data;
      },
      async close() {
            setTimeout(() => {
               this.selectedId = null,
               this.getProduct('')
            }, 250);
      },

      async remove(productId) {
         try {
            let response = await makeRequest({
               url: `product/${productId}`,
               method: 'DELETE'
            })  
            if (response.code == 200) {
               this.$toast.success('Produk berhasil dihapus') 
            }
         } catch (error) {
            this.$toast.error(error) 
         }
         setTimeout(() => {
            this.getProduct('');
         }, 250);
      }
   },
   mounted() {
      this.getProduct('');
   },
}
</script>
