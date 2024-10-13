import Loading from "../../components/atoms/loading";
import useHome from "./useHome";

const Home = () => {
  const { data, isLoading } = useHome();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {data?.map((item: any, index: number) => (
        <li key={index}>
          {item.id} - {item.title}
        </li>
      ))}
    </>
  );
};

export default Home;
