import Sidebar from "@/components/seller-hub/sidebar";
import TopBar from "@/components/seller-hub/top-bar";
import WelcomeSection from "@/components/seller-hub/welcome-section";
import LearningPath from "@/components/seller-hub/learning-path";
import RecommendedCourses from "@/components/seller-hub/recommended-courses";
import LearningHistory from "@/components/seller-hub/learning-history";
import KeyTopics from "@/components/seller-hub/key-topics";
import UpcomingWebinars from "@/components/seller-hub/upcoming-webinars";

export default function SellerHub() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 bg-background">
        <TopBar />
        <div className="p-6 space-y-8">
          <WelcomeSection />
          <LearningPath />
          <RecommendedCourses />
          <LearningHistory />
          <KeyTopics />
          <UpcomingWebinars />
        </div>
      </main>
    </div>
  );
}
