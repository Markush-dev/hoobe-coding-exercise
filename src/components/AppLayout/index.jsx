import Footer from "../Footer";
import Header from "../Header";

const AppLayout = ({children}) => {
  return (
    <div className="App">
      <Header/>
      {children}
      <Footer />
    </div>
  );
}

export default AppLayout;