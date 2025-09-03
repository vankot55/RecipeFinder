import Sidebar from "@/components/seller-hub/sidebar";
import TopBar from "@/components/seller-hub/top-bar";
import WelcomeSection from "@/components/seller-hub/welcome-section";
import StatusDashboard from "@/components/seller-hub/status-dashboard";
import LearningPath from "@/components/seller-hub/learning-path";
import AssignedCourse from "@/components/seller-hub/assigned-course";
import ShopOpportunities from "@/components/seller-hub/shop-opportunities";
import QuickTips from "@/components/seller-hub/quick-tips";
import RecommendedCourses from "@/components/seller-hub/recommended-courses";
import LearningHistory from "@/components/seller-hub/learning-history";
import KeyTopics from "@/components/seller-hub/key-topics";
import PodcastSection from "@/components/seller-hub/podcast-section";

export default function SellerHub() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1">
        <TopBar />
        <div className="p-8 space-y-8">
          <WelcomeSection />
          <StatusDashboard />
          <LearningPath />
          <AssignedCourse />
          <ShopOpportunities />
          <QuickTips />
          <RecommendedCourses />
          <LearningHistory />
          <KeyTopics />
          <PodcastSection />
        </div>
      </main>
    </div>
  );
}
