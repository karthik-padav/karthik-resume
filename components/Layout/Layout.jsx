import LeftPanel from "components/LeftPanel";
import Footer from "components/Footer";

export default function Layout(props) {
  const { data } = props;
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-1 p-2 md:gap-8 md:p-8 bg-gray-200">
        <div className="">

        <LeftPanel {...data} />
        </div>
        <div className="md:col-span-3 relative flex flex-col justify-between">
          <main>{props.children}</main>
          <div className="bg-white mt-5 rounded-lg overflow-hidden">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
