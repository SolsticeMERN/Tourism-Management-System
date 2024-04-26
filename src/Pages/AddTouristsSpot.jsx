const AddTouristsSpot = () => {
    return (
        <div>
            <div className="bg-white border md:border-4 rounded-lg shadow relative m-10">

    <div className="flex items-start justify-between p-5 border-b rounded-t">
        <h3 className="text-xl font-semibold">
            Add Tourists Spot
        </h3>
        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="product-modal">
           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
    </div>

    <div className="p-6 space-y-6">
        <form action="#">
            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="product-name" className="text-sm font-medium text-gray-900 block mb-2">tourists_spot_name</label>
                    <input type="text" name="product-name" id="product-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Colosseum”" required=""/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="category" className="text-sm font-medium text-gray-900 block mb-2">country_Name</label>
                    <input type="text" name="category" id="category" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Italy" required=""/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="brand" className="text-sm font-medium text-gray-900 block mb-2">location</label>
                    <input type="text" name="brand" id="brand" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Rome" required=""/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="price" className="text-sm font-medium text-gray-900 block mb-2">average_cost</label>
                    <input type="number" name="price" id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="€14" required=""/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="price" className="text-sm font-medium text-gray-900 block mb-2">seasonality</label>
                    <input type="number" name="price" id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="summer" required=""/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="price" className="text-sm font-medium text-gray-900 block mb-2">travel_time</label>
                    <input type="number" name="price" id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="5-7 days" required=""/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="price" className="text-sm font-medium text-gray-900 block mb-2">image</label>
                    <input type="number" name="price" id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="https://images.pexels.com/photos/3469505/pexels-photo-3469505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" required=""/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="price" className="text-sm font-medium text-gray-900 block mb-2">totalVisitorsPerYear</label>
                    <input type="number" name="price" id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="6000000" required=""/>
                </div>
                
                <div className="col-span-full">
                    <label htmlFor="product-details" className="text-sm font-medium text-gray-900 block mb-2">shortdescription</label>
                    <textarea id="product-details" rows="6" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="Ancient amphitheater for gladiator contests"></textarea>
                </div>
            </div>
        </form>
    </div>

    <div className="p-6 border-t border-gray-200 rounded-b">
        <button className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Add Product</button>
    </div>

</div>
        </div>
    );
};

export default AddTouristsSpot;