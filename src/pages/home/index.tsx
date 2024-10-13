import InputField from "../../components/atoms/InputField";
import Loading from "../../components/atoms/Loading";
import useHome from "./useHome";

const Home = () => {
  const { data, isLoading, form } = useHome();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <h1>Create TODO Task</h1>
      <div>
        <form onSubmit={form.handleSubmit(form.onSubmit)}>
          <InputField formContext={form} label="Title" name="title" />
          <InputField
            formContext={form}
            label="Description"
            name="description"
          />
          <div className="w-full max-w-sm min-w-[200px]">
            <label
              htmlFor="status"
              className="block mb-2 text-sm text-slate-600"
            >
              Task Status
            </label>
            <select
              {...form.register("status")}
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            >
              {form.STATUS_OPTIONS.map((status, index) => (
                <option key={index} value={status.id}>
                  {status.label}
                </option>
              ))}
            </select>
            {form.errors.status && <span>{form.errors.status.message}</span>}
          </div>
          <button
            className="p-2 w-full max-w-sm min-w-[200px] bg-orange-500 hover:bg-orange-600 text-white rounded my-2"
            type="submit"
          >
            Save
          </button>
        </form>
      </div>
      {data?.map((item: any, index: number) => (
        <li key={index}>
          {item.id} - {item.title} - {item.status}
        </li>
      ))}
    </>
  );
};

export default Home;
