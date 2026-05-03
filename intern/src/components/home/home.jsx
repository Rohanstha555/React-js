import { Link } from "react-router-dom";
import Card from "../product-card/card";

function Home() {
  return (
    <div className="text-center py-20 px-6">
      <span className="inline-block bg-gray-100 text-gray-500 text-xs font-medium px-4 py-1.5 rounded-full mb-5">
        Welcome to My Project
      </span>
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 leading-tight mb-4">
        Build something
        <br />
        great today
      </h1>
      <p className="text-gray-500 text-base max-w-sm mx-auto mb-8 leading-relaxed">
        A simple, clean starting point for your next big idea. Get up and
        running in minutes.
      </p>
      <div className="flex gap-3 justify-center">
        <Link
          to="/login"
          className="bg-gray-900 text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:opacity-85 transition-opacity"
        >
          Get Started
        </Link>
        <Link
          to="/about"
          className="border border-gray-200 text-gray-900 px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-gray-50 transition-colors"
        >
          Learn More
        </Link>
      </div>


      <Card/>
    </div>
  );
}
export default Home;
