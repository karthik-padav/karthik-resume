import LeftPanel from "components/LeftPanel";
import Footer from "components/Footer";

export default function Layout(props) {
  const { data } = props;
  return (
    <>
      <div className="grid grid-cols-4 gap-8 p-8 bg-gray-200">
        <LeftPanel {...data} />
        <div className="col-span-3 relative flex flex-col justify-between">
          <main>{props.children}</main>
          <div className="bg-white mt-5 rounded-lg overflow-hidden">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
