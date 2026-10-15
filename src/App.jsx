import "./App.css";
import Header from "./components/Header/Header";
import { HomePage } from "./pages/HomePage";
import Footer from "./components/Footer/Footer";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import PlatformPage from "./pages/PlatformPage";
import SolutionPage from "./pages/SolutionPage";
import ResourcesPage from "./pages/ResourcesPage";
import OnboardingScreen from "./pages/Dashboard/OnboardingScreen";
import CreateAccountPage from "./pages/auth/CreateAccountPage/CreateAccountPage";
import SetPasswordPage from "./pages/auth/SetPasswordPage/SetPasswordPage";
import SignInPage from "./pages/auth/SignInPage/SignInPage";
import VerifyEmailPage from "./pages/auth/VerifyEmailPage/VerifyEmailPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage/ForgotPasswordPage";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage/ResetPasswordPage";
import ChangePasswordPage from "./pages/auth/ChangePasswordPage/ChangePasswordPage";
import DeactivateAccountPage from "./pages/auth/DeactivateAccountPage/DeactivateAccountPage";
import AccountPage from "./pages/auth/AccountPage/AccountPage";
import ProtectedRoute from "./auth/ProtectedRoute";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import DashboardHome from "./pages/Dashboard/DashboardHome";
import ObligationsPage from "./pages/Dashboard/ObligationsPage";
import AICopilotPage from "./pages/Dashboard/AICopilotPage";
import ModulePage from "./pages/Dashboard/ModulePage";
import CalendarPage from "./pages/Dashboard/CalendarPage";
import AIAnalystPage from "./pages/Dashboard/AIAnalystPage";
import TasksApprovalsPage from "./pages/Dashboard/TasksApprovalsPage";
import ReportsPage from "./pages/Dashboard/ReportsPage";
import UBOGraphPage from "./pages/Dashboard/UBOGraphPage";
import ShareholdersPage from "./pages/Dashboard/ShareholdersPage";
import RiskScoringPage from "./pages/Dashboard/RiskScoringPage";
import AMLPage from "./pages/Dashboard/AMLPage";
import KYCPage from "./pages/Dashboard/KYCPage";
import LicensesPage from "./pages/Dashboard/LicensesPage";

const AUTH_PATHS = new Set([
  "/signup",
  "/signup/password",
  "/login",
  "/verify-email",
  "/forgot-password",
  "/reset-password",
  "/account/change-password",
  "/account/deactivate",
]);

function usesAuthShell(pathname) {
  return (
    AUTH_PATHS.has(pathname) ||
    pathname === "/on-boarding" ||
    pathname === "/account" ||
    pathname.startsWith("/account/") ||
    pathname.startsWith("/dashboard")
  );
}

function App() {
  const { pathname } = useLocation();
  const showMarketingShell = !usesAuthShell(pathname);

  return (
    <>
      {showMarketingShell ? <Header /> : null}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/platform" element={<PlatformPage />} />
        <Route path="/solutions" element={<SolutionPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/signup" element={<CreateAccountPage />} />
        <Route path="/signup/password" element={<SetPasswordPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/sign-in" element={<Navigate to="/login" replace />} />
        <Route path="/verify-email" element={<VerifyEmailPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <AccountPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/account/profile"
          element={<Navigate to="/account" replace />}
        />
        <Route
          path="/account/change-password"
          element={
            <ProtectedRoute>
              <ChangePasswordPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/account/deactivate"
          element={
            <ProtectedRoute>
              <DeactivateAccountPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/on-boarding"
          element={
            <ProtectedRoute>
              <OnboardingScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <DashboardRoutes />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
      {showMarketingShell ? (
        <Footer resourcesPage={pathname === "/resources"} />
      ) : null}
    </>
  );
}

function DashboardRoutes() {
  return (
    <Routes>
      <Route index element={<DashboardHome />} />
      <Route path="obligations" element={<ObligationsPage />} />
      <Route path="ai-copilot" element={<AICopilotPage />} />
      <Route path="calendar" element={<CalendarPage />} />
      <Route path="ai-analyst" element={<AIAnalystPage />} />
      <Route path="tasks" element={<TasksApprovalsPage />} />
      <Route path="reports" element={<ReportsPage />} />
      <Route path="ubo" element={<UBOGraphPage />} />
      <Route path="shareholders" element={<ShareholdersPage />} />
      <Route path="risk-scoring" element={<RiskScoringPage />} />
      <Route path="aml" element={<AMLPage />} />
      <Route path="kyc" element={<KYCPage />} />
      <Route path="licenses" element={<LicensesPage />} />
      {[
        "regulatory",
        "corporate",
      ].map((module) => (
        <Route
          key={module}
          path={module}
          element={<ModulePage module={module} />}
        />
      ))}
    </Routes>
  );
}

export default App;
