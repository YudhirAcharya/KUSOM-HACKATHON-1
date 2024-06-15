import { FiFolder } from "react-icons/fi";

import { RiUserLocationLine } from "react-icons/ri";
import { IoEllipse } from "react-icons/io5";

import {
  IoEllipse,
  IoPlanet,
  IoArrowUndoSharp,
} from "react-icons/io5";
import { BiRefresh } from "react-icons/bi";
import {
  BsFileEarmark,
  BsArrowReturnLeft,
} from "react-icons/bs";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { TiTickOutline } from "react-icons/ti";
import AddTask from "../components/AddTask";

export default function User() {
  return (
    <>
      <div className="antialiased bg-primary w-full min-h-screen text-textColor relative py-4">
        <div className="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">
          <div
            id="menu"
            className="bg-headingColor col-span-3 rounded-lg p-4 "
          >
            <h1 className="font-bold text-lg lg:text-3xl bg-gradient-to-br from-headingColor via-white to-transparent bg-clip-text text-transparent">
              Dashboard
              <span className="text-indigo-400">.</span>
            </h1>
            <p className="text-slate-400 text-sm mb-2">
              Welcome back,
            </p>
            <div
              href="#"
              className="flex flex-col space-y-2 md:space-y-0 md:flex-row mb-5 items-center md:space-x-2 hover:bg-white/10 group transition duration-150 ease-linear rounded-lg group w-full py-3 px-2"
            >
              <div>
                <img
                  className="rounded-full w-10 h-10 relative object-cover"
                  src="https://img.freepik.com/free-photo/no-problem-concept-bearded-man-makes-okay-gesture-has-everything-control-all-fine-gesture-wears-spectacles-jumper-poses-against-pink-wall-says-i-got-this-guarantees-something_273609-42817.jpg?w=1800&t=st=1669749937~exp=1669750537~hmac=4c5ab249387d44d91df18065e1e33956daab805bee4638c7fdbf83c73d62f125"
                  alt=""
                />
              </div>
              <div>
                <p className="font-medium text-white group-hover:text-indigo-400 leading-4">
                  User Name
                </p>
                <span className="text-xs text-slate-400"></span>
              </div>
            </div>
            <hr className="my-2 border-slate-700" />
            <div
              id="menu"
              className="flex flex-col space-y-2 my-5"
            >
              <a
                href="#"
                className="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group"
              >
                <div className="relative flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                  <div>
                    <FiFolder className="text-indigo-400 w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400">
                      History
                    </p>
                    <p className="text-slate-400 text-sm hidden md:block">
                      Manage History
                    </p>
                  </div>
                  <div className="absolute -top-3 -right-3 md:top-0 md:right-0 px-2 py-1.5 rounded-full bg-indigo-800 text-xs font-mono font-bold">
                    23
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group"
              >
                <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                  <div>
                    <RiUserLocationLine className="text-indigo-400 w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400">
                      Users
                    </p>
                    <p className="text-slate-400 text-sm hidden md:block">
                      Manage users
                    </p>
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group"
              >
                <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                  <div>
                    <IoEllipse className="text-indigo-400 w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400">
                      Settings
                    </p>
                    <p className="text-slate-400 text-sm hidden md:block">
                      Edit settings
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div
            id="content"
            className="bg-white/10 col-span-9 rounded-lg p-6"
          >
            <AddTask />
          </div>
        </div>
        <div
          id="last-users"
          className="mx-[10%] overflow-x-hidden"
        >
          <h1 className="font-bold py-4 uppercase">
            HandyMan for you
          </h1>
          <div className="overflow-x-scroll">
            <table className="w-full whitespace-nowrap">
              <thead className="bg-black/60">
                <tr>
                  <th className="text-left py-3 px-2 rounded-l-lg">
                    Name
                  </th>
                  <th className="text-left py-3 px-2">
                    Email
                  </th>
                  <th className="text-left py-3 px-2">
                    Field of Expertise
                  </th>
                  <th className="text-left py-3 px-2">
                    Fee
                  </th>
                  <th className="text-left py-3 px-2 rounded-r-lg">
                    Approval
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="py-3 px-2 font-bold">
                    <div className="inline-flex space-x-3 items-center">
                      <span>
                        <img
                          className="rounded-full w-8 h-8"
                          src="https://images.generated.photos/tGiLEDiAbS6NdHAXAjCfpKoW05x2nq70NGmxjxzT5aU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTM4ODM1LmpwZw.jpg"
                          alt=""
                        />
                      </span>
                      <span>Handy Man</span>
                    </div>
                  </td>
                  <td className="py-3 px-2">
                    h_email@email.com
                  </td>
                  <td className="py-3 px-2">Expertise</td>
                  <td className="py-3 px-2">Fee</td>
                  <td className="py-3 px-2">
                    <div className="inline-flex items-center ml-4">
                      <a
                        href=""
                        title="Edit"
                        className="hover:text-green-500"
                      >
                        <TiTickOutline className="w-8 h-8" />
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
