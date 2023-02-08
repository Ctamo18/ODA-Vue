<template>
 
  <div class="col-md-12" style="width: 1120px;">
   
    <div class="container">
      <table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
        <thead class="text-white">
          <tr class="bg-primary -400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
            <th class="p-3 text-left">id</th>
            <th class="p-3 text-left">titre</th>
            <th class="p-3 text-left">description</th>
            <th class="p-3 text-left">status</th>
            <th class="p-3 text-left">date de dubut</th>
            <th class="p-3 text-left">date de fin</th>
            <th class="p-3 text-left" width="110px">Actions</th>
          </tr>
         
        </thead>
        <tbody class="flex-1 sm:flex-none">
          <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
            <td class="border-grey-light border hover:bg-gray-100 p-3"></td>
            <td class="border-grey-light border hover:bg-gray-100 p-3 truncate"></td>
            <td class="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">Delete</td>
          </tr>
          
        </tbody>
      </table>
    </div></div>
</template>
<script>
    export default{
        name :'ProjetView'
    }
</script>