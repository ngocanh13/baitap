import { productService } from "./services/product"

export const detailProduct = async (params) => {
    const { data: product } = await productService.getDetailProduct(params.data.id);
    console.log("product", product);

    document.getElementById('app').innerHTML = `Sản phẩm ${params.data.id} 
    
    <div class="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg">
        <div class="relative">
            <img class="w-full" src="${product.thumbnail}">
            <div class="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">SALE</div>
        </div>
        <div class="p-4">
            <h3 class="text-lg font-medium mb-2">${product.name}</h3>
            <p class="text-gray-600 text-sm mb-4"></p>
            <div class="flex items-center justify-between">
                <span class="font-bold text-lg">$${product.price}</span>
                <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Mua ngay</button>
            </div>
        </div>
    </div>`;
}
