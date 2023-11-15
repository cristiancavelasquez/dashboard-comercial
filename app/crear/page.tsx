import FormCrear from "./FormCrear";
interface Props {}

const page = (props: Props) => {
  return (
    <section className="w-full flex justify-center">
      <div className="w-96 flex items-center justify-center bg-white rounded-3xl py-5 border-2 shadow-lg my-4">
        <FormCrear />
      </div>
    </section>
  );
};

export default page;
