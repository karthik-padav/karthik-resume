import LeftPanel from "components/LeftPanel";
import Footer from "components/Footer";
import Header from "components/Header";

export default function Layout(props) {
  const { data, activeTab = "/" } = props;
  const { menu = [] } = data;
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="container py-4 mx-auto grid grid-cols-1 md:grid-cols-5 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg">
          <LeftPanel {...data} />
        </div>
        <div className="col-span-4 md:col-span-4 sm:col-span-2 relative flex flex-col justify-between">
          <Header menu={menu} activeTab={activeTab} />
          <main>{props.children}</main>
          <div className="bg-white mt-5 rounded-lg overflow-hidden">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
