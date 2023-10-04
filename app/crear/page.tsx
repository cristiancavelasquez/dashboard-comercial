import FormCrear from "./FormCrear";
interface Props {}

const page = (props: Props) => {
  return (
    <div className="w-full flex items-center justify-center">
      <FormCrear />
    </div>
  );
};

export default page;
