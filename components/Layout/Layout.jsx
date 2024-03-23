import LeftPanel from "components/LeftPanel";
import Footer from "components/Footer";
import Header from "components/Header";

export default function Layout(props) {
  const { data, activeTab = "/" } = props;
  const { menu = [] } = data;
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 bg-gray-200">
        <div className="p-2">
          <LeftPanel {...data} />
        </div>
        <div className="col-span-3 relative flex flex-col justify-between p-2">
          <Header menu={menu} activeTab={activeTab} />
          <main>{props.children}</main>
          <div className="bg-white mt-5 rounded-lg overflow-hidden">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
