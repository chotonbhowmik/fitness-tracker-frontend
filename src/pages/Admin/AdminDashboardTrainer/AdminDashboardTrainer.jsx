import { useQuery } from "@tanstack/react-query";
import { fetchPendingTrainer } from "../../../Api/Api";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
const AdminDashboardTrainer = () => {
  const { data: allPendingTrainers = [] } = useQuery({
    queryKey: ["allPendingTrainers"],
    queryFn: fetchPendingTrainer,
  });
  // const handleUpdateStatus = async (allTrainer) => {
  //   try {
  //     const response = await fetchUpdateTrainer(allTrainer);
  //     console.log(response);
  //     refetch();
  //     toast.success("Status Updated successfully!");
  //   } catch (error) {
  //     console.error("Error updating trainer:", error);
  //   }
  // };

  return (
    <div className="w-full overflow-x-auto">
      <table
        className="w-full text-left border border-separate rounded border-slate-200"
        cellSpacing="0"
      >
        <tbody>
          <tr>
            <th
              scope="col"
              className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Sl
            </th>
            <th
              scope="col"
              className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Name
            </th>
            <th
              scope="col"
              className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Email
            </th>
            <th
              scope="col"
              className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Age
            </th>
            <th
              scope="col"
              className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Time
            </th>
            <th
              scope="col"
              className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Action
            </th>
          </tr>
          {allPendingTrainers.map((allTrainer, index) => (
            <tr className="odd:bg-slate-50" key={allTrainer._id}>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                {index + 1}
              </td>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                {allTrainer.name}
              </td>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                {allTrainer.email}
              </td>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                {allTrainer.age}
              </td>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                {allTrainer.time} H
              </td>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                {/* <button onClick={() => handleUpdateStatus(allTrainer._id)}>
                  update
                </button> */}
                <Link to={`/dashboard/trainer-details/${allTrainer._id}`}>
                  Know more
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
};

export default AdminDashboardTrainer;
