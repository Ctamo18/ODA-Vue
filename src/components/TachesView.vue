<template>
  <div >
      
</div>
<div class="col-md-12" style="width: 1120px;">
  <div class="row">
    <div class="container flex-nowrap">
			<div class="flex justify-center px-6 my-12">
				<!-- Row -->
				<div class="w-full xl:w-3/4 lg:w-11/12 flex">
					<!-- Col -->
					<div
						class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
						style="background-image: url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')"
					></div>
					<!-- Col -->
					<div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
						<h3 class="pt-4 text-2xl text-center">Ajouter un produit</h3>
						<form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
							<div class="mb-4 md:flex md:justify-between">
								<div class="mb-4 md:mr-2 md:mb-0">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="nom">
										Nom
									</label>
									<input
										class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="firstName"
										type="text"
										placeholder="Nom du Produit"
									/>
								</div>
								<div class="md:ml-2">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="lastName">
										Code
									</label>
									<input
										class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="lastName"
										type="text"
										placeholder="Code du produit"
									/>
								</div>
							</div>
				
	
							<div class="mb-6 text-center">
								<button
									class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="button"
								>
									Enregistrer
								</button>
							</div>
							<hr class="mb-6 border-t" />
							
						</form>
					</div>
				</div>
			</div>
		</div>
  </div>
  <div class="container">
    <table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
      <thead class="text-white">
        <tr class="bg-primary -400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
          <th class="p-3 text-left">id</th>
          <th class="p-3 text-left">Nom du produit</th>
          <th class="p-3 text-left">code du produit</th>
          <th class="p-3 text-left" width="110px">Actions</th>
        </tr>
        <tr class="bg-primary -400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
          <th class="p-3 text-left">id</th>
          <th class="p-3 text-left">Nom du produit</th>
          <th class="p-3 text-left">code du produit</th>
          <th class="p-3 text-left" width="110px">Actions</th>
        </tr>
        <tr class="bg-primary -400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
          <th class="p-3 text-left">id</th>
          <th class="p-3 text-left">Nom du produit</th>
          <th class="p-3 text-left">code du produit</th>
          <th class="p-3 text-left" width="110px">Actions</th>
        </tr>
        <tr class="bg-primary -400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
          <th class="p-3 text-left">id</th>
          <th class="p-3 text-left">Nom du produit</th>
          <th class="p-3 text-left">code du produit</th>
          <th class="p-3 text-left" width="110px">Actions</th>
        </tr>
      </thead>
      <tbody class="flex-1 sm:flex-none">
        <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
          <td class="border-grey-light border hover:bg-gray-100 p-3"></td>
          <td class="border-grey-light border hover:bg-gray-100 p-3 truncate"></td>
          <td class="border-grey-light border hover:bg-gray-100 p-3 truncate"></td>
          <td class="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">Delete</td>
        </tr>
        
      </tbody>
    </table>
  </div>
           </div> 

</template>
<script>
    export default{
        name:'produitView'
    }
    
</script>
<style>
  html,
  body {
    height: 100%;
  }

  @media (min-width: 640px) {
    table {
      display: inline-table !important;
    }

    thead tr:not(:first-child) {
      display: none;
    }
  }

  td:not(:last-child) {
    border-bottom: 0;
  }

  th:not(:last-child) {
    border-bottom: 2px solid rgba(0, 0, 0, .1);
  }
</style>