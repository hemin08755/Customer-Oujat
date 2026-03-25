import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Shipper from "./pages/Shipper";
import Individual from "./pages/Individual";
import Business from "./pages/Business";
import Otp from "./pages/Otp";
import SubscriptionIndividual from "./pages/SubscriptionIndividual";
import SubscriptionBusiness from "./pages/SubscriptionBusiness.jsx";
import ShipperDashboard from "./components/Sidebar.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Quotes from "./pages/Dashboard/Quotes.jsx";
import Orders from "./pages/Dashboard/Orders.jsx";
import Chat from "./pages/Dashboard/Chat.jsx";
import Payments from "./pages/Dashboard/Payments.jsx";
import Team from "./pages/Dashboard/Team.jsx";
import Address from "./pages/Dashboard/Address.jsx";
import Dispute from "./pages/Dashboard/Dispute.jsx";
import Analytics from "./pages/Dashboard/Analytics.jsx";
import Subscriptions from "./pages/Dashboard/Subscriptions.jsx";
import Navbar from "./components/Navbar.jsx";
import OpenRequests from "./pages/Dashboard/QMS/OpenRequests.jsx";
import PrivateRequests from "./pages/Dashboard/QMS/PrivateRequests.jsx";
import PickedQuotes from "./pages/Dashboard/QMS/PickedQuote.jsx";
import ExpiredRequests from "./pages/Dashboard/QMS/ExpiredRequests.jsx";
import RejectedQuotes from "./pages/Dashboard/QMS/RejectedQuotes.jsx";
import NewRequest from "./pages/Dashboard/QMS/NewRequest.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/shipper" element={<Shipper />} />
        <Route path="/individual" element={<Individual />} />
        <Route path="/business" element={<Business />} />
        <Route path="/otp" element={<Otp />} />

        <Route
          path="/subscriptionindividual"
          element={<SubscriptionIndividual />}
        />
        <Route
          path="/subscriptionBusiness"
          element={<SubscriptionBusiness />}
        />
        <Route path="/shipperdashboard" element={<ShipperDashboard />} />
        <Route path="/Navbar" element={<Navbar />} />
        {/* side bar */}
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Quotes" element={<Quotes />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Payments" element={<Payments />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Address" element={<Address />} />
        <Route path="/Dispute" element={<Dispute />} />
        <Route path="/Subscriptions" element={<Subscriptions />} />
        <Route path="/Analytics" element={<Analytics />} />

        {/* QMS */}
        <Route path="/open" element={<OpenRequests />} />
        <Route path="/private" element={<PrivateRequests />} />
        <Route path="/picked" element={<PickedQuotes />} />
        <Route path="/expired" element={<ExpiredRequests />} />
        <Route path="/rejected" element={<RejectedQuotes />} />

        <Route path="/newrequest" element={<NewRequest />} />
      </Routes>
    </Router>
  );
}

export default App;
