<template>
   <div class="bg-white rounded-lg flex flex-col h-full justify-between space-y-4">
      <div>
         <figure>
            <img @click="toDetail(product.id)" :src="getImage" class="w-full h-full object-contain cursor-pointer" />
         </figure>
         <p @click="toDetail(product.id)" class="text-sm text-gray-500 cursor-pointer">{{ product.title }}</p>
      </div>
      <p class="flex justify-between text-sm text-gray-600">
         Rp {{ product.price }}
         <span @click="addToCart" class="p-2 text-white bg-blue-400 rounded-tl-lg rounded-br-lg cursor-pointer flex items-center">
            <span class="material-symbols-outlined">add</span>
         </span>
      </p>
   </div>
</template>

<script>
import { apiUrl, makeRequest, unique_key } from "@/helpers/api";
import router from "@/router";
import { useToast } from 'vue-toast-notification';
import { computed } from 'vue';
import debounce from 'lodash.debounce';

export default {
   name: "Card",
   props: {
      product: {
         type: Object,
         required: true,
      },
   },
   setup({ product }) {
      const toast = useToast();

      const getImage = computed(() => `${apiUrl}${unique_key}show/${product.id}`);

      const toDetail = (id) => {
         router.push(`/product/${id}`);
      };

      const addToCart = debounce(async () => {
         try {
            const params = {
               product_id: product.id,
               qty: 1
            };
            const response = await makeRequest({
               url: `cart`,
               method: 'POST',
               data: params
            });
            if (response.code === 200) {
               toast.success('Produk berhasil ditambahkan ke keranjang');
            }
         } catch (error) {
            toast.error('Failed to add product to cart');
            console.log(error);
         }
      }, 300); // Debounce to prevent multiple rapid clicks

      return {
         toDetail,
         addToCart,
         getImage,
      };
   }
};
</script>
