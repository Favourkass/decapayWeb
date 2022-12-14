// import { PersistGate } from 'redux-persist/integration/react'
// import { Provider } from 'react-redux'
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import ForgotPassword from "./pages/auth/forgetPassword";
import LoginPage from "./pages/auth/login";
import ResetPassword from "./pages/auth/resetPassword";
import Signup from "./pages/auth/SignupPage";
import BudgetDetail from "./pages/budget/budgetDetail/Index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./utils/protectedRoute";
import Budget from "./pages/budget/listBudget/Index";
import BudgetCategory from "./pages/budget/budgetCategory/Index";
import Expenses from "./pages/budget/expenses/Expenses";
import ListBudget from "./pages/dashboard/Index";
import Homepage from "./pages/homepage/index";
import UserProfile from "./pages/user/userProfile/userProfile";
import ChangePassword from "./pages/user/changePassword/index";
import ErrorPage from "./pages/erroHandler/ErrorPage";
import ErrorBoundary from "./pages/erroHandler/ErrorBoundary";
import "./App.css";


function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <ToastContainer limit={1} style={{ fontSize: "16px" }} />
        <Routes>
        <Route path="*" element={<ErrorPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Homepage />} />
          <Route
            path="/budgetDetail/expenses"
            element={
              <PrivateRoute>
                <Expenses />
              </PrivateRoute>
            }
          />

          <Route
            path="/home"
            element={
              <PrivateRoute>
                <ListBudget />
              </PrivateRoute>
            }
          />
          <Route
            path="/budgets"
            element={
              <PrivateRoute>
                <Budget />
              </PrivateRoute>
            }
          />
          <Route
            path="/myProfile"
            element={
              <PrivateRoute>
                <UserProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="/changePassword"
            element={
              <PrivateRoute>
                <ChangePassword />
              </PrivateRoute>
            }
          />
          <Route
            path="/budgetDetail/:id"
            element={
              <PrivateRoute>
                <BudgetDetail />
              </PrivateRoute>
            }
          />

          <Route
            path="/budgetCategory"
            element={
              <PrivateRoute>
                <BudgetCategory />
              </PrivateRoute>
            }
          />
          <Route path="/register" element={<Signup />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
        </Routes>
      </div>
    </ErrorBoundary>
  );
}

export default App;
