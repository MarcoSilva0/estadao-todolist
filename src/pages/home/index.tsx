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
          <button
            className="p-2 bg-orange-500 hover:bg-orange-600 text-white rounded my-2"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      {data?.map((item: any, index: number) => (
        <li key={index}>
          {item.id} - {item.title}
        </li>
      ))}
    </>
  );
};

export default Home;
