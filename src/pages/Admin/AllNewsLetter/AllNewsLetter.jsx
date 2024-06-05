import { useQuery } from "@tanstack/react-query";
import { fetchNewsletter } from "../../../Api/Api";
const AllNewsLetter = () => {
  const { data: allnewsletter = [] } = useQuery({
    queryKey: ["allnewsletter"],
    queryFn: fetchNewsletter,
  });

  return (
    <div className="w-full overflow-x-auto">
      <table
        className="w-full text-left border border-separate rounded border-slate-200"
        cellspacing="0"
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
              Email
            </th>
          </tr>
          {allnewsletter.map((allnewsletter, index) => (
            <tr className="odd:bg-slate-50" key={allnewsletter._id}>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                {index + 1}
              </td>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                {allnewsletter.email}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllNewsLetter;
