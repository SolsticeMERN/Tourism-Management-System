import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const AddTouristsSpot = () => {
   const {user} = useContext(AuthContext)
   console.log(user);

    const handleAddTouristSpot = e => {
        e.preventDefault();
        const tourists_spot_name = e.target.tourists_spot_name.value;
        const country_Name = e.target.country_Name.value;
        const average_cost = e.target.average_cost.value;
        const seasonality = e.target.seasonality.value;
        const travel_time = e.target.travel_time.value;
        const location = e.target.location.value;
        const totalVisitorsPerYear = e.target.totalVisitorsPerYear.value;
        const shortdescription = e.target.shortdescription.value;
        const image = e.target.image.value;

        const newTouristSpot = {
            tourists_spot_name,
            country_Name,
            location,
            average_cost,
            seasonality,
            travel_time,
            image,
            totalVisitorsPerYear,
            shortdescription,
            email: user.email,
            displayName: user.displayName
        }


        console.log(newTouristSpot);
        fetch('https://tourism-management-server-sand.vercel.app/tourismSpots', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTouristSpot)
        })
        .then(res => res.json())
        .then(data => {
             console.log(data);
             if(data.insertedId){
                 Swal.fire({
                     icon:'success',
                     title: 'Tourist Spot Added Successfully',
                     showConfirmButton: false,
                     timer: 1500
                 })
                //  e.target.reset();
             }
         })
        
    }






    return (
        <div>
             <Helmet>
        <title>Add TouristsSpot- TTravol</title>
        <meta name="description" content="Description of Register" />
      </Helmet>
            <div className="bg-white border md:border-4 rounded-lg shadow relative m-10">

    <div className="flex items-start justify-between p-5 border-b rounded-t">
        <h3 className="text-xl font-semibold">
            Add Tourists Spot
        </h3>
        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="tourists-modal">
           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
    </div>

    <div className="p-6 space-y-6">
        <form onSubmit={handleAddTouristSpot}>
            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="tourists_spot_name" className="text-sm font-medium text-gray-900 block mb-2">tourists_spot_name</label>
                    <input type="text" name="tourists_spot_name" id="tourists_spot_name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Colosseum”" required=""/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="country_Name" className="text-sm font-medium text-gray-900 block mb-2">country_Name</label>
                    <input type="text" name="country_Name" id="country_Name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Italy" required=""/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="location" className="text-sm font-medium text-gray-900 block mb-2">location</label>
                    <input type="text" name="location" id="location" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Rome" required=""/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="average_cost" className="text-sm font-medium text-gray-900 block mb-2">average_cost</label>
                    <input type="text" name="average_cost" id="average_cost" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="€14" required=""/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="seasonality" className="text-sm font-medium text-gray-900 block mb-2">seasonality</label>
                    <input type="text" name="seasonality" id="seasonality" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="summer" required=""/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="travel_time" className="text-sm font-medium text-gray-900 block mb-2">travel_time</label>
                    <input type="text" name="travel_time" id="travel_time" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="5-7 days" required=""/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="image" className="text-sm font-medium text-gray-900 block mb-2">image</label>
                    <input type="text" name="image" id="image" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="https://images.pexels.com/photos/3469505/pexels-photo-3469505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" required=""/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="totalVisitorsPerYear" className="text-sm font-medium text-gray-900 block mb-2">totalVisitorsPerYear</label>
                    <input type="text" name="totalVisitorsPerYear" id="totalVisitorsPerYear" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="6000000" required=""/>
                </div>
                
                <div className="col-span-full">
                    <label htmlFor="shortdescription" className="text-sm font-medium text-gray-900 block mb-2">shortdescription</label>
                    <textarea id="shortdescription" name="shortdescription" rows="6" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="Ancient amphitheater for gladiator contests"></textarea>
                </div>
            </div>
            <div className=" pt-5 border-t border-gray-200 rounded-b">
        <button className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Add tourists Spot</button>
    </div>
        </form>
    </div>

</div>
        </div>
    );
};

export default AddTouristsSpot;