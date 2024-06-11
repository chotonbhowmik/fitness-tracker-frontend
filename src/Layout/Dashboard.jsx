
import {NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
  
const role = useAdmin();
  

  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen shadow">
        <ul className="divide-y divide-slate-100">
          <div></div>
          <li className="flex items-center gap-4 px-4 py-3">
            <div className="flex items-center self-center text-emerald-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
                aria-label="Dashboard icon"
                role="graphics-symbol"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                />
              </svg>
            </div>

            <div className="flex min-h-[2rem] flex-col items-start justify-center gap-0">
              <NavLink to="/">
                {" "}
                <h4 className="text-base text-slate-700 ">Website</h4>
              </NavLink>
            </div>
          </li>
          {role === "admin" && (
            <>
              <li className="flex items-center gap-4 px-4 py-3">
                <div className="flex items-center self-center text-emerald-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                    aria-label="Dashboard icon"
                    role="graphics-symbol"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                    />
                  </svg>
                </div>
                <div className="flex min-h-[2rem] flex-col items-start justify-center gap-0">
                  <NavLink to="all-newsLetter">
                    <h4 className="text-base text-slate-700 ">
                      All NewsLetter
                    </h4>
                  </NavLink>
                </div>
              </li>
              <li className="flex items-center gap-4 px-4 py-3">
                <div className="flex items-center self-center text-emerald-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                    aria-label="Dashboard icon"
                    role="graphics-symbol"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                  </svg>
                </div>
                <div className="flex min-h-[2rem] flex-col items-start justify-center gap-0">
                  <NavLink to="all-trainers">
                    <h4 className="text-base text-slate-700 ">All Trainer</h4>
                  </NavLink>
                </div>
              </li>
              <li className="flex items-center gap-4 px-4 py-3">
                <div className="flex items-center self-center text-emerald-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                    aria-label="User icon"
                    role="graphics-symbol"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="flex min-h-[2rem] flex-col items-start justify-center gap-0">
                  <NavLink to="all-applied-trainer">
                    <h4 className="text-base text-slate-700 ">
                      Applied Trainer
                    </h4>
                  </NavLink>
                </div>
              </li>
              <li className="flex items-center gap-4 px-4 py-3">
                <div className="flex items-center self-center text-emerald-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                    aria-label="Analytics icon"
                    role="graphics-symbol"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                    />
                  </svg>
                </div>
                <div className="flex min-h-[2rem] flex-col items-start justify-center gap-0">
                  <NavLink to="add-class">
                    <h4 className="text-base text-slate-700 ">Add New Class</h4>
                  </NavLink>
                </div>
              </li>
              <li className="flex items-center gap-4 px-4 py-3">
                <div className="flex items-center self-center text-emerald-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                    aria-label="Analytics icon"
                    role="graphics-symbol"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                    />
                  </svg>
                </div>
                <div className="flex min-h-[2rem] flex-col items-start justify-center gap-0">
                  <NavLink to="add-forum">
                    <h4 className="text-base text-slate-700 ">Add Forum</h4>
                  </NavLink>
                </div>
              </li>
              <li className="flex items-center gap-4 px-4 py-3">
                <div className="flex items-center self-center text-emerald-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                    aria-label="Analytics icon"
                    role="graphics-symbol"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                    />
                  </svg>
                </div>
                <div className="flex min-h-[2rem] flex-col items-start justify-center gap-0">
                  <NavLink to="balance">
                    <h4 className="text-base text-slate-700 ">Balance</h4>
                  </NavLink>
                </div>
              </li>
            </>
          )}
          {role === "member" && (
            <>
              <li className="flex items-center gap-4 px-4 py-3">
                <div className="flex items-center self-center text-emerald-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                    aria-label="User icon"
                    role="graphics-symbol"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="flex min-h-[2rem] flex-col items-start justify-center gap-0">
                  <NavLink to="memebr-trainer">
                    <h4 className="text-base text-slate-700 ">
                      Applied Trainer
                    </h4>
                  </NavLink>
                </div>
              </li>
              <li className="flex items-center gap-4 px-4 py-3">
                <div className="flex items-center self-center text-emerald-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                    aria-label="User icon"
                    role="graphics-symbol"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="flex min-h-[2rem] flex-col items-start justify-center gap-0">
                  <NavLink to="profile">
                    <h4 className="text-base text-slate-700 ">Profile</h4>
                  </NavLink>
                </div>
              </li>
            </>
          )}
          {role === "trainer" && (
            <>
              <li className="flex items-center gap-4 px-4 py-3">
                <div className="flex items-center self-center text-emerald-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                    aria-label="Analytics icon"
                    role="graphics-symbol"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                    />
                  </svg>
                </div>
                <div className="flex min-h-[2rem] flex-col items-start justify-center gap-0">
                  <NavLink to="slot">
                    <h4 className="text-base text-slate-700 ">Add New Slot</h4>
                  </NavLink>
                </div>
              </li>
              <li className="flex items-center gap-4 px-4 py-3">
                <div className="flex items-center self-center text-emerald-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                    aria-label="Analytics icon"
                    role="graphics-symbol"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                    />
                  </svg>
                </div>
                <div className="flex min-h-[2rem] flex-col items-start justify-center gap-0">
                  <NavLink to="add-forum">
                    <h4 className="text-base text-slate-700 ">Add Forum</h4>
                  </NavLink>
                </div>
              </li>
              <li className="flex items-center gap-4 px-4 py-3">
                <div className="flex items-center self-center text-emerald-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                    aria-label="Cloud icon"
                    role="graphics-symbol"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
                    />
                  </svg>
                </div>
                <div className="flex min-h-[2rem] flex-col items-start justify-center gap-0">
                  <NavLink to="manage-slot">
                    <h4 className="text-base text-slate-700 ">Manage Slot</h4>
                  </NavLink>
                </div>
              </li>
              <li className="flex items-center gap-4 px-4 py-3">
                <div className="flex items-center self-center text-emerald-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                    aria-label="Dashboard icon"
                    role="graphics-symbol"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="flex min-h-[2rem] flex-col items-start justify-center gap-0">
                  <h4 className="text-base text-slate-700 ">Settings</h4>
                </div>
              </li>
              
            </>
          )}
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
