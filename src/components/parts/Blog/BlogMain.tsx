import React, { useState, useEffect } from "react";
import type { MediumPost } from "../../../services/types";
import { fetchMediumPosts } from "../../../services/mediumService";
import BlogCard from "./BlogCard";
import SkeletonCard from "./SkeletonCard";
import { AlertCircle, ExternalLink, RefreshCcw } from "lucide-react";

const USER = "larrylambert269";

const App: React.FC = () => {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [username] = useState<string>(USER); // Default user

  const loadPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchMediumPosts(username);
      // Take only the first 3
      setPosts(data.items.slice(0, 3));
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred while fetching posts"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-background text-foreground transition-colors duration-300">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="inline-block px-5 py-2 mb-6 text-[10px] font-bold tracking-[0.2em] text-primary bg-secondary/50 rounded-full border border-primary/5 uppercase">
          FROM OUR BLOG
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-primary mb-8 tracking-tight">
          Latest News & Insights
        </h1>
        <p className="text-lg text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed text-balance">
          Stay updated with the latest trends in technology, engineering, and
          design from the Leafclutch team.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          [1, 2, 3].map((n) => <SkeletonCard key={n} />)
        ) : error ? (
          <div className="col-span-full py-12 flex flex-col items-center justify-center text-center">
            <div className="bg-destructive/10 p-4 rounded-full mb-4">
              <AlertCircle size={32} className="text-destructive" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Failed to load posts
            </h3>
            <p className="text-muted-foreground mb-6">{error}</p>
            <button
              onClick={loadPosts}
              className="flex items-center space-x-2 px-6 py-2.5 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-all shadow-sm"
            >
              <RefreshCcw size={18} />
              <span>Retry Fetch</span>
            </button>
          </div>
        ) : posts.length > 0 ? (
          posts.map((post, index) => (
            <BlogCard key={post.guid} post={post} index={index} />
          ))
        ) : (
          <div className="col-span-full py-20 text-center">
            <p className="text-muted-foreground text-lg">
              No articles found for this user.
            </p>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="mt-16 text-center">
        <a
          href={`https://medium.com/@${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-10 py-3.5 text-lg font-bold text-primary bg-transparent border-2 border-primary rounded-2xl hover:bg-primary/5 transition-all gap-2 group"
        >
          <span>View All Articles</span>
          <ExternalLink
            size={20}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </div>
  );
};

export default App;
