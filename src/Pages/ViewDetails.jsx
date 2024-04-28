import { FaFacebookSquare } from "react-icons/fa";
import { FaGoogle, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { FcPhone } from "react-icons/fc";
import { Link, useLoaderData } from "react-router-dom";
import banner from "../../src/assets/colosseum.jpeg";
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlinePound } from "react-icons/ai";
import { IoTimeOutline } from "react-icons/io5";
import { MdPeopleOutline } from "react-icons/md";
import { Helmet } from "react-helmet-async";

const ViewDetails = () => {
  const viewDetails = useLoaderData();
  console.log(viewDetails);

  const {
    image,
    tourists_spot_name,
    country_Name,
    location,
    shortdescription,
    average_cost,
    seasonality,
    travel_time,
    totalVisitorsPerYear,
    _id,
  } = viewDetails;
  return (
    <div>
        <Helmet>
        <title>{tourists_spot_name}- TTravol</title>
        <meta name="description" content="Description of Register" />
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
      {/* Tourists Spot details */}
      <div className="rounded-2xl ">
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

                  <div className="w-full dark:bg-slate-50 text-black shrink-0 mt-5 grow-0 basis-auto px-3 rounded-2xl p-10">
                    <h5 className="mb-3 text-2xl font-bold">
                      Short Description
                    </h5>
                    <p className="mb-20 text-center">{shortdescription}</p>
                    <h5 className="mb-5  text-2xl font-bold">Information</h5>
                    <div className="grid grid-cols-1 p-2 md:p-10 lg:grid-cols-2">
                      <p className="mb-6 text-center flex gap-2 items-center space-x-10">
                        <SlLocationPin className="text-xl" />{" "}
                        <span className="text-xl ">Country Name:</span>
                        {country_Name}
                      </p>
                      <p className="mb-6 text-center flex  gap-2 items-center space-x-10">
                        <CiLocationOn className="text-xl" />{" "}
                        <span className="text-xl ">Location:</span> {location}
                      </p>
                      <p className="mb-6 text-center flex gap-2  items-center space-x-10">
                        <AiOutlinePound className="text-xl" />{" "}
                        <span className="text-xl ">Average Cost:</span>{" "}
                        {average_cost}
                      </p>
                      <p className="mb-6 text-center flex gap-2  items-center space-x-10">
                        <CiCalendar className="text-xl" />{" "}
                        <span className="text-xl ">Seasonality:</span>{" "}
                        {seasonality}
                      </p>
                      <p className="mb-6 text-center flex gap-2  items-center space-x-10">
                        <IoTimeOutline className="text-xl" />{" "}
                        <span className="text-xl ">Travel Time:</span>{" "}
                        {travel_time}
                      </p>
                      <p className="mb-6 text-center flex gap-2  items-center space-x-10 ">
                        {" "}
                        <MdPeopleOutline className="text-xl" />
                        <span className="text-xl ">
                          Total Visitors Per Year:
                        </span>{" "}
                        {totalVisitorsPerYear}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          {/* contact form */}
          <div className="col-span-1 mt-14 dark:bg-slate-50 rounded-2xl">
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
                          <span className="font-bold">[{_id}]</span> and
                          I&apos;d like to know more details.
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
