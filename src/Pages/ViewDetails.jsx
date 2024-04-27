import { Helmet } from "react-helmet-async";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGoogle, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { FcPhone } from "react-icons/fc";
import { Link, useLoaderData } from "react-router-dom";
import banner from "../../src/assets/colosseum.jpeg"

const ViewDetails = () => { 

    const viewDetails = useLoaderData()

 const {image, tourists_spot_name, country_Name, location, shortdescription, average_cost, seasonality, travel_time, totalVisitorsPerYear, _id} = viewDetails
    return (
        <div>
            <Helmet>
            <title>{tourists_spot_name} - Find house</title>
            <meta name="description" content={shortdescription} />
        </Helmet>
        <section className="mb-20">
        {/* Hero Section */}
        <div
          className="relative overflow-hidden rounded-2xl bg-cover bg-no-repeat"
          style={{
            backgroundPosition: "100%",
            backgroundImage: `url('${banner}')`,
            height: "300px",
          }}
        >
          <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
            <div className="flex h-full items-center justify-center">
              <div className="px-6 text-center text-white md:px-12">
                <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                  Tourist Spots
                </h1>
                <Link
                  to="/"
                  type="button"
                  className="rounded border-2 mb-5 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* property details */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div className="col-span-3">
            <div className="container  mx-auto md:px-6">
              <section className="mb-32 text-center">
                <div className="mb-12 flex flex-wrap justify-center">
                  <div className="w-full shrink-0 grow-0 basis-auto px-3">
                    <div className="mb-5 text-4xl font-bold">
                      {tourists_spot_name}
                    </div>
                    <div
                      className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      <img src={image} className="w-full" />
                    </div>
                  </div>

                  <div className="w-full shrink-0 mt-5 grow-0 basis-auto px-3 md:w-8/12 xl:w-8/12">
                    <h5 className="mb-3 text-xl font-bold">Short Description</h5>
                    <p className="mb-20 text-center">{shortdescription}</p>
                    <h5 className="mb-5  text-xl font-bold">Information</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <p className="mb-6 text-center">
                        <span className="text-xl font-bold">Country Name:</span> {country_Name}
                      </p>
                      <p className="mb-6 text-center">
                        <span className="text-xl font-bold">Location:</span>{" "}
                        {location}
                      </p>
                      <p className="mb-6 text-center">
                        <span className="text-xl font-bold">Average Cost:</span>{" "}
                        {average_cost}
                      </p>
                      <p className="mb-6 text-center">
                        <span className="text-xl font-bold">Seasonality:</span>{" "}
                        {seasonality}
                      </p>
                      <p className="mb-6 text-center">
                        <span className="text-xl font-bold">Travel Time:</span>{" "}
                        {travel_time}
                      </p>
                      <p className="mb-6 text-center">
                        <span className="text-xl font-bold">Total Visitors  Per Year:</span>{" "}
                        {totalVisitorsPerYear}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          {/* contact form */}
          <div className="col-span-1 mt-7">
            <div>
              <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                  <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <form className="card-body">
                      <div className="flex justify-center items-center gap-5">
                        <img
                          className="w-20 rounded-full"
                          src="https://demo.graygrids.com/themes/estatebit/assets/img/productinfo/agent.jpg"
                          alt=""
                        />
                        <div>
                          <p>Simon Heqburn</p>
                          <p className="flex items-center gap-2">
                            <FcPhone />
                            (123) 123-456
                          </p>
                        </div>
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input
                          type="email"
                          placeholder="email"
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Phone</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Phone"
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control mt-6">
                        <p className="mb-4">
                          I&apos;m interested in this Tourist Spots{" "}
                          <span className="font-bold">[{_id}]</span> and I&apos;d
                          like to know more details.
                        </p>
                        <button className="btn bg-[#1f95ae] text-white">
                          Send Message
                        </button>
                      </div>
                    </form>
                    <div>
                      <div>
                        <h2 className="uppercase text-center font-semibold">
                          Social Media
                        </h2>
                        <div className="flex justify-around p-4">
                          <a className="text-[50px]" href="#">
                            <FaFacebookSquare />
                          </a>
                          <a className="text-[50px]" href="#">
                            <FaTwitter />
                          </a>
                          <a className="text-[50px] " href="#">
                            <FaGoogle />
                          </a>
                          <a className="text-[50px]" href="#">
                            <FaLinkedin />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ViewDetails;